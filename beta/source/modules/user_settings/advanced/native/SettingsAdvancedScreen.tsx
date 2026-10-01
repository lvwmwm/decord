// Module ID: 15081
// Function ID: 15082
// Name: SettingsAdvancedScreen
// Dependencies: [19, 7417, 1074, 21, 1115, 11006, 14247, 2]

// Module 15081 (SettingsAdvancedScreen)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import intl5 from "intl" /* 1115 */;
import SettingsConstants from "SettingsConstants" /* 7417 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
import SettingLayoutDefault from "SettingLayout" /* 14247 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const MarketingURLs = Constants.MarketingURLs;
const jsx = Fragment.jsx;
const memoResult = react.memo(() => {
  let constants2;
  const node = react.useMemo(() => {
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let items;
    let items1;
    let items2;
    let items3;
    let items4;
    let obj3;
    const obj = { sections: items1 };
    const obj2 = { label: intl.string(intl5.t["+U02+i"]), settings: items, subLabel: intl2.format(intl5.t["CY6q/Q"], obj3) };
    const createList = SettingBuilders.createList;
    SettingBuilders;
    intl = intl5.intl;
    items = [constants.DEVELOPER_MODE];
    intl2 = intl5.intl;
    items1 = [obj2, , , ];
    obj3 = { apiDocsUrl: constants2.API_DOCS };
    const obj4 = { settings: items2, subLabel: intl3.string(intl5.t.gI2GEL) };
    items2 = [constants.LAUNCHPAD];
    intl3 = intl5.intl;
    items1[1] = obj4;
    const obj5 = { settings: items3 };
    items3 = [constants.CHANNEL_LIST_LAYOUT];
    items1[2] = obj5;
    const obj6 = { label: intl4.string(intl5.t["jnXV/V"]), settings: items4 };
    intl4 = intl5.intl;
    items4 = [constants.ICYMI_TAB];
    items1[3] = obj6;
    return createList(obj);
  }, []);
  return jsx(SettingLayoutDefault, { node });
});
const result = size.fileFinishedImporting("modules/user_settings/advanced/native/SettingsAdvancedScreen.tsx");

export default memoResult;
