// Module ID: 7152
// Function ID: 57721
// Name: commonTriggerPointConfiguration
// Dependencies: []
// Exports: trackPaymentFlowStartedAnalyticsAndCTP

// Module 7152 (commonTriggerPointConfiguration)
const AnalyticEvents = require(dependencyMap[1]).AnalyticEvents;
const commonTriggerPointConfiguration = new require(dependencyMap[2]).CommonTriggerPointConfiguration([], require(dependencyMap[0]).CommonTriggerPoints.PAYMENT_FLOW_STARTED, { location: "payment flow started" });
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/experiments/trigger_points/PaymentFlowStartedTriggerPoint.tsx");

export const PaymentFlowStartedTriggerPoint = commonTriggerPointConfiguration;
export const trackPaymentFlowStartedAnalyticsAndCTP = function trackPaymentFlowStartedAnalyticsAndCTP(basePurchaseAnalytics) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  importDefault(dependencyMap[3]).track(AnalyticEvents.PAYMENT_FLOW_STARTED, basePurchaseAnalytics, obj);
  commonTriggerPointConfiguration.trigger();
};
