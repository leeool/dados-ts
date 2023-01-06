type TransacaoValor = Transacao & { valor: number }

const filtrarValor = (transacao: Transacao): transacao is TransacaoValor => {
  return transacao.valor !== null
}

const countBy = (array: (string | number)[]) => {
  return array.reduce((acc: CountList, item) => {
    if (acc[item]) {
      acc[item] += 1
    } else {
      acc[item] = 1
    }
    return acc
  }, {})
}

const setDay = (transacoes: Transacao[]): string => {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado"
  ]
  const dias = transacoes.map(({ data }) => weekDays[data.getDay()])
  const quantidadeDias = countBy(dias)
  const values = Object.keys(quantidadeDias)
  const melhorDia = values.reduce((ant, prox) =>
    quantidadeDias[ant] > quantidadeDias[prox] ? ant : prox
  )

  return melhorDia
}

const setTotal = (transacoes: Transacao[]): number => {
  return transacoes
    .filter(filtrarValor)
    .reduce((acc, { valor }) => acc + valor, 0)
}

const setPagamentos = (transacoes: Transacao[]) => {
  const pagamentos = transacoes.map(({ formaPagamento }) => formaPagamento)
  return countBy(pagamentos)
}

const setStatus = (transacoes: Transacao[]) => {
  const status = transacoes.map((transacao) => transacao.status)
  return countBy(status)
}

const getStats = (transacoes: Transacao[]): Estatisticas => {
  const total = setTotal(transacoes)
  const pagamentos = setPagamentos(transacoes)
  const status = setStatus(transacoes)
  const melhorDia = setDay(transacoes)
  setDay(transacoes)

  return { total, pagamentos, status, melhorDia }
}

export default getStats
