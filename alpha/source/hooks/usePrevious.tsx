// Module ID: 5928
// Function ID: 5929
// Name: usePrevious
// Dependencies: [19, 2]
// Exports: default, useCurrentWhen, usePreviousWhen

// Module 5928 (usePrevious)
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let _window;
let map;
({ useRef: _window, useEffect: map } = react);
const result = size.fileFinishedImporting("hooks/usePrevious.tsx");

export default function usePrevious(arg0) {
  const _window = arg0;
  const tmp = React(null);
  const items = [arg0];
  tmp(() => {
    closure_1.current = current;
  }, items);
  return tmp.current;
};
export const usePreviousWhen = function usePreviousWhen(value) {
  value = value.value;
  const shouldUpdate = value.shouldUpdate;
  let tmp = React(null);
  let closure_2 = tmp;
  const items = [value, shouldUpdate];
  map(() => {
    const tmp = shouldUpdate;
    if (tmp) {
      closure_2.current = value;
    }
  }, items);
  return tmp.current;
};
export const useCurrentWhen = function useCurrentWhen(value) {
  let current = value.value;
  const shouldUpdate = value.shouldUpdate;
  let tmp = React(null);
  let closure_2 = tmp;
  const items = [current, shouldUpdate];
  map(() => {
    const tmp = shouldUpdate;
    if (tmp) {
      closure_2.current = current;
    }
  }, items);
  if (!shouldUpdate) {
    current = tmp.current;
  }
  return current;
};
