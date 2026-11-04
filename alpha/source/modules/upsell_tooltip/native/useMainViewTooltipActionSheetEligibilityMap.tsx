// Module ID: 19329
// Function ID: 19330
// Name: useMainViewTooltipActionSheetEligibilityMap
// Dependencies: [32, 1246, 7772, 19303, 9776, 1231, 4984, 1387, 1082, 504, 19330, 1624, 8669, 19331, 8665, 7767, 19332, 15536, 10788, 19333, 10787, 10795, 5171, 4974, 19334, 19335, 19301, 13949, 2]
// Exports: useMainViewTooltipActionSheetMap

// Module 19329 (useMainViewTooltipActionSheetEligibilityMap)
import get_initialized from "get initialized" /* 504 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1082 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1624 */;
import dismissible_content from "dismissible_content" /* 4974 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 5171 */;
import usePremiumTrialOffer from "usePremiumTrialOffer" /* 7767 */;
import useIsEligibleSenderForReferralProgram from "useIsEligibleSenderForReferralProgram" /* 8665 */;
import usePremiumDiscountOffer from "usePremiumDiscountOffer" /* 8669 */;
import MarketingComponentType from "MarketingComponentType" /* 10788 */;
import GiftingBadgesUtils from "GiftingBadgesUtils" /* 10795 */;
import CustomTypingIndicatorExperiment from "CustomTypingIndicatorExperiment" /* 13949 */;
import usePromotionMarketingComponent from "usePromotionMarketingComponent" /* 15536 */;
import RobloxConnectionCoachmark from "RobloxConnectionCoachmark" /* 19301 */;
import MainViewTooltipActionSheetsDisabledExperimentDefault from "MainViewTooltipActionSheetsDisabledExperiment" /* 19330 */;
import RecurringReferralReminderExperiment2 from "RecurringReferralReminderExperiment" /* 19331 */;
import MobileBottomSheetCopy from "MobileBottomSheetCopy" /* 19333 */;
import useNitroFileUploadMarketingEligible from "useNitroFileUploadMarketingEligible" /* 19335 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1246 */;
import ReferralTrialStore from "ReferralTrialStore" /* 7772 */;
import GooglePlayPriceChangeStore from "GooglePlayPriceChangeStore" /* 19303 */;
import PromotionsStore from "PromotionsStore" /* 9776 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 4984 */;
import PremiumConstants from "PremiumConstants" /* 1387 */;
import size from "module_2" /* 2 */;

let PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID;
let PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID;
let PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID;
let PREMIUM_TIER_2_REACTIVATION_TRIAL_ID;
let tmp4;
const useGiftingPromotionAssetsReadyDefault = tmp4(19334);
({ PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID, PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID, PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID, PREMIUM_TIER_2_REACTIVATION_TRIAL_ID } = PremiumConstants);
const UserSettingsTypes = UserSettingsConstants.UserSettingsTypes;
const MainViewTooltipActionSheets = "MainViewTooltipActionSheets";
let items = [PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID, PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID, PREMIUM_TIER_2_REACTIVATION_TRIAL_ID, PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID];
const set = new Set(items);
const result = size.fileFinishedImporting("modules/upsell_tooltip/native/useMainViewTooltipActionSheetEligibilityMap.tsx");

export function useMainViewTooltipActionSheetMap() {
  let _location;
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
  let obj9;
  let priceChangeId;
  let promotionId;
  let promotionId1;
  let promotionId2;
  let promotionId3;
  let tmp14;
  let tmp15;
  let tmp35;
  let tmp8;
  let tmp9;
  const f117471 = () => {
    const items = [, ];
    ({ shouldShowGooglePlayPriceChange: arr[0], priceChangeRecord: arr[1] } = GooglePlayPriceChangeStore);
    return items;
  };
  const f117473 = () => {
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
  const tmpResult19 = get_initialized;
  [tmp8, tmp9] = tmpResult19.useStateFromStoresArray(items2, f117471);
  _slicedToArray(tmpResult19.useStateFromStoresArray(items2, f117471), 2);
  const tmpResult20 = usePremiumDiscountOffer;
  const premiumDiscountOffer = tmpResult20.usePremiumDiscountOffer();
  const items3 = [ApexExperimentStore];
  const tmpResult21 = get_initialized;
  let stateFromStores2 = tmpResult21.useStateFromStores(items3, () => {
    const RecurringReferralReminderExperiment = RecurringReferralReminderExperiment2.RecurringReferralReminderExperiment;
    const obj = { location: _location };
    return RecurringReferralReminderExperiment.getConfig(obj, { autoTrackExposure: false }).bottomSheetEnabled;
  });
  const tmpResult22 = useIsEligibleSenderForReferralProgram;
  const isEligibleSenderForReferralProgram = tmpResult22.useIsEligibleSenderForReferralProgram(!stateFromStores2);
  const items4 = [ReferralTrialStore];
  const tmpResult23 = get_initialized;
  [tmp14, tmp15] = tmpResult23.useStateFromStoresArray(items4, f117473);
  _slicedToArray(tmpResult23.useStateFromStoresArray(items4, f117473), 2);
  const tmpResult24 = usePremiumTrialOffer;
  const premiumTrialOffer = tmpResult24.usePremiumTrialOffer();
  const PremiumTrialOfferActionSheetKillSwitchExperiment = tmp(19332).PremiumTrialOfferActionSheetKillSwitchExperiment;
  const enabled = PremiumTrialOfferActionSheetKillSwitchExperiment.useConfig({ location: tmp5 }).enabled;
  const tmpResult25 = usePromotionMarketingComponent;
  const promotionMarketingComponent = tmpResult25.usePromotionMarketingComponent(tmp(10788).MarketingComponentType.MOBILE_BOTTOM_SHEET);
  let oneofKind;
  if (promotionMarketingComponent != null) {
    oneofKind = promotionMarketingComponent.properties.properties.oneofKind;
  }
  let mobileBottomSheet = null;
  if ("mobileBottomSheet" === oneofKind) {
    mobileBottomSheet = promotionMarketingComponent.properties.properties.mobileBottomSheet;
  }
  let mobileBottomSheetCopy = null;
  if (null != promotionMarketingComponent) {
    const tmpResult26 = MobileBottomSheetCopy;
    mobileBottomSheetCopy = tmpResult26.getMobileBottomSheetCopy(promotionMarketingComponent);
  }
  const items5 = [PromotionsStore];
  const tmpResult27 = get_initialized;
  const stateFromStores3 = tmpResult27.useStateFromStores(items5, () => {
    const giftPromotion = PromotionsStore.getGiftPromotion();
    let id;
    if (giftPromotion != null) {
      id = giftPromotion.id;
    }
    return id;
  });
  const items6 = [PromotionsStore];
  const tmpResult28 = get_initialized;
  const stateFromStores4 = tmpResult28.useStateFromStores(items6, () => {
    const marketingComponentByType = PromotionsStore.getMarketingComponentByType(MarketingComponentType.MarketingComponentType.GIFT_ICON_COACHMARK);
    let giftIconCoachmark = null;
    if (null != marketingComponentByType) {
      giftIconCoachmark = null;
      if ("giftIconCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
        giftIconCoachmark = marketingComponentByType.properties.properties.giftIconCoachmark;
      }
    }
    return giftIconCoachmark;
  });
  const items7 = [PromotionsStore];
  const tmpResult29 = get_initialized;
  const stateFromStores5 = tmpResult29.useStateFromStores(items7, () => {
    const marketingComponentByType = PromotionsStore.getMarketingComponentByType(MarketingComponentType.MarketingComponentType.GIFT_REMINDER_COACHMARK);
    let prop = null;
    if (null != marketingComponentByType) {
      prop = null;
      if ("giftReminderCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
        prop = marketingComponentByType.properties.properties.giftReminderCoachmark;
      }
    }
    return prop;
  });
  const GiftPromotionReminderExperiment = tmp(10787).GiftPromotionReminderExperiment;
  let enabled2 = GiftPromotionReminderExperiment.useConfig({ location: tmp5 }).enabled;
  const tmpResult30 = GiftingBadgesUtils;
  const giftingBadgeCoachmarkVariant = tmpResult30.useGiftingBadgeCoachmarkVariant({ location: tmp5 });
  let isDismissed = null != stateFromStores3;
  if (isDismissed) {
    const tmpResult31 = DismissibleContentUnsafeUtils;
    isDismissed = tmpResult31.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(tmp(4974).DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET, stateFromStores3).isDismissed;
  }
  let isDismissed2 = null != stateFromStores3;
  if (isDismissed2) {
    const tmpResult32 = DismissibleContentUnsafeUtils;
    isDismissed2 = tmpResult32.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(tmp(4974).DismissibleContent.GIFTING_PROMOTION_REMINDER, stateFromStores3).isDismissed;
  }
  let tmp26 = null;
  const tmp4Result = useGiftingPromotionAssetsReadyDefault;
  if (!isDismissed) {
    tmp26 = stateFromStores4;
  }
  let tmp27 = null;
  if (!isDismissed2) {
    tmp27 = stateFromStores5;
  }
  ({ isGiftCoachmarkAssetReady, isGiftReminderAssetReady } = tmp4Result(tmp26, tmp27));
  tmp4Result(tmp26, tmp27);
  const tmpResult33 = useNitroFileUploadMarketingEligible;
  const nitroFileUploadAnnouncementEligible = tmpResult33.useNitroFileUploadAnnouncementEligible(tmp5);
  const tmpResult34 = useNitroFileUploadMarketingEligible;
  const nitroFileUploadUpsellEligible = tmpResult34.useNitroFileUploadUpsellEligible(tmp5);
  const tmpResult35 = RobloxConnectionCoachmark;
  const shouldShowRobloxConnectionCoachmark = tmpResult35.useShouldShowRobloxConnectionCoachmark();
  CustomTypingIndicatorExperiment;
  const obj5 = {};
  if (stateFromStores) {
    const GOOGLE_PLAY_PRICE_CHANGE_ACTION_SHEET = tmp(4974).DismissibleContent.GOOGLE_PLAY_PRICE_CHANGE_ACTION_SHEET;
    const obj6 = { isEligible: tmp8, newSnowflakeId: priceChangeId, actionSheetProperties: {} };
    priceChangeId = undefined;
    if (tmp9 != null) {
      priceChangeId = tmp9.priceChangeId;
    }
    obj5[GOOGLE_PLAY_PRICE_CHANGE_ACTION_SHEET] = obj6;
    let tmp37 = null != premiumDiscountOffer;
    const DISCOUNT_OFFER_ACTION_SHEET = tmp(4974).DismissibleContent.DISCOUNT_OFFER_ACTION_SHEET;
    if (tmp37) {
      tmp37 = null == premiumDiscountOffer.expiresAt;
    }
    const obj7 = { isEligible: tmp37, newSnowflakeId: id, actionSheetProperties: obj9 };
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
    const MOBILE_PREMIUM_TRIAL_OFFER_ACTION_SHEET = tmp(4974).DismissibleContent.MOBILE_PREMIUM_TRIAL_OFFER_ACTION_SHEET;
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
    let tmp42 = null != mobileBottomSheetCopy;
    const PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL = tmp(4974).DismissibleContent.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL;
    if (tmp42) {
      let dismissibleContent;
      if (mobileBottomSheet != null) {
        dismissibleContent = mobileBottomSheet.dismissibleContent;
      }
      tmp42 = dismissibleContent === tmp(4974).DismissibleContent.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL;
    }
    const obj13 = { isEligible: tmp42, newSnowflakeId: promotionId, actionSheetProperties: obj14 };
    promotionId = undefined;
    if (promotionMarketingComponent != null) {
      promotionId = promotionMarketingComponent.promotionId;
    }
    obj14 = { bottomSheetData: mobileBottomSheet, copy: mobileBottomSheetCopy, componentId: id2, promotionId: promotionId1 };
    id2 = undefined;
    if (promotionMarketingComponent != null) {
      id2 = promotionMarketingComponent.id;
    }
    promotionId1 = undefined;
    if (promotionMarketingComponent != null) {
      promotionId1 = promotionMarketingComponent.promotionId;
    }
    obj5[PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL] = obj13;
    let tmp47 = null != mobileBottomSheetCopy;
    const PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL = tmp(4974).DismissibleContent.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL;
    if (tmp47) {
      let dismissibleContent1;
      if (mobileBottomSheet != null) {
        dismissibleContent1 = mobileBottomSheet.dismissibleContent;
      }
      tmp47 = dismissibleContent1 === tmp(4974).DismissibleContent.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL;
    }
    const obj15 = { isEligible: tmp47, newSnowflakeId: promotionId2, actionSheetProperties: obj16 };
    promotionId2 = undefined;
    if (promotionMarketingComponent != null) {
      promotionId2 = promotionMarketingComponent.promotionId;
    }
    obj16 = { bottomSheetData: mobileBottomSheet, copy: mobileBottomSheetCopy, componentId: id3, promotionId: promotionId3 };
    id3 = undefined;
    if (promotionMarketingComponent != null) {
      id3 = promotionMarketingComponent.id;
    }
    promotionId3 = undefined;
    if (promotionMarketingComponent != null) {
      promotionId3 = promotionMarketingComponent.promotionId;
    }
    obj5[PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL] = obj15;
    let tmp52 = tmp34;
    const GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET = tmp(4974).DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET;
    if (null != stateFromStores4) {
      tmp52 = isGiftCoachmarkAssetReady;
    }
    const obj17 = { isEligible: tmp52, newSnowflakeId: stateFromStores3, actionSheetProperties: obj18 };
    obj18 = { coachmarkComponent: stateFromStores4 };
    obj5[GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET] = obj17;
    let tmp53 = !tmp34;
    const GIFTING_PROMOTION_REMINDER = tmp(4974).DismissibleContent.GIFTING_PROMOTION_REMINDER;
    if (null != stateFromStores4) {
      tmp53 = null == stateFromStores5;
    }
    let tmp54 = !tmp53;
    if (tmp54) {
      let tmp55 = null != stateFromStores3;
      if (tmp55) {
        let tmp56 = isDismissed;
        if (tmp56) {
          if (enabled2) {
            enabled2 = null != stateFromStores5;
          }
          if (enabled2) {
            enabled2 = isGiftReminderAssetReady;
          }
          tmp56 = enabled2;
        }
        tmp55 = tmp56;
      }
      tmp54 = tmp55;
    }
    const obj19 = { isEligible: tmp54, newSnowflakeId: stateFromStores3, actionSheetProperties: obj20 };
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
    const obj29 = { isEligible: tmp33, actionSheetProperties: {} };
    obj5[dismissible_content.DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_COACHMARK] = obj29;
    const MOBILE_REFERRAL_PROGRAM_BOTTOM_SHEET_ENTRYPOINT = tmp(4974).DismissibleContent.MOBILE_REFERRAL_PROGRAM_BOTTOM_SHEET_ENTRYPOINT;
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
    const obj30 = { isEligible: stateFromStores2, newSnowflakeId: tmp15, actionSheetProperties: {} };
    obj5[MOBILE_REFERRAL_PROGRAM_BOTTOM_SHEET_ENTRYPOINT] = obj30;
    tmp35 = obj5;
  } else {
    tmp35 = obj5;
  }
  return tmp35;
}
