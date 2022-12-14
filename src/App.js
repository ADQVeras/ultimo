




import { BrowserRouter, Route, Routes } from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth';

//hooks
import { useState, useEffect } from "react";
import { useAuthentication } from "./componentes/hooks/useAuthentications";

//context
import { AuthProvider } from "./componentes/context/AuthContext";

import PaginaDeLogin from "./PaginaDeLogin";

function App() {

  const [user] = useState(undefined)
  const [auth] = useAuthentication()

  const loadingUser = user === undefined

  useEffect(() =>{

    onAuthStateChanged(auth, (user) =>{

    });

  }, [auth]);

  if(loadingUser){
    return <p>Carregando...</p>
  }


  return (
    <div className="App">
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Routes>
            <Route path="" element={<PaginaDeLogin />}/>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
      <PaginaDeLogin/>
        
        
    </div>
  );
}

export default App;
