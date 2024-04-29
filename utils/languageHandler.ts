import messages_en from "../cypress/fixtures/language/messages_en";
import messages_nl from "../cypress/fixtures/language/messages_nl";
import messages_fr from "../cypress/fixtures/language/messages_fr";

const getTranslatedString = function (pageName: string, language?: string) {
    let message: Map<string, string>
    if(language === null || language === undefined) {
        language = Cypress.env('CYPRESS_LANGUAGE')
    }

    switch (language) {
        case 'en':
            message = messages_en
            break;
        case 'nl':
            message = messages_nl
            break
        case 'fr':
            message = messages_fr
            break
        default:
            throw new Error(`Unknown Language: ${language}`);
            
    }
    return message.get(pageName) || ''
}

export default getTranslatedString