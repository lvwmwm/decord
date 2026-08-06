// Module ID: 8415
// Function ID: 8416
// Name: useStableCallback
// Dependencies: [19, 2]
// Exports: default

// Module 8415 (useStableCallback)
import noop from "noop";

const result = require("set").fileFinishedImporting("../discord_common/js/shared/hooks/useStableCallback.tsx");

export default function useStableCallback(stateFromStores) {
  const React = stateFromStores;
  let closure_1 = React.useRef(stateFromStores);
  const insertionEffect = React.useInsertionEffect(() => {
    closure_1.current = noop;
  });
  return React.useCallback(() => {
    const items = [...HermesBuiltin.copyRestArgs()];
    return ref.current.apply(items);
  }, []);
};
