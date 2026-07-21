// Module ID: 14075
// Function ID: 106883
// Name: SettingsAppearanceDarkModeThemePickerScreen
// Dependencies: []
// Exports: default

// Module 14075 (SettingsAppearanceDarkModeThemePickerScreen)
importAll(dependencyMap[0]);
const SystemTheme = arg1(dependencyMap[1]).SystemTheme;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/user_settings/appearance/native/SettingsAppearanceDarkModeThemePickerScreen.tsx");

export default function SettingsAppearanceDarkModeThemePickerScreen() {
  const obj = { mode: SystemTheme.DARK, themeSelector: "nitro" };
  const intl = arg1(dependencyMap[4]).intl;
  obj.headerTitle = intl.string(arg1(dependencyMap[4]).t.EgvHH/);
  return jsx(importDefault(dependencyMap[3]), obj);
};
