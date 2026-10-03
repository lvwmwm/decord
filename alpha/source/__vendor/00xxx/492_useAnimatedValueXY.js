// Module ID: 492
// Function ID: 493
// Name: useAnimatedValueXY
// Dependencies: [19, 397]
// Exports: default

// Module 492 (useAnimatedValueXY)
import react from "react" /* 19 */;
import get_FlatListDefault from "get FlatList" /* 397 */;

const useRef = react.useRef;

export default function useAnimatedValueXY(arg0, arg1) {
  const tmp = useRef(null);
  if (null == tmp.current) {
    const self = this;
    const self2 = this;
    const valueXY = new get_FlatListDefault.ValueXY(arg0, arg1);
    tmp.current = valueXY;
  }
  return tmp.current;
};
