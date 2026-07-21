// Module ID: 15483
// Function ID: 118148
// Name: getActionSheetType
// Dependencies: []
// Exports: default

// Module 15483 (getActionSheetType)
class GiftingPromotionCoachmarkImporter {
  constructor() {
    return arg1(dependencyMap[8])(dependencyMap[9], dependencyMap.paths);
  }
}
class PremiumMarketingMomentActionSheetImporter {
  constructor() {
    return arg1(dependencyMap[8])(dependencyMap[13], dependencyMap.paths);
  }
}
class ConnectionDeprecationActionSheetImporter {
  constructor() {
    return arg1(dependencyMap[8])(dependencyMap[18], dependencyMap.paths);
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
      const obj3 = arg1(dependencyMap[21]);
    }
    str = str2;
    const obj2 = arg1(dependencyMap[21]);
  }
  return str;
}
function trackActionSheetImpression(id) {
  let obj = importDefault(dependencyMap[22]);
  obj = { dc_id: arg1(dependencyMap[20]).DismissibleContent[id.id], dc_type: getActionSheetType(id.id) };
  const CONTENT_TYPES_WITH_BYPASS_FATIGUE = arg1(dependencyMap[23]).CONTENT_TYPES_WITH_BYPASS_FATIGUE;
  obj.bypass_fatigue = CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(id.id);
  obj.is_another_action_sheet_open = null != content.getContent();
  obj.track(AnalyticEvents.MAIN_VIEW_ACTION_SHEET_SELECTED, obj);
}
function TrackedDismissibleActionSheet(actionSheetConfig) {
  actionSheetConfig = actionSheetConfig.actionSheetConfig;
  const arg1 = actionSheetConfig;
  const hasTrackedRef = actionSheetConfig.hasTrackedRef;
  const importDefault = hasTrackedRef;
  let obj = Object.create(null);
  obj.actionSheetConfig = 0;
  obj.hasTrackedRef = 0;
  const merged = Object.assign(actionSheetConfig, obj);
  const items = [actionSheetConfig, hasTrackedRef];
  callback2(() => {
    if (!hasTrackedRef.current) {
      hasTrackedRef.current = true;
      callback(actionSheetConfig);
    }
  }, items);
  obj = {};
  const merged1 = Object.assign(merged);
  return jsx(arg1(dependencyMap[24]).DismissibleActionSheet, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ useEffect: closure_5, useMemo: closure_6, useRef: closure_7 } = arg1(dependencyMap[1]));
let closure_8 = importDefault(dependencyMap[2]);
let closure_9 = importDefault(dependencyMap[3]);
const AnalyticEvents = arg1(dependencyMap[4]).AnalyticEvents;
let closure_11 = arg1(dependencyMap[5]).DismissibleContentGroupName;
const jsx = arg1(dependencyMap[6]).jsx;
let obj = {
  id: arg1(dependencyMap[20]).DismissibleContent.GOOGLE_PLAY_PRICE_CHANGE_ACTION_SHEET,
  importer: function GooglePlayPriceChangeActionSheetImporter() {
    return arg1(dependencyMap[8])(dependencyMap[12], dependencyMap.paths);
  }
};
const items = [obj, , , ];
obj = {
  id: arg1(dependencyMap[20]).DismissibleContent.DISCOUNT_OFFER_ACTION_SHEET,
  importer: function PremiumDiscountOfferActionSheetImporter() {
    return arg1(dependencyMap[8])(dependencyMap[14], dependencyMap.paths);
  }
};
items[1] = obj;
obj = {
  id: arg1(dependencyMap[20]).DismissibleContent.MOBILE_PREMIUM_TRIAL_OFFER_ACTION_SHEET,
  importer: function PremiumTrialOfferActionSheetImporter() {
    return arg1(dependencyMap[8])(dependencyMap[15], dependencyMap.paths);
  }
};
items[2] = obj;
const tmp2 = arg1(dependencyMap[1]);
items[3] = {
  id: arg1(dependencyMap[20]).DismissibleContent.MOBILE_BOGO_PROMOTION_ACTION_SHEET,
  importer: function BogoPromotionActionSheetImporter() {
    return arg1(dependencyMap[8])(dependencyMap[11], dependencyMap.paths);
  }
};
const items1 = [...items];
const obj1 = {
  id: arg1(dependencyMap[20]).DismissibleContent.MOBILE_BOGO_PROMOTION_ACTION_SHEET,
  importer: function BogoPromotionActionSheetImporter() {
    return arg1(dependencyMap[8])(dependencyMap[11], dependencyMap.paths);
  }
};
items1[tmp3] = { id: arg1(dependencyMap[20]).DismissibleContent.RIOT_CONNECTION_DEPRECATION_DISABLE, importer: ConnectionDeprecationActionSheetImporter };
const sum = tmp3 + 1;
const obj2 = { id: arg1(dependencyMap[20]).DismissibleContent.RIOT_CONNECTION_DEPRECATION_DISABLE, importer: ConnectionDeprecationActionSheetImporter };
items1[sum] = { id: arg1(dependencyMap[20]).DismissibleContent.BATTLENET_CONNECTION_DEPRECATION_DISABLE, importer: ConnectionDeprecationActionSheetImporter };
const sum1 = sum + 1;
const obj3 = { id: arg1(dependencyMap[20]).DismissibleContent.BATTLENET_CONNECTION_DEPRECATION_DISABLE, importer: ConnectionDeprecationActionSheetImporter };
items1[sum1] = { id: arg1(dependencyMap[20]).DismissibleContent.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, importer: PremiumMarketingMomentActionSheetImporter };
const sum2 = sum1 + 1;
const obj4 = { id: arg1(dependencyMap[20]).DismissibleContent.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, importer: PremiumMarketingMomentActionSheetImporter };
items1[sum2] = { id: arg1(dependencyMap[20]).DismissibleContent.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL, importer: PremiumMarketingMomentActionSheetImporter };
const sum3 = sum2 + 1;
const obj5 = { id: arg1(dependencyMap[20]).DismissibleContent.PREMIUM_MARKETING_MOMENT_REMINDER_UPSELL, importer: PremiumMarketingMomentActionSheetImporter };
items1[sum3] = { id: arg1(dependencyMap[20]).DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET, importer: GiftingPromotionCoachmarkImporter };
const sum4 = sum3 + 1;
const obj6 = { id: arg1(dependencyMap[20]).DismissibleContent.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET, importer: GiftingPromotionCoachmarkImporter };
items1[sum4] = { id: arg1(dependencyMap[20]).DismissibleContent.GIFTING_PROMOTION_REMINDER, importer: GiftingPromotionCoachmarkImporter };
const sum5 = sum4 + 1;
const obj7 = { id: arg1(dependencyMap[20]).DismissibleContent.GIFTING_PROMOTION_REMINDER, importer: GiftingPromotionCoachmarkImporter };
items1[sum5] = {
  id: arg1(dependencyMap[20]).DismissibleContent.NEW_GIFTING_BADGES_COACHMARK,
  importer: function GiftingBadgesCoachmarkImporter() {
    return arg1(dependencyMap[8])(dependencyMap[17], dependencyMap.paths);
  }
};
const sum6 = sum5 + 1;
const obj8 = {
  id: arg1(dependencyMap[20]).DismissibleContent.NEW_GIFTING_BADGES_COACHMARK,
  importer: function GiftingBadgesCoachmarkImporter() {
    return arg1(dependencyMap[8])(dependencyMap[17], dependencyMap.paths);
  }
};
items1[sum6] = {
  id: arg1(dependencyMap[20]).DismissibleContent.CUSTOM_APP_ICONS_COACHMARK,
  importer: function AppIconsCoachMarkImporter() {
    return arg1(dependencyMap[8])(dependencyMap[7], dependencyMap.paths);
  }
};
const sum7 = sum6 + 1;
const obj9 = {
  id: arg1(dependencyMap[20]).DismissibleContent.CUSTOM_APP_ICONS_COACHMARK,
  importer: function AppIconsCoachMarkImporter() {
    return arg1(dependencyMap[8])(dependencyMap[7], dependencyMap.paths);
  }
};
items1[sum7] = {
  id: arg1(dependencyMap[20]).DismissibleContent.ROBLOX_CONNECTION_COACHMARK,
  importer: function RobloxConnectionCoachmarkImporter() {
    return arg1(dependencyMap[8])(dependencyMap[10], dependencyMap.paths);
  }
};
const sum8 = sum7 + 1;
const obj10 = {
  id: arg1(dependencyMap[20]).DismissibleContent.ROBLOX_CONNECTION_COACHMARK,
  importer: function RobloxConnectionCoachmarkImporter() {
    return arg1(dependencyMap[8])(dependencyMap[10], dependencyMap.paths);
  }
};
items1[sum8] = {
  id: arg1(dependencyMap[20]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_COACHMARK,
  importer: function DisplayNameStylesFlywheelMobileActionSheetImporter() {
    return arg1(dependencyMap[8])(dependencyMap[16], dependencyMap.paths);
  }
};
const obj11 = {
  id: arg1(dependencyMap[20]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_COACHMARK,
  importer: function DisplayNameStylesFlywheelMobileActionSheetImporter() {
    return arg1(dependencyMap[8])(dependencyMap[16], dependencyMap.paths);
  }
};
items1[sum8 + 1] = {
  id: arg1(dependencyMap[20]).DismissibleContent.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT,
  importer: function CollectiblesMobileAnnouncementActionSheetImporter() {
    return arg1(dependencyMap[8])(dependencyMap[19], dependencyMap.paths);
  }
};
const obj12 = {
  id: arg1(dependencyMap[20]).DismissibleContent.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT,
  importer: function CollectiblesMobileAnnouncementActionSheetImporter() {
    return arg1(dependencyMap[8])(dependencyMap[19], dependencyMap.paths);
  }
};
const result = arg1(dependencyMap[30]).fileFinishedImporting("modules/upsell_tooltip/native/MainViewTooltipActionSheetsV2.tsx");

export default function MainViewTooltipActionSheetsV2() {
  let obj = arg1(closure_2[27]);
  const mainViewTooltipActionSheetMap = obj.useMainViewTooltipActionSheetMap();
  const arg1 = mainViewTooltipActionSheetMap;
  const tmp2 = callback(React.useState(null), 2);
  const first = tmp2[0];
  const importDefault = first;
  closure_2 = tmp2[1];
  const callback = callback3(false);
  const React = callback3(false);
  const items = [first];
  stateFromStores(() => {
    closure_4.current = false;
  }, items);
  let obj1 = arg1(closure_2[28]);
  const items1 = [closure_8];
  const stateFromStores = obj1.useStateFromStores(items1, () => obj.getKey() === "MainViewTooltipActionSheets");
  let obj2 = arg1(closure_2[28]);
  const items2 = [closure_9];
  const stateFromStores1 = obj2.useStateFromStores(items2, () => {
    const userContent = closure_9.settings.userContent;
    let dismissedContents;
    if (null != userContent) {
      dismissedContents = userContent.dismissedContents;
    }
    return dismissedContents;
  });
  let obj3 = arg1(closure_2[28]);
  const items3 = [closure_9];
  const items4 = [
    mainViewTooltipActionSheetMap,
    stateFromStores1,
    obj3.useStateFromStores(items3, () => {
      const userContent = closure_9.settings.userContent;
      let prop;
      if (null != userContent) {
        prop = userContent.recurringDismissibleContentStates;
      }
      return prop;
    })
  ];
  const tmp7 = tmp7(() => {
    const found = closure_13.find((id) => {
      let result = callback[id.id];
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
              tmp2 = callback(closure_2[25]);
              result = tmp2.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(id, result.newSnowflakeId);
              isDismissed3 = result.isDismissed;
            }
            let isDismissed = isDismissed3;
          } else {
            if (obj2.isVersionedDismissibleContent(id)) {
              let tmp9Result = tmp9(tmp10[26]);
              isDismissed = tmp9Result.isVersionedDismissibleContentDismissed(id, result.latestVersion).isDismissed;
            } else {
              tmp9Result = tmp9(tmp10[21]);
              if (tmp9Result.isTimeRecurringDismissibleContent(id)) {
                let isDismissed2 = tmp2 == result.cooldownConfig;
                if (!isDismissed2) {
                  isDismissed2 = callback(closure_2[26]).isTimeRecurringDismissibleContentDismissed(id, result.cooldownConfig).isDismissed;
                  const obj5 = callback(closure_2[26]);
                }
                isDismissed = isDismissed2;
              } else {
                isDismissed = callback(closure_2[25]).UNSAFE_isDismissibleContentDismissed(id);
                const obj4 = callback(closure_2[25]);
              }
            }
            const obj2 = callback(closure_2[21]);
          }
          const obj = callback(closure_2[21]);
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
  const callback3 = callback3(null);
  const items5 = [tmp7, stateFromStores];
  stateFromStores(() => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
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
      if (null == tmp7) {
        closure_3.current = false;
      }
      const _setTimeout = setTimeout;
      ref.current = setTimeout(() => {
        callback(closure_6);
        closure_7.current = null;
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
    obj = mainViewTooltipActionSheetMap[first.id];
    if (null == obj) {
      obj = {};
    }
    closure_8 = obj;
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
          tmp2 = callback(closure_16, obj);
        }
        return tmp2;
      };
      return jsx(arg1(closure_2[29]).SelectedSnowflakeBoundDismissibleContent, obj);
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
          tmp2 = callback(closure_16, obj);
        }
        return tmp2;
      };
      return jsx(arg1(closure_2[29]).SelectedVersionedDismissibleContent, obj1);
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
                tmp2 = callback(closure_16, obj);
              }
              return tmp2;
            }
      };
      return jsx(arg1(closure_2[29]).SelectedTimeRecurringDismissibleContent, obj2);
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
          tmp2 = callback(closure_16, obj);
        }
        return tmp2;
      };
      return jsx(importDefault(closure_2[29]), obj3);
    } else {
      return null;
    }
  }
};
export const ACTION_SHEET_REGISTRY = items1;
export { trackActionSheetImpression };
