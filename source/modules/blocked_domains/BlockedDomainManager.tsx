// Module ID: 16280
// Function ID: 16281
// Name: _initialize
// Dependencies: [5244, 1898, 2]

// Module 16280 (_initialize)
import "initialize";

const require = arg1;
class BlockedDomainManager extends tmp2 {
}
BlockedDomainManager.prototype["_initialize"] = function _initialize() {
  if (obj.isLibdiscoreInitialized()) {
    const _window = window;
    const _HermesInternal = HermesInternal;
    const combined = "https:" + window.GLOBAL_ENV.WEBAPP_ENDPOINT + "/bad-hash-delta";
    const result = require(1898) /* isBlockedDomain */.startFetchingBlockedDomains(combined);
    const tmpResult = require(1898) /* isBlockedDomain */;
  }
};
const blockedDomainManager = new BlockedDomainManager();
let result = require("set").fileFinishedImporting("modules/blocked_domains/BlockedDomainManager.tsx");

export default blockedDomainManager;
