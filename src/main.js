const EC = require('elliptic').ec;
const ec = new EC('secp256k1');
const {BlockChain, Transaction} = require('./blockChain');

const myKey = ec.keyFromPrivate('28d475ac279d373f09f3c23e53170e79b614626326cb307008cadbd8e808808b');
const myWalletAddress = myKey.getPublic('hex');

let testCoin =  new BlockChain();

const tx1 = new Transaction(myWalletAddress, 'address2', 100);
tx1.signTransaction(myKey);
testCoin.addTransaction(tx1);

console.log("\n Starting the miner ...........");
// Mine block
testCoin.minePendingTransaction(myWalletAddress);


const tx2 = new Transaction(myWalletAddress, 'address3', 500);
tx2.signTransaction(myKey);
testCoin.addTransaction(tx2);
// Mine block
testCoin.minePendingTransaction(myWalletAddress);

console.log();
console.log(`Balance is ${testCoin.getBalanceOfAddress(myWalletAddress)}`);
















