// Module ID: 15964
// Function ID: 15965
// Name: useInitRef
// Dependencies: [19, 2]
// Exports: default

// Module 15964 (useInitRef)
import set from "set" /* 2 */;
import noop from "noop" /* 19 */;

const useRef = noop.useRef;
const result = set.fileFinishedImporting("../discord_common/js/shared/hooks/useInitRef.tsx");

export default function useInitRef(arg0) {
  const tmp = useRef(false);
  const tmp2 = useRef(null);
  if (!tmp.current) {
    tmp.current = true;
    tmp2.current = arg0();
  }
  return tmp2;
};
