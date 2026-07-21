// Module ID: 14076
// Function ID: 106885
// Name: toggle
// Dependencies: []

// Module 14076 (toggle)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const AnalyticEvents = arg1(dependencyMap[5]).AnalyticEvents;
let obj = arg1(dependencyMap[11]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[8]).intl;
    return intl.string(arg1(dependencyMap[8]).t.3340dY);
  },
  parent: arg1(dependencyMap[4]).MobileSetting.APPEARANCE,
  useIsDisabled: function useSyncThemeDisabled() {
    let stateFromStores = importDefault(dependencyMap[6])("SyncThemeSetting");
    const items = [closure_5];
    if (stateFromStores) {
      stateFromStores = obj.useStateFromStores(items, () => sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled());
    }
    return stateFromStores;
  },
  useValue: function useSyncThemeAcrossClientsValue() {
    const items = [closure_4];
    return arg1(dependencyMap[7]).useStateFromStores(items, () => false !== closure_4.shouldSync("appearance"));
  },
  onValueChange: function onSyncThemeAcrossClientsValueChange(is_sync_enabled) {
    const gradientPreset = gradientPreset.gradientPreset;
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
    let obj = arg1(dependencyMap[9]);
    obj = { is_sync_enabled, base_theme: theme.theme, client_theme: tmp2, has_custom_theme: null != prop };
    obj.track(AnalyticEvents.SYNC_ACROSS_CLIENTS_TOGGLED, obj);
    const result = importDefault(dependencyMap[10]).setShouldSyncAppearanceSettings(is_sync_enabled);
  },
  useDescription: function useSyncThemeAcrossClientsDescription() {
    const intl = arg1(dependencyMap[8]).intl;
    return intl.string(arg1(dependencyMap[8]).t.CRtkeH).trim();
  }
};
const toggle = obj.createToggle(obj);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/user_settings/defs/native/SyncThemeSetting.tsx");

export default toggle;
