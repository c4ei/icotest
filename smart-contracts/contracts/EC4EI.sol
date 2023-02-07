// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract EC4EI is ERC20 {
    constructor() ERC20("C4EI ETH", "EC4EI") {
        _mint(msg.sender, 100000000 * 1e18);  // 1억개로 변경
    }
}
