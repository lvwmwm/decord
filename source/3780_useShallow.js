// Module ID: 3780
// Function ID: 28701
// Name: useShallow
// Dependencies: [31, 3779]
// Exports: useShallow

// Module 3780 (useShallow)
import result from "result";


export const useShallow = function useShallow(arg0) {
  let closure_0 = arg0;
  let closure_1 = React.useRef(undefined);
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
