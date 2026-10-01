// Module ID: 15482
// Function ID: 15483
// Name: DataAndPrivacyScreen
// Dependencies: [19, 6012, 7417, 1074, 21, 1115, 2111, 9163, 1485, 14391, 14394, 11006, 14349, 14247, 2]
// Exports: default

// Module 15482 (DataAndPrivacyScreen)
import intl8 from "intl" /* 1115 */;
import SettingsConstants from "SettingsConstants" /* 7417 */;
import SecureFramesUtils from "SecureFramesUtils" /* 9163 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
import react from "react" /* 19 */;
import ConsentStore from "ConsentStore" /* 6012 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
({ HelpdeskArticles: metroRequire, UserSettingsSections: metroImportDefault } = Constants);
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = Fragment);
const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/DataAndPrivacyScreen.tsx");

export default function DataAndPrivacySettings() {
  let P3kNfr;
  let cf9mvV;
  let fetchedConsents;
  let format;
  let format2;
  let format3;
  let format4;
  let format5;
  let intl5;
  let intl7;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items9;
  let obj10;
  let obj12;
  let obj13;
  let obj15;
  let obj16;
  let obj18;
  let obj3;
  let obj4;
  let obj6;
  let obj7;
  let obj9;
  let prop;
  let prop1;
  let prop2;
  let stackNavigation;
  let obj = stackNavigation(1485);
  stackNavigation = obj.useStackNavigation();
  let obj2 = { settings: items, subLabel: format(prop, obj3) };
  items = [MobileUserSettings.USE_DATA_TO_IMPROVE_DISCORD];
  let intl = stackNavigation(1115).intl;
  format = intl.format;
  obj3 = { helpdeskArticle: obj4.getArticleURL(constants.DATA_PRIVACY_CONTROLS) };
  prop = stackNavigation(1115).t["igTSG/"];
  obj4 = items1(2111);
  items1 = [obj2, , , ];
  let obj5 = { settings: items2, subLabel: format2(prop1, obj6) };
  items2 = [MobileUserSettings.USE_DATA_TO_CUSTOMIZE_DISCORD];
  let intl2 = stackNavigation(1115).intl;
  format2 = intl2.format;
  obj6 = { helpdeskArticle: obj7.getArticleURL(constants.DATA_USED_FOR_RECOMMENDED) };
  prop1 = stackNavigation(1115).t["eQL/Mr"];
  items1[1] = obj5;
  obj7 = items1(2111);
  const obj8 = { settings: items3, subLabel: format3(cf9mvV, obj9) };
  items3 = [MobileUserSettings.USE_DATA_FOR_QUESTS];
  let intl3 = stackNavigation(1115).intl;
  format3 = intl3.format;
  obj9 = { helpdeskArticle: obj10.getArticleURL(constants.QUESTS_PRIVACY_CONTROLS) };
  cf9mvV = stackNavigation(1115).t.cf9mvV;
  items1[2] = obj8;
  obj10 = items1(2111);
  const obj11 = { settings: items4, subLabel: format4(prop2, obj12) };
  items4 = [MobileUserSettings.USE_DATA_FOR_QUESTS_3P];
  let intl4 = stackNavigation(1115).intl;
  format4 = intl4.format;
  obj12 = { helpdeskArticle: obj13.getArticleURL(constants.QUESTS_PRIVACY_CONTROLS) };
  prop2 = stackNavigation(1115).t["2QFDU/"];
  items1[3] = obj11;
  obj13 = items1(2111);
  const push = items1.push;
  const obj14 = { label: intl5.string(stackNavigation(1115).t.BG7QsQ), settings: items5, subLabel: format5(P3kNfr, obj15) };
  intl5 = stackNavigation(1115).intl;
  items5 = [MobileUserSettings.REQUEST_YOUR_DATA];
  const intl6 = stackNavigation(1115).intl;
  format5 = intl6.format;
  obj15 = { helpdeskArticle: obj16.getArticleURL(constants.GDPR_REQUEST_DATA) };
  P3kNfr = stackNavigation(1115).t.P3kNfr;
  obj16 = items1(2111);
  push(obj14);
  const obj17 = { settings: items6, subLabel: intl7.format(stackNavigation(1115).t.N1P5gE, obj18) };
  items6 = [MobileUserSettings.PROFILE_PRIVACY];
  const push2 = items1.push;
  intl7 = stackNavigation(1115).intl;
  obj18 = {
    onClick() {
      return stackNavigation.navigate(constants.CONTENT_AND_SOCIAL);
    }
  };
  push2(obj17);
  const obj19 = { settings: items7 };
  items7 = [MobileUserSettings.NOTIFY_FRIENDS_ON_PROFILE_UPDATE];
  const arr2 = items1.push(obj19);
  const effect = react.useEffect(() => {
    if (!fetchedConsents.fetchedConsents) {
      const obj = stackNavigation(dependencyMap[9]);
      const consents = obj.fetchConsents();
    }
    const obj2 = stackNavigation(dependencyMap[10]);
    const harvestStatus = obj2.fetchHarvestStatus();
  }, []);
  const items8 = [stackNavigation, items1];
  const obj20 = { children: items9 };
  const memo = react.useMemo(() => {
    let format;
    let intl;
    let intl3;
    let intl4;
    let items;
    let items2;
    let obj3;
    let obj4;
    let obj6;
    let prop;
    const obj = { sections: items };
    items = [...items1];
    const createList = SettingBuilders.createList;
    const obj2 = { label: intl.string(intl8.t.Me5lVK), settings: items1, subLabel: format(prop, obj3) };
    SettingBuilders;
    intl = intl8.intl;
    items1 = [, ];
    ({ DATA_AND_PRIVACY_SECURE_FRAMES_PERSISTENT_CODES: arr2[0], ENCRYPTION_VERIFIED_DEVICES: arr2[1] } = MobileUserSettings);
    const intl2 = intl8.intl;
    format = intl2.format;
    obj3 = { helpArticle: obj4.getSecureFramesHelpdeskArticle() };
    prop = intl8.t["/6sFWa"];
    items[tmp3] = obj2;
    let closure_0 = stackNavigation;
    obj4 = SecureFramesUtils;
    const obj5 = { label: intl3.string(intl8.t["+uHbqE"]), settings: items2, subLabel: intl4.format(intl8.t.R5N31P, obj6) };
    intl3 = intl8.intl;
    items2 = [, ];
    ({ SAFETY_TERMS_OF_SERVICE: arr3[0], SAFETY_PRIVACY_POLICY: arr3[1] } = MobileUserSettings);
    intl4 = intl8.intl;
    const items3 = [obj5];
    obj6 = {
      onClick() {
        return navigation.navigate(constants.ACCOUNT);
      }
    };
    HermesBuiltin.arraySpread(items, items3, tmp3 + 1);
    return createList(obj);
  }, items8);
  const obj21 = { screen: stackNavigation(14349).SettingsScreen.DATA_AND_PRIVACY };
  const tmp10 = items1(14349);
  items9 = [closure_8(tmp10, obj21), closure_8(items1(14247), { node: memo })];
  return closure_10(closure_9, obj20);
};
