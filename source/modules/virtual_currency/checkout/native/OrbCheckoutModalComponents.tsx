// Module ID: 11860
// Function ID: 91965
// Name: OrbCheckoutErrorCard
// Dependencies: [31, 27, 33, 4130, 689, 4541, 7577, 4126, 11840, 1212, 11842, 11859, 5623, 4066, 11861, 4543, 3976, 8749, 2]
// Exports: OrbCheckoutErrorCard, OrbCheckoutLegalFinePrint, OrbCheckoutOrderSummary, OrbCheckoutPaymentSourceDetails, OrbCheckoutPurchaseButton

// Module 11860 (OrbCheckoutErrorCard)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ View: closure_4, ActivityIndicator: closure_5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = { topRowWrapper: { width: "100%", marginBottom: 10 }, rowWrapper: { width: "100%", marginVertical: 10 } };
_createForOfIteratorHelperLoose = { borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE, padding: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.rowDetailsContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.orbPaymentSourceDetails = { flexDirection: "row", justifyContent: "space-between", alignItems: "center" };
_createForOfIteratorHelperLoose.sectionTitle = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj1 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.spinner = { paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_16, alignItems: "center" };
_createForOfIteratorHelperLoose.disclaimer = { opacity: 0.5 };
let obj2 = { paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_16, alignItems: "center" };
_createForOfIteratorHelperLoose.errorCard = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, padding: require("_createForOfIteratorHelperLoose").space.PX_12, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_FEEDBACK_CRITICAL };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj3 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, padding: require("_createForOfIteratorHelperLoose").space.PX_12, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_FEEDBACK_CRITICAL };
const result = require("jsxProd").fileFinishedImporting("modules/virtual_currency/checkout/native/OrbCheckoutModalComponents.tsx");

export const OrbCheckoutErrorCard = function OrbCheckoutErrorCard(error) {
  let obj = { style: _createForOfIteratorHelperLoose().errorCard };
  obj = { direction: "horizontal", spacing: 8, align: "flex-start" };
  const items = [callback(require(7577) /* CircleErrorIcon */.CircleErrorIcon, { size: "sm", color: "mobile-text-heading-primary" }), ];
  obj = { variant: "text-sm/medium", color: "mobile-text-heading-primary", children: error.error };
  items[1] = callback(require(4126) /* Text */.Text, obj);
  obj.children = items;
  obj.children = callback2(require(4541) /* Stack */.Stack, obj);
  return callback(closure_4, obj);
};
export const OrbCheckoutOrderSummary = function OrbCheckoutOrderSummary(product) {
  product = product.product;
  const tmp = _createForOfIteratorHelperLoose();
  if (null == product) {
    let obj = {};
    const items = [, ];
    ({ rowDetailsContainer: arr[0], spinner: arr[1] } = tmp);
    obj.style = items;
    obj = { size: "small" };
    obj.children = callback(closure_5, obj);
    let tmp5 = callback(closure_4, obj);
  } else {
    obj = { product, useOrbPrice: true };
    tmp5 = callback(importDefault(11840), obj);
  }
  const obj1 = { style: tmp.topRowWrapper };
  const obj2 = { variant: "heading-sm/bold", color: "mobile-text-heading-primary", style: tmp.sectionTitle };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj2.children = intl.string(require(1212) /* getSystemLocale */.t.hws7bC);
  const items1 = [callback(require(4126) /* Text */.Text, obj2), tmp5];
  obj1.children = items1;
  return callback2(closure_4, obj1);
};
export const OrbCheckoutPaymentSourceDetails = function OrbCheckoutPaymentSourceDetails(orbAmount) {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.rowWrapper };
  obj = { variant: "heading-sm/bold", color: "mobile-text-heading-primary", style: tmp.sectionTitle };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t["zLch/S"]);
  const items = [callback(require(4126) /* Text */.Text, obj), ];
  obj = { style: items1 };
  items1 = [, ];
  ({ rowDetailsContainer: arr2[0], orbPaymentSourceDetails: arr2[1] } = tmp);
  const obj1 = { variant: "text-md/medium", color: "mobile-text-heading-primary" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj1.children = intl2.string(require(1212) /* getSystemLocale */.t.y0WGqP);
  const items2 = [callback(require(4126) /* Text */.Text, obj1), callback(importDefault(11842), { orbAmount: orbAmount.orbBalance })];
  obj.children = items2;
  items[1] = callback2(closure_4, obj);
  obj.children = items;
  return callback2(closure_4, obj);
};
export const OrbCheckoutLegalFinePrint = function OrbCheckoutLegalFinePrint() {
  let obj = skuId(11859);
  skuId = obj.useOrbCheckoutModalContext().skuId;
  const items = [skuId];
  const memo = React.useMemo(() => skuId(outer1_2[12]).getOrbCheckoutDisclaimerMessage(skuId), items);
  obj = { style: _createForOfIteratorHelperLoose().disclaimer, variant: "text-xxs/normal", color: "interactive-text-active", children: memo };
  return callback(skuId(4126).Text, obj);
};
export const OrbCheckoutPurchaseButton = function OrbCheckoutPurchaseButton(onPress) {
  let isRedeeming;
  let orbProductContext;
  const tmp = importDefault(4066)();
  let obj = require(11859) /* useOrbCheckoutModalContextProvider */;
  const orbCheckoutModalContext = obj.useOrbCheckoutModalContext();
  ({ isRedeeming, orbProductContext } = orbCheckoutModalContext);
  const virtualCurrencyBalance = require(11861) /* useVirtualCurrencyBalance */.useVirtualCurrencyBalance();
  if (null != orbProductContext) {
    const orbPriceAmount = orbProductContext.orbPriceAmount;
  }
  obj = {};
  const obj2 = require(11861) /* useVirtualCurrencyBalance */;
  const tmp4 = closure_6;
  let str = "primary";
  if (obj4.isThemeDark(tmp)) {
    str = "primary-overlay";
  }
  obj.variant = str;
  obj.size = "lg";
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.text = intl.string(require(1212) /* getSystemLocale */.t["zLch/S"]);
  obj = { size: "md" };
  obj4 = require(3976) /* AccessibilityAnnouncer */;
  const tmp5 = closure_6;
  let str2 = "control-primary-text-default";
  if (obj6.isThemeDark(tmp)) {
    str2 = "control-overlay-primary-text-default";
  }
  obj.color = str2;
  obj.icon = tmp5(require(8749) /* OrbsIcon */.OrbsIcon, obj);
  obj.iconPosition = "start";
  obj.loading = isRedeeming;
  obj.onPress = onPress.onPress;
  if (!isRedeeming) {
    isRedeeming = null == orbPriceAmount;
  }
  if (!isRedeeming) {
    isRedeeming = null == virtualCurrencyBalance;
  }
  if (!isRedeeming) {
    isRedeeming = virtualCurrencyBalance < orbPriceAmount;
  }
  obj.disabled = isRedeeming;
  return tmp4(require(4543) /* Button */.Button, obj);
};
