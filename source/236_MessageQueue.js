// Module ID: 236
// Function ID: 3249
// Name: MessageQueue
// Dependencies: [63]

// Module 236 (MessageQueue)
const global = arg0;
const require = arg1;
const dependencyMap = arg6;
arg5.default = (() => {
  if (true === _global.RN$Bridgeless) {
    return (arg0, arg1) => {
      let closure_0 = arg1;
      if ("function" !== typeof arg1) {
        const result = closure_0.RN$registerCallableModule(arg0, () => closure_0);
      } else {
        const result1 = closure_0.RN$registerCallableModule(arg0, arg1);
      }
    };
  } else {
    _global = require(63) /* MessageQueue */.default;
    return (MobileVoiceOverlayManager, closure_5) => {
      if ("function" !== typeof closure_5) {
        const result = closure_0.registerCallableModule(MobileVoiceOverlayManager, closure_5);
      } else {
        const result1 = closure_0.registerLazyCallableModule(MobileVoiceOverlayManager, closure_5);
      }
    };
  }
})();
