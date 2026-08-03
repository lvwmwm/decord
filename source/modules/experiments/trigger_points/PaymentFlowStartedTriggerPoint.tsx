// Module ID: 7284
// Function ID: 7285
// Name: commonTriggerPointConfiguration
// Dependencies: [4170, 676, 7285, 698, 2]
// Exports: trackPaymentFlowStartedAnalyticsAndCTP

// Module 7284 (commonTriggerPointConfiguration)
import { AnalyticEvents } from "ME";

const commonTriggerPointConfiguration = new require("registeredExperimentIds").CommonTriggerPointConfiguration([], require("ExperimentBuckets").CommonTriggerPoints.PAYMENT_FLOW_STARTED, { location: "payment flow started" });
const result = require("registeredExperimentIds").fileFinishedImporting("modules/experiments/trigger_points/PaymentFlowStartedTriggerPoint.tsx");

export const PaymentFlowStartedTriggerPoint = commonTriggerPointConfiguration;
export const trackPaymentFlowStartedAnalyticsAndCTP = function trackPaymentFlowStartedAnalyticsAndCTP(basePurchaseAnalytics) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  importDefault(698).track(AnalyticEvents.PAYMENT_FLOW_STARTED, basePurchaseAnalytics, obj);
  commonTriggerPointConfiguration.trigger();
};
