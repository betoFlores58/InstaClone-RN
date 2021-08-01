import firebase from 'firebase/app';
import 'firebase/auth'

import db from '../config/Firebase';

export const updateEmail = (input) => {
    return {type: 'UPDATE_EMAIL',payload: input}
}

export const updatePassword = (input) => {
    return {type: 'UPDATE_PASSWORD',payload: input}
}

export const updateUsername = (input) => {
    return {type: 'UPDATE_USERNAME',payload: input}
}

export const signup = () =>{
    return async (dispatch,getState) =>{
        try {
            const {username,email,password} = getState().user
            const response = await firebase.auth().createUserWithEmailAndPassword(email,password)
            .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode == 'auth/weak-password') {
                    alert('The password is too weak.');
                } else {
                    alert(errorMessage);
                }
                console.log(error);
            });

            if (response.user.uid) {
                const user = {
                    username:username,
                    email:email,
                    posts: [],
                    bio: '',
                    likes:0,
                    photo: ''
                }
                await db.collection('users').doc(response.user.uid).set(user)
                dispatch({type: 'LOGIN',payload: user})
                alert('Registro exitoso, usuario creado.!')
            }
        } catch(error) {
            alert(error)
        }
    }
}