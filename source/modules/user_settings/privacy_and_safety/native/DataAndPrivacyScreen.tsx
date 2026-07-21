// Module ID: 14404
// Function ID: 108666
// Name: getTermsOfServicePrivacyPolicySettings
// Dependencies: []
// Exports: default

// Module 14404 (getTermsOfServicePrivacyPolicySettings)
function getTermsOfServicePrivacyPolicySettings(arg0) {
  const arg1 = arg0;
  let obj = {};
  const intl = arg1(dependencyMap[5]).intl;
  obj.label = intl.string(arg1(dependencyMap[5]).t.+uHbqE);
  const items = [MobileSetting.SAFETY_TERMS_OF_SERVICE, MobileSetting.SAFETY_PRIVACY_POLICY];
  obj.settings = items;
  const intl2 = arg1(dependencyMap[5]).intl;
  obj = {
    onClick() {
      return arg0.navigate(constants.ACCOUNT);
    }
  };
  obj.subLabel = intl2.format(arg1(dependencyMap[5]).t.R5N31P, obj);
  const items1 = [obj];
  return items1;
}
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const MobileSetting = arg1(dependencyMap[2]).MobileSetting;
({ HelpdeskArticles: closure_6, UserSettingsSections: closure_7 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = arg1(dependencyMap[4]));
const tmp3 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/user_settings/privacy_and_safety/native/DataAndPrivacyScreen.tsx");

export default function DataAndPrivacySettings() {
  let obj = arg1(dependencyMap[8]);
  const stackNavigation = obj.useStackNavigation();
  const arg1 = stackNavigation;
  const tmp2 = function useDataPrivacySettings(stackNavigation) {
    let obj = { settings: items };
    const items = [closure_5.USE_DATA_TO_IMPROVE_DISCORD];
    const intl = stackNavigation(closure_2[5]).intl;
    obj = {};
    let obj2 = tmp2(closure_2[6]);
    obj.helpdeskArticle = obj2.getArticleURL(constants.DATA_PRIVACY_CONTROLS);
    obj.subLabel = intl.format(stackNavigation(closure_2[5]).t.igTSG/, obj);
    const items1 = [obj, , , ];
    obj = { settings: items2 };
    const items2 = [closure_5.USE_DATA_TO_CUSTOMIZE_DISCORD];
    const intl2 = stackNavigation(closure_2[5]).intl;
    const obj1 = {};
    let obj5 = tmp2(closure_2[6]);
    obj1.helpdeskArticle = obj5.getArticleURL(constants.DATA_USED_FOR_RECOMMENDED);
    obj.subLabel = intl2.format(stackNavigation(closure_2[5]).t.eQL/Mr, obj1);
    items1[1] = obj;
    obj2 = { settings: items3 };
    const items3 = [closure_5.USE_DATA_FOR_QUESTS];
    const intl3 = stackNavigation(closure_2[5]).intl;
    const obj3 = {};
    let obj8 = tmp2(closure_2[6]);
    obj3.helpdeskArticle = obj8.getArticleURL(constants.QUESTS_PRIVACY_CONTROLS);
    obj2.subLabel = intl3.format(stackNavigation(closure_2[5]).t.cf9mvV, obj3);
    items1[2] = obj2;
    const obj4 = { settings: items4 };
    const items4 = [closure_5.USE_DATA_FOR_QUESTS_3P];
    const intl4 = stackNavigation(closure_2[5]).intl;
    obj5 = { helpdeskArticle: tmp2(closure_2[6]).getArticleURL(constants.QUESTS_PRIVACY_CONTROLS) };
    obj4.subLabel = intl4.format(stackNavigation(closure_2[5]).t.2QFDU/, obj5);
    items1[3] = obj4;
    const obj6 = {};
    const intl5 = stackNavigation(closure_2[5]).intl;
    obj6.label = intl5.string(stackNavigation(closure_2[5]).t.BG7QsQ);
    const items5 = [closure_5.REQUEST_YOUR_DATA];
    obj6.settings = items5;
    const intl6 = stackNavigation(closure_2[5]).intl;
    const obj7 = {};
    const obj12 = tmp2(closure_2[6]);
    obj7.helpdeskArticle = tmp2(closure_2[6]).getArticleURL(constants.GDPR_REQUEST_DATA);
    obj6.subLabel = intl6.format(stackNavigation(closure_2[5]).t.P3kNfr, obj7);
    items1.push(obj6);
    obj8 = { settings: items6 };
    const items6 = [closure_5.PROFILE_PRIVACY];
    const intl7 = stackNavigation(closure_2[5]).intl;
    obj8.subLabel = intl7.format(stackNavigation(closure_2[5]).t.N1P5gE, {
      onClick() {
        return arg0.navigate(constants.CONTENT_AND_SOCIAL);
      }
    });
    items1.push(obj8);
    const items7 = [closure_5.NOTIFY_FRIENDS_ON_PROFILE_UPDATE];
    items1.push({ settings: items7 });
    return items1;
  }(stackNavigation);
  const importDefault = tmp2;
  const effect = React.useEffect(() => {
    if (!fetchedConsents.fetchedConsents) {
      const consents = stackNavigation(closure_2[9]).fetchConsents();
      const obj = stackNavigation(closure_2[9]);
    }
    const harvestStatus = stackNavigation(closure_2[10]).fetchHarvestStatus();
  }, []);
  const items = [stackNavigation, tmp2];
  obj = {};
  const memo = React.useMemo(() => {
    let obj = stackNavigation(closure_2[11]);
    obj = {};
    const items = [...closure_1];
    obj = {};
    const intl = stackNavigation(closure_2[5]).intl;
    obj.label = intl.string(stackNavigation(closure_2[5]).t.Me5lVK);
    const items1 = [closure_5.DATA_AND_PRIVACY_SECURE_FRAMES_PERSISTENT_CODES, closure_5.ENCRYPTION_VERIFIED_DEVICES];
    obj.settings = items1;
    const intl2 = stackNavigation(closure_2[5]).intl;
    const obj1 = { helpArticle: stackNavigation(closure_2[7]).getSecureFramesHelpdeskArticle() };
    obj.subLabel = intl2.format(stackNavigation(closure_2[5]).t./6sFWa, obj1);
    items[tmp] = obj;
    const sum = tmp + 1;
    HermesBuiltin.arraySpread(callback(stackNavigation), sum);
    obj.sections = items;
    return obj.createList(obj);
  }, items);
  obj = { screen: arg1(dependencyMap[12]).SettingsScreen.DATA_AND_PRIVACY };
  const items1 = [callback(importDefault(dependencyMap[12]), obj), callback(importDefault(dependencyMap[13]), { node: memo })];
  obj.children = items1;
  return callback2(closure_9, obj);
};
