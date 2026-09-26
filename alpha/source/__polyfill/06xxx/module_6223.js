// Module ID: 6223
// Function ID: 6224
// Dependencies: [19, 1638]
// Exports: useReactiveSharedValue

// Module 6223
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

({ useEffect: c2, useRef: c3 } = noop);

export const useReactiveSharedValue = (current) => {
  const tmp = closure_3(null);
  const tmp2 = closure_3(null);
  _require = tmp2;
  let tmp3 = current;
  if (current) {
    tmp3 = typeof current === "object";
  }
  if (tmp3) {
    tmp3 = "value" in current;
  }
  if (!tmp3) {
    if (null === tmp2.current) {
      tmp.current = current;
      if (typeof current === "object") {
        const obj2 = {};
        const merged = Object.assign(current);
        let mutable = require("cancelAnimation").makeMutable(obj2);
        let obj = require("cancelAnimation");
      } else {
        mutable = require("cancelAnimation").makeMutable(current);
        const obj3 = require("cancelAnimation");
      }
      tmp2.current = mutable;
    } else if (tmp.current !== current) {
      tmp2.current.value = current;
    }
  }
  closure_2(() => () => {
    if (ref.current) {
      ref(dependencyMap[1]).cancelAnimation(tmp.current);
      const obj = ref(dependencyMap[1]);
    }
  }, []);
  current = tmp2.current;
  return current;
};
