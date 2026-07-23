// Module ID: 1773
// Function ID: 19745
// Name: useAnimatedKeyboardHandler
// Dependencies: [1582]

// Module 1773 (useAnimatedKeyboardHandler)
const require = arg1;
const dependencyMap = arg6;
let closure_2 = { code: "function pnpm_reanimatedNativeTs1(event){const{handlers,context}=this.__closure;const{onKeyboardMoveStart:onKeyboardMoveStart,onKeyboardMove:onKeyboardMove,onKeyboardMoveEnd:onKeyboardMoveEnd,onKeyboardMoveInteractive:onKeyboardMoveInteractive}=handlers;if(onKeyboardMoveStart&&event.eventName.endsWith(\"onKeyboardMoveStart\")){onKeyboardMoveStart(event,context);}if(onKeyboardMove&&event.eventName.endsWith(\"onKeyboardMove\")){onKeyboardMove(event,context);}if(onKeyboardMoveEnd&&event.eventName.endsWith(\"onKeyboardMoveEnd\")){onKeyboardMoveEnd(event,context);}if(onKeyboardMoveInteractive&&event.eventName.endsWith(\"onKeyboardMoveInteractive\")){onKeyboardMoveInteractive(event,context);}}" };
let closure_3 = { code: "function pnpm_reanimatedNativeTs2(event){const{handlers,context}=this.__closure;const{onFocusedInputLayoutChanged:onFocusedInputLayoutChanged}=handlers;if(onFocusedInputLayoutChanged&&event.eventName.endsWith(\"onFocusedInputLayoutChanged\")){onFocusedInputLayoutChanged(event,context);}}" };
arg5.useAnimatedKeyboardHandler = function useAnimatedKeyboardHandler(handlers, items10) {
  const _require = handlers;
  const handler = _require(context[0]).useHandler(handlers, items10);
  context = handler.context;
  const obj = _require(context[0]);
  /* worklet (recovered source) */ function pnpm_reanimatedNativeTs1(event){const{handlers,context}=this.__closure;const{onKeyboardMoveStart:onKeyboardMoveStart,onKeyboardMove:onKeyboardMove,onKeyboardMoveEnd:onKeyboardMoveEnd,onKeyboardMoveInteractive:onKeyboardMoveInteractive}=handlers;if(onKeyboardMoveStart&&event.eventName.endsWith("onKeyboardMoveStart")){onKeyboardMoveStart(event,context);}if(onKeyboardMove&&event.eventName.endsWith("onKeyboardMove")){onKeyboardMove(event,context);}if(onKeyboardMoveEnd&&event.eventName.endsWith("onKeyboardMoveEnd")){onKeyboardMoveEnd(event,context);}if(onKeyboardMoveInteractive&&event.eventName.endsWith("onKeyboardMoveInteractive")){onKeyboardMoveInteractive(event,context);}}
  pnpm_reanimatedNativeTs1.__closure = { handlers, context };
  pnpm_reanimatedNativeTs1.__workletHash = 6092807753388;
  pnpm_reanimatedNativeTs1.__initData = closure_2;
  return _require(context[0]).useEvent(pnpm_reanimatedNativeTs1, ["onKeyboardMoveStart", "onKeyboardMove", "onKeyboardMoveEnd", "onKeyboardMoveInteractive"], handler.doDependenciesDiffer);
};
arg5.useFocusedInputLayoutHandler = function useFocusedInputLayoutHandler(handlers, items10) {
  const _require = handlers;
  const handler = _require(context[0]).useHandler(handlers, items10);
  context = handler.context;
  const obj = _require(context[0]);
  /* worklet (recovered source) */ function pnpm_reanimatedNativeTs2(event){const{handlers,context}=this.__closure;const{onFocusedInputLayoutChanged:onFocusedInputLayoutChanged}=handlers;if(onFocusedInputLayoutChanged&&event.eventName.endsWith("onFocusedInputLayoutChanged")){onFocusedInputLayoutChanged(event,context);}}
  pnpm_reanimatedNativeTs2.__closure = { handlers, context };
  pnpm_reanimatedNativeTs2.__workletHash = 9976853307145;
  pnpm_reanimatedNativeTs2.__initData = closure_3;
  return _require(context[0]).useEvent(pnpm_reanimatedNativeTs2, ["onFocusedInputLayoutChanged"], handler.doDependenciesDiffer);
};
