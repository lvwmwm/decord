// Module ID: 1726
// Function ID: 19372
// Name: useAnimatedGestureHandler
// Dependencies: [31, 1585]

// Module 1726 (useAnimatedGestureHandler)
let closure_2 = { zIndex: "center", CHANNEL_NAME_CHANNEL_ICON_RADIUS: "flex-start", GRADIENT_EASING_CONFIG: "flex", GameIconImageSize: "row", EXPERIMENT_GUILD_EVALUATION_EXPOSED: 8, lineHeight: "wrap" };
let closure_3 = { code: "function pnpm_useAnimatedGestureHandlerTs1(e){const{useWeb,EVENT_TYPE,handlers,context}=this.__closure;const event=useWeb?e.nativeEvent:e;if(event.state===EVENT_TYPE.BEGAN&&handlers.onStart){handlers.onStart(event,context);}if(event.state===EVENT_TYPE.ACTIVE&&handlers.onActive){handlers.onActive(event,context);}if(event.oldState===EVENT_TYPE.ACTIVE&&event.state===EVENT_TYPE.END&&handlers.onEnd){handlers.onEnd(event,context);}if(event.oldState===EVENT_TYPE.BEGAN&&event.state===EVENT_TYPE.FAILED&&handlers.onFail){handlers.onFail(event,context);}if(event.oldState===EVENT_TYPE.ACTIVE&&event.state===EVENT_TYPE.CANCELLED&&handlers.onCancel){handlers.onCancel(event,context);}if((event.oldState===EVENT_TYPE.BEGAN||event.oldState===EVENT_TYPE.ACTIVE)&&event.state!==EVENT_TYPE.BEGAN&&event.state!==EVENT_TYPE.ACTIVE&&handlers.onFinish){handlers.onFinish(event,context,event.state===EVENT_TYPE.CANCELLED||event.state===EVENT_TYPE.FAILED);}}" };
arg5.useAnimatedGestureHandler = function useAnimatedGestureHandler(handlers, items10) {
  items10 = handlers;
  let obj = items10(arg6[0]);
  const handler = obj.useHandler(handlers, items10);
  const context = handler.context;
  const arg6 = context;
  const useWeb = handler.useWeb;
  let closure_2 = useWeb;
  /* worklet (recovered source) */ function pnpm_useAnimatedGestureHandlerTs1(e){const{useWeb,EVENT_TYPE,handlers,context}=this.__closure;const event=useWeb?e.nativeEvent:e;if(event.state===EVENT_TYPE.BEGAN&&handlers.onStart){handlers.onStart(event,context);}if(event.state===EVENT_TYPE.ACTIVE&&handlers.onActive){handlers.onActive(event,context);}if(event.oldState===EVENT_TYPE.ACTIVE&&event.state===EVENT_TYPE.END&&handlers.onEnd){handlers.onEnd(event,context);}if(event.oldState===EVENT_TYPE.BEGAN&&event.state===EVENT_TYPE.FAILED&&handlers.onFail){handlers.onFail(event,context);}if(event.oldState===EVENT_TYPE.ACTIVE&&event.state===EVENT_TYPE.CANCELLED&&handlers.onCancel){handlers.onCancel(event,context);}if((event.oldState===EVENT_TYPE.BEGAN||event.oldState===EVENT_TYPE.ACTIVE)&&event.state!==EVENT_TYPE.BEGAN&&event.state!==EVENT_TYPE.ACTIVE&&handlers.onFinish){handlers.onFinish(event,context,event.state===EVENT_TYPE.CANCELLED||event.state===EVENT_TYPE.FAILED);}}
  obj = { useWeb, EVENT_TYPE: closure_2, handlers, context };
  pnpm_useAnimatedGestureHandlerTs1.__closure = obj;
  pnpm_useAnimatedGestureHandlerTs1.__workletHash = 2401621621985;
  pnpm_useAnimatedGestureHandlerTs1.__initData = closure_3;
  let event = pnpm_useAnimatedGestureHandlerTs1;
  if (!useWeb) {
    event = items10(arg6[1]).useEvent(pnpm_useAnimatedGestureHandlerTs1, ["NitroCoinStackSpotIllustration", "_sendMLSKeyPackage"], tmp2);
    const obj3 = items10(arg6[1]);
  }
  return event;
};
