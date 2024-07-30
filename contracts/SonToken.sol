pragma solidity ^0.8.24;
import {ERC20} from "node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {Ownable} from "node_modules/@openzeppelin/contracts/access/Ownable.sol";
import {IERC20} from "node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol";
contract SonToken is ERC20, Ownable {
    uint public decimal = 18;
    uint public cap = 1000000;
    address payable private withdrawWallet;
    struct Whitelist{
        bool isBuyer;
        uint maxAmount;
        uint boughtAmount;
        uint price;
    }
    mapping(address => Whitelist) buyers;
    IERC20 USDT;
    event buyToken(address buyer, uint tokenAmount, uint price);

    constructor( IERC20 stableToken ) ERC20("SonToken", "STK") Ownable(msg.sender){
        USDT = stableToken;
        withdrawWallet = payable(owner());
    }

    // Set wallet receive USDT
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
    function _buyToken(uint USDTAmount) public {
        // maximum can buy token
        uint avaiableTokenAmount = buyers[msg.sender].maxAmount - buyers[msg.sender].boughtAmount;
        // amount token want to buy
        uint tokenAmount = USDTAmount/(buyers[msg.sender].price);
        require(buyers[msg.sender].isBuyer, "You do not have permission to buy");
        require(USDT.balanceOf(msg.sender) >= USDTAmount, "Insufficient account balance");
        require(avaiableTokenAmount <= tokenAmount, "Amount is more than avaiable token can buy");
        buyers[msg.sender].boughtAmount += tokenAmount;
        USDT.transferFrom(msg.sender, withdrawWallet, USDTAmount);
        _mint(msg.sender, tokenAmount);
        emit buyToken(msg.sender, tokenAmount, buyers[msg.sender].price);
        
    }
}