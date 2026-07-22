// Module ID: 5633
// Function ID: 48188
// Name: fetchSubscriptionPlansForSKU
// Dependencies: []
// Exports: fetchPremiumSubscriptionPlans, fetchSubscriptionPlansBySKUs, resetSubscriptionPlanData

// Module 5633 (fetchSubscriptionPlansForSKU)
function fetchSubscriptionPlansForSKU(id, arg1, arg2, soft_deleted) {
  return _fetchSubscriptionPlansForSKU(...arguments);
}
async function _fetchSubscriptionPlansForSKU(skuId, country_code, payment_source_id, include_unpublished, revenue_surface, payment_gateway, arg6) {
  let obj = callback2(closure_2[4]);
  obj = { type: "SUBSCRIPTION_PLANS_FETCH", skuId };
  obj.dispatch(obj);
  obj = { <string:102654214>: "BG_GRADIENT_HANAMI_1", <string:1895638838>: 3.56, <string:4183209825>: "BG_GRADIENT_SUNRISE_1", <string:1823030446>: 8.62, url: closure_5.STORE_PUBLISHED_LISTINGS_SUBSCRIPTION_PLANS(skuId) };
  const obj1 = {};
  if (null != country_code) {
    obj1.country_code = country_code;
  }
  if (null != payment_source_id) {
    obj1.payment_source_id = payment_source_id;
  }
  if (null != include_unpublished) {
    obj1.include_unpublished = include_unpublished;
  }
  if (null != revenue_surface) {
    obj1.revenue_surface = revenue_surface;
  }
  if (null != payment_gateway) {
    obj1.payment_gateway = payment_gateway;
  }
  obj.query = obj1;
  if (ipCountryCodeLoaded.ipCountryCodeLoaded) {
    const HTTP = callback(closure_2[6]).HTTP;
    const tmp12 = yield HTTP.get(obj);
    const obj2 = { type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS", skuId: tmp, subscriptionPlans: tmp12.body };
    callback2(closure_2[4]).dispatch(obj2);
    return tmp12.body;
  } else {
    return yield callback(closure_2[5]).fetchIpCountryCode();
  }
  const tmp = skuId;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const Endpoints = arg1(dependencyMap[2]).Endpoints;
({ ACTIVE_PREMIUM_SKUS: closure_6, PremiumSubscriptionSKUs: closure_7 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("actions/SubscriptionPlanActionCreators.tsx");

export { fetchSubscriptionPlansForSKU };
export const fetchSubscriptionPlansBySKUs = function fetchSubscriptionPlansBySKUs(fetchedSKUIDs, country, APPLE_ADVANCED_COMMERCE) {
  const importDefault = APPLE_ADVANCED_COMMERCE;
  const found = fetchedSKUIDs.filter((arg0) => arg0 !== constants.NONE);
  return Promise.all(found.map((arg0) => callback(arg0, arg1, undefined, undefined, undefined, arg2)));
};
export const fetchPremiumSubscriptionPlans = function fetchPremiumSubscriptionPlans(country, arg1, arg2, APPLE_ADVANCED_COMMERCE) {
  arg1 = country;
  const importDefault = arg1;
  const dependencyMap = arg2;
  let closure_3 = APPLE_ADVANCED_COMMERCE;
  const found = closure_6.filter((arg0) => arg0 !== constants.NONE);
  return Promise.all(found.map((arg0) => callback(arg0, arg0, arg1, undefined, arg2, arg3)));
};
export const resetSubscriptionPlanData = function resetSubscriptionPlanData() {
  importDefault(dependencyMap[4]).dispatch({ type: "SUBSCRIPTION_PLANS_RESET" });
};
