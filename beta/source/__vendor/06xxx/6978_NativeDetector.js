// Module ID: 6978
// Function ID: 6979
// Name: NativeDetector
// Dependencies: [19, 17, 21, 6979, 6937, 6996, 6938, 6997, 6998, 6990, 6999]
// Exports: NativeDetector

// Module 6978 (NativeDetector)
import _modDef6938 from "module_6938" /* 6938 */;
import noop from "module_19" /* 19 */;

const require = fn;
const useMemo = fn(19).useMemo;
const Platform = fn(17).Platform;
const jsx = fn(21).jsx;

export const NativeDetector = function NativeDetector(gesture) {
  gesture = gesture.gesture;
  ({ children, touchAction, userSelect, enableContextMenu } = gesture);
  if (gesture.config.dispatchesAnimatedEvents) {
    let ReanimatedNativeDetector = tmp(6937).AnimatedNativeDetector;
  } else if (gesture.config.shouldUseReanimatedDetector) {
    ReanimatedNativeDetector = tmp(6996).ReanimatedNativeDetector;
  } else {
    ReanimatedNativeDetector = _modDef6938;
  }
  const obj = gesture(6979);
  const result = gesture(6997).ensureNativeDetectorComponent(ReanimatedNativeDetector);
  const tmpResult = gesture(6997);
  const gestureRelationsUpdater = gesture(6998).useGestureRelationsUpdater(gesture);
  const items = [gesture];
  const tmp6 = useMemo(() => {
    if (obj.isComposedGesture(gesture)) {
      let handlerTags = tmp.handlerTags;
    } else {
      handlerTags = [tmp.handlerTag];
    }
    return handlerTags;
  }, items);
  const tmpResult3 = gesture(6998);
  const detectorAttachmentGuard = gesture(6999).useDetectorAttachmentGuard(tmp6);
  const obj2 = { onGestureHandlerReanimatedEvent: gesture.detectorCallbacks.reanimatedEventHandler };
  const tmpResult4 = gesture(6999);
  return <ReanimatedNativeDetector onStartShouldSetResponder={obj.useJSResponderHandler(gesture).handleStartShouldSetResponder} touchAction={touchAction} userSelect={userSelect} enableContextMenu={enableContextMenu} pointerEvents="box-none" onGestureHandlerStateChange={gesture.detectorCallbacks.jsEventHandler} onGestureHandlerEvent={gesture.detectorCallbacks.jsEventHandler} onGestureHandlerTouchEvent={gesture.detectorCallbacks.jsEventHandler} onGestureHandlerReanimatedStateChange={obj2.onGestureHandlerReanimatedStateChange} onGestureHandlerReanimatedEvent={obj2.onGestureHandlerReanimatedEvent} onGestureHandlerReanimatedTouchEvent={obj2.onGestureHandlerReanimatedTouchEvent} onGestureHandlerAnimatedEvent={gesture.detectorCallbacks.animatedEventHandler} moduleId={globalThis._RNGH_MODULE_ID} handlerTags={tmp6} style={gesture(6937).nativeDetectorStyles.detector}>{children}</ReanimatedNativeDetector>;
};
