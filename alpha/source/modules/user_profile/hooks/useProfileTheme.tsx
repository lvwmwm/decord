// Module ID: 8792
// Function ID: 8793
// Name: useProfileTheme
// Dependencies: [32, 5010, 8793, 1072, 5248, 504, 574, 8707, 1091, 8794, 5016, 2]
// Exports: default

// Module 8792 (useProfileTheme)
import get_initialized from "get initialized" /* 504 */;
import shims from "shims" /* 574 */;
import Constants from "Constants" /* 1072 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1091 */;
import shared from "shared" /* 5016 */;
import useThemeDefault from "useTheme" /* 5248 */;
import useAvatarColor from "useAvatarColor" /* 8707 */;
import useProfileThemeOverrideStore from "useProfileThemeOverrideStore" /* 8793 */;
import UserProfileGradientUtils from "UserProfileGradientUtils" /* 8794 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import AccessibilityStore from "AccessibilityStore" /* 5010 */;
import size from "module_2" /* 2 */;

const useEffectiveThemeOverride = useProfileThemeOverrideStore.useEffectiveThemeOverride;
const ThemeTypes = Constants.ThemeTypes;
let result = size.fileFinishedImporting("modules/user_profile/hooks/useProfileTheme.tsx");

export default function useProfileTheme(arg0) {
  let displayProfile;
  let forceUserTheme;
  let isPreview;
  let pendingAvatarSrc;
  let pendingThemeColors;
  let user;
  ({ user, displayProfile, pendingAvatarSrc } = arg0);
  ({ pendingThemeColors, isPreview, forceUserTheme } = arg0);
  const tmp2 = useThemeDefault();
  const tmp3 = useEffectiveThemeOverride();
  const items = [AccessibilityStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => AccessibilityStore.syncProfileThemeWithUserTheme);
  if (pendingAvatarSrc == null) {
    let avatarURL;
    if (user != null) {
      let guildId;
      const getAvatarURL = user.getAvatarURL;
      if (displayProfile != null) {
        guildId = displayProfile.guildId;
      }
      avatarURL = getAvatarURL(guildId, 80);
    }
    pendingAvatarSrc = avatarURL;
  }
  const tmp4Result = shims;
  const result = tmp4Result.unsafe_getResolvedRawColor("PRIMARY_530", { saturation: 1 });
  const tmp4Result7 = useAvatarColor;
  _slicedToArray(tmp4Result7.useAvatarColors(pendingAvatarSrc, result, false), 2);
  if (null != tmp3) {
    return tmp3;
  } else {
    let DARK;
    let canEditThemes;
    if (displayProfile != null) {
      canEditThemes = displayProfile.canEditThemes;
    }
    if (!canEditThemes) {
      if (!isPreview) {
        return { theme: tmp2, primaryColor: null, secondaryColor: null };
      }
    }
    let previewThemeColors;
    if (displayProfile != null) {
      previewThemeColors = displayProfile.getPreviewThemeColors(pendingThemeColors);
    }
    let first;
    if (previewThemeColors != null) {
      first = previewThemeColors[0];
    }
    if (first == null) {
      const tmp4Result8 = utils_ColorUtils;
      first = tmp4Result8.hex2int(tmp10);
    }
    let hex2intResult;
    if (previewThemeColors != null) {
      hex2intResult = previewThemeColors[1];
    }
    if (hex2intResult == null) {
      const tmp4Result9 = utils_ColorUtils;
      hex2intResult = tmp4Result9.hex2int(tmp11);
    }
    let tmp16 = tmp2;
    if (!stateFromStores) {
      tmp16 = tmp2;
      if (!forceUserTheme) {
        const tmp4Result10 = UserProfileGradientUtils;
        let profileTheme = tmp4Result10.getProfileTheme(first);
        if (profileTheme == null) {
          profileTheme = tmp2;
        }
        tmp16 = profileTheme;
      }
    }
    if (tmp16 !== ThemeTypes.ASH) {
      let isThemeLightResult = tmp16 === tmp18.ASH;
      if (isThemeLightResult) {
        const tmp4Result11 = shared;
        isThemeLightResult = tmp4Result11.isThemeLight(tmp2);
      }
      DARK = tmp16;
      if (isThemeLightResult) {
        DARK = tmp18.DARK;
      }
    } else {
      DARK = tmp2;
      shared;
    }
    return { theme: DARK, primaryColor: first, secondaryColor: hex2intResult };
  }
};
