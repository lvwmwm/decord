// Module ID: 5484
// Function ID: 46826
// Name: useProfileThemeValues
// Dependencies: [31, 4122, 624, 1324, 689, 688, 2]
// Exports: useProfileThemeValues

// Module 5484 (useProfileThemeValues)
import { useMemo } from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const result = require("defaultAreStatesEqual").fileFinishedImporting("modules/user_profile/useProfileThemeValues.native.tsx");

export const useProfileThemeValues = function useProfileThemeValues(theme) {
  const _require = theme;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = _require(624).useStateFromStores(items, () => outer1_4.saturation);
  const tmp2 = stateFromStores(1324)("useProfileThemeValues");
  const dependencyMap = tmp2;
  const items1 = [theme, stateFromStores, tmp2];
  return useMemo(() => {
    if (null == theme) {
      return null;
    } else {
      let obj = { theme, saturation: stateFromStores };
      obj = {};
      const internal3 = stateFromStores(tmp2[4]).internal;
      obj.overlaySyncedWithUserTheme = internal3.resolveSemanticColor(theme, stateFromStores(tmp2[4]).colors.PROFILE_GRADIENT_OVERLAY_SYNCED_WITH_USER_THEME, obj);
      const internal4 = stateFromStores(tmp2[4]).internal;
      obj.overlay = internal4.resolveSemanticColor(theme, stateFromStores(tmp2[4]).colors.PROFILE_GRADIENT_OVERLAY, obj);
      if (theme === obj4.getThemes().LIGHT) {
        let OPACITY_WHITE_24 = stateFromStores(tmp2[4]).unsafe_rawColors.OPACITY_WHITE_24;
      } else {
        const internal = stateFromStores(tmp2[4]).internal;
        const colors = stateFromStores(tmp2[4]).colors;
        OPACITY_WHITE_24 = internal.resolveSemanticColor(theme, tmp2 ? colors.BACKGROUND_MOD_SUBTLE : colors.BACKGROUND_MOD_NORMAL, obj);
        const tmp3 = theme;
      }
      obj.sectionBox = OPACITY_WHITE_24;
      obj = theme(tmp2[5]);
      let num = 0.12;
      if (theme === obj.getThemes().DARK) {
        num = 0.24;
      }
      obj.dividerOpacity = num;
      const internal2 = stateFromStores(tmp2[4]).internal;
      obj.rolePillBackgroundColor = internal2.resolveSemanticColor(theme, stateFromStores(tmp2[4]).colors.PROFILE_GRADIENT_ROLE_PILL_BACKGROUND, obj);
      return obj;
    }
  }, items1);
};
