const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const {interface, bytecode} = require("./compile");

const provider = new HDWalletProvider(
    "cram cinnamon moon off opera lumber transfer net fatal erupt sphere disagree",
    "https://rinkeby.infura.io/v3/3a3f2b88da88456eb52c8f5032203ccf"
);

const web3 = new Web3(provider);


const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log("Attempting to deploy from account", accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data: bytecode})
    .send({from: accounts[0], gas: "1000000"});

    console.log(interface);
    console.log("Contract deployed to:", result.options.address);

    provider.engine.stop();
};

deploy();

