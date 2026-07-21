// Module ID: 7994
// Function ID: 63537
// Name: isSamePremiumType
// Dependencies: []
// Exports: default

// Module 7994 (isSamePremiumType)
let AnalyticsObjectTypes;
let AnalyticsPages;
let AnalyticsSections;
let PremiumTypes;
function isSamePremiumType(first, premiumType) {
  if (null == first) {
    return false;
  } else {
    const planIdFromItems = first.planIdFromItems;
    let tmp = null != planIdFromItems;
    if (tmp) {
      tmp = premiumType(dependencyMap[14]).getPremiumType(planIdFromItems) === premiumType;
      const obj = premiumType(dependencyMap[14]);
    }
    return tmp;
  }
}
let closure_3 = importDefault(dependencyMap[0]);
importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
({ AnalyticsPages, AnalyticsSections, AnalyticsObjectTypes } = arg1(dependencyMap[6]));
const tmp4 = arg1(dependencyMap[7]);
({ ANNUAL_DISCOUNT_PERCENTAGE_FALLBACK: closure_8, DISCOUNT_DURATION_FALLBACK: closure_9, DISCOUNT_PERCENTAGE_FALLBACK: closure_10, PremiumSubscriptionSKUToPremiumType: closure_11, PremiumTypes } = tmp4);
({ PremiumTypeToActivePremiumSubscriptionSKU: closure_13, SubscriptionIntervalTypes: closure_14, SubscriptionPlanInfo: closure_15, SubscriptionPlans: closure_16 } = tmp4);
const Fonts = arg1(dependencyMap[8]).Fonts;
const tmp3 = arg1(dependencyMap[6]);
({ jsx: closure_17, jsxs: closure_18 } = arg1(dependencyMap[9]));
const items = [, ];
({ TIER_0: arr[0], TIER_2: arr[1] } = PremiumTypes);
const set = new Set(items);
let obj = arg1(dependencyMap[10]);
obj = { containerWrapper: { position: "relative" } };
obj = { borderRadius: importDefault(dependencyMap[11]).radii.lg };
obj.card = obj;
obj.logoContainer = { marginBottom: 8 };
obj.logo = { marginRight: 4 };
obj.priceContainer = { "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false };
obj.discountPriceText = { enabled: "key", disableUI: "Text" };
obj.featureList = { marginTop: 8 };
const obj1 = {};
const tmp5 = arg1(dependencyMap[9]);
const merged = Object.assign(importDefault(dependencyMap[12])(Fonts.PRIMARY_MEDIUM, importDefault(dependencyMap[11]).unsafe_rawColors.WHITE, 14));
obj1["marginLeft"] = -8;
obj.featureLabel = obj1;
obj.featureRow = { paddingVertical: 7 };
obj.featureIcon = {};
obj.button = { marginTop: 16 };
obj.currentPlanLabel = { 1403688035: true, -1961128130: null, 1650961124: true, 979130026: "no-hide-descendants" };
obj.trialSubTextContainer = {};
const obj2 = {};
const importDefaultResult = importDefault(dependencyMap[12]);
const merged1 = Object.assign(importDefault(dependencyMap[12])(Fonts.DISPLAY_MEDIUM, importDefault(dependencyMap[11]).unsafe_rawColors.WHITE, 12));
obj2["textAlign"] = "center";
obj.trialSubText = obj2;
obj.pill = { force: "auto.ai.mcp_server", trackAnalytics: false, shouldMention: "auto.db.supabase.auth", isMentionLowImportance: "Portugu\u00EAs", messageId: "Portuguese" };
obj.buttonIcon = { 1449338582: null, -865846725: 1, 1710029728: 0 };
let closure_20 = obj.createStyles(obj);
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
  const tmp = callback3();
  const tmp2 = importDefault(dependencyMap[13])(premiumItem.basePlanId);
  let obj = importDefault(dependencyMap[14]);
  const intervalStringAsNoun = obj.getIntervalStringAsNoun(premiumItem.interval);
  let obj1 = arg1(dependencyMap[15]);
  let priceString;
  if (null != tmp2) {
    priceString = tmp2.priceString;
  }
  let str = "$...";
  let str2 = "$...";
  if (null != priceString) {
    str2 = priceString;
  }
  const formatRateResult = obj1.formatRate(str2, closure_15[premiumItem.basePlanId].interval, closure_15[premiumItem.basePlanId].intervalCount);
  if (null != discountedPriceString) {
    if (null != discountOffer) {
      obj = { style: tmp.discountPriceText };
      const intl5 = arg1(dependencyMap[17]).intl;
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
      obj.children = intl5.format(arg1(dependencyMap[17]).t.sJTwHQ, obj);
      return callback2(arg1(dependencyMap[16]).Text, obj);
    }
  }
  if (null != activeDiscountInfo) {
    if (null != premiumSubscription) {
      if (premiumSubscription.planIdFromItems === PREMIUM_YEAR_TIER_2.PREMIUM_YEAR_TIER_2) {
        if (isSamePremiumType(premiumSubscription, premiumType)) {
          if (null != premiumSubscription) {
            obj1 = { style: tmp.discountPriceText, children: formatResult };
            return callback2(arg1(dependencyMap[16]).Text, obj1);
          }
          const intl2 = arg1(dependencyMap[17]).intl;
          const obj2 = {};
          let percentage = activeDiscountInfo.percentage;
          if (null == percentage) {
            percentage = closure_8;
          }
          obj2.percent = percentage;
          obj2.regularPrice = formatRateResult;
          let obj10 = arg1(dependencyMap[14]);
          obj2.renewalDate = obj10.getExpectedRenewalDate(premiumSubscription, fractionalPremiumInfo.fractionalPremiumInfo);
          let formatResult = intl2.format(arg1(dependencyMap[17]).t.z2oQtA, obj2);
        }
      }
      if (premiumSubscription.hasAnyPremiumGroup) {
        const metadata = premiumSubscription.metadata;
        let prop;
        if (null != metadata) {
          prop = metadata.active_discount_expires_at;
        }
        if (null != prop) {
          const priceString1 = arg1(dependencyMap[18]).getPriceString(premiumSubscription);
          const intl4 = arg1(dependencyMap[17]).intl;
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
          formatResult = intl4.format(importDefault(dependencyMap[19]).FwjZzr, obj3);
          const obj13 = arg1(dependencyMap[18]);
        }
      }
      const intl3 = arg1(dependencyMap[17]).intl;
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
      formatResult = intl3.format(arg1(dependencyMap[17]).t.3ZiutU, obj4);
    }
  }
  if (null != subscriptionTrial) {
    if (premiumType === closure_11[subscriptionTrial.sku_id]) {
      const obj5 = { style: tmp.discountPriceText };
      const intl = arg1(dependencyMap[17]).intl;
      const obj6 = {};
      let obj7 = arg1(dependencyMap[14]);
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
      obj5.children = intl.format(arg1(dependencyMap[17]).t.xOX9/9, obj6);
      let tmp8Result = callback2(arg1(dependencyMap[16]).Text, obj5);
      const tmp14 = callback2;
    }
    return tmp8Result;
  }
  const obj8 = { accessible: true, style: tmp.priceContainer };
  const obj9 = { hasMaxConnections: 20, isBoostOnlySubscription: 20 };
  let priceString3;
  if (null != tmp2) {
    priceString3 = tmp2.priceString;
  }
  let tmp12 = str;
  if (null != priceString3) {
    tmp12 = priceString3;
  }
  obj9.children = tmp12;
  const items = [callback2(arg1(dependencyMap[16]).Text, obj9), ];
  obj10 = { children: " / " + intervalStringAsNoun };
  items[1] = callback2(arg1(dependencyMap[16]).Text, obj10);
  obj8.children = items;
  tmp8Result = closure_18(View, obj8);
}
const importDefaultResult1 = importDefault(dependencyMap[12]);
const result = arg1(dependencyMap[42]).fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesCard.tsx");

export default function PremiumFeaturesCard(premiumType) {
  let hideButton;
  let onLayout;
  let style;
  premiumType = premiumType.premiumType;
  const arg1 = premiumType;
  ({ applicationId: closure_1, onPaymentSuccess: closure_2, onPaymentDismiss: closure_3, hideButton } = premiumType);
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
    UNSPECIFIED = arg1(dependencyMap[20]).PremiumSubscriptionGroupRole.UNSPECIFIED;
  }
  let View;
  let closure_5;
  let closure_6;
  let closure_7;
  const tmp3 = callback3();
  importDefault(dependencyMap[21])(set.has(premiumType), "only Tier 0 and Tier 2 are supported");
  let obj = arg1(dependencyMap[22]);
  const premiumTrialOffer = obj.usePremiumTrialOffer();
  let obj1 = arg1(dependencyMap[23]);
  const premiumDiscountOffer = obj1.usePremiumDiscountOffer();
  let obj2 = arg1(dependencyMap[24]);
  const activeDiscountInfo = obj2.useActiveDiscountInfo();
  const tmp4 = importDefault(dependencyMap[21]);
  let obj3 = arg1(dependencyMap[26]);
  let subscription_trial;
  const premiumTrialOfferPremiumType = obj3.usePremiumTrialOfferPremiumType();
  if (null != premiumTrialOffer) {
    subscription_trial = premiumTrialOffer.subscription_trial;
  }
  let obj4 = arg1(dependencyMap[14]);
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
  const intl = arg1(dependencyMap[17]).intl;
  let tmp71Result = premiumType === premiumTrialOfferPremiumType;
  const tmp9 = importDefault(dependencyMap[25])();
  View = importDefault(dependencyMap[27])().analyticsLocations;
  let obj6 = arg1(dependencyMap[28]);
  const items = [closure_7];
  const tmp17 = callback(obj6.useStateFromStoresArray(items, () => {
    const items = [premiumBundleWithPredicate.getPremiumTypeSubscription(), premiumBundleWithPredicate.hasFetchedSubscriptions()];
    return items;
  }), 2);
  const first = tmp17[0];
  closure_5 = closure_13[premiumType];
  let obj7 = arg1(dependencyMap[28]);
  const items1 = [closure_6];
  const stateFromStores = obj7.useStateFromStores(items1, () => {
    const items = [closure_5];
    return interval1.isLoadedForSKUs(items);
  });
  let obj8 = arg1(dependencyMap[28]);
  const items2 = [closure_5];
  const stateFromStores1 = obj8.useStateFromStores(items2, () => useReducedMotion.useReducedMotion);
  let isBoostOnly = null != first;
  const stringResult = intl.string(arg1(dependencyMap[17]).t.J61px0);
  if (isBoostOnly) {
    isBoostOnly = first.isBoostOnly;
  }
  if (isBoostOnly) {
    let obj9 = arg1(dependencyMap[30]);
    isBoostOnly = obj9.isMetaQuest();
  }
  let tmp25 = null;
  if (null != first) {
    tmp25 = null;
    if (undefined !== first.planIdFromItems) {
      tmp25 = closure_15[first.planIdFromItems];
    }
  }
  let interval1;
  if (null != tmp25) {
    interval1 = tmp25.interval;
  }
  if (null == interval1) {
    interval1 = constants.MONTH;
  }
  closure_6 = interval1;
  let obj10 = arg1(dependencyMap[31]);
  const premiumBundleWithPredicate = obj10.getPremiumBundleWithPredicate((additionalPlans) => {
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
  closure_7 = premiumBundleWithPredicate;
  importDefault(dependencyMap[21])(null != premiumBundleWithPredicate, "could not find a premium item");
  let obj11 = arg1(dependencyMap[32]);
  const items3 = [premiumBundleWithPredicate];
  const discountedPriceString = obj11.useDiscountedPremiumProductInfo(premiumDiscountOffer, items3).discountedPriceString;
  let tmp32 = tmp24;
  if (null != first && stateFromStores && tmp17[1] && !isBoostOnly) {
    tmp32 = isSamePremiumType(first, premiumType);
  }
  const tmp34 = importDefault(dependencyMap[13])(premiumBundleWithPredicate.basePlanId);
  obj = { style: tmp3.containerWrapper, onLayout };
  obj1 = { style: tmp3.pill, discountOffer: premiumDiscountOffer, isActiveDiscount: null != activeDiscountInfo, shouldShowDiscountUpsell: tmp31, premiumType, trialOffer: premiumTrialOffer };
  const items4 = [callback2(arg1(dependencyMap[33]).PremiumPill, obj1), ];
  obj2 = { premiumType, style };
  obj3 = { style: tmp3.card };
  obj4 = { style: tmp3.logoContainer };
  const tmp21 = importDefault(dependencyMap[29])(premiumType, flag, UNSPECIFIED);
  const tmp37 = callback2;
  if (flag3) {
    let tmp39Result = tmp39(tmp40(tmp41[35]), { variant: null, selectable: null, style: null });
  } else {
    const obj5 = { premiumType, style: tmp3.logo };
    tmp39Result = tmp39(tmp40(tmp41[36]), obj5);
  }
  obj4.children = tmp39Result;
  const items5 = [tmp37(View, obj4), callback2(importDefault(dependencyMap[37]), { premiumType }), , , ];
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
  items5[3] = callback2(importDefault(dependencyMap[38]), obj7);
  if (!!hideButton) {
    items5[4] = tmp46;
    obj3.children = items5;
    const items6 = [tmp35(tmp36, obj3), ];
    if (tmp71Result) {
      obj8 = { accessible: true, style: tmp3.trialSubTextContainer };
      obj9 = { variant: "text-md/normal", style: tmp3.trialSubText };
      const intl6 = arg1(dependencyMap[17]).intl;
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
      obj9.children = intl6.format(arg1(dependencyMap[17]).t.pC4tcv, obj10);
      obj8.children = callback2(arg1(dependencyMap[16]).Text, obj9);
      tmp71Result = tmp71(View, obj8);
      const tmp72 = View;
    }
    items6[1] = tmp71Result;
    obj2.children = items6;
    items4[1] = tmp35(tmp38, obj2);
    obj.children = items4;
    return tmp35(tmp36, obj);
  } else {
    if (tmp32) {
      obj11 = { style: tmp3.currentPlanLabel };
      const obj12 = { hasMaxConnections: "<string:3362914305>", isBoostOnlySubscription: "<string:2018574337>" };
      const intl5 = arg1(dependencyMap[17]).intl;
      obj12.children = intl5.string(arg1(dependencyMap[17]).t.j+wlhy);
      obj11.children = callback2(arg1(dependencyMap[16]).Text, obj12);
      let obj13 = obj11;
    } else {
      obj13 = { style: tmp3.button };
      const obj14 = {};
      if (tmp71Result) {
        obj14.text = stringResult;
        if (null != premiumDiscountOffer) {
          const obj15 = { style: tmp3.buttonIcon, color: importDefault(dependencyMap[11]).colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT, size: "sm" };
          const tmp62 = callback2(arg1(dependencyMap[40]).NitroWheelIcon, obj15);
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
          return callback(closure_2[41])({ analyticsLocation: closure_21, analyticsLocations, premiumType: premiumBundleWithPredicate.premiumTier, applicationId: callback, onPaymentSuccess: closure_2, onPaymentDismiss: closure_3 });
        };
        obj13.children = tmp49(tmp52, obj14);
      } else if (tmp31) {
        const intl4 = arg1(dependencyMap[17]).intl;
        const obj16 = { percent: premiumDiscountOffer.discount.amount };
        let formatToPlainStringResult = intl4.formatToPlainString(arg1(dependencyMap[17]).t.bkQ4bH, obj16);
      } else if (premiumType === PremiumTypes.TIER_0) {
        const intl3 = arg1(dependencyMap[17]).intl;
        formatToPlainStringResult = intl3.string(arg1(dependencyMap[17]).t.cM8bbx);
      } else {
        const intl2 = arg1(dependencyMap[17]).intl;
        formatToPlainStringResult = intl2.string(arg1(dependencyMap[17]).t.8x0jKT);
      }
      const tmp49 = callback2;
    }
    callback2(View, obj13);
    const tmp47 = callback2;
    const tmp48 = View;
  }
};
