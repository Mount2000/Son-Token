import {loadFixture} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import {ethers} from "hardhat";

describe("SonToken", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deploySonToken() {

    // Contracts are deployed using the first signer/account by default
    const [owner, buyer] = await ethers.getSigners();
    const SonToken = await ethers.getContractFactory("SonToken");
    const stableCoin = await ethers.getContractFactory("USDT")
    const USDT = await stableCoin.deploy();
    const sonToken = await SonToken.deploy(USDT.target);

    return { USDT, sonToken, owner, buyer };
  }
// happy path
  describe("Deployment", function () {
    it("Should buy right amount", async function () {
      const {USDT, sonToken, owner, buyer } = await loadFixture(deploySonToken);
      await USDT.connect(buyer).mint(100);
      await sonToken.setIsBuyer(buyer, true);
      await sonToken.setMaxAmount(buyer, 100);
      await sonToken.setPrice(buyer, 10);
      await USDT.connect(buyer).approve(sonToken.target,50)
      await sonToken.connect(buyer)._buyToken(50);
      const balance = await sonToken.balanceOf(buyer)
      expect(balance).to.equal(5)
    });

  })})
