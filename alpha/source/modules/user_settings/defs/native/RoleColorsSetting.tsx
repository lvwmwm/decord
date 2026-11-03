// Module ID: 17467
// Function ID: 17468
// Name: RoleColorsSetting
// Dependencies: [19, 5142, 8556, 504, 16413, 1113, 11677, 2]
// Exports: onRoleColorSettingValueChange, useRoleColorSettingOptions, useRoleColorSettingValue

// Module 17467 (RoleColorsSetting)
import get_initialized from "get initialized" /* 504 */;
import intl4 from "intl" /* 1113 */;
import SettingsConstants from "SettingsConstants" /* 8556 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 16413 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5142 */;
import SettingBuilders from "SettingBuilders" /* 11677 */;
import size from "module_2" /* 2 */;

function useRoleColorSettingValue() {
  let roleStyle;
  const items = [AccessibilityStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => roleStyle.roleStyle);
}
function onRoleColorSettingValueChange(roleStyle) {
  const obj = AccessibilityActionCreators;
  obj.setRoleStyle(roleStyle);
}
function useRoleColorSettingOptions() {
  return react.useMemo(() => {
    let intl;
    let intl2;
    let intl3;
    const obj = { label: intl.string(intl4.t.YEOEi6), value: "username" };
    intl = intl4.intl;
    const items = [obj, , ];
    const obj2 = { label: intl2.string(intl4.t.mQaro3), value: "dot" };
    intl2 = intl4.intl;
    items[1] = obj2;
    const obj3 = { label: intl3.string(intl4.t.Ji2EVJ), value: "hidden" };
    intl3 = intl4.intl;
    items[2] = obj3;
    return items;
  }, []);
}
const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = intl4.intl;
    return intl.string(intl4.t.uSOPWm);
  },
  parent: MobileUserSettings.ACCESSIBILITY,
  useValue: useRoleColorSettingValue,
  onValueChange: onRoleColorSettingValueChange,
  useOptions: useRoleColorSettingOptions
};
const radio = SettingBuilders.createRadio(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/RoleColorsSetting.tsx");

export default radio;
export { useRoleColorSettingValue };
export { onRoleColorSettingValueChange };
export { useRoleColorSettingOptions };
