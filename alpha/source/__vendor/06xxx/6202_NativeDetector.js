// Module ID: 6202
// Function ID: 6203
// Name: NativeDetector
// Dependencies: [19, 17, 21, 6203, 6161, 6220, 6162, 6221, 6222, 6214, 6223]
// Exports: NativeDetector

// Module 6202 (NativeDetector)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import _modDef6162 from "module_6162" /* 6162 */;
import _mod6214 from "module_6214" /* 6214 */;

const useMemo = react2.useMemo;
const Platform = react_native.Platform;
const jsx = Fragment.jsx;

export const NativeDetector = function NativeDetector(gesture) {
  let ReanimatedNativeDetector;
  let children;
  let enableContextMenu;
  let touchAction;
  let userSelect;
  gesture = gesture.gesture;
  const tmp = gesture;
  ({ children, touchAction, userSelect, enableContextMenu } = gesture);
  let obj = gesture(6203);
  const handleStartShouldSetResponder = obj.useJSResponderHandler(gesture).handleStartShouldSetResponder;
  if (gesture.config.dispatchesAnimatedEvents) {
    ReanimatedNativeDetector = tmp(6161).AnimatedNativeDetector;
  } else if (gesture.config.shouldUseReanimatedDetector) {
    ReanimatedNativeDetector = tmp(6220).ReanimatedNativeDetector;
  } else {
    ReanimatedNativeDetector = _modDef6162;
  }
  const tmpResult = tmp(6221);
  const result = tmpResult.ensureNativeDetectorComponent(ReanimatedNativeDetector);
  const tmpResult3 = tmp(6222);
  const gestureRelationsUpdater = tmpResult3.useGestureRelationsUpdater(gesture);
  const items = [gesture];
  const tmp6 = useMemo(() => {
    let handlerTags;
    const obj = _mod6214;
    if (obj.isComposedGesture(gesture)) {
      handlerTags = tmp.handlerTags;
    } else {
      handlerTags = [gesture.handlerTag];
    }
    return handlerTags;
  }, items);
  const tmpResult4 = tmp(6223);
  const detectorAttachmentGuard = tmpResult4.useDetectorAttachmentGuard(tmp6);
  const obj2 = { onGestureHandlerReanimatedEvent: gesture.detectorCallbacks.reanimatedEventHandler };
  return <ReanimatedNativeDetector onStartShouldSetResponder={handleStartShouldSetResponder} touchAction={touchAction} userSelect={userSelect} enableContextMenu={enableContextMenu} pointerEvents="box-none" onGestureHandlerStateChange={gesture.detectorCallbacks.jsEventHandler} onGestureHandlerEvent={gesture.detectorCallbacks.jsEventHandler} onGestureHandlerTouchEvent={gesture.detectorCallbacks.jsEventHandler} onGestureHandlerReanimatedStateChange={obj2.onGestureHandlerReanimatedStateChange} onGestureHandlerReanimatedEvent={obj2.onGestureHandlerReanimatedEvent} onGestureHandlerReanimatedTouchEvent={obj2.onGestureHandlerReanimatedTouchEvent} onGestureHandlerAnimatedEvent={gesture.detectorCallbacks.animatedEventHandler} moduleId={globalThis._RNGH_MODULE_ID} handlerTags={tmp6} style={tmp(6161).nativeDetectorStyles.detector}>{children}</ReanimatedNativeDetector>;
};
