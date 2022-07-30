import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form' // aqui importei a função useForm
// instalando as bibliotecas zod = npm i zod, e para intgrar a bilioteca com o hook form eu instalo o npm i @hookform/resolvers
import { zodResolver } from '@hookform/resolvers/zod' // fazendo a integração com o zod e o hookform/resolvers
import * as zod from 'zod' // importando a biblioteca zod, use o * para que ele possa importar tudo do zod, use esse * por que ele não tem o "export default"

import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from './styles'

const newCycleFormValidationSchema = zod.object({
  // esse zod.object é por que as minha informções estão vindo no formato de objeto lá do meu handleCreateNewCycle
  // regras de validação para o meu zodResolver
  task: zod.string().min(1, 'Informe a tarefa'), // aqui meio que estou falando que só vai validar se na minha task ter ao menos 1 caracter caso não tenha vai me retorbar a string "Informe a tarefa"
  minutesAmount: zod.number().min(5).max(60),
})

export function Home() {
  const { register, handleSubmit, watch } = useForm({
    // aqui estou passando um objeto de configurações de validação do formulário utilizando o zod
    // e dentro desse zodResolver eu preciso passar qual é o schema de validação que no caso foi o newCycleFormValidationSchema
    resolver: zodResolver(newCycleFormValidationSchema),
  })
  function handleCreateNewCycle(data: any) {
    console.log(data)
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
            {...register('task')}
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
            step={5}
            min={5}
            // max={60}
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
        <StartCountdownButton disabled={isSubmitDisabled} type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
