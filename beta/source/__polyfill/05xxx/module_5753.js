// Module ID: 5753
// Function ID: 5754
// Dependencies: [19, 21, 5565, 1655, 5561, 5571]
// Exports: default

// Module 5753
import react2 from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import _mod1655 from "module_1655" /* 1655 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 5561 */;
import _mod5565 from "module_5565" /* 5565 */;
import BottomSheetContext from "BottomSheetContext" /* 5571 */;

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
    useGestureEventsHandlersDefault = _mod5565.useGestureEventsHandlersDefault;
  }
  const children = gestureEventsHandlersHook.children;
  const obj = _mod1655;
  const sharedValue = obj.useSharedValue(GESTURE_SOURCE.GESTURE_SOURCE.UNDETERMINED);
  const obj2 = _mod5565;
  const bottomSheetInternal = obj2.useBottomSheetInternal();
  ({ animatedHandleGestureState, animatedContentGestureState } = bottomSheetInternal);
  ({ handleOnStart, handleOnChange, handleOnEnd, handleOnFinalize } = useGestureEventsHandlersDefault());
  useGestureEventsHandlersDefault();
  const obj3 = _mod5565;
  const gestureHandler = obj3.useGestureHandler(GESTURE_SOURCE.GESTURE_SOURCE.CONTENT, animatedContentGestureState, sharedValue, handleOnStart, handleOnChange, handleOnEnd, handleOnFinalize);
  const obj4 = _mod5565;
  const gestureHandler1 = obj4.useGestureHandler(GESTURE_SOURCE.GESTURE_SOURCE.HANDLE, animatedHandleGestureState, sharedValue, handleOnStart, handleOnChange, handleOnEnd, handleOnFinalize);
  const items = [gestureHandler, gestureHandler1, sharedValue];
  const value = useMemo(() => ({ contentPanGestureHandler: gestureHandler, handlePanGestureHandler: gestureHandler1, animatedGestureSource: sharedValue }), items);
  return jsx(BottomSheetContext.BottomSheetGestureHandlersContext.Provider, { value, children });
};
