const cryptoUrl=['https://clipground.com/images/cryptocurrency-png-9.png','https://assets.fragments.org/bundles/assets/token-weth.png',
'https://www.freepnglogos.com/uploads/bitcoin-png/bitcoin-cryptocurrency-are-there-really-any-experts-steemit-1.png',
'https://cdn2.iconfinder.com/data/icons/cryptocurrency-5/100/cryptocurrency_blockchain_crypto-16-512.png',
'https://cdn2.iconfinder.com/data/icons/cryptocurrency-5/100/cryptocurrency_blockchain_crypto-16-512.png',
'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Binance-Coin-BNB-icon.png',
'https://cryptologos.cc/logos/usd-coin-usdc-logo.png',

'https://th.bing.com/th/id/R.220a3a85e60c6bab9af7195d71703b17?rik=KZIC5ZK%2fJuteCA&riu=http%3a%2f%2fstatic3.businessinsider.com%2fimage%2f5a71a5e9ec1ade273f1f5aed-400%2ftethericon.png&ehk=70PdiqgkWLSSCDfjzOjkWWxmfC5%2fkKWSWr39%2f7oF%2f2k%3d&risl=&pid=ImgRaw&r=0',
'https://webhaga.com/wp-content/uploads/2020/11/luna1557227471663-150x150.png',
'https://img.api.cryptorank.io/coins/polygon1624610763534.png',
'https://dvh1deh6tagwk.cloudfront.net/finder-us/wp-uploads/sites/92/2019/07/Cosmoslogo_Supplied_250x250.png',
'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency/512/TRON-icon.png',
'https://storage.googleapis.com/crypto-cards.appspot.com/crypto-logos/monero-logo.png',
'https://3commas.io/blog/wp-content/uploads/2020/12/b80ce5fe.png',
'https://crypto-world.jp/wp-content/uploads/2020/07/filecoin_logo-300x294.png',
'https://assets.coingecko.com/coins/images/13029/large/axie_infinity_logo.png?1604471082',
'https://koiniom.com/assets/img/dash.png']


const cryptoNames=[ 'litcoin','etherium','bitcoin','ox','B N B','USD','solana','tether','terra','polygon','cosmos','tron','monero','algorand','filecoin',
'Axie infinity','ecash']

const classList=['one','two','three','four']

for(let i=0; i <cryptoNames.length;i++){
    const newElem=document.createElement('p')
    //newElem.innerText=names[i]
    newElem.innerHTML=`
    
    
    <img src="${cryptoUrl[i]}"/>
    <h1>${cryptoNames[i]}</h1>
   
    `
    newElem.classList.add(classList[i])
    const target=document.querySelector('div')
   
   
    target.appendChild(newElem)
   }