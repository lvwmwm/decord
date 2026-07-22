// Module ID: 5304
// Function ID: 45791
// Name: useReactiveSharedValue
// Dependencies: []
// Exports: useReactiveSharedValue

// Module 5304 (useReactiveSharedValue)
const _module = require(dependencyMap[0]);
({ useEffect: closure_2, useRef: closure_3 } = _module);

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
        let mutable = require(dependencyMap[1]).makeMutable(Object.assign({}, tmp));
        const obj2 = require(dependencyMap[1]);
      } else {
        mutable = require(dependencyMap[1]).makeMutable(tmp);
        const obj = require(dependencyMap[1]);
      }
      tmp3.current = mutable;
    } else if (tmp2.current !== tmp) {
      tmp3.current.value = tmp;
    }
  }
  callback(() => () => {
    if (ref.current) {
      ref(closure_1[1]).cancelAnimation(ref.current);
      const obj = ref(closure_1[1]);
    }
  }, []);
  const current = tmp3.current;
  if (null != current) {
    tmp = current;
  }
  return tmp;
};
