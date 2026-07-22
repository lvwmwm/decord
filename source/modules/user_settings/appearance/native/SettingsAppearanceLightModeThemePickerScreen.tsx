// Module ID: 14080
// Function ID: 106915
// Name: SettingsAppearanceLightModeThemePickerScreen
// Dependencies: []
// Exports: default

// Module 14080 (SettingsAppearanceLightModeThemePickerScreen)
importAll(dependencyMap[0]);
const SystemTheme = arg1(dependencyMap[1]).SystemTheme;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/user_settings/appearance/native/SettingsAppearanceLightModeThemePickerScreen.tsx");

export default function SettingsAppearanceLightModeThemePickerScreen() {
  const obj = { mode: SystemTheme.LIGHT, themeSelector: "nitro" };
  const intl = arg1(dependencyMap[4]).intl;
  obj.headerTitle = intl.string(arg1(dependencyMap[4]).t.NoFvjZ);
  return jsx(importDefault(dependencyMap[3]), obj);
};
