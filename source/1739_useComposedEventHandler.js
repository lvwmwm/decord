// Module ID: 1739
// Function ID: 19492
// Name: useComposedEventHandler
// Dependencies: []

// Module 1739 (useComposedEventHandler)
let closure_2 = { code: "function pnpm_useComposedEventHandlerTs1(event){const{workletsMap}=this.__closure;if(workletsMap[event.eventName]){workletsMap[event.eventName].forEach(function(worklet){return worklet(event);});}}" };
arg5.useComposedEventHandler = function useComposedEventHandler(arr) {
  let obj = {};
  const arg1 = obj;
  const set = new Set();
  const arg6 = set;
  obj = {};
  let closure_2 = obj;
  const found = arr.filter((arg0) => null !== arg0);
  const item = found.forEach((workletEventHandler) => {
    if (workletEventHandler.workletEventHandler instanceof obj(set[0]).WorkletEventHandler) {
      const eventNames = workletEventHandler.eventNames;
      const item = eventNames.forEach((arg0) => {
        set.add(arg0);
        if (closure_2[arg0]) {
          tmp2[arg0].push(workletEventHandler.worklet);
          const arr2 = tmp2[arg0];
        } else {
          const items = [workletEventHandler.worklet];
          tmp2[arg0] = items;
        }
        workletEventHandler[arg0 + "" + closure_2[arg0].length] = workletEventHandler.worklet;
      });
    }
  });
  const obj3 = arg1(arg6[1]);
  /* worklet (recovered source) */ function pnpm_useComposedEventHandlerTs1(event){const{workletsMap}=this.__closure;if(workletsMap[event.eventName]){workletsMap[event.eventName].forEach(function(worklet){return worklet(event);});}}
  pnpm_useComposedEventHandlerTs1.__closure = { workletsMap: obj };
  pnpm_useComposedEventHandlerTs1.__workletHash = 14960316830945;
  pnpm_useComposedEventHandlerTs1.__initData = closure_2;
  return arg1(arg6[2]).useEvent(pnpm_useComposedEventHandlerTs1, Array.from(set), obj3.useHandler(obj).doDependenciesDiffer);
};
