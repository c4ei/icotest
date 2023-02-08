const { ethers } = require("hardhat");

async function main() {
  //Sawon
  console.log("Deploying Sawon Contract...");
  const SawonFactory = await ethers.getContractFactory("SaWonToken");  // 0x72fA1F759ca5a24C26798434A4F93C76cd649fb7
  const Sawon = await SawonFactory.deploy();

  console.log("Deployed Sawon:", Sawon.address);

  // //SawonICO
  // console.log("Deploying SawonICO Contract...");
  // const SawonICOFactory = await ethers.getContractFactory("SawonICO");
  // const SawonICO = await SawonICOFactory.deploy(
  //   "0xD94aF5B615C673A84FD35cAF4e895006ee05Db0A",  // 지갑주소
  //   Sawon.address
  // );

  // console.log("Deployed SawonICO:", SawonICO.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
