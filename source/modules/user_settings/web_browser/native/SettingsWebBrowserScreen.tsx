// Module ID: 14370
// Function ID: 110036
// Dependencies: [31, 7697, 33, 10059, 13612, 2]

// Module 14370
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
  return jsx(importDefault(13612), { node });
});
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/web_browser/native/SettingsWebBrowserScreen.tsx");

export default memoResult;
