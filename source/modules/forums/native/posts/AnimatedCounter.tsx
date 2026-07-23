// Module ID: 10352
// Function ID: 79879
// Name: getStartPosition
// Dependencies: [57, 31, 27, 33, 4130, 44, 3991, 4476, 4542, 4126, 4546, 10353, 2]

// Module 10352 (getStartPosition)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
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
  const cleanUp = state.cleanUp;
  const height = state.height;
  const springConfig = state.springConfig;
  let sharedValue;
  let memo;
  ({ count, formatter, textColor, textVariant, textStyle } = state);
  context = context.useContext(closure_12);
  cleanUp(height[5])(null != context, "[AnimatedCount] Context should not be nullish.");
  let obj = state(height[6]);
  if (state === state(height[7]).TransitionStates.MOUNTED) {
    let NEUTRAL = obj.NEUTRAL;
  } else {
    NEUTRAL = getStartPosition(context);
  }
  sharedValue = obj.useSharedValue(NEUTRAL);
  let items = [height];
  memo = context.useMemo(() => outer1_11.map((arg0) => {
    if (null == outer1_2) {
      return 0;
    } else if (outer2_10.ABOVE === arg0) {
      let num = -1 * tmp;
    } else {
      num = tmp;
      if (outer2_10.BELOW !== arg0) {
        if (outer2_10.NEUTRAL === arg0) {
          num = 0;
        }
      }
    }
  }), items);
  let obj1 = state(height[6]);
  let fn = function y() {
    let obj = {};
    obj = {};
    const obj3 = state(height[8]);
    const obj4 = state(height[6]);
    const fn = function t(arg0) {
      let tmp = arg0;
      if (arg0) {
        tmp = outer1_0 === state(height[7]).TransitionStates.YEETED;
      }
      if (tmp) {
        state(height[6]).runOnJS(outer1_1)();
        const obj = state(height[6]);
      }
    };
    obj = { state, TransitionStates: state(height[7]).TransitionStates, runOnJS: state(height[6]).runOnJS, cleanUp };
    fn.__closure = obj;
    fn.__workletHash = 10933954976568;
    fn.__initData = outer1_14;
    obj.translateY = obj3.withSpring(state(height[6]).interpolate(sharedValue.get(), outer1_11, memo), springConfig, "respect-motion-settings", fn);
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  obj = { withSpring: state(height[8]).withSpring, interpolate: state(height[6]).interpolate, animationState: sharedValue, ANIMATION_INPUT: items, animationOutput: memo, springConfig, state, TransitionStates: state(height[7]).TransitionStates, runOnJS: state(height[6]).runOnJS, cleanUp };
  fn.__closure = obj;
  fn.__workletHash = 13513457118386;
  fn.__initData = closure_13;
  const items1 = [sharedValue, context, state];
  const animatedStyle = obj1.useAnimatedStyle(fn);
  const effect = context.useEffect(() => {
    if (state === state(height[7]).TransitionStates.YEETED) {
      let NEUTRAL = -1 * outer1_15(context);
    } else {
      NEUTRAL = outer1_10.NEUTRAL;
    }
    const result = sharedValue.set(NEUTRAL);
  }, items1);
  obj = { style: items2 };
  items2 = [sharedValue.absoluteFill, animatedStyle, { height }];
  obj1 = { variant: textVariant, color: textColor, style: textStyle, children: formatter(count) };
  obj.children = callback(state(height[9]).Text, obj1);
  return callback(cleanUp(height[6]).View, obj);
}
function getItemKey(arg0) {
  return "" + arg0;
}
function AnimatedCounterTransitionGroup(count) {
  let closure_8;
  let tmp5;
  count = count.count;
  const formatter = count.formatter;
  const textColor = count.textColor;
  const textVariant = count.textVariant;
  const textStyle = count.textStyle;
  const springConfig = count.springConfig;
  const tmp = callback3();
  const tmp2 = textVariant(textStyle.useState(), 2);
  const first = tmp2[0];
  let callback = tmp2[1];
  let items = [count];
  [tmp5, closure_8] = textVariant(textStyle.useState(items), 2);
  callback3 = textStyle.useRef(tmp5);
  const ref = textStyle.useRef(count);
  let items1 = [count];
  const effect = textStyle.useEffect(() => {
    ref.current = ref.current[0];
    const items = [count];
    ref.current = items;
    const items1 = [count];
    callback2(items1);
  }, items1);
  const tmp4 = textVariant(textStyle.useState(items), 2);
  const items2 = [formatter, first, springConfig, textColor, textStyle, textVariant];
  callback = textStyle.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.height);
  }, []);
  let obj = { style: tmp.container };
  obj = {
    value: (function useAnimationContext(arg0, ref) {
      let closure_0 = arg0;
      let closure_1 = ref;
      const items = [arg0, ref];
      return textStyle.useMemo(() => ({ current: table[0], previous: ref.current }), items);
    })(tmp5, ref)
  };
  const callback1 = textStyle.useCallback((arg0, count, state, cleanUp) => {
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
    return closure_7(outer1_16, obj, arg0);
  }, items2);
  obj = { items: tmp5, renderItem: callback1, getItemKey };
  obj.children = callback(count(textColor[7]).TransitionGroup, obj);
  const items3 = [callback(redux.Provider, obj), ];
  const obj1 = { style: tmp.hidden, onLayout: callback };
  const obj2 = { variant: textVariant, color: textColor, style: textStyle, children: formatter(count) };
  obj1.children = callback(count(textColor[9]).Text, obj2);
  items3[1] = callback(first, obj1);
  obj.children = items3;
  return callback2(first, obj);
}
function BasicCounter(arg0) {
  let count;
  let formatter;
  let textColor;
  let textStyle;
  let textVariant;
  ({ count, textStyle, textColor, textVariant, formatter } = arg0);
  const obj = { variant: textVariant, color: textColor, style: textStyle, children: formatter(count) };
  return callback(require(4126) /* Text */.Text, obj);
}
({ StyleSheet: closure_5, View: closure_6 } = get_ActivityIndicator);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let closure_9 = _createForOfIteratorHelperLoose.createStyles({ container: { flex: 0, flexGrow: 0, flexShrink: 0, justifyContent: "flex-start", alignItems: "flex-start", overflow: "hidden" }, hidden: { opacity: 0 } });
let obj = { ABOVE: -1, [-1]: "ABOVE", NEUTRAL: 0, [0]: "NEUTRAL", BELOW: 1, [1]: "BELOW" };
let items = [, , ];
({ ABOVE: arr[0], NEUTRAL: arr[1], BELOW: arr[2] } = obj);
let context = importAllResult.createContext(undefined);
let closure_13 = { code: "function AnimatedCounterTsx1(){const{withSpring,interpolate,animationState,ANIMATION_INPUT,animationOutput,springConfig,state,TransitionStates,runOnJS,cleanUp}=this.__closure;return{transform:[{translateY:withSpring(interpolate(animationState.get(),ANIMATION_INPUT,animationOutput),springConfig,'respect-motion-settings',function(finished){if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}})}]};}" };
let closure_14 = { code: "function AnimatedCounterTsx2(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}" };
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
    defaultFormatter = require(10353) /* defaultFormatter */.defaultFormatter;
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
let result = require("get ActivityIndicator").fileFinishedImporting("modules/forums/native/posts/AnimatedCounter.tsx");

export default memoResult;
