import { Selector, t } from "testcafe";


class BasePage {
    constructor() {
        this.googleImage = Selector("img[alt='Google']");
        this.gmailLink = Selector("a").withText("Gmail");
        this.accountBtn = Selector("a[role='button'][aria-label^='Google Account']");
        this.logoutBtn = Selector("a").withText("Sign out");
    }

    async clickLogoutButton() {
        await t.click(this.accountBtn)
        .click(this.logoutBtn)
    }

    async clickGmailLink() {
        await t.click(this.gmailLink)
    }
}

export default new BasePage();



