import Header from './sections/Header'
import Todos from './components/Todos/Todos'

import { Provider } from 'react-redux'
import store from './store/index'

function App() {
  return (
    <div className="wrapper">
      <Provider store={store}>
        <Header />
        <main className="main">
          <Todos />
        </main>
      </Provider>
    </div>
  );
}

export default App;
