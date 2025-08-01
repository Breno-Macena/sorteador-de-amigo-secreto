import { useRecoilValue, useSetRecoilState } from "recoil"
import { errorState, listParticipantesState } from "../atom"

export const useAdicionarParticipante = () => {
  const setLista = useSetRecoilState(listParticipantesState)
  const lista = useRecoilValue(listParticipantesState)
  const setErro = useSetRecoilState(errorState)
  const adicionarParticipante = (nomeParticipante: string) => {
    if (lista.includes(nomeParticipante)){
      setErro('Nomes duplicados não são permitidos!')
      setTimeout(() => {
        setErro('')
      }, 5000)
      return
    }

    return setLista(prevState => [...prevState, nomeParticipante])
  }

  return adicionarParticipante
}