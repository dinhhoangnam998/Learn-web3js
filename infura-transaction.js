// this signTx way to complicate, use web3.eth.accounts.signTx instead
const Web3 = require('web3')
const Tx = require('ethereumjs-tx').Transaction

// connect to Infura node
const web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/fb1c2f2f566443d08c59aae698c78839'))

// the address that will send the test transaction
const addressFrom = '0xf08a810eFBAFCCd36F065BE304D50378873Cc5B4'
const privKey = '6A6CFFD6BED34FB3BB6EEBD27F6786690912EAF9FC75B1CD28533BAB951D059C'

const addressTo = '0x863C32906d68B7022070cD5F14583fb927A46c0B'

// Signs the given transaction data and sends it. Abstracts some of the details 
// of buffering and serializing the transaction for web3.
function sendSigned(txData, cb) {
  const privateKey = Buffer.from(privKey, 'hex')
  const transaction = new Tx(txData, { 'chain': 'ropsten' })
  transaction.sign(privateKey)
  const serializedTx = transaction.serialize().toString('hex')
  web3.eth.sendSignedTransaction('0x' + serializedTx, cb)
}

// get the number of transactions sent so far so we can create a fresh nonce
web3.eth.getTransactionCount(addressFrom).then(txCount => {

  // construct the transaction data
  const txData = {
    nonce: web3.utils.toHex(txCount),
    gasLimit: web3.utils.toHex(1000000),
    gasPrice: web3.utils.toHex(10e9), // 10 Gwei
    to: addressTo,
    from: addressFrom,
    value: '0x000001'
  }

  // fire away!
  sendSigned(txData, function (err, result) {
    if (err) return console.log('error', err)
    console.log('sent', result)
  })

})