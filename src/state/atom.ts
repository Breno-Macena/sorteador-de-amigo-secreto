import { atom } from "recoil";

export const listParticipantesState = atom<string[]>({
  key: 'listParticipantesState',
  default: []
})

export const errorState = atom<string>({
  key: 'errorState',
  default: ''
})