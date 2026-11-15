// Module ID: 7212
// Function ID: 7213
// Name: Login
// Dependencies: [5, 32, 19, 17, 7213, 502, 1072, 21, 5170, 7076, 5783, 6123, 1113, 1377, 7214, 7215, 1499, 504, 1502, 6827, 7217, 6124, 7218, 7219, 7220, 6611, 7221, 7225, 7226, 7228, 7222, 5790, 7229, 1624, 7231, 7233, 7181, 7239, 6191, 7243, 7211, 2]
// Exports: default

// Module 7212 (Login)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1072 */;
import intl10 from "intl" /* 1113 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import Text_Text from "Text/Text" /* 5783 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 6123 */;
import Pressables from "Pressables" /* 7076 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import PhoneStore from "PhoneStore" /* 7213 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _undefined2, c5, closure_5, navigation;

let c10;
let unpackModuleId;
class LinkButton {
  constructor(variant) {
    let containerStyle;
    let onPress;
    let text;
    let textStyle;
    let str = variant.variant;
    ({ onPress, text, containerStyle, textStyle } = variant);
    if (str === undefined) {
      str = "body-xs/medium";
    }
    let str2 = variant.textColor;
    if (str2 === undefined) {
      str2 = "text-link";
    }
    const obj = { style: containerStyle, hitSlop: { top: 8, right: 8, bottom: 8 }, accessibilityRole: "button", onPress, children: authStore(Text_Text.Text, { style: textStyle, variant: str, color: str2, children: text }) };
    const PressableOpacity = Pressables.PressableOpacity;
    return authStore(PressableOpacity, obj);
  }
}
function handlePressPasswordManagerHint() {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let tmp = actions_AlertActionCreatorsDefault;
  let obj = {
    title: intl.string(intl10.t.lzsy7t),
    body: intl2.string(intl10.t["TYqh/t"]),
    confirmText: intl3.string(intl10.t["9x0iKe"]),
    cancelText: intl4.string(intl10.t["ETE/oC"]),
    onConfirm() {
      const obj = PlatformUtils;
      const tmp = dependencyMap;
      if (obj.isAndroid()) {
        const obj2 = require("react-native");
        const result = obj2.openAccessibilitySettings();
      }
    }
  };
  const show = tmp.show;
  intl = intl10.intl;
  intl2 = intl10.intl;
  intl3 = intl10.intl;
  intl4 = intl10.intl;
  show(obj);
}
let _asyncToGenerator = _asyncToGenerator_mod;
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
const AuthStates = Constants.AuthStates;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let closure_12 = createStyles.createStyles((arg0) => {
  let num;
  const obj = { password: { marginTop: 24 }, button: { width: "100%", marginTop: 16 }, hint: { marginTop: 4 }, link: { alignSelf: "flex-start", paddingVertical: 4 }, separator: { paddingHorizontal: 16, paddingVertical: 4 }, content: { marginTop: 32, marginBottom: num } };
  num = 0;
  if (arg0) {
    num = 12;
  }
  return obj;
});
let result = size.fileFinishedImporting("modules/auth/native/components/Login.tsx");

export default function Login(isMultiAccount) {
  let Button3;
  let Text;
  let _undefined;
  let c3;
  let c4;
  let c7;
  let closure_6;
  let closure_9;
  let countryCode;
  let first1;
  let first2;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let items5;
  let obj12;
  let obj14;
  let obj15;
  let tmp10;
  let tmp12;
  let tmp16;
  let flag = isMultiAccount.isMultiAccount;
  if (flag === undefined) {
    flag = false;
  }
  navigation = undefined;
  _asyncToGenerator = undefined;
  _slicedToArray = undefined;
  first1 = undefined;
  closure_6 = undefined;
  c7 = undefined;
  first2 = undefined;
  closure_9 = undefined;
  let ref;
  closure_12 = undefined;
  let tmp = navigation;
  const tmp3 = closure_12(navigation(ref[15])());
  const tmp4 = flag;
  let obj = flag(ref[16]);
  navigation = obj.useNavigation();
  let obj2 = flag(ref[17]);
  const items = [c7];
  const stateFromStores = obj2.useStateFromStores(items, () => countryCode.getCountryCode());
  const str = stateFromStores.code;
  const first = _slicedToArray(str.split(" "), 1)[0];
  first1.useRef(null);
  [tmp10, c3] = _slicedToArray(first1.useState(false), 2);
  const tmp9 = _slicedToArray(first1.useState(false), 2);
  [tmp12, c4] = _slicedToArray(first1.useState({}), 2);
  const tmp11 = _slicedToArray(first1.useState({}), 2);
  [first1, closure_6] = first1.useState("");
  [c7, tmp16] = _slicedToArray(first1.useState(""), 2);
  const tmp15 = _slicedToArray(first1.useState(""), 2);
  [first2, closure_9] = first1.useState(false);
  ref = first1.useRef(undefined);
  const effect = first1.useEffect(() => () => {
    clearTimeout(ref.current);
  }, []);
  const callback = first1.useCallback((retry_after) => {
    _undefined2(retry_after);
    if (null != retry_after.retry_after) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      closure_9(true);
      const _setTimeout = setTimeout;
      ref.current = setTimeout(() => {
        closure_1_9(false);
      }, 1000 * retry_after.retry_after);
    }
  }, []);
  let obj3 = flag(ref[18]);
  const focusEffect = obj3.useFocusEffect(first1.useCallback(() => {
    _undefined(false);
  }, []));
  const items1 = [callback, first1];
  closure_12 = first1.useCallback(_asyncToGenerator(async (arg0, value) => {
    let closure_1;
    let closure_2;
    let intl;
    let intl2;
    let obj4;
    let obj9;
    let v0;
    let v2;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        let closure_0;
        let tmp;
        c5 = 2;
        if (0 === _undefined2) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_0 = undefined;
            tmp = undefined;
            v0(true);
            _undefined2({});
            v0 = 2;
            _undefined2 = 3;
            c5 = 1;
            const obj6 = { value: obj4.forgotPassword(first1), done: false };
            obj4 = tmp(ref[19]);
            return obj6;
          }
        } else if (1 === _undefined2) {
          v0 = 0;
          closure_129_3(false);
          throw ref;
        } else {
          if (2 === _undefined2) {
            v0 = 1;
            const obj3 = closure_0(ref[23]);
            tmp = obj3.getAuthenticationErrorsFromV6OrEarlierAPIError(ref);
            closure_129_11(tmp);
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            v0 = 0;
            closure_129_3(false);
            c5 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            closure_0 = value;
            if (false === closure_0) {
              v0 = 0;
              closure_129_3(false);
              c5 = 3;
              return { value: "HermesInternal", done: null };
            } else {
              if (closure_0 === closure_0(ref[20]).PasswordResetMethods.ONE_TIME_LOGIN) {
                const obj = closure_0(ref[21]);
                obj.openAlert("one-time-login-forgot-password-confirm", ref(tmp(ref[22]), {}));
              } else {
                const obj8 = { title: intl.string(closure_0(ref[12]).t.f5Pi7A), body: intl2.format(closure_0(ref[12]).t["6u5hQ9"], obj9) };
                const show = tmp(ref[11]).show;
                const tmp58 = tmp(ref[11]);
                intl = closure_0(ref[12]).intl;
                intl2 = closure_0(ref[12]).intl;
                obj9 = { email: closure_129_5 };
                show(obj8);
              }
              v0 = 1;
            }
          }
          v0 = 0;
          closure_129_3(false);
          c5 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp43) {
        ref = tmp43;
        if (0 === v0) {
          c5 = 3;
          throw tmp43;
        } else if (1 === tmp45) {
          _undefined2 = 1;
        } else {
          _undefined2 = 2;
        }
      }
    }
  }), items1);
  const useCallback = first1.useCallback;
  let closure_0 = _asyncToGenerator(async (arg0, password) => {
    let closure_3;
    let closure_4;
    closure_0 = arg0;
    let closure_2 = arg2;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    const iter = (async (arg0, value) => {
      let obj7;
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          let authenticationErrorsFromV6OrEarlierAPIError;
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              authenticationErrorsFromV6OrEarlierAPIError = tmp4;
              flag = closure_2;
              if (closure_2 === undefined) {
                flag = false;
              }
              authenticationErrorsFromV6OrEarlierAPIError = undefined;
              c7 = 1;
              c8 = 1;
              return { value: "flexDirection", done: true };
            }
          } else if (1 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              authenticationErrorsFromV6OrEarlierAPIError(true);
              tmp({});
              c6 = 1;
              c7 = 3;
              c8 = 1;
              const obj6 = { login: isMultiAccount, password, undelete: flag, isMultiAccount };
              const obj8 = { value: obj7.login(obj6), done: false };
              obj7 = navigation(ref[19]);
              return obj8;
            }
          } else {
            if (2 === c7) {
              c6 = 0;
              authenticationErrorsFromV6OrEarlierAPIError(false);
              const obj2 = isMultiAccount(ref[23]);
              authenticationErrorsFromV6OrEarlierAPIError = obj2.getAuthenticationErrorsFromV6OrEarlierAPIError(tmp);
              closure_1_11(authenticationErrorsFromV6OrEarlierAPIError);
            } else if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              c8 = 3;
              return { value, done: true };
            } else {
              c6 = 0;
            }
            c8 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp19) {
          closure_5 = tmp19;
          if (0 === c6) {
            c8 = 3;
            throw tmp19;
          } else {
            c7 = 2;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  const items2 = [callback, flag];
  const callback1 = useCallback(function() {
    return closure_0(...arguments);
  }, items2);
  const items3 = [callback, first2];
  const callback2 = first1.useCallback(_asyncToGenerator(async (arg0, value) => {
    let closure_0;
    let closure_1;
    let closure_2;
    let obj5;
    let tmp;
    let v0;
    let v2;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        let authenticationErrorsFromAPIError;
        c5 = 2;
        if (0 === _undefined2) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            authenticationErrorsFromAPIError = undefined;
            const tmp54 = first2;
            if (!tmp54) {
              if (!isPasswordlessActive.getIsPasswordlessActive()) {
                const obj4 = tmp(ref[24]);
                const passkeyAuthenticator = obj4.getPasskeyAuthenticator();
                v0(true);
                _undefined2({});
                v0 = 2;
                const obj7 = { authenticateFunc: passkeyAuthenticator };
                _undefined2 = 3;
                c5 = 1;
                const obj8 = { value: obj5.authenticatePasswordless(obj7), done: false };
                obj5 = tmp(ref[19]);
                return obj8;
              }
            }
          }
        } else if (1 === _undefined2) {
          v0 = 0;
          closure_129_3(false);
          throw ref;
        } else {
          if (2 === _undefined2) {
            v0 = 1;
            tmp = ref;
            if (tmp instanceof authenticationErrorsFromAPIError(ref[25]).APIError) {
              const obj3 = authenticationErrorsFromAPIError(ref[23]);
              authenticationErrorsFromAPIError = obj3.getAuthenticationErrorsFromAPIError(tmp);
              closure_129_11(authenticationErrorsFromAPIError);
            } else if (!(tmp instanceof authenticationErrorsFromAPIError(ref[26]).IgnorableWebAuthnError)) {
              const obj9 = { message: tmp.message };
              closure_129_4(obj9);
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            v0 = 0;
            closure_129_3(false);
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            v0 = 1;
          }
          v0 = 0;
          closure_129_3(false);
        }
        c5 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp48) {
        ref = tmp48;
        if (0 === v0) {
          c5 = 3;
          throw tmp48;
        } else if (1 === tmp50) {
          _undefined2 = 1;
        } else {
          _undefined2 = 2;
        }
      }
    }
  }), items3);
  navigation(ref[27])();
  navigation(ref[28])(navigation, callback1);
  let tmp26 = navigation(ref[29])("login", tmp12);
  if (tmp26 == null) {
    tmp26 = tmp(tmp2[29])("email", tmp12);
  }
  let tmp29Result = null;
  const tmp27 = tmp(ref[29])("password", tmp12);
  if (tmp4(ref[30]).hasWebAuthn) {
    let obj4 = { icon: ref(tmp4(tmp2[32]).KeyIcon, {}), size: "lg", variant: "tertiary", disabled: tmp10 || first2, text: intl.string(tmp4(tmp2[12]).t.EiwJkN), onPress: callback2 };
    const Button = tmp4(tmp2[31]).Button;
    intl = tmp4(tmp2[12]).intl;
    tmp29Result = ref(Button, obj4);
  }
  const tmp4Result = tmp4(ref[33]);
  if (tmp4Result.isMetaQuest()) {
    let obj5 = {
      icon: ref(tmp4(tmp2[34]).MobilePhoneIcon, { color: "control-primary-text-default" }),
      size: "lg",
      variant: "primary",
      disabled: tmp10,
      text: intl2.string(tmp4(tmp2[12]).t.Cc4Mc9),
      onPress() {
          return navigation.push(AuthStates.COMPANION_REMOTE_AUTH);
        }
    };
    const Button2 = tmp4(tmp2[31]).Button;
    intl2 = tmp4(tmp2[12]).intl;
    tmp29Result = ref(Button2, obj5);
  }
  let obj6 = {
    autoFocus: true,
    textContentType: "emailAddress",
    keyboardType: "email-address",
    alpha2: stateFromStores.alpha2,
    countryCode: first,
    onChange: function handleLoginUpdated(arg0, arg1) {
      closure_6(arg1 + arg0);
    },
    onSubmitEditing() {
      const current = ref.current;
      let focusResult;
      if (current != null) {
        focusResult = current.focus();
      }
      return focusResult;
    },
    returnKeyType: "next",
    autoCapitalize: "none",
    label: intl3.string(tmp4(tmp2[12]).t.tUjnxr),
    errorMessage: tmp26,
    testID: "login_login_input",
    onPressCountrySelector() {
      return navigation.push(AuthStates.COUNTRY_SELECT);
    },
    clearable: true,
    autoComplete: "username"
  };
  const tmpResult = tmp(ref[35]);
  intl3 = tmp4(tmp2[12]).intl;
  const items4 = [ref(tmpResult, obj6), , , , ];
  let obj7 = {
    containerStyle: tmp3.password,
    ref,
    textContentType: "password",
    secureTextEntry: true,
    revealable: true,
    onChange: tmp16,
    autoCapitalize: "none",
    onSubmitEditing() {
      return callback1(first1, c7);
    },
    label: intl4.string(tmp4(tmp2[12]).t["CIGa+7"]),
    returnKeyType: "done",
    errorMessage: tmp27,
    testID: "login_password_input",
    autoComplete: "current-password"
  };
  const TextInput = tmp4(tmp2[36]).TextInput;
  intl4 = tmp4(tmp2[12]).intl;
  items4[1] = ref(TextInput, obj7);
  let obj8 = {
    containerStyle: tmp3.link,
    onPress() {
      return closure_12();
    },
    text: intl5.string(tmp4(tmp2[12]).t.wWIufs)
  };
  intl5 = tmp4(tmp2[12]).intl;
  items4[2] = ref(callback1, obj8);
  let tmp33Result = null;
  const tmp35 = callback1;
  const tmp4Result6 = tmp4(ref[13]);
  if (tmp4Result6.isAndroid()) {
    tmp33Result = null;
    const tmp4Result7 = tmp4(ref[33]);
    if (!tmp4Result7.isMetaQuest()) {
      let obj9 = { containerStyle: tmp3.link, onPress: handlePressPasswordManagerHint, text: intl6.string(tmp4(tmp2[12]).t.RL5Fy2), textColor: "text-link" };
      intl6 = tmp4(tmp2[12]).intl;
      tmp33Result = tmp33(tmp35, obj9);
    }
  }
  items4[3] = tmp33Result;
  const obj10 = { style: tmp3.button, children: ref(Button3, obj12) };
  Button3 = tmp4(tmp2[31]).Button;
  let str3 = "primary";
  const tmp4Result8 = tmp4(ref[33]);
  if (tmp4Result8.isMetaQuest()) {
    str3 = "tertiary";
  }
  const obj11 = { children: items4 };
  obj12 = {
    size: "lg",
    variant: str3,
    disabled: first2,
    loading: tmp10,
    text: intl7.string(tmp4(ref[12]).t.dKhVQN),
    onPress() {
      return callback1(first1, c7);
    }
  };
  intl7 = tmp4(tmp2[12]).intl;
  items4[4] = ref(closure_6, obj10);
  const tmp31Result = callback(closure_6, obj11);
  const obj13 = { headerText: intl8.string(tmp4(ref[12]).t["7fNJgA"]), subHeader: ref(Text, obj14), children: callback(closure_6, obj15) };
  const tmpResult2 = tmp(ref[37]);
  intl8 = tmp4(tmp2[12]).intl;
  obj14 = { variant: "body-sm/medium", color: "text-default", children: intl9.string(tmp4(ref[12]).t.euS7r4) };
  Text = tmp4(tmp2[10]).Text;
  intl9 = tmp4(tmp2[12]).intl;
  let tmp40 = tmp31Result;
  obj15 = { style: tmp3.content, children: items5 };
  const tmp4Result9 = tmp4(ref[33]);
  if (tmp4Result9.isMetaQuest()) {
    tmp40 = tmp29Result;
  }
  items5 = [tmp40, , , ];
  const obj16 = { style: tmp3.separator, children: ref(tmp4(ref[39]).OrSeparator, {}) };
  const Stack = tmp4(tmp2[38]).Stack;
  items5[1] = ref(Stack, obj16);
  const tmp4Result10 = tmp4(ref[33]);
  if (tmp4Result10.isMetaQuest()) {
    tmp29Result = tmp31Result;
  }
  items5[2] = tmp29Result;
  let tmp33Result2 = null;
  if (null != tmp12.message) {
    tmp33Result2 = null;
    if ("" !== tmp12.message) {
      const obj17 = { style: tmp3.hint, children: tmp12.message };
      tmp33Result2 = tmp33(tmp(tmp2[40]), obj17);
    }
  }
  items5[3] = tmp33Result2;
  return ref(tmpResult2, obj13);
};
export { LinkButton };
