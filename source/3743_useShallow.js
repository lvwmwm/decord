// Module ID: 3743
// Function ID: 28576
// Name: useShallow
// Dependencies: []
// Exports: useShallow

// Module 3743 (useShallow)
let closure_2 = require(dependencyMap[0]);

export const useShallow = function useShallow(arg0) {
  const require = arg0;
  let closure_1 = React.useRef(undefined);
  return (arg0) => {
    let current = arg0(arg0);
    if (obj.shallow(ref.current, current)) {
      current = tmp.current;
    } else {
      tmp.current = current;
    }
    return current;
  };
};
