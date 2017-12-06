pragma solidity ^0.4.4;


contract ExpenseSplit {

    address[] parties;

    function addParty(address newParty) public returns(uint256 length){
        parties.push(newParty);
        return parties.length;
    }

    function () public payable {
        for (uint i = 0; i < parties.length; i ++) {
            parties[i].transfer(msg.value / parties.length);
        }
    }
}