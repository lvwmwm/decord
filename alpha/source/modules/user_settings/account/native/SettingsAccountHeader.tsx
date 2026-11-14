// Module ID: 17210
// Function ID: 17211
// Name: SettingsAccountHeader
// Dependencies: [19, 17, 5248, 1388, 1072, 6910, 21, 5306, 575, 17211, 1113, 8604, 504, 7815, 7740, 7443, 5936, 2]

// Module 17210 (SettingsAccountHeader)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl from "intl" /* 1113 */;
import components_Button_Button from "components/Button/Button" /* 5936 */;
import Constants2 from "Constants" /* 6910 */;
import EmailVerificationModalActionCreatorsDefault from "EmailVerificationModalActionCreators" /* 7740 */;
import UserSettingsAccountUnverifiedHeader from "UserSettingsAccountUnverifiedHeader" /* 7815 */;
import openUserSettings from "openUserSettings" /* 8604 */;
import SafetySettingsNoticeDefault from "SafetySettingsNotice" /* 17211 */;
import react from "react" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 5248 */;
import UserStore from "UserStore" /* 1388 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let obj2;
function RestrictedAccountRedirect() {
  let obj = {
    label: intl.t.zqv4nV,
    labelHook: function handleRestrictedAccountRedirect() {
      const obj = openUserSettings;
      const obj2 = { screen: constants.SETTINGS_CONTENT_AND_SOCIAL };
      obj.openUserSettings(obj2);
    },
    noticeType: SafetySettingsNoticeType.RESTRICTED_ACCOUNTS_SETTING_NOTICE
  };
  const tmp = SafetySettingsNoticeDefault;
  return React4(tmp, obj);
}
const View = react_native.View;
const AnalyticsSections = Constants.AnalyticsSections;
const SafetySettingsNoticeType = Constants2.SafetySettingsNoticeType;
({ jsx: c9, jsxs: c10 } = Fragment);
let obj = { header: obj2 };
obj2 = { paddingTop: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_24 };
let closure_11 = createStyles.createStyles(obj);
const memoResult = react.memo(function SettingsAccountHeader() {
  let blockedOrIgnoredIDs;
  let currentUser;
  let items2;
  let obj10;
  let tmp9Result;
  const tmp = closure_11();
  let obj = get_initialized;
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj2 = UserSettingsAccountUnverifiedHeader;
  const bannerText = obj2.getBannerText(stateFromStores);
  const items1 = [RelationshipStore];
  const obj3 = get_initialized;
  const stateFromStores1 = obj3.useStateFromStores(items1, () => blockedOrIgnoredIDs.getBlockedOrIgnoredIDs().size > 0);
  const callback = react.useCallback(() => {
    const obj = EmailVerificationModalActionCreatorsDefault;
    obj.open();
  }, []);
  if (null != bannerText) {
    let tmp11 = null;
    const obj4 = { style: tmp.header, children: items2 };
    const tmp10 = View;
    const tmp9 = authStore;
    if (stateFromStores1) {
      tmp11 = React4(RestrictedAccountRedirect, {});
    }
    items2 = [tmp11, ];
    let tmp14 = null;
    if (null != bannerText) {
      ({ title: obj5.label, title: obj5.accessibilityLabel } = bannerText);
      const obj9 = { onPress: callback, variant: "danger", label: null, accessibilityLabel: null, trailing: React4(components_Button_Button.Button, obj10), start: true, end: true };
      const TableRow = tmp2(7443).TableRow;
      obj10 = { text: null, accessibilityLabel: null, onPress: callback };
      ({ button: obj6.text, button: obj6.accessibilityLabel } = bannerText);
      tmp14 = React4(TableRow, obj9);
    }
    items2[1] = tmp14;
    tmp9Result = tmp9(tmp10, obj4);
  } else {
    tmp9Result = null;
  }
  return tmp9Result;
});
const result = size.fileFinishedImporting("modules/user_settings/account/native/SettingsAccountHeader.tsx");

export default memoResult;
