// Module ID: 10791
// Function ID: 10792
// Name: PremiumGiftAnalytics
// Dependencies: [19, 1074, 10162, 10126, 1364, 1241, 1115, 10270, 2]
// Exports: default

// Module 10791 (PremiumGiftAnalytics)
import Constants from "Constants" /* 1074 */;
import intl2 from "intl" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import PremiumAnalyticsUtils from "PremiumAnalyticsUtils" /* 10126 */;
import PaymentFlowStartedTriggerPoint from "PaymentFlowStartedTriggerPoint" /* 10270 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
let result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftAnalytics.tsx");

export default function PremiumGiftAnalytics(currentStep) {
  currentStep = currentStep.currentStep;
  let productId;
  const children = currentStep.children;
  let obj = currentStep(productId[2]);
  const nativeGiftContext = obj.useNativeGiftContext();
  const customGiftMessage = nativeGiftContext.customGiftMessage;
  productId = nativeGiftContext.productId;
  const basePurchaseAnalytics = nativeGiftContext.basePurchaseAnalytics;
  basePurchaseAnalytics.useRef(null);
  let timestamp = Date.now();
  const ref = basePurchaseAnalytics.useRef(timestamp);
  const ref2 = basePurchaseAnalytics.useRef(timestamp);
  const items = [basePurchaseAnalytics, currentStep, ref, customGiftMessage, productId];
  const effect = basePurchaseAnalytics.useEffect(() => {
    let intl;
    if (currentStep !== ref.current) {
      const _Date = Date;
      const timestamp = Date.now();
      if (null != ref.current) {
        let isIOSResult = tmp === PremiumAnalyticsUtils.PaymentFlowStep.CONFIRM;
        if (isIOSResult) {
          const obj = PlatformUtils;
          isIOSResult = obj.isIOS();
        }
        if (isIOSResult) {
          const obj2 = { is_custom_message_edited: customGiftMessage !== intl.string(intl2.t.ZkOo1U), is_custom_emoji_sound_available: false };
          const track = AnalyticsUtilsDefault.track;
          const PAYMENT_FLOW_SUCCEEDED = AnalyticEvents.PAYMENT_FLOW_SUCCEEDED;
          AnalyticsUtilsDefault;
          const obj4 = { subscription_plan_gateway_plan_id: productId };
          const obj3 = PremiumAnalyticsUtils;
          const merged = Object.assign(obj3.getPaymentFlowStepAnalyticsFields(basePurchaseAnalytics, obj4));
          intl = intl2.intl;
          track(PAYMENT_FLOW_SUCCEEDED, obj2);
        }
        const obj5 = {};
        const track2 = AnalyticsUtilsDefault.track;
        const PAYMENT_FLOW_STEP = AnalyticEvents.PAYMENT_FLOW_STEP;
        AnalyticsUtilsDefault;
        const obj7 = { from_step: ref.current, to_step: currentStep, step_duration_ms: timestamp - ref2.current, flow_duration_ms: timestamp - ref.current, subscription_plan_gateway_plan_id: productId };
        const obj6 = PremiumAnalyticsUtils;
        const merged1 = Object.assign(obj6.getPaymentFlowStepAnalyticsFields(basePurchaseAnalytics, obj7));
        track2(PAYMENT_FLOW_STEP, obj5);
      } else {
        const obj8 = PaymentFlowStartedTriggerPoint;
        const result = obj8.trackPaymentFlowStartedAnalyticsAndCTP(basePurchaseAnalytics);
        const obj9 = {};
        const track3 = AnalyticsUtilsDefault.track;
        const PAYMENT_FLOW_LOADED = AnalyticEvents.PAYMENT_FLOW_LOADED;
        AnalyticsUtilsDefault;
        const obj11 = { initial_step: currentStep };
        const obj10 = PremiumAnalyticsUtils;
        const merged2 = Object.assign(obj10.getPaymentFlowStepAnalyticsFields(basePurchaseAnalytics, obj11));
        track3(PAYMENT_FLOW_LOADED, obj9);
      }
      ref.current = currentStep;
      ref2.current = timestamp;
    }
  }, items);
  const items1 = [basePurchaseAnalytics, ref];
  const effect1 = basePurchaseAnalytics.useEffect(() => () => {
    const tmp = productId;
    if (ref.current !== currentStep(productId[3]).PaymentFlowStep.CONFIRM) {
      const obj = customGiftMessage(tmp[5]);
      obj.track(ref.PAYMENT_FLOW_CANCELED, basePurchaseAnalytics);
    }
  }, items1);
  return children;
};
