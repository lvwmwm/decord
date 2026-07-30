// Module ID: 16135
// Function ID: 16136
// Name: _initialize
// Dependencies: [5134, 1869, 2]

// Module 16135 (_initialize)
import "initialize";

const require = arg1;
class BlockedDomainManager extends tmp2 {
}
BlockedDomainManager.prototype["_initialize"] = function _initialize() {
  if (obj.isLibdiscoreInitialized()) {
    const _window = window;
    const _HermesInternal = HermesInternal;
    const combined = "https:" + window.GLOBAL_ENV.WEBAPP_ENDPOINT + "/bad-hash-delta";
    const result = require(1869) /* isBlockedDomain */.startFetchingBlockedDomains(combined);
    const tmpResult = require(1869) /* isBlockedDomain */;
  }
};
const blockedDomainManager = new BlockedDomainManager();
let result = require("set").fileFinishedImporting("modules/blocked_domains/BlockedDomainManager.tsx");

export default blockedDomainManager;
