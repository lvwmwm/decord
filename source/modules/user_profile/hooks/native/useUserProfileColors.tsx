// Module ID: 8240
// Function ID: 65061
// Name: useUserProfileColors
// Dependencies: [4122, 482, 4066, 5486, 566, 1324, 3834, 689, 7893, 665, 2]
// Exports: useUserProfileColors

// Module 8240 (useUserProfileColors)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { ThemeTypes } from "sum";

const require = arg1;
let result = require("useTheme").fileFinishedImporting("modules/user_profile/hooks/native/useUserProfileColors.tsx");

export const useUserProfileColors = function useUserProfileColors(arg0) {
  let overlaySyncedWithUserTheme;
  let primaryColor;
  let secondaryColor;
  let sectionBox;
  let theme;
  ({ theme, primaryColor, secondaryColor } = arg0);
  const tmp = importDefault(4066)();
  let obj = require(5486) /* useProfileThemeValues */;
  const profileThemeValues = obj.useProfileThemeValues(theme);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => outer1_3.syncProfileThemeWithUserTheme);
  obj = {};
  const obj2 = require(566) /* initialize */;
  const tmp4 = importDefault(1324)("useUserProfileColors");
  obj.gradientFallbackBackground = require(3834) /* map */.useToken(importDefault(689).colors.USER_PROFILE_GRADIENT_BACKGROUND, tmp);
  const obj4 = require(3834) /* map */;
  obj.gradientSecondaryBackground = require(3834) /* map */.useToken(importDefault(689).colors.USER_PROFILE_GRADIENT_BACKGROUND, tmp);
  const obj5 = require(3834) /* map */;
  obj.containerBackground = require(3834) /* map */.useToken(importDefault(689).colors.USER_PROFILE_CONTAINER_BACKGROUND, tmp);
  const obj6 = require(3834) /* map */;
  obj.containerBorderColor = require(3834) /* map */.useToken(importDefault(689).colors.BORDER_MUTED, tmp);
  const obj7 = require(3834) /* map */;
  obj.avatarBackground = require(3834) /* map */.useToken(importDefault(689).colors.BACKGROUND_BASE_LOWER, tmp);
  const obj8 = require(3834) /* map */;
  obj.statusBackground = require(3834) /* map */.useToken(importDefault(689).colors.BACKGROUND_SURFACE_HIGH, tmp);
  const obj9 = require(3834) /* map */;
  let containerBackground = require(3834) /* map */.useToken(importDefault(689).colors.BACKGROUND_MOD_NORMAL, theme);
  let OPACITY_WHITE_24 = importDefault(689).unsafe_rawColors.OPACITY_WHITE_24;
  if (theme !== ThemeTypes.LIGHT) {
    if (tmp4) {
      containerBackground = obj.containerBackground;
    }
    OPACITY_WHITE_24 = containerBackground;
  }
  if (null != primaryColor) {
    if (null != secondaryColor) {
      if (null != profileThemeValues) {
        const overlay = profileThemeValues.overlay;
        ({ sectionBox, overlaySyncedWithUserTheme } = profileThemeValues);
        let tmp5 = overlay;
        if (stateFromStores) {
          tmp5 = overlaySyncedWithUserTheme;
        }
        const result = require(7893) /* getProfileTheme */.calculateOverlayedColor(primaryColor, tmp5);
        obj = {};
        const merged = Object.assign(obj);
        obj["containerBackground"] = OPACITY_WHITE_24;
        const obj17 = require(7893) /* getProfileTheme */;
        const obj12 = require(665) /* pad2 */;
        obj["gradientSecondaryBackground"] = obj12.int2hex(require(7893) /* getProfileTheme */.calculateOverlayedColor(secondaryColor, overlay));
        const obj13 = require(7893) /* getProfileTheme */;
        obj["avatarBackground"] = require(665) /* pad2 */.int2hex(result);
        const obj14 = require(665) /* pad2 */;
        const obj15 = require(665) /* pad2 */;
        obj["statusBackground"] = obj15.int2hex(require(7893) /* getProfileTheme */.calculateOverlayedColor(result, sectionBox));
        return obj;
      }
    }
  }
  return obj;
};
