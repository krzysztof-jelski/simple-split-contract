const ExpenseSplit = artifacts.require("./ExpenseSplit.sol");
let a = 1;

contract('ExpenseSplit', function (accounts) {
    it("should split funds", () => {
        let expenseSplit;
        return ExpenseSplit.deployed().then(function (instance) {
            expenseSplit = instance;
            return expenseSplit.addParty(accounts[1]);
        }).then(() => {
            return expenseSplit.addParty(accounts[2]);
        }).then(() => {
            return expenseSplit.addParty(accounts[3]);
        }).then(() => {
            return expenseSplit.send(web3.toWei(12, "finney"), {from: accounts[4]});
        }).then(function (result) {
            assert.equal("100.004", web3.fromWei(web3.eth.getBalance(accounts[1]), "ether").toString());
            assert.equal("100.004", web3.fromWei(web3.eth.getBalance(accounts[1]), "ether").toString());
            assert.equal("100.004", web3.fromWei(web3.eth.getBalance(accounts[1]), "ether").toString());
        });
    });
});
