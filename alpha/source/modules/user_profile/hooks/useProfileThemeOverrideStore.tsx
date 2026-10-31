// Module ID: 8801
// Function ID: 8802
// Name: useProfileThemeOverrideStore
// Dependencies: [1072, 560, 5253, 8802, 5021, 2]
// Exports: useEffectiveThemeOverride, useHasNonNitroThemeOverride, useIsBannerDisabledByOverride

// Module 8801 (useProfileThemeOverrideStore)
import Constants from "Constants" /* 1072 */;
import shared from "shared" /* 5021 */;
import useThemeDefault from "useTheme" /* 5253 */;
import UserProfileGradientUtils from "UserProfileGradientUtils" /* 8802 */;
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

const ThemeTypes = Constants.ThemeTypes;
let tmp2 = module_560.create()((arg0) => {
  let closure_0 = arg0;
  let obj = {
    themeOverride: null,
    savedClientTheme: null,
    setThemeOverride(themeOverride) {
      const obj = { themeOverride };
      return closure_0(obj);
    },
    setSavedClientTheme(savedClientTheme) {
      const obj = { savedClientTheme };
      return closure_0(obj);
    }
  };
  return obj;
});
let closure_4 = tmp2;
const result = size.fileFinishedImporting("modules/user_profile/hooks/useProfileThemeOverrideStore.tsx");

export const useProfileThemeOverrideStore = tmp2;
export function useEffectiveThemeOverride() {
  const tmp = closure_4((themeOverride) => themeOverride.themeOverride);
  const tmp3 = useThemeDefault();
  if (null == tmp) {
    return null;
  } else {
    let themeType;
    let tmp4;
    let tmp5;
    let DARK;
    if ("nitro" === tmp.mode) {
      const themeColors = tmp.themeColors;
      let first;
      if (themeColors != null) {
        first = themeColors[0];
      }
      if (first == null) {
        first = null;
      }
      const themeColors2 = tmp.themeColors;
      let tmp7;
      if (themeColors2 != null) {
        tmp7 = themeColors2[1];
      }
      if (tmp7 == null) {
        tmp7 = null;
      }
      let tmp8 = tmp3;
      if (null != first) {
        tmp8 = tmp3;
        if (null != tmp7) {
          const obj = UserProfileGradientUtils;
          let profileTheme = obj.getProfileTheme(first);
          if (profileTheme == null) {
            profileTheme = tmp3;
          }
          tmp8 = profileTheme;
        }
      }
      themeType = tmp8;
      tmp4 = tmp7;
      tmp5 = first;
    } else {
      themeType = tmp.themeType;
      if (themeType == null) {
        themeType = tmp3;
      }
      tmp4 = null;
      tmp5 = null;
    }
    if (themeType !== ThemeTypes.ASH) {
      let isThemeLightResult = themeType === tmp11.ASH;
      if (isThemeLightResult) {
        const obj3 = shared;
        isThemeLightResult = obj3.isThemeLight(tmp3);
      }
      DARK = themeType;
      if (isThemeLightResult) {
        DARK = tmp11.DARK;
      }
    } else {
      DARK = tmp3;
      shared;
    }
    return { theme: DARK, primaryColor: tmp5, secondaryColor: tmp4 };
  }
}
export function useIsBannerDisabledByOverride() {
  const tmp = closure_4((themeOverride) => themeOverride.themeOverride);
  let tmp2 = null != tmp;
  if (tmp2) {
    tmp2 = "non-nitro" === tmp.mode || true === tmp.disableBanner;
    const tmp3 = "non-nitro" === tmp.mode || true === tmp.disableBanner;
  }
  return tmp2;
}
export function useHasNonNitroThemeOverride() {
  const tmp = closure_4((themeOverride) => themeOverride.themeOverride);
  return null != tmp && "non-nitro" === tmp.mode;
}
