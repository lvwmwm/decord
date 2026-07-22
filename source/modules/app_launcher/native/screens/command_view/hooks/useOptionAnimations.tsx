// Module ID: 11274
// Function ID: 87748
// Name: LayoutAnimation
// Dependencies: []
// Exports: useOptionEnteringAnimation

// Module 11274 (LayoutAnimation)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
let closure_4 = { code: "function LayoutAnimation_useOptionAnimationsTsx1(values){const{withTiming,OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION}=this.__closure;const animations={originY:withTiming(values.targetOriginY,{duration:OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION})};const initialValues={originY:values.currentOriginY};return{initialValues:initialValues,animations:animations};}" };
let closure_5 = { code: "function ExitingAnimation_useOptionAnimationsTsx2(values){const{withTiming,OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION}=this.__closure;const offScreenX=Math.min(values.currentOriginX-values.windowWidth,-values.windowWidth);const animations={opacity:withTiming(0,{duration:OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION}),originX:withTiming(offScreenX,{duration:OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION})};const initialValues={originX:values.currentOriginX,opacity:1};return{initialValues:initialValues,animations:animations};}" };
let closure_6 = { code: "function useOptionAnimationsTsx3(){const{withTiming,Easing,OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION,withDelay,runOnJS,handleMountAnimationComplete}=this.__closure;const scaleAnimation=withTiming(1,{duration:250,easing:Easing.bezier(0.25,1.75,0.25,1.25)});const opacityAnimation=withTiming(1,{duration:200});const layoutShiftDelay=OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION-100;return{animations:{opacity:withDelay(layoutShiftDelay,opacityAnimation),transform:[{scale:withDelay(layoutShiftDelay,scaleAnimation)}]},initialValues:{opacity:0,transform:[{scale:0.92}]},callback:function(){runOnJS(handleMountAnimationComplete)();}};}" };
const tmp2 = () => {
  class LayoutAnimation {
    constructor(arg0) {
      animations = {};
      obj2 = closure_0(closure_1[2]);
      animations.originY = obj2.withTiming(arg0.targetOriginY, { duration: 300 });
      obj = { originY: arg0.currentOriginY };
      return { initialValues: obj, animations };
    }
  }
  LayoutAnimation.__closure = { withTiming: arg1(dependencyMap[2]).withTiming, OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION: 300 };
  LayoutAnimation.__workletHash = 16804895997501;
  LayoutAnimation.__initData = closure_4;
  return LayoutAnimation;
}();
const tmp3 = () => {
  class ExitingAnimation {
    constructor(arg0) {
      animations = {};
      bound = Math.min(arg0.currentOriginX - arg0.windowWidth, -arg0.windowWidth);
      obj2 = closure_0(closure_1[2]);
      animations.opacity = obj2.withTiming(0, { duration: 300 });
      obj3 = closure_0(closure_1[2]);
      animations.originX = obj3.withTiming(bound, { duration: 300 });
      obj = { originX: arg0.currentOriginX, opacity: 1 };
      return { initialValues: obj, animations };
    }
  }
  ExitingAnimation.__closure = { withTiming: arg1(dependencyMap[2]).withTiming, OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION: 300 };
  ExitingAnimation.__workletHash = 8977480282966;
  ExitingAnimation.__initData = closure_5;
  return ExitingAnimation;
}();
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/app_launcher/native/screens/command_view/hooks/useOptionAnimations.tsx");

export const OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION = 300;
export const LayoutAnimation = tmp2;
export const ExitingAnimation = tmp3;
export const useOptionEnteringAnimation = function useOptionEnteringAnimation() {
  let obj = arg1(closure_1[3]);
  const sharedValue = obj.useSharedValue(false);
  const arg1 = sharedValue;
  closure_1 = React.useRef([]);
  const items = [sharedValue];
  const callback = React.useCallback(() => {
    const result = sharedValue.set(true);
    const current = closure_1.current;
    const item = current.forEach((arg0) => arg0());
    const current1 = closure_1.current;
    current1.splice(0, closure_1.current.length);
  }, items);
  obj = {
    EnteringAnimation: callback(React.useState(() => {
      const fn = function n() {
        let obj = callback(closure_1[2]);
        obj = { duration: 250 };
        const Easing = callback(closure_1[3]).Easing;
        obj.easing = Easing.bezier(0.25, 1.75, 0.25, 1.25);
        let obj2 = callback(closure_1[2]);
        obj = {};
        const obj1 = {};
        const withTimingResult = obj.withTiming(1, obj);
        const withTimingResult1 = obj2.withTiming(1, { duration: 200 });
        obj1.opacity = callback(closure_1[3]).withDelay(200, withTimingResult1);
        obj2 = {};
        const obj6 = callback(closure_1[3]);
        obj2.scale = callback(closure_1[3]).withDelay(200, withTimingResult);
        const items = [obj2];
        obj1.transform = items;
        obj.animations = obj1;
        const items1 = [{ scale: 0.92 }];
        obj.initialValues = { opacity: 0, transform: items1 };
        obj.callback = function callback() {
          callback(closure_1[3]).runOnJS(closure_2)();
        };
        return obj;
      };
      fn.__closure = { withTiming: sharedValue(closure_1[2]).withTiming, Easing: sharedValue(closure_1[3]).Easing, OPTION_ENTRY_EXIT_LAYOUT_SHIFT_DURATION: 300, withDelay: sharedValue(closure_1[3]).withDelay, runOnJS: sharedValue(closure_1[3]).runOnJS, handleMountAnimationComplete: closure_2 };
      fn.__workletHash = 1048348699475;
      fn.__initData = closure_6;
      return fn;
    }), 1)[0],
    registerAnimationCompleteCallback(arg0) {
      if (sharedValue.get()) {
        arg0();
      } else {
        const current = closure_1.current;
        current.push(arg0);
      }
    }
  };
  return obj;
};
