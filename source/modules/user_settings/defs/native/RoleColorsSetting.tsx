// Module ID: 15255
// Function ID: 15256
// Name: useRoleColorSettingValue
// Dependencies: [19, 4473, 7906, 586, 14363, 1233, 11400, 2]
// Exports: onRoleColorSettingValueChange, useRoleColorSettingOptions, useRoleColorSettingValue

// Module 15255 (useRoleColorSettingValue)
import initialize from "initialize" /* 586 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import setFontSize from "setFontSize" /* 14363 */;
import closure_2 from "noop" /* 19 */;
import closure_3 from "maybeApplyNoTextColorForLightCustomTheme" /* 4473 */;
import createToggle from "createToggle" /* 11400 */;

require = arg1;
function useRoleColorSettingValue() {
  const items = [closure_3];
  return initialize.useStateFromStores(items, () => roleStyle.roleStyle);
}
function onRoleColorSettingValueChange(roleStyle) {
  setFontSize.setRoleStyle(roleStyle);
}
function useRoleColorSettingOptions() {
  return React.useMemo(() => {
    let obj = { label: null, value: "username" };
    const intl = callback(1233).intl;
    obj[0] = intl.string(callback(1233).t.YEOEi6);
    const items = [obj, , ];
    obj = { label: null, value: "dot" };
    const intl2 = callback(1233).intl;
    obj[0] = intl2.string(callback(1233).t.mQaro3);
    items[1] = obj;
    obj = { label: null, value: "hidden" };
    const intl3 = callback(1233).intl;
    obj[0] = intl3.string(callback(1233).t.Ji2EVJ);
    items[2] = obj;
    return items;
  }, []);
}
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.uSOPWm);
  },
  parent: require("MobileUserSettings").MobileUserSettings.ACCESSIBILITY,
  useValue: useRoleColorSettingValue,
  onValueChange: onRoleColorSettingValueChange,
  useOptions: useRoleColorSettingOptions
};
createToggle = createToggle.createRadio(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/RoleColorsSetting.tsx");

export default createToggle;
export { useRoleColorSettingValue };
export { onRoleColorSettingValueChange };
export { useRoleColorSettingOptions };
