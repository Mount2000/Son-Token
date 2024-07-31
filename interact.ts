// import { ethers } from "ethers";
// import "dotenv/config"
// const provider = new ethers.JsonRpcProvider(process.env.URL_RPC)
// const signer = new ethers.Wallet(String(process.env.PRIVATE_KEY), provider)
// const buyer = new ethers.Wallet("ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80")
// const contractAddress = '0x81863C241E442A6DDC4aE495a31d5B2B0AB3F6Dc';
// const contractABI = [
//     {
//       "inputs": [],
//       "stateMutability": "nonpayable",
//       "type": "constructor"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "address",
//           "name": "spender",
//           "type": "address"
//         },
//         {
//           "internalType": "uint256",
//           "name": "allowance",
//           "type": "uint256"
//         },
//         {
//           "internalType": "uint256",
//           "name": "needed",
//           "type": "uint256"
//         }
//       ],
//       "name": "ERC20InsufficientAllowance",
//       "type": "error"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "address",
//           "name": "sender",
//           "type": "address"
//         },
//         {
//           "internalType": "uint256",
//           "name": "balance",
//           "type": "uint256"
//         },
//         {
//           "internalType": "uint256",
//           "name": "needed",
//           "type": "uint256"
//         }
//       ],
//       "name": "ERC20InsufficientBalance",
//       "type": "error"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "address",
//           "name": "approver",
//           "type": "address"
//         }
//       ],
//       "name": "ERC20InvalidApprover",
//       "type": "error"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "address",
//           "name": "receiver",
//           "type": "address"
//         }
//       ],
//       "name": "ERC20InvalidReceiver",
//       "type": "error"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "address",
//           "name": "sender",
//           "type": "address"
//         }
//       ],
//       "name": "ERC20InvalidSender",
//       "type": "error"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "address",
//           "name": "spender",
//           "type": "address"
//         }
//       ],
//       "name": "ERC20InvalidSpender",
//       "type": "error"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "address",
//           "name": "owner",
//           "type": "address"
//         }
//       ],
//       "name": "OwnableInvalidOwner",
//       "type": "error"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "address",
//           "name": "account",
//           "type": "address"
//         }
//       ],
//       "name": "OwnableUnauthorizedAccount",
//       "type": "error"
//     },
//     {
//       "anonymous": false,
//       "inputs": [
//         {
//           "indexed": true,
//           "internalType": "address",
//           "name": "owner",
//           "type": "address"
//         },
//         {
//           "indexed": true,
//           "internalType": "address",
//           "name": "spender",
//           "type": "address"
//         },
//         {
//           "indexed": false,
//           "internalType": "uint256",
//           "name": "value",
//           "type": "uint256"
//         }
//       ],
//       "name": "Approval",
//       "type": "event"
//     },
//     {
//       "anonymous": false,
//       "inputs": [
//         {
//           "indexed": true,
//           "internalType": "address",
//           "name": "previousOwner",
//           "type": "address"
//         },
//         {
//           "indexed": true,
//           "internalType": "address",
//           "name": "newOwner",
//           "type": "address"
//         }
//       ],
//       "name": "OwnershipTransferred",
//       "type": "event"
//     },
//     {
//       "anonymous": false,
//       "inputs": [
//         {
//           "indexed": true,
//           "internalType": "address",
//           "name": "from",
//           "type": "address"
//         },
//         {
//           "indexed": true,
//           "internalType": "address",
//           "name": "to",
//           "type": "address"
//         },
//         {
//           "indexed": false,
//           "internalType": "uint256",
//           "name": "value",
//           "type": "uint256"
//         }
//       ],
//       "name": "Transfer",
//       "type": "event"
//     },
//     {
//       "anonymous": false,
//       "inputs": [
//         {
//           "indexed": false,
//           "internalType": "address",
//           "name": "buyer",
//           "type": "address"
//         },
//         {
//           "indexed": false,
//           "internalType": "uint256",
//           "name": "tokenAmount",
//           "type": "uint256"
//         },
//         {
//           "indexed": false,
//           "internalType": "uint256",
//           "name": "price",
//           "type": "uint256"
//         }
//       ],
//       "name": "buyToken",
//       "type": "event"
//     },
//     {
//       "inputs": [],
//       "name": "_buyToken",
//       "outputs": [],
//       "stateMutability": "payable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "address",
//           "name": "owner",
//           "type": "address"
//         },
//         {
//           "internalType": "address",
//           "name": "spender",
//           "type": "address"
//         }
//       ],
//       "name": "allowance",
//       "outputs": [
//         {
//           "internalType": "uint256",
//           "name": "",
//           "type": "uint256"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "address",
//           "name": "spender",
//           "type": "address"
//         },
//         {
//           "internalType": "uint256",
//           "name": "value",
//           "type": "uint256"
//         }
//       ],
//       "name": "approve",
//       "outputs": [
//         {
//           "internalType": "bool",
//           "name": "",
//           "type": "bool"
//         }
//       ],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "address",
//           "name": "account",
//           "type": "address"
//         }
//       ],
//       "name": "balanceOf",
//       "outputs": [
//         {
//           "internalType": "uint256",
//           "name": "",
//           "type": "uint256"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [],
//       "name": "decimals",
//       "outputs": [
//         {
//           "internalType": "uint8",
//           "name": "",
//           "type": "uint8"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [],
//       "name": "name",
//       "outputs": [
//         {
//           "internalType": "string",
//           "name": "",
//           "type": "string"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [],
//       "name": "owner",
//       "outputs": [
//         {
//           "internalType": "address",
//           "name": "",
//           "type": "address"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [],
//       "name": "renounceOwnership",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "address",
//           "name": "buyer",
//           "type": "address"
//         },
//         {
//           "internalType": "bool",
//           "name": "_isBuyer",
//           "type": "bool"
//         }
//       ],
//       "name": "setIsBuyer",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "address",
//           "name": "buyer",
//           "type": "address"
//         },
//         {
//           "internalType": "uint256",
//           "name": "_maxAmount",
//           "type": "uint256"
//         }
//       ],
//       "name": "setMaxAmount",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "address",
//           "name": "buyer",
//           "type": "address"
//         },
//         {
//           "internalType": "uint256",
//           "name": "_price",
//           "type": "uint256"
//         }
//       ],
//       "name": "setPrice",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "address payable",
//           "name": "_withdrawWallet",
//           "type": "address"
//         }
//       ],
//       "name": "setWithdrawWallet",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [],
//       "name": "symbol",
//       "outputs": [
//         {
//           "internalType": "string",
//           "name": "",
//           "type": "string"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [],
//       "name": "totalSupply",
//       "outputs": [
//         {
//           "internalType": "uint256",
//           "name": "",
//           "type": "uint256"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "address",
//           "name": "to",
//           "type": "address"
//         },
//         {
//           "internalType": "uint256",
//           "name": "value",
//           "type": "uint256"
//         }
//       ],
//       "name": "transfer",
//       "outputs": [
//         {
//           "internalType": "bool",
//           "name": "",
//           "type": "bool"
//         }
//       ],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "address",
//           "name": "from",
//           "type": "address"
//         },
//         {
//           "internalType": "address",
//           "name": "to",
//           "type": "address"
//         },
//         {
//           "internalType": "uint256",
//           "name": "value",
//           "type": "uint256"
//         }
//       ],
//       "name": "transferFrom",
//       "outputs": [
//         {
//           "internalType": "bool",
//           "name": "",
//           "type": "bool"
//         }
//       ],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "address",
//           "name": "newOwner",
//           "type": "address"
//         }
//       ],
//       "name": "transferOwnership",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     }
//   ];
// const contract = new ethers.Contract(contractAddress, contractABI, provider)
// const contractWithSigner = contract.connect(signer)
// async function buySonToken(){
//     await contractWithSigner.setIsBuyer(buyer.address, true)
// }
// buySonToken()
import {Web3} from "web3"
import "dotenv/config"
const contractAddress = '0x81863C241E442A6DDC4aE495a31d5B2B0AB3F6Dc';
const contractABI = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "allowance",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "needed",
          "type": "uint256"
        }
      ],
      "name": "ERC20InsufficientAllowance",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "balance",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "needed",
          "type": "uint256"
        }
      ],
      "name": "ERC20InsufficientBalance",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "approver",
          "type": "address"
        }
      ],
      "name": "ERC20InvalidApprover",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        }
      ],
      "name": "ERC20InvalidReceiver",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "ERC20InvalidSender",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "ERC20InvalidSpender",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "OwnableInvalidOwner",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "OwnableUnauthorizedAccount",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "buyer",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "tokenAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "price",
          "type": "uint256"
        }
      ],
      "name": "buyToken",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "_buyToken",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "buyer",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "_isBuyer",
          "type": "bool"
        }
      ],
      "name": "setIsBuyer",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "buyer",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_maxAmount",
          "type": "uint256"
        }
      ],
      "name": "setMaxAmount",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "buyer",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_price",
          "type": "uint256"
        }
      ],
      "name": "setPrice",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address payable",
          "name": "_withdrawWallet",
          "type": "address"
        }
      ],
      "name": "setWithdrawWallet",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];
const web3 = new Web3(process.env.URL_RPC);
const [owner] = web3.eth.accounts.wallet.add("0x2804a59cf73a60e1431aeca427322f545a4d5992f3260700c386843f49c9c553");
const [buyer] = web3.eth.accounts.wallet.add("0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80");
const contract = new web3.eth.Contract(contractABI, contractAddress);
async function buySonToken(){
    await contract.methods.setIsBuyer(buyer.address, true)
    .send(
    {
        from: owner.address,
        gas: "3000000",
        gasPrice: "3000000000"
    })
    await contract.methods.setMaxAmount(buyer.address, 10)
    .send(
    {
        from: owner.address,
        gas: "3000000",
        gasPrice: "3000000000"
    })
    await contract.methods.setPrice(buyer.address, 1)
    .send(
    {
        from: owner.address,
        gas: "3000000",
        gasPrice: "3000000000"
    })
    await contract.methods._buyToken()
    .send(
    {
        from: buyer.address,
        gas: "3000000",
        gasPrice: "3000000000",
        value: "1000000"
    }
    )
}
function check(){
    console.log(buyer)
}
buySonToken()
