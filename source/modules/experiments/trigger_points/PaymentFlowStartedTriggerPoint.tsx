// Module ID: 10808
// Function ID: 10809
// Name: commonTriggerPointConfiguration
// Dependencies: [4477, 1074, 10809, 1242, 2]
// Exports: trackPaymentFlowStartedAnalyticsAndCTP

// Module 10808 (commonTriggerPointConfiguration)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 1242 */;
import ExperimentBuckets from "ExperimentBuckets" /* 4477 */;
import registeredExperimentIds from "registeredExperimentIds" /* 10809 */;

const AnalyticEvents = ME.AnalyticEvents;
const commonTriggerPointConfiguration = new registeredExperimentIds.CommonTriggerPointConfiguration([], ExperimentBuckets.CommonTriggerPoints.PAYMENT_FLOW_STARTED, { location: "payment flow started" });
const result = set.fileFinishedImporting("modules/experiments/trigger_points/PaymentFlowStartedTriggerPoint.tsx");

export const PaymentFlowStartedTriggerPoint = commonTriggerPointConfiguration;
export const trackPaymentFlowStartedAnalyticsAndCTP = function trackPaymentFlowStartedAnalyticsAndCTP(basePurchaseAnalytics) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  expandEventPropertiesDefault.track(AnalyticEvents.PAYMENT_FLOW_STARTED, basePurchaseAnalytics, obj);
  commonTriggerPointConfiguration.trigger();
};
