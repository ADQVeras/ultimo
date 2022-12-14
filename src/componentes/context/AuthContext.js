import { useContext, createContext } from "react";
import { useAuthentication } from "../hooks/useAuthentications";

const AuthContext = createContext()

export function AuthProvider({children, value}){
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthValue(){
    return useContext(AuthContext);
}


