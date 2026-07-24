// Module ID: 6936
// Function ID: 55328
// Name: useIntersectionObserver
// Dependencies: [31, 6937, 6938, 2]
// Exports: useIsVisible

// Module 6936 (useIntersectionObserver)
import result from "result";

let closure_3;
let closure_4;
let closure_5;
let closure_6;
function useIntersectionObserver(current, arg1, flag) {
  let closure_0 = current;
  if (flag === undefined) {
    flag = true;
  }
  let dependencyMap;
  let callback;
  let closure_4;
  const tmp = callback3(null);
  dependencyMap = tmp;
  let tmp3 = arg1;
  if (null == arg1) {
    tmp3 = closure_7;
  }
  const tmp2Result = flag(6937)(tmp3);
  callback = tmp2Result;
  closure_4 = callback3(null);
  const items = [flag, current, tmp2Result];
  callback4(() => {
    if (flag) {
      if (null == ref.current) {
        ref.current = current(_undefined[2]).getIntersectionObserver(_undefined2.current);
        const obj = current(_undefined[2]);
      }
      current = _undefined.current;
      const current2 = ref.current;
      if (tmp9) {
        current(_undefined[2]).watch(current2, current, current);
        const obj2 = current(_undefined[2]);
      }
      tmp9 = null != current && null != current2;
    }
  }, items);
  const items1 = [flag, arg1];
  callback(() => {
    if (current2) {
      const current = _undefined.current;
      current2 = ref.current;
      if (null != current) {
        if (null != current2) {
          return () => {
            current(table[2]).unwatch(current2, current);
          };
        }
      }
    }
  }, items1);
  return tmp;
}
({ useEffect: closure_3, useMemo: closure_4, useRef: closure_5, useLayoutEffect: closure_6 } = result);
let closure_7 = {};
let items = [1, { threshold: 1 }];
let items1 = [items];
const map = new Map(items1);
result = require("__handleIntersections").fileFinishedImporting("../discord_common/js/shared/hooks/useIntersectionObserver.tsx");

export { useIntersectionObserver };
export const useIsVisible = function useIsVisible(arg0, arg1, flag) {
  let num = arg1;
  let closure_0 = arg0;
  if (arg1 === undefined) {
    num = 1;
  }
  if (flag === undefined) {
    flag = true;
  }
  const items = [num];
  return useIntersectionObserver(num(6937)((isIntersecting) => {
    callback(isIntersecting.isIntersecting);
  }).current, callback2(() => {
    let value = outer1_8.get(num);
    if (null == value) {
      const obj = { threshold: tmp };
      const result = outer1_8.set(tmp, obj);
      value = obj;
    }
    return value;
  }, items), flag);
};
