// Module ID: 16459
// Function ID: 16460
// Name: useMeasuredLayout
// Dependencies: [32, 19, 2]
// Exports: default

// Module 16459 (useMeasuredLayout)
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

let size = size_mod;
const result = size.fileFinishedImporting("modules/screen/native/useMeasuredLayout.tsx");

export default function useMeasuredLayout() {
  let closure_129_1;
  let closure_129_2;
  let tmp3;
  let tmp5;
  const ref = react.useRef(null);
  [tmp3, closure_129_1] = _slicedToArray(react.useState(), 2);
  const tmp2 = _slicedToArray(react.useState(), 2);
  [tmp5, closure_129_2] = react.useState();
  _slicedToArray(react.useState(), 2);
  const layoutEffect = react.useLayoutEffect(() => {
    const current = ref.current;
    if (current != null) {
      current.measureInWindow((arg0, arg1, arg2, arg3) => {
        closure_1_1(arg2);
        closure_1_2(arg3);
      });
    }
  }, []);
  size = {
    ref,
    onLayout: react.useCallback((nativeEvent) => {
      const layout = nativeEvent.nativeEvent.layout;
      closure_1_1(layout.width);
      closure_1_2(layout.height);
    }, []),
    width: tmp3,
    height: tmp5
  };
  return size;
};
