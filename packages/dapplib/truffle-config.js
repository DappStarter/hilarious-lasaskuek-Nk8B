require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half enter blue tooth notice rival smile pulse gesture only fresh style'; 
let testAccounts = [
"0xb7160da3b4aeb2b44dac8054f89227b3bf4a9165135a5d450f1258ce96d056a6",
"0xfde2e2938109d9b04ad4b7b4dbaea427ecc059779bb4a5a1f19cd4e30e4a84a3",
"0x72c287aea7b388a2d8c1b0a1121c94f37fffeb338654b75489d4f352dcc7b11f",
"0x71c8c997e9afca23b0a943ea697ecf803d815f175ef90b2c410b90a9d05be86b",
"0x869067dfc54cbdf04e1d6a5bd133234ed570d5d719978d5f75dba4c0099d696a",
"0x5a36134d520105aabe11d658c3cf25fad0bcebd844b2f2fbdc0d86f3e6da5614",
"0x81576fc0e38ad11412c8316ff22c14ba24a61d466814134b2125c21aeb3a4afc",
"0xd0ecc9710f13ba0b49fbc93798449eea2c9f1709c3b55dfe9dc408092ead7bc2",
"0x6aa81a50fa79242ec15629dcd6f84d05b062558d189adaaa008efba4f7610e3e",
"0x3c107064e2d959bf8e1aa60772131b0ea6f85426d9191d6c04b4f8eb4f5eafa2"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

