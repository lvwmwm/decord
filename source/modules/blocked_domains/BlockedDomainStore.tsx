// Module ID: 8996
// Function ID: 8997
// Name: isBlockedDomain
// Dependencies: [676, 1917, 698, 2]

// Module 8996 (isBlockedDomain)
import { AnalyticEvents } from "ME";

const prototype = function BlockedDomainStore() {
  return Object.create(new.target.prototype);
}.prototype;
prototype["isBlockedDomain"] = function isBlockedDomain(arg0) {
  let obj = require(1917) /* isBlockedDomain */;
  let isBlockedDomainResult = null;
  if (obj.isLibdiscoreInitialized()) {
    isBlockedDomainResult = require(1917) /* isBlockedDomain */.isBlockedDomain(arg0);
    const tmpResult = require(1917) /* isBlockedDomain */;
  }
  if (tmp5) {
    obj = { blocked_domain: null };
    obj[0] = isBlockedDomainResult;
    importDefault(698).track(AnalyticEvents.LINK_SECURITY_CHECK_BLOCKED, obj);
    const obj3 = importDefault(698);
  }
  return isBlockedDomainResult;
};
const result = require("expandEventProperties").fileFinishedImporting("modules/blocked_domains/BlockedDomainStore.tsx");

export default prototype;
