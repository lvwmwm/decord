// Module ID: 11076
// Function ID: 11077
// Name: PaymentFlowStartedTriggerPoint
// Dependencies: [4673, 1074, 11077, 1241, 2]
// Exports: trackPaymentFlowStartedAnalyticsAndCTP

// Module 11076 (PaymentFlowStartedTriggerPoint)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import ExperimentConstants from "ExperimentConstants" /* 4673 */;
import Helpers from "Helpers" /* 11077 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.PAYMENT_FLOW_STARTED, { location: "payment flow started" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/PaymentFlowStartedTriggerPoint.tsx");

export const PaymentFlowStartedTriggerPoint = commonTriggerPointConfiguration;
export const trackPaymentFlowStartedAnalyticsAndCTP = function trackPaymentFlowStartedAnalyticsAndCTP(basePurchaseAnalytics) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  AnalyticsUtilsDefault.track(AnalyticEvents.PAYMENT_FLOW_STARTED, basePurchaseAnalytics, obj);
  commonTriggerPointConfiguration.trigger();
};
