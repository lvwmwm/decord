// Module ID: 14666
// Function ID: 14667
// Name: YouScreenNavIconMeasurer
// Dependencies: [32, 19, 17, 21, 575, 7606, 2]
// Exports: YouScreenNavIconMeasurer, useYouScreenNavIconMeasurement

// Module 14666 (YouScreenNavIconMeasurer)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import ContextUtilsDefault from "ContextUtils" /* 7606 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let map;

let hasOwnProperty;
let metroRequire;
let _slicedToArray = _slicedToArray_mod;
const PixelRatio = react_native.PixelRatio;
const jsx = Fragment.jsx;
const PX_4 = nativeDefault.space.PX_4;
[hasOwnProperty, metroRequire] = ContextUtilsDefault();
_slicedToArray(ContextUtilsDefault(), 2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouScreenNavIconMeasurer.tsx");

export function YouScreenNavIconMeasurer(children) {
  let closure_2;
  let ref;
  let width;
  width = undefined;
  closure_2 = undefined;
  children = children.children;
  const useRef = width.useRef;
  map = new Map();
  _slicedToArray = useRef(map);
  [width, closure_2] = width.useState();
  const onWidthMeasured = width.useCallback((arg0, arg1) => {
    let tmp;
    if (null == arg1) {
      const current2 = ref.current;
      current2.delete(arg0);
      tmp = ref;
    } else {
      tmp = ref;
      const current = ref.current;
      const result = current.set(arg0, arg1);
    }
    const current3 = tmp.current;
    const items = [0, ...current3.values()];
    closure_2(PixelRatio.roundToNearestPixel(Math.max.apply(items) + PX_4));
  }, []);
  let items = [width, onWidthMeasured];
  const obj = { value: width.useMemo(() => ({ width, onWidthMeasured }), items), children };
  return onWidthMeasured(redux.Provider, obj);
}
export function useYouScreenNavIconMeasurement() {
  let closure_3;
  let first;
  let tmp7;
  const tmp = metroRequire();
  const onWidthMeasured = tmp.onWidthMeasured;
  const width = tmp.width;
  const id = react.useId();
  const ref = react.useRef(null);
  [first, closure_3] = react.useState(false);
  const items = [id, onWidthMeasured];
  const layoutEffect = react.useLayoutEffect(() => {
    const current = ref.current;
    if (null != current) {
      current.measureLayout(current, (arg0, arg1, arg2) => {
        onWidthMeasured(id, arg2);
        closure_1_3(true);
      });
      return () => onWidthMeasured(id, null);
    }
  }, items);
  const obj = { containerRef: ref, width: tmp7 };
  tmp7 = undefined;
  if (first) {
    tmp7 = width;
  }
  return obj;
}
