// Module ID: 12283
// Function ID: 12284
// Name: AppLauncherBackButton
// Dependencies: [19, 21, 1499, 8020, 6997, 7049, 1114, 2]
// Exports: default

// Module 12283 (AppLauncherBackButton)
import Fragment from "Fragment" /* 21 */;
import Link from "Link" /* 1499 */;
import IconButton2 from "IconButton" /* 8020 */;
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
  const intl = tmp(1114).intl;
  const string = intl.string;
  const t = tmp(1114).t;
  return <IconButton size="sm" variant="secondary-overlay" icon={importDefault(canGoBackResult ? 6997 : 7049)} onPress={onPress} accessibilityLabel={string(canGoBackResult ? t["13/7kX"] : t.cpT0Cq)} maxFontSizeMultiplier={1.5} />;
};
export const BACK_BUTTON_SIZE = 32;
