// Module ID: 6931
// Function ID: 55262
// Name: useIntersectionObserver
// Dependencies: []
// Exports: useIsVisible

// Module 6931 (useIntersectionObserver)
function useIntersectionObserver(current, arg1, flag) {
  const require = current;
  if (flag === undefined) {
    flag = true;
  }
  const importDefault = flag;
  let dependencyMap;
  let tmp2Result;
  let closure_4;
  const tmp = callback2(null);
  dependencyMap = tmp;
  let tmp3 = arg1;
  if (null == arg1) {
    tmp3 = closure_7;
  }
  tmp2Result = importDefault(dependencyMap[1])(tmp3);
  closure_4 = callback2(null);
  const items = [flag, current, tmp2Result];
  callback3(() => {
    if (flag) {
      if (null == ref.current) {
        ref.current = arg0(tmp[2]).getIntersectionObserver(tmp2Result.current);
        const obj = arg0(tmp[2]);
      }
      const current = tmp.current;
      const current2 = ref.current;
      if (tmp9) {
        arg0(tmp[2]).watch(current2, current, arg0);
        const obj2 = arg0(tmp[2]);
      }
      const tmp9 = null != current && null != current2;
    }
  }, items);
  const items1 = [flag, arg1];
  tmp2Result(() => {
    if (flag) {
      const current = tmp.current;
      const arg0 = current;
      const current2 = ref.current;
      if (null != current) {
        if (null != current2) {
          return () => {
            current(closure_2[2]).unwatch(current2, current);
          };
        }
      }
      const flag = current2;
    }
  }, items1);
  return tmp;
}
const _module = require(dependencyMap[0]);
({ useEffect: closure_3, useMemo: closure_4, useRef: closure_5, useLayoutEffect: closure_6 } = _module);
let closure_7 = {};
const items = [15189782894321462000000000000000000000000000000000000000000000000000000000000000000, { threshold: 1 }];
const items1 = [items];
const map = new Map(items1);
const _module1 = require(dependencyMap[3]);
const result = _module1.fileFinishedImporting("../discord_common/js/shared/hooks/useIntersectionObserver.tsx");

export { useIntersectionObserver };
export const useIsVisible = function useIsVisible(arg0, arg1, flag) {
  let num = arg1;
  const require = arg0;
  if (arg1 === undefined) {
    num = 1;
  }
  const importDefault = num;
  if (flag === undefined) {
    flag = true;
  }
  const items = [num];
  return useIntersectionObserver(importDefault(dependencyMap[1])((isIntersecting) => {
    isIntersecting(isIntersecting.isIntersecting);
  }).current, callback(() => {
    let value = store.get(num);
    if (null == value) {
      const obj = { threshold: tmp };
      const result = store.set(tmp, obj);
      value = obj;
    }
    return value;
  }, items), flag);
};
