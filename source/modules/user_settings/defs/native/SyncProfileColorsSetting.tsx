// Module ID: 14114
// Function ID: 107172
// Name: toggle
// Dependencies: [0, 0, 0, 0, 0, 4294967295]

// Module 14114 (toggle)
import closure_2 from "result";
import result from "result";

result = {
  useTitle() {
    const intl = arg1(dependencyMap[4]).intl;
    return intl.string(arg1(dependencyMap[4]).t.sSY+mD);
  },
  parent: require("result").MobileSetting.ACCESSIBILITY,
  useValue: function useProfileColorsSettingValue() {
    const items = [closure_2];
    return arg1(dependencyMap[2]).useStateFromStores(items, () => obj.syncProfileThemeWithUserTheme);
  },
  onValueChange: arg1(dependencyMap[5]).toggleSyncProfileThemeWithUserTheme
};
result = result.createToggle(result);
result = arg1(dependencyMap[6]).fileFinishedImporting("modules/user_settings/defs/native/SyncProfileColorsSetting.tsx");

export default result;
