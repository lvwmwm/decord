// Module ID: 13779
// Function ID: 104114
// Name: PremiumPlanSelectSettingScreen
// Dependencies: []
// Exports: default

// Module 13779 (PremiumPlanSelectSettingScreen)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/user_settings/premium/native/PremiumPlanSelectSettingScreen.tsx");

export default function PremiumPlanSelectSettingScreen() {
  let obj = arg1(dependencyMap[2]);
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  obj = {};
  const merged = Object.assign(settingNavigationRoute.params);
  return jsx(importDefault(dependencyMap[3]), obj);
};
