// Module ID: 14154
// Function ID: 108903
// Name: route
// Dependencies: [1278, 7662, 653, 1324, 566, 10095, 1212, 14150, 14155, 2]

// Module 14154 (route)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.Ksh3ik);
  },
  parent: require("MobileSetting").MobileSetting.APPEARANCE,
  usePredicate: function useIsSingleThemePickerVisible() {
    const tmp = importDefault(1324)("AppearanceThemePickerSetting");
    const items = [_isNativeReflectConstruct];
    const obj = require(566) /* initialize */;
    return !tmp || !require(566) /* initialize */.useStateFromStores(items, () => outer1_3.isSameAsDeviceThemeEnabled());
  },
  useTrailing: require("useAppearanceSettingTrailing").useAppearanceSettingTrailing,
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.APPEARANCE_THEME_PICKER,
  getComponent() {
    return require(14155) /* getThemeOverride */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("ME").fileFinishedImporting("modules/user_settings/defs/native/AppearanceThemePickerSetting.tsx");

export default createToggle;
