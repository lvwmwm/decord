// Module ID: 17436
// Function ID: 17437
// Name: BlockedDomainManager
// Dependencies: [7221, 1349, 2]

// Module 17436 (BlockedDomainManager)
import js_shim_shim from "js_shim/shim" /* 1349 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7221 */;

require = fn;
class BlockedDomainManager extends tmp2 {
}
BlockedDomainManager.prototype["_initialize"] = function _initialize() {
  if (obj.isLibdiscoreInitialized()) {
    const _window = window;
    const _HermesInternal = HermesInternal;
    const combined = "https:" + window.GLOBAL_ENV.WEBAPP_ENDPOINT + "/bad-hash-delta";
    const result = js_shim_shim.startFetchingBlockedDomains(combined);
    const tmpResult = js_shim_shim;
  }
};
const blockedDomainManager = new BlockedDomainManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/blocked_domains/BlockedDomainManager.tsx");

export default blockedDomainManager;
