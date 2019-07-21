const EC = require('elliptic').ec;
const ec = new EC('secp256k1');
const {BlockChain, Transaction} = require('./blockChain');

const myKey = ec.keyFromPrivate('667d0af4005ece06adfcb8070d896d49e728b4f05b00d0e58a174f1a204ae227');
const myWalletAddress = myKey.getPublic('hex');

let testCoin =  new BlockChain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
testCoin.addTransaction(tx1);

console.log("\n Starting the miner ...........");
testCoin.minePendingTransaction(myWalletAddress);

console.log("\n Balance is ", testCoin.getBalanceOfAddress(myWalletAddress));


console.log('Is Blockchain valid?', testCoin.isChainValid());














