// Module ID: 8381
// Function ID: 66294
// Name: BlockedDomainStore
// Dependencies: [6, 7, 653, 1844, 675, 2]

// Module 8381 (BlockedDomainStore)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import { AnalyticEvents } from "ME";

const require = arg1;
const tmp2 = (() => {
  class BlockedDomainStore {
    constructor() {
      tmp = outer1_3(this, BlockedDomainStore);
      return;
    }
  }
  const items = [
    {
      key: "isBlockedDomain",
      value(arg0) {
        let obj = BlockedDomainStore(outer1_2[3]);
        let isBlockedDomainResult = null;
        if (obj.isLibdiscoreInitialized()) {
          isBlockedDomainResult = BlockedDomainStore(outer1_2[3]).isBlockedDomain(arg0);
          const obj2 = BlockedDomainStore(outer1_2[3]);
        }
        if (tmp5) {
          obj = { blocked_domain: isBlockedDomainResult };
          outer1_1(outer1_2[4]).track(outer1_5.LINK_SECURITY_CHECK_BLOCKED, obj);
          const obj3 = outer1_1(outer1_2[4]);
        }
        return isBlockedDomainResult;
      }
    }
  ];
  return callback(BlockedDomainStore, null, items);
})();
const result = require("ME").fileFinishedImporting("modules/blocked_domains/BlockedDomainStore.tsx");

export default tmp2;
