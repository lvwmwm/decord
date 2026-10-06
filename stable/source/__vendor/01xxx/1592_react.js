// Module ID: 1592
// Function ID: 1593
// Name: react
// Dependencies: [19]
// Exports: useMemoArray

// Module 1592 (react)
import react from "react" /* 19 */;


export const useMemoArray = function useMemoArray(arr) {
  const ref = react.useRef(undefined);
  const current = ref.current;
  const mapped = arr.map((item, index) => {
    let arr;
    let tmp;
    [tmp, arr] = item;
    let tmp3;
    if (current != null) {
      tmp3 = tmp2.entries[index];
    }
    let everyResult = tmp3 && tmp3.deps.length === arr.length;
    if (everyResult) {
      const deps = tmp3.deps;
      everyResult = deps.every((item, index) => Object.is(item, closure_1_0[index]));
    }
    if (!everyResult) {
      tmp3 = { item: tmp, deps: arr };
      const obj = { item: tmp, deps: arr };
    }
    return tmp3;
  });
  if (current) {
    if (current.entries.length === mapped.length) {
      if (mapped.every((item, index) => item === current.entries[index])) {
        return current.items;
      }
    }
  }
  const mapped1 = mapped.map((item) => item.item);
  ref.current = { entries: mapped, items: mapped1 };
  return mapped1;
};
