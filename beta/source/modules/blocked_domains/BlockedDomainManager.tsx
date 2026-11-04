// Module ID: 19412
// Function ID: 19413
// Name: BlockedDomainManager
// Dependencies: [7287, 1361, 2]

// Module 19412 (BlockedDomainManager)
import shim from "shim" /* 1361 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7287 */;
import size from "module_2" /* 2 */;

class BlockedDomainManager extends AutomaticLifecycleManager {
  _initialize() {
    const obj = shim;
    if (obj.isLibdiscoreInitialized()) {
      const _window = window;
      const _HermesInternal = HermesInternal;
      const combined = "https:" + window.GLOBAL_ENV.WEBAPP_ENDPOINT + "/bad-hash-delta";
      const tmpResult = shim;
      const result = tmpResult.startFetchingBlockedDomains(combined);
    }
  }
}
const prototype = BlockedDomainManager.prototype;
const blockedDomainManager = new BlockedDomainManager();
let result = size.fileFinishedImporting("modules/blocked_domains/BlockedDomainManager.tsx");

export default blockedDomainManager;
