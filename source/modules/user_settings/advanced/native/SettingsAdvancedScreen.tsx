// Module ID: 15452
// Function ID: 15453
// Dependencies: [19, 7906, 673, 21, 1233, 11400, 14614, 2]

// Module 15452
import _modDef14614 from "module_14614" /* 14614 */;
import importAllResult from "noop" /* 19 */;
import { MobileUserSettings } from "MobileUserSettings" /* 7906 */;
import { MarketingURLs } from "ME" /* 673 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let c3 = importAllResult;
const memoResult = importAllResult.memo(() => {
  const node = importAllResult.useMemo(() => {
    let obj = callback(11400);
    obj = { sections: null };
    obj = { label: null, settings: null, subLabel: null };
    const intl = callback(1233).intl;
    obj[0] = intl.string(callback(1233).t["+U02+i"]);
    const items = [constants.DEVELOPER_MODE];
    obj[1] = items;
    const intl2 = callback(1233).intl;
    obj[2] = intl2.format(callback(1233).t["CY6q/Q"], { apiDocsUrl: constants2.API_DOCS });
    const items1 = [obj, , , ];
    const obj2 = { settings: items2, subLabel: null };
    items2 = [constants.LAUNCHPAD];
    const intl3 = callback(1233).intl;
    obj2[1] = intl3.string(callback(1233).t.gI2GEL);
    items1[1] = obj2;
    const items3 = [constants.CHANNEL_LIST_LAYOUT];
    items1[2] = { settings: items3 };
    const obj3 = { label: null, settings: null };
    const intl4 = callback(1233).intl;
    obj3[0] = intl4.string(callback(1233).t["jnXV/V"]);
    const items4 = [constants.ICYMI_TAB];
    obj3[1] = items4;
    items1[3] = obj3;
    obj[0] = items1;
    return obj.createList(obj);
  }, []);
  return jsx(_modDef14614, { node });
});
const result = require("set").fileFinishedImporting("modules/user_settings/advanced/native/SettingsAdvancedScreen.tsx");

export default memoResult;
