// Module ID: 9507
// Function ID: 9508
// Name: PremiumFeaturesCard
// Dependencies: [32, 19, 17, 4782, 4455, 4456, 1078, 1378, 1089, 21, 4790, 580, 5775, 558, 568, 9508, 4450, 7513, 4786, 1119, 8345, 3198, 1384, 38, 7726, 8356, 8354, 7669, 7725, 7441, 504, 9514, 1613, 7685, 9523, 7717, 9142, 9525, 9526, 9528, 9533, 5220, 8970, 7698, 2]

// Module 9507 (PremiumFeaturesCard)
import _modDef38 from "module_38" /* 38 */;
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import util from "util" /* 1119 */;
import Text_Text from "Text/Text" /* 4786 */;
import PriceUtils from "PriceUtils" /* 7513 */;
import useFractionalPremiumInfoDefault from "useFractionalPremiumInfo" /* 7669 */;
import openPremiumPlanSelectionActionSheetDefault from "openPremiumPlanSelectionActionSheet" /* 7698 */;
import usePremiumPlanPriceDefault from "usePremiumPlanPrice" /* 9508 */;
import usePremiumFeaturesDefault from "usePremiumFeatures" /* 9514 */;
import PremiumFeaturesWumpusDefault from "PremiumFeaturesWumpus" /* 9528 */;
import PremiumFeatureListDefault from "PremiumFeatureList" /* 9533 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4782 */;
import SubscriptionPlanStore from "SubscriptionPlanStore" /* 4455 */;
import SubscriptionStore from "SubscriptionStore" /* 4456 */;
import TextStyles_mod from "TextStyles" /* 5775 */;

const _modDef3198 = percentage(3198);
const PremiumUtilsDefault = percentage(4450);
require = fn;
const View = fn(17).View;
const Constants = fn(1078);
({ AnalyticsPages, AnalyticsSections, AnalyticsObjectTypes } = Constants);
const PremiumConstants = fn(1378);
({ ANNUAL_DISCOUNT_PERCENTAGE_FALLBACK: closure_8, DISCOUNT_DURATION_FALLBACK: closure_9, DISCOUNT_PERCENTAGE_FALLBACK: c10, PREMIUM_TIER_2_REFERRAL_INCENTIVE_DISCOUNT_ID: closure_11, PRICE_PLACEHOLDER: closure_12, PremiumSubscriptionSKUToPremiumType: map1, PremiumTypes } = PremiumConstants);
({ PremiumTypeToActivePremiumSubscriptionSKU: closure_15, SubscriptionIntervalTypes: closure_16, SubscriptionPlanInfo: closure_17, SubscriptionPlans: closure_18 } = PremiumConstants);
const Fonts = fn(1089).Fonts;
const jsxProd = fn(21);
({ jsx: closure_19, jsxs: closure_20 } = jsxProd);
let items = [, ];
({ TIER_0: arr[0], TIER_2: arr[1] } = PremiumTypes);
const set = new Set(items);
const createStyles = fn(4790);
let obj2 = { containerWrapper: { position: "relative" }, card: { display: "flex", justifyContent: "flex-start", width: "100%", padding: 24, backgroundColor: "transparent", overflow: "hidden", borderRadius: nativeDefault.radii.lg }, logoContainer: { marginBottom: 8 }, logo: { marginRight: 4 }, priceContainer: { display: "flex", flexWrap: "wrap", flexDirection: "row", maxWidth: "50%" }, discountPriceText: { maxWidth: "62%", includeFontPadding: true }, featureList: { marginTop: 8 }, featureLabel: null, featureRow: null, featureIcon: null, button: null, currentPlanLabel: null, trialSubTextContainer: null, trialSubText: null, pill: null, buttonIcon: null };
let obj4 = {};
let TextStyles = TextStyles_mod;
const merged = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.unsafe_rawColors.WHITE, 14));
obj4.marginLeft = -8;
obj2.featureLabel = obj4;
obj2.featureRow = { paddingVertical: 7 };
obj2.featureIcon = { height: 16, width: 16 };
obj2.button = { marginTop: 16 };
obj2.currentPlanLabel = { marginTop: 16, paddingVertical: 12, alignItems: "center", justifyContent: "center" };
obj2.trialSubTextContainer = { paddingHorizontal: 24, marginTop: -12, paddingBottom: 16, alignItems: "center", bottom: 0 };
let obj5 = {};
let TextStyles = TextStyles_mod;
const merged1 = Object.assign(TextStyles(Fonts.DISPLAY_MEDIUM, nativeDefault.unsafe_rawColors.WHITE, 12));
obj5.textAlign = "center";
obj2.trialSubText = obj5;
obj2.pill = { position: "absolute", top: -10, maxWidth: 240, alignSelf: "center", zIndex: 2 };
obj2.buttonIcon = { marginRight: 4, alignSelf: "center", marginTop: 1 };
let closure_22 = createStyles.createStyles(obj2);
let closure_23 = { page: AnalyticsPages.USER_SETTINGS, section: AnalyticsSections.SETTINGS_PREMIUM, objectType: AnalyticsObjectTypes.BUY };
let ReactCompilerGating = fn(558);
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(40);
  ({ premiumItem, discountedPriceString, discountOffer, activeDiscountInfo, subscriptionTrial, premiumType, premiumSubscription, fractionalPremiumInfo } = arg0);
  const tmp4 = closure_22();
  let percentage = importDefault;
  const tmp5 = usePremiumPlanPriceDefault(premiumItem.basePlanId);
  if (cResult[0] !== premiumItem.interval) {
    const intervalStringAsNoun = PremiumUtilsDefault.getIntervalStringAsNoun(premiumItem.interval);
    cResult[0] = premiumItem.interval;
    cResult[1] = intervalStringAsNoun;
    let tmp6 = intervalStringAsNoun;
    const percentageResult = PremiumUtilsDefault;
  } else {
    tmp6 = cResult[1];
  }
  let intervalCount = dependencyMap4[premiumItem.basePlanId];
  if (cResult[2] === activeDiscountInfo) {
    if (cResult[3] === discountOffer) {
      if (cResult[4] === discountedPriceString) {
        if (cResult[5] === fractionalPremiumInfo) {
          if (cResult[6] === intervalCount.interval) {
            if (cResult[7] === intervalCount.intervalCount) {
              if (cResult[8] === tmp5) {
                if (cResult[9] === premiumSubscription) {
                  if (cResult[10] === premiumType) {
                    if (cResult[11] === tmp4.discountPriceText) {
                      const _Symbol = Symbol;
                      if (cResult[12] !== Symbol.for("react.early_return_sentinel")) {
                        return tmp8;
                      } else {
                        if (null != subscriptionTrial) {
                          if (premiumType === dependencyMap2[subscriptionTrial.skuId]) {
                            let priceString;
                            if (tmp5 != null) {
                              priceString = tmp5.priceString;
                            }
                            if (cResult[25] === priceString) {
                              let interval;
                              if (subscriptionTrial != null) {
                                interval = subscriptionTrial.interval;
                              }
                              if (cResult[26] === interval) {
                                let intervalCount1;
                                if (subscriptionTrial != null) {
                                  intervalCount1 = subscriptionTrial.intervalCount;
                                }
                                if (cResult[27] === intervalCount1) {
                                  let tmp51 = cResult[28];
                                }
                                if (cResult[29] === tmp4.discountPriceText) {
                                  if (cResult[30] === tmp51) {
                                    let tmp59 = cResult[31];
                                  }
                                  return tmp59;
                                }
                                const obj2 = { variant: "text-md/normal", color: "text-overlay-light", style: tmp4.discountPriceText, children: tmp51 };
                                const tmp61 = closure_1_19(tmp(4786).Text, obj2);
                                cResult[29] = tmp4.discountPriceText;
                                cResult[30] = tmp51;
                                cResult[31] = tmp61;
                                tmp59 = tmp61;
                              }
                            }
                            const intl6 = tmp(1119).intl;
                            let interval1;
                            if (subscriptionTrial != null) {
                              interval1 = subscriptionTrial.interval;
                            }
                            const obj3 = { intervalType: interval1, intervalCount: null };
                            let intervalCount2;
                            if (subscriptionTrial != null) {
                              intervalCount2 = subscriptionTrial.intervalCount;
                            }
                            const obj4 = { trialPeriod: null, price: null };
                            obj3.intervalCount = intervalCount2;
                            obj4.trialPeriod = tmp(4450).formatIntervalDuration(obj3);
                            let priceString1;
                            if (tmp5 != null) {
                              priceString1 = tmp5.priceString;
                            }
                            if (priceString1 == null) {
                              priceString1 = __initData;
                            }
                            obj4.price = priceString1;
                            const formatResult = intl6.format(tmp(1119).t["xOX9/9"], obj4);
                            let priceString2;
                            if (tmp5 != null) {
                              priceString2 = tmp5.priceString;
                            }
                            cResult[25] = priceString2;
                            let interval2;
                            if (subscriptionTrial != null) {
                              interval2 = subscriptionTrial.interval;
                            }
                            cResult[26] = interval2;
                            let intervalCount3;
                            if (subscriptionTrial != null) {
                              intervalCount3 = subscriptionTrial.intervalCount;
                            }
                            cResult[27] = intervalCount3;
                            cResult[28] = formatResult;
                            tmp51 = formatResult;
                            const tmpResult = tmp(4450);
                          }
                        }
                        let priceString3;
                        if (tmp5 != null) {
                          priceString3 = tmp5.priceString;
                        }
                        if (priceString3 == null) {
                          priceString3 = __initData;
                        }
                        if (cResult[32] !== priceString3) {
                          const obj5 = { variant: "text-md/bold", color: "text-overlay-light", children: priceString3 };
                          const tmp39 = closure_1_19(tmp(4786).Text, obj5);
                          cResult[32] = priceString3;
                          cResult[33] = tmp39;
                          let tmp37 = tmp39;
                        } else {
                          tmp37 = cResult[33];
                        }
                        const _HermesInternal = HermesInternal;
                        const combined = " / " + tmp6;
                        if (cResult[34] !== combined) {
                          const obj6 = { variant: "text-md/normal", color: "text-overlay-light", children: combined };
                          const tmp43 = closure_1_19(tmp(4786).Text, obj6);
                          cResult[34] = combined;
                          cResult[35] = tmp43;
                          let tmp41 = tmp43;
                        } else {
                          tmp41 = cResult[35];
                        }
                        if (cResult[36] === tmp4.priceContainer) {
                          if (cResult[37] === tmp37) {
                            if (cResult[38] === tmp41) {
                              let tmp44 = cResult[39];
                            }
                            return tmp44;
                          }
                        }
                        const obj7 = { accessible: true, style: tmp4.priceContainer, children: null };
                        const items = [tmp37, tmp41];
                        obj7.children = items;
                        const tmp47 = closure_1_20(View, obj7);
                        cResult[36] = tmp4.priceContainer;
                        cResult[37] = tmp37;
                        cResult[38] = tmp41;
                        cResult[39] = tmp47;
                        tmp44 = tmp47;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  let tmp9 = globalThis;
  const forResult = Symbol.for("react.early_return_sentinel");
  let priceString4;
  if (tmp5 != null) {
    priceString4 = tmp5.priceString;
  }
  if (priceString4 == null) {
    priceString4 = __initData;
  }
  const formatRateResult = PriceUtils.formatRate(priceString4, intervalCount.interval, intervalCount.intervalCount);
  if (null != discountedPriceString) {
    if (null != discountOffer) {
      const obj8 = { variant: "text-md/normal", color: "text-overlay-light", style: tmp4.discountPriceText, children: null };
      const intl7 = tmp(1119).intl;
      const obj9 = { discountedPrice: discountedPriceString, numMonths: null, regularPrice: null };
      const discount = discountOffer.discount;
      let num3;
      if (discount != null) {
        num3 = discount.intervalCount;
      }
      if (num3 == null) {
        num3 = 1;
      }
      obj9.numMonths = num3;
      obj9.regularPrice = formatRateResult;
      obj8.children = intl7.format(tmp(1119).t.sJTwHQ, obj9);
      let tmp62Result = closure_1_19(tmp(4786).Text, obj8);
    }
    cResult[2] = activeDiscountInfo;
    cResult[3] = discountOffer;
    cResult[4] = discountedPriceString;
    cResult[5] = fractionalPremiumInfo;
    fractionalPremiumInfo = intervalCount.interval;
    cResult[6] = fractionalPremiumInfo;
    intervalCount = intervalCount.intervalCount;
    cResult[7] = intervalCount;
    cResult[8] = tmp5;
    cResult[9] = premiumSubscription;
    cResult[10] = premiumType;
    premiumSubscription = tmp4.discountPriceText;
    cResult[11] = premiumSubscription;
    cResult[12] = tmp62Result;
  }
  tmp62Result = forResult;
  if (null != activeDiscountInfo) {
    tmp62Result = forResult;
    if (null != premiumSubscription) {
      if (premiumSubscription.planIdFromItems === collapsedCategories.PREMIUM_YEAR_TIER_2) {
        let flag = false;
        if (null != premiumSubscription) {
          const planIdFromItems = premiumSubscription.planIdFromItems;
          let tmp14 = null != planIdFromItems;
          if (tmp14) {
            tmp14 = tmp(4450).getPremiumType(planIdFromItems) === premiumType;
            const tmpResult7 = tmp(4450);
          }
          flag = tmp14;
        }
        if (flag) {
          let hasActiveTrial;
          if (premiumSubscription != null) {
            hasActiveTrial = premiumSubscription.hasActiveTrial;
          }
          if (!hasActiveTrial) {
            const intl = tmp(1119).intl;
            let percentage2 = activeDiscountInfo.percentage;
            if (percentage2 == null) {
              percentage2 = closure_1_8;
            }
            const obj10 = { percent: percentage2, regularPrice: formatRateResult, renewalDate: tmp(4450).getExpectedRenewalDate(premiumSubscription, fractionalPremiumInfo) };
            let discountPriceText = intl.format(tmp(1119).t.z2oQtA, obj10);
            const tmpResult8 = tmp(4450);
          }
          if (cResult[22] === discountPriceText) {
          }
          const obj11 = { variant: "text-md/normal", color: "text-overlay-light", style: tmp4.discountPriceText, children: discountPriceText };
          const tmp31 = closure_1_19(tmp(4786).Text, obj11);
          cResult[22] = discountPriceText;
          discountPriceText = tmp4.discountPriceText;
          cResult[23] = discountPriceText;
          cResult[24] = tmp31;
        }
      }
      if (premiumSubscription.hasAnyPremiumGroup) {
        const metadata = premiumSubscription.metadata;
        let prop;
        if (metadata != null) {
          prop = metadata.active_discount_expires_at;
        }
        if (null != prop) {
          if (cResult[13] === activeDiscountInfo.percentage) {
          }
          let priceString5 = tmp(8345).getPriceString(premiumSubscription);
          const intl5 = tmp(1119).intl;
          let num12 = activeDiscountInfo.percentage;
          if (num12 == null) {
            num12 = 0;
          }
          const obj12 = { percent: num12, discountEndDate: null, regularPrice: null };
          const date = new tmp9.Date(premiumSubscription.metadata.active_discount_expires_at);
          tmp9 = date;
          obj12.discountEndDate = date;
          if (priceString5 == null) {
            priceString5 = __initData;
          }
          obj12.regularPrice = priceString5;
          const formatResult1 = intl5.format(_modDef3198.FwjZzr, obj12);
          percentage = activeDiscountInfo.percentage;
          cResult[13] = percentage;
          cResult[14] = premiumSubscription;
          cResult[15] = formatResult1;
          const tmpResult9 = tmp(8345);
        }
      }
      if (activeDiscountInfo.discountId === closure_1_11) {
        let source;
        if (tmp5 != null) {
          source = tmp5.source;
        }
        if (source === tmp(9508).PremiumPlanPriceSource.API) {
          let percentage4 = activeDiscountInfo.percentage;
          if (percentage4 == null) {
            percentage4 = v65535;
          }
          if (cResult[16] === activeDiscountInfo.duration) {
            if (cResult[17] === percentage4) {
              if (cResult[18] === tmp5.currency) {
                if (cResult[19] === tmp5.price) {
                  if (cResult[20] === tmp5.priceString) {
                    let tmp19 = cResult[21];
                  }
                  discountPriceText = tmp19;
                }
              }
            }
          }
          const _Math = Math;
          const rounded = Math.round(tmp5.price * (1 - percentage4 / 100));
          const intl3 = tmp(1119).intl;
          let duration2 = activeDiscountInfo.duration;
          if (duration2 == null) {
            duration2 = options;
          }
          const obj13 = { numMonths: duration2, discountedPrice: tmp(7513).formatPrice(rounded, tmp5.currency), billingPeriod: null, fullPrice: null };
          const intl4 = tmp(1119).intl;
          obj13.billingPeriod = intl4.string(tmp(1119).t.FPybU7);
          obj13.fullPrice = tmp5.priceString;
          const formatResult2 = intl3.format(tmp(1119).t.N43FMx, obj13);
          cResult[16] = activeDiscountInfo.duration;
          cResult[17] = percentage4;
          cResult[18] = tmp5.currency;
          cResult[19] = tmp5.price;
          cResult[20] = tmp5.priceString;
          cResult[21] = formatResult2;
          tmp19 = formatResult2;
          const tmpResult10 = tmp(7513);
        }
      }
      const intl2 = tmp(1119).intl;
      let percentage3 = activeDiscountInfo.percentage;
      if (percentage3 == null) {
        percentage3 = v65535;
      }
      const obj14 = { percent: percentage3, numMonths: null, regularPrice: null };
      let duration = activeDiscountInfo.duration;
      if (duration == null) {
        duration = options;
      }
      obj14.numMonths = duration;
      obj14.regularPrice = formatRateResult;
      discountPriceText = intl2.format(tmp(1119).t["3ZiutU"], obj14);
    }
  }
}) : ((fractionalPremiumInfo) => {
  ({ premiumItem, discountedPriceString, discountOffer, activeDiscountInfo, subscriptionTrial, premiumType, premiumSubscription } = fractionalPremiumInfo);
  const tmp = closure_22();
  const tmp4 = usePremiumPlanPriceDefault(premiumItem.basePlanId);
  const intervalStringAsNoun = PremiumUtilsDefault.getIntervalStringAsNoun(premiumItem.interval);
  let priceString;
  if (tmp4 != null) {
    priceString = tmp4.priceString;
  }
  if (priceString == null) {
    priceString = __initData;
  }
  const formatRateResult = PriceUtils.formatRate(priceString, dependencyMap4[premiumItem.basePlanId].interval, dependencyMap4[premiumItem.basePlanId].intervalCount);
  if (null != discountedPriceString) {
    if (null != discountOffer) {
      const obj3 = { variant: "text-md/normal", color: "text-overlay-light", style: tmp.discountPriceText, children: null };
      const intl7 = tmp7(1119).intl;
      const obj4 = { discountedPrice: discountedPriceString, numMonths: null, regularPrice: null };
      const discount = discountOffer.discount;
      let num4;
      if (discount != null) {
        num4 = discount.intervalCount;
      }
      if (num4 == null) {
        num4 = 1;
      }
      obj4.numMonths = num4;
      obj4.regularPrice = formatRateResult;
      obj3.children = intl7.format(tmp7(1119).t.sJTwHQ, obj4);
      return closure_1_19(tmp7(4786).Text, obj3);
    }
  }
  if (null != activeDiscountInfo) {
    if (null != premiumSubscription) {
      if (premiumSubscription.planIdFromItems === collapsedCategories.PREMIUM_YEAR_TIER_2) {
        let flag = false;
        if (null != premiumSubscription) {
          const planIdFromItems = premiumSubscription.planIdFromItems;
          let tmp21 = null != planIdFromItems;
          if (tmp21) {
            tmp21 = tmp7(4450).getPremiumType(planIdFromItems) === premiumType;
            const tmp7Result = tmp7(4450);
          }
          flag = tmp21;
        }
        if (flag) {
          let hasActiveTrial;
          if (premiumSubscription != null) {
            hasActiveTrial = premiumSubscription.hasActiveTrial;
          }
          if (!hasActiveTrial) {
            const intl2 = tmp7(1119).intl;
            let percentage = activeDiscountInfo.percentage;
            if (percentage == null) {
              percentage = closure_1_8;
            }
            const obj5 = { percent: percentage, regularPrice: formatRateResult, renewalDate: tmp7(4450).getExpectedRenewalDate(premiumSubscription, fractionalPremiumInfo.fractionalPremiumInfo) };
            let formatResult = intl2.format(tmp7(1119).t.z2oQtA, obj5);
            const tmp7Result5 = tmp7(4450);
          }
          const obj6 = { variant: "text-md/normal", color: "text-overlay-light", style: tmp.discountPriceText, children: formatResult };
          return closure_1_19(tmp7(4786).Text, obj6);
        }
      }
      if (premiumSubscription.hasAnyPremiumGroup) {
        const metadata = premiumSubscription.metadata;
        let prop;
        if (metadata != null) {
          prop = metadata.active_discount_expires_at;
        }
        if (null != prop) {
          let priceString1 = tmp7(8345).getPriceString(premiumSubscription);
          const intl6 = tmp7(1119).intl;
          let num3 = activeDiscountInfo.percentage;
          if (num3 == null) {
            num3 = 0;
          }
          const obj7 = { percent: num3, discountEndDate: null, regularPrice: null };
          const _Date = Date;
          const date = new Date(premiumSubscription.metadata.active_discount_expires_at);
          obj7.discountEndDate = date;
          if (priceString1 == null) {
            priceString1 = __initData;
          }
          obj7.regularPrice = priceString1;
          formatResult = intl6.format(_modDef3198.FwjZzr, obj7);
          const tmp7Result6 = tmp7(8345);
        }
      }
      if (activeDiscountInfo.discountId === closure_1_11) {
        let source;
        if (tmp4 != null) {
          source = tmp4.source;
        }
        if (source === tmp7(9508).PremiumPlanPriceSource.API) {
          let percentage3 = activeDiscountInfo.percentage;
          if (percentage3 == null) {
            percentage3 = v65535;
          }
          const _Math = Math;
          const rounded = Math.round(tmp4.price * (1 - percentage3 / 100));
          const intl4 = tmp7(1119).intl;
          let duration2 = activeDiscountInfo.duration;
          if (duration2 == null) {
            duration2 = options;
          }
          const obj8 = { numMonths: duration2, discountedPrice: tmp7(7513).formatPrice(rounded, tmp4.currency), billingPeriod: null, fullPrice: null };
          const intl5 = tmp7(1119).intl;
          obj8.billingPeriod = intl5.string(tmp7(1119).t.FPybU7);
          obj8.fullPrice = tmp4.priceString;
          formatResult = intl4.format(tmp7(1119).t.N43FMx, obj8);
          const tmp7Result7 = tmp7(7513);
        }
      }
      const intl3 = tmp7(1119).intl;
      let percentage2 = activeDiscountInfo.percentage;
      if (percentage2 == null) {
        percentage2 = v65535;
      }
      const obj9 = { percent: percentage2, numMonths: null, regularPrice: null };
      let duration = activeDiscountInfo.duration;
      if (duration == null) {
        duration = options;
      }
      obj9.numMonths = duration;
      obj9.regularPrice = formatRateResult;
      formatResult = intl3.format(tmp7(1119).t["3ZiutU"], obj9);
    }
  }
  if (null != subscriptionTrial) {
    if (premiumType === dependencyMap2[subscriptionTrial.skuId]) {
      const obj10 = { variant: "text-md/normal", color: "text-overlay-light", style: tmp.discountPriceText, children: null };
      const intl = tmp7(1119).intl;
      let interval;
      if (subscriptionTrial != null) {
        interval = subscriptionTrial.interval;
      }
      const obj11 = { intervalType: interval, intervalCount: null };
      let intervalCount;
      if (subscriptionTrial != null) {
        intervalCount = subscriptionTrial.intervalCount;
      }
      const obj12 = { trialPeriod: null, price: null };
      obj11.intervalCount = intervalCount;
      obj12.trialPeriod = tmp7(4450).formatIntervalDuration(obj11);
      let priceString2;
      if (tmp4 != null) {
        priceString2 = tmp4.priceString;
      }
      if (priceString2 == null) {
        priceString2 = __initData;
      }
      obj12.price = priceString2;
      obj10.children = intl.format(tmp7(1119).t["xOX9/9"], obj12);
      let tmp11Result = closure_1_19(tmp7(4786).Text, obj10);
      const tmp7Result8 = tmp7(4450);
    }
    return tmp11Result;
  }
  const obj13 = { accessible: true, style: tmp.priceContainer, children: null };
  let priceString3;
  if (tmp4 != null) {
    priceString3 = tmp4.priceString;
  }
  if (priceString3 == null) {
    priceString3 = __initData;
  }
  const items = [closure_1_19(Text_Text.Text, { variant: "text-md/bold", color: "text-overlay-light", children: priceString3 }), ];
  const tmp11 = closure_1_20;
  const tmp12 = View;
  items[1] = closure_1_19(Text_Text.Text, { variant: "text-md/normal", color: "text-overlay-light", children: " / " + intervalStringAsNoun });
  obj13.children = items;
  tmp11Result = tmp11(tmp12, obj13);
});
ReactCompilerGating = fn(558);
let obj3 = { display: "flex", justifyContent: "flex-start", width: "100%", padding: 24, backgroundColor: "transparent", overflow: "hidden", borderRadius: nativeDefault.radii.lg };
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((premiumType) => {
  const cResult = premiumType(568).c(68);
  premiumType = premiumType.premiumType;
  ({ style, onLayout, applicationId: importDefault, onPaymentSuccess: dependencyMap, onPaymentDismiss: _slicedToArray, hideButton, forFractionalPremium, hidePrice, isPremiumGroup, premiumGroupRole } = premiumType);
  if (undefined === premiumGroupRole) {
    premiumGroupRole = tmp(1384).PremiumSubscriptionGroupRole.UNSPECIFIED;
  }
  const tmp7 = closure_22();
  const obj = premiumType(568);
  const tmp5 = undefined !== hidePrice && hidePrice;
  _modDef38(set.has(premiumType), "only Tier 0 and Tier 2 are supported");
  const premiumTrialOffer = premiumType(7726).usePremiumTrialOffer();
  const tmpResult = premiumType(7726);
  const premiumDiscountOffer = premiumType(8356).usePremiumDiscountOffer();
  const tmpResult11 = premiumType(8356);
  const activeDiscountInfo = premiumType(8354).useActiveDiscountInfo();
  useFractionalPremiumInfoDefault();
  const tmpResult12 = premiumType(8354);
  let subscriptionTrial;
  const premiumTrialOfferPremiumType = premiumType(7725).usePremiumTrialOfferPremiumType();
  if (premiumTrialOffer != null) {
    subscriptionTrial = premiumTrialOffer.subscriptionTrial;
  }
  const tmpResult13 = premiumType(7725);
  let interval;
  if (subscriptionTrial != null) {
    interval = subscriptionTrial.interval;
  }
  const obj2 = { intervalType: interval, intervalCount: null };
  let intervalCount;
  if (subscriptionTrial != null) {
    intervalCount = subscriptionTrial.intervalCount;
  }
  obj2.intervalCount = intervalCount;
  const result = premiumType(4450).formatIntervalDuration(obj2);
  let intl = tmp(1119).intl;
  intl.string(premiumType(1119).t.J61px0);
  const analyticsLocations = tmp8(7441)().analyticsLocations;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [SubscriptionStore];
    class H {
      constructor() {
        items = [, ];
        items[0] = closure_7.getPremiumTypeSubscription();
        items[1] = closure_7.hasFetchedSubscriptions();
        return items;
      }
    }
    cResult[0] = items;
    cResult[1] = H;
    tmp21 = items;
    tmp22 = H;
  } else {
    [tmp21, tmp22] = cResult;
  }
  const tmpResult14 = premiumType(4450);
  [first] = premiumType(504).useStateFromStoresArray(tmp21, tmp22);
  const useReducedMotion = tmp26;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [interval1];
    class H {
      constructor() {
        items = [, ];
        items[0] = closure_7.getPremiumTypeSubscription();
        items[1] = closure_7.hasFetchedSubscriptions();
        return items;
      }
    }
    let tmp27 = items1;
  } else {
    tmp27 = cResult[2];
  }
  if (cResult[3] !== dependencyMap3[premiumType]) {
    function te() {
      const items = [closure_5];
      return SubscriptionPlanStore.isLoadedForSKUs(items);
    }
    cResult[3] = tmp26;
    class H {
      constructor() {
        items = [, ];
        items[0] = closure_7.getPremiumTypeSubscription();
        items[1] = closure_7.hasFetchedSubscriptions();
        return items;
      }
    }
    cResult[4] = te;
    let tmp29 = te;
  } else {
    tmp29 = cResult[4];
  }
  const tmpResult15 = premiumType(504);
  const stateFromStores = premiumType(504).useStateFromStores(tmp27, tmp29);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [useReducedMotion];
    class H {
      constructor() {
        items = [, ];
        items[0] = closure_7.getPremiumTypeSubscription();
        items[1] = closure_7.hasFetchedSubscriptions();
        return items;
      }
    }
    cResult[5] = items2;
    cResult[6] = tmp34;
    let tmp32 = tmp34;
    let tmp31 = items2;
  } else {
    tmp31 = cResult[5];
    tmp32 = cResult[6];
  }
  const tmpResult16 = premiumType(504);
  const stateFromStores1 = premiumType(504).useStateFromStores(tmp31, tmp32);
  usePremiumFeaturesDefault(premiumType, undefined !== forFractionalPremium && forFractionalPremium, premiumGroupRole);
  let tmp37 = tmp6;
  if (undefined !== isPremiumGroup && isPremiumGroup) {
    tmp37 = null == activeDiscountInfo;
  }
  if (!tmp37) {
    tmp37 = tmp4;
  }
  if (!tmp37) {
    tmp37 = tmp5;
  }
  if (cResult[7] !== first) {
    let isMetaQuestResult = null != first && first.isBoostOnly;
    if (isMetaQuestResult) {
      isMetaQuestResult = tmp(1613).isMetaQuest();
      const tmpResult18 = tmp(1613);
    }
    class H {
      constructor() {
        items = [, ];
        items[0] = closure_7.getPremiumTypeSubscription();
        items[1] = closure_7.hasFetchedSubscriptions();
        return items;
      }
    }
    cResult[8] = isMetaQuestResult;
  }
  let tmp41 = null;
  if (null != first) {
    tmp41 = null;
    if (undefined !== first.planIdFromItems) {
      tmp41 = dependencyMap4[first.planIdFromItems];
    }
  }
  interval1 = undefined;
  if (tmp41 != null) {
    interval1 = tmp41.interval;
  }
  if (interval1 == null) {
    interval1 = constants.MONTH;
  }
  if (cResult[9] === interval1) {
    if (cResult[10] === premiumType) {
      let tmp45 = cResult[11];
    }
    SubscriptionStore = tmp45;
    class H {
      constructor() {
        items = [, ];
        items[0] = closure_7.getPremiumTypeSubscription();
        items[1] = closure_7.hasFetchedSubscriptions();
        return items;
      }
    }
    if (cResult[12] !== tmp45) {
      const items3 = [tmp45];
      class H {
        constructor() {
          items = [, ];
          items[0] = closure_7.getPremiumTypeSubscription();
          items[1] = closure_7.hasFetchedSubscriptions();
          return items;
        }
      }
      cResult[13] = items3;
      let tmp47 = items3;
    } else {
      tmp47 = cResult[13];
    }
    const tmp48 = null != premiumDiscountOffer && null != tmp(9523).useDiscountedPremiumProductInfo(premiumDiscountOffer, tmp47).discountedPriceString;
    if (cResult[14] !== premiumType) {
      class Se {
        constructor() {
          if (premiumType === PremiumTypes.TIER_0) {
            tmp4 = closure_0;
            tmp5 = closure_2;
            intl2 = closure_0(closure_2[19]).intl;
            stringResult = intl2.string(closure_0(closure_2[19]).t.cM8bbx);
          } else {
            tmp = closure_0;
            tmp2 = closure_2;
            intl = closure_0(closure_2[19]).intl;
            stringResult = intl.string(closure_0(closure_2[19]).t["8x0jKT"]);
          }
          return stringResult;
        }
      }
      cResult[14] = premiumType;
      class H {
        constructor() {
          items = [, ];
          items[0] = closure_7.getPremiumTypeSubscription();
          items[1] = closure_7.hasFetchedSubscriptions();
          return items;
        }
      }
      cResult[15] = Se;
    } else {
      class Se {
        constructor() {
          if (premiumType === PremiumTypes.TIER_0) {
            tmp4 = closure_0;
            tmp5 = closure_2;
            intl2 = closure_0(closure_2[19]).intl;
            stringResult = intl2.string(closure_0(closure_2[19]).t.cM8bbx);
          } else {
            tmp = closure_0;
            tmp2 = closure_2;
            intl = closure_0(closure_2[19]).intl;
            stringResult = intl.string(closure_0(closure_2[19]).t["8x0jKT"]);
          }
          return stringResult;
        }
      }
    }
    if (tmp40) {
      class Se {
        constructor() {
          if (premiumType === PremiumTypes.TIER_0) {
            tmp4 = closure_0;
            tmp5 = closure_2;
            intl2 = closure_0(closure_2[19]).intl;
            stringResult = intl2.string(closure_0(closure_2[19]).t.cM8bbx);
          } else {
            tmp = closure_0;
            tmp2 = closure_2;
            intl = closure_0(closure_2[19]).intl;
            stringResult = intl.string(closure_0(closure_2[19]).t["8x0jKT"]);
          }
          return stringResult;
        }
      }
      if (null != first) {
        class Se {
          constructor() {
            if (premiumType === PremiumTypes.TIER_0) {
              tmp4 = closure_0;
              tmp5 = closure_2;
              intl2 = closure_0(closure_2[19]).intl;
              stringResult = intl2.string(closure_0(closure_2[19]).t.cM8bbx);
            } else {
              tmp = closure_0;
              tmp2 = closure_2;
              intl = closure_0(closure_2[19]).intl;
              stringResult = intl.string(closure_0(closure_2[19]).t["8x0jKT"]);
            }
            return stringResult;
          }
        }
        let tmp53 = null != tmp52;
        if (tmp53) {
          class Se {
            constructor() {
              if (premiumType === PremiumTypes.TIER_0) {
                tmp4 = closure_0;
                tmp5 = closure_2;
                intl2 = closure_0(closure_2[19]).intl;
                stringResult = intl2.string(closure_0(closure_2[19]).t.cM8bbx);
              } else {
                tmp = closure_0;
                tmp2 = closure_2;
                intl = closure_0(closure_2[19]).intl;
                stringResult = intl.string(closure_0(closure_2[19]).t["8x0jKT"]);
              }
              return stringResult;
            }
          }
          tmp53 = obj14.getPremiumType(tmp52) === premiumType;
        }
        class H {
          constructor() {
            items = [, ];
            items[0] = closure_7.getPremiumTypeSubscription();
            items[1] = closure_7.hasFetchedSubscriptions();
            return items;
          }
        }
      }
    }
    tmp8(9508)(tmp45.basePlanId);
    if (cResult[16] === premiumDiscountOffer) {
      class Se {
        constructor() {
          if (premiumType === PremiumTypes.TIER_0) {
            tmp4 = closure_0;
            tmp5 = closure_2;
            intl2 = closure_0(closure_2[19]).intl;
            stringResult = intl2.string(closure_0(closure_2[19]).t.cM8bbx);
          } else {
            tmp = closure_0;
            tmp2 = closure_2;
            intl = closure_0(closure_2[19]).intl;
            stringResult = intl.string(closure_0(closure_2[19]).t["8x0jKT"]);
          }
          return stringResult;
        }
      }
    }
    const obj3 = { style: tmp7.pill, discountOffer: premiumDiscountOffer, isActiveDiscount: null != activeDiscountInfo, shouldShowDiscountUpsell: tmp48, premiumType, trialOffer: premiumTrialOffer };
    const tmp59 = closure_19(tmp(7717).PremiumPill, obj3);
    cResult[16] = premiumDiscountOffer;
    cResult[17] = premiumType;
    cResult[18] = tmp48;
    cResult[19] = tmp7.pill;
    cResult[20] = null != activeDiscountInfo;
    cResult[21] = premiumTrialOffer;
    cResult[22] = tmp59;
    const tmpResult19 = tmp(9523);
  }
  const tmpResult17 = premiumType(504);
  const premiumBundleWithPredicate = premiumType(7685).getPremiumBundleWithPredicate((additionalPlans) => {
    let tmp = 0 === additionalPlans.additionalPlans.length;
    ({ numPremiumGuild, premiumTier, interval } = additionalPlans);
    if (tmp) {
      tmp = !additionalPlans.isDeprecated;
    }
    if (tmp) {
      tmp = 0 === numPremiumGuild;
    }
    if (tmp) {
      tmp = premiumTier === premiumType;
    }
    if (tmp) {
      tmp = interval === interval1;
    }
    return tmp;
  });
  cResult[9] = interval1;
  cResult[10] = premiumType;
  cResult[11] = premiumBundleWithPredicate;
  tmp45 = premiumBundleWithPredicate;
}) : ((premiumType) => {
  premiumType = premiumType.premiumType;
  ({ applicationId: importDefault, onPaymentSuccess: dependencyMap, onPaymentDismiss: _slicedToArray, hideButton } = premiumType);
  ({ style, onLayout } = premiumType);
  if (hideButton === undefined) {
    hideButton = false;
  }
  let flag = premiumType.forFractionalPremium;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = premiumType.hidePrice;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = premiumType.isPremiumGroup;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let UNSPECIFIED = premiumType.premiumGroupRole;
  if (UNSPECIFIED === undefined) {
    UNSPECIFIED = premiumType(1384).PremiumSubscriptionGroupRole.UNSPECIFIED;
  }
  let analyticsLocations;
  let useReducedMotion;
  let interval1;
  let premiumBundleWithPredicate;
  const tmp3 = closure_22();
  _modDef38(set.has(premiumType), "only Tier 0 and Tier 2 are supported");
  const premiumTrialOffer = premiumType(7726).usePremiumTrialOffer();
  const obj = premiumType(7726);
  const premiumDiscountOffer = premiumType(8356).usePremiumDiscountOffer();
  const obj2 = premiumType(8356);
  const activeDiscountInfo = premiumType(8354).useActiveDiscountInfo();
  const obj3 = premiumType(8354);
  const tmp12 = useFractionalPremiumInfoDefault();
  let subscriptionTrial;
  const premiumTrialOfferPremiumType = premiumType(7725).usePremiumTrialOfferPremiumType();
  if (premiumTrialOffer != null) {
    subscriptionTrial = premiumTrialOffer.subscriptionTrial;
  }
  const obj4 = premiumType(7725);
  let interval;
  if (subscriptionTrial != null) {
    interval = subscriptionTrial.interval;
  }
  const obj5 = { intervalType: interval, intervalCount: null };
  let intervalCount;
  if (subscriptionTrial != null) {
    intervalCount = subscriptionTrial.intervalCount;
  }
  obj5.intervalCount = intervalCount;
  const result = premiumType(4450).formatIntervalDuration(obj5);
  const intl = tmp8(1119).intl;
  const stringResult = intl.string(premiumType(1119).t.J61px0);
  analyticsLocations = tmp4(7441)().analyticsLocations;
  const tmp8Result = premiumType(4450);
  let items = [premiumBundleWithPredicate];
  const tmp19 = _slicedToArray(premiumType(504).useStateFromStoresArray(items, () => {
    const items = [premiumBundleWithPredicate.getPremiumTypeSubscription(), premiumBundleWithPredicate.hasFetchedSubscriptions()];
    return items;
  }), 2);
  const first = tmp19[0];
  useReducedMotion = dependencyMap3[premiumType];
  const tmp8Result8 = premiumType(504);
  const items1 = [interval1];
  const stateFromStores = premiumType(504).useStateFromStores(items1, () => {
    const items = [closure_5];
    return SubscriptionPlanStore.isLoadedForSKUs(items);
  });
  const tmp8Result9 = premiumType(504);
  const items2 = [useReducedMotion];
  const stateFromStores1 = premiumType(504).useStateFromStores(items2, () => useReducedMotion.useReducedMotion);
  let isBoostOnly = null != first;
  const tmp8Result10 = premiumType(504);
  if (isBoostOnly) {
    isBoostOnly = first.isBoostOnly;
  }
  if (isBoostOnly) {
    isBoostOnly = tmp8(1613).isMetaQuest();
    const tmp8Result11 = tmp8(1613);
  }
  let tmp25 = null;
  if (null != first) {
    tmp25 = null;
    if (undefined !== first.planIdFromItems) {
      tmp25 = dependencyMap4[first.planIdFromItems];
    }
  }
  interval1 = undefined;
  if (tmp25 != null) {
    interval1 = tmp25.interval;
  }
  if (interval1 == null) {
    interval1 = constants.MONTH;
  }
  const tmp23 = usePremiumFeaturesDefault(premiumType, flag, UNSPECIFIED);
  premiumBundleWithPredicate = premiumType(7685).getPremiumBundleWithPredicate((additionalPlans) => {
    let tmp = 0 === additionalPlans.additionalPlans.length;
    ({ numPremiumGuild, premiumTier, interval } = additionalPlans);
    if (tmp) {
      tmp = !additionalPlans.isDeprecated;
    }
    if (tmp) {
      tmp = 0 === numPremiumGuild;
    }
    if (tmp) {
      tmp = premiumTier === premiumType;
    }
    if (tmp) {
      tmp = interval === interval1;
    }
    return tmp;
  });
  _modDef38(null != premiumBundleWithPredicate, "could not find a premium item");
  const tmp8Result12 = premiumType(7685);
  const items3 = [premiumBundleWithPredicate];
  const discountedPriceString = premiumType(9523).useDiscountedPremiumProductInfo(premiumDiscountOffer, items3).discountedPriceString;
  let tmp32 = tmp24;
  if (null != first && stateFromStores && tmp19[1] && !isBoostOnly) {
    let flag4 = false;
    if (null != first) {
      const planIdFromItems = first.planIdFromItems;
      let tmp33 = null != planIdFromItems;
      if (tmp33) {
        tmp33 = tmp8(4450).getPremiumType(planIdFromItems) === premiumType;
        const tmp8Result14 = tmp8(4450);
      }
      flag4 = tmp33;
    }
    tmp32 = flag4;
  }
  const tmp34 = usePremiumPlanPriceDefault(premiumBundleWithPredicate.basePlanId);
  const obj6 = { style: tmp3.containerWrapper, onLayout, children: null };
  const items4 = [closure_19(premiumType(7717).PremiumPill, { style: tmp3.pill, discountOffer: premiumDiscountOffer, isActiveDiscount: null != activeDiscountInfo, shouldShowDiscountUpsell: null != premiumDiscountOffer && null != discountedPriceString, premiumType, trialOffer: premiumTrialOffer }), ];
  const obj8 = { premiumType, style, children: null };
  const obj9 = { style: tmp3.card, children: null };
  const obj10 = { style: tmp3.logoContainer, children: null };
  const obj7 = { style: tmp3.pill, discountOffer: premiumDiscountOffer, isActiveDiscount: null != activeDiscountInfo, shouldShowDiscountUpsell: null != premiumDiscountOffer && null != discountedPriceString, premiumType, trialOffer: premiumTrialOffer };
  const tmp8Result13 = premiumType(9523);
  if (flag3) {
    let tmp37Result = tmp37(tmp4(9525), { width: 185, height: 20, alwaysWhite: true });
  } else {
    const obj11 = { premiumType, style: tmp3.logo };
    tmp37Result = tmp37(tmp4(9526), obj11);
  }
  obj10.children = tmp37Result;
  const items5 = [closure_19(analyticsLocations, obj10), closure_19(PremiumFeaturesWumpusDefault, { premiumType }), , , ];
  if (flag3) {
    flag3 = null == activeDiscountInfo;
  }
  let tmp37Result5 = !flag3;
  if (!flag3) {
    tmp37Result5 = !flag;
  }
  if (tmp37Result5) {
    tmp37Result5 = !flag2;
  }
  if (tmp37Result5) {
    const obj12 = { premiumItem: premiumBundleWithPredicate, discountedPriceString, discountOffer: premiumDiscountOffer, activeDiscountInfo, subscriptionTrial, premiumType, premiumSubscription: first, fractionalPremiumInfo: tmp12 };
    tmp37Result5 = tmp37(closure_24, obj12);
  }
  let tmp37Result6 = premiumType === premiumTrialOfferPremiumType;
  items5[2] = tmp37Result5;
  items5[3] = closure_19(PremiumFeatureListDefault, { style: tmp3.featureList, features: tmp23, iconStyle: tmp3.featureIcon, labelStyle: tmp3.featureLabel, rowStyle: tmp3.featureRow });
  if (hideButton) {
    items5[4] = !hideButton;
    obj9.children = items5;
    const items6 = [tmp35(tmp36, obj9), ];
    if (tmp37Result6) {
      const obj14 = { accessible: true, style: tmp3.trialSubTextContainer, children: null };
      const obj15 = { variant: "text-md/normal", style: tmp3.trialSubText, children: null };
      const intl6 = tmp8(1119).intl;
      const obj16 = { trialPeriod: result, price: null };
      let priceString;
      if (tmp34 != null) {
        priceString = tmp34.priceString;
      }
      if (priceString == null) {
        priceString = closure_12;
      }
      obj16.price = priceString;
      obj15.children = intl6.format(tmp8(1119).t.pC4tcv, obj16);
      obj14.children = tmp37(tmp8(4786).Text, obj15);
      tmp37Result6 = tmp37(tmp36, obj14);
    }
    items6[1] = tmp37Result6;
    obj8.children = items6;
    items4[1] = tmp35(tmp4Result, obj8);
    obj6.children = items4;
    return tmp35(tmp36, obj6);
  } else {
    if (tmp32) {
      const obj17 = { style: tmp3.currentPlanLabel, accessible: true, accessibilityRole: "text", children: null };
      const obj18 = { variant: "text-md/semibold", color: "text-overlay-light", children: null };
      const intl5 = tmp8(1119).intl;
      obj18.children = intl5.string(tmp8(1119).t["j+wlhy"]);
      obj17.children = tmp37(tmp8(4786).Text, obj18);
      let obj19 = obj17;
    } else {
      obj19 = { style: tmp3.button, children: null };
      if (tmp37Result6) {
        const obj20 = { text: stringResult, icon: null, iconPosition: null, variant: null, size: "md", grow: true, shiny: null, disabled: null, onPress: null };
        if (null != premiumDiscountOffer) {
          const obj21 = { style: tmp3.buttonIcon, color: tmp4(580).colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT, size: "sm" };
          const tmp37Result7 = tmp37(tmp8(8970).NitroWheelIcon, obj21);
        }
        obj20.icon = tmp37Result7;
        let str;
        if (tmp31) {
          str = "start";
        }
        obj20.iconPosition = str;
        if (null != premiumDiscountOffer) {
          let str2 = "primary-overlay";
        } else {
          str2 = "experimental_premium-secondary";
        }
        obj20.variant = str2;
        obj20.shiny = !stateFromStores1;
        obj20.disabled = tmp24;
        obj20.onPress = function onPress() {
          return openPremiumPlanSelectionActionSheetDefault({ analyticsLocation, analyticsLocations, premiumType: premiumBundleWithPredicate.premiumTier, applicationId, onPaymentSuccess, onPaymentDismiss });
        };
        obj19.children = tmp37(tmp43, obj20);
      } else if (tmp31) {
        const intl4 = tmp8(1119).intl;
        const obj22 = { percent: premiumDiscountOffer.discount.amount };
        let formatToPlainStringResult = intl4.formatToPlainString(tmp8(1119).t.bkQ4bH, obj22);
      } else if (premiumType === PremiumTypes.TIER_0) {
        const intl3 = tmp8(1119).intl;
        formatToPlainStringResult = intl3.string(tmp8(1119).t.cM8bbx);
      } else {
        const intl2 = tmp8(1119).intl;
        formatToPlainStringResult = intl2.string(tmp8(1119).t["8x0jKT"]);
      }
    }
    tmp37(tmp36, obj19);
  }
});
