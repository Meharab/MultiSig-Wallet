import { ethers } from "hardhat";

const ADDRESS1 = "0x1234567";
const ADDRESS2 = "0xabcdefgh";
const PASSNUM = 2;

async function main() {
  const factory = await ethers.getContractFactory("MultiSigWallet");
  const contract = await factory.deploy( ADDRESS1, ADDRESS2, PASSNUM );

  await contract.deployed();

  console.log("Lottery deployed to:", contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});