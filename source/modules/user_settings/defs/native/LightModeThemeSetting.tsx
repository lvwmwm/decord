// Module ID: 14617
// Function ID: 14618
// Name: route
// Dependencies: [1302, 1305, 8148, 676, 1367, 589, 10421, 1236, 14618, 14619, 2]

// Module 14617 (route)
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
    return require(14618) /* useSyncedModeThemeName */.useSyncedModeThemeName(SystemTheme.LIGHT);
  },
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.APPEARANCE_LIGHT_MODE_THEME_PICKER,
  getComponent() {
    return require(14619) /* SettingsAppearanceLightModeThemePickerScreen */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("MobileSetting").fileFinishedImporting("modules/user_settings/defs/native/LightModeThemeSetting.tsx");

export default createToggle;
