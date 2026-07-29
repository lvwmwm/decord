// Module ID: 7981
// Function ID: 7982
// Name: useGetIsMounted
// Dependencies: [19, 2]
// Exports: default

// Module 7981 (useGetIsMounted)
import noop from "noop";

const result = require("set").fileFinishedImporting("hooks/useGetIsMounted.tsx");

export default function useGetIsMounted() {
  React = React.useRef(true);
  const effect = React.useEffect(() => () => {
    noop.current = false;
  }, []);
  return React.useCallback(() => ref.current, []);
};
