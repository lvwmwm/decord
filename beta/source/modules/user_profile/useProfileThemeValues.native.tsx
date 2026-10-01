// Module ID: 6605
// Function ID: 6606
// Name: useProfileThemeValues
// Dependencies: [19, 4825, 563, 576, 575, 2]
// Exports: useProfileThemeValues

// Module 6605 (useProfileThemeValues)
import react from "react" /* 19 */;
import shims from "shims" /* 575 */;
import nativeDefault from "native" /* 576 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const useMemo = react.useMemo;
const result = size.fileFinishedImporting("modules/user_profile/useProfileThemeValues.native.tsx");

export const useProfileThemeValues = function useProfileThemeValues(theme) {
  let saturation;
  _require = theme;
  let obj = require("useStateFromStores");
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => saturation.saturation);
  const items1 = [theme, stateFromStores];
  return useMemo(() => {
    let OPACITY_WHITE_24;
    let internal2;
    let internal3;
    let internal4;
    let num;
    if (null == theme) {
      return null;
    } else {
      const obj = { theme, saturation: stateFromStores };
      const obj2 = { overlaySyncedWithUserTheme: internal3.resolveSemanticColor(theme, nativeDefault.colors.PROFILE_GRADIENT_OVERLAY_SYNCED_WITH_USER_THEME, obj), overlay: internal4.resolveSemanticColor(theme, nativeDefault.colors.PROFILE_GRADIENT_OVERLAY, obj), sectionBox: OPACITY_WHITE_24, dividerOpacity: num, rolePillBackgroundColor: internal2.resolveSemanticColor(theme, nativeDefault.colors.PROFILE_GRADIENT_ROLE_PILL_BACKGROUND, obj) };
      internal3 = nativeDefault.internal;
      internal4 = nativeDefault.internal;
      const obj4 = shims;
      const tmp5 = require;
      if (theme === obj4.getThemes().LIGHT) {
        OPACITY_WHITE_24 = tmp3(576).unsafe_rawColors.OPACITY_WHITE_24;
      } else {
        const internal = tmp3(576).internal;
        OPACITY_WHITE_24 = internal.resolveSemanticColor(tmp, tmp3(576).colors.BACKGROUND_MOD_SUBTLE, obj);
      }
      num = 0.12;
      const tmp5Result = tmp5(575);
      if (theme === tmp5Result.getThemes().DARK) {
        num = 0.24;
      }
      internal2 = tmp3(576).internal;
      return obj2;
    }
  }, items1);
};
