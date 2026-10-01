// Module ID: 12727
// Function ID: 12728
// Name: OrbCheckoutModal
// Dependencies: [19, 1074, 1085, 21, 12728, 10508, 5279, 12729, 10684, 10270, 1241, 12730, 5039, 7870, 7871, 11405, 38, 1255, 1115, 5936, 10769, 2]
// Exports: default

// Module 12727 (OrbCheckoutModal)
import Constants2 from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import Stack_Stack from "Stack/Stack" /* 5279 */;
import useFetchCollectiblesProduct from "useFetchCollectiblesProduct" /* 10508 */;
import VirtualCurrencyUtils from "VirtualCurrencyUtils" /* 10684 */;
import OrbCheckoutModalContext from "OrbCheckoutModalContext" /* 12728 */;
import OrbCheckoutModalComponents from "OrbCheckoutModalComponents" /* 12729 */;
import "react";
import react from "react" /* 19 */;
import Constants from "Constants" /* 1074 */;
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
  const tmp5 = closure_12;
  if (tmp6) {
    const obj3 = { error: orbRedemptionError.message };
    tmp6 = unpackModuleId(tmp(12729).OrbCheckoutErrorCard, obj3);
  }
  const items = [tmp6, , ];
  const OrbCheckoutOrderSummary = tmp(12729).OrbCheckoutOrderSummary;
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
  return closure_12(Stack, obj);
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
  let obj = onRedeemVirtualCurrency(12728);
  const orbCheckoutModalContext = obj.useOrbCheckoutModalContext();
  onRedeemVirtualCurrency = orbCheckoutModalContext.onRedeemVirtualCurrency;
  const orbRedemptionError = orbCheckoutModalContext.orbRedemptionError;
  let obj2 = onRedeemVirtualCurrency(12728);
  const orbCheckoutModalContext1 = obj2.useOrbCheckoutModalContext();
  const skuId = orbCheckoutModalContext1.skuId;
  const loadId = orbCheckoutModalContext1.loadId;
  const analyticsLocations = orbCheckoutModalContext1.analyticsLocations;
  const orbProductContext = orbCheckoutModalContext1.orbProductContext;
  const items = [loadId, skuId, analyticsLocations, orbProductContext];
  const tmp5 = closure_7(() => {
    let obj2;
    let orbPriceAmount2;
    const obj = { load_id: loadId, application_id: obj2.get1PShopApplicationIdForSKU(skuId), location_stack: analyticsLocations, sku_id: skuId, currency: constants2.DISCORD_ORB, payment_gateway: constants3.VIRTUAL_CURRENCY };
    let tmp2 = null != orbProductContext;
    obj2 = onRedeemVirtualCurrency(loadId[8]);
    if (tmp2) {
      const orbPriceAmount = tmp.orbPriceAmount;
      const obj3 = { price: orbPriceAmount, regular_price: orbPriceAmount2 };
      orbPriceAmount2 = tmp.orbPriceAmount;
      tmp2 = obj3;
    }
    const merged = Object.assign(tmp2);
    return obj;
  }, items);
  let closure_5 = tmp5;
  const items1 = [startTime, tmp5];
  const tmp6 = closure_6;
  const tmp7 = closure_6((arg0, arg1) => {
    const diff = Date.now() - startTime;
    if (arg0 === constants.PAYMENT_FLOW_STARTED) {
      const obj2 = { has_saved_payment_source: false, continue_session_initial_step: null };
      const trackPaymentFlowStartedAnalyticsAndCTP = onRedeemVirtualCurrency(loadId[9]).trackPaymentFlowStartedAnalyticsAndCTP;
      onRedeemVirtualCurrency(loadId[9]);
      const merged = Object.assign(closure_5);
      const result = trackPaymentFlowStartedAnalyticsAndCTP(obj2);
    } else if (arg0 === constants.PAYMENT_FLOW_COMPLETED) {
      const obj4 = { duration_ms: diff };
      const track4 = orbRedemptionError(loadId[10]).track;
      const PAYMENT_FLOW_COMPLETED = tmp2.PAYMENT_FLOW_COMPLETED;
      orbRedemptionError(loadId[10]);
      const merged1 = Object.assign(closure_5);
      track4(PAYMENT_FLOW_COMPLETED, obj4);
    } else if (arg0 === constants.PAYMENT_FLOW_SUCCEEDED) {
      const obj5 = { duration_ms: diff };
      const track3 = orbRedemptionError(loadId[10]).track;
      const PAYMENT_FLOW_SUCCEEDED = tmp2.PAYMENT_FLOW_SUCCEEDED;
      orbRedemptionError(loadId[10]);
      const merged2 = Object.assign(closure_5);
      track3(PAYMENT_FLOW_SUCCEEDED, obj5);
    } else if (arg0 === constants.PAYMENT_FLOW_CANCELED) {
      const obj6 = { duration_ms: diff };
      const track2 = orbRedemptionError(loadId[10]).track;
      const PAYMENT_FLOW_CANCELED = tmp2.PAYMENT_FLOW_CANCELED;
      orbRedemptionError(loadId[10]);
      const merged3 = Object.assign(closure_5);
      track2(PAYMENT_FLOW_CANCELED, obj6);
    } else {
      let obj13;
      const obj = { duration_ms: diff };
      const track = orbRedemptionError(loadId[10]).track;
      const PAYMENT_FLOW_FAILED = tmp2.PAYMENT_FLOW_FAILED;
      orbRedemptionError(loadId[10]);
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
  }, items1);
  dependencyMap = tmp7;
  let obj3 = onRedeemVirtualCurrency(12730);
  const virtualCurrencyBalance = obj3.useVirtualCurrencyBalance();
  const tmp9 = ref(virtualCurrencyBalance);
  ref = tmp9;
  const items2 = [tmp7];
  closure_5(() => {
    closure_2(metroImportAll.PAYMENT_FLOW_STARTED);
  }, items2);
  const items3 = [orbRedemptionError, tmp7];
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
  let current = tmp9.current;
  if (current == null) {
    current = virtualCurrencyBalance;
  }
  const items4 = [tmp7, virtualCurrencyBalance, onRedeemVirtualCurrency];
  let obj4 = { children: items5 };
  const tmp6Result = tmp6(() => {
    closure_2(metroImportAll.PAYMENT_FLOW_COMPLETED);
    ref.current = virtualCurrencyBalance;
    onRedeemVirtualCurrency(() => {
      closure_1_2(constants.PAYMENT_FLOW_SUCCEEDED);
      const arr = orbRedemptionError(closure_2[12]);
      arr.pop();
    });
  }, items4);
  const ModalScreen = tmp(7870).ModalScreen;
  let obj5 = { children: closure_11(OrbCheckoutModalContent, { orbBalance: current }) };
  const ModalContent = tmp(7871).ModalContent;
  items5 = [closure_11(ModalContent, obj5), ];
  let obj6 = { children: closure_11(OrbCheckoutModalFooter, { onPress: tmp6Result }) };
  const ModalFooter = tmp(11405).ModalFooter;
  items5[1] = closure_11(ModalFooter, obj6);
  return closure_12(ModalScreen, obj4);
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
  const items = [analyticsLocations, skuId];
  const effect = current.useEffect(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { type: "Orb Checkout Modal", location_stack: analyticsLocations, sku_id: skuId };
    obj.track(metroImportAll.OPEN_MODAL, obj2);
  }, items);
  const items1 = [skuId, current, analyticsLocations, current2];
  let obj2 = {};
  const obj3 = {
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
  intl = skuId(analyticsLocations[18]).intl;
  getHeaderTextButton = skuId(analyticsLocations[19]).getHeaderTextButton;
  skuId(analyticsLocations[19]);
  intl2 = skuId(analyticsLocations[18]).intl;
  obj2[MAIN] = obj3;
  const obj4 = { screens: obj2, initialRouteName: constants3.MAIN, headerTitleAlign: "center" };
  return closure_11(skuId(analyticsLocations[20]).Modal, obj4);
};
