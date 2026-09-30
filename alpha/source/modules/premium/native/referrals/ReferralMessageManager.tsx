// Module ID: 17882
// Function ID: 17883
// Name: ReferralMessageManager
// Dependencies: [4524, 7066, 1090, 11, 7701, 6735, 17416, 2]

// Module 17882 (ReferralMessageManager)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import MessageTypes from "MessageTypes" /* 1090 */;
import UserOfferActionCreators from "UserOfferActionCreators" /* 7701 */;
import setupLoadFromMessageManagerHandlersDefault from "setupLoadFromMessageManagerHandlers" /* 17416 */;
import SubscriptionStore from "SubscriptionStore" /* 4524 */;
import UserOfferStore from "UserOfferStore" /* 7066 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6735 */;

require = fn;
function handleReferralMessages(type) {
  if (type.type === MessageTypes.MessageTypes.PREMIUM_REFERRAL) {
    if (null != type.content) {
      if (obj3.isProbablyAValidSnowflake(type.content)) {
        const premiumTypeSubscription = SubscriptionStore.getPremiumTypeSubscription();
        const tmp9Result = tmp9(11);
        if (tmp6) {
          const userOffer = UserOfferActionCreators.fetchUserOffer("ReferralMessageManager");
          const tmpResult = UserOfferActionCreators;
        }
        tmp6 = null == premiumTypeSubscription && UserOfferStore.shouldFetchReferralOffer(tmp9(11).extractTimestamp(type.content));
      }
      obj3 = SnowflakeUtilsDefault;
      tmp9 = importDefault;
    }
  }
}
class ReferralMessageManager extends tmp6 {
  constructor() {
    tmp3 = new ReferralMessageManager(tmp2, tmp, new.target);
    tmp4 = closure_1(closure_2[6])(tmp3, handleReferralMessages);
    return tmp3;
  }
}
const tmp5 = new tmp(tmp4, tmp3, tmp2, Object, defineProperty, ReferralMessageManager, importDefault);
setupLoadFromMessageManagerHandlersDefault(tmp5, handleReferralMessages);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/referrals/ReferralMessageManager.tsx");

export default tmp5;
