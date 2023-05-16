// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through 'node <script>'.
// When running the script with 'npx hardhat run <script>' you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
 
async function main() {
  const horoscopeNFT = await hre.ethers.getContractFactory("horoscopeNFT");
  const hscp = await horoscopeNFT.deploy();
 
  await hscp.deployed();

  const myAddress="0x0Bb3fbC652F2d1370824BfE079571Da31F94426B";
  console.log("horoscopeNFT deployed to:", hscp.address);   
 
  let txn = await hscp.mintNFT(myAddress, 'Sufiyan');
 await txn.wait();

 
}
 
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
