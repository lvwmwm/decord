// Module ID: 6384
// Function ID: 6385
// Name: react
// Dependencies: [19, 2]
// Exports: default

// Module 6384 (react)
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/hooks/useStableCallback.tsx");

export default function useStableCallback(set) {
  let closure_0 = set;
  let closure_1 = react.useRef(set);
  const insertionEffect = react.useInsertionEffect(() => {
    ref.current = current;
  });
  return react.useCallback(() => {
    const items = [...HermesBuiltin.copyRestArgs()];
    return ref.current.apply(items);
  }, []);
};
