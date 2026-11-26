// Module ID: 13002
// Function ID: 13003
// Name: AppLauncherBackButton
// Dependencies: [19, 21, 1501, 7591, 7100, 7152, 1112, 2]
// Exports: default

// Module 13002 (AppLauncherBackButton)
import Fragment from "Fragment" /* 21 */;
import Link from "Link" /* 1501 */;
import IconButton2 from "IconButton" /* 7591 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let navigation;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/app_launcher/native/base_components/AppLauncherBackButton.tsx");

export default function AppLauncherBackButton(onPress) {
  onPress = onPress.onPress;
  const obj = Link;
  navigation = obj.useNavigation();
  const canGoBackResult = navigation.canGoBack();
  const IconButton = IconButton2.IconButton;
  const intl = tmp(1112).intl;
  const string = intl.string;
  const t = tmp(1112).t;
  return <IconButton size="sm" variant="secondary-overlay" icon={importDefault(canGoBackResult ? 7100 : 7152)} onPress={onPress} accessibilityLabel={string(canGoBackResult ? t["13/7kX"] : t.cpT0Cq)} maxFontSizeMultiplier={1.5} />;
};
export const BACK_BUTTON_SIZE = 32;
