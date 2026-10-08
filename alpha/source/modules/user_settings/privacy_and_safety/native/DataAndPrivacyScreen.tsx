// Module ID: 16070
// Function ID: 16071
// Name: DataAndPrivacyScreen
// Dependencies: [19, 5938, 7966, 1085, 21, 558, 576, 16063, 1126, 2127, 8800, 1502, 14940, 14943, 11262, 14898, 14775, 2]

// Module 16070 (DataAndPrivacyScreen)
import intl8 from "intl" /* 1126 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2127 */;
import SettingsConstants from "SettingsConstants" /* 7966 */;
import SecureFramesUtils from "SecureFramesUtils" /* 8800 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
import SettingLayoutDefault from "SettingLayout" /* 14775 */;
import SettingsScreenNoticesDefault from "SettingsScreenNotices" /* 14898 */;
import react from "react" /* 19 */;
import ConsentStore from "ConsentStore" /* 5938 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
function onClick() {
  return navigation.navigate(constants.ACCOUNT);
}
const MobileUserSettings = SettingsConstants.MobileUserSettings;
({ HelpdeskArticles: metroRequire, UserSettingsSections: metroImportDefault } = Constants);
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function useDataPrivacySettings(arg0) {
  let P3kNfr;
  let cf9mvV;
  let format;
  let format2;
  let format3;
  let format4;
  let format5;
  let intl5;
  let items;
  let items1;
  let items2;
  let items3;
  let items5;
  let items7;
  let obj10;
  let obj11;
  let obj13;
  let obj14;
  let obj16;
  let obj17;
  let obj4;
  let obj5;
  let obj7;
  let obj8;
  let prop;
  let prop1;
  let prop2;
  let tmp16;
  let tmp21;
  let tmp23;
  let tmp25;
  let tmp27;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(14);
  const obj2 = require("PinotSettingsLazy");
  const pinotDataPrivacySections = obj2.usePinotDataPrivacySections();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { settings: items, subLabel: format(prop, obj4) };
    items = [MobileUserSettings.USE_DATA_TO_IMPROVE_DISCORD];
    const intl = tmp(1126).intl;
    format = intl.format;
    obj4 = { helpdeskArticle: obj5.getArticleURL(constants.DATA_PRIVACY_CONTROLS) };
    prop = tmp(1126).t["igTSG/"];
    obj5 = HelpdeskUtilsDefault;
    const obj6 = { settings: items1, subLabel: format2(prop1, obj7) };
    items1 = [MobileUserSettings.USE_DATA_TO_CUSTOMIZE_DISCORD];
    const intl2 = tmp(1126).intl;
    format2 = intl2.format;
    obj7 = { helpdeskArticle: obj8.getArticleURL(constants.DATA_USED_FOR_RECOMMENDED) };
    prop1 = tmp(1126).t["eQL/Mr"];
    obj8 = HelpdeskUtilsDefault;
    const obj9 = { settings: items2, subLabel: format3(cf9mvV, obj10) };
    items2 = [MobileUserSettings.USE_DATA_FOR_QUESTS];
    const intl3 = tmp(1126).intl;
    format3 = intl3.format;
    obj10 = { helpdeskArticle: obj11.getArticleURL(constants.QUESTS_PRIVACY_CONTROLS) };
    cf9mvV = tmp(1126).t.cf9mvV;
    obj11 = HelpdeskUtilsDefault;
    const obj12 = { settings: items3, subLabel: format4(prop2, obj13) };
    items3 = [MobileUserSettings.USE_DATA_FOR_QUESTS_3P];
    const intl4 = tmp(1126).intl;
    format4 = intl4.format;
    obj13 = { helpdeskArticle: obj14.getArticleURL(constants.QUESTS_PRIVACY_CONTROLS) };
    prop2 = tmp(1126).t["2QFDU/"];
    cResult[0] = obj3;
    cResult[1] = obj6;
    cResult[2] = obj9;
    cResult[3] = obj12;
    obj14 = HelpdeskUtilsDefault;
    tmp5 = obj3;
    tmp6 = obj6;
    tmp7 = obj9;
    tmp8 = obj12;
  } else {
    [tmp5, tmp6, tmp7, tmp8] = cResult;
  }
  if (cResult[4] === arg0) {
    let tmp15;
    if (cResult[5] === pinotDataPrivacySections) {
      tmp15 = cResult[6];
    }
    return tmp15;
  }
  const items4 = [tmp5, tmp6, tmp7, tmp8, ...pinotDataPrivacySections];
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const obj15 = { label: intl5.string(require("intl").t.BG7QsQ), settings: items5, subLabel: format5(P3kNfr, obj16) };
    intl5 = tmp(1126).intl;
    items5 = [MobileUserSettings.REQUEST_YOUR_DATA];
    const intl6 = tmp(1126).intl;
    format5 = intl6.format;
    obj16 = { helpdeskArticle: obj17.getArticleURL(constants.GDPR_REQUEST_DATA) };
    P3kNfr = tmp(1126).t.P3kNfr;
    cResult[7] = obj15;
    tmp16 = obj15;
    obj17 = HelpdeskUtilsDefault;
  } else {
    tmp16 = cResult[7];
  }
  items4.push(tmp16);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const items6 = [MobileUserSettings.PROFILE_PRIVACY];
    cResult[8] = items6;
    tmp21 = items6;
  } else {
    tmp21 = cResult[8];
  }
  if (cResult[9] !== arg0) {
    const intl7 = tmp(1126).intl;
    const obj18 = {
      onClick() {
          return navigation.navigate(metroImportDefault.CONTENT_AND_SOCIAL);
        }
    };
    const formatResult = intl7.format(require("intl").t.N1P5gE, obj18);
    cResult[9] = arg0;
    cResult[10] = formatResult;
    tmp23 = formatResult;
  } else {
    tmp23 = cResult[10];
  }
  if (cResult[11] !== tmp23) {
    const obj19 = { settings: tmp21, subLabel: tmp23 };
    cResult[11] = tmp23;
    cResult[12] = obj19;
    tmp25 = obj19;
  } else {
    tmp25 = cResult[12];
  }
  items4.push(tmp25);
  if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
    const obj20 = { settings: items7 };
    items7 = [MobileUserSettings.NOTIFY_FRIENDS_ON_PROFILE_UPDATE];
    cResult[13] = obj20;
    tmp27 = obj20;
  } else {
    tmp27 = cResult[13];
  }
  items4.push(tmp27);
  cResult[4] = arg0;
  cResult[5] = pinotDataPrivacySections;
  cResult[6] = items4;
  tmp15 = items4;
}) : (function useDataPrivacySettings(arg0) {
  let P3kNfr;
  let cf9mvV;
  let format;
  let format2;
  let format3;
  let format4;
  let format5;
  let intl5;
  let intl7;
  let items;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
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
  _require = arg0;
  const obj = require("PinotSettingsLazy");
  const pinotDataPrivacySections = obj.usePinotDataPrivacySections();
  const obj2 = { settings: items, subLabel: format(prop, obj3) };
  items = [MobileUserSettings.USE_DATA_TO_IMPROVE_DISCORD];
  const intl = require("intl").intl;
  format = intl.format;
  obj3 = { helpdeskArticle: obj4.getArticleURL(constants.DATA_PRIVACY_CONTROLS) };
  prop = require("intl").t["igTSG/"];
  const items1 = [obj2, , , ];
  obj4 = HelpdeskUtilsDefault;
  const obj5 = { settings: items2, subLabel: format2(prop1, obj6) };
  items2 = [MobileUserSettings.USE_DATA_TO_CUSTOMIZE_DISCORD];
  const intl2 = require("intl").intl;
  format2 = intl2.format;
  obj6 = { helpdeskArticle: obj7.getArticleURL(constants.DATA_USED_FOR_RECOMMENDED) };
  prop1 = require("intl").t["eQL/Mr"];
  items1[1] = obj5;
  obj7 = HelpdeskUtilsDefault;
  const obj8 = { settings: items3, subLabel: format3(cf9mvV, obj9) };
  items3 = [MobileUserSettings.USE_DATA_FOR_QUESTS];
  const intl3 = require("intl").intl;
  format3 = intl3.format;
  obj9 = { helpdeskArticle: obj10.getArticleURL(constants.QUESTS_PRIVACY_CONTROLS) };
  cf9mvV = require("intl").t.cf9mvV;
  items1[2] = obj8;
  obj10 = HelpdeskUtilsDefault;
  const obj11 = { settings: items4, subLabel: format4(prop2, obj12) };
  items4 = [MobileUserSettings.USE_DATA_FOR_QUESTS_3P];
  const intl4 = require("intl").intl;
  format4 = intl4.format;
  obj12 = { helpdeskArticle: obj13.getArticleURL(constants.QUESTS_PRIVACY_CONTROLS) };
  prop2 = require("intl").t["2QFDU/"];
  items1[3] = obj11;
  obj13 = HelpdeskUtilsDefault;
  HermesBuiltin.arraySpread(items1, pinotDataPrivacySections, 4);
  const push = items1.push;
  const obj14 = { label: intl5.string(require("intl").t.BG7QsQ), settings: items5, subLabel: format5(P3kNfr, obj15) };
  intl5 = require("intl").intl;
  items5 = [MobileUserSettings.REQUEST_YOUR_DATA];
  const intl6 = require("intl").intl;
  format5 = intl6.format;
  obj15 = { helpdeskArticle: obj16.getArticleURL(constants.GDPR_REQUEST_DATA) };
  P3kNfr = require("intl").t.P3kNfr;
  obj16 = HelpdeskUtilsDefault;
  push(obj14);
  const obj17 = { settings: items6, subLabel: intl7.format(require("intl").t.N1P5gE, obj18) };
  items6 = [MobileUserSettings.PROFILE_PRIVACY];
  const push2 = items1.push;
  intl7 = require("intl").intl;
  obj18 = {
    onClick() {
      return navigation.navigate(metroImportDefault.CONTENT_AND_SOCIAL);
    }
  };
  push2(obj17);
  const obj19 = { settings: items7 };
  items7 = [MobileUserSettings.NOTIFY_FRIENDS_ON_PROFILE_UPDATE];
  items1.push(obj19);
  return items1;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function DataAndPrivacySettings() {
  let fetchedConsents;
  let format;
  let intl;
  let intl3;
  let intl4;
  let items1;
  let items2;
  let items3;
  let items5;
  let obj10;
  let obj8;
  let prop;
  let stackNavigation;
  let tmp2Result2;
  let tmp7;
  let tmp8;
  let obj = stackNavigation(576);
  const cResult = obj.c(8);
  let obj2 = stackNavigation(1502);
  stackNavigation = obj2.useStackNavigation();
  const tmp6 = closure_11(stackNavigation);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n() {
      if (!fetchedConsents.fetchedConsents) {
        const obj = stackNavigation(dependencyMap[12]);
        const consents = obj.fetchConsents();
      }
      const obj2 = stackNavigation(dependencyMap[13]);
      const harvestStatus = obj2.fetchHarvestStatus();
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp7 = fn;
    tmp8 = items;
  } else {
    [tmp7, tmp8] = cResult;
  }
  const effect = react.useEffect(tmp7, tmp8);
  if (cResult[2] === tmp6) {
    let tmp10;
    let tmp17;
    let tmp22;
    if (cResult[3] === stackNavigation) {
      tmp10 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { screen: stackNavigation(14898).SettingsScreen.DATA_AND_PRIVACY };
      const tmp20 = SettingsScreenNoticesDefault;
      const tmp21 = closure_8(tmp20, obj3);
      cResult[5] = tmp21;
      tmp17 = tmp21;
    } else {
      tmp17 = cResult[5];
    }
    if (cResult[6] !== tmp10) {
      const obj4 = { children: items1 };
      items1 = [tmp17, ];
      const obj5 = { node: tmp10 };
      items1[1] = closure_8(SettingLayoutDefault, obj5);
      const tmp27 = closure_10(closure_9, obj4);
      cResult[6] = tmp10;
      cResult[7] = tmp27;
      tmp22 = tmp27;
    } else {
      tmp22 = cResult[7];
    }
    return tmp22;
  }
  const obj6 = { sections: items2 };
  items2 = [...tmp6];
  const createList = tmp2(11262).createList;
  const obj7 = { label: intl.string(stackNavigation(1126).t.Me5lVK), settings: items3, subLabel: format(prop, obj8) };
  stackNavigation(11262);
  intl = tmp2(1126).intl;
  items3 = [, ];
  ({ DATA_AND_PRIVACY_SECURE_FRAMES_PERSISTENT_CODES: arr3[0], ENCRYPTION_VERIFIED_DEVICES: arr3[1] } = MobileUserSettings);
  const intl2 = tmp2(1126).intl;
  format = intl2.format;
  obj8 = { helpArticle: tmp2Result2.getSecureFramesHelpdeskArticle() };
  prop = tmp2(1126).t["/6sFWa"];
  const items4 = [obj7];
  tmp2Result2 = stackNavigation(8800);
  const obj9 = { label: intl3.string(stackNavigation(1126).t["+uHbqE"]), settings: items5, subLabel: intl4.format(stackNavigation(1126).t.R5N31P, obj10) };
  const arraySpreadResult = HermesBuiltin.arraySpread(items2, items4, tmp12);
  intl3 = tmp2(1126).intl;
  items5 = [, ];
  ({ SAFETY_TERMS_OF_SERVICE: arr5[0], SAFETY_PRIVACY_POLICY: arr5[1] } = MobileUserSettings);
  intl4 = tmp2(1126).intl;
  const items6 = [obj9];
  obj10 = { onClick };
  HermesBuiltin.arraySpread(items2, items6, arraySpreadResult);
  const list = createList(obj6);
  cResult[2] = tmp6;
  cResult[3] = stackNavigation;
  cResult[4] = list;
  tmp10 = list;
}) : (function DataAndPrivacySettings() {
  let args;
  let fetchedConsents;
  let items1;
  let stackNavigation;
  let obj = stackNavigation(1502);
  stackNavigation = obj.useStackNavigation();
  const tmp2 = closure_11(stackNavigation);
  importDefault = tmp2;
  const effect = react.useEffect(() => {
    if (!fetchedConsents.fetchedConsents) {
      const obj = stackNavigation(dependencyMap[12]);
      const consents = obj.fetchConsents();
    }
    const obj2 = stackNavigation(dependencyMap[13]);
    const harvestStatus = obj2.fetchHarvestStatus();
  }, []);
  let items = [stackNavigation, tmp2];
  let obj2 = { children: items1 };
  const memo = react.useMemo(() => {
    let format;
    let intl;
    let intl3;
    let intl4;
    let items;
    let items1;
    let items3;
    let obj3;
    let obj4;
    let obj6;
    let prop;
    const obj = { sections: items };
    items = [...closure_1];
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
    const items2 = [obj2];
    let closure_0 = stackNavigation;
    obj4 = SecureFramesUtils;
    const obj5 = { label: intl3.string(intl8.t["+uHbqE"]), settings: items3, subLabel: intl4.format(intl8.t.R5N31P, obj6) };
    const arraySpreadResult = HermesBuiltin.arraySpread(items, items2, tmp3);
    intl3 = intl8.intl;
    items3 = [, ];
    ({ SAFETY_TERMS_OF_SERVICE: arr4[0], SAFETY_PRIVACY_POLICY: arr4[1] } = MobileUserSettings);
    intl4 = intl8.intl;
    const items4 = [obj5];
    obj6 = { onClick };
    HermesBuiltin.arraySpread(items, items4, arraySpreadResult);
    return createList(obj);
  }, items);
  let obj3 = { screen: stackNavigation(14898).SettingsScreen.DATA_AND_PRIVACY };
  const tmp5 = SettingsScreenNoticesDefault;
  items1 = [closure_8(tmp5, obj3), closure_8(SettingLayoutDefault, { node: memo })];
  return closure_10(closure_9, obj2);
});
const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/DataAndPrivacyScreen.tsx");

export default tmp4;
