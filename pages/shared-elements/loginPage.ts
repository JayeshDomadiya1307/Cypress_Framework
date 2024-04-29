import getTranslatedString from "../../utils/languageHandler";
import BasePage from "./basePage";

class LoginPage extends BasePage {
  constructor() {
    super(pagePathEnum.HOMEPAGE);
  }

  get agreeButton() {
    return cy.get("#onetrust-accept-btn-handler");
  }
  get usernameInput() {
    return cy.get("#j_username");
  }
  get oldEmailInput() {
    return cy.get('input[name="j_username"]');
  }
  get passwordInput() {
    return cy.get("#j_password");
  }
  get loginButton() {
    return cy.get("#login_button");
  }
  get registerButton() {
    return cy.get(".no-login-link");
  }
  get resetPasswordButton() {
    return cy.get(
      'a[onclick="window.open(getTelenetPasswordForgottenUrl()); return false;"]'
    );
  }
  get myTelenetButton() {
    // Locator needs to add here
    return cy.get("");
  }
  get invalidCredentialsNotification() {
    return cy.get("#error");
  }
  get logoutButton() {
    // Locator needs to add here
    return cy.get("");
  }

  get mouseOverToProfile() {
    return cy.get('i.icon-chevron-down.display--none')
  }

  get toolTipOnMouseover() {
    return cy.get("div.cmp-login-v2.open");
  }

  // Actions

  startPasswordReset(): this {
    this.resetPasswordButton.should("be.visible");
    cy.window().then((win) => {
      cy.stub(win, "open")
        .as("redirect")
        .callsFake((url) => {
          cy.visit(url);
        });
      this.resetPasswordButton.invoke("removeAttr", "target");
    });
    this.resetPasswordButton.click();
    return this;
  }

  enterEmail(username: string): this {
    this.usernameInput.type(username).should("have.value", username);
    return this;
  }

  enterPassword(password: string): this {
    this.passwordInput.type(password).should("have.value", password);
    return this;
  }

  clickLoginButton(): this {
    this.loginButton.click();
    return this;
  }

  acceptCookies(): this {
    this.agreeButton.click();
    this.myTelenetButton.click();
    return this;
  }

  login(username: string, password: string): this {
    cy.session(
      username,
      () => {
        this.visit();
        this.acceptCookies();
        this.enterEmail(username).enterPassword(password).clickLoginButton();
      },
      {
        cacheAcrossSpecs: true,
      }
    );
    return this;
  }

  loginWithoutSession(username: string, password: string): this {
    const translatedString = getTranslatedString(
      "LoginPageForgottenPasswordLinkText",
    );
    this.acceptCookies()
    this.resetPasswordButton.should('contain', translatedString)
    this.enterEmail(username).enterPassword(password).clickLoginButton()

    return this;
  }

  oldLogin(username: string, password: string): this {
    this.oldEmailInput.type(username)
    this.enterPassword(password).clickLoginButton()
    return this
  }

  verifyEmailFieldHighlighted(): this {
    this.usernameInput.should('have.class', 'form_inout error')
    return this
  }

  verifyPasswordFieldHighlighted(): this {
    this.passwordInput.should('have.class', 'form_inout error')
    return this
  }

  verifyErrorNotificationIsShown(): this {
    this.invalidCredentialsNotification.should('be.visible').and('contain', getTranslatedString('invalidCredentialsNotification'));    return this
  }

  clickLogoutbutton(): this {
    this.mouseOverToProfile.trigger(`mouseover`).click().click()
    this.toolTipOnMouseover.should('be.visible')
    this.logoutButton.trigger(`mouseover`).click()
    return this
  }

}

export default new LoginPage()
