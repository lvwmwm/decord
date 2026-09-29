// Module ID: 7860
// Function ID: 7861
// Name: useGetIsMounted
// Dependencies: [19, 2]
// Exports: default

// Module 7860 (useGetIsMounted)
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
