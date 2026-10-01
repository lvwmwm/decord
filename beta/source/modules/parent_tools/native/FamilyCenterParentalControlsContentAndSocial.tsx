// Module ID: 14466
// Function ID: 14467
// Name: FamilyCenterParentalControlsContentAndSocial
// Dependencies: [19, 17, 1074, 7417, 21, 11006, 1115, 2111, 14247, 2]
// Exports: default

// Module 14466 (FamilyCenterParentalControlsContentAndSocial)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import intl4 from "intl" /* 1115 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2111 */;
import SettingsConstants from "SettingsConstants" /* 7417 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const HelpdeskArticles = Constants.HelpdeskArticles;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterParentalControlsContentAndSocial.tsx");

export default function FamilyCenterParentalControlsContentAndSocial() {
  let dliU4j;
  let format;
  let intl2;
  let intl3;
  let items;
  let items1;
  let items2;
  let items3;
  let obj3;
  let obj4;
  const obj = { sections: items1 };
  const obj2 = { settings: items, subLabel: format(dliU4j, obj3) };
  items = [MobileUserSettings.PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS];
  const createList = SettingBuilders.createList;
  SettingBuilders;
  const intl = intl4.intl;
  format = intl.format;
  obj3 = { learnMoreLink: obj4.getArticleURL(HelpdeskArticles.EXPLICIT_MEDIA_REDACTION) };
  dliU4j = intl4.t.dliU4j;
  items1 = [obj2, , ];
  obj4 = HelpdeskUtilsDefault;
  const obj5 = { label: intl2.string(intl4.t.MeYuqs), settings: items2 };
  intl2 = intl4.intl;
  items2 = [, ];
  ({ PARENTAL_CONTROLS_DIRECT_MESSAGES: arr3[0], PARENTAL_CONTROLS_MESSAGE_REQUESTS: arr3[1] } = MobileUserSettings);
  items1[1] = obj5;
  const obj6 = { label: intl3.string(intl4.t.XlGG9c), settings: items3 };
  intl3 = intl4.intl;
  items3 = [, , ];
  ({ PARENTAL_CONTROLS_FRIEND_REQUESTS_EVERYONE: arr4[0], PARENTAL_CONTROLS_FRIEND_REQUESTS_MUTUAL_FRIENDS: arr4[1], PARENTAL_CONTROLS_FRIEND_REQUESTS_MUTUAL_GUILDS: arr4[2] } = MobileUserSettings);
  items1[2] = obj6;
  const list = createList(obj);
  return <View>{null}</View>;
};
