// Module ID: 14122
// Function ID: 107199
// Name: toggle
// Dependencies: []

// Module 14122 (toggle)
let closure_2 = importDefault(dependencyMap[0]);
let obj = arg1(dependencyMap[4]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[5]).intl;
    return intl.string(arg1(dependencyMap[5]).t.e3TR1b);
  },
  parent: arg1(dependencyMap[1]).MobileSetting.ACCESSIBILITY,
  useValue: function useReducedMotionSettingValue() {
    const items = [closure_2];
    return arg1(dependencyMap[2]).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  },
  onValueChange: function onReducedMotionSettingValueChange(arg0) {
    let str = "no-preference";
    if (arg0) {
      str = "reduce";
    }
    const result = arg1(dependencyMap[3]).setPrefersReducedMotion(str);
  }
};
const toggle = obj.createToggle(obj);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/user_settings/defs/native/EnableReducedMotionSetting.tsx");

export default toggle;
