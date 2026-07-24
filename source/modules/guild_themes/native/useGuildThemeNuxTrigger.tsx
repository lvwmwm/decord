// Module ID: 15038
// Function ID: 114534
// Name: useGuildThemeNuxTrigger
// Dependencies: [31, 3823, 566, 15039, 15039, 1934, 4098, 15044, 2]
// Exports: default

// Module 15038 (useGuildThemeNuxTrigger)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/guild_themes/native/useGuildThemeNuxTrigger.tsx");

export default function useGuildThemeNuxTrigger(arg0) {
  const items = [_isNativeReflectConstruct];
  const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => outer1_4.getKey() === outer1_0(outer1_2[3]).GUILD_THEME_NUX_ACTION_SHEET_KEY);
  const callback = React.useCallback((arg0) => {
    const tmp = outer1_0(outer1_2[5])(outer1_2[4], outer1_2.paths);
    outer1_1(outer1_2[6]).openLazy(tmp, outer1_0(outer1_2[3]).GUILD_THEME_NUX_ACTION_SHEET_KEY, arg0, "stack");
    return tmp;
  }, []);
  importDefault(15044)(arg0, { isNuxOpen: stateFromStores, openNux: callback });
};
