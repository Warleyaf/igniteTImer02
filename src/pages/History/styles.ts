import styled from 'styled-components'

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 3.5rem;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['gray-100']};
  }
`

export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th {
      background-color: ${(props) => props.theme['gray-600']};
      padding: 1rem;
      text-align: left;
      color: ${(props) => props.theme['gray-100']};
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      background-color: ${(props) => props.theme['gray-700']};
      border-top: 4px solid ${(props) => props.theme['gray-800']};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        width: 50%;
        padding-left: 1.5rem;
      }

      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`
// as cores vai vir la do meu theme, ai no caso lá em meu background no before vai mudar um pouco
const STATUS_COLORS = {
  yellow: 'yellow-500',
  green: 'green-500',
  red: 'red-500',
} as const // o typeScript entende que os valores desse objeto "Status_COlors" (que são o yellow, green e red) são todos uma string ou seja uma string qualquer, e para eu dizer que os valores desse objeto vai ser sempre um desses 3 (yellow, green, red) eu passo esse "as const" ai no final

// criando uma interface por que o meu status vai receber propriedades

interface StatusProps {
  // aqui estou dizendo que as cores que tenho, são as keys e o tipo do objeto STATUS_COLORS que são yellow, green e red por isso usei o keyof e o typeof.
  // o typeScript não consegue ler objetos do javascript apenas os tipos do javascript por isso passo o typeof
  statusColor: keyof typeof STATUS_COLORS
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    //agora aqui, eu vou usar a cor baseado no STATUS_COLORS passando a chave ou seja a propiedades que vem do statusColor, esse statusColor vem lá do meu index de History
    background: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
  }
`
