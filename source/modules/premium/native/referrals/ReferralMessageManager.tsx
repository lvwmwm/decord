// Module ID: 16917
// Function ID: 16918
// Name: handleReferralMessages
// Dependencies: [3953, 6914, 686, 11, 7592, 5261, 16500, 2]

// Module 16917 (handleReferralMessages)
import reset from "reset";
import emitChanges from "emitChanges";
import "initialize";

const require = arg1;
function handleReferralMessages(type) {
  if (type.type === require(686) /* set */.MessageTypes.PREMIUM_REFERRAL) {
    if (null != type.content) {
      if (obj3.isProbablyAValidSnowflake(type.content)) {
        premiumTypeSubscription = premiumTypeSubscription.getPremiumTypeSubscription();
        const tmp9Result = tmp9(11);
        if (tmp6) {
          const userOffer = require(7592) /* _fetchUserOffer */.fetchUserOffer("ReferralMessageManager");
          const tmpResult = require(7592) /* _fetchUserOffer */;
        }
        tmp6 = null == premiumTypeSubscription && emitChanges.shouldFetchReferralOffer(tmp9(11).extractTimestamp(type.content));
      }
      obj3 = importDefault(11);
      tmp9 = importDefault;
    }
  }
}
class ReferralMessageManager extends tmp6 {
  constructor() {
    tmp3 = new ReferralMessageManager(tmp2, tmp, new.target);
    // ThrowIfThisInitialized (0x7c)
    tmp4 = require("setupLoadFromMessageManagerHandlers")(tmp3, handleReferralMessages);
    return tmp3;
  }
}
tmp = new tmp(tmp4, tmp3, tmp2, Object, defineProperty, ReferralMessageManager, importDefault);
// ThrowIfThisInitialized (0x7c)
require("setupLoadFromMessageManagerHandlers")(tmp, handleReferralMessages);
const result = require("set").fileFinishedImporting("modules/premium/native/referrals/ReferralMessageManager.tsx");

export default tmp;
