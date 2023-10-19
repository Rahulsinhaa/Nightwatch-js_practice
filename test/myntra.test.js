/**
 * This script tests the Myntra UI using Nightwatch.js
 * @param {object} client - Nightwatch client object.
 */
describe('Testing Myntra UI', (client) => {
    /**
     * @description Before running the test, maximize the browser window and open the Google website.
     */
    before((client) => {
        client
            .window.maximize()
            .url('https://www.google.com/')
    });

    /**
     * @description Test: Set the value in the Google search bar.
     */
    it('Setting the value in Google search', (client) => {
        client
            .waitForElementVisible('#APjFqb', 5000)
            .sendKeys('#APjFqb', ['myntra.com', client.Keys.ENTER])
    });

    /**
     * @description Test: Click on the first result link.
     */
    it('Click on the first result', (client) => {
        client
            .waitForElementVisible(By.xpath('//h3[text()="Myntra: Online Shopping for Women, Men, Kids Fashion ..."]'), 3000)
            .click(By.xpath('//h3[text()="Myntra: Online Shopping for Women, Men, Kids Fashion ..."]'))
    });

    /**
     * @description Test: Set search criteria in the Myntra search box.
     */
    it('Set search criteria in Myntra', (client) => {
        client
            .waitForElementVisible('input[placeholder="Search for products, brands and more"]', 3000)
            .sendKeys('input[placeholder="Search for products, brands and more"]', ['high neck t shirt for men', client.Keys.ENTER])
            .moveToElement('#desktop-header-cnt div.desktop-userIconsContainer > span.myntraweb-sprite.desktop-iconUser.sprites-headerUser', 10, 10, function () {
                client.click('div [class="desktop-getUserInLinks desktop-getInLinks"]')
            })
    });

    /**
     * @description Test: Set login information.
     */
    it('Set login information', (client) => {
        client
            .waitForElementVisible('input[class="form-control mobileNumberInput"]', 3000)
            .sendKeys('input[class="form-control mobileNumberInput"]', ['7645833848', client.Keys.ENTER])
            .pause(30000)
            .click('div[class="submitBottomOption"]')
    });

    /**
     * @description Test: Add a product to the cart.
     */
    it('Add a product to the cart', (client) => {
        client
            .pause(20000)
            .click('.results-base li:nth-child(3)')
            //switching the tab
            .window.getAllHandles(function name(result) {
                var tab = result.value[1];
                client.window.switch(tab);
            })
            .click(By.xpath('//div[text()="ADD TO BAG"]'))
    });

    /**
     * @description after: after method is called the fucntion is called 
     */
    after((client) => {
        client.end();
    });
});
