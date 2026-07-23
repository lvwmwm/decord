// Module ID: 8237
// Function ID: 65042
// Name: useProfileThemeOverrideStore
// Dependencies: [653, 621, 4066, 7893, 3976, 2]
// Exports: useEffectiveThemeOverride, useHasNonNitroThemeOverride, useIsBannerDisabledByOverride

// Module 8237 (useProfileThemeOverrideStore)
import { ThemeTypes } from "ME";
import keys from "keys";

let tmp2 = keys.create()((arg0) => {
  let closure_0 = arg0;
  const obj = {
    themeOverride: null,
    savedClientTheme: null,
    setThemeOverride(themeOverride) {
      return callback({ themeOverride });
    },
    setSavedClientTheme(savedClientTheme) {
      return callback({ savedClientTheme });
    }
  };
  return obj;
});
let closure_4 = tmp2;
const result = require("useTheme").fileFinishedImporting("modules/user_profile/hooks/useProfileThemeOverrideStore.tsx");

export const useProfileThemeOverrideStore = tmp2;
export const useEffectiveThemeOverride = function useEffectiveThemeOverride() {
  const tmp = tmp2((themeOverride) => themeOverride.themeOverride);
  tmp2 = importDefault(4066)();
  if (null == tmp) {
    return null;
  } else {
    if ("nitro" === tmp.mode) {
      const themeColors = tmp.themeColors;
      let first;
      if (null != themeColors) {
        first = themeColors[0];
      }
      let tmp7 = null;
      if (null != first) {
        tmp7 = first;
      }
      const themeColors2 = tmp.themeColors;
      let tmp8;
      if (null != themeColors2) {
        tmp8 = themeColors2[1];
      }
      let tmp9 = null;
      if (null != tmp8) {
        tmp9 = tmp8;
      }
      let tmp10 = tmp2;
      if (null != tmp7) {
        tmp10 = tmp2;
        if (null != tmp9) {
          let obj = require(7893) /* getProfileTheme */;
          const profileTheme = obj.getProfileTheme(tmp7);
          tmp10 = tmp2;
          if (null != profileTheme) {
            tmp10 = profileTheme;
          }
        }
      }
      let tmp3 = tmp10;
      let tmp4 = tmp7;
      let tmp5 = tmp9;
    } else {
      const themeType = tmp.themeType;
      tmp3 = tmp2;
      if (null != themeType) {
        tmp3 = themeType;
      }
      tmp4 = null;
      tmp5 = null;
    }
    if (tmp3 !== ThemeTypes.DARK) {
      let isThemeLightResult = tmp3 === ThemeTypes.DARK;
      if (isThemeLightResult) {
        isThemeLightResult = require(3976) /* AccessibilityAnnouncer */.isThemeLight(tmp2);
        const obj3 = require(3976) /* AccessibilityAnnouncer */;
      }
      let DARKER = tmp3;
      if (isThemeLightResult) {
        DARKER = ThemeTypes.DARKER;
      }
    } else {
      DARKER = tmp2;
      const obj2 = require(3976) /* AccessibilityAnnouncer */;
    }
    obj = { theme: DARKER, primaryColor: tmp4, secondaryColor: tmp5 };
    return obj;
  }
};
export const useIsBannerDisabledByOverride = function useIsBannerDisabledByOverride() {
  const tmp = tmp2((themeOverride) => themeOverride.themeOverride);
  tmp2 = null != tmp;
  if (tmp2) {
    let tmp3 = "non-nitro" === tmp.mode;
    if (!tmp3) {
      tmp3 = true === tmp.disableBanner;
    }
    tmp2 = tmp3;
  }
  return tmp2;
};
export const useHasNonNitroThemeOverride = function useHasNonNitroThemeOverride() {
  const tmp = tmp2((themeOverride) => themeOverride.themeOverride);
  tmp2 = null != tmp;
  if (tmp2) {
    tmp2 = "non-nitro" === tmp.mode;
  }
  return tmp2;
};
