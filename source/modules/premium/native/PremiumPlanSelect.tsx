// Module ID: 12353
// Function ID: 94472
// Name: getPlanDescription
// Dependencies: []
// Exports: default

// Module 12353 (getPlanDescription)
let Fonts;
let USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING;
function getPlanDescription(premiumTier) {
  if (null == premiumTier.premiumTier) {
    const intl = arg1(dependencyMap[19]).intl;
    let obj = { numSubscriptions: premiumTier.numPremiumGuild };
    let formatToPlainStringResult = intl.formatToPlainString(arg1(dependencyMap[19]).t.gDsyB9, obj);
  } else if (0 === premiumTier.numPremiumGuild) {
    formatToPlainStringResult = arg1(dependencyMap[20]).getPremiumTypeDisplayName(premiumTier.premiumTier);
    const obj2 = arg1(dependencyMap[20]);
  } else {
    const intl2 = arg1(dependencyMap[19]).intl;
    if (premiumTier.premiumTier === closure_18.TIER_1) {
      let u6dBsN = arg1(dependencyMap[19]).t.sexoHq;
    } else {
      u6dBsN = arg1(dependencyMap[19]).t.u6dBsN;
    }
    obj = { num: premiumTier.numPremiumGuild };
    formatToPlainStringResult = intl2.formatToPlainString(u6dBsN, obj);
  }
  return formatToPlainStringResult;
}
function BoostDeltaPriceTrailing(arg0) {
  let interval;
  let price;
  ({ price, interval } = arg0);
  let obj = { "Bool(false)": null, "Bool(false)": 8, spacing: importDefault(dependencyMap[18]).space.PX_4 };
  obj = { size: "xs", color: importDefault(dependencyMap[18]).colors.ICON_FEEDBACK_POSITIVE };
  const items = [callback4(arg1(dependencyMap[28]).NitroWheelIcon, obj), ];
  obj = { hasMaxConnections: "<string:3086024708>", isBoostOnlySubscription: "<string:625475588>" };
  const intl = arg1(dependencyMap[19]).intl;
  if (interval === constants.MONTH) {
    rS8FA+ = arg1(dependencyMap[19]).t.AbOLNu;
  } else {
    rS8FA+ = arg1(dependencyMap[19]).t.rS8FA+;
  }
  const obj2 = { hasMaxConnections: 141033474, isBoostOnlySubscription: null, children: price };
  obj.children = intl.format(rS8FA_, { price: callback4(arg1(dependencyMap[29]).Text, obj2, "price") });
  items[1] = callback4(arg1(dependencyMap[29]).Text, obj);
  obj.children = items;
  return closure_31(arg1(dependencyMap[27]).Stack, obj);
}
function PlanRow(plan) {
  let subscription;
  plan = plan.plan;
  const arg1 = plan;
  ({ purchase: closure_1, subscription } = plan);
  const dependencyMap = subscription;
  let flag = plan.disabled;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = plan.hasBackground;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = plan.shouldShowModernBoostFlow;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let closure_3;
  let callback;
  function onPress() {
    if (!flag) {
      if (null != subscription) {
        if (premiumTypeFromSubscription === closure_18.TIER_2) {
          if (plan.premiumTier === closure_18.TIER_0) {
            const obj = {
              subscription,
              mode: plan(subscription[37]).WhatYouLoseMode.DOWNGRADE,
              onContinue() {
                        return callback(productId.productId);
                      }
            };
            callback(subscription[36])(obj);
            const tmp9 = callback(subscription[36]);
          }
        }
      }
      callback(plan.productId);
    }
  }
  const tmp = callback6();
  const tmp3 = callback2((purchasingProductId) => purchasingProductId.purchasingProductId === plan.productId);
  let obj = arg1(dependencyMap[30]);
  const token = obj.useToken(importDefault(dependencyMap[18]).colors.ACTIVITY_TIMEBAR_PROGRESS_BACKGROUND);
  let obj1 = arg1(dependencyMap[31]);
  const items = [closure_13];
  const tmp5 = callback(obj1.useStateFromStoresArray(items, () => {
    const items = [closure_13.getProduct(plan.productId), closure_13.isBusy()];
    return items;
  }), 2);
  const first = tmp5[0];
  const tmp2 = callback2((isPurchasing) => isPurchasing.isPurchasing);
  let obj2 = arg1(dependencyMap[32]);
  const premiumTier2DeltaPriceString = obj2.usePremiumTier2DeltaPriceString(plan, subscription, first, flag3);
  let obj3 = arg1(dependencyMap[33]);
  let checkoutPlanPriceString = obj3.useCheckoutPlanPriceString(plan.productId, first);
  if (null != premiumTier2DeltaPriceString) {
    checkoutPlanPriceString = premiumTier2DeltaPriceString;
  }
  let str = "$...";
  if (null != checkoutPlanPriceString) {
    str = checkoutPlanPriceString;
  }
  let tmp11 = plan.premiumTier === closure_18.TIER_2;
  const tmp7 = useNativeCheckoutStore((isPatchOrderLoading) => isPatchOrderLoading.isPatchOrderLoading || isPatchOrderLoading.isCreateOrderLoading);
  if (tmp11) {
    tmp11 = 0 === plan.numPremiumGuild;
  }
  let tmp12 = null;
  if (tmp11) {
    obj = {};
    const items1 = [, ];
    ({ rowText: arr2[0], rowPlanDescriptionSubtext: arr2[1] } = tmp);
    obj.style = items1;
    const intl = arg1(dependencyMap[19]).intl;
    obj = { num: closure_16 };
    obj.children = intl.format(arg1(dependencyMap[19]).t.he52LA, obj);
    tmp12 = callback4(arg1(dependencyMap[35]).LegacyText, obj);
  }
  if (null == plan.premiumTier) {
    let tmp23 = importDefault(dependencyMap[21]);
  } else if (0 !== plan.numPremiumGuild) {
    if (plan.premiumTier === closure_18.TIER_1) {
      tmp23 = importDefault(dependencyMap[25]);
    } else {
      tmp23 = importDefault(dependencyMap[26]);
    }
  } else {
    const premiumTier = plan.premiumTier;
    if (closure_18.TIER_0 === premiumTier) {
      tmp23 = importDefault(dependencyMap[22]);
    } else if (closure_18.TIER_1 === premiumTier) {
      tmp23 = importDefault(dependencyMap[23]);
    } else if (closure_18.TIER_2 === premiumTier) {
      tmp23 = importDefault(dependencyMap[24]);
    }
  }
  const intl2 = arg1(dependencyMap[19]).intl;
  if (plan.interval === constants.MONTH) {
    rS8FA+ = arg1(dependencyMap[19]).t.AbOLNu;
  } else {
    rS8FA+ = arg1(dependencyMap[19]).t.rS8FA+;
  }
  obj1 = { price: str };
  const formatToPlainStringResult = intl2.formatToPlainString(rS8FA_, obj1);
  if (tmp11) {
    const intl3 = arg1(dependencyMap[19]).intl;
    obj2 = { num: closure_16 };
    const formatToPlainStringResult1 = intl3.formatToPlainString(arg1(dependencyMap[19]).t.RTaZb4, obj2);
  }
  let premiumTypeFromSubscription = null;
  if (null != subscription) {
    let obj8 = arg1(dependencyMap[20]);
    premiumTypeFromSubscription = obj8.getPremiumTypeFromSubscription(subscription);
  }
  closure_3 = premiumTypeFromSubscription;
  if (!flag) {
    flag = tmp2;
  }
  if (!flag) {
    flag = tmp5[1];
  }
  if (!flag) {
    flag = tmp7;
  }
  callback = flag;
  if (flag3) {
    obj3 = {};
    if (tmp17) {
      let tmp66Result = tmp66(importDefault(dependencyMap[39]), { "Null": false, "Null": false });
    } else if (tmp11) {
      const obj4 = { size: "xxs", color: importDefault(dependencyMap[18]).colors.ICON_DEFAULT };
      tmp66Result = tmp66(arg1(dependencyMap[28]).NitroWheelIcon, obj4);
    } else {
      const obj5 = { style: tmp.boostRowIcon, source: tmp23 };
      tmp66Result = tmp66(closure_6, obj5);
    }
    obj3.icon = tmp66Result;
    obj3.label = getPlanDescription(plan);
    obj3.subLabel = formatToPlainStringResult1;
    if (tmp3) {
      const obj6 = { font: null, dx: null, color: token };
      let tmp78 = callback4(arg1(dependencyMap[40]).ActivityIndicator, obj6);
    } else if (null != premiumTier2DeltaPriceString) {
      const obj7 = { price: premiumTier2DeltaPriceString, interval: plan.interval };
      tmp78 = callback4(BoostDeltaPriceTrailing, obj7);
    } else {
      obj8 = { <string:1643205302>: "contain", <string:1415816450>: "100%", <string:4283523744>: 34, children: formatToPlainStringResult };
      tmp78 = callback4(arg1(dependencyMap[29]).Text, obj8);
    }
    obj3.trailing = tmp78;
    obj3.arrow = true;
    if (flag) {
      flag = !tmp3;
    }
    obj3.disabled = flag;
    obj3.onPress = onPress;
    let tmp46Result = tmp46(tmp47(tmp48[38]).TableRow, obj3);
  } else {
    const obj9 = { "Bool(false)": 0.55, "Bool(false)": 0, "Bool(false)": 3.896 };
    let str3 = "none";
    if (!tmp47Result.isThemeDark(tmp10)) {
      str3 = "none";
      if (flag2) {
        str3 = importDefault(dependencyMap[18]).unsafe_rawColors.PRIMARY_230;
      }
    }
    obj9.underlayColor = str3;
    obj9.disabled = flag;
    obj9.onPress = onPress;
    const obj10 = {};
    const items2 = [tmp.row, plan.style, ];
    let rowDisabled = flag;
    if (flag) {
      rowDisabled = !tmp3;
    }
    if (rowDisabled) {
      rowDisabled = tmp.rowDisabled;
    }
    items2[2] = rowDisabled;
    obj10.style = items2;
    const obj11 = { style: tmp[closure_34[tmp23]], source: tmp23 };
    const items3 = [callback4(closure_6, obj11), , , , ];
    const obj12 = {};
    const items4 = [, ];
    ({ rowText: arr5[0], rowPlanDescription: arr5[1] } = tmp);
    obj12.style = items4;
    obj12.children = getPlanDescription(plan);
    items3[1] = callback4(arg1(dependencyMap[35]).LegacyText, obj12);
    items3[2] = tmp12;
    const obj13 = {};
    const items5 = [, ];
    ({ rowText: arr6[0], rowPrice: arr6[1] } = tmp);
    obj13.style = items5;
    obj13.children = formatToPlainStringResult;
    items3[3] = callback4(arg1(dependencyMap[35]).LegacyText, obj13);
    let tmp61 = null;
    if (tmp3) {
      const obj14 = { font: null, dx: null, style: tmp.purchasingSpinner, color: token };
      tmp61 = callback4(arg1(dependencyMap[40]).ActivityIndicator, obj14);
    }
    items3[4] = tmp61;
    obj10.children = items3;
    obj9.children = closure_31(closure_7, obj10);
    tmp46Result = tmp46(tmp47(tmp48[41]).TouchableHighlight, obj9);
    const tmp47Result = tmp47(tmp48[42]);
    const tmp51 = closure_31;
    const tmp52 = closure_7;
  }
  return tmp46Result;
}
function PlanSection(label) {
  let plans;
  let shouldShowModernBoostFlow;
  ({ plans, shouldShowModernBoostFlow } = label);
  if (shouldShowModernBoostFlow === undefined) {
    shouldShowModernBoostFlow = false;
  }
  const arg1 = shouldShowModernBoostFlow;
  ({ purchase: closure_1, analyticsLoadId: closure_2, trackNewPaymentFlow: closure_3, trackPaymentFlowStep: closure_4, subscription: closure_5, shouldRemoveYearlyUpsell: closure_6 } = label);
  let tmp;
  let isIOSResult;
  tmp = useNativeCheckoutStore((getCheckoutContextRecord) => getCheckoutContextRecord.getCheckoutContextRecord());
  let obj = arg1(dependencyMap[43]);
  isIOSResult = obj.isIOS();
  if (isIOSResult) {
    isIOSResult = null != tmp;
  }
  const mapped = plans.map((plan) => callback(closure_39, {
    plan,
    subscription: closure_5,
    shouldShowModernBoostFlow,
    purchase(productId) {
      let obj = productId(tmp2[44]);
      const toggledIntervalProduct = obj.getToggledIntervalProduct(productId);
      let tmp2 = null;
      if (closure_8) {
        tmp2 = null;
        if (null != toggledIntervalProduct) {
          let availablePlanForItems;
          if (null != availablePlanForItems) {
            let obj1 = productId(tmp2[44]);
            availablePlanForItems = availablePlanForItems.getAvailablePlanForItems(obj1.getSubscriptionItemsForProduct(toggledIntervalProduct));
          }
          tmp2 = null;
          if (null != availablePlanForItems) {
            tmp2 = availablePlanForItems;
          }
        }
      }
      if (closure_8) {
        let tmp8 = null != tmp2;
      } else {
        tmp8 = null != toggledIntervalProduct;
        if (tmp8) {
          tmp8 = null != product.getProduct(toggledIntervalProduct);
        }
      }
      if (null != toggledIntervalProduct) {
        if (tmp8) {
          if (!closure_6) {
            obj = { fromStep: productId(tmp2[45]).PaymentFlowStep.PLAN_SELECT, toStep: productId(tmp2[45]).PaymentFlowStep.YEARLY_UPSELL, productId };
            callback(obj);
            obj = {
              marginBottom: null,
              flexGrow: null,
              flexShrink: null,
              importer() {
                      return arg0(tmp2[48])(tmp2[47], tmp2.paths).then((arg0) => {
                        let closure_0 = arg0.default;
                        return () => { ... };
                      });
                    }
            };
            toggledIntervalProduct(tmp2[46]).openLazy(obj);
          }
        }
      }
      obj1 = { fromStep: productId(tmp2[45]).PaymentFlowStep.PLAN_SELECT, toStep: productId(tmp2[45]).PaymentFlowStep.EXTERNAL_PAYMENT, productId };
      callback(obj1);
      return toggledIntervalProduct(productId, tmp2);
    }
  }, plan.productId));
  if (shouldShowModernBoostFlow) {
    obj = { title: label.label, hasIcons: true, children: mapped };
    let tmp5Result = tmp5(arg1(dependencyMap[49]).TableRowGroup, obj);
  } else {
    obj = { children: mapped };
    tmp5Result = tmp5(tmp, obj);
  }
  return tmp5Result;
}
function CurrentPlanRow(subscription) {
  subscription = subscription.subscription;
  const arg1 = subscription;
  ({ trackPaymentFlowStep: closure_1, trackNewPaymentFlow: closure_2, purchase: closure_3, analyticsLoadId: closure_4, shouldRemoveYearlyUpsell: closure_5 } = subscription);
  let productIdFromSubscription;
  let toggledIntervalProduct;
  const tmp = callback6();
  if (subscription.showCurrentPlan) {
    if (null != subscription) {
      productIdFromSubscription = arg1(dependencyMap[44]).getProductIdFromSubscription(subscription, true);
      const obj4 = arg1(dependencyMap[44]);
      const premiumBundledItemsFromProductId = arg1(dependencyMap[44]).getPremiumBundledItemsFromProductId(productIdFromSubscription);
      const premiumTier = premiumBundledItemsFromProductId.premiumTier;
      if (null != premiumTier) {
        let PREMIUM_GUILD = callback3(premiumTier);
      } else {
        PREMIUM_GUILD = constants7.PREMIUM_GUILD;
      }
      let obj = arg1(dependencyMap[44]);
      toggledIntervalProduct = obj.getToggledIntervalProduct(productIdFromSubscription);
      obj = { style: tmp.currentPlanGradient, colors: PREMIUM_GUILD, start: constants4.START, end: constants4.END };
      obj = { plan: premiumBundledItemsFromProductId, subscription };
      let tmp15 = null == toggledIntervalProduct;
      const obj5 = arg1(dependencyMap[44]);
      const tmp8 = closure_30;
      if (tmp15) {
        tmp15 = subscription.status !== constants6.CANCELED;
      }
      obj.disabled = tmp15;
      obj.hasBackground = true;
      obj.purchase = function purchase() {
        let yearly;
        let obj = subscription(closure_2[44]);
        const productIdsForBothIntervals = obj.getProductIdsForBothIntervals(productIdFromSubscription);
        ({ monthly: closure_0, yearly } = productIdsForBothIntervals);
        let status;
        if (null != subscription) {
          status = subscription.status;
        }
        if (status === constants.CANCELED) {
          if (null != yearly) {
            if (!closure_5) {
              obj = { fromStep: subscription(closure_2[45]).PaymentFlowStep.PLAN_SELECT, toStep: subscription(closure_2[45]).PaymentFlowStep.YEARLY_UPSELL, productId: productIdFromSubscription };
              yearly(obj);
              obj = {
                marginBottom: null,
                flexGrow: null,
                flexShrink: null,
                importer() {
                        return callback(paths[48])(paths[47], paths.paths).then((arg0) => {
                          let closure_0 = arg0.default;
                          return (arg0) => {
                            const obj = {};
                            const merged = Object.assign(arg0);
                            obj["productId"] = closure_1;
                            // CreateGeneratorClosureLongIndex (0x67)
                            obj["continueWithUpsell"] = callback(closure_1);
                            // CreateGeneratorClosureLongIndex (0x67)
                            obj["continueWithDefault"] = callback(tmp);
                            return callback2(closure_0, obj);
                          };
                        });
                      }
              };
              yearly(closure_2[46]).openLazy(obj);
              const obj4 = yearly(closure_2[46]);
            }
          }
          const obj1 = { fromStep: subscription(closure_2[45]).PaymentFlowStep.PLAN_SELECT, toStep: subscription(closure_2[45]).PaymentFlowStep.EXTERNAL_PAYMENT, productId: productIdFromSubscription };
          yearly(obj1);
          const tmp22 = callback(productIdFromSubscription, closure_4);
        } else {
          let tmp6;
          if (null != toggledIntervalProduct) {
            if (null != product.getProduct(toggledIntervalProduct)) {
              const obj2 = { fromStep: subscription(closure_2[45]).PaymentFlowStep.PLAN_SELECT, toStep: subscription(closure_2[45]).PaymentFlowStep.EXTERNAL_PAYMENT, productId: toggledIntervalProduct };
              yearly(obj2);
              tmp6 = callback(toggledIntervalProduct, closure_4);
            }
          }
          return tmp6;
        }
      };
      obj.style = tmp.currentPlanRow;
      obj.children = closure_30(PlanRow, obj);
      return tmp8(importDefault(dependencyMap[50]), obj);
    }
  }
  return null;
}
function PlanSectionHeader(children) {
  const tmp = callback6();
  return callback4(arg1(dependencyMap[35]).LegacyText, { style: callback6().header, children: children.string });
}
function PlanSections(showCurrentPlan) {
  let analyticsLoadId;
  let isBoostPurchaseFlow;
  let subscription;
  ({ plans: closure_0, subscription } = showCurrentPlan);
  const importDefault = subscription;
  ({ isBoostPurchaseFlow, analyticsLoadId } = showCurrentPlan);
  const dependencyMap = analyticsLoadId;
  const trackPaymentFlowStep = showCurrentPlan.trackPaymentFlowStep;
  let closure_3 = trackPaymentFlowStep;
  const trackNewPaymentFlow = showCurrentPlan.trackNewPaymentFlow;
  let closure_4 = trackNewPaymentFlow;
  const purchase = showCurrentPlan.purchase;
  let productIdFromSubscription;
  let shouldRemoveYearlyUpsell;
  let useNativeCheckoutStore;
  const tmp = callback6();
  let closure_6 = useNativeCheckoutStore((getCheckoutContextRecord) => getCheckoutContextRecord.getCheckoutContextRecord());
  productIdFromSubscription = null;
  if (null != subscription) {
    let obj = arg1(dependencyMap[44]);
    productIdFromSubscription = obj.getProductIdFromSubscription(subscription, false);
  }
  shouldRemoveYearlyUpsell = isBoostPurchaseFlow;
  if (isBoostPurchaseFlow) {
    shouldRemoveYearlyUpsell = arg1(dependencyMap[51]).getShouldRemoveYearlyUpsell("PremiumPlanSelect");
    const obj2 = arg1(dependencyMap[51]);
  }
  if (isBoostPurchaseFlow) {
    isBoostPurchaseFlow = arg1(dependencyMap[51]).getMobileBoostingEnabled("PremiumPlanSelect");
    const obj3 = arg1(dependencyMap[51]);
  }
  useNativeCheckoutStore = isBoostPurchaseFlow;
  obj = {};
  const items = [tmp.container, ];
  if (isBoostPurchaseFlow) {
    isBoostPurchaseFlow = tmp.boostContainer;
  }
  items[1] = isBoostPurchaseFlow;
  obj.style = items;
  obj = { subscription, analyticsLoadId, purchase, trackPaymentFlowStep, trackNewPaymentFlow, showCurrentPlan: showCurrentPlan.showCurrentPlan, shouldRemoveYearlyUpsell };
  const items1 = [
    callback4(CurrentPlanRow, obj),
    items.map((predicate) => {
      predicate = predicate.predicate;
      const found = predicate.filter((productId) => {
        let tmp = productId.productId !== closure_7;
        if (tmp) {
          tmp = !predicate(closure_2[44]).productsHaveSamePerks(productId.productId, closure_7);
          const obj = predicate(closure_2[44]);
        }
        if (tmp) {
          tmp = predicate(productId);
        }
        if (tmp) {
          tmp = productId.premiumTier !== TIER_1.TIER_1;
        }
        if (tmp) {
          let tmp9 = !predicate(closure_2[43]).isIOS();
          if (!tmp9) {
            tmp9 = null == availablePlanForItems;
          }
          if (!tmp9) {
            tmp9 = null != availablePlanForItems.getAvailablePlanForItems(predicate(closure_2[44]).getSubscriptionItemsForProduct(productId.productId));
            const obj3 = predicate(closure_2[44]);
          }
          tmp = tmp9;
          const obj2 = predicate(closure_2[43]);
        }
        if (tmp) {
          let flag = true;
          if (null != closure_7) {
            const tmp20 = predicate(closure_2[52]).AppStorePremiumProductIdsToPremiumBundledItems[tmp16];
            flag = null != tmp20.premiumTier || productId.numPremiumGuild >= tmp20.numPremiumGuild;
            const tmp21 = null != tmp20.premiumTier || productId.numPremiumGuild >= tmp20.numPremiumGuild;
          }
          tmp = flag;
        }
        return tmp;
      });
      if (0 === found.length) {
        return null;
      } else {
        const label = predicate.getLabel();
        let obj = {};
        let tmp3 = !isBoostPurchaseFlow;
        if (tmp3) {
          obj = { string: label };
          tmp3 = callback(closure_42, obj);
        }
        const items = [tmp3, ];
        obj = { trackPaymentFlowStep, trackNewPaymentFlow, analyticsLoadId, plans: found, label, shouldShowModernBoostFlow: isBoostPurchaseFlow, purchase, subscription, shouldRemoveYearlyUpsell };
        items[1] = callback(closure_40, obj);
        obj.children = items;
        return closure_31(productIdFromSubscription, obj, label);
      }
    })
  ];
  obj.children = items1;
  return closure_31(productIdFromSubscription, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const importAllResult = importAll(dependencyMap[2]);
({ Image: closure_6, View: closure_7, ScrollView: closure_8 } = arg1(dependencyMap[3]));
const useNativeCheckoutStore = arg1(dependencyMap[4]).useNativeCheckoutStore;
let closure_10 = importDefault(dependencyMap[5]);
let closure_11 = importDefault(dependencyMap[6]);
let closure_12 = importDefault(dependencyMap[7]);
let closure_13 = importDefault(dependencyMap[8]);
const tmp2 = arg1(dependencyMap[3]);
({ setIsPurchasing: closure_14, usePremiumPlanSelectStore: closure_15 } = arg1(dependencyMap[9]));
const tmp3 = arg1(dependencyMap[9]);
({ NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: closure_16, PremiumSubscriptionSKUs: closure_17, PremiumTypes: closure_18, SubscriptionIntervalTypes: closure_19, SubscriptionPlans: closure_20 } = arg1(dependencyMap[10]));
const tmp4 = arg1(dependencyMap[10]);
({ AnalyticEvents: closure_21, AnalyticsObjects: closure_22, AnalyticsObjectTypes: closure_23, Fonts, HorizontalGradient: closure_24, PaymentGateways: closure_25, SubscriptionStatusTypes: closure_26, USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING } = arg1(dependencyMap[11]));
const tmp5 = arg1(dependencyMap[11]);
({ getPremiumGradientColor: closure_27, Gradients: closure_28 } = arg1(dependencyMap[12]));
const ItemPurchaseType = arg1(dependencyMap[13]).ItemPurchaseType;
const tmp6 = arg1(dependencyMap[12]);
({ jsx: closure_30, jsxs: closure_31, Fragment: closure_32 } = arg1(dependencyMap[14]));
let obj1 = arg1(dependencyMap[15]);
let obj = {};
obj = {};
const merged = Object.assign(importDefault(dependencyMap[16])(Fonts.DISPLAY_EXTRABOLD, undefined, 24));
obj["marginTop"] = 16;
obj["color"] = arg1(dependencyMap[17]).DARK_WHITE_500_LIGHT_BLACK_500;
obj.header = obj;
obj1 = { display: "M12 12H10.5V10.5H12V12Z", flexDirection: "#FCC0F4", marginTop: "M13.5 10.5H12V9H13.5V10.5Z", flexGrow: "#FCC0F4", flexShrink: "M15 9H13.5V7.5H15V9Z", height: "#FCC0F4", marginLeft: "M12 18H10.5V16.5H12V18Z", borderRadius: importDefault(dependencyMap[18]).radii.sm, backgroundColor: arg1(dependencyMap[17]).DARK_PRIMARY_630_LIGHT_PRIMARY_230 };
obj.row = obj1;
obj.rowDisabled = { opacity: 0.5 };
obj.imgWumpusNitro = {};
obj.imgBoost = {};
obj.imgWumpusNitroBoost = { "Null": false, "Null": false };
obj.imgWumpusNitroClassic = {};
obj.imgWumpusNitroClassicBoost = { "Null": false, "Null": false };
obj.imgWumpusNitroTier0 = {};
const tmp7 = arg1(dependencyMap[14]);
obj.rowText = { fontSize: 16, color: arg1(dependencyMap[17]).DARK_WHITE_500_LIGHT_BLACK_500 };
const obj3 = { marginLeft: "isArray", width: "key", aspectRatio: "Array", fontFamily: Fonts.PRIMARY_SEMIBOLD };
obj.rowPlanDescription = obj3;
const obj4 = { "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, fontFamily: Fonts.PRIMARY_MEDIUM };
obj.rowPlanDescriptionSubtext = obj4;
obj.rowPrice = { marginLeft: "auto" };
obj.purchasingSpinner = { overflow_top: false, GAME_SERVERS: false, leading: false, targetOrbAmount: false, subtitleLink: false, handleWaitForRemoteSession: false, targetOrbAmount: false };
obj.container = { "Bool(false)": "<string:879886337>", "Bool(false)": "<string:771751936>" };
const obj2 = { fontSize: 16, color: arg1(dependencyMap[17]).DARK_WHITE_500_LIGHT_BLACK_500 };
obj.currentPlanGradient = { marginTop: 20, borderRadius: importDefault(dependencyMap[18]).radii.sm };
obj.currentPlanRow = { maxWidth: "isArray", paddingHorizontal: "constructor", width: "type", alignSelf: "isArray" };
obj.loadingSpinnerContainer = { 9223372036854775807: 0, 618913616341: 0, 0: 0, 9223372036854775807: 0 };
obj.offPlatformSubscriptionMessage = { margin: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING };
obj.premiumHeaderLabel = { paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING, marginTop: 8 };
const obj5 = { marginTop: 20, borderRadius: importDefault(dependencyMap[18]).radii.sm };
obj.boostContainer = { rowGap: importDefault(dependencyMap[18]).space.PX_24 };
obj.boostRowIcon = { "Null": false, "Null": false };
let closure_33 = obj1.createStyles(obj);
let closure_34 = { [importDefault(dependencyMap[24])]: "imgWumpusNitro", [importDefault(dependencyMap[26])]: "imgWumpusNitroBoost", [importDefault(dependencyMap[23])]: "imgWumpusNitroClassic", [importDefault(dependencyMap[25])]: "imgWumpusNitroClassicBoost", [importDefault(dependencyMap[22])]: "imgWumpusNitroTier0", [importDefault(dependencyMap[21])]: "imgBoost" };
const items = [
  {
    getLabel() {
      const intl = arg1(dependencyMap[19]).intl;
      return intl.string(arg1(dependencyMap[19]).t.A4BfLn);
    },
    predicate(premiumTier) {
      let tmp = null != premiumTier.premiumTier;
      if (tmp) {
        tmp = 0 === premiumTier.numPremiumGuild;
      }
      return tmp;
    }
  },
  {
    getLabel() {
      const intl = arg1(dependencyMap[19]).intl;
      return intl.string(arg1(dependencyMap[19]).t.lyXyD0);
    },
    predicate(premiumTier) {
      let tmp = null != premiumTier.premiumTier;
      if (tmp) {
        tmp = 0 !== premiumTier.numPremiumGuild;
      }
      return tmp;
    }
  },
  {
    getLabel() {
      const intl = arg1(dependencyMap[19]).intl;
      return intl.string(arg1(dependencyMap[19]).t.rPoOQW);
    },
    predicate(premiumTier) {
      let tmp = null == premiumTier.premiumTier;
      if (tmp) {
        tmp = 0 !== premiumTier.numPremiumGuild;
      }
      return tmp;
    }
  }
];
let closure_36 = importAllResult.forwardRef(function PremiumPlanSelect(isBoostPurchaseFlow) {
  let analyticsLocation;
  let applicationId;
  let planId;
  let predicate;
  let showCurrentPlan;
  let tmp = arg1;
  ({ predicate, showCurrentPlan } = isBoostPurchaseFlow);
  if (showCurrentPlan === undefined) {
    showCurrentPlan = true;
  }
  let flag = isBoostPurchaseFlow.isBoostPurchaseFlow;
  if (flag === undefined) {
    flag = false;
  }
  ({ analyticsLocation, planId, applicationId } = isBoostPurchaseFlow);
  const arg1 = applicationId;
  let importDefault;
  let dependencyMap;
  let closure_3;
  let callback;
  let importAllResult;
  let patchOrderLineItems;
  let orderRequired;
  let stateFromStores;
  const tmp2 = callback6();
  const analyticsLocations = importDefault(dependencyMap[57])().analyticsLocations;
  let obj = arg1(dependencyMap[31]);
  const items = [closure_12, closure_11];
  const tmp3 = callback(obj.useStateFromStoresArray(items, () => {
    const items = [closure_12.hasFetchedSubscriptions(), loadedForPremiumSKUs.isLoadedForPremiumSKUs()];
    return items;
  }), 2);
  importDefault = tmp4;
  const items1 = [tmp3[1]];
  const effect = importAllResult.useEffect(() => {
    if (!tmp4) {
      const premiumSubscriptionPlans = applicationId(basePurchaseFlowAnalyticsFields[58]).fetchPremiumSubscriptionPlans();
      const obj = applicationId(basePurchaseFlowAnalyticsFields[58]);
    }
  }, items1);
  const tmp6 = importDefault(dependencyMap[59])(() => applicationId(basePurchaseFlowAnalyticsFields[45]).getNewAnalyticsLoadId());
  let obj1 = arg1(dependencyMap[45]);
  obj = { analyticsLoadId: tmp6 };
  obj = { object: constants2.BUTTON_CTA, object_type: constants3.BUY };
  const merged = Object.assign(analyticsLocation);
  obj.analyticsLocation = obj;
  obj.analyticsLocations = analyticsLocations;
  const basePurchaseFlowAnalyticsFields = obj1.getBasePurchaseFlowAnalyticsFields(obj);
  dependencyMap = basePurchaseFlowAnalyticsFields;
  if (null != planId) {
    obj1 = { subscription_plan_id: planId };
    let obj2 = obj1;
  } else {
    obj2 = {};
  }
  closure_3 = obj2;
  importDefault(dependencyMap[60])(() => {
    let obj = applicationId(basePurchaseFlowAnalyticsFields[61]);
    obj = {};
    const merged = Object.assign(basePurchaseFlowAnalyticsFields);
    const merged1 = Object.assign(obj2);
    obj["application_id"] = applicationId;
    const result = obj.trackPaymentFlowStartedAnalyticsAndCTP(obj);
  });
  const activeSubscription = useNativeCheckoutStore((activeSubscription) => ({ activeSubscription: activeSubscription.checkoutInitParameters.activeSubscription, order: activeSubscription.orderRecord })).activeSubscription;
  let obj6 = arg1(dependencyMap[62]);
  const handlePremiumPurchase = obj6.useHandlePremiumPurchase();
  callback = handlePremiumPurchase;
  let obj7 = arg1(dependencyMap[63]);
  const navigation = obj7.useNavigation();
  importAllResult = navigation;
  let obj8 = arg1(dependencyMap[64]);
  const isPaymentsBlocked = obj8.useIsPaymentsBlocked();
  let obj9 = arg1(dependencyMap[65]);
  if (null != activeSubscription) {
    const obj3 = { subscriptionId: activeSubscription.id, renewal: true, analyticsLocations, analyticsLocation: importDefault(dependencyMap[66]).PREMIUM_PLAN_SELECT };
    let obj4 = obj3;
  } else {
    obj4 = {};
  }
  const first = callback(obj9.useFetchSubscriptionInvoicePreview(obj4), 1)[0];
  const tmp16 = useNativeCheckoutStore((patchOrderLineItems) => ({ patchOrderLineItems: patchOrderLineItems.patchOrderLineItems, isPatchOrderLoading: patchOrderLineItems.isPatchOrderLoading, orderRequired: patchOrderLineItems.orderRequired }));
  patchOrderLineItems = tmp16.patchOrderLineItems;
  orderRequired = tmp16.orderRequired;
  let obj12 = arg1(dependencyMap[31]);
  const items2 = [closure_12];
  stateFromStores = obj12.useStateFromStores(items2, () => closure_12.getPremiumTypeSubscription());
  const items3 = [basePurchaseFlowAnalyticsFields.location, applicationId, handlePremiumPurchase, navigation, patchOrderLineItems, orderRequired, stateFromStores];
  if (null == predicate) {
    return null;
  } else {
    if (!tmp3[0]) {
      const obj5 = { style: tmp2.loadingSpinnerContainer, children: callback4(arg1(dependencyMap[40]).ActivityIndicator, { font: 397, dx: 97 }) };
      callback4(orderRequired, obj5);
    }
    if (isPaymentsBlocked) {
      obj6 = { ref: tmp };
      obj7 = { top: 40 };
      obj6.contentInset = obj7;
      tmp = importDefault(dependencyMap[69]);
      obj6.children = callback4(tmp, {});
      let tmp26Result = callback4(stateFromStores, obj6);
    } else {
      if (null != activeSubscription) {
        if (activeSubscription.isOnPlatformMatchingExternalPaymentGateway) {
          let obj14 = arg1(dependencyMap[44]);
          let obj15 = arg1(dependencyMap[44]);
        }
        obj8 = {};
        let tmp28 = null != first;
        if (tmp28) {
          obj9 = {};
          const obj10 = { style: tmp2.premiumHeaderLabel };
          const intl = arg1(dependencyMap[19]).intl;
          obj10.children = intl.string(arg1(dependencyMap[19]).t.ITurwY);
          const items4 = [callback4(arg1(dependencyMap[29]).Text, obj10), ];
          const obj11 = { subscription: activeSubscription, renewalInvoicePreview: first };
          items4[1] = callback4(arg1(dependencyMap[70]).PremiumSubscriptionHeader, obj11);
          obj9.children = items4;
          tmp28 = callback5(closure_32, obj9);
        }
        const items5 = [tmp28, ];
        obj12 = { style: tmp2.offPlatformSubscriptionMessage, variant: "text-md/semibold" };
        const obj13 = { shouldAllowExternalManagement: true };
        obj12.children = arg1(dependencyMap[71]).getExternalManagementMessage(activeSubscription, obj13);
        items5[1] = callback4(arg1(dependencyMap[29]).Text, obj12);
        obj8.children = items5;
        tmp26Result = callback5(stateFromStores, obj8);
        const obj22 = arg1(dependencyMap[71]);
        const tmp26 = callback5;
        const tmp27 = stateFromStores;
      }
      obj14 = { ref: tmp };
      obj15 = {
        subscription: activeSubscription,
        plans: arg1(dependencyMap[44]).getPremiumBundlesWithPredicate(predicate),
        showCurrentPlan,
        isBoostPurchaseFlow: flag,
        analyticsLoadId: tmp6,
        trackPaymentFlowStep(arg0) {
              let fromStep;
              let productId;
              let toStep;
              ({ productId, fromStep, toStep } = arg0);
              let obj = tmp4(basePurchaseFlowAnalyticsFields[72]);
              obj = { application_id: applicationId };
              const merged = Object.assign(applicationId(basePurchaseFlowAnalyticsFields[45]).getPaymentFlowStepAnalyticsFields(basePurchaseFlowAnalyticsFields, { from_step: fromStep, to_step: toStep, subscription_plan_gateway_plan_id: productId }));
              obj.track(constants.PAYMENT_FLOW_STEP, obj);
            },
        trackNewPaymentFlow(arg0) {
              let newFlowAnalyticsLoadId;
              let productId;
              ({ newFlowAnalyticsLoadId, productId } = arg0);
              let obj = applicationId(basePurchaseFlowAnalyticsFields[61]);
              obj = {};
              const merged = Object.assign(basePurchaseFlowAnalyticsFields);
              obj["subscription_plan_gateway_plan_id"] = productId;
              obj["load_id"] = newFlowAnalyticsLoadId;
              obj["application_id"] = applicationId;
              const result = obj.trackPaymentFlowStartedAnalyticsAndCTP(obj);
            },
        purchase: tmp18
      };
      obj14.children = callback4(PlanSections, obj15);
      tmp26Result = callback4(stateFromStores, obj14);
      const obj26 = arg1(dependencyMap[44]);
    }
  }
});
const obj6 = { rowGap: importDefault(dependencyMap[18]).space.PX_24 };
const obj7 = {
  getLabel() {
    const intl = arg1(dependencyMap[19]).intl;
    return intl.string(arg1(dependencyMap[19]).t.A4BfLn);
  },
  predicate(premiumTier) {
    let tmp = null != premiumTier.premiumTier;
    if (tmp) {
      tmp = 0 === premiumTier.numPremiumGuild;
    }
    return tmp;
  }
};
const result = arg1(dependencyMap[75]).fileFinishedImporting("modules/premium/native/PremiumPlanSelect.tsx");

export default function PremiumPlanSelectWithOrderCTX(isBoostPurchaseFlow) {
  const arg1 = isBoostPurchaseFlow;
  let obj = arg1(dependencyMap[63]);
  const navigation = obj.useNavigation();
  const importDefault = navigation;
  let obj1 = arg1(dependencyMap[31]);
  const items = [closure_12];
  const stateFromStores = obj1.useStateFromStores(items, () => closure_12.getPremiumTypeSubscription());
  const NitroACOMSubscriptionExperiment = arg1(dependencyMap[73]).NitroACOMSubscriptionExperiment;
  let obj2 = arg1(dependencyMap[43]);
  if (obj2.isIOS()) {
    NitroACOMSubscriptionExperiment.useConfig({ location: "PremiumPlanSelectWithOrderCTX" }).enabled ? tmp4.APPLE_ADVANCED_COMMERCE : tmp4.APPLE;
  } else {
    let paymentGateway = tmp4.GOOGLE;
    if (null != stateFromStores) {
      paymentGateway = stateFromStores.paymentGateway;
    }
    obj = { subscriptionPlanId: PREMIUM_YEAR_TIER_2.PREMIUM_YEAR_TIER_2 };
    let obj4 = arg1(dependencyMap[20]);
    obj.skuId = obj4.castPremiumSubscriptionAsSkuId(TIER_2.TIER_2);
    obj.quantity = 1;
    const items1 = [obj];
    let obj5 = arg1(dependencyMap[31]);
    const items2 = [closure_12];
    const stateFromStores1 = obj5.useStateFromStores(items2, () => closure_12.hasFetchedSubscriptions());
    const dependencyMap = stateFromStores1;
    const items3 = [stateFromStores1];
    const effect = importAllResult.useEffect(() => {
      if (!stateFromStores1) {
        const subscriptions = arg0(stateFromStores1[68]).fetchSubscriptions();
        const obj = arg0(stateFromStores1[68]);
      }
    }, items3);
    const items4 = [closure_10];
    const stateFromStores2 = arg1(dependencyMap[31]).useStateFromStores(items4, () => {
      let tmp;
      if (null != arg0.guildId) {
        const guild = guild.getGuild(arg0.guildId);
        let name;
        if (null != guild) {
          name = guild.name;
        }
        tmp = name;
      }
      return tmp;
    });
    let closure_3 = stateFromStores2;
    let mobileBoostingEnabled = true === isBoostPurchaseFlow.isBoostPurchaseFlow;
    if (mobileBoostingEnabled) {
      mobileBoostingEnabled = arg1(dependencyMap[51]).getMobileBoostingEnabled("PremiumPlanSelect");
      const obj8 = arg1(dependencyMap[51]);
    }
    let closure_4 = mobileBoostingEnabled;
    const items5 = [navigation, mobileBoostingEnabled, stateFromStores2];
    const layoutEffect = importAllResult.useLayoutEffect(() => {
      let obj = {};
      if (mobileBoostingEnabled) {
        if (null != stateFromStores2) {
          const intl2 = arg0(stateFromStores1[19]).intl;
          obj = { server: stateFromStores2 };
          let formatToPlainStringResult = intl2.formatToPlainString(arg0(stateFromStores1[19]).t.LcefAL, obj);
        }
        obj.title = formatToPlainStringResult;
        tmp2(obj);
      }
      const intl = arg0(stateFromStores1[19]).intl;
      formatToPlainStringResult = intl.string(arg0(stateFromStores1[19]).t.u95Dt4);
    }, items5);
    if (stateFromStores1) {
      if (null != paymentGateway) {
        obj = {
          paymentGateway,
          orderRequired: paymentGateway === constants5.APPLE_ADVANCED_COMMERCE,
          skuIds: [],
          defaultPlans: items1,
          isGift: false,
          activeSubscription: stateFromStores,
          onOrderRetryCancellation() {
                  let arr = navigation;
                  if (navigation.canGoBack()) {
                    arr.goBack();
                  } else {
                    arr = arr.pop();
                  }
                }
        };
        obj1 = {};
        const merged = Object.assign(isBoostPurchaseFlow);
        obj.children = callback4(closure_36, obj1);
        return callback4(importDefault(dependencyMap[74]), obj);
      }
      let str2 = "Android";
      if (obj12.isIOS()) {
        str2 = "iOS";
      }
      obj2 = {};
      const obj3 = { variant: "display-md" };
      const intl = arg1(dependencyMap[19]).intl;
      obj4 = { mobilePlatform: str2 };
      obj3.children = intl.format(arg1(dependencyMap[19]).t.CnoyAN, obj4);
      obj2.children = callback4(arg1(dependencyMap[29]).Text, obj3);
      return callback4(closure_7, obj2);
    } else {
      obj5 = { style: tmp.loadingSpinnerContainer, children: callback4(arg1(dependencyMap[40]).ActivityIndicator, { font: 397, dx: 97 }) };
      return callback4(closure_7, obj5);
    }
    const obj7 = arg1(dependencyMap[31]);
  }
};
