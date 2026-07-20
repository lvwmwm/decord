// Module ID: 13519
// Function ID: 102601
// Name: RestrictedAccountRedirect
// Dependencies: []

// Module 13519 (RestrictedAccountRedirect)
function RestrictedAccountRedirect() {
  const obj = {
    label: arg1(dependencyMap[10]).t.zqv4nV,
    labelHook() {
      let obj = callback(closure_2[11]);
      obj = { screen: constants.SETTINGS_CONTENT_AND_SOCIAL };
      obj.openUserSettings(obj);
    },
    noticeType: SafetySettingsNoticeType.RESTRICTED_ACCOUNTS_SETTING_NOTICE
  };
  return callback(importDefault(dependencyMap[9]), obj);
}
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const AnalyticsSections = arg1(dependencyMap[4]).AnalyticsSections;
const SafetySettingsNoticeType = arg1(dependencyMap[5]).SafetySettingsNoticeType;
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[6]));
const tmp2 = arg1(dependencyMap[6]);
let obj = {};
obj = { paddingTop: importDefault(dependencyMap[8]).space.PX_24, gap: importDefault(dependencyMap[8]).space.PX_24 };
obj.header = obj;
let closure_11 = arg1(dependencyMap[7]).createStyles(obj);
const obj2 = arg1(dependencyMap[7]);
const memoResult = importAllResult.memo(() => {
  let obj = arg1(dependencyMap[12]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj1 = arg1(dependencyMap[13]);
  const bannerText = obj1.getBannerText(stateFromStores);
  const tmp = callback2();
  const items1 = [closure_5];
  const stateFromStores1 = arg1(dependencyMap[12]).useStateFromStores(items1, () => blockedOrIgnoredIDs.getBlockedOrIgnoredIDs().length > 0);
  const callback = importAllResult.useCallback(() => {
    callback(closure_2[14]).open();
  }, []);
  if (null != bannerText) {
    obj = { style: tmp.header };
    let tmp9 = null;
    if (stateFromStores1) {
      tmp9 = callback(RestrictedAccountRedirect, {});
    }
    const items2 = [tmp9, ];
    let tmp12 = null;
    if (null != bannerText) {
      obj = { onPress: callback, variant: "danger" };
      ({ title: obj5.label, title: obj5.accessibilityLabel } = bannerText);
      obj1 = {};
      ({ button: obj6.text, button: obj6.accessibilityLabel } = bannerText);
      obj1.onPress = callback;
      obj.trailing = callback(arg1(dependencyMap[16]).Button, obj1);
      obj.start = true;
      obj.end = true;
      tmp12 = callback(arg1(dependencyMap[15]).TableRow, obj);
    }
    items2[1] = tmp12;
    obj.children = items2;
    let tmp7Result = closure_10(View, obj);
    const tmp7 = closure_10;
    const tmp8 = View;
  } else {
    tmp7Result = null;
  }
  return tmp7Result;
});
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/user_settings/account/native/SettingsAccountHeader.tsx");

export default memoResult;
