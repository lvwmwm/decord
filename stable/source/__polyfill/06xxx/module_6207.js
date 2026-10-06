// Module ID: 6207
// Function ID: 6208
// Dependencies: [1644, 6066, 6039]
// Exports: useGestureHandler

// Module 6207
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 6039 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6066 */;

const require = globalThis.__r;
let dependencyMap, tmp, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;

let __initData = { code: "function pnpm_useGestureHandlerTs1(event){const{state,State,gestureSource,source,onStart}=this.__closure;state.value=State.BEGAN;gestureSource.value=source;onStart(source,event);return;}" };
let __initData2 = { code: "function pnpm_useGestureHandlerTs2(event){const{gestureSource,source,state,onChange}=this.__closure;if(gestureSource.value!==source){return;}state.value=event.state;onChange(source,event);}" };
let __initData3 = { code: "function pnpm_useGestureHandlerTs3(event){const{gestureSource,source,state,GESTURE_SOURCE,onEnd}=this.__closure;if(gestureSource.value!==source){return;}state.value=event.state;gestureSource.value=GESTURE_SOURCE.UNDETERMINED;onEnd(source,event);}" };
let __initData4 = { code: "function pnpm_useGestureHandlerTs4(event){const{gestureSource,source,state,GESTURE_SOURCE,onFinalize}=this.__closure;if(gestureSource.value!==source){return;}state.value=event.state;gestureSource.value=GESTURE_SOURCE.UNDETERMINED;onFinalize(source,event);}" };

export const useGestureHandler = (source, state, gestureSource, onStart, onChange, onEnd, onFinalize) => {
  let items;
  let items1;
  let items2;
  let items3;
  let obj2;
  let obj4;
  let obj5;
  let obj7;
  const _require = source;
  dependencyMap = state;
  __initData = gestureSource;
  __initData2 = onStart;
  __initData3 = onChange;
  __initData4 = onEnd;
  const obj = { handleOnStart: obj2.useWorkletCallback(R, items), handleOnChange: obj4.useWorkletCallback(U, items1), handleOnEnd: obj5.useWorkletCallback(C, items2), handleOnFinalize: obj7.useWorkletCallback(T, items3) };
  obj2 = require("module_1644");
  class R {
    constructor(arg0) {
      closure_1.value = closure_0(closure_1[1]).State.BEGAN;
      closure_2.value = closure_0;
      tmp = closure_3(closure_0, source);
      return;
    }
  }
  R.__closure = { state, State: require("LegacyBaseButton").State, gestureSource, source, onStart };
  R.__workletHash = 16113572067379;
  R.__initData = __initData;
  items = [state, gestureSource, source, onStart];
  ({ state, State: require("LegacyBaseButton").State, gestureSource, source, onStart });
  obj4 = require("module_1644");
  class U {
    constructor(arg0) {
      if (closure_2.value === closure_0) {
        tmp2 = source;
        tmp3 = closure_1;
        closure_1.value = source.state;
        tmp4 = closure_4;
        tmp5 = closure_4(tmp, source);
      }
      return;
    }
  }
  U.__closure = { gestureSource, source, state, onChange };
  U.__workletHash = 9050442757159;
  U.__initData = __initData2;
  items1 = [state, gestureSource, source, onChange];
  obj5 = require("module_1644");
  class C {
    constructor(arg0) {
      if (closure_2.value === closure_0) {
        tmp3 = source;
        tmp4 = closure_1;
        closure_1.value = source.state;
        tmp5 = closure_0;
        tmp6 = closure_1;
        tmp.value = closure_0(closure_1[2]).GESTURE_SOURCE.UNDETERMINED;
        tmp7 = closure_5;
        tmp8 = closure_5(tmp2, source);
      }
      return;
    }
  }
  C.__closure = { gestureSource, source, state, GESTURE_SOURCE: require("GESTURE_SOURCE").GESTURE_SOURCE, onEnd };
  C.__workletHash = 10682034812271;
  C.__initData = __initData3;
  items2 = [state, gestureSource, source, onEnd];
  ({ gestureSource, source, state, GESTURE_SOURCE: require("GESTURE_SOURCE").GESTURE_SOURCE, onEnd });
  obj7 = require("module_1644");
  class T {
    constructor(arg0) {
      if (closure_2.value === closure_0) {
        tmp3 = source;
        tmp4 = closure_1;
        closure_1.value = source.state;
        tmp5 = closure_0;
        tmp6 = closure_1;
        tmp.value = closure_0(closure_1[2]).GESTURE_SOURCE.UNDETERMINED;
        tmp7 = closure_6;
        tmp8 = closure_6(tmp2, source);
      }
      return;
    }
  }
  T.__closure = { gestureSource, source, state, GESTURE_SOURCE: require("GESTURE_SOURCE").GESTURE_SOURCE, onFinalize };
  T.__workletHash = 9696716573416;
  T.__initData = __initData4;
  items3 = [state, gestureSource, source, onFinalize];
  ({ gestureSource, source, state, GESTURE_SOURCE: require("GESTURE_SOURCE").GESTURE_SOURCE, onFinalize });
  return obj;
};
