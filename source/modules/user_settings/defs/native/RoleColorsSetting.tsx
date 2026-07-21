// Module ID: 14097
// Function ID: 107030
// Name: useRoleColorSettingValue
// Dependencies: []
// Exports: onRoleColorSettingValueChange, useRoleColorSettingOptions, useRoleColorSettingValue

// Module 14097 (useRoleColorSettingValue)
function useRoleColorSettingValue() {
  const items = [closure_3];
  return arg1(dependencyMap[3]).useStateFromStores(items, () => roleStyle.roleStyle);
}
function onRoleColorSettingValueChange(roleStyle) {
  arg1(dependencyMap[4]).setRoleStyle(roleStyle);
}
function useRoleColorSettingOptions() {
  return React.useMemo(() => {
    let obj = {};
    const intl = callback(closure_1[5]).intl;
    obj.label = intl.string(callback(closure_1[5]).t.YEOEi6);
    obj.value = "username";
    const items = [obj, , ];
    obj = {};
    const intl2 = callback(closure_1[5]).intl;
    obj.label = intl2.string(callback(closure_1[5]).t.mQaro3);
    obj.value = "dot";
    items[1] = obj;
    obj = {};
    const intl3 = callback(closure_1[5]).intl;
    obj.label = intl3.string(callback(closure_1[5]).t.Ji2EVJ);
    obj.value = "hidden";
    items[2] = obj;
    return items;
  }, []);
}
let closure_2 = importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let obj = arg1(dependencyMap[6]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[5]).intl;
    return intl.string(arg1(dependencyMap[5]).t.uSOPWm);
  },
  parent: arg1(dependencyMap[2]).MobileSetting.ACCESSIBILITY,
  useValue: useRoleColorSettingValue,
  onValueChange: onRoleColorSettingValueChange,
  useOptions: useRoleColorSettingOptions
};
const radio = obj.createRadio(obj);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/user_settings/defs/native/RoleColorsSetting.tsx");

export default radio;
export { useRoleColorSettingValue };
export { onRoleColorSettingValueChange };
export { useRoleColorSettingOptions };
