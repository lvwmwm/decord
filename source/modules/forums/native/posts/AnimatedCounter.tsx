// Module ID: 10342
// Function ID: 79829
// Name: getStartPosition
// Dependencies: []

// Module 10342 (getStartPosition)
function getStartPosition(context) {
  let current;
  let previous;
  ({ current, previous } = context);
  if (current > previous) {
    let NEUTRAL = obj.BELOW;
  } else if (current < previous) {
    NEUTRAL = obj.ABOVE;
  } else {
    NEUTRAL = obj.NEUTRAL;
  }
  return NEUTRAL;
}
function AnimatedCount(state) {
  let count;
  let formatter;
  let textColor;
  let textStyle;
  let textVariant;
  state = state.state;
  const arg1 = state;
  const cleanUp = state.cleanUp;
  const importDefault = cleanUp;
  const height = state.height;
  const dependencyMap = height;
  const springConfig = state.springConfig;
  let closure_3 = springConfig;
  let sharedValue;
  let memo;
  ({ count, formatter, textColor, textVariant, textStyle } = state);
  const context = importAllResult.useContext(closure_12);
  importDefault(dependencyMap[5])(null != context, "[AnimatedCount] Context should not be nullish.");
  let obj = arg1(dependencyMap[6]);
  if (state === arg1(dependencyMap[7]).TransitionStates.MOUNTED) {
    let NEUTRAL = obj.NEUTRAL;
  } else {
    NEUTRAL = getStartPosition(context);
  }
  sharedValue = obj.useSharedValue(NEUTRAL);
  const items = [height];
  memo = importAllResult.useMemo(() => closure_11.map((arg0) => {
    if (null == closure_2) {
      return 0;
    } else if (constants.ABOVE === arg0) {
      let num = -1 * tmp;
    } else {
      num = tmp;
      if (constants.BELOW !== arg0) {
        if (constants.NEUTRAL === arg0) {
          num = 0;
        }
      }
    }
  }), items);
  let obj1 = arg1(dependencyMap[6]);
  const fn = function y() {
    let obj = {};
    obj = {};
    const obj3 = state(height[8]);
    const obj4 = state(height[6]);
    const fn = function t(arg0) {
      let tmp = arg0;
      if (arg0) {
        tmp = callback === callback(closure_2[7]).TransitionStates.YEETED;
      }
      if (tmp) {
        callback(closure_2[6]).runOnJS(closure_1)();
        const obj = callback(closure_2[6]);
      }
    };
    obj = { state, TransitionStates: state(height[7]).TransitionStates, runOnJS: state(height[6]).runOnJS, cleanUp };
    fn.__closure = obj;
    fn.__workletHash = 10933954976568;
    fn.__initData = closure_14;
    obj.translateY = obj3.withSpring(state(height[6]).interpolate(sharedValue.get(), closure_11, memo), springConfig, "respect-motion-settings", fn);
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  obj = { withSpring: arg1(dependencyMap[8]).withSpring, interpolate: arg1(dependencyMap[6]).interpolate, animationState: sharedValue, ANIMATION_INPUT: items, animationOutput: memo, springConfig, state, TransitionStates: arg1(dependencyMap[7]).TransitionStates, runOnJS: arg1(dependencyMap[6]).runOnJS, cleanUp };
  fn.__closure = obj;
  fn.__workletHash = 13513457118386;
  fn.__initData = closure_13;
  const items1 = [sharedValue, context, state];
  const animatedStyle = obj1.useAnimatedStyle(fn);
  const effect = importAllResult.useEffect(() => {
    if (state === state(height[7]).TransitionStates.YEETED) {
      let NEUTRAL = -1 * callback(context);
    } else {
      NEUTRAL = constants.NEUTRAL;
    }
    const result = sharedValue.set(NEUTRAL);
  }, items1);
  obj = { style: items2 };
  const items2 = [sharedValue.absoluteFill, animatedStyle, { height }];
  obj1 = { variant: textVariant, color: textColor, style: textStyle, children: formatter(count) };
  obj.children = callback2(arg1(dependencyMap[9]).Text, obj1);
  return callback2(importDefault(dependencyMap[6]).View, obj);
}
function getItemKey(arg0) {
  return "" + arg0;
}
function AnimatedCounterTransitionGroup(count) {
  let tmp5;
  count = count.count;
  const arg1 = count;
  const formatter = count.formatter;
  const importDefault = formatter;
  const textColor = count.textColor;
  const dependencyMap = textColor;
  const textVariant = count.textVariant;
  let callback = textVariant;
  const textStyle = count.textStyle;
  const springConfig = count.springConfig;
  const tmp = callback4();
  const tmp2 = callback(textStyle.useState(), 2);
  const first = tmp2[0];
  const callback2 = tmp2[1];
  const items = [count];
  [tmp5, closure_8] = callback(textStyle.useState(items), 2);
  const callback4 = importAllResult.useRef(tmp5);
  const ref = textStyle.useRef(count);
  let obj = ref;
  const items1 = [count];
  const effect = importAllResult.useEffect(() => {
    ref.current = ref.current[0];
    const items = [count];
    ref.current = items;
    const items1 = [count];
    callback2(items1);
  }, items1);
  const tmp4 = callback(textStyle.useState(items), 2);
  const items2 = [formatter, first, springConfig, textColor, textStyle, textVariant];
  callback = importAllResult.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.height);
  }, []);
  obj = { style: tmp.container };
  obj = {
    value: function useAnimationContext(arg0, ref) {
      const count = arg0;
      const formatter = ref;
      const items = [arg0, ref];
      return textStyle.useMemo(() => ({ current: arg0[0], previous: arg1.current }), items);
    }(tmp5, ref)
  };
  const callback1 = importAllResult.useCallback((arg0, count, state, cleanUp) => {
    const obj = { formatter };
    if (null != springConfig) {
      let springStandard = springConfig;
    } else {
      springStandard = count(textColor[10]).springStandard;
    }
    obj.springConfig = springStandard;
    obj.count = count;
    obj.state = state;
    obj.cleanUp = cleanUp;
    obj.height = first;
    obj.textColor = textColor;
    obj.textVariant = textVariant;
    obj.textStyle = textStyle;
    return closure_7(closure_16, obj, arg0);
  }, items2);
  obj = { items: tmp5, renderItem: callback1, getItemKey };
  obj.children = callback2(arg1(dependencyMap[7]).TransitionGroup, obj);
  const items3 = [callback2(redux.Provider, obj), ];
  const obj1 = { style: tmp.hidden, onLayout: callback };
  const obj2 = { variant: textVariant, color: textColor, style: textStyle, children: formatter(count) };
  obj1.children = callback2(arg1(dependencyMap[9]).Text, obj2);
  items3[1] = callback2(first, obj1);
  obj.children = items3;
  return callback3(first, obj);
}
function BasicCounter(arg0) {
  let count;
  let formatter;
  let textColor;
  let textStyle;
  let textVariant;
  ({ count, textStyle, textColor, textVariant, formatter } = arg0);
  const obj = { variant: textVariant, color: textColor, style: textStyle, children: formatter(count) };
  return callback2(arg1(dependencyMap[9]).Text, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
({ StyleSheet: closure_5, View: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
let closure_9 = arg1(dependencyMap[4]).createStyles({ container: { ti: null, st: null, body: null, flex: null, accessibilityRole: null, status: null }, hidden: { opacity: 0 } });
const obj = { ABOVE: -1, [-1]: "ABOVE", NEUTRAL: 0, [0]: "NEUTRAL", BELOW: 1, [1]: "BELOW" };
const items = [, , ];
({ ABOVE: arr[0], NEUTRAL: arr[1], BELOW: arr[2] } = obj);
const context = importAllResult.createContext(undefined);
let closure_13 = { code: "function AnimatedCounterTsx1(){const{withSpring,interpolate,animationState,ANIMATION_INPUT,animationOutput,springConfig,state,TransitionStates,runOnJS,cleanUp}=this.__closure;return{transform:[{translateY:withSpring(interpolate(animationState.get(),ANIMATION_INPUT,animationOutput),springConfig,'respect-motion-settings',function(finished){if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}})}]};}" };
let closure_14 = { code: "function AnimatedCounterTsx2(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}" };
const obj2 = arg1(dependencyMap[4]);
const memoResult = importAllResult.memo((textColor) => {
  let animate;
  let count;
  let textStyle;
  ({ count, textStyle, animate } = textColor);
  if (animate === undefined) {
    animate = true;
  }
  let str = textColor.textColor;
  if (str === undefined) {
    str = "text-default";
  }
  let str2 = textColor.textVariant;
  if (str2 === undefined) {
    str2 = "text-sm/normal";
  }
  let defaultFormatter = textColor.formatter;
  if (defaultFormatter === undefined) {
    defaultFormatter = arg1(dependencyMap[11]).defaultFormatter;
  }
  if (animate) {
    let obj = { count, formatter: defaultFormatter, springConfig: textColor.springConfig, textColor: str, textVariant: str2, textStyle };
    let tmp3Result = tmp3(AnimatedCounterTransitionGroup, obj);
  } else {
    obj = { count, formatter: defaultFormatter, textColor: str, textVariant: str2, textStyle };
    tmp3Result = tmp3(BasicCounter, obj);
  }
  return tmp3Result;
});
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/forums/native/posts/AnimatedCounter.tsx");

export default memoResult;
