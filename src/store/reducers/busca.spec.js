import buscaReducer, { mudarBusca, resetarBusca } from "./busca";

describe("testing find", () => {
  it("should be able change find how specified", () => {
    expect(buscaReducer("", mudarBusca("teste"))).toEqual("teste");
  });

  it("should be able reset find", () => {
    expect(buscaReducer("find", resetarBusca())).toEqual("");
  });
});
