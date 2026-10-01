// Module ID: 5995
// Function ID: 5996
// Name: ChangeEmailCollectReasons
// Dependencies: [19, 17, 1372, 5996, 1074, 21, 4836, 576, 504, 1485, 1241, 1094, 5997, 6000, 6002, 4832, 1115, 5281, 2]
// Exports: default

// Module 5995 (ChangeEmailCollectReasons)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import ConstantsIOS from "ConstantsIOS" /* 1094 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import TableRadioGroup2 from "TableRadioGroup" /* 5997 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1372 */;
import VerificationConstants from "VerificationConstants" /* 5996 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let navigation;

let c10;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let unpackModuleId;
({ View: closure_4, ScrollView: hasOwnProperty } = react_native);
({ CHANGE_EMAIL_REASONS_ORDER: metroImportDefault, SUSPICIOUS_CHANGE_EMAIL_REASONS: metroImportAll } = VerificationConstants);
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { background: obj2, container: obj3, radioGroup: obj4, title: { textAlign: "center" } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16 };
obj4 = { paddingTop: nativeDefault.space.PX_16, paddingBottom: 38 };
let closure_12 = createStyles(obj);
const result = size.fileFinishedImporting("modules/verification/native/components/ChangeEmailCollectReasons.tsx");

export default function ChangeEmailCollectReasons(changeEmailReason) {
  let currentUser;
  let intl;
  let intl2;
  let items4;
  let obj4;
  changeEmailReason = changeEmailReason.changeEmailReason;
  const setChangeEmailReason = changeEmailReason.setChangeEmailReason;
  navigation = undefined;
  let callback1;
  let tmp = closure_12();
  let tmp2 = changeEmailReason;
  let obj = changeEmailReason(navigation[8]);
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj2 = changeEmailReason(navigation[9]);
  navigation = obj2.useNavigation();
  const items1 = [navigation, changeEmailReason];
  const items2 = [setChangeEmailReason];
  const callback = callback1.useCallback(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { change_email_reason_enum: changeEmailReason };
    obj.track(AnalyticEvents.USER_ACCOUNT_EMAIL_CHANGE_REASON_CONTINUE, obj2);
    const tmp2 = changeEmailReason;
    if (null != changeEmailReason) {
      if (metroImportAll.has(tmp2)) {
        navigation.push(ConstantsIOS.VerificationModalScenes.CHANGE_EMAIL_WARNING);
      }
    }
    navigation.push(ConstantsIOS.VerificationModalScenes.ENTER_EMAIL);
  }, items1);
  callback1 = callback1.useCallback((change_email_reason_enum) => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { change_email_reason_enum };
    obj.track(AnalyticEvents.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED, obj2);
    setChangeEmailReason(change_email_reason_enum);
  }, items2);
  const items3 = [changeEmailReason, callback1];
  let tmp9 = null;
  if (null != stateFromStores) {
    const obj3 = { keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false, style: tmp.background, children: closure_11(closure_4, obj4) };
    obj4 = { style: tmp.container, children: items4 };
    const obj5 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl.string(tmp2(navigation[16]).t["41NIIh"]) };
    const Text = tmp2(tmp3[15]).Text;
    intl = tmp2(tmp3[16]).intl;
    items4 = [closure_10(Text, obj5), , ];
    const obj6 = { style: tmp.radioGroup, children: tmp8 };
    items4[1] = closure_10(closure_4, obj6);
    const obj7 = { size: "md", variant: "primary", onPress: callback, text: intl2.string(tmp2(navigation[16]).t.XiOHRX), disabled: null == changeEmailReason };
    const Button = tmp2(tmp3[17]).Button;
    intl2 = tmp2(tmp3[16]).intl;
    items4[2] = closure_10(Button, obj7);
    tmp9 = closure_10(closure_5, obj3);
  }
  return tmp9;
};
