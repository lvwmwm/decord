// Module ID: 19461
// Function ID: 19462
// Name: useMainViewTooltipActionSheetEligibilityMap
// Dependencies: [32, 1246, 7741, 19433, 9747, 1231, 5013, 1387, 1082, 504, 19462, 1624, 8632, 19463, 8628, 7736, 19464, 15617, 10762, 19465, 10761, 10768, 5202, 5003, 19466, 19467, 19431, 13996, 17705, 19468, 2]
// Exports: useMainViewTooltipActionSheetMap

// Module 19461 (useMainViewTooltipActionSheetEligibilityMap)
import get_initialized from "get initialized" /* 504 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1082 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1624 */;
import dismissible_content from "dismissible_content" /* 5003 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 5202 */;
import usePremiumTrialOffer from "usePremiumTrialOffer" /* 7736 */;
import useIsEligibleSenderForReferralProgram from "useIsEligibleSenderForReferralProgram" /* 8628 */;
import usePremiumDiscountOffer from "usePremiumDiscountOffer" /* 8632 */;
import MarketingComponentType from "MarketingComponentType" /* 10762 */;
import GiftingBadgesUtils from "GiftingBadgesUtils" /* 10768 */;
import CustomTypingIndicatorExperiment from "CustomTypingIndicatorExperiment" /* 13996 */;
import usePromotionMarketingComponent from "usePromotionMarketingComponent" /* 15617 */;
import CustomTypingIndicatorNewPresetsExperiment from "CustomTypingIndicatorNewPresetsExperiment" /* 17705 */;
import RobloxConnectionCoachmark from "RobloxConnectionCoachmark" /* 19431 */;
import MainViewTooltipActionSheetsDisabledExperimentDefault from "MainViewTooltipActionSheetsDisabledExperiment" /* 19462 */;
import RecurringReferralReminderExperiment2 from "RecurringReferralReminderExperiment" /* 19463 */;
import MobileBottomSheetCopy from "MobileBottomSheetCopy" /* 19465 */;
import useNitroFileUploadMarketingEligible from "useNitroFileUploadMarketingEligible" /* 19467 */;
import useHexagonCampaignExpirySheetEligibility from "useHexagonCampaignExpirySheetEligibility" /* 19468 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1246 */;
import ReferralTrialStore from "ReferralTrialStore" /* 7741 */;
import GooglePlayPriceChangeStore from "GooglePlayPriceChangeStore" /* 19433 */;
import PromotionsStore from "PromotionsStore" /* 9747 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 5013 */;
import PremiumConstants from "PremiumConstants" /* 1387 */;
import size from "module_2" /* 2 */;

let PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID;
let PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID;
let PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID;
let PREMIUM_TIER_2_REACTIVATION_TRIAL_ID;
let tmp4;
const useGiftingPromotionAssetsReadyDefault = tmp4(19466);
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
  let obj30;
  let obj9;
  let priceChangeId;
  let promotionId;
  let promotionId1;
  let promotionId2;
  let promotionId3;
  let tmp14;
  let tmp15;
  let tmp36;
  let tmp8;
  let tmp9;
  const f118564 = () => {
    const items = [, ];
    ({ shouldShowGooglePlayPriceChange: arr[0], priceChangeRecord: arr[1] } = GooglePlayPriceChangeStore);
    return items;
  };
  const f118566 = () => {
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
  const tmpResult21 = get_initialized;
  [tmp8, tmp9] = tmpResult21.useStateFromStoresArray(items2, f118564);
  _slicedToArray(tmpResult21.useStateFromStoresArray(items2, f118564), 2);
  const tmpResult22 = usePremiumDiscountOffer;
  const premiumDiscountOffer = tmpResult22.usePremiumDiscountOffer();
  const items3 = [ApexExperimentStore];
  const tmpResult23 = get_initialized;
  let stateFromStores2 = tmpResult23.useStateFromStores(items3, () => {
    const RecurringReferralReminderExperiment = RecurringReferralReminderExperiment2.RecurringReferralReminderExperiment;
    const obj = { location: _location };
    return RecurringReferralReminderExperiment.getConfig(obj, { autoTrackExposure: false }).bottomSheetEnabled;
  });
  const tmpResult24 = useIsEligibleSenderForReferralProgram;
  const isEligibleSenderForReferralProgram = tmpResult24.useIsEligibleSenderForReferralProgram(!stateFromStores2);
  const items4 = [ReferralTrialStore];
  const tmpResult25 = get_initialized;
  [tmp14, tmp15] = tmpResult25.useStateFromStoresArray(items4, f118566);
  _slicedToArray(tmpResult25.useStateFromStoresArray(items4, f118566), 2);
  const tmpResult26 = usePremiumTrialOffer;
  const premiumTrialOffer = tmpResult26.usePremiumTrialOffer();
  const PremiumTrialOfferActionSheetKillSwitchExperiment = tmp(19464).PremiumTrialOfferActionSheetKillSwitchExperiment;
  const enabled = PremiumTrialOfferActionSheetKillSwitchExperiment.useConfig({ location: tmp5 }).enabled;
  const tmpResult27 = usePromotionMarketingComponent;
  const promotionMarketingComponent = tmpResult27.usePromotionMarketingComponent(tmp(10762).MarketingComponentType.MOBILE_BOTTOM_SHEET);
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
    const tmpResult28 = MobileBottomSheetCopy;
    mobileBottomSheetCopy = tmpResult28.getMobileBottomSheetCopy(promotionMarketingComponent);
  }
  const items5 = [PromotionsStore];
  const tmpResult29 = get_initialized;
  const stateFromStores3 = tmpResult29.useStateFromStores(items5, () => {
    const giftPromotion = PromotionsStore.getGiftPromotion();
    let id;
    if (giftPromotion != null) {
      id = giftPromotion.id;
    }
    return id;
  });
  const items6 = [PromotionsStore];
  const tmpResult30 = get_initialized;
  const stateFromStores4 = tmpResult30.useStateFromStores(items6, () => {
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
  const tmpResult31 = get_initialized;
  const stateFromStores5 = tmpResult31.useStateFromStores(items7, () => {
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
  const GiftPromotionReminderExperiment = tmp(10761).GiftPromotionReminderExperiment;
  let enabled2 = GiftPromotionReminderExperiment.useConfig({ location: tmp5 }).enabled;
  const tmpResult32 = GiftingBadgesUtils;
  const giftingBadgeCoachmarkVariant = tmpResult32.useGiftingBadgeCoachmarkVariant({ location: tmp5 });
  let isDismissed = null != stateFromStores3;
  if (isDismissed) {
    const tmpResult33 = DismissibleContentUnsafeUtils;
    isDismissed = tmpResult33.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(tmp(5003).DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET, stateFromStores3).isDismissed;
  }
  let isDismissed2 = null != stateFromStores3;
  if (isDismissed2) {
    const tmpResult34 = DismissibleContentUnsafeUtils;
    isDismissed2 = tmpResult34.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(tmp(5003).DismissibleContent.GIFTING_PROMOTION_REMINDER, stateFromStores3).isDismissed;
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
  const tmpResult35 = useNitroFileUploadMarketingEligible;
  const nitroFileUploadAnnouncementEligible = tmpResult35.useNitroFileUploadAnnouncementEligible(tmp5);
  const tmpResult36 = useNitroFileUploadMarketingEligible;
  const nitroFileUploadUpsellEligible = tmpResult36.useNitroFileUploadUpsellEligible(tmp5);
  const tmpResult37 = RobloxConnectionCoachmark;
  const shouldShowRobloxConnectionCoachmark = tmpResult37.useShouldShowRobloxConnectionCoachmark();
  const tmpResult38 = CustomTypingIndicatorExperiment;
  let canSet = tmpResult38.useCustomTypingIndicatorConfig(tmp5).canSet;
  const tmpResult39 = CustomTypingIndicatorNewPresetsExperiment;
  const enabled3 = tmpResult39.useCustomTypingIndicatorNewPresetsConfig(tmp5).enabled;
  const tmpResult40 = useHexagonCampaignExpirySheetEligibility;
  const hexagonCampaignExpirySheetEligibility = tmpResult40.useHexagonCampaignExpirySheetEligibility(tmp5);
  const obj5 = {};
  if (stateFromStores) {
    const GOOGLE_PLAY_PRICE_CHANGE_ACTION_SHEET = tmp(5003).DismissibleContent.GOOGLE_PLAY_PRICE_CHANGE_ACTION_SHEET;
    const obj6 = { isEligible: tmp8, newSnowflakeId: priceChangeId, actionSheetProperties: {} };
    priceChangeId = undefined;
    if (tmp9 != null) {
      priceChangeId = tmp9.priceChangeId;
    }
    obj5[GOOGLE_PLAY_PRICE_CHANGE_ACTION_SHEET] = obj6;
    let tmp38 = null != premiumDiscountOffer;
    const DISCOUNT_OFFER_ACTION_SHEET = tmp(5003).DismissibleContent.DISCOUNT_OFFER_ACTION_SHEET;
    if (tmp38) {
      tmp38 = null == premiumDiscountOffer.expiresAt;
    }
    const obj7 = { isEligible: tmp38, newSnowflakeId: id, actionSheetProperties: obj9 };
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
    const MOBILE_PREMIUM_TRIAL_OFFER_ACTION_SHEET = tmp(5003).DismissibleContent.MOBILE_PREMIUM_TRIAL_OFFER_ACTION_SHEET;
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
    let tmp43 = null != mobileBottomSheetCopy;
    const PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL = tmp(5003).DismissibleContent.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL;
    if (tmp43) {
      let dismissibleContent;
      if (mobileBottomSheet != null) {
        dismissibleContent = mobileBottomSheet.dismissibleContent;
      }
      tmp43 = dismissibleContent === tmp(5003).DismissibleContent.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL;
    }
    const obj13 = { isEligible: tmp43, newSnowflakeId: promotionId, actionSheetProperties: obj14 };
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
    let tmp48 = null != mobileBottomSheetCopy;
    const PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL = tmp(5003).DismissibleContent.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL;
    if (tmp48) {
      let dismissibleContent1;
      if (mobileBottomSheet != null) {
        dismissibleContent1 = mobileBottomSheet.dismissibleContent;
      }
      tmp48 = dismissibleContent1 === tmp(5003).DismissibleContent.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL;
    }
    const obj15 = { isEligible: tmp48, newSnowflakeId: promotionId2, actionSheetProperties: obj16 };
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
    let tmp53 = tmp35;
    const GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET = tmp(5003).DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET;
    if (null != stateFromStores4) {
      tmp53 = isGiftCoachmarkAssetReady;
    }
    const obj17 = { isEligible: tmp53, newSnowflakeId: stateFromStores3, actionSheetProperties: obj18 };
    obj18 = { coachmarkComponent: stateFromStores4 };
    obj5[GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET] = obj17;
    let tmp54 = !tmp35;
    const GIFTING_PROMOTION_REMINDER = tmp(5003).DismissibleContent.GIFTING_PROMOTION_REMINDER;
    if (null != stateFromStores4) {
      tmp54 = null == stateFromStores5;
    }
    let tmp55 = !tmp54;
    if (tmp55) {
      let tmp56 = null != stateFromStores3;
      if (tmp56) {
        let tmp57 = isDismissed;
        if (tmp57) {
          if (enabled2) {
            enabled2 = null != stateFromStores5;
          }
          if (enabled2) {
            enabled2 = isGiftReminderAssetReady;
          }
          tmp57 = enabled2;
        }
        tmp56 = tmp57;
      }
      tmp55 = tmp56;
    }
    const obj19 = { isEligible: tmp55, newSnowflakeId: stateFromStores3, actionSheetProperties: obj20 };
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
    const CUSTOM_TYPING_INDICATOR_MOBILE_NEW_PRESETS_ACTION_SHEET = tmp(5003).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_PRESETS_ACTION_SHEET;
    if (canSet) {
      canSet = enabled3;
    }
    const obj31 = { isEligible: canSet, actionSheetProperties: { variant: "new_presets" } };
    obj5[CUSTOM_TYPING_INDICATOR_MOBILE_NEW_PRESETS_ACTION_SHEET] = obj31;
    const MOBILE_REFERRAL_PROGRAM_BOTTOM_SHEET_ENTRYPOINT = tmp(5003).DismissibleContent.MOBILE_REFERRAL_PROGRAM_BOTTOM_SHEET_ENTRYPOINT;
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
    const obj33 = { isEligible: tmp34, actionSheetProperties: {} };
    obj5[dismissible_content.DismissibleContent.HEXAGON_CAMPAIGN_PERKS_EXPIRED_PROMO_SHEET] = obj33;
    const obj34 = { isEligible: tmp33, actionSheetProperties: {} };
    obj5[dismissible_content.DismissibleContent.HEXAGON_CAMPAIGN_PERKS_EXPIRING_PROMO_SHEET] = obj34;
    tmp36 = obj5;
  } else {
    tmp36 = obj5;
  }
  return tmp36;
}
