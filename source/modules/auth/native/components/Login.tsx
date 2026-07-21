// Module ID: 9187
// Function ID: 71947
// Name: LinkButton
// Dependencies: []
// Exports: default

// Module 9187 (LinkButton)
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
    obj = { style: items, hitSlop: {}, accessibilityRole: "button", onPress };
    items = [];
    items[0] = containerStyle;
    obj = { style: textStyle };
    obj.variant = str;
    obj.color = str2;
    obj.children = text;
    obj.children = jsx(arg1(dependencyMap[10]).Text, obj);
    return jsx(arg1(dependencyMap[9]).PressableOpacity, obj);
  }
}
function handlePressPasswordManagerHint() {
  let obj = importDefault(dependencyMap[11]);
  obj = {};
  const intl = arg1(dependencyMap[12]).intl;
  obj.title = intl.string(arg1(dependencyMap[12]).t.lzsy7t);
  const intl2 = arg1(dependencyMap[12]).intl;
  obj.body = intl2.string(arg1(dependencyMap[12]).t.TYqh/t);
  const intl3 = arg1(dependencyMap[12]).intl;
  obj.confirmText = intl3.string(arg1(dependencyMap[12]).t.9x0iKe);
  const intl4 = arg1(dependencyMap[12]).intl;
  obj.cancelText = intl4.string(arg1(dependencyMap[12]).t.ETE/oC);
  obj.onConfirm = function onConfirm() {
    if (obj.isAndroid()) {
      const result = callback2(closure_2[14]).openAccessibilitySettings();
      const obj2 = callback2(closure_2[14]);
    }
  };
  obj.show(obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const View = arg1(dependencyMap[3]).View;
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
const AuthStates = arg1(dependencyMap[6]).AuthStates;
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[7]));
const tmp2 = arg1(dependencyMap[7]);
let closure_12 = arg1(dependencyMap[8]).createStyles((arg0) => {
  let obj = { password: { marginTop: 24 }, button: {}, hint: { marginTop: 4 }, link: {}, separator: { MKTG_HYPESQUAD_FORM_SUBMITTED: "last_payment_error", marginInlineEnd: "$" } };
  obj = { marginTop: 32 };
  let num = 0;
  if (arg0) {
    num = 12;
  }
  obj.marginBottom = num;
  obj.content = obj;
  return obj;
});
const obj = arg1(dependencyMap[8]);
const result = arg1(dependencyMap[43]).fileFinishedImporting("modules/auth/native/components/Login.tsx");

export default function Login(isMultiAccount) {
  let tmp10;
  let tmp14;
  let tmp6;
  let tmp8;
  let flag = isMultiAccount.isMultiAccount;
  if (flag === undefined) {
    flag = false;
  }
  const arg1 = flag;
  let importDefault;
  let dependencyMap;
  let callback;
  let callback2;
  let React;
  let View;
  let closure_7;
  let closure_8;
  let AuthStates;
  let callback3;
  let closure_11;
  let callback4;
  let closure_13;
  let handlePressPasswordManagerHint;
  const tmp = callback4(importDefault(dependencyMap[15])());
  let obj = arg1(dependencyMap[16]);
  const navigation = obj.useNavigation();
  importDefault = navigation;
  let obj1 = arg1(dependencyMap[17]);
  const items = [closure_7];
  const stateFromStores = obj1.useStateFromStores(items, () => countryCode.getCountryCode());
  const ref = React.useRef(null);
  dependencyMap = ref;
  [tmp6, closure_3] = callback2(React.useState(false), 2);
  const str = stateFromStores.code;
  const tmp5 = callback2(React.useState(false), 2);
  [tmp8, closure_4] = callback2(React.useState(false), 2);
  const tmp7 = callback2(React.useState(false), 2);
  [tmp10, closure_5] = callback2(React.useState({}), 2);
  const tmp11 = callback2(React.useState(""), 2);
  const first = tmp11[0];
  View = first;
  closure_7 = tmp11[1];
  const tmp9 = callback2(React.useState({}), 2);
  [closure_8, tmp14] = callback2(React.useState(""), 2);
  const tmp15 = callback2(React.useState(false), 2);
  const first1 = tmp15[0];
  AuthStates = first1;
  callback3 = tmp15[1];
  closure_11 = React.useRef(undefined);
  const effect = React.useEffect(() => () => {
    clearTimeout(ref.current);
  }, []);
  callback = React.useCallback((retry_after) => {
    _undefined3(retry_after);
    if (null != retry_after.retry_after) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      callback(true);
      const _setTimeout = setTimeout;
      ref.current = setTimeout(() => {
        callback(false);
      }, 1000 * retry_after.retry_after);
    }
  }, []);
  callback4 = callback;
  let obj2 = arg1(dependencyMap[18]);
  // CreateGeneratorClosureLongIndex (0x67)
  const items1 = [callback, first];
  closure_13 = React.useCallback(callback(obj2.useFocusEffect(React.useCallback(() => {
    _undefined2(false);
  }, []))), items1);
  const items2 = [callback, flag];
  const callback1 = React.useCallback(() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = _undefined(tmp);
    return function() {
      return callback(...arguments);
    };
  }(), items2);
  handlePressPasswordManagerHint = callback1;
  // CreateGeneratorClosureLongIndex (0x67)
  const items3 = [callback, first1];
  callback2 = React.useCallback(callback(items2), items3);
  importDefault(dependencyMap[27])();
  importDefault(dependencyMap[28])(navigation, callback1);
  let tmp23 = importDefault(dependencyMap[29])("login", tmp10);
  if (null == tmp23) {
    tmp23 = importDefault(dependencyMap[29])("email", tmp10);
  }
  const tmp13 = callback2(React.useState(""), 2);
  let tmp28Result = null;
  if (arg1(dependencyMap[30]).hasWebAuthn) {
    obj = { icon: callback3(arg1(dependencyMap[32]).KeyIcon, {}) };
    let tmp32 = tmp8;
    if (!tmp8) {
      tmp32 = first1;
    }
    obj.disabled = tmp32;
    const intl = arg1(dependencyMap[12]).intl;
    obj.text = intl.string(arg1(dependencyMap[12]).t.EiwJkN);
    obj.onPress = callback2;
    tmp28Result = callback3(arg1(dependencyMap[31]).Button, obj);
    const tmp28 = callback3;
  }
  let obj4 = arg1(dependencyMap[33]);
  if (obj4.isMetaQuest()) {
    obj = {};
    obj1 = { color: "control-primary-text-default" };
    obj.icon = callback3(arg1(dependencyMap[34]).MobilePhoneIcon, obj1);
    obj.disabled = tmp8;
    const intl2 = arg1(dependencyMap[12]).intl;
    obj.text = intl2.string(arg1(dependencyMap[12]).t.Cc4Mc9);
    obj.onPress = function onPress() {
      return navigation.push(first1.COMPANION_REMOTE_AUTH);
    };
    tmp28Result = callback3(arg1(dependencyMap[31]).Button, obj);
  }
  obj2 = {};
  const obj3 = {
    test: null,
    marginBottom: false,
    start: "guilds-bar-view",
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
  const tmp26 = importDefault(dependencyMap[29])("password", tmp10);
  const tmp39 = closure_11;
  const tmp40 = View;
  const intl3 = arg1(dependencyMap[12]).intl;
  obj3.label = intl3.string(arg1(dependencyMap[12]).t.tUjnxr);
  obj3.errorMessage = tmp23;
  obj3.testID = "login_login_input";
  obj3.onPressCountrySelector = function onPressCountrySelector() {
    return navigation.push(first1.COUNTRY_SELECT);
  };
  obj3.isClearable = true;
  obj3.autoComplete = "username";
  const items4 = [callback3(importDefault(dependencyMap[35]), obj3), , , , ];
  obj4 = {
    containerStyle: tmp.password,
    ref,
    textContentType: "password",
    secureTextEntry: !tmp6,
    onChange: tmp14,
    autoCapitalize: "none",
    onSubmitEditing() {
      return callback1(first, closure_8);
    }
  };
  const intl4 = arg1(dependencyMap[12]).intl;
  obj4.label = intl4.string(arg1(dependencyMap[12]).t.CIGa+7);
  if (tmp6) {
    let EyeIcon = tmp43(tmp44[37]).EyeSlashIcon;
  } else {
    EyeIcon = tmp43(tmp44[38]).EyeIcon;
  }
  obj4.trailingIcon = EyeIcon;
  const obj5 = {};
  const intl5 = arg1(dependencyMap[12]).intl;
  const string = intl5.string;
  const t = arg1(dependencyMap[12]).t;
  if (tmp6) {
    let stringResult = string(t.Nusip4);
  } else {
    stringResult = string(t.nFzpM5);
  }
  obj5.accessibilityLabel = stringResult;
  obj5.onPress = function onPress() {
    return _undefined((arg0) => !arg0);
  };
  obj5.hitSlop = {};
  obj4.trailingPressableProps = obj5;
  obj4.returnKeyType = "done";
  obj4.errorMessage = tmp26;
  obj4.testID = "login_password_input";
  obj4.autoComplete = "current-password";
  items4[1] = callback3(arg1(dependencyMap[36]).TextInput, obj4);
  const obj6 = {
    containerStyle: tmp.link,
    onPress() {
      return callback2();
    }
  };
  const intl6 = arg1(dependencyMap[12]).intl;
  obj6.text = intl6.string(arg1(dependencyMap[12]).t.wWIufs);
  items4[2] = callback3(closure_13, obj6);
  let obj12 = arg1(dependencyMap[13]);
  let tmp46 = null;
  if (obj12.isAndroid()) {
    let obj13 = arg1(dependencyMap[33]);
    tmp46 = null;
    if (!obj13.isMetaQuest()) {
      const obj7 = { containerStyle: tmp.link, onPress: handlePressPasswordManagerHint };
      const intl7 = arg1(dependencyMap[12]).intl;
      obj7.text = intl7.string(arg1(dependencyMap[12]).t.RL5Fy2);
      obj7.textColor = "text-link";
      tmp46 = callback3(closure_13, obj7);
    }
  }
  items4[3] = tmp46;
  const obj8 = { style: tmp.button };
  const obj9 = { size: "lg" };
  const tmp41 = importDefault(dependencyMap[35]);
  const tmp42 = callback3;
  const tmp54 = callback3;
  const tmp55 = View;
  const tmp56 = callback3;
  let str5 = "primary";
  if (obj18.isMetaQuest()) {
    str5 = "tertiary";
  }
  obj9.variant = str5;
  obj9.disabled = first1;
  obj9.loading = tmp8;
  const intl8 = arg1(dependencyMap[12]).intl;
  obj9.text = intl8.string(arg1(dependencyMap[12]).t.dKhVQN);
  obj9.onPress = function onPress() {
    return callback1(first, closure_8);
  };
  obj8.children = tmp56(arg1(dependencyMap[31]).Button, obj9);
  items4[4] = tmp54(tmp55, obj8);
  obj2.children = items4;
  const tmp39Result = tmp39(tmp40, obj2);
  const obj10 = {};
  const obj18 = arg1(dependencyMap[33]);
  const tmp58 = callback3;
  const intl9 = arg1(dependencyMap[12]).intl;
  obj10.headerText = intl9.string(arg1(dependencyMap[12]).t.7fNJgA);
  const obj11 = {};
  const intl10 = arg1(dependencyMap[12]).intl;
  obj11.children = intl10.string(arg1(dependencyMap[12]).t.euS7r4);
  obj10.subHeader = callback3(arg1(dependencyMap[10]).Text, obj11);
  obj12 = { style: tmp.content };
  const tmp59 = importDefault(dependencyMap[39]);
  const tmp60 = closure_11;
  const tmp61 = View;
  let tmp62 = tmp39Result;
  if (obj22.isMetaQuest()) {
    tmp62 = tmp28Result;
  }
  const items5 = [tmp62, , , ];
  obj13 = { style: tmp.separator, children: callback3(arg1(dependencyMap[41]).OrSeparator, {}) };
  items5[1] = callback3(arg1(dependencyMap[40]).Stack, obj13);
  const obj22 = arg1(dependencyMap[33]);
  if (obj24.isMetaQuest()) {
    tmp28Result = tmp39Result;
  }
  items5[2] = tmp28Result;
  let tmp63 = null;
  if (null != tmp10.message) {
    tmp63 = null;
    if ("" !== tmp10.message) {
      const obj14 = { style: tmp.hint, children: tmp10.message };
      tmp63 = callback3(importDefault(dependencyMap[42]), obj14);
    }
  }
  items5[3] = tmp63;
  obj12.children = items5;
  obj10.children = tmp60(tmp61, obj12);
  return tmp58(tmp59, obj10);
};
export { LinkButton };
