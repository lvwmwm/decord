// Module ID: 15011
// Function ID: 15012
// Name: OrbCheckoutModal
// Dependencies: [19, 1072, 1083, 21, 15012, 11349, 6022, 15014, 15015, 9668, 10657, 1253, 6738, 7964, 7965, 13158, 38, 1267, 1114, 6992, 11447, 2]
// Exports: default

// Module 15011 (OrbCheckoutModal)
import Constants2 from "Constants" /* 1083 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import Stack_Stack from "Stack/Stack" /* 6022 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import VirtualCurrencyUtils from "VirtualCurrencyUtils" /* 9668 */;
import useFetchCollectiblesProduct from "useFetchCollectiblesProduct" /* 11349 */;
import OrbCheckoutModalContext from "OrbCheckoutModalContext" /* 15012 */;
import OrbCheckoutModalComponents from "OrbCheckoutModalComponents" /* 15014 */;
import "react";
import react from "react" /* 19 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap;

let c9;
let closure_12;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
function OrbCheckoutModalContent(orbBalance) {
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
  const tmp5 = authStore2;
  if (tmp6) {
    const obj3 = { error: orbRedemptionError.message };
    tmp6 = unpackModuleId(tmp(15014).OrbCheckoutErrorCard, obj3);
  }
  const items = [tmp6, , ];
  const OrbCheckoutOrderSummary = tmp(15014).OrbCheckoutOrderSummary;
  if (product == null) {
    product = null;
  }
  const obj4 = { children: items };
  items[1] = unpackModuleId(OrbCheckoutOrderSummary, { product });
  items[2] = unpackModuleId(OrbCheckoutModalComponents.OrbCheckoutPaymentSourceDetails, { orbBalance });
  return tmp5(Stack, obj4);
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
function OrbCheckoutModalScreen(startTime) {
  let closure_2;
  let items5;
  startTime = startTime.startTime;
  let onRedeemVirtualCurrency;
  dependencyMap = undefined;
  let ref;
  let tmp = onRedeemVirtualCurrency;
  let tmp2 = dependencyMap;
  let obj = onRedeemVirtualCurrency(15012);
  const orbCheckoutModalContext = obj.useOrbCheckoutModalContext();
  onRedeemVirtualCurrency = orbCheckoutModalContext.onRedeemVirtualCurrency;
  const orbRedemptionError = orbCheckoutModalContext.orbRedemptionError;
  let obj2 = onRedeemVirtualCurrency(15012);
  const orbCheckoutModalContext1 = obj2.useOrbCheckoutModalContext();
  const skuId = orbCheckoutModalContext1.skuId;
  const loadId = orbCheckoutModalContext1.loadId;
  const analyticsLocations = orbCheckoutModalContext1.analyticsLocations;
  const orbProductContext = orbCheckoutModalContext1.orbProductContext;
  let obj3 = onRedeemVirtualCurrency(15015);
  const virtualCurrencyBalance = obj3.useVirtualCurrencyBalance();
  const items = [loadId, skuId, analyticsLocations, orbProductContext, virtualCurrencyBalance];
  const tmp6 = closure_7(() => {
    let obj2;
    let orbPriceAmount2;
    const obj = { load_id: loadId, application_id: obj2.get1PShopApplicationIdForSKU(skuId), location_stack: analyticsLocations, sku_id: skuId, currency: constants2.DISCORD_ORB, payment_gateway: constants3.VIRTUAL_CURRENCY, virtual_currency_balance: virtualCurrencyBalance };
    let tmp2 = null != orbProductContext;
    obj2 = onRedeemVirtualCurrency(loadId[9]);
    if (tmp2) {
      const orbPriceAmount = tmp.orbPriceAmount;
      const obj3 = { price: orbPriceAmount, regular_price: orbPriceAmount2 };
      orbPriceAmount2 = tmp.orbPriceAmount;
      tmp2 = obj3;
    }
    const merged = Object.assign(tmp2);
    return obj;
  }, items);
  let closure_6 = tmp6;
  const items1 = [startTime, tmp6];
  const tmp8 = closure_6((arg0, arg1) => {
    const diff = Date.now() - startTime;
    if (arg0 === constants.PAYMENT_FLOW_STARTED) {
      const obj2 = { has_saved_payment_source: false, continue_session_initial_step: null };
      const trackPaymentFlowStartedAnalyticsAndCTP = onRedeemVirtualCurrency(loadId[10]).trackPaymentFlowStartedAnalyticsAndCTP;
      onRedeemVirtualCurrency(loadId[10]);
      const merged = Object.assign(closure_6);
      const result = trackPaymentFlowStartedAnalyticsAndCTP(obj2);
    } else if (arg0 === constants.PAYMENT_FLOW_COMPLETED) {
      const obj4 = { duration_ms: diff };
      const track4 = orbRedemptionError(loadId[11]).track;
      const PAYMENT_FLOW_COMPLETED = tmp2.PAYMENT_FLOW_COMPLETED;
      orbRedemptionError(loadId[11]);
      const merged1 = Object.assign(closure_6);
      track4(PAYMENT_FLOW_COMPLETED, obj4);
    } else if (arg0 === constants.PAYMENT_FLOW_SUCCEEDED) {
      const obj5 = { duration_ms: diff };
      const track3 = orbRedemptionError(loadId[11]).track;
      const PAYMENT_FLOW_SUCCEEDED = tmp2.PAYMENT_FLOW_SUCCEEDED;
      orbRedemptionError(loadId[11]);
      const merged2 = Object.assign(closure_6);
      track3(PAYMENT_FLOW_SUCCEEDED, obj5);
    } else if (arg0 === constants.PAYMENT_FLOW_CANCELED) {
      const obj6 = { duration_ms: diff };
      const track2 = orbRedemptionError(loadId[11]).track;
      const PAYMENT_FLOW_CANCELED = tmp2.PAYMENT_FLOW_CANCELED;
      orbRedemptionError(loadId[11]);
      const merged3 = Object.assign(closure_6);
      track2(PAYMENT_FLOW_CANCELED, obj6);
    } else {
      let obj13;
      const obj = { duration_ms: diff };
      const track = orbRedemptionError(loadId[11]).track;
      const PAYMENT_FLOW_FAILED = tmp2.PAYMENT_FLOW_FAILED;
      orbRedemptionError(loadId[11]);
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
  dependencyMap = tmp8;
  let obj4 = onRedeemVirtualCurrency(15015);
  const virtualCurrencyBalance1 = obj4.useVirtualCurrencyBalance();
  const tmp10 = ref(virtualCurrencyBalance1);
  ref = tmp10;
  const items2 = [tmp8];
  closure_5(() => {
    closure_2(metroImportAll.PAYMENT_FLOW_STARTED);
  }, items2);
  const items3 = [orbRedemptionError, tmp8];
  closure_5(() => {
    let tmp2 = null != orbRedemptionError;
    const tmp = orbRedemptionError;
    if (tmp2) {
      tmp2 = null !== ref.current;
    }
    if (tmp2) {
      closure_2(metroImportAll.PAYMENT_FLOW_FAILED, tmp);
      ref.current = null;
    }
  }, items3);
  let current = tmp10.current;
  const tmp7 = closure_6;
  if (current == null) {
    current = virtualCurrencyBalance1;
  }
  const items4 = [tmp8, virtualCurrencyBalance1, onRedeemVirtualCurrency];
  let obj5 = { children: items5 };
  const tmp7Result = tmp7(() => {
    closure_2(metroImportAll.PAYMENT_FLOW_COMPLETED);
    ref.current = virtualCurrencyBalance1;
    onRedeemVirtualCurrency(() => {
      closure_1_2(constants.PAYMENT_FLOW_SUCCEEDED);
      const arr = orbRedemptionError(closure_2[12]);
      arr.pop();
    });
  }, items4);
  const ModalScreen = tmp(7964).ModalScreen;
  let obj6 = { children: closure_11(OrbCheckoutModalContent, { orbBalance: current }) };
  const ModalContent = tmp(7965).ModalContent;
  items5 = [closure_11(ModalContent, obj6), ];
  let obj7 = { children: closure_11(OrbCheckoutModalFooter, { onPress: tmp7Result }) };
  const ModalFooter = tmp(13158).ModalFooter;
  items5[1] = closure_11(ModalFooter, obj7);
  return closure_12(ModalScreen, obj5);
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
  let obj = skuId(analyticsLocations[17]);
  current = useRef(obj.v4()).current;
  const current2 = current.useRef(Date.now()).current;
  let obj2 = skuId(analyticsLocations[8]);
  const virtualCurrencyBalance = obj2.useVirtualCurrencyBalance();
  const items = [analyticsLocations, skuId];
  const effect = current.useEffect(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { type: "Orb Checkout Modal", location_stack: analyticsLocations, sku_id: skuId };
    obj.track(metroImportAll.OPEN_MODAL, obj2);
  }, items);
  const items1 = [skuId, current, analyticsLocations, current2, virtualCurrencyBalance];
  const obj3 = {};
  const obj4 = {
    title: intl.string(skuId(analyticsLocations[18]).t.q9EGps),
    headerShown: true,
    headerLeft: getHeaderTextButton(intl2.string(skuId(analyticsLocations[18]).t["ETE/oC"]), callback),
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
    const obj = { load_id: current, application_id: obj2.get1PShopApplicationIdForSKU(skuId), location_stack: analyticsLocations, payment_gateway: InternalPaymentGateways.VIRTUAL_CURRENCY, sku_id: skuId, currency: constants.DISCORD_ORB, duration_ms: timestamp - current2, virtual_currency_balance: virtualCurrencyBalance };
    const track = AnalyticsUtilsDefault.track;
    const PAYMENT_FLOW_CANCELED = metroImportAll.PAYMENT_FLOW_CANCELED;
    AnalyticsUtilsDefault;
    obj2 = VirtualCurrencyUtils;
    track(PAYMENT_FLOW_CANCELED, obj);
    const arr = ModalActionCreatorsDefault;
    arr.pop();
  }, items1);
  const MAIN = constants3.MAIN;
  intl = skuId(analyticsLocations[18]).intl;
  getHeaderTextButton = skuId(analyticsLocations[19]).getHeaderTextButton;
  skuId(analyticsLocations[19]);
  intl2 = skuId(analyticsLocations[18]).intl;
  obj3[MAIN] = obj4;
  const obj5 = { screens: obj3, initialRouteName: constants3.MAIN, headerTitleAlign: "center" };
  return closure_11(skuId(analyticsLocations[20]).Modal, obj5);
};
