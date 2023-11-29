import { call, cancel, take } from "redux-saga/effects";
import { categoriasSaga, observarCategorias } from "./categorias";
import categoriasService from "services/categorias";
import { adicionarTodasAsCategorias } from "store/reducers/categorias";
import { createMockTask } from "@redux-saga/testing-utils";

describe("testing categories saga", () => {
  describe("workers", () => {
    it("should be categoriasService.buscar", () => {
      const funcaoGeradora = observarCategorias();
      const funcaoEsperada = call(categoriasService.buscar);

      funcaoGeradora.next(); // delay

      const funcaoexecutada = funcaoGeradora.next(); // toast

      expect(funcaoexecutada.value).toEqual(funcaoEsperada);
    });
  });
  describe("watchers", () => {
    it("should be execute correctly", () => {
      const funcaoGerador = categoriasSaga()
      funcaoGerador.next()
      const funcaoEsperada = take(adicionarTodasAsCategorias)
      
      expect(funcaoGerador.next().value).toEqual(funcaoEsperada)
    });

    it("should be execute correctly only one time", () => {
      const funcaoGerador = categoriasSaga()
      const mockTarefa = createMockTask()
      funcaoGerador.next()
      const funcaoCancelarEsperada = cancel(mockTarefa.cancel())
      funcaoGerador.next()
      
      expect(funcaoGerador.next().value).toEqual(funcaoCancelarEsperada)
    });
  });
});
