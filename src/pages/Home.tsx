import { useHistory } from "react-router"

import illustrationImg from "../assets/images/illustration.svg"
import logoImage from "../assets/images/logo.svg"
import googleIconImg from '../assets/images/google-icon.svg'

import { Button } from "../componentes/Button"

import '../styles/auth.scss'
import { useAuth } from "../hooks/userAuth"




export function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth()

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle()
    } else {
      history.push('/rooms/new')
    }

  }

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
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form action="">
            <input
              type="text"
              placeholder="Digite o código da sala"
            />
            <Button type='submit'>
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}