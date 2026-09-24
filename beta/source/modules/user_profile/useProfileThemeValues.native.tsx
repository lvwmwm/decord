// Module ID: 7463
// Function ID: 7464
// Name: useProfileThemeValues
// Dependencies: [19, 4782, 558, 568, 565, 580, 579, 2]

// Module 7463 (useProfileThemeValues)
import _mod19 from "module_19" /* 19 */;
import useStateFromStores from "useStateFromStores" /* 565 */;
import c from "c" /* 568 */;
import shims from "shims" /* 579 */;
import nativeDefault from "native" /* 580 */;
import AccessibilityStore from "AccessibilityStore" /* 4782 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const useMemo = _mod19.useMemo;
const result = size.fileFinishedImporting("modules/user_profile/useProfileThemeValues.native.tsx");

export const useProfileThemeValues = ReactCompilerGating.isReactCompilerEnabled() ? ((theme) => {
  const cResult = c.c(15);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function n() {
      return saturation.saturation;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = useStateFromStores.useStateFromStores(tmp4, tmp5);
  if (null == theme) {
    return null;
  } else {
    if (cResult[2] === theme) {
      if (cResult[3] === stateFromStores) {
        let tmp8 = cResult[4];
        let tmp9 = cResult[5];
        let tmp10 = cResult[6];
        let tmp11 = cResult[7];
        let tmp12 = cResult[8];
      }
      if (cResult[9] === tmp8) {
        if (cResult[10] === tmp9) {
          if (cResult[11] === tmp10) {
            if (cResult[12] === tmp11) {
            }
          }
        }
      }
      const obj2 = { overlaySyncedWithUserTheme: tmp8, overlay: tmp9, sectionBox: tmp10, dividerOpacity: tmp11, rolePillBackgroundColor: tmp12 };
      cResult[9] = tmp8;
      cResult[10] = tmp9;
      cResult[11] = tmp10;
      cResult[12] = tmp11;
      cResult[13] = tmp12;
      cResult[14] = obj2;
    }
    const obj3 = { theme, saturation: stateFromStores };
    const internal = nativeDefault.internal;
    const semanticColor = internal.resolveSemanticColor(theme, nativeDefault.colors.PROFILE_GRADIENT_OVERLAY_SYNCED_WITH_USER_THEME, obj3);
    const internal2 = nativeDefault.internal;
    const semanticColor1 = internal2.resolveSemanticColor(theme, nativeDefault.colors.PROFILE_GRADIENT_OVERLAY, obj3);
    if (theme === tmpResult3.getThemes().LIGHT) {
      let OPACITY_WHITE_24 = tmp13(580).unsafe_rawColors.OPACITY_WHITE_24;
    } else {
      const internal3 = tmp13(580).internal;
      OPACITY_WHITE_24 = internal3.resolveSemanticColor(theme, tmp13(580).colors.BACKGROUND_MOD_SUBTLE, obj3);
    }
    tmpResult3 = tmp(579);
    let num3 = 0.12;
    if (theme === tmpResult4.getThemes().DARK) {
      num3 = 0.24;
    }
    const internal4 = tmp13(580).internal;
    const semanticColor2 = internal4.resolveSemanticColor(theme, tmp13(580).colors.PROFILE_GRADIENT_ROLE_PILL_BACKGROUND, obj3);
    cResult[2] = theme;
    cResult[3] = stateFromStores;
    cResult[4] = semanticColor;
    cResult[5] = semanticColor1;
    cResult[6] = OPACITY_WHITE_24;
    cResult[7] = num3;
    cResult[8] = semanticColor2;
    tmp11 = num3;
    tmp12 = semanticColor2;
    tmp10 = OPACITY_WHITE_24;
    tmp9 = semanticColor1;
    tmp8 = semanticColor;
    tmpResult4 = tmp(579);
  }
}) : ((arg0) => {
  _require = arg0;
  const items = [AccessibilityStore];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => saturation.saturation);
  const items1 = [arg0, stateFromStores];
  return useMemo(() => {
    if (null == closure_0) {
      return null;
    } else {
      const obj = { theme: tmp, saturation: stateFromStores };
      const obj2 = { overlaySyncedWithUserTheme: null, overlay: null, sectionBox: null, dividerOpacity: null, rolePillBackgroundColor: null };
      const internal3 = nativeDefault.internal;
      obj2.overlaySyncedWithUserTheme = internal3.resolveSemanticColor(tmp, nativeDefault.colors.PROFILE_GRADIENT_OVERLAY_SYNCED_WITH_USER_THEME, obj);
      const internal4 = nativeDefault.internal;
      obj2.overlay = internal4.resolveSemanticColor(tmp, nativeDefault.colors.PROFILE_GRADIENT_OVERLAY, obj);
      if (tmp === obj4.getThemes().LIGHT) {
        let OPACITY_WHITE_24 = tmp3(580).unsafe_rawColors.OPACITY_WHITE_24;
      } else {
        const internal = tmp3(580).internal;
        OPACITY_WHITE_24 = internal.resolveSemanticColor(tmp, tmp3(580).colors.BACKGROUND_MOD_SUBTLE, obj);
      }
      obj2.sectionBox = OPACITY_WHITE_24;
      obj4 = shims;
      let num = 0.12;
      if (tmp === tmp5Result.getThemes().DARK) {
        num = 0.24;
      }
      obj2.dividerOpacity = num;
      const internal2 = tmp3(580).internal;
      obj2.rolePillBackgroundColor = internal2.resolveSemanticColor(tmp, nativeDefault.colors.PROFILE_GRADIENT_ROLE_PILL_BACKGROUND, obj);
      return obj2;
    }
  }, items1);
});
