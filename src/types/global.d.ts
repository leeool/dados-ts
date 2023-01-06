type Pagamento = "Boleto" | "Cartão de Crédito"
type ClienteNovo = 0 | 1
type Status =
  | "Paga"
  | "Recusada pela operadora de cartão"
  | "Aguardando pagamento"
  | "Estornada"

interface TransacoesAPI {
  "Cliente Novo": ClienteNovo
  Data: string
  Email: string
  "Forma de Pagamento": Pagamento
  ID: number
  Nome: string
  Status: Status
  "Valor (R$)": string
}

interface CountList {
  [key: string]: number
}

interface Transacao {
  nome: string
  id: number
  data: Date
  status: Status
  email: string
  valor: number | null
  moeda: string
  formaPagamento: Pagamento
  clienteNovo: boolean
}

interface Estatisticas {
  total: number
  pagamentos: CountList
  status: CountList
  melhorDia: string
}
