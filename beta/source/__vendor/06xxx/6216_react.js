// Module ID: 6216
// Function ID: 6217
// Name: react
// Dependencies: [19, 1644]
// Exports: useReactiveSharedValue

// Module 6216 (react)
import react from "react" /* 19 */;

const require = globalThis.__r;
let _require;

let c2;
let c3;
({ useEffect: c2, useRef: c3 } = react);

export const useReactiveSharedValue = (current) => {
  let closure_0;
  const tmp = closure_3(null);
  const tmp2 = closure_3(null);
  _require = tmp2;
  const tmp3 = current && typeof current === "object" && "value" in current;
  if (!tmp3) {
    if (null === tmp2.current) {
      let mutable;
      tmp.current = current;
      if (typeof current === "object") {
        let obj = {};
        const makeMutable = require("module_1644").makeMutable;
        require("module_1644");
        const merged = Object.assign(current);
        mutable = makeMutable(obj);
      } else {
        const obj2 = require("module_1644");
        mutable = obj2.makeMutable(current);
      }
      tmp2.current = mutable;
    } else if (tmp.current !== current) {
      tmp2.current.value = current;
    }
  }
  closure_2(() => {
    let ref;
    return () => {
      if (ref.current) {
        const obj = ref(dependencyMap[1]);
        obj.cancelAnimation(tmp.current);
      }
    };
  }, []);
  current = tmp2.current;
  return current;
};
