    //search functionality
    const search = document.querySelector('.header__search--bar');
    const cryptoList = document.querySelector('.crypto__list');
    const cryptoName = document.querySelectorAll('.crypto__name--title');

    const filterCoin = term => {

        Array.from(cryptoName)
            .filter(coin => !coin.textContent.toLocaleLowerCase().includes(term))
                    .forEach( coin => {
                        coin.parentElement.parentElement.parentElement.parentElement.classList.add('filtered');
                    })

        Array.from(cryptoName)
            .filter(coin => coin.textContent.toLocaleLowerCase().includes(term))
                    .forEach(coin => {
                        coin.parentElement.parentElement.parentElement.parentElement.classList.remove('filtered');
                    })
    };

    search.addEventListener('keyup', () => {
        term = search.value.trim().toLowerCase();
        filterCoin(term);
    });

    //Updating the UI
    const updateUI = data => {

    //Converting and assigning the object into Array
    let conData = Object.entries(data);

    conData.forEach(curr => {
        
        //checking the various coins
        switch (curr[0]) {
            case 'BTC':
                //Referencing the html
                const gbpbtc = document.getElementById("btc-GBP");
                const usdbtc = document.getElementById("btc-USD");
                const eurbtc = document.getElementById("btc-EUR");
                const ghsbtc = document.getElementById("btc-GHS");
                const ngnbtc = document.getElementById("btc-NGN");

                //updating the prices
                gbpbtc.innerHTML = `&#163;  ${curr[1].GBP}`;
                usdbtc.innerHTML = `&#36; ${curr[1].USD}`;
                eurbtc.innerHTML = `&#128; ${curr[1].EUR}`;
                ghsbtc.innerHTML = `&#8373; ${curr[1].GHS}`;
                ngnbtc.innerHTML = `&#8358; ${curr[1].NGN}`;

                break;
            case 'ETH':
                //Referencing the html
                const gbpeth = document.getElementById("eth-GBP");
                const usdeth = document.getElementById("eth-USD");
                const eureth = document.getElementById("eth-EUR");
                const ghseth = document.getElementById("eth-GHS");
                const ngneth = document.getElementById("eth-NGN");

                //updating the prices
                gbpeth.innerHTML = `&#163;  ${curr[1].GBP}`;
                usdeth.innerHTML = `&#36; ${curr[1].USD}`;
                eureth.innerHTML = `&#128; ${curr[1].EUR}`;
                ghseth.innerHTML = `&#8373; ${curr[1].GHS}`;
                ngneth.innerHTML = `&#8358; ${curr[1].NGN}`;

                break;
            case 'BCH':
                //Referencing the html
                const gbpbch = document.getElementById("bch-GBP");
                const usdbch = document.getElementById("bch-USD");
                const eurbch = document.getElementById("bch-EUR");
                const ghsbch = document.getElementById("bch-GHS");
                const ngnbch = document.getElementById("bch-NGN");

                //updating the prices
                gbpbch.innerHTML = `&#163;  ${curr[1].GBP}`;
                usdbch.innerHTML = `&#36; ${curr[1].USD}`;
                eurbch.innerHTML = `&#128; ${curr[1].EUR}`;
                ghsbch.innerHTML = `&#8373; ${curr[1].GHS}`;
                ngnbch.innerHTML = `&#8358; ${curr[1].NGN}`;
                break;
            case 'EOS':

                //Referencing the html
                const gbpeos = document.getElementById("eos-GBP");
                const usdeos = document.getElementById("eos-USD");
                const eureos = document.getElementById("eos-EUR");
                const ghseos = document.getElementById("eos-GHS");
                const ngneos = document.getElementById("eos-NGN");

                //updating the prices
                gbpeos.innerHTML = `&#163;  ${curr[1].GBP}`;
                usdeos.innerHTML = `&#36; ${curr[1].USD}`;
                eureos.innerHTML = `&#128; ${curr[1].EUR}`;
                ghseos.innerHTML = `&#8373; ${curr[1].GHS}`;
                ngneos.innerHTML = `&#8358; ${curr[1].NGN}`;
                break;
            case 'LTC':

                //Referencing the html
                const gbpltc = document.getElementById("ltc-GBP");
                const usdltc = document.getElementById("ltc-USD");
                const eurltc = document.getElementById("ltc-EUR");
                const ghsltc = document.getElementById("ltc-GHS");
                const ngnltc = document.getElementById("ltc-NGN");

                //updating the prices
                gbpltc.innerHTML = `&#163;  ${curr[1].GBP}`;
                usdltc.innerHTML = `&#36; ${curr[1].USD}`;
                eurltc.innerHTML = `&#128; ${curr[1].EUR}`;
                ghsltc.innerHTML = `&#8373; ${curr[1].GHS}`;
                ngnltc.innerHTML = `&#8358; ${curr[1].NGN}`;            
                break;
            case 'BSV':

                //Referencing the html
                const gbpbsv = document.getElementById("bsv-GBP");
                const usdbsv = document.getElementById("bsv-USD");
                const eurbsv = document.getElementById("bsv-EUR");
                const ghsbsv = document.getElementById("bsv-GHS");
                const ngnbsv = document.getElementById("bsv-NGN");

                //updating the prices
                gbpbsv.innerHTML = `&#163;  ${curr[1].GBP}`;
                usdbsv.innerHTML = `&#36; ${curr[1].USD}`;
                eurbsv.innerHTML = `&#128; ${curr[1].EUR}`;
                ghsbsv.innerHTML = `&#8373; ${curr[1].GHS}`;
                ngnbsv.innerHTML = `&#8358; ${curr[1].NGN}`;            
                break;
            case 'TRX':

                //Referencing the html
                const gbptrx = document.getElementById("trx-GBP");
                const usdtrx = document.getElementById("trx-USD");
                const eurtrx = document.getElementById("trx-EUR");
                const ghstrx = document.getElementById("trx-GHS");
                const ngntrx = document.getElementById("trx-NGN");

                //updating the prices
                gbptrx.innerHTML = `&#163;  ${curr[1].GBP}`;
                usdtrx.innerHTML = `&#36; ${curr[1].USD}`;
                eurtrx.innerHTML = `&#128; ${curr[1].EUR}`;
                ghstrx.innerHTML = `&#8373; ${curr[1].GHS}`;
                ngntrx.innerHTML = `&#8358; ${curr[1].NGN}`;            
                break;
            case 'ETC':

                //Referencing the html
                const gbpetc = document.getElementById("etc-GBP");
                const usdetc = document.getElementById("etc-USD");
                const euretc = document.getElementById("etc-EUR");
                const ghsetc = document.getElementById("etc-GHS");
                const ngnetc = document.getElementById("etc-NGN");

                //updating the prices
                gbpetc.innerHTML = `&#163;  ${curr[1].GBP}`;
                usdetc.innerHTML = `&#36; ${curr[1].USD}`;
                euretc.innerHTML = `&#128; ${curr[1].EUR}`;
                ghsetc.innerHTML = `&#8373; ${curr[1].GHS}`;
                ngnetc.innerHTML = `&#8358; ${curr[1].NGN}`;           
                break;
            case 'XRP':

                //Referencing the html
                const gbpxrp = document.getElementById("xrp-GBP");
                const usdxrp = document.getElementById("xrp-USD");
                const eurxrp = document.getElementById("xrp-EUR");
                const ghsxrp = document.getElementById("xrp-GHS");
                const ngnxrp = document.getElementById("xrp-NGN");

                //updating the prices
                gbpxrp.innerHTML = `&#163;  ${curr[1].GBP}`;
                usdxrp.innerHTML = `&#36; ${curr[1].USD}`;
                eurxrp.innerHTML = `&#128; ${curr[1].EUR}`;
                ghsxrp.innerHTML = `&#8373; ${curr[1].GHS}`;
                ngnxrp.innerHTML = `&#8358; ${curr[1].NGN}`;            
                break;
            case 'BNB':

                //Referencing the html
                const gbpbnb = document.getElementById("bnb-GBP");
                const usdbnb = document.getElementById("bnb-USD");
                const eurbnb = document.getElementById("bnb-EUR");
                const ghsbnb = document.getElementById("bnb-GHS");
                const ngnbnb = document.getElementById("bnb-NGN");

                //updating the prices
                gbpbnb.innerHTML = `&#163;  ${curr[1].GBP}`;
                usdbnb.innerHTML = `&#36; ${curr[1].USD}`;
                eurbnb.innerHTML = `&#128; ${curr[1].EUR}`;
                ghsbnb.innerHTML = `&#8373; ${curr[1].GHS}`;
                ngnbnb.innerHTML = `&#8358; ${curr[1].NGN}`;            
                break;
            case 'FLASH':

                //Referencing the html
                const gbpflash = document.getElementById("flash-GBP");
                const usdflash = document.getElementById("flash-USD");
                const eurflash = document.getElementById("flash-EUR");
                const ghsflash = document.getElementById("flash-GHS");
                const ngnflash = document.getElementById("flash-NGN");

                //updating the prices
                gbpflash.innerHTML = `&#163;  ${curr[1].GBP}`;
                usdflash.innerHTML = `&#36; ${curr[1].USD}`;
                eurflash.innerHTML = `&#128; ${curr[1].EUR}`;
                ghsflash.innerHTML = `&#8373; ${curr[1].GHS}`;
                ngnflash.innerHTML = `&#8358; ${curr[1].NGN}`;            
                break;
            case 'DASH':

                //Referencing the html
                const gbpdash = document.getElementById("dash-GBP");
                const usddash = document.getElementById("dash-USD");
                const eurdash = document.getElementById("dash-EUR");
                const ghsdash = document.getElementById("dash-GHS");
                const ngndash = document.getElementById("dash-NGN");

                //updating the prices
                gbpdash.innerHTML = `&#163;  ${curr[1].GBP}`;
                usddash.innerHTML = `&#36; ${curr[1].USD}`;
                eurdash.innerHTML = `&#128; ${curr[1].EUR}`;
                ghsdash.innerHTML = `&#8373; ${curr[1].GHS}`;
                ngndash.innerHTML = `&#8358; ${curr[1].NGN}`;            
                break;
            case 'XLM':

                //Referencing the html
                const gbpxlm = document.getElementById("xlm-GBP");
                const usdxlm = document.getElementById("xlm-USD");
                const eurxlm = document.getElementById("xlm-EUR");
                const ghsxlm = document.getElementById("xlm-GHS");
                const ngnxlm = document.getElementById("xlm-NGN");

                //updating the prices
                gbpxlm.innerHTML = `&#163;  ${curr[1].GBP}`;
                usdxlm.innerHTML = `&#36; ${curr[1].USD}`;
                eurxlm.innerHTML = `&#128; ${curr[1].EUR}`;
                ghsxlm.innerHTML = `&#8373; ${curr[1].GHS}`;
                ngnxlm.innerHTML = `&#8358; ${curr[1].NGN}`;            
                break;
            case 'USDT':

                //Referencing the html
                const gbpusdt = document.getElementById("usdt-GBP");
                const usdusdt = document.getElementById("usdt-USD");
                const eurusdt = document.getElementById("usdt-EUR");
                const ghsusdt = document.getElementById("usdt-GHS");
                const ngnusdt = document.getElementById("usdt-NGN");

                //updating the prices
                gbpusdt.innerHTML = `&#163;  ${curr[1].GBP}`;
                usdusdt.innerHTML = `&#36; ${curr[1].USD}`;
                eurusdt.innerHTML = `&#128; ${curr[1].EUR}`;
                ghsusdt.innerHTML = `&#8373; ${curr[1].GHS}`;
                ngnusdt.innerHTML = `&#8358; ${curr[1].NGN}`;            
                break;
            case 'ATOM':

                //Referencing the html
                const gbpatom = document.getElementById("atom-GBP");
                const usdatom = document.getElementById("atom-USD");
                const euratom = document.getElementById("atom-EUR");
                const ghsatom = document.getElementById("atom-GHS");
                const ngnatom = document.getElementById("atom-NGN");

                //updating the prices
                gbpatom.innerHTML = `&#163;  ${curr[1].GBP}`;
                usdatom.innerHTML = `&#36; ${curr[1].USD}`;
                euratom.innerHTML = `&#128; ${curr[1].EUR}`;
                ghsatom.innerHTML = `&#8373; ${curr[1].GHS}`;
                ngnatom.innerHTML = `&#8358; ${curr[1].NGN}`;            
                break;
            }
        });
    };
    

    setInterval(() => {

        //CAlling the API promise
        blockFetch()
            .then(data => updateUI(data));

    }, 2000);