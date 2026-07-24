// Module ID: 11388
// Function ID: 88526
// Name: ChatInputCover
// Dependencies: [31, 27, 33, 4528, 1555, 2]

// Module 11388 (ChatInputCover)
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";

let closure_3;
let closure_4;
let closure_5;
const require = arg1;
({ StyleSheet: closure_3, TouchableWithoutFeedback: closure_4, View: closure_5 } = get_ActivityIndicator);
const forwardRefResult = importAllResult.forwardRef((enabled) => {
  let flag = enabled.enabled;
  if (flag === undefined) {
    flag = true;
  }
  const keyboardType = enabled.keyboardType;
  const onSelectKeyboard = enabled.onSelectKeyboard;
  let isScreenReaderEnabled;
  let obj = flag(keyboardType[3]);
  isScreenReaderEnabled = obj.useIsScreenReaderEnabled();
  const items = [flag, isScreenReaderEnabled, keyboardType, onSelectKeyboard];
  const memo = onSelectKeyboard.useMemo(() => ({
    imperativeHandle() {
      return {
        focused(controlsSpecs, arg1) {
          let tmp = outer2_0;
          if (outer2_0) {
            tmp = controlsSpecs;
          }
          if (tmp) {
            tmp = outer2_1 !== flag(keyboardType[4]).KeyboardTypes.SYSTEM;
          }
          if (tmp) {
            tmp = outer2_3;
          }
          if (tmp) {
            const obj = { type: flag(keyboardType[4]).KeyboardTypes.SYSTEM };
            outer2_2(obj);
          }
        }
      };
    },
    openSystemKeyboard() {
      outer1_2({ type: flag(keyboardType[4]).KeyboardTypes.SYSTEM });
    }
  }), items);
  const imperativeHandle = onSelectKeyboard.useImperativeHandle(arg1, memo.imperativeHandle);
  let tmp4 = null;
  if (flag) {
    tmp4 = null;
    if (keyboardType !== flag(keyboardType[4]).KeyboardTypes.SYSTEM) {
      tmp4 = null;
      if (!isScreenReaderEnabled) {
        obj = { accessible: false, accessibilityRole: "none", onPress: memo.openSystemKeyboard };
        obj = { style: isScreenReaderEnabled.absoluteFill };
        obj.children = <closure_5 style={isScreenReaderEnabled.absoluteFill} />;
        tmp4 = <closure_4 style={isScreenReaderEnabled.absoluteFill} />;
      }
    }
  }
  return tmp4;
});
forwardRefResult.displayName = "ChatInputCover";
const memoResult = importAllResult.memo(forwardRefResult);
const result = require("jsxProd").fileFinishedImporting("modules/chat_input/native/accessories/ChatInputCover.tsx");

export default memoResult;
