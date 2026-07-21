// Module ID: 6676
// Function ID: 51381
// Name: useStableMemo
// Dependencies: []
// Exports: default

// Module 6676 (useStableMemo)
const useRef = require(dependencyMap[0]).useRef;
let closure_3 = [];

export default function useStableMemo(arg0, items) {
  const tmp = useRef();
  const tmp2 = useRef(closure_3);
  if (tmp2.current === closure_3) {
    tmp.current = arg0();
    tmp2.current = items;
  } else if (!importDefault(dependencyMap[1])(items, tmp2.current)) {
    tmp.current = arg0();
    tmp2.current = items;
  }
  return tmp.current;
};
