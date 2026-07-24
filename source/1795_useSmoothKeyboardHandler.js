// Module ID: 1795
// Function ID: 19887
// Name: useSmoothKeyboardHandler
// Dependencies: [65, 27, 1582, 1776]
// Exports: useSmoothKeyboardHandler

// Module 1795 (useSmoothKeyboardHandler)
import _toConsumableArray from "_toConsumableArray";
import { Easing } from "cancelAnimation";

const require = arg1;
let closure_3 = require("get ActivityIndicator").Platform.Version >= 30 || false;
let obj = { duration: 250 };
obj.easing = Easing.bezier(0.19919472913616398, 0.010644531250000006, 0.27920937042459737, 0.91025390625);
let closure_5 = { code: "function pnpm_useSmoothKeyboardHandlerTs1(){const{IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS,persistedHeight,TELEGRAM_ANDROID_TIMING_CONFIG,target,animatedKeyboardHeight}=this.__closure;if(IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS){return;}if(persistedHeight.value===0){return;}const event={duration:TELEGRAM_ANDROID_TIMING_CONFIG.duration,target:target.value,height:animatedKeyboardHeight.value,progress:animatedKeyboardHeight.value/persistedHeight.value};return event;}" };
let closure_6 = { code: "function pnpm_useSmoothKeyboardHandlerTs2(evt){const{handler,height,persistedHeight}=this.__closure;var _handler$onMove,_handler;if(!evt){return;}(_handler$onMove=(_handler=handler).onMove)===null||_handler$onMove===void 0||_handler$onMove.call(_handler,evt);if(evt.height===height.value){var _handler$onEnd,_handler2;(_handler$onEnd=(_handler2=handler).onEnd)===null||_handler$onEnd===void 0||_handler$onEnd.call(_handler2,evt);persistedHeight.value=height.value;}}" };
let closure_7 = { code: "function pnpm_useSmoothKeyboardHandlerTs3(e){const{IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS,persistedHeight,handler,target,height,animatedKeyboardHeight,withTiming,TELEGRAM_ANDROID_TIMING_CONFIG}=this.__closure;var _handler$onStart2,_handler3;if(!IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS&&e.height===persistedHeight.value){var _handler$onStart,_handler,_handler$onEnd,_handler2;(_handler$onStart=(_handler=handler).onStart)===null||_handler$onStart===void 0||_handler$onStart.call(_handler,e);(_handler$onEnd=(_handler2=handler).onEnd)===null||_handler$onEnd===void 0||_handler$onEnd.call(_handler2,e);return;}target.value=e.target;height.value=e.height;if(e.height>0){persistedHeight.value=e.height;}if(!IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS){animatedKeyboardHeight.value=withTiming(e.height,TELEGRAM_ANDROID_TIMING_CONFIG);}(_handler$onStart2=(_handler3=handler).onStart)===null||_handler$onStart2===void 0||_handler$onStart2.call(_handler3,{...e,duration:IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS?e.duration:TELEGRAM_ANDROID_TIMING_CONFIG.duration});}" };
let closure_8 = { code: "function pnpm_useSmoothKeyboardHandlerTs4(e){const{IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS,handler}=this.__closure;if(IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS){var _handler$onMove,_handler;(_handler$onMove=(_handler=handler).onMove)===null||_handler$onMove===void 0||_handler$onMove.call(_handler,e);}}" };
let closure_9 = { code: "function pnpm_useSmoothKeyboardHandlerTs5(e){const{IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS,handler}=this.__closure;if(IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS){var _handler$onEnd,_handler;(_handler$onEnd=(_handler=handler).onEnd)===null||_handler$onEnd===void 0||_handler$onEnd.call(_handler,e);}}" };

export const useSmoothKeyboardHandler = function useSmoothKeyboardHandler(handler, items11) {
  const _require = handler;
  let obj = _require(sharedValue[2]);
  sharedValue = obj.useSharedValue(-1);
  let obj1 = _require(sharedValue[2]);
  const sharedValue1 = obj1.useSharedValue(0);
  let obj2 = _require(sharedValue[2]);
  const sharedValue2 = obj2.useSharedValue(0);
  let obj3 = _require(sharedValue[2]);
  const sharedValue3 = obj3.useSharedValue(0);
  /* worklet (recovered source) */ function pnpm_useSmoothKeyboardHandlerTs1(){const{IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS,persistedHeight,TELEGRAM_ANDROID_TIMING_CONFIG,target,animatedKeyboardHeight}=this.__closure;if(IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS){return;}if(persistedHeight.value===0){return;}const event={duration:TELEGRAM_ANDROID_TIMING_CONFIG.duration,target:target.value,height:animatedKeyboardHeight.value,progress:animatedKeyboardHeight.value/persistedHeight.value};return event;}
  obj = { IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS: sharedValue2, persistedHeight: sharedValue2, TELEGRAM_ANDROID_TIMING_CONFIG: sharedValue3, target: sharedValue, animatedKeyboardHeight: sharedValue3 };
  pnpm_useSmoothKeyboardHandlerTs1.__closure = obj;
  pnpm_useSmoothKeyboardHandlerTs1.__workletHash = 4217597553195;
  pnpm_useSmoothKeyboardHandlerTs1.__initData = closure_5;
  /* worklet (recovered source) */ function pnpm_useSmoothKeyboardHandlerTs2(evt){const{handler,height,persistedHeight}=this.__closure;var _handler$onMove,_handler;if(!evt){return;}(_handler$onMove=(_handler=handler).onMove)===null||_handler$onMove===void 0||_handler$onMove.call(_handler,evt);if(evt.height===height.value){var _handler$onEnd,_handler2;(_handler$onEnd=(_handler2=handler).onEnd)===null||_handler$onEnd===void 0||_handler$onEnd.call(_handler2,evt);persistedHeight.value=height.value;}}
  pnpm_useSmoothKeyboardHandlerTs2.__closure = { handler, height: sharedValue1, persistedHeight: sharedValue2 };
  pnpm_useSmoothKeyboardHandlerTs2.__workletHash = 1186520959152;
  pnpm_useSmoothKeyboardHandlerTs2.__initData = closure_6;
  let tmp5 = items11;
  if (items11) {
    tmp5 = sharedValue1(items11);
  }
  const animatedReaction = _require(sharedValue[2]).useAnimatedReaction(pnpm_useSmoothKeyboardHandlerTs1, pnpm_useSmoothKeyboardHandlerTs2, tmp5);
  const obj5 = _require(sharedValue[2]);
  obj = {};
  /* worklet (recovered source) */ function pnpm_useSmoothKeyboardHandlerTs3(e){const{IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS,persistedHeight,handler,target,height,animatedKeyboardHeight,withTiming,TELEGRAM_ANDROID_TIMING_CONFIG}=this.__closure;var _handler$onStart2,_handler3;if(!IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS&&e.height===persistedHeight.value){var _handler$onStart,_handler,_handler$onEnd,_handler2;(_handler$onStart=(_handler=handler).onStart)===null||_handler$onStart===void 0||_handler$onStart.call(_handler,e);(_handler$onEnd=(_handler2=handler).onEnd)===null||_handler$onEnd===void 0||_handler$onEnd.call(_handler2,e);return;}target.value=e.target;height.value=e.height;if(e.height>0){persistedHeight.value=e.height;}if(!IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS){animatedKeyboardHeight.value=withTiming(e.height,TELEGRAM_ANDROID_TIMING_CONFIG);}(_handler$onStart2=(_handler3=handler).onStart)===null||_handler$onStart2===void 0||_handler$onStart2.call(_handler3,{...e,duration:IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS?e.duration:TELEGRAM_ANDROID_TIMING_CONFIG.duration});}
  obj1 = { IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS: sharedValue2, persistedHeight: sharedValue2, handler, target: sharedValue, height: sharedValue1, animatedKeyboardHeight: sharedValue3, withTiming: _require(sharedValue[2]).withTiming, TELEGRAM_ANDROID_TIMING_CONFIG: sharedValue3 };
  pnpm_useSmoothKeyboardHandlerTs3.__closure = obj1;
  pnpm_useSmoothKeyboardHandlerTs3.__workletHash = 2049629670138;
  pnpm_useSmoothKeyboardHandlerTs3.__initData = closure_7;
  obj.onStart = pnpm_useSmoothKeyboardHandlerTs3;
  /* worklet (recovered source) */ function pnpm_useSmoothKeyboardHandlerTs4(e){const{IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS,handler}=this.__closure;if(IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS){var _handler$onMove,_handler;(_handler$onMove=(_handler=handler).onMove)===null||_handler$onMove===void 0||_handler$onMove.call(_handler,e);}}
  obj2 = { IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS: sharedValue2, handler };
  pnpm_useSmoothKeyboardHandlerTs4.__closure = obj2;
  pnpm_useSmoothKeyboardHandlerTs4.__workletHash = 16381726355375;
  pnpm_useSmoothKeyboardHandlerTs4.__initData = closure_8;
  obj.onMove = pnpm_useSmoothKeyboardHandlerTs4;
  /* worklet (recovered source) */ function pnpm_useSmoothKeyboardHandlerTs5(e){const{IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS,handler}=this.__closure;if(IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS){var _handler$onEnd,_handler;(_handler$onEnd=(_handler=handler).onEnd)===null||_handler$onEnd===void 0||_handler$onEnd.call(_handler,e);}}
  obj3 = { IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS: sharedValue2, handler };
  pnpm_useSmoothKeyboardHandlerTs5.__closure = obj3;
  pnpm_useSmoothKeyboardHandlerTs5.__workletHash = 9348108811600;
  pnpm_useSmoothKeyboardHandlerTs5.__initData = closure_9;
  obj.onEnd = pnpm_useSmoothKeyboardHandlerTs5;
  _require(sharedValue[3]).useKeyboardHandler(obj, items11);
};
