// Module ID: 15844
// Function ID: 15845
// Dependencies: [19, 21, 11400, 15842, 14614, 2]

// Module 15844
import _modDef14614 from "module_14614" /* 14614 */;
import importAllResult from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let c3 = importAllResult;
const memoResult = importAllResult.memo(() => {
  const node = importAllResult.useMemo(() => {
    let obj = callback(11400);
    obj = { sections: null };
    const items = [callback(15842).buildCategorySocialSettingsSection()];
    obj[0] = items;
    return obj.createList(obj);
  }, []);
  return jsx(_modDef14614, { node });
});
const result = require("set").fileFinishedImporting("modules/notifications/settings/native/routes/RedesignSettingsCategorySocialScreen.tsx");

export default memoResult;
