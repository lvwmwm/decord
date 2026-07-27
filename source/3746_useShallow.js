// Module ID: 3746
// Function ID: 28599
// Name: useShallow
// Dependencies: [31, 3745]
// Exports: useShallow

// Module 3746 (useShallow)
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
