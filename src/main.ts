import fetchData from "./fetchData"
import normalizarTransacao from "./normalizarTransacao"
import getStats from "./stats"

const getData = async () => {
  const data = await fetchData<TransacoesAPI[]>(
    "https://api.origamid.dev/json/transacoes.json"
  )

  if (!data) return false

  const transacao = data.map(normalizarTransacao)
  const stats = getStats(transacao)
  fillTable(transacao)
  fillStats(stats)
  return true
}

getData()

const fillList = (list: CountList, element: HTMLElement) => {
  return Object.entries(list).map(
    (pagamento) =>
      (element.innerHTML += `
    <p>${pagamento[0]}: ${pagamento[1]}</p>
  `)
  )
}

const fillStats = (stats: Estatisticas): void => {
  const totalElement = document.querySelector<HTMLElement>("#total span")
  const pgtElement = document.querySelector<HTMLElement>("#pagamentos")
  const statusElement = document.querySelector<HTMLElement>("#status")
  const diaElement = document.querySelector<HTMLElement>("#dia span")

  if (totalElement) {
    totalElement.innerText = stats.total.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    })
  }

  if (pgtElement) {
    fillList(stats.pagamentos, pgtElement)
  }

  if (statusElement) {
    fillList(stats.status, statusElement)
  }

  if (diaElement) {
    diaElement.innerHTML = stats.melhorDia
  }
}

const fillTable = (transacoes: Transacao[]): void => {
  const table = document.querySelector("#table tbody")
  if (!table) return

  transacoes.map(
    (transacao) =>
      (table.innerHTML += `
        <tr>
          <td>${transacao.nome}</td>
          <td>${transacao.email}</td>
          <td>R$ ${transacao.moeda}</td>
          <td>${transacao.formaPagamento}</td>
          <td>${transacao.status}</td>
        </tr>
  `)
  )
}
