// Module ID: 12264
// Function ID: 12265
// Name: AppLauncherBackButton
// Dependencies: [19, 21, 1484, 8202, 5710, 5762, 1114, 2]
// Exports: default

// Module 12264 (AppLauncherBackButton)
import Link from "Link" /* 1484 */;
import IconButton from "IconButton" /* 8202 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/base_components/AppLauncherBackButton.tsx");

export default function AppLauncherBackButton(onPress) {
  const navigation = Link.useNavigation();
  const canGoBackResult = navigation.canGoBack();
  const obj2 = { size: "sm", variant: "secondary-overlay", icon: importDefault(canGoBackResult ? 5710 : 5762), onPress: onPress.onPress, accessibilityLabel: null, maxFontSizeMultiplier: 1.5 };
  const intl = tmp(1114).intl;
  const t = tmp(1114).t;
  obj2.accessibilityLabel = intl.string(canGoBackResult ? t["13/7kX"] : t.cpT0Cq);
  return jsx(IconButton.IconButton, { size: "sm", variant: "secondary-overlay", icon: importDefault(canGoBackResult ? 5710 : 5762), onPress: onPress.onPress, accessibilityLabel: null, maxFontSizeMultiplier: 1.5 });
};
export const BACK_BUTTON_SIZE = 32;
