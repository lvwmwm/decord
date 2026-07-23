// Module ID: 9184
// Function ID: 71938
// Name: ChangeEmailCollectReasons
// Dependencies: [31, 27, 1849, 9185, 653, 33, 4130, 689, 566, 1456, 675, 668, 7519, 7518, 9186, 4126, 1212, 4543, 2]
// Exports: default

// Module 9184 (ChangeEmailCollectReasons)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ChangeEmailReasons from "ChangeEmailReasons";
import { AnalyticEvents } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_4;
let closure_5;
let closure_7;
let closure_8;
const require = arg1;
({ View: closure_4, ScrollView: closure_5 } = get_ActivityIndicator);
({ CHANGE_EMAIL_REASONS_ORDER: closure_7, SUSPICIOUS_CHANGE_EMAIL_REASONS: closure_8 } = ChangeEmailReasons);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.background = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.container = { paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_12, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj1 = { paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_12, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.radioGroup = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: 38 };
_createForOfIteratorHelperLoose.title = { textAlign: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: 38 };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/verification/native/components/ChangeEmailCollectReasons.tsx");

export default function ChangeEmailCollectReasons(changeEmailReason) {
  changeEmailReason = changeEmailReason.changeEmailReason;
  const setChangeEmailReason = changeEmailReason.setChangeEmailReason;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = changeEmailReason(navigation[8]);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.getCurrentUser());
  let obj1 = changeEmailReason(navigation[9]);
  navigation = obj1.useNavigation();
  const items1 = [navigation, changeEmailReason];
  const items2 = [setChangeEmailReason];
  const callback = callback1.useCallback(() => {
    let obj = setChangeEmailReason(navigation[10]);
    obj = { change_email_reason_enum: changeEmailReason };
    obj.track(outer1_9.USER_ACCOUNT_EMAIL_CHANGE_REASON_CONTINUE, obj);
    if (null != changeEmailReason) {
      if (outer1_8.has(changeEmailReason)) {
        navigation.push(changeEmailReason(navigation[11]).VerificationModalScenes.CHANGE_EMAIL_WARNING);
      }
    }
    navigation.push(changeEmailReason(navigation[11]).VerificationModalScenes.ENTER_EMAIL);
  }, items1);
  callback1 = callback1.useCallback((change_email_reason_enum) => {
    let obj = setChangeEmailReason(navigation[10]);
    obj = { change_email_reason_enum };
    obj.track(outer1_9.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED, obj);
    setChangeEmailReason(change_email_reason_enum);
  }, items2);
  const items3 = [changeEmailReason, callback1];
  let tmp7 = null;
  if (null != stateFromStores) {
    obj = { keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false, style: tmp.background };
    obj = { style: tmp.container };
    obj1 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary" };
    const intl = changeEmailReason(navigation[16]).intl;
    obj1.children = intl.string(changeEmailReason(navigation[16]).t["41NIIh"]);
    const items4 = [callback(changeEmailReason(navigation[15]).Text, obj1), , ];
    const obj2 = { style: tmp.radioGroup, children: tmp6 };
    items4[1] = callback(closure_4, obj2);
    const obj3 = { size: "md", variant: "primary", onPress: callback };
    const intl2 = changeEmailReason(navigation[16]).intl;
    obj3.text = intl2.string(changeEmailReason(navigation[16]).t.XiOHRX);
    obj3.disabled = null == changeEmailReason;
    items4[2] = callback(changeEmailReason(navigation[17]).Button, obj3);
    obj.children = items4;
    obj.children = callback2(closure_4, obj);
    tmp7 = callback(closure_5, obj);
  }
  return tmp7;
};
