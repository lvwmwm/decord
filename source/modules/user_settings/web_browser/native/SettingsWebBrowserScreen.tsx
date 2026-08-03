// Module ID: 14523
// Function ID: 14524
// Dependencies: [19, 7880, 21, 10272, 13760, 2]

// Module 14523
import importAllResult from "noop";
import { MobileSetting } from "MobileSetting";
import { jsx } from "jsxProd";

const require = arg1;
let c3 = importAllResult;
const memoResult = importAllResult.memo(function SettingsWebBrowserScreen() {
  const node = importAllResult.useMemo(() => {
    const items = [constants.SELECT_WEB_BROWSER];
    const sections = [{ settings: items }];
    return callback(table[3]).createList({ sections });
  }, []);
  return jsx(importDefault(13760), { node });
});
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/web_browser/native/SettingsWebBrowserScreen.tsx");

export default memoResult;
