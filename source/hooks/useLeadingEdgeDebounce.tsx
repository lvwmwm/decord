// Module ID: 10604
// Function ID: 82735
// Name: useLeadingEdgeDebounce
// Dependencies: []
// Exports: useLeadingEdgeDebounce

// Module 10604 (useLeadingEdgeDebounce)
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importAll(dependencyMap[1]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("hooks/useLeadingEdgeDebounce.tsx");

export const useLeadingEdgeDebounce = (arg0, arg1) => {
  const callback = arg0;
  const React = arg1;
  let closure_2 = React.useRef(true);
  const tmp = callback(React.useState(arg0), 2);
  let closure_3 = tmp[1];
  const items = [arg0, arg1];
  const effect = React.useEffect(() => {
    const timeout = setTimeout(() => {
      callback(closure_0);
      closure_2.current = true;
    }, arg1);
    if (ref.current) {
      callback(timeout);
    }
    ref.current = false;
    return () => {
      clearTimeout(closure_0);
    };
  }, items);
  return tmp[0];
};
