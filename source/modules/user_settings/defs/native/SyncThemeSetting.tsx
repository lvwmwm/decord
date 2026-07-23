// Module ID: 14197
// Function ID: 109081
// Name: toggle
// Dependencies: [3942, 1279, 1278, 1316, 7662, 653, 1324, 566, 1212, 14198, 7955, 10095, 2]

// Module 14197 (toggle)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["3340dY"]);
  },
  parent: require("MobileSetting").MobileSetting.APPEARANCE,
  useIsDisabled: function useSyncThemeDisabled() {
    let stateFromStores = importDefault(1324)("SyncThemeSetting");
    const items = [closure_5];
    if (stateFromStores) {
      stateFromStores = obj.useStateFromStores(items, () => outer1_5.isSameAsDeviceThemeEnabled());
    }
    return stateFromStores;
  },
  useValue: function useSyncThemeAcrossClientsValue() {
    const items = [closure_4];
    return require(566) /* initialize */.useStateFromStores(items, () => false !== outer1_4.shouldSync("appearance"));
  },
  onValueChange: function onSyncThemeAcrossClientsValueChange(is_sync_enabled) {
    gradientPreset = gradientPreset.gradientPreset;
    let id;
    if (null != gradientPreset) {
      id = gradientPreset.id;
    }
    let tmp2 = null;
    if (null != id) {
      tmp2 = id;
    }
    const appearance = settings.settings.appearance;
    let prop;
    if (null != appearance) {
      const clientThemeSettings = appearance.clientThemeSettings;
      if (null != clientThemeSettings) {
        prop = clientThemeSettings.customUserThemeSettings;
      }
    }
    let obj = require(14198) /* track */;
    obj = { is_sync_enabled, base_theme: theme.theme, client_theme: tmp2, has_custom_theme: null != prop };
    obj.track(AnalyticEvents.SYNC_ACROSS_CLIENTS_TOGGLED, obj);
    const result = importDefault(7955).setShouldSyncAppearanceSettings(is_sync_enabled);
  },
  useDescription: function useSyncThemeAcrossClientsDescription() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.CRtkeH).trim();
  }
};
createToggle = createToggle.createToggle(createToggle);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_settings/defs/native/SyncThemeSetting.tsx");

export default createToggle;
