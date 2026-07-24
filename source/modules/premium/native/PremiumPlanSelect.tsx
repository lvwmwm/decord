// Module ID: 12525
// Function ID: 96974
// Name: BoostPurchaseNitroBanner
// Dependencies: [5, 57, 31, 27, 6663, 1838, 3781, 3782, 5619, 12526, 1851, 653, 6671, 4113, 33, 4130, 5052, 4973, 689, 4541, 5807, 4126, 1212, 3776, 12527, 12528, 12529, 12530, 12531, 12532, 7486, 3834, 566, 12533, 7117, 4066, 1273, 7402, 7403, 5165, 12534, 5584, 5217, 3976, 478, 6648, 7156, 4471, 12535, 1934, 5501, 4554, 12537, 5622, 3791, 4337, 6649, 7161, 5462, 5638, 5450, 4559, 7157, 7118, 1456, 6656, 7414, 5482, 7120, 4451, 7187, 7378, 6642, 675, 7194, 7195, 2]
// Exports: default

// Module 12525 (BoostPurchaseNitroBanner)
import closure_3 from "_createForOfIteratorHelperLoose";
import getHeaderBackground from "getHeaderBackground";
import importAllResult from "map";
import get_ActivityIndicator from "registerAsset";
import { useNativeCheckoutStore } from "context";
import closure_10 from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import usePremiumPlanSelectStore from "usePremiumPlanSelectStore";
import GuildFeatures from "GuildFeatures";
import ME from "ME";
import items from "items";
import { ItemPurchaseType } from "CustomCheckoutFlow";
import jsxProd from "getViewerProductId";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let Fonts;
let USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING;
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
let closure_29;
let closure_30;
let closure_32;
let closure_33;
let closure_34;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
function BoostPurchaseNitroBanner() {
  const tmp = callback5();
  let obj = { align: "center", spacing: importDefault(689).space.PX_12, style: tmp.nitroBanner };
  const items = [callback3(require(5807) /* AccountAgeTier10LargeBadge */.TreasureChestBannerSpotIllustration, { width: 117, height: 93, accessible: false }), ];
  obj = { align: "center", spacing: importDefault(689).space.PX_4 };
  obj = { variant: "text-md/semibold", color: "text-default", style: tmp.nitroBannerText };
  const intl = require(1212) /* getSystemLocale */.intl;
  const obj1 = {};
  const obj2 = { variant: "text-md/semibold", color: "text-feedback-positive" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj2.children = intl2.format(require(1212) /* getSystemLocale */.t.RmVM19, { percentageOff: closure_16 });
  obj1.discount = callback3(require(4126) /* Text */.Text, obj2, "discount");
  obj.children = intl.format(require(1212) /* getSystemLocale */.t.jbrHpT, obj1);
  const items1 = [callback3(require(4126) /* Text */.Text, obj), ];
  const obj4 = { variant: "text-sm/medium", color: "text-muted", style: tmp.nitroBannerText };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj4.children = intl3.format(require(1212) /* getSystemLocale */.t.HYpETY, { boostCount: closure_17 });
  items1[1] = callback3(require(4126) /* Text */.Text, obj4);
  obj.children = items1;
  items[1] = callback4(require(4541) /* Stack */.Stack, obj);
  obj.children = items;
  return callback4(require(4541) /* Stack */.Stack, obj);
}
function getPlanDescription(premiumTier) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  if (null == premiumTier.premiumTier) {
    const intl = require(1212) /* getSystemLocale */.intl;
    let obj = { numSubscriptions: premiumTier.numPremiumGuild };
    let formatToPlainStringResult = intl.formatToPlainString(require(1212) /* getSystemLocale */.t.gDsyB9, obj);
  } else if (0 === premiumTier.numPremiumGuild) {
    formatToPlainStringResult = require(3776) /* _createForOfIteratorHelperLoose */.getPremiumTypeDisplayName(premiumTier.premiumTier);
    const obj3 = require(3776) /* _createForOfIteratorHelperLoose */;
  } else {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    const formatToPlainString = intl2.formatToPlainString;
    if (flag) {
      obj = { numSubscriptions: premiumTier.numPremiumGuild };
      formatToPlainStringResult = formatToPlainString(tmp11(1212).t.gDsyB9, obj);
    } else {
      if (premiumTier.premiumTier === closure_20.TIER_1) {
        let u6dBsN = require(1212) /* getSystemLocale */.t.sexoHq;
      } else {
        u6dBsN = require(1212) /* getSystemLocale */.t.u6dBsN;
      }
      obj = { num: premiumTier.numPremiumGuild };
      formatToPlainStringResult = formatToPlainString(u6dBsN, obj);
    }
    tmp11 = require;
  }
  return formatToPlainStringResult;
}
function BoostDeltaPriceTrailing(arg0) {
  let interval;
  let price;
  ({ price, interval } = arg0);
  let obj = { direction: "horizontal", align: "center", spacing: importDefault(689).space.PX_4 };
  obj = { size: "xs", color: importDefault(689).colors.ICON_FEEDBACK_POSITIVE };
  const items = [callback3(require(7486) /* NitroWheelIcon */.NitroWheelIcon, obj), ];
  obj = { variant: "text-sm/medium", color: "text-muted" };
  const intl = require(1212) /* getSystemLocale */.intl;
  if (interval === constants.MONTH) {
    rS8FA_ = require(1212) /* getSystemLocale */.t.AbOLNu;
  } else {
    rS8FA_ = require(1212) /* getSystemLocale */.t["rS8FA+"];
  }
  const obj2 = { variant: "text-sm/semibold", color: "text-feedback-positive", children: price };
  obj.children = intl.format(rS8FA_, { price: callback3(require(4126) /* Text */.Text, obj2, "price") });
  items[1] = callback3(require(4126) /* Text */.Text, obj);
  obj.children = items;
  return closure_33(require(4541) /* Stack */.Stack, obj);
}
function PlanRow(plan) {
  let importDefault;
  let subscription;
  plan = plan.plan;
  ({ purchase: importDefault, subscription } = plan);
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
  let flag4 = plan.showBoostOnlyLabels;
  if (flag4 === undefined) {
    flag4 = false;
  }
  let prop = plan.recommendedBoostCount;
  if (prop === undefined) {
    prop = null;
  }
  let premiumTypeFromSubscription;
  flag = undefined;
  function onPress() {
    if (!flag) {
      if (null != subscription) {
        if (premiumTypeFromSubscription === outer1_20.TIER_2) {
          if (plan.premiumTier === outer1_20.TIER_0) {
            const obj = {
              subscription,
              mode: plan(subscription[38]).WhatYouLoseMode.DOWNGRADE,
              onContinue() {
                        return outer1_1(outer1_0.productId);
                      }
            };
            outer1_1(subscription[37])(obj);
            const tmp9 = outer1_1(subscription[37]);
          }
        }
      }
      callback(plan.productId);
    }
  }
  const tmp2 = callback5();
  const tmp4 = callback((purchasingProductId) => purchasingProductId.purchasingProductId === plan.productId);
  let obj = plan(subscription[31]);
  const token = obj.useToken(importDefault(subscription[18]).colors.ACTIVITY_TIMEBAR_PROGRESS_BACKGROUND);
  let obj1 = plan(subscription[32]);
  let items = [closure_13];
  const tmp6 = flag(obj1.useStateFromStoresArray(items, () => {
    const items = [outer1_13.getProduct(plan.productId), outer1_13.isBusy()];
    return items;
  }), 2);
  const first = tmp6[0];
  const tmp3 = callback((isPurchasing) => isPurchasing.isPurchasing);
  let obj2 = plan(subscription[33]);
  const premiumTier2DeltaPriceString = obj2.usePremiumTier2DeltaPriceString(plan, subscription, first, flag3);
  let obj3 = plan(subscription[34]);
  let checkoutPlanPriceString = obj3.useCheckoutPlanPriceString(plan.productId, first);
  if (null != premiumTier2DeltaPriceString) {
    checkoutPlanPriceString = premiumTier2DeltaPriceString;
  }
  if (null == checkoutPlanPriceString) {
    checkoutPlanPriceString = closure_18;
  }
  let tmp12 = plan.premiumTier === closure_20.TIER_2;
  const tmp8 = useNativeCheckoutStore((isPatchOrderLoading) => isPatchOrderLoading.isPatchOrderLoading || isPatchOrderLoading.isCreateOrderLoading);
  if (tmp12) {
    tmp12 = 0 === plan.numPremiumGuild;
  }
  let tmp13 = null;
  if (tmp12) {
    obj = {};
    const items1 = [, ];
    ({ rowText: arr2[0], rowPlanDescriptionSubtext: arr2[1] } = tmp2);
    obj.style = items1;
    const intl = plan(subscription[22]).intl;
    obj = { num: closure_17 };
    obj.children = intl.format(plan(subscription[22]).t.he52LA, obj);
    tmp13 = callback3(plan(subscription[36]).LegacyText, obj);
  }
  if (null == plan.premiumTier) {
    let tmp24 = importDefault(subscription[24]);
  } else if (0 !== plan.numPremiumGuild) {
    if (plan.premiumTier === closure_20.TIER_1) {
      tmp24 = importDefault(subscription[28]);
    } else {
      tmp24 = importDefault(subscription[29]);
    }
  } else {
    const premiumTier = plan.premiumTier;
    if (closure_20.TIER_0 === premiumTier) {
      tmp24 = importDefault(subscription[25]);
    } else if (closure_20.TIER_1 === premiumTier) {
      tmp24 = importDefault(subscription[26]);
    } else if (closure_20.TIER_2 === premiumTier) {
      tmp24 = importDefault(subscription[27]);
    }
  }
  const intl2 = plan(subscription[22]).intl;
  if (plan.interval === constants.MONTH) {
    rS8FA_ = plan(subscription[22]).t.AbOLNu;
  } else {
    rS8FA_ = plan(subscription[22]).t["rS8FA+"];
  }
  obj1 = { price: checkoutPlanPriceString };
  const formatToPlainStringResult = intl2.formatToPlainString(rS8FA_, obj1);
  if (tmp12) {
    const intl3 = plan(subscription[22]).intl;
    obj2 = { num: closure_17 };
    let formatToPlainStringResult1 = intl3.formatToPlainString(plan(subscription[22]).t.RTaZb4, obj2);
  }
  premiumTypeFromSubscription = null;
  if (null != subscription) {
    let obj8 = plan(subscription[23]);
    premiumTypeFromSubscription = obj8.getPremiumTypeFromSubscription(subscription);
  }
  if (!flag) {
    flag = tmp3;
  }
  if (!flag) {
    flag = tmp6[1];
  }
  if (!flag) {
    flag = tmp8;
  }
  if (flag3) {
    let tmp66 = null != prop;
    if (tmp66) {
      tmp66 = plan.premiumTier === closure_20.TIER_2;
    }
    if (tmp66) {
      tmp66 = plan.numPremiumGuild === prop;
    }
    obj3 = {};
    if (tmp18) {
      let tmp71Result = tmp71(importDefault(subscription[40]), { width: 32, height: 32 });
    } else if (tmp12) {
      const obj4 = { size: "xxs", color: importDefault(subscription[18]).colors.ICON_DEFAULT };
      tmp71Result = tmp71(plan(subscription[30]).NitroWheelIcon, obj4);
    } else {
      const obj5 = { style: tmp2.boostRowIcon, source: tmp24 };
      tmp71Result = tmp71(closure_6, obj5);
    }
    obj3.icon = tmp71Result;
    obj3.label = getPlanDescription(plan, flag4);
    if (tmp66) {
      const obj6 = { variant: "text-xs/semibold", color: "none", style: tmp2.recommendedText };
      const intl4 = plan(subscription[22]).intl;
      obj6.children = intl4.string(plan(subscription[22]).t.WThgAR);
      formatToPlainStringResult1 = callback3(plan(subscription[21]).Text, obj6);
    }
    obj3.subLabel = formatToPlainStringResult1;
    if (tmp4) {
      const obj7 = { animating: true, size: "small", color: token };
      let tmp86 = callback3(plan(subscription[41]).ActivityIndicator, obj7);
    } else if (null != premiumTier2DeltaPriceString) {
      obj8 = { price: premiumTier2DeltaPriceString, interval: plan.interval };
      tmp86 = callback3(BoostDeltaPriceTrailing, obj8);
    } else {
      const obj9 = { variant: "text-sm/medium", color: "text-muted", lineClamp: 1, children: formatToPlainStringResult };
      tmp86 = callback3(plan(subscription[21]).Text, obj9);
    }
    obj3.trailing = tmp86;
    obj3.arrow = true;
    if (flag) {
      flag = !tmp4;
    }
    obj3.disabled = flag;
    obj3.onPress = onPress;
    return callback3(plan(subscription[39]).TableRow, obj3);
  } else {
    let obj10 = { activeOpacity: 0.6, underlayColor: null, accessibilityRole: "button" };
    obj10 = plan(subscription[43]);
    let str2 = "none";
    if (!obj10.isThemeDark(tmp11)) {
      str2 = "none";
      if (flag2) {
        str2 = importDefault(subscription[18]).unsafe_rawColors.PRIMARY_230;
      }
    }
    obj10.underlayColor = str2;
    obj10.disabled = flag;
    obj10.onPress = onPress;
    const obj11 = {};
    const items2 = [tmp2.row, plan.style, ];
    let rowDisabled = flag;
    if (flag) {
      rowDisabled = !tmp4;
    }
    if (rowDisabled) {
      rowDisabled = tmp2.rowDisabled;
    }
    items2[2] = rowDisabled;
    obj11.style = items2;
    const obj12 = { style: tmp2[table[tmp24]], source: tmp24 };
    const items3 = [callback3(closure_6, obj12), , , , ];
    const obj13 = {};
    const items4 = [, ];
    ({ rowText: arr5[0], rowPlanDescription: arr5[1] } = tmp2);
    obj13.style = items4;
    obj13.children = getPlanDescription(plan, flag4);
    items3[1] = callback3(plan(subscription[36]).LegacyText, obj13);
    items3[2] = tmp13;
    const obj14 = {};
    const items5 = [, ];
    ({ rowText: arr6[0], rowPrice: arr6[1] } = tmp2);
    obj14.style = items5;
    obj14.children = formatToPlainStringResult;
    items3[3] = callback3(plan(subscription[36]).LegacyText, obj14);
    let tmp62 = null;
    if (tmp4) {
      const obj15 = { animating: true, size: "small", style: tmp2.purchasingSpinner, color: token };
      tmp62 = callback3(plan(subscription[41]).ActivityIndicator, obj15);
    }
    items3[4] = tmp62;
    obj11.children = items3;
    obj10.children = closure_33(closure_7, obj11);
    return callback3(plan(subscription[42]).TouchableHighlight, obj10);
  }
  tmp11 = importDefault(subscription[35])();
  tmp18 = null == plan.premiumTier || 0 !== plan.numPremiumGuild;
}
function PlanSection(showBoostOnlyLabels) {
  let closure_3;
  let getHeaderBackground;
  let closure_5;
  let closure_6;
  let closure_7;
  let closure_8;
  let dependencyMap;
  let plans;
  let shouldShowModernBoostFlow;
  ({ plans, shouldShowModernBoostFlow } = showBoostOnlyLabels);
  if (shouldShowModernBoostFlow === undefined) {
    shouldShowModernBoostFlow = false;
  }
  let flag = showBoostOnlyLabels.showBoostOnlyLabels;
  if (flag === undefined) {
    flag = false;
  }
  ({ recommendedBoostCount: dependencyMap, purchase: closure_3, analyticsLoadId: getHeaderBackground, trackNewPaymentFlow: closure_5, trackPaymentFlowStep: closure_6, subscription: closure_7, shouldRemoveYearlyUpsell: closure_8 } = showBoostOnlyLabels);
  let useNativeCheckoutStore;
  let c10;
  const tmp = useNativeCheckoutStore((getCheckoutContextRecord) => getCheckoutContextRecord.getCheckoutContextRecord());
  useNativeCheckoutStore = tmp;
  let obj = shouldShowModernBoostFlow(478);
  let isIOSResult = obj.isIOS();
  if (isIOSResult) {
    isIOSResult = null != tmp;
  }
  c10 = isIOSResult;
  const mapped = plans.map((plan) => outer1_32(outer1_42, {
    plan,
    subscription: closure_7,
    shouldShowModernBoostFlow,
    showBoostOnlyLabels: flag,
    recommendedBoostCount: closure_2,
    purchase(productId) {
      let closure_0 = productId;
      let obj = shouldShowModernBoostFlow(outer2_2[45]);
      const toggledIntervalProduct = obj.getToggledIntervalProduct(productId);
      let tmp2 = null;
      if (outer1_10) {
        tmp2 = null;
        if (null != toggledIntervalProduct) {
          let availablePlanForItems;
          if (null != outer1_9) {
            let obj1 = shouldShowModernBoostFlow(outer2_2[45]);
            availablePlanForItems = outer1_9.getAvailablePlanForItems(obj1.getSubscriptionItemsForProduct(toggledIntervalProduct));
          }
          tmp2 = null;
          if (null != availablePlanForItems) {
            tmp2 = availablePlanForItems;
          }
        }
      }
      let closure_2 = tmp2;
      if (outer1_10) {
        let tmp8 = null != tmp2;
      } else {
        tmp8 = null != toggledIntervalProduct;
        if (tmp8) {
          tmp8 = null != outer2_13.getProduct(toggledIntervalProduct);
        }
      }
      if (null != toggledIntervalProduct) {
        if (tmp8) {
          if (!outer1_8) {
            obj = { fromStep: shouldShowModernBoostFlow(outer2_2[46]).PaymentFlowStep.PLAN_SELECT, toStep: shouldShowModernBoostFlow(outer2_2[46]).PaymentFlowStep.YEARLY_UPSELL, productId };
            outer1_6(obj);
            obj = {
              importer() {
                      return shouldShowModernBoostFlow(outer3_2[49])(outer3_2[48], outer3_2.paths).then((arg0) => {
                        let closure_0 = arg0.default;
                        return () => { ... };
                      });
                    },
              hideActionSheet: true,
              isDismissable: true
            };
            flag(outer2_2[47]).openLazy(obj);
          }
        }
      }
      obj1 = { fromStep: shouldShowModernBoostFlow(outer2_2[46]).PaymentFlowStep.PLAN_SELECT, toStep: shouldShowModernBoostFlow(outer2_2[46]).PaymentFlowStep.EXTERNAL_PAYMENT, productId };
      outer1_6(obj1);
      return outer1_3(productId, outer1_4);
    }
  }, plan.productId));
  if (shouldShowModernBoostFlow) {
    obj = { title: showBoostOnlyLabels.label, hasIcons: true, children: mapped };
    let tmp5Result = tmp5(shouldShowModernBoostFlow(5501).TableRowGroup, obj);
  } else {
    obj = { children: mapped };
    tmp5Result = tmp5(closure_7, obj);
  }
  return tmp5Result;
}
function CurrentPlanRow(subscription) {
  let closure_3;
  let getHeaderBackground;
  let closure_5;
  let dependencyMap;
  let importDefault;
  subscription = subscription.subscription;
  ({ trackPaymentFlowStep: importDefault, trackNewPaymentFlow: dependencyMap, purchase: closure_3, analyticsLoadId: getHeaderBackground, shouldRemoveYearlyUpsell: closure_5 } = subscription);
  let productIdFromSubscription;
  let toggledIntervalProduct;
  const tmp = callback5();
  if (subscription.showCurrentPlan) {
    if (null != subscription) {
      productIdFromSubscription = subscription(6648).getProductIdFromSubscription(subscription, true);
      let obj4 = subscription(6648);
      const premiumBundledItemsFromProductId = subscription(6648).getPremiumBundledItemsFromProductId(productIdFromSubscription);
      const premiumTier = premiumBundledItemsFromProductId.premiumTier;
      if (null != premiumTier) {
        let PREMIUM_GUILD = callback2(premiumTier);
      } else {
        PREMIUM_GUILD = constants7.PREMIUM_GUILD;
      }
      let obj = subscription(6648);
      toggledIntervalProduct = obj.getToggledIntervalProduct(productIdFromSubscription);
      obj = { style: tmp.currentPlanGradient, colors: PREMIUM_GUILD, start: constants4.START, end: constants4.END };
      obj = { plan: premiumBundledItemsFromProductId, subscription };
      let tmp15 = null == toggledIntervalProduct;
      const obj5 = subscription(6648);
      const tmp8 = closure_32;
      if (tmp15) {
        tmp15 = subscription.status !== constants6.CANCELED;
      }
      obj.disabled = tmp15;
      obj.hasBackground = true;
      obj.purchase = function purchase() {
        let subscription;
        let yearly;
        let obj = subscription(outer1_2[45]);
        const productIdsForBothIntervals = obj.getProductIdsForBothIntervals(productIdFromSubscription);
        ({ monthly: subscription, yearly } = productIdsForBothIntervals);
        let status;
        if (null != subscription) {
          status = subscription.status;
        }
        if (status === outer1_28.CANCELED) {
          if (null != yearly) {
            if (!closure_5) {
              obj = { fromStep: subscription(outer1_2[46]).PaymentFlowStep.PLAN_SELECT, toStep: subscription(outer1_2[46]).PaymentFlowStep.YEARLY_UPSELL, productId: productIdFromSubscription };
              yearly(obj);
              obj = {
                importer() {
                        return subscription(outer2_2[49])(outer2_2[48], outer2_2.paths).then((arg0) => {
                          let closure_0 = arg0.default;
                          return (arg0) => {
                            const obj = {};
                            const merged = Object.assign(arg0);
                            obj["productId"] = outer2_1;
                            // CreateGeneratorClosureLongIndex (0x67)
                            obj["continueWithUpsell"] = outer4_3(outer2_1);
                            // CreateGeneratorClosureLongIndex (0x67)
                            obj["continueWithDefault"] = outer4_3(tmp);
                            return outer4_32(closure_0, obj);
                          };
                        });
                      },
                hideActionSheet: true,
                isDismissable: true
              };
              outer1_1(outer1_2[47]).openLazy(obj);
              const obj4 = outer1_1(outer1_2[47]);
            }
          }
          const obj1 = { fromStep: subscription(outer1_2[46]).PaymentFlowStep.PLAN_SELECT, toStep: subscription(outer1_2[46]).PaymentFlowStep.EXTERNAL_PAYMENT, productId: productIdFromSubscription };
          yearly(obj1);
          const tmp22 = callback(productIdFromSubscription, getHeaderBackground);
        } else {
          let tmp6;
          if (null != toggledIntervalProduct) {
            if (null != outer1_13.getProduct(toggledIntervalProduct)) {
              const obj2 = { fromStep: subscription(outer1_2[46]).PaymentFlowStep.PLAN_SELECT, toStep: subscription(outer1_2[46]).PaymentFlowStep.EXTERNAL_PAYMENT, productId: toggledIntervalProduct };
              yearly(obj2);
              tmp6 = callback(toggledIntervalProduct, getHeaderBackground);
            }
          }
          return tmp6;
        }
      };
      obj.style = tmp.currentPlanRow;
      obj.children = closure_32(PlanRow, obj);
      return tmp8(importDefault(4554), obj);
    }
  }
  return null;
}
function PlanSectionHeader(children) {
  const tmp = callback5();
  return callback3(require(1273) /* Button */.LegacyText, { style: callback5().header, children: children.string });
}
function PlanSections(showCurrentPlan) {
  let analyticsLoadId;
  let isBoostPurchaseFlow;
  let require;
  let subscription;
  ({ plans: require, subscription } = showCurrentPlan);
  ({ isBoostPurchaseFlow, analyticsLoadId } = showCurrentPlan);
  const trackPaymentFlowStep = showCurrentPlan.trackPaymentFlowStep;
  const trackNewPaymentFlow = showCurrentPlan.trackNewPaymentFlow;
  const purchase = showCurrentPlan.purchase;
  let productIdFromSubscription;
  let shouldRemoveYearlyUpsell;
  isBoostPurchaseFlow = undefined;
  let c10;
  let recommendedBoostCount;
  const tmp = callback5();
  let closure_6 = isBoostPurchaseFlow((getCheckoutContextRecord) => getCheckoutContextRecord.getCheckoutContextRecord());
  productIdFromSubscription = null;
  if (null != subscription) {
    let obj = require(analyticsLoadId[45]);
    productIdFromSubscription = obj.getProductIdFromSubscription(subscription, false);
  }
  shouldRemoveYearlyUpsell = isBoostPurchaseFlow;
  if (isBoostPurchaseFlow) {
    shouldRemoveYearlyUpsell = require(analyticsLoadId[52]).getShouldRemoveYearlyUpsell("PremiumPlanSelect");
    let obj2 = require(analyticsLoadId[52]);
  }
  if (isBoostPurchaseFlow) {
    isBoostPurchaseFlow = require(analyticsLoadId[52]).getMobileBoostingEnabled("PremiumPlanSelect");
    let obj3 = require(analyticsLoadId[52]);
  }
  let tmp10 = null != subscription;
  if (tmp10) {
    tmp10 = require(analyticsLoadId[23]).getPremiumTypeFromSubscription(subscription) === closure_20.TIER_2;
    const obj4 = require(analyticsLoadId[23]);
  }
  let tmp14 = isBoostPurchaseFlow;
  if (isBoostPurchaseFlow) {
    tmp14 = tmp10;
  }
  c10 = tmp14;
  recommendedBoostCount = null;
  if (isBoostPurchaseFlow) {
    recommendedBoostCount = null;
    if (!tmp10) {
      recommendedBoostCount = require(analyticsLoadId[52]).getRecommendedBoostCount("PremiumPlanSelect");
      const obj5 = require(analyticsLoadId[52]);
    }
  }
  const mapped = items.map((section) => {
    let closure_0 = section;
    return {
      section,
      plansInSection: closure_0.filter((productId) => {
        let predicateResult = productId.productId !== outer1_7;
        if (predicateResult) {
          predicateResult = !outer2_0(analyticsLoadId[45]).productsHaveSamePerks(productId.productId, outer1_7);
          const obj = outer2_0(analyticsLoadId[45]);
        }
        if (predicateResult) {
          predicateResult = section.predicate(productId);
        }
        if (predicateResult) {
          predicateResult = productId.premiumTier !== outer2_20.TIER_1;
        }
        if (predicateResult) {
          let tmp9 = !outer2_0(analyticsLoadId[44]).isIOS();
          if (!tmp9) {
            tmp9 = null == outer1_6;
          }
          if (!tmp9) {
            tmp9 = null != outer1_6.getAvailablePlanForItems(outer2_0(analyticsLoadId[45]).getSubscriptionItemsForProduct(productId.productId));
            const obj3 = outer2_0(analyticsLoadId[45]);
          }
          predicateResult = tmp9;
          const obj2 = outer2_0(analyticsLoadId[44]);
        }
        if (predicateResult) {
          let flag = true;
          if (null != outer1_7) {
            const tmp20 = outer2_0(analyticsLoadId[53]).AppStorePremiumProductIdsToPremiumBundledItems[tmp16];
            flag = null != tmp20.premiumTier || productId.numPremiumGuild >= tmp20.numPremiumGuild;
            const tmp21 = null != tmp20.premiumTier || productId.numPremiumGuild >= tmp20.numPremiumGuild;
          }
          predicateResult = flag;
        }
        return predicateResult;
      })
    };
  });
  const found = mapped.filter((plansInSection) => plansInSection.plansInSection.length > 0);
  let found1 = found;
  if (tmp14) {
    found1 = found;
    if (tmp18) {
      found1 = found.filter((section) => "premium-guild" !== section.section.id);
    }
  }
  obj = {};
  items = [tmp.container, ];
  if (isBoostPurchaseFlow) {
    isBoostPurchaseFlow = tmp.boostContainer;
  }
  items[1] = isBoostPurchaseFlow;
  obj.style = items;
  if (tmp14) {
    tmp14 = callback3(BoostPurchaseNitroBanner, {});
  }
  const items1 = [tmp14, , ];
  obj = { subscription, analyticsLoadId, purchase, trackPaymentFlowStep, trackNewPaymentFlow, showCurrentPlan: showCurrentPlan.showCurrentPlan, shouldRemoveYearlyUpsell };
  items1[1] = callback3(CurrentPlanRow, obj);
  items1[2] = found1.map((plans) => {
    const section = plans.section;
    const label = section.getLabel(c10);
    let obj = {};
    let tmp4 = !isBoostPurchaseFlow;
    if (tmp4) {
      obj = { string: label };
      tmp4 = outer1_32(outer1_45, obj);
    }
    const items = [tmp4, ];
    obj = { trackPaymentFlowStep, trackNewPaymentFlow, analyticsLoadId, plans: plans.plansInSection, label, shouldShowModernBoostFlow: isBoostPurchaseFlow, showBoostOnlyLabels: c10, recommendedBoostCount, purchase, subscription, shouldRemoveYearlyUpsell };
    items[1] = outer1_32(outer1_43, obj);
    obj.children = items;
    return outer1_33(productIdFromSubscription, obj, section.id);
  });
  obj.children = items1;
  return closure_33(productIdFromSubscription, obj);
}
({ Image: closure_6, View: closure_7, ScrollView: closure_8 } = get_ActivityIndicator);
({ setIsPurchasing: closure_14, usePremiumPlanSelectStore: closure_15 } = usePremiumPlanSelectStore);
({ GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT: closure_16, NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: closure_17, PRICE_PLACEHOLDER: closure_18, PremiumSubscriptionSKUs: closure_19, PremiumTypes: closure_20, SubscriptionIntervalTypes: closure_21, SubscriptionPlans: closure_22 } = GuildFeatures);
({ AnalyticEvents: closure_23, AnalyticsObjects: closure_24, AnalyticsObjectTypes: closure_25, Fonts, HorizontalGradient: closure_26, PaymentGateways: closure_27, SubscriptionStatusTypes: closure_28, USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING } = ME);
({ getPremiumGradientColor: closure_29, Gradients: closure_30 } = items);
({ jsx: closure_32, jsxs: closure_33, Fragment: closure_34 } = jsxProd);
let obj = {};
obj = {};
let merged = Object.assign(require("createTextStyle")(Fonts.DISPLAY_EXTRABOLD, undefined, 24));
obj["marginTop"] = 16;
obj["color"] = require("result").DARK_WHITE_500_LIGHT_BLACK_500;
obj.header = obj;
_createForOfIteratorHelperLoose = { marginTop: 7, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, flexDirection: "row", alignItems: "center", paddingVertical: 12, paddingHorizontal: 12, flexWrap: "wrap", backgroundColor: require("result").DARK_PRIMARY_630_LIGHT_PRIMARY_230 };
obj.row = _createForOfIteratorHelperLoose;
obj.rowDisabled = { opacity: 0.5 };
obj.imgWumpusNitro = { height: 40, width: 40 };
obj.imgBoost = { height: 40, width: 40 };
obj.imgWumpusNitroBoost = { width: 32, height: 32 };
obj.imgWumpusNitroClassic = { width: 40, height: 40 };
obj.imgWumpusNitroClassicBoost = { width: 32, height: 32 };
obj.imgWumpusNitroTier0 = { width: 40, height: 40 };
obj.rowText = { fontSize: 16, color: require("result").DARK_WHITE_500_LIGHT_BLACK_500 };
let obj3 = { marginLeft: 12, fontFamily: Fonts.PRIMARY_SEMIBOLD, lineHeight: 20 };
obj.rowPlanDescription = obj3;
let obj4 = { fontSize: 12, marginLeft: 5, fontFamily: Fonts.PRIMARY_MEDIUM, fontWeight: "400" };
obj.rowPlanDescriptionSubtext = obj4;
obj.rowPrice = { marginLeft: "auto" };
obj.purchasingSpinner = { position: "absolute", top: 0, bottom: 0, left: 0, right: 0, alignItems: "center", justifyContent: "center" };
obj.container = { marginHorizontal: 14.5, paddingBottom: 10 };
let obj2 = { fontSize: 16, color: require("result").DARK_WHITE_500_LIGHT_BLACK_500 };
obj.currentPlanGradient = { marginTop: 20, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
obj.currentPlanRow = { marginTop: 0.5, marginRight: 0.5, marginLeft: 0.5, marginBottom: 0.5 };
obj.loadingSpinnerContainer = { display: "flex", alignItems: "center", justifyContent: "center", height: "100%" };
let obj6 = { lineHeight: 20, marginTop: 40, margin: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING };
obj.offPlatformSubscriptionMessage = obj6;
obj.premiumHeaderLabel = { paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING, marginTop: 8 };
let obj5 = { marginTop: 20, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
obj.boostContainer = { rowGap: require("_createForOfIteratorHelperLoose").space.PX_24 };
obj.boostRowIcon = { width: 32, height: 32 };
let obj7 = { rowGap: require("_createForOfIteratorHelperLoose").space.PX_24 };
obj.nitroBanner = { alignItems: "center", paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16, paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING };
obj.nitroBannerText = { textAlign: "center" };
let obj8 = { alignItems: "center", paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16, paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING };
obj.recommendedText = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.GUILD_BOOSTING_PINK };
let closure_35 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_36 = { [importDefault(12530)]: "imgWumpusNitro", [importDefault(12532)]: "imgWumpusNitroBoost", [importDefault(12529)]: "imgWumpusNitroClassic", [importDefault(12531)]: "imgWumpusNitroClassicBoost", [importDefault(12528)]: "imgWumpusNitroTier0", [importDefault(12527)]: "imgBoost" };
items = [
  {
    id: "premium",
    getLabel() {
      const intl = require(1212) /* getSystemLocale */.intl;
      return intl.string(require(1212) /* getSystemLocale */.t.A4BfLn);
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
    id: "premium-and-premium-guild",
    getLabel(arg0) {
      const intl = require(1212) /* getSystemLocale */.intl;
      const t = require(1212) /* getSystemLocale */.t;
      return intl.string(arg0 ? t.rPoOQW : t.lyXyD0);
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
    id: "premium-guild",
    getLabel() {
      const intl = require(1212) /* getSystemLocale */.intl;
      return intl.string(require(1212) /* getSystemLocale */.t.rPoOQW);
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
let closure_38 = importAllResult.forwardRef(function PremiumPlanSelect(isBoostPurchaseFlow) {
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
  let importDefault;
  let basePurchaseFlowAnalyticsFields;
  let obj2;
  let handlePremiumPurchase;
  let navigation;
  let patchOrderLineItems;
  let orderRequired;
  let stateFromStores;
  const tmp2 = callback5();
  const analyticsLocations = importDefault(basePurchaseFlowAnalyticsFields[58])().analyticsLocations;
  let obj = applicationId(basePurchaseFlowAnalyticsFields[32]);
  let items = [closure_12, _isNativeReflectConstruct];
  const tmp3 = handlePremiumPurchase(obj.useStateFromStoresArray(items, () => {
    const items = [outer1_12.hasFetchedSubscriptions(), outer1_11.isLoadedForPremiumSKUs()];
    return items;
  }), 2);
  importDefault = tmp4;
  const items1 = [tmp3[1]];
  const effect = navigation.useEffect(() => {
    if (!c1) {
      const premiumSubscriptionPlans = applicationId(basePurchaseFlowAnalyticsFields[59]).fetchPremiumSubscriptionPlans();
      const obj = applicationId(basePurchaseFlowAnalyticsFields[59]);
    }
  }, items1);
  const tmp6 = importDefault(basePurchaseFlowAnalyticsFields[60])(() => applicationId(basePurchaseFlowAnalyticsFields[46]).getNewAnalyticsLoadId());
  let obj1 = applicationId(basePurchaseFlowAnalyticsFields[46]);
  obj = { analyticsLoadId: tmp6 };
  obj = { object: constants2.BUTTON_CTA, object_type: constants3.BUY };
  let merged = Object.assign(analyticsLocation);
  obj.analyticsLocation = obj;
  obj.analyticsLocations = analyticsLocations;
  basePurchaseFlowAnalyticsFields = obj1.getBasePurchaseFlowAnalyticsFields(obj);
  if (null != planId) {
    obj1 = { subscription_plan_id: planId };
    obj2 = obj1;
  } else {
    obj2 = {};
  }
  importDefault(basePurchaseFlowAnalyticsFields[61])(() => {
    let obj = applicationId(basePurchaseFlowAnalyticsFields[62]);
    obj = {};
    const merged = Object.assign(basePurchaseFlowAnalyticsFields);
    const merged1 = Object.assign(obj2);
    obj["application_id"] = applicationId;
    const result = obj.trackPaymentFlowStartedAnalyticsAndCTP(obj);
  });
  const activeSubscription = useNativeCheckoutStore((activeSubscription) => ({ activeSubscription: activeSubscription.checkoutInitParameters.activeSubscription, order: activeSubscription.orderRecord })).activeSubscription;
  let obj6 = applicationId(basePurchaseFlowAnalyticsFields[63]);
  handlePremiumPurchase = obj6.useHandlePremiumPurchase();
  let obj7 = applicationId(basePurchaseFlowAnalyticsFields[64]);
  navigation = obj7.useNavigation();
  let obj8 = applicationId(basePurchaseFlowAnalyticsFields[65]);
  const isPaymentsBlocked = obj8.useIsPaymentsBlocked();
  let obj9 = applicationId(basePurchaseFlowAnalyticsFields[66]);
  if (null != activeSubscription) {
    const obj3 = { subscriptionId: activeSubscription.id, renewal: true, analyticsLocations, analyticsLocation: importDefault(basePurchaseFlowAnalyticsFields[67]).PREMIUM_PLAN_SELECT };
    let obj4 = obj3;
  } else {
    obj4 = {};
  }
  const first = handlePremiumPurchase(obj9.useFetchSubscriptionInvoicePreview(obj4), 1)[0];
  const tmp16 = useNativeCheckoutStore((patchOrderLineItems) => ({ patchOrderLineItems: patchOrderLineItems.patchOrderLineItems, isPatchOrderLoading: patchOrderLineItems.isPatchOrderLoading, orderRequired: patchOrderLineItems.orderRequired }));
  patchOrderLineItems = tmp16.patchOrderLineItems;
  orderRequired = tmp16.orderRequired;
  let obj12 = applicationId(basePurchaseFlowAnalyticsFields[32]);
  const items2 = [closure_12];
  stateFromStores = obj12.useStateFromStores(items2, () => outer1_12.getPremiumTypeSubscription());
  const items3 = [basePurchaseFlowAnalyticsFields.location, applicationId, handlePremiumPurchase, navigation, patchOrderLineItems, orderRequired, stateFromStores];
  if (null == predicate) {
    return null;
  } else {
    if (!tmp3[0]) {
      const obj5 = { style: tmp2.loadingSpinnerContainer, children: callback3(applicationId(basePurchaseFlowAnalyticsFields[41]).ActivityIndicator, { animating: true, size: "large" }) };
      callback3(orderRequired, obj5);
    }
    if (isPaymentsBlocked) {
      obj6 = { ref: tmp };
      obj7 = { top: 40 };
      obj6.contentInset = obj7;
      tmp = importDefault(basePurchaseFlowAnalyticsFields[70]);
      obj6.children = callback3(tmp, {});
      let tmp26Result = callback3(stateFromStores, obj6);
    } else {
      if (null != activeSubscription) {
        if (activeSubscription.isOnPlatformMatchingExternalPaymentGateway) {
          let obj14 = applicationId(basePurchaseFlowAnalyticsFields[45]);
          let obj15 = applicationId(basePurchaseFlowAnalyticsFields[45]);
        }
        obj8 = {};
        let tmp28 = null != first;
        if (tmp28) {
          obj9 = {};
          const obj10 = { style: tmp2.premiumHeaderLabel, variant: "eyebrow", color: "text-default" };
          const intl = applicationId(basePurchaseFlowAnalyticsFields[22]).intl;
          obj10.children = intl.string(applicationId(basePurchaseFlowAnalyticsFields[22]).t.ITurwY);
          const items4 = [callback3(applicationId(basePurchaseFlowAnalyticsFields[21]).Text, obj10), ];
          const obj11 = { subscription: activeSubscription, renewalInvoicePreview: first };
          items4[1] = callback3(applicationId(basePurchaseFlowAnalyticsFields[71]).PremiumSubscriptionHeader, obj11);
          obj9.children = items4;
          tmp28 = callback4(closure_34, obj9);
        }
        const items5 = [tmp28, ];
        obj12 = { style: tmp2.offPlatformSubscriptionMessage, variant: "text-md/semibold" };
        const obj13 = { shouldAllowExternalManagement: true };
        obj12.children = applicationId(basePurchaseFlowAnalyticsFields[72]).getExternalManagementMessage(activeSubscription, obj13);
        items5[1] = callback3(applicationId(basePurchaseFlowAnalyticsFields[21]).Text, obj12);
        obj8.children = items5;
        tmp26Result = callback4(stateFromStores, obj8);
        const obj22 = applicationId(basePurchaseFlowAnalyticsFields[72]);
        const tmp26 = callback4;
        const tmp27 = stateFromStores;
      }
      obj14 = { ref: tmp };
      obj15 = {
        subscription: activeSubscription,
        plans: applicationId(basePurchaseFlowAnalyticsFields[45]).getPremiumBundlesWithPredicate(predicate),
        showCurrentPlan,
        isBoostPurchaseFlow: flag,
        analyticsLoadId: tmp6,
        trackPaymentFlowStep(arg0) {
              let fromStep;
              let productId;
              let toStep;
              ({ productId, fromStep, toStep } = arg0);
              let obj = _undefined(basePurchaseFlowAnalyticsFields[73]);
              obj = { application_id: applicationId };
              const merged = Object.assign(applicationId(basePurchaseFlowAnalyticsFields[46]).getPaymentFlowStepAnalyticsFields(basePurchaseFlowAnalyticsFields, { from_step: fromStep, to_step: toStep, subscription_plan_gateway_plan_id: productId }));
              obj.track(outer1_23.PAYMENT_FLOW_STEP, obj);
            },
        trackNewPaymentFlow(arg0) {
              let newFlowAnalyticsLoadId;
              let productId;
              ({ newFlowAnalyticsLoadId, productId } = arg0);
              let obj = applicationId(basePurchaseFlowAnalyticsFields[62]);
              obj = {};
              const merged = Object.assign(basePurchaseFlowAnalyticsFields);
              obj["subscription_plan_gateway_plan_id"] = productId;
              obj["load_id"] = newFlowAnalyticsLoadId;
              obj["application_id"] = applicationId;
              const result = obj.trackPaymentFlowStartedAnalyticsAndCTP(obj);
            },
        purchase: tmp18
      };
      obj14.children = callback3(PlanSections, obj15);
      tmp26Result = callback3(stateFromStores, obj14);
      const obj26 = applicationId(basePurchaseFlowAnalyticsFields[45]);
    }
  }
});
let obj10 = {
  id: "premium",
  getLabel() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.A4BfLn);
  },
  predicate(premiumTier) {
    let tmp = null != premiumTier.premiumTier;
    if (tmp) {
      tmp = 0 === premiumTier.numPremiumGuild;
    }
    return tmp;
  }
};
let obj11 = {
  id: "premium-and-premium-guild",
  getLabel(arg0) {
    const intl = require(1212) /* getSystemLocale */.intl;
    const t = require(1212) /* getSystemLocale */.t;
    return intl.string(arg0 ? t.rPoOQW : t.lyXyD0);
  },
  predicate(premiumTier) {
    let tmp = null != premiumTier.premiumTier;
    if (tmp) {
      tmp = 0 !== premiumTier.numPremiumGuild;
    }
    return tmp;
  }
};
let obj12 = {
  id: "premium-guild",
  getLabel() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.rPoOQW);
  },
  predicate(premiumTier) {
    let tmp = null == premiumTier.premiumTier;
    if (tmp) {
      tmp = 0 !== premiumTier.numPremiumGuild;
    }
    return tmp;
  }
};
let obj9 = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.GUILD_BOOSTING_PINK };
let result = require("result").fileFinishedImporting("modules/premium/native/PremiumPlanSelect.tsx");

export default function PremiumPlanSelectWithOrderCTX(isBoostPurchaseFlow) {
  const _require = isBoostPurchaseFlow;
  let obj = _require(stateFromStores1[64]);
  const navigation = obj.useNavigation();
  let obj1 = _require(stateFromStores1[32]);
  const items = [closure_12];
  const stateFromStores = obj1.useStateFromStores(items, () => outer1_12.getPremiumTypeSubscription());
  const NitroACOMSubscriptionExperiment = _require(stateFromStores1[74]).NitroACOMSubscriptionExperiment;
  let obj2 = _require(stateFromStores1[44]);
  if (obj2.isIOS()) {
    NitroACOMSubscriptionExperiment.useConfig({ location: "PremiumPlanSelectWithOrderCTX" }).enabled ? tmp4.APPLE_ADVANCED_COMMERCE : tmp4.APPLE;
  } else {
    let paymentGateway = tmp4.GOOGLE;
    if (null != stateFromStores) {
      paymentGateway = stateFromStores.paymentGateway;
    }
    obj = { subscriptionPlanId: PREMIUM_YEAR_TIER_2.PREMIUM_YEAR_TIER_2 };
    let obj4 = _require(stateFromStores1[23]);
    obj.skuId = obj4.castPremiumSubscriptionAsSkuId(TIER_2.TIER_2);
    obj.quantity = 1;
    const items1 = [obj];
    let obj5 = _require(stateFromStores1[32]);
    const items2 = [closure_12];
    stateFromStores1 = obj5.useStateFromStores(items2, () => outer1_12.hasFetchedSubscriptions());
    const items3 = [stateFromStores1];
    const effect = importAllResult.useEffect(() => {
      if (!stateFromStores1) {
        const subscriptions = isBoostPurchaseFlow(stateFromStores1[69]).fetchSubscriptions();
        const obj = isBoostPurchaseFlow(stateFromStores1[69]);
      }
    }, items3);
    const items4 = [closure_10];
    const stateFromStores2 = _require(stateFromStores1[32]).useStateFromStores(items4, () => {
      let tmp;
      if (null != isBoostPurchaseFlow.guildId) {
        const guild = outer1_10.getGuild(isBoostPurchaseFlow.guildId);
        let name;
        if (null != guild) {
          name = guild.name;
        }
        tmp = name;
      }
      return tmp;
    });
    let mobileBoostingEnabled = true === isBoostPurchaseFlow.isBoostPurchaseFlow;
    if (mobileBoostingEnabled) {
      mobileBoostingEnabled = _require(stateFromStores1[52]).getMobileBoostingEnabled("PremiumPlanSelect");
      const obj8 = _require(stateFromStores1[52]);
    }
    const items5 = [navigation, mobileBoostingEnabled, stateFromStores2];
    const layoutEffect = importAllResult.useLayoutEffect(() => {
      let obj = {};
      if (mobileBoostingEnabled) {
        if (null != stateFromStores2) {
          const intl2 = isBoostPurchaseFlow(stateFromStores1[22]).intl;
          obj = { server: stateFromStores2 };
          let formatToPlainStringResult = intl2.formatToPlainString(isBoostPurchaseFlow(stateFromStores1[22]).t.LcefAL, obj);
        }
        obj.title = formatToPlainStringResult;
        tmp2(obj);
      }
      const intl = isBoostPurchaseFlow(stateFromStores1[22]).intl;
      formatToPlainStringResult = intl.string(isBoostPurchaseFlow(stateFromStores1[22]).t.u95Dt4);
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
        obj.children = callback3(closure_38, obj1);
        return callback3(navigation(stateFromStores1[75]), obj);
      }
      let str2 = "Android";
      if (obj12.isIOS()) {
        str2 = "iOS";
      }
      obj2 = {};
      const obj3 = { variant: "display-md" };
      let intl = _require(stateFromStores1[22]).intl;
      obj4 = { mobilePlatform: str2 };
      obj3.children = intl.format(_require(stateFromStores1[22]).t.CnoyAN, obj4);
      obj2.children = callback3(_require(stateFromStores1[21]).Text, obj3);
      return callback3(closure_7, obj2);
    } else {
      obj5 = { style: tmp.loadingSpinnerContainer, children: callback3(_require(stateFromStores1[41]).ActivityIndicator, { animating: true, size: "large" }) };
      return callback3(closure_7, obj5);
    }
    const obj7 = _require(stateFromStores1[32]);
  }
};
