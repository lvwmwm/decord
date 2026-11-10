// Module ID: 8811
// Function ID: 8812
// Name: useUserProfileColors
// Dependencies: [5015, 1083, 5253, 7353, 504, 5596, 575, 8802, 1090, 2]
// Exports: useUserProfileColors

// Module 8811 (useUserProfileColors)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1083 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1090 */;
import useThemeDefault from "useTheme" /* 5253 */;
import useToken from "useToken" /* 5596 */;
import useProfileThemeValues from "useProfileThemeValues" /* 7353 */;
import UserProfileGradientUtils from "UserProfileGradientUtils" /* 8802 */;
import AccessibilityStore from "AccessibilityStore" /* 5015 */;
import size from "module_2" /* 2 */;

const ThemeTypes = Constants.ThemeTypes;
let result = size.fileFinishedImporting("modules/user_profile/hooks/native/useUserProfileColors.tsx");

export function useUserProfileColors(theme) {
  let int2hex;
  let int2hex2;
  let obj4;
  let obj5;
  let obj6;
  let obj7;
  let obj8;
  let obj9;
  let overlay;
  let overlaySyncedWithUserTheme;
  let primaryColor;
  let secondaryColor;
  let sectionBox;
  let tmp3Result10;
  let tmp3Result7;
  let tmp3Result8;
  ({ primaryColor, secondaryColor } = theme);
  theme = theme.theme;
  const tmp2 = useThemeDefault();
  const obj = useProfileThemeValues;
  const profileThemeValues = obj.useProfileThemeValues(theme);
  const items = [AccessibilityStore];
  const obj3 = { gradientFallbackBackground: obj4.useToken(nativeDefault.colors.USER_PROFILE_GRADIENT_BACKGROUND, tmp2), gradientSecondaryBackground: obj5.useToken(nativeDefault.colors.USER_PROFILE_GRADIENT_BACKGROUND, tmp2), containerBackground: obj6.useToken(nativeDefault.colors.CARD_MUTED_BG, tmp2), containerBorderColor: obj7.useToken(nativeDefault.colors.BORDER_MUTED, tmp2), avatarBackground: obj8.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWER, tmp2), statusBackground: obj9.useToken(nativeDefault.colors.BACKGROUND_SURFACE_HIGH, tmp2) };
  const obj2 = get_initialized;
  const stateFromStores = obj2.useStateFromStores(items, () => AccessibilityStore.syncProfileThemeWithUserTheme);
  obj4 = useToken;
  obj5 = useToken;
  obj6 = useToken;
  obj7 = useToken;
  obj8 = useToken;
  obj9 = useToken;
  if (null != primaryColor) {
    if (null != secondaryColor) {
      if (null != profileThemeValues) {
        ({ overlay, sectionBox, overlaySyncedWithUserTheme } = profileThemeValues);
        let tmp7 = overlay;
        const calculateOverlayedColor = UserProfileGradientUtils.calculateOverlayedColor;
        UserProfileGradientUtils;
        if (stateFromStores) {
          tmp7 = overlaySyncedWithUserTheme;
        }
        const result = calculateOverlayedColor(primaryColor, tmp7);
        const obj10 = { containerBackground: tmp6, gradientSecondaryBackground: int2hex(tmp3Result7.calculateOverlayedColor(secondaryColor, overlay)), avatarBackground: tmp3Result8.int2hex(result), statusBackground: int2hex2(tmp3Result10.calculateOverlayedColor(result, sectionBox)) };
        const merged = Object.assign(obj3);
        int2hex = utils_ColorUtils.int2hex;
        utils_ColorUtils;
        tmp3Result7 = UserProfileGradientUtils;
        tmp3Result8 = utils_ColorUtils;
        int2hex2 = utils_ColorUtils.int2hex;
        utils_ColorUtils;
        tmp3Result10 = UserProfileGradientUtils;
        return obj10;
      }
    }
  }
  return obj3;
}
