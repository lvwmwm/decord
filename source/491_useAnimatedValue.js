// Module ID: 491
// Function ID: 492
// Name: useAnimatedValue
// Dependencies: [19, 397]
// Exports: default

// Module 491 (useAnimatedValue)
import noop from "noop" /* 19 */;
import get_FlatListDefault from "get FlatList" /* 397 */;

const useRef = noop.useRef;

export default function useAnimatedValue(arg0, arg1) {
  const tmp = useRef(null);
  if (null == tmp.current) {
    const value = new get_FlatListDefault.Value(arg0, arg1);
    tmp.current = value;
  }
  return tmp.current;
};
