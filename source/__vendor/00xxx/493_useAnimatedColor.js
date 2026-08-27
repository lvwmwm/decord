// Module ID: 493
// Function ID: 494
// Name: useAnimatedColor
// Dependencies: [19, 397]
// Exports: default

// Module 493 (useAnimatedColor)
import noop from "noop" /* 19 */;
import get_FlatListDefault from "get FlatList" /* 397 */;

const useRef = noop.useRef;

export default function useAnimatedColor(arg0, arg1) {
  const tmp = useRef(null);
  if (null == tmp.current) {
    const color = new get_FlatListDefault.Color(arg0, arg1);
    tmp.current = color;
  }
  return tmp.current;
};
