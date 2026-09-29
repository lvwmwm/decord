// Module ID: 17294
// Function ID: 17295
// Name: BlockedDomainManager
// Dependencies: [6705, 1350, 2]

// Module 17294 (BlockedDomainManager)
import js_shim_shim from "js_shim/shim" /* 1350 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6705 */;

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
