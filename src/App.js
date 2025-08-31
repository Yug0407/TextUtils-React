import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
// import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
// import {BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from 'react-router-dom';
 
function App() {
  // Set a great background color for the app
  // You can change this color to any you like (e.g., a gradient or a nice shade)
  // Example: a light blue gradient
  const appBackground = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)'
  };
  
  const [myStyle, setMyStyle] = useState({
    backgroundColor: "#f8f9fa", // soft light grey
    color: "#212529"
});

  const [alert,setAlert] = useState(null);

  const showAlert = (message ,type) => {
    setAlert({
      msg : message , 
      type : type
    })
    setTimeout(() => {
        setAlert(null);
    },2000);
  }


  return (
    // <Router>
    <div
      className="App"
      style={
        myStyle.color === "#f8f9fa"
          ? { backgroundColor: "#212529", minHeight: "100vh" } // dark mode
          : appBackground
      } // light mode with gradient
    >
      <Navbar
        title="TextUtils"
        aboutText="About us"
        myStyle={myStyle}
        setMyStyle={setMyStyle}
        showAlert = {showAlert}
      />
      <Alert alert={alert}/>
      {/* <About/> */}

  <div className="container my-3">
    {/* <Routes>
      <Route path="/about" element={<About />} />
      <Route
        path="/"
        element={ */}
          <TextArea
            heading="Now TextArea is Your's...!! "
            myStyle={myStyle}
            setMyStyle={setMyStyle}
            showAlert={showAlert}
          />
        {/* }
      />
    </Routes> */}

  </div>
    </div>  
// </Router>
  );
}
export default App;
