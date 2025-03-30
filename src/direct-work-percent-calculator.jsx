import { useState } from "react"

export default function DirectWorkPercentCalculator() {
  //Tilamuuttujat syötettäville arvoille
  const [asiakasHours2, setAsiakasHours2] = useState("")
  const [prosenttiluku, setProsenttiluku] = useState("")
//Huolii vain määrätyt merkit. Ei esim kirjaimia, sekä piste, pilkuksi. Koska on totuttu käyttämään pilkkua näissä laskuissa.
  const parsekentta = (value) => {
    return value.replace(",", ".").replace(/[^0-9.]/g, "")
  }

  // const validateNumber = (value) => {
  //   if (!value) return false
  //   return /^[0-9]+([.,][0-9]*)?$/.test(value)
  // }

//Laskentakaava ja vastaus kahdella desimaalilla. Ei alle nollan lukemia hyväksytä.
  const valitontyoProsenttiResult = () => {
    const asiakasHours2Num = Number.parseFloat(asiakasHours2)
    const prosenttilukuNum = Number.parseFloat(prosenttiluku)
    if (!isNaN(asiakasHours2Num) && !isNaN(prosenttilukuNum) && prosenttilukuNum > 0) {
      return ((asiakasHours2Num * 100) / prosenttilukuNum).toFixed(2)
    }
    return null
  }


  const handleAsiakasHoursChange = (e) => {
    setAsiakasHours2(parsekentta(e.target.value))
  }

  const handleProsenttilukuChange = (e) => {
    setProsenttiluku(parsekentta(e.target.value))
  }


  const handleBlur = (e) => {

  }

  return (
    <div className="bg-white rounded-lg border shadow-sm mb-6">
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-4">Välittömän työn prosenttilaskuri</h3>
      </div>
      <div className="p-6 pt-0">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <label htmlFor="asiakasHours2" className="text-sm font-medium">
              Asiakastyötunnit
            </label>
            <input
              id="asiakasHours2"
              type="text"
              value={asiakasHours2}
              onChange={handleAsiakasHoursChange}
              onBlur={handleBlur}
              placeholder="Syötä asiakastyötunnit"
              className="w-full p-2 border rounded-md border-gray-300"
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="prosenttiluku" className="text-sm font-medium">
              Välittömän työn prosenttiosuus
            </label>
            <input
              id="prosenttiluku"
              type="text"
              value={prosenttiluku}
              onChange={handleProsenttilukuChange}
              onBlur={handleBlur}
              placeholder="Syötä välittömän työn prosenttiosuus"
              className="w-full p-2 border rounded-md border-gray-300"
            />
          </div>

          <div className="mt-2">
            <p className="font-medium">Työntekijän kokonaistunnit:</p>
            <p className="text-2xl font-bold">{valitontyoProsenttiResult() || "-"}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

