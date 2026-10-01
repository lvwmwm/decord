// Module ID: 15236
// Function ID: 15237
// Name: BackupScreen
// Dependencies: [5, 32, 19, 21, 15234, 4832, 1115, 6363, 15229, 15235, 15232, 2]
// Exports: default

// Module 15236 (BackupScreen)
import intl10 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import useWideAuthViewDefault from "useWideAuthView" /* 6363 */;
import MfaOptionScreenDefault from "MfaOptionScreen" /* 15229 */;
import MFA from "MFA" /* 15234 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c6, c7;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let tmp;
const buttonDefault = tmp(15232);
const ClipboardCopyInputDefault = tmp(15235);
function isValidClipboardCode(arg0) {
  let tmp3 = arg0.length >= MFA.BACKUP_CODE_MIN_LENGTH;
  if (tmp3) {
    tmp3 = arg0.length <= MFA.BACKUP_CODE_MAX_LENGTH;
  }
  return tmp3;
}
({ jsxs: metroRequire, jsx: metroImportDefault, Fragment: metroImportAll } = Fragment);
const result = size.fileFinishedImporting("modules/mfa/native/screens/BackupScreen.tsx");

export default function BackupScreen(finish) {
  let c1;
  let c4;
  let c5;
  let closure_3;
  let first;
  let first1;
  let intl;
  let intl2;
  let intl5;
  let intl6;
  let intl7;
  let items2;
  let items3;
  let obj4;
  let obj6;
  let obj7;
  let tmp10;
  let tmp18;
  let tmp20;
  let tmp5;
  let tmp8;
  let tmpResult2;
  finish = finish.finish;
  c1 = undefined;
  first = undefined;
  closure_3 = undefined;
  c4 = undefined;
  c5 = undefined;
  first1 = undefined;
  metroImportDefault = undefined;
  const tmp = importDefault;
  const mfaChallenge = finish.mfaChallenge;
  const tmp3 = useWideAuthViewDefault();
  const tmp4 = _slicedToArray(react.useState(false), 2);
  [tmp5, c1] = tmp4;
  [first, closure_3] = react.useState("");
  [tmp8, c4] = _slicedToArray(react.useState(undefined), 2);
  const tmp7 = _slicedToArray(react.useState(undefined), 2);
  [tmp10, c5] = _slicedToArray(react.useState(false), 2);
  const tmp9 = _slicedToArray(react.useState(false), 2);
  [first1, metroImportDefault] = react.useState(10);
  const items = [first1];
  const effect = react.useEffect(() => {
    let closure_0;
    if (first1 > 0) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        closure_1_7((arg0) => arg0 - 1);
      }, 1000);
      return () => clearTimeout(closure_0);
    }
  }, items);
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
      let c5;
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
            let closure_3 = tmp;
            let closure_2 = tmp4;
            tmp27(undefined);
            message2(true);
            c5 = 1;
            const obj4 = { mfaType: "backup", data: closure_0.replace(/-/g, "") };
            c6 = 2;
            c7 = 1;
            const obj5 = { value: closure_0(obj4), done: false };
            return obj5;
          }
        } else {
          if (1 === c6) {
            c5 = 0;
            closure_0 = tmp27;
            let message;
            const tmp12 = tmp27;
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
          c7 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp27) {
        if (0 === c5) {
          c7 = 3;
          throw tmp27;
        } else {
          c6 = 1;
        }
      }
    }
  });
  const items1 = [finish];
  metroImportAll = useCallback(function() {
    return closure_0(...arguments);
  }, items1);
  let obj = { headerText: intl.string(intl10.t.B2T1HD), subtitle: intl2.string(intl10.t.c5J7O0), input: metroRequire(tmp18, obj6), submit: tmp14(tmpResult2, obj7), screenProps: { mfaChallenge, finish }, mfaMethod: "backup" };
  const tmp15 = MfaOptionScreenDefault;
  intl = intl10.intl;
  intl2 = intl10.intl;
  const Text = Text_Text.Text;
  tmp18 = metroImportAll;
  if (first1 > 0) {
    let obj2 = { variant: "text-md/normal", children: items2 };
    const intl3 = tmp16(1115).intl;
    items2 = [intl3.string(tmp16(1115).t.RRtlLg), ];
    const intl4 = tmp16(1115).intl;
    let obj3 = { countdown: first1 };
    items2[1] = intl4.format(intl10.t.tsWkAE, obj3);
    obj4 = obj2;
  } else {
    obj4 = { variant: "text-md/normal", children: items3 };
    const intl8 = tmp16(1115).intl;
    items3 = [intl8.string(tmp16(1115).t.RRtlLg), ];
    const intl9 = tmp16(1115).intl;
    items3[1] = intl9.string(intl10.t.v3a6Pd);
  }
  const items4 = [metroRequire(Text, obj4), ];
  let obj5 = {
    label: intl5.string(tmp16(1115).t["C/ZAw/"]),
    placeholder: intl6.string(tmp16(1115).t.fZSi1D),
    isValidClipboardCode,
    maxLength: tmp16(15234).BACKUP_CODE_MAX_LENGTH,
    onChangeCode(arg0) {
      closure_3(arg0);
      _undefined(undefined);
    },
    error: tmp8,
    isDisabled: tmp20,
    autoFocus: !tmp3
  };
  const tmpResult = ClipboardCopyInputDefault;
  intl5 = tmp16(1115).intl;
  intl6 = tmp16(1115).intl;
  obj6 = { children: items4 };
  tmp20 = tmp5 || tmp10;
  items4[1] = metroImportDefault(tmpResult, obj5);
  obj7 = {
    variant: "primary",
    text: intl7.string(intl10.t.geKm7t),
    loading: tmp5 || tmp10,
    onPress() {
      return closure_8(first);
    },
    disabled: tmp5
  };
  tmpResult2 = buttonDefault;
  intl7 = tmp16(1115).intl;
  if (!tmp5) {
    tmp5 = tmp10;
  }
  if (!tmp5) {
    tmp5 = first.length < tmp16(15234).BACKUP_CODE_MIN_LENGTH;
  }
  if (!tmp5) {
    tmp5 = first1 > 0;
  }
  return metroImportDefault(tmp15, obj);
};
