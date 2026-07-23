// Module ID: 3783
// Function ID: 29441
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1858, 3784, 3785, 653, 3787, 1851, 3788, 44, 477, 3789, 1872, 2]

// Module 3783 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _callSuper from "_callSuper";
import isPremiumAtLeast from "isPremiumAtLeast";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_callSuper";
import ME from "ME";
import set from "set";
import GuildFeatures from "GuildFeatures";
import tmp6 from "Record";
import set from "_possibleConstructorReturn";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function createSubscriptionItemFromServer(id) {
  return { id: id.id, planId: id.plan_id, quantity: id.quantity };
}
({ PaymentGateways: closure_10, SubscriptionStatusTypes: closure_11, SubscriptionStatusTypesSets: closure_12, SubscriptionTypes: closure_13 } = ME);
({ SubscriptionPauseReason: closure_14, SubscriptionPauseReasonSets: closure_15 } = set);
({ PREMIUM_PLANS: closure_16, SubscriptionPlanInfo: closure_17, SubscriptionPlans: closure_18 } = GuildFeatures);
let result = set.fileFinishedImporting("records/SubscriptionRecord.tsx");

export default tmp6;
export const SubscriptionRecord = tmp6;
