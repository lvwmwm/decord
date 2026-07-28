// Module ID: 8057
// Function ID: 63955
// Name: useUserProfileColors
// Dependencies: [4157, 482, 4101, 5519, 566, 1324, 3869, 689, 7964, 665, 2]
// Exports: useUserProfileColors

// Module 8057 (useUserProfileColors)
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
  const tmp = importDefault(4101)();
  let obj = require(5519) /* useProfileThemeValues */;
  const profileThemeValues = obj.useProfileThemeValues(theme);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => outer1_3.syncProfileThemeWithUserTheme);
  const tmp4 = importDefault(1324)("useUserProfileColors");
  obj = {};
  const obj2 = require(566) /* initialize */;
  obj.gradientFallbackBackground = require(3869) /* map */.useToken(importDefault(689).colors.USER_PROFILE_GRADIENT_BACKGROUND, tmp);
  const obj4 = require(3869) /* map */;
  obj.gradientSecondaryBackground = require(3869) /* map */.useToken(importDefault(689).colors.USER_PROFILE_GRADIENT_BACKGROUND, tmp);
  const obj5 = require(3869) /* map */;
  const colors = importDefault(689).colors;
  obj.containerBackground = require(3869) /* map */.useToken(tmp4 ? colors.CARD_MUTED_BG : colors.USER_PROFILE_CONTAINER_BACKGROUND, tmp);
  const obj6 = require(3869) /* map */;
  obj.containerBorderColor = require(3869) /* map */.useToken(importDefault(689).colors.BORDER_MUTED, tmp);
  const obj7 = require(3869) /* map */;
  obj.avatarBackground = require(3869) /* map */.useToken(importDefault(689).colors.BACKGROUND_BASE_LOWER, tmp);
  const obj8 = require(3869) /* map */;
  obj.statusBackground = require(3869) /* map */.useToken(importDefault(689).colors.BACKGROUND_SURFACE_HIGH, tmp);
  const obj9 = require(3869) /* map */;
  let containerBackground = require(3869) /* map */.useToken(importDefault(689).colors.BACKGROUND_MOD_NORMAL, theme);
  let containerBackground2 = importDefault(689).unsafe_rawColors.OPACITY_WHITE_24;
  if (theme === ThemeTypes.LIGHT) {
    if (tmp4) {
      containerBackground2 = obj.containerBackground;
    }
    containerBackground = containerBackground2;
  } else if (tmp4) {
    containerBackground = obj.containerBackground;
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
        const result = require(7964) /* getProfileTheme */.calculateOverlayedColor(primaryColor, tmp5);
        obj = {};
        const merged = Object.assign(obj);
        obj["containerBackground"] = containerBackground;
        const obj17 = require(7964) /* getProfileTheme */;
        const obj12 = require(665) /* pad2 */;
        obj["gradientSecondaryBackground"] = obj12.int2hex(require(7964) /* getProfileTheme */.calculateOverlayedColor(secondaryColor, overlay));
        const obj13 = require(7964) /* getProfileTheme */;
        obj["avatarBackground"] = require(665) /* pad2 */.int2hex(result);
        const obj14 = require(665) /* pad2 */;
        const obj15 = require(665) /* pad2 */;
        obj["statusBackground"] = obj15.int2hex(require(7964) /* getProfileTheme */.calculateOverlayedColor(result, sectionBox));
        return obj;
      }
    }
  }
  return obj;
};
