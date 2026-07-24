// Module ID: 7443
// Function ID: 59819
// Name: fetchCurrentAppIcon
// Dependencies: [57, 5, 31, 27, 7444, 653, 1851, 3, 477, 7471, 7445, 4559, 686, 675, 3831, 1212, 5796, 1553, 2]
// Exports: isAppIconsSupported, navigateToAppIconSettings, setAppIcon, useAppIcons

// Module 7443 (fetchCurrentAppIcon)
import _slicedToArray from "_slicedToArray";
import closure_4 from "ME";
import result from "result";
import getDefaultIcon from "getDefaultIcon";
import ME from "ME";
import { PremiumTypes } from "GuildFeatures";
import importDefaultResult from "get ActivityIndicator";
import set from "set";
import set from "result";

let closure_10;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function fetchCurrentAppIcon() {
  return _fetchCurrentAppIcon(...arguments);
}
async function _fetchCurrentAppIcon() {
  if (null != outer2_13) {
    const currentIcon = outer2_13.getCurrentIcon();
  }
  return yield currentIcon.id;
}
function useCurrentAppIcon() {
  const tmp = callback(React.useState(_require(7445).FreemiumAppIconIds.DEFAULT), 2);
  _require = tmp[1];
  const importDefault = React.useCallback(callback2(async () => {
    outer1_0(yield outer2_14());
  }), []);
  importDefault(4559)(() => {
    callback();
    const subscription = callback(outer1_2[12]).subscribe("APP_ICON_UPDATED", callback);
    return () => {
      callback(outer2_2[12]).unsubscribe("APP_ICON_UPDATED", outer1_1);
    };
  });
  return tmp[0];
}
async function _setAppIcon(arg0, arg1, arg2) {
  if (null != outer2_13) {
    const setIconResult = outer2_13.setIcon(arg0);
  }
  yield setIconResult;
  let obj = outer2_1(outer2_2[12]);
  obj.dispatch({ type: "APP_ICON_UPDATED" });
  obj = { icon_id: arg0, user_premium_tier: arg1 };
  let TIER_2 = null;
  if (arg0 !== outer2_0(outer2_2[10]).FreemiumAppIconIds.DEFAULT) {
    TIER_2 = outer2_11.TIER_2;
  }
  obj.icon_premium_tier = TIER_2;
  outer2_1(outer2_2[13]).track(outer2_9.APP_ICON_UPDATED, obj);
}
({ getDefaultIcon: closure_6, getOfficialAlternateIcons: closure_7, getLimitedAlternateIcons: closure_8 } = getDefaultIcon);
({ AnalyticEvents: closure_9, UserSettingsSections: closure_10 } = ME);
importDefaultResult = new importDefaultResult("AppIconUtils");
if (set.isAndroid()) {
  let DCDIconManager = require("enforcing").default;
} else {
  DCDIconManager = require("get ActivityIndicator").NativeModules.DCDIconManager;
}
const result = set.fileFinishedImporting("modules/app_icons/native/AppIconUtils.tsx");

export { fetchCurrentAppIcon };
export { useCurrentAppIcon };
export const setAppIcon = function setAppIcon(DEFAULT, premiumType) {
  return _setAppIcon(...arguments);
};
export const useAppIcons = function useAppIcons() {
  const currentAppIcon = useCurrentAppIcon();
  const officialAppIcons = callback(React.useState([]), 2);
  let closure_0 = officialAppIcons[1];
  const limitedTimeAppIcons = callback(React.useState([]), 2);
  const importDefault = limitedTimeAppIcons[1];
  const dependencyMap = React.useCallback(callback2(async () => {
    let closure_0;
    if (null != outer2_13) {
      const availableIcons = outer2_13.getAvailableIcons();
    }
    closure_0 = yield availableIcons.map((id) => id.id);
    const arr = yield availableIcons;
    const found = outer2_7().filter((id) => closure_0.includes(id.id));
    const arr2 = outer2_7();
    outer1_1(outer2_8().filter((id) => closure_0.includes(id.id)));
    const items = [outer2_6(), ...found];
    outer1_0(items);
  }), []);
  importDefault(4559)(() => {
    dependencyMap();
    const subscription = callback(686).subscribe("APP_ICON_UPDATED", dependencyMap);
    return () => {
      callback(table[12]).unsubscribe("APP_ICON_UPDATED", outer1_2);
    };
  });
  return { officialAppIcons: officialAppIcons[0], limitedTimeAppIcons: limitedTimeAppIcons[0], currentAppIcon };
};
export const navigateToAppIconSettings = function navigateToAppIconSettings() {
  let obj = require(5796) /* openUserSettings */;
  obj = { screen: constants.APP_ICONS };
  obj.openUserSettings(obj);
};
export const isAppIconsSupported = function isAppIconsSupported() {
  return !require(1553) /* isMetaQuest */.isMetaQuest();
};
