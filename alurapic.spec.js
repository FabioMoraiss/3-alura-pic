describe('login e registro de usuario no alura pic', ()=> {

    beforeEach(() =>{
        cy.visit('https://alura-fotos.herokuapp.com')
    })

    it('verifica mensagens de validação', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button','Register').click();
        cy.contains('button','Register').click();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible',);
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible',);
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible',);
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible',);
    })

    it('verifica mensagens de email invalido', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button','Register').click();
        cy.get('input[formcontrolname="email"').type('jaquelino')
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible',);
       
    })

    it('verifica nome com 1 caractere', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button','Register').click();
        cy.get('input[formcontrolname="fullName"').type('a')
        cy.contains('button','Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible',);
       
    })


    //caso de teste de sucesso


    it('verifica nome com 41 caracteres', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button','Register').click();
        cy.get('input[formcontrolname="fullName"').type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
        cy.contains('button','Register').click();
        cy.contains('ap-vmessage', 'Maximun length is 40').should('be.visible',);
       
    })

    it('verifica usuario com 1 caractere', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button','Register').click();
        cy.get('input[formcontrolname="userName"').type('a')
        cy.contains('button','Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible',);
       
    })

    it('verifica usuario com 31 caracteres', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button','Register').click();
        cy.get('input[formcontrolname="userName"').type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
        cy.contains('button','Register').click();
        cy.contains('ap-vmessage', 'Maximun length is 30').should('be.visible',);
       
    })

    it('verifica usuario com letra maiuscula', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button','Register').click();
        cy.get('input[formcontrolname="userName"').type('AD')
        cy.contains('button','Register').click();
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible',);
       
    })



    it('verifica senha com menos de 8 caracteres', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button','Register').click();
        cy.get('input[formcontrolname="password"').type('123')
        cy.contains('button','Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible',);
       
    })

    it('verifica senha com menos de 19 caracteres', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button','Register').click();
        cy.get('input[formcontrolname="password"').type('aaaaaaaaaaaaaaaaaaa')
        cy.contains('button','Register').click();
        cy.contains('ap-vmessage', 'Maximun length is 18').should('be.visible',);
       
    })


})