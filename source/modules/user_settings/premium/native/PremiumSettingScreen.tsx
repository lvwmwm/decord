// Module ID: 13763
// Function ID: 104040
// Name: PremiumScreen
// Dependencies: []
// Exports: default

// Module 13763 (PremiumScreen)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/user_settings/premium/native/PremiumSettingScreen.tsx");

export default function PremiumScreen() {
  let obj = arg1(dependencyMap[2]);
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  const stackNavigation = arg1(dependencyMap[3]).useStackNavigation();
  let close;
  if (!stackNavigation.canGoBack()) {
    close = importDefault(dependencyMap[4]).close;
  }
  obj = { onClose: close };
  const obj2 = arg1(dependencyMap[3]);
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(importDefault(dependencyMap[5]), obj);
};
