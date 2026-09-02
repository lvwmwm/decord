// Module ID: 4107
// Function ID: 4108
// Name: useShallow
// Dependencies: [19, 4106]
// Exports: useShallow

// Module 4107 (useShallow)
import closure_2 from "noop" /* 19 */;


export const useShallow = function useShallow(arg0) {
  closure_0 = arg0;
  closure_1 = React.useRef(undefined);
  return (arg0) => {
    let current = callback(arg0);
    if (obj.shallow(ref.current, current)) {
      current = tmp.current;
    } else {
      tmp.current = current;
    }
    return current;
  };
};
