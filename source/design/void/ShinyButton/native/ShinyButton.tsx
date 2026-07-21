// Module ID: 12874
// Function ID: 98334
// Name: items
// Dependencies: []
// Exports: default

// Module 12874 (items)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const AppState = arg1(dependencyMap[2]).AppState;
let closure_6 = importDefault(dependencyMap[3]);
const jsx = arg1(dependencyMap[4]).jsx;
let obj = arg1(dependencyMap[5]);
obj = { "Null": false, "Null": false, "Null": false, "Null": false, "Null": false, "Null": false };
const items = [{ rotate: "30deg" }];
obj.transform = items;
let closure_8 = obj.createStyles({ shinyButton: { overflow: "hidden" }, shineContainer: {}, shine: obj, shineInner: { "Bool(false)": "r", "Bool(false)": 221, "Bool(false)": 195 } });
let closure_9 = { code: "function ShinyButtonTsx1(){const{width,OFFSCREEN_OFFSET,withRepeat,withSequence,withTiming,withDelay,INITIAL_ANIMATION_DELAY,ANIMATION_DURATION}=this.__closure;if(width==null){return{transform:[{translateX:-OFFSCREEN_OFFSET}]};}return{transform:[{translateX:withRepeat(withSequence(withTiming(-OFFSCREEN_OFFSET,{duration:0},'animate-always'),withDelay(INITIAL_ANIMATION_DELAY,withTiming(width+OFFSCREEN_OFFSET,{duration:ANIMATION_DURATION},'animate-always'))),-1)}]};}" };
const result = arg1(dependencyMap[10]).fileFinishedImporting("design/void/ShinyButton/native/ShinyButton.tsx");

export default function ShinyButton(disabled) {
  let shineDisabled;
  disabled = disabled.disabled;
  const arg1 = disabled;
  ({ submitting: closure_1, shineDisabled } = disabled);
  if (shineDisabled === undefined) {
    shineDisabled = false;
  }
  const dependencyMap = shineDisabled;
  ({ shineStyle: closure_3, shineInnerStyle: closure_4 } = disabled);
  let obj = { lightness: true, FeColorMatrix: true, DISCOVERABILITY: true, LATEST_ACTIVITY: true, mn: true, time_process_packages_end: true };
  Object.setPrototypeOf(null);
  const merged = Object.assign(disabled, obj);
  let AppState;
  let closure_6;
  let jsx;
  let callback2;
  let closure_9;
  let closure_10;
  let closure_11;
  function handleLayout(nativeEvent) {
    callback2(nativeEvent.nativeEvent.layout.width);
  }
  const tmp3 = callback2();
  AppState = tmp3;
  const tmp4 = callback(React.useState(null), 2);
  const first = tmp4[0];
  closure_6 = first;
  jsx = tmp4[1];
  const items = [closure_6];
  callback2 = arg1(dependencyMap[6]).useStateFromStores(items, () => first.useReducedMotion, []);
  const obj2 = arg1(dependencyMap[6]);
  [closure_9, closure_10] = callback(React.useState("active" === AppState.currentState), 2);
  const effect = React.useEffect(() => {
    let closure_0 = tmp3.addEventListener("change", (arg0) => {
      callback("active" === arg0);
    });
    return () => {
      closure_0.remove();
    };
  }, []);
  const tmp6 = callback(React.useState("active" === AppState.currentState), 2);
  const fn = function p() {
    if (null == first) {
      let obj = {};
      obj = { translateX: -100 };
      const items = [obj];
      obj.transform = items;
    } else {
      obj = {};
      const obj1 = {};
      const obj5 = disabled(shineDisabled[7]);
      const obj6 = disabled(shineDisabled[7]);
      const obj2 = { duration: 0 };
      const obj7 = disabled(shineDisabled[8]);
      const withTimingResult = disabled(shineDisabled[8]).withTiming(-100, obj2, "animate-always");
      const obj9 = disabled(shineDisabled[7]);
      const obj3 = { duration: 2000 };
      obj1.translateX = obj5.withRepeat(obj6.withSequence(withTimingResult, obj9.withDelay(750, disabled(shineDisabled[8]).withTiming(first + 100, obj3, "animate-always"))), -1);
      const items1 = [obj1];
      obj.transform = items1;
      const obj10 = disabled(shineDisabled[8]);
    }
    return obj;
  };
  obj = { width: first, OFFSCREEN_OFFSET: 100, withRepeat: arg1(dependencyMap[7]).withRepeat, withSequence: arg1(dependencyMap[7]).withSequence, withTiming: arg1(dependencyMap[8]).withTiming, withDelay: arg1(dependencyMap[7]).withDelay, INITIAL_ANIMATION_DELAY: 750, ANIMATION_DURATION: 2000 };
  fn.__closure = obj;
  fn.__workletHash = 5550564727650;
  fn.__initData = closure_9;
  closure_11 = arg1(dependencyMap[7]).useAnimatedStyle(fn);
  obj = {};
  const obj3 = arg1(dependencyMap[7]);
  const merged1 = Object.assign(merged);
  const items1 = [disabled.style, tmp3.shinyButton];
  obj["style"] = items1;
  obj["disabled"] = disabled;
  obj["renderShine"] = function renderShine() {
    let tmp = null;
    if (!disabled) {
      tmp = null;
      if (!callback) {
        tmp = null;
        if (!closure_8) {
          tmp = null;
          if (!shineDisabled) {
            tmp = null;
            if (closure_9) {
              let obj = { onLayout: handleLayout };
              const items = [tmp3.shineContainer, closure_11];
              obj.style = items;
              obj = {};
              const items1 = [tmp3.shine, closure_3];
              obj.style = items1;
              obj = {};
              const items2 = [tmp3.shineInner, closure_4];
              obj.style = items2;
              obj.children = callback2(callback(shineDisabled[7]).View, obj);
              obj.children = callback2(callback(shineDisabled[7]).View, obj);
              tmp = callback2(callback(shineDisabled[7]).View, obj);
            }
          }
        }
      }
    }
    return tmp;
  };
  return jsx(importDefault(dependencyMap[9]), obj);
};
