import { realizarSorteio } from "./realizarSorteio"

describe('dado um sorteio de amigo secreto', () => {
  test('cada participante não sorteie o próprio nome', () => {
    const participantes = [
      'Paula Vadinho',
      'Giuseppe Calonga',
      'Paulo Brificado',
      'Isadora Pinto',
      'Paula Noku',
      'Benjamin Arrola'
    ]

    const sorteio = realizarSorteio(participantes)
    participantes.forEach(participante => {
      const amigoSecreto = sorteio.get(participante)
      expect(amigoSecreto).not.toEqual(participante)
    })
  })
})