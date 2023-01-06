/**
 *
 * recebe string "1.200,00" retorna number 1200
 *
 */

function moedaParaNumber(moeda: string): number | null {
  const moedaNumber = parseFloat(moeda.replaceAll(".", ""))
  if (isNaN(moedaNumber)) {
    return null
  } else {
    return moedaNumber
  }
}

export default moedaParaNumber
