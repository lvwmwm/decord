// Module ID: 14526
// Function ID: 110862
// Name: getTermsOfServicePrivacyPolicySettings
// Dependencies: [31, 5592, 7662, 653, 33, 1212, 1920, 8897, 1456, 13758, 13761, 10095, 13718, 13550, 2]
// Exports: default

// Module 14526 (getTermsOfServicePrivacyPolicySettings)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { MobileSetting } from "MobileSetting";
import ME from "ME";
import jsxProd from "jsxProd";

let closure_10;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function getTermsOfServicePrivacyPolicySettings(arg0) {
  const _require = arg0;
  let obj = {};
  const intl = _require(1212).intl;
  obj.label = intl.string(_require(1212).t["+uHbqE"]);
  const items = [MobileSetting.SAFETY_TERMS_OF_SERVICE, MobileSetting.SAFETY_PRIVACY_POLICY];
  obj.settings = items;
  const intl2 = _require(1212).intl;
  obj = {
    onClick() {
      return navigation.navigate(outer1_7.ACCOUNT);
    }
  };
  obj.subLabel = intl2.format(_require(1212).t.R5N31P, obj);
  const items1 = [obj];
  return items1;
}
({ HelpdeskArticles: closure_6, UserSettingsSections: closure_7 } = ME);
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = jsxProd);
const result = require("MobileSetting").fileFinishedImporting("modules/user_settings/privacy_and_safety/native/DataAndPrivacyScreen.tsx");

export default function DataAndPrivacySettings() {
  let obj = stackNavigation(1456);
  stackNavigation = obj.useStackNavigation();
  const tmp2 = (function useDataPrivacySettings(stackNavigation) {
    let closure_0 = stackNavigation;
    let obj = { settings: items };
    items = [outer1_5.USE_DATA_TO_IMPROVE_DISCORD];
    const intl = stackNavigation(outer1_2[5]).intl;
    obj = {};
    let obj2 = tmp2(outer1_2[6]);
    obj.helpdeskArticle = obj2.getArticleURL(outer1_6.DATA_PRIVACY_CONTROLS);
    obj.subLabel = intl.format(stackNavigation(outer1_2[5]).t["igTSG/"], obj);
    const items1 = [obj, , , ];
    obj = { settings: items2 };
    items2 = [outer1_5.USE_DATA_TO_CUSTOMIZE_DISCORD];
    const intl2 = stackNavigation(outer1_2[5]).intl;
    const obj1 = {};
    let obj5 = tmp2(outer1_2[6]);
    obj1.helpdeskArticle = obj5.getArticleURL(outer1_6.DATA_USED_FOR_RECOMMENDED);
    obj.subLabel = intl2.format(stackNavigation(outer1_2[5]).t["eQL/Mr"], obj1);
    items1[1] = obj;
    obj2 = { settings: items3 };
    items3 = [outer1_5.USE_DATA_FOR_QUESTS];
    const intl3 = stackNavigation(outer1_2[5]).intl;
    const obj3 = {};
    let obj8 = tmp2(outer1_2[6]);
    obj3.helpdeskArticle = obj8.getArticleURL(outer1_6.QUESTS_PRIVACY_CONTROLS);
    obj2.subLabel = intl3.format(stackNavigation(outer1_2[5]).t.cf9mvV, obj3);
    items1[2] = obj2;
    const obj4 = { settings: items4 };
    items4 = [outer1_5.USE_DATA_FOR_QUESTS_3P];
    const intl4 = stackNavigation(outer1_2[5]).intl;
    obj5 = { helpdeskArticle: tmp2(outer1_2[6]).getArticleURL(outer1_6.QUESTS_PRIVACY_CONTROLS) };
    obj4.subLabel = intl4.format(stackNavigation(outer1_2[5]).t["2QFDU/"], obj5);
    items1[3] = obj4;
    const obj6 = {};
    const intl5 = stackNavigation(outer1_2[5]).intl;
    obj6.label = intl5.string(stackNavigation(outer1_2[5]).t.BG7QsQ);
    const items5 = [outer1_5.REQUEST_YOUR_DATA];
    obj6.settings = items5;
    const intl6 = stackNavigation(outer1_2[5]).intl;
    const obj7 = {};
    const obj12 = tmp2(outer1_2[6]);
    obj7.helpdeskArticle = tmp2(outer1_2[6]).getArticleURL(outer1_6.GDPR_REQUEST_DATA);
    obj6.subLabel = intl6.format(stackNavigation(outer1_2[5]).t.P3kNfr, obj7);
    items1.push(obj6);
    obj8 = { settings: items6 };
    items6 = [outer1_5.PROFILE_PRIVACY];
    const intl7 = stackNavigation(outer1_2[5]).intl;
    obj8.subLabel = intl7.format(stackNavigation(outer1_2[5]).t.N1P5gE, {
      onClick() {
        return stackNavigation.navigate(outer2_7.CONTENT_AND_SOCIAL);
      }
    });
    items1.push(obj8);
    const items7 = [outer1_5.NOTIFY_FRIENDS_ON_PROFILE_UPDATE];
    items1.push({ settings: items7 });
    return items1;
  })(stackNavigation);
  const importDefault = tmp2;
  const effect = React.useEffect(() => {
    if (!outer1_4.fetchedConsents) {
      const consents = stackNavigation(outer1_2[9]).fetchConsents();
      const obj = stackNavigation(outer1_2[9]);
    }
    const harvestStatus = stackNavigation(outer1_2[10]).fetchHarvestStatus();
  }, []);
  let items = [stackNavigation, tmp2];
  obj = {};
  const memo = React.useMemo(() => {
    let obj = stackNavigation(outer1_2[11]);
    obj = {};
    const items = [...closure_1];
    obj = {};
    const intl = stackNavigation(outer1_2[5]).intl;
    obj.label = intl.string(stackNavigation(outer1_2[5]).t.Me5lVK);
    const items1 = [outer1_5.DATA_AND_PRIVACY_SECURE_FRAMES_PERSISTENT_CODES, outer1_5.ENCRYPTION_VERIFIED_DEVICES];
    obj.settings = items1;
    const intl2 = stackNavigation(outer1_2[5]).intl;
    const obj1 = { helpArticle: stackNavigation(outer1_2[7]).getSecureFramesHelpdeskArticle() };
    obj.subLabel = intl2.format(stackNavigation(outer1_2[5]).t["/6sFWa"], obj1);
    items[tmp] = obj;
    const sum = tmp + 1;
    HermesBuiltin.arraySpread(outer1_11(stackNavigation), sum);
    obj.sections = items;
    return obj.createList(obj);
  }, items);
  obj = { screen: stackNavigation(13718).SettingsScreen.DATA_AND_PRIVACY };
  let items1 = [callback(importDefault(13718), obj), callback(importDefault(13550), { node: memo })];
  obj.children = items1;
  return callback2(closure_9, obj);
};
