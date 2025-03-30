import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import DirectWorkPercentCalculator from "./direct-work-percent-calculator"

//Tarkistetaan tämä mainitun toimista ja otsikointi
describe("DirectWorkPercentCalculator", () => {
  test("renders the calculator with correct title", () => {
    render(<DirectWorkPercentCalculator />)
    expect(screen.getByText("Välittömän työn prosenttilaskuri")).toBeInTheDocument()
  })


//Tarkistetaan hyväksyykö syötekenttä vain numerot.
  test("accepts valid numeric input", async () => {
    render(<DirectWorkPercentCalculator />)
    const user = userEvent.setup()

//Haetaan syötekentät..
    const asiakasHoursInput = screen.getByLabelText("Asiakastyötunnit")

//ja syötetään arvo 50, jolloin tarkistus ja odotellaan että tallentuuko oikein.
    await user.type(asiakasHoursInput, "50")
    expect(asiakasHoursInput.value).toBe("50")
  })

//Testaus että laskenta toimii oikein.
  test("calculates työntekijän kokonaistunnit correctly", async () => {
    render(<DirectWorkPercentCalculator />)
    const user = userEvent.setup()

//Haetaan syötekentät
    const asiakasHoursInput = screen.getByLabelText("Asiakastyötunnit")
    const prosenttiInput = screen.getByLabelText("Välittömän työn prosenttiosuus")

// Syötetään testiarvot
    await user.type(asiakasHoursInput, "50")
    await user.type(prosenttiInput, "60")

//Lukematestaus annetuilla arvoilla eli (50 * 100 / 60 ≈ 83.33)
    expect(screen.getByText("83.33")).toBeInTheDocument()
  })

//Pilkkutestaus syötteessä.
  test("handles comma as decimal separator", async () => {
    render(<DirectWorkPercentCalculator />)
    const user = userEvent.setup()

//Haetaan syötekentät.
    const asiakasHoursInput = screen.getByLabelText("Asiakastyötunnit")
    const prosenttiInput = screen.getByLabelText("Välittömän työn prosenttiosuus")

//Testiarvot pilkkuilla laitettuna.
    await user.type(asiakasHoursInput, "25,5")
    await user.type(prosenttiInput, "75,5")

//Tarkatus tuleeko syötteillä oikea lukema (25.5 * 100 / 75.5 ≈ 33.77)
    expect(screen.getByText("33.77")).toBeInTheDocument()
  })

//- merkiksi, jos ei syötteitä.
  test("shows dash when inputs are missing", () => {
    render(<DirectWorkPercentCalculator />)
    expect(screen.getByText("-")).toBeInTheDocument()
  })
})

