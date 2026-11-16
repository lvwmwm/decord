// Module ID: 1902
// Function ID: 1903
// Name: useComposedEventHandlerCommon
// Dependencies: [1863, 1897, 1899]
// Exports: useComposedEventHandlerBase

// Module 1902 (useComposedEventHandlerCommon)
let set, workletEventHandler;

let closure_2 = { code: "(function pnpm_useComposedEventHandlerCommonTs1(event){let[workletsMap]=this.__closure;if(workletsMap[event.eventName]){workletsMap[event.eventName].forEach(function(worklet){return worklet(event);});}})" };

export function useComposedEventHandlerBase(arr, items26) {
  let tmp3;
  let tmp4;
  const obj = {};
  set = new Set();
  const obj2 = {};
  const found = arr.filter((item) => null !== item);
  let item = found.forEach((workletEventHandler) => {
    workletEventHandler = workletEventHandler.workletEventHandler;
    if (workletEventHandler instanceof obj(set[0]).WorkletEventHandler) {
      const eventNames = workletEventHandler.eventNames;
      const item = eventNames.forEach((item) => {
        let tmp3;
        set.add(item);
        if (obj2[item]) {
          const arr2 = obj2[item];
          arr2.push(workletEventHandler.worklet);
          tmp3 = workletEventHandler;
        } else {
          tmp3 = workletEventHandler;
          const items = [workletEventHandler.worklet];
          obj2[item] = items;
        }
        obj[item + "" + obj2[item].length] = tmp3.worklet;
      });
    }
  });
  const obj3 = obj(set[1]);
  const doDependenciesDiffer = obj3.useHandler(obj, items26).doDependenciesDiffer;
  let items = [obj2, obj2];
  let c0;
  [tmp3, tmp4] = items;
  function pnpm_useComposedEventHandlerCommonTs1(arg0) {
    let closure_0 = arg0;
    if (_undefined[arg0.eventName]) {
      const arr = tmp[arg0.eventName];
      const item = arr.forEach((fn) => fn(closure_0));
    }
  }
  const items1 = [tmp4];
  pnpm_useComposedEventHandlerCommonTs1.__closure = items1;
  pnpm_useComposedEventHandlerCommonTs1.__workletHash = 3763357161525;
  pnpm_useComposedEventHandlerCommonTs1.__initData = tmp3;
  const obj4 = obj(set[2]);
  return obj4.useEvent(pnpm_useComposedEventHandlerCommonTs1, Array.from(set), doDependenciesDiffer);
}
