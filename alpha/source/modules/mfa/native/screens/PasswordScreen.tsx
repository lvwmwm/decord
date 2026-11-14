// Module ID: 18314
// Function ID: 18315
// Name: PasswordScreen
// Dependencies: [5, 32, 19, 17, 21, 7770, 18306, 18305, 1113, 7619, 18308, 2]
// Exports: default

// Module 18314 (PasswordScreen)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c5, c6, closure_1, closure_3, importDefault;

let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/mfa/native/screens/PasswordScreen.tsx");

export default function PasswordScreen(finish) {
  let TextInput;
  let _undefined;
  let c3;
  let c4;
  let first;
  let first1;
  let intl;
  let intl2;
  let intl3;
  let obj3;
  let obj4;
  let obj5;
  let tmp10;
  let tmp12;
  let tmp16;
  let tmp18;
  let tmp8;
  let tmpResult;
  finish = finish.finish;
  importDefault = undefined;
  first1 = undefined;
  c3 = undefined;
  _slicedToArray = undefined;
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
  [first, importDefault] = obj.useState(null);
  [first1, tmp8] = obj.useState("");
  [tmp10, c3] = _slicedToArray(obj.useState(false), 2);
  const tmp9 = _slicedToArray(obj.useState(false), 2);
  [tmp12, c4] = _slicedToArray(obj.useState(false), 2);
  const tmp11 = _slicedToArray(obj.useState(false), 2);
  let obj2 = { headerText: intl.string(finish(first1[8]).t.Rw1XuM), input: tmp13(tmp16, obj3), submit: tmp13(tmpResult, obj5), screenProps: { mfaChallenge, finish }, mfaMethod: "password" };
  const tmp14 = require("MfaOptionScreen");
  intl = finish(first1[8]).intl;
  obj3 = { style: screenStyles.inputContainer, children: tmp13(TextInput, obj4) };
  obj4 = { autoFocus: true, required: true, textContentType: "password", label: intl2.string(finish(first1[8]).t["CIGa+7"]), autoComplete: "current-password", autoCapitalize: "none", errorMessage: first, returnKeyType: "done", onChange: tmp8, onSubmitEditing: sendPassword, disabled: tmp10 || tmp12, secureTextEntry: true, revealable: true };
  TextInput = finish(first1[9]).TextInput;
  intl2 = finish(first1[8]).intl;
  obj5 = { text: intl3.string(tmp15(tmp2[8]).t.geKm7t), disabled: tmp18, loading: tmp10, onPress: sendPassword };
  tmpResult = tmp(first1[10]);
  intl3 = tmp15(tmp2[8]).intl;
  tmp18 = tmp10 || tmp12;
  tmp16 = View;
  if (!tmp18) {
    tmp18 = 0 === first1.length;
  }
  return jsx(tmp14, obj2);
};
