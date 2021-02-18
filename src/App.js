import './App.css';
import Profile from './components/profile'
import UserList from './components/userList'

import 'bootstrap/dist/css/bootstrap.min.css';

import UserState from './context/user/userState'
const App = ()=> {
  return (
    <UserState>
      <div className="container p-4">
        <div className="row">
          <div className="col-md-7">
            <UserList/>
          </div>
          <div className="col-md-5">
            <Profile/>
          </div>
        </div>
      </div>
    </UserState>
  );
}

export default App;
