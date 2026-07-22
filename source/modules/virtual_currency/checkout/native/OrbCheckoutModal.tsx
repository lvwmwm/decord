// Module ID: 11821
// Function ID: 91653
// Name: OrbCheckoutModalContent
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 11821 (OrbCheckoutModalContent)
import closure_3 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import { InternalPaymentGateways } from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

function OrbCheckoutModalContent(orbBalance) {
  let obj = arg1(dependencyMap[4]);
  const orbCheckoutModalContext = obj.useOrbCheckoutModalContext();
  const orbRedemptionError = orbCheckoutModalContext.orbRedemptionError;
  let obj1 = arg1(dependencyMap[5]);
  const product = obj1.useFetchCollectiblesProduct(orbCheckoutModalContext.skuId).product;
  obj = {};
  let tmp3 = null != orbRedemptionError;
  if (tmp3) {
    obj = { error: orbRedemptionError.message };
    tmp3 = callback3(arg1(dependencyMap[7]).OrbCheckoutErrorCard, obj);
  }
  const items = [tmp3, , ];
  obj1 = {};
  let tmp8 = null;
  if (null != product) {
    tmp8 = product;
  }
  obj1.product = tmp8;
  items[1] = callback3(arg1(dependencyMap[7]).OrbCheckoutOrderSummary, obj1);
  items[2] = callback3(arg1(dependencyMap[7]).OrbCheckoutPaymentSourceDetails, { orbBalance: orbBalance.orbBalance });
  obj.children = items;
  return closure_12(arg1(dependencyMap[6]).Stack, obj);
}
function OrbCheckoutModalFooter(onPress) {
  const obj = {};
  const items = [callback3(arg1(dependencyMap[7]).OrbCheckoutLegalFinePrint, {}), callback3(arg1(dependencyMap[7]).OrbCheckoutPurchaseButton, { onPress: onPress.onPress })];
  obj.children = items;
  return callback4(arg1(dependencyMap[6]).Stack, obj);
}
({ useRef: closure_4, useEffect: closure_5, useCallback: closure_6, useMemo: closure_7 } = __exportStarResult1);
({ AnalyticEvents: closure_8, CurrencyCodes: closure_9 } = __exportStarResult1);
({ jsx: closure_11, jsxs: closure_12 } = __exportStarResult1);
let closure_13 = { MAIN: "MAIN" };
function OrbCheckoutModalScreen(startTime) {
  let obj = arg1(dependencyMap[4]);
  const orbCheckoutModalContext = obj.useOrbCheckoutModalContext();
  const onRedeemVirtualCurrency = orbCheckoutModalContext.onRedeemVirtualCurrency;
  const arg1 = onRedeemVirtualCurrency;
  const orbRedemptionError = orbCheckoutModalContext.orbRedemptionError;
  const importDefault = orbRedemptionError;
  const emitOrbCheckoutPaymentFlowEvent = function useOrbCheckoutPaymentFlowEvents(startTime) {
    const onRedeemVirtualCurrency = startTime;
    let obj = onRedeemVirtualCurrency(emitOrbCheckoutPaymentFlowEvent[4]);
    const orbCheckoutModalContext = obj.useOrbCheckoutModalContext();
    const skuId = orbCheckoutModalContext.skuId;
    const orbRedemptionError = skuId;
    const loadId = orbCheckoutModalContext.loadId;
    const emitOrbCheckoutPaymentFlowEvent = loadId;
    const analyticsLocations = orbCheckoutModalContext.analyticsLocations;
    const virtualCurrencyBalance = analyticsLocations;
    const orbProductContext = orbCheckoutModalContext.orbProductContext;
    const items = [loadId, skuId, analyticsLocations, orbProductContext];
    const tmp2 = callback2(() => {
      let obj = { load_id: loadId, application_id: arg0(loadId[8]).get1PShopApplicationIdForSKU(skuId), location_stack: analyticsLocations, sku_id: skuId, currency: constants2.DISCORD_ORB, payment_gateway: constants3.VIRTUAL_CURRENCY };
      let tmp = null != orbProductContext;
      if (tmp) {
        obj = {};
        const orbPriceAmount = orbProductContext.orbPriceAmount;
        let tmp3;
        if (null != orbPriceAmount) {
          tmp3 = orbPriceAmount;
        }
        obj.price = tmp3;
        const orbPriceAmount2 = orbProductContext.orbPriceAmount;
        let tmp5;
        if (null != orbPriceAmount2) {
          tmp5 = orbPriceAmount2;
        }
        obj.regular_price = tmp5;
        tmp = obj;
      }
      const merged = Object.assign(tmp);
      return obj;
    }, items);
    obj = {
      emitOrbCheckoutPaymentFlowEvent: callback((arg0, arg1) => {
        const diff = Date.now() - arg0;
        if (arg0 === constants.PAYMENT_FLOW_STARTED) {
          let obj = {};
          const merged = Object.assign(tmp2);
          obj["has_saved_payment_source"] = false;
          obj["continue_session_initial_step"] = null;
          const result = arg0(loadId[9]).trackPaymentFlowStartedAnalyticsAndCTP(obj);
          const obj11 = arg0(loadId[9]);
        } else if (arg0 === constants.PAYMENT_FLOW_COMPLETED) {
          obj = {};
          const merged1 = Object.assign(tmp2);
          obj["duration_ms"] = diff;
          skuId(loadId[10]).track(constants.PAYMENT_FLOW_COMPLETED, obj);
          const obj9 = skuId(loadId[10]);
        } else if (arg0 === constants.PAYMENT_FLOW_SUCCEEDED) {
          const obj1 = {};
          const merged2 = Object.assign(tmp2);
          obj1["duration_ms"] = diff;
          skuId(loadId[10]).track(constants.PAYMENT_FLOW_SUCCEEDED, obj1);
          const obj7 = skuId(loadId[10]);
        } else if (arg0 === constants.PAYMENT_FLOW_CANCELED) {
          let obj4 = skuId(loadId[10]);
          const obj2 = {};
          const merged3 = Object.assign(tmp2);
          obj2["duration_ms"] = diff;
          obj4.track(constants.PAYMENT_FLOW_CANCELED, obj2);
        } else {
          obj = skuId(loadId[10]);
          const obj3 = {};
          const merged4 = Object.assign(tmp2);
          obj3["duration_ms"] = diff;
          if (null != arg1) {
            obj4 = {};
            ({ code: obj4.payment_error_code, message: obj4.error_message } = arg1);
            let obj5 = obj4;
          } else {
            obj5 = {};
          }
          const merged5 = Object.assign(obj5);
          obj.track(constants.PAYMENT_FLOW_FAILED, obj3);
        }
      }, items1)
    };
    const items1 = [startTime, tmp2];
    return obj;
  }(startTime.startTime).emitOrbCheckoutPaymentFlowEvent;
  const dependencyMap = emitOrbCheckoutPaymentFlowEvent;
  let obj1 = arg1(dependencyMap[11]);
  const virtualCurrencyBalance = obj1.useVirtualCurrencyBalance();
  let closure_3 = virtualCurrencyBalance;
  const tmp3 = tmp3(virtualCurrencyBalance);
  const items = [emitOrbCheckoutPaymentFlowEvent];
  callback(() => {
    emitOrbCheckoutPaymentFlowEvent(constants.PAYMENT_FLOW_STARTED);
  }, items);
  const items1 = [orbRedemptionError, emitOrbCheckoutPaymentFlowEvent];
  callback(() => {
    let tmp = null != orbRedemptionError;
    if (tmp) {
      tmp = null !== tmp3.current;
    }
    if (tmp) {
      emitOrbCheckoutPaymentFlowEvent(constants.PAYMENT_FLOW_FAILED, orbRedemptionError);
      emitOrbCheckoutPaymentFlowEvent.current = null;
    }
  }, items1);
  const current = tmp3.current;
  let tmp6 = virtualCurrencyBalance;
  if (null != current) {
    tmp6 = current;
  }
  const items2 = [emitOrbCheckoutPaymentFlowEvent, virtualCurrencyBalance, onRedeemVirtualCurrency];
  obj = {};
  obj = {};
  obj1 = { orbBalance: tmp6 };
  obj.children = callback3(OrbCheckoutModalContent, obj1);
  const items3 = [callback3(arg1(dependencyMap[14]).ModalContent, obj), ];
  const obj2 = {
    children: callback3(OrbCheckoutModalFooter, {
      onPress: callback2(() => {
        emitOrbCheckoutPaymentFlowEvent(constants.PAYMENT_FLOW_COMPLETED);
        tmp3.current = virtualCurrencyBalance;
        onRedeemVirtualCurrency(() => {
          callback2(constants.PAYMENT_FLOW_SUCCEEDED);
          let arr = callback(callback2[12]);
          arr = arr.pop();
        });
      }, items2)
    })
  };
  items3[1] = callback3(arg1(dependencyMap[15]).ModalFooter, obj2);
  obj.children = items3;
  return callback4(arg1(dependencyMap[13]).ModalScreen, obj);
}
const result = __exportStarResult1.fileFinishedImporting("modules/virtual_currency/checkout/native/OrbCheckoutModal.tsx");

export default function _default(skuId) {
  let analyticsLocations;
  skuId = skuId.skuId;
  const arg1 = skuId;
  ({ onCheckoutSuccess: closure_1, analyticsLocations } = skuId);
  const dependencyMap = analyticsLocations;
  importDefault(dependencyMap[16])(skuId, "SKU ID is required");
  let obj = arg1(dependencyMap[17]);
  const current = React.useRef(obj.v4()).current;
  const React = current;
  const current2 = React.useRef(Date.now()).current;
  const items = [analyticsLocations, skuId];
  const effect = React.useEffect(() => {
    let obj = callback(analyticsLocations[10]);
    obj = { type: "Orb Checkout Modal", location_stack: analyticsLocations, sku_id: skuId };
    obj.track(constants.OPEN_MODAL, obj);
  }, items);
  const items1 = [skuId, current, analyticsLocations, current2];
  obj = {};
  obj = {};
  const callback = React.useCallback(() => {
    const timestamp = Date.now();
    let obj = callback(analyticsLocations[10]);
    obj = { load_id: current, application_id: skuId(analyticsLocations[8]).get1PShopApplicationIdForSKU(skuId), location_stack: analyticsLocations, payment_gateway: constants3.VIRTUAL_CURRENCY, sku_id: skuId, currency: constants2.DISCORD_ORB, duration_ms: timestamp - current2 };
    obj.track(constants.PAYMENT_FLOW_CANCELED, obj);
    let arr = callback(analyticsLocations[12]);
    arr = arr.pop();
  }, items1);
  const intl = arg1(dependencyMap[18]).intl;
  obj.title = intl.string(arg1(dependencyMap[18]).t.q9EGps);
  obj.headerShown = true;
  const intl2 = arg1(dependencyMap[18]).intl;
  obj.headerLeft = arg1(dependencyMap[19]).getHeaderTextButton(intl2.string(arg1(dependencyMap[18]).t.ETE/oC), callback);
  obj.render = function render() {
    let obj = { skuId, loadId: current, onCheckoutSuccess: closure_1, analyticsLocations };
    obj = { startTime: current2 };
    obj.children = callback2(closure_14, obj);
    return callback2(skuId(analyticsLocations[4]).OrbCheckoutModalContextProvider, obj);
  };
  obj[constants.MAIN] = obj;
  return callback3(arg1(dependencyMap[20]).Modal, { screens: obj, initialRouteName: constants.MAIN, headerTitleAlign: "center" });
};
