// Module ID: 6678
// Function ID: 51404
// Name: useLazyValue
// Dependencies: []
// Exports: default

// Module 6678 (useLazyValue)
const useRef = require(dependencyMap[0]).useRef;
let closure_1 = {};

export default function useLazyValue(arg0) {
  const tmp = useRef(closure_1);
  if (tmp.current === closure_1) {
    tmp.current = arg0();
  }
  return tmp.current;
};
