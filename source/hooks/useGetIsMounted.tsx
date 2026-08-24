// Module ID: 8453
// Function ID: 8454
// Name: useGetIsMounted
// Dependencies: [19, 2]
// Exports: default

// Module 8453 (useGetIsMounted)
import closure_0 from "noop" /* 19 */;

const result = require("set").fileFinishedImporting("hooks/useGetIsMounted.tsx");

export default function useGetIsMounted() {
  React = React.useRef(true);
  const effect = React.useEffect(() => () => {
    closure_0.current = false;
  }, []);
  return React.useCallback(() => ref.current, []);
};
