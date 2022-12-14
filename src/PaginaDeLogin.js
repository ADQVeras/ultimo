//CSS da PaginaDeLogin
import './PaginaDeLogin.css'


//componentes

import { Botao } from './componentes/Botao'
import { TextoH1 } from './componentes/Texto'
import { TextoH2 } from './componentes/Texto'


import { useEffect, useState } from 'react'
import { useAuthentication } from './componentes/hooks/useAuthentications'


const PaginaDeLogin = () => {

  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')
  const [error, setError] = useState('');

  const {createUser, error: authError, loading} = useAuthentication();
  
  const handleSubmit = async (e) =>{
    e.preventDefault()

    setError('')

    const user = {
      email,
      password
    };

    const res = await createUser(user);

    console.log(res);
  }

  useEffect(() =>{
    if(authError){
      setError(authError);
    }

  }, [authError])







  return (
    <div>
      
        <div className='primeira-coluna'>

            <TextoH1 />
              <h1 className='Impulsione'>Impulsione</h1>
              <h1 className='byCrefisa'>by Crefisa</h1>
              <a href='s'><h1 className='explorar-link'>explorar{'>'}</h1></a>

            <TextoH2/>
              <h2 className='Desenvolver_pessoas'>   Desenvolver pessoas
                <br/>Impulsionar negócios
                <br/>Conectar e criar soluções
              </h2>
            
            <Botao/>
              <div className='grupo-botao'>
                <button className='btn-entrarNaMinhaConta'>ENTRAR NA MINHA CONTA</button>
                <button className='btn-meCadastrarComoPf'>ME CADASTRAR COMO PF</button>
                <button className='btn-cadastrarMeuNegocio'>CADASTRAR MEU NEGÓCIO</button>
                
              </div>

              
        </div>

        <div className='segunda-coluna'>

          <div></div>

            <div className='grupo-botaoGoogleFacebook'>
              <button className='bt-google'>ENTRAR COM GOOGLE</button>
              <button className='bt-facebook'>ENTRAR COM FACEBOOK</button>
            </div>

            <div className='formulario-login'>
              <form onSubmit={handleSubmit}>
                <div className='formulario-login'>
                  <nobr><label>E-MAIL</label></nobr>
                  <br /><input className='input-formulario'
                         type="email"
                         name="email"
                         required
                         placeholder="E-mail do usuário"
                         value={email}
                         onChange={(e) => setEmail(e.target.value)}
                         />

                  <br /><label>SENHA</label>
                  <br /><input className='input-formulario' 
                          type="password"
                          name="password"
                          required
                          placeholder="Insira a senha"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          />
                  </div>
                  {!loading && <button className='btn-loginEntrar'>CADASTRAR</button>}
                  {loading && (
                    <button className='btn-loginEntrar' disabled>
                      Aguarde...
                    </button>
                  )}
                  {error && <p className='error'>{error}</p>}
              </form>
            </div>
          
          </div>

          
    </div>
  )
}
export default PaginaDeLogin;

