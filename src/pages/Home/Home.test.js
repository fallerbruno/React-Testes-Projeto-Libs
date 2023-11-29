import { rotaAnuncie, rotaCategoria } from "routes";
import Home from ".";
import { render, screen } from "../../test-utils";
import userEvent from "@testing-library/user-event";
import mockCategorias from "mocks/categorias";

jest.mock("services/categorias");
const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Testing the Home Page", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should be able render the home page", () => {
    render(<Home />);
  });

  it("should be able render categories", async () => {
    render(<Home />);
    const categorias = await screen.findAllByTestId("home-categorias");

    expect(categorias).toHaveLength(2);
  });

  describe("Testing the Categories", () => {
    it('should be able to redirect to "anuncie"', async () => {
      render(<Home />);
      const buttonAdvertise = screen.getByTestId("home-button-advertise");

      userEvent.click(buttonAdvertise);

      expect(mockNavigate).toHaveBeenCalledWith(`/${rotaAnuncie}`);
    });

    it("should be able to redirect to id of category", async () => {
      render(<Home />);
      const categories = await screen.findAllByTestId("home-categorias");

      const firstCategory = categories[0];

      userEvent.click(firstCategory);

      expect(mockNavigate).toHaveBeenCalledWith(
        `/${rotaCategoria}/${mockCategorias[0].id}`
      );
    });
  });
});
