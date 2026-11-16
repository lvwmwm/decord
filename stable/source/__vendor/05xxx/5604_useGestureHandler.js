// Module ID: 5604
// Function ID: 5605
// Name: useGestureHandler
// Dependencies: [19, 5452, 5425]
// Exports: useGestureHandler

// Module 5604 (useGestureHandler)
import react from "react" /* 19 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5452 */;

let tmp2;
const GESTURE_SOURCE = tmp2(5425);
const useCallback = react.useCallback;
let closure_3 = { code: "(function pnpm_useGestureHandlerTs1(event){let[state,State,gestureSource,source,onStart]=this.__closure;state.value=State.BEGAN;gestureSource.value=source;onStart(source,event);return;})" };
let closure_4 = { code: "(function pnpm_useGestureHandlerTs2(event){let[gestureSource,source,state,onChange]=this.__closure;if(gestureSource.value!==source){return;}state.value=event.state;onChange(source,event);})" };
let closure_5 = { code: "(function pnpm_useGestureHandlerTs3(event){let[gestureSource,source,state,GESTURE_SOURCE,onEnd]=this.__closure;if(gestureSource.value!==source){return;}state.value=event.state;gestureSource.value=GESTURE_SOURCE.UNDETERMINED;onEnd(source,event);})" };
let closure_6 = { code: "(function pnpm_useGestureHandlerTs4(event){let[gestureSource,source,state,GESTURE_SOURCE,onFinalize]=this.__closure;if(gestureSource.value!==source){return;}state.value=event.state;gestureSource.value=GESTURE_SOURCE.UNDETERMINED;onFinalize(source,event);})" };

export const useGestureHandler = (arg0, arg1, arg2, arg3, arg4, arg5, arg6) => {
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  const tmp = useCallback;
  const items = [closure_3, arg1, , , , ];
  const tmp2 = require;
  items[2] = LegacyBaseButton.State;
  items[3] = arg2;
  items[4] = arg0;
  items[5] = arg3;
  [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9] = items;
  function pnpm_useGestureHandlerTs1(arg0) {
    c0.value = _undefined.BEGAN;
    c2.value = value;
    _undefined2(value, arg0);
  }
  const items1 = [tmp5, tmp6, tmp7, tmp8, tmp9];
  pnpm_useGestureHandlerTs1.__closure = items1;
  pnpm_useGestureHandlerTs1.__workletHash = 6802146511018;
  pnpm_useGestureHandlerTs1.__initData = tmp4;
  const items2 = [arg1, arg2, arg0, arg3];
  const items3 = [closure_4, arg2, arg0, arg1, arg4];
  [tmp11, tmp12, tmp13, tmp14, tmp15] = items3;
  function pnpm_useGestureHandlerTs2(state) {
    if (_undefined.value === c1) {
      c2.value = state.state;
      _undefined2(tmp, state);
    }
  }
  const items4 = [tmp12, tmp13, tmp14, tmp15];
  pnpm_useGestureHandlerTs2.__closure = items4;
  pnpm_useGestureHandlerTs2.__workletHash = 11384673749918;
  pnpm_useGestureHandlerTs2.__initData = tmp11;
  const items5 = [arg1, arg2, arg0, arg4];
  const items6 = [closure_5, arg2, arg0, arg1, , ];
  const tmpResult = tmp(pnpm_useGestureHandlerTs1, items2);
  const tmpResult3 = tmp(pnpm_useGestureHandlerTs2, items5);
  items6[4] = GESTURE_SOURCE.GESTURE_SOURCE;
  items6[5] = arg5;
  [tmp17, tmp18, tmp19, tmp20, tmp21, tmp22] = items6;
  function pnpm_useGestureHandlerTs3(state) {
    if (_undefined.value === c1) {
      c2.value = state.state;
      tmp.value = _undefined2.UNDETERMINED;
      _undefined3(tmp2, state);
    }
  }
  const items7 = [tmp18, tmp19, tmp20, tmp21, tmp22];
  pnpm_useGestureHandlerTs3.__closure = items7;
  pnpm_useGestureHandlerTs3.__workletHash = 10370949870966;
  pnpm_useGestureHandlerTs3.__initData = tmp17;
  const items8 = [arg1, arg2, arg0, arg5];
  const items9 = [closure_6, arg2, arg0, arg1, , ];
  const tmpResult4 = tmp(pnpm_useGestureHandlerTs3, items8);
  items9[4] = GESTURE_SOURCE.GESTURE_SOURCE;
  items9[5] = arg6;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  [tmp24, tmp25, tmp26, tmp27, tmp28, tmp29] = items9;
  function pnpm_useGestureHandlerTs4(state) {
    if (_undefined.value === c1) {
      c2.value = state.state;
      tmp.value = _undefined2.UNDETERMINED;
      _undefined3(tmp2, state);
    }
  }
  const items10 = [tmp25, tmp26, tmp27, tmp28, tmp29];
  pnpm_useGestureHandlerTs4.__closure = items10;
  pnpm_useGestureHandlerTs4.__workletHash = 350531883025;
  pnpm_useGestureHandlerTs4.__initData = tmp24;
  const items11 = [arg1, arg2, arg0, arg6];
  const obj = { handleOnStart: tmpResult, handleOnChange: tmpResult3, handleOnEnd: tmpResult4, handleOnFinalize: tmp(pnpm_useGestureHandlerTs4, items11) };
  return obj;
};
