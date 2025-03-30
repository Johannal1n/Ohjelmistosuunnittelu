import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import DirectWorkCalculator from "./direct-work-calculator"

//Testataan DErectWorkCalulatorin toiminta.
describe("DirectWorkCalculator", () => {
  test("renders the calculator with correct title", () => { //Näkyykö otsikko.
    render(<DirectWorkCalculator />)
    expect(screen.getByText("Välittömän työn laskuri")).toBeInTheDocument()
  })

//Tarkistetaan hyväksyykö syötekenttä vain numerot.
  test("accepts valid numeric input", async () => {
    render(<DirectWorkCalculator />)
    const user = userEvent.setup()

//Haetaan asiakastuntien syötekenttä...
    const asiakasHoursInput = screen.getByLabelText("Asiakastyötunnit")

// ...ja syötetään arvo 50, jolloin tarkistus ja odotellaan että tallentuuko oikein.
    await user.type(asiakasHoursInput, "50")
    expect(asiakasHoursInput.value).toBe("50")
  })

//Tesaus että laskenta toimii oikein.
  test("calculates välittömän työn osuus correctly", async () => {
    render(<DirectWorkCalculator />)
    const user = userEvent.setup()

//Haetaan syötekentät
    const asiakasHoursInput = screen.getByLabelText("Asiakastyötunnit")
    const tyontekijaHoursInput = screen.getByLabelText("Työntekijän kokonaistunnit")

//Syötetään alla olevat testiarvot
    await user.type(asiakasHoursInput, "50")
    await user.type(tyontekijaHoursInput, "100")

//Tarkastaa onko näillä syötteillä oikea tulos: (50 / 100 * 100 = 50.00)
    expect(screen.getByText("50.00")).toBeInTheDocument()
  })

//Tarkistetaan onko pilkku desimaalierottimena.
  test("handles comma as decimal separator", async () => {
    render(<DirectWorkCalculator />)
    const user = userEvent.setup()

//Haetaan syötekentät tähän testaukseen.
    const asiakasHoursInput = screen.getByLabelText("Asiakastyötunnit")
    const tyontekijaHoursInput = screen.getByLabelText("Työntekijän kokonaistunnit")

//Syötetään testiarvot
    await user.type(asiakasHoursInput, "25,5")
    await user.type(tyontekijaHoursInput, "75,5")

//Tarksitetaan tuleeko oikea tulos syötetyillä testiarvoilla
    expect(screen.getByText("33.77")).toBeInTheDocument()
  })

  //Jos syötteitä ei ole annettu, niin tarkistetaan, että tuleeko - merkki.
  test("shows dash when inputs are missing", () => {
    render(<DirectWorkCalculator />)
    expect(screen.getByText("-")).toBeInTheDocument()
  })
})

