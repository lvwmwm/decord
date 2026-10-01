// Module ID: 6403
// Function ID: 6404
// Name: EnterEmail
// Dependencies: [5, 32, 19, 17, 1372, 5935, 1074, 21, 4836, 576, 1485, 504, 1094, 6404, 1241, 4832, 1115, 6023, 5281, 2]
// Exports: default

// Module 6403 (EnterEmail)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1372 */;
import ChangeEmailStore from "ChangeEmailStore" /* 5935 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c1, c2, navigation;

let c10;
let closure_12;
let closure_14;
let closure_15;
let metroImportAll;
let metroImportDefault;
let obj2;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
({ View: metroImportDefault, ScrollView: metroImportAll } = react_native);
({ useChangeEmailError: c10, useChangeEmailStore: unpackModuleId, ChangeEmailFields: closure_12 } = ChangeEmailStore);
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let obj = { background: obj2, container: { paddingVertical: 12, paddingHorizontal: 16 }, title: { textAlign: "center" }, prompt: { marginTop: 8, lineHeight: 18, textAlign: "center" }, input: { marginTop: 24, marginBottom: 16 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_16 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/verification/native/components/EnterEmail.tsx");

export default function EnterEmail(isChangeEmail) {
  let closure_5;
  let currentUser;
  let first1;
  let formatToPlainStringResult;
  let intl5;
  let intl6;
  let intl7;
  let items3;
  let obj4;
  let stringResult;
  let tmp11;
  let tmp17;
  let tmp18;
  let tmp8;
  let value;
  isChangeEmail = isChangeEmail.isChangeEmail;
  const changeEmailReason = isChangeEmail.changeEmailReason;
  let stateFromStores;
  value = undefined;
  let emailToken;
  let tmp = closure_16();
  const tmp2 = isChangeEmail;
  let obj = isChangeEmail(stateFromStores[10]);
  navigation = obj.useNavigation();
  let obj2 = isChangeEmail(stateFromStores[11]);
  const items = [UserStore];
  stateFromStores = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
  [value, tmp8] = emailToken.useState("");
  [first1, tmp11] = closure_10(constants.EMAIL);
  _slicedToArray = tmp11;
  emailToken = closure_11().emailToken;
  const items1 = [navigation];
  const callback = emailToken.useCallback((arg0) => {
    let closure_0 = arg0;
    const routes = navigation.getState().routes;
    return routes.findIndex((name) => name.name === closure_0);
  }, items1);
  const items2 = [navigation, stateFromStores, tmp11, value, emailToken, callback, isChangeEmail, changeEmailReason];
  const callback1 = emailToken.useCallback(() => {
    let change_email_reason_enum;
    const push = navigation.push;
    let obj = {
      onSubmit: function() {
        return closure_0(...arguments);
      },
      onSuccess() {
        const tmp = closure_0;
        if (tmp) {
          const obj3 = { change_email_reason_enum };
          const obj2 = changeEmailReason(stateFromStores[14]);
          obj2.track(constants.USER_ACCOUNT_EMAIL_CHANGE_SAVE_NEW_EMAIL, obj3);
          const obj4 = navigation(stateFromStores[13]);
          const result = obj4.finishChangeEmailFlow(closure_1_2, closure_1_4);
        } else {
          const obj = navigation(stateFromStores[13]);
          const result1 = obj.finishVerifyEmailFlow(closure_1_2, callback);
        }
      },
      hideUnverifiedBanner: true
    };
    const VERIFY_PASSWORD = isChangeEmail(stateFromStores[12]).VerificationModalScenes.VERIFY_PASSWORD;
    let closure_0 = first(function*(arg0, value) {
      let obj2;
      if (c1 === 2) {
        c1 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          let tmp4;
          c1 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c1 = 3;
              throw value;
            } else if (arg0 === 2) {
              c1 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              tmp4 = null;
              if (null != closure_1_3) {
                closure_1_5(null);
                const user = { email, password: tmp17, emailToken };
                c2 = 1;
                c1 = 1;
                const obj5 = { value: obj2.saveEmail(user, c2, callback), done: false };
                obj2 = navigation(stateFromStores[13]);
                return obj5;
              }
            }
          } else if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else {
            tmp4 = value;
            if (arg0 === 2) {
              c1 = 3;
              const obj = { value, done: true };
              return obj;
            }
          }
          c1 = 3;
          const obj6 = { value: tmp4, done: true };
          return obj6;
        } catch (tmp13) {
          c1 = 3;
          throw tmp13;
        }
      }
    });
    push(VERIFY_PASSWORD, obj);
  }, items2);
  let tmp15Result = null;
  if (null != stateFromStores) {
    let obj3 = { style: tmp.background, keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false, children: tmp17(tmp18, obj4) };
    obj4 = { style: tmp.container, children: items3 };
    tmp17 = closure_15;
    let obj5 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: stringResult };
    const Text = tmp2(tmp3[15]).Text;
    const tmp16 = closure_8;
    tmp18 = callback;
    if (null != stateFromStores.email) {
      const intl2 = tmp2(tmp3[16]).intl;
      stringResult = intl2.string(tmp2(tmp3[16]).t.Vm8akB);
    } else {
      const intl = tmp2(tmp3[16]).intl;
      stringResult = intl.string(tmp2(tmp3[16]).t["CDTD/K"]);
    }
    items3 = [tmp15(Text, obj5), , , ];
    let obj6 = { style: tmp.prompt, variant: "text-sm/medium", color: "text-default", children: formatToPlainStringResult };
    const Text2 = tmp2(tmp3[15]).Text;
    if (null != stateFromStores.email) {
      const intl4 = tmp2(tmp3[16]).intl;
      const obj7 = { email: stateFromStores.email };
      formatToPlainStringResult = intl4.formatToPlainString(tmp2(tmp3[16]).t.Z7CaI7, obj7);
    } else {
      const intl3 = tmp2(tmp3[16]).intl;
      formatToPlainStringResult = intl3.string(tmp2(tmp3[16]).t.YXXMxK);
    }
    items3[1] = closure_14(Text2, obj6);
    const obj8 = { style: tmp.input, label: intl5.string(tmp2(stateFromStores[16]).t["w/qqKK"]), textContentType: "emailAddress", keyboardType: "email-address", value, onChangeText: tmp8, onSubmitEditing: callback1, placeholder: intl6.string(tmp2(stateFromStores[16]).t.dI4d4S), returnKeyType: "done", autoCapitalize: "none", error: first1, autoFocus: true };
    const tmp22 = changeEmailReason(stateFromStores[17]);
    intl5 = tmp2(tmp3[16]).intl;
    intl6 = tmp2(tmp3[16]).intl;
    items3[2] = closure_14(tmp22, obj8);
    const obj9 = { text: intl7.string(tmp2(stateFromStores[16]).t.Vm8akB), onPress: callback1, disabled: "" === value || value === stateFromStores.email };
    const Button = tmp2(tmp3[18]).Button;
    intl7 = tmp2(tmp3[16]).intl;
    items3[3] = closure_14(Button, obj9);
    tmp15Result = tmp15(tmp16, obj3);
  }
  return tmp15Result;
};
