// Module ID: 19643
// Function ID: 19644
// Name: useMainViewTooltipActionSheetEligibilityMap
// Dependencies: [32, 1246, 9227, 19618, 9557, 1231, 5086, 1387, 1082, 504, 19644, 1624, 9247, 19645, 9241, 9244, 19646, 9944, 9561, 18237, 11611, 11617, 5285, 5076, 19647, 19648, 19616, 14469, 17863, 2]
// Exports: useMainViewTooltipActionSheetMap

// Module 19643 (useMainViewTooltipActionSheetEligibilityMap)
import get_initialized from "get initialized" /* 504 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1082 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1624 */;
import dismissible_content from "dismissible_content" /* 5076 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 5285 */;
import useIsEligibleSenderForReferralProgram from "useIsEligibleSenderForReferralProgram" /* 9241 */;
import usePremiumTrialOffer from "usePremiumTrialOffer" /* 9244 */;
import usePremiumDiscountOffer from "usePremiumDiscountOffer" /* 9247 */;
import MarketingSurfaceType from "MarketingSurfaceType" /* 9561 */;
import usePromotionMarketingSurface from "usePromotionMarketingSurface" /* 9944 */;
import GiftingBadgesUtils from "GiftingBadgesUtils" /* 11617 */;
import CustomTypingIndicatorExperiment from "CustomTypingIndicatorExperiment" /* 14469 */;
import CustomTypingIndicatorNewPresetsExperiment from "CustomTypingIndicatorNewPresetsExperiment" /* 17863 */;
import MobileBottomSheetCopy from "MobileBottomSheetCopy" /* 18237 */;
import RobloxConnectionCoachmark from "RobloxConnectionCoachmark" /* 19616 */;
import MainViewTooltipActionSheetsDisabledExperimentDefault from "MainViewTooltipActionSheetsDisabledExperiment" /* 19644 */;
import RecurringReferralReminderExperiment2 from "RecurringReferralReminderExperiment" /* 19645 */;
import useNitroFileUploadMarketingEligible from "useNitroFileUploadMarketingEligible" /* 19648 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1246 */;
import ReferralTrialStore from "ReferralTrialStore" /* 9227 */;
import GooglePlayPriceChangeStore from "GooglePlayPriceChangeStore" /* 19618 */;
import PromotionsStore from "PromotionsStore" /* 9557 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 5086 */;
import PremiumConstants from "PremiumConstants" /* 1387 */;
import size from "module_2" /* 2 */;

let PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID;
let PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID;
let PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID;
let PREMIUM_TIER_2_REACTIVATION_TRIAL_ID;
let tmp4;
const useGiftingPromotionAssetsReadyDefault = tmp4(19647);
({ PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID, PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID, PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID, PREMIUM_TIER_2_REACTIVATION_TRIAL_ID } = PremiumConstants);
const UserSettingsTypes = UserSettingsConstants.UserSettingsTypes;
const MainViewTooltipActionSheets = "MainViewTooltipActionSheets";
let items = [PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID, PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID, PREMIUM_TIER_2_REACTIVATION_TRIAL_ID, PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID];
const set = new Set(items);
const result = size.fileFinishedImporting("modules/upsell_tooltip/native/useMainViewTooltipActionSheetEligibilityMap.tsx");

export function useMainViewTooltipActionSheetMap() {
  let _location;
  let componentType;
  let componentType1;
  let id;
  let id1;
  let id2;
  let id3;
  let isGiftCoachmarkAssetReady;
  let isGiftReminderAssetReady;
  let obj12;
  let obj14;
  let obj16;
  let obj18;
  let obj20;
  let obj22;
  let obj30;
  let obj9;
  let priceChangeId;
  let promotionId;
  let promotionId1;
  let promotionId2;
  let promotionId3;
  let surface;
  let tmp14;
  let tmp15;
  let tmp31;
  let tmp8;
  let tmp9;
  const f119834 = () => {
    const items = [, ];
    ({ shouldShowGooglePlayPriceChange: arr[0], priceChangeRecord: arr[1] } = GooglePlayPriceChangeStore);
    return items;
  };
  const f119836 = () => {
    const items = [ReferralTrialStore.getReferralsRemaining({ bypassFetch: true }), ReferralTrialStore.getRecurringReminderStateId()];
    return items;
  };
  let obj = get_initialized;
  let items = [UserSettingsProtoStore];
  let stateFromStores = obj.useStateFromStores(items, () => UserSettingsProtoStore.hasLoaded(constants.PRELOADED_USER_SETTINGS));
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
  const tmpResult20 = get_initialized;
  [tmp8, tmp9] = tmpResult20.useStateFromStoresArray(items2, f119834);
  _slicedToArray(tmpResult20.useStateFromStoresArray(items2, f119834), 2);
  const tmpResult21 = usePremiumDiscountOffer;
  const premiumDiscountOffer = tmpResult21.usePremiumDiscountOffer();
  const items3 = [ApexExperimentStore];
  const tmpResult22 = get_initialized;
  let stateFromStores2 = tmpResult22.useStateFromStores(items3, () => {
    const RecurringReferralReminderExperiment = RecurringReferralReminderExperiment2.RecurringReferralReminderExperiment;
    const obj = { location: _location };
    return RecurringReferralReminderExperiment.getConfig(obj, { autoTrackExposure: false }).bottomSheetEnabled;
  });
  const tmpResult23 = useIsEligibleSenderForReferralProgram;
  const isEligibleSenderForReferralProgram = tmpResult23.useIsEligibleSenderForReferralProgram(!stateFromStores2);
  const items4 = [ReferralTrialStore];
  const tmpResult24 = get_initialized;
  [tmp14, tmp15] = tmpResult24.useStateFromStoresArray(items4, f119836);
  _slicedToArray(tmpResult24.useStateFromStoresArray(items4, f119836), 2);
  const tmpResult25 = usePremiumTrialOffer;
  const premiumTrialOffer = tmpResult25.usePremiumTrialOffer();
  const PremiumTrialOfferActionSheetKillSwitchExperiment = tmp(19646).PremiumTrialOfferActionSheetKillSwitchExperiment;
  const enabled = PremiumTrialOfferActionSheetKillSwitchExperiment.useConfig({ location: tmp5 }).enabled;
  const tmpResult26 = usePromotionMarketingSurface;
  const promotionMarketingSurface = tmpResult26.usePromotionMarketingSurface(tmp(9561).MarketingSurfaceType.MOBILE_BOTTOM_SHEET);
  if (promotionMarketingSurface != null) {
    surface = promotionMarketingSurface.surface;
  }
  let mobileBottomSheetCopy = null;
  if (null != promotionMarketingSurface) {
    const tmpResult27 = MobileBottomSheetCopy;
    mobileBottomSheetCopy = tmpResult27.getMobileBottomSheetCopy(promotionMarketingSurface);
  }
  const items5 = [PromotionsStore];
  const tmpResult28 = get_initialized;
  const stateFromStores3 = tmpResult28.useStateFromStores(items5, () => {
    const giftPromotion = PromotionsStore.getGiftPromotion();
    let id;
    if (giftPromotion != null) {
      id = giftPromotion.id;
    }
    return id;
  });
  const items6 = [PromotionsStore];
  const tmpResult29 = get_initialized;
  const stateFromStores4 = tmpResult29.useStateFromStores(items6, () => {
    const marketingComponentBySurface = PromotionsStore.getMarketingComponentBySurface(MarketingSurfaceType.MarketingSurfaceType.GIFT_ICON_COACHMARK);
    let surface = null;
    if (null != marketingComponentBySurface) {
      surface = marketingComponentBySurface.surface;
    }
    return surface;
  });
  const items7 = [PromotionsStore];
  const tmpResult30 = get_initialized;
  const stateFromStores5 = tmpResult30.useStateFromStores(items7, () => {
    const marketingComponentBySurface = PromotionsStore.getMarketingComponentBySurface(MarketingSurfaceType.MarketingSurfaceType.GIFT_REMINDER_COACHMARK);
    let surface = null;
    if (null != marketingComponentBySurface) {
      surface = marketingComponentBySurface.surface;
    }
    return surface;
  });
  const GiftPromotionReminderExperiment = tmp(11611).GiftPromotionReminderExperiment;
  let enabled2 = GiftPromotionReminderExperiment.useConfig({ location: tmp5 }).enabled;
  const tmpResult31 = GiftingBadgesUtils;
  const giftingBadgeCoachmarkVariant = tmpResult31.useGiftingBadgeCoachmarkVariant({ location: tmp5 });
  let isDismissed = null != stateFromStores3;
  if (isDismissed) {
    const tmpResult32 = DismissibleContentUnsafeUtils;
    isDismissed = tmpResult32.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(tmp(5076).DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET, stateFromStores3).isDismissed;
  }
  let isDismissed2 = null != stateFromStores3;
  if (isDismissed2) {
    const tmpResult33 = DismissibleContentUnsafeUtils;
    isDismissed2 = tmpResult33.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(tmp(5076).DismissibleContent.GIFTING_PROMOTION_REMINDER, stateFromStores3).isDismissed;
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
  const tmpResult34 = useNitroFileUploadMarketingEligible;
  const nitroFileUploadAnnouncementEligible = tmpResult34.useNitroFileUploadAnnouncementEligible(tmp5);
  const tmpResult35 = useNitroFileUploadMarketingEligible;
  const nitroFileUploadUpsellEligible = tmpResult35.useNitroFileUploadUpsellEligible(tmp5);
  const tmpResult36 = RobloxConnectionCoachmark;
  const shouldShowRobloxConnectionCoachmark = tmpResult36.useShouldShowRobloxConnectionCoachmark();
  const tmpResult37 = CustomTypingIndicatorExperiment;
  let canSet = tmpResult37.useCustomTypingIndicatorConfig(tmp5).canSet;
  const tmpResult38 = CustomTypingIndicatorNewPresetsExperiment;
  const enabled3 = tmpResult38.useCustomTypingIndicatorNewPresetsConfig(tmp5).enabled;
  const obj5 = {};
  if (stateFromStores) {
    const GOOGLE_PLAY_PRICE_CHANGE_ACTION_SHEET = tmp(5076).DismissibleContent.GOOGLE_PLAY_PRICE_CHANGE_ACTION_SHEET;
    const obj6 = { isEligible: tmp8, newSnowflakeId: priceChangeId, actionSheetProperties: {} };
    priceChangeId = undefined;
    if (tmp9 != null) {
      priceChangeId = tmp9.priceChangeId;
    }
    obj5[GOOGLE_PLAY_PRICE_CHANGE_ACTION_SHEET] = obj6;
    let tmp33 = null != premiumDiscountOffer;
    const DISCOUNT_OFFER_ACTION_SHEET = tmp(5076).DismissibleContent.DISCOUNT_OFFER_ACTION_SHEET;
    if (tmp33) {
      tmp33 = null == premiumDiscountOffer.expiresAt;
    }
    const obj7 = { isEligible: tmp33, newSnowflakeId: id, actionSheetProperties: obj9 };
    id = undefined;
    if (premiumDiscountOffer != null) {
      id = premiumDiscountOffer.id;
    }
    if (null != premiumDiscountOffer) {
      obj9 = { userDiscountOffer: premiumDiscountOffer };
      const obj8 = { userDiscountOffer: premiumDiscountOffer };
    } else {
      obj9 = {};
    }
    obj5[DISCOUNT_OFFER_ACTION_SHEET] = obj7;
    let hasItem = null != premiumTrialOffer;
    const MOBILE_PREMIUM_TRIAL_OFFER_ACTION_SHEET = tmp(5076).DismissibleContent.MOBILE_PREMIUM_TRIAL_OFFER_ACTION_SHEET;
    if (hasItem) {
      hasItem = null == premiumTrialOffer.expiresAt;
    }
    if (hasItem) {
      hasItem = !enabled;
    }
    if (hasItem) {
      hasItem = set.has(premiumTrialOffer.trialId);
    }
    const obj10 = { isEligible: hasItem, newSnowflakeId: id1, actionSheetProperties: obj12 };
    id1 = undefined;
    if (premiumTrialOffer != null) {
      id1 = premiumTrialOffer.id;
    }
    if (null != premiumTrialOffer) {
      obj12 = { userTrialOffer: premiumTrialOffer };
      const obj11 = { userTrialOffer: premiumTrialOffer };
    } else {
      obj12 = {};
    }
    obj5[MOBILE_PREMIUM_TRIAL_OFFER_ACTION_SHEET] = obj10;
    let tmp38 = null != mobileBottomSheetCopy;
    const PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL = tmp(5076).DismissibleContent.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL;
    if (tmp38) {
      let dismissibleContent;
      if (surface != null) {
        dismissibleContent = surface.dismissibleContent;
      }
      tmp38 = dismissibleContent === tmp(5076).DismissibleContent.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL;
    }
    const obj13 = { isEligible: tmp38, newSnowflakeId: promotionId, actionSheetProperties: obj14 };
    promotionId = undefined;
    if (promotionMarketingSurface != null) {
      promotionId = promotionMarketingSurface.promotionId;
    }
    obj14 = { bottomSheetData: surface, copy: mobileBottomSheetCopy, componentId: id2, componentType, promotionId: promotionId1 };
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
    obj5[PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL] = obj13;
    let tmp44 = null != mobileBottomSheetCopy;
    const PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL = tmp(5076).DismissibleContent.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL;
    if (tmp44) {
      let dismissibleContent1;
      if (surface != null) {
        dismissibleContent1 = surface.dismissibleContent;
      }
      tmp44 = dismissibleContent1 === tmp(5076).DismissibleContent.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL;
    }
    const obj15 = { isEligible: tmp44, newSnowflakeId: promotionId2, actionSheetProperties: obj16 };
    promotionId2 = undefined;
    if (promotionMarketingSurface != null) {
      promotionId2 = promotionMarketingSurface.promotionId;
    }
    obj16 = { bottomSheetData: surface, copy: mobileBottomSheetCopy, componentId: id3, componentType: componentType1, promotionId: promotionId3 };
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
    obj5[PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL] = obj15;
    let tmp50 = tmp30;
    const GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET = tmp(5076).DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET;
    if (null != stateFromStores4) {
      tmp50 = isGiftCoachmarkAssetReady;
    }
    const obj17 = { isEligible: tmp50, newSnowflakeId: stateFromStores3, actionSheetProperties: obj18 };
    obj18 = { coachmarkComponent: stateFromStores4 };
    obj5[GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET] = obj17;
    let tmp51 = !tmp30;
    const GIFTING_PROMOTION_REMINDER = tmp(5076).DismissibleContent.GIFTING_PROMOTION_REMINDER;
    if (null != stateFromStores4) {
      tmp51 = null == stateFromStores5;
    }
    let tmp52 = !tmp51;
    if (tmp52) {
      let tmp53 = null != stateFromStores3;
      if (tmp53) {
        let tmp54 = isDismissed;
        if (tmp54) {
          if (enabled2) {
            enabled2 = null != stateFromStores5;
          }
          if (enabled2) {
            enabled2 = isGiftReminderAssetReady;
          }
          tmp54 = enabled2;
        }
        tmp53 = tmp54;
      }
      tmp52 = tmp53;
    }
    const obj19 = { isEligible: tmp52, newSnowflakeId: stateFromStores3, actionSheetProperties: obj20 };
    obj20 = { coachmarkComponent: stateFromStores5 };
    obj5[GIFTING_PROMOTION_REMINDER] = obj19;
    const obj21 = { isEligible: null != giftingBadgeCoachmarkVariant, actionSheetProperties: obj22 };
    obj22 = { variant: giftingBadgeCoachmarkVariant };
    obj5[dismissible_content.DismissibleContent.NEW_GIFTING_BADGES_COACHMARK] = obj21;
    const obj23 = { isEligible: true, actionSheetProperties: {} };
    obj5[dismissible_content.DismissibleContent.CUSTOM_APP_ICONS_COACHMARK] = obj23;
    const obj24 = { isEligible: shouldShowRobloxConnectionCoachmark, actionSheetProperties: {} };
    obj5[dismissible_content.DismissibleContent.ROBLOX_CONNECTION_COACHMARK] = obj24;
    const obj25 = { isEligible: true, actionSheetProperties: {} };
    obj5[dismissible_content.DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_COACHMARK] = obj25;
    const obj26 = { isEligible: true, actionSheetProperties: {} };
    obj5[dismissible_content.DismissibleContent.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT] = obj26;
    const obj27 = { isEligible: nitroFileUploadAnnouncementEligible, actionSheetProperties: {} };
    obj5[dismissible_content.DismissibleContent.NITRO_FILE_UPLOAD_1GB_ANNOUNCEMENT] = obj27;
    const obj28 = { isEligible: nitroFileUploadUpsellEligible, actionSheetProperties: {} };
    obj5[dismissible_content.DismissibleContent.NITRO_FILE_UPLOAD_1GB_UPSELL] = obj28;
    const obj29 = { isEligible: canSet, actionSheetProperties: obj30 };
    obj30 = { dismissNewPresetsSheet: enabled3 };
    obj5[dismissible_content.DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_COACHMARK] = obj29;
    const CUSTOM_TYPING_INDICATOR_MOBILE_NEW_PRESETS_ACTION_SHEET = tmp(5076).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_PRESETS_ACTION_SHEET;
    if (canSet) {
      canSet = enabled3;
    }
    const obj31 = { isEligible: canSet, actionSheetProperties: { variant: "new_presets" } };
    obj5[CUSTOM_TYPING_INDICATOR_MOBILE_NEW_PRESETS_ACTION_SHEET] = obj31;
    const MOBILE_REFERRAL_PROGRAM_BOTTOM_SHEET_ENTRYPOINT = tmp(5076).DismissibleContent.MOBILE_REFERRAL_PROGRAM_BOTTOM_SHEET_ENTRYPOINT;
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
    const obj32 = { isEligible: stateFromStores2, newSnowflakeId: tmp15, actionSheetProperties: {} };
    obj5[MOBILE_REFERRAL_PROGRAM_BOTTOM_SHEET_ENTRYPOINT] = obj32;
    tmp31 = obj5;
  } else {
    tmp31 = obj5;
  }
  return tmp31;
}
