// Module ID: 19684
// Function ID: 19685
// Name: BlockedDomainManager
// Dependencies: [7475, 1255, 1365, 2]

// Module 19684 (BlockedDomainManager)
import GlobalUtils from "GlobalUtils" /* 1255 */;
import shim from "shim" /* 1365 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7475 */;
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
