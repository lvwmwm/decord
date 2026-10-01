// Module ID: 7819
// Function ID: 7820
// Name: BlockedDomainStore
// Dependencies: [1074, 1350, 1241, 2]

// Module 7819 (BlockedDomainStore)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import shim from "shim" /* 1350 */;
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
