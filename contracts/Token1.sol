// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Ree is ERC20 {
    constructor() ERC20("Ree", "REE") {
        _mint(msg.sender, 1000e18);
    }
}