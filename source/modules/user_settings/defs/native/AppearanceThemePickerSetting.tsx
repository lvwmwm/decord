// Module ID: 14040
// Function ID: 106747
// Name: route
// Dependencies: [920322048, 131072, 527826944, 553648128, 2969567232, 4143972354, 3707764750, 33554486, 4026531840, 7958]

// Module 14040 (route)
import module_7958 from "module_7958";

let closure_3 = importDefault(dependencyMap[0]);
let obj = arg1(dependencyMap[5]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[6]).intl;
    return intl.string(arg1(dependencyMap[6]).t.Ksh3ik);
  },
  parent: arg1(dependencyMap[1]).MobileSetting.APPEARANCE,
  usePredicate: function useIsSingleThemePickerVisible() {
    const tmp = importDefault(dependencyMap[3])("AppearanceThemePickerSetting");
    const items = [closure_3];
    const obj = arg1(dependencyMap[4]);
    return !tmp || !arg1(dependencyMap[4]).useStateFromStores(items, () => sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled());
  },
  useTrailing: arg1(dependencyMap[7]).useAppearanceSettingTrailing,
  screen: obj
};
obj = {
  route: arg1(dependencyMap[2]).UserSettingsSections.APPEARANCE_THEME_PICKER,
  getComponent() {
    return arg1(dependencyMap[8]).default;
  }
};
const route = obj.createRoute(obj);
const result = module_7958.fileFinishedImporting("modules/user_settings/defs/native/AppearanceThemePickerSetting.tsx");

export default route;
