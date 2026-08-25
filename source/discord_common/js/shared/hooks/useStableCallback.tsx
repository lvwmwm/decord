// Module ID: 8647
// Function ID: 8648
// Name: useStableCallback
// Dependencies: [19, 2]
// Exports: default

// Module 8647 (useStableCallback)
import closure_0 from "noop" /* 19 */;

const result = require("set").fileFinishedImporting("../discord_common/js/shared/hooks/useStableCallback.tsx");

export default function useStableCallback(stateFromStores) {
  const React = stateFromStores;
  closure_1 = React.useRef(stateFromStores);
  const insertionEffect = React.useInsertionEffect(() => {
    closure_1.current = closure_0;
  });
  return React.useCallback(() => {
    const items = [...HermesBuiltin.copyRestArgs()];
    return ref.current.apply(items);
  }, []);
};
