// Module ID: 6651
// Function ID: 51141
// Name: hasRelevantTrialOfferForOrder
// Dependencies: []
// Exports: default

// Module 6651 (hasRelevantTrialOfferForOrder)
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
    let tmp5 = sku_id === importDefault(dependencyMap[17]).getSkuIdForPremiumType(premiumType);
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
    const obj = importDefault(dependencyMap[17]);
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
  const tmp = callback5();
  ({ orderRequired, orderRecord } = useNativeCheckoutStore((orderRequired) => ({ orderRequired: orderRequired.orderRequired, orderRecord: orderRequired.orderRecord })));
  if (null == premiumType) {
    if (!isPaymentSuccess) {
      let obj = { style: tmp.headerText };
      const intl = arg1(dependencyMap[19]).intl;
      obj.children = intl.string(arg1(dependencyMap[19]).t.vLz3Zs);
      return callback4(arg1(dependencyMap[18]).Text, obj);
    }
  }
  if (isPaymentSuccess) {
    premiumType = selectedPremiumType;
  }
  importDefault(dependencyMap[20])(null != premiumType, "If isPaymentSuccess is true, a value must be given for selectedPremiumType. Or premiumType must be given.");
  obj = { trialOffer, premiumType, orderRequired, order: orderRecord };
  let tmp7 = null;
  if (hasRelevantTrialOfferForOrder(obj)) {
    tmp7 = trialOffer;
  }
  obj = { premiumType, trialOffer: tmp7, discountOffer };
  return callback4(importDefault(dependencyMap[21]), obj);
}
function PlanOptionBadgeComponent(backgroundColorType) {
  let str = backgroundColorType.backgroundColorType;
  if (str === undefined) {
    str = "green";
  }
  const tmp = callback5();
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
  obj.children = closure_34(arg1(dependencyMap[18]).Text, obj);
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
      const intl2 = arg1(dependencyMap[19]).intl;
      obj.text = intl2.string(arg1(dependencyMap[19]).t.iQTfWx);
      let tmp4 = callback4(PlanOptionBadgeComponent, obj);
    } else {
      tmp4 = null;
      if (null != discount) {
        obj = {};
        const intl = arg1(dependencyMap[19]).intl;
        obj = { discount: arg1(dependencyMap[22]).formatPercent(tmp, discount / 100) };
        obj.text = intl.format(arg1(dependencyMap[19]).t.IAybsG, obj);
        tmp4 = callback4(PlanOptionBadgeComponent, obj);
        const obj3 = arg1(dependencyMap[22]);
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
  const arg1 = premiumItem;
  ({ discountOffer, discountedPriceString, userIsEligibleForBogoPromotion } = premiumItem);
  ({ selectedProductId, optionNeedsProductNameLabel, customBadgeComponent, trialOffer } = premiumItem);
  if (userIsEligibleForBogoPromotion === undefined) {
    userIsEligibleForBogoPromotion = false;
  }
  let importDefault;
  let closure_2;
  const tmp = callback5();
  const tmp2 = callback3(React.useState(0), 2);
  const first = tmp2[0];
  importDefault = first;
  let num = 1;
  closure_2 = tmp2[1];
  let obj = arg1(closure_2[23]);
  const items = [closure_12];
  const stateFromStores = obj.useStateFromStores(items, () => product.getProduct(premiumItem.productId));
  let obj1 = arg1(closure_2[24]);
  const checkoutPlanPriceString = obj1.useCheckoutPlanPriceString(premiumItem.productId, stateFromStores);
  const tmp6 = useNativeCheckoutStore((orderRequired) => ({ orderRequired: orderRequired.orderRequired, orderRecord: orderRequired.orderRecord }));
  obj = { trialOffer, premiumType: premiumItem.premiumTier, orderRequired: tmp6.orderRequired, order: tmp6.orderRecord };
  const tmp7 = hasRelevantTrialOfferForOrder(obj);
  let obj3 = arg1(closure_2[17]);
  const tierDisplayNameByPlanId = obj3.getTierDisplayNameByPlanId(premiumItem.basePlanId);
  let obj4 = importDefault(closure_2[17]);
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
    tmp14 = closure_17[premiumItem.basePlanId];
  }
  if (userIsEligibleForBogoPromotion) {
    userIsEligibleForBogoPromotion = premiumItem.basePlanId === closure_20.PREMIUM_MONTH_TIER_2;
  }
  if (null == stateFromStores) {
    let USD = constants2.USD;
  } else {
    if (str.toLowerCase() in constants2) {
      USD = stateFromStores.currencyCode.toLowerCase();
      const str2 = stateFromStores.currencyCode;
    } else {
      USD = constants2.USD;
    }
    const str = stateFromStores.currencyCode;
  }
  let formatRateResult = null;
  if (null != discountedPriceString) {
    let obj5 = arg1(closure_2[25]);
    formatRateResult = obj5.formatRate(discountedPriceString, tmp21.interval, tmp21.intervalCount);
  }
  if (tmp7) {
    const intl = arg1(closure_2[19]).intl;
    obj = {};
    let obj7 = arg1(closure_2[25]);
    obj.price = obj7.formatPrice(0, USD, { "Bool(true)": false, "Bool(true)": true });
    let formatToPlainStringResult = intl.formatToPlainString(arg1(closure_2[19]).t.hXcaLT, obj);
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
  let obj8 = arg1(closure_2[25]);
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
  const items3 = [closure_34(arg1(closure_2[18]).Text, obj4), ];
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
  items4[1] = closure_34(arg1(closure_2[18]).Text, obj8);
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
          const intl4 = arg1(closure_2[19]).intl;
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
          obj10.children = intl4.formatToPlainString(arg1(closure_2[19]).t.02Gmgm, obj11);
          tmp53Result = closure_34(arg1(closure_2[18]).Text, obj10);
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
      const intl5 = arg1(closure_2[19]).intl;
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
      obj12.children = intl5.formatToPlainString(arg1(closure_2[19]).t.vZk+c/, obj13);
      tmp61Result = closure_34(arg1(closure_2[18]).Text, obj12);
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
      const intl3 = arg1(closure_2[19]).intl;
      const obj15 = {};
      if (null != checkoutPlanPriceString) {
        str4 = checkoutPlanPriceString;
      }
      obj15.price = str4;
      let formatToPlainStringResult1 = intl3.formatToPlainString(arg1(closure_2[19]).t.ECT4A5, obj15);
    } else {
      const intl2 = arg1(closure_2[19]).intl;
      const obj16 = {};
      let tmp45 = str4;
      if (null != checkoutPlanPriceString) {
        tmp45 = checkoutPlanPriceString;
      }
      obj16.price = tmp45;
      formatToPlainStringResult1 = intl2.formatToPlainString(arg1(closure_2[19]).t.v9QeON, obj16);
    }
    obj14.children = formatToPlainStringResult1;
    closure_34(arg1(closure_2[18]).Text, obj14);
    const tmp39 = closure_34;
  }
}
function getPlanOptions(arr) {
  const importDefault = arg2;
  const dependencyMap = arg3;
  let closure_3 = arg4;
  let closure_4 = arg5;
  let closure_5 = arg6;
  let closure_6 = arg7;
  let closure_7 = new Set(arr.map((premiumTier) => premiumTier.premiumTier)).size > 1;
  return arr.map((premiumItem) => {
    let obj = {};
    obj = { premiumItem, selectedProductId: arg1, optionNeedsProductNameLabel: closure_7, trialOffer: arg2, discountOffer: arg3 };
    let tmp3 = null;
    if (premiumItem.productId === arg4) {
      tmp3 = arg5;
    }
    obj.discountedPriceString = tmp3;
    obj.userIsEligibleForBogoPromotion = arg6;
    obj.selectedPremiumType = arg7;
    obj.name = closure_34(closure_42, obj);
    obj.value = premiumItem.productId;
    return obj;
  });
}
function PremiumPlanSelectionActionSheetCTA(isPaymentSuccess) {
  let shouldUseMobileWebRedirectCheckout;
  ({ onStartPayment: closure_0, shouldUseMobileWebRedirectCheckout } = isPaymentSuccess);
  const importDefault = shouldUseMobileWebRedirectCheckout;
  if (isPaymentSuccess.isPaymentSuccess) {
    let obj = { h: 40, g: true, z: "/assets/.cache/intl/bW9kdWxlcy9nb19saXZlL3dlYi9tb2RhbA==" };
    const intl = arg1(dependencyMap[19]).intl;
    obj.text = intl.string(arg1(dependencyMap[19]).t.WAI6xu);
    obj.onPress = tmp;
    return callback4(arg1(dependencyMap[26]).Button, obj);
  } else {
    const tmp5 = shouldUseMobileWebRedirectCheckout ? {} : { st: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006675221587890415, borderWidth: -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000019656836438479222 };
    obj = { text: tmp2 };
    const merged = Object.assign(tmp5);
    obj["grow"] = true;
    obj["onPress"] = function onPress() {
      return callback({ shouldRedirectToMobileWeb: shouldUseMobileWebRedirectCheckout });
    };
    obj["loading"] = tmp4;
    obj["disabled"] = tmp3;
    return callback4(arg1(dependencyMap[26]).Button, obj);
  }
}
function PremiumPlanSelectionActionSheet(premiumItems) {
  let analyticsLocation;
  let analyticsLocations;
  let discountedPriceString;
  let initialSelectedItem;
  let isPatchOrderLoading;
  let onPaymentSuccess;
  let orderRequired;
  let premiumType;
  ({ applicationId: closure_0, analyticsLocation, premiumType } = premiumItems);
  const importDefault = premiumType;
  premiumItems = premiumItems.premiumItems;
  const dependencyMap = premiumItems;
  ({ userIsEligibleForBogoPromotion: closure_3, onPaymentSuccess } = premiumItems);
  let closure_4 = onPaymentSuccess;
  const onPaymentDismiss = premiumItems.onPaymentDismiss;
  const callback2 = onPaymentDismiss;
  let flag = premiumItems.showFormTitle;
  ({ analyticsLocations, initialSelectedItem } = premiumItems);
  if (flag === undefined) {
    flag = true;
  }
  const callback3 = flag;
  let React;
  let tmp2;
  let stateFromStores;
  let useNativeCheckoutStore;
  let closure_11;
  let closure_12;
  let closure_13;
  orderRequired = undefined;
  isPatchOrderLoading = undefined;
  let premiumTrialOffer;
  let premiumDiscountOffer;
  let tmp11;
  let closure_19;
  discountedPriceString = undefined;
  let first;
  let closure_22;
  let closure_23;
  let analyticsLocations2;
  let tmp16;
  let memo;
  let basePurchaseFlowAnalyticsFields;
  let basePlanId;
  let TitleStyleType;
  let memo1;
  function onClose() {
    premiumTrialOffer();
    premiumType(premiumItems[41]).hideActionSheet();
  }
  async function _onPlanSelectionChange(productId, arg1) {
    const found = closure_2.find((productId) => productId.productId === productId);
    if (null != found) {
      if (found !== closure_21) {
        const subscriptionItemsForProduct = productId(closure_2[48]).getSubscriptionItemsForProduct(productId);
        callback(found);
        const obj = productId(closure_2[48]);
      }
    }
  }
  function getActivatedImageSource() {
    let premiumTier;
    if (null != first) {
      premiumTier = first.premiumTier;
    }
    if (tmp11.TIER_0 === premiumTier) {
      if (obj3.isThemeDark(closure_11)) {
        let tmp19Result = tmp19(tmp20[50]);
      } else {
        tmp19Result = tmp19(tmp20[51]);
      }
      return tmp19Result;
    } else if (tmp11.TIER_1 === premiumTier) {
      if (obj2.isThemeDark(closure_11)) {
        let tmp13Result = tmp13(tmp14[52]);
      } else {
        tmp13Result = tmp13(tmp14[53]);
      }
      return tmp13Result;
    } else if (tmp11.TIER_2 === premiumTier) {
      if (obj.isThemeDark(closure_11)) {
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
    if (tmp11.TIER_0 === premiumTier) {
      const intl3 = callback(premiumItems[19]).intl;
      return intl3.string(callback(premiumItems[19]).t.6WWrVM);
    } else if (tmp11.TIER_1 === premiumTier) {
      const intl2 = callback(premiumItems[19]).intl;
      return intl2.string(callback(premiumItems[19]).t.LAAgsy);
    } else if (tmp11.TIER_2 === premiumTier) {
      const intl = callback(premiumItems[19]).intl;
      return intl.string(callback(premiumItems[19]).t.I7xNzI);
    }
  }
  const tmp = callback5();
  React = tmp;
  tmp2 = isPatchOrderLoading((isPaymentSuccess) => isPaymentSuccess.isPaymentSuccess);
  let obj = arg1(dependencyMap[23]);
  const items = [closure_12];
  stateFromStores = obj.useStateFromStores(items, () => tmp7.isBusy());
  let obj1 = arg1(dependencyMap[27]);
  const handlePremiumPurchase = obj1.useHandlePremiumPurchase();
  useNativeCheckoutStore = handlePremiumPurchase;
  let obj2 = arg1(dependencyMap[28]);
  const isPaymentsBlocked = obj2.useIsPaymentsBlocked();
  closure_11 = importDefault(dependencyMap[29])();
  const tmp7 = useNativeCheckoutStore((orderRecord) => orderRecord.orderRecord);
  closure_12 = tmp7;
  const tmp3 = isPatchOrderLoading((mobileWebRedirectCheckoutStatus) => mobileWebRedirectCheckoutStatus.mobileWebRedirectCheckoutStatus);
  ({ patchOrderLineItems: closure_13, isPatchOrderLoading, orderRequired } = useNativeCheckoutStore((patchOrderLineItems) => ({ patchOrderLineItems: patchOrderLineItems.patchOrderLineItems, isPatchOrderLoading: patchOrderLineItems.isPatchOrderLoading, orderRequired: patchOrderLineItems.orderRequired })));
  if (!isPatchOrderLoading) {
    isPatchOrderLoading = useNativeCheckoutStore((isCreateOrderLoading) => isCreateOrderLoading.isCreateOrderLoading);
  }
  let obj3 = arg1(dependencyMap[30]);
  premiumTrialOffer = obj3.usePremiumTrialOffer();
  let obj4 = arg1(dependencyMap[31]);
  premiumDiscountOffer = obj4.usePremiumDiscountOffer();
  tmp11 = hasRelevantTrialOfferForOrder({ trialOffer: premiumTrialOffer, premiumType, orderRequired, order: tmp7 });
  let obj5 = arg1(dependencyMap[32]);
  const discountedPremiumProductInfo = obj5.useDiscountedPremiumProductInfo(premiumDiscountOffer, premiumItems);
  ({ discountedProduct: closure_19, discountedPriceString } = discountedPremiumProductInfo);
  const tmp13 = callback3(React.useState(initialSelectedItem), 2);
  first = tmp13[0];
  closure_22 = tmp13[1];
  let obj6 = arg1(dependencyMap[23]);
  const items1 = [closure_12];
  closure_23 = obj6.useStateFromStores(items1, () => {
    let product = null;
    if (null != first) {
      product = tmp7.getProduct(first.productId);
    }
    return product;
  });
  let obj7 = arg1(dependencyMap[33]);
  const tmp8 = useNativeCheckoutStore((patchOrderLineItems) => ({ patchOrderLineItems: patchOrderLineItems.patchOrderLineItems, isPatchOrderLoading: patchOrderLineItems.isPatchOrderLoading, orderRequired: patchOrderLineItems.orderRequired }));
  analyticsLocations2 = importDefault(dependencyMap[34])(analyticsLocations, importDefault(dependencyMap[35]).PREMIUM_PAYMENT_ACTION_SHEET).analyticsLocations;
  tmp16 = importDefault(dependencyMap[36])(() => callback(premiumItems[37]).getNewAnalyticsLoadId());
  const items2 = [premiumType];
  memo = React.useMemo(() => {
    const obj = callback(premiumItems[17]);
    return obj.castPremiumSubscriptionAsSkuId(premiumType(premiumItems[17]).getSkuIdForPremiumType(premiumType));
  }, items2);
  let obj8 = arg1(dependencyMap[37]);
  obj = { analyticsLoadId: tmp16 };
  obj = { object: tmp16.BUTTON_CTA, object_type: memo.BUY };
  const merged = Object.assign(analyticsLocation);
  obj.analyticsLocation = obj;
  obj.analyticsLocations = analyticsLocations2;
  basePurchaseFlowAnalyticsFields = obj8.getBasePurchaseFlowAnalyticsFields(obj);
  basePlanId = null;
  if (null != first) {
    basePlanId = first.basePlanId;
  }
  const tmp15 = importDefault(dependencyMap[34]);
  const result = arg1(dependencyMap[38]).isMobileWebRedirectCheckoutEnabled();
  TitleStyleType = result;
  importDefault(dependencyMap[39])(() => {
    let obj = callback(premiumItems[40]);
    obj = {};
    const merged = Object.assign(basePurchaseFlowAnalyticsFields);
    obj["application_id"] = callback;
    obj["subscription_plan_id"] = basePlanId;
    obj["sku_id"] = memo;
    let customCheckoutFlowForAnalytics;
    if (result) {
      customCheckoutFlowForAnalytics = callback(premiumItems[38]).getCustomCheckoutFlowForAnalytics();
      const obj3 = callback(premiumItems[38]);
    }
    obj["custom_checkout_flow"] = customCheckoutFlowForAnalytics;
    const result = obj.trackPaymentFlowStartedAnalyticsAndCTP(obj);
  });
  const items3 = [memo, basePurchaseFlowAnalyticsFields, tmp16, analyticsLocations2, handlePremiumPurchase, result, onPaymentDismiss, onPaymentSuccess, tmp7, first];
  const items4 = [tmp11, result];
  const callback = React.useCallback(callback2(async () => {
    const fn = function*() {
      let tmp = arg0;
      if (tmp === undefined) {
        let obj = { shouldRedirectToMobileWeb: false };
        tmp = obj;
      }
      let paymentFlowStepAnalyticsFields;
      yield undefined;
      callback(closure_2[20])(null != closure_21, "cannot start payment without a selectedItem");
      let shouldRedirectToMobileWeb = closure_29;
      if (closure_29) {
        shouldRedirectToMobileWeb = tmp.shouldRedirectToMobileWeb;
      }
      const PaymentFlowStep = paymentFlowStepAnalyticsFields(closure_2[37]).PaymentFlowStep;
      let obj1 = paymentFlowStepAnalyticsFields(closure_2[37]);
      obj = { from_step: paymentFlowStepAnalyticsFields(closure_2[37]).PaymentFlowStep.PLAN_SELECT, to_step: shouldRedirectToMobileWeb ? PaymentFlowStep.MOBILE_WEB_REDIRECT_CHECKOUT : PaymentFlowStep.EXTERNAL_PAYMENT, subscription_plan_gateway_plan_id: closure_21.productId, sku_id: closure_26 };
      paymentFlowStepAnalyticsFields = obj1.getPaymentFlowStepAnalyticsFields(_location, obj);
      if (!shouldRedirectToMobileWeb) {
        callback(closure_2[42]).track(constants.PAYMENT_FLOW_STEP, paymentFlowStepAnalyticsFields);
        const obj4 = callback(closure_2[42]);
      }
      obj = { productId: closure_21.productId, onPaymentSuccess: closure_4, onPaymentDismiss: closure_5 };
      callback2(obj);
      if (shouldRedirectToMobileWeb) {
        const obj7 = paymentFlowStepAnalyticsFields(closure_2[43]);
        obj1 = { planId: closure_21.basePlanId, isGift: false, loadId: closure_25 };
        const result = obj7.goToStandalonePremiumCheckoutFromMobileApp("premium_plan_selection_action_sheet", obj1, () => {
          if (obj.isMetaQuest()) {
            callback3();
          } else {
            callback2("in_mobile_web");
            callback(closure_2[42]).track(constants.PAYMENT_FLOW_STEP, paymentFlowStepAnalyticsFields);
            const obj2 = callback(closure_2[42]);
          }
        }, () => {
          let obj = callback(closure_2[45]);
          obj = {};
          const intl = paymentFlowStepAnalyticsFields(closure_2[19]).intl;
          obj.title = intl.string(paymentFlowStepAnalyticsFields(closure_2[19]).t.NrBVjw);
          const intl2 = paymentFlowStepAnalyticsFields(closure_2[19]).intl;
          obj.body = intl2.string(paymentFlowStepAnalyticsFields(closure_2[19]).t.gD+grx);
          obj.hideActionSheet = true;
          obj.show(obj);
        });
      } else {
        const obj2 = { productId: closure_21.productId, analyticsLocation: _location.location, analyticsLoadId: closure_25, analyticsLocations: constants };
        let id;
        if (null != id) {
          id = id.id;
        }
        obj2.orderId = id;
        yield closure_10(obj2);
        const tmp11 = closure_10;
      }
    };
    fn.next();
    return fn;
  }), items3);
  memo1 = React.useMemo(() => {
    if (result) {
      const intl3 = callback(premiumItems[19]).intl;
      let stringResult = intl3.string(callback(premiumItems[19]).t.rylrdY);
    } else if (tmp11) {
      const tmp2Result = tmp2(tmp3[56]);
      const intl2 = callback(premiumItems[19]).intl;
      const string = intl2.string;
      let rKD72m = callback(premiumItems[19]).t;
      if (isAndroidResult) {
        rKD72m = rKD72m.rKD72m;
        let stringResult1 = string(rKD72m);
      } else {
        stringResult1 = string(rKD72m.bboTul);
      }
      const isAndroidResult = tmp2(tmp3[56]).isAndroid();
    } else {
      const intl = tmp2(tmp3[19]).intl;
      stringResult = intl.string(tmp2(tmp3[19]).t.nIlrxd);
    }
    return stringResult;
  }, items4);
  const items5 = [tmp2, first, tmp11, discountedPriceString, memo1, tmp.legalDisclaimerText];
  const memo2 = React.useMemo(() => {
    if (tmp2) {
      return null;
    } else {
      let interval;
      if (null != first) {
        interval = first.interval;
      }
      if (null == interval) {
        return null;
      } else if (tmp11) {
        let obj = { style: tmp.legalDisclaimerText, variant: "text-xxs/medium" };
        const intl3 = callback(premiumItems[19]).intl;
        const obj10 = callback(premiumItems[56]);
        const tmp21 = getActivatedText;
        const t = callback(premiumItems[19]).t;
        obj = { paidURL: basePurchaseFlowAnalyticsFields.PAID_TERMS };
        const isAndroidResult = callback(premiumItems[56]).isAndroid();
        const tmp28 = callback(premiumItems[56]).isAndroid() ? t.tINI9V : t.ZWXtAj;
        obj.interval = premiumType(premiumItems[17]).getIntervalStringAsNoun(interval);
        const obj12 = premiumType(premiumItems[17]);
        obj.cancelURL = premiumType(premiumItems[58]).getArticleURL(basePlanId.PREMIUM_DETAILS_CANCEL_SUB);
        obj.children = intl3.format(tmp28, obj);
        return tmp21(callback(premiumItems[57]).TextWithIOSLinkWorkaround, obj);
      } else if (null != discountedPriceString) {
        const obj1 = { style: tmp.legalDisclaimerText, variant: "text-xxs/medium" };
        const intl2 = callback(premiumItems[19]).intl;
        let obj2 = { buttonText: memo1, interval: premiumType(premiumItems[17]).formatInterval(interval) };
        const obj6 = premiumType(premiumItems[17]);
        obj2.cancelSubscriptionArticle = premiumType(premiumItems[58]).getArticleURL(basePlanId.PREMIUM_DETAILS_CANCEL_SUB);
        const obj7 = premiumType(premiumItems[58]);
        obj2.paidServiceTermsArticle = premiumType(premiumItems[58]).getArticleURL(basePlanId.PAID_TERMS);
        obj1.children = intl2.format(callback(premiumItems[19]).t.3uC7vj, obj2);
        return getActivatedText(callback(premiumItems[57]).TextWithIOSLinkWorkaround, obj1);
      } else {
        const obj14 = callback(premiumItems[56]);
        const t2 = callback(premiumItems[19]).t;
        const isAndroidResult1 = callback(premiumItems[56]).isAndroid();
        obj = { style: tmp.legalDisclaimerText, variant: "text-xxs/medium" };
        const intl = callback(premiumItems[19]).intl;
        const obj3 = { paidURL: basePurchaseFlowAnalyticsFields.PAID_TERMS };
        obj2 = premiumType(premiumItems[17]);
        obj3.interval = obj2.getIntervalStringAsNoun(interval);
        obj3.ctaText = memo1;
        obj.children = intl.format(callback(premiumItems[56]).isAndroid() ? t2.COObWR : t2.7wpqfj, obj3);
        return getActivatedText(callback(premiumItems[57]).TextWithIOSLinkWorkaround, obj);
      }
    }
  }, items5);
  obj1 = { ref: obj7.useBottomSheetRef().bottomSheetRef, handleDisabled: true, onDismiss: premiumTrialOffer, startExpanded: true };
  if (isPaymentsBlocked) {
    obj2 = { style: tmp.blockedPaymentContainer };
    const items6 = [getActivatedText(importDefault(dependencyMap[60]), {}), ];
    obj3 = { variant: "floating", onPress: onClose };
    items6[1] = getActivatedText(arg1(dependencyMap[61]).ActionSheetHeaderBar, obj3);
    obj2.children = items6;
    let tmp27Result = tmp27(tmp2, obj2);
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
        function renderContent() {
              if (tmp2) {
                let obj = { style: tmp.contentActivated };
                obj = { source: getActivatedImageSource() };
                const items = [getActivatedText(premiumType(premiumItems[62]), obj), ];
                let obj1 = { style: tmp.contentActivatedText, variant: "text-md/semibold", children: getActivatedText() };
                items[1] = getActivatedText(callback(premiumItems[18]).Text, obj1);
                obj.children = items;
                return callback2(tmp2, obj);
              } else {
                obj = {};
                obj1 = callback(premiumItems[56]);
                obj.convertToMajorUnits = obj1.isAndroid();
                let tmp3 = flag;
                if (flag) {
                  tmp3 = !tmp11;
                }
                const obj2 = { style: callback.contentSelectPlan };
                if (tmp11) {
                  const obj3 = { INTEGRATION_CREATE: 8, ConstraintReasonCode: 32, style: tmp.trialDisclaimer };
                  const intl2 = callback(premiumItems[19]).intl;
                  obj3.children = intl2.string(callback(premiumItems[19]).t.u95Dt4);
                  let tmp11 = getActivatedText(callback(premiumItems[18]).Text, obj3);
                } else {
                  tmp11 = null;
                  if (null != discountedPriceString) {
                    tmp11 = null;
                    if (null != _undefined) {
                      tmp11 = null;
                      if (null != premiumType) {
                        const obj4 = {};
                        const obj5 = { INTEGRATION_CREATE: 8, ConstraintReasonCode: 32, style: tmp.discountDisclaimer };
                        const intl = callback(premiumItems[19]).intl;
                        const obj6 = { regularPrice: _undefined.priceString, discountedPrice: discountedPriceString };
                        obj5.children = intl.format(callback(premiumItems[19]).t.yBn7uz, obj6);
                        const items1 = [getActivatedText(callback(premiumItems[18]).Text, obj5), ];
                        const obj7 = {};
                        const items2 = [tmp.divider, tmp.offerDividerMargin];
                        obj7.style = items2;
                        items1[1] = getActivatedText(tmp2, obj7);
                        obj4.children = items1;
                        tmp11 = callback2(tmp2, obj4);
                      }
                    }
                  }
                }
                const items3 = [tmp11, ];
                const obj8 = {};
                let stringResult;
                if (tmp3) {
                  const intl3 = callback(premiumItems[19]).intl;
                  stringResult = intl3.string(callback(premiumItems[19]).t.u95Dt4);
                }
                obj8.title = stringResult;
                obj8.titleStyleType = result.NO_BORDER_OR_MARGIN;
                obj8.titleViewStyle = callback.formTitle;
                const items4 = [callback.formSectionBody, ];
                let formSectionBodyWithNoTitle = !tmp3;
                if (formSectionBodyWithNoTitle) {
                  formSectionBodyWithNoTitle = tmp.formSectionBodyWithNoTitle;
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
                  const intl4 = callback(premiumItems[19]).intl;
                  const obj10 = {};
                  let obj11 = callback(premiumItems[25]);
                  obj10.kunaPriceWithCurrency = obj11.formatPrice(closure_23.price * memo1, _onPlanSelectionChange.HRK, obj);
                  obj9.message = intl4.formatToPlainString(callback(premiumItems[19]).t.9hnZoK, obj10);
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
                if (null != _undefined) {
                  identifier = _undefined.identifier;
                }
                obj11.options = closure_43(premiumItems, productId1, premiumTrialOffer, premiumDiscountOffer, identifier, discountedPriceString, closure_3, premiumType);
                obj11.onChange = function onChange(value) {
                  return function onPlanSelectionChange(value) {
                    return callback(...arguments);
                  }(value.value);
                };
                obj11.withDividers = false;
                obj11.style = callback.planOptionRowContainer;
                let tmp80 = stateFromStores;
                if (!stateFromStores) {
                  tmp80 = isPatchOrderLoading;
                }
                obj11.disabled = tmp80;
                obj11.indicatorLeft = true;
                items5[1] = getActivatedText(callback(premiumItems[65]).RadioGroup, obj11);
                obj8.children = items5;
                items3[1] = callback2(premiumType(premiumItems[63]), obj8);
                obj2.children = items3;
                return callback2(premiumItems, obj2);
              }
            }(),

      ];
      const obj9 = { isPaymentSuccess: tmp2, onClose, ctaText: memo1, onStartPayment: callback, shouldUseMobileWebRedirectCheckout: result };
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
    items7[1] = closure_35(tmp2, obj6);
    const obj10 = { variant: "floating", onPress: onClose };
    items7[2] = getActivatedText(arg1(dependencyMap[61]).ActionSheetHeaderBar, obj10);
    obj4.children = items7;
    tmp27Result = tmp27(closure_36, obj4);
    const tmp28 = closure_36;
    const tmp29 = getActivatedText;
    const tmp30 = Header;
    const tmp33 = closure_35;
    const tmp34 = tmp2;
  }
  obj1.children = tmp27Result;
  return getActivatedText(arg1(dependencyMap[59]).BottomSheet, obj1);
}
function getItemsByPremiumTypePredicate(arg0) {
  const arg1 = arg0;
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
      tmp = premiumTier === additionalPlans;
    }
    return tmp;
  };
}
let closure_3 = [];
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importAll(dependencyMap[3]);
({ View: closure_8, ActivityIndicator: closure_9 } = arg1(dependencyMap[4]));
const useNativeCheckoutStore = arg1(dependencyMap[5]).useNativeCheckoutStore;
let closure_11 = importDefault(dependencyMap[6]);
let closure_12 = importDefault(dependencyMap[7]);
const tmp2 = arg1(dependencyMap[4]);
({ setInitiatedPurchaseFromNewFlow: closure_13, setMobileWebRedirectCheckoutStatus: closure_14, usePremiumPlanPurchasedStore: closure_15, reset: closure_16 } = arg1(dependencyMap[8]));
const tmp3 = arg1(dependencyMap[8]);
({ DISCOUNTS: closure_17, PremiumTypes: closure_18, SubscriptionIntervalTypes: closure_19, SubscriptionPlans: closure_20, SubscriptionPlanInfo: closure_21, PremiumSubscriptionSKUs: closure_22, PREMIUM_PLAN_SELECTION_ACTION_SHEET_KEY: closure_23 } = arg1(dependencyMap[9]));
const tmp4 = arg1(dependencyMap[9]);
({ AnalyticEvents: closure_24, AnalyticsObjects: closure_25, AnalyticsObjectTypes: closure_26, MarketingURLs: closure_27, HelpdeskArticles: closure_28 } = arg1(dependencyMap[10]));
const TitleStyleType = arg1(dependencyMap[11]).TitleStyleType;
const tmp5 = arg1(dependencyMap[10]);
({ EUR_TO_HRK_CONVERSION_RATE: closure_30, ItemPurchaseType: closure_31 } = arg1(dependencyMap[12]));
const tmp6 = arg1(dependencyMap[12]);
({ CurrencyCodes: closure_32, PaymentGateways: closure_33 } = arg1(dependencyMap[13]));
const tmp7 = arg1(dependencyMap[13]);
({ jsx: closure_34, jsxs: closure_35, Fragment: closure_36 } = arg1(dependencyMap[14]));
let obj = arg1(dependencyMap[15]);
obj = { body: { padding: 16 }, headerText: { flexDirection: "ignoreLogs", alignItems: "isArrayBuffer" }, contentSelectPlan: { marginBottom: 16 }, contentActivated: { ownedByVerticalScrollExperiment: "mn", desktopBitrate: "content", HeaderTitle: "from" }, contentActivatedText: {}, formTitle: { "Bool(false)": false, "Bool(false)": true }, formSectionBody: { backgroundColor: "none" }, formSectionBodyWithNoTitle: { marginTop: -24 }, planOptionRowContainer: { paddingHorizontal: 10 }, planOptionContainer: { "Bool(true)": 8, "Bool(true)": null, "Bool(true)": "\u270A\u{1F3FF}" }, planOptionPriceContainer: {}, planOptionDiscountContainer: {} };
obj = { borderRadius: importDefault(dependencyMap[16]).radii.lg, backgroundColor: importDefault(dependencyMap[16]).unsafe_rawColors.GREEN_360 };
obj.planOptionDiscount = obj;
const tmp8 = arg1(dependencyMap[14]);
obj.planOptionDiscountWhite = { backgroundColor: importDefault(dependencyMap[16]).colors.WHITE };
obj.planOptionDiscountText = { textTransform: "uppercase" };
obj.blockedPaymentContainer = { marginVertical: 40 };
obj.legalDisclaimerText = { marginTop: 16 };
const obj1 = { backgroundColor: importDefault(dependencyMap[16]).colors.WHITE };
obj.divider = { backgroundColor: importDefault(dependencyMap[16]).colors.BORDER_SUBTLE };
obj.offerDividerMargin = { marginBottom: 8 };
obj.trialDisclaimer = { marginBottom: 8 };
obj.discountDisclaimer = { marginBottom: 20 };
obj.loadingIndicator = { marginVertical: 30 };
obj.discountSubTextContainer = { alignItems: "flex-end" };
obj.priceText = { flexShrink: 1 };
let closure_37 = obj.createStyles(obj);
const obj2 = { backgroundColor: importDefault(dependencyMap[16]).colors.BORDER_SUBTLE };
const result = arg1(dependencyMap[69]).fileFinishedImporting("modules/premium/native/PremiumPlanSelectionActionSheet.tsx");

export default function PremiumPlanSelectionActionSheetWithOrderCTX(predicate) {
  const NitroACOMSubscriptionExperiment = arg1(dependencyMap[66]).NitroACOMSubscriptionExperiment;
  let obj = arg1(dependencyMap[56]);
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
      fn = (interval) => interval.interval === constants.YEAR;
    }
    let fn2 = predicate.sortFn;
    if (undefined === fn2) {
      fn2 = (interval, interval2) => interval2.interval - interval.interval;
    }
    const tmp8 = callback(predicate, closure_3);
    let obj1 = arg1(dependencyMap[30]);
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
    const isEligibleForBogoOffer = arg1(dependencyMap[67]).useIsEligibleForBogoOffer();
    if (null == fn2) {
      let premiumBundlesWithPredicate = arg1(dependencyMap[48]).getPremiumBundlesWithPredicate(predicate);
      const obj8 = arg1(dependencyMap[48]);
    } else {
      const premiumBundlesWithPredicate1 = arg1(dependencyMap[48]).getPremiumBundlesWithPredicate(predicate);
      premiumBundlesWithPredicate = premiumBundlesWithPredicate1.sort(fn2);
      const obj6 = arg1(dependencyMap[48]);
    }
    if (isEligibleForBogoOffer) {
      fn = (interval) => interval.interval === constants.MONTH;
    }
    const found = premiumBundlesWithPredicate.find(fn);
    if (null != found) {
      const subscriptionItemsForProduct = arg1(dependencyMap[48]).getSubscriptionItemsForProduct(found.productId);
      let mapped = subscriptionItemsForProduct.map((planId) => {
        const obj = { subscriptionPlanId: planId.planId };
        const obj2 = callback(closure_2[17]);
        obj.skuId = obj2.castPremiumSubscriptionAsSkuId(callback2(closure_2[17]).getSkuIdForPlan(planId.planId));
        obj.quantity = planId.quantity;
        return obj;
      });
      const obj11 = arg1(dependencyMap[48]);
    } else {
      obj1 = { subscriptionPlanId: closure_20.PREMIUM_YEAR_TIER_2, skuId: arg1(dependencyMap[17]).castPremiumSubscriptionAsSkuId(TIER_22.TIER_2), quantity: 1 };
      mapped = [obj1];
      const obj10 = arg1(dependencyMap[17]);
    }
    const obj2 = {
      paymentGateway: GOOGLE,
      orderRequired: GOOGLE === constants3.APPLE_ADVANCED_COMMERCE,
      skuIds: [],
      defaultPlans: mapped,
      isGift: false,
      activeSubscription: null,
      initialSubscriptionFacet: tmp14,
      onOrderRetryCancellation() {
          return callback2(closure_2[41]).hideActionSheet(closure_23);
        }
    };
    const obj3 = {};
    const obj5 = arg1(dependencyMap[67]);
    const merged = Object.assign(tmp8);
    obj3["premiumItems"] = premiumBundlesWithPredicate;
    obj3["userIsEligibleForBogoPromotion"] = isEligibleForBogoOffer;
    obj3["initialSelectedItem"] = found;
    obj2.children = callback4(PremiumPlanSelectionActionSheet, obj3);
    return callback4(importDefault(dependencyMap[68]), obj2);
  }
};
export { getItemsByPremiumTypePredicate };
