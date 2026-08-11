// Module ID: 14673
// Function ID: 14674
// Dependencies: [19, 8084, 21, 10452, 13895, 2]

// Module 14673
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
  return jsx(importDefault(13895), { node });
});
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/web_browser/native/SettingsWebBrowserScreen.tsx");

export default memoResult;
