// Module ID: 12500
// Function ID: 96841
// Name: GiftPurchaseButton
// Dependencies: [5, 31, 27, 3782, 5621, 33, 4548, 4126, 566, 5624, 7203, 5464, 9683, 4471, 1212, 3776, 9679, 4544, 12501, 2]
// Exports: default

// Module 12500 (GiftPurchaseButton)
import jsxProd from "jsxProd";
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("get ActivityIndicator").fileFinishedImporting("components_native/premium/GiftPurchaseButton.tsx");

export default function GiftPurchaseButton(style) {
  let str = style.variant;
  if (str === undefined) {
    str = "primary";
  }
  const planId = style.planId;
  let analyticsLocation = style.analyticsLocation;
  if (analyticsLocation === undefined) {
    analyticsLocation = {};
  }
  const recipientUserId = style.recipientUserId;
  let productIdForGift;
  let analyticsLocations;
  let createOrReuseGiftOrder;
  let obj1 = planId(recipientUserId[6]);
  const buttonTextColorStyles = obj1.useButtonTextColorStyles(str);
  let obj = {};
  const merged = Object.assign(planId(recipientUserId[7]).TextStyleSheet["text-sm/semibold"]);
  const merged1 = Object.assign(buttonTextColorStyles);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = planId(recipientUserId[8]).useStateFromStores(items, () => outer1_6.getPremiumSubscription());
  const obj4 = planId(recipientUserId[8]);
  productIdForGift = planId(recipientUserId[9]).getProductIdForGift(planId);
  const obj5 = planId(recipientUserId[9]);
  const canPurchaseIAP = planId(recipientUserId[10]).useCanPurchaseIAP(productIdForGift);
  const obj6 = planId(recipientUserId[10]);
  const items1 = [closure_7];
  const stateFromStores1 = planId(recipientUserId[8]).useStateFromStores(items1, () => outer1_7.isPurchasingProduct(productIdForGift));
  const obj7 = planId(recipientUserId[8]);
  const items2 = [closure_7];
  let tmp10 = null != stateFromStores;
  const stateFromStores2 = planId(recipientUserId[8]).useStateFromStores(items2, () => outer1_7.getProduct(productIdForGift));
  if (tmp10) {
    tmp10 = stateFromStores.planId === planId;
  }
  analyticsLocations = analyticsLocation(recipientUserId[11])().analyticsLocations;
  const obj8 = planId(recipientUserId[8]);
  createOrReuseGiftOrder = planId(recipientUserId[12]).useCreateOrReuseGiftOrder("GiftPurchaseButton");
  // CreateGeneratorClosureLongIndex (0x67)
  const items3 = [planId, recipientUserId, analyticsLocation, analyticsLocations, createOrReuseGiftOrder, productIdForGift];
  obj = { style: style.style };
  const callback = analyticsLocations.useCallback(productIdForGift(tmp), items3);
  obj1 = {};
  const obj2 = { style: obj, basePlanId: planId, isCurrentPlan: tmp10, isGift: true, product: stateFromStores2 };
  obj1.textElement = analyticsLocation(recipientUserId[18])(obj2);
  obj1.variant = str;
  obj1.size = "sm";
  obj1.onPress = callback;
  obj1.loading = stateFromStores1;
  obj1.disabled = !canPurchaseIAP;
  obj1.grow = true;
  obj.children = jsx(planId(recipientUserId[17]).BaseTextButton, {});
  return <createOrReuseGiftOrder style={arg0.style} />;
};
