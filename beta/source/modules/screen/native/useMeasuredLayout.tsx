// Module ID: 9102
// Function ID: 9103
// Name: useMeasuredLayout
// Dependencies: [32, 19, 2]
// Exports: default

// Module 9102 (useMeasuredLayout)
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

let size = size_mod;
const result = size.fileFinishedImporting("modules/screen/native/useMeasuredLayout.tsx");

export default function useMeasuredLayout() {
  let c2;
  let closure_3;
  let first;
  let tmp3;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let flag = obj.isMounted;
  if (flag === undefined) {
    flag = true;
  }
  c2 = undefined;
  closure_3 = undefined;
  const ref = react.useRef(null);
  const tmp2 = _slicedToArray(react.useState(), 2);
  [tmp3, c2] = tmp2;
  [first, closure_3] = react.useState();
  const items = [flag];
  const layoutEffect = react.useLayoutEffect(() => {
    const tmp = flag;
    if (tmp) {
      const current = ref.current;
      if (current != null) {
        current.measureInWindow((arg0, arg1, arg2, arg3) => {
          _undefined(arg2);
          closure_1_3(arg3);
        });
      }
    }
  }, items);
  size = {
    ref,
    onLayout: react.useCallback((nativeEvent) => {
      const layout = nativeEvent.nativeEvent.layout;
      _undefined(layout.width);
      closure_3(layout.height);
    }, []),
    width: tmp3,
    height: first
  };
  return size;
};
