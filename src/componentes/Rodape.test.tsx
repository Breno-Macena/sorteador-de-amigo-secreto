import { fireEvent, render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import Rodape from "./Rodape"
import { useListaParticipantes } from "../state/hooks/useListaParticipantes"
import { useSorteador } from "../state/hooks/useSorteador"

jest.mock('../state/hooks/useListaParticipantes', () => {
  return {
    useListaParticipantes: jest.fn()
  }
})

const mockNavegacao = jest.fn()
jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => mockNavegacao
  }
})

const mockSorteio = jest.fn()
jest.mock('../state/hooks/useSorteador', () => {
  return {
    useSorteador: () => mockSorteio
  }
})

describe('quando não existem participantes suficientes', () => {
  const participantes = ['Cuca Beludo', 'Giuseppe Calarga']
  beforeEach(() => {
    (useListaParticipantes as jest.Mock).mockReturnValue(participantes)
  })

  test('a brincadeira não pode ser iniciada', () => {
    render(<RecoilRoot>
      <Rodape />
    </RecoilRoot>)

    const botao = screen.getByRole('button')

    expect(botao).toBeDisabled()
  })
})

describe('quando existem participanetes suficientes', () => {
  const participantes = ['Cuca Beludo', 'Giuseppe Calarga', 'Yasmin Asbola']
  beforeEach(() => {
    (useListaParticipantes as jest.Mock).mockReturnValue(participantes)
  })

  test('a brincadeira pode ser iniciada', () => {
    render(<RecoilRoot>
      <Rodape />
    </RecoilRoot>)

    const botao = screen.getByRole('button')

    expect(botao).not.toBeDisabled()
  })

  test('a brincadeira foi iniciada', () => {
    render(<RecoilRoot>
      <Rodape />
    </RecoilRoot>)

    const botao = screen.getByRole('button')
    fireEvent.click(botao)

    expect(mockNavegacao).toHaveBeenCalledTimes(1)
    expect(mockNavegacao).toHaveBeenCalledWith('/sorteio')
    expect(mockSorteio).toHaveBeenCalledTimes(1)
  })
})