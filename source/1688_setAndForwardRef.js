// Module ID: 1688
// Function ID: 18694
// Name: setAndForwardRef
// Dependencies: []

// Module 1688 (setAndForwardRef)
arg5.default = function setAndForwardRef(arg0) {
  ({ getForwardedRef: closure_0, setLocalRef: closure_1 } = arg0);
  return function forwardRef(BottomSheet) {
    const tmp = closure_0();
    closure_1(BottomSheet);
    if ("function" === typeof tmp) {
      tmp(BottomSheet);
    } else {
      let tmp4 = "object" === tmp3;
      if (tmp4) {
        tmp4 = null != tmp;
      }
      if (tmp4) {
        tmp.current = BottomSheet;
      }
    }
  };
};
