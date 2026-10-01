// Module ID: 15440
// Function ID: 15441
// Name: VisibilitySensor
// Dependencies: [19, 17, 21, 1479, 2]
// Exports: default

// Module 15440 (VisibilitySensor)
import react_native from "react-native" /* 17 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1479 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size_mod from "module_2" /* 2 */;

let ref;

let c2;
let c3;
let metroImportDefault;
let metroRequire;
let react = react_mod;
({ useEffect: c2, useRef: c3 } = react);
react = react_mod;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let size = size_mod;
const result = size.fileFinishedImporting("modules/collectibles/native/VisibilitySensor.tsx");

export default function _default(onChange) {
  let children;
  let items3;
  let resetKey;
  onChange = onChange.onChange;
  function stopWatching() {
    if (null !== ref.current) {
      const _clearInterval = clearInterval;
      clearInterval(ref.current);
      ref.current = null;
    }
  }
  ({ children, resetKey } = onChange);
  let tmp = _false(null);
  let closure_1 = tmp;
  let c2 = _false(false);
  size = useWindowDimensionsDefault();
  const width = size.width;
  const height = size.height;
  let closure_5 = _false(null);
  const items = [resetKey];
  const tmp2 = React2(() => {
    closure_2.current = false;
  }, items);
  const items1 = [onChange];
  const callback = react.useCallback((arg0, arg1) => {
    let ref2;
    let tmp;
    let closure_0 = arg0;
    ref = arg1;
    if (null === ref.current) {
      const _setInterval = setInterval;
      tmp.current = setInterval(() => {
        if (null !== ref.current) {
          const current = ref.current;
          current.measure((arg0, arg1, arg2, arg3, arg4, arg5) => {
            const tmp = arg5 + arg3 > 0 && arg5 < ref && arg4 < closure_1_0 && arg4 + arg2 > 0;
            if (tmp !== ref2.current) {
              ref2.current = tmp;
              closure_0(tmp);
            }
          });
        }
      }, 1000);
    }
  }, items1);
  const items2 = [callback, height, width];
  React2(() => {
    callback(width, height);
    return stopWatching;
  }, items2);
  const obj = { collapsable: false, ref: tmp, children: items3 };
  items3 = [children, metroRequire(View, {})];
  return metroImportDefault(View, obj);
};
