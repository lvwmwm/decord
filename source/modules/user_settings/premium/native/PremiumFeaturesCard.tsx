// Module ID: 8000
// Function ID: 63584
// Name: isSamePremiumType
// Dependencies: [57, 31, 27, 4122, 3781, 3782, 653, 1851, 482, 33, 4130, 689, 5052, 8001, 3776, 5618, 4126, 1212, 7736, 2780, 1867, 44, 6686, 7127, 7425, 6636, 6685, 5464, 566, 8004, 1553, 6648, 7185, 6677, 7870, 8017, 8130, 8132, 8138, 4543, 7871, 6661, 2]
// Exports: default

// Module 8000 (isSamePremiumType)
import _slicedToArray from "_slicedToArray";
import "_createForOfIteratorHelperLoose";
import { View } from "mergeLocations";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import ME from "ME";
import GuildFeatures from "GuildFeatures";
import { Fonts } from "sum";
import jsxProd from "PremiumPill";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "createTextStyle";
import set from "get ActivityIndicator";

let AnalyticsObjectTypes;
let AnalyticsPages;
let AnalyticsSections;
let PremiumTypes;
let closure_10;
let closure_11;
let closure_13;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_8;
let closure_9;
const require = arg1;
function isSamePremiumType(first, premiumType) {
  if (null == first) {
    return false;
  } else {
    const planIdFromItems = first.planIdFromItems;
    let tmp = null != planIdFromItems;
    if (tmp) {
      tmp = require(3776) /* _createForOfIteratorHelperLoose */.getPremiumType(planIdFromItems) === premiumType;
      const obj = require(3776) /* _createForOfIteratorHelperLoose */;
    }
    return tmp;
  }
}
({ AnalyticsPages, AnalyticsSections, AnalyticsObjectTypes } = ME);
({ ANNUAL_DISCOUNT_PERCENTAGE_FALLBACK: closure_8, DISCOUNT_DURATION_FALLBACK: closure_9, DISCOUNT_PERCENTAGE_FALLBACK: closure_10, PremiumSubscriptionSKUToPremiumType: closure_11, PremiumTypes } = GuildFeatures);
({ PremiumTypeToActivePremiumSubscriptionSKU: closure_13, SubscriptionIntervalTypes: closure_14, SubscriptionPlanInfo: closure_15, SubscriptionPlans: closure_16 } = GuildFeatures);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
let items = [, ];
({ TIER_0: arr[0], TIER_2: arr[1] } = PremiumTypes);
let set = new Set(items);
_createForOfIteratorHelperLoose = { containerWrapper: { position: "relative" } };
_createForOfIteratorHelperLoose = { display: "flex", justifyContent: "flex-start", width: "100%", padding: 24, backgroundColor: "transparent", overflow: "hidden", borderRadius: require("_createForOfIteratorHelperLoose").radii.lg };
_createForOfIteratorHelperLoose.card = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.logoContainer = { marginBottom: 8 };
_createForOfIteratorHelperLoose.logo = { marginRight: 4 };
_createForOfIteratorHelperLoose.priceContainer = { display: "flex", flexWrap: "wrap", flexDirection: "row", maxWidth: "50%" };
_createForOfIteratorHelperLoose.discountPriceText = { maxWidth: "62%", includeFontPadding: true };
_createForOfIteratorHelperLoose.featureList = { marginTop: 8 };
let obj1 = {};
const merged = Object.assign(require("createTextStyle")(Fonts.PRIMARY_MEDIUM, require("_createForOfIteratorHelperLoose").unsafe_rawColors.WHITE, 14));
obj1["marginLeft"] = -8;
_createForOfIteratorHelperLoose.featureLabel = obj1;
_createForOfIteratorHelperLoose.featureRow = { paddingVertical: 7 };
_createForOfIteratorHelperLoose.featureIcon = { height: 16, width: 16 };
_createForOfIteratorHelperLoose.button = { marginTop: 16 };
_createForOfIteratorHelperLoose.currentPlanLabel = { marginTop: 16, paddingVertical: 12, alignItems: "center", justifyContent: "center" };
_createForOfIteratorHelperLoose.trialSubTextContainer = { paddingHorizontal: 24, marginTop: -12, paddingBottom: 16, alignItems: "center", bottom: 0 };
let obj2 = {};
const merged1 = Object.assign(require("createTextStyle")(Fonts.DISPLAY_MEDIUM, require("_createForOfIteratorHelperLoose").unsafe_rawColors.WHITE, 12));
obj2["textAlign"] = "center";
_createForOfIteratorHelperLoose.trialSubText = obj2;
_createForOfIteratorHelperLoose.pill = { position: "absolute", top: -10, maxWidth: 240, alignSelf: "center", zIndex: 2 };
_createForOfIteratorHelperLoose.buttonIcon = { marginRight: 4, alignSelf: "center", marginTop: 1 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_21 = { page: AnalyticsPages.USER_SETTINGS, section: AnalyticsSections.SETTINGS_PREMIUM, objectType: AnalyticsObjectTypes.BUY };
function PriceText(fractionalPremiumInfo) {
  let activeDiscountInfo;
  let discountOffer;
  let discountedPriceString;
  let premiumItem;
  let premiumSubscription;
  let premiumType;
  let subscriptionTrial;
  ({ premiumItem, discountedPriceString, discountOffer, activeDiscountInfo, subscriptionTrial, premiumType, premiumSubscription } = fractionalPremiumInfo);
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = importDefault(8001)(premiumItem.basePlanId);
  let obj = importDefault(3776);
  const intervalStringAsNoun = obj.getIntervalStringAsNoun(premiumItem.interval);
  let obj1 = require(5618) /* formatSingleCurrencyPrice */;
  let priceString;
  if (null != tmp2) {
    priceString = tmp2.priceString;
  }
  let str = "$...";
  let str2 = "$...";
  if (null != priceString) {
    str2 = priceString;
  }
  const formatRateResult = obj1.formatRate(str2, dependencyMap[premiumItem.basePlanId].interval, dependencyMap[premiumItem.basePlanId].intervalCount);
  if (null != discountedPriceString) {
    if (null != discountOffer) {
      obj = { variant: "text-md/normal", color: "text-overlay-light", style: tmp.discountPriceText };
      const intl5 = require(1212) /* getSystemLocale */.intl;
      obj = { discountedPrice: discountedPriceString };
      const discount = discountOffer.discount;
      let userUsageLimit;
      if (null != discount) {
        userUsageLimit = discount.userUsageLimit;
      }
      let num12 = 1;
      if (null != userUsageLimit) {
        num12 = userUsageLimit;
      }
      obj.numMonths = num12;
      obj.regularPrice = formatRateResult;
      obj.children = intl5.format(require(1212) /* getSystemLocale */.t.sJTwHQ, obj);
      return callback2(require(4126) /* Text */.Text, obj);
    }
  }
  if (null != activeDiscountInfo) {
    if (null != premiumSubscription) {
      if (premiumSubscription.planIdFromItems === PREMIUM_YEAR_TIER_2.PREMIUM_YEAR_TIER_2) {
        if (isSamePremiumType(premiumSubscription, premiumType)) {
          if (null != premiumSubscription) {
            obj1 = { variant: "text-md/normal", color: "text-overlay-light", style: tmp.discountPriceText, children: formatResult };
            return callback2(require(4126) /* Text */.Text, obj1);
          }
          const intl2 = require(1212) /* getSystemLocale */.intl;
          const obj2 = {};
          let percentage = activeDiscountInfo.percentage;
          if (null == percentage) {
            percentage = closure_8;
          }
          obj2.percent = percentage;
          obj2.regularPrice = formatRateResult;
          let obj10 = require(3776) /* _createForOfIteratorHelperLoose */;
          obj2.renewalDate = obj10.getExpectedRenewalDate(premiumSubscription, fractionalPremiumInfo.fractionalPremiumInfo);
          formatResult = intl2.format(require(1212) /* getSystemLocale */.t.z2oQtA, obj2);
        }
      }
      if (premiumSubscription.hasAnyPremiumGroup) {
        const metadata = premiumSubscription.metadata;
        let prop;
        if (null != metadata) {
          prop = metadata.active_discount_expires_at;
        }
        if (null != prop) {
          const priceString1 = require(7736) /* getPremiumGroupInviteEmbedText */.getPriceString(premiumSubscription);
          const intl4 = require(1212) /* getSystemLocale */.intl;
          const obj3 = {};
          const percentage3 = activeDiscountInfo.percentage;
          let num8 = 0;
          if (null != percentage3) {
            num8 = percentage3;
          }
          obj3.percent = num8;
          const _Date = Date;
          const date = new Date(premiumSubscription.metadata.active_discount_expires_at);
          obj3.discountEndDate = date;
          if (null != priceString1) {
            str = priceString1;
          }
          obj3.regularPrice = str;
          formatResult = intl4.format(importDefault(2780).FwjZzr, obj3);
          const obj13 = require(7736) /* getPremiumGroupInviteEmbedText */;
        }
      }
      const intl3 = require(1212) /* getSystemLocale */.intl;
      const obj4 = {};
      let percentage2 = activeDiscountInfo.percentage;
      if (null == percentage2) {
        percentage2 = closure_10;
      }
      obj4.percent = percentage2;
      let duration = activeDiscountInfo.duration;
      if (null == duration) {
        duration = closure_9;
      }
      obj4.numMonths = duration;
      obj4.regularPrice = formatRateResult;
      formatResult = intl3.format(require(1212) /* getSystemLocale */.t["3ZiutU"], obj4);
    }
  }
  if (null != subscriptionTrial) {
    if (premiumType === table[subscriptionTrial.sku_id]) {
      const obj5 = { variant: "text-md/normal", color: "text-overlay-light", style: tmp.discountPriceText };
      const intl = require(1212) /* getSystemLocale */.intl;
      const obj6 = {};
      let obj7 = require(3776) /* _createForOfIteratorHelperLoose */;
      obj7 = {};
      let interval;
      if (null != subscriptionTrial) {
        interval = subscriptionTrial.interval;
      }
      obj7.intervalType = interval;
      let interval_count;
      if (null != subscriptionTrial) {
        interval_count = subscriptionTrial.interval_count;
      }
      obj7.intervalCount = interval_count;
      obj6.trialPeriod = obj7.formatIntervalDuration(obj7);
      let priceString2;
      if (null != tmp2) {
        priceString2 = tmp2.priceString;
      }
      let tmp20 = str;
      if (null != priceString2) {
        tmp20 = priceString2;
      }
      obj6.price = tmp20;
      obj5.children = intl.format(require(1212) /* getSystemLocale */.t["xOX9/9"], obj6);
      let tmp8Result = callback2(require(4126) /* Text */.Text, obj5);
      const tmp14 = callback2;
    }
    return tmp8Result;
  }
  const obj8 = { accessible: true, style: tmp.priceContainer };
  const obj9 = { variant: "text-md/bold", color: "text-overlay-light" };
  let priceString3;
  if (null != tmp2) {
    priceString3 = tmp2.priceString;
  }
  let tmp12 = str;
  if (null != priceString3) {
    tmp12 = priceString3;
  }
  obj9.children = tmp12;
  const items = [callback2(require(4126) /* Text */.Text, obj9), ];
  obj10 = { variant: "text-md/normal", color: "text-overlay-light", children: " / " + intervalStringAsNoun };
  items[1] = callback2(require(4126) /* Text */.Text, obj10);
  obj8.children = items;
  tmp8Result = closure_18(View, obj8);
}
let result = set.fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesCard.tsx");

export default function PremiumFeaturesCard(premiumType) {
  let _slicedToArray;
  let dependencyMap;
  let hideButton;
  let importDefault;
  let onLayout;
  let style;
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
    UNSPECIFIED = premiumType(1867).PremiumSubscriptionGroupRole.UNSPECIFIED;
  }
  let analyticsLocations;
  let _isNativeReflectConstruct;
  let interval1;
  let premiumBundleWithPredicate;
  const tmp3 = _createForOfIteratorHelperLoose();
  importDefault(44)(set.has(premiumType), "only Tier 0 and Tier 2 are supported");
  let obj = premiumType(6686);
  const premiumTrialOffer = obj.usePremiumTrialOffer();
  let obj1 = premiumType(7127);
  const premiumDiscountOffer = obj1.usePremiumDiscountOffer();
  let obj2 = premiumType(7425);
  const activeDiscountInfo = obj2.useActiveDiscountInfo();
  const tmp4 = importDefault(44);
  let obj3 = premiumType(6685);
  let subscription_trial;
  const premiumTrialOfferPremiumType = obj3.usePremiumTrialOfferPremiumType();
  if (null != premiumTrialOffer) {
    subscription_trial = premiumTrialOffer.subscription_trial;
  }
  let obj4 = premiumType(3776);
  obj = {};
  let interval;
  if (null != subscription_trial) {
    interval = subscription_trial.interval;
  }
  obj.intervalType = interval;
  let interval_count;
  if (null != subscription_trial) {
    interval_count = subscription_trial.interval_count;
  }
  obj.intervalCount = interval_count;
  const result = obj4.formatIntervalDuration(obj);
  const intl = premiumType(1212).intl;
  let tmp71Result = premiumType === premiumTrialOfferPremiumType;
  const tmp9 = importDefault(6636)();
  analyticsLocations = importDefault(5464)().analyticsLocations;
  let obj6 = premiumType(566);
  let items = [premiumBundleWithPredicate];
  const tmp17 = callback(obj6.useStateFromStoresArray(items, () => {
    const items = [premiumBundleWithPredicate.getPremiumTypeSubscription(), premiumBundleWithPredicate.hasFetchedSubscriptions()];
    return items;
  }), 2);
  const first = tmp17[0];
  _isNativeReflectConstruct = table2[premiumType];
  let obj7 = premiumType(566);
  const items1 = [interval1];
  const stateFromStores = obj7.useStateFromStores(items1, () => {
    const items = [_isNativeReflectConstruct];
    return interval1.isLoadedForSKUs(items);
  });
  let obj8 = premiumType(566);
  const items2 = [_isNativeReflectConstruct];
  const stateFromStores1 = obj8.useStateFromStores(items2, () => useReducedMotion.useReducedMotion);
  let isBoostOnly = null != first;
  const stringResult = intl.string(premiumType(1212).t.J61px0);
  if (isBoostOnly) {
    isBoostOnly = first.isBoostOnly;
  }
  if (isBoostOnly) {
    let obj9 = premiumType(1553);
    isBoostOnly = obj9.isMetaQuest();
  }
  let tmp25 = null;
  if (null != first) {
    tmp25 = null;
    if (undefined !== first.planIdFromItems) {
      tmp25 = dependencyMap[first.planIdFromItems];
    }
  }
  interval1 = undefined;
  if (null != tmp25) {
    interval1 = tmp25.interval;
  }
  if (null == interval1) {
    interval1 = constants.MONTH;
  }
  let obj10 = premiumType(6648);
  premiumBundleWithPredicate = obj10.getPremiumBundleWithPredicate((additionalPlans) => {
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
  importDefault(44)(null != premiumBundleWithPredicate, "could not find a premium item");
  let obj11 = premiumType(7185);
  const items3 = [premiumBundleWithPredicate];
  const discountedPriceString = obj11.useDiscountedPremiumProductInfo(premiumDiscountOffer, items3).discountedPriceString;
  let tmp32 = tmp24;
  if (null != first && stateFromStores && tmp17[1] && !isBoostOnly) {
    tmp32 = isSamePremiumType(first, premiumType);
  }
  const tmp34 = importDefault(8001)(premiumBundleWithPredicate.basePlanId);
  obj = { style: tmp3.containerWrapper, onLayout };
  obj1 = { style: tmp3.pill, discountOffer: premiumDiscountOffer, isActiveDiscount: null != activeDiscountInfo, shouldShowDiscountUpsell: tmp31, premiumType, trialOffer: premiumTrialOffer };
  const items4 = [callback2(premiumType(6677).PremiumPill, obj1), ];
  obj2 = { premiumType, style };
  obj3 = { style: tmp3.card };
  obj4 = { style: tmp3.logoContainer };
  const tmp21 = importDefault(8004)(premiumType, flag, UNSPECIFIED);
  const tmp37 = callback2;
  if (flag3) {
    let tmp39Result = tmp39(tmp40(8017), { width: 185, height: 20, alwaysWhite: true });
  } else {
    const obj5 = { premiumType, style: tmp3.logo };
    tmp39Result = tmp39(tmp40(8130), obj5);
  }
  obj4.children = tmp39Result;
  const items5 = [tmp37(analyticsLocations, obj4), callback2(importDefault(8132), { premiumType }), , , ];
  if (flag3) {
    flag3 = null == activeDiscountInfo;
  }
  let tmp43 = !flag3 && !flag && !flag2;
  if (tmp43) {
    obj6 = { premiumItem: premiumBundleWithPredicate, discountedPriceString, discountOffer: premiumDiscountOffer, activeDiscountInfo, subscriptionTrial: subscription_trial, premiumType, premiumSubscription: first, fractionalPremiumInfo: tmp9 };
    tmp43 = callback2(PriceText, obj6);
  }
  items5[2] = tmp43;
  obj7 = { style: tmp3.featureList, features: tmp21, iconStyle: tmp3.featureIcon, labelStyle: tmp3.featureLabel, rowStyle: tmp3.featureRow };
  items5[3] = callback2(importDefault(8138), obj7);
  if (!!hideButton) {
    items5[4] = tmp46;
    obj3.children = items5;
    const items6 = [tmp35(tmp36, obj3), ];
    if (tmp71Result) {
      obj8 = { accessible: true, style: tmp3.trialSubTextContainer };
      obj9 = { variant: "text-md/normal", style: tmp3.trialSubText };
      const intl6 = premiumType(1212).intl;
      obj10 = { trialPeriod: result };
      let priceString;
      if (null != tmp34) {
        priceString = tmp34.priceString;
      }
      let str6 = "$...";
      if (null != priceString) {
        str6 = priceString;
      }
      obj10.price = str6;
      obj9.children = intl6.format(premiumType(1212).t.pC4tcv, obj10);
      obj8.children = callback2(premiumType(4126).Text, obj9);
      tmp71Result = tmp71(analyticsLocations, obj8);
      const tmp72 = analyticsLocations;
    }
    items6[1] = tmp71Result;
    obj2.children = items6;
    items4[1] = tmp35(tmp38, obj2);
    obj.children = items4;
    return tmp35(tmp36, obj);
  } else {
    if (tmp32) {
      obj11 = { style: tmp3.currentPlanLabel, accessible: true, accessibilityRole: "text" };
      const obj12 = { variant: "text-md/semibold", color: "text-overlay-light" };
      const intl5 = premiumType(1212).intl;
      obj12.children = intl5.string(premiumType(1212).t["j+wlhy"]);
      obj11.children = callback2(premiumType(4126).Text, obj12);
      let obj13 = obj11;
    } else {
      obj13 = { style: tmp3.button };
      const obj14 = {};
      if (tmp71Result) {
        obj14.text = stringResult;
        if (null != premiumDiscountOffer) {
          const obj15 = { style: tmp3.buttonIcon, color: importDefault(689).colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT, size: "sm" };
          const tmp62 = callback2(premiumType(7871).NitroWheelIcon, obj15);
        }
        obj14.icon = tmp62;
        let str2;
        if (tmp31) {
          str2 = "start";
        }
        obj14.iconPosition = str2;
        if (null != premiumDiscountOffer) {
          let str3 = "primary-overlay";
        } else {
          str3 = "experimental_premium-secondary";
        }
        obj14.variant = str3;
        obj14.size = "md";
        obj14.grow = true;
        obj14.shiny = !stateFromStores1;
        obj14.disabled = tmp24;
        obj14.onPress = function onPress() {
          return outer1_1(outer1_2[41])({ analyticsLocation: outer1_21, analyticsLocations, premiumType: premiumBundleWithPredicate.premiumTier, applicationId: closure_1, onPaymentSuccess: closure_2, onPaymentDismiss: _slicedToArray });
        };
        obj13.children = tmp49(tmp52, obj14);
      } else if (tmp31) {
        const intl4 = premiumType(1212).intl;
        const obj16 = { percent: premiumDiscountOffer.discount.amount };
        let formatToPlainStringResult = intl4.formatToPlainString(premiumType(1212).t.bkQ4bH, obj16);
      } else if (premiumType === PremiumTypes.TIER_0) {
        const intl3 = premiumType(1212).intl;
        formatToPlainStringResult = intl3.string(premiumType(1212).t.cM8bbx);
      } else {
        const intl2 = premiumType(1212).intl;
        formatToPlainStringResult = intl2.string(premiumType(1212).t["8x0jKT"]);
      }
      tmp49 = callback2;
    }
    callback2(analyticsLocations, obj13);
    const tmp47 = callback2;
    const tmp48 = analyticsLocations;
  }
};
