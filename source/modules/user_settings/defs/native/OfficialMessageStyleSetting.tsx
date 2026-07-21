// Module ID: 14095
// Function ID: 107005
// Name: useOfficialMessageStyleSettingValue
// Dependencies: []
// Exports: onOfficialMessageStyleSettingValueChange, useOfficialMessageStyleSettingOptions, useOfficialMessageStyleSettingValue

// Module 14095 (useOfficialMessageStyleSettingValue)
function useOfficialMessageStyleSettingValue() {
  const items = [closure_3];
  return arg1(dependencyMap[3]).useStateFromStores(items, () => officialMessageStyle.officialMessageStyle);
}
function onOfficialMessageStyleSettingValueChange(officialMessageStyle) {
  const result = arg1(dependencyMap[4]).setOfficialMessageStyle(officialMessageStyle);
}
function useOfficialMessageStyleSettingOptions() {
  return React.useMemo(() => {
    let obj = {};
    const intl = callback(closure_1[5]).intl;
    obj.label = intl.string(callback(closure_1[5]).t.ERaS6f);
    obj.value = "default";
    const items = [obj, , , ];
    obj = {};
    const intl2 = callback(closure_1[5]).intl;
    obj.label = intl2.string(callback(closure_1[5]).t.JKfipk);
    obj.value = "no_text_color";
    items[1] = obj;
    obj = {};
    const intl3 = callback(closure_1[5]).intl;
    obj.label = intl3.string(callback(closure_1[5]).t.O2vBoY);
    obj.value = "no_gradient";
    items[2] = obj;
    const obj1 = {};
    const intl4 = callback(closure_1[5]).intl;
    obj1.label = intl4.string(callback(closure_1[5]).t.+loyQl);
    obj1.value = "hidden";
    items[3] = obj1;
    return items;
  }, []);
}
let closure_2 = importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let obj = arg1(dependencyMap[6]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[5]).intl;
    return intl.string(arg1(dependencyMap[5]).t.nC2XBl);
  },
  parent: arg1(dependencyMap[2]).MobileSetting.ACCESSIBILITY,
  useValue: useOfficialMessageStyleSettingValue,
  onValueChange: onOfficialMessageStyleSettingValueChange,
  useOptions: useOfficialMessageStyleSettingOptions
};
const radio = obj.createRadio(obj);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/user_settings/defs/native/OfficialMessageStyleSetting.tsx");

export default radio;
export { useOfficialMessageStyleSettingValue };
export { onOfficialMessageStyleSettingValueChange };
export { useOfficialMessageStyleSettingOptions };
