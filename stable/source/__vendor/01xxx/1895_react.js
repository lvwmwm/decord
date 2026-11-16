// Module ID: 1895
// Function ID: 1896
// Name: react
// Dependencies: [19, 1866]
// Exports: useAnimatedRefBase

// Module 1895 (react)
import react from "react" /* 19 */;
import react_native from "react-native" /* 1866 */;

let map;

let useRef = react.useRef;

export function useAnimatedRefBase(arg0) {
  let ref;
  let closure_0 = arg0;
  map = new Map();
  let current = useRef(map).current;
  useRef = useRef(null);
  const tmp2 = useRef(null);
  if (!tmp2.current) {
    function fun(current) {
      let tag;
      if (current) {
        let tmp = ref;
        ref.current = current(current);
        fun.getTag = () => {
          const getScrollableNode = current.getScrollableNode;
          let scrollableNode;
          const tmp = current;
          if (getScrollableNode != null) {
            scrollableNode = getScrollableNode();
          }
          if (!scrollableNode) {
            const obj = react_native;
            scrollableNode = obj.findNodeHandle(tmp);
          }
          return scrollableNode;
        };
        fun.current = current;
        const arr = tag;
        if (tag.size) {
          tag = undefined;
          if (fun != null) {
            const getTag = tmp3.getTag;
            if (getTag != null) {
              tag = getTag();
            }
          }
          if (tag == null) {
            tag = null;
          }
          const item = arr.forEach((fn, fn2) => {
            if (fn != null) {
              fn();
            }
            const result = current.set(fn2, fn2(tag));
          });
        }
      }
      return ref.current;
    }
    fun.observe = (fn) => {
      closure_0 = fn;
      let tmp = fun;
      let tag;
      if (fun != null) {
        const getTag = tmp.getTag;
        if (getTag != null) {
          tag = getTag();
        }
      }
      if (tag == null) {
        tag = null;
      }
      const result = current.set(fn, fn(tag));
      return () => {
        const value = current.get(fn);
        const obj = current;
        const tmp = fn;
        if (value != null) {
          value();
        }
        obj.delete(tmp);
      };
    };
    fun.current = null;
    tmp2.current = fun;
  }
  return tmp2.current;
}
