// Module ID: 3893
// Function ID: 32234
// Name: useDisposableMemo
// Dependencies: []
// Exports: useDisposableMemo

// Module 3893 (useDisposableMemo)
const _module = require(dependencyMap[0]);
({ useRef: closure_0, useEffect: closure_1 } = _module);
let closure_2 = Symbol("UNINITIALIZED");

export const useDisposableMemo = function useDisposableMemo(arg0, _temp, items, current2) {
  let obj = { value: undefined, deps: closure_2, pendingDisposal: null };
  const tmp = tmp(obj);
  const tmp3 = tmp(_temp);
  tmp3.current = _temp;
  const tmp4 = tmp(current2);
  closure_2 = tmp4;
  tmp4.current = current2;
  if (tmp.current.deps === closure_2) {
    if (tmp2.current.deps !== closure_2) {
      if (tmp4.current) {
        tmp4.current.current = undefined;
      }
      tmp3.current(tmp2.current.value);
    }
    while (true) {
      let tmp12 = tmp;
      obj = {};
      let tmp13 = arg0;
      obj.value = arg0();
      obj.deps = items;
      obj.pendingDisposal = null;
      tmp2.current = obj;
      if (!tmp4.current) {
        break;
      } else {
        let tmp14 = tmp;
        tmp4.current.current = tmp2.current.value;
        // break
      }
      break;
    }
  } else {
    const deps = tmp2.current.deps;
    let flag = false;
    if (deps.length === items.length) {
      let num = 0;
      flag = true;
      if (0 < deps.length) {
        const _Object = Object;
        flag = false;
        while (Object.is(deps[num], items[num])) {
          num = num + 1;
          flag = true;
          if (num >= deps.length) {
            break;
          }
        }
      }
    }
  }
  tmp3(() => () => {
    if (ref3.current) {
      ref3.current.current = undefined;
    }
    ref2.current(ref.current.value);
  }, []);
  return tmp.current.value;
};
