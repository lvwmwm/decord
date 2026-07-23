// Module ID: 11251
// Function ID: 87574
// Name: AppLauncherBackButton
// Dependencies: [31, 33, 1457, 7771, 5092, 5120, 1212, 2]
// Exports: default

// Module 11251 (AppLauncherBackButton)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Link").fileFinishedImporting("modules/app_launcher/native/base_components/AppLauncherBackButton.tsx");

export default function AppLauncherBackButton(onPress) {
  let obj = require(1457) /* Link */;
  const navigation = obj.useNavigation();
  const canGoBackResult = navigation.canGoBack();
  obj = { size: "sm", variant: "secondary-overlay" };
  if (canGoBackResult) {
    let tmp5 = 5092;
  } else {
    tmp5 = 5120;
  }
  obj.icon = importDefault(tmp5);
  obj.onPress = onPress.onPress;
  const intl = require(1212) /* getSystemLocale */.intl;
  const t = require(1212) /* getSystemLocale */.t;
  obj.accessibilityLabel = intl.string(canGoBackResult ? t["13/7kX"] : t.cpT0Cq);
  obj.maxFontSizeMultiplier = 1.5;
  return jsx(require(7771) /* IconButton */.IconButton, { size: "sm", variant: "secondary-overlay" });
};
export const BACK_BUTTON_SIZE = 32;
