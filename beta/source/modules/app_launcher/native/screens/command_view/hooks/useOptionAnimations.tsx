// Module ID: 11643
// Function ID: 11644
// Name: useOptionAnimations
// Dependencies: [32, 19, 4837, 4566, 2]
// Exports: useOptionEnteringAnimation

// Module 11643 (useOptionAnimations)
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import timing from "timing" /* 4837 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let _slicedToArray = _slicedToArray_mod;
const React3 = 300;
class LayoutAnimation {
  constructor(originY) {
    let obj2;
    const obj = { originY: obj2.withTiming(originY.targetOriginY, obj3) };
    obj2 = timing;
    return { initialValues: { originY: originY.currentOriginY }, animations: obj };
  }
}
let obj = { withTiming: timing.withTiming, OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION: 300 };
LayoutAnimation.__closure = obj;
LayoutAnimation.__workletHash = 16804895997501;
LayoutAnimation.__initData = { code: "function LayoutAnimation_useOptionAnimationsTsx1(values){const{withTiming,OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION}=this.__closure;const animations={originY:withTiming(values.targetOriginY,{duration:OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION})};const initialValues={originY:values.currentOriginY};return{initialValues:initialValues,animations:animations};}" };
class ExitingAnimation {
  constructor(originX) {
    let bound;
    let obj2;
    let obj3;
    let obj4;
    const obj = { opacity: obj2.withTiming(0, obj3), originX: obj4.withTiming(bound, obj5) };
    bound = Math.min(originX.currentOriginX - originX.windowWidth, -originX.windowWidth);
    obj2 = timing;
    obj3 = { duration };
    obj4 = timing;
    return { initialValues: { originX: originX.currentOriginX, opacity: 1 }, animations: obj };
  }
}
let obj2 = { withTiming: timing.withTiming, OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION: 300 };
ExitingAnimation.__closure = obj2;
ExitingAnimation.__workletHash = 8977480282966;
ExitingAnimation.__initData = { code: "function ExitingAnimation_useOptionAnimationsTsx2(values){const{withTiming,OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION}=this.__closure;const offScreenX=Math.min(values.currentOriginX-values.windowWidth,-values.windowWidth);const animations={opacity:withTiming(0,{duration:OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION}),originX:withTiming(offScreenX,{duration:OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION})};const initialValues={originX:values.currentOriginX,opacity:1};return{initialValues:initialValues,animations:animations};}" };
let closure_5 = { code: "function useOptionAnimationsTsx3(){const{withTiming,Easing,OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION,withDelay,runOnJS,handleMountAnimationComplete}=this.__closure;const scaleAnimation=withTiming(1,{duration:250,easing:Easing.bezier(0.25,1.75,0.25,1.25)});const opacityAnimation=withTiming(1,{duration:200});const layoutShiftDelay=OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION-100;return{animations:{opacity:withDelay(layoutShiftDelay,opacityAnimation),transform:[{scale:withDelay(layoutShiftDelay,scaleAnimation)}]},initialValues:{opacity:0,transform:[{scale:0.92}]},callback:function(){runOnJS(handleMountAnimationComplete)();}};}" };
let result = size.fileFinishedImporting("modules/app_launcher/native/screens/command_view/hooks/useOptionAnimations.tsx");

export const OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION = 300;
export { LayoutAnimation };
export { ExitingAnimation };
export const useOptionEnteringAnimation = function useOptionEnteringAnimation() {
  let OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION;
  let closure_1;
  let handleMountAnimationComplete;
  let sharedValue;
  let obj = sharedValue(4566);
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
      const fn = function n() {
        let Easing;
        let items;
        let items1;
        let obj4;
        let obj5;
        let obj7;
        let obj8;
        let withTimingResult1;
        const tmp = sharedValue(closure_1[2]);
        let obj = { duration: 250, easing: Easing.bezier(0.25, 1.75, 0.25, 1.25) };
        const withTiming = tmp.withTiming;
        Easing = sharedValue(closure_1[3]).Easing;
        const obj3 = {
          animations: obj4,
          initialValues: obj8,
          callback() {
            const obj = sharedValue(closure_2_1[3]);
            obj.runOnJS(closure_1_2)();
          }
        };
        const withTimingResult = withTiming(1, obj);
        obj4 = { opacity: obj5.withDelay(200, withTimingResult1), transform: items };
        const obj2 = sharedValue(closure_1[2]);
        withTimingResult1 = obj2.withTiming(1, { duration: 200 });
        obj5 = sharedValue(closure_1[3]);
        const obj6 = { scale: obj7.withDelay(200, withTimingResult) };
        items = [obj6];
        obj8 = { opacity: 0, transform: items1 };
        items1 = [{ scale: 0.92 }];
        obj7 = sharedValue(closure_1[3]);
        return obj3;
      };
      let obj = { withTiming: timing.withTiming, Easing: ReanimatedRexport.Easing, OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION, withDelay: ReanimatedRexport.withDelay, runOnJS: ReanimatedRexport.runOnJS, handleMountAnimationComplete };
      fn.__closure = obj;
      fn.__workletHash = 1048348699475;
      fn.__initData = __initData;
      return fn;
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
};
