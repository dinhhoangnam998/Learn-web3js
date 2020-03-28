import Web3 from 'web3';

const web3 = new Web3('HTTP://127.0.0.1:8545');
web3.eth.defaultAccount = '0xE338D6bC9305CC9D430D3B970F0b939F7138786A';
web3.eth.accounts.wallet.add('9652ed411d15b32ef4b71111027be8b3e42e404a12ef432ebdab3872927be3c9');

let subscribe = web3.eth.subscribe("logs", {
  address: ['', ''],
  topics: ['', '']
})

subscribe.on('data', (logs)=> console.log(logs))
subscribe.unsubscribe().finally(console.log)
web3.eth.clearSubscriptions();