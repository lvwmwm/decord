// Module ID: 5544
// Function ID: 5545
// Name: useReanimatedEventHandler
// Dependencies: [19, 5545, 5496, 5543]
// Exports: useReanimatedEventHandler

// Module 5544 (useReanimatedEventHandler)
import reanimatedWrapper from "reanimatedWrapper" /* 5496 */;
import react from "react" /* 19 */;

const require = globalThis.__r;
let _require, closure_2, dependencyMap;

let c3;
let closure_4;
let hasOwnProperty;
let tmp3;
let tmp4;
({ useEffect: c3, useMemo: closure_4, useRef: hasOwnProperty } = react);
let closure_6 = ["onGestureHandlerReanimatedEvent", "onGestureHandlerReanimatedStateChange", "onGestureHandlerReanimatedTouchEvent"];
let items = [{ code: "(function pnpm_useReanimatedEventHandlerTs1(){})" }];
[tmp3] = items;
function pnpm_useReanimatedEventHandlerTs1() {

}
pnpm_useReanimatedEventHandlerTs1.__workletHash = 2246818651254;
pnpm_useReanimatedEventHandlerTs1.__initData = tmp3;
let items1 = [{ code: "(function deleteHandlerEventEntry_Pnpm_useReanimatedEventHandlerTs2(map,handlerTag){if(map===undefined){return;}map.value.delete(handlerTag);})" }];
[tmp4] = items1;
function deleteHandlerEventEntry(value, arg1) {
  if (undefined !== value) {
    value = value.value;
    value.delete(arg1);
  }
}
deleteHandlerEventEntry.__workletHash = 2290858033333;
deleteHandlerEventEntry.__initData = tmp4;
let closure_9 = { code: "(function pnpm_useReanimatedEventHandlerTs3(event){let[updateEventMap,eventHandler,handlerTag,workletizedHandlers,changeEventCalculator,fillInDefaultValues]=this.__closure;if(updateEventMap===undefined){return;}let context=updateEventMap.value.get(event.handlerTag);if(context===undefined){context={lastUpdateEvent:undefined};updateEventMap.value.set(event.handlerTag,context);}eventHandler(handlerTag,event,workletizedHandlers,changeEventCalculator,context,false,fillInDefaultValues);})" };

export function useReanimatedEventHandler(current, arg1, handler, changeEventCalculator, fillInDefaultValues) {
  let onUpdate;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp7;
  let tmp8;
  let tmp9;
  _require = current;
  dependencyMap = arg1;
  const items = [arg1];
  const tmp = closure_4(() => {
    let obj;
    const Worklets = reanimatedWrapper.Worklets;
    let isWorkletFunctionResult;
    if (Worklets != null) {
      isWorkletFunctionResult = Worklets.isWorkletFunction(onUpdate.onUpdate);
    }
    if (isWorkletFunctionResult) {
      obj = tmp3;
    } else {
      obj = { onUpdate: pnpm_useReanimatedEventHandlerTs1 };
      const merged = Object.assign(tmp3);
    }
    return obj;
  }, items);
  if (closure_2 == null) {
    const tmp3 = dependencyMap;
    let obj = require("module_5545");
    closure_2 = obj.createLastUpdateEventMap();
  }
  const items1 = [closure_9, closure_2, , , , , ];
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
  [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13] = items1;
  function pnpm_useReanimatedEventHandlerTs3(handlerTag) {
    if (undefined !== c0) {
      const value = iter.value;
      let value2 = value.get(handlerTag.handlerTag);
      if (undefined === value2) {
        const obj = { lastUpdateEvent: "r" };
        const value4 = iter.value;
        const result = value4.set(handlerTag.handlerTag, obj);
        value2 = obj;
      }
      _undefined(c2, handlerTag, c3, c4, value2, false, c5);
    }
  }
  const items2 = [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13];
  pnpm_useReanimatedEventHandlerTs3.__closure = items2;
  pnpm_useReanimatedEventHandlerTs3.__workletHash = 15949479082842;
  pnpm_useReanimatedEventHandlerTs3.__initData = tmp7;
  const tmp14 = closure_5(current);
  let closure_3 = tmp14;
  const items3 = [current, closure_2];
  current = tmp14.current;
  closure_3(() => {
    closure_3.current = current;
    return () => {
      const Worklets = closure_0(onUpdate[2]).Worklets;
      if (Worklets != null) {
        Worklets.scheduleOnUI(deleteHandlerEventEntry, closure_1_2, closure_1_0);
      }
    };
  }, items3);
  const Reanimated = require("reanimatedWrapper").Reanimated;
  let event;
  if (Reanimated != null) {
    let tmp17 = current !== current;
    const useEvent = Reanimated.useEvent;
    const tmp18 = closure_6;
    if (!tmp17) {
      let doDependenciesDiffer;
      if (handler != null) {
        doDependenciesDiffer = handler.doDependenciesDiffer;
      }
      tmp17 = doDependenciesDiffer;
    }
    event = useEvent(pnpm_useReanimatedEventHandlerTs3, tmp18, tmp17);
  }
  return event;
}
