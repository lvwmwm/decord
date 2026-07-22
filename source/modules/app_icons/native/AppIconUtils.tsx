// Module ID: 12266
// Function ID: 94050
// Name: fetchCurrentAppIcon
// Dependencies: []
// Exports: isAppIconsSupported, navigateToAppIconSettings, setAppIcon, useAppIcons

// Module 12266 (fetchCurrentAppIcon)
function fetchCurrentAppIcon() {
  return _fetchCurrentAppIcon(...arguments);
}
function _fetchCurrentAppIcon() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback2(tmp);
  const _fetchCurrentAppIcon = obj;
  return obj(...arguments);
}
function useCurrentAppIcon() {
  const tmp = callback(React.useState(arg1(dependencyMap[10]).FreemiumAppIconIds.DEFAULT), 2);
  const arg1 = tmp2;
  // CreateGeneratorClosureLongIndex (0x67)
  const importDefault = React.useCallback(callback2(tmp2), []);
  importDefault(dependencyMap[11])(() => {
    callback();
    const subscription = callback(closure_2[12]).subscribe("APP_ICON_UPDATED", callback);
    return () => {
      callback(closure_2[12]).unsubscribe("APP_ICON_UPDATED", callback);
    };
  });
  return tmp[0];
}
function _setAppIcon() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback2(tmp);
  const _setAppIcon = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
({ getDefaultIcon: closure_6, getOfficialAlternateIcons: closure_7, getLimitedAlternateIcons: closure_8 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
({ AnalyticEvents: closure_9, UserSettingsSections: closure_10 } = arg1(dependencyMap[5]));
const PremiumTypes = arg1(dependencyMap[6]).PremiumTypes;
let importDefaultResult = importDefault(dependencyMap[7]);
importDefaultResult = new importDefaultResult("AppIconUtils");
const tmp3 = arg1(dependencyMap[5]);
if (obj.isAndroid()) {
  let DCDIconManager = arg1(dependencyMap[9]).default;
} else {
  DCDIconManager = arg1(dependencyMap[3]).NativeModules.DCDIconManager;
}
const obj = arg1(dependencyMap[8]);
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/app_icons/native/AppIconUtils.tsx");

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
  let closure_2 = React.useCallback(callback2(tmp4), []);
  importDefault(closure_2[11])(() => {
    callback();
    const subscription = tmp4(callback[12]).subscribe("APP_ICON_UPDATED", callback);
    return () => {
      callback(closure_2[12]).unsubscribe("APP_ICON_UPDATED", closure_2);
    };
  });
  return { officialAppIcons: officialAppIcons[0], limitedTimeAppIcons: limitedTimeAppIcons[0], currentAppIcon };
};
export const navigateToAppIconSettings = function navigateToAppIconSettings() {
  let obj = arg1(dependencyMap[16]);
  obj = { screen: constants.APP_ICONS };
  obj.openUserSettings(obj);
};
export const isAppIconsSupported = function isAppIconsSupported() {
  return !arg1(dependencyMap[17]).isMetaQuest();
};
