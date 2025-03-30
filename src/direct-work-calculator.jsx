import { useState } from "react"

export default function DirectWorkCalculator() {
  //Tilamuuttujat syötettäville arvoille
  const [asiakasHours, setAsiakasHours] = useState("")
  const [tyontekijaHours, setTyontekijaHours] = useState("")

//Huolii vain määrätyt merkit. Ei esim kirjaimia, sekä piste, pilkuksi. Koska on totuttu käyttämään pilkkua näissä laskuissa. 
  const parsekentta = (value) => {
    return value.replace(",", ".").replace(/[^0-9.]/g, "")
  }

  //Poistettu tarkistus käytöstä.
  // const validateNumber = (value) => {
  //   if (!value) return false
  //   return /^[0-9]+([.,][0-9]*)?$/.test(value)
  // }

 //Lasketaan välittömän työn osuus prosentteina, laskukaavio, sekä kahdella desimaalilla vastaus. Lukema täytyy olla suurempi kuin 0.
  const valitontyoResult = () => {
    const asiakasHoursNum = Number.parseFloat(asiakasHours)
    const tyontekijaHoursNum = Number.parseFloat(tyontekijaHours)
    if (!isNaN(asiakasHoursNum) && !isNaN(tyontekijaHoursNum) && tyontekijaHoursNum > 0) {
      return ((asiakasHoursNum / tyontekijaHoursNum) * 100).toFixed(2)
    }
    return null //null, jos ei laskeminen onnaa.
  }

//Jos lukemia muuttaa, niin käsitellään asiakatyötuntien muutos.
  const handleAsiakasHoursChange = (e) => {
    setAsiakasHours(parsekentta(e.target.value))
  }
//Sama kuin yllä mutta kokonaistuntien muutos
  const handleTyontekijaHoursChange = (e) => {
    setTyontekijaHours(parsekentta(e.target.value))
  }

//Blur-tapahtuma. Lomake tarkastus/tallennus, kun vaihdetaan kenttää.
  const handleBlur = (e) => {

  }
//Teemotuksia ja vastauksia/palautuksia ylläolevista. Reactissa olisi voinut olla lisääkin komponenttivaihtoehtoja, mutta mentiin pelkistetyllä.
  return (
    <div className="bg-white rounded-lg border shadow-sm mb-6">
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-4">Välittömän työn laskuri</h3>
      </div>
      <div className="p-6 pt-0">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <label htmlFor="asiakasHours" className="text-sm font-medium">
              Asiakastyötunnit
            </label>
            <input
              id="asiakasHours"
              type="text"
              value={asiakasHours}
              onChange={handleAsiakasHoursChange}
              onBlur={handleBlur}
              placeholder="Syötä asiakastyötunnit"
              className="w-full p-2 border rounded-md border-gray-300"
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="tyontekijaHours" className="text-sm font-medium">
              Työntekijän kokonaistunnit
            </label>
            <input
              id="tyontekijaHours"
              type="text"
              value={tyontekijaHours}
              onChange={handleTyontekijaHoursChange}
              onBlur={handleBlur}
              placeholder="Syötä työntekijän kokonaistunnit"
              className="w-full p-2 border rounded-md border-gray-300"
            />
          </div>

          <div className="mt-2">
            <p className="font-medium">Välittömän työn osuus (%):</p>
            <p className="text-2xl font-bold">{valitontyoResult() || "-"}</p> 
          </div>
        </div>
      </div>
    </div>
  )
}

