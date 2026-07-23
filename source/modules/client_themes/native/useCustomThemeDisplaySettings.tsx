// Module ID: 4065
// Function ID: 33868
// Name: useCustomThemeDisplaySettings
// Dependencies: [57, 1322, 566, 2]
// Exports: useCustomThemeDisplaySettings

// Module 4065 (useCustomThemeDisplaySettings)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/client_themes/native/useCustomThemeDisplaySettings.tsx");

export const useCustomThemeDisplaySettings = function useCustomThemeDisplaySettings(base_theme) {
  let obj = require(566) /* initialize */;
  let items = [_isNativeReflectConstruct];
  const tmp = callback(obj.useStateFromStoresArray(items, () => {
    const items = [outer1_3.getCustomTheme(), outer1_3.getBaseTheme(), outer1_3.getPreviewTheme()];
    return items;
  }), 3);
  const first = tmp[0];
  if (undefined !== tmp[2]) {
    return tmp4;
  } else {
    if (undefined !== first) {
      if (undefined !== tmp3) {
        obj = { baseTheme: tmp3, customTheme: first };
        return obj;
      }
    }
    if (null != base_theme) {
      obj = {};
      ({ colors: obj2.colors, gradient_angle: obj2.gradientAngle, base_mix: obj2.baseMix } = base_theme);
      obj.gradientColorStops = [];
      const obj1 = { baseTheme: base_theme.base_theme, customTheme: obj };
      return obj1;
    }
  }
};
