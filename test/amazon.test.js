describe('testing amazone testing', () => {
    before((client) => {
        client
            .window.maximize()
            .url('https://www.google.com/');
    });

    it('setting the value in google search', (client) => {
        client
            .waitForElementPresent('#APjFqb')
            .setValue('#APjFqb', ['amazon.in', client.Keys.ENTER])
            .pause()
    });


});