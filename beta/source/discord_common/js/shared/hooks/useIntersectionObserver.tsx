// Module ID: 7109
// Function ID: 7110
// Name: useIntersectionObserver
// Dependencies: [19, 7110, 7111, 2]
// Exports: useIntersectionObserver, useIsVisible

// Module 7109 (useIntersectionObserver)
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
({ useEffect: c3, useMemo: closure_4, useRef: hasOwnProperty, useLayoutEffect: metroRequire } = react);
let closure_7 = {};
let items = [1, { threshold: 1 }];
let items1 = [items];
const map = new Map(items1);
let result = size.fileFinishedImporting("../discord_common/js/shared/hooks/useIntersectionObserver.tsx");

export const useIntersectionObserver = function useIntersectionObserver(arg0, arg1) {
  let closure_2;
  let closure_0 = arg0;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  let closure_3;
  let closure_4;
  const tmp2 = closure_5(null);
  dependencyMap = tmp2;
  let tmp4 = arg1;
  const tmp = closure_5;
  const tmp3 = flag(7110);
  if (arg1 == null) {
    tmp4 = closure_7;
  }
  const tmp3Result = tmp3(tmp4);
  closure_3 = tmp3Result;
  closure_4 = tmp(null);
  const items = [flag, arg0, tmp3Result];
  closure_6(() => {
    const tmp = flag;
    if (tmp) {
      if (null == ref3.current) {
        const obj = current(dependencyMap[2]);
        ref3.current = obj.getIntersectionObserver(ref2.current);
      }
      current = ref.current;
      const current2 = tmp2.current;
      const tmp8 = null != current && null != current2;
      if (tmp8) {
        const obj2 = current(dependencyMap[2]);
        obj2.watch(current2, current, current);
      }
    }
  }, items);
  const items1 = [flag, arg1];
  closure_3(() => {
    const tmp = flag;
    if (tmp) {
      current = ref.current;
      const current2 = ref3.current;
      if (null != current) {
        if (null != current2) {
          return () => {
            const obj = closure_2_0(ref[2]);
            obj.unwatch(current2, current);
          };
        }
      }
    }
  }, items1);
  return tmp2;
};
export const useIsVisible = function useIsVisible(arg0, arg1) {
  let closure_0 = arg0;
  let num = arg1;
  if (arg1 === undefined) {
    num = 1;
  }
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  let tmp = num;
  const tmp2 = dependencyMap;
  const items = [num];
  const tmp3 = num(7110)((isIntersecting) => {
    closure_0(isIntersecting.isIntersecting);
  });
  const tmp4 = closure_4(() => {
    let value = map.get(num);
    const obj = map;
    if (null == value) {
      const obj2 = { threshold: num };
      const result = obj.set(tmp, obj2);
      value = obj2;
    }
    return value;
  }, items);
  let current = tmp3.current;
  flag = undefined;
  if (flag === undefined) {
    flag = true;
  }
  let closure_3;
  closure_4 = undefined;
  const tmp6 = closure_5(null);
  let closure_2 = tmp6;
  let tmp8 = tmp4;
  const tmp5 = closure_5;
  const tmpResult = tmp(7110);
  if (tmp4 == null) {
    tmp8 = closure_7;
  }
  const tmpResultResult = tmpResult(tmp8);
  closure_3 = tmpResultResult;
  closure_4 = tmp5(null);
  const items1 = [flag, current, tmpResultResult];
  closure_6(() => {
    const tmp = flag;
    if (tmp) {
      if (null == ref3.current) {
        const obj = current(dependencyMap[2]);
        ref3.current = obj.getIntersectionObserver(ref2.current);
      }
      current = ref.current;
      const current2 = tmp2.current;
      const tmp8 = null != current && null != current2;
      if (tmp8) {
        const obj2 = current(dependencyMap[2]);
        obj2.watch(current2, current, current);
      }
    }
  }, items1);
  const items2 = [flag, tmp4];
  closure_3(() => {
    const tmp = flag;
    if (tmp) {
      current = ref.current;
      const current2 = ref3.current;
      if (null != current) {
        if (null != current2) {
          return () => {
            const obj = closure_2_0(ref[2]);
            obj.unwatch(current2, current);
          };
        }
      }
    }
  }, items2);
  return tmp6;
};
