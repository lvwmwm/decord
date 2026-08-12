// Module ID: 5521
// Function ID: 5522
// Name: NativeDetector
// Dependencies: [19, 17, 21, 5522, 5480, 5539, 5481, 5540, 5541, 5533, 5542]
// Exports: NativeDetector

// Module 5521 (NativeDetector)
import "noop";
import { useMemo } from "noop";
import { Platform } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;

export const NativeDetector = function NativeDetector(gesture) {
  let children;
  let enableContextMenu;
  let touchAction;
  let userSelect;
  gesture = gesture.gesture;
  ({ children, touchAction, userSelect, enableContextMenu } = gesture);
  let obj = gesture(5522);
  if (gesture.config.dispatchesAnimatedEvents) {
    let ReanimatedNativeDetector = tmp(5480).AnimatedNativeDetector;
  } else if (gesture.config.shouldUseReanimatedDetector) {
    ReanimatedNativeDetector = tmp(5539).ReanimatedNativeDetector;
  } else {
    ReanimatedNativeDetector = importDefault(5481);
  }
  let tmpResult = tmp(5540);
  const result = tmpResult.ensureNativeDetectorComponent(ReanimatedNativeDetector);
  tmpResult = tmp(5541);
  const gestureRelationsUpdater = tmpResult.useGestureRelationsUpdater(gesture);
  const items = [gesture];
  const tmp6 = useMemo(() => {
    if (obj.isComposedGesture(gesture)) {
      let handlerTags = tmp.handlerTags;
    } else {
      handlerTags = [tmp.handlerTag];
    }
    return handlerTags;
  }, items);
  const detectorAttachmentGuard = gesture(5542).useDetectorAttachmentGuard(tmp6);
  obj = { onGestureHandlerReanimatedEvent: gesture.detectorCallbacks.reanimatedEventHandler };
  obj = { onStartShouldSetResponder: obj.useJSResponderHandler(gesture).handleStartShouldSetResponder, touchAction, userSelect, enableContextMenu, pointerEvents: "box-none", onGestureHandlerStateChange: gesture.detectorCallbacks.jsEventHandler, onGestureHandlerEvent: gesture.detectorCallbacks.jsEventHandler, onGestureHandlerTouchEvent: gesture.detectorCallbacks.jsEventHandler, onGestureHandlerReanimatedStateChange: obj.onGestureHandlerReanimatedStateChange, onGestureHandlerReanimatedEvent: obj.onGestureHandlerReanimatedEvent, onGestureHandlerReanimatedTouchEvent: obj.onGestureHandlerReanimatedTouchEvent, onGestureHandlerAnimatedEvent: gesture.detectorCallbacks.animatedEventHandler, moduleId: globalThis._RNGH_MODULE_ID, handlerTags: tmp6, style: tmp(5480).nativeDetectorStyles.detector, children };
  return <ReanimatedNativeDetector onStartShouldSetResponder={obj.useJSResponderHandler(gesture).handleStartShouldSetResponder} touchAction={touchAction} userSelect={userSelect} enableContextMenu={enableContextMenu} pointerEvents="box-none" onGestureHandlerStateChange={gesture.detectorCallbacks.jsEventHandler} onGestureHandlerEvent={gesture.detectorCallbacks.jsEventHandler} onGestureHandlerTouchEvent={gesture.detectorCallbacks.jsEventHandler} onGestureHandlerReanimatedStateChange={obj.onGestureHandlerReanimatedStateChange} onGestureHandlerReanimatedEvent={obj.onGestureHandlerReanimatedEvent} onGestureHandlerReanimatedTouchEvent={obj.onGestureHandlerReanimatedTouchEvent} onGestureHandlerAnimatedEvent={gesture.detectorCallbacks.animatedEventHandler} moduleId={globalThis._RNGH_MODULE_ID} handlerTags={tmp6} style={tmp(5480).nativeDetectorStyles.detector}>{children}</ReanimatedNativeDetector>;
};
