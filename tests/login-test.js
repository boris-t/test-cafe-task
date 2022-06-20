import BasePage from "../pages/BasePage";
import LoginPage from "../pages/LoginPage";
import GmailPage from "../pages/GmailPage";

const url = "https://google.com";
const userData = require("../data.json");

fixture("Google Page").page(url);

test("Login into Google account", async (t) => {
  LoginPage.clickLoginButton();
  LoginPage.fillUsername(userData.username);
  LoginPage.clickNextButton();
  LoginPage.fillPassword(userData.password);
  LoginPage.clickOtherNextButton();

  await t.expect(BasePage.googleImage.exists).ok();
});

test("Login into Google account negative", async (t) => {
  LoginPage.clickLoginButton();
  LoginPage.fillUsername(userData.username);
  LoginPage.clickNextButton();
  LoginPage.fillPassword("test1");
  LoginPage.clickOtherNextButton();

  await t
    .expect(LoginPage.wrongPassText.innerText)
    .contains(
      "Wrong password. Try again or click Forgot password to reset it."
    );
});

test("Login into Google and check mail", async (t) => {
  LoginPage.clickLoginButton();
  LoginPage.fillUsername(userData.username);
  LoginPage.clickNextButton();
  LoginPage.fillPassword(userData.password);
  LoginPage.clickOtherNextButton();
  BasePage.clickGmailLink();

  await t.wait(10000).expect(GmailPage.inboxLink.exists).ok();
});
