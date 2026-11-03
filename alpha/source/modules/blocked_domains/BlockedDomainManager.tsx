// Module ID: 19570
// Function ID: 19571
// Name: BlockedDomainManager
// Dependencies: [7407, 1363, 2]

// Module 19570 (BlockedDomainManager)
import shim from "shim" /* 1363 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7407 */;
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
