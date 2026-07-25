// Module ID: 14215
// Function ID: 109353
// Name: route
// Dependencies: [1278, 7697, 653, 1324, 566, 10059, 1212, 14211, 14216, 2]

// Module 14215 (route)
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
    return require(14216) /* getThemeOverride */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("ME").fileFinishedImporting("modules/user_settings/defs/native/AppearanceThemePickerSetting.tsx");

export default createToggle;
