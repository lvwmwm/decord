// Module ID: 8510
// Function ID: 67762
// Name: usePrevValue
// Dependencies: [31, 2]
// Exports: default

// Module 8510 (usePrevValue)
import { useRef } from "result";

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
