// Module ID: 5088
// Function ID: 43428
// Name: BottomSheetGestureHandlersProvider
// Dependencies: []
// Exports: default

// Module 5088 (BottomSheetGestureHandlersProvider)
importDefault(dependencyMap[0]);
const useMemo = arg1(dependencyMap[0]).useMemo;
const jsx = arg1(dependencyMap[1]).jsx;

export default function BottomSheetGestureHandlersProvider(children) {
  let animatedContentGestureState;
  let animatedHandleGestureState;
  let handleOnChange;
  let handleOnEnd;
  let handleOnFinalize;
  let handleOnStart;
  let useGestureEventsHandlersDefault = children.gestureEventsHandlersHook;
  if (undefined === useGestureEventsHandlersDefault) {
    useGestureEventsHandlersDefault = arg1(dependencyMap[2]).useGestureEventsHandlersDefault;
  }
  const sharedValue = arg1(dependencyMap[3]).useSharedValue(arg1(dependencyMap[4]).GESTURE_SOURCE.UNDETERMINED);
  const arg1 = sharedValue;
  const obj = arg1(dependencyMap[3]);
  const bottomSheetInternal = arg1(dependencyMap[2]).useBottomSheetInternal();
  ({ animatedHandleGestureState, animatedContentGestureState } = bottomSheetInternal);
  const obj2 = arg1(dependencyMap[2]);
  ({ handleOnStart, handleOnChange, handleOnEnd, handleOnFinalize } = useGestureEventsHandlersDefault());
  const gestureEventsHandlersDefault = useGestureEventsHandlersDefault();
  const gestureHandler = arg1(dependencyMap[2]).useGestureHandler(arg1(dependencyMap[4]).GESTURE_SOURCE.CONTENT, animatedContentGestureState, sharedValue, handleOnStart, handleOnChange, handleOnEnd, handleOnFinalize);
  const dependencyMap = gestureHandler;
  const obj3 = arg1(dependencyMap[2]);
  const gestureHandler1 = arg1(dependencyMap[2]).useGestureHandler(arg1(dependencyMap[4]).GESTURE_SOURCE.HANDLE, animatedHandleGestureState, sharedValue, handleOnStart, handleOnChange, handleOnEnd, handleOnFinalize);
  const useMemo = gestureHandler1;
  const items = [gestureHandler, gestureHandler1, sharedValue];
  const value = useMemo(() => ({ contentPanGestureHandler: gestureHandler, handlePanGestureHandler: gestureHandler1, animatedGestureSource: sharedValue }), items);
  return jsx(arg1(dependencyMap[5]).BottomSheetGestureHandlersContext.Provider, { value, children: children.children });
};
