// Module ID: 18463
// Function ID: 18464
// Name: useMainViewTooltipActionSheetEligibilityMap
// Dependencies: [32, 1258, 7563, 18437, 9519, 1243, 4818, 1391, 1094, 558, 576, 504, 18464, 1627, 8430, 18465, 8426, 7558, 18466, 14767, 10498, 10497, 10505, 5002, 4808, 18467, 18468, 18435, 15903, 13082, 2]

// Module 18463 (useMainViewTooltipActionSheetEligibilityMap)
import get_initialized from "get initialized" /* 504 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1094 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1627 */;
import dismissible_content from "dismissible_content" /* 4808 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 5002 */;
import usePremiumTrialOffer from "usePremiumTrialOffer" /* 7558 */;
import useIsEligibleSenderForReferralProgram from "useIsEligibleSenderForReferralProgram" /* 8426 */;
import usePremiumDiscountOffer from "usePremiumDiscountOffer" /* 8430 */;
import GiftingBadgesUtils from "GiftingBadgesUtils" /* 10505 */;
import CustomTypingIndicatorExperiment from "CustomTypingIndicatorExperiment" /* 13082 */;
import usePromotionMarketingComponent from "usePromotionMarketingComponent" /* 14767 */;
import DisplayNameStylesFlywheelExperiment from "DisplayNameStylesFlywheelExperiment" /* 15903 */;
import RobloxConnectionCoachmark from "RobloxConnectionCoachmark" /* 18435 */;
import MainViewTooltipActionSheetsDisabledExperimentDefault from "MainViewTooltipActionSheetsDisabledExperiment" /* 18464 */;
import useNitroFileUploadMarketingEligible from "useNitroFileUploadMarketingEligible" /* 18468 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1258 */;
import ReferralTrialStore from "ReferralTrialStore" /* 7563 */;
import GooglePlayPriceChangeStore from "GooglePlayPriceChangeStore" /* 18437 */;
import PromotionsStore from "PromotionsStore" /* 9519 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1243 */;
import UserRequiredActionStore_mod from "UserRequiredActionStore" /* 4818 */;
import PremiumConstants from "PremiumConstants" /* 1391 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID;
let PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID;
let PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID;
let PREMIUM_TIER_2_REACTIVATION_TRIAL_ID;
let tmp4;
const useGiftingPromotionAssetsReadyDefault = tmp4(18467);
let UserRequiredActionStore = UserRequiredActionStore_mod;
({ PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID, PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID, PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID, PREMIUM_TIER_2_REACTIVATION_TRIAL_ID } = PremiumConstants);
const UserSettingsTypes = UserSettingsConstants.UserSettingsTypes;
const MainViewTooltipActionSheets = "MainViewTooltipActionSheets";
let items = [PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID, PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID, PREMIUM_TIER_2_REACTIVATION_TRIAL_ID, PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID];
const set = new Set(items);
tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useMainViewTooltipActionSheetMap() {
  let closure_1;
  let closure_9;
  let enabled;
  let enabled2;
  let first;
  let isGiftReminderAssetReady;
  let mobileBottomSheet;
  let premiumDiscountOffer;
  let premiumTrialOffer;
  let stateFromStores3;
  let stateFromStores5;
  let tmp10;
  let tmp11;
  let tmp15;
  let tmp16;
  let tmp24;
  let tmp25;
  let tmp29;
  let tmp30;
  let tmp33;
  let tmp34;
  let tmp39;
  let tmp4;
  let tmp43;
  let tmp44;
  let tmp47;
  let tmp48;
  let tmp5;
  let tmp51;
  let tmp52;
  let tmp56;
  let tmp57;
  let tmp59;
  let tmp = first;
  let obj = first(premiumDiscountOffer[10]);
  const cResult = obj.c(138);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp6 = enabled2;
    let items = [enabled2];
    class S {
      constructor() {
        return enabled2.hasLoaded(isGiftCoachmarkAssetReady.PRELOADED_USER_SETTINGS);
      }
    }
    cResult[0] = items;
    cResult[1] = S;
    tmp4 = items;
    tmp5 = S;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(premiumDiscountOffer[11]);
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  let tmp8 = importDefault;
  let tmp9 = isGiftReminderAssetReady;
  const obj2 = { location: isGiftReminderAssetReady };
  const obj3 = require("MainViewTooltipActionSheetsDisabledExperiment");
  const disabled = obj3.getConfig(obj2).disabled;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserRequiredActionStore];
    class C {
      constructor() {
        return closure_9.hasAction();
      }
    }
    cResult[2] = items1;
    cResult[3] = C;
    tmp11 = C;
    tmp10 = items1;
  } else {
    tmp10 = cResult[2];
    tmp11 = cResult[3];
  }
  let tmp14 = stateFromStores;
  const tmpResult21 = tmp(premiumDiscountOffer[11]);
  const stateFromStores1 = tmpResult21.useStateFromStores(tmp10, tmp11);
  if (stateFromStores) {
    tmp14 = !disabled;
  }
  if (tmp14) {
    tmp14 = !stateFromStores1;
  }
  if (tmp14) {
    const tmpResult22 = tmp(premiumDiscountOffer[13]);
    tmp14 = !tmpResult22.isMetaQuest();
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [stateFromStores3];
    class C {
      constructor() {
        return closure_9.hasAction();
      }
    }
    cResult[4] = items2;
    cResult[5] = tmp18;
    tmp16 = tmp18;
    tmp15 = items2;
  } else {
    tmp15 = cResult[4];
    tmp16 = cResult[5];
  }
  const tmpResult23 = tmp(premiumDiscountOffer[11]);
  const tmp20 = premiumTrialOffer(tmpResult23.useStateFromStoresArray(tmp15, tmp16), 2);
  first = tmp20[0];
  importDefault = tmp22;
  const tmpResult24 = tmp(premiumDiscountOffer[14]);
  premiumDiscountOffer = tmpResult24.usePremiumDiscountOffer();
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items3 = [enabled];
    class A {
      constructor() {
        const RecurringReferralReminderExperiment = first(premiumDiscountOffer[15]).RecurringReferralReminderExperiment;
        const obj = { location: isGiftReminderAssetReady };
        return RecurringReferralReminderExperiment.getConfig(obj, { autoTrackExposure: false }).bottomSheetEnabled;
      }
    }
    cResult[6] = items3;
    cResult[7] = A;
    tmp25 = A;
    tmp24 = items3;
  } else {
    tmp24 = cResult[6];
    tmp25 = cResult[7];
  }
  const tmpResult25 = tmp(premiumDiscountOffer[11]);
  const stateFromStores2 = tmpResult25.useStateFromStores(tmp24, tmp25);
  const tmpResult26 = tmp(premiumDiscountOffer[16]);
  const isEligibleSenderForReferralProgram = tmpResult26.useIsEligibleSenderForReferralProgram(!stateFromStores2);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const items4 = [mobileBottomSheet];
    class U {
      constructor() {
        const items = [mobileBottomSheet.getReferralsRemaining({ bypassFetch: true }), mobileBottomSheet.getRecurringReminderStateId()];
        return items;
      }
    }
    cResult[8] = items4;
    cResult[9] = U;
    tmp30 = U;
    tmp29 = items4;
  } else {
    tmp29 = cResult[8];
    tmp30 = cResult[9];
  }
  const tmpResult27 = tmp(premiumDiscountOffer[11]);
  [tmp33, tmp34] = premiumTrialOffer(tmpResult27.useStateFromStoresArray(tmp29, tmp30), 2);
  let tmp35 = stateFromStores2 && isEligibleSenderForReferralProgram;
  premiumTrialOffer(tmpResult27.useStateFromStoresArray(tmp29, tmp30), 2);
  if (tmp35) {
    tmp35 = null != tmp33;
  }
  if (tmp35) {
    tmp35 = tmp33 > 0;
  }
  if (tmp35) {
    tmp35 = null != tmp34;
  }
  const tmpResult28 = tmp(premiumDiscountOffer[17]);
  premiumTrialOffer = tmpResult28.usePremiumTrialOffer();
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { location: tmp9 };
    class U {
      constructor() {
        const items = [mobileBottomSheet.getReferralsRemaining({ bypassFetch: true }), mobileBottomSheet.getRecurringReminderStateId()];
        return items;
      }
    }
    tmp39 = obj4;
  } else {
    tmp39 = cResult[10];
  }
  const PremiumTrialOfferActionSheetKillSwitchExperiment = tmp(tmp2[18]).PremiumTrialOfferActionSheetKillSwitchExperiment;
  enabled = PremiumTrialOfferActionSheetKillSwitchExperiment.useConfig(tmp39).enabled;
  const tmpResult29 = tmp(premiumDiscountOffer[19]);
  const promotionMarketingComponent = tmpResult29.usePromotionMarketingComponent(tmp(tmp2[20]).MarketingComponentType.MOBILE_BOTTOM_SHEET);
  let oneofKind;
  if (promotionMarketingComponent != null) {
    oneofKind = promotionMarketingComponent.properties.properties.oneofKind;
  }
  mobileBottomSheet = null;
  if ("mobileBottomSheet" === oneofKind) {
    mobileBottomSheet = promotionMarketingComponent.properties.properties.mobileBottomSheet;
  }
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    const items5 = [stateFromStores5];
    class X {
      constructor() {
        const giftPromotion = stateFromStores5.getGiftPromotion();
        let id;
        if (giftPromotion != null) {
          id = giftPromotion.id;
        }
        return id;
      }
    }
    cResult[11] = items5;
    cResult[12] = X;
    tmp44 = X;
    tmp43 = items5;
  } else {
    tmp43 = cResult[11];
    tmp44 = cResult[12];
  }
  const tmpResult30 = tmp(premiumDiscountOffer[11]);
  stateFromStores3 = tmpResult30.useStateFromStores(tmp43, tmp44);
  if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
    const items6 = [stateFromStores5];
    class Z {
      constructor() {
        const marketingComponentByType = stateFromStores5.getMarketingComponentByType(first(premiumDiscountOffer[20]).MarketingComponentType.GIFT_ICON_COACHMARK);
        let giftIconCoachmark = null;
        if (null != marketingComponentByType) {
          giftIconCoachmark = null;
          if ("giftIconCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
            giftIconCoachmark = marketingComponentByType.properties.properties.giftIconCoachmark;
          }
        }
        return giftIconCoachmark;
      }
    }
    cResult[13] = items6;
    cResult[14] = Z;
    tmp48 = Z;
    tmp47 = items6;
  } else {
    tmp47 = cResult[13];
    tmp48 = cResult[14];
  }
  const tmpResult31 = tmp(premiumDiscountOffer[11]);
  const stateFromStores4 = tmpResult31.useStateFromStores(tmp47, tmp48);
  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
    const items7 = [stateFromStores5];
    class Z {
      constructor() {
        const marketingComponentByType = stateFromStores5.getMarketingComponentByType(first(premiumDiscountOffer[20]).MarketingComponentType.GIFT_ICON_COACHMARK);
        let giftIconCoachmark = null;
        if (null != marketingComponentByType) {
          giftIconCoachmark = null;
          if ("giftIconCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
            giftIconCoachmark = marketingComponentByType.properties.properties.giftIconCoachmark;
          }
        }
        return giftIconCoachmark;
      }
    }
    cResult[15] = items7;
    cResult[16] = tmp54;
    tmp52 = tmp54;
    tmp51 = items7;
  } else {
    tmp51 = cResult[15];
    tmp52 = cResult[16];
  }
  const tmpResult32 = tmp(premiumDiscountOffer[11]);
  stateFromStores5 = tmpResult32.useStateFromStores(tmp51, tmp52);
  if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { location: tmp9 };
    class Z {
      constructor() {
        const marketingComponentByType = stateFromStores5.getMarketingComponentByType(first(premiumDiscountOffer[20]).MarketingComponentType.GIFT_ICON_COACHMARK);
        let giftIconCoachmark = null;
        if (null != marketingComponentByType) {
          giftIconCoachmark = null;
          if ("giftIconCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
            giftIconCoachmark = marketingComponentByType.properties.properties.giftIconCoachmark;
          }
        }
        return giftIconCoachmark;
      }
    }
    tmp56 = obj5;
  } else {
    tmp56 = cResult[17];
  }
  const GiftPromotionReminderExperiment = tmp(tmp2[21]).GiftPromotionReminderExperiment;
  enabled2 = GiftPromotionReminderExperiment.useConfig(tmp56).enabled;
  if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
    const obj6 = { platform: "native", location: tmp9 };
    class Z {
      constructor() {
        const marketingComponentByType = stateFromStores5.getMarketingComponentByType(first(premiumDiscountOffer[20]).MarketingComponentType.GIFT_ICON_COACHMARK);
        let giftIconCoachmark = null;
        if (null != marketingComponentByType) {
          giftIconCoachmark = null;
          if ("giftIconCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
            giftIconCoachmark = marketingComponentByType.properties.properties.giftIconCoachmark;
          }
        }
        return giftIconCoachmark;
      }
    }
    tmp57 = obj6;
  } else {
    tmp57 = cResult[18];
  }
  const tmpResult33 = tmp(premiumDiscountOffer[22]);
  const giftingBadgeCoachmarkVariant = tmpResult33.useGiftingBadgeCoachmarkVariant(tmp57);
  if (cResult[19] !== stateFromStores3) {
    let isDismissed = null != stateFromStores3;
    if (isDismissed) {
      const tmpResult34 = tmp(premiumDiscountOffer[23]);
      isDismissed = tmpResult34.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(tmp(tmp2[24]).DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET, stateFromStores3).isDismissed;
    }
    class Z {
      constructor() {
        const marketingComponentByType = stateFromStores5.getMarketingComponentByType(first(premiumDiscountOffer[20]).MarketingComponentType.GIFT_ICON_COACHMARK);
        let giftIconCoachmark = null;
        if (null != marketingComponentByType) {
          giftIconCoachmark = null;
          if ("giftIconCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
            giftIconCoachmark = marketingComponentByType.properties.properties.giftIconCoachmark;
          }
        }
        return giftIconCoachmark;
      }
    }
    cResult[20] = isDismissed;
    tmp59 = isDismissed;
  } else {
    tmp59 = cResult[20];
  }
  UserRequiredActionStore = tmp59;
  let isDismissed2 = null != stateFromStores3;
  if (isDismissed2) {
    const tmpResult35 = tmp(premiumDiscountOffer[23]);
    isDismissed2 = tmpResult35.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(tmp(tmp2[24]).DismissibleContent.GIFTING_PROMOTION_REMINDER, stateFromStores3).isDismissed;
  }
  let tmp61 = null;
  const tmp8Result = tmp8(premiumDiscountOffer[25]);
  if (!tmp59) {
    tmp61 = stateFromStores4;
  }
  let tmp62 = null;
  if (!isDismissed2) {
    tmp62 = stateFromStores5;
  }
  const tmp8ResultResult = tmp8Result(tmp61, tmp62);
  const isGiftCoachmarkAssetReady = tmp8ResultResult.isGiftCoachmarkAssetReady;
  isGiftReminderAssetReady = tmp8ResultResult.isGiftReminderAssetReady;
  const tmpResult36 = tmp(premiumDiscountOffer[26]);
  const nitroFileUploadAnnouncementEligible = tmpResult36.useNitroFileUploadAnnouncementEligible(tmp9);
  const tmpResult37 = tmp(premiumDiscountOffer[26]);
  const nitroFileUploadUpsellEligible = tmpResult37.useNitroFileUploadUpsellEligible(tmp9);
  const tmpResult38 = tmp(premiumDiscountOffer[27]);
  const shouldShowRobloxConnectionCoachmark = tmpResult38.useShouldShowRobloxConnectionCoachmark();
  const tmpResult39 = tmp(premiumDiscountOffer[28]);
  const isDisplayNameStylesFlywheelSettersEnabled = tmpResult39.useIsDisplayNameStylesFlywheelSettersEnabled(tmp9);
  const tmpResult40 = tmp(premiumDiscountOffer[29]);
  const canSet = tmpResult40.useCustomTypingIndicatorConfig(tmp9).canSet;
  if (cResult[21] === tmp20[1]) {
    let tmp68;
    let tmp69;
    if (cResult[22] === first) {
      tmp68 = cResult[23];
    }
    if (cResult[24] !== premiumDiscountOffer) {
      function isDiscountOfferEligible() {
        return null != premiumDiscountOffer && null == premiumDiscountOffer.expiresAt;
      }
      cResult[24] = premiumDiscountOffer;
      class Z {
        constructor() {
          const marketingComponentByType = stateFromStores5.getMarketingComponentByType(first(premiumDiscountOffer[20]).MarketingComponentType.GIFT_ICON_COACHMARK);
          let giftIconCoachmark = null;
          if (null != marketingComponentByType) {
            giftIconCoachmark = null;
            if ("giftIconCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
              giftIconCoachmark = marketingComponentByType.properties.properties.giftIconCoachmark;
            }
          }
          return giftIconCoachmark;
        }
      }
      cResult[25] = isDiscountOfferEligible;
      tmp69 = isDiscountOfferEligible;
    } else {
      tmp69 = cResult[25];
    }
    if (cResult[26] === enabled) {
      let tmp70;
      let tmp74;
      let tmp78;
      if (cResult[27] === premiumTrialOffer) {
        tmp70 = cResult[28];
      }
      const tmp72 = cResult[29];
      class Z {
        constructor() {
          const marketingComponentByType = stateFromStores5.getMarketingComponentByType(first(premiumDiscountOffer[20]).MarketingComponentType.GIFT_ICON_COACHMARK);
          let giftIconCoachmark = null;
          if (null != marketingComponentByType) {
            giftIconCoachmark = null;
            if ("giftIconCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
              giftIconCoachmark = marketingComponentByType.properties.properties.giftIconCoachmark;
            }
          }
          return giftIconCoachmark;
        }
      }
      if (tmp72 !== undefined) {
        let dismissibleContent;
        if (mobileBottomSheet != null) {
          dismissibleContent = mobileBottomSheet.dismissibleContent;
        }
        function isPremiumMarketingMomentAnnouncementEligible() {
          let dismissibleContent;
          if (mobileBottomSheet != null) {
            dismissibleContent = mobileBottomSheet.dismissibleContent;
          }
          return dismissibleContent === dismissible_content.DismissibleContent.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL;
        }
        class Z {
          constructor() {
            const marketingComponentByType = stateFromStores5.getMarketingComponentByType(first(premiumDiscountOffer[20]).MarketingComponentType.GIFT_ICON_COACHMARK);
            let giftIconCoachmark = null;
            if (null != marketingComponentByType) {
              giftIconCoachmark = null;
              if ("giftIconCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                giftIconCoachmark = marketingComponentByType.properties.properties.giftIconCoachmark;
              }
            }
            return giftIconCoachmark;
          }
        }
        cResult[29] = dismissibleContent;
        cResult[30] = isPremiumMarketingMomentAnnouncementEligible;
        tmp74 = isPremiumMarketingMomentAnnouncementEligible;
      } else {
        tmp74 = cResult[30];
      }
      let dismissibleContent1;
      const tmp76 = cResult[31];
      if (mobileBottomSheet != null) {
        dismissibleContent1 = mobileBottomSheet.dismissibleContent;
      }
      if (tmp76 !== dismissibleContent1) {
        let dismissibleContent2;
        if (mobileBottomSheet != null) {
          dismissibleContent2 = mobileBottomSheet.dismissibleContent;
        }
        function isPremiumMarketingMomentReminderEligible() {
          let dismissibleContent;
          if (mobileBottomSheet != null) {
            dismissibleContent = mobileBottomSheet.dismissibleContent;
          }
          return dismissibleContent === dismissible_content.DismissibleContent.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL;
        }
        class Z {
          constructor() {
            const marketingComponentByType = stateFromStores5.getMarketingComponentByType(first(premiumDiscountOffer[20]).MarketingComponentType.GIFT_ICON_COACHMARK);
            let giftIconCoachmark = null;
            if (null != marketingComponentByType) {
              giftIconCoachmark = null;
              if ("giftIconCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                giftIconCoachmark = marketingComponentByType.properties.properties.giftIconCoachmark;
              }
            }
            return giftIconCoachmark;
          }
        }
        cResult[31] = dismissibleContent2;
        cResult[32] = isPremiumMarketingMomentReminderEligible;
        tmp78 = isPremiumMarketingMomentReminderEligible;
      } else {
        tmp78 = cResult[32];
      }
      let closure_12 = tmp80;
      let closure_13 = tmp81;
      if (cResult[33] === null != stateFromStores4) {
        let tmp82;
        if (cResult[34] === isGiftCoachmarkAssetReady) {
          tmp82 = cResult[35];
        }
        if (cResult[36] === stateFromStores3) {
          if (cResult[37] === enabled2) {
            if (cResult[38] === stateFromStores5) {
              if (cResult[39] === null != stateFromStores4) {
                if (cResult[40] === null != stateFromStores5) {
                  if (cResult[41] === tmp59) {
                    if (tmp14) {
                      let tmp85;
                      let tmp88;
                      if (cResult[45] !== tmp68) {
                        const tmp68Result = tmp68();
                        cResult[45] = tmp68;
                        class Z {
                          constructor() {
                            const marketingComponentByType = stateFromStores5.getMarketingComponentByType(first(premiumDiscountOffer[20]).MarketingComponentType.GIFT_ICON_COACHMARK);
                            let giftIconCoachmark = null;
                            if (null != marketingComponentByType) {
                              giftIconCoachmark = null;
                              if ("giftIconCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                                giftIconCoachmark = marketingComponentByType.properties.properties.giftIconCoachmark;
                              }
                            }
                            return giftIconCoachmark;
                          }
                        }
                        cResult[46] = tmp68Result;
                        tmp85 = tmp68Result;
                      } else {
                        tmp85 = cResult[46];
                      }
                      let priceChangeId;
                      if (tmp20[1] != null) {
                        priceChangeId = tmp22.priceChangeId;
                      }
                      class Z {
                        constructor() {
                          const marketingComponentByType = stateFromStores5.getMarketingComponentByType(first(premiumDiscountOffer[20]).MarketingComponentType.GIFT_ICON_COACHMARK);
                          let giftIconCoachmark = null;
                          if (null != marketingComponentByType) {
                            giftIconCoachmark = null;
                            if ("giftIconCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                              giftIconCoachmark = marketingComponentByType.properties.properties.giftIconCoachmark;
                            }
                          }
                          return giftIconCoachmark;
                        }
                      }
                      if (cResult[47] === Symbol.for("react.memo_cache_sentinel")) {
                        const obj7 = {};
                        cResult[47] = obj7;
                        class Z {
                          constructor() {
                            const marketingComponentByType = stateFromStores5.getMarketingComponentByType(first(premiumDiscountOffer[20]).MarketingComponentType.GIFT_ICON_COACHMARK);
                            let giftIconCoachmark = null;
                            if (null != marketingComponentByType) {
                              giftIconCoachmark = null;
                              if ("giftIconCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                                giftIconCoachmark = marketingComponentByType.properties.properties.giftIconCoachmark;
                              }
                            }
                            return giftIconCoachmark;
                          }
                        }
                      } else {
                        tmp88 = cResult[47];
                      }
                      if (cResult[48] === tmp85) {
                        let tmp92;
                        const tmp69Result = tmp69();
                        class Z {
                          constructor() {
                            const marketingComponentByType = stateFromStores5.getMarketingComponentByType(first(premiumDiscountOffer[20]).MarketingComponentType.GIFT_ICON_COACHMARK);
                            let giftIconCoachmark = null;
                            if (null != marketingComponentByType) {
                              giftIconCoachmark = null;
                              if ("giftIconCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                                giftIconCoachmark = marketingComponentByType.properties.properties.giftIconCoachmark;
                              }
                            }
                            return giftIconCoachmark;
                          }
                        }
                        if (cResult[51] !== premiumDiscountOffer) {
                          let obj9;
                          if (null != premiumDiscountOffer) {
                            obj9 = { userDiscountOffer: premiumDiscountOffer };
                            const obj8 = { userDiscountOffer: premiumDiscountOffer };
                          } else {
                            obj9 = {};
                          }
                          cResult[51] = premiumDiscountOffer;
                          class Z {
                            constructor() {
                              const marketingComponentByType = stateFromStores5.getMarketingComponentByType(first(premiumDiscountOffer[20]).MarketingComponentType.GIFT_ICON_COACHMARK);
                              let giftIconCoachmark = null;
                              if (null != marketingComponentByType) {
                                giftIconCoachmark = null;
                                if ("giftIconCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                                  giftIconCoachmark = marketingComponentByType.properties.properties.giftIconCoachmark;
                                }
                              }
                              return giftIconCoachmark;
                            }
                          }
                          cResult[52] = obj9;
                          tmp92 = obj9;
                        } else {
                          tmp92 = cResult[52];
                        }
                        if (cResult[53] === tmp69Result) {
                          if (cResult[54] === undefined) {
                            let tmp94;
                            let tmp97;
                            if (cResult[57] !== tmp70) {
                              const tmp70Result = tmp70();
                              cResult[57] = tmp70;
                              class Z {
                                constructor() {
                                  const marketingComponentByType = stateFromStores5.getMarketingComponentByType(first(premiumDiscountOffer[20]).MarketingComponentType.GIFT_ICON_COACHMARK);
                                  let giftIconCoachmark = null;
                                  if (null != marketingComponentByType) {
                                    giftIconCoachmark = null;
                                    if ("giftIconCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                                      giftIconCoachmark = marketingComponentByType.properties.properties.giftIconCoachmark;
                                    }
                                  }
                                  return giftIconCoachmark;
                                }
                              }
                              cResult[58] = tmp70Result;
                              tmp94 = tmp70Result;
                            } else {
                              tmp94 = cResult[58];
                            }
                            class Z {
                              constructor() {
                                const marketingComponentByType = stateFromStores5.getMarketingComponentByType(first(premiumDiscountOffer[20]).MarketingComponentType.GIFT_ICON_COACHMARK);
                                let giftIconCoachmark = null;
                                if (null != marketingComponentByType) {
                                  giftIconCoachmark = null;
                                  if ("giftIconCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                                    giftIconCoachmark = marketingComponentByType.properties.properties.giftIconCoachmark;
                                  }
                                }
                                return giftIconCoachmark;
                              }
                            }
                            if (cResult[59] !== premiumTrialOffer) {
                              let obj11;
                              if (null != premiumTrialOffer) {
                                obj11 = { userTrialOffer: premiumTrialOffer };
                                const obj10 = { userTrialOffer: premiumTrialOffer };
                              } else {
                                obj11 = {};
                              }
                              cResult[59] = premiumTrialOffer;
                              class Z {
                                constructor() {
                                  const marketingComponentByType = stateFromStores5.getMarketingComponentByType(first(premiumDiscountOffer[20]).MarketingComponentType.GIFT_ICON_COACHMARK);
                                  let giftIconCoachmark = null;
                                  if (null != marketingComponentByType) {
                                    giftIconCoachmark = null;
                                    if ("giftIconCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                                      giftIconCoachmark = marketingComponentByType.properties.properties.giftIconCoachmark;
                                    }
                                  }
                                  return giftIconCoachmark;
                                }
                              }
                              cResult[60] = obj11;
                              tmp97 = obj11;
                            } else {
                              tmp97 = cResult[60];
                            }
                            if (cResult[61] === tmp94) {
                              if (cResult[62] === undefined) {
                                const tmp74Result = tmp74();
                                class Z {
                                  constructor() {
                                    const marketingComponentByType = stateFromStores5.getMarketingComponentByType(first(premiumDiscountOffer[20]).MarketingComponentType.GIFT_ICON_COACHMARK);
                                    let giftIconCoachmark = null;
                                    if (null != marketingComponentByType) {
                                      giftIconCoachmark = null;
                                      if ("giftIconCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                                        giftIconCoachmark = marketingComponentByType.properties.properties.giftIconCoachmark;
                                      }
                                    }
                                    return giftIconCoachmark;
                                  }
                                }
                                let id;
                                if (promotionMarketingComponent != null) {
                                  id = promotionMarketingComponent.id;
                                }
                                let promotionId;
                                if (promotionMarketingComponent != null) {
                                  promotionId = promotionMarketingComponent.promotionId;
                                }
                                if (cResult[65] === mobileBottomSheet) {
                                  if (cResult[66] === id) {
                                    let tmp103;
                                    if (cResult[67] === promotionId) {
                                      tmp103 = cResult[68];
                                    }
                                    if (cResult[69] === tmp74Result) {
                                      if (cResult[70] === tmp100) {
                                        const tmp78Result = tmp78();
                                        class Z {
                                          constructor() {
                                            const marketingComponentByType = stateFromStores5.getMarketingComponentByType(first(premiumDiscountOffer[20]).MarketingComponentType.GIFT_ICON_COACHMARK);
                                            let giftIconCoachmark = null;
                                            if (null != marketingComponentByType) {
                                              giftIconCoachmark = null;
                                              if ("giftIconCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                                                giftIconCoachmark = marketingComponentByType.properties.properties.giftIconCoachmark;
                                              }
                                            }
                                            return giftIconCoachmark;
                                          }
                                        }
                                        let id1;
                                        if (promotionMarketingComponent != null) {
                                          id1 = promotionMarketingComponent.id;
                                        }
                                        let promotionId1;
                                        if (promotionMarketingComponent != null) {
                                          promotionId1 = promotionMarketingComponent.promotionId;
                                        }
                                        if (cResult[73] === mobileBottomSheet) {
                                          if (cResult[74] === id1) {
                                            let tmp109;
                                            if (cResult[75] === promotionId1) {
                                              tmp109 = cResult[76];
                                            }
                                            if (cResult[77] === tmp78Result) {
                                              if (cResult[78] === tmp106) {
                                                let tmp111;
                                                let tmp113;
                                                if (cResult[81] !== tmp82) {
                                                  const tmp82Result = tmp82();
                                                  cResult[81] = tmp82;
                                                  class Z {
                                                    constructor() {
                                                      const marketingComponentByType = stateFromStores5.getMarketingComponentByType(first(premiumDiscountOffer[20]).MarketingComponentType.GIFT_ICON_COACHMARK);
                                                      let giftIconCoachmark = null;
                                                      if (null != marketingComponentByType) {
                                                        giftIconCoachmark = null;
                                                        if ("giftIconCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                                                          giftIconCoachmark = marketingComponentByType.properties.properties.giftIconCoachmark;
                                                        }
                                                      }
                                                      return giftIconCoachmark;
                                                    }
                                                  }
                                                  cResult[82] = tmp82Result;
                                                  tmp111 = tmp82Result;
                                                } else {
                                                  tmp111 = cResult[82];
                                                }
                                                if (cResult[83] !== stateFromStores4) {
                                                  const obj12 = { coachmarkComponent: stateFromStores4 };
                                                  class Z {
                                                    constructor() {
                                                      const marketingComponentByType = stateFromStores5.getMarketingComponentByType(first(premiumDiscountOffer[20]).MarketingComponentType.GIFT_ICON_COACHMARK);
                                                      let giftIconCoachmark = null;
                                                      if (null != marketingComponentByType) {
                                                        giftIconCoachmark = null;
                                                        if ("giftIconCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                                                          giftIconCoachmark = marketingComponentByType.properties.properties.giftIconCoachmark;
                                                        }
                                                      }
                                                      return giftIconCoachmark;
                                                    }
                                                  }
                                                  cResult[84] = obj12;
                                                  tmp113 = obj12;
                                                } else {
                                                  tmp113 = cResult[84];
                                                }
                                                class Z {
                                                  constructor() {
                                                    const marketingComponentByType = stateFromStores5.getMarketingComponentByType(first(premiumDiscountOffer[20]).MarketingComponentType.GIFT_ICON_COACHMARK);
                                                    let giftIconCoachmark = null;
                                                    if (null != marketingComponentByType) {
                                                      giftIconCoachmark = null;
                                                      if ("giftIconCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                                                        giftIconCoachmark = marketingComponentByType.properties.properties.giftIconCoachmark;
                                                      }
                                                    }
                                                    return giftIconCoachmark;
                                                  }
                                                }
                                                const obj13 = { isEligible: tmp111, newSnowflakeId: stateFromStores3, actionSheetProperties: tmp113 };
                                                cResult[85] = stateFromStores3;
                                                cResult[86] = tmp111;
                                                cResult[87] = tmp113;
                                                cResult[88] = obj13;
                                              }
                                            }
                                            const obj14 = { isEligible: null, newSnowflakeId: tmp106, actionSheetProperties: tmp109 };
                                            class Z {
                                              constructor() {
                                                const marketingComponentByType = stateFromStores5.getMarketingComponentByType(first(premiumDiscountOffer[20]).MarketingComponentType.GIFT_ICON_COACHMARK);
                                                let giftIconCoachmark = null;
                                                if (null != marketingComponentByType) {
                                                  giftIconCoachmark = null;
                                                  if ("giftIconCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                                                    giftIconCoachmark = marketingComponentByType.properties.properties.giftIconCoachmark;
                                                  }
                                                }
                                                return giftIconCoachmark;
                                              }
                                            }
                                            cResult[77] = tmp78Result;
                                            cResult[78] = tmp106;
                                            cResult[79] = tmp109;
                                            cResult[80] = obj14;
                                          }
                                        }
                                        const obj15 = { bottomSheetData: mobileBottomSheet, componentId: id1, promotionId: promotionId1 };
                                        cResult[73] = mobileBottomSheet;
                                        cResult[74] = id1;
                                        cResult[75] = promotionId1;
                                        cResult[76] = obj15;
                                        tmp109 = obj15;
                                      }
                                    }
                                    const obj16 = { isEligible: null, newSnowflakeId: tmp100, actionSheetProperties: tmp103 };
                                    class Z {
                                      constructor() {
                                        const marketingComponentByType = stateFromStores5.getMarketingComponentByType(first(premiumDiscountOffer[20]).MarketingComponentType.GIFT_ICON_COACHMARK);
                                        let giftIconCoachmark = null;
                                        if (null != marketingComponentByType) {
                                          giftIconCoachmark = null;
                                          if ("giftIconCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                                            giftIconCoachmark = marketingComponentByType.properties.properties.giftIconCoachmark;
                                          }
                                        }
                                        return giftIconCoachmark;
                                      }
                                    }
                                    cResult[69] = tmp74Result;
                                    cResult[70] = tmp100;
                                    cResult[71] = tmp103;
                                    cResult[72] = obj16;
                                  }
                                }
                                const obj17 = { bottomSheetData: mobileBottomSheet, componentId: id, promotionId };
                                cResult[65] = mobileBottomSheet;
                                cResult[66] = id;
                                cResult[67] = promotionId;
                                cResult[68] = obj17;
                                tmp103 = obj17;
                              }
                            }
                            const obj18 = { isEligible: tmp94, newSnowflakeId: undefined, actionSheetProperties: tmp97 };
                            cResult[61] = tmp94;
                            cResult[62] = undefined;
                            cResult[63] = tmp97;
                            cResult[64] = obj18;
                          }
                        }
                        const obj19 = { isEligible: tmp69Result, newSnowflakeId: undefined, actionSheetProperties: tmp92 };
                        cResult[53] = tmp69Result;
                        cResult[54] = undefined;
                        cResult[55] = tmp92;
                        cResult[56] = obj19;
                      }
                      const obj20 = { isEligible: tmp85, newSnowflakeId: priceChangeId, actionSheetProperties: tmp88 };
                      cResult[48] = tmp85;
                      cResult[49] = priceChangeId;
                      cResult[50] = obj20;
                    } else {
                      const _Symbol = Symbol;
                      if (cResult[44] === Symbol.for("react.memo_cache_sentinel")) {
                        const obj21 = {};
                        cResult[44] = obj21;
                        class Z {
                          constructor() {
                            const marketingComponentByType = stateFromStores5.getMarketingComponentByType(first(premiumDiscountOffer[20]).MarketingComponentType.GIFT_ICON_COACHMARK);
                            let giftIconCoachmark = null;
                            if (null != marketingComponentByType) {
                              giftIconCoachmark = null;
                              if ("giftIconCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                                giftIconCoachmark = marketingComponentByType.properties.properties.giftIconCoachmark;
                              }
                            }
                            return giftIconCoachmark;
                          }
                        }
                      }
                      class Z {
                        constructor() {
                          const marketingComponentByType = stateFromStores5.getMarketingComponentByType(first(premiumDiscountOffer[20]).MarketingComponentType.GIFT_ICON_COACHMARK);
                          let giftIconCoachmark = null;
                          if (null != marketingComponentByType) {
                            giftIconCoachmark = null;
                            if ("giftIconCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                              giftIconCoachmark = marketingComponentByType.properties.properties.giftIconCoachmark;
                            }
                          }
                          return giftIconCoachmark;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        function isGiftingPromotionReminderEligible() {
          let tmp = !closure_12;
          if (closure_12) {
            tmp = !closure_13;
          }
          let tmp3 = !tmp;
          if (tmp3) {
            let tmp6 = null != stateFromStores3;
            if (tmp6) {
              let tmp8 = closure_9;
              if (tmp8) {
                tmp8 = enabled2 && null != stateFromStores5 && isGiftReminderAssetReady;
                const tmp9 = enabled2 && null != stateFromStores5 && isGiftReminderAssetReady;
              }
              tmp6 = tmp8;
            }
            tmp3 = tmp6;
          }
          return tmp3;
        }
        class Z {
          constructor() {
            const marketingComponentByType = stateFromStores5.getMarketingComponentByType(first(premiumDiscountOffer[20]).MarketingComponentType.GIFT_ICON_COACHMARK);
            let giftIconCoachmark = null;
            if (null != marketingComponentByType) {
              giftIconCoachmark = null;
              if ("giftIconCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
                giftIconCoachmark = marketingComponentByType.properties.properties.giftIconCoachmark;
              }
            }
            return giftIconCoachmark;
          }
        }
        cResult[36] = stateFromStores3;
        cResult[37] = enabled2;
        cResult[38] = stateFromStores5;
        cResult[39] = null != stateFromStores4;
        cResult[40] = null != stateFromStores5;
        cResult[41] = tmp59;
        cResult[42] = isGiftReminderAssetReady;
        cResult[43] = isGiftingPromotionReminderEligible;
      }
      function isGiftingPromotionFirstTimeEligible() {
        return closure_12 && isGiftCoachmarkAssetReady;
      }
      cResult[33] = null != stateFromStores4;
      cResult[34] = isGiftCoachmarkAssetReady;
      cResult[35] = isGiftingPromotionFirstTimeEligible;
      tmp82 = isGiftingPromotionFirstTimeEligible;
    }
    class Z {
      constructor() {
        const marketingComponentByType = stateFromStores5.getMarketingComponentByType(first(premiumDiscountOffer[20]).MarketingComponentType.GIFT_ICON_COACHMARK);
        let giftIconCoachmark = null;
        if (null != marketingComponentByType) {
          giftIconCoachmark = null;
          if ("giftIconCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
            giftIconCoachmark = marketingComponentByType.properties.properties.giftIconCoachmark;
          }
        }
        return giftIconCoachmark;
      }
    }
    cResult[26] = enabled;
    cResult[27] = premiumTrialOffer;
    cResult[28] = tmp71;
    tmp70 = tmp71;
  }
  function isGooglePlayPriceChangeEligible() {
    return first && null != closure_1;
  }
  cResult[21] = tmp20[1];
  cResult[22] = first;
  cResult[23] = isGooglePlayPriceChangeEligible;
  tmp68 = isGooglePlayPriceChangeEligible;
}) : (function useMainViewTooltipActionSheetMap() {
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
  const f136084 = () => {
    const items = [, ];
    ({ shouldShowGooglePlayPriceChange: arr[0], priceChangeRecord: arr[1] } = GooglePlayPriceChangeStore);
    return items;
  };
  const f136086 = () => {
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
  [tmp8, tmp9] = tmpResult19.useStateFromStoresArray(items2, f136084);
  _slicedToArray(tmpResult19.useStateFromStoresArray(items2, f136084), 2);
  const tmpResult20 = usePremiumDiscountOffer;
  const premiumDiscountOffer = tmpResult20.usePremiumDiscountOffer();
  const items3 = [ApexExperimentStore];
  const tmpResult21 = get_initialized;
  let stateFromStores2 = tmpResult21.useStateFromStores(items3, () => {
    const RecurringReferralReminderExperiment = require("RecurringReferralReminderExperiment").RecurringReferralReminderExperiment;
    const obj = { location: _location };
    return RecurringReferralReminderExperiment.getConfig(obj, { autoTrackExposure: false }).bottomSheetEnabled;
  });
  const tmpResult22 = useIsEligibleSenderForReferralProgram;
  const isEligibleSenderForReferralProgram = tmpResult22.useIsEligibleSenderForReferralProgram(!stateFromStores2);
  const items4 = [ReferralTrialStore];
  const tmpResult23 = get_initialized;
  [tmp14, tmp15] = tmpResult23.useStateFromStoresArray(items4, f136086);
  _slicedToArray(tmpResult23.useStateFromStoresArray(items4, f136086), 2);
  const tmpResult24 = usePremiumTrialOffer;
  const premiumTrialOffer = tmpResult24.usePremiumTrialOffer();
  const PremiumTrialOfferActionSheetKillSwitchExperiment = tmp(18466).PremiumTrialOfferActionSheetKillSwitchExperiment;
  const enabled = PremiumTrialOfferActionSheetKillSwitchExperiment.useConfig({ location: tmp5 }).enabled;
  const tmpResult25 = usePromotionMarketingComponent;
  const promotionMarketingComponent = tmpResult25.usePromotionMarketingComponent(tmp(10498).MarketingComponentType.MOBILE_BOTTOM_SHEET);
  let oneofKind;
  if (promotionMarketingComponent != null) {
    oneofKind = promotionMarketingComponent.properties.properties.oneofKind;
  }
  let mobileBottomSheet = null;
  if ("mobileBottomSheet" === oneofKind) {
    mobileBottomSheet = promotionMarketingComponent.properties.properties.mobileBottomSheet;
  }
  const items5 = [PromotionsStore];
  const tmpResult26 = get_initialized;
  const stateFromStores3 = tmpResult26.useStateFromStores(items5, () => {
    const giftPromotion = PromotionsStore.getGiftPromotion();
    let id;
    if (giftPromotion != null) {
      id = giftPromotion.id;
    }
    return id;
  });
  const items6 = [PromotionsStore];
  const tmpResult27 = get_initialized;
  const stateFromStores4 = tmpResult27.useStateFromStores(items6, () => {
    const marketingComponentByType = PromotionsStore.getMarketingComponentByType(require("MarketingComponentType").MarketingComponentType.GIFT_ICON_COACHMARK);
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
  const tmpResult28 = get_initialized;
  const stateFromStores5 = tmpResult28.useStateFromStores(items7, () => {
    const marketingComponentByType = PromotionsStore.getMarketingComponentByType(require("MarketingComponentType").MarketingComponentType.GIFT_REMINDER_COACHMARK);
    let prop = null;
    if (null != marketingComponentByType) {
      prop = null;
      if ("giftReminderCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
        prop = marketingComponentByType.properties.properties.giftReminderCoachmark;
      }
    }
    return prop;
  });
  const GiftPromotionReminderExperiment = tmp(10497).GiftPromotionReminderExperiment;
  let enabled2 = GiftPromotionReminderExperiment.useConfig({ location: tmp5 }).enabled;
  const tmpResult29 = GiftingBadgesUtils;
  const giftingBadgeCoachmarkVariant = tmpResult29.useGiftingBadgeCoachmarkVariant({ platform: "native", location: tmp5 });
  let isDismissed = null != stateFromStores3;
  if (isDismissed) {
    const tmpResult30 = DismissibleContentUnsafeUtils;
    isDismissed = tmpResult30.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(tmp(4808).DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET, stateFromStores3).isDismissed;
  }
  let isDismissed2 = null != stateFromStores3;
  if (isDismissed2) {
    const tmpResult31 = DismissibleContentUnsafeUtils;
    isDismissed2 = tmpResult31.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(tmp(4808).DismissibleContent.GIFTING_PROMOTION_REMINDER, stateFromStores3).isDismissed;
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
  const tmpResult32 = useNitroFileUploadMarketingEligible;
  const nitroFileUploadAnnouncementEligible = tmpResult32.useNitroFileUploadAnnouncementEligible(tmp5);
  const tmpResult33 = useNitroFileUploadMarketingEligible;
  const nitroFileUploadUpsellEligible = tmpResult33.useNitroFileUploadUpsellEligible(tmp5);
  const tmpResult34 = RobloxConnectionCoachmark;
  const shouldShowRobloxConnectionCoachmark = tmpResult34.useShouldShowRobloxConnectionCoachmark();
  const tmpResult35 = DisplayNameStylesFlywheelExperiment;
  const isDisplayNameStylesFlywheelSettersEnabled = tmpResult35.useIsDisplayNameStylesFlywheelSettersEnabled(tmp5);
  CustomTypingIndicatorExperiment;
  const obj5 = {};
  if (stateFromStores) {
    const GOOGLE_PLAY_PRICE_CHANGE_ACTION_SHEET = tmp(4808).DismissibleContent.GOOGLE_PLAY_PRICE_CHANGE_ACTION_SHEET;
    const obj6 = { isEligible: tmp8, newSnowflakeId: priceChangeId, actionSheetProperties: {} };
    priceChangeId = undefined;
    if (tmp9 != null) {
      priceChangeId = tmp9.priceChangeId;
    }
    obj5[GOOGLE_PLAY_PRICE_CHANGE_ACTION_SHEET] = obj6;
    let tmp37 = null != premiumDiscountOffer;
    const DISCOUNT_OFFER_ACTION_SHEET = tmp(4808).DismissibleContent.DISCOUNT_OFFER_ACTION_SHEET;
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
    const MOBILE_PREMIUM_TRIAL_OFFER_ACTION_SHEET = tmp(4808).DismissibleContent.MOBILE_PREMIUM_TRIAL_OFFER_ACTION_SHEET;
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
    const PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL = tmp(4808).DismissibleContent.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL;
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
    const PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL = tmp(4808).DismissibleContent.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL;
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
    let tmp50 = tmp34;
    const GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET = tmp(4808).DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET;
    if (null != stateFromStores4) {
      tmp50 = isGiftCoachmarkAssetReady;
    }
    const obj17 = { isEligible: tmp50, newSnowflakeId: stateFromStores3, actionSheetProperties: obj18 };
    obj18 = { coachmarkComponent: stateFromStores4 };
    obj5[GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET] = obj17;
    let tmp51 = !tmp34;
    const GIFTING_PROMOTION_REMINDER = tmp(4808).DismissibleContent.GIFTING_PROMOTION_REMINDER;
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
    const obj25 = { isEligible: isDisplayNameStylesFlywheelSettersEnabled, actionSheetProperties: {} };
    obj5[dismissible_content.DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_COACHMARK] = obj25;
    const obj26 = { isEligible: true, actionSheetProperties: {} };
    obj5[dismissible_content.DismissibleContent.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT] = obj26;
    const obj27 = { isEligible: nitroFileUploadAnnouncementEligible, actionSheetProperties: {} };
    obj5[dismissible_content.DismissibleContent.NITRO_FILE_UPLOAD_1GB_ANNOUNCEMENT] = obj27;
    const obj28 = { isEligible: nitroFileUploadUpsellEligible, actionSheetProperties: {} };
    obj5[dismissible_content.DismissibleContent.NITRO_FILE_UPLOAD_1GB_UPSELL] = obj28;
    const obj29 = { isEligible: tmp33, actionSheetProperties: {} };
    obj5[dismissible_content.DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_COACHMARK] = obj29;
    const MOBILE_REFERRAL_PROGRAM_BOTTOM_SHEET_ENTRYPOINT = tmp(4808).DismissibleContent.MOBILE_REFERRAL_PROGRAM_BOTTOM_SHEET_ENTRYPOINT;
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
});
const result = size.fileFinishedImporting("modules/upsell_tooltip/native/useMainViewTooltipActionSheetEligibilityMap.tsx");

export const useMainViewTooltipActionSheetMap = tmp4;
