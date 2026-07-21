// Module ID: 8459
// Function ID: 67485
// Name: usePrevValue
// Dependencies: []
// Exports: default

// Module 8459 (usePrevValue)
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
