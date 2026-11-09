// Module ID: 15328
// Function ID: 15329
// Name: OrbCheckoutModalComponents
// Dependencies: [19, 17, 7796, 6951, 1072, 1074, 21, 5140, 575, 6159, 7152, 5751, 1113, 9550, 14668, 15326, 563, 15329, 14666, 7480, 5369, 15330, 5758, 5147, 9616, 2]
// Exports: OrbCheckoutErrorCard, OrbCheckoutLegalFinePrint, OrbCheckoutOrderSummary, OrbCheckoutPaymentSourceDetails, OrbCheckoutPurchaseButton

// Module 15328 (OrbCheckoutModalComponents)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1074 */;
import intl3 from "intl" /* 1113 */;
import shared from "shared" /* 5147 */;
import useThemeDefault from "useTheme" /* 5369 */;
import Stack_Stack from "Stack/Stack" /* 6159 */;
import CircleErrorIcon from "CircleErrorIcon" /* 7152 */;
import OrbCheckoutUtils from "OrbCheckoutUtils" /* 7480 */;
import SKUPreviewDefault from "SKUPreview" /* 9550 */;
import CollectiblesShopCheckoutDetailsDefault from "CollectiblesShopCheckoutDetails" /* 14666 */;
import OrbCheckoutAmountTagDefault from "OrbCheckoutAmountTag" /* 14668 */;
import OrbCheckoutModalContext from "OrbCheckoutModalContext" /* 15326 */;
import useVirtualCurrencyBalance from "useVirtualCurrencyBalance" /* 15330 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7796 */;
import SKUStore from "SKUStore" /* 6951 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

let c10;
let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let tmp2;
let unpackModuleId;
const Text_Text = tmp2(5751);
function GenericOrbCheckoutPurchaseItem(arg0) {
  let items;
  let items1;
  let obj4;
  let orbPriceAmount;
  let sku;
  ({ sku, orbPriceAmount } = arg0);
  const tmp = closure_12();
  const name = sku.name;
  const intl = intl3.intl;
  const formatToPlainString = intl.formatToPlainString;
  let str = orbPriceAmount;
  const W4DfeF = intl3.t.W4DfeF;
  if (orbPriceAmount == null) {
    str = "";
  }
  const obj = { style: items, accessible: true, accessibilityLabel: "" + name + ", " + formatToPlainString(W4DfeF, { orbAmount: str }), children: items1 };
  items = [, ];
  ({ rowDetailsContainer: arr[0], skuDetailsContainer: arr[1] } = tmp);
  const obj2 = { sku, size: nativeDefault.space.PX_64 };
  const tmp4 = SKUPreviewDefault;
  items1 = [authStore(tmp4, obj2), , ];
  const obj3 = { style: tmp.skuDetails, children: authStore(Text_Text.Text, obj4) };
  obj4 = { variant: "body-md/semibold", children: sku.name };
  items1[1] = authStore(React3, obj3);
  items1[2] = authStore(OrbCheckoutAmountTagDefault, { orbAmount: orbPriceAmount });
  return unpackModuleId(React3, obj);
}
({ View: closure_4, ActivityIndicator: hasOwnProperty } = react_native);
const SKUProductLines = Constants.SKUProductLines;
const isFractionalPremiumSku = CollectiblesShopConstants.isFractionalPremiumSku;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { topRowWrapper: { width: "100%", marginBottom: 10 }, rowWrapper: { width: "100%", marginVertical: 10 }, rowDetailsContainer: obj2, orbPaymentSourceDetails: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, sectionTitle: obj3, spinner: obj4, skuDetailsContainer: obj5, skuDetails: { flex: 1 }, disclaimer: { opacity: 0.5 }, errorCard: obj6 };
obj2 = { borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, padding: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginBottom: nativeDefault.space.PX_8 };
obj4 = { paddingVertical: nativeDefault.space.PX_16, alignItems: "center" };
obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
obj6 = { borderRadius: nativeDefault.radii.sm, padding: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_MOD_CRITICAL };
let closure_12 = createStyles(obj);
const result = size.fileFinishedImporting("modules/virtual_currency/checkout/native/OrbCheckoutModalComponents.tsx");

export function OrbCheckoutErrorCard(error) {
  let Stack;
  let items;
  let obj2;
  error = error.error;
  const obj = { style: closure_12().errorCard, children: unpackModuleId(Stack, obj2) };
  obj2 = { direction: "horizontal", spacing: 8, align: "flex-start", children: items };
  Stack = Stack_Stack.Stack;
  items = [authStore(CircleErrorIcon.CircleErrorIcon, { size: "sm", color: "mobile-text-heading-primary" }), authStore(Text_Text.Text, { variant: "body-sm/medium", color: "mobile-text-heading-primary", children: error })];
  return authStore(React3, obj);
}
export function OrbCheckoutOrderSummary(skuId) {
  let intl;
  let items4;
  let items5;
  let tmp13Result;
  let tmp4;
  skuId = skuId.skuId;
  const orbPriceAmount = skuId.orbPriceAmount;
  const tmp = closure_12();
  const obj = skuId(15326);
  if (obj.useOrbCheckoutModalContext().isOrdersCheckout) {
    tmp4 = orbPriceAmount;
  }
  const items = [SKUStore];
  const items1 = [skuId];
  const tmp2Result = skuId(563);
  const stateFromStores = tmp2Result.useStateFromStores(items, () => SKUStore.get(skuId), items1);
  const items2 = [CollectiblesCategoryStore];
  const items3 = [skuId];
  let productLine;
  const tmp2Result3 = skuId(563);
  const stateFromStores1 = tmp2Result3.useStateFromStores(items2, () => CollectiblesCategoryStore.getProduct(skuId), items3);
  if (stateFromStores != null) {
    productLine = stateFromStores.productLine;
  }
  const tmp8 = productLine === SKUProductLines.COLLECTIBLES || isFractionalPremiumSku(skuId);
  const tmp2Result4 = skuId(15329);
  const mobileCheckoutFlow = tmp2Result4.getMobileCheckoutFlow({ sku: stateFromStores, product: stateFromStores1, usesCollectiblesDetails: tmp8 });
  const obj2 = { style: tmp.topRowWrapper, children: items4 };
  const obj3 = { variant: "heading-xs/semibold", color: "mobile-text-heading-primary", style: tmp.sectionTitle, children: intl.string(skuId(1113).t.hws7bC) };
  const Text = tmp2(5751).Text;
  intl = tmp2(1113).intl;
  items4 = [closure_10(Text, obj3), ];
  const scenario = mobileCheckoutFlow.scenario;
  const tmp11 = closure_11;
  if ("collectibles" === scenario) {
    const obj4 = { product: mobileCheckoutFlow.product, useOrbPrice: true, orbPriceAmount: tmp4 };
    tmp13Result = tmp13(CollectiblesShopCheckoutDetailsDefault, obj4);
  } else if ("commerce" === scenario) {
    const obj5 = { sku: mobileCheckoutFlow.sku, orbPriceAmount };
    tmp13Result = tmp13(GenericOrbCheckoutPurchaseItem, obj5);
  } else {
    tmp13Result = null;
    if ("loading" === scenario) {
      const obj6 = { style: items5, children: closure_10(closure_5, { size: "small" }) };
      items5 = [, ];
      ({ rowDetailsContainer: arr6[0], spinner: arr6[1] } = tmp);
      tmp13Result = tmp13(tmp12, obj6);
    }
  }
  items4[1] = tmp13Result;
  return tmp11(closure_4, obj2);
}
export function OrbCheckoutPaymentSourceDetails(orbBalance) {
  let intl;
  let intl2;
  let items;
  let items1;
  let items2;
  orbBalance = orbBalance.orbBalance;
  const tmp = closure_12();
  const obj = { style: tmp.rowWrapper, children: items };
  const obj2 = { variant: "heading-xs/semibold", color: "mobile-text-heading-primary", style: tmp.sectionTitle, children: intl.string(intl3.t["zLch/S"]) };
  const Text = Text_Text.Text;
  intl = intl3.intl;
  items = [authStore(Text, obj2), ];
  const obj3 = { style: items1, children: items2 };
  items1 = [, ];
  ({ rowDetailsContainer: arr2[0], orbPaymentSourceDetails: arr2[1] } = tmp);
  const obj4 = { variant: "body-md/medium", color: "mobile-text-heading-primary", children: intl2.string(intl3.t.y0WGqP) };
  const Text2 = Text_Text.Text;
  intl2 = intl3.intl;
  items2 = [authStore(Text2, obj4), authStore(OrbCheckoutAmountTagDefault, { orbAmount: orbBalance })];
  items[1] = unpackModuleId(React3, obj3);
  return unpackModuleId(React3, obj);
}
export function OrbCheckoutLegalFinePrint() {
  let skuId;
  const tmp = closure_12();
  let obj = skuId(15326);
  skuId = obj.useOrbCheckoutModalContext().skuId;
  const items = [skuId];
  const memo = react.useMemo(() => {
    const obj = OrbCheckoutUtils;
    return obj.getOrbCheckoutDisclaimerMessage(skuId);
  }, items);
  const obj2 = { style: tmp.disclaimer, variant: "footnote/normal", color: "interactive-text-active", children: memo };
  return closure_10(skuId(5751).Text, obj2);
}
export function OrbCheckoutPurchaseButton(onPress) {
  let OrbsIcon;
  let intl;
  let isCreatingOrder;
  let isRedeeming;
  let orbChargeAmount;
  let str2;
  onPress = onPress.onPress;
  const tmp2 = useThemeDefault();
  const obj = OrbCheckoutModalContext;
  const orbCheckoutModalContext = obj.useOrbCheckoutModalContext();
  ({ isRedeeming, orbChargeAmount, isCreatingOrder } = orbCheckoutModalContext);
  const obj2 = useVirtualCurrencyBalance;
  const virtualCurrencyBalance = obj2.useVirtualCurrencyBalance();
  if (!isRedeeming) {
    isRedeeming = isCreatingOrder;
  }
  const Button = tmp3(5758).Button;
  let str = "primary";
  const tmp3Result = shared;
  if (tmp3Result.isThemeDark(tmp2)) {
    str = "primary-overlay";
  }
  const obj3 = { variant: str, size: "lg", text: intl.string(intl3.t["zLch/S"]), icon: authStore(OrbsIcon, { size: "md", color: str2 }), iconPosition: "start", loading: isRedeeming, onPress, disabled: isRedeeming };
  intl = tmp3(1113).intl;
  OrbsIcon = tmp3(9616).OrbsIcon;
  str2 = "control-primary-text-default";
  const tmp3Result2 = shared;
  if (tmp3Result2.isThemeDark(tmp2)) {
    str2 = "control-overlay-primary-text-default";
  }
  if (!isRedeeming) {
    isRedeeming = null == orbChargeAmount;
  }
  if (!isRedeeming) {
    isRedeeming = null == virtualCurrencyBalance;
  }
  if (!isRedeeming) {
    isRedeeming = virtualCurrencyBalance < orbChargeAmount;
  }
  return authStore(Button, obj3);
}
