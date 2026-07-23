// Module ID: 8392
// Function ID: 66793
// Name: useStableCallback
// Dependencies: [31, 2]
// Exports: default

// Module 8392 (useStableCallback)
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
