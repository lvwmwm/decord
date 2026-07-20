// Module ID: 8224
// Function ID: 64965
// Name: useProfileTheme
// Dependencies: []
// Exports: default

// Module 8224 (useProfileTheme)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const useEffectiveThemeOverride = arg1(dependencyMap[2]).useEffectiveThemeOverride;
const ThemeTypes = arg1(dependencyMap[3]).ThemeTypes;
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/user_profile/hooks/useProfileTheme.tsx");

export default function useProfileTheme(arg0) {
  let displayProfile;
  let forceUserTheme;
  let isPreview;
  let pendingAvatarSrc;
  let pendingThemeColors;
  let user;
  ({ user, displayProfile, pendingAvatarSrc } = arg0);
  ({ pendingThemeColors, isPreview, forceUserTheme } = arg0);
  const tmp = importDefault(dependencyMap[4])();
  const tmp2 = useEffectiveThemeOverride();
  let obj = arg1(dependencyMap[5]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => obj.syncProfileThemeWithUserTheme);
  if (null == pendingAvatarSrc) {
    let avatarURL;
    if (null != user) {
      let guildId;
      if (null != displayProfile) {
        guildId = displayProfile.guildId;
      }
      avatarURL = user.getAvatarURL(guildId, 80);
    }
    pendingAvatarSrc = avatarURL;
  }
  const result = arg1(dependencyMap[6]).unsafe_getResolvedRawColor("PRIMARY_530", { saturation: 1 });
  const obj2 = arg1(dependencyMap[6]);
  callback(arg1(dependencyMap[7]).useAvatarColors(pendingAvatarSrc, result, false), 2);
  if (null != tmp2) {
    return tmp2;
  } else {
    if (null == displayProfile) {
      if (!isPreview) {
        obj = { "Bool(true)": "Normal", "Bool(true)": true, "Bool(true)": "AbortSignal", theme: tmp };
        return obj;
      }
    }
    let previewThemeColors;
    if (null != displayProfile) {
      previewThemeColors = displayProfile.getPreviewThemeColors(pendingThemeColors);
    }
    let first;
    if (null != previewThemeColors) {
      first = previewThemeColors[0];
    }
    if (null == first) {
      first = arg1(dependencyMap[8]).hex2int(tmp8);
      const obj5 = arg1(dependencyMap[8]);
    }
    let hex2intResult;
    if (null != previewThemeColors) {
      hex2intResult = previewThemeColors[1];
    }
    if (null == hex2intResult) {
      hex2intResult = arg1(dependencyMap[8]).hex2int(tmp9);
      const obj6 = arg1(dependencyMap[8]);
    }
    let tmp17 = tmp;
    if (!stateFromStores) {
      tmp17 = tmp;
      if (!forceUserTheme) {
        const profileTheme = arg1(dependencyMap[9]).getProfileTheme(first);
        let tmp21 = tmp;
        if (null != profileTheme) {
          tmp21 = profileTheme;
        }
        tmp17 = tmp21;
        const obj7 = arg1(dependencyMap[9]);
      }
    }
    if (tmp17 !== ThemeTypes.DARK) {
      let isThemeLightResult = tmp17 === ThemeTypes.DARK;
      if (isThemeLightResult) {
        isThemeLightResult = arg1(dependencyMap[10]).isThemeLight(tmp);
        const obj9 = arg1(dependencyMap[10]);
      }
      let DARKER = tmp17;
      if (isThemeLightResult) {
        DARKER = ThemeTypes.DARKER;
      }
    } else {
      DARKER = tmp;
      const obj8 = arg1(dependencyMap[10]);
    }
    obj = { theme: DARKER, primaryColor: first, secondaryColor: hex2intResult };
    return obj;
  }
  const obj3 = arg1(dependencyMap[7]);
};
