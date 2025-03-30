import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import HoursCalculator from "./hours-calculator"

//Tarkistetaan tämä mainitun toimista ja otsikointi, muutoinkin tarkastukset kuten edellisissä.
describe("HoursCalculator", () => {
  test("renders the calculator with correct title", () => {
    render(<HoursCalculator />)
    expect(screen.getByText("Tuntilaskuri")).toBeInTheDocument()
  })

  test("accepts valid numeric input", async () => {
    render(<HoursCalculator />)
    const user = userEvent.setup()
    const mitoitusInput = screen.getByLabelText("Mitoitus")

    await user.type(mitoitusInput, "0.5")
    expect(mitoitusInput.value).toBe("0.5")
  })

  test("calculates hours correctly", async () => {
    render(<HoursCalculator />)
    const user = userEvent.setup()
    const mitoitusInput = screen.getByLabelText("Mitoitus")
    const residentsInput = screen.getByLabelText("Asukkaiden määrä")

    await user.type(mitoitusInput, "0.7")
    await user.type(residentsInput, "10")


    expect(screen.getByText("803.25")).toBeInTheDocument()
  })

  test("handles comma as decimal separator", async () => {
    render(<HoursCalculator />)
    const user = userEvent.setup()
    const mitoitusInput = screen.getByLabelText("Mitoitus")
    const residentsInput = screen.getByLabelText("Asukkaiden määrä")

    await user.type(mitoitusInput, "0,5")
    await user.type(residentsInput, "20")

    expect(screen.getByText("1147.50")).toBeInTheDocument()
  })

  test("shows dash when inputs are missing", () => {
    render(<HoursCalculator />)
    expect(screen.getByText("-")).toBeInTheDocument()
  })
})

