// Module ID: 17766
// Function ID: 17767
// Name: useMainViewTooltipActionSheetEligibilityMap
// Dependencies: [32, 7181, 17736, 9131, 1244, 2059, 1085, 1392, 1095, 558, 576, 504, 17767, 1628, 8097, 8093, 17768, 7176, 17769, 14085, 10105, 10104, 10110, 4940, 2049, 17770, 17771, 17734, 17748, 15228, 12423, 2]

// Module 17766 (useMainViewTooltipActionSheetEligibilityMap)
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1085 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1095 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1628 */;
import dismissible_content from "dismissible_content" /* 2049 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4940 */;
import usePremiumTrialOffer from "usePremiumTrialOffer" /* 7176 */;
import useIsEligibleSenderForReferralProgram from "useIsEligibleSenderForReferralProgram" /* 8093 */;
import usePremiumDiscountOffer from "usePremiumDiscountOffer" /* 8097 */;
import MarketingComponentType from "MarketingComponentType" /* 10105 */;
import GiftingBadgesUtils from "GiftingBadgesUtils" /* 10110 */;
import CustomTypingIndicatorExperiment from "CustomTypingIndicatorExperiment" /* 12423 */;
import usePromotionMarketingComponent from "usePromotionMarketingComponent" /* 14085 */;
import DisplayNameStylesFlywheelExperiment from "DisplayNameStylesFlywheelExperiment" /* 15228 */;
import RobloxConnectionCoachmark from "RobloxConnectionCoachmark" /* 17734 */;
import ConnectionDeprecationBottomSheet from "ConnectionDeprecationBottomSheet" /* 17748 */;
import MainViewTooltipActionSheetsDisabledExperimentDefault from "MainViewTooltipActionSheetsDisabledExperiment" /* 17767 */;
import useNitroFileUploadMarketingEligible from "useNitroFileUploadMarketingEligible" /* 17771 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ReferralTrialStore from "ReferralTrialStore" /* 7181 */;
import GooglePlayPriceChangeStore from "GooglePlayPriceChangeStore" /* 17736 */;
import PromotionsStore from "PromotionsStore" /* 9131 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1244 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 2059 */;
import PremiumConstants from "PremiumConstants" /* 1392 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID;
let PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID;
let PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID;
let PREMIUM_TIER_2_REACTIVATION_TRIAL_ID;
let tmp4;
const useGiftingPromotionAssetsReadyDefault = tmp4(17770);
let PlatformTypes = Constants.PlatformTypes;
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
  let items8;
  let mobileBottomSheet;
  let premiumDiscountOffer;
  let premiumTrialOffer;
  let stateFromStores2;
  let stateFromStores4;
  let tmp10;
  let tmp11;
  let tmp16;
  let tmp17;
  let tmp26;
  let tmp27;
  let tmp30;
  let tmp31;
  let tmp32;
  let tmp37;
  let tmp4;
  let tmp41;
  let tmp42;
  let tmp45;
  let tmp46;
  let tmp5;
  let tmp50;
  let tmp51;
  let tmp55;
  let tmp56;
  let tmp58;
  let tmp66;
  let tmp68;
  let tmp70;
  let tmp = first;
  const obj = first(premiumDiscountOffer[10]);
  const cResult = obj.c(148);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp6 = stateFromStores4;
    let items = [stateFromStores4];
    class S {
      constructor() {
        return stateFromStores4.hasLoaded(isGiftCoachmarkAssetReady.PRELOADED_USER_SETTINGS);
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
    const items1 = [enabled2];
    class S {
      constructor() {
        return stateFromStores4.hasLoaded(isGiftCoachmarkAssetReady.PRELOADED_USER_SETTINGS);
      }
    }
    cResult[2] = items1;
    cResult[3] = tmp13;
    tmp11 = tmp13;
    tmp10 = items1;
  } else {
    tmp10 = cResult[2];
    tmp11 = cResult[3];
  }
  let tmp15 = stateFromStores;
  const tmpResult22 = tmp(premiumDiscountOffer[11]);
  const stateFromStores1 = tmpResult22.useStateFromStores(tmp10, tmp11);
  if (stateFromStores) {
    tmp15 = !disabled;
  }
  if (tmp15) {
    tmp15 = !stateFromStores1;
  }
  if (tmp15) {
    const tmpResult23 = tmp(premiumDiscountOffer[13]);
    tmp15 = !tmpResult23.isMetaQuest();
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [mobileBottomSheet];
    class S {
      constructor() {
        return stateFromStores4.hasLoaded(isGiftCoachmarkAssetReady.PRELOADED_USER_SETTINGS);
      }
    }
    cResult[4] = items2;
    cResult[5] = tmp19;
    tmp17 = tmp19;
    tmp16 = items2;
  } else {
    tmp16 = cResult[4];
    tmp17 = cResult[5];
  }
  const tmpResult24 = tmp(premiumDiscountOffer[11]);
  const tmp21 = premiumTrialOffer(tmpResult24.useStateFromStoresArray(tmp16, tmp17), 2);
  first = tmp21[0];
  importDefault = tmp23;
  const tmpResult25 = tmp(premiumDiscountOffer[14]);
  premiumDiscountOffer = tmpResult25.usePremiumDiscountOffer();
  const tmpResult26 = tmp(premiumDiscountOffer[15]);
  const isEligibleSenderForReferralProgram = tmpResult26.useIsEligibleSenderForReferralProgram();
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items3 = [enabled];
    class P {
      constructor() {
        const items = [enabled.getReferralsRemaining({ bypassFetch: true }), enabled.getReminderStateId()];
        return items;
      }
    }
    cResult[6] = items3;
    cResult[7] = P;
    tmp27 = P;
    tmp26 = items3;
  } else {
    tmp26 = cResult[6];
    tmp27 = cResult[7];
  }
  const tmpResult27 = tmp(premiumDiscountOffer[11]);
  [tmp30, tmp31] = premiumTrialOffer(tmpResult27.useStateFromStoresArray(tmp26, tmp27), 2);
  premiumTrialOffer(tmpResult27.useStateFromStoresArray(tmp26, tmp27), 2);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { location: tmp9 };
    class P {
      constructor() {
        const items = [enabled.getReferralsRemaining({ bypassFetch: true }), enabled.getReminderStateId()];
        return items;
      }
    }
    tmp32 = obj4;
  } else {
    tmp32 = cResult[8];
  }
  const RecurringReferralReminderExperiment = tmp(tmp2[16]).RecurringReferralReminderExperiment;
  RecurringReferralReminderExperiment.useConfig(tmp32).bottomSheetEnabled && isEligibleSenderForReferralProgram && null != tmp30 && tmp30 > 0 && null != tmp31;
  const tmpResult28 = tmp(premiumDiscountOffer[17]);
  premiumTrialOffer = tmpResult28.usePremiumTrialOffer();
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { location: tmp9 };
    class P {
      constructor() {
        const items = [enabled.getReferralsRemaining({ bypassFetch: true }), enabled.getReminderStateId()];
        return items;
      }
    }
    tmp37 = obj5;
  } else {
    tmp37 = cResult[9];
  }
  const PremiumTrialOfferActionSheetKillSwitchExperiment = tmp(tmp2[18]).PremiumTrialOfferActionSheetKillSwitchExperiment;
  enabled = PremiumTrialOfferActionSheetKillSwitchExperiment.useConfig(tmp37).enabled;
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
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    const items4 = [stateFromStores2];
    class W {
      constructor() {
        const giftPromotion = stateFromStores2.getGiftPromotion();
        let id;
        if (giftPromotion != null) {
          id = giftPromotion.id;
        }
        return id;
      }
    }
    cResult[10] = items4;
    cResult[11] = W;
    tmp42 = W;
    tmp41 = items4;
  } else {
    tmp41 = cResult[10];
    tmp42 = cResult[11];
  }
  const tmpResult30 = tmp(premiumDiscountOffer[11]);
  stateFromStores2 = tmpResult30.useStateFromStores(tmp41, tmp42);
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    const items5 = [stateFromStores2];
    class W {
      constructor() {
        const giftPromotion = stateFromStores2.getGiftPromotion();
        let id;
        if (giftPromotion != null) {
          id = giftPromotion.id;
        }
        return id;
      }
    }
    cResult[12] = items5;
    cResult[13] = tmp48;
    tmp46 = tmp48;
    tmp45 = items5;
  } else {
    tmp45 = cResult[12];
    tmp46 = cResult[13];
  }
  const tmpResult31 = tmp(premiumDiscountOffer[11]);
  const stateFromStores3 = tmpResult31.useStateFromStores(tmp45, tmp46);
  if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
    const items6 = [stateFromStores2];
    class W {
      constructor() {
        const giftPromotion = stateFromStores2.getGiftPromotion();
        let id;
        if (giftPromotion != null) {
          id = giftPromotion.id;
        }
        return id;
      }
    }
    cResult[14] = items6;
    cResult[15] = tmp53;
    tmp51 = tmp53;
    tmp50 = items6;
  } else {
    tmp50 = cResult[14];
    tmp51 = cResult[15];
  }
  const tmpResult32 = tmp(premiumDiscountOffer[11]);
  stateFromStores4 = tmpResult32.useStateFromStores(tmp50, tmp51);
  if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
    const obj6 = { location: tmp9 };
    class W {
      constructor() {
        const giftPromotion = stateFromStores2.getGiftPromotion();
        let id;
        if (giftPromotion != null) {
          id = giftPromotion.id;
        }
        return id;
      }
    }
    tmp55 = obj6;
  } else {
    tmp55 = cResult[16];
  }
  const GiftPromotionReminderExperiment = tmp(tmp2[21]).GiftPromotionReminderExperiment;
  enabled2 = GiftPromotionReminderExperiment.useConfig(tmp55).enabled;
  if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
    const obj7 = { platform: "native", location: tmp9 };
    class W {
      constructor() {
        const giftPromotion = stateFromStores2.getGiftPromotion();
        let id;
        if (giftPromotion != null) {
          id = giftPromotion.id;
        }
        return id;
      }
    }
    tmp56 = obj7;
  } else {
    tmp56 = cResult[17];
  }
  const tmpResult33 = tmp(premiumDiscountOffer[22]);
  const giftingBadgeCoachmarkVariant = tmpResult33.useGiftingBadgeCoachmarkVariant(tmp56);
  if (cResult[18] !== stateFromStores2) {
    let isDismissed = null != stateFromStores2;
    if (isDismissed) {
      const tmpResult34 = tmp(premiumDiscountOffer[23]);
      isDismissed = tmpResult34.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(tmp(tmp2[24]).DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET, stateFromStores2).isDismissed;
    }
    class W {
      constructor() {
        const giftPromotion = stateFromStores2.getGiftPromotion();
        let id;
        if (giftPromotion != null) {
          id = giftPromotion.id;
        }
        return id;
      }
    }
    cResult[19] = isDismissed;
    tmp58 = isDismissed;
  } else {
    tmp58 = cResult[19];
  }
  PlatformTypes = tmp58;
  let isDismissed2 = null != stateFromStores2;
  if (isDismissed2) {
    const tmpResult35 = tmp(premiumDiscountOffer[23]);
    isDismissed2 = tmpResult35.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(tmp(tmp2[24]).DismissibleContent.GIFTING_PROMOTION_REMINDER, stateFromStores2).isDismissed;
  }
  let tmp60 = null;
  const tmp8Result = tmp8(premiumDiscountOffer[25]);
  if (!tmp58) {
    tmp60 = stateFromStores3;
  }
  let tmp61 = null;
  if (!isDismissed2) {
    tmp61 = stateFromStores4;
  }
  const tmp8ResultResult = tmp8Result(tmp60, tmp61);
  const isGiftCoachmarkAssetReady = tmp8ResultResult.isGiftCoachmarkAssetReady;
  isGiftReminderAssetReady = tmp8ResultResult.isGiftReminderAssetReady;
  const tmpResult36 = tmp(premiumDiscountOffer[26]);
  const nitroFileUploadAnnouncementEligible = tmpResult36.useNitroFileUploadAnnouncementEligible(tmp9);
  const tmpResult37 = tmp(premiumDiscountOffer[26]);
  const nitroFileUploadUpsellEligible = tmpResult37.useNitroFileUploadUpsellEligible(tmp9);
  const tmpResult38 = tmp(premiumDiscountOffer[27]);
  const shouldShowRobloxConnectionCoachmark = tmpResult38.useShouldShowRobloxConnectionCoachmark();
  if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
    const items7 = [PlatformTypes.LEAGUE_OF_LEGENDS, ];
    class W {
      constructor() {
        const giftPromotion = stateFromStores2.getGiftPromotion();
        let id;
        if (giftPromotion != null) {
          id = giftPromotion.id;
        }
        return id;
      }
    }
    cResult[20] = items7;
    tmp66 = items7;
  } else {
    tmp66 = cResult[20];
  }
  if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
    const obj8 = { deprecatedPlatformTypes: tmp66 };
    class W {
      constructor() {
        const giftPromotion = stateFromStores2.getGiftPromotion();
        let id;
        if (giftPromotion != null) {
          id = giftPromotion.id;
        }
        return id;
      }
    }
    tmp68 = obj8;
  } else {
    tmp68 = cResult[21];
  }
  const tmpResult39 = tmp(premiumDiscountOffer[28]);
  const shouldShowConnectionDeprecationBottomSheet = tmpResult39.useShouldShowConnectionDeprecationBottomSheet(tmp68);
  if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
    const obj9 = { deprecatedPlatformTypes: items8 };
    items8 = [];
    class W {
      constructor() {
        const giftPromotion = stateFromStores2.getGiftPromotion();
        let id;
        if (giftPromotion != null) {
          id = giftPromotion.id;
        }
        return id;
      }
    }
    cResult[22] = obj9;
    tmp70 = obj9;
  } else {
    tmp70 = cResult[22];
  }
  const tmpResult40 = tmp(premiumDiscountOffer[28]);
  const shouldShowConnectionDeprecationBottomSheet1 = tmpResult40.useShouldShowConnectionDeprecationBottomSheet(tmp70);
  const tmpResult41 = tmp(premiumDiscountOffer[29]);
  const isDisplayNameStylesFlywheelSettersEnabled = tmpResult41.useIsDisplayNameStylesFlywheelSettersEnabled(tmp9);
  const tmpResult42 = tmp(premiumDiscountOffer[30]);
  const canSet = tmpResult42.useCustomTypingIndicatorConfig(tmp9).canSet;
  if (cResult[23] === tmp21[1]) {
    let tmp74;
    let tmp75;
    if (cResult[24] === first) {
      tmp74 = cResult[25];
    }
    if (cResult[26] !== premiumDiscountOffer) {
      function isDiscountOfferEligible() {
        return null != premiumDiscountOffer && null == premiumDiscountOffer.expiresAt;
      }
      cResult[26] = premiumDiscountOffer;
      class W {
        constructor() {
          const giftPromotion = stateFromStores2.getGiftPromotion();
          let id;
          if (giftPromotion != null) {
            id = giftPromotion.id;
          }
          return id;
        }
      }
      cResult[27] = isDiscountOfferEligible;
      tmp75 = isDiscountOfferEligible;
    } else {
      tmp75 = cResult[27];
    }
    if (cResult[28] === enabled) {
      let tmp76;
      let tmp80;
      let tmp84;
      if (cResult[29] === premiumTrialOffer) {
        tmp76 = cResult[30];
      }
      const tmp78 = cResult[31];
      class W {
        constructor() {
          const giftPromotion = stateFromStores2.getGiftPromotion();
          let id;
          if (giftPromotion != null) {
            id = giftPromotion.id;
          }
          return id;
        }
      }
      if (tmp78 !== undefined) {
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
        class W {
          constructor() {
            const giftPromotion = stateFromStores2.getGiftPromotion();
            let id;
            if (giftPromotion != null) {
              id = giftPromotion.id;
            }
            return id;
          }
        }
        cResult[31] = dismissibleContent;
        cResult[32] = isPremiumMarketingMomentAnnouncementEligible;
        tmp80 = isPremiumMarketingMomentAnnouncementEligible;
      } else {
        tmp80 = cResult[32];
      }
      let dismissibleContent1;
      const tmp82 = cResult[33];
      if (mobileBottomSheet != null) {
        dismissibleContent1 = mobileBottomSheet.dismissibleContent;
      }
      if (tmp82 !== dismissibleContent1) {
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
        class W {
          constructor() {
            const giftPromotion = stateFromStores2.getGiftPromotion();
            let id;
            if (giftPromotion != null) {
              id = giftPromotion.id;
            }
            return id;
          }
        }
        cResult[33] = dismissibleContent2;
        cResult[34] = isPremiumMarketingMomentReminderEligible;
        tmp84 = isPremiumMarketingMomentReminderEligible;
      } else {
        tmp84 = cResult[34];
      }
      let closure_12 = tmp86;
      let closure_13 = tmp87;
      if (cResult[35] === null != stateFromStores3) {
        let tmp88;
        if (cResult[36] === isGiftCoachmarkAssetReady) {
          tmp88 = cResult[37];
        }
        if (cResult[38] === stateFromStores2) {
          if (cResult[39] === enabled2) {
            if (cResult[40] === stateFromStores4) {
              if (cResult[41] === null != stateFromStores3) {
                if (cResult[42] === null != stateFromStores4) {
                  if (cResult[43] === tmp58) {
                    if (tmp15) {
                      let tmp91;
                      let tmp94;
                      if (cResult[47] !== tmp74) {
                        const tmp74Result = tmp74();
                        cResult[47] = tmp74;
                        class W {
                          constructor() {
                            const giftPromotion = stateFromStores2.getGiftPromotion();
                            let id;
                            if (giftPromotion != null) {
                              id = giftPromotion.id;
                            }
                            return id;
                          }
                        }
                        cResult[48] = tmp74Result;
                        tmp91 = tmp74Result;
                      } else {
                        tmp91 = cResult[48];
                      }
                      let priceChangeId;
                      if (tmp21[1] != null) {
                        priceChangeId = tmp23.priceChangeId;
                      }
                      class W {
                        constructor() {
                          const giftPromotion = stateFromStores2.getGiftPromotion();
                          let id;
                          if (giftPromotion != null) {
                            id = giftPromotion.id;
                          }
                          return id;
                        }
                      }
                      if (cResult[49] === Symbol.for("react.memo_cache_sentinel")) {
                        const obj10 = {};
                        cResult[49] = obj10;
                        class W {
                          constructor() {
                            const giftPromotion = stateFromStores2.getGiftPromotion();
                            let id;
                            if (giftPromotion != null) {
                              id = giftPromotion.id;
                            }
                            return id;
                          }
                        }
                      } else {
                        tmp94 = cResult[49];
                      }
                      if (cResult[50] === tmp91) {
                        let tmp98;
                        const tmp75Result = tmp75();
                        class W {
                          constructor() {
                            const giftPromotion = stateFromStores2.getGiftPromotion();
                            let id;
                            if (giftPromotion != null) {
                              id = giftPromotion.id;
                            }
                            return id;
                          }
                        }
                        if (cResult[53] !== premiumDiscountOffer) {
                          let obj12;
                          if (null != premiumDiscountOffer) {
                            obj12 = { userDiscountOffer: premiumDiscountOffer };
                            const obj11 = { userDiscountOffer: premiumDiscountOffer };
                          } else {
                            obj12 = {};
                          }
                          cResult[53] = premiumDiscountOffer;
                          class W {
                            constructor() {
                              const giftPromotion = stateFromStores2.getGiftPromotion();
                              let id;
                              if (giftPromotion != null) {
                                id = giftPromotion.id;
                              }
                              return id;
                            }
                          }
                          cResult[54] = obj12;
                          tmp98 = obj12;
                        } else {
                          tmp98 = cResult[54];
                        }
                        if (cResult[55] === tmp75Result) {
                          if (cResult[56] === undefined) {
                            let tmp100;
                            let tmp103;
                            if (cResult[59] !== tmp76) {
                              const tmp76Result = tmp76();
                              cResult[59] = tmp76;
                              class W {
                                constructor() {
                                  const giftPromotion = stateFromStores2.getGiftPromotion();
                                  let id;
                                  if (giftPromotion != null) {
                                    id = giftPromotion.id;
                                  }
                                  return id;
                                }
                              }
                              cResult[60] = tmp76Result;
                              tmp100 = tmp76Result;
                            } else {
                              tmp100 = cResult[60];
                            }
                            class W {
                              constructor() {
                                const giftPromotion = stateFromStores2.getGiftPromotion();
                                let id;
                                if (giftPromotion != null) {
                                  id = giftPromotion.id;
                                }
                                return id;
                              }
                            }
                            if (cResult[61] !== premiumTrialOffer) {
                              let obj14;
                              if (null != premiumTrialOffer) {
                                obj14 = { userTrialOffer: premiumTrialOffer };
                                const obj13 = { userTrialOffer: premiumTrialOffer };
                              } else {
                                obj14 = {};
                              }
                              cResult[61] = premiumTrialOffer;
                              class W {
                                constructor() {
                                  const giftPromotion = stateFromStores2.getGiftPromotion();
                                  let id;
                                  if (giftPromotion != null) {
                                    id = giftPromotion.id;
                                  }
                                  return id;
                                }
                              }
                              cResult[62] = obj14;
                              tmp103 = obj14;
                            } else {
                              tmp103 = cResult[62];
                            }
                            if (cResult[63] === tmp100) {
                              if (cResult[64] === undefined) {
                                const tmp80Result = tmp80();
                                class W {
                                  constructor() {
                                    const giftPromotion = stateFromStores2.getGiftPromotion();
                                    let id;
                                    if (giftPromotion != null) {
                                      id = giftPromotion.id;
                                    }
                                    return id;
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
                                if (cResult[67] === mobileBottomSheet) {
                                  if (cResult[68] === id) {
                                    let tmp109;
                                    if (cResult[69] === promotionId) {
                                      tmp109 = cResult[70];
                                    }
                                    if (cResult[71] === tmp80Result) {
                                      if (cResult[72] === tmp106) {
                                        const tmp84Result = tmp84();
                                        class W {
                                          constructor() {
                                            const giftPromotion = stateFromStores2.getGiftPromotion();
                                            let id;
                                            if (giftPromotion != null) {
                                              id = giftPromotion.id;
                                            }
                                            return id;
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
                                        if (cResult[75] === mobileBottomSheet) {
                                          if (cResult[76] === id1) {
                                            let tmp115;
                                            if (cResult[77] === promotionId1) {
                                              tmp115 = cResult[78];
                                            }
                                            if (cResult[79] === tmp84Result) {
                                              if (cResult[80] === tmp112) {
                                                let tmp117;
                                                let tmp119;
                                                if (cResult[83] !== tmp88) {
                                                  const tmp88Result = tmp88();
                                                  cResult[83] = tmp88;
                                                  class W {
                                                    constructor() {
                                                      const giftPromotion = stateFromStores2.getGiftPromotion();
                                                      let id;
                                                      if (giftPromotion != null) {
                                                        id = giftPromotion.id;
                                                      }
                                                      return id;
                                                    }
                                                  }
                                                  cResult[84] = tmp88Result;
                                                  tmp117 = tmp88Result;
                                                } else {
                                                  tmp117 = cResult[84];
                                                }
                                                if (cResult[85] !== stateFromStores3) {
                                                  const obj15 = { coachmarkComponent: stateFromStores3 };
                                                  class W {
                                                    constructor() {
                                                      const giftPromotion = stateFromStores2.getGiftPromotion();
                                                      let id;
                                                      if (giftPromotion != null) {
                                                        id = giftPromotion.id;
                                                      }
                                                      return id;
                                                    }
                                                  }
                                                  cResult[86] = obj15;
                                                  tmp119 = obj15;
                                                } else {
                                                  tmp119 = cResult[86];
                                                }
                                                class W {
                                                  constructor() {
                                                    const giftPromotion = stateFromStores2.getGiftPromotion();
                                                    let id;
                                                    if (giftPromotion != null) {
                                                      id = giftPromotion.id;
                                                    }
                                                    return id;
                                                  }
                                                }
                                                const obj16 = { isEligible: tmp117, newSnowflakeId: stateFromStores2, actionSheetProperties: tmp119 };
                                                cResult[87] = stateFromStores2;
                                                cResult[88] = tmp117;
                                                cResult[89] = tmp119;
                                                cResult[90] = obj16;
                                              }
                                            }
                                            const obj17 = { isEligible: null, newSnowflakeId: tmp112, actionSheetProperties: tmp115 };
                                            class W {
                                              constructor() {
                                                const giftPromotion = stateFromStores2.getGiftPromotion();
                                                let id;
                                                if (giftPromotion != null) {
                                                  id = giftPromotion.id;
                                                }
                                                return id;
                                              }
                                            }
                                            cResult[79] = tmp84Result;
                                            cResult[80] = tmp112;
                                            cResult[81] = tmp115;
                                            cResult[82] = obj17;
                                          }
                                        }
                                        const obj18 = { bottomSheetData: mobileBottomSheet, componentId: id1, promotionId: promotionId1 };
                                        cResult[75] = mobileBottomSheet;
                                        cResult[76] = id1;
                                        cResult[77] = promotionId1;
                                        cResult[78] = obj18;
                                        tmp115 = obj18;
                                      }
                                    }
                                    const obj19 = { isEligible: null, newSnowflakeId: tmp106, actionSheetProperties: tmp109 };
                                    class W {
                                      constructor() {
                                        const giftPromotion = stateFromStores2.getGiftPromotion();
                                        let id;
                                        if (giftPromotion != null) {
                                          id = giftPromotion.id;
                                        }
                                        return id;
                                      }
                                    }
                                    cResult[71] = tmp80Result;
                                    cResult[72] = tmp106;
                                    cResult[73] = tmp109;
                                    cResult[74] = obj19;
                                  }
                                }
                                const obj20 = { bottomSheetData: mobileBottomSheet, componentId: id, promotionId };
                                cResult[67] = mobileBottomSheet;
                                cResult[68] = id;
                                cResult[69] = promotionId;
                                cResult[70] = obj20;
                                tmp109 = obj20;
                              }
                            }
                            const obj21 = { isEligible: tmp100, newSnowflakeId: undefined, actionSheetProperties: tmp103 };
                            cResult[63] = tmp100;
                            cResult[64] = undefined;
                            cResult[65] = tmp103;
                            cResult[66] = obj21;
                          }
                        }
                        const obj22 = { isEligible: tmp75Result, newSnowflakeId: undefined, actionSheetProperties: tmp98 };
                        cResult[55] = tmp75Result;
                        cResult[56] = undefined;
                        cResult[57] = tmp98;
                        cResult[58] = obj22;
                      }
                      const obj23 = { isEligible: tmp91, newSnowflakeId: priceChangeId, actionSheetProperties: tmp94 };
                      cResult[50] = tmp91;
                      cResult[51] = priceChangeId;
                      cResult[52] = obj23;
                    } else {
                      const _Symbol = Symbol;
                      if (cResult[46] === Symbol.for("react.memo_cache_sentinel")) {
                        const obj24 = {};
                        cResult[46] = obj24;
                        class W {
                          constructor() {
                            const giftPromotion = stateFromStores2.getGiftPromotion();
                            let id;
                            if (giftPromotion != null) {
                              id = giftPromotion.id;
                            }
                            return id;
                          }
                        }
                      }
                      class W {
                        constructor() {
                          const giftPromotion = stateFromStores2.getGiftPromotion();
                          let id;
                          if (giftPromotion != null) {
                            id = giftPromotion.id;
                          }
                          return id;
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
            let tmp6 = null != stateFromStores2;
            if (tmp6) {
              let tmp8 = closure_9;
              if (tmp8) {
                tmp8 = enabled2 && null != stateFromStores4 && isGiftReminderAssetReady;
                const tmp9 = enabled2 && null != stateFromStores4 && isGiftReminderAssetReady;
              }
              tmp6 = tmp8;
            }
            tmp3 = tmp6;
          }
          return tmp3;
        }
        class W {
          constructor() {
            const giftPromotion = stateFromStores2.getGiftPromotion();
            let id;
            if (giftPromotion != null) {
              id = giftPromotion.id;
            }
            return id;
          }
        }
        cResult[38] = stateFromStores2;
        cResult[39] = enabled2;
        cResult[40] = stateFromStores4;
        cResult[41] = null != stateFromStores3;
        cResult[42] = null != stateFromStores4;
        cResult[43] = tmp58;
        cResult[44] = isGiftReminderAssetReady;
        cResult[45] = isGiftingPromotionReminderEligible;
      }
      function isGiftingPromotionFirstTimeEligible() {
        return closure_12 && isGiftCoachmarkAssetReady;
      }
      cResult[35] = null != stateFromStores3;
      cResult[36] = isGiftCoachmarkAssetReady;
      cResult[37] = isGiftingPromotionFirstTimeEligible;
      tmp88 = isGiftingPromotionFirstTimeEligible;
    }
    class W {
      constructor() {
        const giftPromotion = stateFromStores2.getGiftPromotion();
        let id;
        if (giftPromotion != null) {
          id = giftPromotion.id;
        }
        return id;
      }
    }
    cResult[28] = enabled;
    cResult[29] = premiumTrialOffer;
    cResult[30] = tmp77;
    tmp76 = tmp77;
  }
  function isGooglePlayPriceChangeEligible() {
    return first && null != closure_1;
  }
  cResult[23] = tmp21[1];
  cResult[24] = first;
  cResult[25] = isGooglePlayPriceChangeEligible;
  tmp74 = isGooglePlayPriceChangeEligible;
}) : (function useMainViewTooltipActionSheetMap() {
  let id;
  let id1;
  let id2;
  let id3;
  let isGiftCoachmarkAssetReady;
  let isGiftReminderAssetReady;
  let items8;
  let items9;
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
  let tmp13;
  let tmp14;
  let tmp37;
  let tmp8;
  let tmp9;
  const f131617 = () => {
    const items = [, ];
    ({ shouldShowGooglePlayPriceChange: arr[0], priceChangeRecord: arr[1] } = GooglePlayPriceChangeStore);
    return items;
  };
  const f131618 = () => {
    const items = [ReferralTrialStore.getReferralsRemaining({ bypassFetch: true }), ReferralTrialStore.getReminderStateId()];
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
  const tmpResult20 = get_initialized;
  [tmp8, tmp9] = tmpResult20.useStateFromStoresArray(items2, f131617);
  _slicedToArray(tmpResult20.useStateFromStoresArray(items2, f131617), 2);
  const tmpResult21 = usePremiumDiscountOffer;
  const premiumDiscountOffer = tmpResult21.usePremiumDiscountOffer();
  const tmpResult22 = useIsEligibleSenderForReferralProgram;
  const isEligibleSenderForReferralProgram = tmpResult22.useIsEligibleSenderForReferralProgram();
  const items3 = [ReferralTrialStore];
  const tmpResult23 = get_initialized;
  [tmp13, tmp14] = tmpResult23.useStateFromStoresArray(items3, f131618);
  _slicedToArray(tmpResult23.useStateFromStoresArray(items3, f131618), 2);
  const RecurringReferralReminderExperiment = tmp(17768).RecurringReferralReminderExperiment;
  let bottomSheetEnabled = RecurringReferralReminderExperiment.useConfig({ location: tmp5 }).bottomSheetEnabled;
  const tmpResult24 = usePremiumTrialOffer;
  const premiumTrialOffer = tmpResult24.usePremiumTrialOffer();
  const PremiumTrialOfferActionSheetKillSwitchExperiment = tmp(17769).PremiumTrialOfferActionSheetKillSwitchExperiment;
  const enabled = PremiumTrialOfferActionSheetKillSwitchExperiment.useConfig({ location: tmp5 }).enabled;
  const tmpResult25 = usePromotionMarketingComponent;
  const promotionMarketingComponent = tmpResult25.usePromotionMarketingComponent(tmp(10105).MarketingComponentType.MOBILE_BOTTOM_SHEET);
  let oneofKind;
  if (promotionMarketingComponent != null) {
    oneofKind = promotionMarketingComponent.properties.properties.oneofKind;
  }
  let mobileBottomSheet = null;
  if ("mobileBottomSheet" === oneofKind) {
    mobileBottomSheet = promotionMarketingComponent.properties.properties.mobileBottomSheet;
  }
  const items4 = [PromotionsStore];
  const tmpResult26 = get_initialized;
  const stateFromStores2 = tmpResult26.useStateFromStores(items4, () => {
    const giftPromotion = PromotionsStore.getGiftPromotion();
    let id;
    if (giftPromotion != null) {
      id = giftPromotion.id;
    }
    return id;
  });
  const items5 = [PromotionsStore];
  const tmpResult27 = get_initialized;
  const stateFromStores3 = tmpResult27.useStateFromStores(items5, () => {
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
  const items6 = [PromotionsStore];
  const tmpResult28 = get_initialized;
  const stateFromStores4 = tmpResult28.useStateFromStores(items6, () => {
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
  const GiftPromotionReminderExperiment = tmp(10104).GiftPromotionReminderExperiment;
  let enabled2 = GiftPromotionReminderExperiment.useConfig({ location: tmp5 }).enabled;
  const tmpResult29 = GiftingBadgesUtils;
  const giftingBadgeCoachmarkVariant = tmpResult29.useGiftingBadgeCoachmarkVariant({ platform: "native", location: tmp5 });
  let isDismissed = null != stateFromStores2;
  if (isDismissed) {
    const tmpResult30 = DismissibleContentUnsafeUtils;
    isDismissed = tmpResult30.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(tmp(2049).DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET, stateFromStores2).isDismissed;
  }
  let isDismissed2 = null != stateFromStores2;
  if (isDismissed2) {
    const tmpResult31 = DismissibleContentUnsafeUtils;
    isDismissed2 = tmpResult31.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(tmp(2049).DismissibleContent.GIFTING_PROMOTION_REMINDER, stateFromStores2).isDismissed;
  }
  let tmp24 = null;
  const tmp4Result = useGiftingPromotionAssetsReadyDefault;
  if (!isDismissed) {
    tmp24 = stateFromStores3;
  }
  let tmp25 = null;
  if (!isDismissed2) {
    tmp25 = stateFromStores4;
  }
  ({ isGiftCoachmarkAssetReady, isGiftReminderAssetReady } = tmp4Result(tmp24, tmp25));
  tmp4Result(tmp24, tmp25);
  const tmpResult32 = useNitroFileUploadMarketingEligible;
  const nitroFileUploadAnnouncementEligible = tmpResult32.useNitroFileUploadAnnouncementEligible(tmp5);
  const tmpResult33 = useNitroFileUploadMarketingEligible;
  const nitroFileUploadUpsellEligible = tmpResult33.useNitroFileUploadUpsellEligible(tmp5);
  const items7 = [, ];
  ({ LEAGUE_OF_LEGENDS: arr8[0], RIOT_GAMES: arr8[1] } = PlatformTypes);
  const tmpResult34 = RobloxConnectionCoachmark;
  const shouldShowRobloxConnectionCoachmark = tmpResult34.useShouldShowRobloxConnectionCoachmark();
  const tmpResult35 = ConnectionDeprecationBottomSheet;
  const shouldShowConnectionDeprecationBottomSheet = tmpResult35.useShouldShowConnectionDeprecationBottomSheet({ deprecatedPlatformTypes: items7 });
  const obj5 = { deprecatedPlatformTypes: items8 };
  items8 = [PlatformTypes.BATTLENET];
  const tmpResult36 = ConnectionDeprecationBottomSheet;
  const shouldShowConnectionDeprecationBottomSheet1 = tmpResult36.useShouldShowConnectionDeprecationBottomSheet(obj5);
  const tmpResult37 = DisplayNameStylesFlywheelExperiment;
  const isDisplayNameStylesFlywheelSettersEnabled = tmpResult37.useIsDisplayNameStylesFlywheelSettersEnabled(tmp5);
  CustomTypingIndicatorExperiment;
  const obj6 = {};
  const tmp30 = PlatformTypes;
  if (stateFromStores) {
    const GOOGLE_PLAY_PRICE_CHANGE_ACTION_SHEET = tmp(2049).DismissibleContent.GOOGLE_PLAY_PRICE_CHANGE_ACTION_SHEET;
    const obj7 = { isEligible: tmp8, newSnowflakeId: priceChangeId, actionSheetProperties: {} };
    priceChangeId = undefined;
    if (tmp9 != null) {
      priceChangeId = tmp9.priceChangeId;
    }
    obj6[GOOGLE_PLAY_PRICE_CHANGE_ACTION_SHEET] = obj7;
    let tmp39 = null != premiumDiscountOffer;
    const DISCOUNT_OFFER_ACTION_SHEET = tmp(2049).DismissibleContent.DISCOUNT_OFFER_ACTION_SHEET;
    if (tmp39) {
      tmp39 = null == premiumDiscountOffer.expiresAt;
    }
    const obj8 = { isEligible: tmp39, newSnowflakeId: id, actionSheetProperties: obj10 };
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
    const MOBILE_PREMIUM_TRIAL_OFFER_ACTION_SHEET = tmp(2049).DismissibleContent.MOBILE_PREMIUM_TRIAL_OFFER_ACTION_SHEET;
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
    const PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL = tmp(2049).DismissibleContent.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL;
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
    const PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL = tmp(2049).DismissibleContent.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL;
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
    let tmp52 = tmp36;
    const GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET = tmp(2049).DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET;
    if (null != stateFromStores3) {
      tmp52 = isGiftCoachmarkAssetReady;
    }
    const obj18 = { isEligible: tmp52, newSnowflakeId: stateFromStores2, actionSheetProperties: obj19 };
    obj19 = { coachmarkComponent: stateFromStores3 };
    obj6[GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET] = obj18;
    let tmp53 = !tmp36;
    const GIFTING_PROMOTION_REMINDER = tmp(2049).DismissibleContent.GIFTING_PROMOTION_REMINDER;
    if (null != stateFromStores3) {
      tmp53 = null == stateFromStores4;
    }
    let tmp54 = !tmp53;
    if (tmp54) {
      let tmp55 = null != stateFromStores2;
      if (tmp55) {
        let tmp56 = isDismissed;
        if (tmp56) {
          if (enabled2) {
            enabled2 = null != stateFromStores4;
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
    const obj20 = { isEligible: tmp54, newSnowflakeId: stateFromStores2, actionSheetProperties: obj21 };
    obj21 = { coachmarkComponent: stateFromStores4 };
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
    obj28 = { platformTypes: items7 };
    obj6[dismissible_content.DismissibleContent.RIOT_CONNECTION_DEPRECATION_DISABLE] = obj27;
    const obj29 = { isEligible: shouldShowConnectionDeprecationBottomSheet1, actionSheetProperties: obj30 };
    obj30 = { platformTypes: items9 };
    items9 = [tmp30.BATTLENET];
    obj6[dismissible_content.DismissibleContent.BATTLENET_CONNECTION_DEPRECATION_DISABLE] = obj29;
    const obj31 = { isEligible: true, actionSheetProperties: {} };
    obj6[dismissible_content.DismissibleContent.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT] = obj31;
    const obj32 = { isEligible: nitroFileUploadAnnouncementEligible, actionSheetProperties: {} };
    obj6[dismissible_content.DismissibleContent.NITRO_FILE_UPLOAD_1GB_ANNOUNCEMENT] = obj32;
    const obj33 = { isEligible: nitroFileUploadUpsellEligible, actionSheetProperties: {} };
    obj6[dismissible_content.DismissibleContent.NITRO_FILE_UPLOAD_1GB_UPSELL] = obj33;
    const obj34 = { isEligible: tmp35, actionSheetProperties: {} };
    obj6[dismissible_content.DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_COACHMARK] = obj34;
    const MOBILE_REFERRAL_PROGRAM_BOTTOM_SHEET_ENTRYPOINT = tmp(2049).DismissibleContent.MOBILE_REFERRAL_PROGRAM_BOTTOM_SHEET_ENTRYPOINT;
    if (bottomSheetEnabled) {
      bottomSheetEnabled = isEligibleSenderForReferralProgram;
    }
    if (bottomSheetEnabled) {
      bottomSheetEnabled = null != tmp13;
    }
    if (bottomSheetEnabled) {
      bottomSheetEnabled = tmp13 > 0;
    }
    if (bottomSheetEnabled) {
      bottomSheetEnabled = null != tmp14;
    }
    const obj35 = { isEligible: bottomSheetEnabled, newSnowflakeId: tmp14, actionSheetProperties: {} };
    obj6[MOBILE_REFERRAL_PROGRAM_BOTTOM_SHEET_ENTRYPOINT] = obj35;
    tmp37 = obj6;
  } else {
    tmp37 = obj6;
  }
  return tmp37;
});
const result = size.fileFinishedImporting("modules/upsell_tooltip/native/useMainViewTooltipActionSheetEligibilityMap.tsx");

export const useMainViewTooltipActionSheetMap = tmp4;
