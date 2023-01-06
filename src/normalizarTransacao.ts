import moedaParaNumber from "./moedaParaNumber"
import stringToDate from "./stringToDate"

function normalizarTransacao(transacao: TransacoesAPI): Transacao {
  return {
    nome: transacao.Nome,
    id: transacao.ID,
    data: stringToDate(transacao.Data),
    status: transacao.Status,
    email: transacao.Email,
    valor: moedaParaNumber(transacao["Valor (R$)"]),
    moeda: transacao["Valor (R$)"],
    formaPagamento: transacao["Forma de Pagamento"],
    clienteNovo: Boolean(transacao["Cliente Novo"])
  }
}

export default normalizarTransacao
