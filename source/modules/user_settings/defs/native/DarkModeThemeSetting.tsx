// Module ID: 14470
// Function ID: 14471
// Name: route
// Dependencies: [1302, 1305, 8022, 676, 1348, 589, 10380, 1236, 14468, 14471, 2]

// Module 14470 (route)
import handleThemeChange from "handleThemeChange";
import { SystemTheme } from "SystemThemeState";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["EgvHH/"]);
  },
  parent: require("MobileSetting").MobileSetting.APPEARANCE,
  usePredicate: function useSyncedModePickerVisible() {
    let stateFromStores = importDefault(1348)("DarkModeThemeSetting");
    const items = [handleThemeChange];
    if (stateFromStores) {
      stateFromStores = obj.useStateFromStores(items, () => sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled());
    }
    return stateFromStores;
  },
  useTrailing() {
    return require(14468) /* useSyncedModeThemeName */.useSyncedModeThemeName(SystemTheme.DARK);
  },
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.APPEARANCE_DARK_MODE_THEME_PICKER,
  getComponent() {
    return require(14471) /* SettingsAppearanceDarkModeThemePickerScreen */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("MobileSetting").fileFinishedImporting("modules/user_settings/defs/native/DarkModeThemeSetting.tsx");

export default createToggle;
