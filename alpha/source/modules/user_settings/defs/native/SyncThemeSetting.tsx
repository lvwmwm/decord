// Module ID: 15518
// Function ID: 15519
// Name: SyncThemeSetting
// Dependencies: [4898, 1206, 1205, 1244, 7974, 1085, 558, 576, 504, 1126, 15519, 5259, 10629, 2]

// Module 15518 (SyncThemeSetting)
import react from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import UserSettingsActionCreatorsDefault from "UserSettingsActionCreators" /* 5259 */;
import SettingsConstants from "SettingsConstants" /* 7974 */;
import actions_AnalyticsTrackingActionCreators from "actions/AnalyticsTrackingActionCreators" /* 15519 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 4898 */;
import SelectivelySyncedUserSettingsStore from "SelectivelySyncedUserSettingsStore" /* 1206 */;
import ThemeStore from "ThemeStore" /* 1205 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1244 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 10629 */;
import size from "module_2" /* 2 */;

let tmp;
const get_initialized = tmp(504);
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const AnalyticEvents = Constants.AnalyticEvents;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSyncThemeDisabled() {
  let sameAsDeviceThemeEnabled;
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ThemeStore];
    const fn = function n() {
      return sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp4, tmp5);
}) : (function useSyncThemeDisabled() {
  let sameAsDeviceThemeEnabled;
  const items = [ThemeStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled());
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSyncThemeAcrossClientsValue() {
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SelectivelySyncedUserSettingsStore];
    const fn = function s() {
      return false !== SelectivelySyncedUserSettingsStore.shouldSync("appearance");
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp4, tmp5);
}) : (function useSyncThemeAcrossClientsValue() {
  const items = [SelectivelySyncedUserSettingsStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => false !== SelectivelySyncedUserSettingsStore.shouldSync("appearance"));
});
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["3340dY"]);
  },
  parent: MobileUserSettings.APPEARANCE,
  useIsDisabled: tmp2,
  useValue: tmp3,
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
