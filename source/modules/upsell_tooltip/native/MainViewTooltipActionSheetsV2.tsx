// Module ID: 15608
// Function ID: 120365
// Name: getActionSheetType
// Dependencies: [57, 31, 3823, 1316, 653, 1345, 33, 15609, 1934, 15611, 15612, 15613, 15614, 15616, 15617, 14659, 15619, 15621, 15623, 15627, 1334, 1335, 675, 1339, 9643, 3946, 1336, 15632, 566, 9642, 2]
// Exports: default

// Module 15608 (getActionSheetType)
import _slicedToArray from "_slicedToArray";
import closure_4 from "result";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";
import { DismissibleContentGroupName as closure_11 } from "ContentDismissActionType";
import { jsx } from "jsxProd";

let closure_5;
let closure_6;
let closure_7;
const require = arg1;
class GiftingPromotionCoachmarkImporter {
  constructor() {
    return require("GiftingPromotionCoachmarkActionSheet");
  }
}
class PremiumMarketingMomentActionSheetImporter {
  constructor() {
    return require("PremiumMarketingMomentActionSheet");
  }
}
class ConnectionDeprecationActionSheetImporter {
  constructor() {
    return require("ConnectionIcon");
  }
}
function getActionSheetType(id) {
  let str = "snowflake_bound";
  if (!obj.isSnowflakeBoundDismissibleContent(id)) {
    let str2 = "versioned";
    if (!obj2.isVersionedDismissibleContent(id)) {
      let str3 = "single_use";
      if (obj3.isTimeRecurringDismissibleContent(id)) {
        str3 = "time_recurring";
      }
      str2 = str3;
      obj3 = require(1335) /* isTimeRecurringDismissibleContent */;
    }
    str = str2;
    obj2 = require(1335) /* isTimeRecurringDismissibleContent */;
  }
  return str;
}
function trackActionSheetImpression(id) {
  let obj = importDefault(675);
  obj = { dc_id: require(1334) /* DismissibleContent */.DismissibleContent[id.id], dc_type: getActionSheetType(id.id) };
  const CONTENT_TYPES_WITH_BYPASS_FATIGUE = require(1339) /* set */.CONTENT_TYPES_WITH_BYPASS_FATIGUE;
  obj.bypass_fatigue = CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(id.id);
  obj.is_another_action_sheet_open = null != content.getContent();
  obj.track(AnalyticEvents.MAIN_VIEW_ACTION_SHEET_SELECTED, obj);
}
function TrackedDismissibleActionSheet(actionSheetConfig) {
  actionSheetConfig = actionSheetConfig.actionSheetConfig;
  const hasTrackedRef = actionSheetConfig.hasTrackedRef;
  let obj = Object.create(null);
  obj.actionSheetConfig = 0;
  obj.hasTrackedRef = 0;
  const merged = Object.assign(actionSheetConfig, obj);
  const items = [actionSheetConfig, hasTrackedRef];
  callback2(() => {
    if (!hasTrackedRef.current) {
      hasTrackedRef.current = true;
      outer1_15(actionSheetConfig);
    }
  }, items);
  obj = {};
  const merged1 = Object.assign(merged);
  return jsx(actionSheetConfig(9643).DismissibleActionSheet, {});
}
({ useEffect: closure_5, useMemo: closure_6, useRef: closure_7 } = result);
let obj = {
  id: require("DismissibleContent").DismissibleContent.GOOGLE_PLAY_PRICE_CHANGE_ACTION_SHEET,
  importer: function GooglePlayPriceChangeActionSheetImporter() {
    return require(1934) /* maybeLoadBundle */(15614, dependencyMap.paths);
  }
};
let items = [obj, , , ];
obj = {
  id: require("DismissibleContent").DismissibleContent.DISCOUNT_OFFER_ACTION_SHEET,
  importer: function PremiumDiscountOfferActionSheetImporter() {
    return require(1934) /* maybeLoadBundle */(15617, dependencyMap.paths);
  }
};
items[1] = obj;
obj = {
  id: require("DismissibleContent").DismissibleContent.MOBILE_PREMIUM_TRIAL_OFFER_ACTION_SHEET,
  importer: function PremiumTrialOfferActionSheetImporter() {
    return require(1934) /* maybeLoadBundle */(14659, dependencyMap.paths);
  }
};
items[2] = obj;
items[3] = {
  id: require("DismissibleContent").DismissibleContent.MOBILE_BOGO_PROMOTION_ACTION_SHEET,
  importer: function BogoPromotionActionSheetImporter() {
    return require(1934) /* maybeLoadBundle */(15613, dependencyMap.paths);
  }
};
let items1 = [...items];
let obj1 = {
  id: require("DismissibleContent").DismissibleContent.MOBILE_BOGO_PROMOTION_ACTION_SHEET,
  importer: function BogoPromotionActionSheetImporter() {
    return require(1934) /* maybeLoadBundle */(15613, dependencyMap.paths);
  }
};
items1[tmp3] = { id: require("DismissibleContent").DismissibleContent.RIOT_CONNECTION_DEPRECATION_DISABLE, importer: ConnectionDeprecationActionSheetImporter };
const sum = tmp3 + 1;
let obj2 = { id: require("DismissibleContent").DismissibleContent.RIOT_CONNECTION_DEPRECATION_DISABLE, importer: ConnectionDeprecationActionSheetImporter };
items1[sum] = { id: require("DismissibleContent").DismissibleContent.BATTLENET_CONNECTION_DEPRECATION_DISABLE, importer: ConnectionDeprecationActionSheetImporter };
const sum1 = sum + 1;
let obj3 = { id: require("DismissibleContent").DismissibleContent.BATTLENET_CONNECTION_DEPRECATION_DISABLE, importer: ConnectionDeprecationActionSheetImporter };
items1[sum1] = { id: require("DismissibleContent").DismissibleContent.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, importer: PremiumMarketingMomentActionSheetImporter };
const sum2 = sum1 + 1;
let obj4 = { id: require("DismissibleContent").DismissibleContent.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, importer: PremiumMarketingMomentActionSheetImporter };
items1[sum2] = { id: require("DismissibleContent").DismissibleContent.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL, importer: PremiumMarketingMomentActionSheetImporter };
const sum3 = sum2 + 1;
let obj5 = { id: require("DismissibleContent").DismissibleContent.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL, importer: PremiumMarketingMomentActionSheetImporter };
items1[sum3] = { id: require("DismissibleContent").DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET, importer: GiftingPromotionCoachmarkImporter };
const sum4 = sum3 + 1;
const obj6 = { id: require("DismissibleContent").DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET, importer: GiftingPromotionCoachmarkImporter };
items1[sum4] = { id: require("DismissibleContent").DismissibleContent.GIFTING_PROMOTION_REMINDER, importer: GiftingPromotionCoachmarkImporter };
const sum5 = sum4 + 1;
const obj7 = { id: require("DismissibleContent").DismissibleContent.GIFTING_PROMOTION_REMINDER, importer: GiftingPromotionCoachmarkImporter };
items1[sum5] = {
  id: require("DismissibleContent").DismissibleContent.NEW_GIFTING_BADGES_COACHMARK,
  importer: function GiftingBadgesCoachmarkImporter() {
    return require(1934) /* maybeLoadBundle */(15621, dependencyMap.paths);
  }
};
const sum6 = sum5 + 1;
const obj8 = {
  id: require("DismissibleContent").DismissibleContent.NEW_GIFTING_BADGES_COACHMARK,
  importer: function GiftingBadgesCoachmarkImporter() {
    return require(1934) /* maybeLoadBundle */(15621, dependencyMap.paths);
  }
};
items1[sum6] = {
  id: require("DismissibleContent").DismissibleContent.CUSTOM_APP_ICONS_COACHMARK,
  importer: function AppIconsCoachMarkImporter() {
    return require(1934) /* maybeLoadBundle */(15609, dependencyMap.paths);
  }
};
const sum7 = sum6 + 1;
const obj9 = {
  id: require("DismissibleContent").DismissibleContent.CUSTOM_APP_ICONS_COACHMARK,
  importer: function AppIconsCoachMarkImporter() {
    return require(1934) /* maybeLoadBundle */(15609, dependencyMap.paths);
  }
};
items1[sum7] = {
  id: require("DismissibleContent").DismissibleContent.ROBLOX_CONNECTION_COACHMARK,
  importer: function RobloxConnectionCoachmarkImporter() {
    return require(1934) /* maybeLoadBundle */(15612, dependencyMap.paths);
  }
};
const sum8 = sum7 + 1;
const obj10 = {
  id: require("DismissibleContent").DismissibleContent.ROBLOX_CONNECTION_COACHMARK,
  importer: function RobloxConnectionCoachmarkImporter() {
    return require(1934) /* maybeLoadBundle */(15612, dependencyMap.paths);
  }
};
items1[sum8] = {
  id: require("DismissibleContent").DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_COACHMARK,
  importer: function DisplayNameStylesFlywheelMobileActionSheetImporter() {
    return require(1934) /* maybeLoadBundle */(15619, dependencyMap.paths);
  }
};
const obj11 = {
  id: require("DismissibleContent").DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_COACHMARK,
  importer: function DisplayNameStylesFlywheelMobileActionSheetImporter() {
    return require(1934) /* maybeLoadBundle */(15619, dependencyMap.paths);
  }
};
items1[sum8 + 1] = {
  id: require("DismissibleContent").DismissibleContent.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT,
  importer: function CollectiblesMobileAnnouncementActionSheetImporter() {
    return require(1934) /* maybeLoadBundle */(15627, dependencyMap.paths);
  }
};
const obj12 = {
  id: require("DismissibleContent").DismissibleContent.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT,
  importer: function CollectiblesMobileAnnouncementActionSheetImporter() {
    return require(1934) /* maybeLoadBundle */(15627, dependencyMap.paths);
  }
};
result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/upsell_tooltip/native/MainViewTooltipActionSheetsV2.tsx");

export default function MainViewTooltipActionSheetsV2() {
  let obj = mainViewTooltipActionSheetMap(15632);
  mainViewTooltipActionSheetMap = obj.useMainViewTooltipActionSheetMap();
  let tmp2 = callback(React.useState(null), 2);
  const first = tmp2[0];
  const dependencyMap = tmp2[1];
  callback = callback4(false);
  React = callback4(false);
  const items = [first];
  stateFromStores(() => {
    closure_4.current = false;
  }, items);
  let obj1 = mainViewTooltipActionSheetMap(566);
  const items1 = [obj];
  stateFromStores = obj1.useStateFromStores(items1, () => obj.getKey() === "MainViewTooltipActionSheets");
  let obj2 = mainViewTooltipActionSheetMap(566);
  const items2 = [closure_9];
  const stateFromStores1 = obj2.useStateFromStores(items2, () => {
    const userContent = outer1_9.settings.userContent;
    let dismissedContents;
    if (null != userContent) {
      dismissedContents = userContent.dismissedContents;
    }
    return dismissedContents;
  });
  let obj3 = mainViewTooltipActionSheetMap(566);
  const items3 = [closure_9];
  const items4 = [
    mainViewTooltipActionSheetMap,
    stateFromStores1,
    obj3.useStateFromStores(items3, () => {
      const userContent = outer1_9.settings.userContent;
      let prop;
      if (null != userContent) {
        prop = userContent.recurringDismissibleContentStates;
      }
      return prop;
    })
  ];
  const tmp7 = callback3(() => {
    const found = outer1_13.find((id) => {
      let result = outer1_0[id.id];
      let tmp2 = null;
      let isEligible;
      if (null != result) {
        isEligible = result.isEligible;
      }
      if (isEligible) {
        id = id.id;
        if (tmp2 == result) {
          isEligible = !tmp4;
        } else {
          if (obj.isSnowflakeBoundDismissibleContent(id)) {
            let isDismissed3 = tmp2 == result.newSnowflakeId;
            if (!isDismissed3) {
              tmp2 = mainViewTooltipActionSheetMap(3946);
              result = tmp2.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(id, result.newSnowflakeId);
              isDismissed3 = result.isDismissed;
            }
            let isDismissed = isDismissed3;
          } else {
            if (obj2.isVersionedDismissibleContent(id)) {
              let tmp9Result = tmp9(1336);
              isDismissed = tmp9Result.isVersionedDismissibleContentDismissed(id, result.latestVersion).isDismissed;
            } else {
              tmp9Result = tmp9(1335);
              if (tmp9Result.isTimeRecurringDismissibleContent(id)) {
                let isDismissed2 = tmp2 == result.cooldownConfig;
                if (!isDismissed2) {
                  isDismissed2 = mainViewTooltipActionSheetMap(1336).isTimeRecurringDismissibleContentDismissed(id, result.cooldownConfig).isDismissed;
                  const obj5 = mainViewTooltipActionSheetMap(1336);
                }
                isDismissed = isDismissed2;
              } else {
                isDismissed = mainViewTooltipActionSheetMap(3946).UNSAFE_isDismissibleContentDismissed(id);
                const obj4 = mainViewTooltipActionSheetMap(3946);
              }
            }
            obj2 = mainViewTooltipActionSheetMap(1335);
          }
          obj = mainViewTooltipActionSheetMap(1335);
        }
      }
      return isEligible;
    });
    let tmp2 = null;
    if (null != found) {
      tmp2 = found;
    }
    return tmp2;
  }, items4);
  callback3 = tmp7;
  callback4 = callback4(null);
  const items5 = [tmp7, stateFromStores];
  stateFromStores(() => {
    if (null != ref.current) {
      let _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      ref.current = null;
    }
    if (stateFromStores) {
      tmp4.current = true;
    } else {
      let num = 0;
      if (tmp4.current) {
        num = 350;
      }
      if (null == closure_6) {
        _slicedToArray.current = false;
      }
      const _setTimeout = setTimeout;
      ref.current = setTimeout(() => {
        outer1_2(outer1_6);
        outer1_7.current = null;
      }, num);
    }
    return () => {
      if (null != outer1_7.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(outer1_7.current);
        outer1_7.current = null;
      }
    };
  }, items5);
  if (null == first) {
    return null;
  } else {
    obj = mainViewTooltipActionSheetMap[first.id];
    if (null == obj) {
      obj = {};
    }
    const tmp10 = getActionSheetType(first.id);
    if ("snowflake_bound" === tmp10) {
      obj = { contentType: first.id };
      const newSnowflakeId = obj.newSnowflakeId;
      let str3 = "";
      if (null != newSnowflakeId) {
        str3 = newSnowflakeId;
      }
      obj.newSnowflakeId = str3;
      obj.groupName = constants.MAIN_VIEW_TOOLTIPS;
      obj.children = function children(visibleContent) {
        let tmp2 = null;
        if (visibleContent.visibleContent === first.id) {
          const obj = { actionSheetConfig: first, hasTrackedRef: closure_4, actionSheetKey: "MainViewTooltipActionSheets", importer: first.importer, markAsDismissed: tmp };
          const merged = Object.assign(obj.actionSheetProperties);
          tmp2 = outer1_12(outer1_16, obj);
        }
        return tmp2;
      };
      return jsx(mainViewTooltipActionSheetMap(9642).SelectedSnowflakeBoundDismissibleContent, { contentType: first.id });
    } else if ("versioned" === tmp10) {
      obj1 = {};
      const latestVersion = obj.latestVersion;
      let num4 = 0;
      if (null != latestVersion) {
        num4 = latestVersion;
      }
      obj1.latestVersion = num4;
      obj1.contentType = first.id;
      obj1.groupName = constants.MAIN_VIEW_TOOLTIPS;
      obj1.children = function children(visibleContent) {
        let tmp2 = null;
        if (visibleContent.visibleContent === first.id) {
          const obj = { actionSheetConfig: first, hasTrackedRef: closure_4, actionSheetKey: "MainViewTooltipActionSheets", importer: first.importer, markAsDismissed: tmp, versionedDismissibleContentType: first.id };
          const merged = Object.assign(obj.actionSheetProperties);
          tmp2 = outer1_12(outer1_16, obj);
        }
        return tmp2;
      };
      return jsx(mainViewTooltipActionSheetMap(9642).SelectedVersionedDismissibleContent, {});
    } else if ("time_recurring" === tmp10) {
      obj2 = {
        contentType: first.id,
        timeRecurringConfig: obj.cooldownConfig,
        groupName: constants.MAIN_VIEW_TOOLTIPS,
        bypassAutoDismiss: false,
        children(visibleContent) {
              let tmp2 = null;
              if (visibleContent.visibleContent === first.id) {
                const obj = { actionSheetConfig: first, hasTrackedRef: closure_4, actionSheetKey: "MainViewTooltipActionSheets", importer: first.importer, markAsDismissed: tmp };
                const merged = Object.assign(obj.actionSheetProperties);
                tmp2 = outer1_12(outer1_16, obj);
              }
              return tmp2;
            }
      };
      return jsx(mainViewTooltipActionSheetMap(9642).SelectedTimeRecurringDismissibleContent, {
        contentType: first.id,
        timeRecurringConfig: obj.cooldownConfig,
        groupName: constants.MAIN_VIEW_TOOLTIPS,
        bypassAutoDismiss: false,
        children(visibleContent) {
              let tmp2 = null;
              if (visibleContent.visibleContent === first.id) {
                const obj = { actionSheetConfig: first, hasTrackedRef: closure_4, actionSheetKey: "MainViewTooltipActionSheets", importer: first.importer, markAsDismissed: tmp };
                const merged = Object.assign(obj.actionSheetProperties);
                tmp2 = outer1_12(outer1_16, obj);
              }
              return tmp2;
            }
      });
    } else if ("single_use" === tmp10) {
      obj3 = {};
      const items6 = [first.id];
      obj3.contentTypes = items6;
      obj3.groupName = constants.MAIN_VIEW_TOOLTIPS;
      obj3.children = function children(visibleContent) {
        let tmp2 = null;
        if (visibleContent.visibleContent === first.id) {
          const obj = { actionSheetConfig: first, hasTrackedRef: closure_4, markAsDismissed: tmp, importer: first.importer, actionSheetKey: "MainViewTooltipActionSheets" };
          const merged = Object.assign(obj.actionSheetProperties);
          tmp2 = outer1_12(outer1_16, obj);
        }
        return tmp2;
      };
      return jsx(first(9642), {});
    } else {
      return null;
    }
  }
};
export const ACTION_SHEET_REGISTRY = items1;
export { trackActionSheetImpression };
