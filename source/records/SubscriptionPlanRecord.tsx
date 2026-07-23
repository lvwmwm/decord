// Module ID: 3777
// Function ID: 29218
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1858, 1851, 2]
// Exports: isNoneSubscription

// Module 3777 (_isNativeReflectConstruct)
import closure_0 from "GuildFeatures";
import set from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import GuildFeatures from "GuildFeatures";
import importDefaultResult from "Record";
import tmp4 from "Record";

let closure_5;
let closure_6;
let closure_7;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function getPriceFromServer(amount, taxInclusive) {
  return { amount: amount.amount, currency: amount.currency, tax: 0, taxInclusive };
}
({ PremiumSubscriptionSKUs: closure_5, PremiumTypes: closure_6, SubscriptionPlans: closure_7 } = GuildFeatures);
let result = require("_possibleConstructorReturn").fileFinishedImporting("records/SubscriptionPlanRecord.tsx");

export default tmp4;
export { getPriceFromServer };
export const isNoneSubscription = function isNoneSubscription(planId) {
  const items = [, , , ];
  ({ NONE_MONTH: arr[0], NONE_3_MONTH: arr[1], NONE_6_MONTH: arr[2], NONE_YEAR: arr[3] } = closure_7);
  return items.includes(planId);
};
