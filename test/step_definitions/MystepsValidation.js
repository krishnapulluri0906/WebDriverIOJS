const { Before, Given, When, Then } = require('cucumber');

Given(/^I am webdriver page$/, function () {
  //  WebdriverIoHomePage.open();
   browser.url("https://google.com");
   // multipleCucumberHtmlReporter.attach(browser.saveScreenshot(), 'image/png');
});

When(/^get the title$/, function () {
   // const title = browser.getTitle();
    console.log("Krishna Pulluri");
  // assert.equal(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js');
});

Then(/^title should be matched$/, function () {
    //let result = await connection.execute('select * from demo');
    //console.log(result.rows());
   // assert.equal(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js');
});