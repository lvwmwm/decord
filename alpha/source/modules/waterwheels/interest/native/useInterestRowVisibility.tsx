// Module ID: 18057
// Function ID: 18058
// Name: useInterestRowVisibility
// Dependencies: [32, 19, 7328, 2]
// Exports: default

// Module 18057 (useInterestRowVisibility)
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault, map;

let react = react_mod;
let result = size.fileFinishedImporting("modules/waterwheels/interest/native/useInterestRowVisibility.tsx");

export default function useInterestRowVisibility(arg0) {
  let closure_0;
  let items2;
  let items3;
  let items4;
  let items5;
  let ref;
  let tmp4;
  importDefault = arg0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  let num = arg2;
  if (arg2 === undefined) {
    num = 0;
  }
  react = undefined;
  react = react.useRef(0);
  const useRef = react.useRef;
  map = new Map();
  let closure_4 = useRef(map);
  const ref2 = react.useRef({ offset: 0, height: 0 });
  const ref3 = react.useRef(null);
  const ref4 = react.useRef(true);
  const items = [flag, num, arg0];
  const callback = react.useCallback(() => {
    let tmp10;
    let tmp11;
    const tmp = flag;
    if (tmp) {
      if (ref4.current) {
        if (null != num) {
          if (null != ref3.current) {
            if (ref2.current.height > num) {
              const offset = tmp27.current.offset;
              const current = closure_4.current;
              const diff = offset + tmp27.current.height - tmp3;
              const tmp31 = current[Symbol.iterator]();
              while (tmp31 !== undefined) {
                let tmp9 = _slicedToArray(tmp6, 2);
                [tmp10, tmp11] = tmp9;
                let sum = ref3.current + tmp11.y;
                let tmp15 = tmp11.height > 0;
                let tmp12 = tmp11;
                if (tmp15) {
                  tmp15 = sum < diff;
                }
                if (tmp15) {
                  tmp15 = sum + tmp12.height > offset;
                }
                if (tmp15) {
                  tmp15 = tmp10 > ref.current;
                }
                if (tmp15) {
                  ref.current = tmp10;
                  if (closure_0 != null) {
                    let tmp23Result = tmp23(tmp10);
                  }
                }
                continue;
              }
            }
          }
        }
      }
    }
  }, items);
  const items1 = [flag, callback];
  const layoutEffect = react.useLayoutEffect(() => {
    const tmp = flag;
    if (!tmp) {
      const current = closure_4.current;
      current.clear();
    }
    callback();
  }, items1);
  let obj = {
    onScroll: react.useCallback((offset, height) => {
      const obj = { offset, height };
      ref2.current = obj;
      callback();
    }, items2),
    onScrollTo: react.useCallback((offset) => {
      ref2.current.offset = offset;
    }, []),
    onViewportLayout: react.useCallback((nativeEvent) => {
      ref2.current.height = nativeEvent.nativeEvent.layout.height;
      callback();
    }, items3),
    onContentLayout: react.useCallback((nativeEvent) => {
      ref3.current = nativeEvent.nativeEvent.layout.y;
      callback();
    }, items4),
    onRowLayout: react.useCallback((arg0, nativeEvent) => {
      const tmp = flag;
      if (tmp) {
        const current = closure_4.current;
        const result = current.set(arg0, nativeEvent.nativeEvent.layout);
        callback();
      }
    }, items5),
    setGridRevealed: tmp4
  };
  items2 = [callback];
  items3 = [callback];
  items4 = [callback];
  items5 = [flag, callback];
  tmp4 = require("useStableCallback")((current) => {
    ref4.current = current;
    if (current) {
      callback();
    } else {
      current = closure_4.current;
      current.clear();
    }
  });
  return obj;
};
