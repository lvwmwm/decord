// Module ID: 5484
// Function ID: 46790
// Name: useProfileThemeValues
// Dependencies: []
// Exports: useProfileThemeValues

// Module 5484 (useProfileThemeValues)
const useMemo = require(dependencyMap[0]).useMemo;
let closure_4 = importDefault(dependencyMap[1]);
const _module = require(dependencyMap[6]);
const result = _module.fileFinishedImporting("modules/user_profile/useProfileThemeValues.native.tsx");

export const useProfileThemeValues = function useProfileThemeValues(theme) {
  const require = theme;
  const items = [closure_4];
  const stateFromStores = require(dependencyMap[2]).useStateFromStores(items, () => saturation.saturation);
  const importDefault = stateFromStores;
  const tmp2 = importDefault(dependencyMap[3])("useProfileThemeValues");
  const dependencyMap = tmp2;
  const items1 = [theme, stateFromStores, tmp2];
  return useMemo(() => {
    if (null == arg0) {
      return null;
    } else {
      let obj = { theme: arg0, saturation: stateFromStores };
      obj = {};
      const internal3 = stateFromStores(tmp2[4]).internal;
      obj.overlaySyncedWithUserTheme = internal3.resolveSemanticColor(arg0, stateFromStores(tmp2[4]).colors.PROFILE_GRADIENT_OVERLAY_SYNCED_WITH_USER_THEME, obj);
      const internal4 = stateFromStores(tmp2[4]).internal;
      obj.overlay = internal4.resolveSemanticColor(arg0, stateFromStores(tmp2[4]).colors.PROFILE_GRADIENT_OVERLAY, obj);
      if (arg0 === obj4.getThemes().LIGHT) {
        let OPACITY_WHITE_24 = stateFromStores(tmp2[4]).unsafe_rawColors.OPACITY_WHITE_24;
      } else {
        const internal = stateFromStores(tmp2[4]).internal;
        const colors = stateFromStores(tmp2[4]).colors;
        OPACITY_WHITE_24 = internal.resolveSemanticColor(arg0, tmp2 ? colors.BACKGROUND_MOD_SUBTLE : colors.BACKGROUND_MOD_NORMAL, obj);
        const tmp3 = arg0;
      }
      obj.sectionBox = OPACITY_WHITE_24;
      obj = arg0(tmp2[5]);
      let num = 0.12;
      if (arg0 === obj.getThemes().DARK) {
        num = 0.24;
      }
      obj.dividerOpacity = num;
      const internal2 = stateFromStores(tmp2[4]).internal;
      obj.rolePillBackgroundColor = internal2.resolveSemanticColor(arg0, stateFromStores(tmp2[4]).colors.PROFILE_GRADIENT_ROLE_PILL_BACKGROUND, obj);
      return obj;
    }
  }, items1);
};
