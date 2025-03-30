import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import MitoitusCalculator from "./mitoitus-calculator"

//Tarkistetaan tämä mainitun toimista ja otsikointi, muutoinkin tarkastukset kuten edellisissä.
describe("MitoitusCalculator", () => {
  test("renders the calculator with correct title", () => {
    render(<MitoitusCalculator />)
    expect(screen.getByText("Mitoituslaskuri")).toBeInTheDocument()
  })

  test("accepts valid numeric input", async () => {
    render(<MitoitusCalculator />)
    const user = userEvent.setup()
    const hoursInput = screen.getByLabelText("Työtunnit viikossa")

    await user.type(hoursInput, "100")
    expect(hoursInput.value).toBe("100")
  })

  test("calculates mitoitus correctly", async () => {
    render(<MitoitusCalculator />)
    const user = userEvent.setup()
    const hoursInput = screen.getByLabelText("Työtunnit viikossa")
    const residentsInput = screen.getByLabelText("Asukkaiden määrä")

    await user.type(hoursInput, "114.75")
    await user.type(residentsInput, "10")

    expect(screen.getByText("0.10")).toBeInTheDocument()
  })

  test("handles comma as decimal separator", async () => {
    render(<MitoitusCalculator />)
    const user = userEvent.setup()
    const hoursInput = screen.getByLabelText("Työtunnit viikossa")
    const residentsInput = screen.getByLabelText("Asukkaiden määrä")

    await user.type(hoursInput, "229,5")
    await user.type(residentsInput, "10")

    expect(screen.getByText("0.20")).toBeInTheDocument()
  })

  test("shows dash when inputs are missing", () => {
    render(<MitoitusCalculator />)
    expect(screen.getByText("-")).toBeInTheDocument()
  })
})

