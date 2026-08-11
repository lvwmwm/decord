// Module ID: 15269
// Function ID: 15270
// Name: useInitRef
// Dependencies: [19, 2]
// Exports: default

// Module 15269 (useInitRef)
import { useRef } from "noop";

const result = require("set").fileFinishedImporting("../discord_common/js/shared/hooks/useInitRef.tsx");

export default function useInitRef(arg0) {
  const tmp = useRef(false);
  const tmp2 = useRef(null);
  if (!tmp.current) {
    tmp.current = true;
    tmp2.current = arg0();
  }
  return tmp2;
};
