// Module ID: 14579
// Function ID: 14580
// Name: route
// Dependencies: [1302, 8148, 676, 1367, 589, 10421, 1236, 14575, 14580, 2]

// Module 14579 (route)
import handleThemeChange from "handleThemeChange";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.Ksh3ik);
  },
  parent: require("MobileSetting").MobileSetting.APPEARANCE,
  usePredicate: function useIsSingleThemePickerVisible() {
    const tmp = importDefault(1367)("AppearanceThemePickerSetting");
    const items = [handleThemeChange];
    let tmp2 = !tmp;
    if (tmp) {
      tmp2 = !obj.useStateFromStores(items, () => sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled());
    }
    return tmp2;
  },
  useTrailing: require("useAppearanceSettingTrailing").useAppearanceSettingTrailing,
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.APPEARANCE_THEME_PICKER,
  getComponent() {
    return require(14580) /* ThemeTypes */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("ME").fileFinishedImporting("modules/user_settings/defs/native/AppearanceThemePickerSetting.tsx");

export default createToggle;
