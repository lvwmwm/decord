// Module ID: 1726
// Function ID: 19373
// Name: useAnimatedGestureHandler
// Dependencies: [1727, 1729]

// Module 1726 (useAnimatedGestureHandler)
const require = arg1;
const dependencyMap = arg6;
let closure_2 = { UNDETERMINED: 0, FAILED: 1, BEGAN: 2, CANCELLED: 3, ACTIVE: 4, END: 5 };
let closure_3 = { code: "function pnpm_useAnimatedGestureHandlerTs1(e){const{useWeb,EVENT_TYPE,handlers,context}=this.__closure;const event=useWeb?e.nativeEvent:e;if(event.state===EVENT_TYPE.BEGAN&&handlers.onStart){handlers.onStart(event,context);}if(event.state===EVENT_TYPE.ACTIVE&&handlers.onActive){handlers.onActive(event,context);}if(event.oldState===EVENT_TYPE.ACTIVE&&event.state===EVENT_TYPE.END&&handlers.onEnd){handlers.onEnd(event,context);}if(event.oldState===EVENT_TYPE.BEGAN&&event.state===EVENT_TYPE.FAILED&&handlers.onFail){handlers.onFail(event,context);}if(event.oldState===EVENT_TYPE.ACTIVE&&event.state===EVENT_TYPE.CANCELLED&&handlers.onCancel){handlers.onCancel(event,context);}if((event.oldState===EVENT_TYPE.BEGAN||event.oldState===EVENT_TYPE.ACTIVE)&&event.state!==EVENT_TYPE.BEGAN&&event.state!==EVENT_TYPE.ACTIVE&&handlers.onFinish){handlers.onFinish(event,context,event.state===EVENT_TYPE.CANCELLED||event.state===EVENT_TYPE.FAILED);}}" };
arg5.useAnimatedGestureHandler = function useAnimatedGestureHandler(handlers, items10) {
  const _require = handlers;
  let obj = _require(context[0]);
  const handler = obj.useHandler(handlers, items10);
  context = handler.context;
  const useWeb = handler.useWeb;
  /* worklet (recovered source) */ function pnpm_useAnimatedGestureHandlerTs1(e){const{useWeb,EVENT_TYPE,handlers,context}=this.__closure;const event=useWeb?e.nativeEvent:e;if(event.state===EVENT_TYPE.BEGAN&&handlers.onStart){handlers.onStart(event,context);}if(event.state===EVENT_TYPE.ACTIVE&&handlers.onActive){handlers.onActive(event,context);}if(event.oldState===EVENT_TYPE.ACTIVE&&event.state===EVENT_TYPE.END&&handlers.onEnd){handlers.onEnd(event,context);}if(event.oldState===EVENT_TYPE.BEGAN&&event.state===EVENT_TYPE.FAILED&&handlers.onFail){handlers.onFail(event,context);}if(event.oldState===EVENT_TYPE.ACTIVE&&event.state===EVENT_TYPE.CANCELLED&&handlers.onCancel){handlers.onCancel(event,context);}if((event.oldState===EVENT_TYPE.BEGAN||event.oldState===EVENT_TYPE.ACTIVE)&&event.state!==EVENT_TYPE.BEGAN&&event.state!==EVENT_TYPE.ACTIVE&&handlers.onFinish){handlers.onFinish(event,context,event.state===EVENT_TYPE.CANCELLED||event.state===EVENT_TYPE.FAILED);}}
  obj = { useWeb, EVENT_TYPE: useWeb, handlers, context };
  pnpm_useAnimatedGestureHandlerTs1.__closure = obj;
  pnpm_useAnimatedGestureHandlerTs1.__workletHash = 2401621621985;
  pnpm_useAnimatedGestureHandlerTs1.__initData = closure_3;
  let event = pnpm_useAnimatedGestureHandlerTs1;
  if (!useWeb) {
    event = _require(context[1]).useEvent(pnpm_useAnimatedGestureHandlerTs1, ["onGestureHandlerStateChange", "onGestureHandlerEvent"], tmp2);
    const obj3 = _require(context[1]);
  }
  return event;
};
