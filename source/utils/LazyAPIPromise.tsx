// Module ID: 8353
// Function ID: 66549
// Name: useLazyAPIPromise
// Dependencies: []
// Exports: default

// Module 8353 (useLazyAPIPromise)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importAll(dependencyMap[2]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("utils/LazyAPIPromise.tsx");

export default function useLazyAPIPromise(arg0, arg1) {
  arg1 = arg0;
  const dependencyMap = arg1;
  function _execFn() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = callback(tmp);
    const _execFn = obj;
    return obj(...arguments);
  }
  const tmp = callback(_execFn.useState(false), 2);
  let closure_2 = tmp[1];
  const tmp2 = callback(_execFn.useState(null), 2);
  const callback = tmp2[1];
  const items = [
    function execFn() {
      return _execFn(...arguments);
    },
    { loading: tmp[0], error: tmp2[0] }
  ];
  return items;
};
