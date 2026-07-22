// Module ID: 8501
// Function ID: 67851
// Name: useUserProfileGradientColors
// Dependencies: []
// Exports: useUserProfileGradientColors

// Module 8501 (useUserProfileGradientColors)
let closure_2 = importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/user_profile/hooks/native/useUserProfileGradientColors.tsx");

export const useUserProfileGradientColors = function useUserProfileGradientColors(primaryColor, secondaryColor, fallbackBackground) {
  secondaryColor = primaryColor;
  const dependencyMap = secondaryColor;
  const React = fallbackBackground;
  const items = [closure_3];
  const stateFromStores = secondaryColor(dependencyMap[2]).useStateFromStores(items, () => overlay.syncProfileThemeWithUserTheme);
  const obj = secondaryColor(dependencyMap[2]);
  const obj2 = secondaryColor(dependencyMap[3]);
  const profileThemeValues = secondaryColor(dependencyMap[4]).useProfileThemeValues(obj2.useThemeContext().theme);
  if (stateFromStores) {
    let prop;
    if (!tmp3) {
      prop = profileThemeValues.overlaySyncedWithUserTheme;
    }
    let overlay = prop;
  } else if (!tmp3) {
    overlay = profileThemeValues.overlay;
  }
  closure_3 = overlay;
  const items1 = [fallbackBackground, primaryColor, secondaryColor, overlay];
  return React.useMemo(() => {
    let result = null;
    if (null != arg0) {
      result = null;
      if (null != overlay) {
        result = arg0(arg1[5]).calculateOverlayedColor(arg0, overlay);
        const obj = arg0(arg1[5]);
      }
    }
    let result1 = null;
    if (null != arg1) {
      result1 = null;
      if (null != overlay) {
        result1 = arg0(arg1[5]).calculateOverlayedColor(arg1, overlay);
        const obj2 = arg0(arg1[5]);
      }
    }
    return arg0(arg1[5]).getUserProfileGradientContainerColors(result, result1, arg2);
  }, items1);
};
