// Module ID: 324
// Function ID: 4887
// Name: set
// Dependencies: [31, 325]
// Exports: unstable_getImageComponentDecorator, unstable_registerImageAttachedCallback, unstable_setImageComponentDecorator, unstable_unregisterImageAttachedCallback, useWrapRefWithImageAttachedCallbacks

// Module 324 (set)
import "result";
import { useRef } from "result";

const set = new Set();

export function unstable_setImageComponentDecorator(arg0) {
  let closure_2 = arg0;
}
export function unstable_getImageComponentDecorator() {
  return closure_2;
}
export const unstable_registerImageAttachedCallback = function unstable_registerImageAttachedCallback(arg0) {
  set.add(arg0);
};
export const unstable_unregisterImageAttachedCallback = function unstable_unregisterImageAttachedCallback(arg0) {
  set.delete(arg0);
};
export const useWrapRefWithImageAttachedCallbacks = function useWrapRefWithImageAttachedCallbacks(ref) {
  const importDefault = useRef([]);
  let tmp = useRef(null);
  if (null == tmp.current) {
    tmp.current = (arg0) => {
      if (null == arg0) {
        if (ref.current.length > 0) {
          let current = ref.current;
          const item = current.forEach((arg0) => arg0());
          ref.current = [];
        }
      } else {
        const item1 = outer1_4.forEach((arg0) => {
          const tmp = arg0(ref);
          if (null != tmp) {
            const current = ref.current;
            current.push(tmp);
          }
        });
      }
    };
  }
  return importDefault(325)(ref, tmp.current);
};
