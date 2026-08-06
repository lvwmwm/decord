// Module ID: 1558
// Function ID: 1559
// Name: useEffect
// Dependencies: [19]

// Module 1558 (useEffect)
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
