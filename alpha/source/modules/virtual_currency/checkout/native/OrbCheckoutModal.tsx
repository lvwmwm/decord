// Module ID: 15501
// Function ID: 15502
// Name: OrbCheckoutModal
// Dependencies: [19, 1072, 1083, 21, 15502, 6337, 15504, 15506, 10139, 9714, 1256, 6848, 8208, 8210, 14079, 38, 1269, 15507, 1113, 7493, 12523, 2]
// Exports: default

// Module 15501 (OrbCheckoutModal)
import Constants2 from "Constants" /* 1083 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import Stack_Stack from "Stack/Stack" /* 6337 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6848 */;
import VirtualCurrencyUtils from "VirtualCurrencyUtils" /* 10139 */;
import OrbCheckoutModalContext from "OrbCheckoutModalContext" /* 15502 */;
import OrbCheckoutModalComponents from "OrbCheckoutModalComponents" /* 15504 */;
import "react";
import react from "react" /* 19 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c9;
let closure_12;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
function OrbCheckoutModalContent(orbBalance) {
  let orbCheckoutErrorMessage;
  let orbPriceAmount;
  let orbProductContext;
  let skuId;
  orbBalance = orbBalance.orbBalance;
  const obj = OrbCheckoutModalContext;
  const orbCheckoutModalContext = obj.useOrbCheckoutModalContext();
  ({ orbCheckoutErrorMessage, orbProductContext, skuId } = orbCheckoutModalContext);
  let tmp5 = null != orbCheckoutErrorMessage;
  const Stack = Stack_Stack.Stack;
  const tmp4 = authStore2;
  if (tmp5) {
    const obj2 = { error: orbCheckoutErrorMessage };
    tmp5 = unpackModuleId(tmp(15504).OrbCheckoutErrorCard, obj2);
  }
  const items = [tmp5, , ];
  const obj3 = { skuId, orbPriceAmount };
  orbPriceAmount = undefined;
  const OrbCheckoutOrderSummary = tmp(15504).OrbCheckoutOrderSummary;
  if (orbProductContext != null) {
    orbPriceAmount = orbProductContext.orbPriceAmount;
  }
  if (orbPriceAmount == null) {
    orbPriceAmount = null;
  }
  const obj4 = { children: items };
  items[1] = unpackModuleId(OrbCheckoutOrderSummary, obj3);
  items[2] = unpackModuleId(OrbCheckoutModalComponents.OrbCheckoutPaymentSourceDetails, { orbBalance });
  return tmp4(Stack, obj4);
}
function OrbCheckoutModalFooter(onPress) {
  let items;
  onPress = onPress.onPress;
  const obj = { children: items };
  const Stack = Stack_Stack.Stack;
  items = [unpackModuleId(OrbCheckoutModalComponents.OrbCheckoutLegalFinePrint, {}), unpackModuleId(OrbCheckoutModalComponents.OrbCheckoutPurchaseButton, { onPress })];
  return authStore2(Stack, obj);
}
({ useRef: closure_4, useEffect: hasOwnProperty, useCallback: metroRequire, useMemo: metroImportDefault } = react);
({ AnalyticEvents: metroImportAll, CurrencyCodes: c9 } = Constants);
const InternalPaymentGateways = Constants2.InternalPaymentGateways;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
const constants3 = { MAIN: "MAIN" };
function OrbCheckoutModalScreen(arg0) {
  let canEmitPaymentFlowStarted;
  let items5;
  let startTime;
  ({ startTime, canEmitPaymentFlowStarted } = arg0);
  let orbRedemptionError;
  let tmp = canEmitPaymentFlowStarted;
  let tmp2 = orbRedemptionError;
  let obj = canEmitPaymentFlowStarted(orbRedemptionError[4]);
  const orbCheckoutModalContext = obj.useOrbCheckoutModalContext();
  const onRedeemVirtualCurrency = orbCheckoutModalContext.onRedeemVirtualCurrency;
  orbRedemptionError = orbCheckoutModalContext.orbRedemptionError;
  let obj2 = canEmitPaymentFlowStarted(orbRedemptionError[4]);
  const orbCheckoutModalContext1 = obj2.useOrbCheckoutModalContext();
  const skuId = orbCheckoutModalContext1.skuId;
  const loadId = orbCheckoutModalContext1.loadId;
  const analyticsLocations = orbCheckoutModalContext1.analyticsLocations;
  const orbProductContext = orbCheckoutModalContext1.orbProductContext;
  let obj3 = canEmitPaymentFlowStarted(orbRedemptionError[7]);
  const virtualCurrencyBalance = obj3.useVirtualCurrencyBalance();
  const items = [loadId, skuId, analyticsLocations, orbProductContext, virtualCurrencyBalance];
  const tmp6 = closure_7(() => {
    let obj2;
    let orbPriceAmount2;
    const obj = { load_id: loadId, application_id: obj2.get1PShopApplicationIdForSKU(skuId), location_stack: analyticsLocations, sku_id: skuId, currency: constants2.DISCORD_ORB, payment_gateway: constants3.VIRTUAL_CURRENCY, virtual_currency_balance: virtualCurrencyBalance };
    let tmp2 = null != orbProductContext;
    obj2 = canEmitPaymentFlowStarted(orbRedemptionError[8]);
    if (tmp2) {
      const orbPriceAmount = tmp.orbPriceAmount;
      const obj3 = { price: orbPriceAmount, regular_price: orbPriceAmount2 };
      orbPriceAmount2 = tmp.orbPriceAmount;
      tmp2 = obj3;
    }
    const merged = Object.assign(tmp2);
    return obj;
  }, items);
  let ref2 = tmp6;
  const items1 = [startTime, tmp6];
  const tmp8 = ref2((arg0, arg1) => {
    const diff = Date.now() - startTime;
    if (arg0 === constants.PAYMENT_FLOW_STARTED) {
      const obj2 = { has_saved_payment_source: false, continue_session_initial_step: null };
      const trackPaymentFlowStartedAnalyticsAndCTP = canEmitPaymentFlowStarted(orbRedemptionError[9]).trackPaymentFlowStartedAnalyticsAndCTP;
      canEmitPaymentFlowStarted(orbRedemptionError[9]);
      const merged = Object.assign(closure_6);
      const result = trackPaymentFlowStartedAnalyticsAndCTP(obj2);
    } else if (arg0 === constants.PAYMENT_FLOW_COMPLETED) {
      const obj4 = { duration_ms: diff };
      const track4 = onRedeemVirtualCurrency(orbRedemptionError[10]).track;
      const PAYMENT_FLOW_COMPLETED = tmp2.PAYMENT_FLOW_COMPLETED;
      onRedeemVirtualCurrency(orbRedemptionError[10]);
      const merged1 = Object.assign(closure_6);
      track4(PAYMENT_FLOW_COMPLETED, obj4);
    } else if (arg0 === constants.PAYMENT_FLOW_SUCCEEDED) {
      const obj5 = { duration_ms: diff };
      const track3 = onRedeemVirtualCurrency(orbRedemptionError[10]).track;
      const PAYMENT_FLOW_SUCCEEDED = tmp2.PAYMENT_FLOW_SUCCEEDED;
      onRedeemVirtualCurrency(orbRedemptionError[10]);
      const merged2 = Object.assign(closure_6);
      track3(PAYMENT_FLOW_SUCCEEDED, obj5);
    } else if (arg0 === constants.PAYMENT_FLOW_CANCELED) {
      const obj6 = { duration_ms: diff };
      const track2 = onRedeemVirtualCurrency(orbRedemptionError[10]).track;
      const PAYMENT_FLOW_CANCELED = tmp2.PAYMENT_FLOW_CANCELED;
      onRedeemVirtualCurrency(orbRedemptionError[10]);
      const merged3 = Object.assign(closure_6);
      track2(PAYMENT_FLOW_CANCELED, obj6);
    } else {
      let obj13;
      const obj = { duration_ms: diff };
      const track = onRedeemVirtualCurrency(orbRedemptionError[10]).track;
      const PAYMENT_FLOW_FAILED = tmp2.PAYMENT_FLOW_FAILED;
      onRedeemVirtualCurrency(orbRedemptionError[10]);
      const merged4 = Object.assign(closure_6);
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
  }, items1);
  let closure_3 = tmp8;
  let obj4 = canEmitPaymentFlowStarted(orbRedemptionError[7]);
  const virtualCurrencyBalance1 = obj4.useVirtualCurrencyBalance();
  const tmp10 = virtualCurrencyBalance1(virtualCurrencyBalance1);
  const ref = tmp10;
  const tmp7 = ref2;
  ref2 = virtualCurrencyBalance1(false);
  const items2 = [canEmitPaymentFlowStarted, tmp8];
  ref(() => {
    const tmp = canEmitPaymentFlowStarted && !ref2.current;
    if (tmp) {
      ref2.current = true;
      closure_3(metroImportAll.PAYMENT_FLOW_STARTED);
    }
  }, items2);
  const items3 = [orbRedemptionError, tmp8];
  ref(() => {
    let tmp2 = null != orbRedemptionError;
    const tmp = orbRedemptionError;
    if (tmp2) {
      tmp2 = null !== ref.current;
    }
    if (tmp2) {
      closure_3(metroImportAll.PAYMENT_FLOW_FAILED, tmp);
      ref.current = null;
    }
  }, items3);
  let current = tmp10.current;
  if (current == null) {
    current = virtualCurrencyBalance1;
  }
  const items4 = [tmp8, virtualCurrencyBalance1, onRedeemVirtualCurrency];
  let obj5 = { children: items5 };
  const tmp7Result = tmp7(() => {
    closure_3(metroImportAll.PAYMENT_FLOW_COMPLETED);
    ref.current = virtualCurrencyBalance1;
    onRedeemVirtualCurrency(() => {
      closure_1_3(constants.PAYMENT_FLOW_SUCCEEDED);
      const arr = onRedeemVirtualCurrency(orbRedemptionError[11]);
      arr.pop();
    });
  }, items4);
  const ModalScreen = tmp(tmp2[12]).ModalScreen;
  let obj6 = { children: closure_11(OrbCheckoutModalContent, { orbBalance: current }) };
  const ModalContent = tmp(tmp2[13]).ModalContent;
  items5 = [closure_11(ModalContent, obj6), ];
  let obj7 = { children: closure_11(OrbCheckoutModalFooter, { onPress: tmp7Result }) };
  const ModalFooter = tmp(tmp2[14]).ModalFooter;
  items5[1] = closure_11(ModalFooter, obj7);
  return closure_12(ModalScreen, obj5);
}
let result = size.fileFinishedImporting("modules/virtual_currency/checkout/native/OrbCheckoutModal.tsx");

export default function _default(skuId) {
  let c10;
  let c6;
  let c7;
  let c8;
  let c9;
  let callback;
  let createOrderError;
  let getHeaderTextButton;
  let intl;
  let intl2;
  let isCreatingOrder;
  let isOrdersCheckout;
  let markCheckoutSucceeded;
  let onSignFailure;
  let order;
  skuId = skuId.skuId;
  const analyticsLocations = skuId.analyticsLocations;
  let current;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  markCheckoutSucceeded = undefined;
  let onCheckoutSuccess;
  onCheckoutSuccess(analyticsLocations[15])(null != skuId, "SKU ID is required");
  const useRef = current.useRef;
  let obj = skuId(analyticsLocations[16]);
  current = useRef(obj.v4()).current;
  const current2 = current.useRef(Date.now()).current;
  let obj2 = skuId(analyticsLocations[7]);
  const virtualCurrencyBalance = obj2.useVirtualCurrencyBalance();
  const obj3 = skuId(analyticsLocations[17]);
  const orbCheckoutOrder = obj3.useOrbCheckoutOrder({ skuId });
  ({ isOrdersCheckout: c6, order: c7, isCreatingOrder: c8, createOrderError: c9, onSignFailure: c10, markCheckoutSucceeded } = orbCheckoutOrder);
  const items = [markCheckoutSucceeded, onCheckoutSuccess];
  onCheckoutSuccess = current.useCallback((arg0) => {
    markCheckoutSucceeded();
    onCheckoutSuccess(arg0);
  }, items);
  const items1 = [analyticsLocations, skuId];
  const effect = current.useEffect(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { type: "Orb Checkout Modal", location_stack: analyticsLocations, sku_id: skuId };
    obj.track(metroImportAll.OPEN_MODAL, obj2);
  }, items1);
  const items2 = [skuId, current, analyticsLocations, current2, virtualCurrencyBalance];
  const obj4 = {};
  const obj5 = {
    title: intl.string(skuId(analyticsLocations[18]).t.q9EGps),
    headerShown: true,
    headerLeft: getHeaderTextButton(intl2.string(skuId(analyticsLocations[18]).t["ETE/oC"]), callback),
    render() {
      let obj2;
      let tmp3;
      let tmp4;
      const obj = { skuId, loadId: current, onCheckoutSuccess, onSignFailure, order, isOrdersCheckout, isCreatingOrder, createOrderError, analyticsLocations, children: unpackModuleId(tmp3, obj2) };
      obj2 = { startTime: current2, canEmitPaymentFlowStarted: tmp4 };
      tmp4 = !isOrdersCheckout;
      const OrbCheckoutModalContextProvider = OrbCheckoutModalContext.OrbCheckoutModalContextProvider;
      tmp3 = OrbCheckoutModalScreen;
      if (isOrdersCheckout) {
        tmp4 = null != tmp2;
      }
      return unpackModuleId(OrbCheckoutModalContextProvider, obj);
    }
  };
  callback = current.useCallback(() => {
    let obj2;
    const timestamp = Date.now();
    const obj = { load_id: current, application_id: obj2.get1PShopApplicationIdForSKU(skuId), location_stack: analyticsLocations, payment_gateway: InternalPaymentGateways.VIRTUAL_CURRENCY, sku_id: skuId, currency: createOrderError.DISCORD_ORB, duration_ms: timestamp - current2, virtual_currency_balance: virtualCurrencyBalance };
    const track = AnalyticsUtilsDefault.track;
    const PAYMENT_FLOW_CANCELED = metroImportAll.PAYMENT_FLOW_CANCELED;
    AnalyticsUtilsDefault;
    obj2 = VirtualCurrencyUtils;
    track(PAYMENT_FLOW_CANCELED, obj);
    const arr = ModalActionCreatorsDefault;
    arr.pop();
  }, items2);
  const MAIN = constants3.MAIN;
  intl = skuId(analyticsLocations[18]).intl;
  getHeaderTextButton = skuId(analyticsLocations[19]).getHeaderTextButton;
  skuId(analyticsLocations[19]);
  intl2 = skuId(analyticsLocations[18]).intl;
  obj4[MAIN] = obj5;
  const obj6 = { screens: obj4, initialRouteName: constants3.MAIN, headerTitleAlign: "center" };
  return markCheckoutSucceeded(skuId(analyticsLocations[20]).Modal, obj6);
};
