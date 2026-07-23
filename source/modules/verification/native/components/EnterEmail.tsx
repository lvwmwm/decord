// Module ID: 9228
// Function ID: 72152
// Name: EnterEmail
// Dependencies: [5, 57, 31, 27, 1849, 9183, 653, 33, 4130, 689, 1456, 566, 668, 9229, 675, 4126, 1212, 9000, 4543, 2]
// Exports: default

// Module 9228 (EnterEmail)
import closure_4 from "setChangeEmailError";
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import setChangeEmailError from "setChangeEmailError";
import { AnalyticEvents } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_14;
let closure_15;
let closure_7;
let closure_8;
const require = arg1;
({ View: closure_7, ScrollView: closure_8 } = get_ActivityIndicator);
({ useChangeEmailError: closure_10, useChangeEmailStore: closure_11, ChangeEmailFields: closure_12 } = setChangeEmailError);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.background = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.container = { paddingVertical: 12, paddingHorizontal: 16 };
_createForOfIteratorHelperLoose.title = { textAlign: "center" };
_createForOfIteratorHelperLoose.prompt = { marginTop: 8, lineHeight: 18, textAlign: "center" };
_createForOfIteratorHelperLoose.input = { marginTop: 24, marginBottom: 16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("result").fileFinishedImporting("modules/verification/native/components/EnterEmail.tsx");

export default function EnterEmail(isChangeEmail) {
  isChangeEmail = isChangeEmail.isChangeEmail;
  const changeEmailReason = isChangeEmail.changeEmailReason;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = isChangeEmail(stateFromStores[10]);
  const navigation = obj.useNavigation();
  let obj1 = isChangeEmail(stateFromStores[11]);
  const items = [_isNativeReflectConstruct];
  stateFromStores = obj1.useStateFromStores(items, () => outer1_9.getCurrentUser());
  const tmp4 = callback(emailToken.useState(""), 2);
  const first = tmp4[0];
  const tmp6 = callback(callback2(constants.EMAIL), 2);
  callback = tmp7;
  emailToken = callback3().emailToken;
  const items1 = [navigation];
  callback = emailToken.useCallback((arg0) => {
    let closure_0 = arg0;
    const routes = navigation.getState().routes;
    return routes.findIndex((name) => name.name === closure_0);
  }, items1);
  const items2 = [navigation, stateFromStores, tmp6[1], first, emailToken, callback, isChangeEmail, changeEmailReason];
  const callback1 = emailToken.useCallback(() => {
    let obj = {};
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = first(tmp);
    obj.onSubmit = function() {
      return callback(...arguments);
    };
    obj.onSuccess = function onSuccess() {
      if (closure_0) {
        let obj = { change_email_reason_enum: outer1_1 };
        changeEmailReason(stateFromStores[14]).track(outer2_13.USER_ACCOUNT_EMAIL_CHANGE_SAVE_NEW_EMAIL, obj);
        const obj2 = changeEmailReason(stateFromStores[14]);
        const result = navigation(stateFromStores[13]).finishChangeEmailFlow(outer1_2, outer1_4);
        const obj4 = navigation(stateFromStores[13]);
      } else {
        obj = navigation(stateFromStores[13]);
        const result1 = obj.finishVerifyEmailFlow(outer1_2, outer1_7);
      }
    };
    obj.hideUnverifiedBanner = true;
    navigation.push(isChangeEmail(stateFromStores[12]).VerificationModalScenes.VERIFY_PASSWORD, obj);
  }, items2);
  let tmp11Result = null;
  if (null != stateFromStores) {
    obj = { style: tmp.background, keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false };
    obj = { style: tmp.container };
    obj1 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary" };
    if (null != stateFromStores.email) {
      const intl2 = isChangeEmail(stateFromStores[16]).intl;
      let stringResult = intl2.string(isChangeEmail(stateFromStores[16]).t.Vm8akB);
    } else {
      const intl = isChangeEmail(stateFromStores[16]).intl;
      stringResult = intl.string(isChangeEmail(stateFromStores[16]).t["CDTD/K"]);
    }
    obj1.children = stringResult;
    const items3 = [callback4(isChangeEmail(stateFromStores[15]).Text, obj1), , , ];
    let obj2 = { style: tmp.prompt, variant: "text-sm/medium", color: "text-default" };
    if (null != stateFromStores.email) {
      const intl4 = isChangeEmail(stateFromStores[16]).intl;
      const obj3 = { email: stateFromStores.email };
      let formatToPlainStringResult = intl4.formatToPlainString(isChangeEmail(stateFromStores[16]).t.Z7CaI7, obj3);
    } else {
      const intl3 = isChangeEmail(stateFromStores[16]).intl;
      formatToPlainStringResult = intl3.string(isChangeEmail(stateFromStores[16]).t.YXXMxK);
    }
    obj2.children = formatToPlainStringResult;
    items3[1] = callback4(isChangeEmail(stateFromStores[15]).Text, obj2);
    let obj4 = { style: tmp.input };
    const intl5 = isChangeEmail(stateFromStores[16]).intl;
    obj4.label = intl5.string(isChangeEmail(stateFromStores[16]).t["w/qqKK"]);
    obj4.textContentType = "emailAddress";
    obj4.keyboardType = "email-address";
    obj4.value = first;
    obj4.onChangeText = tmp4[1];
    obj4.onSubmitEditing = callback1;
    const intl6 = isChangeEmail(stateFromStores[16]).intl;
    obj4.placeholder = intl6.string(isChangeEmail(stateFromStores[16]).t.dI4d4S);
    obj4.returnKeyType = "done";
    obj4.autoCapitalize = "none";
    obj4.error = tmp6[0];
    obj4.autoFocus = true;
    items3[2] = callback4(changeEmailReason(stateFromStores[17]), obj4);
    const obj5 = {};
    const intl7 = isChangeEmail(stateFromStores[16]).intl;
    obj5.text = intl7.string(isChangeEmail(stateFromStores[16]).t.Vm8akB);
    obj5.onPress = callback1;
    obj5.disabled = "" === first || first === stateFromStores.email;
    items3[3] = callback4(isChangeEmail(stateFromStores[18]).Button, obj5);
    obj.children = items3;
    obj.children = closure_15(callback, obj);
    tmp11Result = tmp11(closure_8, obj);
    const tmp12 = closure_8;
    const tmp13 = closure_15;
    const tmp14 = callback;
    const tmp22 = callback4;
    const tmp30 = callback4;
    const tmp33 = changeEmailReason(stateFromStores[17]);
  }
  return tmp11Result;
};
