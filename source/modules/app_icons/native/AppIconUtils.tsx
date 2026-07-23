// Module ID: 12380
// Function ID: 96201
// Name: fetchCurrentAppIcon
// Dependencies: [57, 5, 31, 27, 7961, 653, 1851, 3, 477, 12381, 7962, 4559, 686, 675, 3831, 1212, 5796, 1553, 2]
// Exports: isAppIconsSupported, navigateToAppIconSettings, setAppIcon, useAppIcons

// Module 12380 (fetchCurrentAppIcon)
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
let require = arg1;
function fetchCurrentAppIcon() {
  return _fetchCurrentAppIcon(...arguments);
}
function _fetchCurrentAppIcon() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback2(tmp);
  return obj(...arguments);
}
function useCurrentAppIcon() {
  const tmp = callback(React.useState(require(7962) /* FreemiumAppIconIds */.FreemiumAppIconIds.DEFAULT), 2);
  require = tmp2;
  // CreateGeneratorClosureLongIndex (0x67)
  const importDefault = React.useCallback(callback2(tmp2), []);
  importDefault(4559)(() => {
    callback();
    const subscription = callback(outer1_2[12]).subscribe("APP_ICON_UPDATED", callback);
    return () => {
      callback(outer2_2[12]).unsubscribe("APP_ICON_UPDATED", outer1_1);
    };
  });
  return tmp[0];
}
function _setAppIcon() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback2(tmp);
  return obj(...arguments);
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
  const importDefault = tmp4;
  // CreateGeneratorClosureLongIndex (0x67)
  const dependencyMap = React.useCallback(callback2(tmp4), []);
  importDefault(4559)(() => {
    dependencyMap();
    const subscription = tmp4(686).subscribe("APP_ICON_UPDATED", dependencyMap);
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
