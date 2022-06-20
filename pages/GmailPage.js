import { Selector, t } from "testcafe";

class GmailPage {
    constructor() {
        this.inboxLink = Selector("a[aria-label='Inbox']");
    }
}

export default new GmailPage();


