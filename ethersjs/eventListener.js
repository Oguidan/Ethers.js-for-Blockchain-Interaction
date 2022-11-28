const { ethers } = require("ethers");


// Use Topic Set Filter to filter by topic (event name and indexed arguments)
const eventListener = () => {

    // Create a provider
    const provider = new ethers.providers.JsonRpcProvider("https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161");

    const topicSetsFilter = [ ethers.utils.id("Transfer(address,address,uint256)"),];

    provider.on(topicSetsFilter, (res) => {
        console.log (res);
    });
};

eventListener();


// Use of Filter
// event Transfer(address indexed from, address indexed to, uint256 value)
/*const filter = [ethers.utils.id("Transfer(address,address,uinnt256)"), ADDRESS_FROM, ADDRESS_TO,];

provider.on(filter, (res) => {
    console.log(res);
});*/


// We can use Log Filter. This is used to filter by contract address and topic
// event Transfer(address indexed from, address to, uint256 value)
/*const filter = {
    address: CONTRACT_ADDRESS, topic: [ethers.utils.id("Transfer(address,address,uint256)"), ADDRESS_FROM, ADDRESS_TO,],
};

provider.on(filter, (res) => {
    console.log(res);
})*/


// We can use the contract method to filter an event from a specific contract address
// Create a contract instance
/*const contract =  new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, ETHERS_PROVIDER_INSTANCE);

// event Transfer(address indexed from, address indexed to, uint256 value)
const filter = contract.filter.Transfer(ADDRESS_FROM, ADDRESS_TO);

// Create the event Listener
contract.on(filter, (args1, args2, args3, txnLog) => {
    // Do something here
    console.log(args1, args2, args3, txnLog);
});*/