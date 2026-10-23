// Module ID: 18719
// Function ID: 18720
// Name: BlockedDomainManager
// Dependencies: [7212, 562, 2]

// Module 18719 (BlockedDomainManager)
import shim from "shim" /* 562 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7212 */;
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
