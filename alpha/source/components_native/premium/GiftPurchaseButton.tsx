// Module ID: 13694
// Function ID: 13695
// Name: GiftPurchaseButton
// Dependencies: [5, 19, 17, 4732, 7120, 21, 558, 576, 5381, 5086, 504, 7115, 12748, 6841, 10084, 5298, 1126, 4726, 10002, 5376, 13695, 2]

// Module 13694 (GiftPurchaseButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import SubscriptionStore from "SubscriptionStore" /* 4732 */;
import IAPStore from "IAPStore" /* 7120 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let _asyncToGenerator = _asyncToGenerator_mod;
const View = react_native.View;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function GiftPurchaseButton(arg0) {
  let analyticsLocation;
  let closure_2;
  let closure_3;
  let planId;
  let premiumSubscription;
  let recipientUserId;
  let style;
  let tmp12;
  let tmp15;
  let tmp17;
  let tmp19;
  let tmp21;
  let tmp4;
  let tmp8;
  let tmp9;
  let variant;
  const tmp = planId;
  const obj = planId(576);
  const cResult = obj.c(30);
  ({ style, variant, planId } = arg0);
  ({ analyticsLocation, recipientUserId } = arg0);
  let str = "primary";
  if (undefined !== variant) {
    str = variant;
  }
  if (cResult[0] !== analyticsLocation) {
    let obj2 = analyticsLocation;
    if (undefined === analyticsLocation) {
      obj2 = {};
    }
    cResult[0] = analyticsLocation;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  dependencyMap = tmp4;
  const tmpResult = tmp(5381);
  const buttonTextColorStyles = tmpResult.useButtonTextColorStyles(str);
  const obj3 = {};
  const merged = Object.assign(tmp(5086).TextStyleSheet["text-sm/semibold"]);
  const merged1 = Object.assign(buttonTextColorStyles);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SubscriptionStore];
    const fn = function b() {
      return premiumSubscription.getPremiumSubscription();
    };
    cResult[2] = items;
    cResult[3] = fn;
    tmp9 = fn;
    tmp8 = items;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult7 = tmp(504);
  const stateFromStores = tmpResult7.useStateFromStores(tmp8, tmp9);
  if (cResult[4] !== planId) {
    const tmpResult8 = tmp(7115);
    const productIdForGift = tmpResult8.getProductIdForGift(planId);
    cResult[4] = planId;
    cResult[5] = productIdForGift;
    tmp12 = productIdForGift;
  } else {
    tmp12 = cResult[5];
  }
  _asyncToGenerator = tmp12;
  const tmpResult9 = tmp(12748);
  const canPurchaseIAP = tmpResult9.useCanPurchaseIAP(tmp12);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [IAPStore];
    cResult[6] = items1;
    tmp15 = items1;
  } else {
    tmp15 = cResult[6];
  }
  if (cResult[7] !== tmp12) {
    const fn2 = function _() {
      return IAPStore.isPurchasingProduct(closure_3);
    };
    cResult[7] = tmp12;
    cResult[8] = fn2;
    tmp17 = fn2;
  } else {
    tmp17 = cResult[8];
  }
  const tmpResult10 = tmp(504);
  const stateFromStores1 = tmpResult10.useStateFromStores(tmp15, tmp17);
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [IAPStore];
    cResult[9] = items2;
    tmp19 = items2;
  } else {
    tmp19 = cResult[9];
  }
  if (cResult[10] !== tmp12) {
    const fn3 = function w() {
      return IAPStore.getProduct(closure_3);
    };
    cResult[10] = tmp12;
    cResult[11] = fn3;
    tmp21 = fn3;
  } else {
    tmp21 = cResult[11];
  }
  let tmp23 = null != stateFromStores;
  const tmpResult11 = tmp(504);
  const stateFromStores2 = tmpResult11.useStateFromStores(tmp19, tmp21);
  if (tmp23) {
    tmp23 = stateFromStores.planId === planId;
  }
  const analyticsLocations = recipientUserId(6841)().analyticsLocations;
  const tmpResult12 = tmp(10084);
  const createOrReuseGiftOrder = tmpResult12.useCreateOrReuseGiftOrder("GiftPurchaseButton");
  const tmp24 = recipientUserId;
  if (cResult[12] === tmp4) {
    if (cResult[13] === analyticsLocations) {
      if (cResult[14] === createOrReuseGiftOrder) {
        if (cResult[15] === planId) {
          if (cResult[16] === tmp12) {
            let tmp26;
            if (cResult[17] === recipientUserId) {
              tmp26 = cResult[18];
            }
            const BaseTextButton = tmp(5376).BaseTextButton;
            let obj4 = { style: obj3, basePlanId: planId, isCurrentPlan: tmp23, isGift: true, product: stateFromStores2 };
            const tmp28 = tmp24(13695)(obj4);
            if (cResult[19] === BaseTextButton) {
              if (cResult[20] === tmp26) {
                if (cResult[21] === stateFromStores1) {
                  if (cResult[22] === tmp28) {
                    if (cResult[23] === !canPurchaseIAP) {
                      let tmp30;
                      if (cResult[24] === str) {
                        tmp30 = cResult[25];
                      }
                      if (cResult[26] === createOrReuseGiftOrder) {
                        if (cResult[27] === style) {
                          let tmp33;
                          if (cResult[28] === tmp30) {
                            tmp33 = cResult[29];
                          }
                          return tmp33;
                        }
                      }
                      const tmp35 = <tmp27 style={style}>{tmp30}</tmp27>;
                      cResult[26] = createOrReuseGiftOrder;
                      cResult[27] = style;
                      cResult[28] = tmp30;
                      cResult[29] = tmp35;
                      tmp33 = tmp35;
                    }
                  }
                }
              }
            }
            const tmp32 = <BaseTextButton textElement={tmp28} variant={str} size="sm" onPress={tmp26} loading={stateFromStores1} disabled={!canPurchaseIAP} grow />;
            cResult[19] = BaseTextButton;
            cResult[20] = tmp26;
            cResult[21] = stateFromStores1;
            cResult[22] = tmp28;
            cResult[23] = !canPurchaseIAP;
            cResult[24] = str;
            cResult[25] = tmp32;
            tmp30 = tmp32;
          }
        }
      }
    }
  }
  let closure_0 = _asyncToGenerator(async () => {
    let intl;
    let intl2;
    recipientUserId = tmp;
    let order = tmp4;
    const obj4 = { planId: order, recipientUserId, productId };
    order = await closure_1_5(obj4);
    const obj8 = order(closure_2_2[17]);
    recipientUserId = obj8.getPremiumTypeFromPlanId(order);
    const premiumType = recipientUserId.premiumType;
    const planInterval = recipientUserId.planInterval;
    const obj10 = { recipientUserId, premiumType, planInterval, analyticsLocation, analyticsLocations, order };
    const obj9 = order(closure_2_2[18]);
    obj9.openGiftModal(obj10);
    await "IconComponent";
    const obj6 = { title: intl.string(order(closure_2_2[16]).t.R0RpRX), body: intl2.string(order(closure_2_2[16]).t.CKsXk3) };
    const show = recipientUserId(closure_2_2[15]).show;
    const tmp8 = recipientUserId(closure_2_2[15]);
    intl = order(closure_2_2[16]).intl;
    intl2 = order(closure_2_2[16]).intl;
    show(obj6);
  });
  function t11() {
    return closure_0(...arguments);
  }
  cResult[12] = tmp4;
  cResult[13] = analyticsLocations;
  cResult[14] = createOrReuseGiftOrder;
  cResult[15] = planId;
  cResult[16] = tmp12;
  cResult[17] = recipientUserId;
  cResult[18] = t11;
  tmp26 = t11;
}) : (function GiftPurchaseButton(variant) {
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
  const obj2 = planId(recipientUserId[8]);
  const buttonTextColorStyles = obj2.useButtonTextColorStyles(str);
  const obj = {};
  const merged = Object.assign(planId(recipientUserId[9]).TextStyleSheet["text-sm/semibold"]);
  const merged1 = Object.assign(buttonTextColorStyles);
  let obj4 = planId(recipientUserId[10]);
  const items = [SubscriptionStore];
  const stateFromStores = obj4.useStateFromStores(items, () => premiumSubscription.getPremiumSubscription());
  const obj5 = planId(recipientUserId[11]);
  const productIdForGift = obj5.getProductIdForGift(planId);
  let obj6 = planId(recipientUserId[12]);
  const canPurchaseIAP = obj6.useCanPurchaseIAP(productIdForGift);
  const obj7 = planId(recipientUserId[10]);
  const items1 = [IAPStore];
  const stateFromStores1 = obj7.useStateFromStores(items1, () => IAPStore.isPurchasingProduct(productIdForGift));
  let obj8 = planId(recipientUserId[10]);
  const items2 = [IAPStore];
  let tmp11 = null != stateFromStores;
  const stateFromStores2 = obj8.useStateFromStores(items2, () => IAPStore.getProduct(productIdForGift));
  if (tmp11) {
    tmp11 = stateFromStores.planId === planId;
  }
  analyticsLocations = analyticsLocation(tmp2[13])().analyticsLocations;
  const tmpResult = tmp(recipientUserId[14]);
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
    const obj8 = order(recipientUserId[17]);
    const tmp = obj8.getPremiumTypeFromPlanId(closure_129_0);
    const premiumType = tmp.premiumType;
    const planInterval = tmp.planInterval;
    const obj10 = { recipientUserId: closure_129_2, premiumType, planInterval, analyticsLocation: closure_129_1, analyticsLocations: closure_129_4, order };
    const obj9 = order(recipientUserId[18]);
    obj9.openGiftModal(obj10);
    yield "IconComponent";
    const obj6 = { title: intl.string(order(recipientUserId[16]).t.R0RpRX), body: intl2.string(order(recipientUserId[16]).t.CKsXk3) };
    const show = tmp(recipientUserId[15]).show;
    const tmp8 = tmp(recipientUserId[15]);
    intl = order(recipientUserId[16]).intl;
    intl2 = order(recipientUserId[16]).intl;
    show(obj6);
  }), items3);
  let obj9 = { textElement: analyticsLocation(tmp2[20])({ style: obj, basePlanId: planId, isCurrentPlan: tmp11, isGift: true, product: stateFromStores2 }), variant: str, size: "sm", onPress: callback, loading: stateFromStores1, disabled: !canPurchaseIAP, grow: true };
  const BaseTextButton = tmp(tmp2[19]).BaseTextButton;
  return <createOrReuseGiftOrder style={style}>{null}</createOrReuseGiftOrder>;
});
const result = size.fileFinishedImporting("components_native/premium/GiftPurchaseButton.tsx");

export default tmp2;
