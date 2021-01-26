import styled from 'styled-components'
import { Card } from '../Components/Card'
import GitHubCorner from '../Components/GitHubCorner'
import db from '../db.json'

const  BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
`
export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width:500px){
    margin: auto;
    padding: 15px;
  }
`

export default function Home() {
  return (
  <BackgroundImage>
    <QuizContainer>
      <Card>
        <Card.Title>
          <h1>Marvel Studios</h1>
        </Card.Title>
        <Card.Form>
          <p>Teste os seus conhecimentos sobre o universo Marvel e divirta-se criando o seu AluraQuiz!</p>
          <input placeholder="Diz aí seu nome para jogar :)"/>
          <button>Jogar</button>
        </Card.Form>
      </Card>
      <Card>
        <Card.Form>
          <h1>Quizes da galera</h1>
          <p>Dá uma olhada nesses quizes incríveis que o pessoal da Imersão fez: </p>
          <Card.Link>1</Card.Link>
          <Card.Link>2</Card.Link>
          <Card.Link>3</Card.Link>
        </Card.Form>
      </Card>
    </QuizContainer>
    <GitHubCorner projectUrl='https://github.com/igorheije'/>
  </BackgroundImage>)
}
