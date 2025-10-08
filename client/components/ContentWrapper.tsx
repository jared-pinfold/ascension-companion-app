import { useState } from 'react'
import { IExpansions } from "../models"
import ExpansionsForm from './ExpansionsForm'
import Output from './Output'

const defaultExpansions: IExpansions = {
    chronicleOfTheGodslayer: true,
    returnOfTheFallen: true,
    stormOfSouls: true,
    immortalHeroes: true,
    riseOfVigil: true,
    darknessUnleashed: true,
    realmsUnraveled: true,
    dawnOfChampions: true,
    dreamscape: true,
    warOfShadows: true,
    giftOfTheElements: true,
    valleyOfTheAncients: true,
    delerium: true,
    deliverance: true,
    promo1: true,
    promo2: true,
    promo3: true,
    promo4: true,
    promo5: true,
    promo6: true
  }

export default function ContentWrapper() {

  const [view, setView] = useState('output')
  const [expansions, setExpansions] = useState(defaultExpansions)

  return (
    <div>
      {view === 'expansions' && <ExpansionsForm />}
      {view === 'output' && <Output {...expansions} />}
    </div>
  )
}
