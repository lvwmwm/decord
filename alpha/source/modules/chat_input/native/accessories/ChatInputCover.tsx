// Module ID: 11970
// Function ID: 11971
// Name: ChatInputCover
// Dependencies: [19, 17, 21, 558, 576, 5360, 1628, 2]

// Module 11970 (ChatInputCover)
import Fragment from "Fragment" /* 21 */;
import KeyboardTypes from "KeyboardTypes" /* 1628 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
({ StyleSheet: c3, TouchableWithoutFeedback: closure_4, View: hasOwnProperty } = react_native);
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChatInputCover(onSelectKeyboard) {
  let enabled;
  let keyboardType;
  let tmp = keyboardType;
  let obj = keyboardType(onSelectKeyboard[4]);
  const cResult = obj.c(13);
  ({ enabled, keyboardType } = onSelectKeyboard);
  onSelectKeyboard = onSelectKeyboard.onSelectKeyboard;
  let tmp4 = undefined === enabled;
  const ref = onSelectKeyboard.ref;
  if (!tmp4) {
    tmp4 = enabled;
  }
  enabled = tmp4;
  const tmpResult = tmp(onSelectKeyboard[5]);
  const isScreenReaderEnabled = tmpResult.useIsScreenReaderEnabled();
  if (cResult[0] === tmp4) {
    if (cResult[1] === isScreenReaderEnabled) {
      if (cResult[2] === keyboardType) {
        let tmp6;
        let tmp7;
        if (cResult[3] === onSelectKeyboard) {
          tmp6 = cResult[4];
        }
        if (cResult[5] !== onSelectKeyboard) {
          const fn2 = function b() {
            const obj = { type: KeyboardTypes.KeyboardTypes.SYSTEM };
            onSelectKeyboard(obj);
          };
          cResult[5] = onSelectKeyboard;
          cResult[6] = fn2;
          tmp7 = fn2;
        } else {
          tmp7 = cResult[6];
        }
        if (cResult[7] === tmp6) {
          let tmp8;
          if (cResult[8] === tmp7) {
            tmp8 = cResult[9];
          }
          const openSystemKeyboard = tmp8.openSystemKeyboard;
          const imperativeHandle = enabled.useImperativeHandle(ref, tmp8.imperativeHandle);
          if (tmp4) {
            tmp4 = keyboardType !== tmp(tmp2[6]).KeyboardTypes.SYSTEM;
          }
          if (tmp4) {
            tmp4 = !isScreenReaderEnabled;
          }
          if (cResult[10] === tmp4) {
            let tmp11;
            if (cResult[11] === openSystemKeyboard) {
              tmp11 = cResult[12];
            }
            return tmp11;
          }
          let tmp12 = null;
          if (tmp4) {
            tmp12 = <closure_4 accessible={false} accessibilityRole="none" onPress={openSystemKeyboard}>{null}</closure_4>;
          }
          cResult[10] = tmp4;
          cResult[11] = openSystemKeyboard;
          cResult[12] = tmp12;
          tmp11 = tmp12;
        }
        const obj4 = { imperativeHandle: tmp6, openSystemKeyboard: tmp7 };
        cResult[7] = tmp6;
        cResult[8] = tmp7;
        cResult[9] = obj4;
        tmp8 = obj4;
      }
    }
  }
  const fn = function p() {
    let obj = {
      focused(arg0) {
        const tmp = enabled && arg0 && closure_1_0 !== keyboardType(onSelectKeyboard[6]).KeyboardTypes.SYSTEM && isScreenReaderEnabled;
        if (tmp) {
          const obj = { type: keyboardType(onSelectKeyboard[6]).KeyboardTypes.SYSTEM };
          closure_1_1(obj);
        }
      }
    };
    return obj;
  };
  cResult[0] = tmp4;
  cResult[1] = isScreenReaderEnabled;
  cResult[2] = keyboardType;
  cResult[3] = onSelectKeyboard;
  cResult[4] = fn;
  tmp6 = fn;
}) : (function ChatInputCover(enabled) {
  let flag = enabled.enabled;
  if (flag === undefined) {
    flag = true;
  }
  const keyboardType = enabled.keyboardType;
  const onSelectKeyboard = enabled.onSelectKeyboard;
  let tmp = flag;
  const ref = enabled.ref;
  let obj = flag(keyboardType[5]);
  const isScreenReaderEnabled = obj.useIsScreenReaderEnabled();
  const items = [flag, isScreenReaderEnabled, keyboardType, onSelectKeyboard];
  const memo = onSelectKeyboard.useMemo(() => {
    let obj = {
      imperativeHandle() {
        let obj = {
          focused(arg0) {
            const tmp = closure_1_0 && arg0 && closure_1_1 !== flag(keyboardType[6]).KeyboardTypes.SYSTEM && closure_1_3;
            if (tmp) {
              const obj = { type: flag(keyboardType[6]).KeyboardTypes.SYSTEM };
              closure_1_2(obj);
            }
          }
        };
        return obj;
      },
      openSystemKeyboard() {
        const obj = { type: flag(keyboardType[6]).KeyboardTypes.SYSTEM };
        onSelectKeyboard(obj);
      }
    };
    return obj;
  }, items);
  const openSystemKeyboard = memo.openSystemKeyboard;
  const imperativeHandle = onSelectKeyboard.useImperativeHandle(ref, memo.imperativeHandle);
  let tmp6 = null;
  const tmp2 = keyboardType;
  if (flag) {
    tmp6 = null;
    if (keyboardType !== tmp(tmp2[6]).KeyboardTypes.SYSTEM) {
      tmp6 = null;
      if (!isScreenReaderEnabled) {
        tmp6 = <closure_4 accessible={false} accessibilityRole="none" onPress={openSystemKeyboard}>{null}</closure_4>;
      }
    }
  }
  return tmp6;
});
tmp3.displayName = "ChatInputCover";
const memoResult = react.memo(tmp3);
const result = size.fileFinishedImporting("modules/chat_input/native/accessories/ChatInputCover.tsx");

export default memoResult;
