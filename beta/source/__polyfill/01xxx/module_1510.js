// Module ID: 1510
// Function ID: 1511
// Dependencies: [19]

// Module 1510
import noop from "module_19" /* 19 */;

if (typeof document !== "undefined") {
  let useEffect = noop.useLayoutEffect;
} else {
  const _navigator = navigator;
  if (typeof navigator !== "undefined") {
    const _navigator2 = navigator;
  }
  useEffect = noop.useEffect;
}

export default function useLatestCallback(cResult) {
  let current = cResult;
  noop.useRef(cResult);
  useEffect(() => {
    closure_1.current = current;
  });
  return noop.useRef(function latestCallback() {
    let length;
    const items = [];
    let num = 0;
    if (0 < arguments.length) {
      do {
        items[num] = arguments[num];
        num = num + 1;
        length = arguments.length;
      } while (num < length);
    }
    current = ref.current;
    return current.apply(this, items);
  }).current;
};
