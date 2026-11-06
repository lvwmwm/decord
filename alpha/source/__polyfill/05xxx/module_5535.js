// Module ID: 5535
// Function ID: 5536
// Dependencies: [19, 5454, 5498]
// Exports: Wrap

// Module 5535
import react2 from "react" /* 19 */;
import assignRef2 from "assignRef" /* 5498 */;

const react = react2;

const useCallback = react2.useCallback;

export const Wrap = function(ref) {
  ref = ref.ref;
  let ref2;
  try {
    let obj = react;
    const Children = react.Children;
    const onlyResult = Children.only(tmp);
    const tmp3 = onlyResult;
    ref2 = onlyResult.props.ref;
    const items = [ref2, ref];
    let obj2 = {
      collapsable: false,
      ref: useCallback((__internalInstanceHandle) => {
          let assignRefResult1;
          let obj = ref(ref2[2]);
          let assignRefResult = obj.assignRef(assignRefResult1, __internalInstanceHandle);
          ref = assignRefResult;
          const assignRef = ref(ref2[2]).assignRef;
          ref(ref2[2]);
          let obj2 = ref(ref2[2]);
          assignRefResult1 = assignRef(ref, obj2.preferHostInstance(__internalInstanceHandle));
          return () => {
            if (typeof assignRefResult === "function") {
              tmp();
            } else {
              const obj = assignRef2;
              assignRefResult = obj.assignRef(ref2, null);
            }
            if (typeof assignRefResult1 === "function") {
              tmp3();
            } else {
              const obj2 = assignRef2;
              assignRefResult1 = obj2.assignRef(ref, null);
            }
          };
        }, items)
    };
    return obj.cloneElement(onlyResult, obj2, onlyResult.props.children);
  } catch (err) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const obj3 = ref(ref2[1]);
    const error = new Error(obj3.tagMessage("VirtualGestureDetector expects exactly one React element as its child. To use a gesture with multiple views, wrap them in a single parent view and attach the gesture to that."));
    throw error;
  }
};
