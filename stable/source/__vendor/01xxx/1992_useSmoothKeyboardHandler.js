// Module ID: 1992
// Function ID: 1993
// Name: useSmoothKeyboardHandler
// Dependencies: [17, 1652, 1973]
// Exports: useSmoothKeyboardHandler

// Module 1992 (useSmoothKeyboardHandler)
import react_native from "react-native" /* 17 */;
import _mod1652 from "module_1652" /* 1652 */;

let Easing;
let tmp2;
const _mod1973 = tmp2(1973);
tmp2 = react_native.Platform.Version >= 30 || false;
let closure_2 = tmp2;
let obj = { duration: 250, easing: Easing.bezier(0.19919472913616398, 0.010644531250000006, 0.27920937042459737, 0.91025390625) };
Easing = _mod1652.Easing;
let closure_4 = { code: "(function pnpm_useSmoothKeyboardHandlerTs1(){let[IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS,persistedHeight,TELEGRAM_ANDROID_TIMING_CONFIG,target,animatedKeyboardHeight]=this.__closure;if(IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS){return;}if(persistedHeight.value===0){return;}const event={duration:TELEGRAM_ANDROID_TIMING_CONFIG.duration,target:target.value,height:animatedKeyboardHeight.value,progress:animatedKeyboardHeight.value/persistedHeight.value};return event;})" };
let closure_5 = { code: "(function pnpm_useSmoothKeyboardHandlerTs2(evt){let[handler,height,persistedHeight]=this.__closure;var _handler$onMove,_handler;if(!evt){return;}(_handler$onMove=(_handler=handler).onMove)===null||_handler$onMove===void 0||_handler$onMove.call(_handler,evt);if(evt.height===height.value){var _handler$onEnd,_handler2;(_handler$onEnd=(_handler2=handler).onEnd)===null||_handler$onEnd===void 0||_handler$onEnd.call(_handler2,evt);persistedHeight.value=height.value;}})" };
let closure_6 = { code: "(function pnpm_useSmoothKeyboardHandlerTs3(e){let[IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS,persistedHeight,handler,target,height,animatedKeyboardHeight,withTiming,TELEGRAM_ANDROID_TIMING_CONFIG]=this.__closure;var _handler$onStart2,_handler3;if(!IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS&&e.height===persistedHeight.value){var _handler$onStart,_handler,_handler$onEnd,_handler2;(_handler$onStart=(_handler=handler).onStart)===null||_handler$onStart===void 0||_handler$onStart.call(_handler,e);(_handler$onEnd=(_handler2=handler).onEnd)===null||_handler$onEnd===void 0||_handler$onEnd.call(_handler2,e);return;}target.value=e.target;height.value=e.height;if(e.height>0){persistedHeight.value=e.height;}if(!IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS){animatedKeyboardHeight.value=withTiming(e.height,TELEGRAM_ANDROID_TIMING_CONFIG);}(_handler$onStart2=(_handler3=handler).onStart)===null||_handler$onStart2===void 0||_handler$onStart2.call(_handler3,{...e,duration:IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS?e.duration:TELEGRAM_ANDROID_TIMING_CONFIG.duration});})" };
let closure_7 = { code: "(function pnpm_useSmoothKeyboardHandlerTs4(e){let[IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS,handler]=this.__closure;if(IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS){var _handler$onMove,_handler;(_handler$onMove=(_handler=handler).onMove)===null||_handler$onMove===void 0||_handler$onMove.call(_handler,e);}})" };
let closure_8 = { code: "(function pnpm_useSmoothKeyboardHandlerTs5(e){let[IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS,handler]=this.__closure;if(IS_ANDROID_ELEVEN_OR_HIGHER_OR_IOS){var _handler$onEnd,_handler;(_handler$onEnd=(_handler=handler).onEnd)===null||_handler$onEnd===void 0||_handler$onEnd.call(_handler,e);}})" };

export const useSmoothKeyboardHandler = (arg0, items4) => {
  let pnpm_useSmoothKeyboardHandlerTs3;
  let pnpm_useSmoothKeyboardHandlerTs4;
  let pnpm_useSmoothKeyboardHandlerTs5;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp30;
  let tmp31;
  let tmp32;
  let tmp33;
  let tmp34;
  let tmp35;
  let tmp36;
  let tmp37;
  let tmp38;
  let tmp39;
  let tmp40;
  let tmp41;
  let tmp2 = require;
  let tmp3 = dependencyMap;
  obj = _mod1652;
  const sharedValue = obj.useSharedValue(-1);
  const obj2 = _mod1652;
  const sharedValue1 = obj2.useSharedValue(0);
  const obj3 = _mod1652;
  const sharedValue2 = obj3.useSharedValue(0);
  const obj4 = _mod1652;
  const sharedValue3 = obj4.useSharedValue(0);
  const items = [closure_4, , , , , ];
  items[1] = closure_2;
  items[2] = sharedValue2;
  items[3] = obj;
  items[4] = sharedValue;
  items[5] = sharedValue3;
  let c3;
  let c4;
  [tmp11, tmp12, tmp13, tmp14, tmp15, tmp16] = items;
  function pnpm_useSmoothKeyboardHandlerTs1() {
    const tmp = c0;
    if (!tmp) {
      if (0 !== _undefined.value) {
        return { duration: _undefined2.duration, target: _undefined3.value, height: _undefined4.value, progress: _undefined4.value / iter.value };
      }
    }
  }
  const items1 = [tmp12, tmp13, tmp14, tmp15, tmp16];
  pnpm_useSmoothKeyboardHandlerTs1.__closure = items1;
  pnpm_useSmoothKeyboardHandlerTs1.__workletHash = 4625113059826;
  pnpm_useSmoothKeyboardHandlerTs1.__initData = tmp11;
  const items2 = [closure_5, arg0, sharedValue1, sharedValue2];
  let c0;
  let c1;
  let c2;
  [tmp17, tmp18, tmp19, tmp20] = items2;
  function pnpm_useSmoothKeyboardHandlerTs2(height) {
    const tmp = height;
    if (tmp) {
      const onMove = _undefined.onMove;
      const tmp2 = _undefined;
      if (onMove != null) {
        onMove(height);
      }
      if (height.height === _undefined2.value) {
        const onEnd = tmp2.onEnd;
        if (onEnd != null) {
          onEnd(height);
        }
        c2.value = iter.value;
      }
    }
  }
  const items3 = [tmp18, tmp19, tmp20];
  pnpm_useSmoothKeyboardHandlerTs2.__closure = items3;
  pnpm_useSmoothKeyboardHandlerTs2.__workletHash = 2933081891273;
  pnpm_useSmoothKeyboardHandlerTs2.__initData = tmp17;
  let tmp21 = items4;
  const useAnimatedReaction = _mod1652.useAnimatedReaction;
  const tmp10 = obj;
  if (items4) {
    items4 = [];
    HermesBuiltin.arraySpread(items4, items4, 0);
    tmp21 = items4;
  }
  const animatedReaction = useAnimatedReaction(pnpm_useSmoothKeyboardHandlerTs1, pnpm_useSmoothKeyboardHandlerTs2, tmp21);
  const items5 = [closure_6, tmp9, sharedValue2, arg0, sharedValue, sharedValue1, sharedValue3, , ];
  const useKeyboardHandler = _mod1973.useKeyboardHandler;
  items5[7] = _mod1652.withTiming;
  items5[8] = tmp10;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  let c5;
  let c6;
  let c7;
  [tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35] = items5;
  const obj5 = { onStart: pnpm_useSmoothKeyboardHandlerTs3, onMove: pnpm_useSmoothKeyboardHandlerTs4, onEnd: pnpm_useSmoothKeyboardHandlerTs5 };
  pnpm_useSmoothKeyboardHandlerTs3 = function pnpm_useSmoothKeyboardHandlerTs3(height) {
    let duration;
    if (!c0) {
      if (height.height === _undefined.value) {
        const onStart = _undefined2.onStart;
        const tmp3 = _undefined2;
        if (onStart != null) {
          onStart(height);
        }
        const onEnd = tmp3.onEnd;
        if (onEnd != null) {
          onEnd(height);
        }
      }
    }
    c3.value = height.target;
    c4.value = height.height;
    if (height.height > 0) {
      _undefined.value = height.height;
    }
    if (!c0) {
      c5.value = _undefined3(height.height, _undefined4);
    }
    const onStart2 = _undefined2.onStart;
    if (onStart2 != null) {
      obj = { duration };
      const merged = Object.assign(height);
      if (c0) {
        duration = height.duration;
      } else {
        duration = _undefined4.duration;
      }
      onStart2(obj);
    }
  };
  const items6 = [tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35];
  pnpm_useSmoothKeyboardHandlerTs3.__closure = items6;
  pnpm_useSmoothKeyboardHandlerTs3.__workletHash = 10073398960835;
  pnpm_useSmoothKeyboardHandlerTs3.__initData = tmp27;
  const items7 = [closure_7, tmp9, arg0];
  [tmp36, tmp37, tmp38] = items7;
  pnpm_useSmoothKeyboardHandlerTs4 = function pnpm_useSmoothKeyboardHandlerTs4(arg0) {
    const tmp = c0;
    if (tmp) {
      const onMove = _undefined.onMove;
      if (onMove != null) {
        onMove(arg0);
      }
    }
  };
  const items8 = [tmp37, tmp38];
  pnpm_useSmoothKeyboardHandlerTs4.__closure = items8;
  pnpm_useSmoothKeyboardHandlerTs4.__workletHash = 6468236428886;
  pnpm_useSmoothKeyboardHandlerTs4.__initData = tmp36;
  const items9 = [closure_8, tmp9, arg0];
  c0 = undefined;
  c1 = undefined;
  [tmp39, tmp40, tmp41] = items9;
  pnpm_useSmoothKeyboardHandlerTs5 = function pnpm_useSmoothKeyboardHandlerTs5(arg0) {
    const tmp = c0;
    if (tmp) {
      const onEnd = _undefined.onEnd;
      if (onEnd != null) {
        onEnd(arg0);
      }
    }
  };
  const items10 = [tmp40, tmp41];
  pnpm_useSmoothKeyboardHandlerTs5.__closure = items10;
  pnpm_useSmoothKeyboardHandlerTs5.__workletHash = 463977787241;
  pnpm_useSmoothKeyboardHandlerTs5.__initData = tmp39;
  useKeyboardHandler(obj5, items4);
};
