// Module ID: 9238
// Function ID: 9239
// Name: PaymentFlowStartedTriggerPoint
// Dependencies: [5531, 1071, 9239, 1255, 2]
// Exports: trackPaymentFlowStartedAnalyticsAndCTP

// Module 9238 (PaymentFlowStartedTriggerPoint)
import Constants from "Constants" /* 1071 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1255 */;
import ExperimentConstants from "ExperimentConstants" /* 5531 */;
import Helpers from "Helpers" /* 9239 */;
import size from "module_2" /* 2 */;

const CommonTriggerPoints = ExperimentConstants.CommonTriggerPoints;
const AnalyticEvents = Constants.AnalyticEvents;
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], CommonTriggerPoints.PAYMENT_FLOW_STARTED, { location: "payment flow started" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/PaymentFlowStartedTriggerPoint.tsx");

export const PaymentFlowStartedTriggerPoint = commonTriggerPointConfiguration;
export function trackPaymentFlowStartedAnalyticsAndCTP(basePurchaseAnalytics) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  const obj2 = AnalyticsUtilsDefault;
  obj2.track(AnalyticEvents.PAYMENT_FLOW_STARTED, basePurchaseAnalytics, obj);
  commonTriggerPointConfiguration.trigger();
}
