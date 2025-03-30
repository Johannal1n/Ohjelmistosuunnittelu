import MitoitusCalculator from "./mitoitus-calculator"
import HoursCalculator from "./hours-calculator"
import DirectWorkCalculator from "./direct-work-calculator"
import DirectWorkPercentCalculator from "./direct-work-percent-calculator"

export default function App() {
  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6 text-center">IKÄIHMISTEN PALVELUIDEN LASKURIT</h1>
      <h2 className="text-3xl font-bold mb-4 text-center">Ympärivuorokautinen asuminen -laskurit</h2>
      <MitoitusCalculator />
      <HoursCalculator />
      <h2 className="text-3xl font-bold mb-4 text-center">Kotihoito ja yhteisöllinen asuminen -laskurit</h2>
      <DirectWorkCalculator />
      <DirectWorkPercentCalculator />
    </div>
  )
}

