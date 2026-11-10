// Module ID: 5437
// Function ID: 5438
// Dependencies: [17, 106, 65]

// Module 5437
import react_native from "react-native" /* 17 */;
import DynamicallyInjectedByGestureHandler from "DynamicallyInjectedByGestureHandler" /* 106 */;
import module_65 from "module_65" /* 65 */;

let obj2;
const codegenNativeComponent = react_native.codegenNativeComponent;
const __INTERNAL_VIEW_CONFIG = { uiViewClassName: "RNGestureHandlerDetector", directEventTypes: { topGestureHandlerEvent: { registrationName: "onGestureHandlerEvent" }, topGestureHandlerStateChange: { registrationName: "onGestureHandlerStateChange" }, topGestureHandlerTouchEvent: { registrationName: "onGestureHandlerTouchEvent" }, topGestureHandlerReanimatedEvent: { registrationName: "onGestureHandlerReanimatedEvent" }, topGestureHandlerReanimatedStateChange: { registrationName: "onGestureHandlerReanimatedStateChange" }, topGestureHandlerReanimatedTouchEvent: { registrationName: "onGestureHandlerReanimatedTouchEvent" }, topGestureHandlerAnimatedEvent: { registrationName: "onGestureHandlerAnimatedEvent" } }, validAttributes: obj2 };
obj2 = { handlerTags: true, moduleId: true, virtualChildren: true, pointerEvents: true };
const merged = Object.assign(DynamicallyInjectedByGestureHandler.ConditionallyIgnoredEventHandlers({ onGestureHandlerEvent: true, onGestureHandlerStateChange: true, onGestureHandlerTouchEvent: true, onGestureHandlerReanimatedEvent: true, onGestureHandlerReanimatedStateChange: true, onGestureHandlerReanimatedTouchEvent: true, onGestureHandlerAnimatedEvent: true }));

export default module_65.get("RNGestureHandlerDetector", () => obj);
export { __INTERNAL_VIEW_CONFIG };
