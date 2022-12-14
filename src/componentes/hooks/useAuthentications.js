import { db } from '../firebase/firebaseConfig';

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth'

import { useState, useEffect } from 'react'

export const useAuthentication = () =>{
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    const[cancelled, setCancelled] = useState(false)

    const auth = getAuth()

    function checkIfIsCancelled(){
        if(cancelled){
            return;
        }
    }
    //register
    const createUser = async (data) =>{
        checkIfIsCancelled();

        setLoading(true);
        setError(null);

        try{
            const {user} = createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )

                await updateProfile(user, {
                    displayName: data.displayName
                })

                setLoading(false)

                return user

        } catch (error) {

            console.log(error)
            console.log(typeof error.message)

            let systemErrorMessage

            if(error.message.includes('Password')){
                systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres"
            }else if(error.message.includes('E-mail-already')){
                systemErrorMessage = 'E-mail já cadastrado';
            }else {
                systemErrorMessage = 'Ocorreru um erro. Por favor, tente mais tarde'
            }

            setLoading(false)
            setError(systemErrorMessage)

        }
        
    };

    //logout - sign out
    const logout =() =>{

        checkIfIsCancelled();

        signOut(auth);
    }

    useEffect(() =>{
        return () => setCancelled(true);
    }, []);

    return{
        auth,
        createUser,
        error,
        loading,
        logout,
    };
};