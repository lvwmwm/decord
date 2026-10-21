// Module ID: 17379
// Function ID: 17380
// Name: react
// Dependencies: [19, 2]
// Exports: default

// Module 17379 (react)
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const useRef = react.useRef;
const result = size.fileFinishedImporting("../discord_common/js/shared/hooks/useInitRef.tsx");

export default function useInitRef(fn) {
  const tmp = useRef(false);
  const tmp2 = useRef(null);
  if (!tmp.current) {
    tmp.current = true;
    tmp2.current = fn();
  }
  return tmp2;
};
