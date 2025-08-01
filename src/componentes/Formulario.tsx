import React, { useRef, useState } from 'react'
import { useAdicionarParticipante } from '../state/hooks/useAdicionarParticipante'
import { useMensagemErro } from '../state/hooks/useMensagemErro'

const Formulario = () => {
  const [nome, setNome] = useState<string>('')

  const inputRef = useRef<HTMLInputElement>(null)

  const adicionarNaLista = useAdicionarParticipante()

  const mensagemErro = useMensagemErro()

  const adicionarParticipante = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    adicionarNaLista(nome)
    setNome('')
    inputRef.current?.focus()
  }

  return (
    <form onSubmit={adicionarParticipante}>
      <input
        ref={inputRef} 
        type='text' 
        placeholder='Insira os nomes dos participantes'
        value={nome}
        onChange={event => setNome(event.target.value)}/>
      <button disabled={!nome} type='submit'>Adicionar</button>
      {mensagemErro && <p role='alert'>{mensagemErro}</p>}
    </form>
  )
}

export default Formulario