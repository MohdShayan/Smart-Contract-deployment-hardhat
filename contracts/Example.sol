// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Example {
    string public message = "Hello Story Protocol!";

    function setMessage(string calldata _msg) external {
        message = _msg;
    }
}
