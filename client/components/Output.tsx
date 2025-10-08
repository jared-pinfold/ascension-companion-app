import { ExpansionObject, IExpansions } from '../models'
import { randomRange, shuffleArray } from '../utils'

export default function Output(expansions: IExpansions) {
  const expansionKeys = Object.keys(expansions)
  const n = randomRange(1, expansionKeys.length)

  const expansionsToUse = getEspansionsToUse(n, expansions)

  return (
    <main>
      <h2>Output</h2>
      <p>Number of sets in this run: {n}</p>
      {expansionsToUse.map((expansion) => (
        <p key={expansion.code}>{expansion.code}</p>
      ))}
    </main>
  )
}

function getEspansionsToUse(n: number, expansions: IExpansions) {
  const coreSets: ExpansionObject[] = [
    { name: 'chronicleOfTheGodslayer', code: 'CotG', grid: 1 },
    { name: 'returnOfTheFallen', code: 'RoTF', grid: 2 },
    { name: 'stormOfSouls', code: 'SoS', grid: 3 },
    { name: 'immortalHeroes', code: 'IH', grid: 4 },
    { name: 'riseOfVigil', code: 'RoV', grid: 5 },
    { name: 'darknessUnleashed', code: 'DU', grid: 6 },
    { name: 'realmsUnraveled', code: 'RU', grid: 7 },
    { name: 'dawnOfChampions', code: 'DoC', grid: 8 },
    { name: 'dreamscape', code: 'DS', grid: 9 },
    { name: 'warOfShadows', code: 'WoS', grid: 10 },
    { name: 'giftOfTheElements', code: 'GotE', grid: 11 },
    { name: 'valleyOfTheAncients', code: 'VotA', grid: 12 },
    { name: 'delerium', code: 'DLRM', grid: 13 },
    { name: 'deliverance', code: 'DLV', grid: 14 },
  ]
  const promoSets: ExpansionObject[] = [
    { name: 'promo1', code: 'Promo1', grid: 15 },
    { name: 'promo2', code: 'Promo2', grid: 16 },
    { name: 'promo3', code: 'Promo3', grid: 17 },
    { name: 'promo4', code: 'Promo4', grid: 18 },
    { name: 'promo5', code: 'Promo5', grid: 19 },
    { name: 'promo6', code: 'Promo6', grid: 20 },
  ]
  const availableCoreSets = shuffleArray(coreSets.reduce((returnArray: ExpansionObject[], currentSet: ExpansionObject) => {
    if (expansions[currentSet.name as keyof IExpansions] === true) {
      return [...returnArray, currentSet]
    } else {
      return returnArray
    }
  }, [] )) //remove sets that are not selected, then return a shuffled array
  const availablePromoSets = promoSets.reduce((returnArray: ExpansionObject[], currentSet: ExpansionObject) => {
    if (expansions[currentSet.name as keyof IExpansions] === true) {
      return [...returnArray, currentSet]
    } else {
      return returnArray
    }
  }, [] ) //remove sets that are not selected

  // select one core set
  const compulsoryCoreSet = availableCoreSets.splice(0, 1)[0]

  //then the remaining sets are randomly selected
  const remainingSets = shuffleArray([...availableCoreSets, ...availablePromoSets]).slice(0, n - 1)

  return [compulsoryCoreSet, ...remainingSets]
}

