// Module ID: 9094
// Function ID: 9095
// Name: usePrevValue
// Dependencies: [19, 2]
// Exports: default

// Module 9094 (usePrevValue)
import { useRef } from "noop";

const result = require("set").fileFinishedImporting("../discord_common/js/shared/hooks/usePrevValue.tsx");

export default function usePrevValue(current) {
  const tmp = useRef(null);
  const tmp2 = useRef(null);
  if (!Object.is(current, tmp2.current)) {
    tmp.current = tmp2.current;
    tmp2.current = current;
  }
  return tmp.current;
};
