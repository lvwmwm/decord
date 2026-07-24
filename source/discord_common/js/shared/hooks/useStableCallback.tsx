// Module ID: 8436
// Function ID: 67021
// Name: useStableCallback
// Dependencies: [31, 2]
// Exports: default

// Module 8436 (useStableCallback)
import result from "result";

const result = require("set").fileFinishedImporting("../discord_common/js/shared/hooks/useStableCallback.tsx");

export default function useStableCallback(arg0) {
  const React = arg0;
  let closure_1 = React.useRef(arg0);
  const insertionEffect = React.useInsertionEffect(() => {
    closure_1.current = result;
  });
  return React.useCallback((arg0) => {
    const items = [...HermesBuiltin.copyRestArgs()];
    return ref.current.apply(items);
  }, []);
};
