const wdio = require("webdriverio");

const opts = {
  port: 4723,
  capabilities: {
    platformName: "Android",
    platformVersion: "8",
    deviceName: "emulator-5554",
    app: "C:/Users/DELL/Desktop/doc/ApiDemos.apk",
    appPackage: "io.appium.android.apis",
    appActivity: ".view.TextFields",
    automationName: "UiAutomator2"
  }
};

async function main () {
  const client = await wdio.remote(opts);

  const field = await client.$("android.widget.EditText");
  await field.setValue("Hello World!");
  const value = await field.getText();
  assert.equal(value,"Hello World!");

  await client.deleteSession();
}


main();