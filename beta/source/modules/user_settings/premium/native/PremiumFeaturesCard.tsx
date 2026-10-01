// Module ID: 8664
// Function ID: 8665
// Name: PremiumFeaturesCard
// Dependencies: [32, 19, 17, 4825, 4493, 4494, 1074, 1374, 1085, 21, 4836, 576, 5836, 8665, 4488, 6655, 4832, 1115, 7493, 3199, 1380, 38, 6867, 7504, 7502, 6813, 6866, 8671, 6583, 504, 8673, 1610, 6829, 8682, 6858, 8294, 8684, 8685, 8687, 8694, 5281, 8122, 6842, 2]
// Exports: default

// Module 8664 (PremiumFeaturesCard)
import react_native from "react-native" /* 17 */;
import _modDef38 from "module_38" /* 38 */;
import nativeDefault from "native" /* 576 */;
import Constants2 from "Constants" /* 1085 */;
import intl8 from "intl" /* 1115 */;
import PremiumUtils from "PremiumUtils" /* 4488 */;
import Text_Text from "Text/Text" /* 4832 */;
import PriceUtils from "PriceUtils" /* 6655 */;
import useFractionalPremiumInfoDefault from "useFractionalPremiumInfo" /* 6813 */;
import openPremiumPlanSelectionActionSheetDefault from "openPremiumPlanSelectionActionSheet" /* 6842 */;
import PremiumGroupUtils from "PremiumGroupUtils" /* 7493 */;
import PremiumFeaturesBackgroundDefault from "PremiumFeaturesBackground" /* 8294 */;
import usePremiumPlanPrice from "usePremiumPlanPrice" /* 8665 */;
import usePremiumFeaturesDefault from "usePremiumFeatures" /* 8673 */;
import PremiumFeaturesWumpusDefault from "PremiumFeaturesWumpus" /* 8687 */;
import PremiumFeatureListDefault from "PremiumFeatureList" /* 8694 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import SubscriptionPlanStore from "SubscriptionPlanStore" /* 4493 */;
import SubscriptionStore from "SubscriptionStore" /* 4494 */;
import Constants from "Constants" /* 1074 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import TextStyles_mod from "TextStyles" /* 5836 */;
import size from "module_2" /* 2 */;

const PremiumUtilsDefault = PremiumUtils;
const usePremiumPlanPriceDefault = usePremiumPlanPrice;

let AnalyticsObjectTypes;
let AnalyticsPages;
let AnalyticsSections;
let PremiumTypes;
let c10;
let c9;
let closure_12;
let closure_14;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let map1;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let tmp2;
let unpackModuleId;
const _modDef3199 = tmp2(3199);
const View = react_native.View;
({ AnalyticsPages, AnalyticsSections, AnalyticsObjectTypes } = Constants);
({ ANNUAL_DISCOUNT_PERCENTAGE_FALLBACK: metroImportAll, DISCOUNT_DURATION_FALLBACK: c9, DISCOUNT_PERCENTAGE_FALLBACK: c10, PREMIUM_TIER_2_REFERRAL_INCENTIVE_DISCOUNT_ID: unpackModuleId, PRICE_PLACEHOLDER: closure_12, PremiumSubscriptionSKUs: map1, PremiumSubscriptionSKUToPremiumType: closure_14, PremiumTypes } = PremiumConstants);
({ PremiumTypeToActivePremiumSubscriptionSKU: closure_16, SubscriptionIntervalTypes: closure_17, SubscriptionPlanInfo: closure_18, SubscriptionPlans: closure_19 } = PremiumConstants);
const Fonts = Constants2.Fonts;
({ jsx: closure_20, jsxs: closure_21 } = Fragment);
let items = [, ];
({ TIER_0: arr[0], TIER_2: arr[1] } = PremiumTypes);
const set = new Set(items);
let createStyles = createStyles_mod;
let obj = { containerWrapper: { position: "relative" }, card: obj2, logoContainer: { marginBottom: 8 }, logo: { marginRight: 4 }, priceContainer: { display: "flex", flexWrap: "wrap", flexDirection: "row", maxWidth: "50%" }, discountPriceText: { maxWidth: "62%", includeFontPadding: true }, featureList: { marginTop: 8 }, featureLabel: obj3, featureRow: { paddingVertical: 7 }, featureIcon: { height: 16, width: 16 }, button: { marginTop: 16 }, currentPlanLabel: { marginTop: 16, paddingVertical: 12, alignItems: "center", justifyContent: "center" }, trialSubTextContainer: { paddingHorizontal: 24, marginTop: -12, paddingBottom: 16, alignItems: "center", bottom: 0 }, trialSubText: obj4, pill: { position: "absolute", top: -10, maxWidth: 240, alignSelf: "center", zIndex: 2 }, buttonIcon: { marginRight: 4, alignSelf: "center", marginTop: 1 } };
obj2 = { display: "flex", justifyContent: "flex-start", width: "100%", padding: 24, backgroundColor: "transparent", overflow: "hidden", borderRadius: nativeDefault.radii.lg };
createStyles = createStyles.createStyles;
obj3 = { marginLeft: -8 };
let TextStyles = TextStyles_mod;
const merged = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.unsafe_rawColors.WHITE, 14));
obj4 = { textAlign: "center" };
TextStyles = TextStyles_mod;
const merged1 = Object.assign(TextStyles(Fonts.DISPLAY_MEDIUM, nativeDefault.unsafe_rawColors.WHITE, 12));
let closure_23 = createStyles(obj);
let closure_24 = { page: AnalyticsPages.USER_SETTINGS, section: AnalyticsSections.SETTINGS_PREMIUM, objectType: AnalyticsObjectTypes.BUY };
function PriceText(fractionalPremiumInfo) {
  let activeDiscountInfo;
  let date;
  let discountOffer;
  let discountedPriceString;
  let duration;
  let format;
  let format6;
  let intervalCount;
  let intl5;
  let items;
  let num4;
  let obj11;
  let obj3;
  let premiumItem;
  let premiumSubscription;
  let premiumType;
  let priceString2;
  let prop1;
  let sJTwHQ;
  let subscriptionTrial;
  let tmp7Result5;
  let tmp7Result7;
  ({ premiumItem, discountedPriceString, discountOffer, activeDiscountInfo, subscriptionTrial, premiumType, premiumSubscription } = fractionalPremiumInfo);
  fractionalPremiumInfo = fractionalPremiumInfo.fractionalPremiumInfo;
  const tmp = closure_23();
  const tmp4 = usePremiumPlanPriceDefault(premiumItem.basePlanId);
  const obj = PremiumUtilsDefault;
  const intervalStringAsNoun = obj.getIntervalStringAsNoun(premiumItem.interval);
  let priceString;
  const formatRate = PriceUtils.formatRate;
  PriceUtils;
  if (tmp4 != null) {
    priceString = tmp4.priceString;
  }
  if (priceString == null) {
    priceString = closure_12;
  }
  const formatRateResult = formatRate(priceString, authStore4[premiumItem.basePlanId].interval, authStore4[premiumItem.basePlanId].intervalCount);
  if (null != discountedPriceString) {
    if (null != discountOffer) {
      const obj2 = { variant: "text-md/normal", color: "text-overlay-light", style: tmp.discountPriceText, children: format6(sJTwHQ, obj3) };
      const Text4 = tmp7(4832).Text;
      const intl7 = tmp7(1115).intl;
      format6 = intl7.format;
      const discount = discountOffer.discount;
      obj3 = { discountedPrice: discountedPriceString, numMonths: num4, regularPrice: formatRateResult };
      num4 = undefined;
      sJTwHQ = tmp7(1115).t.sJTwHQ;
      const tmp38 = closure_20;
      if (discount != null) {
        num4 = discount.intervalCount;
      }
      if (num4 == null) {
        num4 = 1;
      }
      return tmp38(Text4, obj2);
    }
  }
  if (null != activeDiscountInfo) {
    if (null != premiumSubscription) {
      let format2Result;
      if (premiumSubscription.planIdFromItems === PREMIUM_YEAR_TIER_2.PREMIUM_YEAR_TIER_2) {
        let flag = false;
        if (null != premiumSubscription) {
          const planIdFromItems = premiumSubscription.planIdFromItems;
          let tmp24 = null != planIdFromItems;
          if (tmp24) {
            const tmp7Result = PremiumUtils;
            tmp24 = tmp7Result.getPremiumType(planIdFromItems) === premiumType;
          }
          flag = tmp24;
        }
        if (flag) {
          let hasActiveTrial;
          if (premiumSubscription != null) {
            hasActiveTrial = premiumSubscription.hasActiveTrial;
          }
          if (!hasActiveTrial) {
            const intl2 = tmp7(1115).intl;
            const format2 = intl2.format;
            let percentage = activeDiscountInfo.percentage;
            const z2oQtA = tmp7(1115).t.z2oQtA;
            if (percentage == null) {
              percentage = metroImportAll;
            }
            const obj4 = { percent: percentage, regularPrice: formatRateResult, renewalDate: tmp7Result5.getExpectedRenewalDate(premiumSubscription, fractionalPremiumInfo) };
            tmp7Result5 = PremiumUtils;
            format2Result = format2(z2oQtA, obj4);
          }
          const obj5 = { variant: "text-md/normal", color: "text-overlay-light", style: tmp.discountPriceText, children: format2Result };
          return closure_20(Text_Text.Text, obj5);
        }
      }
      if (premiumSubscription.hasAnyPremiumGroup) {
        const metadata = premiumSubscription.metadata;
        let prop;
        if (metadata != null) {
          prop = metadata.active_discount_expires_at;
        }
        if (null != prop) {
          const tmp7Result6 = PremiumGroupUtils;
          let priceString1 = tmp7Result6.getPriceString(premiumSubscription);
          const intl6 = tmp7(1115).intl;
          const format5 = intl6.format;
          let num3 = activeDiscountInfo.percentage;
          const FwjZzr = _modDef3199.FwjZzr;
          if (num3 == null) {
            num3 = 0;
          }
          const _Date = Date;
          const self = this;
          const self2 = this;
          const obj6 = { percent: num3, discountEndDate: date, regularPrice: priceString1 };
          date = new Date(premiumSubscription.metadata.active_discount_expires_at);
          if (priceString1 == null) {
            priceString1 = closure_12;
          }
          format2Result = format5(FwjZzr, obj6);
        }
      }
      if (activeDiscountInfo.discountId === unpackModuleId) {
        let source;
        if (tmp4 != null) {
          source = tmp4.source;
        }
        if (source === usePremiumPlanPrice.PremiumPlanPriceSource.API) {
          let percentage3 = activeDiscountInfo.percentage;
          if (percentage3 == null) {
            percentage3 = authStore;
          }
          const _Math = Math;
          const rounded = Math.round(tmp4.price * (1 - percentage3 / 100));
          const intl4 = tmp7(1115).intl;
          const format4 = intl4.format;
          let duration2 = activeDiscountInfo.duration;
          const N43FMx = tmp7(1115).t.N43FMx;
          if (duration2 == null) {
            duration2 = React4;
          }
          const obj7 = { numMonths: duration2, discountedPrice: tmp7Result7.formatPrice(rounded, tmp4.currency), billingPeriod: intl5.string(intl8.t.FPybU7), fullPrice: tmp4.priceString };
          tmp7Result7 = PriceUtils;
          intl5 = tmp7(1115).intl;
          format2Result = format4(N43FMx, obj7);
        }
      }
      const intl3 = tmp7(1115).intl;
      const format3 = intl3.format;
      let percentage2 = activeDiscountInfo.percentage;
      const v3ZiutU = tmp7(1115).t["3ZiutU"];
      if (percentage2 == null) {
        percentage2 = authStore;
      }
      const obj8 = { percent: percentage2, numMonths: duration, regularPrice: formatRateResult };
      duration = activeDiscountInfo.duration;
      if (duration == null) {
        duration = React4;
      }
      format2Result = format3(v3ZiutU, obj8);
    }
  }
  if (null != subscriptionTrial) {
    let tmp12Result;
    if (premiumType === authStore2[subscriptionTrial.skuId]) {
      const obj9 = { variant: "text-md/normal", color: "text-overlay-light", style: tmp.discountPriceText, children: format(prop1, obj11) };
      const Text3 = tmp7(4832).Text;
      const intl = tmp7(1115).intl;
      format = intl.format;
      prop1 = tmp7(1115).t["xOX9/9"];
      let interval;
      const formatIntervalDuration = PremiumUtils.formatIntervalDuration;
      PremiumUtils;
      const tmp17 = closure_20;
      if (subscriptionTrial != null) {
        interval = subscriptionTrial.interval;
      }
      const obj10 = { intervalType: interval, intervalCount };
      intervalCount = undefined;
      if (subscriptionTrial != null) {
        intervalCount = subscriptionTrial.intervalCount;
      }
      obj11 = { trialPeriod: formatIntervalDuration(obj10), price: priceString2 };
      priceString2 = undefined;
      if (tmp4 != null) {
        priceString2 = tmp4.priceString;
      }
      if (priceString2 == null) {
        priceString2 = closure_12;
      }
      tmp12Result = tmp17(Text3, obj9);
    }
    return tmp12Result;
  }
  let priceString3;
  const obj12 = { accessible: true, style: tmp.priceContainer, children: items };
  const Text = tmp7(4832).Text;
  const tmp12 = closure_21;
  const tmp13 = View;
  if (tmp4 != null) {
    priceString3 = tmp4.priceString;
  }
  if (priceString3 == null) {
    priceString3 = closure_12;
  }
  items = [closure_20(Text, { variant: "text-md/bold", color: "text-overlay-light", children: priceString3 }), ];
  const obj13 = { variant: "text-md/normal", color: "text-overlay-light", children: " / " + intervalStringAsNoun };
  const Text2 = tmp7(4832).Text;
  items[1] = closure_20(Text2, obj13);
  tmp12Result = tmp12(tmp13, obj12);
}
let result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesCard.tsx");

export default function PremiumFeaturesCard(premiumType) {
  let Button;
  let Text;
  let Text2;
  let analyticsLocation;
  let applicationId;
  let first;
  let format;
  let hideButton;
  let intervalCount;
  let intl5;
  let items4;
  let items5;
  let items6;
  let obj15;
  let obj18;
  let obj21;
  let obj22;
  let onLayout;
  let onPaymentDismiss;
  let onPaymentSuccess;
  let pC4tcv;
  let priceString;
  let str;
  let str2;
  let style;
  let tmp27;
  let tmp44Result;
  let tmp44Result6;
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
    let tmp = premiumType;
    UNSPECIFIED = premiumType(1380).PremiumSubscriptionGroupRole.UNSPECIFIED;
  }
  let analyticsLocations;
  let useReducedMotion;
  let interval1;
  let premiumBundleWithPredicate;
  const tmp3 = closure_23();
  const tmp6 = _modDef38;
  tmp6(set.has(premiumType), "only Tier 0 and Tier 2 are supported");
  let obj = premiumType(6867);
  const premiumTrialOffer = obj.usePremiumTrialOffer();
  const obj2 = premiumType(7504);
  const premiumDiscountOffer = obj2.usePremiumDiscountOffer();
  const obj3 = premiumType(7502);
  const activeDiscountInfo = obj3.useActiveDiscountInfo();
  let subscriptionTrial;
  const tmp12 = useFractionalPremiumInfoDefault();
  const obj4 = premiumType(6866);
  const premiumTrialOfferPremiumType = obj4.usePremiumTrialOfferPremiumType();
  if (premiumTrialOffer != null) {
    subscriptionTrial = premiumTrialOffer.subscriptionTrial;
  }
  let interval;
  const formatIntervalDuration = premiumType(4488).formatIntervalDuration;
  premiumType(4488);
  if (subscriptionTrial != null) {
    interval = subscriptionTrial.interval;
  }
  const obj5 = { intervalType: interval, intervalCount };
  intervalCount = undefined;
  if (subscriptionTrial != null) {
    intervalCount = subscriptionTrial.intervalCount;
  }
  let tmp44Result8 = premiumType === premiumTrialOfferPremiumType;
  let trialCtaOverride = null;
  const result = formatIntervalDuration(obj5);
  if (tmp44Result8) {
    let TIER_2;
    const getTrialCtaOverride = premiumType(8671).getTrialCtaOverride;
    premiumType(8671);
    if (premiumType === PremiumTypes.TIER_0) {
      TIER_2 = closure_13.TIER_0;
    } else {
      TIER_2 = closure_13.TIER_2;
    }
    trialCtaOverride = getTrialCtaOverride(premiumTrialOffer, TIER_2);
  }
  if (trialCtaOverride == null) {
    const intl = tmp8(1115).intl;
    trialCtaOverride = intl.string(tmp8(1115).t.J61px0);
  }
  analyticsLocations = tmp4(6583)().analyticsLocations;
  let items = [premiumBundleWithPredicate];
  const tmp8Result10 = premiumType(504);
  [first, tmp27] = tmp8Result10.useStateFromStoresArray(items, () => {
    const items = [premiumBundleWithPredicate.getPremiumTypeSubscription(), premiumBundleWithPredicate.hasFetchedSubscriptions()];
    return items;
  });
  useReducedMotion = closure_16[premiumType];
  const items1 = [interval1];
  const tmp8Result11 = premiumType(504);
  const stateFromStores = tmp8Result11.useStateFromStores(items1, () => {
    const items = [useReducedMotion];
    return SubscriptionPlanStore.isLoadedForSKUs(items);
  });
  const items2 = [useReducedMotion];
  const tmp8Result12 = premiumType(504);
  const stateFromStores1 = tmp8Result12.useStateFromStores(items2, () => useReducedMotion.useReducedMotion);
  let isBoostOnly = null != first;
  const tmp30 = usePremiumFeaturesDefault(premiumType, flag, UNSPECIFIED);
  if (isBoostOnly) {
    isBoostOnly = first.isBoostOnly;
  }
  if (isBoostOnly) {
    const tmp8Result13 = premiumType(1610);
    isBoostOnly = tmp8Result13.isMetaQuest();
  }
  let tmp32 = null;
  if (null != first) {
    tmp32 = null;
    if (undefined !== first.planIdFromItems) {
      tmp32 = closure_18[first.planIdFromItems];
    }
  }
  interval1 = undefined;
  if (tmp32 != null) {
    interval1 = tmp32.interval;
  }
  if (interval1 == null) {
    interval1 = constants.MONTH;
  }
  const tmp8Result14 = premiumType(6829);
  premiumBundleWithPredicate = tmp8Result14.getPremiumBundleWithPredicate((additionalPlans) => {
    let interval;
    let numPremiumGuild;
    let premiumTier;
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
  const items3 = [premiumBundleWithPredicate];
  const tmp8Result15 = premiumType(8682);
  const discountedPriceString = tmp8Result15.useDiscountedPremiumProductInfo(premiumDiscountOffer, items3).discountedPriceString;
  let tmp39 = tmp31;
  if (tmp39) {
    let flag4 = false;
    if (null != first) {
      const planIdFromItems = first.planIdFromItems;
      let tmp40 = null != planIdFromItems;
      if (tmp40) {
        const tmp8Result16 = premiumType(4488);
        tmp40 = tmp8Result16.getPremiumType(planIdFromItems) === premiumType;
      }
      flag4 = tmp40;
    }
    tmp39 = flag4;
  }
  const tmp41 = usePremiumPlanPriceDefault(premiumBundleWithPredicate.basePlanId);
  const obj6 = { style: tmp3.containerWrapper, onLayout, children: items4 };
  items4 = [, ];
  const obj7 = { style: tmp3.pill, discountOffer: premiumDiscountOffer, isActiveDiscount: null != activeDiscountInfo, shouldShowDiscountUpsell: null != premiumDiscountOffer && null != discountedPriceString, premiumType, trialOffer: premiumTrialOffer };
  items4[0] = closure_20(premiumType(6858).PremiumPill, obj7);
  const obj10 = { style: tmp3.logoContainer, children: tmp44Result };
  const obj8 = { premiumType, style, children: items6 };
  const obj9 = { style: tmp3.card, children: items5 };
  const tmp4Result = PremiumFeaturesBackgroundDefault;
  if (flag3) {
    tmp44Result = tmp44(tmp4(8684), { width: 185, height: 20, alwaysWhite: true });
  } else {
    const obj11 = { premiumType, style: tmp3.logo };
    tmp44Result = tmp44(tmp4(8685), obj11);
  }
  items5 = [closure_20(analyticsLocations, obj10), closure_20(PremiumFeaturesWumpusDefault, { premiumType }), , , ];
  if (flag3) {
    flag3 = null == activeDiscountInfo;
  }
  let tmp44Result5 = !flag3 && !flag && !flag2;
  if (tmp44Result5) {
    const obj12 = { premiumItem: premiumBundleWithPredicate, discountedPriceString, discountOffer: premiumDiscountOffer, activeDiscountInfo, subscriptionTrial, premiumType, premiumSubscription: first, fractionalPremiumInfo: tmp12 };
    tmp44Result5 = tmp44(PriceText, obj12);
  }
  items5[2] = tmp44Result5;
  const obj13 = { style: tmp3.featureList, features: tmp30, iconStyle: tmp3.featureIcon, labelStyle: tmp3.featureLabel, rowStyle: tmp3.featureRow };
  items5[3] = closure_20(PremiumFeatureListDefault, obj13);
  let tmp44Result7 = !hideButton;
  if (tmp44Result7) {
    let obj16;
    if (tmp39) {
      const obj14 = { style: tmp3.currentPlanLabel, accessible: true, accessibilityRole: "text", children: closure_20(Text, obj15) };
      obj15 = { variant: "text-md/semibold", color: "text-overlay-light", children: intl5.string(premiumType(1115).t["j+wlhy"]) };
      Text = tmp8(4832).Text;
      intl5 = tmp8(1115).intl;
      obj16 = obj14;
    } else {
      obj16 = { style: tmp3.button, children: closure_20(Button, obj18) };
      Button = tmp8(5281).Button;
      if (!tmp44Result8) {
        let formatToPlainStringResult;
        if (null != premiumDiscountOffer && null != discountedPriceString) {
          const intl4 = tmp8(1115).intl;
          const obj17 = { percent: premiumDiscountOffer.discount.amount };
          formatToPlainStringResult = intl4.formatToPlainString(tmp8(1115).t.bkQ4bH, obj17);
        } else if (premiumType === PremiumTypes.TIER_0) {
          const intl3 = tmp8(1115).intl;
          formatToPlainStringResult = intl3.string(tmp8(1115).t.cM8bbx);
        } else {
          const intl2 = tmp8(1115).intl;
          formatToPlainStringResult = intl2.string(tmp8(1115).t["8x0jKT"]);
        }
        trialCtaOverride = formatToPlainStringResult;
      }
      obj18 = {
        text: trialCtaOverride,
        icon: tmp44Result6,
        iconPosition: str,
        variant: str2,
        size: "md",
        grow: true,
        shiny: !stateFromStores1,
        disabled: null != first && stateFromStores && tmp27 && !isBoostOnly,
        onPress() {
              const obj = { analyticsLocation, analyticsLocations, premiumType: premiumBundleWithPredicate.premiumTier, applicationId: importDefault, onPaymentSuccess: dependencyMap, onPaymentDismiss: _slicedToArray };
              return openPremiumPlanSelectionActionSheetDefault(obj);
            }
      };
      if (null != premiumDiscountOffer) {
        const obj19 = { style: tmp3.buttonIcon, color: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT, size: "sm" };
        const NitroWheelIcon = tmp8(8122).NitroWheelIcon;
        tmp44Result6 = closure_20(NitroWheelIcon, obj19);
      }
      str = undefined;
      if (null != premiumDiscountOffer && null != discountedPriceString) {
        str = "start";
      }
      if (null != premiumDiscountOffer) {
        str2 = "primary-overlay";
      } else {
        str2 = "experimental_premium-secondary";
      }
    }
    tmp44Result7 = tmp44(tmp43, obj16);
  }
  items5[4] = tmp44Result7;
  items6 = [closure_21(analyticsLocations, obj9), ];
  if (tmp44Result8) {
    const obj20 = { accessible: true, style: tmp3.trialSubTextContainer, children: closure_20(Text2, obj21) };
    obj21 = { variant: "text-md/normal", style: tmp3.trialSubText, children: format(pC4tcv, obj22) };
    Text2 = tmp8(4832).Text;
    const intl6 = tmp8(1115).intl;
    format = intl6.format;
    obj22 = { trialPeriod: result, price: priceString };
    priceString = undefined;
    pC4tcv = tmp8(1115).t.pC4tcv;
    if (tmp41 != null) {
      priceString = tmp41.priceString;
    }
    if (priceString == null) {
      priceString = closure_12;
    }
    tmp44Result8 = tmp44(tmp43, obj20);
  }
  items6[1] = tmp44Result8;
  items4[1] = closure_21(tmp4Result, obj8);
  return closure_21(analyticsLocations, obj6);
};
