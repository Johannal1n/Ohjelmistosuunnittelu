import { useState } from "react"

export default function MitoitusCalculator() {
//tilamuuttujat syötteille.
  const [hours, setHours] = useState("")
  const [residents, setResidents] = useState("")

//Huolii vain määrätyt merkit. Ei esim kirjaimia, sekä piste, pilkuksi. Koska on totuttu käyttämään pilkkua näissä laskuissa.
  const parsekentta = (value) => {
    return value.replace(",", ".").replace(/[^0-9.]/g, "")
  }
//Pois käytöstä.
  // const validateNumber = (value) => {
  //   if (!value) return false
  //   return /^[0-9]+([.,][0-9]*)?$/.test(value)
  // }


  const mitoitusResult = () => {
    const hoursNum = Number.parseFloat(hours)
    const residentsNum = Number.parseFloat(residents)
    if (!isNaN(hoursNum) && !isNaN(residentsNum) && residentsNum > 0) {
      const staff = hoursNum / 114.75
      return (staff / residentsNum).toFixed(2)
    }
    return null
  }


  const handleHoursChange = (e) => {
    setHours(parsekentta(e.target.value))
  }

  const handleResidentsChange = (e) => {
    setResidents(parsekentta(e.target.value))
  }


  const handleBlur = (e) => {

  }

  return (
    <div className="bg-white rounded-lg border shadow-sm mb-6">
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-4">Mitoituslaskuri</h3>
      </div>
      <div className="p-6 pt-0">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <label htmlFor="hours" className="text-sm font-medium">
              Työtunnit viikossa
            </label>
            <input
              id="hours"
              type="text"
              value={hours}
              onChange={handleHoursChange}
              onBlur={handleBlur}
              placeholder="Syötä työtunnit"
              className="w-full p-2 border rounded-md border-gray-300"
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="residents" className="text-sm font-medium">
              Asukkaiden määrä
            </label>
            <input
              id="residents"
              type="text"
              value={residents}
              onChange={handleResidentsChange}
              onBlur={handleBlur}
              placeholder="Syötä asukkaiden määrä"
              className="w-full p-2 border rounded-md border-gray-300"
            />
          </div>

          <div className="mt-2">
            <p className="font-medium">Mitoitus:</p>
            <p className="text-2xl font-bold">{mitoitusResult() || "-"}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

