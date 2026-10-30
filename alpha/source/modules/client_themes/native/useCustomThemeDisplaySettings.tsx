// Module ID: 5247
// Function ID: 5248
// Name: useCustomThemeDisplaySettings
// Dependencies: [32, 1239, 504, 1240, 2]
// Exports: useCustomThemeDisplaySettings

// Module 5247 (useCustomThemeDisplaySettings)
import get_initialized from "get initialized" /* 504 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import CustomThemeMobileStore from "CustomThemeMobileStore" /* 1239 */;
import size from "module_2" /* 2 */;

let tmp;
const ClientThemesUtils = tmp(1240);
const result = size.fileFinishedImporting("modules/client_themes/native/useCustomThemeDisplaySettings.tsx");

export function useCustomThemeDisplaySettings(stateFromStores) {
  let tmp4;
  let tmp5;
  let tmp6;
  let tmpResult;
  const f86957 = () => {
    const items = [CustomThemeMobileStore.getCustomTheme(), CustomThemeMobileStore.getBaseTheme(), CustomThemeMobileStore.getPreviewTheme()];
    return items;
  };
  let items = [CustomThemeMobileStore];
  const obj = get_initialized;
  [tmp4, tmp5, tmp6] = obj.useStateFromStoresArray(items, f86957);
  _slicedToArray(obj.useStateFromStoresArray(items, f86957), 3);
  if (undefined !== tmp6) {
    return tmp6;
  } else {
    if (undefined !== tmp4) {
      if (undefined !== tmp5) {
        return { baseTheme: tmp5, customTheme: tmp4 };
      }
    }
    if (null != stateFromStores) {
      const obj4 = { colors: null, gradientAngle: null, baseMix: null, gradientColorStops: [] };
      ({ colors: obj2.colors, gradient_angle: obj2.gradientAngle, base_mix: obj2.baseMix } = stateFromStores);
      const obj5 = { baseTheme: tmpResult.getCustomThemeBaseTheme(stateFromStores.base_theme), customTheme: obj4 };
      tmpResult = ClientThemesUtils;
      return obj5;
    }
  }
}
