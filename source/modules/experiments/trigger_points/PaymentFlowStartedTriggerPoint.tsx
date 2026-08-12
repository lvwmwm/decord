// Module ID: 7416
// Function ID: 7417
// Name: commonTriggerPointConfiguration
// Dependencies: [4259, 676, 7417, 698, 2]
// Exports: trackPaymentFlowStartedAnalyticsAndCTP

// Module 7416 (commonTriggerPointConfiguration)
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
