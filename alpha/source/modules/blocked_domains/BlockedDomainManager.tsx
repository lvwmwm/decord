// Module ID: 20236
// Function ID: 20237
// Name: BlockedDomainManager
// Dependencies: [7892, 1255, 1366, 2]

// Module 20236 (BlockedDomainManager)
import GlobalUtils from "GlobalUtils" /* 1255 */;
import shim from "shim" /* 1366 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7892 */;
import size from "module_2" /* 2 */;

class BlockedDomainManager extends AutomaticLifecycleManager {
  _initialize() {
    const obj = GlobalUtils;
    if (!obj.isDiscordBackendDevelopment()) {
      const tmpResult = shim;
      if (tmpResult.isLibdiscoreInitialized()) {
        const _window = window;
        const _HermesInternal = HermesInternal;
        const combined = "https:" + window.GLOBAL_ENV.WEBAPP_ENDPOINT + "/bad-hash-delta";
        const tmpResult2 = shim;
        const result = tmpResult2.startFetchingBlockedDomains(combined);
      }
    }
  }
}
const prototype = BlockedDomainManager.prototype;
const blockedDomainManager = new BlockedDomainManager();
let result = size.fileFinishedImporting("modules/blocked_domains/BlockedDomainManager.tsx");

export default blockedDomainManager;
