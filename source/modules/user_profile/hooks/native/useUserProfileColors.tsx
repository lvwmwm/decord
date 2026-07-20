// Module ID: 8228
// Function ID: 64987
// Name: useUserProfileColors
// Dependencies: []
// Exports: useUserProfileColors

// Module 8228 (useUserProfileColors)
let closure_3 = importDefault(dependencyMap[0]);
const ThemeTypes = arg1(dependencyMap[1]).ThemeTypes;
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/user_profile/hooks/native/useUserProfileColors.tsx");

export const useUserProfileColors = function useUserProfileColors(arg0) {
  let overlaySyncedWithUserTheme;
  let primaryColor;
  let secondaryColor;
  let sectionBox;
  let theme;
  ({ theme, primaryColor, secondaryColor } = arg0);
  const tmp = importDefault(dependencyMap[2])();
  let obj = arg1(dependencyMap[3]);
  const profileThemeValues = obj.useProfileThemeValues(theme);
  const items = [closure_3];
  const stateFromStores = arg1(dependencyMap[4]).useStateFromStores(items, () => obj.syncProfileThemeWithUserTheme);
  obj = {};
  const obj2 = arg1(dependencyMap[4]);
  const tmp4 = importDefault(dependencyMap[5])("useUserProfileColors");
  obj.gradientFallbackBackground = arg1(dependencyMap[6]).useToken(importDefault(dependencyMap[7]).colors.USER_PROFILE_GRADIENT_BACKGROUND, tmp);
  const obj4 = arg1(dependencyMap[6]);
  obj.gradientSecondaryBackground = arg1(dependencyMap[6]).useToken(importDefault(dependencyMap[7]).colors.USER_PROFILE_GRADIENT_BACKGROUND, tmp);
  const obj5 = arg1(dependencyMap[6]);
  obj.containerBackground = arg1(dependencyMap[6]).useToken(importDefault(dependencyMap[7]).colors.USER_PROFILE_CONTAINER_BACKGROUND, tmp);
  const obj6 = arg1(dependencyMap[6]);
  obj.containerBorderColor = arg1(dependencyMap[6]).useToken(importDefault(dependencyMap[7]).colors.BORDER_MUTED, tmp);
  const obj7 = arg1(dependencyMap[6]);
  obj.avatarBackground = arg1(dependencyMap[6]).useToken(importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOWER, tmp);
  const obj8 = arg1(dependencyMap[6]);
  obj.statusBackground = arg1(dependencyMap[6]).useToken(importDefault(dependencyMap[7]).colors.BACKGROUND_SURFACE_HIGH, tmp);
  const obj9 = arg1(dependencyMap[6]);
  let containerBackground = arg1(dependencyMap[6]).useToken(importDefault(dependencyMap[7]).colors.BACKGROUND_MOD_NORMAL, theme);
  let OPACITY_WHITE_24 = importDefault(dependencyMap[7]).unsafe_rawColors.OPACITY_WHITE_24;
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
        const result = arg1(dependencyMap[8]).calculateOverlayedColor(primaryColor, tmp5);
        obj = {};
        const merged = Object.assign(obj);
        obj["containerBackground"] = OPACITY_WHITE_24;
        const obj17 = arg1(dependencyMap[8]);
        const obj12 = arg1(dependencyMap[9]);
        obj["gradientSecondaryBackground"] = obj12.int2hex(arg1(dependencyMap[8]).calculateOverlayedColor(secondaryColor, overlay));
        const obj13 = arg1(dependencyMap[8]);
        obj["avatarBackground"] = arg1(dependencyMap[9]).int2hex(result);
        const obj14 = arg1(dependencyMap[9]);
        const obj15 = arg1(dependencyMap[9]);
        obj["statusBackground"] = obj15.int2hex(arg1(dependencyMap[8]).calculateOverlayedColor(result, sectionBox));
        return obj;
      }
    }
  }
  return obj;
};
