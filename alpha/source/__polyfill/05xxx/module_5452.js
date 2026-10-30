// Module ID: 5452
// Function ID: 5453
// Dependencies: [19, 21, 5275, 1651, 5271, 5281]
// Exports: default

// Module 5452
import react2 from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import _mod1651 from "module_1651" /* 1651 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5271 */;
import _mod5275 from "module_5275" /* 5275 */;
import BottomSheetContext from "BottomSheetContext" /* 5281 */;

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
    useGestureEventsHandlersDefault = _mod5275.useGestureEventsHandlersDefault;
  }
  const children = gestureEventsHandlersHook.children;
  const obj = _mod1651;
  const sharedValue = obj.useSharedValue(GESTURE_SOURCE.GESTURE_SOURCE.UNDETERMINED);
  const obj2 = _mod5275;
  const bottomSheetInternal = obj2.useBottomSheetInternal();
  ({ animatedHandleGestureState, animatedContentGestureState } = bottomSheetInternal);
  ({ handleOnStart, handleOnChange, handleOnEnd, handleOnFinalize } = useGestureEventsHandlersDefault());
  useGestureEventsHandlersDefault();
  const obj3 = _mod5275;
  const gestureHandler = obj3.useGestureHandler(GESTURE_SOURCE.GESTURE_SOURCE.CONTENT, animatedContentGestureState, sharedValue, handleOnStart, handleOnChange, handleOnEnd, handleOnFinalize);
  const obj4 = _mod5275;
  const gestureHandler1 = obj4.useGestureHandler(GESTURE_SOURCE.GESTURE_SOURCE.HANDLE, animatedHandleGestureState, sharedValue, handleOnStart, handleOnChange, handleOnEnd, handleOnFinalize);
  const items = [gestureHandler, gestureHandler1, sharedValue];
  const value = useMemo(() => ({ contentPanGestureHandler: gestureHandler, handlePanGestureHandler: gestureHandler1, animatedGestureSource: sharedValue }), items);
  return jsx(BottomSheetContext.BottomSheetGestureHandlersContext.Provider, { value, children });
};
