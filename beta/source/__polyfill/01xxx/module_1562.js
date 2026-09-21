// Module ID: 1562
// Function ID: 1563
// Dependencies: [19]

// Module 1562
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

export const useClientLayoutEffect = useEffect;
