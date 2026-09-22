// Module ID: 12388
// Function ID: 12389
// Name: AppLauncherBackButton
// Dependencies: [19, 21, 1485, 8183, 5848, 5900, 1115, 2]
// Exports: default

// Module 12388 (AppLauncherBackButton)
import Link from "Link" /* 1485 */;
import IconButton from "IconButton" /* 8183 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/base_components/AppLauncherBackButton.tsx");

export default function AppLauncherBackButton(onPress) {
  const navigation = Link.useNavigation();
  const canGoBackResult = navigation.canGoBack();
  const obj2 = { size: "sm", variant: "secondary-overlay", icon: importDefault(canGoBackResult ? 5848 : 5900), onPress: onPress.onPress, accessibilityLabel: null, maxFontSizeMultiplier: 1.5 };
  const intl = tmp(1115).intl;
  const t = tmp(1115).t;
  obj2.accessibilityLabel = intl.string(canGoBackResult ? t["13/7kX"] : t.cpT0Cq);
  return jsx(IconButton.IconButton, { size: "sm", variant: "secondary-overlay", icon: importDefault(canGoBackResult ? 5848 : 5900), onPress: onPress.onPress, accessibilityLabel: null, maxFontSizeMultiplier: 1.5 });
};
export const BACK_BUTTON_SIZE = 32;
