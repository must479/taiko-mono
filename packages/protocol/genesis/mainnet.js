"use strict";
const ADDRESS_LENGTH = 40;

module.exports = {
  contractOwner: "0x2145ac607A1b97D28BE117D06474B003deC986b4",
  l1ChainId: 1,
  chainId: 167000,
  seedAccounts: [
    {
      "0xDfe21f73eCF01B203480bc92A592eA5EA15a0D9A": 199,
    },
    {
      "0x4C52996778D62dfB8c013779D44F2bda54A17824": 1,
    },
  ],
  get contractAddresses() {
    return {
      // ============ Implementations ============
      // Shared Contracts
      BridgeImpl: getConstantAddress(`0${this.chainId}`, 1),
      ERC20VaultImpl: getConstantAddress(`0${this.chainId}`, 2),
      ERC721VaultImpl: getConstantAddress(`0${this.chainId}`, 3),
      ERC1155VaultImpl: getConstantAddress(`0${this.chainId}`, 4),
      SignalServiceImpl: getConstantAddress(`0${this.chainId}`, 5),
      SharedAddressManagerImpl: getConstantAddress(`0${this.chainId}`, 6),
      BridgedERC20Impl: getConstantAddress(`0${this.chainId}`, 10096),
      BridgedERC721Impl: getConstantAddress(`0${this.chainId}`, 10097),
      BridgedERC1155Impl: getConstantAddress(`0${this.chainId}`, 10098),
      // Rollup Contracts
      TaikoL2Impl: getConstantAddress(`0${this.chainId}`, 10001),
      RollupAddressManagerImpl: getConstantAddress(`0${this.chainId}`, 10002),
      // ============ Proxies ============
      // Shared Contracts
      Bridge: getConstantAddress(this.chainId, 1),
      ERC20Vault: getConstantAddress(this.chainId, 2),
      ERC721Vault: getConstantAddress(this.chainId, 3),
      ERC1155Vault: getConstantAddress(this.chainId, 4),
      SignalService: getConstantAddress(this.chainId, 5),
      SharedAddressManager: getConstantAddress(this.chainId, 6),
      // Rollup Contracts
      TaikoL2: getConstantAddress(this.chainId, 10001),
      RollupAddressManager: getConstantAddress(this.chainId, 10002),
    };
  },
  param1559: {
    gasExcess: 1,
  },
  predeployERC20: false,
};

function getConstantAddress(prefix, suffix) {
  return `0x${prefix}${"0".repeat(
    ADDRESS_LENGTH - String(prefix).length - String(suffix).length,
  )}${suffix}`;
}
