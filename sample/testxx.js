const $ = require('jquery');
const fs = require('fs');
const path = require('path');
const chai = require("chai");
const should = chai.should();
const JWebDriver = require('jwebdriver');
chai.use(JWebDriver.chaiSupportChainPromise);
const resemble = require('resemblejs-node');
resemble.outputSettings({
    errorType: 'flatDifferenceIntensity'
});

const rootPath = getRootPath();

module.exports = function(){

    let driver, testVars;

    before(function(){
        let self = this;
        driver = self.driver;
        testVars = self.testVars;
    });

    it('url: https://itest.clife.net/platformAdmin/aFan/index.html#/login', async function(){
        await driver.url(_(`https://itest.clife.net/platformAdmin/aFan/index.html#/login`));
    });

    it('waitBody: ', async function(){
        await driver.sleep(500).wait('body', 30000).html().then(function(code){
            isPageError(code).should.be.false;
        });
    });

    it('click: #normal_login_username, 62, 23, 0', async function(){
        await driver.sleep(300).wait('#normal_login_username', 30000)
               .sleep(300).mouseMove(62, 23).click(0);
    });

    it('sendKeys: 13128912709', async function(){
        await driver.sendKeys('13128912709');
    });

    it('click: #normal_login_password, 86, 24, 0', async function(){
        await driver.sleep(300).wait('#normal_login_password', 30000)
               .sleep(300).mouseMove(86, 24).click(0);
    });

    it('sendKeys: 123456{ENTER}', async function(){
        await driver.sendKeys('123456{ENTER}');
    });
	

    it('click: 合作商品 ( //span[text()="合作商品"], 35, 6, 0 )', async function(){
        await driver.sleep(300).wait('//span[text()="合作商品"]', 30000)
               .sleep(300).mouseMove(35, 6).click(0);
    });

    it('scrollElementTo: #container aside, 0, 31', async function(){
        await driver.sleep(300).wait('#container aside', 30000)
               .sleep(300).scrollElementTo(0, 31);
    });

    it('click: 合作商品管理 ( //a[text()="合作商品管理"], 53, 13, 0 )', async function(){
        await driver.sleep(300).wait('//a[text()="合作商品管理"]', 30000)
               .sleep(300).mouseMove(53, 13).click(0);
    });

    it('click: 新 建 ( #container button.ant-btn-primary, 19, 12, 0 )', async function(){
        await driver.sleep(300).wait('#container button.ant-btn-primary', 30000)
               .sleep(300).mouseMove(19, 12).click(0);
    });

    it('click: 商品名称 ( #add_goodsName, 32, 13, 0 )', async function(){
        await driver.sleep(300).wait('#add_goodsName', 30000)
               .sleep(300).mouseMove(32, 13).click(0);
    });

    it('sendKeys: UItia{BACK_SPACE}{BACK_SPACE}{BACK_SPACE}添加', async function(){
        await driver.sendKeys('UItia{BACK_SPACE}{BACK_SPACE}{BACK_SPACE}添加');
    });

    it('click: 商品价格 ( #add_goodsPrice, 30, 18, 0 )', async function(){
        await driver.sleep(300).wait('#add_goodsPrice', 30000)
               .sleep(300).mouseMove(30, 18).click(0);
    });

    it('sendKeys: 123', async function(){
        await driver.sendKeys('123');
    });

    it('scrollElementTo: #container section > section.ant-layout, 0, 300', async function(){
        await driver.sleep(300).wait('#container section > section.ant-layout', 30000)
               .sleep(300).scrollElementTo(0, 300);
    });

    it('click: input[value="1"], 7, 8, 0', async function(){
        await driver.sleep(300).wait('input[value="1"]', 30000)
               .sleep(300).mouseMove(7, 8).click(0);
    });

    it('uploadFile: input[type="file"], 1.jpg', async function(){
        await driver.sleep(300).wait('input[type="file"]', {timeout: 30000, displayed: false})
               .sleep(300).uploadFile(rootPath+'/uploadfiles/1.jpg');
    });

    it('switchFrame: #add_content iframe', async function(){
        await driver.switchFrame(null)
               .wait('#add_content iframe', 30000).then(function(element){
                   return this.switchFrame(element).wait('body');
               });
    });

    it('click: body, 86, 35, 0', async function(){
        await driver.sleep(300).wait('body', 30000)
               .sleep(300).mouseMove(86, 35).click(0);
    });

    it('sendKeys: 哈哈哈', async function(){
        await driver.sendKeys('哈哈哈');
    });

    it('switchFrame: null', async function(){
        await driver.switchFrame(null);
    });

    it('scrollElementTo: #container section > section.ant-layout, 0, 499', async function(){
        await driver.sleep(300).wait('#container section > section.ant-layout', 30000)
               .sleep(300).scrollElementTo(0, 499);
    });

    it('sleep: 3000', async function(){
        await driver.sleep(3000);
    });

    it('click: 确 定 ( #container button.ant-btn-primary, 47, 17, 0 )', async function(){
        await driver.sleep(300).wait('#container button.ant-btn-primary', 30000)
               .sleep(300).mouseMove(47, 17).click(0);
    });

    it('scrollElementTo: #container section > section.ant-layout, 0, 0', async function(){
        await driver.sleep(300).wait('#container section > section.ant-layout', 30000)
               .sleep(300).scrollElementTo(0, 0);
    });

    it('click: 下架商品 ( //div[text()="下架商品"], 39, 23, 0 )', async function(){
        await driver.sleep(300).wait('//div[text()="下架商品"]', 30000)
               .sleep(300).mouseMove(39, 23).click(0);
    });

    it('expect: text, //div[text()="UI添加"], equal, UI添加', async function(){
        await driver.sleep(300).wait('//div[text()="UI添加"]', 30000)
            .text()
            .should.not.be.a('error')
            .should.equal(_(`UI添加`));
    });

    it('click: 分成设置 ( #container tr:nth-child(1) > td:nth-child(8) > span > span:nth-child(4) > span.blue_font, 19, 2, 0 )', async function(){
        await driver.sleep(300).wait('#container tr:nth-child(1) > td:nth-child(8) > span > span:nth-child(4) > span.blue_font', 30000)
               .sleep(300).mouseMove(19, 2).click(0);
    });

    it('scrollElementTo: #container section > section.ant-layout, 0, 100', async function(){
        await driver.sleep(300).wait('#container section > section.ant-layout', 30000)
               .sleep(300).scrollElementTo(0, 100);
    });

    it('click: 参与分成 ( //a[text()="参与分成"], 20, 12, 0 )', async function(){
        await driver.sleep(300).wait('//a[text()="参与分成"]', 30000)
               .sleep(300).mouseMove(20, 12).click(0);
    });
	/*

    it('mouseMove: 0.00 % ( #container td:nth-child(4) > span, 29, 8 )', async function(){
        await driver.sleep(300).wait('#container td:nth-child(4) > span', 30000)
               .sleep(300).mouseMove(29, 8);
    });

    it('click: #container i.anticon-edit > svg, 2, 5, 0', async function(){
        await driver.sleep(300).wait('#container i.anticon-edit > svg', 30000)
               .sleep(300).mouseMove(2, 5).click(0);
    });

    it('mouseDown: input.ant-input, 44, 13, 0', async function(){
        await driver.sleep(300).wait('input.ant-input', 30000)
               .sleep(300).mouseMove(44, 13).mouseDown(0);
    });

    it('mouseUp: 1576794591商户号 ( #container tr.ant-table-row, 475, 25, 0 )', async function(){
        await driver.sleep(300).wait('#container tr.ant-table-row', 30000)
               .sleep(300).mouseMove(475, 25).mouseMove(475, 25).mouseUp(0);
    });

    it('sendKeys: 100', async function(){
        await driver.sendKeys('100');
    });

    it('mouseMove: 0.00 % ( #container td:nth-child(4) > span, 29, 11 )', async function(){
        await driver.sleep(300).wait('#container td:nth-child(4) > span', 30000)
               .sleep(300).mouseMove(29, 11);
    });

    it('click: #container i.anticon-edit > svg, 6, 0, 0', async function(){
        await driver.sleep(300).wait('#container i.anticon-edit > svg', 30000)
               .sleep(300).mouseMove(6, 0).click(0);
    });

    it('sendKeys: {BACK_SPACE}{BACK_SPACE}{BACK_SPACE}{BACK_SPACE}10', async function(){
        await driver.sendKeys('{BACK_SPACE}{BACK_SPACE}{BACK_SPACE}{BACK_SPACE}10');
    });

    it('click: #container div:nth-child(2) > div.ant-table-wrapper, 608, 142, 0', async function(){
        await driver.sleep(300).wait('#container div:nth-child(2) > div.ant-table-wrapper', 30000)
               .sleep(300).mouseMove(608, 142).click(0);
    });

    it('expect: text, #container div.hetBeauty-form-input-static > span, equal, 10.00', async function(){
        await driver.sleep(300).wait('#container div.hetBeauty-form-input-static > span', 30000)
            .text()
            .should.not.be.a('error')
            .should.equal(_(`10.00`));
    });

    it('click: 分成设置 ( #container div.main > div > div > div:nth-child(1), 19, 31, 0 )', async function(){
        await driver.sleep(300).wait('#container div.main > div > div > div:nth-child(1)', 30000)
               .sleep(300).mouseMove(19, 31).click(0);
    });

    it('click: #container i.anticon-arrow-left > svg, 6, 11, 0', async function(){
        await driver.sleep(300).wait('#container i.anticon-arrow-left > svg', 30000)
               .sleep(300).mouseMove(6, 11).click(0);
    });

    it('scrollElementTo: #container section > section.ant-layout, 0, 0', async function(){
        await driver.sleep(300).wait('#container section > section.ant-layout', 30000)
               .sleep(300).scrollElementTo(0, 0);
    });

    it('click: 安全退出 ( //span[text()="安全退出"], 29, 9, 0 )', async function(){
        await driver.sleep(300).wait('//span[text()="安全退出"]', 30000)
               .sleep(300).mouseMove(29, 9).click(0);
    });

    it('click: 确 定 ( div.ant-modal-footer > div > button[type="button"].ant-btn-primary, 44, 23, 0 )', async function(){
        await driver.sleep(300).wait('div.ant-modal-footer > div > button[type="button"].ant-btn-primary', 30000)
               .sleep(300).mouseMove(44, 23).click(0);
    });
	*/

    it('click: 0.00 ( #container div.hetBeauty-form-input-static > span:nth-child(1), 23, 12, 0 )', async function(){
        await driver.sleep(300).wait('#container div.hetBeauty-form-input-static > span:nth-child(1)', 30000)
               .sleep(300).mouseMove(23, 12).click(0);
    });

    it('click: #container i.anticon-edit > svg > path, 5, 5, 0', async function(){
        await driver.sleep(300).wait('#container i.anticon-edit > svg > path', 30000)
               .sleep(300).mouseMove(5, 5).click(0);
    });

    it('sendKeys: {BACK_SPACE}{BACK_SPACE}{BACK_SPACE}{BACK_SPACE}12', async function(){
        await driver.sendKeys('{BACK_SPACE}{BACK_SPACE}{BACK_SPACE}{BACK_SPACE}12');
    });

    it('click: % ( #container td:nth-child(4), 124, 34, 0 )', async function(){
        await driver.sleep(300).wait('#container td:nth-child(4)', 30000)
               .sleep(300).mouseMove(124, 34).click(0);
    });

    it('scrollElementTo: #container section > section.ant-layout, 0, 424', async function(){
        await driver.sleep(300).wait('#container section > section.ant-layout', 30000)
               .sleep(300).scrollElementTo(0, 424);
    });

    it('scrollElementTo: #container section > section.ant-layout, 0, 0', async function(){
        await driver.sleep(300).wait('#container section > section.ant-layout', 30000)
               .sleep(300).scrollElementTo(0, 0);
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

if(module.parent && /mocha\.js/.test(module.parent.id)){
    runThisSpec();
}

function runThisSpec(){
    // read config
    let webdriver = process.env['webdriver'] || '';
    let proxy = process.env['wdproxy'] || '';
    let config = require(rootPath + '/config.json');
    let webdriverConfig = Object.assign({},config.webdriver);
    let host = webdriverConfig.host;
    let port = webdriverConfig.port || 4444;
    let group = webdriverConfig.group || 'default';
    let match = webdriver.match(/([^\:]+)(?:\:(\d+))?/);
    if(match){
        host = match[1] || host;
        port = match[2] || port;
    }
    let testVars = config.vars;
    let browsers = webdriverConfig.browsers;
    browsers = browsers.replace(/^\s+|\s+$/g, '');
    delete webdriverConfig.host;
    delete webdriverConfig.port;
    delete webdriverConfig.group;
    delete webdriverConfig.browsers;

    // read hosts
    let hostsPath = rootPath + '/hosts';
    let hosts = '';
    if(fs.existsSync(hostsPath)){
        hosts = fs.readFileSync(hostsPath).toString();
    }
    let specName = path.relative(rootPath, __filename).replace(/\\/g,'/').replace(/\.js$/,'');

    browsers.split(/\s*,\s*/).forEach(function(browserName){
        let caseName = specName + ' : ' + browserName;

        let browserInfo = browserName.split(' ');
        browserName = browserInfo[0];
        let browserVersion = browserInfo[1];

        describe(caseName, function(){

            this.timeout(600000);
            this.slow(1000);

            let driver;
            before(function(){
                let self = this;
                let driver = new JWebDriver({
                    'host': host,
                    'port': port
                });
                let sessionConfig = Object.assign({}, webdriverConfig, {
                    'group': group,
                    'browserName': browserName,
                    'version': browserVersion,
                    'ie.ensureCleanSession': true,
                });
                if(proxy){
                    sessionConfig.proxy = {
                        'proxyType': 'manual',
                        'httpProxy': proxy,
                        'sslProxy': proxy
                    }
                }
                else if(hosts){
                    sessionConfig.hosts = hosts;
                }

                try {
                    self.driver = driver.session(sessionConfig).windowSize(1366, 736).config({
                        pageloadTimeout: 30000, // page onload timeout
                        scriptTimeout: 5000, // sync script timeout
                        asyncScriptTimeout: 10000 // async script timeout
                    });
                } catch (e) {
                    console.log(e);
                }

                self.testVars = testVars;
                let casePath = path.dirname(caseName);
                if (config.reporter && config.reporter.distDir) {
                    self.screenshotPath = config.reporter.distDir + '/reports/screenshots/' + casePath;
                    self.diffbasePath = config.reporter.distDir + '/reports/diffbase/' + casePath;
                } else {
                    self.screenshotPath = rootPath + '/reports/screenshots/' + casePath;
                    self.diffbasePath = rootPath + '/reports/diffbase/' + casePath;
                }
                self.caseName = caseName.replace(/.*\//g, '').replace(/\s*[:\.\:\-\s]\s*/g, '_');
                mkdirs(self.screenshotPath);
                mkdirs(self.diffbasePath);
                self.stepId = 0;
                return self.driver;
            });

            module.exports();

            beforeEach(function(){
                let self = this;
                self.stepId ++;
                if(self.skipAll){
                    self.skip();
                }
            });

            afterEach(async function(){
                let self = this;
                let currentTest = self.currentTest;
                let title = currentTest.title;
                if(currentTest.state === 'failed' && /^(url|waitBody|switchWindow|switchFrame):/.test(title)){
                    self.skipAll = true;
                }

                if ((config.screenshots && config.screenshots.captureAll && !/^(closeWindow):/.test(title)) || currentTest.state === 'failed') {
                    const casePath = path.dirname(caseName);
                    const filepath = `${self.screenshotPath}/${self.caseName}_${self.stepId}`;
                    const relativeFilePath = `./screenshots/${casePath}/${self.caseName}_${self.stepId}`;
                    let driver = self.driver;
                    try{
                        // catch error when get alert msg
                        await driver.getScreenshot(filepath + '.png');
                        let url = await driver.url();
                        let html = await driver.source();
                        html = '<!--url: '+url+' -->\n' + html;
                        fs.writeFileSync(filepath + '.html', html);
                        let cookies = await driver.cookies();
                        fs.writeFileSync(filepath + '.cookie', JSON.stringify(cookies));
                        appendToContext(self, relativeFilePath + '.png');
                    }
                    catch(e){}
                }
            });

            after(function(){
                return this.driver.close();
            });

        });
    });
}

function getRootPath(){
    let rootPath = path.resolve(__dirname);
    while(rootPath){
        if(fs.existsSync(rootPath + '/config.json')){
            break;
        }
        rootPath = rootPath.substring(0, rootPath.lastIndexOf(path.sep));
    }
    return rootPath;
}

function mkdirs(dirname){
    if(fs.existsSync(dirname)){
        return true;
    }else{
        if(mkdirs(path.dirname(dirname))){
            fs.mkdirSync(dirname);
            return true;
        }
    }
}

function callSpec(name){
    try{
        require(rootPath + '/' + name)();
    }
    catch(e){
        console.log(e)
        process.exit(1);
    }
}

function isPageError(code){
    return code == '' || / jscontent="errorCode" jstcache="\d+"|diagnoseConnectionAndRefresh|dnserror_unavailable_header|id="reportCertificateErrorRetry"|400 Bad Request|403 Forbidden|404 Not Found|500 Internal Server Error|502 Bad Gateway|503 Service Temporarily Unavailable|504 Gateway Time-out/i.test(code);
}

function appendToContext(mocha, content) {
    try {
        const test = mocha.currentTest || mocha.test;

        if (!test.context) {
            test.context = content;
        } else if (Array.isArray(test.context)) {
            test.context.push(content);
        } else {
            test.context = [test.context];
            test.context.push(content);
        }
    } catch (e) {
        console.log('error', e);
    }
};

function catchError(error){

}
