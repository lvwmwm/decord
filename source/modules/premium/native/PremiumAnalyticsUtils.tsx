// Module ID: 7156
// Function ID: 57776
// Name: getBaseAnalyticsFields
// Dependencies: [653, 491, 3776, 675, 2]
// Exports: getBasePurchaseFlowAnalyticsFields, getNewAnalyticsLoadId, getPaymentFlowCompletedAnalyticsFields, getPaymentFlowStepAnalyticsFields, trackPremiumSubscriptionCancellationFlowStep, trackPremiumSubscriptionCancellationStarted

// Module 7156 (getBaseAnalyticsFields)
import ME from "ME";

let closure_3;
let closure_4;
let closure_5;
let closure_6;
function getBaseAnalyticsFields(subscription) {
  const obj = {};
  let id;
  if (null != subscription) {
    id = subscription.id;
  }
  obj.subscription_id = id;
  let type;
  if (null != subscription) {
    type = subscription.type;
  }
  obj.subscription_type = type;
  let tmp3;
  if (null != subscription) {
    const premiumPlanItem = require(3776) /* _createForOfIteratorHelperLoose */.getPremiumPlanItem(subscription);
    let id1;
    if (null != premiumPlanItem) {
      id1 = premiumPlanItem.id;
    }
    tmp3 = id1;
    const obj2 = require(3776) /* _createForOfIteratorHelperLoose */;
  }
  obj.subscription_plan_id = tmp3;
  let paymentGatewayPlanId;
  if (null != subscription) {
    paymentGatewayPlanId = subscription.paymentGatewayPlanId;
  }
  obj.subscription_plan_gateway_plan_id = paymentGatewayPlanId;
  let status;
  if (null != subscription) {
    status = subscription.status;
  }
  obj.subscription_status = status;
  return obj;
}
({ SubscriptionTypes: closure_3, PurchaseTypeToAnalyticsPaymentType: closure_4, PurchaseTypes: closure_5, AnalyticEvents: closure_6 } = ME);
let obj = { WHAT_YOU_LOSE: 1, [1]: "WHAT_YOU_LOSE", CONFIRM: 2, [2]: "CONFIRM", PREVIEW: 3, [3]: "PREVIEW", DOWNGRADE_TO_TIER_0: 4, [4]: "DOWNGRADE_TO_TIER_0", MOBILE_SUBSCRIPTION_MANAGE: 5, [5]: "MOBILE_SUBSCRIPTION_MANAGE" };
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/premium/native/PremiumAnalyticsUtils.tsx");

export const PaymentFlowStep = { SKU_SELECT: "sku_select", PLAN_SELECT: "plan_select", REVIEW: "review", CONFIRM: "confirm", MOBILE_WEB_REDIRECT_CHECKOUT: "mobile_web_redirect_checkout", YEARLY_UPSELL: "yearly_upsell", PREMIUM_UPSELL: "premium_upsell", EXTERNAL_PAYMENT: "external_payment", REWARD_SKU_SELECT: "reward_sku_select" };
export const getBasePurchaseFlowAnalyticsFields = function getBasePurchaseFlowAnalyticsFields(isGift) {
  let flag = isGift.isGift;
  if (flag === undefined) {
    flag = false;
  }
  const analyticsLocation = isGift.analyticsLocation;
  const obj = { load_id: isGift.analyticsLoadId, payment_type: table[constants2.SUBSCRIPTION], subscription_type: constants.PREMIUM, is_gift: flag, location: analyticsLocation, location_stack: isGift.analyticsLocations };
  let section;
  if (null != analyticsLocation) {
    section = analyticsLocation.section;
  }
  obj.location_section = section;
  return obj;
};
export const getPaymentFlowCompletedAnalyticsFields = function getPaymentFlowCompletedAnalyticsFields(baseAnalyticsData, arg1) {
  const merged = Object.assign(baseAnalyticsData);
  const merged1 = Object.assign(arg1);
  return {};
};
export const getPaymentFlowStepAnalyticsFields = function getPaymentFlowStepAnalyticsFields(basePurchaseAnalytics, arg1) {
  const merged = Object.assign(basePurchaseAnalytics);
  const merged1 = Object.assign(arg1);
  return {};
};
export const getNewAnalyticsLoadId = function getNewAnalyticsLoadId() {
  return require(491) /* v1 */.v4();
};
export const CancellationFlowSteps = obj;
export const STEP_ANALYTICS_NAMES = { [obj.WHAT_YOU_LOSE]: "What You're Losing", [obj.DOWNGRADE_TO_TIER_0]: "Downgrade To Tier 0", [obj.CONFIRM]: "Confirm Cancellation", [obj.PREVIEW]: "Preview Updated Subscription", [obj.MOBILE_SUBSCRIPTION_MANAGE]: "Mobile Subscription Manage" };
export const trackPremiumSubscriptionCancellationStarted = function trackPremiumSubscriptionCancellationStarted(subscription, location_stack) {
  let obj = importDefault(675);
  obj = { location_stack };
  const merged = Object.assign(getBaseAnalyticsFields(subscription));
  obj.track(constants3.CANCELLATION_FLOW_STARTED, obj);
};
export const trackPremiumSubscriptionCancellationFlowStep = function trackPremiumSubscriptionCancellationFlowStep(arg0) {
  let analyticsLocations;
  let fromStep;
  let subscription;
  let toStep;
  ({ fromStep, toStep, subscription, analyticsLocations } = arg0);
  let obj = importDefault(675);
  obj = { from_step: fromStep, to_step: toStep, location_stack: analyticsLocations };
  const merged = Object.assign(getBaseAnalyticsFields(subscription));
  obj.track(constants3.CANCELLATION_FLOW_STEP, obj);
};
