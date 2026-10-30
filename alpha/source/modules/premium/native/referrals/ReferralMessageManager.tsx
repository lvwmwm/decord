// Module ID: 19980
// Function ID: 19981
// Name: ReferralMessageManager
// Dependencies: [2053, 7623, 1089, 11, 8522, 7281, 19470, 2]

// Module 19980 (ReferralMessageManager)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import MessageTypes from "MessageTypes" /* 1089 */;
import setupLoadFromMessageManagerHandlersDefault from "setupLoadFromMessageManagerHandlers" /* 19470 */;
import SubscriptionStore from "SubscriptionStore" /* 2053 */;
import UserOfferStore from "UserOfferStore" /* 7623 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7281 */;
import size from "module_2" /* 2 */;

let tmp;
let tmp3;
const UserOfferActionCreators = tmp(8522);
function handleReferralMessages(type) {
  if (type.type === MessageTypes.MessageTypes.PREMIUM_REFERRAL) {
    if (null != type.content) {
      const obj3 = SnowflakeUtilsDefault;
      const tmp9 = importDefault;
      if (obj3.isProbablyAValidSnowflake(type.content)) {
        const premiumTypeSubscription = SubscriptionStore.getPremiumTypeSubscription();
        const tmp9Result = tmp9(11);
        const tmp6 = null == premiumTypeSubscription && UserOfferStore.shouldFetchReferralOffer(tmp9Result.extractTimestamp(type.content));
        if (tmp6) {
          const tmpResult = UserOfferActionCreators;
          const userOffer = tmpResult.fetchUserOffer("ReferralMessageManager");
        }
      }
    }
  }
}
class ReferralMessageManager extends AutomaticLifecycleManager {
  constructor() {
    const tmp3 = new ReferralMessageManager(tmp2, tmp, new.target);
    setupLoadFromMessageManagerHandlersDefault(tmp3, handleReferralMessages);
    return tmp3;
  }
}
const tmp5 = new tmp(tmp4, tmp3, tmp2, Object, defineProperty, ReferralMessageManager, importDefault);
setupLoadFromMessageManagerHandlersDefault(tmp5, handleReferralMessages);
const result = size.fileFinishedImporting("modules/premium/native/referrals/ReferralMessageManager.tsx");

export default tmp5;
