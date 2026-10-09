// Module ID: 1762
// Function ID: 1763
// Name: setAndForwardRef
// Dependencies: []
// Exports: default

// Module 1762 (setAndForwardRef)

export default function setAndForwardRef(arg0) {
  let closure_0;
  let closure_1;
  ({ getForwardedRef: closure_0, setLocalRef: closure_1 } = arg0);
  return function forwardRef(BottomSheet) {
    const tmp = closure_0();
    closure_1(BottomSheet);
    if (typeof tmp === "function") {
      tmp(BottomSheet);
    } else {
      let tmp4 = typeof tmp === "object";
      if (typeof tmp === "object") {
        tmp4 = null != tmp;
      }
      if (tmp4) {
        tmp.current = BottomSheet;
      }
    }
  };
};
