// Module ID: 5298
// Function ID: 45758
// Name: useGestureHandler
// Dependencies: [1582, 5217, 5190]

// Module 5298 (useGestureHandler)
const require = arg1;
let dependencyMap = arg6;
let closure_2 = { code: "function pnpm_useGestureHandlerTs1(event){const{state,State,gestureSource,source,onStart}=this.__closure;state.value=State.BEGAN;gestureSource.value=source;onStart(source,event);return;}" };
let closure_3 = { code: "function pnpm_useGestureHandlerTs2(event){const{gestureSource,source,state,onChange}=this.__closure;if(gestureSource.value!==source){return;}state.value=event.state;onChange(source,event);}" };
let closure_4 = { code: "function pnpm_useGestureHandlerTs3(event){const{gestureSource,source,state,GESTURE_SOURCE,onEnd}=this.__closure;if(gestureSource.value!==source){return;}state.value=event.state;gestureSource.value=GESTURE_SOURCE.UNDETERMINED;onEnd(source,event);}" };
let closure_5 = { code: "function pnpm_useGestureHandlerTs4(event){const{gestureSource,source,state,GESTURE_SOURCE,onFinalize}=this.__closure;if(gestureSource.value!==source){return;}state.value=event.state;gestureSource.value=GESTURE_SOURCE.UNDETERMINED;onFinalize(source,event);}" };
arg5.useGestureHandler = function useGestureHandler(CONTENT, animatedContentGestureState, sharedValue, handleOnStart, handleOnChange, handleOnEnd, handleOnFinalize) {
  const _require = CONTENT;
  const dependencyMap = animatedContentGestureState;
  let closure_2 = sharedValue;
  let closure_3 = handleOnStart;
  let closure_4 = handleOnChange;
  let closure_5 = handleOnEnd;
  let closure_6 = handleOnFinalize;
  let obj = {};
  let obj1 = _require(1582);
  /* worklet (recovered source) */ function pnpm_useGestureHandlerTs1(event){const{state,State,gestureSource,source,onStart}=this.__closure;state.value=State.BEGAN;gestureSource.value=source;onStart(source,event);return;}
  obj = { state: animatedContentGestureState, State: _require(5217).State, gestureSource: sharedValue, source: CONTENT, onStart: handleOnStart };
  pnpm_useGestureHandlerTs1.__closure = obj;
  pnpm_useGestureHandlerTs1.__workletHash = 16113572067379;
  pnpm_useGestureHandlerTs1.__initData = closure_2;
  const items = [animatedContentGestureState, sharedValue, CONTENT, handleOnStart];
  obj.handleOnStart = obj1.useWorkletCallback(pnpm_useGestureHandlerTs1, items);
  /* worklet (recovered source) */ function pnpm_useGestureHandlerTs2(event){const{gestureSource,source,state,onChange}=this.__closure;if(gestureSource.value!==source){return;}state.value=event.state;onChange(source,event);}
  pnpm_useGestureHandlerTs2.__closure = { gestureSource: sharedValue, source: CONTENT, state: animatedContentGestureState, onChange: handleOnChange };
  pnpm_useGestureHandlerTs2.__workletHash = 9050442757159;
  pnpm_useGestureHandlerTs2.__initData = closure_3;
  const items1 = [animatedContentGestureState, sharedValue, CONTENT, handleOnChange];
  obj.handleOnChange = _require(1582).useWorkletCallback(pnpm_useGestureHandlerTs2, items1);
  const obj4 = _require(1582);
  /* worklet (recovered source) */ function pnpm_useGestureHandlerTs3(event){const{gestureSource,source,state,GESTURE_SOURCE,onEnd}=this.__closure;if(gestureSource.value!==source){return;}state.value=event.state;gestureSource.value=GESTURE_SOURCE.UNDETERMINED;onEnd(source,event);}
  obj = { gestureSource: sharedValue, source: CONTENT, state: animatedContentGestureState, GESTURE_SOURCE: _require(5190).GESTURE_SOURCE, onEnd: handleOnEnd };
  pnpm_useGestureHandlerTs3.__closure = obj;
  pnpm_useGestureHandlerTs3.__workletHash = 10682034812271;
  pnpm_useGestureHandlerTs3.__initData = closure_4;
  const items2 = [animatedContentGestureState, sharedValue, CONTENT, handleOnEnd];
  obj.handleOnEnd = _require(1582).useWorkletCallback(pnpm_useGestureHandlerTs3, items2);
  const obj5 = _require(1582);
  /* worklet (recovered source) */ function pnpm_useGestureHandlerTs4(event){const{gestureSource,source,state,GESTURE_SOURCE,onFinalize}=this.__closure;if(gestureSource.value!==source){return;}state.value=event.state;gestureSource.value=GESTURE_SOURCE.UNDETERMINED;onFinalize(source,event);}
  obj1 = { gestureSource: sharedValue, source: CONTENT, state: animatedContentGestureState, GESTURE_SOURCE: _require(5190).GESTURE_SOURCE, onFinalize: handleOnFinalize };
  pnpm_useGestureHandlerTs4.__closure = obj1;
  pnpm_useGestureHandlerTs4.__workletHash = 9696716573416;
  pnpm_useGestureHandlerTs4.__initData = closure_5;
  const items3 = [animatedContentGestureState, sharedValue, CONTENT, handleOnFinalize];
  obj.handleOnFinalize = _require(1582).useWorkletCallback(pnpm_useGestureHandlerTs4, items3);
  return obj;
};
