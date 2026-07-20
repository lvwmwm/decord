// Module ID: 14857
// Function ID: 111944
// Name: useGuildThemeNuxTrigger
// Dependencies: [0, 0, 4294967295, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 14857 (useGuildThemeNuxTrigger)
import closure_3 from "result";
import closure_4 from "result";
import result from "result";

result = result.fileFinishedImporting("modules/guild_themes/native/useGuildThemeNuxTrigger.tsx");

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
