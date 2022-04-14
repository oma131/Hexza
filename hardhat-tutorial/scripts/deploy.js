const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { WHITELIST_CONTRACT_ADDRESS, METADATA_URL } = require("../constants");

async function main() {
    const whitelistContract = WHITELIST_CONTRACT_ADDRESS;
    const metadataURL = METADATA_URL;

    const hexzaNftContract = await ethers.getContractFactory("HexzaNft");
    const deployedHexzaNftContract = await hexzaNftContract.deploy(
        metadataURL,
        whitelistContract
    );

    console.log(
        "Hexza Nft Contract Address:",
        deployedHexzaNftContract.address
      );
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
