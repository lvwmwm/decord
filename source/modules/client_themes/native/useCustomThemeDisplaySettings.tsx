// Module ID: 4063
// Function ID: 33859
// Name: useCustomThemeDisplaySettings
// Dependencies: []
// Exports: useCustomThemeDisplaySettings

// Module 4063 (useCustomThemeDisplaySettings)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/client_themes/native/useCustomThemeDisplaySettings.tsx");

export const useCustomThemeDisplaySettings = function useCustomThemeDisplaySettings(base_theme) {
  let obj = arg1(dependencyMap[2]);
  const items = [closure_3];
  const tmp = callback(obj.useStateFromStoresArray(items, () => {
    const items = [store.getCustomTheme(), store.getBaseTheme(), store.getPreviewTheme()];
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
