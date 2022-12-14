import styles from '..componentes/Navtab.css';

import { NavLink } from "react-router-dom";

import { useAuthentication } from "../hooks/useAuthentication";

import { useAuthValue } from "../contexts/AuthContext";



const Navtab = () => {
  const { logout } = useAuthentication();
  const { user } = useAuthValue();

  return (
    <nav >
      
      <ul >
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Home
          </NavLink>
        </li>
        {user && (
          <>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                PESSOAL
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                ENDEREÇO
              </NavLink>
            </li>
          </>
        )}
        
        
        {user && (
          <li>
            <button onClick={logout}>SAIR</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navtab;