import { createContext, useReducer } from "react"
export const LoginContext = createContext(null)
export const LoginDispatchContext = createContext(null)

const initialState = {
        username: '',
        password: '',
        isAuth: false,
        message: 'Please Log In!'
    }

export const LoginProvider = ({children}) => {
    const [login, dispatch] = useReducer(loginReducer, initialState)
    
    return (
        <LoginContext.Provider value={login}>
            <LoginDispatchContext.Provider value={dispatch}>
                    {children}
            </LoginDispatchContext.Provider>
       </LoginContext.Provider>
    )
}

const loginReducer = (login, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...action.data.user, 
                message: `Thank you logging in ${action.data.user.username}`,
                token: action.data.token
            }
        case 'REGISTER':
            return {
                ...action.data,
                message: `Thank you registering ${action.data.username}`
            }
        case 'LOGOUT':
            return {
                username: '',
                password: '',
            }
        case 'DELETE':
            return {
                ...login,
                message: action.data.message
            }
        case 'ERROR':
            return {
                username: '',
                password: '',
                message: action.data.message
            }  
        default:
            alert("Default")
            break;
    }
} 