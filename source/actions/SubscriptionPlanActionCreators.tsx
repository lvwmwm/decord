// Module ID: 5638
// Function ID: 48225
// Name: fetchSubscriptionPlansForSKU
// Dependencies: [5, 3778, 653, 1851, 686, 4451, 507, 3791, 3799, 2]
// Exports: fetchPremiumSubscriptionPlans, fetchSubscriptionPlansBySKUs, resetSubscriptionPlanData

// Module 5638 (fetchSubscriptionPlansForSKU)
import _deletePaymentSource from "_deletePaymentSource";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { Endpoints } from "ME";
import GuildFeatures from "GuildFeatures";

let closure_6;
let closure_7;
const require = arg1;
function fetchSubscriptionPlansForSKU(id, closure_1, arg2, soft_deleted) {
  return _fetchSubscriptionPlansForSKU(...arguments);
}
async function _fetchSubscriptionPlansForSKU(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
  let obj = outer2_1(outer2_2[4]);
  obj = { type: "SUBSCRIPTION_PLANS_FETCH", skuId: arg0 };
  obj.dispatch(obj);
  obj = { url: outer2_5.STORE_PUBLISHED_LISTINGS_SUBSCRIPTION_PLANS(arg0), oldFormErrors: true, rejectWithError: true, retries: 10 };
  const obj1 = {};
  if (null != arg1) {
    obj1.country_code = arg1;
  }
  if (null != arg2) {
    obj1.payment_source_id = arg2;
  }
  if (null != arg3) {
    obj1.include_unpublished = arg3;
  }
  if (null != arg4) {
    obj1.revenue_surface = arg4;
  }
  if (null != arg5) {
    obj1.payment_gateway = arg5;
  }
  obj.query = obj1;
  if (outer2_4.ipCountryCodeLoaded) {
    const HTTP = outer2_0(outer2_2[6]).HTTP;
    const tmp12 = yield HTTP.get(obj);
    const obj2 = { type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS", skuId: tmp, subscriptionPlans: tmp12.body };
    outer2_1(outer2_2[4]).dispatch(obj2);
    return tmp12.body;
  } else {
    return yield outer2_0(outer2_2[5]).fetchIpCountryCode();
  }
  tmp = arg0;
}
({ ACTIVE_PREMIUM_SKUS: closure_6, PremiumSubscriptionSKUs: closure_7 } = GuildFeatures);
const result = require("ME").fileFinishedImporting("actions/SubscriptionPlanActionCreators.tsx");

export { fetchSubscriptionPlansForSKU };
export const fetchSubscriptionPlansBySKUs = function fetchSubscriptionPlansBySKUs(fetchedSKUIDs, country, APPLE_ADVANCED_COMMERCE) {
  let closure_0 = country;
  let closure_1 = APPLE_ADVANCED_COMMERCE;
  const found = fetchedSKUIDs.filter((arg0) => arg0 !== outer1_7.NONE);
  return Promise.all(found.map((arg0) => outer1_8(arg0, closure_0, undefined, undefined, undefined, closure_1)));
};
export const fetchPremiumSubscriptionPlans = function fetchPremiumSubscriptionPlans(country, arg1, arg2, APPLE_ADVANCED_COMMERCE) {
  let closure_0 = country;
  let closure_1 = arg1;
  let closure_2 = arg2;
  let _deletePaymentSource = APPLE_ADVANCED_COMMERCE;
  const found = closure_6.filter((arg0) => arg0 !== outer1_7.NONE);
  return Promise.all(found.map((arg0) => outer1_8(arg0, closure_0, closure_1, undefined, closure_2, _deletePaymentSource)));
};
export const resetSubscriptionPlanData = function resetSubscriptionPlanData() {
  importDefault(686).dispatch({ type: "SUBSCRIPTION_PLANS_RESET" });
};
