// Module ID: 15133
// Function ID: 15134
// Name: useGuildThemeNuxTrigger
// Dependencies: [19, 3882, 589, 15134, 15134, 1959, 4157, 15139, 2]
// Exports: default

// Module 15133 (useGuildThemeNuxTrigger)
import noop from "noop";
import setContent from "setContent";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/guild_themes/native/useGuildThemeNuxTrigger.tsx");

export default function useGuildThemeNuxTrigger(arg0) {
  const items = [setContent];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => {
    key = key.getKey();
    return key === callback(paths[3]).GUILD_THEME_NUX_ACTION_SHEET_KEY;
  });
  const callback = React.useCallback((arg0) => {
    const tmp = callback(paths[5])(paths[4], paths.paths);
    callback2(paths[6]).openLazy(tmp, callback(paths[3]).GUILD_THEME_NUX_ACTION_SHEET_KEY, arg0, "stack");
    return tmp;
  }, []);
  importDefault(15139)(arg0, { isNuxOpen: stateFromStores, openNux: callback });
};
