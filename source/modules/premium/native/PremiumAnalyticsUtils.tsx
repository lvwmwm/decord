// Module ID: 7151
// Function ID: 57713
// Name: getBaseAnalyticsFields
// Dependencies: []
// Exports: getBasePurchaseFlowAnalyticsFields, getNewAnalyticsLoadId, getPaymentFlowCompletedAnalyticsFields, getPaymentFlowStepAnalyticsFields, trackPremiumSubscriptionCancellationFlowStep, trackPremiumSubscriptionCancellationStarted

// Module 7151 (getBaseAnalyticsFields)
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
    const premiumPlanItem = require(dependencyMap[2]).getPremiumPlanItem(subscription);
    let id1;
    if (null != premiumPlanItem) {
      id1 = premiumPlanItem.id;
    }
    tmp3 = id1;
    const obj2 = require(dependencyMap[2]);
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
const _module = require(dependencyMap[0]);
({ SubscriptionTypes: closure_3, PurchaseTypeToAnalyticsPaymentType: closure_4, PurchaseTypes: closure_5, AnalyticEvents: closure_6 } = _module);
const obj = { WHAT_YOU_LOSE: 1, [1]: "WHAT_YOU_LOSE", CONFIRM: 2, [2]: "CONFIRM", PREVIEW: 3, [3]: "PREVIEW", DOWNGRADE_TO_TIER_0: 4, [4]: "DOWNGRADE_TO_TIER_0", MOBILE_SUBSCRIPTION_MANAGE: 5, [5]: "MOBILE_SUBSCRIPTION_MANAGE" };
const _module1 = require(dependencyMap[4]);
const result = _module1.fileFinishedImporting("modules/premium/native/PremiumAnalyticsUtils.tsx");

export const PaymentFlowStep = { SKU_SELECT: "sku_select", PLAN_SELECT: "plan_select", REVIEW: "review", CONFIRM: "confirm", MOBILE_WEB_REDIRECT_CHECKOUT: "mobile_web_redirect_checkout", YEARLY_UPSELL: "yearly_upsell", PREMIUM_UPSELL: "premium_upsell", EXTERNAL_PAYMENT: "external_payment", REWARD_SKU_SELECT: "reward_sku_select" };
export const getBasePurchaseFlowAnalyticsFields = function getBasePurchaseFlowAnalyticsFields(isGift) {
  let flag = isGift.isGift;
  if (flag === undefined) {
    flag = false;
  }
  const analyticsLocation = isGift.analyticsLocation;
  const obj = { load_id: isGift.analyticsLoadId, payment_type: closure_4[closure_5.SUBSCRIPTION], subscription_type: constants.PREMIUM, is_gift: flag, location: analyticsLocation, location_stack: isGift.analyticsLocations };
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
  return require(dependencyMap[1]).v4();
};
export const CancellationFlowSteps = obj;
export const STEP_ANALYTICS_NAMES = { [obj.WHAT_YOU_LOSE]: "What You're Losing", [obj.DOWNGRADE_TO_TIER_0]: "Downgrade To Tier 0", [obj.CONFIRM]: "Confirm Cancellation", [obj.PREVIEW]: "Preview Updated Subscription", [obj.MOBILE_SUBSCRIPTION_MANAGE]: "Mobile Subscription Manage" };
export const trackPremiumSubscriptionCancellationStarted = function trackPremiumSubscriptionCancellationStarted(subscription, location_stack) {
  let obj = importDefault(dependencyMap[3]);
  obj = { location_stack };
  const merged = Object.assign(getBaseAnalyticsFields(subscription));
  obj.track(constants2.CANCELLATION_FLOW_STARTED, obj);
};
export const trackPremiumSubscriptionCancellationFlowStep = function trackPremiumSubscriptionCancellationFlowStep(arg0) {
  let analyticsLocations;
  let fromStep;
  let subscription;
  let toStep;
  ({ fromStep, toStep, subscription, analyticsLocations } = arg0);
  let obj = importDefault(dependencyMap[3]);
  obj = { from_step: fromStep, to_step: toStep, location_stack: analyticsLocations };
  const merged = Object.assign(getBaseAnalyticsFields(subscription));
  obj.track(constants2.CANCELLATION_FLOW_STEP, obj);
};
