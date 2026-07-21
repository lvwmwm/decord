// Module ID: 12381
// Function ID: 94657
// Name: GiftPurchaseButton
// Dependencies: []
// Exports: default

// Module 12381 (GiftPurchaseButton)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const jsx = arg1(dependencyMap[5]).jsx;
const result = arg1(dependencyMap[19]).fileFinishedImporting("components_native/premium/GiftPurchaseButton.tsx");

export default function GiftPurchaseButton(style) {
  let str = style.variant;
  if (str === undefined) {
    str = "primary";
  }
  const planId = style.planId;
  const arg1 = planId;
  let analyticsLocation = style.analyticsLocation;
  if (analyticsLocation === undefined) {
    analyticsLocation = {};
  }
  const importDefault = analyticsLocation;
  const recipientUserId = style.recipientUserId;
  const dependencyMap = recipientUserId;
  let callback;
  let React;
  let View;
  let obj1 = arg1(dependencyMap[6]);
  const buttonTextColorStyles = obj1.useButtonTextColorStyles(str);
  let obj = {};
  const merged = Object.assign(arg1(dependencyMap[7]).TextStyleSheet.text-sm/semibold);
  const merged1 = Object.assign(buttonTextColorStyles);
  const items = [closure_6];
  const stateFromStores = arg1(dependencyMap[8]).useStateFromStores(items, () => premiumSubscription.getPremiumSubscription());
  const obj4 = arg1(dependencyMap[8]);
  const productIdForGift = arg1(dependencyMap[9]).getProductIdForGift(planId);
  callback = productIdForGift;
  const obj5 = arg1(dependencyMap[9]);
  const canPurchaseIAP = arg1(dependencyMap[10]).useCanPurchaseIAP(productIdForGift);
  const obj6 = arg1(dependencyMap[10]);
  const items1 = [closure_7];
  const stateFromStores1 = arg1(dependencyMap[8]).useStateFromStores(items1, () => closure_7.isPurchasingProduct(productIdForGift));
  const obj7 = arg1(dependencyMap[8]);
  const items2 = [closure_7];
  let tmp10 = null != stateFromStores;
  const stateFromStores2 = arg1(dependencyMap[8]).useStateFromStores(items2, () => closure_7.getProduct(productIdForGift));
  if (tmp10) {
    tmp10 = stateFromStores.planId === planId;
  }
  const analyticsLocations = importDefault(dependencyMap[11])().analyticsLocations;
  React = analyticsLocations;
  const obj8 = arg1(dependencyMap[8]);
  const createOrReuseGiftOrder = arg1(dependencyMap[12]).useCreateOrReuseGiftOrder("GiftPurchaseButton");
  View = createOrReuseGiftOrder;
  // CreateGeneratorClosureLongIndex (0x67)
  const items3 = [planId, recipientUserId, analyticsLocation, analyticsLocations, createOrReuseGiftOrder, productIdForGift];
  obj = { style: style.style };
  callback = React.useCallback(callback(tmp), items3);
  obj1 = {};
  const obj2 = { style: obj, basePlanId: planId, isCurrentPlan: tmp10, isGift: true, product: stateFromStores2 };
  obj1.textElement = importDefault(dependencyMap[18])(obj2);
  obj1.variant = str;
  obj1.size = "sm";
  obj1.onPress = callback;
  obj1.loading = stateFromStores1;
  obj1.disabled = !canPurchaseIAP;
  obj1.grow = true;
  obj.children = jsx(arg1(dependencyMap[17]).BaseTextButton, obj1);
  return <View {...obj} />;
};
