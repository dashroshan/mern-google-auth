Install dependencies

```
npm install
```

config.env file inside config directory

```
PORT = 4000
MONGO_URI = mongodb://localhost:27017/google
GOOGLE_CLIENT_ID = xxxxx.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET = xxxxxxxxxxxxxxxxxxxxxxxxxxxx
CALLBACK_URL = /auth/google/callback
```

example react index.js file (running on port 3000)
```
import './App.css';
import axios from "axios";

function App() {
    const checkLogin = async () => {
        try {
            const res = await axios.get("http://localhost:4000/auth/check", { withCredentials: true });
            console.log(JSON.stringify(res.data));
        }
        catch (err) {
            console.log(err);
        }
    }

    const logOut = async () => {
        try {
            const res = await axios.get("http://localhost:4000/auth/logout", { withCredentials: true });
            console.log(JSON.stringify(res.data));
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                <a href="http://localhost:4000/auth/login">Login</a>
                <button onClick={logOut}>Logout</button>
                <button onClick={checkLogin}>Check</button>
            </header>
        </div>
    );
}

export default App;
```