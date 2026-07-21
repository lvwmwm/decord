// Module ID: 8230
// Function ID: 64993
// Name: useProfileThemeOverrideStore
// Dependencies: []
// Exports: useEffectiveThemeOverride, useHasNonNitroThemeOverride, useIsBannerDisabledByOverride

// Module 8230 (useProfileThemeOverrideStore)
const ThemeTypes = require(dependencyMap[0]).ThemeTypes;
const _module = require(dependencyMap[1]);
const tmp2 = _module.create()((arg0) => {
  const require = arg0;
  const obj = {
    "Null": "o",
    "Null": "o",
    setThemeOverride(themeOverride) {
      return themeOverride({ themeOverride });
    },
    setSavedClientTheme(savedClientTheme) {
      return savedClientTheme({ savedClientTheme });
    }
  };
  return obj;
});
const _module1 = require(dependencyMap[5]);
const result = _module1.fileFinishedImporting("modules/user_profile/hooks/useProfileThemeOverrideStore.tsx");

export const useProfileThemeOverrideStore = tmp2;
export const useEffectiveThemeOverride = function useEffectiveThemeOverride() {
  const tmp = tmp2((themeOverride) => themeOverride.themeOverride);
  const tmp2 = importDefault(dependencyMap[2])();
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
          let obj = require(dependencyMap[3]);
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
        isThemeLightResult = require(dependencyMap[4]).isThemeLight(tmp2);
        const obj3 = require(dependencyMap[4]);
      }
      let DARKER = tmp3;
      if (isThemeLightResult) {
        DARKER = ThemeTypes.DARKER;
      }
    } else {
      DARKER = tmp2;
      const obj2 = require(dependencyMap[4]);
    }
    obj = { theme: DARKER, primaryColor: tmp4, secondaryColor: tmp5 };
    return obj;
  }
};
export const useIsBannerDisabledByOverride = function useIsBannerDisabledByOverride() {
  const tmp = tmp2((themeOverride) => themeOverride.themeOverride);
  let tmp2 = null != tmp;
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
  let tmp2 = null != tmp;
  if (tmp2) {
    tmp2 = "non-nitro" === tmp.mode;
  }
  return tmp2;
};
