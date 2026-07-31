// Module ID: 8336
// Function ID: 8337
// Name: usePrevValue
// Dependencies: [19, 2]
// Exports: default

// Module 8336 (usePrevValue)
import { useRef } from "noop";

const result = require("set").fileFinishedImporting("hooks/usePrevValue.tsx");

export default function usePrevValue(current) {
  const tmp = useRef(null);
  const tmp2 = useRef(null);
  if (!Object.is(current, tmp2.current)) {
    tmp.current = tmp2.current;
    tmp2.current = current;
  }
  return tmp.current;
};
