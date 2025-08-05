import React, { useRef, useState } from 'react'
import { useAdicionarParticipante } from '../state/hooks/useAdicionarParticipante'
import { useMensagemErro } from '../state/hooks/useMensagemErro'

import './Formulario.css'

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
      <div className='grupo-input-btn'>
        <input
          ref={inputRef}
          type='text'
          placeholder='Insira os nomes dos participantes'
          value={nome}
          onChange={event => setNome(event.target.value)} />
      </div>
      <button disabled={!nome} type='submit'>Adicionar</button>
      {mensagemErro && <p className='alerta erro' role='alert'>{mensagemErro}</p>}
    </form>
  )
}

export default Formulario