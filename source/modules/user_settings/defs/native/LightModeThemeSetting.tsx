// Module ID: 14242
// Function ID: 109385
// Name: route
// Dependencies: [1278, 1281, 7751, 653, 1324, 566, 10127, 1212, 14243, 14244, 2]

// Module 14242 (route)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { SystemTheme } from "SystemThemeState";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.NoFvjZ);
  },
  parent: require("MobileSetting").MobileSetting.APPEARANCE,
  usePredicate: function useSyncedModePickerVisible() {
    let stateFromStores = importDefault(1324)("LightModeThemeSetting");
    const items = [_isNativeReflectConstruct];
    if (stateFromStores) {
      stateFromStores = obj.useStateFromStores(items, () => outer1_3.isSameAsDeviceThemeEnabled());
    }
    return stateFromStores;
  },
  useTrailing() {
    return require(14243) /* useSyncedModeThemeName */.useSyncedModeThemeName(SystemTheme.LIGHT);
  },
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.APPEARANCE_LIGHT_MODE_THEME_PICKER,
  getComponent() {
    return require(14244) /* SettingsAppearanceLightModeThemePickerScreen */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("MobileSetting").fileFinishedImporting("modules/user_settings/defs/native/LightModeThemeSetting.tsx");

export default createToggle;
