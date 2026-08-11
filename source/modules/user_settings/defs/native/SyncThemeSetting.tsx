// Module ID: 14552
// Function ID: 14553
// Name: toggle
// Dependencies: [4124, 1303, 1302, 1340, 8084, 676, 1367, 589, 1236, 14553, 8704, 10452, 2]

// Module 14552 (toggle)
import isSyncedModeThemesEnabled from "isSyncedModeThemesEnabled";
import initialize from "initialize";
import handleThemeChange from "handleThemeChange";
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed";
import { AnalyticEvents } from "ME";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["3340dY"]);
  },
  parent: require("MobileSetting").MobileSetting.APPEARANCE,
  useIsDisabled: function useSyncThemeDisabled() {
    let stateFromStores = importDefault(1367)("SyncThemeSetting");
    const items = [handleThemeChange];
    if (stateFromStores) {
      stateFromStores = obj.useStateFromStores(items, () => sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled());
    }
    return stateFromStores;
  },
  useValue: function useSyncThemeAcrossClientsValue() {
    const items = [initialize];
    return require(589) /* initialize */.useStateFromStores(items, () => false !== initialize.shouldSync("appearance"));
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
    let obj = require(14553) /* track */;
    obj = { is_sync_enabled, base_theme: theme.theme, client_theme: id, has_custom_theme: null != prop };
    obj.track(AnalyticEvents.SYNC_ACROSS_CLIENTS_TOGGLED, obj);
    const result = importDefault(8704).setShouldSyncAppearanceSettings(is_sync_enabled);
  },
  useDescription: function useSyncThemeAcrossClientsDescription() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.CRtkeH).trim();
  }
};
createToggle = createToggle.createToggle(createToggle);
let result = require("handleThemeChange").fileFinishedImporting("modules/user_settings/defs/native/SyncThemeSetting.tsx");

export default createToggle;
