// Module ID: 8331
// Function ID: 66029
// Name: BlockedDomainStore
// Dependencies: []

// Module 8331 (BlockedDomainStore)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const AnalyticEvents = arg1(dependencyMap[2]).AnalyticEvents;
const tmp2 = () => {
  class BlockedDomainStore {
    constructor() {
      tmp = closure_3(this, BlockedDomainStore);
      return;
    }
  }
  const arg1 = BlockedDomainStore;
  const items = [
    {
      key: "isBlockedDomain",
      value(arg0) {
        let obj = BlockedDomainStore(closure_2[3]);
        let isBlockedDomainResult = null;
        if (obj.isLibdiscoreInitialized()) {
          isBlockedDomainResult = BlockedDomainStore(closure_2[3]).isBlockedDomain(arg0);
          const obj2 = BlockedDomainStore(closure_2[3]);
        }
        if (tmp5) {
          obj = { blocked_domain: isBlockedDomainResult };
          callback(closure_2[4]).track(constants.LINK_SECURITY_CHECK_BLOCKED, obj);
          const obj3 = callback(closure_2[4]);
        }
        return isBlockedDomainResult;
      }
    }
  ];
  return callback(BlockedDomainStore, null, items);
}();
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/blocked_domains/BlockedDomainStore.tsx");

export default tmp2;
