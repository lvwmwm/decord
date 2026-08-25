// Module ID: 14816
// Function ID: 14817
// Name: toggle
// Dependencies: [4372, 8235, 589, 10516, 1236, 13906, 2]

// Module 14816 (toggle)
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import closure_2 from "maybeApplyNoTextColorForLightCustomTheme" /* 4372 */;
import createToggle from "createToggle" /* 10516 */;

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["sSY+mD"]);
  },
  parent: require("MobileUserSettings").MobileUserSettings.ACCESSIBILITY,
  useValue: function useProfileColorsSettingValue() {
    const items = [closure_2];
    return initialize.useStateFromStores(items, () => obj.syncProfileThemeWithUserTheme);
  },
  onValueChange: require("setFontSize").toggleSyncProfileThemeWithUserTheme
};
createToggle = createToggle.createToggle(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/SyncProfileColorsSetting.tsx");

export default createToggle;
