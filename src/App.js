import { Route ,BrowserRouter,Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';
import PaymentsDetails from './Pages/Payment-Details/PaymentsDetails';
import Loading from './Pages/Loading/Loading';
export const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/payment-details' element={<PaymentsDetails />}/>
      <Route path='/payment-details/loading' element={<Loading />}/>
    </Routes>
    </BrowserRouter>
    )
}
export default App;
