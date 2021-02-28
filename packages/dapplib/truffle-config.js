require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture help olympic trip notice rival smile provide install basic fortune tent'; 
let testAccounts = [
"0x539d0db4098b485273d7062481b03bf43188642944fc9fc5c21ff8683919f5d0",
"0x58b4beb7ee3884cdf083bce77a1a0f242f9bb213bc67ccb586d172006efb7a1f",
"0x254044d4f208096dd427f7277c152f9b4579066a13aa6d855110985b0ef44dfb",
"0x4ba4617b81b1bb4db26d7a8adf42ba3b9119f965b33047465fd7b734e213e614",
"0xa0e2e278a9e4f889624c98525abd7bd8fac4a8316c346d44d016b15059c02b96",
"0x3f0e7e3df2187b38cad7665a4b582c73ef741181c48dee2749a0cd0bd7efbe7e",
"0xaf0d1e64f7b3b207a9aaccb7d2742b65da061506e5c73adf70f7b22ddeb5165b",
"0x676366c8a7b9067ebb19f1577ababe0bb81267febabd26a43d50c2a51eb37225",
"0x1c4a7aacb9063e1a2e9098d27917f5b2a58487e4a805fbe30612916a821d3d2e",
"0x47aad59a4515403bd5f8b89e1ef08fe3a7e6f8d2a24ef75d1a07296135ec3613"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
