// Module ID: 8586
// Function ID: 8587
// Name: useUserProfileColors
// Dependencies: [4821, 1085, 4763, 7517, 504, 4526, 576, 8577, 1092, 2]
// Exports: useUserProfileColors

// Module 8586 (useUserProfileColors)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4526 */;
import useThemeDefault from "useTheme" /* 4763 */;
import useProfileThemeValues from "useProfileThemeValues" /* 7517 */;
import AccessibilityStore from "AccessibilityStore" /* 4821 */;

require = fn;
const ThemeTypes = fn(1085).ThemeTypes;
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/hooks/native/useUserProfileColors.tsx");

export const useUserProfileColors = function useUserProfileColors(theme) {
  ({ primaryColor, secondaryColor } = theme);
  const tmp2 = useThemeDefault();
  const profileThemeValues = useProfileThemeValues.useProfileThemeValues(theme.theme);
  const items = [AccessibilityStore];
  const obj3 = { gradientFallbackBackground: null, gradientSecondaryBackground: null, containerBackground: null, containerBorderColor: null, avatarBackground: null, statusBackground: null };
  const stateFromStores = initialize.useStateFromStores(items, () => AccessibilityStore.syncProfileThemeWithUserTheme);
  obj3.gradientFallbackBackground = useToken.useToken(nativeDefault.colors.USER_PROFILE_GRADIENT_BACKGROUND, tmp2);
  obj3.gradientSecondaryBackground = useToken.useToken(nativeDefault.colors.USER_PROFILE_GRADIENT_BACKGROUND, tmp2);
  obj3.containerBackground = useToken.useToken(nativeDefault.colors.CARD_MUTED_BG, tmp2);
  obj3.containerBorderColor = useToken.useToken(nativeDefault.colors.BORDER_MUTED, tmp2);
  obj3.avatarBackground = useToken.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWER, tmp2);
  obj3.statusBackground = useToken.useToken(nativeDefault.colors.BACKGROUND_SURFACE_HIGH, tmp2);
  if (null != primaryColor) {
    if (null != secondaryColor) {
      if (null != profileThemeValues) {
        ({ overlay, sectionBox, overlaySyncedWithUserTheme } = profileThemeValues);
        let tmp7 = overlay;
        if (stateFromStores) {
          tmp7 = overlaySyncedWithUserTheme;
        }
        const result = tmp3(8577).calculateOverlayedColor(primaryColor, tmp7);
        const obj10 = {};
        const merged = Object.assign(obj3);
        obj10.containerBackground = tmp6;
        const tmp3Result = tmp3(8577);
        const tmp3Result6 = tmp3(1092);
        obj10.gradientSecondaryBackground = tmp3Result6.int2hex(tmp3(8577).calculateOverlayedColor(secondaryColor, overlay));
        const tmp3Result7 = tmp3(8577);
        obj10.avatarBackground = tmp3(1092).int2hex(result);
        const tmp3Result8 = tmp3(1092);
        const tmp3Result9 = tmp3(1092);
        obj10.statusBackground = tmp3Result9.int2hex(tmp3(8577).calculateOverlayedColor(result, sectionBox));
        return obj10;
      }
    }
  }
  return obj3;
};
