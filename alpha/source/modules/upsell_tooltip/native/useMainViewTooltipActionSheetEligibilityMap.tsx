// Module ID: 18998
// Function ID: 18999
// Name: useMainViewTooltipActionSheetEligibilityMap
// Dependencies: [32, 1247, 7625, 18972, 9606, 1232, 4852, 1386, 1082, 504, 18999, 1623, 8520, 19000, 8516, 7620, 19001, 15264, 10589, 10588, 10596, 5039, 4842, 19002, 19003, 18970, 13681, 2]
// Exports: useMainViewTooltipActionSheetMap

// Module 18998 (useMainViewTooltipActionSheetEligibilityMap)
import get_initialized from "get initialized" /* 504 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1082 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1623 */;
import dismissible_content from "dismissible_content" /* 4842 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 5039 */;
import usePremiumTrialOffer from "usePremiumTrialOffer" /* 7620 */;
import useIsEligibleSenderForReferralProgram from "useIsEligibleSenderForReferralProgram" /* 8516 */;
import usePremiumDiscountOffer from "usePremiumDiscountOffer" /* 8520 */;
import MarketingComponentType from "MarketingComponentType" /* 10589 */;
import GiftingBadgesUtils from "GiftingBadgesUtils" /* 10596 */;
import CustomTypingIndicatorExperiment from "CustomTypingIndicatorExperiment" /* 13681 */;
import usePromotionMarketingComponent from "usePromotionMarketingComponent" /* 15264 */;
import RobloxConnectionCoachmark from "RobloxConnectionCoachmark" /* 18970 */;
import MainViewTooltipActionSheetsDisabledExperimentDefault from "MainViewTooltipActionSheetsDisabledExperiment" /* 18999 */;
import RecurringReferralReminderExperiment2 from "RecurringReferralReminderExperiment" /* 19000 */;
import useNitroFileUploadMarketingEligible from "useNitroFileUploadMarketingEligible" /* 19003 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1247 */;
import ReferralTrialStore from "ReferralTrialStore" /* 7625 */;
import GooglePlayPriceChangeStore from "GooglePlayPriceChangeStore" /* 18972 */;
import PromotionsStore from "PromotionsStore" /* 9606 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1232 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 4852 */;
import PremiumConstants from "PremiumConstants" /* 1386 */;
import size from "module_2" /* 2 */;

let PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID;
let PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID;
let PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID;
let PREMIUM_TIER_2_REACTIVATION_TRIAL_ID;
let tmp4;
const useGiftingPromotionAssetsReadyDefault = tmp4(19002);
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
  let tmp34;
  let tmp8;
  let tmp9;
  const f116205 = () => {
    const items = [, ];
    ({ shouldShowGooglePlayPriceChange: arr[0], priceChangeRecord: arr[1] } = GooglePlayPriceChangeStore);
    return items;
  };
  const f116207 = () => {
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
  const tmpResult18 = get_initialized;
  [tmp8, tmp9] = tmpResult18.useStateFromStoresArray(items2, f116205);
  _slicedToArray(tmpResult18.useStateFromStoresArray(items2, f116205), 2);
  const tmpResult19 = usePremiumDiscountOffer;
  const premiumDiscountOffer = tmpResult19.usePremiumDiscountOffer();
  const items3 = [ApexExperimentStore];
  const tmpResult20 = get_initialized;
  let stateFromStores2 = tmpResult20.useStateFromStores(items3, () => {
    const RecurringReferralReminderExperiment = RecurringReferralReminderExperiment2.RecurringReferralReminderExperiment;
    const obj = { location: _location };
    return RecurringReferralReminderExperiment.getConfig(obj, { autoTrackExposure: false }).bottomSheetEnabled;
  });
  const tmpResult21 = useIsEligibleSenderForReferralProgram;
  const isEligibleSenderForReferralProgram = tmpResult21.useIsEligibleSenderForReferralProgram(!stateFromStores2);
  const items4 = [ReferralTrialStore];
  const tmpResult22 = get_initialized;
  [tmp14, tmp15] = tmpResult22.useStateFromStoresArray(items4, f116207);
  _slicedToArray(tmpResult22.useStateFromStoresArray(items4, f116207), 2);
  const tmpResult23 = usePremiumTrialOffer;
  const premiumTrialOffer = tmpResult23.usePremiumTrialOffer();
  const PremiumTrialOfferActionSheetKillSwitchExperiment = tmp(19001).PremiumTrialOfferActionSheetKillSwitchExperiment;
  const enabled = PremiumTrialOfferActionSheetKillSwitchExperiment.useConfig({ location: tmp5 }).enabled;
  const tmpResult24 = usePromotionMarketingComponent;
  const promotionMarketingComponent = tmpResult24.usePromotionMarketingComponent(tmp(10589).MarketingComponentType.MOBILE_BOTTOM_SHEET);
  let oneofKind;
  if (promotionMarketingComponent != null) {
    oneofKind = promotionMarketingComponent.properties.properties.oneofKind;
  }
  let mobileBottomSheet = null;
  if ("mobileBottomSheet" === oneofKind) {
    mobileBottomSheet = promotionMarketingComponent.properties.properties.mobileBottomSheet;
  }
  const items5 = [PromotionsStore];
  const tmpResult25 = get_initialized;
  const stateFromStores3 = tmpResult25.useStateFromStores(items5, () => {
    const giftPromotion = PromotionsStore.getGiftPromotion();
    let id;
    if (giftPromotion != null) {
      id = giftPromotion.id;
    }
    return id;
  });
  const items6 = [PromotionsStore];
  const tmpResult26 = get_initialized;
  const stateFromStores4 = tmpResult26.useStateFromStores(items6, () => {
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
  const tmpResult27 = get_initialized;
  const stateFromStores5 = tmpResult27.useStateFromStores(items7, () => {
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
  const GiftPromotionReminderExperiment = tmp(10588).GiftPromotionReminderExperiment;
  let enabled2 = GiftPromotionReminderExperiment.useConfig({ location: tmp5 }).enabled;
  const tmpResult28 = GiftingBadgesUtils;
  const giftingBadgeCoachmarkVariant = tmpResult28.useGiftingBadgeCoachmarkVariant({ platform: "native", location: tmp5 });
  let isDismissed = null != stateFromStores3;
  if (isDismissed) {
    const tmpResult29 = DismissibleContentUnsafeUtils;
    isDismissed = tmpResult29.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(tmp(4842).DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET, stateFromStores3).isDismissed;
  }
  let isDismissed2 = null != stateFromStores3;
  if (isDismissed2) {
    const tmpResult30 = DismissibleContentUnsafeUtils;
    isDismissed2 = tmpResult30.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(tmp(4842).DismissibleContent.GIFTING_PROMOTION_REMINDER, stateFromStores3).isDismissed;
  }
  let tmp25 = null;
  const tmp4Result = useGiftingPromotionAssetsReadyDefault;
  if (!isDismissed) {
    tmp25 = stateFromStores4;
  }
  let tmp26 = null;
  if (!isDismissed2) {
    tmp26 = stateFromStores5;
  }
  ({ isGiftCoachmarkAssetReady, isGiftReminderAssetReady } = tmp4Result(tmp25, tmp26));
  tmp4Result(tmp25, tmp26);
  const tmpResult31 = useNitroFileUploadMarketingEligible;
  const nitroFileUploadAnnouncementEligible = tmpResult31.useNitroFileUploadAnnouncementEligible(tmp5);
  const tmpResult32 = useNitroFileUploadMarketingEligible;
  const nitroFileUploadUpsellEligible = tmpResult32.useNitroFileUploadUpsellEligible(tmp5);
  const tmpResult33 = RobloxConnectionCoachmark;
  const shouldShowRobloxConnectionCoachmark = tmpResult33.useShouldShowRobloxConnectionCoachmark();
  CustomTypingIndicatorExperiment;
  const obj5 = {};
  if (stateFromStores) {
    const GOOGLE_PLAY_PRICE_CHANGE_ACTION_SHEET = tmp(4842).DismissibleContent.GOOGLE_PLAY_PRICE_CHANGE_ACTION_SHEET;
    const obj6 = { isEligible: tmp8, newSnowflakeId: priceChangeId, actionSheetProperties: {} };
    priceChangeId = undefined;
    if (tmp9 != null) {
      priceChangeId = tmp9.priceChangeId;
    }
    obj5[GOOGLE_PLAY_PRICE_CHANGE_ACTION_SHEET] = obj6;
    let tmp36 = null != premiumDiscountOffer;
    const DISCOUNT_OFFER_ACTION_SHEET = tmp(4842).DismissibleContent.DISCOUNT_OFFER_ACTION_SHEET;
    if (tmp36) {
      tmp36 = null == premiumDiscountOffer.expiresAt;
    }
    const obj7 = { isEligible: tmp36, newSnowflakeId: id, actionSheetProperties: obj9 };
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
    const MOBILE_PREMIUM_TRIAL_OFFER_ACTION_SHEET = tmp(4842).DismissibleContent.MOBILE_PREMIUM_TRIAL_OFFER_ACTION_SHEET;
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
    let dismissibleContent;
    const PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL = tmp(4842).DismissibleContent.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL;
    if (mobileBottomSheet != null) {
      dismissibleContent = mobileBottomSheet.dismissibleContent;
    }
    const obj13 = { isEligible: dismissibleContent === dismissible_content.DismissibleContent.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, newSnowflakeId: promotionId, actionSheetProperties: obj14 };
    promotionId = undefined;
    if (promotionMarketingComponent != null) {
      promotionId = promotionMarketingComponent.promotionId;
    }
    obj14 = { bottomSheetData: mobileBottomSheet, componentId: id2, promotionId: promotionId1 };
    id2 = undefined;
    if (promotionMarketingComponent != null) {
      id2 = promotionMarketingComponent.id;
    }
    promotionId1 = undefined;
    if (promotionMarketingComponent != null) {
      promotionId1 = promotionMarketingComponent.promotionId;
    }
    obj5[PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL] = obj13;
    let dismissibleContent1;
    const PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL = tmp(4842).DismissibleContent.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL;
    if (mobileBottomSheet != null) {
      dismissibleContent1 = mobileBottomSheet.dismissibleContent;
    }
    const obj15 = { isEligible: dismissibleContent1 === dismissible_content.DismissibleContent.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL, newSnowflakeId: promotionId2, actionSheetProperties: obj16 };
    promotionId2 = undefined;
    if (promotionMarketingComponent != null) {
      promotionId2 = promotionMarketingComponent.promotionId;
    }
    obj16 = { bottomSheetData: mobileBottomSheet, componentId: id3, promotionId: promotionId3 };
    id3 = undefined;
    if (promotionMarketingComponent != null) {
      id3 = promotionMarketingComponent.id;
    }
    promotionId3 = undefined;
    if (promotionMarketingComponent != null) {
      promotionId3 = promotionMarketingComponent.promotionId;
    }
    obj5[PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL] = obj15;
    let tmp49 = tmp33;
    const GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET = tmp(4842).DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET;
    if (null != stateFromStores4) {
      tmp49 = isGiftCoachmarkAssetReady;
    }
    const obj17 = { isEligible: tmp49, newSnowflakeId: stateFromStores3, actionSheetProperties: obj18 };
    obj18 = { coachmarkComponent: stateFromStores4 };
    obj5[GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET] = obj17;
    let tmp50 = !tmp33;
    const GIFTING_PROMOTION_REMINDER = tmp(4842).DismissibleContent.GIFTING_PROMOTION_REMINDER;
    if (null != stateFromStores4) {
      tmp50 = null == stateFromStores5;
    }
    let tmp51 = !tmp50;
    if (tmp51) {
      let tmp52 = null != stateFromStores3;
      if (tmp52) {
        let tmp53 = isDismissed;
        if (tmp53) {
          if (enabled2) {
            enabled2 = null != stateFromStores5;
          }
          if (enabled2) {
            enabled2 = isGiftReminderAssetReady;
          }
          tmp53 = enabled2;
        }
        tmp52 = tmp53;
      }
      tmp51 = tmp52;
    }
    const obj19 = { isEligible: tmp51, newSnowflakeId: stateFromStores3, actionSheetProperties: obj20 };
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
    const obj29 = { isEligible: tmp32, actionSheetProperties: {} };
    obj5[dismissible_content.DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_COACHMARK] = obj29;
    const MOBILE_REFERRAL_PROGRAM_BOTTOM_SHEET_ENTRYPOINT = tmp(4842).DismissibleContent.MOBILE_REFERRAL_PROGRAM_BOTTOM_SHEET_ENTRYPOINT;
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
    tmp34 = obj5;
  } else {
    tmp34 = obj5;
  }
  return tmp34;
}
