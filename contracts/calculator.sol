// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Calculator{

    function add(uint a, uint b) public pure  returns (uint c) {
        c = a + b;
    }
    
    function subtract(uint a, uint b) public pure returns (uint c) {
        require(a > b, "Can't carry out this function");
        c = a - b;
    }

    function multiply(uint a, uint b) public pure returns (uint c) {
        c = a * b;
    }

    function division(uint a, uint b) public pure returns (uint c) {
        if (b == 0) revert("Divisor can not be 0");
        c = a / b;
    }
}