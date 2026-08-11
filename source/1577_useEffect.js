// Module ID: 1577
// Function ID: 1578
// Name: useEffect
// Dependencies: [19]

// Module 1577 (useEffect)
import importAllResult from "noop";

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
