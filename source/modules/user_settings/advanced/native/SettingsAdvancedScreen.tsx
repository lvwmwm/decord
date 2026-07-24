// Module ID: 14413
// Function ID: 110150
// Dependencies: [31, 7751, 653, 33, 1212, 10127, 13601, 2]

// Module 14413
import importAllResult from "result";
import { MobileSetting } from "MobileSetting";
import { MarketingURLs } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
const memoResult = importAllResult.memo(() => {
  const node = importAllResult.useMemo(() => {
    let obj = outer1_0(outer1_2[5]);
    obj = {};
    obj = {};
    const intl = outer1_0(outer1_2[4]).intl;
    obj.label = intl.string(outer1_0(outer1_2[4]).t["+U02+i"]);
    const items = [outer1_4.DEVELOPER_MODE];
    obj.settings = items;
    const intl2 = outer1_0(outer1_2[4]).intl;
    obj.subLabel = intl2.format(outer1_0(outer1_2[4]).t["CY6q/Q"], { apiDocsUrl: outer1_5.API_DOCS });
    const items1 = [obj, , , ];
    const obj2 = { settings: items2 };
    items2 = [outer1_4.LAUNCHPAD];
    const intl3 = outer1_0(outer1_2[4]).intl;
    obj2.subLabel = intl3.string(outer1_0(outer1_2[4]).t.gI2GEL);
    items1[1] = obj2;
    const items3 = [outer1_4.CHANNEL_LIST_LAYOUT];
    items1[2] = { settings: items3 };
    const obj3 = {};
    const intl4 = outer1_0(outer1_2[4]).intl;
    obj3.label = intl4.string(outer1_0(outer1_2[4]).t["jnXV/V"]);
    const items4 = [outer1_4.ICYMI_TAB];
    obj3.settings = items4;
    items1[3] = obj3;
    obj.sections = items1;
    return obj.createList(obj);
  }, []);
  return jsx(importDefault(13601), { node });
});
const result = require("ME").fileFinishedImporting("modules/user_settings/advanced/native/SettingsAdvancedScreen.tsx");

export default memoResult;
