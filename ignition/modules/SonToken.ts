import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const SonToken = buildModule("SonTokenModule", (m) => {

  const sonToken = m.contract("SonToken", []);

  return { sonToken };
});

export default SonToken;
