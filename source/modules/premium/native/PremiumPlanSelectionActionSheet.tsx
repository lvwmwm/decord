// Module ID: 6662
// Function ID: 51238
// Name: hasRelevantTrialOfferForOrder
// Dependencies: [29, 5, 57, 31, 27, 6663, 1921, 5621, 6660, 1851, 653, 1277, 4113, 482, 33, 4130, 689, 3776, 4126, 1212, 44, 6670, 1827, 566, 7118, 5618, 4543, 7119, 6656, 4066, 6686, 7127, 7185, 7186, 5464, 5484, 5450, 7156, 6644, 4559, 7157, 4098, 675, 6643, 1553, 4471, 7121, 4451, 6648, 3976, 7174, 7175, 7176, 7177, 7178, 7179, 477, 5459, 1920, 5187, 7187, 5446, 5085, 7190, 7193, 1273, 7194, 7129, 7195, 2]
// Exports: default

// Module 6662 (hasRelevantTrialOfferForOrder)
import useTheme from "useTheme";
import context from "context";
import findLinks from "findLinks";
import useGetDiscountOffer from "useGetDiscountOffer";
import get_ActivityIndicator from "validatePurchase";
import { useNativeCheckoutStore } from "context";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import usePremiumPlanPurchasedStore from "usePremiumPlanPurchasedStore";
import GuildFeatures from "GuildFeatures";
import ME from "ME";
import { TitleStyleType } from "semanticColor";
import CustomCheckoutFlow from "CustomCheckoutFlow";
import sum from "sum";
import jsxProd from "useBottomSheetRef";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_13;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
let closure_24;
let closure_25;
let closure_26;
let closure_27;
let closure_28;
let closure_30;
let closure_31;
let closure_32;
let closure_33;
let closure_34;
let closure_35;
let closure_36;
let closure_8;
let closure_9;
const require = arg1;
function hasRelevantTrialOfferForOrder(orderRequired) {
  let order;
  let premiumType;
  let trialOffer;
  ({ trialOffer, premiumType, order } = orderRequired);
  let tmp = null != trialOffer;
  if (tmp) {
    tmp = null != premiumType;
  }
  if (tmp) {
    const subscription_trial = trialOffer.subscription_trial;
    let sku_id;
    if (null != subscription_trial) {
      sku_id = subscription_trial.sku_id;
    }
    let tmp5 = sku_id === importDefault(3776).getSkuIdForPremiumType(premiumType);
    if (tmp5) {
      let tmp6 = !orderRequired.orderRequired;
      if (!tmp6) {
        let subscriptionTrialId;
        if (null != order) {
          const subscriptionFacet = order.subscriptionFacet;
          if (null != subscriptionFacet) {
            const subscriptionPreview = subscriptionFacet.subscriptionPreview;
            if (null != subscriptionPreview) {
              subscriptionTrialId = subscriptionPreview.subscriptionTrialId;
            }
          }
        }
        tmp6 = trialOffer.trial_id === subscriptionTrialId;
      }
      tmp5 = tmp6;
    }
    tmp = tmp5;
    const obj = importDefault(3776);
  }
  return tmp;
}
function Header(arg0) {
  let discountOffer;
  let isPaymentSuccess;
  let orderRecord;
  let orderRequired;
  let premiumType;
  let selectedPremiumType;
  let trialOffer;
  ({ premiumType, isPaymentSuccess, trialOffer } = arg0);
  ({ selectedPremiumType, discountOffer } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  ({ orderRequired, orderRecord } = useNativeCheckoutStore((orderRequired) => ({ orderRequired: orderRequired.orderRequired, orderRecord: orderRequired.orderRecord })));
  if (null == premiumType) {
    if (!isPaymentSuccess) {
      let obj = { style: tmp.headerText, variant: "text-md/semibold", color: "text-default", accessibilityRole: "header" };
      const intl = require(1212) /* getSystemLocale */.intl;
      obj.children = intl.string(require(1212) /* getSystemLocale */.t.vLz3Zs);
      return callback3(require(4126) /* Text */.Text, obj);
    }
  }
  if (isPaymentSuccess) {
    premiumType = selectedPremiumType;
  }
  importDefault(44)(null != premiumType, "If isPaymentSuccess is true, a value must be given for selectedPremiumType. Or premiumType must be given.");
  obj = { trialOffer, premiumType, orderRequired, order: orderRecord };
  let tmp7 = null;
  if (hasRelevantTrialOfferForOrder(obj)) {
    tmp7 = trialOffer;
  }
  obj = { premiumType, trialOffer: tmp7, discountOffer };
  return callback3(importDefault(6670), obj);
}
function PlanOptionBadgeComponent(backgroundColorType) {
  let str = backgroundColorType.backgroundColorType;
  if (str === undefined) {
    str = "green";
  }
  const tmp = _createForOfIteratorHelperLoose();
  let obj = {};
  const items = [tmp.planOptionDiscount, ];
  let prop = null;
  if ("white" === str) {
    prop = tmp.planOptionDiscountWhite;
  }
  items[1] = prop;
  obj.style = items;
  obj = { style: tmp.planOptionDiscountText, variant: "text-xs/bold" };
  let str2 = "text-overlay-light";
  if ("white" === str) {
    str2 = "text-overlay-dark";
  }
  obj.color = str2;
  obj.children = backgroundColorType.text;
  obj.children = closure_34(require(4126) /* Text */.Text, obj);
  return closure_34(closure_8, obj);
}
function renderPlanOptionBadge(arg0) {
  let customBadgeComponent;
  let discount;
  ({ customBadgeComponent, discount } = arg0);
  if (null == customBadgeComponent) {
    if (tmp3) {
      customBadgeComponent = null;
    } else if (tmp2) {
      let obj = {};
      const intl2 = require(1212) /* getSystemLocale */.intl;
      obj.text = intl2.string(require(1212) /* getSystemLocale */.t.iQTfWx);
      let tmp4 = callback3(PlanOptionBadgeComponent, obj);
    } else {
      tmp4 = null;
      if (null != discount) {
        obj = {};
        const intl = require(1212) /* getSystemLocale */.intl;
        obj = { discount: require(1827) /* shortenAndLocalizeNumber */.formatPercent(tmp, discount / 100) };
        obj.text = intl.format(require(1212) /* getSystemLocale */.t.IAybsG, obj);
        tmp4 = callback3(PlanOptionBadgeComponent, obj);
        const obj3 = require(1827) /* shortenAndLocalizeNumber */;
      }
    }
  }
  return customBadgeComponent;
}
function PlanOption(premiumItem) {
  let customBadgeComponent;
  let discountOffer;
  let discountedPriceString;
  let optionNeedsProductNameLabel;
  let selectedProductId;
  let trialOffer;
  let userIsEligibleForBogoPromotion;
  premiumItem = premiumItem.premiumItem;
  ({ discountOffer, discountedPriceString, userIsEligibleForBogoPromotion } = premiumItem);
  ({ selectedProductId, optionNeedsProductNameLabel, customBadgeComponent, trialOffer } = premiumItem);
  if (userIsEligibleForBogoPromotion === undefined) {
    userIsEligibleForBogoPromotion = false;
  }
  let first;
  let dependencyMap;
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = callback2(React.useState(0), 2);
  first = tmp2[0];
  let num = 1;
  dependencyMap = tmp2[1];
  let obj = premiumItem(566);
  const items = [closure_12];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_12.getProduct(premiumItem.productId));
  let obj1 = premiumItem(7118);
  const checkoutPlanPriceString = obj1.useCheckoutPlanPriceString(premiumItem.productId, stateFromStores);
  const tmp6 = useNativeCheckoutStore((orderRequired) => ({ orderRequired: orderRequired.orderRequired, orderRecord: orderRequired.orderRecord }));
  obj = { trialOffer, premiumType: premiumItem.premiumTier, orderRequired: tmp6.orderRequired, order: tmp6.orderRecord };
  const tmp7 = hasRelevantTrialOfferForOrder(obj);
  let obj3 = premiumItem(3776);
  const tierDisplayNameByPlanId = obj3.getTierDisplayNameByPlanId(premiumItem.basePlanId);
  let obj4 = first(3776);
  const intervalString = obj4.getIntervalString(premiumItem.interval, false);
  let tmp11 = tmp7;
  if (!tmp7) {
    tmp11 = null != discountOffer;
  }
  if (!tmp11) {
    let tmp13 = userIsEligibleForBogoPromotion;
    if (userIsEligibleForBogoPromotion) {
      tmp13 = tmp10;
    }
    tmp11 = tmp13;
  }
  let tmp14 = null;
  if (!tmp11) {
    tmp14 = table[premiumItem.basePlanId];
  }
  if (userIsEligibleForBogoPromotion) {
    userIsEligibleForBogoPromotion = premiumItem.basePlanId === closure_20.PREMIUM_MONTH_TIER_2;
  }
  if (null == stateFromStores) {
    let USD = constants3.USD;
  } else {
    if (str.toLowerCase() in constants3) {
      USD = stateFromStores.currencyCode.toLowerCase();
      const str2 = stateFromStores.currencyCode;
    } else {
      USD = constants3.USD;
    }
    str = stateFromStores.currencyCode;
  }
  let formatRateResult = null;
  if (null != discountedPriceString) {
    let obj5 = premiumItem(5618);
    formatRateResult = obj5.formatRate(discountedPriceString, tmp21.interval, tmp21.intervalCount);
  }
  if (tmp7) {
    const intl = premiumItem(1212).intl;
    obj = {};
    let obj7 = premiumItem(5618);
    obj.price = obj7.formatPrice(0, USD, { minimumFractionDigits: 0, maximumFractionDigits: 0 });
    let formatToPlainStringResult = intl.formatToPlainString(premiumItem(1212).t.hXcaLT, obj);
  } else {
    formatToPlainStringResult = discountedPriceString;
    if (null == discountedPriceString) {
      let str3 = "$...";
      if (null != checkoutPlanPriceString) {
        str3 = checkoutPlanPriceString;
      }
      formatToPlainStringResult = str3;
    }
  }
  let obj8 = premiumItem(5618);
  let str4 = "$...";
  let str5 = "$...";
  if (null != checkoutPlanPriceString) {
    str5 = checkoutPlanPriceString;
  }
  if (first > 0) {
    const items1 = [tmp.planOptionPriceContainer, ];
    obj1 = {};
    const obj2 = { translateY: first / 2 };
    const items2 = [obj2];
    obj1.transform = items2;
    items1[1] = obj1;
    let planOptionPriceContainer = items1;
  } else {
    planOptionPriceContainer = tmp.planOptionPriceContainer;
  }
  obj3 = { style: tmp.planOptionContainer };
  obj4 = {};
  if (null != discountOffer) {
    let str6 = "text-lg/medium";
  } else {
    str6 = "text-md/medium";
  }
  obj4.variant = str6;
  let str7 = "interactive-text-default";
  let str8 = "interactive-text-default";
  if (premiumItem.productId === selectedProductId) {
    str8 = "interactive-text-active";
  }
  obj4.color = str8;
  let combined = intervalString;
  if (optionNeedsProductNameLabel) {
    const _HermesInternal = HermesInternal;
    combined = "" + tierDisplayNameByPlanId + " " + intervalString;
  }
  obj4.children = combined;
  const items3 = [closure_34(premiumItem(4126).Text, obj4), ];
  obj5 = { style: planOptionPriceContainer };
  const obj6 = { style: tmp.planOptionDiscountContainer };
  obj7 = { userLocale: locale.locale, discount: tmp14, hideDefaultDiscountBadges: tmp11, customBadgeComponent, showBogoPromotionBadge: userIsEligibleForBogoPromotion };
  const items4 = [renderPlanOptionBadge(obj7), ];
  obj8 = { style: tmp.priceText, variant: "text-lg/medium" };
  let str11 = str7;
  if (premiumItem.productId === selectedProductId) {
    str11 = "interactive-text-active";
  }
  obj8.color = str11;
  obj8.children = formatToPlainStringResult;
  items4[1] = closure_34(premiumItem(4126).Text, obj8);
  obj6.children = items4;
  const items5 = [closure_35(closure_8, obj6), , ];
  if (!tmp7) {
    items5[1] = null;
    const obj9 = {
      style: tmp.discountSubTextContainer,
      onLayout(nativeEvent) {
          const height = nativeEvent.nativeEvent.layout.height;
          if (height !== first) {
            callback(height);
          }
        }
    };
    let tmp53Result = null;
    if (null != formatRateResult) {
      tmp53Result = null;
      if (null != discountOffer) {
        tmp53Result = null;
        if (null == premiumItem.selectedPremiumType) {
          const obj10 = { variant: "text-sm/medium" };
          let str15 = str7;
          if (tmp17) {
            str15 = "text-default";
          }
          obj10.color = str15;
          const intl4 = premiumItem(1212).intl;
          const obj11 = { discountedPrice: formatRateResult };
          const discount = discountOffer.discount;
          let userUsageLimit;
          if (null != discount) {
            userUsageLimit = discount.userUsageLimit;
          }
          let tmp59 = num;
          if (null != userUsageLimit) {
            tmp59 = userUsageLimit;
          }
          obj11.numMonths = tmp59;
          obj10.children = intl4.formatToPlainString(premiumItem(1212).t["02Gmgm"], obj11);
          tmp53Result = closure_34(premiumItem(4126).Text, obj10);
          const tmp53 = closure_34;
        }
      }
    }
    const items6 = [tmp53Result, ];
    let tmp61Result = null != discountedPriceString && null != discountOffer;
    if (tmp61Result) {
      const obj12 = { variant: "text-sm/medium" };
      if (tmp17) {
        str7 = "text-default";
      }
      obj12.color = str7;
      const intl5 = premiumItem(1212).intl;
      const obj13 = { regularPrice: formatRateResult1 };
      const discount2 = discountOffer.discount;
      let userUsageLimit1;
      if (null != discount2) {
        userUsageLimit1 = discount2.userUsageLimit;
      }
      if (null != userUsageLimit1) {
        num = userUsageLimit1;
      }
      obj13.numMonths = num;
      obj12.children = intl5.formatToPlainString(premiumItem(1212).t["vZk+c/"], obj13);
      tmp61Result = closure_34(premiumItem(4126).Text, obj12);
      const tmp61 = closure_34;
    }
    items6[1] = tmp61Result;
    obj9.children = items6;
    items5[2] = closure_35(closure_8, obj9);
    obj5.children = items5;
    items3[1] = closure_35(closure_8, obj5);
    obj3.children = items3;
    return closure_35(closure_8, obj3);
  } else {
    const obj14 = { variant: "text-xs/medium" };
    let str13 = str7;
    if (tmp17) {
      str13 = "text-default";
    }
    obj14.color = str13;
    if (premiumItem.interval === constants.YEAR) {
      const intl3 = premiumItem(1212).intl;
      const obj15 = {};
      if (null != checkoutPlanPriceString) {
        str4 = checkoutPlanPriceString;
      }
      obj15.price = str4;
      let formatToPlainStringResult1 = intl3.formatToPlainString(premiumItem(1212).t.ECT4A5, obj15);
    } else {
      const intl2 = premiumItem(1212).intl;
      const obj16 = {};
      let tmp45 = str4;
      if (null != checkoutPlanPriceString) {
        tmp45 = checkoutPlanPriceString;
      }
      obj16.price = tmp45;
      formatToPlainStringResult1 = intl2.formatToPlainString(premiumItem(1212).t.v9QeON, obj16);
    }
    obj14.children = formatToPlainStringResult1;
    closure_34(premiumItem(4126).Text, obj14);
    const tmp39 = closure_34;
  }
}
function getPlanOptions(arr) {
  let closure_0 = arg1;
  let closure_1 = arg2;
  let closure_2 = arg3;
  let closure_3 = arg4;
  let useTheme = arg5;
  let context = arg6;
  let findLinks = arg7;
  let useGetDiscountOffer = new Set(arr.map((premiumTier) => premiumTier.premiumTier)).size > 1;
  return arr.map((premiumItem) => {
    let obj = {};
    obj = { premiumItem, selectedProductId: closure_0, optionNeedsProductNameLabel: useGetDiscountOffer, trialOffer: closure_1, discountOffer: closure_2 };
    let tmp3 = null;
    if (premiumItem.productId === closure_3) {
      tmp3 = useTheme;
    }
    obj.discountedPriceString = tmp3;
    obj.userIsEligibleForBogoPromotion = context;
    obj.selectedPremiumType = findLinks;
    obj.name = outer1_34(outer1_42, obj);
    obj.value = premiumItem.productId;
    return obj;
  });
}
function PremiumPlanSelectionActionSheetCTA(isPaymentSuccess) {
  let require;
  let shouldUseMobileWebRedirectCheckout;
  ({ onStartPayment: require, shouldUseMobileWebRedirectCheckout } = isPaymentSuccess);
  if (isPaymentSuccess.isPaymentSuccess) {
    let obj = { text: null, size: "md", grow: true };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.text = intl.string(require(1212) /* getSystemLocale */.t.WAI6xu);
    obj.onPress = tmp;
    return callback3(require(4543) /* Button */.Button, obj);
  } else {
    const tmp5 = shouldUseMobileWebRedirectCheckout ? { size: "lg", variant: "primary" } : { size: "md", variant: "active" };
    obj = { text: tmp2 };
    const merged = Object.assign(tmp5);
    obj["grow"] = true;
    obj["onPress"] = function onPress() {
      return callback({ shouldRedirectToMobileWeb: shouldUseMobileWebRedirectCheckout });
    };
    obj["loading"] = tmp4;
    obj["disabled"] = tmp3;
    return callback3(require(4543) /* Button */.Button, obj);
  }
}
function PremiumPlanSelectionActionSheet(premiumItems) {
  let analyticsLocation;
  let analyticsLocations;
  let c13;
  let c19;
  let closure_3;
  let discountedPriceString;
  let initialSelectedItem;
  let isPatchOrderLoading;
  let onPaymentSuccess;
  let orderRequired;
  let premiumType;
  let require;
  ({ applicationId: require, analyticsLocation, premiumType } = premiumItems);
  premiumItems = premiumItems.premiumItems;
  ({ userIsEligibleForBogoPromotion: closure_3, onPaymentSuccess } = premiumItems);
  const onPaymentDismiss = premiumItems.onPaymentDismiss;
  let flag = premiumItems.showFormTitle;
  ({ analyticsLocations, initialSelectedItem } = premiumItems);
  if (flag === undefined) {
    flag = true;
  }
  let React;
  let c8;
  let stateFromStores;
  let handlePremiumPurchase;
  let _isNativeReflectConstruct;
  let c12;
  c13 = undefined;
  orderRequired = undefined;
  isPatchOrderLoading = undefined;
  let premiumTrialOffer;
  let premiumDiscountOffer;
  let c18;
  c19 = undefined;
  discountedPriceString = undefined;
  let first;
  let closure_22;
  let closure_23;
  let analyticsLocations2;
  let constants2;
  let memo;
  let basePurchaseFlowAnalyticsFields;
  let basePlanId;
  let c29;
  let memo1;
  function onClose() {
    premiumTrialOffer();
    premiumType(premiumItems[41]).hideActionSheet();
  }
  async function _onPlanSelectionChange(arg0, arg1) {
    let closure_0 = arg0;
    const found = outer2_2.find((productId) => productId.productId === closure_0);
    if (null != found) {
      if (found !== outer2_21) {
        const subscriptionItemsForProduct = outer3_0(premiumItems[48]).getSubscriptionItemsForProduct(arg0);
        outer2_22(found);
        let obj = outer3_0(premiumItems[48]);
      }
    }
  }
  function getActivatedImageSource() {
    let premiumTier;
    if (null != first) {
      premiumTier = first.premiumTier;
    }
    if (_undefined3.TIER_0 === premiumTier) {
      if (obj3.isThemeDark(_isNativeReflectConstruct)) {
        let tmp19Result = tmp19(tmp20[50]);
      } else {
        tmp19Result = tmp19(tmp20[51]);
      }
      return tmp19Result;
    } else if (_undefined3.TIER_1 === premiumTier) {
      if (obj2.isThemeDark(_isNativeReflectConstruct)) {
        let tmp13Result = tmp13(tmp14[52]);
      } else {
        tmp13Result = tmp13(tmp14[53]);
      }
      return tmp13Result;
    } else if (_undefined3.TIER_2 === premiumTier) {
      if (obj.isThemeDark(_isNativeReflectConstruct)) {
        let tmp7Result = tmp7(tmp8[54]);
      } else {
        tmp7Result = tmp7(tmp8[55]);
      }
      return tmp7Result;
    }
  }
  function getActivatedText(Text, arg1) {
    let premiumTier;
    if (null != first) {
      premiumTier = first.premiumTier;
    }
    if (_undefined3.TIER_0 === premiumTier) {
      const intl3 = outer1_0(premiumItems[19]).intl;
      return intl3.string(outer1_0(premiumItems[19]).t["6WWrVM"]);
    } else if (_undefined3.TIER_1 === premiumTier) {
      const intl2 = outer1_0(premiumItems[19]).intl;
      return intl2.string(outer1_0(premiumItems[19]).t.LAAgsy);
    } else if (_undefined3.TIER_2 === premiumTier) {
      const intl = outer1_0(premiumItems[19]).intl;
      return intl.string(outer1_0(premiumItems[19]).t.I7xNzI);
    }
  }
  let tmp = _createForOfIteratorHelperLoose();
  React = tmp;
  const tmp2 = isPatchOrderLoading((isPaymentSuccess) => isPaymentSuccess.isPaymentSuccess);
  c8 = tmp2;
  let obj = require(premiumItems[23]);
  let items = [c12];
  stateFromStores = obj.useStateFromStores(items, () => _undefined2.isBusy());
  let obj1 = require(premiumItems[27]);
  handlePremiumPurchase = obj1.useHandlePremiumPurchase();
  let obj2 = require(premiumItems[28]);
  const isPaymentsBlocked = obj2.useIsPaymentsBlocked();
  _isNativeReflectConstruct = premiumType(premiumItems[29])();
  const tmp7 = handlePremiumPurchase((orderRecord) => orderRecord.orderRecord);
  c12 = tmp7;
  let tmp3 = isPatchOrderLoading((mobileWebRedirectCheckoutStatus) => mobileWebRedirectCheckoutStatus.mobileWebRedirectCheckoutStatus);
  ({ patchOrderLineItems: c13, isPatchOrderLoading, orderRequired } = handlePremiumPurchase((patchOrderLineItems) => ({ patchOrderLineItems: patchOrderLineItems.patchOrderLineItems, isPatchOrderLoading: patchOrderLineItems.isPatchOrderLoading, orderRequired: patchOrderLineItems.orderRequired })));
  if (!isPatchOrderLoading) {
    isPatchOrderLoading = handlePremiumPurchase((isCreateOrderLoading) => isCreateOrderLoading.isCreateOrderLoading);
  }
  let obj3 = require(premiumItems[30]);
  premiumTrialOffer = obj3.usePremiumTrialOffer();
  let obj4 = require(premiumItems[31]);
  premiumDiscountOffer = obj4.usePremiumDiscountOffer();
  let tmp11 = hasRelevantTrialOfferForOrder({ trialOffer: premiumTrialOffer, premiumType, orderRequired, order: tmp7 });
  c18 = tmp11;
  let obj5 = require(premiumItems[32]);
  const discountedPremiumProductInfo = obj5.useDiscountedPremiumProductInfo(premiumDiscountOffer, premiumItems);
  ({ discountedProduct: c19, discountedPriceString } = discountedPremiumProductInfo);
  const tmp13 = flag(React.useState(initialSelectedItem), 2);
  first = tmp13[0];
  closure_22 = tmp13[1];
  let obj6 = require(premiumItems[23]);
  let items1 = [c12];
  closure_23 = obj6.useStateFromStores(items1, () => {
    let product = null;
    if (null != first) {
      product = _undefined2.getProduct(first.productId);
    }
    return product;
  });
  let obj7 = require(premiumItems[33]);
  const tmp8 = handlePremiumPurchase((patchOrderLineItems) => ({ patchOrderLineItems: patchOrderLineItems.patchOrderLineItems, isPatchOrderLoading: patchOrderLineItems.isPatchOrderLoading, orderRequired: patchOrderLineItems.orderRequired }));
  analyticsLocations2 = premiumType(premiumItems[34])(analyticsLocations, premiumType(premiumItems[35]).PREMIUM_PAYMENT_ACTION_SHEET).analyticsLocations;
  const tmp16 = premiumType(premiumItems[36])(() => outer1_0(premiumItems[37]).getNewAnalyticsLoadId());
  constants2 = tmp16;
  let items2 = [premiumType];
  memo = React.useMemo(() => {
    const obj = outer1_0(premiumItems[17]);
    return obj.castPremiumSubscriptionAsSkuId(premiumType(premiumItems[17]).getSkuIdForPremiumType(premiumType));
  }, items2);
  let obj8 = require(premiumItems[37]);
  obj = { analyticsLoadId: tmp16 };
  obj = { object: constants2.BUTTON_CTA, object_type: memo.BUY };
  let merged = Object.assign(analyticsLocation);
  obj.analyticsLocation = obj;
  obj.analyticsLocations = analyticsLocations2;
  basePurchaseFlowAnalyticsFields = obj8.getBasePurchaseFlowAnalyticsFields(obj);
  basePlanId = null;
  if (null != first) {
    basePlanId = first.basePlanId;
  }
  const tmp15 = premiumType(premiumItems[34]);
  let result = require(premiumItems[38]).isMobileWebRedirectCheckoutEnabled();
  c29 = result;
  premiumType(premiumItems[39])(() => {
    let obj = outer1_0(premiumItems[40]);
    obj = {};
    const merged = Object.assign(basePurchaseFlowAnalyticsFields);
    obj["application_id"] = closure_0;
    obj["subscription_plan_id"] = basePlanId;
    obj["sku_id"] = memo;
    let customCheckoutFlowForAnalytics;
    if (c29) {
      customCheckoutFlowForAnalytics = outer1_0(premiumItems[38]).getCustomCheckoutFlowForAnalytics();
      const obj3 = outer1_0(premiumItems[38]);
    }
    obj["custom_checkout_flow"] = customCheckoutFlowForAnalytics;
    const result = obj.trackPaymentFlowStartedAnalyticsAndCTP(obj);
  });
  let items3 = [memo, basePurchaseFlowAnalyticsFields, tmp16, analyticsLocations2, handlePremiumPurchase, result, onPaymentDismiss, onPaymentSuccess, tmp7, first];
  let items4 = [tmp11, result];
  const callback = React.useCallback(onPaymentDismiss(async () => {
    const iter = (function*() {
      let tmp = arg0;
      if (tmp === undefined) {
        let obj = { shouldRedirectToMobileWeb: false };
        tmp = obj;
      }
      let paymentFlowStepAnalyticsFields;
      yield undefined;
      premiumType(premiumItems[20])(null != outer1_21, "cannot start payment without a selectedItem");
      let shouldRedirectToMobileWeb = outer1_29;
      if (outer1_29) {
        shouldRedirectToMobileWeb = tmp.shouldRedirectToMobileWeb;
      }
      const PaymentFlowStep = outer2_0(premiumItems[37]).PaymentFlowStep;
      let obj1 = outer2_0(premiumItems[37]);
      obj = { from_step: outer2_0(premiumItems[37]).PaymentFlowStep.PLAN_SELECT, to_step: shouldRedirectToMobileWeb ? PaymentFlowStep.MOBILE_WEB_REDIRECT_CHECKOUT : PaymentFlowStep.EXTERNAL_PAYMENT, subscription_plan_gateway_plan_id: outer1_21.productId, sku_id: outer1_26 };
      paymentFlowStepAnalyticsFields = obj1.getPaymentFlowStepAnalyticsFields(outer1_27, obj);
      if (!shouldRedirectToMobileWeb) {
        premiumType(premiumItems[42]).track(analyticsLocations2.PAYMENT_FLOW_STEP, paymentFlowStepAnalyticsFields);
        const obj4 = premiumType(premiumItems[42]);
      }
      obj = { productId: outer1_21.productId, onPaymentSuccess: outer1_4, onPaymentDismiss: outer1_5 };
      callback(obj);
      if (shouldRedirectToMobileWeb) {
        const obj7 = outer2_0(premiumItems[43]);
        obj1 = { planId: outer1_21.basePlanId, isGift: false, loadId: outer1_25 };
        const result = obj7.goToStandalonePremiumCheckoutFromMobileApp("premium_plan_selection_action_sheet", obj1, () => {
          if (obj.isMetaQuest()) {
            outer2_31();
          } else {
            orderRequired("in_mobile_web");
            premiumType(premiumItems[42]).track(analyticsLocations2.PAYMENT_FLOW_STEP, paymentFlowStepAnalyticsFields);
            const obj2 = premiumType(premiumItems[42]);
          }
        }, () => {
          let obj = premiumType(premiumItems[45]);
          obj = {};
          const intl = outer3_0(premiumItems[19]).intl;
          obj.title = intl.string(outer3_0(premiumItems[19]).t.NrBVjw);
          const intl2 = outer3_0(premiumItems[19]).intl;
          obj.body = intl2.string(outer3_0(premiumItems[19]).t["gD+grx"]);
          obj.hideActionSheet = true;
          obj.show(obj);
        });
      } else {
        let obj2 = { productId: outer1_21.productId, analyticsLocation: outer1_27.location, analyticsLoadId: outer1_25, analyticsLocations: outer1_24 };
        let id;
        if (null != outer1_12) {
          id = outer1_12.id;
        }
        obj2.orderId = id;
        yield outer1_10(obj2);
        const tmp11 = outer1_10;
      }
    })();
    iter.next();
    return iter;
  }), items3);
  memo1 = React.useMemo(() => {
    if (c29) {
      const intl3 = outer1_0(premiumItems[19]).intl;
      let stringResult = intl3.string(outer1_0(premiumItems[19]).t.rylrdY);
    } else if (c18) {
      const tmp2Result = tmp2(tmp3[56]);
      const intl2 = outer1_0(premiumItems[19]).intl;
      const string = intl2.string;
      let rKD72m = outer1_0(premiumItems[19]).t;
      if (isAndroidResult) {
        rKD72m = rKD72m.rKD72m;
        let stringResult1 = string(rKD72m);
      } else {
        stringResult1 = string(rKD72m.bboTul);
      }
      isAndroidResult = tmp2(tmp3[56]).isAndroid();
    } else {
      const intl = tmp2(tmp3[19]).intl;
      stringResult = intl.string(tmp2(tmp3[19]).t.nIlrxd);
    }
    return stringResult;
  }, items4);
  let items5 = [tmp2, first, tmp11, discountedPriceString, memo1, tmp.legalDisclaimerText];
  const memo2 = React.useMemo(() => {
    if (c8) {
      return null;
    } else {
      let interval;
      if (null != first) {
        interval = first.interval;
      }
      if (null == interval) {
        return null;
      } else if (c18) {
        let obj = { style: _undefined.legalDisclaimerText, variant: "text-xxs/medium" };
        const intl3 = outer1_0(premiumItems[19]).intl;
        const obj10 = outer1_0(premiumItems[56]);
        const tmp21 = getActivatedText;
        const t = outer1_0(premiumItems[19]).t;
        obj = { paidURL: basePurchaseFlowAnalyticsFields.PAID_TERMS };
        const isAndroidResult = outer1_0(premiumItems[56]).isAndroid();
        const tmp28 = outer1_0(premiumItems[56]).isAndroid() ? t.tINI9V : t.ZWXtAj;
        obj.interval = premiumType(premiumItems[17]).getIntervalStringAsNoun(interval);
        const obj12 = premiumType(premiumItems[17]);
        obj.cancelURL = premiumType(premiumItems[58]).getArticleURL(basePlanId.PREMIUM_DETAILS_CANCEL_SUB);
        obj.children = intl3.format(tmp28, obj);
        return tmp21(outer1_0(premiumItems[57]).TextWithIOSLinkWorkaround, obj);
      } else if (null != discountedPriceString) {
        const obj1 = { style: _undefined.legalDisclaimerText, variant: "text-xxs/medium" };
        const intl2 = outer1_0(premiumItems[19]).intl;
        let obj2 = { buttonText: memo1, interval: premiumType(premiumItems[17]).formatInterval(interval) };
        const obj6 = premiumType(premiumItems[17]);
        obj2.cancelSubscriptionArticle = premiumType(premiumItems[58]).getArticleURL(basePlanId.PREMIUM_DETAILS_CANCEL_SUB);
        const obj7 = premiumType(premiumItems[58]);
        obj2.paidServiceTermsArticle = premiumType(premiumItems[58]).getArticleURL(basePlanId.PAID_TERMS);
        obj1.children = intl2.format(outer1_0(premiumItems[19]).t["3uC7vj"], obj2);
        return getActivatedText(outer1_0(premiumItems[57]).TextWithIOSLinkWorkaround, obj1);
      } else {
        const obj14 = outer1_0(premiumItems[56]);
        const t2 = outer1_0(premiumItems[19]).t;
        const isAndroidResult1 = outer1_0(premiumItems[56]).isAndroid();
        obj = { style: _undefined.legalDisclaimerText, variant: "text-xxs/medium" };
        const intl = outer1_0(premiumItems[19]).intl;
        const obj3 = { paidURL: basePurchaseFlowAnalyticsFields.PAID_TERMS };
        obj2 = premiumType(premiumItems[17]);
        obj3.interval = obj2.getIntervalStringAsNoun(interval);
        obj3.ctaText = memo1;
        obj.children = intl.format(outer1_0(premiumItems[56]).isAndroid() ? t2.COObWR : t2["7wpqfj"], obj3);
        return getActivatedText(outer1_0(premiumItems[57]).TextWithIOSLinkWorkaround, obj);
      }
    }
  }, items5);
  obj1 = { ref: obj7.useBottomSheetRef().bottomSheetRef, handleDisabled: true, onDismiss: premiumTrialOffer, startExpanded: true };
  if (isPaymentsBlocked) {
    obj2 = { style: tmp.blockedPaymentContainer };
    const items6 = [getActivatedText(premiumType(premiumItems[60]), {}), ];
    obj3 = { variant: "floating", onPress: onClose };
    items6[1] = getActivatedText(require(premiumItems[61]).ActionSheetHeaderBar, obj3);
    obj2.children = items6;
    let tmp27Result = tmp27(c8, obj2);
  } else {
    obj4 = {};
    obj5 = { premiumType, isPaymentSuccess: tmp2 };
    let premiumTier;
    if (null != first) {
      premiumTier = first.premiumTier;
    }
    obj5.selectedPremiumType = premiumTier;
    obj5.trialOffer = premiumTrialOffer;
    let tmp32 = null;
    if (null != discountedPriceString) {
      tmp32 = premiumDiscountOffer;
    }
    obj5.discountOffer = tmp32;
    const items7 = [getActivatedText(Header, obj5), , ];
    obj6 = { style: tmp.body };
    if ("in_mobile_web" === tmp3) {
      obj7 = { size: "large", style: tmp.loadingIndicator };
      let tmp35Result = getActivatedText(stateFromStores, obj7);
    } else {
      obj8 = {};
      const items8 = [
        (function renderContent() {
              if (c8) {
                let obj = { style: _undefined.contentActivated };
                obj = { source: getActivatedImageSource() };
                const items = [getActivatedText(premiumType(premiumItems[62]), obj), ];
                let obj1 = { style: _undefined.contentActivatedText, variant: "text-md/semibold", children: getActivatedText() };
                items[1] = getActivatedText(outer1_0(premiumItems[18]).Text, obj1);
                obj.children = items;
                return outer1_35(c8, obj);
              } else {
                obj = {};
                obj1 = outer1_0(premiumItems[56]);
                obj.convertToMajorUnits = obj1.isAndroid();
                let tmp3 = flag;
                if (flag) {
                  tmp3 = !c18;
                }
                const obj2 = { style: _undefined.contentSelectPlan };
                if (c18) {
                  const obj3 = { variant: "text-md/normal", color: "text-strong", style: _undefined.trialDisclaimer };
                  const intl2 = outer1_0(premiumItems[19]).intl;
                  obj3.children = intl2.string(outer1_0(premiumItems[19]).t.u95Dt4);
                  let tmp11 = getActivatedText(outer1_0(premiumItems[18]).Text, obj3);
                } else {
                  tmp11 = null;
                  if (null != discountedPriceString) {
                    tmp11 = null;
                    if (null != _undefined4) {
                      tmp11 = null;
                      if (null != premiumType) {
                        const obj4 = {};
                        const obj5 = { variant: "text-md/normal", color: "text-strong", style: _undefined.discountDisclaimer };
                        const intl = outer1_0(premiumItems[19]).intl;
                        const obj6 = { regularPrice: _undefined4.priceString, discountedPrice: discountedPriceString };
                        obj5.children = intl.format(outer1_0(premiumItems[19]).t.yBn7uz, obj6);
                        const items1 = [getActivatedText(outer1_0(premiumItems[18]).Text, obj5), ];
                        const obj7 = {};
                        const items2 = [_undefined.divider, _undefined.offerDividerMargin];
                        obj7.style = items2;
                        items1[1] = getActivatedText(c8, obj7);
                        obj4.children = items1;
                        tmp11 = outer1_35(c8, obj4);
                      }
                    }
                  }
                }
                const items3 = [tmp11, ];
                const obj8 = {};
                let stringResult;
                if (tmp3) {
                  const intl3 = outer1_0(premiumItems[19]).intl;
                  stringResult = intl3.string(outer1_0(premiumItems[19]).t.u95Dt4);
                }
                obj8.title = stringResult;
                obj8.titleStyleType = _undefined5.NO_BORDER_OR_MARGIN;
                obj8.titleViewStyle = _undefined.formTitle;
                const items4 = [_undefined.formSectionBody, ];
                let formSectionBodyWithNoTitle = !tmp3;
                if (formSectionBodyWithNoTitle) {
                  formSectionBodyWithNoTitle = _undefined.formSectionBodyWithNoTitle;
                }
                items4[1] = formSectionBodyWithNoTitle;
                obj8.sectionBodyStyle = items4;
                obj8.inset = true;
                let tmp43 = null != closure_23;
                if (tmp43) {
                  tmp43 = "HR" === closure_23.countryCode;
                }
                if (tmp43) {
                  tmp43 = closure_23.currencyCode.toLowerCase() === _onPlanSelectionChange.EUR;
                  const str2 = closure_23.currencyCode;
                }
                if (tmp43) {
                  const obj9 = {};
                  const intl4 = outer1_0(premiumItems[19]).intl;
                  const obj10 = {};
                  let obj11 = outer1_0(premiumItems[25]);
                  obj10.kunaPriceWithCurrency = obj11.formatPrice(closure_23.price * memo1, _onPlanSelectionChange.HRK, obj);
                  obj9.message = intl4.formatToPlainString(outer1_0(premiumItems[19]).t["9hnZoK"], obj10);
                  tmp43 = getActivatedText(premiumType(premiumItems[64]), obj9);
                  const tmp50 = premiumType(premiumItems[64]);
                }
                const items5 = [tmp43, ];
                obj11 = {};
                let productId;
                if (null != first) {
                  productId = first.productId;
                }
                obj11.value = productId;
                let productId1;
                if (null != first) {
                  productId1 = first.productId;
                }
                let identifier;
                if (null != _undefined4) {
                  identifier = _undefined4.identifier;
                }
                obj11.options = outer1_43(premiumItems, productId1, premiumTrialOffer, premiumDiscountOffer, identifier, discountedPriceString, closure_3, premiumType);
                obj11.onChange = function onChange(value) {
                  return (function onPlanSelectionChange(value) {
                    return outer2_32(...arguments);
                  })(value.value);
                };
                obj11.withDividers = false;
                obj11.style = _undefined.planOptionRowContainer;
                let tmp80 = stateFromStores;
                if (!stateFromStores) {
                  tmp80 = isPatchOrderLoading;
                }
                obj11.disabled = tmp80;
                obj11.indicatorLeft = true;
                items5[1] = getActivatedText(outer1_0(premiumItems[65]).RadioGroup, obj11);
                obj8.children = items5;
                items3[1] = outer1_35(premiumType(premiumItems[63]), obj8);
                obj2.children = items3;
                return outer1_35(c8, obj2);
              }
            })(),

      ];
      let obj9 = { isPaymentSuccess: tmp2, onClose, ctaText: memo1, onStartPayment: callback, shouldUseMobileWebRedirectCheckout: result };
      let tmp39 = stateFromStores;
      if (!stateFromStores) {
        tmp39 = isPatchOrderLoading;
      }
      obj9.disabled = tmp39;
      if (!stateFromStores) {
        stateFromStores = isPatchOrderLoading;
      }
      obj9.loading = stateFromStores;
      items8[1] = getActivatedText(PremiumPlanSelectionActionSheetCTA, obj9);
      obj8.children = items8;
      tmp35Result = closure_35(closure_36, obj8);
      const tmp35 = closure_35;
      const tmp36 = closure_36;
      const tmp37 = getActivatedText;
      const tmp38 = PremiumPlanSelectionActionSheetCTA;
    }
    const items9 = [tmp35Result, !result && memo2];
    obj6.children = items9;
    items7[1] = closure_35(c8, obj6);
    let obj10 = { variant: "floating", onPress: onClose };
    items7[2] = getActivatedText(require(premiumItems[61]).ActionSheetHeaderBar, obj10);
    obj4.children = items7;
    tmp27Result = tmp27(closure_36, obj4);
    let tmp28 = closure_36;
    const tmp29 = getActivatedText;
    const tmp30 = Header;
    const tmp33 = closure_35;
    const tmp34 = c8;
  }
  obj1.children = tmp27Result;
  return getActivatedText(require(premiumItems[59]).BottomSheet, obj1);
}
function getItemsByPremiumTypePredicate(arg0) {
  let closure_0 = arg0;
  return (additionalPlans) => {
    let numPremiumGuild;
    let premiumTier;
    let tmp = 0 === additionalPlans.additionalPlans.length;
    ({ numPremiumGuild, premiumTier } = additionalPlans);
    if (tmp) {
      tmp = !additionalPlans.isDeprecated;
    }
    if (tmp) {
      tmp = 0 === numPremiumGuild;
    }
    if (tmp) {
      tmp = premiumTier === closure_0;
    }
    return tmp;
  };
}
let closure_3 = ["predicate", "initialSelectedCriteria", "sortFn"];
({ View: closure_8, ActivityIndicator: closure_9 } = get_ActivityIndicator);
({ setInitiatedPurchaseFromNewFlow: closure_13, setMobileWebRedirectCheckoutStatus: closure_14, usePremiumPlanPurchasedStore: closure_15, reset: closure_16 } = usePremiumPlanPurchasedStore);
({ DISCOUNTS: closure_17, PremiumTypes: closure_18, SubscriptionIntervalTypes: closure_19, SubscriptionPlans: closure_20, SubscriptionPlanInfo: closure_21, PremiumSubscriptionSKUs: closure_22, PREMIUM_PLAN_SELECTION_ACTION_SHEET_KEY: closure_23 } = GuildFeatures);
({ AnalyticEvents: closure_24, AnalyticsObjects: closure_25, AnalyticsObjectTypes: closure_26, MarketingURLs: closure_27, HelpdeskArticles: closure_28 } = ME);
({ EUR_TO_HRK_CONVERSION_RATE: closure_30, ItemPurchaseType: closure_31 } = CustomCheckoutFlow);
({ CurrencyCodes: closure_32, PaymentGateways: closure_33 } = sum);
({ jsx: closure_34, jsxs: closure_35, Fragment: closure_36 } = jsxProd);
_createForOfIteratorHelperLoose = { body: { padding: 16 }, headerText: { paddingTop: 30, paddingHorizontal: 20 }, contentSelectPlan: { marginBottom: 16 }, contentActivated: { alignItems: "center", paddingTop: 40, paddingBottom: 56 }, contentActivatedText: { width: 328, marginTop: 16, textAlign: "center" }, formTitle: { paddingTop: 0, paddingLeft: 0 }, formSectionBody: { backgroundColor: "none" }, formSectionBodyWithNoTitle: { marginTop: -24 }, planOptionRowContainer: { paddingHorizontal: 10 }, planOptionContainer: { display: "flex", flexDirection: "row", alignItems: "center" }, planOptionPriceContainer: { flexGrow: 1, flexShrink: 1, display: "flex", flexDirection: "column", alignItems: "flex-end" }, planOptionDiscountContainer: { display: "flex", flexDirection: "row", flexShrink: 1 } };
_createForOfIteratorHelperLoose = { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.GREEN_360, paddingVertical: 2, paddingHorizontal: 8, marginRight: 8 };
_createForOfIteratorHelperLoose.planOptionDiscount = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.planOptionDiscountWhite = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.WHITE };
_createForOfIteratorHelperLoose.planOptionDiscountText = { textTransform: "uppercase" };
_createForOfIteratorHelperLoose.blockedPaymentContainer = { marginVertical: 40 };
_createForOfIteratorHelperLoose.legalDisclaimerText = { marginTop: 16 };
let obj2 = { height: 1, width: "100%", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
_createForOfIteratorHelperLoose.divider = obj2;
_createForOfIteratorHelperLoose.offerDividerMargin = { marginBottom: 8 };
_createForOfIteratorHelperLoose.trialDisclaimer = { marginBottom: 8 };
_createForOfIteratorHelperLoose.discountDisclaimer = { marginBottom: 20 };
_createForOfIteratorHelperLoose.loadingIndicator = { marginVertical: 30 };
_createForOfIteratorHelperLoose.discountSubTextContainer = { alignItems: "flex-end" };
_createForOfIteratorHelperLoose.priceText = { flexShrink: 1 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.WHITE };
let result = require("_slicedToArray").fileFinishedImporting("modules/premium/native/PremiumPlanSelectionActionSheet.tsx");

export default function PremiumPlanSelectionActionSheetWithOrderCTX(predicate) {
  const NitroACOMSubscriptionExperiment = require(7194) /* apexExperiment */.NitroACOMSubscriptionExperiment;
  let obj = require(477) /* set */;
  if (obj.isIOS()) {
    NitroACOMSubscriptionExperiment.useConfig({ location: "PremiumPlanSelectionActionSheetWithOrderCTX" }).enabled ? tmp.APPLE_ADVANCED_COMMERCE : tmp.APPLE;
  } else {
    const GOOGLE = tmp.GOOGLE;
    predicate = predicate.predicate;
    if (undefined === predicate) {
      let TIER_2 = predicate.premiumType;
      if (null == TIER_2) {
        TIER_2 = TIER_2.TIER_2;
      }
      predicate = getItemsByPremiumTypePredicate(TIER_2);
      const tmp3 = getItemsByPremiumTypePredicate;
    }
    let fn = predicate.initialSelectedCriteria;
    if (undefined === fn) {
      fn = (interval) => interval.interval === outer1_19.YEAR;
    }
    let fn2 = predicate.sortFn;
    if (undefined === fn2) {
      fn2 = (interval, interval2) => interval2.interval - interval.interval;
    }
    const tmp8 = callback(predicate, closure_3);
    let obj1 = require(6686) /* useGetTrialOffer */;
    const premiumTrialOffer = obj1.usePremiumTrialOffer();
    let trial_id;
    if (null != premiumTrialOffer) {
      trial_id = premiumTrialOffer.trial_id;
    }
    let tmp14;
    if (null != trial_id) {
      obj = {};
      obj = { subscription_trial_id: trial_id };
      obj.subscription_preview = obj;
      tmp14 = obj;
    }
    const isEligibleForBogoOffer = require(7129) /* useIsEligibleForBogoOffer */.useIsEligibleForBogoOffer();
    if (null == fn2) {
      let premiumBundlesWithPredicate = require(6648) /* _createForOfIteratorHelperLoose */.getPremiumBundlesWithPredicate(predicate);
      const obj8 = require(6648) /* _createForOfIteratorHelperLoose */;
    } else {
      const premiumBundlesWithPredicate1 = require(6648) /* _createForOfIteratorHelperLoose */.getPremiumBundlesWithPredicate(predicate);
      premiumBundlesWithPredicate = premiumBundlesWithPredicate1.sort(fn2);
      const obj6 = require(6648) /* _createForOfIteratorHelperLoose */;
    }
    if (isEligibleForBogoOffer) {
      fn = (interval) => interval.interval === outer1_19.MONTH;
    }
    const found = premiumBundlesWithPredicate.find(fn);
    if (null != found) {
      const subscriptionItemsForProduct = require(6648) /* _createForOfIteratorHelperLoose */.getSubscriptionItemsForProduct(found.productId);
      let mapped = subscriptionItemsForProduct.map((planId) => {
        const obj = { subscriptionPlanId: planId.planId };
        const obj2 = outer1_0(outer1_2[17]);
        obj.skuId = obj2.castPremiumSubscriptionAsSkuId(outer1_1(outer1_2[17]).getSkuIdForPlan(planId.planId));
        obj.quantity = planId.quantity;
        return obj;
      });
      const obj11 = require(6648) /* _createForOfIteratorHelperLoose */;
    } else {
      obj1 = { subscriptionPlanId: closure_20.PREMIUM_YEAR_TIER_2, skuId: require(3776) /* _createForOfIteratorHelperLoose */.castPremiumSubscriptionAsSkuId(TIER_22.TIER_2), quantity: 1 };
      mapped = [obj1];
      const obj10 = require(3776) /* _createForOfIteratorHelperLoose */;
    }
    let obj2 = {
      paymentGateway: GOOGLE,
      orderRequired: GOOGLE === constants4.APPLE_ADVANCED_COMMERCE,
      skuIds: [],
      defaultPlans: mapped,
      isGift: false,
      activeSubscription: null,
      initialSubscriptionFacet: tmp14,
      onOrderRetryCancellation() {
          return outer1_1(outer1_2[41]).hideActionSheet(outer1_23);
        }
    };
    const obj3 = {};
    const obj5 = require(7129) /* useIsEligibleForBogoOffer */;
    const merged = Object.assign(tmp8);
    obj3["premiumItems"] = premiumBundlesWithPredicate;
    obj3["userIsEligibleForBogoPromotion"] = isEligibleForBogoOffer;
    obj3["initialSelectedItem"] = found;
    obj2.children = callback3(PremiumPlanSelectionActionSheet, obj3);
    return callback3(importDefault(7195), obj2);
  }
};
export { getItemsByPremiumTypePredicate };
