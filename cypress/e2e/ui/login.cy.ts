/// <reference types="cypress"/>

import BasePage from "../../../pages/shared-elements/basePage";
import { getUsersData } from "../../../utils/env";


describe('Login Feature', () => {
    const env = Cypress.env('CYPRESS_ENV');
    const user = getUsersData(env).get('loginUser')!
    
    const email = user.email;
    const password = user.password; // or you can directly give as Test@12345

    beforeEach(() => {
        
    });















});