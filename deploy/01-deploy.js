const { ethers } = require("hardhat");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deployer } = await getNamedAccounts(); // remember to add namedAccounts to config
  const { deploy, log } = deployments;

  const Factory = await deploy("UniswapV2Factory", {
    from: deployer,
    args: [deployer],
    log: true,
    waitConfirmations: 1,
  });
  const factory = await ethers.getContract("UniswapV2Factory", deployer);

  let token1Address, token2Address;
  if (network === "mainnet") {
    token1Address = "";
    token2Address = "";
  } else {
    const Ree = await deploy("Ree", {
      from: deployer,
      log: true,
    });
    const ree = await ethers.getContract("Ree", deployer);
    token1Address = ree.address;
    const Lee = await deploy("Lee", {
      from: deployer,
      log: true,
    });
    const lee = await ethers.getContract("Lee", deployer);
    token2Address = lee.address;
  }

  // const pair1 = await factory.createPair(token1Address, token2Address);
  // log("pair1", pair1);
  // log("pair1", await factory.getPair(token1Address, token2Address));

  let weth;
  const FACTORY_ADDRESS = factory.address;

  if (network === "mainnet") {
    weth = await weth.at("0x5FbDB2315678afecb367f032d93F642f64180aa3");
  } else {
    const WETH = await deploy("WETH", {
      from: deployer,
      log: true,
    });
    weth = await ethers.getContract("WETH", deployer);
  }

  const Router = await deploy("UniswapV2Router", {
    from: deployer,
    args: [FACTORY_ADDRESS, weth.address],
    log: true,
  });
  const router = await ethers.getContract("UniswapV2Router", deployer);

  log("routeraddress:", router.address);
};

module.exports.tags = ["Factory", "Router", "all"];
