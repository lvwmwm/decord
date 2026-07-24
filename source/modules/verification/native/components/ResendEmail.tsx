// Module ID: 9224
// Function ID: 72166
// Name: ResendEmail
// Dependencies: [57, 31, 27, 1342, 1849, 653, 33, 4130, 1456, 566, 44, 9225, 9217, 5807, 4126, 1212, 4543, 5588, 3831, 2]
// Exports: default

// Module 9224 (ResendEmail)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { VerificationModalScenes } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_9;
const require = arg1;
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
let closure_11 = _createForOfIteratorHelperLoose.createStyles({ container: { flex: 1, padding: 16, justifyContent: "center", alignItems: "center" }, title: { marginTop: 16, textAlign: "center" }, body: { marginTop: 8, lineHeight: 18, textAlign: "center" }, resend: { marginTop: 16, width: "100%" }, change: { marginTop: 8, width: "100%" } });
const result = require("get ActivityIndicator").fileFinishedImporting("modules/verification/native/components/ResendEmail.tsx");

export default function ResendEmail() {
  let dependencyMap;
  let tmp7;
  let tmp = callback3();
  let obj = navigation(1456);
  navigation = obj.useNavigation();
  let obj1 = navigation(566);
  const items = [closure_7];
  const stateFromStores = obj1.useStateFromStores(items, () => {
    const currentUser = outer1_7.getCurrentUser();
    verified(outer1_2[10])(null != currentUser, "ResendEmail: user cannot be undefined");
    return currentUser;
  });
  const verified = stateFromStores.verified;
  let obj2 = navigation(566);
  const items1 = [_isNativeReflectConstruct];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => outer1_6.getAction());
  let obj3 = verified(9225);
  let tmp5 = !obj3.isEmailReverification(stateFromStores1);
  [tmp7, dependencyMap] = callback(React.useState(false), 2);
  callback = React.useRef(verified);
  const items2 = [verified];
  const effect = React.useEffect(() => {
    let tmp = verified;
    if (verified) {
      tmp = false === ref.current;
    }
    if (tmp) {
      verified(outer1_2[12]).close();
      const obj = verified(outer1_2[12]);
    }
  }, items2);
  const effect1 = React.useEffect(() => {
    _slicedToArray.current = verified;
  });
  const items3 = [navigation];
  obj = { style: tmp.container };
  callback = React.useCallback(() => {
    navigation.push(outer1_8.ENTER_EMAIL);
  }, items3);
  const items4 = [callback2(navigation(5807).EnvelopeOpenSpotIllustration, { scale: 0.75 }), , , , ];
  obj = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary" };
  let intl = navigation(1212).intl;
  obj.children = intl.string(navigation(1212).t.fUtddV);
  items4[1] = callback2(navigation(4126).Text, obj);
  obj1 = { style: tmp.body, variant: "text-sm/medium", color: "text-default" };
  const intl2 = navigation(1212).intl;
  if (tmp7) {
    obj2 = { email: stateFromStores.email };
    let formatResult = intl2.format(tmp14(1212).t.JqLgQL, obj2);
  } else {
    formatResult = intl2.string(tmp14(1212).t.tSXg8O);
  }
  obj1.children = formatResult;
  items4[2] = callback2(navigation(4126).Text, obj1);
  obj3 = { style: tmp.resend };
  const obj4 = {};
  const intl3 = navigation(1212).intl;
  obj4.text = intl3.string(navigation(1212).t.WnX4J2);
  obj4.variant = "primary";
  obj4.onPress = function onPress() {
    callback(true);
    let obj = verified(outer1_2[17]);
    obj.verifyResend();
    obj = { key: "USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_CODE_SENT" };
    const intl = navigation(outer1_2[15]).intl;
    obj.content = intl.string(navigation(outer1_2[15]).t["84yeoz"]);
    verified(outer1_2[18]).open(obj);
  };
  obj4.grow = true;
  obj3.children = callback2(navigation(4543).Button, obj4);
  items4[3] = callback2(View, obj3);
  if (tmp5) {
    const obj5 = { style: tmp.change };
    const obj6 = {};
    const intl4 = navigation(1212).intl;
    obj6.text = intl4.string(navigation(1212).t.Vm8akB);
    obj6.variant = "secondary";
    obj6.onPress = callback;
    obj6.grow = true;
    obj5.children = callback2(navigation(4543).Button, obj6);
    tmp5 = callback2(View, obj5);
  }
  items4[4] = tmp5;
  obj.children = items4;
  return closure_10(View, obj);
};
