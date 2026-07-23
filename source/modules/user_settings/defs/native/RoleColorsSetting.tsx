// Module ID: 14219
// Function ID: 109229
// Name: useRoleColorSettingValue
// Dependencies: [31, 4122, 7662, 566, 13370, 1212, 10095, 2]
// Exports: onRoleColorSettingValueChange, useRoleColorSettingOptions, useRoleColorSettingValue

// Module 14219 (useRoleColorSettingValue)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import createToggle from "createToggle";

const require = arg1;
function useRoleColorSettingValue() {
  const items = [_isNativeReflectConstruct];
  return require(566) /* initialize */.useStateFromStores(items, () => outer1_3.roleStyle);
}
function onRoleColorSettingValueChange(roleStyle) {
  require(13370) /* setFontSize */.setRoleStyle(roleStyle);
}
function useRoleColorSettingOptions() {
  return React.useMemo(() => {
    let obj = {};
    const intl = outer1_0(outer1_1[5]).intl;
    obj.label = intl.string(outer1_0(outer1_1[5]).t.YEOEi6);
    obj.value = "username";
    const items = [obj, , ];
    obj = {};
    const intl2 = outer1_0(outer1_1[5]).intl;
    obj.label = intl2.string(outer1_0(outer1_1[5]).t.mQaro3);
    obj.value = "dot";
    items[1] = obj;
    obj = {};
    const intl3 = outer1_0(outer1_1[5]).intl;
    obj.label = intl3.string(outer1_0(outer1_1[5]).t.Ji2EVJ);
    obj.value = "hidden";
    items[2] = obj;
    return items;
  }, []);
}
createToggle = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.uSOPWm);
  },
  parent: require("MobileSetting").MobileSetting.ACCESSIBILITY,
  useValue: useRoleColorSettingValue,
  onValueChange: onRoleColorSettingValueChange,
  useOptions: useRoleColorSettingOptions
};
createToggle = createToggle.createRadio(createToggle);
const result = require("MobileSetting").fileFinishedImporting("modules/user_settings/defs/native/RoleColorsSetting.tsx");

export default createToggle;
export { useRoleColorSettingValue };
export { onRoleColorSettingValueChange };
export { useRoleColorSettingOptions };
