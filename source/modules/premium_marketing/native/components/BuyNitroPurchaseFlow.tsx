// Module ID: 7522
// Function ID: 59976
// Name: BuyNitroPurchaseRunner
// Dependencies: [5, 31, 6663, 6660, 653, 482, 33, 7118, 6644, 3776, 7156, 7157, 7523, 6643, 4471, 1212, 6648, 675, 7120, 4451, 7194, 477, 6686, 7195, 2]
// Exports: default

// Module 7522 (BuyNitroPurchaseRunner)
import sum from "sum";
import result from "result";
import { useNativeCheckoutStore } from "context";
import usePremiumPlanPurchasedStore from "usePremiumPlanPurchasedStore";
import ME from "ME";
import { PaymentGateways } from "sum";
import { jsx } from "jsxProd";

let closure_10;
let closure_11;
let closure_12;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function BuyNitroPurchaseRunner(item) {
  item = item.item;
  const analyticsLocations = item.analyticsLocations;
  const analyticsLoadId = item.analyticsLoadId;
  const hasEmittedPaymentFlowStartedRef = item.hasEmittedPaymentFlowStartedRef;
  const applicationId = item.applicationId;
  const expectedPriceString = item.expectedPriceString;
  const onExit = item.onExit;
  const onOrderPriceMismatch = item.onOrderPriceMismatch;
  const onHostSheetClose = item.onHostSheetClose;
  const onPaymentSuccess = item.onPaymentSuccess;
  const onPaymentDismiss = item.onPaymentDismiss;
  const tmp = expectedPriceString((orderRecord) => orderRecord.orderRecord);
  let closure_11 = tmp;
  const tmp2 = expectedPriceString((orderRequired) => orderRequired.orderRequired);
  let closure_12 = tmp2;
  const handlePremiumPurchase = item(analyticsLoadId[7]).useHandlePremiumPurchase();
  let closure_14 = applicationId.useRef(false);
  const items = [tmp, tmp2, handlePremiumPurchase, analyticsLoadId, hasEmittedPaymentFlowStartedRef, analyticsLocations, applicationId, item, expectedPriceString, onExit, onOrderPriceMismatch, onHostSheetClose, onPaymentSuccess, onPaymentDismiss];
  const effect = applicationId.useEffect(() => {
    async function _runPurchase() {
      if (outer3_12) {
        let priceString;
        if (null != outer3_11) {
          const checkoutContextRecord = outer3_11.checkoutContextRecord;
          if (null != checkoutContextRecord) {
            let obj = item(analyticsLoadId[16]);
            const availablePlanForItems = checkoutContextRecord.getAvailablePlanForItems(obj.getSubscriptionItemsForProduct(result1.productId));
            if (null != availablePlanForItems) {
              priceString = availablePlanForItems.getPriceString();
            }
          }
        }
        let tmp8 = null;
        if (null != priceString) {
          tmp8 = priceString;
        }
        if (null != outer3_5) {
          if (null != tmp8) {
            if (tmp8 !== outer3_5) {
              outer3_7(tmp8);
            }
          }
        }
      }
      const obj3 = analyticsLocations(analyticsLoadId[17]);
      obj = { from_step: item(analyticsLoadId[10]).PaymentFlowStep.PLAN_SELECT, to_step: item(analyticsLoadId[10]).PaymentFlowStep.EXTERNAL_PAYMENT, subscription_plan_gateway_plan_id: result1.productId, sku_id: outer2_0 };
      obj3.track(onHostSheetClose.PAYMENT_FLOW_STEP, item(analyticsLoadId[10]).getPaymentFlowStepAnalyticsFields(outer2_1, obj));
      obj = { productId: result1.productId, analyticsLocation: outer2_1.location, analyticsLoadId: _runPurchase, analyticsLocations: basePurchaseFlowAnalyticsFields };
      let id;
      if (null != outer3_11) {
        id = outer3_11.id;
      }
      obj.orderId = id;
      yield outer3_13(obj);
      outer3_6();
    }
    if (!ref.current) {
      if (!tmp2) {
        ref.current = true;
        let obj = item(analyticsLoadId[8]);
        let result = obj.isMobileWebRedirectCheckoutEnabled();
        let obj1 = item(analyticsLoadId[9]);
        let obj2 = analyticsLocations(analyticsLoadId[9]);
        result1 = obj1.castPremiumSubscriptionAsSkuId(obj2.getSkuIdForPremiumType(result1.premiumTier));
        let obj3 = item(analyticsLoadId[10]);
        obj = { analyticsLoadId: _runPurchase };
        obj = { object: onPaymentSuccess.BUTTON_CTA, objectType: onPaymentDismiss.BUY, page: tmp.USER_SETTINGS, section: tmp2.SETTINGS_PREMIUM };
        obj.analyticsLocation = obj;
        obj.analyticsLocations = basePurchaseFlowAnalyticsFields;
        basePurchaseFlowAnalyticsFields = obj3.getBasePurchaseFlowAnalyticsFields(obj);
        if (!hasEmittedPaymentFlowStartedRef.current) {
          hasEmittedPaymentFlowStartedRef.current = true;
          obj1 = {};
          const merged = Object.assign(basePurchaseFlowAnalyticsFields);
          obj1["application_id"] = applicationId;
          obj1["subscription_plan_id"] = result1.basePlanId;
          obj1["sku_id"] = result1;
          let customCheckoutFlowForAnalytics;
          if (result) {
            customCheckoutFlowForAnalytics = item(analyticsLoadId[8]).getCustomCheckoutFlowForAnalytics();
            const obj9 = item(analyticsLoadId[8]);
          }
          obj1["custom_checkout_flow"] = customCheckoutFlowForAnalytics;
          const result2 = item(analyticsLoadId[11]).trackPaymentFlowStartedAnalyticsAndCTP(obj1);
          const obj7 = item(analyticsLoadId[11]);
        }
        obj2 = {
          productId: result1.productId,
          onPaymentSuccess(arg0) {
                if (null != outer1_8) {
                  outer1_8();
                }
                const result = item(analyticsLoadId[12]).presentBuyNitroPurchaseSuccess(result1.premiumTier);
                if (null != outer1_9) {
                  outer1_9(arg0);
                }
              },
          onPaymentDismiss
        };
        onOrderPriceMismatch(obj2);
        if (result) {
          const obj11 = item(analyticsLoadId[13]);
          obj3 = { planId: result1.basePlanId, isGift: false, loadId: _runPurchase };
          const result3 = obj11.goToStandalonePremiumCheckoutFromMobileApp("premium_nitro_marketing_page", obj3, () => {
            onExit();
            outer1_6();
            if (null != outer1_8) {
              outer1_8();
            }
          }, () => {
            let obj = analyticsLocations(analyticsLoadId[14]);
            obj = {};
            const intl = item(analyticsLoadId[15]).intl;
            obj.title = intl.string(item(analyticsLoadId[15]).t.NrBVjw);
            const intl2 = item(analyticsLoadId[15]).intl;
            obj.body = intl2.string(item(analyticsLoadId[15]).t["gD+grx"]);
            obj.hideActionSheet = true;
            obj.show(obj);
            outer1_6();
          });
        } else {
          (function runPurchase() {
            return _runPurchase(...arguments);
          })();
        }
      }
    }
  }, items);
  return null;
}
({ reset: closure_6, setInitiatedPurchaseFromNewFlow: closure_7 } = usePremiumPlanPurchasedStore);
({ AnalyticEvents: closure_8, AnalyticsObjects: closure_9, AnalyticsObjectTypes: closure_10, AnalyticsPages: closure_11, AnalyticsSections: closure_12 } = ME);
let result = require("context").fileFinishedImporting("modules/premium_marketing/native/components/BuyNitroPurchaseFlow.tsx");

export default function BuyNitroPurchaseFlow(item) {
  let analyticsLoadId;
  let analyticsLocations;
  let applicationId;
  let expectedPriceString;
  let hasEmittedPaymentFlowStartedRef;
  let onHostSheetClose;
  let onOrderPriceMismatch;
  let onPaymentDismiss;
  let onPaymentSuccess;
  item = item.item;
  const onExit = item.onExit;
  ({ analyticsLocations, analyticsLoadId, hasEmittedPaymentFlowStartedRef, applicationId, expectedPriceString, onOrderPriceMismatch, onHostSheetClose, onPaymentSuccess, onPaymentDismiss } = item);
  const NitroACOMSubscriptionExperiment = item(7194).NitroACOMSubscriptionExperiment;
  const enabled = NitroACOMSubscriptionExperiment.useConfig({ location: "PremiumPlanSelectionActionSheetWithOrderCTX" }).enabled;
  let obj = item(477);
  if (!obj.isIOS()) {
    const GOOGLE = tmp.GOOGLE;
    let obj1 = item(477);
    let obj2 = item(6686);
    const premiumTrialOffer = obj2.usePremiumTrialOffer();
    let trial_id;
    if (!tmp5) {
      if (null != premiumTrialOffer) {
        trial_id = premiumTrialOffer.trial_id;
      }
    }
    let tmp12;
    if (null != trial_id) {
      obj = {};
      obj = { subscription_trial_id: trial_id };
      obj.subscription_preview = obj;
      tmp12 = obj;
    }
    const items = [item.productId];
    const memo = React.useMemo(() => {
      const subscriptionItemsForProduct = item(outer1_2[16]).getSubscriptionItemsForProduct(item.productId);
      return subscriptionItemsForProduct.map((planId) => {
        const obj = { subscriptionPlanId: planId.planId };
        const obj2 = item(outer2_2[9]);
        obj.skuId = obj2.castPremiumSubscriptionAsSkuId(outer2_1(outer2_2[9]).getSkuIdForPlan(planId.planId));
        obj.quantity = planId.quantity;
        return obj;
      });
    }, items);
    obj1 = { paymentGateway: GOOGLE, orderRequired: GOOGLE === PaymentGateways.APPLE_ADVANCED_COMMERCE, skuIds: [], defaultPlans: memo, isGift: false, activeSubscription: null, initialSubscriptionFacet: tmp12, onOrderRetryCancellation: onExit };
    obj2 = { item, analyticsLocations, analyticsLoadId, hasEmittedPaymentFlowStartedRef, applicationId, expectedPriceString, onExit, onOrderPriceMismatch, onHostSheetClose, onPaymentSuccess, onPaymentDismiss };
    tmp5 = obj1.isIOS() && enabled;
    obj1.children = <BuyNitroPurchaseRunner item={item} analyticsLocations={analyticsLocations} analyticsLoadId={analyticsLoadId} hasEmittedPaymentFlowStartedRef={hasEmittedPaymentFlowStartedRef} applicationId={applicationId} expectedPriceString={expectedPriceString} onExit={onExit} onOrderPriceMismatch={onOrderPriceMismatch} onHostSheetClose={onHostSheetClose} onPaymentSuccess={onPaymentSuccess} onPaymentDismiss={onPaymentDismiss} />;
    return jsx(importDefault(7195), { paymentGateway: GOOGLE, orderRequired: GOOGLE === PaymentGateways.APPLE_ADVANCED_COMMERCE, skuIds: [], defaultPlans: memo, isGift: false, activeSubscription: null, initialSubscriptionFacet: tmp12, onOrderRetryCancellation: onExit });
  }
};
