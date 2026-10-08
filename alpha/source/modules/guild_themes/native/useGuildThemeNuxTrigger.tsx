// Module ID: 16383
// Function ID: 16384
// Name: useGuildThemeNuxTrigger
// Dependencies: [19, 4759, 504, 16384, 16384, 1999, 5054, 16389, 2]
// Exports: default

// Module 16383 (useGuildThemeNuxTrigger)
import get_initialized from "get initialized" /* 504 */;
import useGuildThemeNuxTriggerDefault from "useGuildThemeNuxTrigger" /* 16389 */;
import react from "react" /* 19 */;
import ActionSheetStore from "ActionSheetStore" /* 4759 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let key;

const result = size.fileFinishedImporting("modules/guild_themes/native/useGuildThemeNuxTrigger.tsx");

export default function useGuildThemeNuxTrigger(arg0) {
  let paths;
  let obj = get_initialized;
  const items = [ActionSheetStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    key = key.getKey();
    return key === require("GuildThemeNuxActionSheet").GUILD_THEME_NUX_ACTION_SHEET_KEY;
  });
  const callback = react.useCallback((arg0) => {
    const tmp = require("asyncRequire")(paths[4], paths.paths);
    const obj = require("ActionSheetActionCreators");
    obj.openLazy(tmp, require("GuildThemeNuxActionSheet").GUILD_THEME_NUX_ACTION_SHEET_KEY, arg0, "stack");
    return tmp;
  }, []);
  useGuildThemeNuxTriggerDefault(arg0, { isNuxOpen: stateFromStores, openNux: callback });
};
