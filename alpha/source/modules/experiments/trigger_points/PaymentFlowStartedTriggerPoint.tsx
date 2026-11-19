// Module ID: 9118
// Function ID: 9119
// Name: PaymentFlowStartedTriggerPoint
// Dependencies: [5410, 1072, 9119, 1256, 2]
// Exports: trackPaymentFlowStartedAnalyticsAndCTP

// Module 9118 (PaymentFlowStartedTriggerPoint)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import ExperimentConstants from "ExperimentConstants" /* 5410 */;
import Helpers from "Helpers" /* 9119 */;
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
