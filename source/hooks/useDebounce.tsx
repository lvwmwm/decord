// Module ID: 12256
// Function ID: 94004
// Name: useDebounce
// Dependencies: []
// Exports: default

// Module 12256 (useDebounce)
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importAll(dependencyMap[1]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("hooks/useDebounce.tsx");

export default function useDebounce(arg0, arg1) {
  const callback = arg0;
  const React = arg1;
  const tmp = callback(React.useState(arg0), 2);
  let closure_2 = tmp[1];
  const items = [arg0, arg1];
  const effect = React.useEffect(() => {
    const timeout = setTimeout(() => {
      callback(closure_0);
    }, arg1);
    return () => {
      clearTimeout(closure_0);
    };
  }, items);
  return tmp[0];
};
