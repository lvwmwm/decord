// Module ID: 268
// Function ID: 3379
// Name: legacySendAccessibilityEvent
// Dependencies: []

// Module 268 (legacySendAccessibilityEvent)
arg5.default = function legacySendAccessibilityEvent(_nativeTag, arg1) {
  if ("focus" === arg1) {
    const tmp3 = arg2(arg6[0]);
    const tmp3Result = arg2(arg6[0])(arg2(arg6[1]).sendAccessibilityEvent);
    tmp3Result(_nativeTag, arg2(arg6[1]).getConstants().AccessibilityEventTypes.typeViewFocused);
    const obj = arg2(arg6[1]);
  }
  if ("click" === arg1) {
    const tmp8 = arg2(arg6[0]);
    const tmp8Result = arg2(arg6[0])(arg2(arg6[1]).sendAccessibilityEvent);
    tmp8Result(_nativeTag, arg2(arg6[1]).getConstants().AccessibilityEventTypes.typeViewClicked);
    const obj2 = arg2(arg6[1]);
  }
};
