const { Builder, By, Key } = require("selenium-webdriver");
const assert = require("assert");
const { describe, it } = require('mocha');
const { time } = require("console");

// Define the delay function
async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

describe("Login", function () {

  xit("Login valid username & password", async function () {

    //launch Browser and setup fullscreen
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.manage().window().setRect({ width: 1920, height: 1080 });
    driver.manage().setTimeouts({ implicit: 5000 })

    //navigate url 
    await driver.get("https://www.shafiq.id/")

    //navigate login page
    let button = await driver.findElement(By.className('btn btn-outline-primary w-full'));
    await button.click();

    //input username and password
    await driver.findElement(By.id('email')).sendKeys('hadiansyahvico@gmail.com')
    await driver.findElement(By.id('password')).sendKeys('.8Z_uqxf3Mm_7PT')

    // Use the delay function to verified captcha manualy
    await delay(12000);

    //click button login
    await driver.findElement(By.xpath("//button[@type='submit']")).click()

    //get url and verified
    const currenturl = await driver.getCurrentUrl()
    const expecturl = "https://www.shafiq.id/dashboard"
    assert.strictEqual(currenturl, expecturl, `URL mismatch: ${currenturl} !== ${expecturl}`);

    //close browser
    driver.close()
  })

  it("Login valid username & password and uncheck captcha", async function () {

    //launch Browser and setup fullscreen
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.manage().window().setRect({ width: 1920, height: 1080 });
    driver.manage().setTimeouts({ implicit: 5000 })

    //navigate url 
    await driver.get("https://www.shafiq.id/")

    //navigate login page
    let button = await driver.findElement(By.className('btn btn-outline-primary w-full'));
    await button.click();

    //input username and password and click button login 
    await driver.findElement(By.id('email')).sendKeys('hadiansyahvico@gmail.com')
    await driver.findElement(By.id('password')).sendKeys('.8Z_uqxf3Mm_7PT')
    await driver.findElement(By.xpath("//button[@type='submit']")).click()

    //get value alert capctha 
    const alertcaptcha = await driver.findElement(By.className("alert alert-danger mt-2")).getText()
    const expectalert = 'Silahkan checklist captcha terlebih dahulu.'

    //assert value capctha
    assert.strictEqual(alertcaptcha,expectalert, `alert mismatch: ${alertcaptcha} !== ${expectalert}`)

    //close browser
    driver.close()
  })

  xit("Login valid username & wrong password", async function () {

    //launch Browser and setup fullscreen
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.manage().window().setRect({ width: 1920, height: 1080 });
    driver.manage().setTimeouts({ implicit: 5000 })

    //navigate url 
    await driver.get("https://www.shafiq.id/")

    //navigate login page
    let button = await driver.findElement(By.className('btn btn-outline-primary w-full'));
    await button.click();

    //input username and password
    await driver.findElement(By.id('email')).sendKeys('hadiansyahvico@gmail.com')
    await driver.findElement(By.id('password')).sendKeys('.8Zuqxf3Mm_7PT')

    // Use the delay function to verified captcha manualy
    await delay(12000);

    //click button login
    await driver.findElement(By.xpath("//button[@type='submit']")).click()

    //get value alert and verified
    const alertkredensial = await driver.findElement(By.className("alert alert-danger mt-2")).getText()
    console.log(alertkredensial)

    const expectalertkredensial = 'Identitas tersebut tidak cocok dengan data kami.'

    assert.strictEqual(alertkredensial,expectalertkredensial)

    //close browser
    driver.close()
  })

  xit("Login unregister username & wrong password", async function () {

    //launch Browser and setup fullscreen
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.manage().window().setRect({ width: 1920, height: 1080 });
    driver.manage().setTimeouts({ implicit: 5000 })

    //navigate url 
    await driver.get("https://www.shafiq.id/")

    //navigate login page
    let button = await driver.findElement(By.className('btn btn-outline-primary w-full'));
    await button.click();

    //input username and password
    await driver.findElement(By.id('email')).sendKeys('hadiansyahvico@gmail.com')
    await driver.findElement(By.id('password')).sendKeys('.8Zuqxf3Mm_7PT')

    // Use the delay function to verified captcha manualy
    await delay(12000);

    //click button login
    await driver.findElement(By.xpath("//button[@type='submit']")).click()

    //get value alert and verified
    const alertkredensial = await driver.findElement(By.className("alert alert-danger mt-2")).getText()
    console.log(alertkredensial)

    const expectalertkredensial = 'Identitas tersebut tidak cocok dengan data kami.'

    assert.strictEqual(alertkredensial,expectalertkredensial)

    //close browser
    driver.close()
  })

  it("Login invalid format username & wrong password", async function () {

    //launch Browser and setup fullscreen
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.manage().window().setRect({ width: 1920, height: 1080 });
    driver.manage().setTimeouts({ implicit: 5000 })

    //navigate url 
    await driver.get("https://www.shafiq.id/")

    //navigate login page
    let button = await driver.findElement(By.className('btn btn-outline-primary w-full'));
    await button.click();

    //input invalid username 
    await driver.findElement(By.id('email')).sendKeys('hadiansyahvico')
    

    //get value alert and verified
    const alertemail = await driver.findElement(By.className("alert alert-danger mt-2")).getText()
    console.log(alertemail)

    const expectalertemail = 'email tidak valid'

    assert.strictEqual(alertemail,expectalertemail)

    //close browser
    driver.close()

})

})
