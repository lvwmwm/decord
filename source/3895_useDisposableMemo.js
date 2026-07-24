// Module ID: 3895
// Function ID: 32240
// Name: useDisposableMemo
// Dependencies: [31]
// Exports: useDisposableMemo

// Module 3895 (useDisposableMemo)
import result from "result";

let closure_0;
let closure_1;
({ useRef: closure_0, useEffect: closure_1 } = result);
let closure_2 = Symbol("UNINITIALIZED");

export const useDisposableMemo = function useDisposableMemo(arg0, _temp, items, current2) {
  let obj = { value: undefined, deps: closure_2, pendingDisposal: null };
  const tmp = callback(obj);
  callback = tmp;
  const tmp3 = callback(_temp);
  const callback2 = tmp3;
  tmp3.current = _temp;
  const tmp4 = callback(current2);
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
        break;
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
  callback2(() => () => {
    if (outer1_2.current) {
      outer1_2.current.current = undefined;
    }
    outer1_1.current(outer1_0.current.value);
  }, []);
  return tmp.current.value;
};
