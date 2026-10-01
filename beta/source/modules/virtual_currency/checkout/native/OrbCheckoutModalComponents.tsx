// Module ID: 12729
// Function ID: 12730
// Name: OrbCheckoutModalComponents
// Dependencies: [19, 17, 21, 4836, 576, 5279, 6028, 4832, 10476, 1115, 10478, 12728, 6662, 4767, 12730, 5281, 4685, 8298, 2]
// Exports: OrbCheckoutErrorCard, OrbCheckoutLegalFinePrint, OrbCheckoutOrderSummary, OrbCheckoutPaymentSourceDetails, OrbCheckoutPurchaseButton

// Module 12729 (OrbCheckoutModalComponents)
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import shared from "shared" /* 4685 */;
import useThemeDefault from "useTheme" /* 4767 */;
import Text_Text from "Text/Text" /* 4832 */;
import Stack_Stack from "Stack/Stack" /* 5279 */;
import CircleErrorIcon from "CircleErrorIcon" /* 6028 */;
import OrbCheckoutUtils from "OrbCheckoutUtils" /* 6662 */;
import CollectiblesShopCheckoutDetailsDefault from "CollectiblesShopCheckoutDetails" /* 10476 */;
import OrbCheckoutAmountTagDefault from "OrbCheckoutAmountTag" /* 10478 */;
import OrbCheckoutModalContext from "OrbCheckoutModalContext" /* 12728 */;
import useVirtualCurrencyBalance from "useVirtualCurrencyBalance" /* 12730 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
({ View: closure_4, ActivityIndicator: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { topRowWrapper: { width: "100%", marginBottom: 10 }, rowWrapper: { width: "100%", marginVertical: 10 }, rowDetailsContainer: obj2, orbPaymentSourceDetails: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, sectionTitle: obj3, spinner: obj4, disclaimer: { opacity: 0.5 }, errorCard: { borderRadius: nativeDefault.radii.sm, padding: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL } };
obj2 = { borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, padding: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginBottom: nativeDefault.space.PX_8 };
obj4 = { paddingVertical: nativeDefault.space.PX_16, alignItems: "center" };
({ borderRadius: nativeDefault.radii.sm, padding: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL });
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/virtual_currency/checkout/native/OrbCheckoutModalComponents.tsx");

export const OrbCheckoutErrorCard = function OrbCheckoutErrorCard(error) {
  let Stack;
  let items;
  let obj2;
  error = error.error;
  const obj = { style: closure_8().errorCard, children: metroImportDefault(Stack, obj2) };
  obj2 = { direction: "horizontal", spacing: 8, align: "flex-start", children: items };
  Stack = Stack_Stack.Stack;
  items = [metroRequire(CircleErrorIcon.CircleErrorIcon, { size: "sm", color: "mobile-text-heading-primary" }), metroRequire(Text_Text.Text, { variant: "text-sm/medium", color: "mobile-text-heading-primary", children: error })];
  return metroRequire(React3, obj);
};
export const OrbCheckoutOrderSummary = function OrbCheckoutOrderSummary(product) {
  let intl;
  let items;
  let items1;
  let tmp5;
  let tmp6;
  product = product.product;
  const tmp = closure_8();
  if (null == product) {
    const obj2 = { style: items, children: metroRequire(hasOwnProperty, { size: "small" }) };
    items = [, ];
    ({ rowDetailsContainer: arr[0], spinner: arr[1] } = tmp);
    tmp5 = metroRequire(React3, obj2);
    tmp6 = metroRequire;
  } else {
    const obj = { product, useOrbPrice: true };
    tmp5 = metroRequire(CollectiblesShopCheckoutDetailsDefault, obj);
    tmp6 = metroRequire;
  }
  const obj3 = { style: tmp.topRowWrapper, children: items1 };
  const obj4 = { variant: "heading-sm/bold", color: "mobile-text-heading-primary", style: tmp.sectionTitle, children: intl.string(intl3.t.hws7bC) };
  const Text = Text_Text.Text;
  intl = intl3.intl;
  items1 = [tmp6(Text, obj4), tmp5];
  return metroImportDefault(React3, obj3);
};
export const OrbCheckoutPaymentSourceDetails = function OrbCheckoutPaymentSourceDetails(orbBalance) {
  let intl;
  let intl2;
  let items;
  let items1;
  let items2;
  orbBalance = orbBalance.orbBalance;
  const tmp = closure_8();
  const obj = { style: tmp.rowWrapper, children: items };
  const obj2 = { variant: "heading-sm/bold", color: "mobile-text-heading-primary", style: tmp.sectionTitle, children: intl.string(intl3.t["zLch/S"]) };
  const Text = Text_Text.Text;
  intl = intl3.intl;
  items = [metroRequire(Text, obj2), ];
  const obj3 = { style: items1, children: items2 };
  items1 = [, ];
  ({ rowDetailsContainer: arr2[0], orbPaymentSourceDetails: arr2[1] } = tmp);
  const obj4 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: intl2.string(intl3.t.y0WGqP) };
  const Text2 = Text_Text.Text;
  intl2 = intl3.intl;
  items2 = [metroRequire(Text2, obj4), metroRequire(OrbCheckoutAmountTagDefault, { orbAmount: orbBalance })];
  items[1] = metroImportDefault(React3, obj3);
  return metroImportDefault(React3, obj);
};
export const OrbCheckoutLegalFinePrint = function OrbCheckoutLegalFinePrint() {
  let skuId;
  const tmp = closure_8();
  let obj = skuId(12728);
  skuId = obj.useOrbCheckoutModalContext().skuId;
  const items = [skuId];
  const memo = react.useMemo(() => {
    const obj = OrbCheckoutUtils;
    return obj.getOrbCheckoutDisclaimerMessage(skuId);
  }, items);
  const obj2 = { style: tmp.disclaimer, variant: "text-xxs/normal", color: "interactive-text-active", children: memo };
  return closure_6(skuId(4832).Text, obj2);
};
export const OrbCheckoutPurchaseButton = function OrbCheckoutPurchaseButton(onPress) {
  let OrbsIcon;
  let intl;
  let isRedeeming;
  let orbPriceAmount;
  let orbProductContext;
  let str2;
  onPress = onPress.onPress;
  const tmp2 = useThemeDefault();
  const obj = OrbCheckoutModalContext;
  const orbCheckoutModalContext = obj.useOrbCheckoutModalContext();
  ({ isRedeeming, orbProductContext } = orbCheckoutModalContext);
  const obj2 = useVirtualCurrencyBalance;
  const virtualCurrencyBalance = obj2.useVirtualCurrencyBalance();
  if (orbProductContext != null) {
    orbPriceAmount = orbProductContext.orbPriceAmount;
  }
  const Button = tmp3(5281).Button;
  let str = "primary";
  const tmp3Result = shared;
  if (tmp3Result.isThemeDark(tmp2)) {
    str = "primary-overlay";
  }
  const obj3 = { variant: str, size: "lg", text: intl.string(intl3.t["zLch/S"]), icon: metroRequire(OrbsIcon, { size: "md", color: str2 }), iconPosition: "start", loading: isRedeeming, onPress, disabled: isRedeeming };
  intl = tmp3(1115).intl;
  OrbsIcon = tmp3(8298).OrbsIcon;
  str2 = "control-primary-text-default";
  const tmp3Result2 = shared;
  if (tmp3Result2.isThemeDark(tmp2)) {
    str2 = "control-overlay-primary-text-default";
  }
  if (!isRedeeming) {
    isRedeeming = null == orbPriceAmount;
  }
  if (!isRedeeming) {
    isRedeeming = null == virtualCurrencyBalance;
  }
  if (!isRedeeming) {
    isRedeeming = virtualCurrencyBalance < orbPriceAmount;
  }
  return metroRequire(Button, obj3);
};
