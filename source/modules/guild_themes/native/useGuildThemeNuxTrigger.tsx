// Module ID: 15281
// Function ID: 15282
// Name: useGuildThemeNuxTrigger
// Dependencies: [19, 3994, 589, 15282, 15282, 1988, 4271, 15287, 2]
// Exports: default

// Module 15281 (useGuildThemeNuxTrigger)
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
  importDefault(15287)(arg0, { isNuxOpen: stateFromStores, openNux: callback });
};
