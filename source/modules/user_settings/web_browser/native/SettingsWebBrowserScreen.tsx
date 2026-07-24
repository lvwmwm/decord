// Module ID: 14359
// Function ID: 109909
// Dependencies: [31, 7751, 33, 10127, 13601, 2]

// Module 14359
import importAllResult from "result";
import { MobileSetting } from "MobileSetting";
import { jsx } from "jsxProd";

const require = arg1;
const memoResult = importAllResult.memo(function SettingsWebBrowserScreen() {
  const node = importAllResult.useMemo(() => {
    const items = [outer1_4.SELECT_WEB_BROWSER];
    const sections = [{ settings: items }];
    return outer1_0(outer1_2[3]).createList({ sections });
  }, []);
  return jsx(importDefault(13601), { node });
});
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/web_browser/native/SettingsWebBrowserScreen.tsx");

export default memoResult;
