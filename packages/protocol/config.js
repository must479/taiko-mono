module.exports = {
  // Owner address of the pre-deployed L2 contracts.
  contractOwner: "0x2D815240A61731c75Fa01b2793E1D3eD09F289d0",
  // Chain ID of the Taiko L2 network.
  chainId: 167,
  // Account address and pre-mint ETH amount as key-value pairs.
  seedAccounts: [
    { "0x2D815240A61731c75Fa01b2793E1D3eD09F289d0": 1024 },
    { "0xA307121422f0c5C5fdCCb6269Fcb6c219193E066": 1024 },
  ],
  // Owner Chain ID, Security Council, and Timelock Controller
  l1ChainId: 31337,
  ownerSecurityCouncil: "0x2D815240A61731c75Fa01b2793E1D3eD09F289d0",
  ownerTimelockController: "0x2D815240A61731c75Fa01b2793E1D3eD09F289d0",
  // L2 EIP-1559 baseFee calculation related fields.
  param1559: {
    gasExcess: 1,
  },
  // Option to pre-deploy an ERC-20 token.
  predeployERC20: true,
};
