// Module ID: 1508
// Function ID: 1509
// Dependencies: [19]
// Exports: useChildListeners

// Module 1508
import noop from "module_19" /* 19 */;


export const useChildListeners = function useChildListeners() {
  const current = noop.useRef({ action: [], focus: [] }).current;
  const items = [current];
  return {
    listeners: current,
    addListener: noop.useCallback((arg0, arg1) => {
      closure_0 = arg0;
      closure_1 = arg1;
      closure_0[arg0].push(arg1);
      c2 = false;
      return () => {
        const index = current[closure_0].indexOf(closure_1);
        let tmp4 = !c2;
        if (!c2) {
          tmp4 = index > -1;
        }
        if (tmp4) {
          c2 = true;
          current[tmp2].splice(index, 1);
        }
      };
    }, items)
  };
};
