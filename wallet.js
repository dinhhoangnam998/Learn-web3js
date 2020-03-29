import Web3 from 'web3'
const web3 = new Web3('HTTP://127.0.0.1:8545')
const acc = web3.eth.accounts.create();
console.log(web3.eth.accounts.wallet.add(acc));
console.log(web3.eth.accounts.wallet.add('9652ed411d15b32ef4b71111027be8b3e42e404a12ef432ebdab3872927be3c9'));
console.log(web3.eth.accounts.wallet.create(10));
console.log(web3.eth.accounts.wallet.remove(1));
console.log(web3.eth.accounts.wallet.clear());

