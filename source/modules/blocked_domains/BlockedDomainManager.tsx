// Module ID: 16467
// Function ID: 16468
// Name: _initialize
// Dependencies: [5301, 1917, 2]

// Module 16467 (_initialize)
import "initialize";

const require = arg1;
class BlockedDomainManager extends tmp2 {
}
BlockedDomainManager.prototype["_initialize"] = function _initialize() {
  if (obj.isLibdiscoreInitialized()) {
    const _window = window;
    const _HermesInternal = HermesInternal;
    const combined = "https:" + window.GLOBAL_ENV.WEBAPP_ENDPOINT + "/bad-hash-delta";
    const result = require(1917) /* isBlockedDomain */.startFetchingBlockedDomains(combined);
    const tmpResult = require(1917) /* isBlockedDomain */;
  }
};
const blockedDomainManager = new BlockedDomainManager();
let result = require("set").fileFinishedImporting("modules/blocked_domains/BlockedDomainManager.tsx");

export default blockedDomainManager;
