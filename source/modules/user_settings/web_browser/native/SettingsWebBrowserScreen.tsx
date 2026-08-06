// Module ID: 14575
// Function ID: 14576
// Dependencies: [19, 8005, 21, 10364, 13802, 2]

// Module 14575
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
  return jsx(importDefault(13802), { node });
});
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/web_browser/native/SettingsWebBrowserScreen.tsx");

export default memoResult;
