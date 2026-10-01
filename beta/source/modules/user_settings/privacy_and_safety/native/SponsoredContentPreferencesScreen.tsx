// Module ID: 15477
// Function ID: 15478
// Name: SponsoredContentPreferencesScreen
// Dependencies: [19, 7417, 1074, 21, 1115, 2111, 11006, 14247, 2]
// Exports: default

// Module 15477 (SponsoredContentPreferencesScreen)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2111 */;
import SettingsConstants from "SettingsConstants" /* 7417 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
import SettingLayoutDefault from "SettingLayout" /* 14247 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const HelpdeskArticles = Constants.HelpdeskArticles;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/SponsoredContentPreferencesScreen.tsx");

export default function SponsoredContentPreferencesScreen() {
  let cf9mvV;
  let format;
  let format2;
  let items;
  let items1;
  let items2;
  let items3;
  let obj2;
  let obj3;
  let obj5;
  let obj6;
  let prop;
  let obj = { settings: items, subLabel: format(cf9mvV, obj2) };
  items = [MobileUserSettings.USE_DATA_FOR_QUESTS_SPONSORED_CONTENT];
  const intl = items1(1115).intl;
  format = intl.format;
  obj2 = { helpdeskArticle: obj3.getArticleURL(HelpdeskArticles.QUESTS_PRIVACY_CONTROLS) };
  cf9mvV = items1(1115).t.cf9mvV;
  items1 = [obj, , ];
  obj3 = HelpdeskUtilsDefault;
  const obj4 = { settings: items2, subLabel: format2(prop, obj5) };
  items2 = [MobileUserSettings.USE_DATA_FOR_QUESTS_3P_SPONSORED_CONTENT];
  const intl2 = items1(1115).intl;
  format2 = intl2.format;
  obj5 = { helpdeskArticle: obj6.getArticleURL(HelpdeskArticles.QUESTS_PRIVACY_CONTROLS) };
  prop = items1(1115).t["2QFDU/"];
  items1[1] = obj4;
  const obj7 = { settings: items3 };
  items3 = [MobileUserSettings.MANAGE_SPONSORED_CONTENT];
  items1[2] = obj7;
  const items4 = [items1];
  obj6 = HelpdeskUtilsDefault;
  const node = react.useMemo(() => {
    const obj = SettingBuilders;
    const obj2 = { sections: items1 };
    return obj.createList(obj2);
  }, items4);
  return jsx(SettingLayoutDefault, { node });
};
