// Module ID: 13700
// Function ID: 105159
// Name: RestrictedAccountRedirect
// Dependencies: [31, 27, 3767, 1849, 653, 7563, 33, 4130, 689, 13701, 1212, 5796, 566, 9270, 9217, 5165, 4543, 2]

// Module 13700 (RestrictedAccountRedirect)
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { AnalyticsSections } from "ME";
import { SafetySettingsNoticeType } from "SafetyToastType";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_9;
const require = arg1;
function RestrictedAccountRedirect() {
  let obj = {
    label: require(1212) /* getSystemLocale */.t.zqv4nV,
    labelHook() {
      let obj = outer1_0(outer1_2[11]);
      obj = { screen: outer1_7.SETTINGS_CONTENT_AND_SOCIAL };
      obj.openUserSettings(obj);
    },
    noticeType: SafetySettingsNoticeType.RESTRICTED_ACCOUNTS_SETTING_NOTICE
  };
  return callback(importDefault(13701), obj);
}
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
let obj = {};
obj = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_24, gap: require("_createForOfIteratorHelperLoose").space.PX_24 };
obj.header = obj;
let closure_11 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo(() => {
  let obj = require(566) /* initialize */;
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.getCurrentUser());
  let obj1 = require(9270) /* handleOpenEmailVerification */;
  const bannerText = obj1.getBannerText(stateFromStores);
  const tmp = callback2();
  const items1 = [_isNativeReflectConstruct];
  const stateFromStores1 = require(566) /* initialize */.useStateFromStores(items1, () => outer1_5.getBlockedOrIgnoredIDs().length > 0);
  const callback = importAllResult.useCallback(() => {
    outer1_1(outer1_2[14]).open();
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
      obj.trailing = callback(require(4543) /* Button */.Button, obj1);
      obj.start = true;
      obj.end = true;
      tmp12 = callback(require(5165) /* TableRowInner */.TableRow, obj);
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
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_settings/account/native/SettingsAccountHeader.tsx");

export default memoResult;
