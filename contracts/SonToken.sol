pragma solidity ^0.8.24;
import {ERC20} from "node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {Ownable} from "node_modules/@openzeppelin/contracts/access/Ownable.sol";
import {IERC20} from "node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "hardhat/console.sol";
contract SonToken is ERC20, Ownable {
    address payable private withdrawWallet;
    struct Whitelist{
        bool isBuyer;
        uint maxAmount; // maximum amount token can buy
        uint boughtAmount; // amount token bought
        uint price; // rate token/ETH
    }
    mapping(address => Whitelist) buyers;
    event buyToken(address buyer, uint tokenAmount, uint price);

    constructor() ERC20("SonToken", "STK") Ownable(msg.sender){
        withdrawWallet = payable(owner());
    }

    // Set wallet receive ETH
    function setWithdrawWallet(address payable _withdrawWallet) public onlyOwner{
        withdrawWallet = _withdrawWallet;
    }

    // manage white list
    function setIsBuyer(address buyer, bool _isBuyer) public onlyOwner{
        buyers[buyer].isBuyer = _isBuyer;
    }
    function setMaxAmount(address buyer, uint _maxAmount) public onlyOwner{
        buyers[buyer].maxAmount = _maxAmount;
    }
    function setPrice(address buyer, uint _price) public onlyOwner{
        buyers[buyer].price = _price;
    }
    
    // Crowdsale
    function _buyToken() payable public {
        uint ETHAmount = msg.value/1 ether;
        // amount token want to buy
        uint tokenAmount = ETHAmount/(buyers[msg.sender].price);

        
        require(buyers[msg.sender].isBuyer, "You do not have permission to buy");
        require(msg.sender.balance >= ETHAmount, "Insufficient account balance");
        require(buyers[msg.sender].maxAmount >= tokenAmount + buyers[msg.sender].boughtAmount, "Amount is more than avaiable token can buy");
        
        buyers[msg.sender].boughtAmount += tokenAmount;
        withdrawWallet.transfer(ETHAmount);
        _mint(msg.sender, tokenAmount);
        
        emit buyToken(msg.sender, tokenAmount, buyers[msg.sender].price);
        
    }
}