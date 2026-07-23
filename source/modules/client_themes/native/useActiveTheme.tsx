// Module ID: 8831
// Function ID: 69611
// Name: useActiveThemeType
// Dependencies: [1280, 3942, 1322, 1281, 566, 3980, 2]
// Exports: useIsClientThemeOrCustomThemeActive, useIsCustomThemeActive

// Module 8831 (useActiveThemeType)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import SystemThemeState from "SystemThemeState";

let closure_6;
let closure_7;
const require = arg1;
function useActiveThemeType() {
  const items = [closure_5];
  const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => outer1_5.hasCustomTheme());
  const obj = require(566) /* initialize */;
  const items1 = [closure_4];
  const stateFromStores1 = require(566) /* initialize */.useStateFromStores(items1, () => null != outer1_4.gradientPreset);
  const tmp3 = importDefault(3980)();
  const obj2 = require(566) /* initialize */;
  const items2 = [_isNativeReflectConstruct];
  let type;
  const stateFromStores2 = require(566) /* initialize */.useStateFromStores(items2, () => outer1_3.useSystemTheme);
  if (null != tmp3) {
    type = tmp3.type;
  }
  if ("custom" === type) {
    let DEFAULT = constants2.CUSTOM;
  } else {
    let type1;
    if (null != tmp3) {
      type1 = tmp3.type;
    }
    if ("preset" === type1) {
      DEFAULT = constants2.CLIENT;
    } else if (stateFromStores) {
      DEFAULT = constants2.CUSTOM;
    } else if (stateFromStores1) {
      DEFAULT = constants2.CLIENT;
    } else if (stateFromStores2 === constants.ON) {
      DEFAULT = constants2.SYSTEM;
    } else {
      DEFAULT = constants2.DEFAULT;
    }
  }
  return DEFAULT;
}
({ SystemThemeState: closure_6, ActiveThemeType: closure_7 } = SystemThemeState);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/client_themes/native/useActiveTheme.tsx");

export const useIsCustomThemeActive = function useIsCustomThemeActive() {
  return useActiveThemeType() === constants2.CUSTOM;
};
export const useIsClientThemeOrCustomThemeActive = function useIsClientThemeOrCustomThemeActive() {
  const tmp = useActiveThemeType();
  let tmp2 = tmp === constants2.CLIENT;
  if (!tmp2) {
    tmp2 = tmp === constants2.CUSTOM;
  }
  return tmp2;
};
export { useActiveThemeType };
