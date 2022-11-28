// Import and the ethers.js library in a variable
const { ethers } = require('ethers');

// Create a signer, Wallet is a common Signer
// Call createRandom() on Wallet objet to create a new wallet
const wallet = ethers.Wallet.createRandom();

// Print the informations store in the wallet variable
console.log(wallet.address);
console.log(wallet.privateKey);
console.log(wallet.mnemonic);