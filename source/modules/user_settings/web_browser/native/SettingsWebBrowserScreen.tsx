// Module ID: 14177
// Function ID: 107332
// Dependencies: []

// Module 14177
const importAllResult = importAll(dependencyMap[0]);
const MobileSetting = arg1(dependencyMap[1]).MobileSetting;
const jsx = arg1(dependencyMap[2]).jsx;
const memoResult = importAllResult.memo(function SettingsWebBrowserScreen() {
  const node = importAllResult.useMemo(() => {
    const items = [constants.SELECT_WEB_BROWSER];
    const sections = [{ settings: items }];
    return callback(closure_2[3]).createList({ sections });
  }, []);
  return jsx(importDefault(dependencyMap[4]), { node });
});
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/user_settings/web_browser/native/SettingsWebBrowserScreen.tsx");

export default memoResult;
