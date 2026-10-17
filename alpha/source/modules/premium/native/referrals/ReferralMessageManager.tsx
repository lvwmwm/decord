// Module ID: 19047
// Function ID: 19048
// Name: ReferralMessageManager
// Dependencies: [4870, 7439, 1103, 11, 8361, 7085, 18563, 2]

// Module 19047 (ReferralMessageManager)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import MessageTypes from "MessageTypes" /* 1103 */;
import setupLoadFromMessageManagerHandlersDefault from "setupLoadFromMessageManagerHandlers" /* 18563 */;
import SubscriptionStore from "SubscriptionStore" /* 4870 */;
import UserOfferStore from "UserOfferStore" /* 7439 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7085 */;
import size from "module_2" /* 2 */;

let tmp;
let tmp3;
const UserOfferActionCreators = tmp(8361);
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
