// Module ID: 17946
// Function ID: 17947
// Name: ReferralMessageManager
// Dependencies: [4300, 7553, 1089, 11, 8167, 7221, 17538, 2]

// Module 17946 (ReferralMessageManager)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import MessageTypes from "MessageTypes" /* 1089 */;
import UserOfferActionCreators from "UserOfferActionCreators" /* 8167 */;
import setupLoadFromMessageManagerHandlersDefault from "setupLoadFromMessageManagerHandlers" /* 17538 */;
import SubscriptionStore from "SubscriptionStore" /* 4300 */;
import UserOfferStore from "UserOfferStore" /* 7553 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7221 */;

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
