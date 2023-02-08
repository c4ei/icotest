const { ethers } = require("hardhat");

async function main() {
  const SAWON ="0x76E0686469edE69af3E029A0FF3A3C41E56eF015";
  console.log("Deploying tokenICO Contract...");
  const TokenICOFactory = await ethers.getContractFactory("TokenICO");
  const tokenICO = await TokenICOFactory.deploy(
    "0xD94aF5B615C673A84FD35cAF4e895006ee05Db0A",  // 지갑주소
    SAWON // token address
  );
  console.log("Deployed tokenICO:", tokenICO.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
