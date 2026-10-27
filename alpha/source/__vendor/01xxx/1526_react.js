// Module ID: 1526
// Function ID: 1527
// Name: react
// Dependencies: [19]
// Exports: useChildListeners

// Module 1526 (react)
import react from "react" /* 19 */;


export const useChildListeners = function useChildListeners() {
  let current = react.useRef({ action: [], focus: [] }).current;
  const items = [current];
  const obj = {
    listeners: current,
    addListener: react.useCallback((arg0, arg1) => {
      let closure_0;
      current = arg0;
      let closure_1 = arg1;
      let arr = current[arg0];
      let arr2 = arr.push(arg1);
      let c2 = false;
      return () => {
        const arr = current[closure_0];
        const index = arr.indexOf(closure_1);
        let tmp4 = !c2;
        const tmp = current;
        const tmp2 = closure_0;
        if (tmp4) {
          tmp4 = index > -1;
        }
        if (tmp4) {
          c2 = true;
          const arr2 = tmp[tmp2];
          arr2.splice(index, 1);
        }
      };
    }, items)
  };
  return obj;
};
