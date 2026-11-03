// Module ID: 1728
// Function ID: 1729
// Name: setupSetTimeout
// Dependencies: [1726]
// Exports: setupSetTimeout

// Module 1728 (setupSetTimeout)
import setupTaskQueue from "setupTaskQueue" /* 1726 */;

let set;

let tmp2;
let tmp3;
let items = [{ code: "(function setupSetTimeout_Pnpm_setTimeoutTs1(){let[pushTask]=this.__closure;const pendingHandlers=new Set();let ID=0;const setTimeoutPolyfill=function(callback,delay=0,...args){const handlerId=ID++;const timeoutCallback=function(){if(!pendingHandlers.has(handlerId)){return;}callback(...args);pendingHandlers.delete(handlerId);};pendingHandlers.add(handlerId);pushTask(timeoutCallback,handlerId,delay);return handlerId;};const clearTimeoutPolyfill=function(timeoutHandle){pendingHandlers.delete(timeoutHandle);};globalThis.setTimeout=setTimeoutPolyfill;globalThis.clearTimeout=clearTimeoutPolyfill;})" }, setupTaskQueue.pushTask];
let c0;
[tmp2, tmp3] = items;
function setupSetTimeout() {
  set = new Set();
  let c1 = 0;
  globalThis.setTimeout = (arg0) => {
    let closure_0;
    set = arg0;
    let num = arg1;
    if (arg1 === undefined) {
      num = 0;
    }
    [...arguments].slice();
    let closure_1 = tmp + 1;
    let closure_2 = tmp;
    set.add(+closure_1);
    set(() => {
      const obj = set;
      const tmp2 = closure_2;
      if (set.has(closure_2)) {
        const items = [];
        HermesBuiltin.arraySpread(items, closure_1, 0);
        HermesBuiltin.apply(closure_0, items, undefined);
        obj.delete(tmp2);
      }
    }, tmp, num);
    return +closure_1;
  };
  globalThis.clearTimeout = (arg0) => {
    set.delete(arg0);
  };
}
const items1 = [tmp3];
setupSetTimeout.__closure = items1;
setupSetTimeout.__workletHash = 2503136938124;
setupSetTimeout.__initData = tmp2;

export { setupSetTimeout };
