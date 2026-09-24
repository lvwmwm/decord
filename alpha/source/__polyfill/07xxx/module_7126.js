// Module ID: 7126
// Function ID: 7127
// Dependencies: [1637, 6985, 6958]
// Exports: useGestureHandler

// Module 7126
import value2 from "value2" /* 6958 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6985 */;

const require = globalThis.__r;

require = arg1;
let dependencyMap = arg6;
let __initData = { code: "function pnpm_useGestureHandlerTs1(event){const{state,State,gestureSource,source,onStart}=this.__closure;state.value=State.BEGAN;gestureSource.value=source;onStart(source,event);return;}" };
let __initData2 = { code: "function pnpm_useGestureHandlerTs2(event){const{gestureSource,source,state,onChange}=this.__closure;if(gestureSource.value!==source){return;}state.value=event.state;onChange(source,event);}" };
let __initData3 = { code: "function pnpm_useGestureHandlerTs3(event){const{gestureSource,source,state,GESTURE_SOURCE,onEnd}=this.__closure;if(gestureSource.value!==source){return;}state.value=event.state;gestureSource.value=GESTURE_SOURCE.UNDETERMINED;onEnd(source,event);}" };
let __initData4 = { code: "function pnpm_useGestureHandlerTs4(event){const{gestureSource,source,state,GESTURE_SOURCE,onFinalize}=this.__closure;if(gestureSource.value!==source){return;}state.value=event.state;gestureSource.value=GESTURE_SOURCE.UNDETERMINED;onFinalize(source,event);}" };

export const useGestureHandler = (source, state, gestureSource, onStart, onChange, onEnd, onFinalize) => {
  const _require = source;
  dependencyMap = state;
  __initData = gestureSource;
  __initData2 = onStart;
  __initData3 = onChange;
  __initData4 = onEnd;
  const obj = { handleOnStart: null, handleOnChange: null, handleOnEnd: null, handleOnFinalize: null };
  class R {
    constructor(arg0) {
      closure_1.value = closure_0(closure_1[1]).State.BEGAN;
      closure_2.value = closure_0;
      tmp = closure_3(closure_0, source);
      return;
    }
  }
  const obj2 = require("cancelAnimation");
  R.__closure = { state, State: require("LegacyBaseButton").State, gestureSource, source, onStart };
  R.__workletHash = 16113572067379;
  R.__initData = __initData;
  const items = [state, gestureSource, source, onStart];
  obj.handleOnStart = obj2.useWorkletCallback(R, items);
  const obj3 = { state, State: require("LegacyBaseButton").State, gestureSource, source, onStart };
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
  const items1 = [state, gestureSource, source, onChange];
  obj.handleOnChange = require("cancelAnimation").useWorkletCallback(U, items1);
  const obj4 = require("cancelAnimation");
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
  const obj5 = require("cancelAnimation");
  C.__closure = { gestureSource, source, state, GESTURE_SOURCE: require("value2").GESTURE_SOURCE, onEnd };
  C.__workletHash = 10682034812271;
  C.__initData = __initData3;
  const items2 = [state, gestureSource, source, onEnd];
  obj.handleOnEnd = obj5.useWorkletCallback(C, items2);
  const obj6 = { gestureSource, source, state, GESTURE_SOURCE: require("value2").GESTURE_SOURCE, onEnd };
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
  const obj7 = require("cancelAnimation");
  T.__closure = { gestureSource, source, state, GESTURE_SOURCE: require("value2").GESTURE_SOURCE, onFinalize };
  T.__workletHash = 9696716573416;
  T.__initData = __initData4;
  const items3 = [state, gestureSource, source, onFinalize];
  obj.handleOnFinalize = obj7.useWorkletCallback(T, items3);
  return obj;
};
