// Module ID: 15232
// Function ID: 15233
// Name: toggle
// Dependencies: [4300, 1302, 1301, 1339, 7906, 673, 586, 1233, 15233, 9287, 11400, 2]

// Module 15232 (toggle)
import initialize from "initialize" /* 586 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import saveGuildFoldersDefault from "saveGuildFolders" /* 9287 */;
import track from "track" /* 15233 */;
import closure_3 from "reset" /* 4300 */;
import closure_4 from "initialize" /* 1302 */;
import closure_5 from "handleThemeChange" /* 1301 */;
import closure_6 from "handleConnectionClosedOrResumed" /* 1339 */;
import { AnalyticEvents } from "ME" /* 673 */;
import createToggle from "createToggle" /* 11400 */;

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["3340dY"]);
  },
  parent: require("MobileUserSettings").MobileUserSettings.APPEARANCE,
  useIsDisabled: function useSyncThemeDisabled() {
    const items = [closure_5];
    return initialize.useStateFromStores(items, () => sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled());
  },
  useValue: function useSyncThemeAcrossClientsValue() {
    const items = [closure_4];
    return initialize.useStateFromStores(items, () => false !== closure_4.shouldSync("appearance"));
  },
  onValueChange: function onSyncThemeAcrossClientsValueChange(is_sync_enabled) {
    gradientPreset = gradientPreset.gradientPreset;
    let id;
    if (gradientPreset != null) {
      id = gradientPreset.id;
    }
    if (id == null) {
      id = null;
    }
    const appearance = settings.settings.appearance;
    let prop;
    if (appearance != null) {
      const clientThemeSettings = appearance.clientThemeSettings;
      if (clientThemeSettings != null) {
        prop = clientThemeSettings.customUserThemeSettings;
      }
    }
    let obj = track;
    obj = { is_sync_enabled, base_theme: theme.theme, client_theme: id, has_custom_theme: null != prop };
    obj.track(AnalyticEvents.SYNC_ACROSS_CLIENTS_TOGGLED, obj);
    const result = saveGuildFoldersDefault.setShouldSyncAppearanceSettings(is_sync_enabled);
  },
  useDescription: function useSyncThemeAcrossClientsDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.CRtkeH).trim();
  }
};
createToggle = createToggle.createToggle(createToggle);
let result = require("set").fileFinishedImporting("modules/user_settings/defs/native/SyncThemeSetting.tsx");

export default createToggle;
