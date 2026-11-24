// Module ID: 1578
// Function ID: 1579
// Name: react
// Dependencies: [19]

// Module 1578 (react)
import react from "react" /* 19 */;

let useEffect;
if (typeof document !== "undefined") {
  useEffect = react.useLayoutEffect;
} else {
  const _navigator = navigator;
  if (typeof navigator !== "undefined") {
    const _navigator2 = navigator;
  }
  useEffect = react.useEffect;
}

export const useClientLayoutEffect = useEffect;
