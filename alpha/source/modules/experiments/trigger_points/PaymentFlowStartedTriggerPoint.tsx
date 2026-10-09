// Module ID: 10134
// Function ID: 10135
// Name: PaymentFlowStartedTriggerPoint
// Dependencies: [4978, 1085, 10135, 1265, 2]
// Exports: trackPaymentFlowStartedAnalyticsAndCTP

// Module 10134 (PaymentFlowStartedTriggerPoint)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import ExperimentConstants from "ExperimentConstants" /* 4978 */;
import Helpers from "Helpers" /* 10135 */;
import size from "module_2" /* 2 */;

const CommonTriggerPoints = ExperimentConstants.CommonTriggerPoints;
const AnalyticEvents = Constants.AnalyticEvents;
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], CommonTriggerPoints.PAYMENT_FLOW_STARTED, { location: "payment flow started" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/PaymentFlowStartedTriggerPoint.tsx");

export const PaymentFlowStartedTriggerPoint = commonTriggerPointConfiguration;
export const trackPaymentFlowStartedAnalyticsAndCTP = function trackPaymentFlowStartedAnalyticsAndCTP(basePurchaseAnalytics) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  const obj2 = AnalyticsUtilsDefault;
  obj2.track(AnalyticEvents.PAYMENT_FLOW_STARTED, basePurchaseAnalytics, obj);
  commonTriggerPointConfiguration.trigger();
};
