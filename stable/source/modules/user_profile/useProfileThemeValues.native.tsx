// Module ID: 7287
// Function ID: 7288
// Name: useProfileThemeValues
// Dependencies: [19, 4628, 563, 576, 575, 2]
// Exports: useProfileThemeValues

// Module 7287 (useProfileThemeValues)
import _mod19 from "module_19" /* 19 */;
import shims from "shims" /* 575 */;
import nativeDefault from "native" /* 576 */;
import AccessibilityStore from "AccessibilityStore" /* 4628 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const useMemo = _mod19.useMemo;
const result = size.fileFinishedImporting("modules/user_profile/useProfileThemeValues.native.tsx");

export const useProfileThemeValues = function useProfileThemeValues(theme) {
  _require = theme;
  const items = [AccessibilityStore];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => saturation.saturation);
  const items1 = [theme, stateFromStores];
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
        let OPACITY_WHITE_24 = tmp3(576).unsafe_rawColors.OPACITY_WHITE_24;
      } else {
        const internal = tmp3(576).internal;
        OPACITY_WHITE_24 = internal.resolveSemanticColor(tmp, tmp3(576).colors.BACKGROUND_MOD_SUBTLE, obj);
      }
      obj2.sectionBox = OPACITY_WHITE_24;
      obj4 = shims;
      let num = 0.12;
      if (tmp === tmp5Result.getThemes().DARK) {
        num = 0.24;
      }
      obj2.dividerOpacity = num;
      const internal2 = tmp3(576).internal;
      obj2.rolePillBackgroundColor = internal2.resolveSemanticColor(tmp, nativeDefault.colors.PROFILE_GRADIENT_ROLE_PILL_BACKGROUND, obj);
      return obj2;
    }
  }, items1);
};
