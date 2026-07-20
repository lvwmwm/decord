// Module ID: 14060
// Function ID: 106804
// Name: toggle
// Dependencies: []

// Module 14060 (toggle)
let closure_3 = importDefault(dependencyMap[0]);
let obj = arg1(dependencyMap[4]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[5]).intl;
    return intl.string(arg1(dependencyMap[5]).t.c445ix);
  },
  parent: arg1(dependencyMap[1]).MobileSetting.APPEARANCE,
  usePredicate() {
    return importDefault(dependencyMap[6])("SameAsDeviceThemeSetting");
  },
  useValue: function useSameAsDeviceThemeValue() {
    const items = [closure_3];
    return arg1(dependencyMap[2]).useStateFromStores(items, () => sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled());
  },
  onValueChange: function onSameAsDeviceThemeValueChange(arg0) {
    const obj = arg1(dependencyMap[3]);
    if (arg0) {
      const result = obj.enableSameAsDeviceTheme();
    } else {
      const result1 = obj.disableSameAsDeviceTheme();
    }
  },
  useDescription() {
    const intl = arg1(dependencyMap[5]).intl;
    return intl.string(arg1(dependencyMap[5]).t.+tBsvs);
  }
};
const toggle = obj.createToggle(obj);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/user_settings/defs/native/SameAsDeviceThemeSetting.tsx");

export default toggle;
