import { login } from "./login";

describe('login', () => {
    const mockupAlert = jest.fn();
    window.alert = mockupAlert;
    
    it('Deve exibir uma mensagem de login no alert', () => {
        login();
        expect(window.alert).toHaveBeenCalledWith('Bem vindo!');
    })
})