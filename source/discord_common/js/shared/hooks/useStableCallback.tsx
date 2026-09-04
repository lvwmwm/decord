// Module ID: 6905
// Function ID: 6906
// Name: useStableCallback
// Dependencies: [19, 2]
// Exports: default

// Module 6905 (useStableCallback)
import closure_0 from "noop" /* 19 */;

const result = require("set").fileFinishedImporting("../discord_common/js/shared/hooks/useStableCallback.tsx");

export default function useStableCallback(first) {
  const React = first;
  closure_1 = React.useRef(first);
  const insertionEffect = React.useInsertionEffect(() => {
    closure_1.current = closure_0;
  });
  return React.useCallback(() => {
    const items = [...HermesBuiltin.copyRestArgs()];
    return ref.current.apply(items);
  }, []);
};
