import { useState } from "react"

export default function HoursCalculator() {
  //Tilamuuttujat syötettäville arvoille
  const [mitoitus, setMitoitus] = useState("")
  const [residentsForHours, setResidentsForHours] = useState("")

//Huolii vain määrätyt merkit. Ei esim kirjaimia, sekä piste, pilkuksi. Koska on totuttu käyttämään pilkkua näissä laskuissa.
  const parsekentta = (value) => {
    return value.replace(",", ".").replace(/[^0-9.]/g, "")
  }


//Poistettu käytöstä tässä versiossa. Ei herjata.
  // const validateNumber = (value) => {
  //   if (!value) return false
  //   return /^[0-9]+([.,][0-9]*)?$/.test(value)
  // }

 
  const hoursResult = () => {
    const mitoitusNum = Number.parseFloat(mitoitus)
    const residentsForHoursNum = Number.parseFloat(residentsForHours)
    if (!isNaN(mitoitusNum) && !isNaN(residentsForHoursNum)) {
      const staff = mitoitusNum * residentsForHoursNum
      return (staff * 114.75).toFixed(2)
    }
    return null
  }


  const handleMitoitusChange = (e) => {
    setMitoitus(parsekentta(e.target.value))
  }

  const handleResidentsChange = (e) => {
    setResidentsForHours(parsekentta(e.target.value))
  }


  const handleBlur = (e) => {

  }

  return (
    <div className="bg-white rounded-lg border shadow-sm mb-6">
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-4">Tuntilaskuri</h3>
      </div>
      <div className="p-6 pt-0">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <label htmlFor="mitoitus" className="text-sm font-medium">
              Mitoitus
            </label>
            <input
              id="mitoitus"
              type="text"
              value={mitoitus}
              onChange={handleMitoitusChange}
              onBlur={handleBlur}
              placeholder="Syötä mitoitus"
              className="w-full p-2 border rounded-md border-gray-300"
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="residentsForHours" className="text-sm font-medium">
              Asukkaiden määrä
            </label>
            <input
              id="residentsForHours"
              type="text"
              value={residentsForHours}
              onChange={handleResidentsChange}
              onBlur={handleBlur}
              placeholder="Syötä asukkaiden määrä"
              className="w-full p-2 border rounded-md border-gray-300"
            />
          </div>

          <div className="mt-2">
            <p className="font-medium">Tarvittavat työtunnit viikossa:</p>
            <p className="text-2xl font-bold">{hoursResult() || "-"}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

