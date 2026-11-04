// Module ID: 7100
// Function ID: 7101
// Name: useRefValue
// Dependencies: [2]
// Exports: default

// Module 7100 (useRefValue)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("hooks/useRefValue.tsx");

export default function useRefValue(current) {
  return current.current;
};
