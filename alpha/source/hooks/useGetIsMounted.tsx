// Module ID: 8814
// Function ID: 8815
// Name: react
// Dependencies: [19, 2]
// Exports: default

// Module 8814 (react)
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("hooks/useGetIsMounted.tsx");

export default function useGetIsMounted() {
  let closure_0 = react.useRef(true);
  const effect = react.useEffect(() => () => {
    ref.current = false;
  }, []);
  return react.useCallback(() => ref.current, []);
};
