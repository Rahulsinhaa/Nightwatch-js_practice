
describe("Should Find the search suggestions", () => {
    it("Should find the first search suggestion", () => {

        browser

            .window.maximize()
            .url("https://www.myntra.com/jeans?rawQuery=jeans")
            .waitForElementVisible('body')
            //click on sort by
            .moveToElement('#desktopSearchResults > div:nth-child(1) > section > div:nth-child(1) > div.horizontal-filters-sortContainer', 0, 0,function name() {
                browser.useXpath()
               browser.moveToElement('//*[@id="desktopSearchResults"]/div[1]/section/div[1]/div[1]/div/div/div/ul/li[2]/label', 10, 10,function name(text) {
                    browser.click('//*[@id="desktopSearchResults"]/div[1]/section/div[1]/div[1]/div/div/div/ul/li[2]/label');
                })
            })

           

    });







});