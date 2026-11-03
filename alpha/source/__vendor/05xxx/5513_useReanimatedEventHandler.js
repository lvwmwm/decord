// Module ID: 5513
// Function ID: 5514
// Name: useReanimatedEventHandler
// Dependencies: [19, 5469, 5512]
// Exports: useReanimatedEventHandler

// Module 5513 (useReanimatedEventHandler)
import reanimatedWrapper from "reanimatedWrapper" /* 5469 */;
import react from "react" /* 19 */;

const require = globalThis.__r;
let _require, dependencyMap;

let c2;
let c3;
let closure_4;
let tmp3;
let tmp5;
let tmp6;
({ useEffect: c2, useMemo: c3, useRef: closure_4 } = react);
let closure_5 = ["onGestureHandlerReanimatedEvent", "onGestureHandlerReanimatedStateChange", "onGestureHandlerReanimatedTouchEvent"];
let items = [{ code: "(function pnpm_useReanimatedEventHandlerTs1(){})" }];
[tmp3] = items;
function pnpm_useReanimatedEventHandlerTs1() {

}
pnpm_useReanimatedEventHandlerTs1.__workletHash = 2246818651254;
pnpm_useReanimatedEventHandlerTs1.__initData = tmp3;
let Reanimated = reanimatedWrapper.Reanimated;
let mutable;
if (Reanimated != null) {
  mutable = Reanimated.makeMutable({});
}
let items1 = [{ code: "(function deleteHandlerEventEntry_Pnpm_useReanimatedEventHandlerTs2(handlerTag){let[lastUpdateEventMap]=this.__closure;delete lastUpdateEventMap.value[handlerTag];})" }, mutable];
let c0;
[tmp5, tmp6] = items1;
function deleteHandlerEventEntry(arg0) {
  delete c0.value[arg0];
}
let items2 = [tmp6];
deleteHandlerEventEntry.__closure = items2;
deleteHandlerEventEntry.__workletHash = 3213459313334;
deleteHandlerEventEntry.__initData = tmp5;
let closure_9 = { code: "(function pnpm_useReanimatedEventHandlerTs3(event){let[lastUpdateEventMap,eventHandler,handlerTag,workletizedHandlers,changeEventCalculator,fillInDefaultValues]=this.__closure;let context=lastUpdateEventMap.value[event.handlerTag];if(context===undefined){context={lastUpdateEvent:undefined};lastUpdateEventMap.value[event.handlerTag]=context;}eventHandler(handlerTag,event,workletizedHandlers,changeEventCalculator,context,false,fillInDefaultValues);})" };

export function useReanimatedEventHandler(current, memoizedGestureCallbacks, handler, changeEventCalculator, fillInDefaultValues) {
  let tmp10;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  _require = current;
  dependencyMap = memoizedGestureCallbacks;
  const items = [memoizedGestureCallbacks];
  const items1 = [closure_9, mutable, , , , , ];
  let tmp = closure_3(() => {
    let obj;
    const Reanimated = reanimatedWrapper.Reanimated;
    let isWorkletFunctionResult;
    if (Reanimated != null) {
      isWorkletFunctionResult = Reanimated.isWorkletFunction(memoizedGestureCallbacks.onUpdate);
    }
    if (isWorkletFunctionResult) {
      obj = tmp3;
    } else {
      obj = { onUpdate: pnpm_useReanimatedEventHandlerTs1 };
      const merged = Object.assign(tmp3);
    }
    return obj;
  }, items);
  const tmp3 = dependencyMap;
  items1[2] = require("eventHandler").eventHandler;
  items1[3] = current;
  items1[4] = tmp;
  items1[5] = changeEventCalculator;
  items1[6] = fillInDefaultValues;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10] = items1;
  function pnpm_useReanimatedEventHandlerTs3(handlerTag) {
    let tmp = _undefined.value[handlerTag.handlerTag];
    if (undefined === tmp) {
      const obj = { lastUpdateEvent: "Array" };
      iter.value[handlerTag.handlerTag] = obj;
      tmp = obj;
    }
    _undefined2(c2, handlerTag, c3, c4, tmp, false, c5);
  }
  const items2 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10];
  pnpm_useReanimatedEventHandlerTs3.__closure = items2;
  pnpm_useReanimatedEventHandlerTs3.__workletHash = 16261276333898;
  pnpm_useReanimatedEventHandlerTs3.__initData = tmp4;
  const tmp11 = closure_4(current);
  let closure_2 = tmp11;
  const items3 = [current];
  current = tmp11.current;
  closure_2(() => {
    closure_2.current = current;
    return () => {
      const Reanimated = closure_0(memoizedGestureCallbacks[1]).Reanimated;
      if (Reanimated != null) {
        const runOnUI = Reanimated.runOnUI;
        if (runOnUI != null) {
          runOnUI(deleteHandlerEventEntry)(closure_1_0);
        }
      }
    };
  }, items3);
  let Reanimated = require("reanimatedWrapper").Reanimated;
  let event;
  if (Reanimated != null) {
    let tmp14 = current !== current;
    const useEvent = Reanimated.useEvent;
    const tmp15 = closure_5;
    if (!tmp14) {
      let doDependenciesDiffer;
      if (handler != null) {
        doDependenciesDiffer = handler.doDependenciesDiffer;
      }
      tmp14 = doDependenciesDiffer;
    }
    event = useEvent(pnpm_useReanimatedEventHandlerTs3, tmp15, tmp14);
  }
  return event;
}
