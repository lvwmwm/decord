// Module ID: 18110
// Function ID: 18111
// Name: useMainViewTooltipActionSheetEligibilityMap
// Dependencies: [32, 1261, 7441, 18080, 9421, 1246, 2062, 1087, 1394, 1097, 558, 576, 504, 18111, 1630, 8359, 18112, 8355, 7436, 18113, 14492, 10399, 10398, 10406, 5033, 2052, 18114, 18115, 18078, 18092, 15632, 12814, 2]

// Module 18110 (useMainViewTooltipActionSheetEligibilityMap)
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1087 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1097 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1630 */;
import dismissible_content from "dismissible_content" /* 2052 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 5033 */;
import usePremiumTrialOffer from "usePremiumTrialOffer" /* 7436 */;
import useIsEligibleSenderForReferralProgram from "useIsEligibleSenderForReferralProgram" /* 8355 */;
import usePremiumDiscountOffer from "usePremiumDiscountOffer" /* 8359 */;
import GiftingBadgesUtils from "GiftingBadgesUtils" /* 10406 */;
import CustomTypingIndicatorExperiment from "CustomTypingIndicatorExperiment" /* 12814 */;
import usePromotionMarketingComponent from "usePromotionMarketingComponent" /* 14492 */;
import DisplayNameStylesFlywheelExperiment from "DisplayNameStylesFlywheelExperiment" /* 15632 */;
import RobloxConnectionCoachmark from "RobloxConnectionCoachmark" /* 18078 */;
import ConnectionDeprecationBottomSheet from "ConnectionDeprecationBottomSheet" /* 18092 */;
import MainViewTooltipActionSheetsDisabledExperimentDefault from "MainViewTooltipActionSheetsDisabledExperiment" /* 18111 */;
import useNitroFileUploadMarketingEligible from "useNitroFileUploadMarketingEligible" /* 18115 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1261 */;
import ReferralTrialStore from "ReferralTrialStore" /* 7441 */;
import GooglePlayPriceChangeStore from "GooglePlayPriceChangeStore" /* 18080 */;
import PromotionsStore from "PromotionsStore" /* 9421 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1246 */;
import UserRequiredActionStore_mod from "UserRequiredActionStore" /* 2062 */;
import PremiumConstants from "PremiumConstants" /* 1394 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _location, importDefault;

let PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID;
let PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID;
let PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID;
let PREMIUM_TIER_2_REACTIVATION_TRIAL_ID;
let tmp4;
const useGiftingPromotionAssetsReadyDefault = tmp4(18114);
let UserRequiredActionStore = UserRequiredActionStore_mod;
const PlatformTypes = Constants.PlatformTypes;
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
  let items9;
  let mobileBottomSheet;
  let premiumDiscountOffer;
  let premiumTrialOffer;
  let stateFromStores3;
  let stateFromStores5;
  let tmp10;
  let tmp11;
  let tmp15;
  let tmp16;
  let tmp23;
  let tmp24;
  let tmp28;
  let tmp29;
  let tmp32;
  let tmp33;
  let tmp38;
  let tmp4;
  let tmp42;
  let tmp43;
  let tmp47;
  let tmp48;
  let tmp5;
  let tmp52;
  let tmp53;
  let tmp57;
  let tmp58;
  let tmp60;
  let tmp68;
  let tmp70;
  let tmp72;
  let tmp = first;
  let obj = first(premiumDiscountOffer[11]);
  const cResult = obj.c(149);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp6 = enabled2;
    let items = [enabled2];
    class I {
      constructor() {
        return enabled2.hasLoaded(isGiftReminderAssetReady.PRELOADED_USER_SETTINGS);
      }
    }
    cResult[0] = items;
    cResult[1] = I;
    tmp4 = items;
    tmp5 = I;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(premiumDiscountOffer[12]);
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  let tmp8 = importDefault;
  let tmp9 = _location;
  const obj2 = { location: _location };
  const obj3 = require("MainViewTooltipActionSheetsDisabledExperiment");
  const disabled = obj3.getConfig(obj2).disabled;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserRequiredActionStore];
    class T {
      constructor() {
        return closure_9.hasAction();
      }
    }
    cResult[2] = items1;
    cResult[3] = T;
    tmp11 = T;
    tmp10 = items1;
  } else {
    tmp10 = cResult[2];
    tmp11 = cResult[3];
  }
  let tmp14 = stateFromStores;
  const tmpResult23 = tmp(premiumDiscountOffer[12]);
  const stateFromStores1 = tmpResult23.useStateFromStores(tmp10, tmp11);
  if (stateFromStores) {
    tmp14 = !disabled;
  }
  if (tmp14) {
    tmp14 = !stateFromStores1;
  }
  if (tmp14) {
    const tmpResult24 = tmp(premiumDiscountOffer[14]);
    tmp14 = !tmpResult24.isMetaQuest();
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [stateFromStores3];
    class N {
      constructor() {
        const items = [, ];
        ({ shouldShowGooglePlayPriceChange: arr[0], priceChangeRecord: arr[1] } = stateFromStores3);
        return items;
      }
    }
    cResult[4] = items2;
    cResult[5] = N;
    tmp16 = N;
    tmp15 = items2;
  } else {
    tmp15 = cResult[4];
    tmp16 = cResult[5];
  }
  const tmpResult25 = tmp(premiumDiscountOffer[12]);
  const tmp19 = premiumTrialOffer(tmpResult25.useStateFromStoresArray(tmp15, tmp16), 2);
  first = tmp19[0];
  importDefault = tmp21;
  const tmpResult26 = tmp(premiumDiscountOffer[15]);
  premiumDiscountOffer = tmpResult26.usePremiumDiscountOffer();
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items3 = [enabled];
    class D {
      constructor() {
        const RecurringReferralReminderExperiment = first(premiumDiscountOffer[16]).RecurringReferralReminderExperiment;
        const obj = { location: _location };
        return RecurringReferralReminderExperiment.getConfig(obj, { autoTrackExposure: false }).bottomSheetEnabled;
      }
    }
    cResult[6] = items3;
    cResult[7] = D;
    tmp24 = D;
    tmp23 = items3;
  } else {
    tmp23 = cResult[6];
    tmp24 = cResult[7];
  }
  const tmpResult27 = tmp(premiumDiscountOffer[12]);
  const stateFromStores2 = tmpResult27.useStateFromStores(tmp23, tmp24);
  const tmpResult28 = tmp(premiumDiscountOffer[17]);
  const isEligibleSenderForReferralProgram = tmpResult28.useIsEligibleSenderForReferralProgram(!stateFromStores2);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const items4 = [mobileBottomSheet];
    class B {
      constructor() {
        const items = [mobileBottomSheet.getReferralsRemaining({ bypassFetch: true }), mobileBottomSheet.getRecurringReminderStateId()];
        return items;
      }
    }
    cResult[8] = items4;
    cResult[9] = B;
    tmp29 = B;
    tmp28 = items4;
  } else {
    tmp28 = cResult[8];
    tmp29 = cResult[9];
  }
  const tmpResult29 = tmp(premiumDiscountOffer[12]);
  [tmp32, tmp33] = premiumTrialOffer(tmpResult29.useStateFromStoresArray(tmp28, tmp29), 2);
  let tmp34 = stateFromStores2 && isEligibleSenderForReferralProgram;
  premiumTrialOffer(tmpResult29.useStateFromStoresArray(tmp28, tmp29), 2);
  if (tmp34) {
    tmp34 = null != tmp32;
  }
  if (tmp34) {
    tmp34 = tmp32 > 0;
  }
  if (tmp34) {
    tmp34 = null != tmp33;
  }
  const tmpResult30 = tmp(premiumDiscountOffer[18]);
  premiumTrialOffer = tmpResult30.usePremiumTrialOffer();
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { location: tmp9 };
    class B {
      constructor() {
        const items = [mobileBottomSheet.getReferralsRemaining({ bypassFetch: true }), mobileBottomSheet.getRecurringReminderStateId()];
        return items;
      }
    }
    tmp38 = obj4;
  } else {
    tmp38 = cResult[10];
  }
  const PremiumTrialOfferActionSheetKillSwitchExperiment = tmp(tmp2[19]).PremiumTrialOfferActionSheetKillSwitchExperiment;
  enabled = PremiumTrialOfferActionSheetKillSwitchExperiment.useConfig(tmp38).enabled;
  const tmpResult31 = tmp(premiumDiscountOffer[20]);
  const promotionMarketingComponent = tmpResult31.usePromotionMarketingComponent(tmp(tmp2[21]).MarketingComponentType.MOBILE_BOTTOM_SHEET);
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
    class B {
      constructor() {
        const items = [mobileBottomSheet.getReferralsRemaining({ bypassFetch: true }), mobileBottomSheet.getRecurringReminderStateId()];
        return items;
      }
    }
    cResult[11] = items5;
    cResult[12] = tmp45;
    tmp43 = tmp45;
    tmp42 = items5;
  } else {
    tmp42 = cResult[11];
    tmp43 = cResult[12];
  }
  const tmpResult32 = tmp(premiumDiscountOffer[12]);
  stateFromStores3 = tmpResult32.useStateFromStores(tmp42, tmp43);
  if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
    const items6 = [stateFromStores5];
    class B {
      constructor() {
        const items = [mobileBottomSheet.getReferralsRemaining({ bypassFetch: true }), mobileBottomSheet.getRecurringReminderStateId()];
        return items;
      }
    }
    cResult[13] = items6;
    cResult[14] = tmp50;
    tmp48 = tmp50;
    tmp47 = items6;
  } else {
    tmp47 = cResult[13];
    tmp48 = cResult[14];
  }
  const tmpResult33 = tmp(premiumDiscountOffer[12]);
  const stateFromStores4 = tmpResult33.useStateFromStores(tmp47, tmp48);
  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
    const items7 = [stateFromStores5];
    class B {
      constructor() {
        const items = [mobileBottomSheet.getReferralsRemaining({ bypassFetch: true }), mobileBottomSheet.getRecurringReminderStateId()];
        return items;
      }
    }
    cResult[15] = items7;
    cResult[16] = tmp55;
    tmp53 = tmp55;
    tmp52 = items7;
  } else {
    tmp52 = cResult[15];
    tmp53 = cResult[16];
  }
  const tmpResult34 = tmp(premiumDiscountOffer[12]);
  stateFromStores5 = tmpResult34.useStateFromStores(tmp52, tmp53);
  if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { location: tmp9 };
    class B {
      constructor() {
        const items = [mobileBottomSheet.getReferralsRemaining({ bypassFetch: true }), mobileBottomSheet.getRecurringReminderStateId()];
        return items;
      }
    }
    tmp57 = obj5;
  } else {
    tmp57 = cResult[17];
  }
  const GiftPromotionReminderExperiment = tmp(tmp2[22]).GiftPromotionReminderExperiment;
  enabled2 = GiftPromotionReminderExperiment.useConfig(tmp57).enabled;
  if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
    const obj6 = { platform: "native", location: tmp9 };
    class B {
      constructor() {
        const items = [mobileBottomSheet.getReferralsRemaining({ bypassFetch: true }), mobileBottomSheet.getRecurringReminderStateId()];
        return items;
      }
    }
    tmp58 = obj6;
  } else {
    tmp58 = cResult[18];
  }
  const tmpResult35 = tmp(premiumDiscountOffer[23]);
  const giftingBadgeCoachmarkVariant = tmpResult35.useGiftingBadgeCoachmarkVariant(tmp58);
  if (cResult[19] !== stateFromStores3) {
    let isDismissed = null != stateFromStores3;
    if (isDismissed) {
      const tmpResult36 = tmp(premiumDiscountOffer[24]);
      isDismissed = tmpResult36.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(tmp(tmp2[25]).DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET, stateFromStores3).isDismissed;
    }
    class B {
      constructor() {
        const items = [mobileBottomSheet.getReferralsRemaining({ bypassFetch: true }), mobileBottomSheet.getRecurringReminderStateId()];
        return items;
      }
    }
    cResult[20] = isDismissed;
    tmp60 = isDismissed;
  } else {
    tmp60 = cResult[20];
  }
  UserRequiredActionStore = tmp60;
  let isDismissed2 = null != stateFromStores3;
  if (isDismissed2) {
    const tmpResult37 = tmp(premiumDiscountOffer[24]);
    isDismissed2 = tmpResult37.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(tmp(tmp2[25]).DismissibleContent.GIFTING_PROMOTION_REMINDER, stateFromStores3).isDismissed;
  }
  let tmp62 = null;
  const tmp8Result = tmp8(premiumDiscountOffer[26]);
  if (!tmp60) {
    tmp62 = stateFromStores4;
  }
  let tmp63 = null;
  if (!isDismissed2) {
    tmp63 = stateFromStores5;
  }
  const tmp8ResultResult = tmp8Result(tmp62, tmp63);
  const isGiftCoachmarkAssetReady = tmp8ResultResult.isGiftCoachmarkAssetReady;
  const isGiftReminderAssetReady = tmp8ResultResult.isGiftReminderAssetReady;
  const tmpResult38 = tmp(premiumDiscountOffer[27]);
  const nitroFileUploadAnnouncementEligible = tmpResult38.useNitroFileUploadAnnouncementEligible(tmp9);
  const tmpResult39 = tmp(premiumDiscountOffer[27]);
  const nitroFileUploadUpsellEligible = tmpResult39.useNitroFileUploadUpsellEligible(tmp9);
  const tmpResult40 = tmp(premiumDiscountOffer[28]);
  const shouldShowRobloxConnectionCoachmark = tmpResult40.useShouldShowRobloxConnectionCoachmark();
  if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
    const items8 = [isGiftCoachmarkAssetReady.LEAGUE_OF_LEGENDS, ];
    class B {
      constructor() {
        const items = [mobileBottomSheet.getReferralsRemaining({ bypassFetch: true }), mobileBottomSheet.getRecurringReminderStateId()];
        return items;
      }
    }
    cResult[21] = items8;
    tmp68 = items8;
  } else {
    tmp68 = cResult[21];
  }
  if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
    const obj7 = { deprecatedPlatformTypes: tmp68 };
    class B {
      constructor() {
        const items = [mobileBottomSheet.getReferralsRemaining({ bypassFetch: true }), mobileBottomSheet.getRecurringReminderStateId()];
        return items;
      }
    }
    tmp70 = obj7;
  } else {
    tmp70 = cResult[22];
  }
  const tmpResult41 = tmp(premiumDiscountOffer[29]);
  const shouldShowConnectionDeprecationBottomSheet = tmpResult41.useShouldShowConnectionDeprecationBottomSheet(tmp70);
  if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
    const obj8 = { deprecatedPlatformTypes: items9 };
    items9 = [];
    class B {
      constructor() {
        const items = [mobileBottomSheet.getReferralsRemaining({ bypassFetch: true }), mobileBottomSheet.getRecurringReminderStateId()];
        return items;
      }
    }
    cResult[23] = obj8;
    tmp72 = obj8;
  } else {
    tmp72 = cResult[23];
  }
  const tmpResult42 = tmp(premiumDiscountOffer[29]);
  const shouldShowConnectionDeprecationBottomSheet1 = tmpResult42.useShouldShowConnectionDeprecationBottomSheet(tmp72);
  const tmpResult43 = tmp(premiumDiscountOffer[30]);
  const isDisplayNameStylesFlywheelSettersEnabled = tmpResult43.useIsDisplayNameStylesFlywheelSettersEnabled(tmp9);
  const tmpResult44 = tmp(premiumDiscountOffer[31]);
  const canSet = tmpResult44.useCustomTypingIndicatorConfig(tmp9).canSet;
  if (cResult[24] === tmp19[1]) {
    let tmp76;
    let tmp77;
    if (cResult[25] === first) {
      tmp76 = cResult[26];
    }
    if (cResult[27] !== premiumDiscountOffer) {
      function isDiscountOfferEligible() {
        return null != premiumDiscountOffer && null == premiumDiscountOffer.expiresAt;
      }
      cResult[27] = premiumDiscountOffer;
      class B {
        constructor() {
          const items = [mobileBottomSheet.getReferralsRemaining({ bypassFetch: true }), mobileBottomSheet.getRecurringReminderStateId()];
          return items;
        }
      }
      cResult[28] = isDiscountOfferEligible;
      tmp77 = isDiscountOfferEligible;
    } else {
      tmp77 = cResult[28];
    }
    if (cResult[29] === enabled) {
      let tmp78;
      let tmp82;
      let tmp86;
      if (cResult[30] === premiumTrialOffer) {
        tmp78 = cResult[31];
      }
      const tmp80 = cResult[32];
      class B {
        constructor() {
          const items = [mobileBottomSheet.getReferralsRemaining({ bypassFetch: true }), mobileBottomSheet.getRecurringReminderStateId()];
          return items;
        }
      }
      if (tmp80 !== undefined) {
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
        class B {
          constructor() {
            const items = [mobileBottomSheet.getReferralsRemaining({ bypassFetch: true }), mobileBottomSheet.getRecurringReminderStateId()];
            return items;
          }
        }
        cResult[32] = dismissibleContent;
        cResult[33] = isPremiumMarketingMomentAnnouncementEligible;
        tmp82 = isPremiumMarketingMomentAnnouncementEligible;
      } else {
        tmp82 = cResult[33];
      }
      let dismissibleContent1;
      const tmp84 = cResult[34];
      if (mobileBottomSheet != null) {
        dismissibleContent1 = mobileBottomSheet.dismissibleContent;
      }
      if (tmp84 !== dismissibleContent1) {
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
        class B {
          constructor() {
            const items = [mobileBottomSheet.getReferralsRemaining({ bypassFetch: true }), mobileBottomSheet.getRecurringReminderStateId()];
            return items;
          }
        }
        cResult[34] = dismissibleContent2;
        cResult[35] = isPremiumMarketingMomentReminderEligible;
        tmp86 = isPremiumMarketingMomentReminderEligible;
      } else {
        tmp86 = cResult[35];
      }
      _location = tmp88;
      let closure_13 = tmp89;
      if (cResult[36] === null != stateFromStores4) {
        let tmp90;
        if (cResult[37] === isGiftCoachmarkAssetReady) {
          tmp90 = cResult[38];
        }
        if (cResult[39] === stateFromStores3) {
          if (cResult[40] === enabled2) {
            if (cResult[41] === stateFromStores5) {
              if (cResult[42] === null != stateFromStores4) {
                if (cResult[43] === null != stateFromStores5) {
                  if (cResult[44] === tmp60) {
                    if (tmp14) {
                      let tmp93;
                      let tmp96;
                      if (cResult[48] !== tmp76) {
                        const tmp76Result = tmp76();
                        cResult[48] = tmp76;
                        class B {
                          constructor() {
                            const items = [mobileBottomSheet.getReferralsRemaining({ bypassFetch: true }), mobileBottomSheet.getRecurringReminderStateId()];
                            return items;
                          }
                        }
                        cResult[49] = tmp76Result;
                        tmp93 = tmp76Result;
                      } else {
                        tmp93 = cResult[49];
                      }
                      let priceChangeId;
                      if (tmp19[1] != null) {
                        priceChangeId = tmp21.priceChangeId;
                      }
                      class B {
                        constructor() {
                          const items = [mobileBottomSheet.getReferralsRemaining({ bypassFetch: true }), mobileBottomSheet.getRecurringReminderStateId()];
                          return items;
                        }
                      }
                      if (cResult[50] === Symbol.for("react.memo_cache_sentinel")) {
                        const obj9 = {};
                        cResult[50] = obj9;
                        class B {
                          constructor() {
                            const items = [mobileBottomSheet.getReferralsRemaining({ bypassFetch: true }), mobileBottomSheet.getRecurringReminderStateId()];
                            return items;
                          }
                        }
                      } else {
                        tmp96 = cResult[50];
                      }
                      if (cResult[51] === tmp93) {
                        let tmp100;
                        const tmp77Result = tmp77();
                        class B {
                          constructor() {
                            const items = [mobileBottomSheet.getReferralsRemaining({ bypassFetch: true }), mobileBottomSheet.getRecurringReminderStateId()];
                            return items;
                          }
                        }
                        if (cResult[54] !== premiumDiscountOffer) {
                          let obj11;
                          if (null != premiumDiscountOffer) {
                            obj11 = { userDiscountOffer: premiumDiscountOffer };
                            const obj10 = { userDiscountOffer: premiumDiscountOffer };
                          } else {
                            obj11 = {};
                          }
                          cResult[54] = premiumDiscountOffer;
                          class B {
                            constructor() {
                              const items = [mobileBottomSheet.getReferralsRemaining({ bypassFetch: true }), mobileBottomSheet.getRecurringReminderStateId()];
                              return items;
                            }
                          }
                          cResult[55] = obj11;
                          tmp100 = obj11;
                        } else {
                          tmp100 = cResult[55];
                        }
                        if (cResult[56] === tmp77Result) {
                          if (cResult[57] === undefined) {
                            let tmp102;
                            let tmp105;
                            if (cResult[60] !== tmp78) {
                              const tmp78Result = tmp78();
                              cResult[60] = tmp78;
                              class B {
                                constructor() {
                                  const items = [mobileBottomSheet.getReferralsRemaining({ bypassFetch: true }), mobileBottomSheet.getRecurringReminderStateId()];
                                  return items;
                                }
                              }
                              cResult[61] = tmp78Result;
                              tmp102 = tmp78Result;
                            } else {
                              tmp102 = cResult[61];
                            }
                            class B {
                              constructor() {
                                const items = [mobileBottomSheet.getReferralsRemaining({ bypassFetch: true }), mobileBottomSheet.getRecurringReminderStateId()];
                                return items;
                              }
                            }
                            if (cResult[62] !== premiumTrialOffer) {
                              let obj13;
                              if (null != premiumTrialOffer) {
                                obj13 = { userTrialOffer: premiumTrialOffer };
                                const obj12 = { userTrialOffer: premiumTrialOffer };
                              } else {
                                obj13 = {};
                              }
                              cResult[62] = premiumTrialOffer;
                              class B {
                                constructor() {
                                  const items = [mobileBottomSheet.getReferralsRemaining({ bypassFetch: true }), mobileBottomSheet.getRecurringReminderStateId()];
                                  return items;
                                }
                              }
                              cResult[63] = obj13;
                              tmp105 = obj13;
                            } else {
                              tmp105 = cResult[63];
                            }
                            if (cResult[64] === tmp102) {
                              if (cResult[65] === undefined) {
                                const tmp82Result = tmp82();
                                class B {
                                  constructor() {
                                    const items = [mobileBottomSheet.getReferralsRemaining({ bypassFetch: true }), mobileBottomSheet.getRecurringReminderStateId()];
                                    return items;
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
                                if (cResult[68] === mobileBottomSheet) {
                                  if (cResult[69] === id) {
                                    let tmp111;
                                    if (cResult[70] === promotionId) {
                                      tmp111 = cResult[71];
                                    }
                                    if (cResult[72] === tmp82Result) {
                                      if (cResult[73] === tmp108) {
                                        const tmp86Result = tmp86();
                                        class B {
                                          constructor() {
                                            const items = [mobileBottomSheet.getReferralsRemaining({ bypassFetch: true }), mobileBottomSheet.getRecurringReminderStateId()];
                                            return items;
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
                                        if (cResult[76] === mobileBottomSheet) {
                                          if (cResult[77] === id1) {
                                            let tmp117;
                                            if (cResult[78] === promotionId1) {
                                              tmp117 = cResult[79];
                                            }
                                            if (cResult[80] === tmp86Result) {
                                              if (cResult[81] === tmp114) {
                                                let tmp119;
                                                let tmp121;
                                                if (cResult[84] !== tmp90) {
                                                  const tmp90Result = tmp90();
                                                  cResult[84] = tmp90;
                                                  class B {
                                                    constructor() {
                                                      const items = [mobileBottomSheet.getReferralsRemaining({ bypassFetch: true }), mobileBottomSheet.getRecurringReminderStateId()];
                                                      return items;
                                                    }
                                                  }
                                                  cResult[85] = tmp90Result;
                                                  tmp119 = tmp90Result;
                                                } else {
                                                  tmp119 = cResult[85];
                                                }
                                                if (cResult[86] !== stateFromStores4) {
                                                  const obj14 = { coachmarkComponent: stateFromStores4 };
                                                  class B {
                                                    constructor() {
                                                      const items = [mobileBottomSheet.getReferralsRemaining({ bypassFetch: true }), mobileBottomSheet.getRecurringReminderStateId()];
                                                      return items;
                                                    }
                                                  }
                                                  cResult[87] = obj14;
                                                  tmp121 = obj14;
                                                } else {
                                                  tmp121 = cResult[87];
                                                }
                                                class B {
                                                  constructor() {
                                                    const items = [mobileBottomSheet.getReferralsRemaining({ bypassFetch: true }), mobileBottomSheet.getRecurringReminderStateId()];
                                                    return items;
                                                  }
                                                }
                                                const obj15 = { isEligible: tmp119, newSnowflakeId: stateFromStores3, actionSheetProperties: tmp121 };
                                                cResult[88] = stateFromStores3;
                                                cResult[89] = tmp119;
                                                cResult[90] = tmp121;
                                                cResult[91] = obj15;
                                              }
                                            }
                                            const obj16 = { isEligible: null, newSnowflakeId: tmp114, actionSheetProperties: tmp117 };
                                            class B {
                                              constructor() {
                                                const items = [mobileBottomSheet.getReferralsRemaining({ bypassFetch: true }), mobileBottomSheet.getRecurringReminderStateId()];
                                                return items;
                                              }
                                            }
                                            cResult[80] = tmp86Result;
                                            cResult[81] = tmp114;
                                            cResult[82] = tmp117;
                                            cResult[83] = obj16;
                                          }
                                        }
                                        const obj17 = { bottomSheetData: mobileBottomSheet, componentId: id1, promotionId: promotionId1 };
                                        cResult[76] = mobileBottomSheet;
                                        cResult[77] = id1;
                                        cResult[78] = promotionId1;
                                        cResult[79] = obj17;
                                        tmp117 = obj17;
                                      }
                                    }
                                    const obj18 = { isEligible: null, newSnowflakeId: tmp108, actionSheetProperties: tmp111 };
                                    class B {
                                      constructor() {
                                        const items = [mobileBottomSheet.getReferralsRemaining({ bypassFetch: true }), mobileBottomSheet.getRecurringReminderStateId()];
                                        return items;
                                      }
                                    }
                                    cResult[72] = tmp82Result;
                                    cResult[73] = tmp108;
                                    cResult[74] = tmp111;
                                    cResult[75] = obj18;
                                  }
                                }
                                const obj19 = { bottomSheetData: mobileBottomSheet, componentId: id, promotionId };
                                cResult[68] = mobileBottomSheet;
                                cResult[69] = id;
                                cResult[70] = promotionId;
                                cResult[71] = obj19;
                                tmp111 = obj19;
                              }
                            }
                            const obj20 = { isEligible: tmp102, newSnowflakeId: undefined, actionSheetProperties: tmp105 };
                            cResult[64] = tmp102;
                            cResult[65] = undefined;
                            cResult[66] = tmp105;
                            cResult[67] = obj20;
                          }
                        }
                        const obj21 = { isEligible: tmp77Result, newSnowflakeId: undefined, actionSheetProperties: tmp100 };
                        cResult[56] = tmp77Result;
                        cResult[57] = undefined;
                        cResult[58] = tmp100;
                        cResult[59] = obj21;
                      }
                      const obj22 = { isEligible: tmp93, newSnowflakeId: priceChangeId, actionSheetProperties: tmp96 };
                      cResult[51] = tmp93;
                      cResult[52] = priceChangeId;
                      cResult[53] = obj22;
                    } else {
                      const _Symbol = Symbol;
                      if (cResult[47] === Symbol.for("react.memo_cache_sentinel")) {
                        const obj23 = {};
                        cResult[47] = obj23;
                        class B {
                          constructor() {
                            const items = [mobileBottomSheet.getReferralsRemaining({ bypassFetch: true }), mobileBottomSheet.getRecurringReminderStateId()];
                            return items;
                          }
                        }
                      }
                      class B {
                        constructor() {
                          const items = [mobileBottomSheet.getReferralsRemaining({ bypassFetch: true }), mobileBottomSheet.getRecurringReminderStateId()];
                          return items;
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
          let tmp = !_location;
          if (_location) {
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
        class B {
          constructor() {
            const items = [mobileBottomSheet.getReferralsRemaining({ bypassFetch: true }), mobileBottomSheet.getRecurringReminderStateId()];
            return items;
          }
        }
        cResult[39] = stateFromStores3;
        cResult[40] = enabled2;
        cResult[41] = stateFromStores5;
        cResult[42] = null != stateFromStores4;
        cResult[43] = null != stateFromStores5;
        cResult[44] = tmp60;
        cResult[45] = isGiftReminderAssetReady;
        cResult[46] = isGiftingPromotionReminderEligible;
      }
      function isGiftingPromotionFirstTimeEligible() {
        return _location && isGiftCoachmarkAssetReady;
      }
      cResult[36] = null != stateFromStores4;
      cResult[37] = isGiftCoachmarkAssetReady;
      cResult[38] = isGiftingPromotionFirstTimeEligible;
      tmp90 = isGiftingPromotionFirstTimeEligible;
    }
    class B {
      constructor() {
        const items = [mobileBottomSheet.getReferralsRemaining({ bypassFetch: true }), mobileBottomSheet.getRecurringReminderStateId()];
        return items;
      }
    }
    cResult[29] = enabled;
    cResult[30] = premiumTrialOffer;
    cResult[31] = tmp79;
    tmp78 = tmp79;
  }
  function isGooglePlayPriceChangeEligible() {
    return first && null != closure_1;
  }
  cResult[24] = tmp19[1];
  cResult[25] = first;
  cResult[26] = isGooglePlayPriceChangeEligible;
  tmp76 = isGooglePlayPriceChangeEligible;
}) : (function useMainViewTooltipActionSheetMap() {
  let id;
  let id1;
  let id2;
  let id3;
  let isGiftCoachmarkAssetReady;
  let isGiftReminderAssetReady;
  let items10;
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
  let tmp14;
  let tmp15;
  let tmp38;
  let tmp8;
  let tmp9;
  const f132938 = () => {
    const items = [, ];
    ({ shouldShowGooglePlayPriceChange: arr[0], priceChangeRecord: arr[1] } = GooglePlayPriceChangeStore);
    return items;
  };
  const f132940 = () => {
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
  [tmp8, tmp9] = tmpResult21.useStateFromStoresArray(items2, f132938);
  _slicedToArray(tmpResult21.useStateFromStoresArray(items2, f132938), 2);
  const tmpResult22 = usePremiumDiscountOffer;
  const premiumDiscountOffer = tmpResult22.usePremiumDiscountOffer();
  const items3 = [ApexExperimentStore];
  const tmpResult23 = get_initialized;
  let stateFromStores2 = tmpResult23.useStateFromStores(items3, () => {
    const RecurringReferralReminderExperiment = require("RecurringReferralReminderExperiment").RecurringReferralReminderExperiment;
    const obj = { location: _location };
    return RecurringReferralReminderExperiment.getConfig(obj, { autoTrackExposure: false }).bottomSheetEnabled;
  });
  const tmpResult24 = useIsEligibleSenderForReferralProgram;
  const isEligibleSenderForReferralProgram = tmpResult24.useIsEligibleSenderForReferralProgram(!stateFromStores2);
  const items4 = [ReferralTrialStore];
  const tmpResult25 = get_initialized;
  [tmp14, tmp15] = tmpResult25.useStateFromStoresArray(items4, f132940);
  _slicedToArray(tmpResult25.useStateFromStoresArray(items4, f132940), 2);
  const tmpResult26 = usePremiumTrialOffer;
  const premiumTrialOffer = tmpResult26.usePremiumTrialOffer();
  const PremiumTrialOfferActionSheetKillSwitchExperiment = tmp(18113).PremiumTrialOfferActionSheetKillSwitchExperiment;
  const enabled = PremiumTrialOfferActionSheetKillSwitchExperiment.useConfig({ location: tmp5 }).enabled;
  const tmpResult27 = usePromotionMarketingComponent;
  const promotionMarketingComponent = tmpResult27.usePromotionMarketingComponent(tmp(10399).MarketingComponentType.MOBILE_BOTTOM_SHEET);
  let oneofKind;
  if (promotionMarketingComponent != null) {
    oneofKind = promotionMarketingComponent.properties.properties.oneofKind;
  }
  let mobileBottomSheet = null;
  if ("mobileBottomSheet" === oneofKind) {
    mobileBottomSheet = promotionMarketingComponent.properties.properties.mobileBottomSheet;
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
  const tmpResult30 = get_initialized;
  const stateFromStores5 = tmpResult30.useStateFromStores(items7, () => {
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
  const GiftPromotionReminderExperiment = tmp(10398).GiftPromotionReminderExperiment;
  let enabled2 = GiftPromotionReminderExperiment.useConfig({ location: tmp5 }).enabled;
  const tmpResult31 = GiftingBadgesUtils;
  const giftingBadgeCoachmarkVariant = tmpResult31.useGiftingBadgeCoachmarkVariant({ platform: "native", location: tmp5 });
  let isDismissed = null != stateFromStores3;
  if (isDismissed) {
    const tmpResult32 = DismissibleContentUnsafeUtils;
    isDismissed = tmpResult32.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(tmp(2052).DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET, stateFromStores3).isDismissed;
  }
  let isDismissed2 = null != stateFromStores3;
  if (isDismissed2) {
    const tmpResult33 = DismissibleContentUnsafeUtils;
    isDismissed2 = tmpResult33.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(tmp(2052).DismissibleContent.GIFTING_PROMOTION_REMINDER, stateFromStores3).isDismissed;
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
  const tmpResult34 = useNitroFileUploadMarketingEligible;
  const nitroFileUploadAnnouncementEligible = tmpResult34.useNitroFileUploadAnnouncementEligible(tmp5);
  const tmpResult35 = useNitroFileUploadMarketingEligible;
  const nitroFileUploadUpsellEligible = tmpResult35.useNitroFileUploadUpsellEligible(tmp5);
  const items8 = [, ];
  ({ LEAGUE_OF_LEGENDS: arr9[0], RIOT_GAMES: arr9[1] } = PlatformTypes);
  const tmpResult36 = RobloxConnectionCoachmark;
  const shouldShowRobloxConnectionCoachmark = tmpResult36.useShouldShowRobloxConnectionCoachmark();
  const tmpResult37 = ConnectionDeprecationBottomSheet;
  const shouldShowConnectionDeprecationBottomSheet = tmpResult37.useShouldShowConnectionDeprecationBottomSheet({ deprecatedPlatformTypes: items8 });
  const obj5 = { deprecatedPlatformTypes: items9 };
  items9 = [PlatformTypes.BATTLENET];
  const tmpResult38 = ConnectionDeprecationBottomSheet;
  const shouldShowConnectionDeprecationBottomSheet1 = tmpResult38.useShouldShowConnectionDeprecationBottomSheet(obj5);
  const tmpResult39 = DisplayNameStylesFlywheelExperiment;
  const isDisplayNameStylesFlywheelSettersEnabled = tmpResult39.useIsDisplayNameStylesFlywheelSettersEnabled(tmp5);
  CustomTypingIndicatorExperiment;
  const obj6 = {};
  const tmp31 = PlatformTypes;
  if (stateFromStores) {
    const GOOGLE_PLAY_PRICE_CHANGE_ACTION_SHEET = tmp(2052).DismissibleContent.GOOGLE_PLAY_PRICE_CHANGE_ACTION_SHEET;
    const obj7 = { isEligible: tmp8, newSnowflakeId: priceChangeId, actionSheetProperties: {} };
    priceChangeId = undefined;
    if (tmp9 != null) {
      priceChangeId = tmp9.priceChangeId;
    }
    obj6[GOOGLE_PLAY_PRICE_CHANGE_ACTION_SHEET] = obj7;
    let tmp40 = null != premiumDiscountOffer;
    const DISCOUNT_OFFER_ACTION_SHEET = tmp(2052).DismissibleContent.DISCOUNT_OFFER_ACTION_SHEET;
    if (tmp40) {
      tmp40 = null == premiumDiscountOffer.expiresAt;
    }
    const obj8 = { isEligible: tmp40, newSnowflakeId: id, actionSheetProperties: obj10 };
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
    const MOBILE_PREMIUM_TRIAL_OFFER_ACTION_SHEET = tmp(2052).DismissibleContent.MOBILE_PREMIUM_TRIAL_OFFER_ACTION_SHEET;
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
    const PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL = tmp(2052).DismissibleContent.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL;
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
    const PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL = tmp(2052).DismissibleContent.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL;
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
    let tmp53 = tmp37;
    const GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET = tmp(2052).DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET;
    if (null != stateFromStores4) {
      tmp53 = isGiftCoachmarkAssetReady;
    }
    const obj18 = { isEligible: tmp53, newSnowflakeId: stateFromStores3, actionSheetProperties: obj19 };
    obj19 = { coachmarkComponent: stateFromStores4 };
    obj6[GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET] = obj18;
    let tmp54 = !tmp37;
    const GIFTING_PROMOTION_REMINDER = tmp(2052).DismissibleContent.GIFTING_PROMOTION_REMINDER;
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
    const obj20 = { isEligible: tmp55, newSnowflakeId: stateFromStores3, actionSheetProperties: obj21 };
    obj21 = { coachmarkComponent: stateFromStores5 };
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
    obj28 = { platformTypes: items8 };
    obj6[dismissible_content.DismissibleContent.RIOT_CONNECTION_DEPRECATION_DISABLE] = obj27;
    const obj29 = { isEligible: shouldShowConnectionDeprecationBottomSheet1, actionSheetProperties: obj30 };
    obj30 = { platformTypes: items10 };
    items10 = [tmp31.BATTLENET];
    obj6[dismissible_content.DismissibleContent.BATTLENET_CONNECTION_DEPRECATION_DISABLE] = obj29;
    const obj31 = { isEligible: true, actionSheetProperties: {} };
    obj6[dismissible_content.DismissibleContent.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT] = obj31;
    const obj32 = { isEligible: nitroFileUploadAnnouncementEligible, actionSheetProperties: {} };
    obj6[dismissible_content.DismissibleContent.NITRO_FILE_UPLOAD_1GB_ANNOUNCEMENT] = obj32;
    const obj33 = { isEligible: nitroFileUploadUpsellEligible, actionSheetProperties: {} };
    obj6[dismissible_content.DismissibleContent.NITRO_FILE_UPLOAD_1GB_UPSELL] = obj33;
    const obj34 = { isEligible: tmp36, actionSheetProperties: {} };
    obj6[dismissible_content.DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_COACHMARK] = obj34;
    const MOBILE_REFERRAL_PROGRAM_BOTTOM_SHEET_ENTRYPOINT = tmp(2052).DismissibleContent.MOBILE_REFERRAL_PROGRAM_BOTTOM_SHEET_ENTRYPOINT;
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
    const obj35 = { isEligible: stateFromStores2, newSnowflakeId: tmp15, actionSheetProperties: {} };
    obj6[MOBILE_REFERRAL_PROGRAM_BOTTOM_SHEET_ENTRYPOINT] = obj35;
    tmp38 = obj6;
  } else {
    tmp38 = obj6;
  }
  return tmp38;
});
const result = size.fileFinishedImporting("modules/upsell_tooltip/native/useMainViewTooltipActionSheetEligibilityMap.tsx");

export const useMainViewTooltipActionSheetMap = tmp4;
