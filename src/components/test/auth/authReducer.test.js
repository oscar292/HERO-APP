import {authReducer} from '../../auth/authReduce';
import {types} from '../../types/types';

describe('Pruebas en authReducer', ()=>{

    test('Debe de retornar el estado por efectp', () => { 
        const state = authReducer({ logged: false }, {});
        expect(state).toEqual({logged: false});
    })

    test('debe de autenticar y colocar el "name" del usuario ',()=>{
        
        const action = {
            type: types.login,
            payload: {
                name:'Oscar'
            }
        }

        const state = authReducer({logged: true},action);
        expect(state).toEqual({
            logged: true,
            name: 'Oscar'
        })
    })

    test('debe de borrar el name del usuario y logged en false',()=>{
        const action = {
            type: types.logout,
        };
        const state = authReducer({logged:true, name: 'Oscar'},action);
        expect(state).toEqual({logged: false});
    })
})