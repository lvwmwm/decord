// Module ID: 11240
// Function ID: 87499
// Name: AppLauncherBackButton
// Dependencies: []
// Exports: default

// Module 11240 (AppLauncherBackButton)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/app_launcher/native/base_components/AppLauncherBackButton.tsx");

export default function AppLauncherBackButton(onPress) {
  let obj = arg1(dependencyMap[2]);
  const navigation = obj.useNavigation();
  const canGoBackResult = navigation.canGoBack();
  obj = {};
  if (canGoBackResult) {
    let tmp5 = tmp4[4];
  } else {
    tmp5 = tmp4[5];
  }
  obj.icon = importDefault(tmp5);
  obj.onPress = onPress.onPress;
  const intl = arg1(dependencyMap[6]).intl;
  const t = arg1(dependencyMap[6]).t;
  obj.accessibilityLabel = intl.string(canGoBackResult ? t.13/7kX : t.cpT0Cq);
  obj.maxFontSizeMultiplier = 1.5;
  return jsx(arg1(dependencyMap[3]).IconButton, obj);
};
export const BACK_BUTTON_SIZE = 32;
