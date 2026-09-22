// Module ID: 8500
// Function ID: 8501
// Name: useProfileTheme
// Dependencies: [32, 4749, 8501, 1074, 4691, 504, 575, 8405, 1092, 8502, 4608, 2]
// Exports: default

// Module 8500 (useProfileTheme)
import initialize from "initialize" /* 504 */;
import shims from "shims" /* 575 */;
import useThemeDefault from "useTheme" /* 4691 */;
import useAvatarColor from "useAvatarColor" /* 8405 */;
import _slicedToArray from "module_32" /* 32 */;
import AccessibilityStore from "AccessibilityStore" /* 4749 */;

require = fn;
const useEffectiveThemeOverride = fn(8501).useEffectiveThemeOverride;
const ThemeTypes = fn(1074).ThemeTypes;
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/hooks/useProfileTheme.tsx");

export default function useProfileTheme(arg0) {
  ({ user, displayProfile, pendingAvatarSrc } = arg0);
  ({ pendingThemeColors, isPreview, forceUserTheme } = arg0);
  const tmp2 = useThemeDefault();
  const tmp3 = useEffectiveThemeOverride();
  const items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => AccessibilityStore.syncProfileThemeWithUserTheme);
  if (pendingAvatarSrc == null) {
    let avatarURL;
    if (user != null) {
      let guildId;
      if (displayProfile != null) {
        guildId = displayProfile.guildId;
      }
      avatarURL = user.getAvatarURL(guildId, 80);
    }
    pendingAvatarSrc = avatarURL;
  }
  const result = shims.unsafe_getResolvedRawColor("PRIMARY_530", { saturation: 1 });
  const tmp4Result = shims;
  _slicedToArray(useAvatarColor.useAvatarColors(pendingAvatarSrc, result, false), 2);
  if (null != tmp3) {
    return tmp3;
  } else {
    let canEditThemes;
    if (displayProfile != null) {
      canEditThemes = displayProfile.canEditThemes;
    }
    if (!canEditThemes) {
      if (!isPreview) {
        const obj2 = { theme: tmp2, primaryColor: null, secondaryColor: null };
        return obj2;
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
      first = tmp4(1092).hex2int(tmp10);
      const tmp4Result8 = tmp4(1092);
    }
    let hex2intResult;
    if (previewThemeColors != null) {
      hex2intResult = previewThemeColors[1];
    }
    if (hex2intResult == null) {
      hex2intResult = tmp4(1092).hex2int(tmp11);
      const tmp4Result9 = tmp4(1092);
    }
    let tmp16 = tmp2;
    if (!stateFromStores) {
      tmp16 = tmp2;
      if (!forceUserTheme) {
        let profileTheme = tmp4(8502).getProfileTheme(first);
        if (profileTheme == null) {
          profileTheme = tmp2;
        }
        tmp16 = profileTheme;
        const tmp4Result10 = tmp4(8502);
      }
    }
    if (tmp16 !== ThemeTypes.ASH) {
      let isThemeLightResult = tmp16 === tmp18.ASH;
      if (isThemeLightResult) {
        isThemeLightResult = tmp4(4608).isThemeLight(tmp2);
        const tmp4Result11 = tmp4(4608);
      }
      let DARK = tmp16;
      if (isThemeLightResult) {
        DARK = tmp18.DARK;
      }
    } else {
      DARK = tmp2;
      const tmp4Result12 = tmp4(4608);
    }
    const obj3 = { theme: DARK, primaryColor: first, secondaryColor: hex2intResult };
    return obj3;
  }
  const tmp4Result7 = useAvatarColor;
};
