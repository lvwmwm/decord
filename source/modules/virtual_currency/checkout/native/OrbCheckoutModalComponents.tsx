// Module ID: 11822
// Function ID: 91652
// Name: OrbCheckoutErrorCard
// Dependencies: []
// Exports: OrbCheckoutErrorCard, OrbCheckoutLegalFinePrint, OrbCheckoutOrderSummary, OrbCheckoutPaymentSourceDetails, OrbCheckoutPurchaseButton

// Module 11822 (OrbCheckoutErrorCard)
let closure_3 = importAll(dependencyMap[0]);
({ View: closure_4, ActivityIndicator: closure_5 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = { topRowWrapper: {}, rowWrapper: {} };
obj = { borderRadius: importDefault(dependencyMap[4]).radii.lg, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_MOD_SUBTLE, padding: importDefault(dependencyMap[4]).space.PX_16 };
obj.rowDetailsContainer = obj;
obj.orbPaymentSourceDetails = { bottom: "<string:3435973836>", left: "<string:1903247380>", padding: "r" };
const tmp3 = arg1(dependencyMap[2]);
obj.sectionTitle = { marginBottom: importDefault(dependencyMap[4]).space.PX_8 };
const obj1 = { marginBottom: importDefault(dependencyMap[4]).space.PX_8 };
obj.spinner = { paddingVertical: importDefault(dependencyMap[4]).space.PX_16, alignItems: "center" };
obj.disclaimer = { opacity: 0.5 };
const obj2 = { paddingVertical: importDefault(dependencyMap[4]).space.PX_16, alignItems: "center" };
obj.errorCard = { borderRadius: importDefault(dependencyMap[4]).radii.sm, padding: importDefault(dependencyMap[4]).space.PX_12, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_FEEDBACK_CRITICAL };
let closure_8 = obj.createStyles(obj);
const obj3 = { borderRadius: importDefault(dependencyMap[4]).radii.sm, padding: importDefault(dependencyMap[4]).space.PX_12, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_FEEDBACK_CRITICAL };
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/virtual_currency/checkout/native/OrbCheckoutModalComponents.tsx");

export const OrbCheckoutErrorCard = function OrbCheckoutErrorCard(children) {
  let obj = { style: callback3().errorCard };
  obj = { "Bool(true)": -144637951, "Bool(true)": 17545793, "Bool(true)": 1106731264 };
  const items = [callback(arg1(dependencyMap[6]).CircleErrorIcon, { flex: "%JSONStringify%", flexGrow: "isArrayBuffer" }), callback(arg1(dependencyMap[7]).Text, { children: children.error })];
  obj.children = items;
  obj.children = callback2(arg1(dependencyMap[5]).Stack, obj);
  return callback(closure_4, obj);
};
export const OrbCheckoutOrderSummary = function OrbCheckoutOrderSummary(product) {
  product = product.product;
  const tmp = callback3();
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
    tmp5 = callback(importDefault(dependencyMap[8]), obj);
  }
  const obj1 = { style: tmp.topRowWrapper };
  const obj2 = { style: tmp.sectionTitle };
  const intl = arg1(dependencyMap[9]).intl;
  obj2.children = intl.string(arg1(dependencyMap[9]).t.hws7bC);
  const items1 = [callback(arg1(dependencyMap[7]).Text, obj2), tmp5];
  obj1.children = items1;
  return callback2(closure_4, obj1);
};
export const OrbCheckoutPaymentSourceDetails = function OrbCheckoutPaymentSourceDetails(orbAmount) {
  const tmp = callback3();
  let obj = { style: tmp.rowWrapper };
  obj = { style: tmp.sectionTitle };
  const intl = arg1(dependencyMap[9]).intl;
  obj.children = intl.string(arg1(dependencyMap[9]).t.zLch/S);
  const items = [callback(arg1(dependencyMap[7]).Text, obj), ];
  obj = { style: items1 };
  const items1 = [, ];
  ({ rowDetailsContainer: arr2[0], orbPaymentSourceDetails: arr2[1] } = tmp);
  const obj1 = {};
  const intl2 = arg1(dependencyMap[9]).intl;
  obj1.children = intl2.string(arg1(dependencyMap[9]).t.y0WGqP);
  const items2 = [callback(arg1(dependencyMap[7]).Text, obj1), callback(importDefault(dependencyMap[10]), { orbAmount: orbAmount.orbBalance })];
  obj.children = items2;
  items[1] = callback2(closure_4, obj);
  obj.children = items;
  return callback2(closure_4, obj);
};
export const OrbCheckoutLegalFinePrint = function OrbCheckoutLegalFinePrint() {
  let obj = arg1(dependencyMap[11]);
  const skuId = obj.useOrbCheckoutModalContext().skuId;
  const arg1 = skuId;
  const items = [skuId];
  const memo = React.useMemo(() => skuId(closure_2[12]).getOrbCheckoutDisclaimerMessage(skuId), items);
  obj = { style: callback3().disclaimer, children: memo };
  return callback(arg1(dependencyMap[13]).TextWithIOSLinkWorkaround, obj);
};
export const OrbCheckoutPurchaseButton = function OrbCheckoutPurchaseButton(onPress) {
  let isRedeeming;
  let orbProductContext;
  const tmp = importDefault(dependencyMap[14])();
  let obj = arg1(dependencyMap[11]);
  const orbCheckoutModalContext = obj.useOrbCheckoutModalContext();
  ({ isRedeeming, orbProductContext } = orbCheckoutModalContext);
  const virtualCurrencyBalance = arg1(dependencyMap[15]).useVirtualCurrencyBalance();
  if (null != orbProductContext) {
    const orbPriceAmount = orbProductContext.orbPriceAmount;
  }
  obj = {};
  const obj2 = arg1(dependencyMap[15]);
  const tmp4 = closure_6;
  let str = "primary";
  if (obj4.isThemeDark(tmp)) {
    str = "primary-overlay";
  }
  obj.variant = str;
  obj.size = "lg";
  const intl = arg1(dependencyMap[9]).intl;
  obj.text = intl.string(arg1(dependencyMap[9]).t.zLch/S);
  obj = { size: "md" };
  const obj4 = arg1(dependencyMap[17]);
  const tmp5 = closure_6;
  let str2 = "control-primary-text-default";
  if (obj6.isThemeDark(tmp)) {
    str2 = "control-overlay-primary-text-default";
  }
  obj.color = str2;
  obj.icon = tmp5(arg1(dependencyMap[18]).OrbsIcon, obj);
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
  return tmp4(arg1(dependencyMap[16]).Button, obj);
};
