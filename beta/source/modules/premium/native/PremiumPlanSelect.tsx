// Module ID: 13081
// Function ID: 13082
// Name: PremiumPlanSelect
// Dependencies: [5, 32, 19, 17, 6844, 2067, 4493, 4494, 6658, 13082, 1374, 1074, 6852, 4815, 21, 4836, 5836, 5753, 576, 5279, 13083, 4832, 1115, 4488, 13085, 13086, 13087, 13088, 13089, 13090, 8122, 4531, 504, 13091, 12877, 4767, 1177, 1241, 12915, 12916, 5917, 13092, 5889, 6073, 4685, 1365, 6829, 10126, 5204, 13093, 1981, 5999, 5293, 6830, 6661, 4503, 5039, 6832, 10173, 6583, 6675, 5910, 5298, 10270, 10167, 1485, 6837, 12928, 6603, 10168, 5174, 10979, 12891, 6824, 8666, 4500, 10269, 2]
// Exports: default

// Module 13081 (PremiumPlanSelect)
import nativeDefault from "native" /* 576 */;
import intl5 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1365 */;
import PremiumUtils from "PremiumUtils" /* 4488 */;
import PremiumSubscription from "PremiumSubscription" /* 4500 */;
import PaymentConstants from "PaymentConstants" /* 4815 */;
import Text_Text from "Text/Text" /* 4832 */;
import actions_BillingActionCreators from "actions/BillingActionCreators" /* 5174 */;
import Stack_Stack from "Stack/Stack" /* 5279 */;
import LinearGradientDefault from "LinearGradient" /* 5293 */;
import LegacyTokens from "LegacyTokens" /* 5753 */;
import TextStylesDefault from "TextStyles" /* 5836 */;
import ProductIds from "ProductIds" /* 6661 */;
import SubscriptionPlanActionCreators from "SubscriptionPlanActionCreators" /* 6675 */;
import PremiumBundledPlansUtils from "PremiumBundledPlansUtils" /* 6829 */;
import NativeCheckoutStore from "NativeCheckoutStore" /* 6844 */;
import NitroWheelIcon2 from "NitroWheelIcon" /* 8122 */;
import PremiumAnalyticsUtils from "PremiumAnalyticsUtils" /* 10126 */;
import PaymentFlowStartedTriggerPoint from "PaymentFlowStartedTriggerPoint" /* 10270 */;
import openPremiumPlanWhatYouLoseActionSheetDefault from "openPremiumPlanWhatYouLoseActionSheet" /* 12915 */;
import PremiumPlanWhatYouLoseActionSheet from "PremiumPlanWhatYouLoseActionSheet" /* 12916 */;
import TreasureChestBannerSpotIllustration from "TreasureChestBannerSpotIllustration" /* 13083 */;
import AssetRegistryDefault from "AssetRegistry" /* 13085 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13086 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 13087 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 13088 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 13089 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 13090 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildStore from "GuildStore" /* 2067 */;
import SubscriptionPlanStore from "SubscriptionPlanStore" /* 4493 */;
import SubscriptionStore from "SubscriptionStore" /* 4494 */;
import IAPStore from "IAPStore" /* 6658 */;
import PremiumPlanSelectStore from "PremiumPlanSelectStore" /* 13082 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import Constants from "Constants" /* 1074 */;
import ColorConstants from "ColorConstants" /* 6852 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const PremiumUtilsDefault = PremiumUtils;
let _require, c0, c1, closure_12, closure_2, closure_3, closure_4, importDefault, navigation, premiumTypeSubscription, productId2, section, v1;

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
let closure_31;
let closure_32;
let closure_33;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
function BoostPurchaseNitroBanner() {
  let Text2;
  let format;
  let intl2;
  let intl3;
  let items1;
  let jbrHpT;
  let obj4;
  let obj5;
  let obj6;
  let obj8;
  const tmp = closure_34();
  const obj = { align: "center", spacing: nativeDefault.space.PX_12, style: tmp.nitroBanner, children: items };
  const Stack = Stack_Stack.Stack;
  items = [closure_31(TreasureChestBannerSpotIllustration.TreasureChestBannerSpotIllustration, { width: 117, height: 93, accessible: false }), ];
  const obj2 = { align: "center", spacing: nativeDefault.space.PX_4, children: items1 };
  const Stack2 = Stack_Stack.Stack;
  const obj3 = { variant: "text-md/semibold", color: "text-default", style: tmp.nitroBannerText, children: format(jbrHpT, obj4) };
  const Text = Text_Text.Text;
  const intl = intl5.intl;
  format = intl.format;
  obj4 = { discount: closure_31(Text2, obj5, "discount") };
  jbrHpT = intl5.t.jbrHpT;
  obj5 = { variant: "text-md/semibold", color: "text-feedback-positive", children: intl2.format(intl5.t.RmVM19, obj6) };
  Text2 = Text_Text.Text;
  intl2 = intl5.intl;
  obj6 = { percentageOff };
  items1 = [closure_31(Text, obj3), ];
  const obj7 = { variant: "text-sm/medium", color: "text-muted", style: tmp.nitroBannerText, children: intl3.format(intl5.t.HYpETY, obj8) };
  const Text3 = Text_Text.Text;
  intl3 = intl5.intl;
  obj8 = { boostCount };
  items1[1] = closure_31(Text3, obj7);
  items[1] = __initData3(Stack2, obj2);
  return __initData3(Stack, obj);
}
function getPlanDescription(premiumTier) {
  let formatToPlainStringResult;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  if (null == premiumTier.premiumTier) {
    const intl = intl5.intl;
    const obj2 = { numSubscriptions: premiumTier.numPremiumGuild };
    formatToPlainStringResult = intl.formatToPlainString(intl5.t.gDsyB9, obj2);
  } else if (0 === premiumTier.numPremiumGuild) {
    const obj3 = PremiumUtils;
    formatToPlainStringResult = obj3.getPremiumTypeDisplayName(premiumTier.premiumTier);
  } else {
    const intl2 = intl5.intl;
    const formatToPlainString = intl2.formatToPlainString;
    if (flag) {
      const obj4 = { numSubscriptions: premiumTier.numPremiumGuild };
      formatToPlainStringResult = formatToPlainString(tmp7(1115).t.gDsyB9, obj4);
    } else {
      let u6dBsN;
      if (premiumTier.premiumTier === closure_20.TIER_1) {
        u6dBsN = tmp7(1115).t.sexoHq;
      } else {
        u6dBsN = tmp7(1115).t.u6dBsN;
      }
      const obj = { num: premiumTier.numPremiumGuild };
      formatToPlainStringResult = formatToPlainString(u6dBsN, obj);
    }
  }
  return formatToPlainStringResult;
}
function BoostDeltaPriceTrailing(arg0) {
  let AbOLNu;
  let interval;
  let obj4;
  let price;
  ({ price, interval } = arg0);
  const obj = { direction: "horizontal", align: "center", spacing: nativeDefault.space.PX_4, children: items };
  const Stack = Stack_Stack.Stack;
  const obj2 = { size: "xs", color: nativeDefault.colors.ICON_FEEDBACK_POSITIVE };
  const NitroWheelIcon = NitroWheelIcon2.NitroWheelIcon;
  items = [closure_31(NitroWheelIcon, obj2), ];
  const Text = Text_Text.Text;
  const intl = intl5.intl;
  const format = intl.format;
  const tmp = __initData3;
  if (interval === constants.MONTH) {
    AbOLNu = tmp2(1115).t.AbOLNu;
  } else {
    AbOLNu = tmp2(1115).t["rS8FA+"];
  }
  const obj3 = { variant: "text-sm/medium", color: "text-muted", children: format(AbOLNu, obj4) };
  obj4 = { price: closure_31(Text_Text.Text, { variant: "text-sm/semibold", color: "text-feedback-positive", children: price }, "price") };
  items[1] = closure_31(Text, obj3);
  return tmp(Stack, obj);
}
function PlanRow(plan) {
  let AbOLNu;
  let formatToPlainStringResult1;
  let intl;
  let intl4;
  let items1;
  let items3;
  let items4;
  let items5;
  let obj6;
  let subscription;
  let tmp39Result2;
  let tmp45;
  let tmp7Result;
  plan = plan.plan;
  ({ purchase: importDefault, subscription } = plan);
  let flag = plan.disabled;
  const style = plan.style;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = plan.interactive;
  if (flag2 === undefined) {
    flag2 = true;
  }
  let flag3 = plan.hasBackground;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let flag4 = plan.shouldShowModernBoostFlow;
  if (flag4 === undefined) {
    flag4 = false;
  }
  let flag5 = plan.showBoostOnlyLabels;
  if (flag5 === undefined) {
    flag5 = false;
  }
  let prop = plan.recommendedBoostCount;
  if (prop === undefined) {
    prop = null;
  }
  let flag6 = plan.isBoostPurchaseFlow;
  if (flag6 === undefined) {
    flag6 = false;
  }
  const analyticsLoadId = plan.analyticsLoadId;
  let premiumTypeFromSubscription;
  flag = undefined;
  let is_recommended;
  let tmp2 = closure_34();
  const tmp3 = closure_15((isPurchasing) => isPurchasing.isPurchasing);
  const tmp4 = closure_15((purchasingProductId) => purchasingProductId.purchasingProductId === plan.productId);
  let obj = plan(subscription[31]);
  const token = obj.useToken(require("native").colors.ACTIVITY_TIMEBAR_PROGRESS_BACKGROUND);
  let obj2 = plan(subscription[32]);
  items = [IAPStore];
  const tmp9 = flag6(obj2.useStateFromStoresArray(items, () => {
    items = [IAPStore.getProduct(plan.productId), IAPStore.isBusy()];
    return items;
  }), 2);
  const first = tmp9[0];
  const tmp11 = tmp9[1];
  const tmp12 = useNativeCheckoutStore((isPatchOrderLoading) => isPatchOrderLoading.isPatchOrderLoading || isPatchOrderLoading.isCreateOrderLoading);
  let obj3 = plan(subscription[33]);
  const premiumTier2DeltaPriceString = obj3.usePremiumTier2DeltaPriceString(plan, subscription, first, flag4);
  const obj4 = plan(subscription[34]);
  const checkoutPlanPriceString = obj4.useCheckoutPlanPriceString(plan.productId, first);
  let tmp17 = plan.premiumTier === closure_20.TIER_2;
  let tmp15 = require("useTheme")();
  if (tmp17) {
    tmp17 = 0 === plan.numPremiumGuild;
  }
  let tmp18 = null;
  if (tmp17) {
    const obj5 = { style: items1, children: intl.format(plan(subscription[22]).t.he52LA, obj6) };
    items1 = [, ];
    ({ rowText: arr2[0], rowPlanDescriptionSubtext: arr2[1] } = tmp2);
    const LegacyText = tmp5(tmp6[36]).LegacyText;
    intl = tmp5(tmp6[22]).intl;
    obj6 = { num };
    tmp18 = closure_31(LegacyText, obj5);
  }
  const tmp21 = null == plan.premiumTier || 0 !== plan.numPremiumGuild;
  if (null == plan.premiumTier) {
    tmp7Result = tmp7(tmp6[24]);
  } else if (0 !== plan.numPremiumGuild) {
    if (plan.premiumTier === closure_20.TIER_1) {
      tmp7Result = tmp7(tmp6[28]);
    } else {
      tmp7Result = tmp7(tmp6[29]);
    }
  } else {
    const premiumTier = plan.premiumTier;
    if (closure_20.TIER_0 === premiumTier) {
      tmp7Result = tmp7(tmp6[25]);
    } else if (closure_20.TIER_1 === premiumTier) {
      tmp7Result = tmp7(tmp6[26]);
    } else if (closure_20.TIER_2 === premiumTier) {
      tmp7Result = tmp7(tmp6[27]);
    }
  }
  const intl2 = tmp5(tmp6[22]).intl;
  const formatToPlainString = intl2.formatToPlainString;
  if (plan.interval === constants.MONTH) {
    AbOLNu = tmp5(tmp6[22]).t.AbOLNu;
  } else {
    AbOLNu = tmp5(tmp6[22]).t["rS8FA+"];
  }
  let tmp24 = premiumTier2DeltaPriceString;
  if (premiumTier2DeltaPriceString == null) {
    tmp24 = checkoutPlanPriceString;
  }
  if (tmp24 == null) {
    tmp24 = closure_18;
  }
  const formatToPlainStringResult = formatToPlainString(AbOLNu, { price: tmp24 });
  if (tmp17) {
    const intl3 = tmp5(tmp6[22]).intl;
    const obj7 = { num };
    formatToPlainStringResult1 = intl3.formatToPlainString(tmp5(tmp6[22]).t.RTaZb4, obj7);
  }
  premiumTypeFromSubscription = null;
  if (null != subscription) {
    const tmp5Result = plan(subscription[23]);
    premiumTypeFromSubscription = tmp5Result.getPremiumTypeFromSubscription(subscription);
  }
  if (!flag) {
    flag = tmp3;
  }
  if (!flag) {
    flag = tmp11;
  }
  if (!flag) {
    flag = tmp12;
  }
  function onPress() {
    let productId;
    const tmp = !flag && flag2;
    if (tmp) {
      const tmp2 = flag6;
      if (tmp2) {
        const obj2 = { boost_count: plan.numPremiumGuild, is_recommended, load_id: analyticsLoadId };
        const obj = AnalyticsUtilsDefault;
        obj.track(constants.BOOST_PLAN_ROW_SELECTED, obj2);
      }
      if (null != subscription) {
        if (premiumTypeFromSubscription === closure_20.TIER_2) {
          if (plan.premiumTier === closure_20.TIER_0) {
            const obj3 = {
              subscription: tmp10,
              mode: PremiumPlanWhatYouLoseActionSheet.WhatYouLoseMode.DOWNGRADE,
              onContinue() {
                        return closure_1_1(productId.productId);
                      }
            };
            const tmp15 = openPremiumPlanWhatYouLoseActionSheetDefault;
            tmp15(obj3);
          }
        }
      }
      importDefault(plan.productId);
    }
  }
  is_recommended = tmp29;
  if (flag4) {
    let tmp39Result;
    const TableRow = tmp5(tmp6[40]).TableRow;
    if (tmp21) {
      tmp39Result = tmp39(tmp7(tmp6[41]), { width: 32, height: 32 });
    } else if (tmp17) {
      const obj8 = { size: "lg", color: require("native").colors.ICON_DEFAULT };
      const NitroWheelIcon = tmp5(tmp6[30]).NitroWheelIcon;
      tmp39Result = tmp39(NitroWheelIcon, obj8);
    } else {
      const obj9 = { style: tmp2.boostRowIcon, source: tmp7Result };
      tmp39Result = tmp39(premiumTypeFromSubscription, obj9);
    }
    const obj10 = { icon: tmp39Result, label: getPlanDescription(plan, flag5), subLabel: formatToPlainStringResult1, trailing: tmp39Result2, arrow: flag2, disabled: flag, onPress: tmp45 };
    if (null != prop && plan.premiumTier === closure_20.TIER_2 && plan.numPremiumGuild === prop) {
      const obj11 = { variant: "text-xs/semibold", color: "none", style: tmp2.recommendedText, children: intl4.string(plan(subscription[22]).t.WThgAR) };
      const Text = tmp5(tmp6[21]).Text;
      intl4 = tmp5(tmp6[22]).intl;
      formatToPlainStringResult1 = tmp39(Text, obj11);
    }
    if (tmp4) {
      const obj12 = { animating: true, size: "small", color: token };
      tmp39Result2 = tmp39(tmp5(tmp6[42]).ActivityIndicator, obj12);
    } else if (null != premiumTier2DeltaPriceString) {
      const obj13 = { price: premiumTier2DeltaPriceString, interval: plan.interval };
      tmp39Result2 = tmp39(BoostDeltaPriceTrailing, obj13);
    } else {
      const obj14 = { variant: "text-sm/medium", color: "text-muted", lineClamp: 1, children: formatToPlainStringResult };
      tmp39Result2 = tmp39(tmp5(tmp6[21]).Text, obj14);
    }
    if (flag) {
      flag = !tmp4;
    }
    if (!flag) {
      flag = !flag2;
    }
    tmp45 = undefined;
    if (flag2) {
      tmp45 = onPress;
    }
    return closure_31(TableRow, obj10);
  } else {
    const items2 = [tmp2.row, style, ];
    let rowDisabled = flag;
    const tmp30 = closure_32;
    if (flag) {
      rowDisabled = !tmp4;
    }
    if (rowDisabled) {
      rowDisabled = tmp2.rowDisabled;
    }
    const obj15 = { style: items2, children: items3 };
    items2[2] = rowDisabled;
    const obj16 = { style: tmp2[closure_37[tmp7Result]], source: tmp7Result };
    items3 = [closure_31(premiumTypeFromSubscription, obj16), , , , ];
    const obj17 = { style: items4, children: getPlanDescription(plan, flag5) };
    items4 = [, ];
    ({ rowText: arr5[0], rowPlanDescription: arr5[1] } = tmp2);
    const LegacyText2 = tmp5(tmp6[36]).LegacyText;
    items3[1] = closure_31(LegacyText2, obj17);
    items3[2] = tmp18;
    const obj18 = { style: items5, children: formatToPlainStringResult };
    items5 = [, ];
    ({ rowText: arr6[0], rowPrice: arr6[1] } = tmp2);
    items3[3] = closure_31(plan(subscription[36]).LegacyText, obj18);
    let tmp32Result = null;
    if (tmp4) {
      const obj19 = { animating: true, size: "small", style: tmp2.purchasingSpinner, color: token };
      tmp32Result = tmp32(tmp5(tmp6[42]).ActivityIndicator, obj19);
    }
    items3[4] = tmp32Result;
    const tmp30Result = tmp30(flag, obj15);
    let tmp32Result2 = tmp30Result;
    if (flag2) {
      const TouchableHighlight = tmp5(tmp6[43]).TouchableHighlight;
      let str2 = "none";
      const tmp5Result2 = plan(subscription[44]);
      if (!tmp5Result2.isThemeDark(tmp15)) {
        str2 = "none";
        if (flag3) {
          str2 = tmp7(tmp6[18]).unsafe_rawColors.PRIMARY_230;
        }
      }
      const obj20 = { activeOpacity: 0.6, underlayColor: str2, accessibilityRole: "button", disabled: flag, onPress, children: tmp30Result };
      tmp32Result2 = tmp32(TouchableHighlight, obj20);
    }
    return tmp32Result2;
  }
}
function PlanSection(label) {
  let analyticsLoadId;
  let closure_6;
  let closure_7;
  let closure_8;
  let isBoostPurchaseFlow;
  let plans;
  let recommendedBoostCount;
  let shouldShowModernBoostFlow;
  let subscription;
  let tmp7Result;
  ({ plans, shouldShowModernBoostFlow } = label);
  label = label.label;
  if (shouldShowModernBoostFlow === undefined) {
    shouldShowModernBoostFlow = false;
  }
  let flag = label.showBoostOnlyLabels;
  if (flag === undefined) {
    flag = false;
  }
  ({ recommendedBoostCount: dependencyMap, isBoostPurchaseFlow: _asyncToGenerator, purchase: _slicedToArray, analyticsLoadId: react, trackNewPaymentFlow: closure_6, trackPaymentFlowStep: closure_7, subscription: closure_8, currentPaymentGatewayPlanId: useNativeCheckoutStore, shouldRemoveYearlyUpsell: GuildStore } = label);
  let c12;
  let tmp = useNativeCheckoutStore((getCheckoutContextRecord) => getCheckoutContextRecord.getCheckoutContextRecord());
  let closure_11 = tmp;
  let tmp2 = shouldShowModernBoostFlow;
  let obj = shouldShowModernBoostFlow(1365);
  let isIOSResult = obj.isIOS();
  if (isIOSResult) {
    let tmp5 = null;
    isIOSResult = null != tmp;
  }
  c12 = isIOSResult;
  const mapped = plans.map((plan) => {
    let product;
    let obj = {
      plan,
      subscription,
      shouldShowModernBoostFlow,
      showBoostOnlyLabels: flag,
      recommendedBoostCount: dependencyMap,
      isBoostPurchaseFlow: _asyncToGenerator,
      analyticsLoadId: react,
      purchase(productId) {
        let tmp8;
        let closure_0 = productId;
        let tmp = shouldShowModernBoostFlow;
        let tmp2 = recommendedBoostCount;
        let obj = shouldShowModernBoostFlow(recommendedBoostCount[46]);
        const toggledIntervalProduct = obj.getToggledIntervalProduct(productId);
        let tmp5 = null;
        const tmp4 = closure_12;
        if (tmp4) {
          tmp5 = null;
          if (null != toggledIntervalProduct) {
            let availablePlanForItems;
            const tmp6 = closure_11;
            if (closure_11 != null) {
              const getAvailablePlanForItems = tmp6.getAvailablePlanForItems;
              const tmpResult = tmp(tmp2[46]);
              availablePlanForItems = getAvailablePlanForItems(tmpResult.getSubscriptionItemsForProduct(toggledIntervalProduct));
            }
            if (availablePlanForItems == null) {
              availablePlanForItems = null;
            }
            tmp5 = availablePlanForItems;
          }
        }
        availablePlanForItems = tmp5;
        if (tmp4) {
          tmp8 = null != tmp5;
        } else {
          tmp8 = null != toggledIntervalProduct;
          if (tmp8) {
            tmp8 = null != product.getProduct(toggledIntervalProduct);
          }
        }
        const tmpResult3 = tmp(tmp2[46]);
        const interval = tmpResult3.getPremiumBundledItemsFromProductId(productId).interval;
        const YEAR = constants.YEAR;
        tmp(tmp2[46]);
        if (null != toggledIntervalProduct) {
          if (tmp8) {
            const tmp12 = closure_10;
            if (!tmp12) {
              if (interval !== YEAR) {
                if (!tmp11) {
                  let obj2 = { fromStep: tmp(tmp2[47]).PaymentFlowStep.PLAN_SELECT, toStep: tmp(tmp2[47]).PaymentFlowStep.YEARLY_UPSELL, productId };
                  closure_7(obj2);
                  let obj5 = flag(tmp2[48]);
                  let obj3 = {
                    importer() {
                                const promise = shouldShowModernBoostFlow(dependencyMap[50])(dependencyMap[49], dependencyMap.paths);
                                return promise.then((result) => {
                                  let closure_0 = result.default;
                                  return (arg0) => {
                                    let priceString;
                                    let obj = {
                                      productId,
                                      orderPriceString: priceString,
                                      continueWithDefault: isBoostPurchaseFlow(function*(arg0, value) {
                                        if (productId === 2) {
                                          productId = 3;
                                          throw new TypeError("Generator functions may not be called on executing generators");
                                        } else if (tmp2 === 3) {
                                          if (arg0 === 1) {
                                            throw value;
                                          } else if (arg0 === 2) {
                                            const obj2 = { value, done: true };
                                            return obj2;
                                          } else {
                                            return { value: "HermesInternal", done: null };
                                          }
                                        } else {
                                          try {
                                            productId = 2;
                                            if (0 === c1) {
                                              if (arg0 === 1) {
                                                productId = 3;
                                                throw value;
                                              } else if (arg0 === 2) {
                                                productId = 3;
                                                const obj3 = { value, done: true };
                                                return obj3;
                                              } else {
                                                const obj4 = { fromStep: productId(availablePlanForItems[47]).PaymentFlowStep.YEARLY_UPSELL, toStep: productId(availablePlanForItems[47]).PaymentFlowStep.EXTERNAL_PAYMENT, productId };
                                                closure_2_7(obj4);
                                                c1 = 1;
                                                productId = 1;
                                                const obj5 = { value: closure_2_4(productId, closure_2_5), done: false };
                                                return obj5;
                                              }
                                            } else if (arg0 === 1) {
                                              productId = 3;
                                              throw value;
                                            } else if (arg0 === 2) {
                                              productId = 3;
                                              const obj = { value, done: true };
                                              return obj;
                                            } else {
                                              productId = 3;
                                              return { value: "HermesInternal", done: null };
                                            }
                                          } catch (tmp4) {
                                            productId = 3;
                                            throw tmp4;
                                          }
                                        }
                                      }),
                                      continueWithUpsell: isBoostPurchaseFlow(function*(arg0, value) {
                                        if (c0 === 2) {
                                          c0 = 3;
                                          throw new TypeError("Generator functions may not be called on executing generators");
                                        } else if (tmp2 === 3) {
                                          if (arg0 === 1) {
                                            throw value;
                                          } else if (arg0 === 2) {
                                            const obj3 = { value, done: true };
                                            return obj3;
                                          } else {
                                            return { value: "HermesInternal", done: null };
                                          }
                                        } else {
                                          try {
                                            c0 = 2;
                                            if (0 === productId2) {
                                              if (arg0 === 1) {
                                                c0 = 3;
                                                throw value;
                                              } else if (arg0 === 2) {
                                                c0 = 3;
                                                const obj4 = { value, done: true };
                                                return obj4;
                                              } else {
                                                const obj2 = v3(availablePlanForItems[47]);
                                                const newAnalyticsLoadId = obj2.getNewAnalyticsLoadId();
                                                const obj5 = { newFlowAnalyticsLoadId: newAnalyticsLoadId, productId: productId2 };
                                                closure_2_6(obj5);
                                                productId2 = 1;
                                                c0 = 1;
                                                const obj6 = { value: closure_2_4(productId2, newAnalyticsLoadId), done: false };
                                                return obj6;
                                              }
                                            } else if (arg0 === 1) {
                                              c0 = 3;
                                              throw value;
                                            } else if (arg0 === 2) {
                                              c0 = 3;
                                              const obj = { value, done: true };
                                              return obj;
                                            } else {
                                              c0 = 3;
                                              return { value: "HermesInternal", done: null };
                                            }
                                          } catch (tmp11) {
                                            c0 = 3;
                                            throw tmp11;
                                          }
                                        }
                                      })
                                    };
                                    const tmp2 = productId;
                                    const merged = Object.assign(arg0);
                                    let obj2 = availablePlanForItems;
                                    priceString = undefined;
                                    const tmp = closure_4_31;
                                    if (availablePlanForItems != null) {
                                      priceString = obj2.getPriceString();
                                    }
                                    if (priceString == null) {
                                      priceString = null;
                                    }
                                    return tmp(tmp2, obj);
                                  };
                                });
                              },
                    hideActionSheet: true,
                    isDismissable: true
                  };
                  obj5.openLazy(obj3);
                }
              }
            }
          }
        }
        let obj4 = { fromStep: tmp(tmp2[47]).PaymentFlowStep.PLAN_SELECT, toStep: tmp(tmp2[47]).PaymentFlowStep.EXTERNAL_PAYMENT, productId };
        closure_7(obj4);
        return closure_4(productId, closure_5);
      }
    };
    return closure_31(PlanRow, obj, plan.productId);
  });
  if (shouldShowModernBoostFlow) {
    let obj2 = { title: label, hasIcons: true, children: mapped };
    tmp7Result = tmp7(tmp2(5999).TableRowGroup, obj2);
  } else {
    let tmp8 = closure_7;
    let obj3 = { children: mapped };
    tmp7Result = tmp7(closure_7, obj3);
  }
  return tmp7Result;
}
function CurrentPlanRow(arg0) {
  let analyticsLoadId;
  let obj2;
  let paymentGatewayPlanId;
  let showCurrentPlan;
  let subscription;
  ({ subscription, paymentGatewayPlanId } = arg0);
  ({ analyticsLoadId, showCurrentPlan } = arg0);
  const tmp = closure_34();
  if (showCurrentPlan) {
    if (null != subscription) {
      if (null != paymentGatewayPlanId) {
        let PREMIUM_GUILD;
        const obj3 = PremiumBundledPlansUtils;
        const premiumBundledItemsFromProductId = obj3.getPremiumBundledItemsFromProductId(paymentGatewayPlanId);
        const premiumTier = premiumBundledItemsFromProductId.premiumTier;
        if (null != premiumTier) {
          PREMIUM_GUILD = __initData(premiumTier);
        } else {
          PREMIUM_GUILD = constants6.PREMIUM_GUILD;
        }
        const obj = { style: tmp.currentPlanGradient, colors: PREMIUM_GUILD, start: null, end: null, children: closure_31(PlanRow, obj2) };
        ({ START: obj.start, END: obj.end } = prioritySpeakerDucking);
        obj2 = {
          plan: premiumBundledItemsFromProductId,
          subscription,
          analyticsLoadId,
          interactive: false,
          hasBackground: true,
          purchase() {

                },
          style: tmp.currentPlanRow
        };
        const tmp7 = LinearGradientDefault;
        return closure_31(tmp7, obj);
      }
    }
  }
  return null;
}
function PlanSectionHeader(string) {
  string = string.string;
  const obj = { style: closure_34().header, accessibilityRole: "header", children: string };
  return closure_31(native.LegacyText, obj);
}
function PlanSections(isBoostPurchaseFlow) {
  let items1;
  let plans;
  let purchase;
  let subscription;
  let tmp27;
  let trackNewPaymentFlow;
  let trackPaymentFlowStep;
  function withCurrentPlanAlternative(plans, productIdFromSubscription, productIdFromSubscription1) {
    let toggledIntervalProduct;
    if (null != productIdFromSubscription) {
      let tmp8 = toggledIntervalProduct;
      const obj3 = toggledIntervalProduct(analyticsLoadId[46]);
      if (obj3.isValidBundleProductId(productIdFromSubscription)) {
        let tmp2 = productIdFromSubscription1;
        if (null == productIdFromSubscription1) {
          const tmp8Result = tmp8(analyticsLoadId[46]);
          toggledIntervalProduct = tmp8Result.getToggledIntervalProduct(productIdFromSubscription);
        } else {
          toggledIntervalProduct = productIdFromSubscription;
        }
        let tmp4 = plans;
        if (null != toggledIntervalProduct) {
          tmp4 = plans;
          if (!plans.some((productId) => {
            let tmp2 = null == toggledIntervalProduct;
            if (!tmp2) {
              const obj = subscription(analyticsLoadId[46]);
              tmp2 = !obj.isValidBundleProductId(tmp);
            }
            let tmp5 = !tmp2;
            if (tmp5) {
              const obj2 = subscription(analyticsLoadId[46]);
              let result = obj2.productsHaveSamePerks(productId.productId, tmp);
              const tmp7 = subscription;
              const tmp8 = analyticsLoadId;
              if (result) {
                const interval = productId.interval;
                const tmp7Result = tmp7(tmp8[46]);
                result = interval === tmp7Result.getPremiumBundledItemsFromProductId(tmp).interval;
              }
              tmp5 = result;
            }
            return tmp5;
          })) {
            items = [];
            let tmp5 = items;
            const arraySpreadResult = HermesBuiltin.arraySpread(items, plans, 0);
            const tmp8Result2 = tmp8(analyticsLoadId[46]);
            items[arraySpreadResult] = tmp8Result2.getPremiumBundledItemsFromProductId(toggledIntervalProduct);
            tmp4 = items;
          }
        }
        return tmp4;
      }
    }
    return plans;
  }
  ({ plans, subscription } = isBoostPurchaseFlow);
  isBoostPurchaseFlow = isBoostPurchaseFlow.isBoostPurchaseFlow;
  const analyticsLoadId = isBoostPurchaseFlow.analyticsLoadId;
  ({ trackPaymentFlowStep: _asyncToGenerator, trackNewPaymentFlow: _slicedToArray, purchase: react } = isBoostPurchaseFlow);
  let shouldRemoveYearlyUpsell;
  let boostContainer;
  let closure_10;
  let recommendedBoostCount;
  closure_12 = undefined;
  const showCurrentPlan = isBoostPurchaseFlow.showCurrentPlan;
  let tmp = closure_34();
  let closure_6 = boostContainer((getCheckoutContextRecord) => getCheckoutContextRecord.getCheckoutContextRecord());
  let productIdFromSubscription = null;
  if (null != subscription) {
    let tmp3 = subscription;
    let tmp4 = analyticsLoadId;
    let obj = subscription(analyticsLoadId[46]);
    let flag = false;
    productIdFromSubscription = obj.getProductIdFromSubscription(subscription, false);
  }
  let productIdFromSubscription1 = productIdFromSubscription;
  if (!isBoostPurchaseFlow) {
    if (null != subscription) {
      try {
        let tmp6 = subscription;
        let tmp7 = analyticsLoadId;
        let obj2 = subscription(analyticsLoadId[46]);
        productIdFromSubscription1 = obj2.getProductIdFromSubscription(subscription, true);
      } catch (err) {
      }
    }
  }
  shouldRemoveYearlyUpsell = isBoostPurchaseFlow;
  if (shouldRemoveYearlyUpsell) {
    let obj3 = subscription(analyticsLoadId[53]);
    shouldRemoveYearlyUpsell = obj3.getShouldRemoveYearlyUpsell("PremiumPlanSelect");
  }
  if (!shouldRemoveYearlyUpsell) {
    let hasActiveTrial;
    if (subscription != null) {
      hasActiveTrial = subscription.hasActiveTrial;
    }
    let tmp12 = true === hasActiveTrial;
    if (tmp12) {
      tmp12 = subscription.paymentGateway === constants5.APPLE_ADVANCED_COMMERCE;
    }
    shouldRemoveYearlyUpsell = tmp12;
  }
  boostContainer = isBoostPurchaseFlow;
  if (boostContainer) {
    let obj4 = subscription(analyticsLoadId[53]);
    boostContainer = obj4.getMobileBoostingEnabled("PremiumPlanSelect");
  }
  let tmp16 = null != subscription;
  if (tmp16) {
    let obj5 = subscription(analyticsLoadId[23]);
    tmp16 = obj5.getPremiumTypeFromSubscription(subscription) === closure_20.TIER_2;
  }
  let tmp20 = boostContainer && tmp16;
  closure_10 = tmp20;
  recommendedBoostCount = null;
  if (boostContainer) {
    recommendedBoostCount = null;
    if (!tmp16) {
      const tmp23 = analyticsLoadId;
      const obj6 = subscription(analyticsLoadId[53]);
      recommendedBoostCount = obj6.getRecommendedBoostCount("PremiumPlanSelect");
    }
  }
  let tmp24 = plans;
  if (!isBoostPurchaseFlow) {
    let hasActiveTrial1;
    if (subscription != null) {
      hasActiveTrial1 = subscription.hasActiveTrial;
    }
    tmp24 = plans;
    if (true !== hasActiveTrial1) {
      tmp24 = withCurrentPlanAlternative(plans, productIdFromSubscription, productIdFromSubscription1);
    }
  }
  closure_12 = tmp24;
  if (!isBoostPurchaseFlow) {
    productIdFromSubscription = productIdFromSubscription1;
  }
  const mapped = items.map((section) => {
    let TIER_1;
    let obj = {
      section,
      plansInSection: closure_12.filter((productId) => {
        let predicateResult = productId.productId !== productIdFromSubscription;
        if (predicateResult) {
          let tmp4 = null == tmp;
          if (!tmp4) {
            const obj = PremiumBundledPlansUtils;
            tmp4 = !obj.isValidBundleProductId(tmp);
          }
          let tmp7 = !tmp4;
          if (tmp7) {
            const obj2 = PremiumBundledPlansUtils;
            let result = obj2.productsHaveSamePerks(productId.productId, tmp);
            const tmp8 = require;
            if (result) {
              const interval = productId.interval;
              const tmp8Result = tmp8(6829);
              result = interval === tmp8Result.getPremiumBundledItemsFromProductId(tmp).interval;
            }
            tmp7 = result;
          }
          predicateResult = !tmp7;
        }
        if (predicateResult) {
          predicateResult = section.predicate(productId);
        }
        if (predicateResult) {
          predicateResult = productId.premiumTier !== TIER_1.TIER_1;
        }
        if (predicateResult) {
          const obj4 = utils_PlatformUtils;
          const isIOSResult = obj4.isIOS();
          let tmp16 = !isIOSResult;
          if (isIOSResult) {
            tmp16 = null == closure_6;
          }
          if (!tmp16) {
            const getAvailablePlanForItems = closure_6.getAvailablePlanForItems;
            const obj5 = PremiumBundledPlansUtils;
            tmp16 = null != getAvailablePlanForItems(obj5.getSubscriptionItemsForProduct(productId.productId));
          }
          predicateResult = tmp16;
        }
        if (predicateResult) {
          let flag = true;
          if (null != productIdFromSubscription) {
            const tmp27 = ProductIds.AppStorePremiumProductIdsToPremiumBundledItems[tmp23];
            flag = null != tmp27.premiumTier || productId.numPremiumGuild >= tmp27.numPremiumGuild;
          }
          predicateResult = flag;
        }
        return predicateResult;
      })
    };
    return obj;
  });
  const found = mapped.filter((plansInSection) => plansInSection.plansInSection.length > 0);
  let found1 = found;
  if (tmp20) {
    found1 = found;
    if (tmp27) {
      found1 = found.filter((section) => "premium-guild" !== section.section.id);
    }
  }
  items = [tmp.container, ];
  const tmp28 = closure_32;
  const tmp29 = productIdFromSubscription;
  if (boostContainer) {
    boostContainer = tmp.boostContainer;
  }
  const obj7 = { style: items, children: items1 };
  items[1] = boostContainer;
  if (tmp20) {
    tmp20 = closure_31(BoostPurchaseNitroBanner, {});
  }
  items1 = [
    tmp20,
    closure_31(CurrentPlanRow, { subscription, paymentGatewayPlanId: productIdFromSubscription1, analyticsLoadId, showCurrentPlan }),
    found1.map((section) => {
      section = section.section;
      const id = section.id;
      const plansInSection = section.plansInSection;
      const label = section.getLabel(closure_10);
      let tmp6 = !boostContainer;
      const tmp = closure_10;
      const tmp3 = __initData3;
      const tmp4 = metroImportDefault;
      if (!boostContainer) {
        const obj = { string: label };
        tmp6 = closure_31(PlanSectionHeader, obj);
      }
      const obj2 = { children: items };
      items = [tmp6, ];
      const obj3 = { trackPaymentFlowStep: _asyncToGenerator, trackNewPaymentFlow: _slicedToArray, analyticsLoadId, plans: plansInSection, label, shouldShowModernBoostFlow: boostContainer, showBoostOnlyLabels: tmp, recommendedBoostCount, isBoostPurchaseFlow, purchase: react, subscription, currentPaymentGatewayPlanId: productIdFromSubscription, shouldRemoveYearlyUpsell };
      items[1] = closure_31(PlanSection, obj3);
      return tmp3(tmp4, obj2, id);
    })
  ];
  return tmp28(tmp29, obj7);
}
({ Image: metroRequire, View: metroImportDefault, ScrollView: metroImportAll } = react_native);
const useNativeCheckoutStore = NativeCheckoutStore.useNativeCheckoutStore;
({ setIsPurchasing: closure_14, usePremiumPlanSelectStore: closure_15 } = PremiumPlanSelectStore);
({ GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT: closure_16, NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: closure_17, PRICE_PLACEHOLDER: closure_18, PremiumSubscriptionSKUs: closure_19, PremiumTypes: closure_20, SubscriptionIntervalTypes: closure_21, SubscriptionPlans: closure_22 } = PremiumConstants);
({ AnalyticEvents: closure_23, AnalyticsObjects: closure_24, AnalyticsObjectTypes: closure_25, Fonts, HorizontalGradient: closure_26, PaymentGateways: closure_27, USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING } = Constants);
({ getPremiumGradientColor: closure_28, Gradients: closure_29 } = ColorConstants);
const ItemPurchaseType = PaymentConstants.ItemPurchaseType;
({ jsx: closure_31, jsxs: closure_32, Fragment: closure_33 } = Fragment);
let createStyles = createStyles_mod;
let obj = { header: obj2, row: obj3, rowDisabled: { opacity: 0.5 }, imgWumpusNitro: { height: 40, width: 40 }, imgBoost: { height: 40, width: 40 }, imgWumpusNitroBoost: { width: 32, height: 32 }, imgWumpusNitroClassic: { width: 40, height: 40 }, imgWumpusNitroClassicBoost: { width: 32, height: 32 }, imgWumpusNitroTier0: { width: 40, height: 40 }, rowText: obj4, rowPlanDescription: { marginLeft: 12, fontFamily: Fonts.PRIMARY_SEMIBOLD, lineHeight: 20 }, rowPlanDescriptionSubtext: { fontSize: 12, marginLeft: 5, fontFamily: Fonts.PRIMARY_MEDIUM, fontWeight: "400" }, rowPrice: { marginLeft: "auto" }, purchasingSpinner: { position: "absolute", top: 0, bottom: 0, left: 0, right: 0, alignItems: "center", justifyContent: "center" }, container: { marginHorizontal: 14.5, paddingBottom: 10 }, currentPlanGradient: obj5, currentPlanRow: { marginTop: 0.5, marginRight: 0.5, marginLeft: 0.5, marginBottom: 0.5 }, loadingSpinnerContainer: { display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }, offPlatformSubscriptionMessage: { lineHeight: 20, marginTop: 40, margin: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING }, premiumHeaderLabel: { paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING, marginTop: 8 }, boostContainer: obj6, boostRowIcon: { width: 32, height: 32 }, nitroBanner: obj7, nitroBannerText: { textAlign: "center" }, recommendedText: obj8 };
obj2 = { marginTop: 16, color: LegacyTokens.DARK_WHITE_500_LIGHT_BLACK_500 };
createStyles = createStyles.createStyles;
let merged = Object.assign(TextStylesDefault(Fonts.DISPLAY_EXTRABOLD, undefined, 24));
obj3 = { marginTop: 7, borderRadius: nativeDefault.radii.sm, flexDirection: "row", alignItems: "center", paddingVertical: 12, paddingHorizontal: 12, flexWrap: "wrap", backgroundColor: LegacyTokens.DARK_PRIMARY_630_LIGHT_PRIMARY_230 };
obj4 = { fontSize: 16, color: LegacyTokens.DARK_WHITE_500_LIGHT_BLACK_500 };
obj5 = { marginTop: 20, borderRadius: nativeDefault.radii.sm };
obj6 = { rowGap: nativeDefault.space.PX_24 };
obj7 = { alignItems: "center", paddingTop: nativeDefault.space.PX_16, paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING };
obj8 = { color: nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK };
let closure_34 = createStyles(obj);
let closure_37 = { [AssetRegistryDefault4]: "imgWumpusNitro", [AssetRegistryDefault6]: "imgWumpusNitroBoost", [AssetRegistryDefault3]: "imgWumpusNitroClassic", [AssetRegistryDefault5]: "imgWumpusNitroClassicBoost", [AssetRegistryDefault2]: "imgWumpusNitroTier0", [AssetRegistryDefault]: "imgBoost" };
let obj9 = {
  id: "premium",
  getLabel() {
    const intl = intl5.intl;
    return intl.string(intl5.t.A4BfLn);
  },
  predicate(premiumTier) {
    return null != premiumTier.premiumTier && 0 === premiumTier.numPremiumGuild;
  }
};
let items = [
  obj9,
  {
    id: "premium-and-premium-guild",
    getLabel(arg0) {
      const intl = intl5.intl;
      const string = intl.string;
      const t = intl5.t;
      return string(arg0 ? t.rPoOQW : t.lyXyD0);
    },
    predicate(premiumTier) {
      return null != premiumTier.premiumTier && 0 !== premiumTier.numPremiumGuild;
    }
  },
  {
    id: "premium-guild",
    getLabel() {
      const intl = intl5.intl;
      return intl.string(intl5.t.rPoOQW);
    },
    predicate(premiumTier) {
      return null == premiumTier.premiumTier && 0 !== premiumTier.numPremiumGuild;
    }
  }
];
let closure_45 = react.forwardRef(function PremiumPlanSelect(isBoostPurchaseFlow, ref) {
  let analyticsLocation;
  let applicationId;
  let closure_1;
  let intl;
  let items4;
  let items5;
  let loadedForPremiumSKUs;
  let obj15;
  let obj3;
  let obj7;
  let planId;
  let predicate;
  let showCurrentPlan;
  let tmp4Result15;
  let tmp4Result16;
  ({ predicate, showCurrentPlan } = isBoostPurchaseFlow);
  if (showCurrentPlan === undefined) {
    showCurrentPlan = true;
  }
  let flag = isBoostPurchaseFlow.isBoostPurchaseFlow;
  if (flag === undefined) {
    flag = false;
  }
  ({ analyticsLocation, planId, applicationId } = isBoostPurchaseFlow);
  importDefault = undefined;
  let basePurchaseFlowAnalyticsFields;
  let obj5;
  let handlePremiumPurchase;
  navigation = undefined;
  let patchOrderLineItems;
  let orderRequired;
  let stateFromStores;
  let tmp = closure_34();
  const tmp2 = importDefault;
  const tmp3 = basePurchaseFlowAnalyticsFields;
  const analyticsLocations = require("useAnalyticsLocations")().analyticsLocations;
  const tmp4 = applicationId;
  let obj = applicationId(basePurchaseFlowAnalyticsFields[32]);
  items = [SubscriptionStore, SubscriptionPlanStore];
  const tmp5 = SubscriptionStore;
  let tmp6 = handlePremiumPurchase;
  const tmp7 = handlePremiumPurchase(obj.useStateFromStoresArray(items, () => {
    items = [SubscriptionStore.hasFetchedSubscriptions(), loadedForPremiumSKUs.isLoadedForPremiumSKUs()];
    return items;
  }), 2);
  const tmp9 = tmp7[1];
  importDefault = tmp9;
  const items1 = [tmp9];
  const first = tmp7[0];
  const effect = navigation.useEffect(() => {
    const tmp = closure_1;
    if (!tmp) {
      const obj = SubscriptionPlanActionCreators;
      const premiumSubscriptionPlans = obj.fetchPremiumSubscriptionPlans();
    }
  }, items1);
  const tmp12 = require("react")(() => {
    const obj = applicationId(basePurchaseFlowAnalyticsFields[47]);
    return obj.getNewAnalyticsLoadId();
  });
  const tmp13 = applicationId(basePurchaseFlowAnalyticsFields[47]);
  let obj2 = { analyticsLoadId: tmp12, analyticsLocation: obj3, analyticsLocations };
  obj3 = { object: constants3.BUTTON_CTA, object_type: constants4.BUY };
  const getBasePurchaseFlowAnalyticsFields = tmp13.getBasePurchaseFlowAnalyticsFields;
  let merged = Object.assign(analyticsLocation);
  basePurchaseFlowAnalyticsFields = getBasePurchaseFlowAnalyticsFields(obj2);
  if (null != planId) {
    let obj4 = { subscription_plan_id: planId };
    obj5 = obj4;
  } else {
    obj5 = {};
  }
  tmp2(tmp3[62])(() => {
    const obj = { application_id: applicationId };
    const trackPaymentFlowStartedAnalyticsAndCTP = PaymentFlowStartedTriggerPoint.trackPaymentFlowStartedAnalyticsAndCTP;
    PaymentFlowStartedTriggerPoint;
    const merged = Object.assign(basePurchaseFlowAnalyticsFields);
    const merged1 = Object.assign(obj5);
    const result = trackPaymentFlowStartedAnalyticsAndCTP(obj);
  });
  const activeSubscription = useNativeCheckoutStore((activeSubscription) => ({ activeSubscription: activeSubscription.checkoutInitParameters.activeSubscription, order: activeSubscription.orderRecord })).activeSubscription;
  const tmp4Result = tmp4(tmp3[64]);
  handlePremiumPurchase = tmp4Result.useHandlePremiumPurchase();
  const tmp4Result9 = tmp4(tmp3[65]);
  navigation = tmp4Result9.useNavigation();
  const tmp4Result10 = tmp4(tmp3[66]);
  const isPaymentsBlocked = tmp4Result10.useIsPaymentsBlocked();
  const useFetchSubscriptionInvoicePreview = tmp4(tmp3[67]).useFetchSubscriptionInvoicePreview;
  tmp4(tmp3[67]);
  const tmp17 = useNativeCheckoutStore;
  if (null != activeSubscription) {
    let obj6 = { subscriptionId: activeSubscription.id, renewal: true, analyticsLocations, analyticsLocation: tmp2(tmp3[68]).PREMIUM_PLAN_SELECT };
    obj7 = obj6;
  } else {
    obj7 = {};
  }
  const first1 = tmp6(useFetchSubscriptionInvoicePreview(obj7), 1)[0];
  const tmp17Result = tmp17((patchOrderLineItems) => ({ patchOrderLineItems: patchOrderLineItems.patchOrderLineItems, isPatchOrderLoading: patchOrderLineItems.isPatchOrderLoading, orderRequired: patchOrderLineItems.orderRequired }));
  patchOrderLineItems = tmp17Result.patchOrderLineItems;
  orderRequired = tmp17Result.orderRequired;
  const items2 = [tmp5];
  const tmp4Result12 = tmp4(tmp3[32]);
  stateFromStores = tmp4Result12.useStateFromStores(items2, () => SubscriptionStore.getPremiumTypeSubscription());
  let closure_0 = obj5((arg0, analyticsLoadId) => {
    closure_0 = arg0;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (function*(arg0, value) {
      let id;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c7 = 2;
          if (0 === v1) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              let obj3 = { value, done: true };
              return obj3;
            } else {
              let modifySubscriptionItemsForProduct;
              closure_3 = tmp;
              closure_2 = undefined;
              closure_2_14(true, applicationId);
              if (null != closure_1_8) {
                const obj7 = applicationId(paths[46]);
                modifySubscriptionItemsForProduct = obj7.getModifySubscriptionItemsForProduct(tmp67, tmp71);
              } else {
                let obj6 = applicationId(paths[46]);
                modifySubscriptionItemsForProduct = obj6.getSubscriptionItemsForProduct(tmp67);
              }
              closure_2 = undefined;
              const tmp46 = c7;
              if (tmp46) {
                v1 = 2;
                c7 = 1;
                obj5 = {
                  value: v1(modifySubscriptionItemsForProduct.map((planId) => {
                              let castPremiumSubscriptionAsSkuId;
                              let obj2;
                              const obj = { sku_id: castPremiumSubscriptionAsSkuId(obj2.getSkuIdForPlan(planId.planId)), subscription_plan_id: null, quantity: null, purchase_type: constants.SUBSCRIPTION };
                              castPremiumSubscriptionAsSkuId = closure_1_0(closure_1_2[23]).castPremiumSubscriptionAsSkuId;
                              closure_1_0(closure_1_2[23]);
                              ({ planId: obj.subscription_plan_id, quantity: obj.quantity } = planId);
                              obj2 = analyticsLoadId(closure_1_2[23]);
                              return obj;
                            })),
                  done: false
                };
                return obj5;
              }
            }
          } else {
            if (1 === v1) {
              c5 = 0;
              if (closure_4 instanceof closure_2_1(paths[69])) {
                const obj4 = applicationId(paths[70]);
                const subscriptions = obj4.fetchSubscriptions();
                const obj8 = { title: intl3.string(applicationId(paths[22]).t["U+H+kd"]), body: intl4.string(applicationId(paths[22]).t.yyDkbE) };
                const show2 = closure_2_1(paths[48]).show;
                closure_2_1(paths[48]);
                intl3 = applicationId(paths[22]).intl;
                intl4 = applicationId(paths[22]).intl;
                show2(obj8);
              } else {
                const obj9 = { title: intl.string(applicationId(paths[22]).t.zrhHH3), body: intl2.string(applicationId(paths[22]).t.PjfUXe), isDismissable: true };
                const show = closure_2_1(paths[48]).show;
                closure_2_1(paths[48]);
                intl = applicationId(paths[22]).intl;
                intl2 = applicationId(paths[22]).intl;
                show(obj9);
              }
            } else {
              if (2 === v1) {
                if (arg0 === 1) {
                  c7 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c7 = 3;
                  return { value, done: true };
                } else {
                  closure_2 = value;
                  if (null == value) {
                    closure_2_14(false);
                  }
                }
              } else if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 0;
                c7 = 3;
                let obj = { value, done: true };
                return obj;
              } else {
                c5 = 0;
              }
              c7 = 3;
              return { value: "HermesInternal", done: null };
            }
            closure_2_14(false);
          }
          c5 = 1;
          const obj11 = {
            productId: applicationId,
            analyticsLocation: closure_2.location,
            analyticsLoadId,
            applicationId,
            orderId: id,
            onPurchaseComplete(paymentGateway) {
                  paymentGateway = paymentGateway.paymentGateway;
                  let obj = analyticsLoadId(closure_2[48]);
                  obj.close();
                  if (paymentGateway === constants.APPLE_ADVANCED_COMMERCE) {
                    premiumTypeSubscription = premiumTypeSubscription.getPremiumTypeSubscription();
                    if (null == premiumTypeSubscription) {
                      const _Error = Error;
                      const self = this;
                      const self2 = this;
                      const captureBillingException = premiumTypeSubscription(closure_2[55]).captureBillingException;
                      premiumTypeSubscription(closure_2[55]);
                      const error = new Error("PremiumActivatedAlert: no premium subscription in store post-activation");
                      let obj2 = { tags: { source: "showPremiumActivatedAlert.nullSubscription" } };
                      const result = captureBillingException(error, obj2);
                      const tmpResult = analyticsLoadId(closure_2[56]);
                      tmpResult.popWithKey(premiumTypeSubscription(tmp2[57]).PREMIUM_KEY);
                      const obj6 = closure_1_5;
                      if (closure_1_5.canGoBack()) {
                        obj6.goBack();
                      }
                    } else {
                      const obj3 = {
                        importer() {
                              let subscription;
                              const promise = premiumTypeSubscription(paths[50])(paths[58], paths.paths);
                              return promise.then((result) => {
                                closure_0 = result.default;
                                return (arg0) => {
                                  closure_0 = arg0;
                                  let obj = {
                                    subscription,
                                    onClose() {
                                      closure_0.onClose();
                                      const obj = closure_5_1(closure_5_2[56]);
                                      obj.popWithKey(premiumTypeSubscription(closure_5_2[57]).PREMIUM_KEY);
                                      const obj2 = closure_1_5;
                                      if (closure_1_5.canGoBack()) {
                                        obj2.goBack();
                                      }
                                    }
                                  };
                                  const merged = Object.assign(arg0);
                                  return closure_5_31(closure_0, obj);
                                };
                              });
                            },
                        isDismissable: false
                      };
                      const tmpResult2 = analyticsLoadId(closure_2[48]);
                      tmpResult2.openLazy(obj3);
                    }
                  }
                }
          };
          id = undefined;
          const tmp49 = closure_4;
          if (closure_2 != null) {
            id = closure_2.id;
          }
          v1 = 3;
          c7 = 1;
          const obj12 = { value: tmp49(obj11), done: false };
          return obj12;
        } catch (tmp57) {
          closure_4 = tmp57;
          if (0 === c5) {
            c7 = 3;
            throw tmp57;
          } else {
            v1 = 1;
          }
        }
      }
    })();
  });
  const items3 = [basePurchaseFlowAnalyticsFields.location, applicationId, handlePremiumPurchase, navigation, patchOrderLineItems, orderRequired, stateFromStores];
  let tmp26 = null;
  if (null != predicate) {
    if (first) {
      let tmp29;
      if (tmp9) {
        let tmp32Result2;
        if (isPaymentsBlocked) {
          let obj8 = { ref, contentInset: { top: 40 }, children: closure_31(tmp2(tmp3[71]), {}) };
          tmp32Result2 = closure_31(stateFromStores, obj8);
        } else {
          if (null != activeSubscription) {
            if (activeSubscription.isOnPlatformMatchingExternalPaymentGateway) {
              const isValidBundleProductId = tmp4(tmp3[46]).isValidBundleProductId;
              tmp4(tmp3[46]);
              tmp4(tmp3[46]);
            }
            let tmp32Result = null != first1;
            const tmp33 = stateFromStores;
            if (tmp32Result) {
              let obj9 = { children: items4 };
              const obj10 = { style: tmp.premiumHeaderLabel, variant: "eyebrow", color: "text-default", accessibilityRole: "header", children: intl.string(tmp4(tmp3[22]).t.ITurwY) };
              const Text = tmp4(tmp3[21]).Text;
              intl = tmp4(tmp3[22]).intl;
              items4 = [closure_31(Text, obj10), ];
              let obj11 = { subscription: activeSubscription, renewalInvoicePreview: first1 };
              items4[1] = closure_31(tmp4(tmp3[72]).PremiumSubscriptionHeader, obj11);
              tmp32Result = tmp32(closure_33, obj9);
            }
            let obj12 = { children: items5 };
            items5 = [tmp32Result, ];
            const obj13 = { style: tmp.offPlatformSubscriptionMessage, variant: "text-md/semibold", children: tmp4Result15.getExternalManagementMessage(activeSubscription, { shouldAllowExternalManagement: true }) };
            const Text2 = tmp4(tmp3[21]).Text;
            tmp4Result15 = tmp4(tmp3[73]);
            items5[1] = closure_31(Text2, obj13);
            tmp32Result2 = tmp32(tmp33, obj12);
          }
          const obj14 = { ref, children: closure_31(PlanSections, obj15) };
          obj15 = {
            subscription: activeSubscription,
            plans: tmp4Result16.getPremiumBundlesWithPredicate(predicate),
            showCurrentPlan,
            isBoostPurchaseFlow: flag,
            analyticsLoadId: tmp12,
            trackPaymentFlowStep(arg0) {
                      let fromStep;
                      let productId;
                      let toStep;
                      ({ productId, fromStep, toStep } = arg0);
                      const track = AnalyticsUtilsDefault.track;
                      const PAYMENT_FLOW_STEP = constants.PAYMENT_FLOW_STEP;
                      const obj = { application_id: applicationId };
                      AnalyticsUtilsDefault;
                      const obj2 = PremiumAnalyticsUtils;
                      const merged = Object.assign(obj2.getPaymentFlowStepAnalyticsFields(basePurchaseFlowAnalyticsFields, { from_step: fromStep, to_step: toStep, subscription_plan_gateway_plan_id: productId }));
                      track(PAYMENT_FLOW_STEP, obj);
                    },
            trackNewPaymentFlow(arg0) {
                      let newFlowAnalyticsLoadId;
                      let productId;
                      ({ newFlowAnalyticsLoadId, productId } = arg0);
                      const obj = { subscription_plan_gateway_plan_id: productId, load_id: newFlowAnalyticsLoadId, application_id: applicationId };
                      const trackPaymentFlowStartedAnalyticsAndCTP = PaymentFlowStartedTriggerPoint.trackPaymentFlowStartedAnalyticsAndCTP;
                      PaymentFlowStartedTriggerPoint;
                      const merged = Object.assign(basePurchaseFlowAnalyticsFields);
                      const result = trackPaymentFlowStartedAnalyticsAndCTP(obj);
                    },
            purchase: tmp25
          };
          tmp4Result16 = tmp4(tmp3[46]);
          tmp32Result2 = closure_31(stateFromStores, obj14);
        }
        tmp29 = tmp32Result2;
      }
      tmp26 = tmp29;
    }
    const obj16 = { style: tmp.loadingSpinnerContainer, children: closure_31(tmp4(tmp3[42]).ActivityIndicator, { animating: true, size: "large" }) };
    tmp29 = closure_31(orderRequired, obj16);
  }
  return tmp26;
});
let result = size.fileFinishedImporting("modules/premium/native/PremiumPlanSelect.tsx");

export default function PremiumPlanSelectWithOrderCTX(isBoostPurchaseFlow) {
  let Text;
  let intl;
  let mobileBoostingEnabled;
  let obj6;
  let obj8;
  let obj9;
  let paymentGateway;
  let stateFromStores;
  let tmp8;
  _require = isBoostPurchaseFlow;
  let tmp2 = _require;
  let tmp3 = stateFromStores;
  let tmp = closure_34();
  let obj = require("useNavigation");
  navigation = obj.useNavigation();
  let obj2 = require("get initialized");
  items = [SubscriptionStore];
  stateFromStores = obj2.useStateFromStores(items, () => SubscriptionStore.getPremiumTypeSubscription());
  const NitroACOMSubscriptionExperiment = require("ACOMExperiments").NitroACOMSubscriptionExperiment;
  const enabled = NitroACOMSubscriptionExperiment.useConfig({ location: "PremiumPlanSelectWithOrderCTX" }).enabled;
  let obj3 = require("utils/PlatformUtils");
  const tmp5 = SubscriptionStore;
  if (obj3.isIOS()) {
    let APPLE;
    let tmp9;
    if (enabled) {
      APPLE = tmp7.APPLE_ADVANCED_COMMERCE;
      tmp9 = tmp7;
    } else {
      APPLE = tmp7.APPLE;
      tmp9 = tmp7;
    }
    tmp8 = tmp9;
    paymentGateway = APPLE;
  } else {
    paymentGateway = tmp7.GOOGLE;
    tmp8 = tmp7;
  }
  if (null != stateFromStores) {
    paymentGateway = stateFromStores.paymentGateway;
  }
  let obj4 = mobileBoostingEnabled;
  let items1 = [stateFromStores];
  const memo = mobileBoostingEnabled.useMemo(() => {
    let castPremiumSubscriptionAsSkuId;
    let items1;
    let obj3;
    let obj5;
    let baseSubscriptionItemForSubscriptionItems = null;
    if (null != stateFromStores) {
      const obj = PremiumSubscription;
      baseSubscriptionItemForSubscriptionItems = obj.getBaseSubscriptionItemForSubscriptionItems(tmp.items);
    }
    if (null != baseSubscriptionItemForSubscriptionItems) {
      const obj2 = { subscriptionPlanId: baseSubscriptionItemForSubscriptionItems.planId, skuId: castPremiumSubscriptionAsSkuId(obj5.getSkuIdForPlan(baseSubscriptionItemForSubscriptionItems.planId)), quantity: baseSubscriptionItemForSubscriptionItems.quantity };
      castPremiumSubscriptionAsSkuId = PremiumUtils.castPremiumSubscriptionAsSkuId;
      PremiumUtils;
      items = [obj2];
      items1 = items;
      obj5 = PremiumUtilsDefault;
    } else {
      const obj4 = { subscriptionPlanId: PREMIUM_YEAR_TIER_2.PREMIUM_YEAR_TIER_2, skuId: obj3.castPremiumSubscriptionAsSkuId(TIER_2.TIER_2), quantity: 1 };
      items1 = [obj4];
      obj3 = PremiumUtils;
    }
    return items1;
  }, items1);
  const items2 = [tmp5];
  const tmp2Result = tmp2(tmp3[32]);
  const stateFromStores1 = tmp2Result.useStateFromStores(items2, () => SubscriptionStore.hasFetchedSubscriptions());
  const items3 = [stateFromStores1];
  const effect = mobileBoostingEnabled.useEffect(() => {
    const tmp = stateFromStores1;
    if (!tmp) {
      const obj = actions_BillingActionCreators;
      const subscriptions = obj.fetchSubscriptions();
    }
  }, items3);
  const items4 = [GuildStore];
  const tmp2Result4 = tmp2(tmp3[32]);
  const stateFromStores2 = tmp2Result4.useStateFromStores(items4, () => {
    let tmp2;
    if (null != isBoostPurchaseFlow.guildId) {
      const guild = GuildStore.getGuild(tmp.guildId);
      let name;
      if (guild != null) {
        name = guild.name;
      }
      tmp2 = name;
    }
    return tmp2;
  });
  mobileBoostingEnabled = true === isBoostPurchaseFlow.isBoostPurchaseFlow;
  if (mobileBoostingEnabled) {
    const tmp2Result5 = tmp2(tmp3[53]);
    mobileBoostingEnabled = tmp2Result5.getMobileBoostingEnabled("PremiumPlanSelect");
  }
  const items5 = [navigation, mobileBoostingEnabled, stateFromStores2];
  const layoutEffect = obj4.useLayoutEffect(() => {
    const tmp3 = mobileBoostingEnabled;
    if (tmp3) {
      let formatToPlainStringResult;
      if (null != stateFromStores2) {
        const intl2 = intl5.intl;
        const obj = { server: tmp4 };
        formatToPlainStringResult = intl2.formatToPlainString(intl5.t.LcefAL, obj);
      }
      const obj2 = { title: formatToPlainStringResult };
      tmp2(obj2);
    }
    const intl = intl5.intl;
    formatToPlainStringResult = intl.string(intl5.t.u95Dt4);
  }, items5);
  if (stateFromStores1) {
    if (null != paymentGateway) {
      let obj5 = {
        paymentGateway,
        orderRequired: paymentGateway === tmp8.APPLE_ADVANCED_COMMERCE,
        skuIds: [],
        defaultPlans: memo,
        isGift: false,
        activeSubscription: stateFromStores,
        onOrderRetryCancellation() {
              if (navigation.canGoBack()) {
                navigation.goBack();
              } else {
                navigation.pop();
              }
            },
        children: closure_31(closure_45, obj6)
      };
      obj6 = {};
      const tmp20 = navigation(tmp3[76]);
      const merged = Object.assign(isBoostPurchaseFlow);
      return closure_31(tmp20, obj5);
    }
    let str2 = "Android";
    const tmp2Result6 = tmp2(tmp3[45]);
    if (tmp2Result6.isIOS()) {
      str2 = "iOS";
    }
    const obj7 = { children: closure_31(Text, obj8) };
    obj8 = { variant: "display-md", children: intl.format(tmp2(tmp3[22]).t.CnoyAN, obj9) };
    Text = tmp2(tmp3[21]).Text;
    intl = tmp2(tmp3[22]).intl;
    obj9 = { mobilePlatform: str2 };
    return closure_31(closure_7, obj7);
  } else {
    const obj10 = { style: tmp.loadingSpinnerContainer, children: closure_31(tmp2(tmp3[42]).ActivityIndicator, { animating: true, size: "large" }) };
    return closure_31(closure_7, obj10);
  }
};
