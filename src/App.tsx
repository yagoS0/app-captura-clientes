import {
  Container,
  Header,
  Title,
  Logo,
  ContainerForm,
  ContainerInput,
} from "./app";
import logo from "./assets/Logo.png";
import Input from "./Components/Input/Input";

import { useRef } from "react";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";

interface FormData {
  name: string;
  email: string;
  telefone: string;
  soma: string;
}

function App() {
  const formRef = useRef<FormHandles>(null);
  function handleSubmit(data: FormData) {
    console.log(data);
  }

  return (
    <Container>
      <Header>
        <Title>
          <Logo src={logo} />
          <h1>
            <span>Consulte</span> um de nossos contadores
          </h1>
          <p>
            Preencha as suas informações no formulario ao lado que entraremos em
            contato em até 24h úteis, caso necessario solicitaremos mais
            informações pelo e-mail informado.
          </p>
        </Title>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <ContainerForm>
            <h2>Entraremos em contato com os dados informados em até 24h</h2>
            <ContainerInput>
              <label>Nome</label>
              <Input name="nome"></Input>
              <label>Email</label>
              <Input name="email"></Input>
              <label>Telefone</label>
              <Input name="telefone"></Input>
              <label>*Soma*</label>
              <Input name="soma"></Input>
            </ContainerInput>
            <button type="submit">Enviar</button>
          </ContainerForm>
        </Form>
      </Header>
    </Container>
  );
}

export default App;
