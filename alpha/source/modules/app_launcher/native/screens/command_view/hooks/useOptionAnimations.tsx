// Module ID: 13399
// Function ID: 13400
// Name: useOptionAnimations
// Dependencies: [32, 19, 5485, 1652, 1705, 2]
// Exports: useOptionEnteringAnimation

// Module 13399 (useOptionAnimations)
import _mod1652 from "module_1652" /* 1652 */;
import _mod1705 from "module_1705" /* 1705 */;
import timing_timing from "timing/timing" /* 5485 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let tmp2;
let tmp3;
let tmp4;
let tmp5;
let tmp6;
let tmp7;
let _slicedToArray = _slicedToArray_mod;
let c4 = 300;
let items = [{ code: "(function LayoutAnimation_useOptionAnimationsTsx1(values){let[withTiming,OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION]=this.__closure;const animations={originY:withTiming(values.targetOriginY,{duration:OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION})};const initialValues={originY:values.currentOriginY};return{initialValues:initialValues,animations:animations};})" }, timing_timing.withTiming, 300];
let c0;
let c1;
[tmp2, tmp3, tmp4] = items;
class LayoutAnimation {
  constructor(originY) {
    const obj = { originY: _undefined(originY.targetOriginY, obj2) };
    return { initialValues: { originY: originY.currentOriginY }, animations: obj };
  }
}
let items1 = [tmp3, tmp4];
LayoutAnimation.__closure = items1;
LayoutAnimation.__workletHash = 5041452333732;
LayoutAnimation.__initData = tmp2;
const items2 = [{ code: "(function ExitingAnimation_useOptionAnimationsTsx2(values){let[withTiming,OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION]=this.__closure;const offScreenX=Math.min(values.currentOriginX-values.windowWidth,-values.windowWidth);const animations={opacity:withTiming(0,{duration:OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION}),originX:withTiming(offScreenX,{duration:OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION})};const initialValues={originX:values.currentOriginX,opacity:1};return{initialValues:initialValues,animations:animations};})" }, timing_timing.withTiming, 300];
c0 = undefined;
c1 = undefined;
[tmp5, tmp6, tmp7] = items2;
class ExitingAnimation {
  constructor(originX) {
    let bound;
    let obj2;
    const obj = { opacity: _undefined(0, obj2), originX: _undefined(bound, obj3) };
    obj2 = { duration };
    bound = Math.min(originX.currentOriginX - originX.windowWidth, -originX.windowWidth);
    return { initialValues: { originX: originX.currentOriginX, opacity: 1 }, animations: obj };
  }
}
const items3 = [tmp6, tmp7];
ExitingAnimation.__closure = items3;
ExitingAnimation.__workletHash = 7972612064943;
ExitingAnimation.__initData = tmp5;
let closure_5 = { code: "(function useOptionAnimationsTsx3(){let[withTiming,Easing,OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION,withDelay,scheduleOnRN,handleMountAnimationComplete]=this.__closure;const scaleAnimation=withTiming(1,{duration:250,easing:Easing.bezier(0.25,1.75,0.25,1.25)});const opacityAnimation=withTiming(1,{duration:200});const layoutShiftDelay=OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION-100;return{animations:{opacity:withDelay(layoutShiftDelay,opacityAnimation),transform:[{scale:withDelay(layoutShiftDelay,scaleAnimation)}]},initialValues:{opacity:0,transform:[{scale:0.92}]},callback:function(){scheduleOnRN(handleMountAnimationComplete);}};})" };
let result = size.fileFinishedImporting("modules/app_launcher/native/screens/command_view/hooks/useOptionAnimations.tsx");

export const OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION = 300;
export { LayoutAnimation };
export { ExitingAnimation };
export function useOptionEnteringAnimation() {
  let closure_1;
  let closure_2;
  let sharedValue;
  let obj = sharedValue(1652);
  sharedValue = obj.useSharedValue(false);
  dependencyMap = react.useRef([]);
  let items = [sharedValue];
  _slicedToArray = react.useCallback(() => {
    const result = sharedValue.set(true);
    const current = closure_1.current;
    const item = current.forEach((fn) => fn());
    const current1 = closure_1.current;
    current1.splice(0, closure_1.current.length);
  }, items);
  let obj2 = {
    EnteringAnimation: _slicedToArray(react.useState(() => {
      let tmp;
      let tmp2;
      let tmp3;
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp7;
      let items = [closure_5, timing_timing.withTiming, _mod1652.Easing, c4, _mod1652.withDelay, _mod1705.scheduleOnRN, closure_2];
      let c0;
      let c1;
      let c2;
      let c3;
      c4 = undefined;
      let c5;
      [tmp, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7] = items;
      function useOptionAnimationsTsx3() {
        let items;
        let items1;
        let obj3;
        let obj5;
        const obj = { duration: 250, easing: _undefined2.bezier(0.25, 1.75, 0.25, 1.25) };
        const tmp = _undefined(1, obj);
        const diff = c2 - 100;
        const obj2 = {
          animations: obj3,
          initialValues: obj5,
          callback() {
            closure_1_4(closure_1_5);
          }
        };
        obj3 = { opacity: _undefined3(diff, _undefined(1, { duration: 200 })), transform: items };
        items = [{ scale: _undefined3(diff, tmp) }];
        obj5 = { opacity: 0, transform: items1 };
        items1 = [{ scale: 0.92 }];
        ({ scale: _undefined3(diff, tmp) });
        return obj2;
      }
      let items1 = [tmp2, tmp3, tmp4, tmp5, tmp6, tmp7];
      useOptionAnimationsTsx3.__closure = items1;
      useOptionAnimationsTsx3.__workletHash = 956668104331;
      useOptionAnimationsTsx3.__initData = tmp;
      return useOptionAnimationsTsx3;
    }), 1)[0],
    registerAnimationCompleteCallback(fn) {
      if (sharedValue.get()) {
        fn();
      } else {
        const current = closure_1.current;
        current.push(fn);
      }
    }
  };
  return obj2;
}
