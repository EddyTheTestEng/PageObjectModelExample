import { HomePage } from '../pages/homepage';

describe('Account Management', () => {

    let homePage = null;

    before(() => {
        homePage = new HomePage();
    })

    it('Login with valid account details works', () => {
        homePage.goTo();
    })
})