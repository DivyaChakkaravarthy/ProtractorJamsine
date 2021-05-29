let homepage = function() 
{

    let firstNumber_input = element(by.model('first'));
    let secondNumber_input = element(by.model('second'));
    let goButton = element(by.css('[ng-click="doAddition()"]'));
    let result =  element(by.cssContainingText('.ng-binding','9')).getText();

    this.get = function()
    {   
        //browser.waitForAngularEnabled(false);
        //browser.driver.ignoreSynchronization = true;
        //browser.waitForAngularEnabled(false);
        browser.sleep(2000);
        browser.driver.get('http://juliemr.github.io/protractor-demo/');
        browser.sleep(2000);
        
    };
    this.enterFirstNumber = function(firstNo)
    {
        firstNumber_input.sendKeys(firstNo);
    };

    this.enterSecondnumber= function(secondNo)
    {
        secondNumber_input.sendKeys(secondNo);
    };
    
    this.clickGo = function()
    {
        goButton.click();

    };

    this.verifyResult = function(output){
        expect(result).toEqual(output);
    };


};

module.exports = new homepage();