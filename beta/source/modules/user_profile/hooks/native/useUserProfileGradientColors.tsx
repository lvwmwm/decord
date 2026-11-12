// Module ID: 8919
// Function ID: 8920
// Name: useUserProfileGradientColors
// Dependencies: [19, 5171, 504, 5231, 7447, 8908, 2]
// Exports: useUserProfileGradientColors

// Module 8919 (useUserProfileGradientColors)
import UserProfileGradientUtils from "UserProfileGradientUtils" /* 8908 */;
import react_mod from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5171 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let react = react_mod;
let result = size.fileFinishedImporting("modules/user_profile/hooks/native/useUserProfileGradientColors.tsx");

export function useUserProfileGradientColors(primaryColor, secondaryColor, fallbackBackground) {
  let overlay;
  _require = primaryColor;
  dependencyMap = secondaryColor;
  react = fallbackBackground;
  let obj = require("get initialized");
  const items = [overlay];
  const stateFromStores = obj.useStateFromStores(items, () => overlay.syncProfileThemeWithUserTheme);
  let obj2 = require("native");
  const theme = obj2.useThemeContext().theme;
  let obj3 = require("useProfileThemeValues");
  const profileThemeValues = obj3.useProfileThemeValues(theme);
  const tmp3 = profileThemeValues == null;
  if (stateFromStores) {
    let prop;
    if (!tmp3) {
      prop = profileThemeValues.overlaySyncedWithUserTheme;
    }
    overlay = prop;
  } else if (!tmp3) {
    overlay = profileThemeValues.overlay;
  }
  const items1 = [fallbackBackground, primaryColor, secondaryColor, overlay];
  return react.useMemo(() => {
    let result = null;
    if (null != primaryColor) {
      result = null;
      if (null != overlay) {
        const obj = UserProfileGradientUtils;
        result = obj.calculateOverlayedColor(tmp, tmp3);
      }
    }
    let result1 = null;
    if (null != secondaryColor) {
      result1 = null;
      if (null != overlay) {
        const obj2 = UserProfileGradientUtils;
        result1 = obj2.calculateOverlayedColor(tmp6, tmp8);
      }
    }
    const obj3 = UserProfileGradientUtils;
    return obj3.getUserProfileGradientContainerColors(result, result1, fallbackBackground);
  }, items1);
}
