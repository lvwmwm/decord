// Module ID: 9810
// Function ID: 76162
// Name: PremiumGiftAnalytics
// Dependencies: [31, 653, 8809, 7156, 477, 675, 1212, 7157, 2]
// Exports: default

// Module 9810 (PremiumGiftAnalytics)
import result from "result";
import { AnalyticEvents } from "ME";

const require = arg1;
let result = require("importDefaultResult1").fileFinishedImporting("modules/premium/native/gifting/PremiumGiftAnalytics.tsx");

export default function PremiumGiftAnalytics(currentStep) {
  currentStep = currentStep.currentStep;
  const nativeGiftContext = currentStep(productId[2]).useNativeGiftContext();
  const customGiftMessage = nativeGiftContext.customGiftMessage;
  productId = nativeGiftContext.productId;
  const basePurchaseAnalytics = nativeGiftContext.basePurchaseAnalytics;
  const ref = basePurchaseAnalytics.useRef(null);
  let timestamp = Date.now();
  let closure_5 = basePurchaseAnalytics.useRef(timestamp);
  let closure_6 = basePurchaseAnalytics.useRef(timestamp);
  const items = [basePurchaseAnalytics, currentStep, ref, customGiftMessage, productId];
  const effect = basePurchaseAnalytics.useEffect(() => {
    if (currentStep !== ref.current) {
      const _Date = Date;
      const timestamp = Date.now();
      if (null != ref.current) {
        let isIOSResult = currentStep === currentStep(productId[3]).PaymentFlowStep.CONFIRM;
        if (isIOSResult) {
          let obj = currentStep(productId[4]);
          isIOSResult = obj.isIOS();
        }
        if (isIOSResult) {
          let obj1 = customGiftMessage(productId[5]);
          obj = {};
          let obj3 = currentStep(productId[3]);
          obj = { subscription_plan_gateway_plan_id: productId };
          const merged = Object.assign(obj3.getPaymentFlowStepAnalyticsFields(basePurchaseAnalytics, obj));
          const intl = currentStep(productId[6]).intl;
          obj["is_custom_message_edited"] = customGiftMessage !== intl.string(currentStep(productId[6]).t.ZkOo1U);
          obj["is_custom_emoji_sound_available"] = false;
          obj1.track(ref.PAYMENT_FLOW_SUCCEEDED, obj);
        }
        obj1 = {};
        const obj6 = customGiftMessage(productId[5]);
        const obj2 = { from_step: ref.current, to_step: currentStep, step_duration_ms: timestamp - ref2.current, flow_duration_ms: timestamp - ref.current, subscription_plan_gateway_plan_id: productId };
        const merged1 = Object.assign(currentStep(productId[3]).getPaymentFlowStepAnalyticsFields(basePurchaseAnalytics, obj2));
        obj6.track(ref.PAYMENT_FLOW_STEP, obj1);
        const obj8 = currentStep(productId[3]);
      } else {
        const result = currentStep(productId[7]).trackPaymentFlowStartedAnalyticsAndCTP(basePurchaseAnalytics);
        const obj10 = currentStep(productId[7]);
        obj3 = {};
        const obj11 = customGiftMessage(productId[5]);
        const obj4 = { initial_step: currentStep };
        const merged2 = Object.assign(currentStep(productId[3]).getPaymentFlowStepAnalyticsFields(basePurchaseAnalytics, obj4));
        obj11.track(ref.PAYMENT_FLOW_LOADED, obj3);
        const obj13 = currentStep(productId[3]);
      }
      ref.current = currentStep;
      ref2.current = timestamp;
    }
  }, items);
  const items1 = [basePurchaseAnalytics, ref];
  const effect1 = basePurchaseAnalytics.useEffect(() => () => {
    if (outer1_4.current !== currentStep(productId[3]).PaymentFlowStep.CONFIRM) {
      customGiftMessage(productId[5]).track(ref.PAYMENT_FLOW_CANCELED, outer1_3);
      const obj = customGiftMessage(productId[5]);
    }
  }, items1);
  return currentStep.children;
};
