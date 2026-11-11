// Module ID: 18990
// Function ID: 18991
// Name: useInterestRowVisibility
// Dependencies: [32, 19, 2]
// Exports: default

// Module 18990 (useInterestRowVisibility)
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let map;

let result = size.fileFinishedImporting("modules/waterwheels/interest/native/useInterestRowVisibility.tsx");

export default function useInterestRowVisibility(arg0) {
  let items2;
  let items3;
  let items4;
  let items5;
  let closure_0 = arg0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  let num = arg2;
  if (arg2 === undefined) {
    num = 0;
  }
  const ref = flag.useRef(0);
  const useRef = flag.useRef;
  map = new Map();
  const ref2 = useRef(map);
  const ref3 = flag.useRef({ offset: 0, height: 0 });
  const ref4 = flag.useRef(null);
  const items = [flag, num, arg0];
  const callback = flag.useCallback(() => {
    let tmp10;
    let tmp9;
    const tmp = flag;
    if (tmp) {
      if (null != num) {
        if (null != ref4.current) {
          if (ref3.current.height > num) {
            const offset = tmp26.current.offset;
            const current = ref2.current;
            const diff = offset + tmp26.current.height - tmp2;
            const tmp30 = current[Symbol.iterator]();
            while (tmp30 !== undefined) {
              let tmp8 = _slicedToArray(tmp5, 2);
              [tmp9, tmp10] = tmp8;
              let sum = ref4.current + tmp10.y;
              let tmp14 = tmp10.height > 0;
              let tmp11 = tmp10;
              if (tmp14) {
                tmp14 = sum < diff;
              }
              if (tmp14) {
                tmp14 = sum + tmp11.height > offset;
              }
              if (tmp14) {
                tmp14 = tmp9 > ref.current;
              }
              if (tmp14) {
                ref.current = tmp9;
                if (closure_0 != null) {
                  let tmp22Result = tmp22(tmp9);
                }
              }
              continue;
            }
          }
        }
      }
    }
  }, items);
  const items1 = [flag, callback];
  const layoutEffect = flag.useLayoutEffect(() => {
    const tmp = flag;
    if (!tmp) {
      const current = ref2.current;
      current.clear();
    }
    callback();
  }, items1);
  let obj = {
    onScroll: flag.useCallback((offset, height) => {
      const obj = { offset, height };
      ref3.current = obj;
      callback();
    }, items2),
    onScrollTo: flag.useCallback((offset) => {
      ref3.current.offset = offset;
    }, []),
    onViewportLayout: flag.useCallback((nativeEvent) => {
      ref3.current.height = nativeEvent.nativeEvent.layout.height;
      callback();
    }, items3),
    onContentLayout: flag.useCallback((nativeEvent) => {
      ref4.current = nativeEvent.nativeEvent.layout.y;
      callback();
    }, items4),
    onRowLayout: flag.useCallback((arg0, nativeEvent) => {
      const tmp = flag;
      if (tmp) {
        const current = ref2.current;
        const result = current.set(arg0, nativeEvent.nativeEvent.layout);
        callback();
      }
    }, items5)
  };
  items2 = [callback];
  items3 = [callback];
  items4 = [callback];
  items5 = [flag, callback];
  return obj;
};
