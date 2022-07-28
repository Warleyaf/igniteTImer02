import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form' // aqui importei a função useForm

import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from './styles'

export function Home() {
  // esse register nada mais é que um método, que ele vai adicionar um input ao nosso formulário, e quando eu dou esse useForm() é como se eu tivesse criando um novo formulário e afunçlão register fala quais são os campos que eu vou ter no meu formulário.

  const { register, handleSubmit, watch } = useForm()
  // esse watch meio que eu fico observando alguma coisa

  function handleCreateNewCycle(data: any) {
    // esse data são tipos os dados dos inputs do nosso formulário
    console.log(data)
  }

  const task = watch('task') // aqui meio que estou falando que eu quero observar o campo task que está ai no primeiro form, e dessa forma ai eu consigo saber o falor de task em tempo real
  const isSubmitDisabled = !task // aqui meio que é uma variável auxiliar que é para facilitar a leitura do código para quem for ver esse código, isso é meio que uma boa prática e para ajudar o próximo na legibilidade do código

  return (
    <HomeContainer>
      {/* aqui no onSubmit meio que estou passando o handleSubmit que está vindo do mpetodo do useForm e passo para dentro do handleSubmit a função do handleCreateNewCicle */}
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
            {...register('task')} // sintaxe do register
          />

          <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
            <option value="Projeto 4" />
          </datalist>

          <label htmlFor="minutesAmount">durate</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5} // esse step significa que, toda vez que aumentar meu número vai aumentar de 5 em 5
            min={5}
            max={60}
            {...register('minutesAmount', { valueAsNumber: true })} // sintaxe do register
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>
        {/** aqui estou observando a task que esta lá em cima na linha 25, e meio que estou dizendo  se o campo de task for diferente de vazio eu quero habilitar o botão, no caso quando alguém digitar algo no meu task eu habilito o botão */}
        <StartCountdownButton disabled={isSubmitDisabled} type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
