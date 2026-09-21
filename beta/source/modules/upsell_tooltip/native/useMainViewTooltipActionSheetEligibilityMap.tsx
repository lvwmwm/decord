// Module ID: 17419
// Function ID: 17420
// Name: useMainViewTooltipActionSheetEligibilityMap
// Dependencies: [32, 19, 8466, 17402, 10963, 1224, 2039, 1078, 1378, 1088, 558, 568, 504, 17420, 1613, 8324, 7694, 17421, 13690, 11036, 11035, 11041, 8471, 8458, 4579, 2031, 17422, 17425, 17400, 17410, 9975, 12097, 2]

// Module 17419 (useMainViewTooltipActionSheetEligibilityMap)
import dismissible_content from "dismissible_content" /* 2031 */;
import BadgeId from "BadgeId" /* 8458 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 8471 */;
import MainViewTooltipActionSheetsDisabledExperimentDefault from "MainViewTooltipActionSheetsDisabledExperiment" /* 17420 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8466 */;
import GooglePlayPriceChangeStore from "GooglePlayPriceChangeStore" /* 17402 */;
import PromotionsStore from "PromotionsStore" /* 10963 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1224 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 2039 */;

const require = globalThis.__r;

const useGiftingPromotionAssetsReadyDefault = tmp4(17422);
require = fn;
const PlatformTypes = fn(1078).PlatformTypes;
const PremiumConstants = fn(1378);
({ PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID, PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID, PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID, PREMIUM_TIER_2_REACTIVATION_TRIAL_ID } = PremiumConstants);
const UserSettingsTypes = fn(1088).UserSettingsTypes;
const MainViewTooltipActionSheets = "MainViewTooltipActionSheets";
let items = [PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID, PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID, PREMIUM_TIER_2_REACTIVATION_TRIAL_ID, PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID];
const set = new Set(items);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/upsell_tooltip/native/useMainViewTooltipActionSheetEligibilityMap.tsx");

export const useMainViewTooltipActionSheetMap = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = first(premiumDiscountOffer[11]).c(143);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [enabled2];
    const fn = function c() {
      return enabled2.hasLoaded(isGiftCoachmarkAssetReady.PRELOADED_USER_SETTINGS);
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let obj = first(premiumDiscountOffer[11]);
  const stateFromStores = first(premiumDiscountOffer[12]).useStateFromStores(tmp4, tmp5);
  let tmp8 = importDefault;
  const tmpResult = first(premiumDiscountOffer[12]);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [isEligibleToShowGiftingBadgeCoachmark];
    class T {
      constructor() {
        return closure_9.hasAction();
      }
    }
    cResult[2] = items1;
    cResult[3] = T;
    let tmp11 = T;
    let tmp10 = items1;
  } else {
    tmp10 = cResult[2];
    tmp11 = cResult[3];
  }
  const obj2 = { location: isGiftReminderAssetReady };
  const obj3 = require("MainViewTooltipActionSheetsDisabledExperiment");
  let tmp14 = stateFromStores;
  const stateFromStores1 = first(premiumDiscountOffer[12]).useStateFromStores(tmp10, tmp11);
  if (stateFromStores) {
    tmp14 = !obj3.getConfig(obj2).disabled;
  }
  if (tmp14) {
    tmp14 = !stateFromStores1;
  }
  if (tmp14) {
    tmp14 = !tmp(tmp2[14]).isMetaQuest();
    const tmpResult20 = tmp(tmp2[14]);
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [stateFromStores2];
    class R {
      constructor() {
        items = [, ];
        ({ shouldShowGooglePlayPriceChange: arr[0], priceChangeRecord: arr[1] } = closure_6);
        return items;
      }
    }
    cResult[4] = items2;
    cResult[5] = R;
    let tmp16 = R;
    let tmp15 = items2;
  } else {
    tmp15 = cResult[4];
    tmp16 = cResult[5];
  }
  const tmpResult19 = first(premiumDiscountOffer[12]);
  const tmp18 = premiumTrialOffer(first(premiumDiscountOffer[12]).useStateFromStoresArray(tmp15, tmp16), 2);
  first = tmp18[0];
  importDefault = tmp20;
  const tmpResult21 = first(premiumDiscountOffer[12]);
  premiumDiscountOffer = first(premiumDiscountOffer[15]).usePremiumDiscountOffer();
  const tmpResult22 = first(premiumDiscountOffer[15]);
  premiumTrialOffer = first(premiumDiscountOffer[16]).usePremiumTrialOffer();
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { location: tmp9 };
    class R {
      constructor() {
        items = [, ];
        ({ shouldShowGooglePlayPriceChange: arr[0], priceChangeRecord: arr[1] } = closure_6);
        return items;
      }
    }
    let tmp23 = obj4;
  } else {
    tmp23 = cResult[6];
  }
  const PremiumTrialOfferActionSheetKillSwitchExperiment = tmp(tmp2[17]).PremiumTrialOfferActionSheetKillSwitchExperiment;
  const enabled = PremiumTrialOfferActionSheetKillSwitchExperiment.useConfig(tmp23).enabled;
  const tmpResult23 = first(premiumDiscountOffer[16]);
  const promotionMarketingComponent = first(premiumDiscountOffer[18]).usePromotionMarketingComponent(tmp(tmp2[19]).MarketingComponentType.MOBILE_BOTTOM_SHEET);
  let oneofKind;
  if (promotionMarketingComponent != null) {
    oneofKind = promotionMarketingComponent.properties.properties.oneofKind;
  }
  let mobileBottomSheet = null;
  if ("mobileBottomSheet" === oneofKind) {
    mobileBottomSheet = promotionMarketingComponent.properties.properties.mobileBottomSheet;
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const items3 = [stateFromStores4];
    class R {
      constructor() {
        items = [, ];
        ({ shouldShowGooglePlayPriceChange: arr[0], priceChangeRecord: arr[1] } = closure_6);
        return items;
      }
    }
    cResult[7] = items3;
    cResult[8] = tmp30;
    let tmp28 = tmp30;
    let tmp27 = items3;
  } else {
    tmp27 = cResult[7];
    tmp28 = cResult[8];
  }
  const tmpResult24 = first(premiumDiscountOffer[18]);
  stateFromStores2 = first(premiumDiscountOffer[12]).useStateFromStores(tmp27, tmp28);
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const items4 = [stateFromStores4];
    class K {
      constructor() {
        marketingComponentByType = closure_7.getMarketingComponentByType(closure_0(closure_2[19]).MarketingComponentType.GIFT_ICON_COACHMARK);
        giftIconCoachmark = null;
        if (null != marketingComponentByType) {
          str = "giftIconCoachmark";
          giftIconCoachmark = null;
          if ("giftIconCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
            giftIconCoachmark = marketingComponentByType.properties.properties.giftIconCoachmark;
          }
        }
        return giftIconCoachmark;
      }
    }
    cResult[9] = K;
    cResult[10] = items4;
    let tmp33 = items4;
    let tmp32 = K;
  } else {
    tmp32 = cResult[9];
    tmp33 = cResult[10];
  }
  const tmpResult25 = first(premiumDiscountOffer[12]);
  const stateFromStores3 = first(premiumDiscountOffer[12]).useStateFromStores(tmp33, tmp32);
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    const items5 = [stateFromStores4];
    class V {
      constructor() {
        marketingComponentByType = closure_7.getMarketingComponentByType(closure_0(closure_2[19]).MarketingComponentType.GIFT_REMINDER_COACHMARK);
        prop = null;
        if (null != marketingComponentByType) {
          str = "giftReminderCoachmark";
          prop = null;
          if ("giftReminderCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
            prop = marketingComponentByType.properties.properties.giftReminderCoachmark;
          }
        }
        return prop;
      }
    }
    cResult[11] = items5;
    cResult[12] = V;
    let tmp37 = V;
    let tmp36 = items5;
  } else {
    tmp36 = cResult[11];
    tmp37 = cResult[12];
  }
  const tmpResult26 = first(premiumDiscountOffer[12]);
  stateFromStores4 = first(premiumDiscountOffer[12]).useStateFromStores(tmp36, tmp37);
  if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { location: tmp9 };
    class V {
      constructor() {
        marketingComponentByType = closure_7.getMarketingComponentByType(closure_0(closure_2[19]).MarketingComponentType.GIFT_REMINDER_COACHMARK);
        prop = null;
        if (null != marketingComponentByType) {
          str = "giftReminderCoachmark";
          prop = null;
          if ("giftReminderCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
            prop = marketingComponentByType.properties.properties.giftReminderCoachmark;
          }
        }
        return prop;
      }
    }
    let tmp40 = obj5;
  } else {
    tmp40 = cResult[13];
  }
  const GiftPromotionReminderExperiment = tmp(tmp2[20]).GiftPromotionReminderExperiment;
  enabled2 = GiftPromotionReminderExperiment.useConfig(tmp40).enabled;
  if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
    const obj6 = { platform: "native", location: tmp9 };
    class V {
      constructor() {
        marketingComponentByType = closure_7.getMarketingComponentByType(closure_0(closure_2[19]).MarketingComponentType.GIFT_REMINDER_COACHMARK);
        prop = null;
        if (null != marketingComponentByType) {
          str = "giftReminderCoachmark";
          prop = null;
          if ("giftReminderCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
            prop = marketingComponentByType.properties.properties.giftReminderCoachmark;
          }
        }
        return prop;
      }
    }
    let tmp41 = obj6;
  } else {
    tmp41 = cResult[14];
  }
  const tmpResult27 = first(premiumDiscountOffer[12]);
  isEligibleToShowGiftingBadgeCoachmark = first(premiumDiscountOffer[21]).useIsEligibleToShowGiftingBadgeCoachmark(tmp41);
  if (cResult[15] !== isEligibleToShowGiftingBadgeCoachmark) {
    class J {
      constructor() {
        if (closure_9) {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[22]);
          badge = obj.fetchBadge(closure_0(closure_2[23]).BadgeId.GIFTING);
        }
        return;
      }
    }
    const items6 = [isEligibleToShowGiftingBadgeCoachmark];
    class V {
      constructor() {
        marketingComponentByType = closure_7.getMarketingComponentByType(closure_0(closure_2[19]).MarketingComponentType.GIFT_REMINDER_COACHMARK);
        prop = null;
        if (null != marketingComponentByType) {
          str = "giftReminderCoachmark";
          prop = null;
          if ("giftReminderCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
            prop = marketingComponentByType.properties.properties.giftReminderCoachmark;
          }
        }
        return prop;
      }
    }
    cResult[15] = isEligibleToShowGiftingBadgeCoachmark;
    cResult[16] = J;
    cResult[17] = items6;
    let tmp44 = items6;
    const tmp43 = J;
  } else {
    class J {
      constructor() {
        if (closure_9) {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[22]);
          badge = obj.fetchBadge(closure_0(closure_2[23]).BadgeId.GIFTING);
        }
        return;
      }
    }
    tmp44 = cResult[17];
  }
  const effect = enabled.useEffect(tmp43, tmp44);
  if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
    class J {
      constructor() {
        if (closure_9) {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[22]);
          badge = obj.fetchBadge(closure_0(closure_2[23]).BadgeId.GIFTING);
        }
        return;
      }
    }
    const items7 = [mobileBottomSheet];
    class V {
      constructor() {
        marketingComponentByType = closure_7.getMarketingComponentByType(closure_0(closure_2[19]).MarketingComponentType.GIFT_REMINDER_COACHMARK);
        prop = null;
        if (null != marketingComponentByType) {
          str = "giftReminderCoachmark";
          prop = null;
          if ("giftReminderCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
            prop = marketingComponentByType.properties.properties.giftReminderCoachmark;
          }
        }
        return prop;
      }
    }
    cResult[18] = items7;
    cResult[19] = tmp48;
    let tmp47 = tmp48;
    const tmp46 = items7;
  } else {
    class J {
      constructor() {
        if (closure_9) {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[22]);
          badge = obj.fetchBadge(closure_0(closure_2[23]).BadgeId.GIFTING);
        }
        return;
      }
    }
    tmp47 = cResult[19];
  }
  const tmpResult28 = first(premiumDiscountOffer[21]);
  const stateFromStores5 = first(premiumDiscountOffer[12]).useStateFromStores(tmp46, tmp47);
  if (cResult[20] !== stateFromStores2) {
    class J {
      constructor() {
        if (closure_9) {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[22]);
          badge = obj.fetchBadge(closure_0(closure_2[23]).BadgeId.GIFTING);
        }
        return;
      }
    }
    if (isDismissed) {
      class J {
        constructor() {
          if (closure_9) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[22]);
            badge = obj.fetchBadge(closure_0(closure_2[23]).BadgeId.GIFTING);
          }
          return;
        }
      }
      isDismissed = obj19.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(tmp(tmp2[25]).DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET, stateFromStores2).isDismissed;
    }
    class V {
      constructor() {
        marketingComponentByType = closure_7.getMarketingComponentByType(closure_0(closure_2[19]).MarketingComponentType.GIFT_REMINDER_COACHMARK);
        prop = null;
        if (null != marketingComponentByType) {
          str = "giftReminderCoachmark";
          prop = null;
          if ("giftReminderCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
            prop = marketingComponentByType.properties.properties.giftReminderCoachmark;
          }
        }
        return prop;
      }
    }
    cResult[21] = isDismissed;
  } else {
    class J {
      constructor() {
        if (closure_9) {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[22]);
          badge = obj.fetchBadge(closure_0(closure_2[23]).BadgeId.GIFTING);
        }
        return;
      }
    }
  }
  isDismissed = tmp50;
  let isDismissed2 = null != stateFromStores2;
  if (isDismissed2) {
    class J {
      constructor() {
        if (closure_9) {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[22]);
          badge = obj.fetchBadge(closure_0(closure_2[23]).BadgeId.GIFTING);
        }
        return;
      }
    }
    isDismissed2 = obj20.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(tmp(tmp2[25]).DismissibleContent.GIFTING_PROMOTION_REMINDER, stateFromStores2).isDismissed;
  }
  const tmpResult29 = first(premiumDiscountOffer[12]);
  if (!tmp50) {
    class J {
      constructor() {
        if (closure_9) {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[22]);
          badge = obj.fetchBadge(closure_0(closure_2[23]).BadgeId.GIFTING);
        }
        return;
      }
    }
  }
  if (!isDismissed2) {
    class J {
      constructor() {
        if (closure_9) {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[22]);
          badge = obj.fetchBadge(closure_0(closure_2[23]).BadgeId.GIFTING);
        }
        return;
      }
    }
  }
  const tmp8ResultResult = tmp8(premiumDiscountOffer[26])(null, null);
  const isGiftCoachmarkAssetReady = tmp8ResultResult.isGiftCoachmarkAssetReady;
  isGiftReminderAssetReady = tmp8ResultResult.isGiftReminderAssetReady;
  const tmp8Result = tmp8(premiumDiscountOffer[26]);
  const nitroFileUploadAnnouncementEligible = first(premiumDiscountOffer[27]).useNitroFileUploadAnnouncementEligible(tmp9);
  const tmpResult30 = first(premiumDiscountOffer[27]);
  const nitroFileUploadUpsellEligible = first(premiumDiscountOffer[27]).useNitroFileUploadUpsellEligible(tmp9);
  const tmpResult31 = first(premiumDiscountOffer[27]);
  const shouldShowRobloxConnectionCoachmark = first(premiumDiscountOffer[28]).useShouldShowRobloxConnectionCoachmark();
  if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
    class J {
      constructor() {
        if (closure_9) {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[22]);
          badge = obj.fetchBadge(closure_0(closure_2[23]).BadgeId.GIFTING);
        }
        return;
      }
    }
    const items8 = [isDismissed.LEAGUE_OF_LEGENDS, ];
    class V {
      constructor() {
        marketingComponentByType = closure_7.getMarketingComponentByType(closure_0(closure_2[19]).MarketingComponentType.GIFT_REMINDER_COACHMARK);
        prop = null;
        if (null != marketingComponentByType) {
          str = "giftReminderCoachmark";
          prop = null;
          if ("giftReminderCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
            prop = marketingComponentByType.properties.properties.giftReminderCoachmark;
          }
        }
        return prop;
      }
    }
    cResult[22] = items8;
    const tmp56 = items8;
  } else {
    class J {
      constructor() {
        if (closure_9) {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[22]);
          badge = obj.fetchBadge(closure_0(closure_2[23]).BadgeId.GIFTING);
        }
        return;
      }
    }
  }
  if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
    class J {
      constructor() {
        if (closure_9) {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[22]);
          badge = obj.fetchBadge(closure_0(closure_2[23]).BadgeId.GIFTING);
        }
        return;
      }
    }
    tmp58[0] = tmp56;
    class V {
      constructor() {
        marketingComponentByType = closure_7.getMarketingComponentByType(closure_0(closure_2[19]).MarketingComponentType.GIFT_REMINDER_COACHMARK);
        prop = null;
        if (null != marketingComponentByType) {
          str = "giftReminderCoachmark";
          prop = null;
          if ("giftReminderCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
            prop = marketingComponentByType.properties.properties.giftReminderCoachmark;
          }
        }
        return prop;
      }
    }
    const tmp57 = tmp58;
  } else {
    class J {
      constructor() {
        if (closure_9) {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[22]);
          badge = obj.fetchBadge(closure_0(closure_2[23]).BadgeId.GIFTING);
        }
        return;
      }
    }
  }
  const tmpResult32 = first(premiumDiscountOffer[28]);
  const shouldShowConnectionDeprecationBottomSheet = first(premiumDiscountOffer[29]).useShouldShowConnectionDeprecationBottomSheet(tmp57);
  if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
    class J {
      constructor() {
        if (closure_9) {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[22]);
          badge = obj.fetchBadge(closure_0(closure_2[23]).BadgeId.GIFTING);
        }
        return;
      }
    }
    const items9 = [];
    class V {
      constructor() {
        marketingComponentByType = closure_7.getMarketingComponentByType(closure_0(closure_2[19]).MarketingComponentType.GIFT_REMINDER_COACHMARK);
        prop = null;
        if (null != marketingComponentByType) {
          str = "giftReminderCoachmark";
          prop = null;
          if ("giftReminderCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
            prop = marketingComponentByType.properties.properties.giftReminderCoachmark;
          }
        }
        return prop;
      }
    }
    tmp61[0] = items9;
    cResult[24] = tmp61;
    const tmp60 = tmp61;
  } else {
    class J {
      constructor() {
        if (closure_9) {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[22]);
          badge = obj.fetchBadge(closure_0(closure_2[23]).BadgeId.GIFTING);
        }
        return;
      }
    }
  }
  const tmpResult33 = first(premiumDiscountOffer[29]);
  const shouldShowConnectionDeprecationBottomSheet1 = first(premiumDiscountOffer[29]).useShouldShowConnectionDeprecationBottomSheet(tmp60);
  const tmpResult34 = first(premiumDiscountOffer[29]);
  const isDisplayNameStylesFlywheelSettersEnabled = first(premiumDiscountOffer[30]).useIsDisplayNameStylesFlywheelSettersEnabled(tmp9);
  const tmpResult35 = first(premiumDiscountOffer[30]);
  const canSet = first(premiumDiscountOffer[31]).useCustomTypingIndicatorConfig(tmp9).canSet;
  if (cResult[25] === tmp18[1]) {
    class J {
      constructor() {
        if (closure_9) {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[22]);
          badge = obj.fetchBadge(closure_0(closure_2[23]).BadgeId.GIFTING);
        }
        return;
      }
    }
    if (cResult[28] !== premiumDiscountOffer) {
      class J {
        constructor() {
          if (closure_9) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[22]);
            badge = obj.fetchBadge(closure_0(closure_2[23]).BadgeId.GIFTING);
          }
          return;
        }
      }
      cResult[28] = premiumDiscountOffer;
      class Me {
        constructor() {
          tmp = closure_3;
          hasItem = null != closure_3 && null == tmp.expiresAt;
          if (hasItem) {
            tmp3 = enabled;
            hasItem = !enabled;
          }
          if (hasItem) {
            tmp4 = closure_13;
            hasItem = closure_13.has(tmp.trialId);
          }
          return hasItem;
        }
      }
      cResult[29] = tmp66;
    } else {
      class J {
        constructor() {
          if (closure_9) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[22]);
            badge = obj.fetchBadge(closure_0(closure_2[23]).BadgeId.GIFTING);
          }
          return;
        }
      }
    }
    if (cResult[30] === enabled) {
      class J {
        constructor() {
          if (closure_9) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[22]);
            badge = obj.fetchBadge(closure_0(closure_2[23]).BadgeId.GIFTING);
          }
          return;
        }
      }
      class Me {
        constructor() {
          tmp = closure_3;
          hasItem = null != closure_3 && null == tmp.expiresAt;
          if (hasItem) {
            tmp3 = enabled;
            hasItem = !enabled;
          }
          if (hasItem) {
            tmp4 = closure_13;
            hasItem = closure_13.has(tmp.trialId);
          }
          return hasItem;
        }
      }
      if (cResult[33] !== undefined) {
        class J {
          constructor() {
            if (closure_9) {
              tmp = closure_0;
              tmp2 = closure_2;
              obj = closure_0(closure_2[22]);
              badge = obj.fetchBadge(closure_0(closure_2[23]).BadgeId.GIFTING);
            }
            return;
          }
        }
        if (mobileBottomSheet != null) {
          class J {
            constructor() {
              if (closure_9) {
                tmp = closure_0;
                tmp2 = closure_2;
                obj = closure_0(closure_2[22]);
                badge = obj.fetchBadge(closure_0(closure_2[23]).BadgeId.GIFTING);
              }
              return;
            }
          }
        }
        class Re {
          constructor() {
            dismissibleContent = undefined;
            if (mobileBottomSheet != null) {
              dismissibleContent = mobileBottomSheet.dismissibleContent;
            }
            return dismissibleContent === closure_0(closure_2[25]).DismissibleContent.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL;
          }
        }
        class Me {
          constructor() {
            tmp = closure_3;
            hasItem = null != closure_3 && null == tmp.expiresAt;
            if (hasItem) {
              tmp3 = enabled;
              hasItem = !enabled;
            }
            if (hasItem) {
              tmp4 = closure_13;
              hasItem = closure_13.has(tmp.trialId);
            }
            return hasItem;
          }
        }
        cResult[33] = tmp70;
        cResult[34] = Re;
      } else {
        class J {
          constructor() {
            if (closure_9) {
              tmp = closure_0;
              tmp2 = closure_2;
              obj = closure_0(closure_2[22]);
              badge = obj.fetchBadge(closure_0(closure_2[23]).BadgeId.GIFTING);
            }
            return;
          }
        }
      }
      if (mobileBottomSheet != null) {
        class J {
          constructor() {
            if (closure_9) {
              tmp = closure_0;
              tmp2 = closure_2;
              obj = closure_0(closure_2[22]);
              badge = obj.fetchBadge(closure_0(closure_2[23]).BadgeId.GIFTING);
            }
            return;
          }
        }
      }
      if (cResult[35] !== undefined) {
        class J {
          constructor() {
            if (closure_9) {
              tmp = closure_0;
              tmp2 = closure_2;
              obj = closure_0(closure_2[22]);
              badge = obj.fetchBadge(closure_0(closure_2[23]).BadgeId.GIFTING);
            }
            return;
          }
        }
        if (mobileBottomSheet != null) {
          class J {
            constructor() {
              if (closure_9) {
                tmp = closure_0;
                tmp2 = closure_2;
                obj = closure_0(closure_2[22]);
                badge = obj.fetchBadge(closure_0(closure_2[23]).BadgeId.GIFTING);
              }
              return;
            }
          }
        }
        class Ae {
          constructor() {
            dismissibleContent = undefined;
            if (mobileBottomSheet != null) {
              dismissibleContent = mobileBottomSheet.dismissibleContent;
            }
            return dismissibleContent === closure_0(closure_2[25]).DismissibleContent.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL;
          }
        }
        class Me {
          constructor() {
            tmp = closure_3;
            hasItem = null != closure_3 && null == tmp.expiresAt;
            if (hasItem) {
              tmp3 = enabled;
              hasItem = !enabled;
            }
            if (hasItem) {
              tmp4 = closure_13;
              hasItem = closure_13.has(tmp.trialId);
            }
            return hasItem;
          }
        }
        cResult[35] = tmp73;
        cResult[36] = Ae;
      } else {
        class J {
          constructor() {
            if (closure_9) {
              tmp = closure_0;
              tmp2 = closure_2;
              obj = closure_0(closure_2[22]);
              badge = obj.fetchBadge(closure_0(closure_2[23]).BadgeId.GIFTING);
            }
            return;
          }
        }
      }
      closure_14 = tmp75;
      if (cResult[37] === null != stateFromStores3) {
        class J {
          constructor() {
            if (closure_9) {
              tmp = closure_0;
              tmp2 = closure_2;
              obj = closure_0(closure_2[22]);
              badge = obj.fetchBadge(closure_0(closure_2[23]).BadgeId.GIFTING);
            }
            return;
          }
        }
        if (cResult[40] === stateFromStores2) {
          class J {
            constructor() {
              if (closure_9) {
                tmp = closure_0;
                tmp2 = closure_2;
                obj = closure_0(closure_2[22]);
                badge = obj.fetchBadge(closure_0(closure_2[23]).BadgeId.GIFTING);
              }
              return;
            }
          }
        }
        class Fe {
          constructor() {
            tmp = !closure_13;
            if (closure_13) {
              tmp2 = closure_14;
              tmp = !closure_14;
            }
            tmp3 = !tmp;
            if (!tmp) {
              tmp4 = closure_6;
              tmp5 = null;
              tmp6 = null != closure_6;
              if (tmp6) {
                tmp7 = closure_10;
                tmp8 = closure_10;
                if (tmp8) {
                  tmp9 = enabled;
                  if (enabled) {
                    tmp10 = closure_7;
                    tmp9 = null != closure_7;
                  }
                  if (tmp9) {
                    tmp9 = isGiftReminderAssetReady;
                  }
                  tmp8 = tmp9;
                }
                tmp6 = tmp8;
              }
              tmp3 = tmp6;
            }
            return tmp3;
          }
        }
        class Me {
          constructor() {
            tmp = closure_3;
            hasItem = null != closure_3 && null == tmp.expiresAt;
            if (hasItem) {
              tmp3 = enabled;
              hasItem = !enabled;
            }
            if (hasItem) {
              tmp4 = closure_13;
              hasItem = closure_13.has(tmp.trialId);
            }
            return hasItem;
          }
        }
        cResult[40] = stateFromStores2;
        cResult[41] = enabled2;
        cResult[42] = stateFromStores4;
        cResult[43] = tmp74;
        cResult[44] = tmp75;
        class De {
          constructor() {
            tmp = closure_13;
            if (closure_13) {
              tmp = isGiftCoachmarkAssetReady;
            }
            return tmp;
          }
        }
        cResult[46] = isGiftReminderAssetReady;
        cResult[47] = Fe;
      }
      class De {
        constructor() {
          tmp = closure_13;
          if (closure_13) {
            tmp = isGiftCoachmarkAssetReady;
          }
          return tmp;
        }
      }
      cResult[37] = null != stateFromStores3;
      cResult[38] = isGiftCoachmarkAssetReady;
      cResult[39] = De;
    }
    class Me {
      constructor() {
        tmp = closure_3;
        hasItem = null != closure_3 && null == tmp.expiresAt;
        if (hasItem) {
          tmp3 = enabled;
          hasItem = !enabled;
        }
        if (hasItem) {
          tmp4 = closure_13;
          hasItem = closure_13.has(tmp.trialId);
        }
        return hasItem;
      }
    }
    cResult[30] = enabled;
    cResult[31] = premiumTrialOffer;
    cResult[32] = Me;
  }
  class Te {
    constructor() {
      tmp = closure_0;
      if (closure_0) {
        tmp2 = closure_1;
        tmp3 = null;
        tmp = null != closure_1;
      }
      return tmp;
    }
  }
  cResult[25] = tmp18[1];
  cResult[26] = first;
  cResult[27] = Te;
}) : (() => {
  let items = [UserSettingsProtoStore];
  let stateFromStores = isEligibleToShowGiftingBadgeCoachmark(504).useStateFromStores(items, () => UserSettingsProtoStore.hasLoaded(constants.PRELOADED_USER_SETTINGS));
  let obj = isEligibleToShowGiftingBadgeCoachmark(504);
  const obj2 = MainViewTooltipActionSheetsDisabledExperimentDefault;
  const obj3 = { location: MainViewTooltipActionSheets };
  const items1 = [UserRequiredActionStore];
  const stateFromStores1 = isEligibleToShowGiftingBadgeCoachmark(504).useStateFromStores(items1, () => UserRequiredActionStore.hasAction());
  if (stateFromStores) {
    stateFromStores = !obj2.getConfig(obj3).disabled;
  }
  if (stateFromStores) {
    stateFromStores = !stateFromStores1;
  }
  if (stateFromStores) {
    stateFromStores = !tmp(1613).isMetaQuest();
    const tmpResult = tmp(1613);
  }
  const obj4 = isEligibleToShowGiftingBadgeCoachmark(504);
  const items2 = [GooglePlayPriceChangeStore];
  const tmpResult19 = isEligibleToShowGiftingBadgeCoachmark(504);
  [tmp8, tmp9] = isEligibleToShowGiftingBadgeCoachmark(504).useStateFromStoresArray(items2, () => {
    const items = [, ];
    ({ shouldShowGooglePlayPriceChange: arr[0], priceChangeRecord: arr[1] } = GooglePlayPriceChangeStore);
    return items;
  });
  const tmp7 = _slicedToArray(isEligibleToShowGiftingBadgeCoachmark(504).useStateFromStoresArray(items2, () => {
    const items = [, ];
    ({ shouldShowGooglePlayPriceChange: arr[0], priceChangeRecord: arr[1] } = GooglePlayPriceChangeStore);
    return items;
  }), 2);
  const premiumDiscountOffer = isEligibleToShowGiftingBadgeCoachmark(8324).usePremiumDiscountOffer();
  const tmpResult20 = isEligibleToShowGiftingBadgeCoachmark(8324);
  const premiumTrialOffer = isEligibleToShowGiftingBadgeCoachmark(7694).usePremiumTrialOffer();
  const PremiumTrialOfferActionSheetKillSwitchExperiment = tmp(17421).PremiumTrialOfferActionSheetKillSwitchExperiment;
  const tmpResult21 = isEligibleToShowGiftingBadgeCoachmark(7694);
  const promotionMarketingComponent = isEligibleToShowGiftingBadgeCoachmark(13690).usePromotionMarketingComponent(tmp(11036).MarketingComponentType.MOBILE_BOTTOM_SHEET);
  let oneofKind;
  if (promotionMarketingComponent != null) {
    oneofKind = promotionMarketingComponent.properties.properties.oneofKind;
  }
  let mobileBottomSheet = null;
  if ("mobileBottomSheet" === oneofKind) {
    mobileBottomSheet = promotionMarketingComponent.properties.properties.mobileBottomSheet;
  }
  const tmpResult22 = isEligibleToShowGiftingBadgeCoachmark(13690);
  const items3 = [PromotionsStore];
  const stateFromStores2 = isEligibleToShowGiftingBadgeCoachmark(504).useStateFromStores(items3, () => {
    const giftPromotion = PromotionsStore.getGiftPromotion();
    let id;
    if (giftPromotion != null) {
      id = giftPromotion.id;
    }
    return id;
  });
  const tmpResult23 = isEligibleToShowGiftingBadgeCoachmark(504);
  const items4 = [PromotionsStore];
  const stateFromStores3 = isEligibleToShowGiftingBadgeCoachmark(504).useStateFromStores(items4, () => {
    const marketingComponentByType = PromotionsStore.getMarketingComponentByType(isEligibleToShowGiftingBadgeCoachmark(11036).MarketingComponentType.GIFT_ICON_COACHMARK);
    let giftIconCoachmark = null;
    if (null != marketingComponentByType) {
      giftIconCoachmark = null;
      if ("giftIconCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
        giftIconCoachmark = marketingComponentByType.properties.properties.giftIconCoachmark;
      }
    }
    return giftIconCoachmark;
  });
  const tmpResult24 = isEligibleToShowGiftingBadgeCoachmark(504);
  const items5 = [PromotionsStore];
  const stateFromStores4 = isEligibleToShowGiftingBadgeCoachmark(504).useStateFromStores(items5, () => {
    const marketingComponentByType = PromotionsStore.getMarketingComponentByType(isEligibleToShowGiftingBadgeCoachmark(11036).MarketingComponentType.GIFT_REMINDER_COACHMARK);
    let prop = null;
    if (null != marketingComponentByType) {
      prop = null;
      if ("giftReminderCoachmark" === marketingComponentByType.properties.properties.oneofKind) {
        prop = marketingComponentByType.properties.properties.giftReminderCoachmark;
      }
    }
    return prop;
  });
  const GiftPromotionReminderExperiment = tmp(11035).GiftPromotionReminderExperiment;
  const tmpResult25 = isEligibleToShowGiftingBadgeCoachmark(504);
  isEligibleToShowGiftingBadgeCoachmark = isEligibleToShowGiftingBadgeCoachmark(11041).useIsEligibleToShowGiftingBadgeCoachmark({ platform: "native", location: tmp5 });
  const items6 = [isEligibleToShowGiftingBadgeCoachmark];
  const effect = noop.useEffect(() => {
    if (isEligibleToShowGiftingBadgeCoachmark) {
      const badge = BadgeDirectoryActionCreators.fetchBadge(BadgeId.BadgeId.GIFTING);
    }
  }, items6);
  const tmpResult26 = isEligibleToShowGiftingBadgeCoachmark(11041);
  const items7 = [BadgeDirectoryStore];
  let isDismissed = null != stateFromStores2;
  const stateFromStores5 = isEligibleToShowGiftingBadgeCoachmark(504).useStateFromStores(items7, () => null != badgeById.getBadgeById(isEligibleToShowGiftingBadgeCoachmark(8458).BadgeId.GIFTING));
  if (isDismissed) {
    isDismissed = tmp(4579).UNSAFE_isSnowflakeBoundDismissibleContentDismissed(tmp(2031).DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET, stateFromStores2).isDismissed;
    const tmpResult28 = tmp(4579);
  }
  let isDismissed2 = null != stateFromStores2;
  if (isDismissed2) {
    isDismissed2 = tmp(4579).UNSAFE_isSnowflakeBoundDismissibleContentDismissed(tmp(2031).DismissibleContent.GIFTING_PROMOTION_REMINDER, stateFromStores2).isDismissed;
    const tmpResult29 = tmp(4579);
  }
  let tmp22 = null;
  const tmpResult27 = isEligibleToShowGiftingBadgeCoachmark(504);
  if (!isDismissed) {
    tmp22 = stateFromStores3;
  }
  let tmp23 = null;
  if (!isDismissed2) {
    tmp23 = stateFromStores4;
  }
  const tmp4Result = useGiftingPromotionAssetsReadyDefault;
  ({ isGiftCoachmarkAssetReady, isGiftReminderAssetReady } = useGiftingPromotionAssetsReadyDefault(tmp22, tmp23));
  const tmp4ResultResult = useGiftingPromotionAssetsReadyDefault(tmp22, tmp23);
  const nitroFileUploadAnnouncementEligible = isEligibleToShowGiftingBadgeCoachmark(17425).useNitroFileUploadAnnouncementEligible(tmp5);
  const tmpResult30 = isEligibleToShowGiftingBadgeCoachmark(17425);
  const nitroFileUploadUpsellEligible = isEligibleToShowGiftingBadgeCoachmark(17425).useNitroFileUploadUpsellEligible(tmp5);
  const tmpResult31 = isEligibleToShowGiftingBadgeCoachmark(17425);
  const items8 = [, ];
  ({ LEAGUE_OF_LEGENDS: arr9[0], RIOT_GAMES: arr9[1] } = PlatformTypes);
  const shouldShowRobloxConnectionCoachmark = isEligibleToShowGiftingBadgeCoachmark(17400).useShouldShowRobloxConnectionCoachmark();
  const tmp28 = PlatformTypes;
  const tmpResult32 = isEligibleToShowGiftingBadgeCoachmark(17400);
  const shouldShowConnectionDeprecationBottomSheet = isEligibleToShowGiftingBadgeCoachmark(17410).useShouldShowConnectionDeprecationBottomSheet({ deprecatedPlatformTypes: items8 });
  const tmpResult33 = isEligibleToShowGiftingBadgeCoachmark(17410);
  const obj5 = { deprecatedPlatformTypes: null };
  const items9 = [PlatformTypes.BATTLENET];
  obj5.deprecatedPlatformTypes = items9;
  const shouldShowConnectionDeprecationBottomSheet1 = isEligibleToShowGiftingBadgeCoachmark(17410).useShouldShowConnectionDeprecationBottomSheet(obj5);
  const tmpResult34 = isEligibleToShowGiftingBadgeCoachmark(17410);
  const isDisplayNameStylesFlywheelSettersEnabled = isEligibleToShowGiftingBadgeCoachmark(9975).useIsDisplayNameStylesFlywheelSettersEnabled(tmp5);
  isEligibleToShowGiftingBadgeCoachmark(12097);
  const obj6 = {};
  if (stateFromStores) {
    const obj7 = { isEligible: tmp8, newSnowflakeId: null, actionSheetProperties: null };
    let priceChangeId;
    if (tmp9 != null) {
      priceChangeId = tmp9.priceChangeId;
    }
    obj7.newSnowflakeId = priceChangeId;
    obj7.actionSheetProperties = {};
    obj6[tmp(2031).DismissibleContent.GOOGLE_PLAY_PRICE_CHANGE_ACTION_SHEET] = obj7;
    let tmp37 = null != premiumDiscountOffer;
    if (tmp37) {
      tmp37 = null == premiumDiscountOffer.expiresAt;
    }
    const obj8 = { isEligible: tmp37, newSnowflakeId: null, actionSheetProperties: null };
    let id;
    if (premiumDiscountOffer != null) {
      id = premiumDiscountOffer.id;
    }
    obj8.newSnowflakeId = id;
    if (null != premiumDiscountOffer) {
      const obj9 = { userDiscountOffer: premiumDiscountOffer };
      let obj10 = obj9;
    } else {
      obj10 = {};
    }
    obj8.actionSheetProperties = obj10;
    obj6[tmp(2031).DismissibleContent.DISCOUNT_OFFER_ACTION_SHEET] = obj8;
    let hasItem = null != premiumTrialOffer;
    if (hasItem) {
      hasItem = null == premiumTrialOffer.expiresAt;
    }
    if (hasItem) {
      hasItem = !PremiumTrialOfferActionSheetKillSwitchExperiment.useConfig({ location: tmp5 }).enabled;
    }
    if (hasItem) {
      hasItem = set.has(premiumTrialOffer.trialId);
    }
    const obj11 = { isEligible: hasItem, newSnowflakeId: null, actionSheetProperties: null };
    let id1;
    if (premiumTrialOffer != null) {
      id1 = premiumTrialOffer.id;
    }
    obj11.newSnowflakeId = id1;
    if (null != premiumTrialOffer) {
      const obj12 = { userTrialOffer: premiumTrialOffer };
      let obj13 = obj12;
    } else {
      obj13 = {};
    }
    obj11.actionSheetProperties = obj13;
    obj6[tmp(2031).DismissibleContent.MOBILE_PREMIUM_TRIAL_OFFER_ACTION_SHEET] = obj11;
    let dismissibleContent;
    if (mobileBottomSheet != null) {
      dismissibleContent = mobileBottomSheet.dismissibleContent;
    }
    const obj14 = { isEligible: dismissibleContent === tmp(2031).DismissibleContent.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, newSnowflakeId: null, actionSheetProperties: null };
    let promotionId;
    if (promotionMarketingComponent != null) {
      promotionId = promotionMarketingComponent.promotionId;
    }
    obj14.newSnowflakeId = promotionId;
    const obj15 = { bottomSheetData: mobileBottomSheet, componentId: null, promotionId: null };
    let id2;
    if (promotionMarketingComponent != null) {
      id2 = promotionMarketingComponent.id;
    }
    obj15.componentId = id2;
    let promotionId1;
    if (promotionMarketingComponent != null) {
      promotionId1 = promotionMarketingComponent.promotionId;
    }
    obj15.promotionId = promotionId1;
    obj14.actionSheetProperties = obj15;
    obj6[tmp(2031).DismissibleContent.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL] = obj14;
    let dismissibleContent1;
    if (mobileBottomSheet != null) {
      dismissibleContent1 = mobileBottomSheet.dismissibleContent;
    }
    const obj16 = { isEligible: dismissibleContent1 === tmp(2031).DismissibleContent.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL, newSnowflakeId: null, actionSheetProperties: null };
    let promotionId2;
    if (promotionMarketingComponent != null) {
      promotionId2 = promotionMarketingComponent.promotionId;
    }
    obj16.newSnowflakeId = promotionId2;
    const obj17 = { bottomSheetData: mobileBottomSheet, componentId: null, promotionId: null };
    let id3;
    if (promotionMarketingComponent != null) {
      id3 = promotionMarketingComponent.id;
    }
    obj17.componentId = id3;
    let promotionId3;
    if (promotionMarketingComponent != null) {
      promotionId3 = promotionMarketingComponent.promotionId;
    }
    obj17.promotionId = promotionId3;
    obj16.actionSheetProperties = obj17;
    obj6[tmp(2031).DismissibleContent.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL] = obj16;
    let tmp50 = tmp34;
    if (tmp34) {
      tmp50 = isGiftCoachmarkAssetReady;
    }
    const obj18 = { isEligible: tmp50, newSnowflakeId: stateFromStores2, actionSheetProperties: null };
    const obj19 = { coachmarkComponent: stateFromStores3 };
    obj18.actionSheetProperties = obj19;
    obj6[tmp(2031).DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET] = obj18;
    let tmp51 = !tmp34;
    if (tmp34) {
      tmp51 = null == stateFromStores4;
    }
    let enabled = !tmp51;
    if (!tmp51) {
      enabled = null != stateFromStores2;
    }
    if (enabled) {
      enabled = isDismissed;
    }
    if (enabled) {
      enabled = GiftPromotionReminderExperiment.useConfig({ location: tmp5 }).enabled;
    }
    if (enabled) {
      enabled = null != stateFromStores4;
    }
    if (enabled) {
      enabled = isGiftReminderAssetReady;
    }
    const obj20 = { isEligible: enabled, newSnowflakeId: stateFromStores2, actionSheetProperties: null };
    const obj21 = { coachmarkComponent: stateFromStores4 };
    obj20.actionSheetProperties = obj21;
    obj6[tmp(2031).DismissibleContent.GIFTING_PROMOTION_REMINDER] = obj20;
    if (isEligibleToShowGiftingBadgeCoachmark) {
      isEligibleToShowGiftingBadgeCoachmark = stateFromStores5;
    }
    const obj22 = { isEligible: isEligibleToShowGiftingBadgeCoachmark, actionSheetProperties: {} };
    obj6[tmp(2031).DismissibleContent.NEW_GIFTING_BADGES_COACHMARK] = obj22;
    const obj23 = { isEligible: true, actionSheetProperties: {} };
    obj6[tmp(2031).DismissibleContent.CUSTOM_APP_ICONS_COACHMARK] = obj23;
    const obj24 = { isEligible: shouldShowRobloxConnectionCoachmark, actionSheetProperties: {} };
    obj6[tmp(2031).DismissibleContent.ROBLOX_CONNECTION_COACHMARK] = obj24;
    const obj25 = { isEligible: isDisplayNameStylesFlywheelSettersEnabled, actionSheetProperties: {} };
    obj6[tmp(2031).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_COACHMARK] = obj25;
    const obj26 = { isEligible: shouldShowConnectionDeprecationBottomSheet, actionSheetProperties: null };
    const obj27 = { platformTypes: items8 };
    obj26.actionSheetProperties = obj27;
    obj6[tmp(2031).DismissibleContent.RIOT_CONNECTION_DEPRECATION_DISABLE] = obj26;
    const obj28 = { isEligible: shouldShowConnectionDeprecationBottomSheet1, actionSheetProperties: null };
    const obj29 = { platformTypes: null };
    const items10 = [tmp28.BATTLENET];
    obj29.platformTypes = items10;
    obj28.actionSheetProperties = obj29;
    obj6[tmp(2031).DismissibleContent.BATTLENET_CONNECTION_DEPRECATION_DISABLE] = obj28;
    const obj30 = { isEligible: true, actionSheetProperties: {} };
    obj6[tmp(2031).DismissibleContent.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT] = obj30;
    const obj31 = { isEligible: nitroFileUploadAnnouncementEligible, actionSheetProperties: {} };
    obj6[tmp(2031).DismissibleContent.NITRO_FILE_UPLOAD_1GB_ANNOUNCEMENT] = obj31;
    const obj32 = { isEligible: nitroFileUploadUpsellEligible, actionSheetProperties: {} };
    obj6[tmp(2031).DismissibleContent.NITRO_FILE_UPLOAD_1GB_UPSELL] = obj32;
    const obj33 = { isEligible: tmp33, actionSheetProperties: {} };
    obj6[tmp(2031).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_COACHMARK] = obj33;
    let tmp35 = obj6;
  } else {
    tmp35 = obj6;
  }
  return tmp35;
});
