// Module ID: 15497
// Function ID: 118277
// Name: PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID
// Dependencies: []
// Exports: useMainViewTooltipActionSheetMap

// Module 15497 (PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID)
let PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID;
let PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID;
let PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID;
let PREMIUM_TIER_2_REACTIVATION_TRIAL_ID;
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
const PlatformTypes = arg1(dependencyMap[7]).PlatformTypes;
({ PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID, PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID, PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID, PREMIUM_TIER_2_REACTIVATION_TRIAL_ID } = arg1(dependencyMap[8]));
const UserSettingsTypes = arg1(dependencyMap[9]).UserSettingsTypes;
const items = [PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID, PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID, PREMIUM_TIER_2_REACTIVATION_TRIAL_ID, PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID];
const set = new Set(items);
const tmp2 = arg1(dependencyMap[8]);
const result = arg1(dependencyMap[31]).fileFinishedImporting("modules/upsell_tooltip/native/useMainViewTooltipActionSheetEligibilityMap.tsx");

export const useMainViewTooltipActionSheetMap = function useMainViewTooltipActionSheetMap() {
  let obj = arg1(dependencyMap[10]);
  const items = [closure_8];
  let stateFromStores = obj.useStateFromStores(items, () => closure_8.hasLoaded(constants.PRELOADED_USER_SETTINGS));
  let obj1 = importDefault(dependencyMap[11]);
  let obj2 = arg1(dependencyMap[10]);
  const items1 = [closure_9];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => closure_9.hasAction());
  if (stateFromStores) {
    stateFromStores = !obj1.getConfig({ location: "MainViewTooltipActionSheets" }).disabled;
  }
  if (stateFromStores) {
    stateFromStores = !stateFromStores1;
  }
  if (stateFromStores) {
    let obj3 = arg1(dependencyMap[12]);
    stateFromStores = !obj3.isMetaQuest();
  }
  let obj4 = arg1(dependencyMap[10]);
  const items2 = [closure_6];
  const tmp5 = callback(obj4.useStateFromStoresArray(items2, () => {
    const items = [, ];
    ({ shouldShowGooglePlayPriceChange: arr[0], priceChangeRecord: arr[1] } = closure_6);
    return items;
  }), 2);
  let first = tmp5[0];
  let obj5 = arg1(dependencyMap[13]);
  const premiumDiscountOffer = obj5.usePremiumDiscountOffer();
  let obj6 = arg1(dependencyMap[14]);
  const premiumTrialOffer = obj6.usePremiumTrialOffer();
  const PremiumTrialOfferActionSheetKillSwitchExperiment = arg1(dependencyMap[15]).PremiumTrialOfferActionSheetKillSwitchExperiment;
  let obj7 = arg1(dependencyMap[16]);
  const promotionMarketingComponent = obj7.usePromotionMarketingComponent(arg1(dependencyMap[17]).MarketingComponentType.MOBILE_BOTTOM_SHEET);
  let oneofKind;
  if (null != promotionMarketingComponent) {
    oneofKind = promotionMarketingComponent.properties.properties.oneofKind;
  }
  let mobileBottomSheet = null;
  if ("mobileBottomSheet" === oneofKind) {
    mobileBottomSheet = promotionMarketingComponent.properties.properties.mobileBottomSheet;
  }
  let obj8 = arg1(dependencyMap[10]);
  const items3 = [closure_7];
  const stateFromStores2 = obj8.useStateFromStores(items3, () => {
    const giftPromotion = store.getGiftPromotion();
    let id;
    if (null != giftPromotion) {
      id = giftPromotion.id;
    }
    return id;
  });
  let obj9 = arg1(dependencyMap[10]);
  const items4 = [closure_7];
  const stateFromStores3 = obj9.useStateFromStores(items4, () => {
    const marketingComponentByType = store.getMarketingComponentByType(isEligibleToShowGiftingBadgeCoachmark(closure_2[17]).MarketingComponentType.GIFT_ICON_COACHMARK);
    let giftIconCoachmark = null;
    if (null != marketingComponentByType) {
      giftIconCoachmark = null;
      if ("giftIconCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
        giftIconCoachmark = marketingComponentByType.properties.properties.giftIconCoachmark;
      }
    }
    return giftIconCoachmark;
  });
  let obj10 = arg1(dependencyMap[10]);
  const items5 = [closure_7];
  const stateFromStores4 = obj10.useStateFromStores(items5, () => {
    const marketingComponentByType = store.getMarketingComponentByType(isEligibleToShowGiftingBadgeCoachmark(closure_2[17]).MarketingComponentType.GIFT_REMINDER_COACHMARK);
    let prop = null;
    if (null != marketingComponentByType) {
      prop = null;
      if ("giftReminderCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
        prop = marketingComponentByType.properties.properties.giftReminderCoachmark;
      }
    }
    return prop;
  });
  const GiftPromotionReminderExperiment = arg1(dependencyMap[18]).GiftPromotionReminderExperiment;
  let obj11 = arg1(dependencyMap[19]);
  let isEligibleToShowGiftingBadgeCoachmark = obj11.useIsEligibleToShowGiftingBadgeCoachmark({ style: null, blurStyle: "0428a053ac70bfa6d33647148b36bffa" });
  const arg1 = isEligibleToShowGiftingBadgeCoachmark;
  const items6 = [isEligibleToShowGiftingBadgeCoachmark];
  const effect = React.useEffect(() => {
    if (isEligibleToShowGiftingBadgeCoachmark) {
      const badge = isEligibleToShowGiftingBadgeCoachmark(closure_2[20]).fetchBadge(isEligibleToShowGiftingBadgeCoachmark(closure_2[21]).BadgeId.GIFTING);
      const obj = isEligibleToShowGiftingBadgeCoachmark(closure_2[20]);
    }
  }, items6);
  let obj12 = arg1(dependencyMap[10]);
  const items7 = [closure_5];
  const stateFromStores5 = obj12.useStateFromStores(items7, () => null != badgeById.getBadgeById(isEligibleToShowGiftingBadgeCoachmark(closure_2[21]).BadgeId.GIFTING));
  let obj13 = arg1(dependencyMap[22]);
  let obj14 = arg1(dependencyMap[23]);
  const shouldShowRobloxConnectionCoachmark = obj14.useShouldShowRobloxConnectionCoachmark();
  let obj15 = arg1(dependencyMap[24]);
  const items8 = [, ];
  ({ LEAGUE_OF_LEGENDS: arr9[0], RIOT_GAMES: arr9[1] } = PlatformTypes);
  const isEligibleForBogoPromotion = obj15.useIsEligibleForBogoPromotion();
  let obj16 = arg1(dependencyMap[25]);
  const shouldShowConnectionDeprecationBottomSheet = obj16.useShouldShowConnectionDeprecationBottomSheet({ deprecatedPlatformTypes: items8 });
  let obj17 = arg1(dependencyMap[25]);
  const items9 = [PlatformTypes.BATTLENET];
  const shouldShowConnectionDeprecationBottomSheet1 = obj17.useShouldShowConnectionDeprecationBottomSheet({ deprecatedPlatformTypes: items9 });
  arg1(dependencyMap[26]);
  if (stateFromStores) {
    obj = {};
    obj = {};
    if (first) {
      first = null != tmp7;
    }
    obj.isEligible = first;
    let priceChangeId;
    if (null != tmp7) {
      priceChangeId = tmp7.priceChangeId;
    }
    obj.newSnowflakeId = priceChangeId;
    obj.actionSheetProperties = {};
    obj[arg1(dependencyMap[27]).DismissibleContent.GOOGLE_PLAY_PRICE_CHANGE_ACTION_SHEET] = obj;
    obj1 = {};
    let tmp31 = null != premiumDiscountOffer;
    if (tmp31) {
      tmp31 = null == premiumDiscountOffer.expiresAt;
    }
    obj1.isEligible = tmp31;
    let id;
    if (null != premiumDiscountOffer) {
      id = premiumDiscountOffer.id;
    }
    obj1.newSnowflakeId = id;
    if (null != premiumDiscountOffer) {
      obj2 = { userDiscountOffer: premiumDiscountOffer };
      obj3 = obj2;
    } else {
      obj3 = {};
    }
    obj1.actionSheetProperties = obj3;
    obj[arg1(dependencyMap[27]).DismissibleContent.DISCOUNT_OFFER_ACTION_SHEET] = obj1;
    obj4 = {};
    let hasItem = null != premiumTrialOffer;
    if (hasItem) {
      hasItem = null == premiumTrialOffer.expires_at;
    }
    if (hasItem) {
      hasItem = !PremiumTrialOfferActionSheetKillSwitchExperiment.useConfig({ location: "MainViewTooltipActionSheets" }).enabled;
    }
    if (hasItem) {
      hasItem = set.has(premiumTrialOffer.trial_id);
    }
    obj4.isEligible = hasItem;
    let id1;
    if (null != premiumTrialOffer) {
      id1 = premiumTrialOffer.id;
    }
    obj4.newSnowflakeId = id1;
    if (null != premiumTrialOffer) {
      obj5 = { userTrialOffer: premiumTrialOffer };
      obj6 = obj5;
    } else {
      obj6 = {};
    }
    obj4.actionSheetProperties = obj6;
    obj[arg1(dependencyMap[27]).DismissibleContent.MOBILE_PREMIUM_TRIAL_OFFER_ACTION_SHEET] = obj4;
    obj7 = {};
    let dismissibleContent;
    if (null != mobileBottomSheet) {
      dismissibleContent = mobileBottomSheet.dismissibleContent;
    }
    obj7.isEligible = dismissibleContent === arg1(dependencyMap[27]).DismissibleContent.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL;
    let promotionId;
    if (null != promotionMarketingComponent) {
      promotionId = promotionMarketingComponent.promotionId;
    }
    obj7.newSnowflakeId = promotionId;
    obj8 = { bottomSheetData: mobileBottomSheet };
    let id2;
    if (null != promotionMarketingComponent) {
      id2 = promotionMarketingComponent.id;
    }
    obj8.componentId = id2;
    let promotionId1;
    if (null != promotionMarketingComponent) {
      promotionId1 = promotionMarketingComponent.promotionId;
    }
    obj8.promotionId = promotionId1;
    obj7.actionSheetProperties = obj8;
    obj[arg1(dependencyMap[27]).DismissibleContent.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL] = obj7;
    obj9 = {};
    let dismissibleContent1;
    if (null != mobileBottomSheet) {
      dismissibleContent1 = mobileBottomSheet.dismissibleContent;
    }
    obj9.isEligible = dismissibleContent1 === arg1(dependencyMap[27]).DismissibleContent.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL;
    let promotionId2;
    if (null != promotionMarketingComponent) {
      promotionId2 = promotionMarketingComponent.promotionId;
    }
    obj9.newSnowflakeId = promotionId2;
    obj10 = { bottomSheetData: mobileBottomSheet };
    let id3;
    if (null != promotionMarketingComponent) {
      id3 = promotionMarketingComponent.id;
    }
    obj10.componentId = id3;
    obj9.actionSheetProperties = obj10;
    obj[arg1(dependencyMap[27]).DismissibleContent.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL] = obj9;
    obj11 = { isEligible: tmp25, newSnowflakeId: stateFromStores2 };
    obj12 = { coachmarkComponent: stateFromStores3 };
    obj11.actionSheetProperties = obj12;
    obj[arg1(dependencyMap[27]).DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET] = obj11;
    obj13 = {};
    let tmp55 = !tmp25;
    if (tmp25) {
      tmp55 = null == stateFromStores4;
    }
    let enabled = !tmp55;
    if (!tmp55) {
      enabled = null != stateFromStores2;
    }
    if (enabled) {
      enabled = arg1(dependencyMap[28]).UNSAFE_isSnowflakeBoundDismissibleContentDismissed(arg1(dependencyMap[27]).DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET, stateFromStores2).isDismissed;
      const obj35 = arg1(dependencyMap[28]);
    }
    if (enabled) {
      enabled = GiftPromotionReminderExperiment.useConfig({ location: "MainViewTooltipActionSheets" }).enabled;
    }
    if (enabled) {
      enabled = null != stateFromStores4;
    }
    obj13.isEligible = enabled;
    obj13.newSnowflakeId = stateFromStores2;
    obj14 = { coachmarkComponent: stateFromStores4 };
    obj13.actionSheetProperties = obj14;
    obj[arg1(dependencyMap[27]).DismissibleContent.GIFTING_PROMOTION_REMINDER] = obj13;
    obj15 = {};
    if (isEligibleToShowGiftingBadgeCoachmark) {
      isEligibleToShowGiftingBadgeCoachmark = stateFromStores5;
    }
    obj15.isEligible = isEligibleToShowGiftingBadgeCoachmark;
    obj15.actionSheetProperties = {};
    obj[arg1(dependencyMap[27]).DismissibleContent.NEW_GIFTING_BADGES_COACHMARK] = obj15;
    obj16 = { isEligible: true, actionSheetProperties: {} };
    obj[arg1(dependencyMap[27]).DismissibleContent.CUSTOM_APP_ICONS_COACHMARK] = obj16;
    obj17 = { isEligible: shouldShowRobloxConnectionCoachmark, actionSheetProperties: {} };
    obj[arg1(dependencyMap[27]).DismissibleContent.ROBLOX_CONNECTION_COACHMARK] = obj17;
    const obj18 = { isEligible: isEligibleForBogoPromotion, actionSheetProperties: {} };
    obj[arg1(dependencyMap[27]).DismissibleContent.MOBILE_BOGO_PROMOTION_ACTION_SHEET] = obj18;
    const obj19 = { isEligible: tmp24, actionSheetProperties: {} };
    obj[arg1(dependencyMap[27]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_COACHMARK] = obj19;
    const obj20 = { isEligible: shouldShowConnectionDeprecationBottomSheet };
    const obj21 = { platformTypes: items8 };
    const intl = arg1(dependencyMap[29]).intl;
    obj21.applicationName = intl.string(importDefault(dependencyMap[30]).1S6oAo);
    obj20.actionSheetProperties = obj21;
    obj[arg1(dependencyMap[27]).DismissibleContent.RIOT_CONNECTION_DEPRECATION_DISABLE] = obj20;
    const obj22 = { isEligible: shouldShowConnectionDeprecationBottomSheet1 };
    const obj23 = {};
    const items10 = [PlatformTypes.BATTLENET];
    obj23.platformTypes = items10;
    obj22.actionSheetProperties = obj23;
    obj[arg1(dependencyMap[27]).DismissibleContent.BATTLENET_CONNECTION_DEPRECATION_DISABLE] = obj22;
    const obj24 = { isEligible: obj13.useProfileFramesMarketing("MainViewTooltipActionSheets").isAnnouncementEligible, actionSheetProperties: {} };
    obj[arg1(dependencyMap[27]).DismissibleContent.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT] = obj24;
    let obj25 = obj;
  } else {
    obj25 = {};
  }
  return obj25;
};
