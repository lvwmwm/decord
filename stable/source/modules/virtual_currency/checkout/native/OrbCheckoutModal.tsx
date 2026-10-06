// Module ID: 12729
// Function ID: 12730
// Name: OrbCheckoutModal
// Dependencies: [19, 1086, 1097, 21, 558, 576, 12730, 10540, 12731, 5280, 9766, 10308, 1253, 12732, 5040, 7874, 7875, 11280, 38, 1267, 1127, 5933, 10733, 2]
// Exports: default

// Module 12729 (OrbCheckoutModal)
import react2 from "react" /* 576 */;
import Constants2 from "Constants" /* 1097 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5040 */;
import Stack_Stack from "Stack/Stack" /* 5280 */;
import VirtualCurrencyUtils from "VirtualCurrencyUtils" /* 9766 */;
import PaymentFlowStartedTriggerPoint from "PaymentFlowStartedTriggerPoint" /* 10308 */;
import useFetchCollectiblesProduct from "useFetchCollectiblesProduct" /* 10540 */;
import OrbCheckoutModalContext from "OrbCheckoutModalContext" /* 12730 */;
import OrbCheckoutModalComponents from "OrbCheckoutModalComponents" /* 12731 */;
import "react";
import react from "react" /* 19 */;
import Constants from "Constants" /* 1086 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, flag, importDefault, obj1, obj10, obj11, obj12, obj8, obj9, onPress, orbBalance, tmp11, tmp18, tmp19, tmp22, tmp23, tmp24, tmp25, tmp26, tmp29, tmp3, tmp30, tmp31, tmp32, tmp33, tmp36, tmp37, tmp38, tmp39, tmp4, tmp40, tmp42, track2Result, track3Result, track4Result, trackResult;

let c9;
let closure_12;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
({ useRef: closure_4, useEffect: hasOwnProperty, useCallback: metroRequire, useMemo: metroImportDefault } = react);
({ AnalyticEvents: metroImportAll, CurrencyCodes: c9 } = Constants);
const InternalPaymentGateways = Constants2.InternalPaymentGateways;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
const constants3 = { MAIN: "MAIN" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((orbBalance) => {
  let items;
  let orbRedemptionError;
  let skuId;
  let tmp10;
  let tmp13;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(10);
  orbBalance = orbBalance.orbBalance;
  const obj2 = OrbCheckoutModalContext;
  const orbCheckoutModalContext = obj2.useOrbCheckoutModalContext();
  ({ orbRedemptionError, skuId } = orbCheckoutModalContext);
  const obj3 = useFetchCollectiblesProduct;
  let product = obj3.useFetchCollectiblesProduct(skuId).product;
  if (cResult[0] !== orbRedemptionError) {
    let tmp8 = null != orbRedemptionError;
    if (tmp8) {
      const obj4 = { error: orbRedemptionError.message };
      tmp8 = unpackModuleId(tmp(12731).OrbCheckoutErrorCard, obj4);
    }
    cResult[0] = orbRedemptionError;
    cResult[1] = tmp8;
    tmp6 = tmp8;
  } else {
    tmp6 = cResult[1];
  }
  if (product == null) {
    product = null;
  }
  if (cResult[2] !== product) {
    const obj5 = { product };
    const tmp12 = unpackModuleId(OrbCheckoutModalComponents.OrbCheckoutOrderSummary, obj5);
    cResult[2] = product;
    cResult[3] = tmp12;
    tmp10 = tmp12;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] !== orbBalance) {
    const obj6 = { orbBalance };
    const tmp15 = unpackModuleId(OrbCheckoutModalComponents.OrbCheckoutPaymentSourceDetails, obj6);
    cResult[4] = orbBalance;
    cResult[5] = tmp15;
    tmp13 = tmp15;
  } else {
    tmp13 = cResult[5];
  }
  if (cResult[6] === tmp6) {
    if (cResult[7] === tmp10) {
      let tmp16;
      if (cResult[8] === tmp13) {
        tmp16 = cResult[9];
      }
      return tmp16;
    }
  }
  const obj7 = { children: items };
  items = [tmp6, tmp10, tmp13];
  const tmp17 = closure_12(Stack_Stack.Stack, obj7);
  cResult[6] = tmp6;
  cResult[7] = tmp10;
  cResult[8] = tmp13;
  cResult[9] = tmp17;
  tmp16 = tmp17;
}) : ((orbBalance) => {
  let orbRedemptionError;
  let skuId;
  orbBalance = orbBalance.orbBalance;
  const obj = OrbCheckoutModalContext;
  const orbCheckoutModalContext = obj.useOrbCheckoutModalContext();
  ({ orbRedemptionError, skuId } = orbCheckoutModalContext);
  const obj2 = useFetchCollectiblesProduct;
  let product = obj2.useFetchCollectiblesProduct(skuId).product;
  let tmp6 = null != orbRedemptionError;
  const Stack = Stack_Stack.Stack;
  const tmp5 = closure_12;
  if (tmp6) {
    const obj3 = { error: orbRedemptionError.message };
    tmp6 = unpackModuleId(tmp(12731).OrbCheckoutErrorCard, obj3);
  }
  const items = [tmp6, , ];
  const OrbCheckoutOrderSummary = tmp(12731).OrbCheckoutOrderSummary;
  if (product == null) {
    product = null;
  }
  const obj4 = { children: items };
  items[1] = unpackModuleId(OrbCheckoutOrderSummary, { product });
  items[2] = unpackModuleId(OrbCheckoutModalComponents.OrbCheckoutPaymentSourceDetails, { orbBalance });
  return tmp5(Stack, obj4);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((onPress) => {
  let first;
  let items;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(3);
  onPress = onPress.onPress;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp6 = unpackModuleId(OrbCheckoutModalComponents.OrbCheckoutLegalFinePrint, {});
    cResult[0] = tmp6;
    first = tmp6;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== onPress) {
    const obj2 = { children: items };
    items = [first, ];
    const Stack = tmp(5280).Stack;
    const obj3 = { onPress };
    items[1] = unpackModuleId(OrbCheckoutModalComponents.OrbCheckoutPurchaseButton, obj3);
    const tmp10 = closure_12(Stack, obj2);
    cResult[1] = onPress;
    cResult[2] = tmp10;
    tmp7 = tmp10;
  } else {
    tmp7 = cResult[2];
  }
  return tmp7;
}) : ((onPress) => {
  let items;
  onPress = onPress.onPress;
  const obj = { children: items };
  const Stack = Stack_Stack.Stack;
  items = [unpackModuleId(OrbCheckoutModalComponents.OrbCheckoutLegalFinePrint, {}), unpackModuleId(OrbCheckoutModalComponents.OrbCheckoutPurchaseButton, { onPress })];
  return closure_12(Stack, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let analyticsLocations;
  let closure_0;
  let closure_1;
  let loadId;
  let orbPriceAmount2;
  let orbProductContext;
  let skuId;
  let tmp5;
  let tmp7;
  _require = arg0;
  const tmp2 = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(15);
  let obj2 = require("OrbCheckoutModalContext");
  const orbCheckoutModalContext = obj2.useOrbCheckoutModalContext();
  ({ skuId, loadId, analyticsLocations, orbProductContext } = orbCheckoutModalContext);
  const tmp = _require;
  if (cResult[0] !== skuId) {
    const tmpResult = tmp(9766);
    let result = tmpResult.get1PShopApplicationIdForSKU(skuId);
    cResult[0] = skuId;
    cResult[1] = result;
    tmp5 = result;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== orbProductContext) {
    let tmp9 = null != orbProductContext;
    if (tmp9) {
      const orbPriceAmount = orbProductContext.orbPriceAmount;
      const obj3 = { price: orbPriceAmount, regular_price: orbPriceAmount2 };
      orbPriceAmount2 = orbProductContext.orbPriceAmount;
      tmp9 = obj3;
    }
    cResult[2] = orbProductContext;
    cResult[3] = tmp9;
    tmp7 = tmp9;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] === analyticsLocations) {
    if (cResult[5] === loadId) {
      if (cResult[6] === skuId) {
        if (cResult[7] === tmp5) {
          let tmp10;
          if (cResult[8] === tmp7) {
            tmp10 = cResult[9];
          }
          importDefault = tmp10;
          if (cResult[10] === tmp10) {
            let tmp12;
            let tmp13;
            if (cResult[11] === arg0) {
              tmp12 = cResult[12];
            }
            if (cResult[13] !== tmp12) {
              let obj4 = { emitOrbCheckoutPaymentFlowEvent: tmp12 };
              class A {
                constructor(arg0, arg1) {
                  diff = Date.now() - closure_0;
                  tmp2 = AnalyticEvents;
                  if (arg0 === AnalyticEvents.PAYMENT_FLOW_STARTED) {
                    tmp36 = closure_0;
                    tmp37 = closure_2;
                    tmp38 = closure_0(closure_2[11]);
                    obj1 = {};
                    tmp39 = closure_1;
                    tmp40 = obj1;
                    trackPaymentFlowStartedAnalyticsAndCTP = tmp38.trackPaymentFlowStartedAnalyticsAndCTP;
                    merged = Object.assign(closure_1);
                    flag = false;
                    obj1.has_saved_payment_source = false;
                    tmp42 = null;
                    obj1.continue_session_initial_step = null;
                    result = trackPaymentFlowStartedAnalyticsAndCTP(obj1);
                  } else if (arg0 === tmp2.PAYMENT_FLOW_COMPLETED) {
                    tmp29 = closure_1;
                    tmp30 = closure_2;
                    tmp31 = closure_1(closure_2[12]);
                    obj8 = {};
                    tmp32 = closure_1;
                    tmp33 = obj8;
                    track4 = tmp31.track;
                    PAYMENT_FLOW_COMPLETED = tmp2.PAYMENT_FLOW_COMPLETED;
                    merged1 = Object.assign(closure_1);
                    obj8.duration_ms = diff;
                    track4Result = track4(PAYMENT_FLOW_COMPLETED, obj8);
                  } else if (arg0 === tmp2.PAYMENT_FLOW_SUCCEEDED) {
                    tmp22 = closure_1;
                    tmp23 = closure_2;
                    tmp24 = closure_1(closure_2[12]);
                    obj9 = {};
                    tmp25 = closure_1;
                    tmp26 = obj9;
                    track3 = tmp24.track;
                    PAYMENT_FLOW_SUCCEEDED = tmp2.PAYMENT_FLOW_SUCCEEDED;
                    merged2 = Object.assign(closure_1);
                    obj9.duration_ms = diff;
                    track3Result = track3(PAYMENT_FLOW_SUCCEEDED, obj9);
                  } else if (arg0 === tmp2.PAYMENT_FLOW_CANCELED) {
                    tmp15 = closure_1;
                    tmp16 = closure_2;
                    tmp17 = closure_1(closure_2[12]);
                    obj10 = {};
                    tmp18 = closure_1;
                    tmp19 = obj10;
                    track2 = tmp17.track;
                    PAYMENT_FLOW_CANCELED = tmp2.PAYMENT_FLOW_CANCELED;
                    merged3 = Object.assign(closure_1);
                    obj10.duration_ms = diff;
                    track2Result = track2(PAYMENT_FLOW_CANCELED, obj10);
                  } else {
                    tmp3 = arg1;
                    tmp4 = closure_1;
                    tmp5 = closure_2;
                    tmp6 = closure_1(closure_2[12]);
                    obj = {};
                    tmp7 = closure_1;
                    tmp8 = obj;
                    track = tmp6.track;
                    PAYMENT_FLOW_FAILED = tmp2.PAYMENT_FLOW_FAILED;
                    merged4 = Object.assign(closure_1);
                    obj.duration_ms = diff;
                    tmp10 = null;
                    if (null != arg1) {
                      obj11 = { payment_error_code: null, error_message: null };
                      ({ code: obj3.payment_error_code, message: obj3.error_message } = arg1);
                      obj12 = obj11;
                    } else {
                      obj12 = {};
                    }
                    tmp11 = obj;
                    tmp12 = obj12;
                    merged5 = Object.assign(obj12);
                    trackResult = track(PAYMENT_FLOW_FAILED, obj);
                  }
                  return;
                }
              }
              cResult[14] = obj4;
              tmp13 = obj4;
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
                tmp36 = closure_0;
                tmp37 = closure_2;
                tmp38 = closure_0(closure_2[11]);
                obj1 = {};
                tmp39 = closure_1;
                tmp40 = obj1;
                trackPaymentFlowStartedAnalyticsAndCTP = tmp38.trackPaymentFlowStartedAnalyticsAndCTP;
                merged = Object.assign(closure_1);
                flag = false;
                obj1.has_saved_payment_source = false;
                tmp42 = null;
                obj1.continue_session_initial_step = null;
                result = trackPaymentFlowStartedAnalyticsAndCTP(obj1);
              } else if (arg0 === tmp2.PAYMENT_FLOW_COMPLETED) {
                tmp29 = closure_1;
                tmp30 = closure_2;
                tmp31 = closure_1(closure_2[12]);
                obj8 = {};
                tmp32 = closure_1;
                tmp33 = obj8;
                track4 = tmp31.track;
                PAYMENT_FLOW_COMPLETED = tmp2.PAYMENT_FLOW_COMPLETED;
                merged1 = Object.assign(closure_1);
                obj8.duration_ms = diff;
                track4Result = track4(PAYMENT_FLOW_COMPLETED, obj8);
              } else if (arg0 === tmp2.PAYMENT_FLOW_SUCCEEDED) {
                tmp22 = closure_1;
                tmp23 = closure_2;
                tmp24 = closure_1(closure_2[12]);
                obj9 = {};
                tmp25 = closure_1;
                tmp26 = obj9;
                track3 = tmp24.track;
                PAYMENT_FLOW_SUCCEEDED = tmp2.PAYMENT_FLOW_SUCCEEDED;
                merged2 = Object.assign(closure_1);
                obj9.duration_ms = diff;
                track3Result = track3(PAYMENT_FLOW_SUCCEEDED, obj9);
              } else if (arg0 === tmp2.PAYMENT_FLOW_CANCELED) {
                tmp15 = closure_1;
                tmp16 = closure_2;
                tmp17 = closure_1(closure_2[12]);
                obj10 = {};
                tmp18 = closure_1;
                tmp19 = obj10;
                track2 = tmp17.track;
                PAYMENT_FLOW_CANCELED = tmp2.PAYMENT_FLOW_CANCELED;
                merged3 = Object.assign(closure_1);
                obj10.duration_ms = diff;
                track2Result = track2(PAYMENT_FLOW_CANCELED, obj10);
              } else {
                tmp3 = arg1;
                tmp4 = closure_1;
                tmp5 = closure_2;
                tmp6 = closure_1(closure_2[12]);
                obj = {};
                tmp7 = closure_1;
                tmp8 = obj;
                track = tmp6.track;
                PAYMENT_FLOW_FAILED = tmp2.PAYMENT_FLOW_FAILED;
                merged4 = Object.assign(closure_1);
                obj.duration_ms = diff;
                tmp10 = null;
                if (null != arg1) {
                  obj11 = { payment_error_code: null, error_message: null };
                  ({ code: obj3.payment_error_code, message: obj3.error_message } = arg1);
                  obj12 = obj11;
                } else {
                  obj12 = {};
                }
                tmp11 = obj;
                tmp12 = obj12;
                merged5 = Object.assign(obj12);
                trackResult = track(PAYMENT_FLOW_FAILED, obj);
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
  let closure_0;
  let items1;
  let loadId;
  _require = arg0;
  let obj = require("OrbCheckoutModalContext");
  const orbCheckoutModalContext = obj.useOrbCheckoutModalContext();
  const skuId = orbCheckoutModalContext.skuId;
  loadId = orbCheckoutModalContext.loadId;
  const analyticsLocations = orbCheckoutModalContext.analyticsLocations;
  const orbProductContext = orbCheckoutModalContext.orbProductContext;
  const items = [loadId, skuId, analyticsLocations, orbProductContext];
  let tmp2 = closure_7(() => {
    let obj2;
    let orbPriceAmount2;
    const obj = { load_id: loadId, application_id: obj2.get1PShopApplicationIdForSKU(skuId), location_stack: analyticsLocations, sku_id: skuId, currency: constants.DISCORD_ORB, payment_gateway: InternalPaymentGateways.VIRTUAL_CURRENCY };
    let tmp2 = null != orbProductContext;
    obj2 = VirtualCurrencyUtils;
    if (tmp2) {
      const orbPriceAmount = tmp.orbPriceAmount;
      const obj3 = { price: orbPriceAmount, regular_price: orbPriceAmount2 };
      orbPriceAmount2 = tmp.orbPriceAmount;
      tmp2 = obj3;
    }
    const merged = Object.assign(tmp2);
    return obj;
  }, items);
  let closure_5 = tmp2;
  let obj2 = {
    emitOrbCheckoutPaymentFlowEvent: closure_6((arg0, arg1) => {
      const diff = Date.now() - closure_0;
      if (arg0 === metroImportAll.PAYMENT_FLOW_STARTED) {
        const obj2 = { has_saved_payment_source: false, continue_session_initial_step: null };
        const trackPaymentFlowStartedAnalyticsAndCTP = PaymentFlowStartedTriggerPoint.trackPaymentFlowStartedAnalyticsAndCTP;
        PaymentFlowStartedTriggerPoint;
        const merged = Object.assign(closure_5);
        const result = trackPaymentFlowStartedAnalyticsAndCTP(obj2);
      } else if (arg0 === metroImportAll.PAYMENT_FLOW_COMPLETED) {
        const obj4 = { duration_ms: diff };
        const track4 = AnalyticsUtilsDefault.track;
        const PAYMENT_FLOW_COMPLETED = tmp2.PAYMENT_FLOW_COMPLETED;
        AnalyticsUtilsDefault;
        const merged1 = Object.assign(closure_5);
        track4(PAYMENT_FLOW_COMPLETED, obj4);
      } else if (arg0 === metroImportAll.PAYMENT_FLOW_SUCCEEDED) {
        const obj5 = { duration_ms: diff };
        const track3 = AnalyticsUtilsDefault.track;
        const PAYMENT_FLOW_SUCCEEDED = tmp2.PAYMENT_FLOW_SUCCEEDED;
        AnalyticsUtilsDefault;
        const merged2 = Object.assign(closure_5);
        track3(PAYMENT_FLOW_SUCCEEDED, obj5);
      } else if (arg0 === metroImportAll.PAYMENT_FLOW_CANCELED) {
        const obj6 = { duration_ms: diff };
        const track2 = AnalyticsUtilsDefault.track;
        const PAYMENT_FLOW_CANCELED = tmp2.PAYMENT_FLOW_CANCELED;
        AnalyticsUtilsDefault;
        const merged3 = Object.assign(closure_5);
        track2(PAYMENT_FLOW_CANCELED, obj6);
      } else {
        let obj13;
        const obj = { duration_ms: diff };
        const track = AnalyticsUtilsDefault.track;
        const PAYMENT_FLOW_FAILED = tmp2.PAYMENT_FLOW_FAILED;
        AnalyticsUtilsDefault;
        const merged4 = Object.assign(closure_5);
        if (null != arg1) {
          const obj7 = { payment_error_code: null, error_message: null };
          ({ code: obj3.payment_error_code, message: obj3.error_message } = arg1);
          obj13 = obj7;
        } else {
          obj13 = {};
        }
        const merged5 = Object.assign(obj13);
        track(PAYMENT_FLOW_FAILED, obj);
      }
    }, items1)
  };
  items1 = [arg0, tmp2];
  return obj2;
});
function OrbCheckoutModalScreen(startTime) {
  let items3;
  let onRedeemVirtualCurrency;
  let emitOrbCheckoutPaymentFlowEvent;
  let ref;
  let tmp = onRedeemVirtualCurrency;
  let tmp2 = emitOrbCheckoutPaymentFlowEvent;
  startTime = startTime.startTime;
  const obj = onRedeemVirtualCurrency(emitOrbCheckoutPaymentFlowEvent[6]);
  const orbCheckoutModalContext = obj.useOrbCheckoutModalContext();
  onRedeemVirtualCurrency = orbCheckoutModalContext.onRedeemVirtualCurrency;
  const orbRedemptionError = orbCheckoutModalContext.orbRedemptionError;
  emitOrbCheckoutPaymentFlowEvent = closure_16(startTime).emitOrbCheckoutPaymentFlowEvent;
  const obj2 = onRedeemVirtualCurrency(emitOrbCheckoutPaymentFlowEvent[13]);
  const virtualCurrencyBalance = obj2.useVirtualCurrencyBalance();
  const tmp5 = ref(virtualCurrencyBalance);
  ref = tmp5;
  const items = [emitOrbCheckoutPaymentFlowEvent];
  closure_5(() => {
    emitOrbCheckoutPaymentFlowEvent(metroImportAll.PAYMENT_FLOW_STARTED);
  }, items);
  const items1 = [orbRedemptionError, emitOrbCheckoutPaymentFlowEvent];
  closure_5(() => {
    let tmp2 = null != orbRedemptionError;
    const tmp = orbRedemptionError;
    if (tmp2) {
      tmp2 = null !== ref.current;
    }
    if (tmp2) {
      emitOrbCheckoutPaymentFlowEvent(metroImportAll.PAYMENT_FLOW_FAILED, tmp);
      ref.current = null;
    }
  }, items1);
  let current = tmp5.current;
  if (current == null) {
    current = virtualCurrencyBalance;
  }
  const items2 = [emitOrbCheckoutPaymentFlowEvent, virtualCurrencyBalance, onRedeemVirtualCurrency];
  const obj3 = { children: items3 };
  const tmp8 = closure_6(() => {
    emitOrbCheckoutPaymentFlowEvent(metroImportAll.PAYMENT_FLOW_COMPLETED);
    ref.current = virtualCurrencyBalance;
    onRedeemVirtualCurrency(() => {
      closure_1_2(constants.PAYMENT_FLOW_SUCCEEDED);
      const arr = orbRedemptionError(emitOrbCheckoutPaymentFlowEvent[14]);
      arr.pop();
    });
  }, items2);
  const ModalScreen = tmp(tmp2[15]).ModalScreen;
  const obj4 = { children: closure_11(closure_14, { orbBalance: current }) };
  const ModalContent = tmp(tmp2[16]).ModalContent;
  items3 = [closure_11(ModalContent, obj4), ];
  const obj5 = { children: closure_11(closure_15, { onPress: tmp8 }) };
  const ModalFooter = tmp(tmp2[17]).ModalFooter;
  items3[1] = closure_11(ModalFooter, obj5);
  return closure_12(ModalScreen, obj3);
}
let result = size.fileFinishedImporting("modules/virtual_currency/checkout/native/OrbCheckoutModal.tsx");

export default function _default(skuId) {
  let analyticsLocations;
  let callback;
  let getHeaderTextButton;
  let intl;
  let intl2;
  let onCheckoutSuccess;
  skuId = skuId.skuId;
  ({ onCheckoutSuccess: importDefault, analyticsLocations } = skuId);
  let current;
  require("module_38")(null != skuId, "SKU ID is required");
  const useRef = current.useRef;
  let obj = skuId(analyticsLocations[19]);
  current = useRef(obj.v4()).current;
  const current2 = current.useRef(Date.now()).current;
  const items = [analyticsLocations, skuId];
  const effect = current.useEffect(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { type: "Orb Checkout Modal", location_stack: analyticsLocations, sku_id: skuId };
    obj.track(metroImportAll.OPEN_MODAL, obj2);
  }, items);
  const items1 = [skuId, current, analyticsLocations, current2];
  let obj2 = {};
  const obj3 = {
    title: intl.string(skuId(analyticsLocations[20]).t.q9EGps),
    headerShown: true,
    headerLeft: getHeaderTextButton(intl2.string(skuId(analyticsLocations[20]).t["ETE/oC"]), callback),
    render() {
      let obj2;
      const obj = { skuId, loadId: current, onCheckoutSuccess: importDefault, analyticsLocations, children: unpackModuleId(OrbCheckoutModalScreen, obj2) };
      obj2 = { startTime: current2 };
      const OrbCheckoutModalContextProvider = OrbCheckoutModalContext.OrbCheckoutModalContextProvider;
      return unpackModuleId(OrbCheckoutModalContextProvider, obj);
    }
  };
  callback = current.useCallback(() => {
    let obj2;
    const timestamp = Date.now();
    const obj = { load_id: current, application_id: obj2.get1PShopApplicationIdForSKU(skuId), location_stack: analyticsLocations, payment_gateway: InternalPaymentGateways.VIRTUAL_CURRENCY, sku_id: skuId, currency: constants.DISCORD_ORB, duration_ms: timestamp - current2 };
    const track = AnalyticsUtilsDefault.track;
    const PAYMENT_FLOW_CANCELED = metroImportAll.PAYMENT_FLOW_CANCELED;
    AnalyticsUtilsDefault;
    obj2 = VirtualCurrencyUtils;
    track(PAYMENT_FLOW_CANCELED, obj);
    const arr = ModalActionCreatorsDefault;
    arr.pop();
  }, items1);
  const MAIN = constants3.MAIN;
  intl = skuId(analyticsLocations[20]).intl;
  getHeaderTextButton = skuId(analyticsLocations[21]).getHeaderTextButton;
  skuId(analyticsLocations[21]);
  intl2 = skuId(analyticsLocations[20]).intl;
  obj2[MAIN] = obj3;
  const obj4 = { screens: obj2, initialRouteName: constants3.MAIN, headerTitleAlign: "center" };
  return closure_11(skuId(analyticsLocations[22]).Modal, obj4);
};
