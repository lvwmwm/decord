// Module ID: 1578
// Function ID: 1579
// Name: useEffect
// Dependencies: [19]

// Module 1578 (useEffect)
import importAllResult from "noop" /* 19 */;

if (typeof document !== "undefined") {
  let useEffect = importAllResult.useLayoutEffect;
} else {
  const _navigator = navigator;
  if (typeof navigator !== "undefined") {
    const _navigator2 = navigator;
  }
  useEffect = importAllResult.useEffect;
}

export const useClientLayoutEffect = useEffect;
