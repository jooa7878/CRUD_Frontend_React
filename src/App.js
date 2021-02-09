import './App.css';
import AppRouter from './component/route/RouteComponent';
import NavBar from './component/route/NavBar';

import Container from '@material-ui/core/Container';

function App() {
  return (
    <div>
      <NavBar/>
      <Container>
        <AppRouter/>
      </Container>
    </div>
  );
}

export default App;
