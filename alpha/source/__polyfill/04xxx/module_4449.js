// Module ID: 4449
// Function ID: 4450
// Dependencies: [19, 4448]
// Exports: useShallow

// Module 4449
import noop from "module_19" /* 19 */;


export const useShallow = function useShallow(arg0) {
  closure_0 = arg0;
  noop.useRef(undefined);
  return (arg0) => {
    let current = closure_0(arg0);
    if (obj.shallow(ref.current, current)) {
      current = tmp.current;
    } else {
      tmp.current = current;
    }
    return current;
  };
};
