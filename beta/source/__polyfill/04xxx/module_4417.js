// Module ID: 4417
// Function ID: 4418
// Dependencies: [19, 4416]
// Exports: useShallow

// Module 4417
import noop from "module_19" /* 19 */;


export const useShallow = function useShallow(cResult) {
  noop.useRef(undefined);
  return (arg0) => {
    let current = cResult(arg0);
    if (obj.shallow(ref.current, current)) {
      current = tmp.current;
    } else {
      tmp.current = current;
    }
    return current;
  };
};
