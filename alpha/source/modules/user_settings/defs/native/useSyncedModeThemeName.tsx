// Module ID: 15124
// Function ID: 15125
// Name: useSyncedModeThemeName
// Dependencies: [1193, 1240, 558, 576, 1239, 1126, 2723, 504, 2]

// Module 15124 (useSyncedModeThemeName)
import ClientThemesUtils from "ClientThemesUtils" /* 1239 */;
import ClientThemesConstants from "ClientThemesConstants" /* 1240 */;
import _modDef2723 from "module_2723" /* 2723 */;
import ThemeStore from "ThemeStore" /* 1193 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let tmp2;
const intl2 = tmp2(1126);
let closure_4 = ClientThemesConstants.BACKGROUND_GRADIENT_PRESETS_MAP;
tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp6;
  _require = arg0;
  let tmp2 = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(3);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ThemeStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      let stringResult;
      const syncedClientTheme = ThemeStore.getSyncedClientTheme(closure_0);
      const obj = ClientThemesUtils;
      const themeName = obj.getThemeName(ThemeStore.themePreferenceForSystemTheme(closure_0));
      let prop;
      if (syncedClientTheme != null) {
        prop = syncedClientTheme.customUserThemeSettings;
      }
      if (null != prop) {
        const intl = intl2.intl;
        stringResult = intl.string(_modDef2723.yl1iMm);
      } else {
        let prop1;
        if (syncedClientTheme != null) {
          prop1 = syncedClientTheme.backgroundGradientPresetId;
        }
        stringResult = themeName;
        if (null != prop1) {
          let name;
          if (closure_4[syncedClientTheme.backgroundGradientPresetId] != null) {
            const getName = tmp9.getName;
            if (getName != null) {
              name = getName();
            }
          }
          if (name == null) {
            name = themeName;
          }
          stringResult = name;
        }
      }
      return stringResult;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp6);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [ThemeStore];
  return obj.useStateFromStores(items, () => {
    let stringResult;
    const syncedClientTheme = ThemeStore.getSyncedClientTheme(closure_0);
    const obj = ClientThemesUtils;
    const themeName = obj.getThemeName(ThemeStore.themePreferenceForSystemTheme(closure_0));
    let prop;
    if (syncedClientTheme != null) {
      prop = syncedClientTheme.customUserThemeSettings;
    }
    if (null != prop) {
      const intl = intl2.intl;
      stringResult = intl.string(_modDef2723.yl1iMm);
    } else {
      let prop1;
      if (syncedClientTheme != null) {
        prop1 = syncedClientTheme.backgroundGradientPresetId;
      }
      stringResult = themeName;
      if (null != prop1) {
        let name;
        if (closure_4[syncedClientTheme.backgroundGradientPresetId] != null) {
          const getName = tmp9.getName;
          if (getName != null) {
            name = getName();
          }
        }
        if (name == null) {
          name = themeName;
        }
        stringResult = name;
      }
    }
    return stringResult;
  });
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/useSyncedModeThemeName.tsx");

export const useSyncedModeThemeName = tmp2;
