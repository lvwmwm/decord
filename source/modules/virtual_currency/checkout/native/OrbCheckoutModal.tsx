// Module ID: 11858
// Function ID: 91940
// Name: OrbCheckoutModalContent
// Dependencies: [31, 653, 482, 33, 11859, 8250, 4541, 11860, 9488, 7157, 675, 11861, 4337, 7613, 7614, 11098, 44, 491, 1212, 5087, 11100, 2]
// Exports: default

// Module 11858 (OrbCheckoutModalContent)
import closure_3 from "result";
import result from "result";
import ME from "ME";
import { InternalPaymentGateways } from "sum";
import jsxProd from "jsxProd";

let closure_11;
let closure_12;
let closure_4;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function OrbCheckoutModalContent(orbBalance) {
  let obj = require(11859) /* useOrbCheckoutModalContextProvider */;
  const orbCheckoutModalContext = obj.useOrbCheckoutModalContext();
  const orbRedemptionError = orbCheckoutModalContext.orbRedemptionError;
  let obj1 = require(8250) /* useFetchCollectiblesProduct */;
  const product = obj1.useFetchCollectiblesProduct(orbCheckoutModalContext.skuId).product;
  obj = {};
  let tmp3 = null != orbRedemptionError;
  if (tmp3) {
    obj = { error: orbRedemptionError.message };
    tmp3 = callback4(require(11860) /* OrbCheckoutErrorCard */.OrbCheckoutErrorCard, obj);
  }
  const items = [tmp3, , ];
  obj1 = {};
  let tmp8 = null;
  if (null != product) {
    tmp8 = product;
  }
  obj1.product = tmp8;
  items[1] = callback4(require(11860) /* OrbCheckoutErrorCard */.OrbCheckoutOrderSummary, obj1);
  items[2] = callback4(require(11860) /* OrbCheckoutErrorCard */.OrbCheckoutPaymentSourceDetails, { orbBalance: orbBalance.orbBalance });
  obj.children = items;
  return closure_12(require(4541) /* Stack */.Stack, obj);
}
function OrbCheckoutModalFooter(onPress) {
  const obj = {};
  const items = [callback4(require(11860) /* OrbCheckoutErrorCard */.OrbCheckoutLegalFinePrint, {}), callback4(require(11860) /* OrbCheckoutErrorCard */.OrbCheckoutPurchaseButton, { onPress: onPress.onPress })];
  obj.children = items;
  return callback5(require(4541) /* Stack */.Stack, obj);
}
({ useRef: closure_4, useEffect: closure_5, useCallback: closure_6, useMemo: closure_7 } = result);
({ AnalyticEvents: closure_8, CurrencyCodes: closure_9 } = ME);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
let closure_13 = { MAIN: "MAIN" };
function OrbCheckoutModalScreen(startTime) {
  let obj = onRedeemVirtualCurrency(emitOrbCheckoutPaymentFlowEvent[4]);
  let orbCheckoutModalContext = obj.useOrbCheckoutModalContext();
  onRedeemVirtualCurrency = orbCheckoutModalContext.onRedeemVirtualCurrency;
  const orbRedemptionError = orbCheckoutModalContext.orbRedemptionError;
  emitOrbCheckoutPaymentFlowEvent = (function useOrbCheckoutPaymentFlowEvents(startTime) {
    let closure_0 = startTime;
    let obj = onRedeemVirtualCurrency(emitOrbCheckoutPaymentFlowEvent[4]);
    const orbCheckoutModalContext = obj.useOrbCheckoutModalContext();
    const skuId = orbCheckoutModalContext.skuId;
    const loadId = orbCheckoutModalContext.loadId;
    const analyticsLocations = orbCheckoutModalContext.analyticsLocations;
    const orbProductContext = orbCheckoutModalContext.orbProductContext;
    const items = [loadId, skuId, analyticsLocations, orbProductContext];
    const tmp2 = outer1_7(() => {
      let obj = { load_id: loadId, application_id: onRedeemVirtualCurrency(emitOrbCheckoutPaymentFlowEvent[8]).get1PShopApplicationIdForSKU(skuId), location_stack: analyticsLocations, sku_id: skuId, currency: outer2_9.DISCORD_ORB, payment_gateway: outer2_10.VIRTUAL_CURRENCY };
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
    let closure_5 = tmp2;
    obj = {
      emitOrbCheckoutPaymentFlowEvent: outer1_6((arg0, arg1) => {
        const diff = Date.now() - closure_0;
        if (arg0 === outer2_8.PAYMENT_FLOW_STARTED) {
          let obj = {};
          const merged = Object.assign(closure_5);
          obj["has_saved_payment_source"] = false;
          obj["continue_session_initial_step"] = null;
          const result = onRedeemVirtualCurrency(emitOrbCheckoutPaymentFlowEvent[9]).trackPaymentFlowStartedAnalyticsAndCTP(obj);
          const obj11 = onRedeemVirtualCurrency(emitOrbCheckoutPaymentFlowEvent[9]);
        } else if (arg0 === outer2_8.PAYMENT_FLOW_COMPLETED) {
          obj = {};
          const merged1 = Object.assign(closure_5);
          obj["duration_ms"] = diff;
          orbRedemptionError(emitOrbCheckoutPaymentFlowEvent[10]).track(outer2_8.PAYMENT_FLOW_COMPLETED, obj);
          const obj9 = orbRedemptionError(emitOrbCheckoutPaymentFlowEvent[10]);
        } else if (arg0 === outer2_8.PAYMENT_FLOW_SUCCEEDED) {
          const obj1 = {};
          const merged2 = Object.assign(closure_5);
          obj1["duration_ms"] = diff;
          orbRedemptionError(emitOrbCheckoutPaymentFlowEvent[10]).track(outer2_8.PAYMENT_FLOW_SUCCEEDED, obj1);
          const obj7 = orbRedemptionError(emitOrbCheckoutPaymentFlowEvent[10]);
        } else if (arg0 === outer2_8.PAYMENT_FLOW_CANCELED) {
          let obj4 = orbRedemptionError(emitOrbCheckoutPaymentFlowEvent[10]);
          const obj2 = {};
          const merged3 = Object.assign(closure_5);
          obj2["duration_ms"] = diff;
          obj4.track(outer2_8.PAYMENT_FLOW_CANCELED, obj2);
        } else {
          obj = orbRedemptionError(emitOrbCheckoutPaymentFlowEvent[10]);
          const obj3 = {};
          const merged4 = Object.assign(closure_5);
          obj3["duration_ms"] = diff;
          if (null != arg1) {
            obj4 = {};
            ({ code: obj4.payment_error_code, message: obj4.error_message } = arg1);
            let obj5 = obj4;
          } else {
            obj5 = {};
          }
          const merged5 = Object.assign(obj5);
          obj.track(outer2_8.PAYMENT_FLOW_FAILED, obj3);
        }
      }, items1)
    };
    items1 = [startTime, tmp2];
    return obj;
  })(startTime.startTime).emitOrbCheckoutPaymentFlowEvent;
  let obj1 = onRedeemVirtualCurrency(emitOrbCheckoutPaymentFlowEvent[11]);
  const virtualCurrencyBalance = obj1.useVirtualCurrencyBalance();
  let tmp3 = callback(virtualCurrencyBalance);
  callback = tmp3;
  let items = [emitOrbCheckoutPaymentFlowEvent];
  callback2(() => {
    emitOrbCheckoutPaymentFlowEvent(outer1_8.PAYMENT_FLOW_STARTED);
  }, items);
  let items1 = [orbRedemptionError, emitOrbCheckoutPaymentFlowEvent];
  callback2(() => {
    let tmp = null != orbRedemptionError;
    if (tmp) {
      tmp = null !== tmp3.current;
    }
    if (tmp) {
      emitOrbCheckoutPaymentFlowEvent(outer1_8.PAYMENT_FLOW_FAILED, orbRedemptionError);
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
  obj.children = callback4(OrbCheckoutModalContent, obj1);
  const items3 = [callback4(onRedeemVirtualCurrency(emitOrbCheckoutPaymentFlowEvent[14]).ModalContent, obj), ];
  let obj2 = {
    children: callback4(OrbCheckoutModalFooter, {
      onPress: callback3(() => {
        emitOrbCheckoutPaymentFlowEvent(outer1_8.PAYMENT_FLOW_COMPLETED);
        closure_4.current = virtualCurrencyBalance;
        onRedeemVirtualCurrency(() => {
          outer1_2(outer2_8.PAYMENT_FLOW_SUCCEEDED);
          let arr = orbRedemptionError(emitOrbCheckoutPaymentFlowEvent[12]);
          arr = arr.pop();
        });
      }, items2)
    })
  };
  items3[1] = callback4(onRedeemVirtualCurrency(emitOrbCheckoutPaymentFlowEvent[15]).ModalFooter, obj2);
  obj.children = items3;
  return callback5(onRedeemVirtualCurrency(emitOrbCheckoutPaymentFlowEvent[13]).ModalScreen, obj);
}
result = require("sum").fileFinishedImporting("modules/virtual_currency/checkout/native/OrbCheckoutModal.tsx");

export default function _default(skuId) {
  let analyticsLocations;
  let importDefault;
  skuId = skuId.skuId;
  ({ onCheckoutSuccess: importDefault, analyticsLocations } = skuId);
  importDefault(analyticsLocations[16])(skuId, "SKU ID is required");
  let obj = skuId(analyticsLocations[17]);
  current = current.useRef(obj.v4()).current;
  const current2 = current.useRef(Date.now()).current;
  const items = [analyticsLocations, skuId];
  const effect = current.useEffect(() => {
    let obj = outer1_1(analyticsLocations[10]);
    obj = { type: "Orb Checkout Modal", location_stack: analyticsLocations, sku_id: skuId };
    obj.track(outer1_8.OPEN_MODAL, obj);
  }, items);
  const items1 = [skuId, current, analyticsLocations, current2];
  obj = {};
  obj = {};
  const callback = current.useCallback(() => {
    const timestamp = Date.now();
    let obj = outer1_1(analyticsLocations[10]);
    obj = { load_id: current, application_id: skuId(analyticsLocations[8]).get1PShopApplicationIdForSKU(skuId), location_stack: analyticsLocations, payment_gateway: outer1_10.VIRTUAL_CURRENCY, sku_id: skuId, currency: outer1_9.DISCORD_ORB, duration_ms: timestamp - current2 };
    obj.track(outer1_8.PAYMENT_FLOW_CANCELED, obj);
    let arr = outer1_1(analyticsLocations[12]);
    arr = arr.pop();
  }, items1);
  const intl = skuId(analyticsLocations[18]).intl;
  obj.title = intl.string(skuId(analyticsLocations[18]).t.q9EGps);
  obj.headerShown = true;
  const intl2 = skuId(analyticsLocations[18]).intl;
  obj.headerLeft = skuId(analyticsLocations[19]).getHeaderTextButton(intl2.string(skuId(analyticsLocations[18]).t["ETE/oC"]), callback);
  obj.render = function render() {
    let obj = { skuId, loadId: current, onCheckoutSuccess: closure_1, analyticsLocations };
    obj = { startTime: current2 };
    obj.children = outer1_11(outer1_14, obj);
    return outer1_11(skuId(analyticsLocations[4]).OrbCheckoutModalContextProvider, obj);
  };
  obj[constants.MAIN] = obj;
  return callback4(skuId(analyticsLocations[20]).Modal, { screens: obj, initialRouteName: constants.MAIN, headerTitleAlign: "center" });
};
