// Module ID: 7187
// Function ID: 57876
// Name: useTimeout
// Dependencies: []
// Exports: default

// Module 7187 (useTimeout)
const _module = require(dependencyMap[0]);
({ useEffect: closure_0, useRef: closure_1 } = _module);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("hooks/useTimeout.tsx");

export default function useTimeout(arg0, arg1) {
  const tmp = arg1(arg0);
  const items = [arg0];
  arg0(() => {
    tmp.current = arg0;
  }, items);
  const items1 = [arg1, tmp];
  arg0(() => {
    if (null !== arg1) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => ref.current(), arg1);
      return () => clearTimeout(closure_0);
    }
  }, items1);
};
