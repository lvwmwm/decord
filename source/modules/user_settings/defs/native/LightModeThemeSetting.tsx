// Module ID: 14068
// Function ID: 106834
// Name: route
// Dependencies: []

// Module 14068 (route)
let closure_3 = importDefault(dependencyMap[0]);
const SystemTheme = arg1(dependencyMap[1]).SystemTheme;
let obj = arg1(dependencyMap[6]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[7]).intl;
    return intl.string(arg1(dependencyMap[7]).t.NoFvjZ);
  },
  parent: arg1(dependencyMap[2]).MobileSetting.APPEARANCE,
  usePredicate: function useSyncedModePickerVisible() {
    let stateFromStores = importDefault(dependencyMap[4])("LightModeThemeSetting");
    const items = [closure_3];
    if (stateFromStores) {
      stateFromStores = obj.useStateFromStores(items, () => sameAsDeviceThemeEnabled.isSameAsDeviceThemeEnabled());
    }
    return stateFromStores;
  },
  useTrailing() {
    return arg1(dependencyMap[8]).useSyncedModeThemeName(SystemTheme.LIGHT);
  },
  screen: obj
};
obj = {
  route: arg1(dependencyMap[3]).UserSettingsSections.APPEARANCE_LIGHT_MODE_THEME_PICKER,
  getComponent() {
    return arg1(dependencyMap[9]).default;
  }
};
const route = obj.createRoute(obj);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/user_settings/defs/native/LightModeThemeSetting.tsx");

export default route;
