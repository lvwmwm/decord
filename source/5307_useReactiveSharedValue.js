// Module ID: 5307
// Function ID: 45815
// Name: useReactiveSharedValue
// Dependencies: [31, 1582]
// Exports: useReactiveSharedValue

// Module 5307 (useReactiveSharedValue)
import result from "result";

let closure_2;
let closure_3;
({ useEffect: closure_2, useRef: closure_3 } = result);

export const useReactiveSharedValue = function useReactiveSharedValue(INITIAL_CONTAINER_HEIGHT) {
  let tmp = INITIAL_CONTAINER_HEIGHT;
  const tmp2 = callback2(null);
  const tmp3 = callback2(null);
  const require = tmp3;
  let tmp4 = INITIAL_CONTAINER_HEIGHT;
  if (INITIAL_CONTAINER_HEIGHT) {
    tmp4 = "object" === typeof tmp;
  }
  if (tmp4) {
    tmp4 = "value" in tmp;
  }
  if (!tmp4) {
    if (null === tmp3.current) {
      tmp2.current = tmp;
      if ("object" === typeof tmp) {
        const _Object = Object;
        let mutable = require(1582) /* cancelAnimation */.makeMutable(Object.assign({}, tmp));
        const obj2 = require(1582) /* cancelAnimation */;
      } else {
        mutable = require(1582) /* cancelAnimation */.makeMutable(tmp);
        let obj = require(1582) /* cancelAnimation */;
      }
      tmp3.current = mutable;
    } else if (tmp2.current !== tmp) {
      tmp3.current.value = tmp;
    }
  }
  callback(() => () => {
    if (outer1_0.current) {
      callback(outer2_1[1]).cancelAnimation(outer1_0.current);
      const obj = callback(outer2_1[1]);
    }
  }, []);
  const current = tmp3.current;
  if (null != current) {
    tmp = current;
  }
  return tmp;
};
