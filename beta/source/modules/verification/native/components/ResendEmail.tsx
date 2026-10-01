// Module ID: 6006
// Function ID: 6007
// Name: ResendEmail
// Dependencies: [32, 19, 17, 2037, 1372, 1074, 21, 4836, 1485, 504, 38, 6007, 5933, 6008, 4832, 1115, 5281, 6010, 4528, 2]
// Exports: default

// Module 6006 (ResendEmail)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1074 */;
import intl5 from "intl" /* 1115 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4528 */;
import EmailVerificationModalActionCreatorsDefault from "EmailVerificationModalActionCreators" /* 5933 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6010 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 2037 */;
import UserStore from "UserStore" /* 1372 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let currentUser, navigation;

let c10;
let c9;
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
const VerificationModalScenes = Constants.VerificationModalScenes;
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_11 = createStyles.createStyles({ container: { flex: 1, padding: 16, justifyContent: "center", alignItems: "center" }, title: { marginTop: 16, textAlign: "center" }, body: { marginTop: 8, lineHeight: 18, textAlign: "center" }, resend: { marginTop: 16, width: "100%" }, change: { marginTop: 8, width: "100%" } });
let result = size.fileFinishedImporting("modules/verification/native/components/ResendEmail.tsx");

export default function ResendEmail() {
  let Button;
  let Button2;
  let action;
  let formatResult;
  let intl;
  let intl3;
  let intl4;
  let items4;
  let obj10;
  let obj12;
  let ref;
  let tmp10;
  let tmp = closure_11();
  let obj = navigation(1485);
  navigation = obj.useNavigation();
  let obj2 = navigation(504);
  const items = [UserStore];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    verified(dependencyMap[10])(null != currentUser, "ResendEmail: user cannot be undefined");
    return currentUser;
  });
  const verified = stateFromStores.verified;
  const email = stateFromStores.email;
  const items1 = [UserRequiredActionStore];
  const obj3 = navigation(504);
  const stateFromStores1 = obj3.useStateFromStores(items1, () => action.getAction());
  const obj4 = verified(6007);
  const result = obj4.isEmailReverification(stateFromStores1);
  let tmp16Result = !result;
  [tmp10, dependencyMap] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  _slicedToArray = react.useRef(verified);
  const items2 = [verified];
  const effect = react.useEffect(() => {
    const tmp = verified && false === ref.current;
    if (tmp) {
      const obj = EmailVerificationModalActionCreatorsDefault;
      obj.close();
    }
  }, items2);
  const effect1 = react.useEffect(() => {
    ref.current = verified;
  });
  const items3 = [navigation];
  const obj5 = { style: tmp.container, children: items4 };
  const callback = react.useCallback(() => {
    navigation.push(VerificationModalScenes.ENTER_EMAIL);
  }, items3);
  items4 = [closure_9(navigation(6008).EnvelopeOpenSpotIllustration, { scale: 0.75 }), , , , ];
  const obj6 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl.string(navigation(1115).t.fUtddV) };
  const Text = navigation(4832).Text;
  intl = navigation(1115).intl;
  items4[1] = closure_9(Text, obj6);
  const obj7 = { style: tmp.body, variant: "text-sm/medium", color: "text-default", children: formatResult };
  const Text2 = navigation(4832).Text;
  const intl2 = navigation(1115).intl;
  const tmp14 = closure_10;
  if (tmp10) {
    const obj8 = { email };
    formatResult = intl2.format(tmp2(1115).t.JqLgQL, obj8);
  } else {
    formatResult = intl2.string(tmp2(1115).t.tSXg8O);
  }
  items4[2] = closure_9(Text2, obj7);
  const obj9 = { style: tmp.resend, children: closure_9(Button, obj10) };
  obj10 = {
    text: intl3.string(navigation(1115).t.WnX4J2),
    variant: "primary",
    onPress() {
      let intl;
      dependencyMap(true);
      const obj = AuthenticationActionCreatorsDefault;
      obj.verifyResend();
      const obj2 = { key: "USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_CODE_SENT", content: intl.string(intl5.t["84yeoz"]) };
      const open = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      intl = intl5.intl;
      open(obj2);
    },
    grow: true
  };
  Button = tmp2(5281).Button;
  intl3 = tmp2(1115).intl;
  items4[3] = closure_9(View, obj9);
  if (!result) {
    const obj11 = { style: tmp.change, children: closure_9(Button2, obj12) };
    obj12 = { text: intl4.string(navigation(1115).t.Vm8akB), variant: "secondary", onPress: callback, grow: true };
    Button2 = tmp2(5281).Button;
    intl4 = tmp2(1115).intl;
    tmp16Result = tmp16(tmp15, obj11);
  }
  items4[4] = tmp16Result;
  return tmp14(View, obj5);
};
