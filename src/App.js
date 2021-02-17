import './App.css';
import Profile from './components/profile'
import UserList from './components/userList'

import 'bootstrap/dist/css/bootstrap.min.css';

import UserState from './context/user/userState'
const App = ()=> {
  return (
    <UserState>
    <UserList/>
    <Profile/>
    </UserState>
  );
}

export default App;
