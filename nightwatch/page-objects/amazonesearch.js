module.exports = {
    url:'https://www.google.com/',
    elements: {
      searchInput: '#APjFqb',
      amazonLink: {
        selector: '//h3[text()="Amazon.in"]',
        locateStrategy: 'xpath',
      },
    },
  
    commands: [
      {
        performGoogleSearch:function(searchTerm) {
          return this.waitForElementVisible('@searchInput')
            .setValue('@searchInput', [searchTerm, this.api.Keys.ENTER])
            .waitForElementVisible('@amazonLink', 5000)
            .verify.textContains('@amazonLink', 'Amazon')
            .click('@amazonLink');
        },
      },
    ],
  };
  