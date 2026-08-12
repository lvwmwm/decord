// Module ID: 8877
// Function ID: 8878
// Name: useUserProfileColors
// Dependencies: [4336, 505, 4280, 5789, 589, 1367, 4065, 712, 8357, 688, 2]
// Exports: useUserProfileColors

// Module 8877 (useUserProfileColors)
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import { ThemeTypes } from "sum";

const require = arg1;
let result = require("useTheme").fileFinishedImporting("modules/user_profile/hooks/native/useUserProfileColors.tsx");

export const useUserProfileColors = function useUserProfileColors(arg0) {
  let overlay;
  let overlaySyncedWithUserTheme;
  let primaryColor;
  let secondaryColor;
  let sectionBox;
  let theme;
  ({ theme, primaryColor, secondaryColor } = arg0);
  const tmp3 = importDefault(4280)();
  let obj = require(5789) /* useProfileThemeValues */;
  const profileThemeValues = obj.useProfileThemeValues(theme);
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => obj.syncProfileThemeWithUserTheme);
  const tmp7 = importDefault(1367)("useUserProfileColors");
  obj = { gradientFallbackBackground: null, gradientSecondaryBackground: null, containerBackground: null, containerBorderColor: null, avatarBackground: null, statusBackground: null };
  const obj2 = require(589) /* initialize */;
  obj[0] = require(4065) /* map */.useToken(importDefault(712).colors.USER_PROFILE_GRADIENT_BACKGROUND, tmp3);
  const obj4 = require(4065) /* map */;
  obj[1] = require(4065) /* map */.useToken(importDefault(712).colors.USER_PROFILE_GRADIENT_BACKGROUND, tmp3);
  const obj5 = require(4065) /* map */;
  const colors = importDefault(712).colors;
  obj[2] = require(4065) /* map */.useToken(tmp7 ? colors.CARD_MUTED_BG : colors.USER_PROFILE_CONTAINER_BACKGROUND, tmp3);
  let tmp4Result = tmp4(4065);
  obj[3] = tmp4Result.useToken(importDefault(712).colors.BORDER_MUTED, tmp3);
  tmp4Result = tmp4(4065);
  obj[4] = tmp4Result.useToken(importDefault(712).colors.BACKGROUND_BASE_LOWER, tmp3);
  const obj6 = require(4065) /* map */;
  obj[5] = require(4065) /* map */.useToken(importDefault(712).colors.BACKGROUND_SURFACE_HIGH, tmp3);
  const tmp4Result1 = require(4065) /* map */;
  let containerBackground = require(4065) /* map */.useToken(tmp(712).colors.BACKGROUND_MOD_NORMAL, theme);
  let containerBackground2 = tmp(712).unsafe_rawColors.OPACITY_WHITE_24;
  if (theme === ThemeTypes.LIGHT) {
    if (tmp7) {
      containerBackground2 = obj.containerBackground;
    }
    containerBackground = containerBackground2;
  } else if (tmp7) {
    containerBackground = obj.containerBackground;
  }
  if (null != primaryColor) {
    if (null != secondaryColor) {
      if (null != profileThemeValues) {
        ({ overlay, sectionBox, overlaySyncedWithUserTheme } = profileThemeValues);
        let tmp8 = overlay;
        if (stateFromStores) {
          tmp8 = overlaySyncedWithUserTheme;
        }
        const result = tmp4(8357).calculateOverlayedColor(primaryColor, tmp8);
        obj = {};
        const merged = Object.assign(obj);
        obj.containerBackground = containerBackground;
        const tmp4Result3 = tmp4(8357);
        const tmp4Result4 = tmp4(688);
        obj.gradientSecondaryBackground = tmp4Result4.int2hex(tmp4(8357).calculateOverlayedColor(secondaryColor, overlay));
        const tmp4Result5 = tmp4(8357);
        obj.avatarBackground = tmp4(688).int2hex(result);
        const tmp4Result6 = tmp4(688);
        const tmp4Result7 = tmp4(688);
        obj.statusBackground = tmp4Result7.int2hex(tmp4(8357).calculateOverlayedColor(result, sectionBox));
        return obj;
      }
    }
  }
  return obj;
};
