describe('testing myntra ui', (client) => {
  before((client) => {
    client
    .window.maximize()
    .url('https://www.google.com/')
  });

  it('setting the value in google search', (client) => {
    client
        .waitForElementVisible('#APjFqb', 5000)
        .sendKeys('#APjFqb', ['myntra.com', client.Keys.ENTER])
});

it('click on first result', (client) => {
    client
    // .click(By.xpath('//h3 [text()="Myntra: Online Shopping for Women, Men, Kids Fashion ..."]'))
    .waitForElementVisible(By.xpath('//h3[text()="Myntra: Online Shopping for Women, Men, Kids Fashion ..."]'), 3000)
    .click(By.xpath('//h3[text()="Myntra: Online Shopping for Women, Men, Kids Fashion ..."]'))
   
});
it('set search box in myntra', (client) => {
    client
    .sendKeys('input[placeholder="Search for products, brands and more"]',['high neck t shirt for men',client.Keys.ENTER])
 .pause();
});


it('adding product to cart', (client) => {
    client
    .click('.results-base li:nth-child(3)')
    client
            .window.getAllHandles(function name(result) {
                var tab = result.value[1];
                client.window.switch(tab);
            })
    .click(By.xpath('//div[text()="ADD TO BAG"]'),function() {
        console.log('added to cart')
    })
    .pause()
});



});