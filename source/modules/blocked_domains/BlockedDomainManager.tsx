// Module ID: 17242
// Function ID: 17243
// Name: _initialize
// Dependencies: [7058, 1915, 2]

// Module 17242 (_initialize)
import isBlockedDomain from "isBlockedDomain" /* 1915 */;
import initializeDefault from "initialize" /* 7058 */;

require = arg1;
initializeDefault;
class BlockedDomainManager extends tmp2 {
}
BlockedDomainManager.prototype["_initialize"] = function _initialize() {
  if (obj.isLibdiscoreInitialized()) {
    const _window = window;
    const _HermesInternal = HermesInternal;
    const combined = "https:" + window.GLOBAL_ENV.WEBAPP_ENDPOINT + "/bad-hash-delta";
    const result = isBlockedDomain.startFetchingBlockedDomains(combined);
    const tmpResult = isBlockedDomain;
  }
};
const blockedDomainManager = new BlockedDomainManager();
let result = require("set").fileFinishedImporting("modules/blocked_domains/BlockedDomainManager.tsx");

export default blockedDomainManager;
