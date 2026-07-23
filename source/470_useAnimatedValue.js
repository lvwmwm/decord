// Module ID: 470
// Function ID: 6154
// Name: useAnimatedValue
// Dependencies: [31, 390]
// Exports: default

// Module 470 (useAnimatedValue)
import { useRef } from "result";


export default function useAnimatedValue(arg0, arg1) {
  const tmp = useRef(null);
  if (null == tmp.current) {
    const Value = importDefault(390).Value;
    const prototype = Value.prototype;
    const value = new Value(arg0, arg1);
    tmp.current = value;
  }
  return tmp.current;
};
