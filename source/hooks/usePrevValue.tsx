// Module ID: 8460
// Function ID: 67497
// Name: usePrevValue
// Dependencies: []
// Exports: default

// Module 8460 (usePrevValue)
const useRef = require(dependencyMap[0]).useRef;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("hooks/usePrevValue.tsx");

export default function usePrevValue(current) {
  const tmp = useRef(null);
  const tmp2 = useRef(null);
  if (!Object.is(current, tmp2.current)) {
    tmp.current = tmp2.current;
    tmp2.current = current;
  }
  return tmp.current;
};
