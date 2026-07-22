// Module ID: 14875
// Function ID: 112045
// Name: useGuildThemeNuxTrigger
// Dependencies: [0, 0, 4294967295, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 14875 (useGuildThemeNuxTrigger)
import __exportStarResult1 from "__exportStarResult1";
import closure_4 from "__exportStarResult1";

const result = require("__exportStarResult1").fileFinishedImporting("modules/guild_themes/native/useGuildThemeNuxTrigger.tsx");

export default function useGuildThemeNuxTrigger(arg0) {
  const items = [closure_4];
  const stateFromStores = arg1(dependencyMap[2]).useStateFromStores(items, () => {
    const key = key.getKey();
    return key === callback(closure_2[3]).GUILD_THEME_NUX_ACTION_SHEET_KEY;
  });
  const callback = React.useCallback((arg0) => {
    const tmp = callback(paths[5])(paths[4], paths.paths);
    callback2(paths[6]).openLazy(tmp, callback(paths[3]).GUILD_THEME_NUX_ACTION_SHEET_KEY, arg0, "stack");
    return tmp;
  }, []);
  importDefault(dependencyMap[7])(arg0, { isNuxOpen: stateFromStores, openNux: callback });
};
