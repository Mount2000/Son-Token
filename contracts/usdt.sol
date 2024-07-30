pragma solidity ^0.8.24;
import {ERC20} from "node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";
contract USDT is ERC20{
    constructor() ERC20("USDT", "USDT"){
        _mint(msg.sender, 1000);
    }
    function mint(uint amount) public{
        _mint(msg.sender, amount);
    }
}