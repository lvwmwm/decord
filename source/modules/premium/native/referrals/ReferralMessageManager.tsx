// Module ID: 16524
// Function ID: 128927
// Name: _isNativeReflectConstruct
// Dependencies: [7, 6, 15, 17, 18, 3782, 6688, 663, 21, 7374, 16104, 5078, 2]

// Module 16524 (_isNativeReflectConstruct)
import set from "set";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_9 from "_createForOfIteratorHelperLoose";
import tmp2 from "AutomaticLifecycleManager";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleReferralMessages(type) {
  if (type.type === require(663) /* set */.MessageTypes.PREMIUM_REFERRAL) {
    if (null != type.content) {
      if (obj3.isProbablyAValidSnowflake(type.content)) {
        premiumTypeSubscription = premiumTypeSubscription.getPremiumTypeSubscription();
        const obj = importDefault(21);
        if (tmp6) {
          const userOffer = require(7374) /* _fetchUserOffer */.fetchUserOffer("ReferralMessageManager");
          const obj2 = require(7374) /* _fetchUserOffer */;
        }
        tmp6 = null == premiumTypeSubscription && closure_9.shouldFetchReferralOffer(importDefault(21).extractTimestamp(type.content));
      }
      obj3 = importDefault(21);
    }
  }
}
tmp2 = new tmp2();
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/premium/native/referrals/ReferralMessageManager.tsx");

export default tmp2;
