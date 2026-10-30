// Module ID: 17453
// Function ID: 17454
// Name: SettingsAdvancedScreen
// Dependencies: [19, 8424, 1072, 21, 1114, 11505, 16533, 2]

// Module 17453 (SettingsAdvancedScreen)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import intl6 from "intl" /* 1114 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
import SettingLayoutDefault from "SettingLayout" /* 16533 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const MarketingURLs = Constants.MarketingURLs;
const jsx = Fragment.jsx;
const memoResult = react.memo(function SettingsAdvancedScreen() {
  let constants2;
  const node = react.useMemo(() => {
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let intl5;
    let items;
    let items1;
    let items2;
    let items3;
    let items4;
    let items5;
    let obj3;
    const obj = { sections: items1 };
    const obj2 = { label: intl.string(intl6.t["+U02+i"]), settings: items, subLabel: intl2.format(intl6.t["CY6q/Q"], obj3) };
    const createList = SettingBuilders.createList;
    SettingBuilders;
    intl = intl6.intl;
    items = [constants.DEVELOPER_MODE];
    intl2 = intl6.intl;
    items1 = [obj2, , , , ];
    obj3 = { apiDocsUrl: constants2.API_DOCS };
    const obj4 = { settings: items2, subLabel: intl3.string(intl6.t.gI2GEL) };
    items2 = [constants.LAUNCHPAD];
    intl3 = intl6.intl;
    items1[1] = obj4;
    const obj5 = { settings: items3 };
    items3 = [constants.CHANNEL_LIST_LAYOUT];
    items1[2] = obj5;
    const obj6 = { label: intl4.string(intl6.t["jnXV/V"]), settings: items4 };
    intl4 = intl6.intl;
    items4 = [constants.ICYMI_TAB];
    items1[3] = obj6;
    const obj7 = { label: intl5.string(intl6.t.GwQs0C), settings: items5 };
    intl5 = intl6.intl;
    items5 = [constants.NATIVE_MARKDOWN];
    items1[4] = obj7;
    return createList(obj);
  }, []);
  return jsx(SettingLayoutDefault, { node });
});
const result = size.fileFinishedImporting("modules/user_settings/advanced/native/SettingsAdvancedScreen.tsx");

export default memoResult;
