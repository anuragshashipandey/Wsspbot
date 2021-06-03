const puppeteer = require('puppeteer');
(async ()=>{

try{

const browser = await puppeteer.launch({
    headless: false,
    slowMo: 250, // slow down by 250ms
  });

const page=await browser.newPage();

await page.setUserAgent(
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
);



await page.goto('https://web.whatsapp.com/');
await page.waitForSelector('*[data-icon=chat]',
{
    polling: 1000,
    timeout: 0
})
console.log("Logged in!");


const sear="#side > div.SgIJV > div > label"
await page.waitForSelector(sear);
await page.click(sear);
console.log('searching');
await page.evaluate(()=>{
    const contactName="4 baar kata and counting";
    document.execCommand("insertText",false,contactName);
});



await delay(5000);

const chatbox="#pane-side > div:nth-child(1) > div > div > div:nth-child(9) > div > div > div.TbtXF > div._2pkLM > div._3Dr46 > span > span"; 
await page.waitForSelector(chatbox);
await page.click(chatbox);


console.log("opened chat");


const nmsg=1000;
const inptbx="#main > footer > div.vR1LG._3wXwX.copyable-area > div._2A8P4";
for(let i=0;i<nmsg;i++){



    await page.evaluate((i)=>{
        console.log(i);
      
        let msg =`${i}) Jetha rmdi Rawat Bhadwa Nehul BoobieMan`;
        document.execCommand("insertText",false,msg);
        
    },i);
    await page.click("#main > footer > div.vR1LG._3wXwX.copyable-area > div:nth-child(3) > button > span");
    await delay(0.5); 
}

}catch(error){
    console.log(error);
}
})();


function delay(time){
    return new Promise(res=>setTimeout(res,time));
}




