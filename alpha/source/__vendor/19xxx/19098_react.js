// Module ID: 19098
// Function ID: 19099
// Name: react
// Dependencies: [19]
// Exports: useCallback, useCallbackOne

// Module 19098 (react)
import react from "react" /* 19 */;

function useMemoOne(fn, items) {
  let closure_0 = fn;
  let closure_1 = items;
  let obj = react;
  const first = react.useState(() => {
    const obj = { inputs, result: closure_0() };
    return obj;
  })[0];
  const ref = react.useRef(true);
  const ref1 = react.useRef(first);
  if (!ref.current) {
    let obj2;
    let inputs = items;
    const _Boolean = Boolean;
    if (items) {
      inputs = ref1.current.inputs;
    }
    if (inputs) {
      const inputs1 = ref1.current.inputs;
      let flag = false;
      if (items.length === inputs1.length) {
        let num = 0;
        flag = true;
        if (0 < items.length) {
          flag = false;
          while (items[num] === inputs1[num]) {
            let sum = num + 1;
            num = sum;
            flag = true;
            if (sum >= items.length) {
              break;
            }
          }
        }
      }
      inputs = flag;
    }
    if (!_Boolean(inputs)) {
      obj2 = { inputs: items, result: fn() };
    }
    items = [obj2];
    const effect = obj.useEffect(() => {
      ref.current = false;
      ref1.current = obj2;
    }, items);
    return obj2.result;
  }
  obj2 = ref1.current;
}
function useCallbackOne(arg0, items) {
  let closure_0 = arg0;
  return useMemoOne(() => closure_0, items);
}

export const useCallback = useCallbackOne;
export { useCallbackOne };
export const useMemo = useMemoOne;
export { useMemoOne };
