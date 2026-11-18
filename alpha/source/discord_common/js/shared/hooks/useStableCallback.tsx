// Module ID: 7304
// Function ID: 7305
// Name: react
// Dependencies: [19, 2]
// Exports: default

// Module 7304 (react)
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/hooks/useStableCallback.tsx");

export default function useStableCallback(map) {
  let closure_0 = map;
  let closure_1 = react.useRef(map);
  const insertionEffect = react.useInsertionEffect(() => {
    ref.current = current;
  });
  return react.useCallback(() => {
    const items = [...HermesBuiltin.copyRestArgs()];
    return ref.current.apply(items);
  }, []);
};
