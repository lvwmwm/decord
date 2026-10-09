// Module ID: 8652
// Function ID: 8653
// Name: react
// Dependencies: [19, 2]
// Exports: default

// Module 8652 (react)
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const useRef = react.useRef;
const result = size.fileFinishedImporting("../discord_common/js/shared/hooks/usePrevValue.tsx");

export default function usePrevValue(current) {
  const tmp = useRef(null);
  const tmp2 = useRef(null);
  if (!Object.is(current, tmp2.current)) {
    tmp.current = tmp2.current;
    tmp2.current = current;
  }
  return tmp.current;
};
