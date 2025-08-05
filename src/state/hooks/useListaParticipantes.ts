import { useRecoilValue } from "recoil"
import { listParticipantesState } from "../atom"

export const useListaParticipantes = () => {
  return useRecoilValue(listParticipantesState)
}