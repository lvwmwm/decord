// Module ID: 19852
// Function ID: 19853
// Name: BlockedDomainManager
// Dependencies: [7383, 1363, 2]

// Module 19852 (BlockedDomainManager)
import shim from "shim" /* 1363 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7383 */;
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
