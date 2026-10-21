// Module ID: 14954
// Function ID: 14955
// Name: PremiumPromoStore
// Dependencies: [502, 4911, 1104, 11, 504, 584, 2]

// Module 14954 (PremiumPromoStore)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import DurationsDefault from "Durations" /* 1104 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import RelationshipStore from "RelationshipStore" /* 4911 */;
import size from "module_2" /* 2 */;

let closure_4 = 180 * DurationsDefault.Millis.DAY;
let closure_5 = false;
const Store = get_initializedDefault.Store;
class PremiumPromoStore extends Store {
  initialize() {
    this.waitFor(RelationshipStore, AuthenticationStore);
  }
  isEligible() {
    return closure_5;
  }
}
const prototype = PremiumPromoStore.prototype;
PremiumPromoStore.displayName = "PremiumPromoStore";
let obj = {
  CONNECTION_OPEN: function updatePremiumPromoEligibility() {
    let tmp2 = RelationshipStore.getFriendIDs().length >= 10;
    const tmp = closure_5;
    if (tmp2) {
      const _Date = Date;
      const obj = SnowflakeUtilsDefault;
      const extractTimestampResult = obj.extractTimestamp(AuthenticationStore.getId());
      tmp2 = extractTimestampResult < Date.now() - closure_4;
    }
    closure_5 = tmp2;
    return tmp !== tmp2;
  }
};
const premiumPromoStore = new PremiumPromoStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/PremiumPromoStore.tsx");

export default premiumPromoStore;
