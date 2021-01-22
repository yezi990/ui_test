
module.exports = function(){

    let driver, testVars;

    before(function(){
        let self = this;
        driver = self.driver;
        testVars = self.testVars;
    });

    it('click: #username, 118, 22, 0', async function(){
        await driver.sleep(300).wait('#username', 30000)
               .sleep(300).mouseMove(118, 22).click(0);
    });

    it('sendKeys: cs@test.com', async function(){
        await driver.sendKeys('cs@test.com');
    });
	
	it('click: #password, 89, 24, 0', async function(){
        await driver.sleep(300).wait('#password', 30000)
               .sleep(300).mouseMove(89, 24).click(0);
    });

    it('sendKeys: 123456', async function(){
        await driver.sendKeys('123456');
    });

    it('click: 登 录 ( #root button, 158, 29, 0 )', async function(){
        await driver.sleep(300).wait('#root button', 30000)
               .sleep(300).mouseMove(158, 29).click(0);
    });

    function _(str){
        if(typeof str === 'string'){
            return str.replace(/\{\{(.+?)\}\}/g, function(all, key){
                return testVars[key] || '';
            });
        }
        else{
            return str;
        }
    }

};

