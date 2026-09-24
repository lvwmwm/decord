// Module ID: 13497
// Function ID: 13498
// Name: OrbCheckoutModal
// Dependencies: [19, 1078, 1089, 21, 558, 568, 13498, 11378, 13499, 5218, 10601, 11143, 1245, 13500, 4993, 8730, 8731, 12093, 38, 1259, 1119, 5871, 11489, 2]
// Exports: default

// Module 13497 (OrbCheckoutModal)
import c from "c" /* 568 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1245 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4993 */;
import Stack_Stack from "Stack/Stack" /* 5218 */;
import VirtualCurrencyUtils from "VirtualCurrencyUtils" /* 10601 */;
import PaymentFlowStartedTriggerPoint from "PaymentFlowStartedTriggerPoint" /* 11143 */;
import useFetchCollectiblesProduct from "useFetchCollectiblesProduct" /* 11378 */;
import OrbCheckoutModalContext from "OrbCheckoutModalContext" /* 13498 */;
import OrbCheckoutModalComponents from "OrbCheckoutModalComponents" /* 13499 */;
import "module_19";

const require = globalThis.__r;

require = fn;
const noop = fn(19);
({ useRef: closure_4, useEffect: hasOwnProperty, useCallback: metroRequire, useMemo: closure_7 } = noop);
const Constants = fn(1078);
({ AnalyticEvents: closure_8, CurrencyCodes: closure_9 } = Constants);
const InternalPaymentGateways = fn(1089).InternalPaymentGateways;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const constants3 = { MAIN: "MAIN" };
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((orbBalance) => {
  const cResult = c.c(10);
  orbBalance = orbBalance.orbBalance;
  const orbCheckoutModalContext = OrbCheckoutModalContext.useOrbCheckoutModalContext();
  ({ orbRedemptionError, skuId } = orbCheckoutModalContext);
  let product = useFetchCollectiblesProduct.useFetchCollectiblesProduct(skuId).product;
  if (cResult[0] !== orbRedemptionError) {
    let tmp8 = null != orbRedemptionError;
    if (tmp8) {
      const obj4 = { error: orbRedemptionError.message };
      tmp8 = closure_1_11(tmp(13499).OrbCheckoutErrorCard, obj4);
    }
    cResult[0] = orbRedemptionError;
    cResult[1] = tmp8;
    let tmp6 = tmp8;
  } else {
    tmp6 = cResult[1];
  }
  if (product == null) {
    product = null;
  }
  if (cResult[2] !== product) {
    const obj5 = { product };
    const tmp12 = closure_1_11(tmp(13499).OrbCheckoutOrderSummary, obj5);
    cResult[2] = product;
    cResult[3] = tmp12;
    let tmp10 = tmp12;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] !== orbBalance) {
    const obj6 = { orbBalance };
    const tmp15 = closure_1_11(tmp(13499).OrbCheckoutPaymentSourceDetails, obj6);
    cResult[4] = orbBalance;
    cResult[5] = tmp15;
    let tmp13 = tmp15;
  } else {
    tmp13 = cResult[5];
  }
  if (cResult[6] === tmp6) {
    if (cResult[7] === tmp10) {
      if (cResult[8] === tmp13) {
        let tmp16 = cResult[9];
      }
      return tmp16;
    }
  }
  const obj7 = { children: null };
  const items = [tmp6, tmp10, tmp13];
  obj7.children = items;
  const tmp17 = __initData(Stack_Stack.Stack, obj7);
  cResult[6] = tmp6;
  cResult[7] = tmp10;
  cResult[8] = tmp13;
  cResult[9] = tmp17;
  tmp16 = tmp17;
}) : ((orbBalance) => {
  const orbCheckoutModalContext = OrbCheckoutModalContext.useOrbCheckoutModalContext();
  ({ orbRedemptionError, skuId } = orbCheckoutModalContext);
  let product = useFetchCollectiblesProduct.useFetchCollectiblesProduct(skuId).product;
  let tmp6 = null != orbRedemptionError;
  if (tmp6) {
    const obj3 = { error: orbRedemptionError.message };
    tmp6 = closure_1_11(tmp(13499).OrbCheckoutErrorCard, obj3);
  }
  const items = [tmp6, , ];
  if (product == null) {
    product = null;
  }
  const obj4 = { children: null };
  items[1] = closure_1_11(OrbCheckoutModalComponents.OrbCheckoutOrderSummary, { product });
  items[2] = closure_1_11(OrbCheckoutModalComponents.OrbCheckoutPaymentSourceDetails, { orbBalance: orbBalance.orbBalance });
  obj4.children = items;
  return __initData(Stack_Stack.Stack, obj4);
});
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((onPress) => {
  const cResult = c.c(3);
  onPress = onPress.onPress;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp6 = closure_1_11(tmp(13499).OrbCheckoutLegalFinePrint, {});
    cResult[0] = tmp6;
    let first = tmp6;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== onPress) {
    const obj2 = { children: null };
    const items = [first, ];
    const obj3 = { onPress };
    items[1] = closure_1_11(tmp(13499).OrbCheckoutPurchaseButton, obj3);
    obj2.children = items;
    const tmp10 = __initData(tmp(5218).Stack, obj2);
    cResult[1] = onPress;
    cResult[2] = tmp10;
    let tmp7 = tmp10;
  } else {
    tmp7 = cResult[2];
  }
  return tmp7;
}) : ((onPress) => {
  const obj = { children: null };
  const items = [closure_1_11(OrbCheckoutModalComponents.OrbCheckoutLegalFinePrint, {}), closure_1_11(OrbCheckoutModalComponents.OrbCheckoutPurchaseButton, { onPress: onPress.onPress })];
  obj.children = items;
  return __initData(Stack_Stack.Stack, obj);
});
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(15);
  let obj = require("c");
  const tmp = _require;
  const orbCheckoutModalContext = require("OrbCheckoutModalContext").useOrbCheckoutModalContext();
  ({ skuId, loadId, analyticsLocations, orbProductContext } = orbCheckoutModalContext);
  if (cResult[0] !== skuId) {
    let result = tmp(10601).get1PShopApplicationIdForSKU(skuId);
    cResult[0] = skuId;
    cResult[1] = result;
    let tmp5 = result;
    const tmpResult = tmp(10601);
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== orbProductContext) {
    let tmp9 = null != orbProductContext;
    if (tmp9) {
      const orbPriceAmount = orbProductContext.orbPriceAmount;
      let obj3 = { price: orbPriceAmount, regular_price: null };
      const orbPriceAmount2 = orbProductContext.orbPriceAmount;
      obj3.regular_price = orbPriceAmount2;
      tmp9 = obj3;
    }
    cResult[2] = orbProductContext;
    cResult[3] = tmp9;
    let tmp7 = tmp9;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] === analyticsLocations) {
    if (cResult[5] === loadId) {
      if (cResult[6] === skuId) {
        if (cResult[7] === tmp5) {
          if (cResult[8] === tmp7) {
            let tmp10 = cResult[9];
          }
          importDefault = tmp10;
          if (cResult[10] === tmp10) {
            if (cResult[11] === arg0) {
              let tmp12 = cResult[12];
            }
            if (cResult[13] !== tmp12) {
              const obj4 = { emitOrbCheckoutPaymentFlowEvent: tmp12 };
              class A {
                constructor(arg0, arg1) {
                  diff = Date.now() - closure_0;
                  tmp2 = AnalyticEvents;
                  if (arg0 === AnalyticEvents.PAYMENT_FLOW_STARTED) {
                    tmp32 = closure_0;
                    tmp33 = closure_2;
                    obj11 = closure_0(closure_2[11]);
                    obj1 = {};
                    tmp34 = closure_1;
                    tmp35 = obj1;
                    merged = Object.assign(closure_1);
                    flag = false;
                    obj1.has_saved_payment_source = false;
                    tmp37 = null;
                    obj1.continue_session_initial_step = null;
                    result = obj11.trackPaymentFlowStartedAnalyticsAndCTP(obj1);
                  } else if (arg0 === tmp2.PAYMENT_FLOW_COMPLETED) {
                    tmp26 = closure_1;
                    tmp27 = closure_2;
                    obj9 = closure_1(closure_2[12]);
                    obj13 = {};
                    tmp28 = closure_1;
                    tmp29 = obj13;
                    merged1 = Object.assign(closure_1);
                    obj13.duration_ms = diff;
                    trackResult = obj9.track(tmp2.PAYMENT_FLOW_COMPLETED, obj13);
                  } else if (arg0 === tmp2.PAYMENT_FLOW_SUCCEEDED) {
                    tmp20 = closure_1;
                    tmp21 = closure_2;
                    obj7 = closure_1(closure_2[12]);
                    obj14 = {};
                    tmp22 = closure_1;
                    tmp23 = obj14;
                    merged2 = Object.assign(closure_1);
                    obj14.duration_ms = diff;
                    trackResult1 = obj7.track(tmp2.PAYMENT_FLOW_SUCCEEDED, obj14);
                  } else if (arg0 === tmp2.PAYMENT_FLOW_CANCELED) {
                    tmp14 = closure_1;
                    tmp15 = closure_2;
                    obj5 = closure_1(closure_2[12]);
                    obj15 = {};
                    tmp16 = closure_1;
                    tmp17 = obj15;
                    merged3 = Object.assign(closure_1);
                    obj15.duration_ms = diff;
                    trackResult2 = obj5.track(tmp2.PAYMENT_FLOW_CANCELED, obj15);
                  } else {
                    tmp3 = arg1;
                    tmp4 = closure_1;
                    tmp5 = closure_2;
                    obj = closure_1(closure_2[12]);
                    obj16 = {};
                    tmp6 = closure_1;
                    tmp7 = obj16;
                    merged4 = Object.assign(closure_1);
                    obj16.duration_ms = diff;
                    tmp9 = null;
                    if (null != arg1) {
                      obj17 = { payment_error_code: null, error_message: null };
                      ({ code: obj4.payment_error_code, message: obj4.error_message } = arg1);
                      obj18 = obj17;
                    } else {
                      obj18 = {};
                    }
                    tmp10 = obj16;
                    tmp11 = obj18;
                    merged5 = Object.assign(obj18);
                    trackResult3 = obj.track(tmp2.PAYMENT_FLOW_FAILED, obj16);
                  }
                  return;
                }
              }
              cResult[14] = obj4;
              let tmp13 = obj4;
            } else {
              tmp13 = cResult[14];
            }
            return tmp13;
          }
          class A {
            constructor(arg0, arg1) {
              diff = Date.now() - closure_0;
              tmp2 = AnalyticEvents;
              if (arg0 === AnalyticEvents.PAYMENT_FLOW_STARTED) {
                tmp32 = closure_0;
                tmp33 = closure_2;
                obj11 = closure_0(closure_2[11]);
                obj1 = {};
                tmp34 = closure_1;
                tmp35 = obj1;
                merged = Object.assign(closure_1);
                flag = false;
                obj1.has_saved_payment_source = false;
                tmp37 = null;
                obj1.continue_session_initial_step = null;
                result = obj11.trackPaymentFlowStartedAnalyticsAndCTP(obj1);
              } else if (arg0 === tmp2.PAYMENT_FLOW_COMPLETED) {
                tmp26 = closure_1;
                tmp27 = closure_2;
                obj9 = closure_1(closure_2[12]);
                obj13 = {};
                tmp28 = closure_1;
                tmp29 = obj13;
                merged1 = Object.assign(closure_1);
                obj13.duration_ms = diff;
                trackResult = obj9.track(tmp2.PAYMENT_FLOW_COMPLETED, obj13);
              } else if (arg0 === tmp2.PAYMENT_FLOW_SUCCEEDED) {
                tmp20 = closure_1;
                tmp21 = closure_2;
                obj7 = closure_1(closure_2[12]);
                obj14 = {};
                tmp22 = closure_1;
                tmp23 = obj14;
                merged2 = Object.assign(closure_1);
                obj14.duration_ms = diff;
                trackResult1 = obj7.track(tmp2.PAYMENT_FLOW_SUCCEEDED, obj14);
              } else if (arg0 === tmp2.PAYMENT_FLOW_CANCELED) {
                tmp14 = closure_1;
                tmp15 = closure_2;
                obj5 = closure_1(closure_2[12]);
                obj15 = {};
                tmp16 = closure_1;
                tmp17 = obj15;
                merged3 = Object.assign(closure_1);
                obj15.duration_ms = diff;
                trackResult2 = obj5.track(tmp2.PAYMENT_FLOW_CANCELED, obj15);
              } else {
                tmp3 = arg1;
                tmp4 = closure_1;
                tmp5 = closure_2;
                obj = closure_1(closure_2[12]);
                obj16 = {};
                tmp6 = closure_1;
                tmp7 = obj16;
                merged4 = Object.assign(closure_1);
                obj16.duration_ms = diff;
                tmp9 = null;
                if (null != arg1) {
                  obj17 = { payment_error_code: null, error_message: null };
                  ({ code: obj4.payment_error_code, message: obj4.error_message } = arg1);
                  obj18 = obj17;
                } else {
                  obj18 = {};
                }
                tmp10 = obj16;
                tmp11 = obj18;
                merged5 = Object.assign(obj18);
                trackResult3 = obj.track(tmp2.PAYMENT_FLOW_FAILED, obj16);
              }
              return;
            }
          }
          cResult[10] = tmp10;
          cResult[11] = arg0;
          cResult[12] = A;
          tmp12 = A;
        }
      }
    }
  }
  let obj5 = { load_id: loadId, application_id: tmp5, location_stack: analyticsLocations, sku_id: skuId, currency: constants2.DISCORD_ORB, payment_gateway: InternalPaymentGateways.VIRTUAL_CURRENCY };
  let merged = Object.assign(tmp7);
  cResult[4] = analyticsLocations;
  cResult[5] = loadId;
  cResult[6] = skuId;
  cResult[7] = tmp5;
  cResult[8] = tmp7;
  cResult[9] = obj5;
  tmp10 = obj5;
}) : ((arg0) => {
  _require = arg0;
  const orbCheckoutModalContext = require("OrbCheckoutModalContext").useOrbCheckoutModalContext();
  const skuId = orbCheckoutModalContext.skuId;
  loadId = orbCheckoutModalContext.loadId;
  const analyticsLocations = orbCheckoutModalContext.analyticsLocations;
  const orbProductContext = orbCheckoutModalContext.orbProductContext;
  const items = [loadId, skuId, analyticsLocations, orbProductContext];
  let tmp2 = closure_7(() => {
    const obj = { load_id: loadId, application_id: VirtualCurrencyUtils.get1PShopApplicationIdForSKU(skuId), location_stack: analyticsLocations, sku_id: skuId, currency: constants2.DISCORD_ORB, payment_gateway: InternalPaymentGateways.VIRTUAL_CURRENCY };
    let tmp2 = null != orbProductContext;
    if (tmp2) {
      const orbPriceAmount = tmp.orbPriceAmount;
      const obj3 = { price: orbPriceAmount, regular_price: null };
      const orbPriceAmount2 = tmp.orbPriceAmount;
      obj3.regular_price = orbPriceAmount2;
      tmp2 = obj3;
    }
    const merged = Object.assign(tmp2);
    return obj;
  }, items);
  closure_5 = tmp2;
  let obj2 = { emitOrbCheckoutPaymentFlowEvent: null };
  const items1 = [arg0, tmp2];
  obj2.emitOrbCheckoutPaymentFlowEvent = closure_6((arg0, arg1) => {
    const diff = Date.now() - closure_0;
    if (arg0 === constants.PAYMENT_FLOW_STARTED) {
      const obj2 = {};
      const merged = Object.assign(closure_5);
      obj2.has_saved_payment_source = false;
      obj2.continue_session_initial_step = null;
      const result = PaymentFlowStartedTriggerPoint.trackPaymentFlowStartedAnalyticsAndCTP(obj2);
    } else if (arg0 === tmp2.PAYMENT_FLOW_COMPLETED) {
      const obj3 = {};
      const merged1 = Object.assign(closure_5);
      obj3.duration_ms = diff;
      AnalyticsUtilsDefault.track(tmp2.PAYMENT_FLOW_COMPLETED, obj3);
    } else if (arg0 === tmp2.PAYMENT_FLOW_SUCCEEDED) {
      const obj6 = {};
      const merged2 = Object.assign(closure_5);
      obj6.duration_ms = diff;
      AnalyticsUtilsDefault.track(tmp2.PAYMENT_FLOW_SUCCEEDED, obj6);
    } else if (arg0 === tmp2.PAYMENT_FLOW_CANCELED) {
      const obj8 = {};
      const merged3 = Object.assign(closure_5);
      obj8.duration_ms = diff;
      AnalyticsUtilsDefault.track(tmp2.PAYMENT_FLOW_CANCELED, obj8);
    } else {
      const obj10 = {};
      const merged4 = Object.assign(closure_5);
      obj10.duration_ms = diff;
      if (null != arg1) {
        ({ code: obj4.payment_error_code, message: obj4.error_message } = arg1);
        let obj19 = { payment_error_code: null, error_message: null };
        const obj12 = { payment_error_code: null, error_message: null };
      } else {
        obj19 = {};
      }
      const merged5 = Object.assign(obj19);
      AnalyticsUtilsDefault.track(tmp2.PAYMENT_FLOW_FAILED, obj10);
    }
  }, items1);
  return obj2;
});
function OrbCheckoutModalScreen(startTime) {
  let onRedeemVirtualCurrency;
  let emitOrbCheckoutPaymentFlowEvent;
  let ref;
  const orbCheckoutModalContext = onRedeemVirtualCurrency(emitOrbCheckoutPaymentFlowEvent[6]).useOrbCheckoutModalContext();
  onRedeemVirtualCurrency = orbCheckoutModalContext.onRedeemVirtualCurrency;
  const orbRedemptionError = orbCheckoutModalContext.orbRedemptionError;
  emitOrbCheckoutPaymentFlowEvent = closure_16(startTime.startTime).emitOrbCheckoutPaymentFlowEvent;
  const obj = onRedeemVirtualCurrency(emitOrbCheckoutPaymentFlowEvent[6]);
  const virtualCurrencyBalance = onRedeemVirtualCurrency(emitOrbCheckoutPaymentFlowEvent[13]).useVirtualCurrencyBalance();
  const tmp5 = ref(virtualCurrencyBalance);
  ref = tmp5;
  const items = [emitOrbCheckoutPaymentFlowEvent];
  closure_5(() => {
    emitOrbCheckoutPaymentFlowEvent(constants.PAYMENT_FLOW_STARTED);
  }, items);
  const items1 = [orbRedemptionError, emitOrbCheckoutPaymentFlowEvent];
  closure_5(() => {
    let tmp2 = null != orbRedemptionError;
    if (tmp2) {
      tmp2 = null !== ref.current;
    }
    if (tmp2) {
      emitOrbCheckoutPaymentFlowEvent(constants.PAYMENT_FLOW_FAILED, orbRedemptionError);
      ref.current = null;
    }
  }, items1);
  let current = tmp5.current;
  if (current == null) {
    current = virtualCurrencyBalance;
  }
  const items2 = [emitOrbCheckoutPaymentFlowEvent, virtualCurrencyBalance, onRedeemVirtualCurrency];
  const obj2 = onRedeemVirtualCurrency(emitOrbCheckoutPaymentFlowEvent[13]);
  const obj3 = { children: null };
  const tmp8 = closure_6(() => {
    emitOrbCheckoutPaymentFlowEvent(constants.PAYMENT_FLOW_COMPLETED);
    closure_4.current = virtualCurrencyBalance;
    onRedeemVirtualCurrency(() => {
      closure_1_2(constants.PAYMENT_FLOW_SUCCEEDED);
      orbRedemptionError(emitOrbCheckoutPaymentFlowEvent[14]).pop();
    });
  }, items2);
  const items3 = [closure_11(onRedeemVirtualCurrency(emitOrbCheckoutPaymentFlowEvent[16]).ModalContent, { children: closure_11(closure_14, { orbBalance: current }) }), ];
  const obj4 = { children: closure_11(closure_14, { orbBalance: current }) };
  items3[1] = closure_11(onRedeemVirtualCurrency(emitOrbCheckoutPaymentFlowEvent[17]).ModalFooter, { children: closure_11(closure_15, { onPress: tmp8 }) });
  obj3.children = items3;
  return closure_12(onRedeemVirtualCurrency(emitOrbCheckoutPaymentFlowEvent[15]).ModalScreen, obj3);
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/virtual_currency/checkout/native/OrbCheckoutModal.tsx");

export default function _default(skuId) {
  skuId = skuId.skuId;
  ({ onCheckoutSuccess: importDefault, analyticsLocations } = skuId);
  let current;
  require("module_38")(null != skuId, "SKU ID is required");
  current = current.useRef(skuId(analyticsLocations[19]).v4()).current;
  const current2 = current.useRef(Date.now()).current;
  const items = [analyticsLocations, skuId];
  const effect = current.useEffect(() => {
    AnalyticsUtilsDefault.track(constants.OPEN_MODAL, { type: "Orb Checkout Modal", location_stack: analyticsLocations, sku_id: skuId });
  }, items);
  const items1 = [skuId, current, analyticsLocations, current2];
  let obj2 = {};
  let obj3 = { title: null, headerShown: true, headerLeft: null, render: null };
  const callback = current.useCallback(() => {
    const timestamp = Date.now();
    const obj2 = { load_id: current, application_id: null, location_stack: null, payment_gateway: null, sku_id: null, currency: null, duration_ms: null };
    const obj = AnalyticsUtilsDefault;
    obj2.application_id = VirtualCurrencyUtils.get1PShopApplicationIdForSKU(skuId);
    obj2.location_stack = analyticsLocations;
    obj2.payment_gateway = InternalPaymentGateways.VIRTUAL_CURRENCY;
    obj2.sku_id = skuId;
    obj2.currency = constants2.DISCORD_ORB;
    obj2.duration_ms = timestamp - current2;
    obj.track(constants.PAYMENT_FLOW_CANCELED, obj2);
    ModalActionCreatorsDefault.pop();
  }, items1);
  const intl = skuId(analyticsLocations[20]).intl;
  obj3.title = intl.string(skuId(analyticsLocations[20]).t.q9EGps);
  let obj = skuId(analyticsLocations[19]);
  const intl2 = skuId(analyticsLocations[20]).intl;
  obj3.headerLeft = skuId(analyticsLocations[21]).getHeaderTextButton(intl2.string(skuId(analyticsLocations[20]).t["ETE/oC"]), callback);
  obj3.render = function render() {
    const obj = { skuId, loadId: current, onCheckoutSuccess, analyticsLocations, children: closure_2_11(OrbCheckoutModalScreen, { startTime: current2 }) };
    return closure_2_11(OrbCheckoutModalContext.OrbCheckoutModalContextProvider, obj);
  };
  obj2[constants3.MAIN] = obj3;
  return closure_11(skuId(analyticsLocations[22]).Modal, { screens: obj2, initialRouteName: constants3.MAIN, headerTitleAlign: "center" });
};
