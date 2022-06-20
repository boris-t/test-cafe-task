import { Selector, t } from "testcafe";

class LoginPage {
    constructor() {
        this.loginBtn = Selector("a[href^='https://accounts']");
        this.emailInput = Selector("#identifierId");
        this.nextBtn = Selector("#identifierNext button");
        this.passwordInput = Selector("input[type='password']");
        this.secondNextBtn = Selector("#passwordNext button");
        this.wrongPassText = Selector("div[aria-live='assertive'] span");
    }

    async clickLoginButton() {
        await t.click(this.loginBtn);
    }

    async fillUsername(username) {
        await t.typeText(this.emailInput, username);
    }

    async clickNextButton() {
        await t.click(this.nextBtn);
    }

    async clickOtherNextButton() {
        await t.click(this.secondNextBtn)
    }

    async fillPassword(password) {
        await t.typeText(this.passwordInput, password);
    }
}

export default new LoginPage();