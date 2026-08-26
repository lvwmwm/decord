// Module ID: 5501
// Function ID: 5502
// Name: useRefValue
// Dependencies: [2]
// Exports: default

// Module 5501 (useRefValue)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("hooks/useRefValue.tsx");

export default function useRefValue(current) {
  return current.current;
};
