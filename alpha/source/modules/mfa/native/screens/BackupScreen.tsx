// Module ID: 16039
// Function ID: 16040
// Name: BackupScreen
// Dependencies: [5, 32, 19, 21, 16037, 4825, 1115, 7275, 16032, 16038, 16035, 2]
// Exports: default

// Module 16039 (BackupScreen)
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4825 */;
import useWideAuthViewDefault from "useWideAuthView" /* 7275 */;
import MfaOptionScreenDefault from "MfaOptionScreen" /* 16032 */;
import buttonDefault from "button" /* 16035 */;
import MFA from "MFA" /* 16037 */;
import ClipboardCopyInputDefault from "ClipboardCopyInput" /* 16038 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function isValidClipboardCode(arg0) {
  let tmp3 = arg0.length >= MFA.BACKUP_CODE_MIN_LENGTH;
  if (tmp3) {
    tmp3 = arg0.length <= MFA.BACKUP_CODE_MAX_LENGTH;
  }
  return tmp3;
}
const jsxProd = fn(21);
({ jsxs: metroRequire, jsx: closure_7, Fragment: closure_8 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/mfa/native/screens/BackupScreen.tsx");

export default function BackupScreen(finish) {
  finish = finish.finish;
  c1 = undefined;
  first = undefined;
  closure_3 = undefined;
  c4 = undefined;
  c5 = undefined;
  first1 = undefined;
  closure_7 = undefined;
  const tmp3 = useWideAuthViewDefault();
  [tmp5, c1] = noop.useState(false);
  [first, closure_3] = noop.useState("");
  const tmp4 = _slicedToArray(noop.useState(false), 2);
  [tmp8, c4] = noop.useState(undefined);
  const tmp7 = _slicedToArray(noop.useState(undefined), 2);
  [tmp10, c5] = noop.useState(false);
  [first1, closure_7] = noop.useState(10);
  const items = [first1];
  const effect = noop.useEffect(() => {
    if (first1 > 0) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        closure_1_7((arg0) => arg0 - 1);
      }, 1000);
      return () => clearTimeout(closure_0);
    }
  }, items);
  closure_0 = asyncGeneratorStep(async (arg0) => {
    closure_3 = tmp3;
    tmp30(undefined);
    message(true);
    let v0 = 1;
    await closure_0({ mfaType: "backup", data: closure_0.replace(/-/g, "") });
    if (1 === tmp7) {
      v0 = 0;
      closure_130_0 = tmp30;
      message = undefined;
      if (closure_130_0 != null) {
        const body = closure_130_0.body;
        if (body != null) {
          message = body.message;
        }
      }
      if (message == null) {
        message = closure_130_0.message;
      }
      tmp30(message);
      message(false);
      c7 = 3;
    } else if (arg0 === 1) {
      c7 = 3;
      throw arg1;
    } else if (arg0 !== 2) {
      v0(true);
      v0 = 0;
    }
    v0 = 0;
    return arg1;
  });
  const items1 = [finish];
  closure_8 = noop.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items1);
  const obj = { headerText: null, subtitle: null, input: null, submit: null, screenProps: null, mfaMethod: "backup" };
  const tmp9 = _slicedToArray(noop.useState(false), 2);
  const intl = util.intl;
  obj.headerText = intl.string(util.t.B2T1HD);
  const intl2 = util.intl;
  obj.subtitle = intl2.string(util.t.c5J7O0);
  if (first1 > 0) {
    const obj2 = { variant: "text-md/normal", children: null };
    const intl3 = tmp16(1115).intl;
    const items2 = [intl3.string(tmp16(1115).t.RRtlLg), ];
    const intl4 = tmp16(1115).intl;
    const obj3 = { countdown: first1 };
    items2[1] = intl4.format(tmp16(1115).t.tsWkAE, obj3);
    obj2.children = items2;
    let obj4 = obj2;
  } else {
    obj4 = { variant: "text-md/normal", children: null };
    const intl8 = tmp16(1115).intl;
    const items3 = [intl8.string(tmp16(1115).t.RRtlLg), ];
    const intl9 = tmp16(1115).intl;
    items3[1] = intl9.string(tmp16(1115).t.v3a6Pd);
    obj4.children = items3;
  }
  const items4 = [timestampProducer(Text_Text.Text, obj4), ];
  const obj5 = { label: null, placeholder: null, isValidClipboardCode: null, maxLength: null, onChangeCode: null, error: null, isDisabled: null, autoFocus: null };
  const tmp15 = MfaOptionScreenDefault;
  const tmp18 = React6;
  const intl5 = tmp16(1115).intl;
  obj5.label = intl5.string(util.t["C/ZAw/"]);
  const intl6 = tmp16(1115).intl;
  obj5.placeholder = intl6.string(util.t.fZSi1D);
  obj5.isValidClipboardCode = isValidClipboardCode;
  obj5.maxLength = MFA.BACKUP_CODE_MAX_LENGTH;
  obj5.onChangeCode = function onChangeCode(arg0) {
    closure_3(arg0);
    _undefined(undefined);
  };
  obj5.error = tmp8;
  let tmp20 = tmp5;
  if (!tmp5) {
    tmp20 = tmp10;
  }
  const obj6 = { children: null };
  obj5.isDisabled = tmp20;
  obj5.autoFocus = !tmp3;
  items4[1] = React5(ClipboardCopyInputDefault, obj5);
  obj6.children = items4;
  obj.input = timestampProducer(tmp18, obj6);
  const obj7 = { variant: "primary", text: null, loading: null, onPress: null, disabled: null };
  const tmpResult = ClipboardCopyInputDefault;
  const intl7 = tmp16(1115).intl;
  obj7.text = intl7.string(util.t.geKm7t);
  let tmp22 = tmp5;
  if (!tmp5) {
    tmp22 = tmp10;
  }
  obj7.loading = tmp22;
  obj7.onPress = function onPress() {
    return closure_8(first);
  };
  if (!tmp5) {
    tmp5 = tmp10;
  }
  if (!tmp5) {
    tmp5 = first.length < tmp16(16037).BACKUP_CODE_MIN_LENGTH;
  }
  if (!tmp5) {
    tmp5 = first1 > 0;
  }
  obj7.disabled = tmp5;
  obj.submit = React5(buttonDefault, obj7);
  obj.screenProps = { mfaChallenge: finish.mfaChallenge, finish };
  return React5(tmp15, obj);
};
