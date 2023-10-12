const { verify } = require("nightwatch");

describe('testing amazone testing', () => {
    before((client) => {
        client
            .window.maximize()
            .url('https://www.google.com/');
    });


    it('setting the value in google search', (client) => {
        client
            .waitForElementVisible('#APjFqb', 5000)
            .setValue('#APjFqb', ['amazon', client.Keys.ENTER])
            .waitForElementVisible(By.xpath('//h3[text()="Amazon.in"]'),5000)
            .verify.textContains(By.xpath('//h3[text()="Amazon.in"]'), 'Amazon')
            .click(By.xpath('//h3[text()="Amazon.in"]'))

    });
    it('fill in the search box of amazone', (client) => {
        client
            .waitForElementVisible('#twotabsearchtextbox',5000)
            .sendKeys('#twotabsearchtextbox', ['boat head phones', client.Keys.ENTER])
            
    });


    it('verifying the number of result in my test case', (client) => {
        let elementsList = [];
        client
            .waitForElementVisible('span.a-size-medium.a-color-base.a-text-normal', 10000) // Adjust the timeout as needed
            .elements('css selector', 'span.a-size-medium.a-color-base.a-text-normal', function (result) {
                const elements = result.value;
                console.log(elements.length)
            })
    });

    it('clicking on the first elemts', (client) => {
        client
            .waitForElementVisible('span.a-size-medium.a-color-base.a-text-normal', 1000) // Adjust the timeout as needed
            .click('span.a-size-medium.a-color-base.a-text-normal')
 });

    it('verifing the first product', (client) => {
        client
            .window.getAllHandles(function name(result) {
                var tab = result.value[1];
                client.window.switch(tab);
            })
    });

    it('verifing the product windo', (client) => {
        client.getTitle(function name(title) {
            verify.titleContains('boAt')
        })

    });


});
