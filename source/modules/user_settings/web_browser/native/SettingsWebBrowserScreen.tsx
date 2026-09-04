// Module ID: 15401
// Function ID: 15402
// Dependencies: [19, 7906, 21, 11400, 14614, 2]

// Module 15401
import _modDef14614 from "module_14614" /* 14614 */;
import importAllResult from "noop" /* 19 */;
import { MobileUserSettings } from "MobileUserSettings" /* 7906 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let c3 = importAllResult;
const memoResult = importAllResult.memo(function SettingsWebBrowserScreen() {
  const node = importAllResult.useMemo(() => {
    const items = [constants.SELECT_WEB_BROWSER];
    const sections = [{ settings: items }];
    return callback(table[3]).createList({ sections });
  }, []);
  return jsx(_modDef14614, { node });
});
const result = require("set").fileFinishedImporting("modules/user_settings/web_browser/native/SettingsWebBrowserScreen.tsx");

export default memoResult;
