// Module ID: 8647
// Function ID: 8648
// Name: BlockedDomainStore
// Dependencies: [1078, 1354, 1245, 2]

// Module 8647 (BlockedDomainStore)
import Constants from "Constants" /* 1078 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1245 */;
import js_shim_shim from "js_shim/shim" /* 1354 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const prototype = function BlockedDomainStore() {
  return Object.create(new.target.prototype);
}.prototype;
prototype["isBlockedDomain"] = function isBlockedDomain(arg0) {
  let isBlockedDomainResult = null;
  if (obj.isLibdiscoreInitialized()) {
    isBlockedDomainResult = js_shim_shim.isBlockedDomain(arg0);
    const tmpResult = js_shim_shim;
  }
  if (tmp5) {
    const obj2 = { blocked_domain: isBlockedDomainResult };
    AnalyticsUtilsDefault.track(AnalyticEvents.LINK_SECURITY_CHECK_BLOCKED, obj2);
  }
  return isBlockedDomainResult;
};
const result = size.fileFinishedImporting("modules/blocked_domains/BlockedDomainStore.tsx");

export default prototype;
