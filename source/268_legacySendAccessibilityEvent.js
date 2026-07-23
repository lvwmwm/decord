// Module ID: 268
// Function ID: 3379
// Name: legacySendAccessibilityEvent
// Dependencies: [48, 46]

// Module 268 (legacySendAccessibilityEvent)
const module = arg2;
const dependencyMap = arg6;
arg5.default = function legacySendAccessibilityEvent(_nativeTag, arg1) {
  if ("focus" === arg1) {
    const tmp3 = module(48);
    const tmp3Result = module(48)(module(46).sendAccessibilityEvent);
    tmp3Result(_nativeTag, module(46).getConstants().AccessibilityEventTypes.typeViewFocused);
    const obj = module(46);
  }
  if ("click" === arg1) {
    const tmp8 = module(48);
    const tmp8Result = module(48)(module(46).sendAccessibilityEvent);
    tmp8Result(_nativeTag, module(46).getConstants().AccessibilityEventTypes.typeViewClicked);
    const obj2 = module(46);
  }
};
