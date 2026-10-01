// Module ID: 13109
// Function ID: 13110
// Name: GiftPurchaseButton
// Dependencies: [5, 19, 17, 4494, 6658, 21, 5287, 4832, 504, 6661, 10513, 6583, 10207, 5204, 1115, 4488, 10124, 5282, 13110, 2]
// Exports: default

// Module 13109 (GiftPurchaseButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import SubscriptionStore from "SubscriptionStore" /* 4494 */;
import IAPStore from "IAPStore" /* 6658 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("components_native/premium/GiftPurchaseButton.tsx");

export default function GiftPurchaseButton(variant) {
  let premiumSubscription;
  let str = variant.variant;
  const style = variant.style;
  if (str === undefined) {
    str = "primary";
  }
  const planId = variant.planId;
  let analyticsLocation = variant.analyticsLocation;
  if (analyticsLocation === undefined) {
    analyticsLocation = {};
  }
  const recipientUserId = variant.recipientUserId;
  let analyticsLocations;
  let createOrReuseGiftOrder;
  let tmp = planId;
  const obj2 = planId(recipientUserId[6]);
  const buttonTextColorStyles = obj2.useButtonTextColorStyles(str);
  const obj = {};
  const merged = Object.assign(planId(recipientUserId[7]).TextStyleSheet["text-sm/semibold"]);
  const merged1 = Object.assign(buttonTextColorStyles);
  let obj4 = planId(recipientUserId[8]);
  const items = [SubscriptionStore];
  const stateFromStores = obj4.useStateFromStores(items, () => premiumSubscription.getPremiumSubscription());
  const obj5 = planId(recipientUserId[9]);
  const productIdForGift = obj5.getProductIdForGift(planId);
  let obj6 = planId(recipientUserId[10]);
  const canPurchaseIAP = obj6.useCanPurchaseIAP(productIdForGift);
  const obj7 = planId(recipientUserId[8]);
  const items1 = [IAPStore];
  const stateFromStores1 = obj7.useStateFromStores(items1, () => IAPStore.isPurchasingProduct(productIdForGift));
  let obj8 = planId(recipientUserId[8]);
  const items2 = [IAPStore];
  let tmp11 = null != stateFromStores;
  const stateFromStores2 = obj8.useStateFromStores(items2, () => IAPStore.getProduct(productIdForGift));
  if (tmp11) {
    tmp11 = stateFromStores.planId === planId;
  }
  analyticsLocations = analyticsLocation(tmp2[11])().analyticsLocations;
  const tmpResult = tmp(recipientUserId[12]);
  createOrReuseGiftOrder = tmpResult.useCreateOrReuseGiftOrder("GiftPurchaseButton");
  const items3 = [planId, recipientUserId, analyticsLocation, analyticsLocations, createOrReuseGiftOrder, productIdForGift];
  const callback = analyticsLocations.useCallback(productIdForGift(function*() {
    let c2;
    let c3;
    let c4;
    let closure_1;
    let intl;
    let intl2;
    const obj4 = { planId, recipientUserId, productId: productIdForGift };
    const order = yield createOrReuseGiftOrder(obj4);
    const obj8 = order(recipientUserId[15]);
    const tmp = obj8.getPremiumTypeFromPlanId(closure_129_0);
    const premiumType = tmp.premiumType;
    const planInterval = tmp.planInterval;
    const obj10 = { recipientUserId: closure_129_2, premiumType, planInterval, analyticsLocation: closure_129_1, analyticsLocations: closure_129_4, order };
    const obj9 = order(recipientUserId[16]);
    obj9.openGiftModal(obj10);
    yield "HermesInternal";
    const obj6 = { title: intl.string(order(recipientUserId[14]).t.R0RpRX), body: intl2.string(order(recipientUserId[14]).t.CKsXk3) };
    const show = tmp(recipientUserId[13]).show;
    const tmp8 = tmp(recipientUserId[13]);
    intl = order(recipientUserId[14]).intl;
    intl2 = order(recipientUserId[14]).intl;
    show(obj6);
  }), items3);
  let obj9 = { textElement: analyticsLocation(tmp2[18])({ style: obj, basePlanId: planId, isCurrentPlan: tmp11, isGift: true, product: stateFromStores2 }), variant: str, size: "sm", onPress: callback, loading: stateFromStores1, disabled: !canPurchaseIAP, grow: true };
  const BaseTextButton = tmp(tmp2[17]).BaseTextButton;
  return <createOrReuseGiftOrder style={style}>{null}</createOrReuseGiftOrder>;
};
