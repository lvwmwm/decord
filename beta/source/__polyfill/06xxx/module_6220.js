// Module ID: 6220
// Function ID: 6221
// Dependencies: [19, 21, 6043, 1644, 6039, 6049]
// Exports: default

// Module 6220
import react2 from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import _mod1644 from "module_1644" /* 1644 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 6039 */;
import _mod6043 from "module_6043" /* 6043 */;
import BottomSheetContext from "BottomSheetContext" /* 6049 */;

const useMemo = react2.useMemo;
const jsx = Fragment.jsx;

export default function _default(gestureEventsHandlersHook) {
  let animatedContentGestureState;
  let animatedHandleGestureState;
  let handleOnChange;
  let handleOnEnd;
  let handleOnFinalize;
  let handleOnStart;
  let useGestureEventsHandlersDefault = gestureEventsHandlersHook.gestureEventsHandlersHook;
  if (useGestureEventsHandlersDefault === undefined) {
    useGestureEventsHandlersDefault = _mod6043.useGestureEventsHandlersDefault;
  }
  const children = gestureEventsHandlersHook.children;
  const obj = _mod1644;
  const sharedValue = obj.useSharedValue(GESTURE_SOURCE.GESTURE_SOURCE.UNDETERMINED);
  const obj2 = _mod6043;
  const bottomSheetInternal = obj2.useBottomSheetInternal();
  ({ animatedHandleGestureState, animatedContentGestureState } = bottomSheetInternal);
  ({ handleOnStart, handleOnChange, handleOnEnd, handleOnFinalize } = useGestureEventsHandlersDefault());
  useGestureEventsHandlersDefault();
  const obj3 = _mod6043;
  const gestureHandler = obj3.useGestureHandler(GESTURE_SOURCE.GESTURE_SOURCE.CONTENT, animatedContentGestureState, sharedValue, handleOnStart, handleOnChange, handleOnEnd, handleOnFinalize);
  const obj4 = _mod6043;
  const gestureHandler1 = obj4.useGestureHandler(GESTURE_SOURCE.GESTURE_SOURCE.HANDLE, animatedHandleGestureState, sharedValue, handleOnStart, handleOnChange, handleOnEnd, handleOnFinalize);
  const items = [gestureHandler, gestureHandler1, sharedValue];
  const value = useMemo(() => ({ contentPanGestureHandler: gestureHandler, handlePanGestureHandler: gestureHandler1, animatedGestureSource: sharedValue }), items);
  return jsx(BottomSheetContext.BottomSheetGestureHandlersContext.Provider, { value, children });
};
