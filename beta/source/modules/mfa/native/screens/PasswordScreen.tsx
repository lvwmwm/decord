// Module ID: 15238
// Function ID: 15239
// Name: PasswordScreen
// Dependencies: [5, 32, 19, 17, 21, 6363, 15230, 15229, 1115, 6024, 6387, 6389, 15232, 2]
// Exports: default

// Module 15238 (PasswordScreen)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c6, closure_1, closure_3, importDefault;

let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/mfa/native/screens/PasswordScreen.tsx");

export default function PasswordScreen(finish) {
  let EyeIcon;
  let TextInput;
  let _undefined;
  let _undefined2;
  let c3;
  let c4;
  let c5;
  let first;
  let first1;
  let intl;
  let intl2;
  let intl4;
  let obj3;
  let obj4;
  let obj5;
  let stringResult;
  let tmp10;
  let tmp12;
  let tmp14;
  let tmp18;
  let tmp21;
  let tmp8;
  let tmpResult;
  finish = finish.finish;
  importDefault = undefined;
  first1 = undefined;
  c3 = undefined;
  _slicedToArray = undefined;
  react = undefined;
  function sendPassword() {
    return obj(...arguments);
  }
  let obj = function _sendPassword() {
    let data;
    obj = _asyncToGenerator(async (arg0, value) => {
      if (c6 === 2) {
        c6 = 3;
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
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_2 = tmp;
              closure_1 = tmp4;
              closure_2_1(null);
              _undefined(true);
              c4 = 1;
              const obj4 = { mfaType: "password", data };
              c5 = 2;
              c6 = 1;
              const obj5 = { value: finish(obj4), done: false };
              return obj5;
            }
          } else {
            if (1 === c5) {
              c4 = 0;
              let message2 = closure_3;
              const body = message2.body;
              let message;
              const tmp12 = closure_130_1;
              if (body != null) {
                message = body.message;
              }
              message2 = message;
              if (message == null) {
                message2 = message2.message;
              }
              tmp12(message2);
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_130_4(true);
              c4 = 0;
            }
            closure_130_3(false);
            c6 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp28) {
          closure_3 = tmp28;
          if (0 === c4) {
            c6 = 3;
            throw tmp28;
          } else {
            c5 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  const mfaChallenge = finish.mfaChallenge;
  const tmp = importDefault;
  const tmp3 = require("useWideAuthView")();
  obj = require("MfaScreenUtils");
  const screenStyles = obj.useScreenStyles(tmp3);
  [first, importDefault] = react.useState(null);
  [first1, tmp8] = react.useState("");
  [tmp10, c3] = _slicedToArray(react.useState(false), 2);
  const tmp9 = _slicedToArray(react.useState(false), 2);
  [tmp12, c4] = _slicedToArray(react.useState(false), 2);
  const tmp11 = _slicedToArray(react.useState(false), 2);
  [tmp14, c5] = _slicedToArray(react.useState(false), 2);
  const tmp13 = _slicedToArray(react.useState(false), 2);
  let obj2 = { headerText: intl.string(finish(first1[8]).t.Rw1XuM), input: tmp15(tmp18, obj3), submit: tmp15(tmpResult, obj5), screenProps: { mfaChallenge, finish }, mfaMethod: "password" };
  const tmp16 = require("MfaOptionScreen");
  intl = finish(first1[8]).intl;
  obj3 = { style: screenStyles.inputContainer, children: tmp15(TextInput, obj4) };
  obj4 = {
    autoFocus: true,
    required: true,
    textContentType: "password",
    label: intl2.string(finish(first1[8]).t["CIGa+7"]),
    autoComplete: "current-password",
    autoCapitalize: "none",
    errorMessage: first,
    returnKeyType: "done",
    onChange: tmp8,
    onSubmitEditing: sendPassword,
    disabled: tmp10 || tmp12,
    secureTextEntry: !tmp14,
    trailingIcon: EyeIcon,
    trailingPressableProps: {
      accessibilityLabel: stringResult,
      onPress() {
        return _undefined2((arg0) => !arg0);
      },
      hitSlop: { top: 8, bottom: 8 }
    }
  };
  TextInput = finish(first1[9]).TextInput;
  intl2 = finish(first1[8]).intl;
  tmp18 = obj;
  if (tmp14) {
    EyeIcon = tmp17(tmp2[10]).EyeSlashIcon;
  } else {
    EyeIcon = tmp17(tmp2[11]).EyeIcon;
  }
  const intl3 = tmp17(tmp2[8]).intl;
  const string = intl3.string;
  const t = tmp17(tmp2[8]).t;
  if (tmp14) {
    stringResult = string(t.Nusip4);
  } else {
    stringResult = string(t.nFzpM5);
  }
  obj5 = { text: intl4.string(tmp17(tmp2[8]).t.geKm7t), disabled: tmp21, loading: tmp10, onPress: sendPassword };
  tmpResult = tmp(first1[12]);
  intl4 = tmp17(tmp2[8]).intl;
  tmp21 = tmp10 || tmp12;
  if (!tmp21) {
    tmp21 = 0 === first1.length;
  }
  return jsx(tmp16, obj2);
};
