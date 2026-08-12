// Module ID: 5482
// Function ID: 5483
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [106, 65]

// Module 5482 (__INTERNAL_VIEW_CONFIG)
import weakSet from "weakSet";
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

let obj = { uiViewClassName: "RNGestureHandlerDetector", directEventTypes: { topGestureHandlerEvent: { registrationName: "onGestureHandlerEvent" }, topGestureHandlerStateChange: { registrationName: "onGestureHandlerStateChange" }, topGestureHandlerTouchEvent: { registrationName: "onGestureHandlerTouchEvent" }, topGestureHandlerReanimatedEvent: { registrationName: "onGestureHandlerReanimatedEvent" }, topGestureHandlerReanimatedStateChange: { registrationName: "onGestureHandlerReanimatedStateChange" }, topGestureHandlerReanimatedTouchEvent: { registrationName: "onGestureHandlerReanimatedTouchEvent" }, topGestureHandlerAnimatedEvent: { registrationName: "onGestureHandlerAnimatedEvent" } }, validAttributes: null };
obj = { handlerTags: true, moduleId: true, virtualChildren: true, pointerEvents: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onGestureHandlerEvent: true, onGestureHandlerStateChange: true, onGestureHandlerTouchEvent: true, onGestureHandlerReanimatedEvent: true, onGestureHandlerReanimatedStateChange: true, onGestureHandlerReanimatedTouchEvent: true, onGestureHandlerAnimatedEvent: true }));
obj[2] = obj;

export default setRuntimeConfigProvider.get("RNGestureHandlerDetector", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
