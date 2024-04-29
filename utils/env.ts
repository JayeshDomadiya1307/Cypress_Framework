import { User } from "../types/User";
import { intUsers } from "../cypress/fixtures/intUsers";
import { uatUsers } from "../cypress/fixtures/uatUsers";

export const getUsersData = (environment: string): Map<string, User> => {
    switch (environment) {
        case 'int':
            return intUsers;
        case 'uat':
            return uatUsers;
        default:
            throw new Error("Unknown environment: ${environment}");
            
    }
}