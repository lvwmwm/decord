// Module ID: 12271
// Function ID: 12272
// Name: AppLauncherBackButton
// Dependencies: [19, 21, 558, 568, 1489, 5844, 5847, 1119, 8178, 2]

// Module 12271 (AppLauncherBackButton)
import c from "c" /* 568 */;
import Link from "Link" /* 1489 */;
import IconButton from "IconButton" /* 8178 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/base_components/AppLauncherBackButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((onPress) => {
  const cResult = c.c(8);
  onPress = onPress.onPress;
  const navigation = Link.useNavigation();
  if (cResult[0] !== navigation) {
    const canGoBackResult = navigation.canGoBack();
    cResult[0] = navigation;
    cResult[1] = canGoBackResult;
    let tmp4 = canGoBackResult;
  } else {
    tmp4 = cResult[1];
  }
  const tmp6 = importDefault(tmp4 ? 5844 : 5847);
  if (cResult[2] !== tmp4) {
    const intl = tmp(1119).intl;
    const t = tmp(1119).t;
    const stringResult = intl.string(tmp4 ? t["13/7kX"] : t.cpT0Cq);
    cResult[2] = tmp4;
    cResult[3] = stringResult;
  } else {
    if (cResult[4] === onPress) {
      if (cResult[5] === tmp6) {
        if (cResult[6] === tmp7) {
          let tmp10 = cResult[7];
        }
        return tmp10;
      }
    }
    const obj3 = { size: "sm", variant: "secondary-overlay", icon: tmp6, onPress, accessibilityLabel: cResult[3], maxFontSizeMultiplier: 1.5 };
    const tmp12 = jsx(tmp(8178).IconButton, { size: "sm", variant: "secondary-overlay", icon: tmp6, onPress, accessibilityLabel: cResult[3], maxFontSizeMultiplier: 1.5 });
    cResult[4] = onPress;
    cResult[5] = tmp6;
    cResult[6] = cResult[3];
    cResult[7] = tmp12;
    tmp10 = tmp12;
  }
}) : ((onPress) => {
  const navigation = Link.useNavigation();
  const canGoBackResult = navigation.canGoBack();
  const obj2 = { size: "sm", variant: "secondary-overlay", icon: importDefault(canGoBackResult ? 5844 : 5847), onPress: onPress.onPress, accessibilityLabel: null, maxFontSizeMultiplier: 1.5 };
  const intl = tmp(1119).intl;
  const t = tmp(1119).t;
  obj2.accessibilityLabel = intl.string(canGoBackResult ? t["13/7kX"] : t.cpT0Cq);
  return jsx(IconButton.IconButton, { size: "sm", variant: "secondary-overlay", icon: importDefault(canGoBackResult ? 5844 : 5847), onPress: onPress.onPress, accessibilityLabel: null, maxFontSizeMultiplier: 1.5 });
});
export const BACK_BUTTON_SIZE = 32;
