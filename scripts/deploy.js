import hre from "hardhat";


async function main() {
  console.log(" Deploying Example contract to Story Protocol...");

  const Example = await hre.ethers.getContractFactory("Example");

  const example = await Example.deploy({
    maxFeePerGas: hre.ethers.utils.parseUnits("100", "gwei"),
    maxPriorityFeePerGas: hre.ethers.utils.parseUnits("1", "gwei")
  });

  await example.deployed();

  console.log("✅ Contract deployed to:", example.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
