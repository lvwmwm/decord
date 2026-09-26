// Module ID: 17748
// Function ID: 17749
// Name: BlockedDomainManager
// Dependencies: [7395, 1350, 2]

// Module 17748 (BlockedDomainManager)
import js_shim_shim from "js_shim/shim" /* 1350 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7395 */;

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
