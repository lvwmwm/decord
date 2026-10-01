// Module ID: 16777
// Function ID: 16778
// Name: useMainViewTooltipActionSheetEligibilityMap
// Dependencies: [32, 16754, 10128, 1220, 2037, 1074, 1374, 1084, 504, 16778, 1610, 7504, 6867, 16779, 12959, 10203, 10202, 10208, 4654, 2029, 16780, 16783, 16752, 16764, 9189, 11449, 2]
// Exports: useMainViewTooltipActionSheetMap

// Module 16777 (useMainViewTooltipActionSheetEligibilityMap)
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1074 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1084 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1610 */;
import dismissible_content from "dismissible_content" /* 2029 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4654 */;
import usePremiumTrialOffer from "usePremiumTrialOffer" /* 6867 */;
import usePremiumDiscountOffer from "usePremiumDiscountOffer" /* 7504 */;
import DisplayNameStylesFlywheelExperiment from "DisplayNameStylesFlywheelExperiment" /* 9189 */;
import MarketingComponentType from "MarketingComponentType" /* 10203 */;
import GiftingBadgesUtils from "GiftingBadgesUtils" /* 10208 */;
import CustomTypingIndicatorExperiment from "CustomTypingIndicatorExperiment" /* 11449 */;
import usePromotionMarketingComponent from "usePromotionMarketingComponent" /* 12959 */;
import RobloxConnectionCoachmark from "RobloxConnectionCoachmark" /* 16752 */;
import ConnectionDeprecationBottomSheet from "ConnectionDeprecationBottomSheet" /* 16764 */;
import MainViewTooltipActionSheetsDisabledExperimentDefault from "MainViewTooltipActionSheetsDisabledExperiment" /* 16778 */;
import useNitroFileUploadMarketingEligible from "useNitroFileUploadMarketingEligible" /* 16783 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import GooglePlayPriceChangeStore from "GooglePlayPriceChangeStore" /* 16754 */;
import PromotionsStore from "PromotionsStore" /* 10128 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1220 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 2037 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import size from "module_2" /* 2 */;

let PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID;
let PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID;
let PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID;
let PREMIUM_TIER_2_REACTIVATION_TRIAL_ID;
let tmp4;
const useGiftingPromotionAssetsReadyDefault = tmp4(16780);
const PlatformTypes = Constants.PlatformTypes;
({ PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID, PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID, PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID, PREMIUM_TIER_2_REACTIVATION_TRIAL_ID } = PremiumConstants);
const UserSettingsTypes = UserSettingsConstants.UserSettingsTypes;
const MainViewTooltipActionSheets = "MainViewTooltipActionSheets";
let items = [PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID, PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID, PREMIUM_TIER_2_REACTIVATION_TRIAL_ID, PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID];
const set = new Set(items);
const result = size.fileFinishedImporting("modules/upsell_tooltip/native/useMainViewTooltipActionSheetEligibilityMap.tsx");

export const useMainViewTooltipActionSheetMap = function useMainViewTooltipActionSheetMap() {
  let id;
  let id1;
  let id2;
  let id3;
  let isGiftCoachmarkAssetReady;
  let isGiftReminderAssetReady;
  let items7;
  let items8;
  let obj10;
  let obj13;
  let obj15;
  let obj17;
  let obj19;
  let obj21;
  let obj23;
  let obj28;
  let obj30;
  let priceChangeId;
  let promotionId;
  let promotionId1;
  let promotionId2;
  let promotionId3;
  let tmp33;
  let tmp50;
  let tmp8;
  let tmp9;
  const f106109 = () => {
    const items = [, ];
    ({ shouldShowGooglePlayPriceChange: arr[0], priceChangeRecord: arr[1] } = GooglePlayPriceChangeStore);
    return items;
  };
  let items = [UserSettingsProtoStore];
  const obj = get_initialized;
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
  [tmp8, tmp9] = tmpResult18.useStateFromStoresArray(items2, f106109);
  _slicedToArray(tmpResult18.useStateFromStoresArray(items2, f106109), 2);
  const tmpResult19 = usePremiumDiscountOffer;
  const premiumDiscountOffer = tmpResult19.usePremiumDiscountOffer();
  const tmpResult20 = usePremiumTrialOffer;
  const premiumTrialOffer = tmpResult20.usePremiumTrialOffer();
  const PremiumTrialOfferActionSheetKillSwitchExperiment = tmp(16779).PremiumTrialOfferActionSheetKillSwitchExperiment;
  const enabled = PremiumTrialOfferActionSheetKillSwitchExperiment.useConfig({ location: tmp5 }).enabled;
  const tmpResult21 = usePromotionMarketingComponent;
  const promotionMarketingComponent = tmpResult21.usePromotionMarketingComponent(tmp(10203).MarketingComponentType.MOBILE_BOTTOM_SHEET);
  let oneofKind;
  if (promotionMarketingComponent != null) {
    oneofKind = promotionMarketingComponent.properties.properties.oneofKind;
  }
  let mobileBottomSheet = null;
  if ("mobileBottomSheet" === oneofKind) {
    mobileBottomSheet = promotionMarketingComponent.properties.properties.mobileBottomSheet;
  }
  const items3 = [PromotionsStore];
  const tmpResult22 = get_initialized;
  const stateFromStores2 = tmpResult22.useStateFromStores(items3, () => {
    const giftPromotion = PromotionsStore.getGiftPromotion();
    let id;
    if (giftPromotion != null) {
      id = giftPromotion.id;
    }
    return id;
  });
  const items4 = [PromotionsStore];
  const tmpResult23 = get_initialized;
  const stateFromStores3 = tmpResult23.useStateFromStores(items4, () => {
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
  const items5 = [PromotionsStore];
  const tmpResult24 = get_initialized;
  const stateFromStores4 = tmpResult24.useStateFromStores(items5, () => {
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
  const GiftPromotionReminderExperiment = tmp(10202).GiftPromotionReminderExperiment;
  const enabled2 = GiftPromotionReminderExperiment.useConfig({ location: tmp5 }).enabled;
  const tmpResult25 = GiftingBadgesUtils;
  const giftingBadgeCoachmarkVariant = tmpResult25.useGiftingBadgeCoachmarkVariant({ platform: "native", location: tmp5 });
  let isDismissed = null != stateFromStores2;
  if (isDismissed) {
    const tmpResult26 = DismissibleContentUnsafeUtils;
    isDismissed = tmpResult26.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(tmp(2029).DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET, stateFromStores2).isDismissed;
  }
  let isDismissed2 = null != stateFromStores2;
  if (isDismissed2) {
    const tmpResult27 = DismissibleContentUnsafeUtils;
    isDismissed2 = tmpResult27.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(tmp(2029).DismissibleContent.GIFTING_PROMOTION_REMINDER, stateFromStores2).isDismissed;
  }
  let tmp20 = null;
  const tmp4Result = useGiftingPromotionAssetsReadyDefault;
  if (!isDismissed) {
    tmp20 = stateFromStores3;
  }
  let tmp21 = null;
  if (!isDismissed2) {
    tmp21 = stateFromStores4;
  }
  ({ isGiftCoachmarkAssetReady, isGiftReminderAssetReady } = tmp4Result(tmp20, tmp21));
  tmp4Result(tmp20, tmp21);
  const tmpResult28 = useNitroFileUploadMarketingEligible;
  const nitroFileUploadAnnouncementEligible = tmpResult28.useNitroFileUploadAnnouncementEligible(tmp5);
  const tmpResult29 = useNitroFileUploadMarketingEligible;
  const nitroFileUploadUpsellEligible = tmpResult29.useNitroFileUploadUpsellEligible(tmp5);
  const items6 = [, ];
  ({ LEAGUE_OF_LEGENDS: arr7[0], RIOT_GAMES: arr7[1] } = PlatformTypes);
  const tmpResult30 = RobloxConnectionCoachmark;
  const shouldShowRobloxConnectionCoachmark = tmpResult30.useShouldShowRobloxConnectionCoachmark();
  const tmpResult31 = ConnectionDeprecationBottomSheet;
  const shouldShowConnectionDeprecationBottomSheet = tmpResult31.useShouldShowConnectionDeprecationBottomSheet({ deprecatedPlatformTypes: items6 });
  const obj5 = { deprecatedPlatformTypes: items7 };
  items7 = [PlatformTypes.BATTLENET];
  const tmpResult32 = ConnectionDeprecationBottomSheet;
  const shouldShowConnectionDeprecationBottomSheet1 = tmpResult32.useShouldShowConnectionDeprecationBottomSheet(obj5);
  const tmpResult33 = DisplayNameStylesFlywheelExperiment;
  const isDisplayNameStylesFlywheelSettersEnabled = tmpResult33.useIsDisplayNameStylesFlywheelSettersEnabled(tmp5);
  CustomTypingIndicatorExperiment;
  const obj6 = {};
  const tmp26 = PlatformTypes;
  if (stateFromStores) {
    const GOOGLE_PLAY_PRICE_CHANGE_ACTION_SHEET = tmp(2029).DismissibleContent.GOOGLE_PLAY_PRICE_CHANGE_ACTION_SHEET;
    const obj7 = { isEligible: tmp8, newSnowflakeId: priceChangeId, actionSheetProperties: {} };
    priceChangeId = undefined;
    if (tmp9 != null) {
      priceChangeId = tmp9.priceChangeId;
    }
    obj6[GOOGLE_PLAY_PRICE_CHANGE_ACTION_SHEET] = obj7;
    let tmp35 = null != premiumDiscountOffer;
    const DISCOUNT_OFFER_ACTION_SHEET = tmp(2029).DismissibleContent.DISCOUNT_OFFER_ACTION_SHEET;
    if (tmp35) {
      tmp35 = null == premiumDiscountOffer.expiresAt;
    }
    const obj8 = { isEligible: tmp35, newSnowflakeId: id, actionSheetProperties: obj10 };
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
    const MOBILE_PREMIUM_TRIAL_OFFER_ACTION_SHEET = tmp(2029).DismissibleContent.MOBILE_PREMIUM_TRIAL_OFFER_ACTION_SHEET;
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
    let dismissibleContent;
    const PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL = tmp(2029).DismissibleContent.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL;
    if (mobileBottomSheet != null) {
      dismissibleContent = mobileBottomSheet.dismissibleContent;
    }
    const obj14 = { isEligible: dismissibleContent === dismissible_content.DismissibleContent.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, newSnowflakeId: promotionId, actionSheetProperties: obj15 };
    promotionId = undefined;
    if (promotionMarketingComponent != null) {
      promotionId = promotionMarketingComponent.promotionId;
    }
    obj15 = { bottomSheetData: mobileBottomSheet, componentId: id2, promotionId: promotionId1 };
    id2 = undefined;
    if (promotionMarketingComponent != null) {
      id2 = promotionMarketingComponent.id;
    }
    promotionId1 = undefined;
    if (promotionMarketingComponent != null) {
      promotionId1 = promotionMarketingComponent.promotionId;
    }
    obj6[PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL] = obj14;
    let dismissibleContent1;
    const PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL = tmp(2029).DismissibleContent.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL;
    if (mobileBottomSheet != null) {
      dismissibleContent1 = mobileBottomSheet.dismissibleContent;
    }
    const obj16 = { isEligible: dismissibleContent1 === dismissible_content.DismissibleContent.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL, newSnowflakeId: promotionId2, actionSheetProperties: obj17 };
    promotionId2 = undefined;
    if (promotionMarketingComponent != null) {
      promotionId2 = promotionMarketingComponent.promotionId;
    }
    obj17 = { bottomSheetData: mobileBottomSheet, componentId: id3, promotionId: promotionId3 };
    id3 = undefined;
    if (promotionMarketingComponent != null) {
      id3 = promotionMarketingComponent.id;
    }
    promotionId3 = undefined;
    if (promotionMarketingComponent != null) {
      promotionId3 = promotionMarketingComponent.promotionId;
    }
    obj6[PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL] = obj16;
    let tmp48 = tmp32;
    const GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET = tmp(2029).DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET;
    if (null != stateFromStores3) {
      tmp48 = isGiftCoachmarkAssetReady;
    }
    const obj18 = { isEligible: tmp48, newSnowflakeId: stateFromStores2, actionSheetProperties: obj19 };
    obj19 = { coachmarkComponent: stateFromStores3 };
    obj6[GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET] = obj18;
    let tmp49 = !tmp32;
    const GIFTING_PROMOTION_REMINDER = tmp(2029).DismissibleContent.GIFTING_PROMOTION_REMINDER;
    if (null != stateFromStores3) {
      tmp49 = null == stateFromStores4;
    }
    const obj20 = { isEligible: tmp50, newSnowflakeId: stateFromStores2, actionSheetProperties: obj21 };
    obj21 = { coachmarkComponent: stateFromStores4 };
    tmp50 = !tmp49 && null != stateFromStores2 && isDismissed && enabled2 && null != stateFromStores4 && isGiftReminderAssetReady;
    obj6[GIFTING_PROMOTION_REMINDER] = obj20;
    const obj22 = { isEligible: null != giftingBadgeCoachmarkVariant, actionSheetProperties: obj23 };
    obj23 = { variant: giftingBadgeCoachmarkVariant };
    obj6[dismissible_content.DismissibleContent.NEW_GIFTING_BADGES_COACHMARK] = obj22;
    const obj24 = { isEligible: true, actionSheetProperties: {} };
    obj6[dismissible_content.DismissibleContent.CUSTOM_APP_ICONS_COACHMARK] = obj24;
    const obj25 = { isEligible: shouldShowRobloxConnectionCoachmark, actionSheetProperties: {} };
    obj6[dismissible_content.DismissibleContent.ROBLOX_CONNECTION_COACHMARK] = obj25;
    const obj26 = { isEligible: isDisplayNameStylesFlywheelSettersEnabled, actionSheetProperties: {} };
    obj6[dismissible_content.DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_COACHMARK] = obj26;
    const obj27 = { isEligible: shouldShowConnectionDeprecationBottomSheet, actionSheetProperties: obj28 };
    obj28 = { platformTypes: items6 };
    obj6[dismissible_content.DismissibleContent.RIOT_CONNECTION_DEPRECATION_DISABLE] = obj27;
    const obj29 = { isEligible: shouldShowConnectionDeprecationBottomSheet1, actionSheetProperties: obj30 };
    obj30 = { platformTypes: items8 };
    items8 = [tmp26.BATTLENET];
    obj6[dismissible_content.DismissibleContent.BATTLENET_CONNECTION_DEPRECATION_DISABLE] = obj29;
    const obj31 = { isEligible: true, actionSheetProperties: {} };
    obj6[dismissible_content.DismissibleContent.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT] = obj31;
    const obj32 = { isEligible: nitroFileUploadAnnouncementEligible, actionSheetProperties: {} };
    obj6[dismissible_content.DismissibleContent.NITRO_FILE_UPLOAD_1GB_ANNOUNCEMENT] = obj32;
    const obj33 = { isEligible: nitroFileUploadUpsellEligible, actionSheetProperties: {} };
    obj6[dismissible_content.DismissibleContent.NITRO_FILE_UPLOAD_1GB_UPSELL] = obj33;
    const obj34 = { isEligible: tmp31, actionSheetProperties: {} };
    obj6[dismissible_content.DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_COACHMARK] = obj34;
    tmp33 = obj6;
  } else {
    tmp33 = obj6;
  }
  return tmp33;
};
