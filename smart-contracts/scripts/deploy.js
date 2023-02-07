const { ethers } = require("hardhat");

async function main() {
  //EC4EI
  console.log("Deploying EC4EI Contract...");
  const EC4EIFactory = await ethers.getContractFactory("EC4EI");
  const ec4ei = await EC4EIFactory.deploy();

  console.log("Deployed EC4EI:", ec4ei.address);

  //EC4EIICO
  console.log("Deploying ec4eiICO Contract...");
  const Ec4eiICOFactory = await ethers.getContractFactory("Ec4eiICO");
  const ec4eiICO = await Ec4eiICOFactory.deploy(
    "0xD94aF5B615C673A84FD35cAF4e895006ee05Db0A",  // 지갑주소
    ec4ei.address
  );

  console.log("Deployed ec4eiICO:", ec4eiICO.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
