
import { Container } from './components/Container';
import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <>
      <Container>
        <Heading>Testando meu componente Heading</Heading>
        <section>Teste 1</section>
      </Container>
      <Container>
        <section>Teste 2</section>
      </Container>
    </>
  );
}
