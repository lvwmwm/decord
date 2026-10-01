// Module ID: 11735
// Function ID: 11736
// Name: ChatInputCover
// Dependencies: [19, 17, 21, 5266, 1611, 2]

// Module 11735 (ChatInputCover)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
({ StyleSheet: c3, TouchableWithoutFeedback: closure_4, View: hasOwnProperty } = react_native);
const jsx = Fragment.jsx;
const forwardRefResult = react.forwardRef((enabled, ref) => {
  let flag = enabled.enabled;
  if (flag === undefined) {
    flag = true;
  }
  const keyboardType = enabled.keyboardType;
  const onSelectKeyboard = enabled.onSelectKeyboard;
  let tmp = flag;
  let obj = flag(keyboardType[3]);
  const isScreenReaderEnabled = obj.useIsScreenReaderEnabled();
  const items = [flag, isScreenReaderEnabled, keyboardType, onSelectKeyboard];
  const memo = onSelectKeyboard.useMemo(() => {
    let obj = {
      imperativeHandle() {
        let obj = {
          focused(controlsSpecs) {
            const tmp = closure_1_0 && controlsSpecs && closure_1_1 !== flag(keyboardType[4]).KeyboardTypes.SYSTEM && closure_1_3;
            if (tmp) {
              const obj = { type: flag(keyboardType[4]).KeyboardTypes.SYSTEM };
              closure_1_2(obj);
            }
          }
        };
        return obj;
      },
      openSystemKeyboard() {
        const obj = { type: flag(keyboardType[4]).KeyboardTypes.SYSTEM };
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
    if (keyboardType !== tmp(tmp2[4]).KeyboardTypes.SYSTEM) {
      tmp6 = null;
      if (!isScreenReaderEnabled) {
        tmp6 = <closure_4 accessible={false} accessibilityRole="none" onPress={openSystemKeyboard}>{null}</closure_4>;
      }
    }
  }
  return tmp6;
});
forwardRefResult.displayName = "ChatInputCover";
const memoResult = react.memo(forwardRefResult);
const result = size.fileFinishedImporting("modules/chat_input/native/accessories/ChatInputCover.tsx");

export default memoResult;
