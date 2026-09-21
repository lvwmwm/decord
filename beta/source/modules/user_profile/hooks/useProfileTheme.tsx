// Module ID: 8501
// Function ID: 8502
// Name: useProfileTheme
// Dependencies: [32, 4750, 8502, 1078, 558, 568, 4693, 504, 579, 8406, 1096, 8503, 4610, 2]

// Module 8501 (useProfileTheme)
import initialize from "initialize" /* 504 */;
import c from "c" /* 568 */;
import shims from "shims" /* 579 */;
import useThemeDefault from "useTheme" /* 4693 */;
import useAvatarColor from "useAvatarColor" /* 8406 */;
import _slicedToArray from "module_32" /* 32 */;
import AccessibilityStore from "AccessibilityStore" /* 4750 */;

require = fn;
const useEffectiveThemeOverride = fn(8502).useEffectiveThemeOverride;
const ThemeTypes = fn(1078).ThemeTypes;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/hooks/useProfileTheme.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((isPreview) => {
  const cResult = c.c(23);
  ({ user, displayProfile, pendingThemeColors, pendingAvatarSrc, forceUserTheme } = isPreview);
  const tmp4 = useThemeDefault();
  const tmp5 = useEffectiveThemeOverride();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function u() {
      return AccessibilityStore.syncProfileThemeWithUserTheme;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp6, tmp7);
  let guildId;
  if (displayProfile != null) {
    guildId = displayProfile.guildId;
  }
  if (cResult[2] === guildId) {
    if (cResult[3] === pendingAvatarSrc) {
      if (cResult[4] === user) {
        let tmp11 = cResult[5];
      }
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const result = tmp(579).unsafe_getResolvedRawColor("PRIMARY_530", { saturation: 1 });
        cResult[6] = result;
        let tmp16 = result;
        const tmpResult8 = tmp(579);
      } else {
        tmp16 = cResult[6];
      }
      const tmpResult9 = tmp(8406);
      [tmp20, tmp21] = tmp(8406).useAvatarColors(tmp11, tmp16, false);
      if (null != tmp5) {
        return tmp5;
      } else {
        let canEditThemes;
        if (displayProfile != null) {
          canEditThemes = displayProfile.canEditThemes;
        }
        if (!canEditThemes) {
          if (!isPreview.isPreview) {
            if (cResult[7] !== tmp4) {
              const obj2 = { theme: tmp4, primaryColor: null, secondaryColor: null };
              cResult[7] = tmp4;
              cResult[8] = obj2;
              let tmp23 = obj2;
            } else {
              tmp23 = cResult[8];
            }
            return tmp23;
          }
        }
        if (cResult[9] === tmp4) {
          if (cResult[10] === displayProfile) {
            if (cResult[11] === forceUserTheme) {
              if (cResult[12] === pendingThemeColors) {
                if (cResult[13] === tmp20) {
                  if (cResult[14] === tmp21) {
                    if (cResult[15] === stateFromStores) {
                      let tmp24 = cResult[16];
                      let tmp25 = cResult[17];
                      let tmp26 = cResult[18];
                    }
                    if (tmp26 !== ThemeTypes.ASH) {
                      let isThemeLightResult = tmp26 === tmp32.ASH;
                      if (isThemeLightResult) {
                        isThemeLightResult = tmp(4610).isThemeLight(tmp4);
                        const tmpResult10 = tmp(4610);
                      }
                      let DARK = tmp26;
                      if (isThemeLightResult) {
                        DARK = tmp32.DARK;
                      }
                    } else {
                      DARK = tmp4;
                      const tmpResult11 = tmp(4610);
                    }
                    if (cResult[19] === tmp24) {
                      if (cResult[20] === tmp25) {
                        if (cResult[21] === DARK) {
                          let tmp34 = cResult[22];
                        }
                        return tmp34;
                      }
                    }
                    const obj3 = { theme: DARK, primaryColor: tmp24, secondaryColor: tmp25 };
                    cResult[19] = tmp24;
                    cResult[20] = tmp25;
                    cResult[21] = DARK;
                    cResult[22] = obj3;
                    tmp34 = obj3;
                  }
                }
              }
            }
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
          first = tmp(1096).hex2int(tmp20);
          const tmpResult12 = tmp(1096);
        }
        let hex2intResult;
        if (previewThemeColors != null) {
          hex2intResult = previewThemeColors[1];
        }
        if (hex2intResult == null) {
          hex2intResult = tmp(1096).hex2int(tmp21);
          const tmpResult13 = tmp(1096);
        }
        let tmp30 = tmp4;
        if (!stateFromStores) {
          tmp30 = tmp4;
          if (!forceUserTheme) {
            let profileTheme = tmp(8503).getProfileTheme(first);
            if (profileTheme == null) {
              profileTheme = tmp4;
            }
            tmp30 = profileTheme;
            const tmpResult14 = tmp(8503);
          }
        }
        cResult[9] = tmp4;
        cResult[10] = displayProfile;
        cResult[11] = forceUserTheme;
        cResult[12] = pendingThemeColors;
        cResult[13] = tmp20;
        cResult[14] = tmp21;
        cResult[15] = stateFromStores;
        cResult[16] = first;
        cResult[17] = hex2intResult;
        cResult[18] = tmp30;
        tmp26 = tmp30;
        tmp25 = hex2intResult;
        tmp24 = first;
      }
      const tmp19 = _slicedToArray(tmp(8406).useAvatarColors(tmp11, tmp16, false), 2);
    }
  }
  let tmp12 = pendingAvatarSrc;
  if (pendingAvatarSrc == null) {
    let avatarURL;
    if (user != null) {
      let guildId1;
      if (displayProfile != null) {
        guildId1 = displayProfile.guildId;
      }
      avatarURL = user.getAvatarURL(guildId1, 80);
    }
    tmp12 = avatarURL;
  }
  let guildId2;
  if (displayProfile != null) {
    guildId2 = displayProfile.guildId;
  }
  cResult[2] = guildId2;
  cResult[3] = pendingAvatarSrc;
  cResult[4] = user;
  cResult[5] = tmp12;
  tmp11 = tmp12;
}) : ((arg0) => {
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
      first = tmp4(1096).hex2int(tmp10);
      const tmp4Result8 = tmp4(1096);
    }
    let hex2intResult;
    if (previewThemeColors != null) {
      hex2intResult = previewThemeColors[1];
    }
    if (hex2intResult == null) {
      hex2intResult = tmp4(1096).hex2int(tmp11);
      const tmp4Result9 = tmp4(1096);
    }
    let tmp16 = tmp2;
    if (!stateFromStores) {
      tmp16 = tmp2;
      if (!forceUserTheme) {
        let profileTheme = tmp4(8503).getProfileTheme(first);
        if (profileTheme == null) {
          profileTheme = tmp2;
        }
        tmp16 = profileTheme;
        const tmp4Result10 = tmp4(8503);
      }
    }
    if (tmp16 !== ThemeTypes.ASH) {
      let isThemeLightResult = tmp16 === tmp18.ASH;
      if (isThemeLightResult) {
        isThemeLightResult = tmp4(4610).isThemeLight(tmp2);
        const tmp4Result11 = tmp4(4610);
      }
      let DARK = tmp16;
      if (isThemeLightResult) {
        DARK = tmp18.DARK;
      }
    } else {
      DARK = tmp2;
      const tmp4Result12 = tmp4(4610);
    }
    const obj3 = { theme: DARK, primaryColor: first, secondaryColor: hex2intResult };
    return obj3;
  }
  const tmp4Result7 = useAvatarColor;
});
