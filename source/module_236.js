// Module ID: 236
// Function ID: 3249
// Dependencies: [31]

// Module 236
arg5.default = () => {
  if (true === RNBridgeless.RN$Bridgeless) {
    return (arg0, arg1) => {
      let closure_0 = arg1;
      if ("function" !== typeof arg1) {
        const result = closure_0.RN$registerCallableModule(arg0, () => arg1);
      } else {
        const result1 = closure_0.RN$registerCallableModule(arg0, arg1);
      }
    };
  } else {
    const RNBridgeless = arg1(arg6[0]).default;
    return (MobileVoiceOverlayManager, _module) => {
      if ("function" !== typeof _module) {
        const result = closure_0.registerCallableModule(MobileVoiceOverlayManager, _module);
      } else {
        const result1 = closure_0.registerLazyCallableModule(MobileVoiceOverlayManager, _module);
      }
    };
  }
}();
