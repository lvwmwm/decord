// Module ID: 8932
// Function ID: 8933
// Name: BlockedDomainStore
// Dependencies: [1072, 1362, 1253, 2]

// Module 8932 (BlockedDomainStore)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import shim from "shim" /* 1362 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
class BlockedDomainStore {
  static isBlockedDomain(arg0) {
    let isBlockedDomainResult = null;
    const obj = shim;
    if (obj.isLibdiscoreInitialized()) {
      const tmpResult = shim;
      isBlockedDomainResult = tmpResult.isBlockedDomain(arg0);
    }
    const tmp5 = "" !== isBlockedDomainResult && null !== isBlockedDomainResult;
    if (tmp5) {
      const obj2 = { blocked_domain: isBlockedDomainResult };
      const obj3 = AnalyticsUtilsDefault;
      obj3.track(AnalyticEvents.LINK_SECURITY_CHECK_BLOCKED, obj2);
    }
    return isBlockedDomainResult;
  }
}
const result = size.fileFinishedImporting("modules/blocked_domains/BlockedDomainStore.tsx");

export default BlockedDomainStore;
