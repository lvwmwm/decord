// Module ID: 9231
// Function ID: 72210
// Name: LinkButton
// Dependencies: [5, 57, 31, 27, 9232, 1194, 653, 33, 4130, 4660, 4126, 4471, 1212, 477, 4684, 9233, 1456, 566, 1459, 5588, 9234, 4472, 9235, 9236, 9237, 4029, 9238, 9242, 9243, 9245, 9239, 4543, 9246, 1553, 9248, 9250, 7574, 9254, 8777, 9255, 4541, 9262, 9043, 2]
// Exports: default

// Module 9231 (LinkButton)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _slicedToArray from "_slicedToArray";
import Button from "Button";
import { View } from "useLoginReset";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import { AuthStates } from "ME";
import jsxProd from "isMetaQuest";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
const require = arg1;
class LinkButton {
  constructor(arg0) {
    str = global.variant;
    ({ onPress, text, containerStyle, textStyle } = global);
    if (str === undefined) {
      str = "text-xs/medium";
    }
    str2 = global.textColor;
    if (str2 === undefined) {
      str2 = "text-link";
    }
    obj = { style: items, hitSlop: { top: 8, right: 8, bottom: 8 }, accessibilityRole: "button", onPress };
    items = [];
    items[0] = containerStyle;
    obj = { style: textStyle };
    obj.variant = str;
    obj.color = str2;
    obj.children = text;
    obj.children = jsx(require("Text").Text, obj);
    return jsx(require("PressableBase").PressableOpacity, obj);
  }
}
function handlePressPasswordManagerHint() {
  let obj = importDefault(4471);
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t.lzsy7t);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.body = intl2.string(require(1212) /* getSystemLocale */.t["TYqh/t"]);
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj.confirmText = intl3.string(require(1212) /* getSystemLocale */.t["9x0iKe"]);
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj.cancelText = intl4.string(require(1212) /* getSystemLocale */.t["ETE/oC"]);
  obj.onConfirm = function onConfirm() {
    if (obj.isAndroid()) {
      const result = outer1_1(outer1_2[14]).openAccessibilitySettings();
      const obj2 = outer1_1(outer1_2[14]);
    }
  };
  obj.show(obj);
}
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
let closure_12 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = { password: { marginTop: 24 }, button: { width: "100%", marginTop: 16 }, hint: { marginTop: 4 }, link: { alignSelf: "flex-start", paddingVertical: 4 }, separator: { paddingHorizontal: 16, paddingVertical: 4 } };
  obj = { marginTop: 32 };
  let num = 0;
  if (arg0) {
    num = 12;
  }
  obj.marginBottom = num;
  obj.content = obj;
  return obj;
});
let result = require("result").fileFinishedImporting("modules/auth/native/components/Login.tsx");

export default function Login(isMultiAccount) {
  let c3;
  let c4;
  let c5;
  let c8;
  let tmp10;
  let tmp14;
  let tmp6;
  let tmp8;
  let flag = isMultiAccount.isMultiAccount;
  if (flag === undefined) {
    flag = false;
  }
  let navigation;
  let ref;
  let callback;
  let callback2;
  let React;
  let first;
  let closure_7;
  c8 = undefined;
  let first1;
  let callback3;
  let closure_11;
  callback = undefined;
  let closure_13;
  let callback1;
  const tmp = callback(navigation(ref[15])());
  let obj = flag(ref[16]);
  navigation = obj.useNavigation();
  let obj1 = flag(ref[17]);
  const items = [closure_7];
  const stateFromStores = obj1.useStateFromStores(items, () => countryCode.getCountryCode());
  ref = React.useRef(null);
  [tmp6, c3] = callback2(React.useState(false), 2);
  const str = stateFromStores.code;
  const tmp5 = callback2(React.useState(false), 2);
  [tmp8, c4] = callback2(React.useState(false), 2);
  const tmp7 = callback2(React.useState(false), 2);
  [tmp10, c5] = callback2(React.useState({}), 2);
  const tmp11 = callback2(React.useState(""), 2);
  first = tmp11[0];
  closure_7 = tmp11[1];
  const tmp9 = callback2(React.useState({}), 2);
  [c8, tmp14] = callback2(React.useState(""), 2);
  const tmp15 = callback2(React.useState(false), 2);
  first1 = tmp15[0];
  callback3 = tmp15[1];
  closure_11 = React.useRef(undefined);
  const effect = React.useEffect(() => () => {
    clearTimeout(outer1_11.current);
  }, []);
  callback = React.useCallback((retry_after) => {
    _undefined3(retry_after);
    if (null != retry_after.retry_after) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      callback(true);
      const _setTimeout = setTimeout;
      ref.current = setTimeout(() => {
        outer1_10(false);
      }, 1000 * retry_after.retry_after);
    }
  }, []);
  let obj2 = flag(ref[18]);
  // CreateGeneratorClosureLongIndex (0x67)
  const items1 = [callback, first];
  closure_13 = React.useCallback(callback(obj2.useFocusEffect(React.useCallback(() => {
    _undefined2(false);
  }, []))), items1);
  const items2 = [callback, flag];
  callback1 = React.useCallback((() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = _undefined(tmp);
    return function() {
      return callback(...arguments);
    };
  })(), items2);
  // CreateGeneratorClosureLongIndex (0x67)
  const items3 = [callback, first1];
  callback2 = React.useCallback(callback(items2), items3);
  navigation(ref[27])();
  navigation(ref[28])(navigation, callback1);
  let tmp23 = navigation(ref[29])("login", tmp10);
  if (null == tmp23) {
    tmp23 = navigation(ref[29])("email", tmp10);
  }
  const tmp13 = callback2(React.useState(""), 2);
  let tmp28Result = null;
  if (flag(ref[30]).hasWebAuthn) {
    obj = { icon: callback3(flag(ref[32]).KeyIcon, {}), size: "lg", variant: "tertiary" };
    let tmp32 = tmp8;
    if (!tmp8) {
      tmp32 = first1;
    }
    obj.disabled = tmp32;
    const intl = flag(ref[12]).intl;
    obj.text = intl.string(flag(ref[12]).t.EiwJkN);
    obj.onPress = callback2;
    tmp28Result = callback3(flag(ref[31]).Button, obj);
    const tmp28 = callback3;
  }
  let obj4 = flag(ref[33]);
  if (obj4.isMetaQuest()) {
    obj = { icon: null, size: "lg", variant: "primary" };
    obj1 = { color: "control-primary-text-default" };
    obj.icon = callback3(flag(ref[34]).MobilePhoneIcon, obj1);
    obj.disabled = tmp8;
    const intl2 = flag(ref[12]).intl;
    obj.text = intl2.string(flag(ref[12]).t.Cc4Mc9);
    obj.onPress = function onPress() {
      return navigation.push(first1.COMPANION_REMOTE_AUTH);
    };
    tmp28Result = callback3(flag(ref[31]).Button, obj);
  }
  obj2 = {};
  const obj3 = {
    autoFocus: true,
    textContentType: "emailAddress",
    keyboardType: "email-address",
    alpha2: stateFromStores.alpha2,
    countryCode: callback2(str.split(" "), 1)[0],
    onChange(arg0, arg1) {
      countryCode(arg1 + arg0);
    },
    onSubmitEditing() {
      const current = ref.current;
      let focusResult;
      if (null != current) {
        focusResult = current.focus();
      }
      return focusResult;
    },
    returnKeyType: "next",
    autoCapitalize: "none"
  };
  const tmp26 = navigation(ref[29])("password", tmp10);
  const tmp39 = closure_11;
  const tmp40 = first;
  const intl3 = flag(ref[12]).intl;
  obj3.label = intl3.string(flag(ref[12]).t.tUjnxr);
  obj3.errorMessage = tmp23;
  obj3.testID = "login_login_input";
  obj3.onPressCountrySelector = function onPressCountrySelector() {
    return navigation.push(first1.COUNTRY_SELECT);
  };
  obj3.isClearable = true;
  obj3.autoComplete = "username";
  const items4 = [callback3(navigation(ref[35]), obj3), , , , ];
  obj4 = {
    containerStyle: tmp.password,
    ref,
    textContentType: "password",
    secureTextEntry: !tmp6,
    onChange: tmp14,
    autoCapitalize: "none",
    onSubmitEditing() {
      return callback1(first, c8);
    }
  };
  const intl4 = flag(ref[12]).intl;
  obj4.label = intl4.string(flag(ref[12]).t["CIGa+7"]);
  if (tmp6) {
    let EyeIcon = tmp43(tmp44[37]).EyeSlashIcon;
  } else {
    EyeIcon = tmp43(tmp44[38]).EyeIcon;
  }
  obj4.trailingIcon = EyeIcon;
  const obj5 = {};
  const intl5 = flag(ref[12]).intl;
  const string = intl5.string;
  const t = flag(ref[12]).t;
  if (tmp6) {
    let stringResult = string(t.Nusip4);
  } else {
    stringResult = string(t.nFzpM5);
  }
  obj5.accessibilityLabel = stringResult;
  obj5.onPress = function onPress() {
    return _undefined((arg0) => !arg0);
  };
  obj5.hitSlop = { top: 8, bottom: 8 };
  obj4.trailingPressableProps = obj5;
  obj4.returnKeyType = "done";
  obj4.errorMessage = tmp26;
  obj4.testID = "login_password_input";
  obj4.autoComplete = "current-password";
  items4[1] = callback3(flag(ref[36]).TextInput, obj4);
  const obj6 = {
    containerStyle: tmp.link,
    onPress() {
      return callback2();
    }
  };
  const intl6 = flag(ref[12]).intl;
  obj6.text = intl6.string(flag(ref[12]).t.wWIufs);
  items4[2] = callback3(closure_13, obj6);
  let obj12 = flag(ref[13]);
  let tmp46 = null;
  if (obj12.isAndroid()) {
    let obj13 = flag(ref[33]);
    tmp46 = null;
    if (!obj13.isMetaQuest()) {
      const obj7 = { containerStyle: tmp.link, onPress: callback1 };
      const intl7 = flag(ref[12]).intl;
      obj7.text = intl7.string(flag(ref[12]).t.RL5Fy2);
      obj7.textColor = "text-link";
      tmp46 = callback3(closure_13, obj7);
    }
  }
  items4[3] = tmp46;
  const obj8 = { style: tmp.button };
  const obj9 = { size: "lg" };
  const tmp41 = navigation(ref[35]);
  const tmp42 = callback3;
  const tmp54 = callback3;
  const tmp55 = first;
  const tmp56 = callback3;
  let str5 = "primary";
  if (obj18.isMetaQuest()) {
    str5 = "tertiary";
  }
  obj9.variant = str5;
  obj9.disabled = first1;
  obj9.loading = tmp8;
  const intl8 = flag(ref[12]).intl;
  obj9.text = intl8.string(flag(ref[12]).t.dKhVQN);
  obj9.onPress = function onPress() {
    return callback1(first, c8);
  };
  obj8.children = tmp56(flag(ref[31]).Button, obj9);
  items4[4] = tmp54(tmp55, obj8);
  obj2.children = items4;
  const tmp39Result = tmp39(tmp40, obj2);
  const obj10 = {};
  obj18 = flag(ref[33]);
  const tmp58 = callback3;
  const intl9 = flag(ref[12]).intl;
  obj10.headerText = intl9.string(flag(ref[12]).t["7fNJgA"]);
  const obj11 = { variant: "text-sm/medium", color: "text-default" };
  const intl10 = flag(ref[12]).intl;
  obj11.children = intl10.string(flag(ref[12]).t.euS7r4);
  obj10.subHeader = callback3(flag(ref[10]).Text, obj11);
  obj12 = { style: tmp.content };
  const tmp59 = navigation(ref[39]);
  const tmp60 = closure_11;
  const tmp61 = first;
  let tmp62 = tmp39Result;
  if (obj22.isMetaQuest()) {
    tmp62 = tmp28Result;
  }
  const items5 = [tmp62, , , ];
  obj13 = { style: tmp.separator, children: callback3(flag(ref[41]).OrSeparator, {}) };
  items5[1] = callback3(flag(ref[40]).Stack, obj13);
  obj22 = flag(ref[33]);
  if (obj24.isMetaQuest()) {
    tmp28Result = tmp39Result;
  }
  items5[2] = tmp28Result;
  let tmp63 = null;
  if (null != tmp10.message) {
    tmp63 = null;
    if ("" !== tmp10.message) {
      const obj14 = { style: tmp.hint, children: tmp10.message };
      tmp63 = callback3(navigation(ref[42]), obj14);
    }
  }
  items5[3] = tmp63;
  obj12.children = items5;
  obj10.children = tmp60(tmp61, obj12);
  return tmp58(tmp59, obj10);
};
export { LinkButton };
