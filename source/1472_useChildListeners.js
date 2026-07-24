// Module ID: 1472
// Function ID: 17124
// Name: useChildListeners
// Dependencies: [31]
// Exports: default

// Module 1472 (useChildListeners)
import result from "result";


export default function useChildListeners() {
  current = current.useRef({ action: [], focus: [] }).current;
  const items = [current];
  return {
    listeners: current,
    addListener: current.useCallback((arg0, arg1) => {
      const table = arg0;
      let closure_1 = arg1;
      let arr = table[arg0];
      arr = arr.push(arg1);
      let c2 = false;
      return () => {
        const index = dependencyMap[dependencyMap].indexOf(closure_1);
        let tmp2 = !c2;
        if (!c2) {
          tmp2 = index > -1;
        }
        if (tmp2) {
          c2 = true;
          dependencyMap[dependencyMap].splice(index, 1);
          const arr2 = dependencyMap[dependencyMap];
        }
      };
    }, items)
  };
};
