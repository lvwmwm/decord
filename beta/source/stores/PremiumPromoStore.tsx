// Module ID: 14024
// Function ID: 14025
// Name: PremiumPromoStore
// Dependencies: [502, 4409, 1095, 11, 504, 577, 2]

// Module 14024 (PremiumPromoStore)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 577 */;
import DurationsDefault from "Durations" /* 1095 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import RelationshipStore from "RelationshipStore" /* 4409 */;

let closure_4 = 180 * DurationsDefault.Millis.DAY;
let closure_5 = false;
const Store = initializeDefault.Store;
class PremiumPromoStore extends Store {
}
const prototype = PremiumPromoStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(RelationshipStore, AuthenticationStore);
};
prototype["isEligible"] = function isEligible() {
  return closure_5;
};
PremiumPromoStore.displayName = "PremiumPromoStore";
const premiumPromoStore = new PremiumPromoStore(DispatcherDefault, {
  CONNECTION_OPEN: function updatePremiumPromoEligibility() {
    let tmp2 = RelationshipStore.getFriendIDs().length >= 10;
    if (tmp2) {
      const _Date = Date;
      tmp2 = SnowflakeUtilsDefault.extractTimestamp(AuthenticationStore.getId()) < Date.now() - closure_4;
      const extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(AuthenticationStore.getId());
    }
    closure_5 = tmp2;
    return closure_5 !== tmp2;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("stores/PremiumPromoStore.tsx");

export default premiumPromoStore;
