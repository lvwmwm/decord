// Module ID: 14121
// Function ID: 107195
// Name: toggle
// Dependencies: []

// Module 14121 (toggle)
let closure_2 = importDefault(dependencyMap[0]);
let obj = arg1(dependencyMap[3]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[4]).intl;
    return intl.string(arg1(dependencyMap[4]).t.sSY+mD);
  },
  parent: arg1(dependencyMap[1]).MobileSetting.ACCESSIBILITY,
  useValue: function useProfileColorsSettingValue() {
    const items = [closure_2];
    return arg1(dependencyMap[2]).useStateFromStores(items, () => obj.syncProfileThemeWithUserTheme);
  },
  onValueChange: arg1(dependencyMap[5]).toggleSyncProfileThemeWithUserTheme
};
const toggle = obj.createToggle(obj);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/user_settings/defs/native/SyncProfileColorsSetting.tsx");

export default toggle;
