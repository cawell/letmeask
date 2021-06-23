import { Link } from "react-router-dom"

import illustrationImg from "../assets/images/illustration.svg"
import logoImage from "../assets/images/logo.svg"

import { Button } from "../componentes/Button"
// import { useAuth } from "../hooks/userAuth"

import '../styles/auth.scss'

export function NewRoom() {
  // const { user } = useAuth

  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Olustação simbolizando perguntas e respostas" />
        <strong>Crie Salas com Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImage} alt="Letmeask" />
          <h2>Criar uma nova sala</h2>
          <form action="">
            <input
              type="text"
              placeholder="Nome da sala"
            />
            <Button type='submit'>
              Criar Sala
            </Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <Link to='/'>click aqui</Link>
          </p>
        </div>
      </main>
    </div>
  )
}