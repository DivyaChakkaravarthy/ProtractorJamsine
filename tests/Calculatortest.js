let homepage = require('../pages/CalculatorHomepage');

describe ('Calculator test demo', function (){

    it ('Addition', function()
    {

        //browser.get('http://juliemr.github.io/protractor-demo/');
        homepage.get();
        homepage.enterFirstNumber('4');
        homepage.enterSecondnumber('5');
        homepage.clickGo();
        homepage.verifyResult('9');

        //element(by.model('first')).sendKeys('5');
        //element(by.model('second')).sendKeys('4');
        //element(by.css('[ng-click="doAddition()"]')).click();
        //let result = element(by.cssContainingText('.ng-binding','9')).getText();
        //expect(result).toEqual('9');
        browser.sleep(2000);
        




        

    });
});