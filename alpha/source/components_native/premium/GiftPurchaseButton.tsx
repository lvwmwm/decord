// Module ID: 15455
// Function ID: 15456
// Name: GiftPurchaseButton
// Dependencies: [5, 19, 17, 2179, 9302, 1390, 21, 5943, 5929, 504, 8580, 9763, 10956, 7918, 11669, 6269, 1113, 2174, 11661, 5937, 15456, 2]
// Exports: default

// Module 15455 (GiftPurchaseButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import PremiumConstants from "PremiumConstants" /* 1390 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import SubscriptionStore from "SubscriptionStore" /* 2179 */;
import IAPStore from "IAPStore" /* 9302 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const PRICE_PLACEHOLDER = PremiumConstants.PRICE_PLACEHOLDER;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("components_native/premium/GiftPurchaseButton.tsx");

export default function GiftPurchaseButton(variant) {
  let BaseTextButton;
  let obj10;
  let premiumSubscription;
  let priceString;
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
  let tmp = planId;
  const obj2 = planId(recipientUserId[7]);
  const buttonTextColorStyles = obj2.useButtonTextColorStyles(str);
  const obj = {};
  const merged = Object.assign(planId(recipientUserId[8]).TextStyleSheet["body-sm/semibold"]);
  const merged1 = Object.assign(buttonTextColorStyles);
  let obj4 = planId(recipientUserId[9]);
  const items = [SubscriptionStore];
  const stateFromStores = obj4.useStateFromStores(items, () => premiumSubscription.getPremiumSubscription());
  const obj5 = planId(recipientUserId[10]);
  const productIdForGift = obj5.getProductIdForGift(planId);
  let obj6 = planId(recipientUserId[11]);
  const canPurchaseIAP = obj6.useCanPurchaseIAP(productIdForGift);
  const obj7 = planId(recipientUserId[9]);
  const items1 = [IAPStore];
  const stateFromStores1 = obj7.useStateFromStores(items1, () => IAPStore.isPurchasingProduct(productIdForGift));
  let obj8 = planId(recipientUserId[9]);
  const items2 = [IAPStore];
  const stateFromStores2 = obj8.useStateFromStores(items2, () => IAPStore.getProduct(productIdForGift));
  const tmp12 = analyticsLocation(recipientUserId[12])(planId, { isGift: true });
  const tmp13 = null != stateFromStores && stateFromStores.planId === planId;
  const analyticsLocations = tmp11(tmp2[13])().analyticsLocations;
  const tmpResult = tmp(recipientUserId[14]);
  const createOrReuseGiftOrder = tmpResult.useCreateOrReuseGiftOrder("GiftPurchaseButton");
  const items3 = [planId, recipientUserId, analyticsLocation, analyticsLocations, createOrReuseGiftOrder, productIdForGift];
  const obj3 = { style, children: tmp16(BaseTextButton, obj10) };
  const callback = analyticsLocations.useCallback(productIdForGift(function*() {
    let c2;
    let c3;
    let c4;
    let closure_1;
    let intl;
    let intl2;
    const obj4 = { planId, recipientUserId, productId: productIdForGift };
    const order = yield createOrReuseGiftOrder(obj4);
    const obj8 = order(recipientUserId[17]);
    const tmp = obj8.getPremiumTypeFromPlanId(closure_129_0);
    const premiumType = tmp.premiumType;
    const planInterval = tmp.planInterval;
    const obj10 = { recipientUserId: closure_129_2, premiumType, planInterval, analyticsLocation: closure_129_1, analyticsLocations: closure_129_4, order };
    const obj9 = order(recipientUserId[18]);
    obj9.openGiftModal(obj10);
    yield "HermesInternal";
    const obj6 = { title: intl.string(order(recipientUserId[16]).t.R0RpRX), body: intl2.string(order(recipientUserId[16]).t.CKsXk3) };
    const show = tmp(recipientUserId[15]).show;
    const tmp8 = tmp(recipientUserId[15]);
    intl = order(recipientUserId[16]).intl;
    intl2 = order(recipientUserId[16]).intl;
    show(obj6);
  }), items3);
  BaseTextButton = tmp(tmp2[19]).BaseTextButton;
  let obj9 = { style: obj, basePlanId: planId, isCurrentPlan: tmp13, isGift: true, product: stateFromStores2, priceString };
  priceString = undefined;
  const tmp11Result = analyticsLocation(recipientUserId[20]);
  const tmp17 = createOrReuseGiftOrder;
  if (tmp12 != null) {
    priceString = tmp12.priceString;
  }
  if (priceString == null) {
    priceString = PRICE_PLACEHOLDER;
  }
  obj10 = { textElement: tmp11Result(obj9), variant: str, size: "sm", onPress: callback, loading: stateFromStores1, disabled: !canPurchaseIAP, grow: true };
  return jsx(tmp17, obj3);
};
