// Module ID: 5311
// Function ID: 45829
// Name: BottomSheetGestureHandlersProvider
// Dependencies: [31, 33, 5194, 1582, 5190, 5200]
// Exports: default

// Module 5311 (BottomSheetGestureHandlersProvider)
import "result";
import { useMemo } from "result";
import { jsx } from "jsxProd";

const require = arg1;

export default function BottomSheetGestureHandlersProvider(children) {
  let animatedContentGestureState;
  let animatedHandleGestureState;
  let handleOnChange;
  let handleOnEnd;
  let handleOnFinalize;
  let handleOnStart;
  let useGestureEventsHandlersDefault = children.gestureEventsHandlersHook;
  if (undefined === useGestureEventsHandlersDefault) {
    useGestureEventsHandlersDefault = sharedValue(gestureHandler[2]).useGestureEventsHandlersDefault;
  }
  sharedValue = sharedValue(gestureHandler[3]).useSharedValue(sharedValue(gestureHandler[4]).GESTURE_SOURCE.UNDETERMINED);
  const obj = sharedValue(gestureHandler[3]);
  const bottomSheetInternal = sharedValue(gestureHandler[2]).useBottomSheetInternal();
  ({ animatedHandleGestureState, animatedContentGestureState } = bottomSheetInternal);
  const obj2 = sharedValue(gestureHandler[2]);
  ({ handleOnStart, handleOnChange, handleOnEnd, handleOnFinalize } = useGestureEventsHandlersDefault());
  const gestureEventsHandlersDefault = useGestureEventsHandlersDefault();
  gestureHandler = sharedValue(gestureHandler[2]).useGestureHandler(sharedValue(gestureHandler[4]).GESTURE_SOURCE.CONTENT, animatedContentGestureState, sharedValue, handleOnStart, handleOnChange, handleOnEnd, handleOnFinalize);
  const obj3 = sharedValue(gestureHandler[2]);
  const gestureHandler1 = sharedValue(gestureHandler[2]).useGestureHandler(sharedValue(gestureHandler[4]).GESTURE_SOURCE.HANDLE, animatedHandleGestureState, sharedValue, handleOnStart, handleOnChange, handleOnEnd, handleOnFinalize);
  const items = [gestureHandler, gestureHandler1, sharedValue];
  const value = gestureHandler1(() => ({ contentPanGestureHandler: gestureHandler, handlePanGestureHandler: gestureHandler1, animatedGestureSource: sharedValue }), items);
  return jsx(sharedValue(gestureHandler[5]).BottomSheetGestureHandlersContext.Provider, { value, children: children.children });
};
