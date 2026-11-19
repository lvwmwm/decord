// Module ID: 5110
// Function ID: 5111
// Name: NativeDetector
// Dependencies: [19, 17, 21, 5111, 5065, 5128, 5066, 5129, 5130, 5122, 5131, 5132]
// Exports: NativeDetector

// Module 5110 (NativeDetector)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import animatedComponentDefault from "animatedComponent" /* 5066 */;
import _mod5122 from "module_5122" /* 5122 */;

const useMemo = react2.useMemo;
const Platform = react_native.Platform;
const jsx = Fragment.jsx;

export function NativeDetector(gesture) {
  let ReanimatedNativeDetector;
  let children;
  let enableContextMenu;
  let touchAction;
  let userSelect;
  gesture = gesture.gesture;
  const tmp = gesture;
  ({ children, touchAction, userSelect, enableContextMenu } = gesture);
  let obj = gesture(5111);
  const handleStartShouldSetResponder = obj.useJSResponderHandler(gesture).handleStartShouldSetResponder;
  if (gesture.config.dispatchesAnimatedEvents) {
    ReanimatedNativeDetector = tmp(5065).AnimatedNativeDetector;
  } else if (gesture.config.shouldUseReanimatedDetector) {
    ReanimatedNativeDetector = tmp(5128).ReanimatedNativeDetector;
  } else {
    ReanimatedNativeDetector = animatedComponentDefault;
  }
  const tmpResult = tmp(5129);
  const result = tmpResult.ensureNativeDetectorComponent(ReanimatedNativeDetector);
  const tmpResult4 = tmp(5130);
  const gestureRelationsUpdater = tmpResult4.useGestureRelationsUpdater(gesture);
  const items = [gesture];
  const tmp6 = useMemo(() => {
    let handlerTags;
    const obj = _mod5122;
    if (obj.isComposedGesture(gesture)) {
      handlerTags = tmp.handlerTags;
    } else {
      handlerTags = [gesture.handlerTag];
    }
    return handlerTags;
  }, items);
  const tmpResult5 = tmp(5131);
  const detectorAttachmentGuard = tmpResult5.useDetectorAttachmentGuard(tmp6);
  let prop;
  if (gesture.config.shouldUseReanimatedDetector) {
    prop = gesture.detectorCallbacks.reanimatedEventHandler;
  }
  const obj2 = { onGestureHandlerReanimatedEvent: prop };
  const tmpResult6 = tmp(5132);
  return <ReanimatedNativeDetector onStartShouldSetResponder={handleStartShouldSetResponder} touchAction={touchAction} userSelect={userSelect} enableContextMenu={enableContextMenu} pointerEvents="box-none" onGestureHandlerStateChange={gesture.detectorCallbacks.jsEventHandler} onGestureHandlerEvent={gesture.detectorCallbacks.jsEventHandler} onGestureHandlerTouchEvent={gesture.detectorCallbacks.jsEventHandler} onGestureHandlerReanimatedStateChange={obj2.onGestureHandlerReanimatedStateChange} onGestureHandlerReanimatedEvent={obj2.onGestureHandlerReanimatedEvent} onGestureHandlerReanimatedTouchEvent={obj2.onGestureHandlerReanimatedTouchEvent} onGestureHandlerAnimatedEvent={gesture.detectorCallbacks.animatedEventHandler} moduleId={tmpResult6.getModuleId()} handlerTags={tmp6} style={tmp(5065).nativeDetectorStyles.detector}>{children}</ReanimatedNativeDetector>;
}
