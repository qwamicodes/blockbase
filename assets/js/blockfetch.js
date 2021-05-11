//Using the Api Key
const apiKey = `8e235c60f8d9b03ccc2249055933188a64aab9ed39b865c923ee9469ef28cf40`;
const cryps = `BTC,ETH,BCH,EOS,LTC,BSV,TRX,ETC,XRP,BNB,FLASH,DASH,XLM,USDT,ATOM`;
const prices = `GBP,USD,EUR,GHS,NGN`;


const blockFetch = async () => {
    const fetched = await fetch(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=${cryps}&tsyms=${prices}&api_key=${apiKey}`);
    const data = fetched.json();
    return data;
};