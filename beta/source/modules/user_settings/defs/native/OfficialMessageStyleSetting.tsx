// Module ID: 14879
// Function ID: 14880
// Name: OfficialMessageStyleSetting
// Dependencies: [19, 4825, 7417, 504, 13998, 1115, 11006, 2]
// Exports: onOfficialMessageStyleSettingValueChange, useOfficialMessageStyleSettingOptions, useOfficialMessageStyleSettingValue

// Module 14879 (OfficialMessageStyleSetting)
import get_initialized from "get initialized" /* 504 */;
import intl5 from "intl" /* 1115 */;
import SettingsConstants from "SettingsConstants" /* 7417 */;
import AccessibilityActionCreators from "AccessibilityActionCreators" /* 13998 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
import size from "module_2" /* 2 */;

function useOfficialMessageStyleSettingValue() {
  let officialMessageStyle;
  const items = [AccessibilityStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => officialMessageStyle.officialMessageStyle);
}
function onOfficialMessageStyleSettingValueChange(officialMessageStyle) {
  const obj = AccessibilityActionCreators;
  const result = obj.setOfficialMessageStyle(officialMessageStyle);
}
function useOfficialMessageStyleSettingOptions() {
  return react.useMemo(() => {
    let intl;
    let intl2;
    let intl3;
    let intl4;
    const obj = { label: intl.string(intl5.t.ERaS6f), value: "default" };
    intl = intl5.intl;
    const items = [obj, , , ];
    const obj2 = { label: intl2.string(intl5.t.JKfipk), value: "no_text_color" };
    intl2 = intl5.intl;
    items[1] = obj2;
    const obj3 = { label: intl3.string(intl5.t.O2vBoY), value: "no_gradient" };
    intl3 = intl5.intl;
    items[2] = obj3;
    const obj4 = { label: intl4.string(intl5.t["+loyQl"]), value: "hidden" };
    intl4 = intl5.intl;
    items[3] = obj4;
    return items;
  }, []);
}
const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = intl5.intl;
    return intl.string(intl5.t.nC2XBl);
  },
  parent: MobileUserSettings.ACCESSIBILITY,
  useValue: useOfficialMessageStyleSettingValue,
  onValueChange: onOfficialMessageStyleSettingValueChange,
  useOptions: useOfficialMessageStyleSettingOptions
};
const radio = SettingBuilders.createRadio(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/OfficialMessageStyleSetting.tsx");

export default radio;
export { useOfficialMessageStyleSettingValue };
export { onOfficialMessageStyleSettingValueChange };
export { useOfficialMessageStyleSettingOptions };
