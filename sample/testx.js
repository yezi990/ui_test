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

    it('click: #normal_login_username, 73, 13, 0', async function(){
        await driver.sleep(300).wait('#normal_login_username', 30000)
               .sleep(300).mouseMove(73, 13).click(0);
    });

    it('sendKeys: 13128912709', async function(){
        await driver.sendKeys('13128912709');
    });

    it('click: #normal_login_password, 73, 29, 0', async function(){
        await driver.sleep(300).wait('#normal_login_password', 30000)
               .sleep(300).mouseMove(73, 29).click(0);
    });

    it('sendKeys: 123456', async function(){
        await driver.sendKeys('123456');
    });

    it('click: 登 录 ( #container button, 140, 13, 0 )', async function(){
        await driver.sleep(300).wait('#container button', 30000)
               .sleep(300).mouseMove(140, 13).click(0);
    });

    it('click: 合作商品 ( #container li[role="menuitem"]:nth-child(5) > div.ant-menu-submenu-title, 111, 20, 0 )', async function(){
        await driver.sleep(300).wait('#container li[role="menuitem"]:nth-child(5) > div.ant-menu-submenu-title', 30000)
               .sleep(300).mouseMove(111, 20).click(0);
    });

    it('click: 合作商品管理 ( //a[text()="合作商品管理"], 65, 17, 0 )', async function(){
        await driver.sleep(300).wait('//a[text()="合作商品管理"]', 30000)
               .sleep(300).mouseMove(65, 17).click(0);
    });

    it('sleep: 2000', async function(){
        await driver.sleep(2000);
    });

    it('click: 新 建 ( #container button.ant-btn-primary, 24, 19, 0 )', async function(){
        await driver.sleep(300).wait('#container button.ant-btn-primary', 30000)
               .sleep(300).mouseMove(24, 19).click(0);
    });

    it('click: 商品名称 ( #add_goodsName, 56, 22, 0 )', async function(){
        await driver.sleep(300).wait('#add_goodsName', 30000)
               .sleep(300).mouseMove(56, 22).click(0);
    });

    it('sendKeys: UIzi{BACK_SPACE}{BACK_SPACE}自动化新建合作商品', async function(){
        await driver.sendKeys('UIzi{BACK_SPACE}{BACK_SPACE}自动化新建合作商品');
    });

    it('scrollElementTo: #add_goodsName, 0, 0', async function(){
        await driver.sleep(300).wait('#add_goodsName', 30000)
               .sleep(300).scrollElementTo(0, 0);
    });

    it('click: 支持不支持 ( #container div:nth-child(3) > div.ant-col-sm-15 > div.ant-form-item-control, 335, 2, 0 )', async function(){
        await driver.sleep(300).wait('#container div:nth-child(3) > div.ant-col-sm-15 > div.ant-form-item-control', 30000)
               .sleep(300).mouseMove(335, 2).click(0);
    });

    it('scrollElementTo: #container section > section.ant-layout, 0, 100', async function(){
        await driver.sleep(300).wait('#container section > section.ant-layout', 30000)
               .sleep(300).scrollElementTo(0, 100);
    });

    it('click: 商品价格 ( #add_goodsPrice, 42, 18, 0 )', async function(){
        await driver.sleep(300).wait('#add_goodsPrice', 30000)
               .sleep(300).mouseMove(42, 18).click(0);
    });

    it('sendKeys: 1999', async function(){
        await driver.sendKeys('1999');
    });

    it('click: #container span.upload-component, 213, 21, 0', async function(){
        await driver.sleep(300).wait('#container span.upload-component', 30000)
               .sleep(300).mouseMove(213, 21).click(0);
    });

    it('click: input[value="1"], 4, 4, 0', async function(){
        await driver.sleep(300).wait('input[value="1"]', 30000)
               .sleep(300).mouseMove(4, 4).click(0);
    });

    

    it('uploadFile: input[type="file"], 1.jpg', async function(){
        await driver.sleep(300).wait('input[type="file"]', {timeout: 30000, displayed: false})
               .sleep(300).uploadFile(rootPath+'/uploadfiles/1.jpg');
    });
	
	
	it('scrollElementTo: #container section > section.ant-layout, 0, 484', async function(){
        await driver.sleep(300).wait('#container section > section.ant-layout', 30000)
               .sleep(300).scrollElementTo(0, 484);
    });

    it('sleep: 5000', async function(){
        await driver.sleep(5000);
    });

    it('switchFrame: #add_content iframe', async function(){
        await driver.switchFrame(null)
               .wait('#add_content iframe', 30000).then(function(element){
                   return this.switchFrame(element).wait('body');
               });
    });

    it('click: body, 46, 54, 0', async function(){
        await driver.sleep(300).wait('body', 30000)
               .sleep(300).mouseMove(46, 54).click(0);
    });

    it('sendKeys: 哈哈哈', async function(){
        await driver.sendKeys('哈哈哈');
    });

    it('switchFrame: null', async function(){
        await driver.switchFrame(null);
    });

    it('click: 确 定 ( #container button.ant-btn-primary, 34, 16, 0 )', async function(){
        await driver.sleep(300).wait('#container button.ant-btn-primary', 30000)
               .sleep(300).mouseMove(34, 16).click(0);
    });

    it('scrollElementTo: #container section > section.ant-layout, 0, 0', async function(){
        await driver.sleep(300).wait('#container section > section.ant-layout', 30000)
               .sleep(300).scrollElementTo(0, 0);
    });

    it('click: 下架商品 ( //div[text()="下架商品"], 45, 14, 0 )', async function(){
        await driver.sleep(300).wait('//div[text()="下架商品"]', 30000)
               .sleep(300).mouseMove(45, 14).click(0);
    });

    it('expect: text, //div[text()="UI自动化新建合作商..."], equal, UI自动化新建合作商...', async function(){
        await driver.sleep(300).wait('//div[text()="UI自动化新建合作商..."]', 30000)
            .text()
            .should.not.be.a('error')
            .should.equal(_(`UI自动化新建合作商...`));
    });

    it('mouseDown: UI自动化新建合作商..... ( //div[text()="UI自动化新建合作商..."], 3, 15, 0 )', async function(){
        await driver.sleep(300).wait('//div[text()="UI自动化新建合作商..."]', 30000)
               .sleep(300).mouseMove(3, 15).mouseDown(0);
    });

    it('mouseUp: UI自动化新建合作商..... ( //div[text()="UI自动化新建合作商..."], 81, 10, 0 )', async function(){
        await driver.sleep(300).wait('//div[text()="UI自动化新建合作商..."]', 30000)
               .sleep(300).mouseMove(81, 10).mouseMove(81, 10).mouseUp(0);
    });

    it('click: 合作商品管理 ( #container div.hetBeauty-list-header-filter, 96, 8, 0 )', async function(){
        await driver.sleep(300).wait('#container div.hetBeauty-list-header-filter', 30000)
               .sleep(300).mouseMove(96, 8).click(0);
    });

    it('mouseDown: UI自动化新建合作商..... ( //div[text()="UI自动化新建合作商..."], 81, 13, 0 )', async function(){
        await driver.sleep(300).wait('//div[text()="UI自动化新建合作商..."]', 30000)
               .sleep(300).mouseMove(81, 13).mouseDown(0);
    });

    it('mouseUp: UI自动化新建合作商..... ( //div[text()="UI自动化新建合作商..."], 2, 3, 0 )', async function(){
        await driver.sleep(300).wait('//div[text()="UI自动化新建合作商..."]', 30000)
               .sleep(300).mouseMove(2, 3).mouseMove(2, 3).mouseUp(0);
    });

    it('click: #container div.main, 113, 1, 0', async function(){
        await driver.sleep(300).wait('#container div.main', 30000)
               .sleep(300).mouseMove(113, 1).click(0);
    });

    it('click: #container th:nth-child(4) > i.ant-dropdown-trigger, 10, 34, 0', async function(){
        await driver.sleep(300).wait('#container th:nth-child(4) > i.ant-dropdown-trigger', 30000)
               .sleep(300).mouseMove(10, 34).click(0);
    });

    it('click: input.ant-input, 112, 2, 0', async function(){
        await driver.sleep(300).wait('input.ant-input', 30000)
               .sleep(300).mouseMove(112, 2).click(0);
    });

    it('sendKeys: UI自动化新建', async function(){
        await driver.sendKeys('UI自动化新建');
    });

    it('click: 确 定 ( div.hetBeauty-filter-btns > button[type="button"].ant-btn-primary, 56, 5, 0 )', async function(){
        await driver.sleep(300).wait('div.hetBeauty-filter-btns > button[type="button"].ant-btn-primary', 30000)
               .sleep(300).mouseMove(56, 5).click(0);
    });

    it('expect: text, //div[text()="UI自动化新建合作商..."], equal, UI自动化新建合作商...', async function(){
        await driver.sleep(300).wait('//div[text()="UI自动化新建合作商..."]', 30000)
            .text()
            .should.not.be.a('error')
            .should.equal(_(`UI自动化新建合作商...`));
    });

    it('click: #container div.hetBeauty-last-filter > section.hetBeauty-filter-item > i.hetBeauty-filter-delete > svg, 4, 9, 0', async function(){
        await driver.sleep(300).wait('#container div.hetBeauty-last-filter > section.hetBeauty-filter-item > i.hetBeauty-filter-delete > svg', 30000)
               .sleep(300).mouseMove(4, 9).click(0);
    });

    it('click: 上架 ( #container tr:nth-child(1) > td:nth-child(8) > span > span:nth-child(1), 20, 11, 0 )', async function(){
        await driver.sleep(300).wait('#container tr:nth-child(1) > td:nth-child(8) > span > span:nth-child(1)', 30000)
               .sleep(300).mouseMove(20, 11).click(0);
    });

    it('click: 确 认 ( div.ant-modal-footer > button[type="button"].ant-btn-primary, 28, 10, 0 )', async function(){
        await driver.sleep(300).wait('div.ant-modal-footer > button[type="button"].ant-btn-primary', 30000)
               .sleep(300).mouseMove(28, 10).click(0);
    });

    it('scrollElementTo: #container section > section.ant-layout, 0, 151', async function(){
        await driver.sleep(300).wait('#container section > section.ant-layout', 30000)
               .sleep(300).scrollElementTo(0, 151);
    });

    it('click: 上架商品 ( //div[text()="上架商品"], 47, 24, 0 )', async function(){
        await driver.sleep(300).wait('//div[text()="上架商品"]', 30000)
               .sleep(300).mouseMove(47, 24).click(0);
    });

    it('click: 门店授权 ( #container tr:nth-child(1) > td:nth-child(8) > span > span:nth-child(2) > span.blue_font, 43, 5, 0 )', async function(){
        await driver.sleep(300).wait('#container tr:nth-child(1) > td:nth-child(8) > span > span:nth-child(2) > span.blue_font', 30000)
               .sleep(300).mouseMove(43, 5).click(0);
    });

    it('click: 授权 ( tr:nth-child(1) > td:nth-child(5) > span > span.blue_font, 19, 3, 0 )', async function(){
        await driver.sleep(300).wait('tr:nth-child(1) > td:nth-child(5) > span > span.blue_font', 30000)
               .sleep(300).mouseMove(19, 3).click(0);
    });

    it('sendKeys: 123', async function(){
        await driver.sendKeys('123');
    });

    it('click: div.ant-modal-body > div > div.product-online-headder > div.hetBeauty-list-header, 885, 32, 0', async function(){
        await driver.sleep(300).wait('div.ant-modal-body > div > div.product-online-headder > div.hetBeauty-list-header', 30000)
               .sleep(300).mouseMove(885, 32).click(0);
    });
	
	 it('click: div:nth-child(14) > div.ant-modal-root > div[role="dialog"].ant-modal-centered > div[role="document"].ant-modal > div.ant-modal-content > button[type="button"].ant-modal-close > span.ant-modal-close-x > i.ant-modal-close-icon > svg > path, 6, 7, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(14) > div > div.ant-modal-wrap.ant-modal-centered > div > div.ant-modal-content > button > span > i > svg > path', 50000)
               .sleep(300).mouseMove(6, 7).click(0);
    });
	
	/*
	
	it('click: div:nth-child(16) > div.ant-modal-root > div[role="dialog"].ant-modal-centered > div[role="document"].ant-modal > div.ant-modal-content > button[type="button"].ant-modal-close > span.ant-modal-close-x > i.ant-modal-close-icon > svg > path, 6, 7, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(16) > div.ant-modal-root > div[role="dialog"].ant-modal-centered > div[role="document"].ant-modal > div.ant-modal-content > button[type="button"].ant-modal-close > span.ant-modal-close-x > i.ant-modal-close-icon > svg', 30000)
               .sleep(300).mouseMove(6, 7).click(0);
    });
	/html/body/div[6]/div/div[2]/div/div[2]/button/span/i/svg/path
	document.querySelector("body > div:nth-child(14) > div > div.ant-modal-wrap.ant-modal-centered > div > div.ant-modal-content > button > span > i > svg > path")
	body > div:nth-child(14) > div > div.ant-modal-wrap.ant-modal-centered > div > div.ant-modal-content > button > span > i > svg > path
	*/
	/*

    it('click: div:nth-child(19) > div.ant-modal-root > div[role="dialog"].ant-modal-centered > div[role="document"].ant-modal > div.ant-modal-content > button[type="button"].ant-modal-close > span.ant-modal-close-x > i.ant-modal-close-icon > svg > path, 8, 3, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(19) > div.ant-modal-root > div[role="dialog"].ant-modal-centered > div[role="document"].ant-modal > div.ant-modal-content > button[type="button"].ant-modal-close > span.ant-modal-close-x > i.ant-modal-close-icon > svg > path', 30000)
               .sleep(300).mouseMove(8, 3).click(0);
    });
	*/
	/*
	
	it('click: div:nth-child(16) > div.ant-modal-root > div[role="dialog"].ant-modal-centered > div[role="document"].ant-modal > div.ant-modal-content > button[type="button"].ant-modal-close > span.ant-modal-close-x > i.ant-modal-close-icon > svg > path, 4, 4, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(16) > div.ant-modal-root > div[role="dialog"].ant-modal-centered > div[role="document"].ant-modal > div.ant-modal-content > button[type="button"].ant-modal-close > span.ant-modal-close-x > i.ant-modal-close-icon > svg > path', 30000)
               .sleep(300).mouseMove(4, 4).click(0);
    });
	it('click: div:nth-child(16) > div.ant-modal-root > div[role="dialog"].ant-modal-centered > div[role="document"].ant-modal > div.ant-modal-content > button[type="button"].ant-modal-close > span.ant-modal-close-x > i.ant-modal-close-icon > svg > path, 6, 7, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(16) > div.ant-modal-root > div[role="dialog"].ant-modal-centered > div[role="document"].ant-modal > div.ant-modal-content > button[type="button"].ant-modal-close > span.ant-modal-close-x > i.ant-modal-close-icon > svg > path', 30000)
               .sleep(300).mouseMove(6, 7).click(0);
    });
	*/
	
	/*

    it('click: 分成设置 ( #container tr:nth-child(1) > td:nth-child(8) > span > span:nth-child(3) > span.blue_font, 34, 11, 0 )', async function(){
        await driver.sleep(300).wait('#container tr:nth-child(1) > td:nth-child(8) > span > span:nth-child(3) > span.blue_font', 30000)
               .sleep(300).mouseMove(34, 11).click(0);
    });

    it('scrollElementTo: #container section > section.ant-layout, 0, 0', async function(){
        await driver.sleep(300).wait('#container section > section.ant-layout', 30000)
               .sleep(300).scrollElementTo(0, 0);
    });

    it('scrollElementTo: #container section > section.ant-layout, 0, 300', async function(){
        await driver.sleep(300).wait('#container section > section.ant-layout', 30000)
               .sleep(300).scrollElementTo(0, 300);
    });

    it('scrollElementTo: #container section > section.ant-layout, 0, 200', async function(){
        await driver.sleep(300).wait('#container section > section.ant-layout', 30000)
               .sleep(300).scrollElementTo(0, 200);
    });

    it('click: 参与分成 ( //a[text()="参与分成"], 33, 2, 0 )', async function(){
        await driver.sleep(300).wait('//a[text()="参与分成"]', 30000)
               .sleep(300).mouseMove(33, 2).click(0);
    });

    it('click: #container i.anticon-edit > svg, 5, 6, 0', async function(){
        await driver.sleep(300).wait('#container i.anticon-edit > svg', 30000)
               .sleep(300).mouseMove(5, 6).click(0);
    });

    it('sendKeys: {BACK_SPACE}{BACK_SPACE}{BACK_SPACE}10{BACK_SPACE}{BACK_SPACE}{BACK_SPACE}{BACK_SPACE}10', async function(){
        await driver.sendKeys('{BACK_SPACE}{BACK_SPACE}{BACK_SPACE}10{BACK_SPACE}{BACK_SPACE}{BACK_SPACE}{BACK_SPACE}10');
    });

    it('click: #container div:nth-child(2) > div.ant-table-wrapper, 637, 171, 0', async function(){
        await driver.sleep(300).wait('#container div:nth-child(2) > div.ant-table-wrapper', 30000)
               .sleep(300).mouseMove(637, 171).click(0);
    });

    it('scrollElementTo: #container section > section.ant-layout, 0, 100', async function(){
        await driver.sleep(300).wait('#container section > section.ant-layout', 30000)
               .sleep(300).scrollElementTo(0, 100);
    });

    it('click: #container i.anticon-arrow-left > svg, 6, 11, 0', async function(){
        await driver.sleep(300).wait('#container i.anticon-arrow-left > svg', 30000)
               .sleep(300).mouseMove(6, 11).click(0);
    });

    it('scrollElementTo: #container section > section.ant-layout, 0, 0', async function(){
        await driver.sleep(300).wait('#container section > section.ant-layout', 30000)
               .sleep(300).scrollElementTo(0, 0);
    });

    it('click: 安全退出 ( //span[text()="安全退出"], 30, 5, 0 )', async function(){
        await driver.sleep(300).wait('//span[text()="安全退出"]', 30000)
               .sleep(300).mouseMove(30, 5).click(0);
    });

    it('click: 确 定 ( div.ant-modal-footer > div > button[type="button"].ant-btn-primary, 25, 7, 0 )', async function(){
        await driver.sleep(300).wait('div.ant-modal-footer > div > button[type="button"].ant-btn-primary', 30000)
               .sleep(300).mouseMove(25, 7).click(0);
    });
	

   

   */

   

   

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
                    self.driver = driver.session(sessionConfig).maximize().config({
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
