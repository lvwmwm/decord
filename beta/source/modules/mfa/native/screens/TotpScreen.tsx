// Module ID: 15233
// Function ID: 15234
// Name: TotpScreen
// Dependencies: [5, 32, 19, 21, 15234, 15229, 1115, 15235, 15232, 2]
// Exports: default

// Module 15233 (TotpScreen)
import Fragment from "Fragment" /* 21 */;
import MFA from "MFA" /* 15234 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c6, c7, importDefault;

function isValidClipboardCode(arg0) {
  let isMatch = arg0.length === MFA.TOTP_CODE_LENGTH;
  if (isMatch) {
    const obj = /^\d+$/;
    isMatch = obj.test(arg0);
  }
  return isMatch;
}
let _asyncToGenerator = _asyncToGenerator_mod;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/mfa/native/screens/TotpScreen.tsx");

export default function TotpScreen(finish) {
  let c1;
  let c4;
  let c5;
  let closure_3;
  let first;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let obj2;
  let obj3;
  let tmp10Result;
  let tmp14;
  let tmp2;
  let tmp5;
  let tmp7;
  finish = finish.finish;
  importDefault = undefined;
  first = undefined;
  _asyncToGenerator = undefined;
  _slicedToArray = undefined;
  react = undefined;
  const mfaChallenge = finish.mfaChallenge;
  const tmp = _slicedToArray(react.useState(false), 2);
  [tmp2, c1] = tmp;
  [first, _asyncToGenerator] = react.useState("");
  const tmp4 = _slicedToArray(react.useState(undefined), 2);
  [tmp5, c4] = tmp4;
  [tmp7, c5] = _slicedToArray(react.useState(false), 2);
  const tmp6 = _slicedToArray(react.useState(false), 2);
  const useCallback = react.useCallback;
  let closure_0 = _asyncToGenerator(async (arg0, value) => {
    let closure_4;
    let message2;
    let v0;
    closure_0 = arg0;
    if (c7 === 2) {
      c7 = 3;
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
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp4;
            tmp(closure_0);
            const tmp33 = closure_0;
            if (isValidClipboardCode(closure_0)) {
              tmp26(undefined);
              message2(true);
              c5 = 1;
              const obj4 = { mfaType: "totp", data: tmp33 };
              c6 = 2;
              c7 = 1;
              const obj5 = { value: closure_0(obj4), done: false };
              return obj5;
            }
          }
        } else {
          if (1 === c6) {
            c5 = 0;
            closure_0 = tmp26;
            let message;
            const tmp12 = tmp26;
            if (closure_0 != null) {
              const body = closure_0.body;
              if (body != null) {
                message = body.message;
              }
            }
            message2 = message;
            if (message == null) {
              message2 = closure_0.message;
            }
            tmp12(message2);
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c5(true);
            c5 = 0;
          }
          message2(false);
        }
        c7 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp26) {
        if (0 === c5) {
          c7 = 3;
          throw tmp26;
        } else {
          c6 = 1;
        }
      }
    }
  });
  const items = [finish];
  const onChangeCode = useCallback(function() {
    return closure_0(...arguments);
  }, items);
  let obj = { headerText: intl.string(finish(first[6]).t.uc00u5), input: tmp9(tmp14, obj2), submit: tmp9(tmp10Result, obj3), screenProps: { mfaChallenge, finish }, mfaMethod: "totp" };
  let tmp12 = require("MfaOptionScreen");
  intl = finish(first[6]).intl;
  obj2 = { label: intl2.string(finish(first[6]).t.HZPBOd), placeholder: intl3.string(finish(first[6]).t.tARzgo), isValidClipboardCode, maxLength: finish(first[4]).TOTP_CODE_LENGTH, onChangeCode, error: tmp5, isDisabled: tmp2 || tmp7, textContentType: "oneTimeCode", autoComplete: "one-time-code", keyboardType: "number-pad" };
  tmp14 = require("ClipboardCopyInput");
  intl2 = finish(first[6]).intl;
  intl3 = finish(first[6]).intl;
  obj3 = {
    variant: "primary",
    text: intl4.string(finish(tmp11[6]).t.geKm7t),
    loading: tmp2 || tmp7,
    onPress() {
      callback(first);
    },
    disabled: tmp2
  };
  tmp10Result = require("button");
  intl4 = tmp13(tmp11[6]).intl;
  if (!tmp2) {
    tmp2 = tmp7;
  }
  if (!tmp2) {
    tmp2 = first.length !== tmp13(tmp11[4]).TOTP_CODE_LENGTH;
  }
  return onChangeCode(tmp12, obj);
};
