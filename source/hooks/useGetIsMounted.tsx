// Module ID: 7920
// Function ID: 63055
// Name: useGetIsMounted
// Dependencies: [31, 2]
// Exports: default

// Module 7920 (useGetIsMounted)
import result from "result";

const result = require("set").fileFinishedImporting("hooks/useGetIsMounted.tsx");

export default function useGetIsMounted() {
  React = React.useRef(true);
  const effect = React.useEffect(() => () => {
    outer1_0.current = false;
  }, []);
  return React.useCallback(() => ref.current, []);
};
