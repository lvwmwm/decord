// Module ID: 14270
// Function ID: 109559
// Name: useOfficialMessageStyleSettingValue
// Dependencies: [31, 4122, 7751, 566, 13423, 1212, 10127, 2]
// Exports: onOfficialMessageStyleSettingValueChange, useOfficialMessageStyleSettingOptions, useOfficialMessageStyleSettingValue

// Module 14270 (useOfficialMessageStyleSettingValue)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import createToggle from "createToggle";

const require = arg1;
function useOfficialMessageStyleSettingValue() {
  const items = [_isNativeReflectConstruct];
  return require(566) /* initialize */.useStateFromStores(items, () => outer1_3.officialMessageStyle);
}
function onOfficialMessageStyleSettingValueChange(officialMessageStyle) {
  const result = require(13423) /* setFontSize */.setOfficialMessageStyle(officialMessageStyle);
}
function useOfficialMessageStyleSettingOptions() {
  return React.useMemo(() => {
    let obj = {};
    const intl = outer1_0(outer1_1[5]).intl;
    obj.label = intl.string(outer1_0(outer1_1[5]).t.ERaS6f);
    obj.value = "default";
    const items = [obj, , , ];
    obj = {};
    const intl2 = outer1_0(outer1_1[5]).intl;
    obj.label = intl2.string(outer1_0(outer1_1[5]).t.JKfipk);
    obj.value = "no_text_color";
    items[1] = obj;
    obj = {};
    const intl3 = outer1_0(outer1_1[5]).intl;
    obj.label = intl3.string(outer1_0(outer1_1[5]).t.O2vBoY);
    obj.value = "no_gradient";
    items[2] = obj;
    const obj1 = {};
    const intl4 = outer1_0(outer1_1[5]).intl;
    obj1.label = intl4.string(outer1_0(outer1_1[5]).t["+loyQl"]);
    obj1.value = "hidden";
    items[3] = obj1;
    return items;
  }, []);
}
createToggle = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.nC2XBl);
  },
  parent: require("MobileSetting").MobileSetting.ACCESSIBILITY,
  useValue: useOfficialMessageStyleSettingValue,
  onValueChange: onOfficialMessageStyleSettingValueChange,
  useOptions: useOfficialMessageStyleSettingOptions
};
createToggle = createToggle.createRadio(createToggle);
let result = require("MobileSetting").fileFinishedImporting("modules/user_settings/defs/native/OfficialMessageStyleSetting.tsx");

export default createToggle;
export { useOfficialMessageStyleSettingValue };
export { onOfficialMessageStyleSettingValueChange };
export { useOfficialMessageStyleSettingOptions };
