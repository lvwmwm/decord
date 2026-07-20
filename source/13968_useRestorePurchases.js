// Module ID: 13968
// Function ID: 106160
// Name: useRestorePurchases
// Dependencies: []
// Exports: default

// Module 13968 (useRestorePurchases)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importAll(dependencyMap[2]);
let importDefaultResult = importDefault(dependencyMap[3]);
importDefaultResult = new importDefaultResult("useRestorePurchases");
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/billing/native/subscription/useRestorePurchases.tsx");

export default function useRestorePurchases() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let flag = obj.forceRestore;
  if (flag === undefined) {
    flag = true;
  }
  const importDefault = flag;
  let closure_1;
  let closure_2;
  function _restore(closure_4, arg1) {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = callback(tmp);
    const _restore = obj;
    return obj(...arguments);
  }
  closure_1 = React.useRef(false);
  const tmp = _restore(React.useState(false), 2);
  closure_2 = tmp[1];
  const items = [flag];
  const effect = React.useEffect(() => {
    let tmp = flag;
    if (!flag) {
      tmp = !ref.current;
    }
    if (tmp) {
      function restore() {
        return callback(...arguments);
      }();
    }
  }, items);
  return tmp[0];
};
