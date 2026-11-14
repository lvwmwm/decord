// Module ID: 19846
// Function ID: 19847
// Name: useMainViewTooltipActionSheetEligibilityMap
// Dependencies: [32, 1246, 9293, 19806, 9623, 1231, 5149, 7920, 1390, 1082, 1089, 504, 19847, 1627, 9313, 19848, 9307, 9310, 19849, 10010, 9627, 18353, 11672, 11678, 5348, 5139, 19850, 19851, 19804, 19852, 14577, 17978, 19853, 19840, 7922, 7259, 2]
// Exports: useMainViewTooltipActionSheetMap

// Module 19846 (useMainViewTooltipActionSheetEligibilityMap)
import get_initialized from "get initialized" /* 504 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1082 */;
import DurationsDefault from "Durations" /* 1089 */;
import ApplicationAccountLinkingConstants from "ApplicationAccountLinkingConstants" /* 7920 */;
import MainViewTooltipActionSheetsDisabledExperimentDefault from "MainViewTooltipActionSheetsDisabledExperiment" /* 19847 */;
import RecurringReferralReminderExperiment2 from "RecurringReferralReminderExperiment" /* 19848 */;
import useGiftingPromotionAssetsReadyDefault from "useGiftingPromotionAssetsReady" /* 19850 */;
import useLaunchAccountLinkingCampaignDefault from "useLaunchAccountLinkingCampaign" /* 19852 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1246 */;
import ReferralTrialStore from "ReferralTrialStore" /* 9293 */;
import GooglePlayPriceChangeStore from "GooglePlayPriceChangeStore" /* 19806 */;
import PromotionsStore from "PromotionsStore" /* 9623 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 5149 */;
import PremiumConstants from "PremiumConstants" /* 1390 */;
import size from "module_2" /* 2 */;

let PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID;
let PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID;
let PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID;
let PREMIUM_TIER_2_REACTIVATION_TRIAL_ID;
let tmp;
const MetaQuestUtils = tmp(1627);
const dismissible_content = tmp(5139);
const DismissibleContentUnsafeUtils = tmp(5348);
const useGetOrFetchApplications = tmp(7259);
const useAuthorizedAppsToken = tmp(7922);
const useIsEligibleSenderForReferralProgram = tmp(9307);
const usePremiumTrialOffer = tmp(9310);
const usePremiumDiscountOffer = tmp(9313);
const MarketingSurfaceType = tmp(9627);
const usePromotionMarketingSurface = tmp(10010);
const GiftPromotionReminderExperiment2 = tmp(11672);
const GiftingBadgesUtils = tmp(11678);
const CustomTypingIndicatorExperiment = tmp(14577);
const CustomTypingIndicatorNewPresetsExperiment = tmp(17978);
const MobileBottomSheetCopy = tmp(18353);
const RobloxConnectionCoachmark = tmp(19804);
const bloonsTDBattlesUpsellExperiment2 = tmp(19840);
const PremiumTrialOfferActionSheetKillSwitchExperiment2 = tmp(19849);
const useNitroFileUploadMarketingEligible = tmp(19851);
const useHexagonCampaignExpirySheetEligibility = tmp(19853);
let closure_10 = ApplicationAccountLinkingConstants.ApplicationAccountLinkingConstants;
({ PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID, PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID, PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID, PREMIUM_TIER_2_REACTIVATION_TRIAL_ID } = PremiumConstants);
const UserSettingsTypes = UserSettingsConstants.UserSettingsTypes;
const MainViewTooltipActionSheets = "MainViewTooltipActionSheets";
let cooldownConfig = { cooldownDurationMs: DurationsDefault.Millis.DAY };
let items = [PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID, PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID, PREMIUM_TIER_2_REACTIVATION_TRIAL_ID, PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID];
const set = new Set(items);
const result = size.fileFinishedImporting("modules/upsell_tooltip/native/useMainViewTooltipActionSheetEligibilityMap.tsx");

export function useMainViewTooltipActionSheetMap() {
  let _location;
  let componentType;
  let componentType1;
  let fetched;
  let id;
  let id1;
  let id2;
  let id3;
  let isExpiredEligible;
  let isExpiringSoonEligible;
  let isGiftCoachmarkAssetReady;
  let isGiftReminderAssetReady;
  let num2;
  let num3;
  let obj10;
  let obj13;
  let obj15;
  let obj17;
  let obj19;
  let obj21;
  let obj23;
  let obj31;
  let obj38;
  let priceChangeId;
  let promotionId;
  let promotionId1;
  let promotionId2;
  let promotionId3;
  let str2;
  let surface;
  let tmp14;
  let tmp15;
  let tmp36;
  let tmp8;
  let tmp9;
  let token;
  const f121427 = () => {
    const items = [, ];
    ({ shouldShowGooglePlayPriceChange: arr[0], priceChangeRecord: arr[1] } = GooglePlayPriceChangeStore);
    return items;
  };
  const f121429 = () => {
    const items = [ReferralTrialStore.getReferralsRemaining({ bypassFetch: true }), ReferralTrialStore.getRecurringReminderStateId()];
    return items;
  };
  cooldownConfig = get_initialized;
  let items = [UserSettingsProtoStore];
  let stateFromStores = cooldownConfig.useStateFromStores(items, () => UserSettingsProtoStore.hasLoaded(constants.PRELOADED_USER_SETTINGS));
  const obj2 = MainViewTooltipActionSheetsDisabledExperimentDefault;
  const obj3 = { location: MainViewTooltipActionSheets };
  const disabled = obj2.getConfig(obj3).disabled;
  const items1 = [UserRequiredActionStore];
  const obj4 = get_initialized;
  const stateFromStores1 = obj4.useStateFromStores(items1, () => UserRequiredActionStore.hasAction());
  if (stateFromStores) {
    stateFromStores = !disabled;
  }
  if (stateFromStores) {
    stateFromStores = !stateFromStores1;
  }
  if (stateFromStores) {
    const tmpResult = MetaQuestUtils;
    stateFromStores = !tmpResult.isMetaQuest();
  }
  const items2 = [GooglePlayPriceChangeStore];
  const tmpResult23 = get_initialized;
  [tmp8, tmp9] = tmpResult23.useStateFromStoresArray(items2, f121427);
  _slicedToArray(tmpResult23.useStateFromStoresArray(items2, f121427), 2);
  const tmpResult24 = usePremiumDiscountOffer;
  const premiumDiscountOffer = tmpResult24.usePremiumDiscountOffer();
  const items3 = [ApexExperimentStore];
  const tmpResult25 = get_initialized;
  let stateFromStores2 = tmpResult25.useStateFromStores(items3, () => {
    const RecurringReferralReminderExperiment = RecurringReferralReminderExperiment2.RecurringReferralReminderExperiment;
    const obj = { location: _location };
    return RecurringReferralReminderExperiment.getConfig(obj, { autoTrackExposure: false }).bottomSheetEnabled;
  });
  const tmpResult26 = useIsEligibleSenderForReferralProgram;
  const isEligibleSenderForReferralProgram = tmpResult26.useIsEligibleSenderForReferralProgram(!stateFromStores2);
  const items4 = [ReferralTrialStore];
  const tmpResult27 = get_initialized;
  [tmp14, tmp15] = tmpResult27.useStateFromStoresArray(items4, f121429);
  _slicedToArray(tmpResult27.useStateFromStoresArray(items4, f121429), 2);
  const tmpResult28 = usePremiumTrialOffer;
  const premiumTrialOffer = tmpResult28.usePremiumTrialOffer();
  const PremiumTrialOfferActionSheetKillSwitchExperiment = PremiumTrialOfferActionSheetKillSwitchExperiment2.PremiumTrialOfferActionSheetKillSwitchExperiment;
  const enabled = PremiumTrialOfferActionSheetKillSwitchExperiment.useConfig({ location: tmp5 }).enabled;
  const tmpResult29 = usePromotionMarketingSurface;
  const promotionMarketingSurface = tmpResult29.usePromotionMarketingSurface(MarketingSurfaceType.MarketingSurfaceType.MOBILE_BOTTOM_SHEET);
  if (promotionMarketingSurface != null) {
    surface = promotionMarketingSurface.surface;
  }
  let mobileBottomSheetCopy = null;
  if (null != promotionMarketingSurface) {
    const tmpResult30 = MobileBottomSheetCopy;
    mobileBottomSheetCopy = tmpResult30.getMobileBottomSheetCopy(promotionMarketingSurface);
  }
  const items5 = [PromotionsStore];
  const tmpResult31 = get_initialized;
  const stateFromStores3 = tmpResult31.useStateFromStores(items5, () => {
    const giftPromotion = PromotionsStore.getGiftPromotion();
    let id;
    if (giftPromotion != null) {
      id = giftPromotion.id;
    }
    return id;
  });
  const items6 = [PromotionsStore];
  const tmpResult32 = get_initialized;
  const stateFromStores4 = tmpResult32.useStateFromStores(items6, () => {
    const marketingComponentBySurface = PromotionsStore.getMarketingComponentBySurface(MarketingSurfaceType.MarketingSurfaceType.GIFT_ICON_COACHMARK);
    let surface = null;
    if (null != marketingComponentBySurface) {
      surface = marketingComponentBySurface.surface;
    }
    return surface;
  });
  const items7 = [PromotionsStore];
  const tmpResult33 = get_initialized;
  const stateFromStores5 = tmpResult33.useStateFromStores(items7, () => {
    const marketingComponentBySurface = PromotionsStore.getMarketingComponentBySurface(MarketingSurfaceType.MarketingSurfaceType.GIFT_REMINDER_COACHMARK);
    let surface = null;
    if (null != marketingComponentBySurface) {
      surface = marketingComponentBySurface.surface;
    }
    return surface;
  });
  const GiftPromotionReminderExperiment = GiftPromotionReminderExperiment2.GiftPromotionReminderExperiment;
  let enabled2 = GiftPromotionReminderExperiment.useConfig({ location: tmp5 }).enabled;
  const tmpResult34 = GiftingBadgesUtils;
  const giftingBadgeCoachmarkVariant = tmpResult34.useGiftingBadgeCoachmarkVariant({ location: tmp5 });
  let isDismissed = null != stateFromStores3;
  if (isDismissed) {
    const tmpResult35 = DismissibleContentUnsafeUtils;
    isDismissed = tmpResult35.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(dismissible_content.DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET, stateFromStores3).isDismissed;
  }
  let isDismissed2 = null != stateFromStores3;
  if (isDismissed2) {
    const tmpResult36 = DismissibleContentUnsafeUtils;
    isDismissed2 = tmpResult36.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(dismissible_content.DismissibleContent.GIFTING_PROMOTION_REMINDER, stateFromStores3).isDismissed;
  }
  let tmp24 = null;
  const tmp4Result = useGiftingPromotionAssetsReadyDefault;
  if (!isDismissed) {
    tmp24 = stateFromStores4;
  }
  let tmp25 = null;
  if (!isDismissed2) {
    tmp25 = stateFromStores5;
  }
  ({ isGiftCoachmarkAssetReady, isGiftReminderAssetReady } = tmp4Result(tmp24, tmp25));
  tmp4Result(tmp24, tmp25);
  const tmpResult37 = useNitroFileUploadMarketingEligible;
  const nitroFileUploadAnnouncementEligible = tmpResult37.useNitroFileUploadAnnouncementEligible(tmp5);
  const tmpResult38 = useNitroFileUploadMarketingEligible;
  const nitroFileUploadUpsellEligible = tmpResult38.useNitroFileUploadUpsellEligible(tmp5);
  const tmpResult39 = RobloxConnectionCoachmark;
  const shouldShowRobloxConnectionCoachmark = tmpResult39.useShouldShowRobloxConnectionCoachmark();
  const tmp30 = useLaunchAccountLinkingCampaignDefault(stateFromStores);
  const tmpResult40 = CustomTypingIndicatorExperiment;
  let canSet = tmpResult40.useCustomTypingIndicatorConfig(tmp5).canSet;
  const tmpResult41 = CustomTypingIndicatorNewPresetsExperiment;
  const enabled3 = tmpResult41.useCustomTypingIndicatorNewPresetsConfig(tmp5).enabled;
  const tmpResult42 = useHexagonCampaignExpirySheetEligibility;
  const hexagonCampaignExpirySheetEligibility = tmpResult42.useHexagonCampaignExpirySheetEligibility(tmp5);
  ({ isExpiringSoonEligible, isExpiredEligible } = hexagonCampaignExpirySheetEligibility);
  const bloonsTDBattlesUpsellExperiment = bloonsTDBattlesUpsellExperiment2.bloonsTDBattlesUpsellExperiment;
  const enabled4 = bloonsTDBattlesUpsellExperiment.getConfig({ location: tmp5 }, { autoTrackExposure: false }).enabled;
  const obj5 = { disableFetch: !enabled4 };
  const tmpResult43 = useAuthorizedAppsToken;
  const authorizedAppsToken = tmpResult43.useAuthorizedAppsToken(closure_10.BLOONS_TD_BATTLES_2_APPLICATION_ID, obj5);
  ({ fetched, token } = authorizedAppsToken);
  useGetOrFetchApplications;
  const obj6 = {};
  if (stateFromStores) {
    const GOOGLE_PLAY_PRICE_CHANGE_ACTION_SHEET = dismissible_content.DismissibleContent.GOOGLE_PLAY_PRICE_CHANGE_ACTION_SHEET;
    const obj7 = { isEligible: tmp8, newSnowflakeId: priceChangeId, actionSheetProperties: {} };
    priceChangeId = undefined;
    if (tmp9 != null) {
      priceChangeId = tmp9.priceChangeId;
    }
    obj6[GOOGLE_PLAY_PRICE_CHANGE_ACTION_SHEET] = obj7;
    let tmp38 = null != premiumDiscountOffer;
    const DISCOUNT_OFFER_ACTION_SHEET = dismissible_content.DismissibleContent.DISCOUNT_OFFER_ACTION_SHEET;
    if (tmp38) {
      tmp38 = null == premiumDiscountOffer.expiresAt;
    }
    const obj8 = { isEligible: tmp38, newSnowflakeId: id, actionSheetProperties: obj10 };
    id = undefined;
    if (premiumDiscountOffer != null) {
      id = premiumDiscountOffer.id;
    }
    if (null != premiumDiscountOffer) {
      obj10 = { userDiscountOffer: premiumDiscountOffer };
      const obj9 = { userDiscountOffer: premiumDiscountOffer };
    } else {
      obj10 = {};
    }
    obj6[DISCOUNT_OFFER_ACTION_SHEET] = obj8;
    let hasItem = null != premiumTrialOffer;
    const MOBILE_PREMIUM_TRIAL_OFFER_ACTION_SHEET = dismissible_content.DismissibleContent.MOBILE_PREMIUM_TRIAL_OFFER_ACTION_SHEET;
    if (hasItem) {
      hasItem = null == premiumTrialOffer.expiresAt;
    }
    if (hasItem) {
      hasItem = !enabled;
    }
    if (hasItem) {
      hasItem = set.has(premiumTrialOffer.trialId);
    }
    const obj11 = { isEligible: hasItem, newSnowflakeId: id1, actionSheetProperties: obj13 };
    id1 = undefined;
    if (premiumTrialOffer != null) {
      id1 = premiumTrialOffer.id;
    }
    if (null != premiumTrialOffer) {
      obj13 = { userTrialOffer: premiumTrialOffer };
      const obj12 = { userTrialOffer: premiumTrialOffer };
    } else {
      obj13 = {};
    }
    obj6[MOBILE_PREMIUM_TRIAL_OFFER_ACTION_SHEET] = obj11;
    let tmp43 = null != mobileBottomSheetCopy;
    const PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL = dismissible_content.DismissibleContent.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL;
    if (tmp43) {
      let dismissibleContent;
      if (surface != null) {
        dismissibleContent = surface.dismissibleContent;
      }
      tmp43 = dismissibleContent === dismissible_content.DismissibleContent.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL;
    }
    const obj14 = { isEligible: tmp43, newSnowflakeId: promotionId, actionSheetProperties: obj15 };
    promotionId = undefined;
    if (promotionMarketingSurface != null) {
      promotionId = promotionMarketingSurface.promotionId;
    }
    obj15 = { bottomSheetData: surface, copy: mobileBottomSheetCopy, componentId: id2, componentType, promotionId: promotionId1 };
    id2 = undefined;
    if (promotionMarketingSurface != null) {
      id2 = promotionMarketingSurface.id;
    }
    componentType = undefined;
    if (promotionMarketingSurface != null) {
      componentType = promotionMarketingSurface.componentType;
    }
    promotionId1 = undefined;
    if (promotionMarketingSurface != null) {
      promotionId1 = promotionMarketingSurface.promotionId;
    }
    obj6[PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL] = obj14;
    let tmp49 = null != mobileBottomSheetCopy;
    const PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL = dismissible_content.DismissibleContent.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL;
    if (tmp49) {
      let dismissibleContent1;
      if (surface != null) {
        dismissibleContent1 = surface.dismissibleContent;
      }
      tmp49 = dismissibleContent1 === dismissible_content.DismissibleContent.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL;
    }
    const obj16 = { isEligible: tmp49, newSnowflakeId: promotionId2, actionSheetProperties: obj17 };
    promotionId2 = undefined;
    if (promotionMarketingSurface != null) {
      promotionId2 = promotionMarketingSurface.promotionId;
    }
    obj17 = { bottomSheetData: surface, copy: mobileBottomSheetCopy, componentId: id3, componentType: componentType1, promotionId: promotionId3 };
    id3 = undefined;
    if (promotionMarketingSurface != null) {
      id3 = promotionMarketingSurface.id;
    }
    componentType1 = undefined;
    if (promotionMarketingSurface != null) {
      componentType1 = promotionMarketingSurface.componentType;
    }
    promotionId3 = undefined;
    if (promotionMarketingSurface != null) {
      promotionId3 = promotionMarketingSurface.promotionId;
    }
    obj6[PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL] = obj16;
    let tmp55 = tmp35;
    const GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET = dismissible_content.DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET;
    if (null != stateFromStores4) {
      tmp55 = isGiftCoachmarkAssetReady;
    }
    const obj18 = { isEligible: tmp55, newSnowflakeId: stateFromStores3, actionSheetProperties: obj19 };
    obj19 = { coachmarkComponent: stateFromStores4 };
    obj6[GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET] = obj18;
    let tmp56 = !tmp35;
    const GIFTING_PROMOTION_REMINDER = dismissible_content.DismissibleContent.GIFTING_PROMOTION_REMINDER;
    if (null != stateFromStores4) {
      tmp56 = null == stateFromStores5;
    }
    let tmp57 = !tmp56;
    if (tmp57) {
      let tmp58 = null != stateFromStores3;
      if (tmp58) {
        let tmp59 = isDismissed;
        if (tmp59) {
          if (enabled2) {
            enabled2 = null != stateFromStores5;
          }
          if (enabled2) {
            enabled2 = isGiftReminderAssetReady;
          }
          tmp59 = enabled2;
        }
        tmp58 = tmp59;
      }
      tmp57 = tmp58;
    }
    const obj20 = { isEligible: tmp57, newSnowflakeId: stateFromStores3, actionSheetProperties: obj21 };
    obj21 = { coachmarkComponent: stateFromStores5 };
    obj6[GIFTING_PROMOTION_REMINDER] = obj20;
    const obj22 = { isEligible: null != giftingBadgeCoachmarkVariant, actionSheetProperties: obj23 };
    obj23 = { variant: giftingBadgeCoachmarkVariant };
    obj6[dismissible_content.DismissibleContent.NEW_GIFTING_BADGES_COACHMARK] = obj22;
    const obj24 = { isEligible: true, actionSheetProperties: {} };
    obj6[dismissible_content.DismissibleContent.CUSTOM_APP_ICONS_COACHMARK] = obj24;
    const obj25 = { isEligible: shouldShowRobloxConnectionCoachmark, actionSheetProperties: {} };
    obj6[dismissible_content.DismissibleContent.ROBLOX_CONNECTION_COACHMARK] = obj25;
    const obj26 = { isEligible: true, actionSheetProperties: {} };
    obj6[dismissible_content.DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_COACHMARK] = obj26;
    const obj27 = { isEligible: true, actionSheetProperties: {} };
    obj6[dismissible_content.DismissibleContent.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT] = obj27;
    const obj28 = { isEligible: nitroFileUploadAnnouncementEligible, actionSheetProperties: {} };
    obj6[dismissible_content.DismissibleContent.NITRO_FILE_UPLOAD_1GB_ANNOUNCEMENT] = obj28;
    const obj29 = { isEligible: nitroFileUploadUpsellEligible, actionSheetProperties: {} };
    obj6[dismissible_content.DismissibleContent.NITRO_FILE_UPLOAD_1GB_UPSELL] = obj29;
    const obj30 = { isEligible: canSet, actionSheetProperties: obj31 };
    obj31 = { dismissNewPresetsSheet: enabled3 };
    obj6[dismissible_content.DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_COACHMARK] = obj30;
    const CUSTOM_TYPING_INDICATOR_MOBILE_NEW_PRESETS_ACTION_SHEET = dismissible_content.DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_PRESETS_ACTION_SHEET;
    if (canSet) {
      canSet = enabled3;
    }
    const obj32 = { isEligible: canSet, actionSheetProperties: { variant: "new_presets" } };
    obj6[CUSTOM_TYPING_INDICATOR_MOBILE_NEW_PRESETS_ACTION_SHEET] = obj32;
    const MOBILE_REFERRAL_PROGRAM_BOTTOM_SHEET_ENTRYPOINT = dismissible_content.DismissibleContent.MOBILE_REFERRAL_PROGRAM_BOTTOM_SHEET_ENTRYPOINT;
    if (stateFromStores2) {
      stateFromStores2 = isEligibleSenderForReferralProgram;
    }
    if (stateFromStores2) {
      stateFromStores2 = null != tmp14;
    }
    if (stateFromStores2) {
      stateFromStores2 = tmp14 > 0;
    }
    if (stateFromStores2) {
      stateFromStores2 = null != tmp15;
    }
    const obj33 = { isEligible: stateFromStores2, newSnowflakeId: tmp15, actionSheetProperties: {} };
    obj6[MOBILE_REFERRAL_PROGRAM_BOTTOM_SHEET_ENTRYPOINT] = obj33;
    let tmp60 = enabled4;
    const BLOONS_TD_BATTLES_ACCOUNT_LINK_UPSELL = dismissible_content.DismissibleContent.BLOONS_TD_BATTLES_ACCOUNT_LINK_UPSELL;
    if (tmp60) {
      let tmp61 = null != tmp34;
      if (tmp61) {
        let tmp62 = !fetched;
        if (fetched) {
          tmp62 = null != token;
        }
        tmp61 = !tmp62;
      }
      tmp60 = tmp61;
    }
    const obj34 = { isEligible: tmp60, actionSheetProperties: {} };
    obj6[BLOONS_TD_BATTLES_ACCOUNT_LINK_UPSELL] = obj34;
    const obj35 = { isEligible: isExpiredEligible, actionSheetProperties: {} };
    obj6[dismissible_content.DismissibleContent.HEXAGON_CAMPAIGN_PERKS_EXPIRED_PROMO_SHEET] = obj35;
    const obj36 = { isEligible: isExpiringSoonEligible, actionSheetProperties: {} };
    obj6[dismissible_content.DismissibleContent.HEXAGON_CAMPAIGN_PERKS_EXPIRING_PROMO_SHEET] = obj36;
    let str;
    const obj37 = { isEligible: null != tmp30, cooldownConfig, actionSheetProperties: obj38 };
    const LAUNCH_ACCOUNT_LINKING_CAMPAIGN_ACTION_SHEET = dismissible_content.DismissibleContent.LAUNCH_ACCOUNT_LINKING_CAMPAIGN_ACTION_SHEET;
    if (tmp30 != null) {
      str = tmp30.campaignId;
    }
    if (str == null) {
      str = "";
    }
    obj38 = { campaignId: str, applicationId: str2, orbCount: num2, endAtUnixS: num3 };
    str2 = undefined;
    if (tmp30 != null) {
      str2 = tmp30.applicationId;
    }
    if (str2 == null) {
      str2 = "";
    }
    num2 = undefined;
    if (tmp30 != null) {
      num2 = tmp30.orbCount;
    }
    if (num2 == null) {
      num2 = 0;
    }
    num3 = undefined;
    if (tmp30 != null) {
      num3 = tmp30.endAtUnixS;
    }
    if (num3 == null) {
      num3 = 0;
    }
    obj6[LAUNCH_ACCOUNT_LINKING_CAMPAIGN_ACTION_SHEET] = obj37;
    tmp36 = obj6;
  } else {
    tmp36 = obj6;
  }
  return tmp36;
}
