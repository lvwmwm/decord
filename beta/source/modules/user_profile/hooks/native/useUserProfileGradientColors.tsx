// Module ID: 7685
// Function ID: 7686
// Name: useUserProfileGradientColors
// Dependencies: [19, 4825, 504, 4540, 6605, 7675, 2]
// Exports: useUserProfileGradientColors

// Module 7685 (useUserProfileGradientColors)
import UserProfileGradientUtils from "UserProfileGradientUtils" /* 7675 */;
import react_mod from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let react = react_mod;
let result = size.fileFinishedImporting("modules/user_profile/hooks/native/useUserProfileGradientColors.tsx");

export const useUserProfileGradientColors = function useUserProfileGradientColors(primaryColor, secondaryColor, fallbackBackground) {
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
};
