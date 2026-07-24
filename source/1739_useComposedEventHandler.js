// Module ID: 1739
// Function ID: 19494
// Name: useComposedEventHandler
// Dependencies: [1687, 1727, 1729]

// Module 1739 (useComposedEventHandler)
const require = arg1;
const dependencyMap = arg6;
let closure_2 = { code: "function pnpm_useComposedEventHandlerTs1(event){const{workletsMap}=this.__closure;if(workletsMap[event.eventName]){workletsMap[event.eventName].forEach(function(worklet){return worklet(event);});}}" };
arg5.useComposedEventHandler = function useComposedEventHandler(arr) {
  let obj = {};
  const set = new Set();
  obj = {};
  const found = arr.filter((arg0) => null !== arg0);
  let item = found.forEach((workletEventHandler) => {
    workletEventHandler = workletEventHandler.workletEventHandler;
    if (workletEventHandler instanceof obj(set[0]).WorkletEventHandler) {
      const eventNames = workletEventHandler.eventNames;
      const item = eventNames.forEach((arg0) => {
        outer1_1.add(arg0);
        if (outer1_2[arg0]) {
          tmp2[arg0].push(workletEventHandler.worklet);
          const arr2 = tmp2[arg0];
        } else {
          const items = [workletEventHandler.worklet];
          tmp2[arg0] = items;
        }
        workletEventHandler[arg0 + "" + outer1_2[arg0].length] = workletEventHandler.worklet;
      });
    }
  });
  const obj3 = obj(set[1]);
  /* worklet (recovered source) */ function pnpm_useComposedEventHandlerTs1(event){const{workletsMap}=this.__closure;if(workletsMap[event.eventName]){workletsMap[event.eventName].forEach(function(worklet){return worklet(event);});}}
  pnpm_useComposedEventHandlerTs1.__closure = { workletsMap: obj };
  pnpm_useComposedEventHandlerTs1.__workletHash = 14960316830945;
  pnpm_useComposedEventHandlerTs1.__initData = obj;
  return obj(set[2]).useEvent(pnpm_useComposedEventHandlerTs1, Array.from(set), obj3.useHandler(obj).doDependenciesDiffer);
};
