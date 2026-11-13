// Module ID: 19427
// Function ID: 19428
// Name: MainViewTooltipActionSheetsV2
// Dependencies: [32, 19, 5407, 1231, 1072, 5016, 21, 19428, 2118, 19430, 19431, 19432, 19434, 19435, 18053, 19437, 19443, 19445, 19452, 19457, 14001, 19458, 19459, 19460, 5003, 5010, 1252, 5007, 10672, 5202, 5004, 19461, 504, 10671, 2]
// Exports: default

// Module 19427 (MainViewTooltipActionSheetsV2)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import asyncRequire from "asyncRequire" /* 2118 */;
import dismissible_content from "dismissible_content" /* 5003 */;
import DismissibleContentTypes from "DismissibleContentTypes" /* 5010 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 5016 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import "react";
import react_mod from "react" /* 19 */;
import ActionSheetStore from "ActionSheetStore" /* 5407 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import size from "module_2" /* 2 */;

let closure_6;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let tmp3;
function ReferralProgramEntryPointActionSheetImporter() {
  return asyncRequire(19458, dependencyMap.paths);
}
function GiftingBadgesCoachmarkImporter() {
  return asyncRequire(19443, dependencyMap.paths);
}
function AppIconsCoachMarkImporter() {
  return asyncRequire(19428, dependencyMap.paths);
}
function RobloxConnectionCoachmarkImporter() {
  return asyncRequire(19431, dependencyMap.paths);
}
function DisplayNameStylesFlywheelMobileActionSheetImporter() {
  return asyncRequire(19437, dependencyMap.paths);
}
function CollectiblesMobileAnnouncementActionSheetImporter() {
  return asyncRequire(19445, dependencyMap.paths);
}
function NitroFileUploadAnnouncementPromoSheetImporter() {
  return asyncRequire(19452, dependencyMap.paths);
}
function NitroFileUploadUpsellPromoSheetImporter() {
  return asyncRequire(19457, dependencyMap.paths);
}
class GiftingPromotionCoachmarkImporter {
  constructor() {
    return asyncRequire(19430, dependencyMap.paths);
  }
}
class PremiumMarketingMomentActionSheetImporter {
  constructor() {
    return asyncRequire(19434, dependencyMap.paths);
  }
}
class CustomTypingIndicatorAnnounceActionSheetImporter {
  constructor() {
    return asyncRequire(14001, dependencyMap.paths);
  }
}
function trackActionSheetImpression(actionSheetConfig) {
  let CONTENT_TYPES_WITH_BYPASS_FATIGUE;
  let str;
  const tmp = null != ActionSheetStore.getContent();
  const tmp3 = AnalyticsUtilsDefault;
  const track = tmp3.track;
  const MAIN_VIEW_ACTION_SHEET_SELECTED = AnalyticEvents.MAIN_VIEW_ACTION_SHEET_SELECTED;
  const id = actionSheetConfig.id;
  const obj = { dc_id: dismissible_content.DismissibleContent[actionSheetConfig.id], dc_type: str, bypass_fatigue: CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(actionSheetConfig.id), is_another_action_sheet_open: tmp };
  str = "snowflake_bound";
  const obj2 = DismissibleContentTypes;
  if (!obj2.isSnowflakeBoundDismissibleContent(id)) {
    let str2 = "versioned";
    const tmp4Result = DismissibleContentTypes;
    if (!tmp4Result.isVersionedDismissibleContent(id)) {
      let str3 = "single_use";
      const tmp4Result2 = DismissibleContentTypes;
      if (tmp4Result2.isTimeRecurringDismissibleContent(id)) {
        str3 = "time_recurring";
      }
      str2 = str3;
    }
    str = str2;
  }
  CONTENT_TYPES_WITH_BYPASS_FATIGUE = tmp4(5007).CONTENT_TYPES_WITH_BYPASS_FATIGUE;
  track(MAIN_VIEW_ACTION_SHEET_SELECTED, obj);
}
function TrackedDismissibleActionSheet(actionSheetConfig) {
  actionSheetConfig = actionSheetConfig.actionSheetConfig;
  const hasTrackedRef = actionSheetConfig.hasTrackedRef;
  const merged = Object.assign(actionSheetConfig, Object.assign({ actionSheetConfig: 0, hasTrackedRef: 0 }));
  const items = [actionSheetConfig, hasTrackedRef];
  closure_5(() => {
    if (!hasTrackedRef.current) {
      tmp.current = true;
      trackActionSheetImpression(actionSheetConfig);
    }
  }, items);
  const DismissibleActionSheet = actionSheetConfig(10672).DismissibleActionSheet;
  const merged1 = Object.assign(merged);
  return <DismissibleActionSheet />;
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ useEffect: hasOwnProperty, useMemo: metroRequire, useRef: metroImportDefault } = react);
const AnalyticEvents = Constants.AnalyticEvents;
const constants = DismissibleContentConstants.DismissibleContentGroupName;
const jsx = Fragment.jsx;
const MainViewTooltipActionSheets = "MainViewTooltipActionSheets";
let obj = {
  id: dismissible_content.DismissibleContent.HEXAGON_CAMPAIGN_PERKS_EXPIRED_PROMO_SHEET,
  importer: function HexagonCampaignExpiredPromoSheetImporter() {
    return asyncRequire(19459, dependencyMap.paths);
  }
};
let items = [obj, , , ];
let obj2 = {
  id: dismissible_content.DismissibleContent.GOOGLE_PLAY_PRICE_CHANGE_ACTION_SHEET,
  importer: function GooglePlayPriceChangeActionSheetImporter() {
    return asyncRequire(19432, dependencyMap.paths);
  }
};
items[1] = obj2;
let obj3 = {
  id: dismissible_content.DismissibleContent.DISCOUNT_OFFER_ACTION_SHEET,
  importer: function PremiumDiscountOfferActionSheetImporter() {
    return asyncRequire(19435, dependencyMap.paths);
  }
};
items[2] = obj3;
let obj4 = {
  id: dismissible_content.DismissibleContent.MOBILE_PREMIUM_TRIAL_OFFER_ACTION_SHEET,
  importer: function PremiumTrialOfferActionSheetImporter() {
    return asyncRequire(18053, dependencyMap.paths);
  }
};
items[3] = obj4;
let items1 = [...items];
let obj5 = {
  id: dismissible_content.DismissibleContent.HEXAGON_CAMPAIGN_PERKS_EXPIRING_PROMO_SHEET,
  importer: function HexagonCampaignExpiringPromoSheetImporter() {
    return asyncRequire(19460, dependencyMap.paths);
  }
};
items1[tmp3] = obj5;
const sum = tmp3 + 1;
let obj6 = { id: dismissible_content.DismissibleContent.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, importer: PremiumMarketingMomentActionSheetImporter };
items1[sum] = obj6;
const sum1 = sum + 1;
let obj7 = { id: dismissible_content.DismissibleContent.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL, importer: PremiumMarketingMomentActionSheetImporter };
items1[sum1] = obj7;
const sum2 = sum1 + 1;
items1[sum2] = { id: dismissible_content.DismissibleContent.MOBILE_REFERRAL_PROGRAM_BOTTOM_SHEET_ENTRYPOINT, importer: ReferralProgramEntryPointActionSheetImporter };
const sum3 = sum2 + 1;
const obj8 = { id: dismissible_content.DismissibleContent.MOBILE_REFERRAL_PROGRAM_BOTTOM_SHEET_ENTRYPOINT, importer: ReferralProgramEntryPointActionSheetImporter };
items1[sum3] = { id: dismissible_content.DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET, importer: GiftingPromotionCoachmarkImporter };
const sum4 = sum3 + 1;
const obj9 = { id: dismissible_content.DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET, importer: GiftingPromotionCoachmarkImporter };
items1[sum4] = { id: dismissible_content.DismissibleContent.GIFTING_PROMOTION_REMINDER, importer: GiftingPromotionCoachmarkImporter };
const sum5 = sum4 + 1;
({ id: dismissible_content.DismissibleContent.GIFTING_PROMOTION_REMINDER, importer: GiftingPromotionCoachmarkImporter });
items1[sum5] = { id: dismissible_content.DismissibleContent.NEW_GIFTING_BADGES_COACHMARK, importer: GiftingBadgesCoachmarkImporter };
const sum6 = sum5 + 1;
({ id: dismissible_content.DismissibleContent.NEW_GIFTING_BADGES_COACHMARK, importer: GiftingBadgesCoachmarkImporter });
items1[sum6] = { id: dismissible_content.DismissibleContent.CUSTOM_APP_ICONS_COACHMARK, importer: AppIconsCoachMarkImporter };
const sum7 = sum6 + 1;
({ id: dismissible_content.DismissibleContent.CUSTOM_APP_ICONS_COACHMARK, importer: AppIconsCoachMarkImporter });
items1[sum7] = { id: dismissible_content.DismissibleContent.ROBLOX_CONNECTION_COACHMARK, importer: RobloxConnectionCoachmarkImporter };
const sum8 = sum7 + 1;
({ id: dismissible_content.DismissibleContent.ROBLOX_CONNECTION_COACHMARK, importer: RobloxConnectionCoachmarkImporter });
items1[sum8] = { id: dismissible_content.DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_COACHMARK, importer: DisplayNameStylesFlywheelMobileActionSheetImporter };
const sum9 = sum8 + 1;
({ id: dismissible_content.DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_COACHMARK, importer: DisplayNameStylesFlywheelMobileActionSheetImporter });
items1[sum9] = { id: dismissible_content.DismissibleContent.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT, importer: CollectiblesMobileAnnouncementActionSheetImporter };
const sum10 = sum9 + 1;
({ id: dismissible_content.DismissibleContent.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT, importer: CollectiblesMobileAnnouncementActionSheetImporter });
items1[sum10] = { id: dismissible_content.DismissibleContent.NITRO_FILE_UPLOAD_1GB_ANNOUNCEMENT, importer: NitroFileUploadAnnouncementPromoSheetImporter };
const sum11 = sum10 + 1;
({ id: dismissible_content.DismissibleContent.NITRO_FILE_UPLOAD_1GB_ANNOUNCEMENT, importer: NitroFileUploadAnnouncementPromoSheetImporter });
items1[sum11] = { id: dismissible_content.DismissibleContent.NITRO_FILE_UPLOAD_1GB_UPSELL, importer: NitroFileUploadUpsellPromoSheetImporter };
const sum12 = sum11 + 1;
({ id: dismissible_content.DismissibleContent.NITRO_FILE_UPLOAD_1GB_UPSELL, importer: NitroFileUploadUpsellPromoSheetImporter });
items1[sum12] = { id: dismissible_content.DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_COACHMARK, importer: CustomTypingIndicatorAnnounceActionSheetImporter };
({ id: dismissible_content.DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_COACHMARK, importer: CustomTypingIndicatorAnnounceActionSheetImporter });
items1[sum12 + 1] = { id: dismissible_content.DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_PRESETS_ACTION_SHEET, importer: CustomTypingIndicatorAnnounceActionSheetImporter };
({ id: dismissible_content.DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_PRESETS_ACTION_SHEET, importer: CustomTypingIndicatorAnnounceActionSheetImporter });
const result = size.fileFinishedImporting("modules/upsell_tooltip/native/MainViewTooltipActionSheetsV2.tsx");

export default function MainViewTooltipActionSheetsV2() {
  let closure_2;
  let first;
  let hasTrackedRef;
  let mainViewTooltipActionSheetMap;
  let obj5;
  let ref;
  let stateFromStores;
  let str6;
  const tmp = mainViewTooltipActionSheetMap;
  let obj = mainViewTooltipActionSheetMap(19461);
  mainViewTooltipActionSheetMap = obj.useMainViewTooltipActionSheetMap();
  [first, dependencyMap] = react.useState(null);
  _slicedToArray = ref(false);
  react = ref(false);
  const items = [first];
  stateFromStores(() => {
    hasTrackedRef.current = false;
  }, items);
  items1 = [obj5];
  const obj2 = mainViewTooltipActionSheetMap(504);
  stateFromStores = obj2.useStateFromStores(items1, () => obj5.getKey() === MainViewTooltipActionSheets);
  const items2 = [UserSettingsProtoStore];
  const obj3 = mainViewTooltipActionSheetMap(504);
  const stateFromStores1 = obj3.useStateFromStores(items2, () => {
    const userContent = UserSettingsProtoStore.settings.userContent;
    let dismissedContents;
    if (userContent != null) {
      dismissedContents = userContent.dismissedContents;
    }
    return dismissedContents;
  });
  const items3 = [UserSettingsProtoStore];
  const items4 = [mainViewTooltipActionSheetMap, stateFromStores1, ];
  const obj4 = mainViewTooltipActionSheetMap(504);
  items4[2] = obj4.useStateFromStores(items3, () => {
    const userContent = UserSettingsProtoStore.settings.userContent;
    let prop;
    if (userContent != null) {
      prop = userContent.recurringDismissibleContentStates;
    }
    return prop;
  });
  const tmp9 = closure_6(() => {
    let found = items1.find((id) => {
      let isEligible;
      if (closure_1_0[id.id] != null) {
        isEligible = tmp.isEligible;
      }
      if (isEligible) {
        id = id.id;
        let tmp3 = null == tmp;
        if (!tmp3) {
          let isDismissed;
          const obj = mainViewTooltipActionSheetMap(closure_2[25]);
          if (obj.isSnowflakeBoundDismissibleContent(id)) {
            let isDismissed3 = null == tmp.newSnowflakeId;
            if (!isDismissed3) {
              const tmp4Result = mainViewTooltipActionSheetMap(closure_2[29]);
              isDismissed3 = tmp4Result.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(id, tmp.newSnowflakeId).isDismissed;
            }
            isDismissed = isDismissed3;
          } else {
            const tmp4Result6 = mainViewTooltipActionSheetMap(closure_2[25]);
            if (tmp4Result6.isVersionedDismissibleContent(id)) {
              const tmp4Result7 = mainViewTooltipActionSheetMap(closure_2[30]);
              isDismissed = tmp4Result7.isVersionedDismissibleContentDismissed(id, tmp.latestVersion).isDismissed;
            } else {
              const tmp4Result8 = mainViewTooltipActionSheetMap(closure_2[25]);
              if (tmp4Result8.isTimeRecurringDismissibleContent(id)) {
                let isDismissed2 = null == tmp.cooldownConfig;
                if (!isDismissed2) {
                  const tmp4Result9 = mainViewTooltipActionSheetMap(closure_2[30]);
                  isDismissed2 = tmp4Result9.isTimeRecurringDismissibleContentDismissed(id, tmp.cooldownConfig).isDismissed;
                }
                isDismissed = isDismissed2;
              } else {
                const tmp4Result10 = mainViewTooltipActionSheetMap(closure_2[29]);
                isDismissed = tmp4Result10.UNSAFE_isDismissibleContentDismissed(id);
              }
            }
          }
          tmp3 = isDismissed;
        }
        isEligible = !tmp3;
      }
      return isEligible;
    });
    if (found == null) {
      found = null;
    }
    return found;
  }, items4);
  closure_6 = tmp9;
  ref = ref(null);
  const items5 = [tmp9, stateFromStores];
  stateFromStores(() => {
    if (null != ref.current) {
      let _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      ref.current = null;
    }
    if (stateFromStores) {
      ref.current = true;
    } else {
      let num = 0;
      if (ref.current) {
        num = 350;
      }
      if (null == closure_6) {
        ref.current = false;
      }
      const _setTimeout = setTimeout;
      ref.current = setTimeout(() => {
        closure_1_2(closure_1_6);
        ref.current = null;
      }, num);
    }
    return () => {
      if (null != ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref.current);
        ref.current = null;
      }
    };
  }, items5);
  if (null == first) {
    return null;
  } else {
    obj5 = mainViewTooltipActionSheetMap[first.id];
    if (obj5 == null) {
      obj5 = {};
    }
    let id = first.id;
    let str2 = "snowflake_bound";
    const tmpResult = tmp(5010);
    if (!tmpResult.isSnowflakeBoundDismissibleContent(id)) {
      let str3 = "versioned";
      const tmpResult3 = tmp(5010);
      if (!tmpResult3.isVersionedDismissibleContent(id)) {
        let str4 = "single_use";
        const tmpResult4 = tmp(5010);
        if (tmpResult4.isTimeRecurringDismissibleContent(id)) {
          str4 = "time_recurring";
        }
        str3 = str4;
      }
      str2 = str3;
    }
    if ("snowflake_bound" === str2) {
      const obj6 = {
        contentType: first.id,
        newSnowflakeId: str6,
        groupName: constants.MAIN_VIEW_TOOLTIPS,
        children(visibleContent) {
              let tmp3 = null;
              if (visibleContent.visibleContent === first.id) {
                const merged = Object.assign(obj5.actionSheetProperties);
                tmp3 = <TrackedDismissibleActionSheet actionSheetConfig={first} hasTrackedRef={hasTrackedRef} actionSheetKey={MainViewTooltipActionSheets} importer={first.importer} markAsDismissed={tmp} />;
              }
              return tmp3;
            }
      };
      str6 = obj5.newSnowflakeId;
      const SelectedSnowflakeBoundDismissibleContent = tmp(10671).SelectedSnowflakeBoundDismissibleContent;
      const tmp18 = jsx;
      if (str6 == null) {
        str6 = "";
      }
      return tmp18(SelectedSnowflakeBoundDismissibleContent, obj6);
    } else if ("versioned" === str2) {
      let num = obj5.latestVersion;
      const SelectedVersionedDismissibleContent = tmp(10671).SelectedVersionedDismissibleContent;
      const tmp16 = jsx;
      if (num == null) {
        num = 0;
      }
      const obj7 = {
        latestVersion: num,
        contentType: first.id,
        groupName: constants.MAIN_VIEW_TOOLTIPS,
        children(visibleContent) {
              let tmp3 = null;
              if (visibleContent.visibleContent === first.id) {
                const merged = Object.assign(obj5.actionSheetProperties);
                tmp3 = <TrackedDismissibleActionSheet actionSheetConfig={first} hasTrackedRef={hasTrackedRef} actionSheetKey={MainViewTooltipActionSheets} importer={first.importer} markAsDismissed={tmp} versionedDismissibleContentType={first.id} />;
              }
              return tmp3;
            }
      };
      return tmp16(SelectedVersionedDismissibleContent, obj7);
    } else if ("time_recurring" === str2) {
      return jsx(tmp(10671).SelectedTimeRecurringDismissibleContent, {
        contentType: first.id,
        timeRecurringConfig: obj5.cooldownConfig,
        groupName: constants.MAIN_VIEW_TOOLTIPS,
        bypassAutoDismiss: false,
        children(visibleContent) {
              let tmp3 = null;
              if (visibleContent.visibleContent === first.id) {
                const merged = Object.assign(obj5.actionSheetProperties);
                tmp3 = <TrackedDismissibleActionSheet actionSheetConfig={first} hasTrackedRef={hasTrackedRef} actionSheetKey={MainViewTooltipActionSheets} importer={first.importer} markAsDismissed={tmp} />;
              }
              return tmp3;
            }
      });
    } else if ("single_use" === str2) {
      const items6 = [first.id];
      return jsx(first(10671), {
        contentTypes: items6,
        groupName: constants.MAIN_VIEW_TOOLTIPS,
        children(visibleContent) {
              let tmp3 = null;
              if (visibleContent.visibleContent === first.id) {
                const merged = Object.assign(obj5.actionSheetProperties);
                tmp3 = <TrackedDismissibleActionSheet actionSheetConfig={first} hasTrackedRef={hasTrackedRef} markAsDismissed={tmp} importer={first.importer} actionSheetKey={MainViewTooltipActionSheets} />;
              }
              return tmp3;
            }
      });
    } else {
      return null;
    }
  }
};
export const ACTION_SHEET_REGISTRY = items1;
export { trackActionSheetImpression };
