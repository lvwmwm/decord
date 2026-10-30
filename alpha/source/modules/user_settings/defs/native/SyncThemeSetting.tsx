// Module ID: 17231
// Function ID: 17232
// Name: SyncThemeSetting
// Dependencies: [5033, 1194, 1193, 1232, 8424, 1072, 504, 1114, 17232, 5913, 11505, 2]

// Module 17231 (SyncThemeSetting)
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1114 */;
import UserSettingsActionCreatorsDefault from "UserSettingsActionCreators" /* 5913 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import actions_AnalyticsTrackingActionCreators from "actions/AnalyticsTrackingActionCreators" /* 17232 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 5033 */;
import SelectivelySyncedUserSettingsStore from "SelectivelySyncedUserSettingsStore" /* 1194 */;
import ThemeStore from "ThemeStore" /* 1193 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1232 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const AnalyticEvents = Constants.AnalyticEvents;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["3340dY"]);
  },
  parent: MobileUserSettings.APPEARANCE,
  useIsDisabled: function useSyncThemeDisabled() {
    let sameAsDeviceThemeEnabled;
    const items = [ThemeStore];
    const obj = get_initialized;
    return obj.useStateFromStores(items, () => sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled());
  },
  useValue: function useSyncThemeAcrossClientsValue() {
    const items = [SelectivelySyncedUserSettingsStore];
    const obj = get_initialized;
    return obj.useStateFromStores(items, () => false !== SelectivelySyncedUserSettingsStore.shouldSync("appearance"));
  },
  onValueChange: function onSyncThemeAcrossClientsValueChange(is_sync_enabled) {
    const gradientPreset = ClientThemesBackgroundStore.gradientPreset;
    let id;
    const theme = ThemeStore.theme;
    if (gradientPreset != null) {
      id = gradientPreset.id;
    }
    if (id == null) {
      id = null;
    }
    const appearance = UserSettingsProtoStore.settings.appearance;
    let prop;
    if (appearance != null) {
      const clientThemeSettings = appearance.clientThemeSettings;
      if (clientThemeSettings != null) {
        prop = clientThemeSettings.customUserThemeSettings;
      }
    }
    const tmp3 = null != prop;
    const obj = actions_AnalyticsTrackingActionCreators;
    const obj2 = { is_sync_enabled, base_theme: theme, client_theme: id, has_custom_theme: tmp3 };
    obj.track(AnalyticEvents.SYNC_ACROSS_CLIENTS_TOGGLED, obj2);
    const obj3 = UserSettingsActionCreatorsDefault;
    const result = obj3.setShouldSyncAppearanceSettings(is_sync_enabled);
  },
  useDescription: function useSyncThemeAcrossClientsDescription() {
    const intl = intl2.intl;
    const str = intl.string(intl2.t.CRtkeH);
    return str.trim();
  }
};
const toggle = SettingBuilders.createToggle(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/SyncThemeSetting.tsx");

export default toggle;
