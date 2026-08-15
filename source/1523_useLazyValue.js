// Module ID: 1523
// Function ID: 1524
// Name: useLazyValue
// Dependencies: [19]
// Exports: useLazyValue

// Module 1523 (useLazyValue)
import noop from "noop";


export const useLazyValue = function useLazyValue(arg0) {
  const ref = React.useRef(undefined);
  if (undefined === ref.current) {
    ref.current = arg0();
  }
  return ref.current;
};
