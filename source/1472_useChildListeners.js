// Module ID: 1472
// Function ID: 17122
// Name: useChildListeners
// Dependencies: []
// Exports: default

// Module 1472 (useChildListeners)
let closure_0 = importAll(dependencyMap[0]);

export default function useChildListeners() {
  const current = React.useRef({ action: [], focus: [] }).current;
  const React = current;
  const items = [current];
  return {
    listeners: current,
    addListener: React.useCallback((arg0, arg1) => {
      const current = arg0;
      let arr = current[arg0];
      arr = arr.push(arg1);
      let closure_2 = false;
      return () => {
        const index = arg0[closure_0].indexOf(arg1);
        let tmp2 = !closure_2;
        if (!closure_2) {
          tmp2 = index > -1;
        }
        if (tmp2) {
          closure_2 = true;
          arg0[closure_0].splice(index, 1);
          const arr2 = arg0[closure_0];
        }
      };
    }, items)
  };
};
