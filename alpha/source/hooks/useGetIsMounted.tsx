// Module ID: 7695
// Function ID: 7696
// Name: useGetIsMounted
// Dependencies: [19, 2]
// Exports: default

// Module 7695 (useGetIsMounted)
import noop from "module_19" /* 19 */;

const size = fn(2);
const result = size.fileFinishedImporting("hooks/useGetIsMounted.tsx");

export default function useGetIsMounted() {
  noop.useRef(true);
  const effect = noop.useEffect(() => () => {
    ref.current = false;
  }, []);
  return noop.useCallback(() => ref.current, []);
};
