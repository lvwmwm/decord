// Module ID: 14604
// Function ID: 14605
// Name: route
// Dependencies: [1302, 1305, 8123, 676, 1367, 589, 10493, 1236, 14605, 14606, 2]

// Module 14604 (route)
import handleThemeChange from "handleThemeChange";
import { SystemTheme } from "SystemThemeState";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.NoFvjZ);
  },
  parent: require("MobileSetting").MobileSetting.APPEARANCE,
  usePredicate: function useSyncedModePickerVisible() {
    let stateFromStores = importDefault(1367)("LightModeThemeSetting");
    const items = [handleThemeChange];
    if (stateFromStores) {
      stateFromStores = obj.useStateFromStores(items, () => sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled());
    }
    return stateFromStores;
  },
  useTrailing() {
    return require(14605) /* useSyncedModeThemeName */.useSyncedModeThemeName(SystemTheme.LIGHT);
  },
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.APPEARANCE_LIGHT_MODE_THEME_PICKER,
  getComponent() {
    return require(14606) /* SettingsAppearanceLightModeThemePickerScreen */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("MobileSetting").fileFinishedImporting("modules/user_settings/defs/native/LightModeThemeSetting.tsx");

export default createToggle;
