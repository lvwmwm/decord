// Module ID: 17894
// Function ID: 17895
// Name: DataAndPrivacyScreen
// Dependencies: [19, 6742, 8432, 1072, 21, 17886, 1113, 2061, 9265, 1497, 16746, 16749, 11539, 16704, 16575, 2]
// Exports: default

// Module 17894 (DataAndPrivacyScreen)
import intl8 from "intl" /* 1113 */;
import SettingsConstants from "SettingsConstants" /* 8432 */;
import SecureFramesUtils from "SecureFramesUtils" /* 9265 */;
import SettingBuilders from "SettingBuilders" /* 11539 */;
import react from "react" /* 19 */;
import ConsentStore from "ConsentStore" /* 6742 */;
import Constants from "Constants" /* 1072 */;
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
  let obj11;
  let obj13;
  let obj14;
  let obj16;
  let obj17;
  let obj19;
  let obj4;
  let obj5;
  let obj7;
  let obj8;
  let prop;
  let prop1;
  let prop2;
  let stackNavigation;
  let obj = stackNavigation(1497);
  stackNavigation = obj.useStackNavigation();
  let obj2 = stackNavigation(17886);
  const pinotDataPrivacySections = obj2.usePinotDataPrivacySections();
  let obj3 = { settings: items, subLabel: format(prop, obj4) };
  items = [MobileUserSettings.USE_DATA_TO_IMPROVE_DISCORD];
  let intl = stackNavigation(1113).intl;
  format = intl.format;
  obj4 = { helpdeskArticle: obj5.getArticleURL(constants.DATA_PRIVACY_CONTROLS) };
  prop = stackNavigation(1113).t["igTSG/"];
  obj5 = items1(2061);
  items1 = [obj3, , , ];
  let obj6 = { settings: items2, subLabel: format2(prop1, obj7) };
  items2 = [MobileUserSettings.USE_DATA_TO_CUSTOMIZE_DISCORD];
  let intl2 = stackNavigation(1113).intl;
  format2 = intl2.format;
  obj7 = { helpdeskArticle: obj8.getArticleURL(constants.DATA_USED_FOR_RECOMMENDED) };
  prop1 = stackNavigation(1113).t["eQL/Mr"];
  items1[1] = obj6;
  obj8 = items1(2061);
  const obj9 = { settings: items3, subLabel: format3(cf9mvV, obj10) };
  items3 = [MobileUserSettings.USE_DATA_FOR_QUESTS];
  let intl3 = stackNavigation(1113).intl;
  format3 = intl3.format;
  obj10 = { helpdeskArticle: obj11.getArticleURL(constants.QUESTS_PRIVACY_CONTROLS) };
  cf9mvV = stackNavigation(1113).t.cf9mvV;
  items1[2] = obj9;
  obj11 = items1(2061);
  const obj12 = { settings: items4, subLabel: format4(prop2, obj13) };
  items4 = [MobileUserSettings.USE_DATA_FOR_QUESTS_3P];
  let intl4 = stackNavigation(1113).intl;
  format4 = intl4.format;
  obj13 = { helpdeskArticle: obj14.getArticleURL(constants.QUESTS_PRIVACY_CONTROLS) };
  prop2 = stackNavigation(1113).t["2QFDU/"];
  items1[3] = obj12;
  obj14 = items1(2061);
  HermesBuiltin.arraySpread(items1, pinotDataPrivacySections, 4);
  const push = items1.push;
  const obj15 = { label: intl5.string(stackNavigation(1113).t.BG7QsQ), settings: items5, subLabel: format5(P3kNfr, obj16) };
  intl5 = stackNavigation(1113).intl;
  items5 = [MobileUserSettings.REQUEST_YOUR_DATA];
  const intl6 = stackNavigation(1113).intl;
  format5 = intl6.format;
  obj16 = { helpdeskArticle: obj17.getArticleURL(constants.GDPR_REQUEST_DATA) };
  P3kNfr = stackNavigation(1113).t.P3kNfr;
  obj17 = items1(2061);
  push(obj15);
  const obj18 = { settings: items6, subLabel: intl7.format(stackNavigation(1113).t.N1P5gE, obj19) };
  items6 = [MobileUserSettings.PROFILE_PRIVACY];
  const push2 = items1.push;
  intl7 = stackNavigation(1113).intl;
  obj19 = {
    onClick() {
      return stackNavigation.navigate(constants.CONTENT_AND_SOCIAL);
    }
  };
  push2(obj18);
  const obj20 = { settings: items7 };
  items7 = [MobileUserSettings.NOTIFY_FRIENDS_ON_PROFILE_UPDATE];
  const arr2 = items1.push(obj20);
  const effect = react.useEffect(() => {
    if (!fetchedConsents.fetchedConsents) {
      const obj = stackNavigation(dependencyMap[10]);
      const consents = obj.fetchConsents();
    }
    const obj2 = stackNavigation(dependencyMap[11]);
    const harvestStatus = obj2.fetchHarvestStatus();
  }, []);
  const items8 = [stackNavigation, items1];
  const obj21 = { children: items9 };
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
  const obj22 = { screen: stackNavigation(16704).SettingsScreen.DATA_AND_PRIVACY };
  const tmp13 = items1(16704);
  items9 = [closure_8(tmp13, obj22), closure_8(items1(16575), { node: memo })];
  return closure_10(closure_9, obj21);
};
