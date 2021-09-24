const BiswapRouter02 = artifacts.require("BiswapRouter02");
const FACTORY_ARTIFACT  = require('../../biswap-core/build/contracts/BiswapFactory.json');
const WBNB_ARTIFACT  = require('../../biswap-core/build/contracts/WBNB.json');

const SafeMath = artifacts.require("SafeMath");
const Hodls1 = artifacts.require("Hodls1");
const SimpleStorage = artifacts.require("./SimpleStorage.sol");
const FlatBSCT = artifacts.require("./BSCT.sol");
const FlatBSCTM = artifacts.require("./BSCTM.sol");
const FlatBKRWP = artifacts.require("./BKRWP.sol");
const FlatBSTEEM = artifacts.require("./BSTEEM.sol");

module.exports = async function (deployer) {
  await deployer.deploy(BiswapRouter02, FACTORY_ARTIFACT.networks["97"].address, WBNB_ARTIFACT.networks["97"].address);

  deployer.deploy(Hodls1);
  deployer.deploy(
    FlatBSCT,
    "BSC SCT",
    "BSCT",
    "0x5FB1EC24ae3d3a24e777cA2Cd7eA3314143D170F",
    0
  );
  deployer.deploy(
    FlatBSCTM,
    "BSC SCTM",
    "BSCTM",
    "0x5FB1EC24ae3d3a24e777cA2Cd7eA3314143D170F",
    0
  );
  deployer.deploy(
    FlatBKRWP,
    "BSC KRWP",
    "BKRWP",
    "0x5FB1EC24ae3d3a24e777cA2Cd7eA3314143D170F",
    0
  );
  deployer.deploy(
    FlatBSTEEM,
    "BSC STEEM",
    "BSTEEM",
    "0x5FB1EC24ae3d3a24e777cA2Cd7eA3314143D170F",
    0
  );
};
