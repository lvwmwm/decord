// Module ID: 11348
// Function ID: 88223
// Name: ChatInputCover
// Dependencies: []

// Module 11348 (ChatInputCover)
const importAllResult = importAll(dependencyMap[0]);
({ StyleSheet: closure_3, TouchableWithoutFeedback: closure_4, View: closure_5 } = arg1(dependencyMap[1]));
const jsx = arg1(dependencyMap[2]).jsx;
const forwardRefResult = importAllResult.forwardRef((enabled) => {
  let flag = enabled.enabled;
  if (flag === undefined) {
    flag = true;
  }
  const arg1 = flag;
  const keyboardType = enabled.keyboardType;
  const dependencyMap = keyboardType;
  const onSelectKeyboard = enabled.onSelectKeyboard;
  let isScreenReaderEnabled;
  let obj = arg1(dependencyMap[3]);
  isScreenReaderEnabled = obj.useIsScreenReaderEnabled();
  const items = [flag, isScreenReaderEnabled, keyboardType, onSelectKeyboard];
  const memo = importAllResult.useMemo(() => ({
    imperativeHandle() {
      return {
        focused(arg0) {
          let tmp = callback;
          if (callback) {
            tmp = arg0;
          }
          if (tmp) {
            tmp = closure_1 !== callback(closure_1[4]).KeyboardTypes.SYSTEM;
          }
          if (tmp) {
            tmp = closure_3;
          }
          if (tmp) {
            const obj = { type: callback(closure_1[4]).KeyboardTypes.SYSTEM };
            callback2(obj);
          }
        }
      };
    },
    openSystemKeyboard() {
      callback2({ type: callback(closure_1[4]).KeyboardTypes.SYSTEM });
    }
  }), items);
  const imperativeHandle = importAllResult.useImperativeHandle(arg1, memo.imperativeHandle);
  let tmp4 = null;
  if (flag) {
    tmp4 = null;
    if (keyboardType !== arg1(dependencyMap[4]).KeyboardTypes.SYSTEM) {
      tmp4 = null;
      if (!isScreenReaderEnabled) {
        obj = { fontFamily: false, fontSize: false, onPress: memo.openSystemKeyboard };
        obj = { style: isScreenReaderEnabled.absoluteFill };
        obj.children = <closure_5 {...obj} />;
        tmp4 = <closure_4 {...obj} />;
      }
    }
  }
  return tmp4;
});
forwardRefResult.displayName = "ChatInputCover";
const tmp2 = arg1(dependencyMap[1]);
const memoResult = importAllResult.memo(forwardRefResult);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/chat_input/native/accessories/ChatInputCover.tsx");

export default memoResult;
