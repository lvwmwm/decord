// Module ID: 1507
// Function ID: 1508
// Name: useLatestCallback
// Dependencies: [19]

// Module 1507 (useLatestCallback)
import react from "react" /* 19 */;

if (typeof document !== "undefined") {
  let useEffect = react.useLayoutEffect;
} else {
  const _navigator = navigator;
  if (typeof navigator !== "undefined") {
    const _navigator2 = navigator;
  }
  useEffect = react.useEffect;
}

export default function useLatestCallback(set) {
  let closure_0 = set;
  let closure_1 = react.useRef(set);
  let current = react.useRef(function latestCallback() {
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
  useEffect(() => {
    ref.current = current;
  });
  return current;
};
