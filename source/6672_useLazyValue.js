// Module ID: 6672
// Function ID: 51336
// Name: useLazyValue
// Dependencies: []
// Exports: default

// Module 6672 (useLazyValue)
const useRef = require(dependencyMap[0]).useRef;
let closure_1 = {};

export default function useLazyValue(arg0) {
  const tmp = useRef(closure_1);
  if (tmp.current === closure_1) {
    tmp.current = arg0();
  }
  return tmp.current;
};
