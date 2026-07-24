// Module ID: 14296
// Function ID: 109749
// Name: toggle
// Dependencies: [4122, 7751, 566, 10127, 1212, 13423, 2]

// Module 14296 (toggle)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["sSY+mD"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCESSIBILITY,
  useValue: function useProfileColorsSettingValue() {
    const items = [_isNativeReflectConstruct];
    return require(566) /* initialize */.useStateFromStores(items, () => outer1_2.syncProfileThemeWithUserTheme);
  },
  onValueChange: require("setFontSize").toggleSyncProfileThemeWithUserTheme
};
createToggle = createToggle.createToggle(createToggle);
const result = require("initialize").fileFinishedImporting("modules/user_settings/defs/native/SyncProfileColorsSetting.tsx");

export default createToggle;
