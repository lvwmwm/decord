// Module ID: 10858
// Function ID: 10859
// Name: AnimatedCounter
// Dependencies: [32, 19, 17, 21, 4836, 38, 4566, 4540, 5280, 4832, 5284, 10859, 2]

// Module 10858 (AnimatedCounter)
import native from "native" /* 4540 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import Text_Text from "Text/Text" /* 4832 */;
import spring from "spring" /* 5280 */;
import springPresets from "springPresets" /* 5284 */;
import AnimatedCounterUtils from "AnimatedCounterUtils" /* 10859 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let set;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
function AnimatedCount(state) {
  let NEUTRAL;
  let Text;
  let count;
  let current;
  let formatter;
  let items2;
  let obj4;
  let previous;
  let textColor;
  let textStyle;
  let textVariant;
  state = state.state;
  const cleanUp = state.cleanUp;
  const height = state.height;
  const springConfig = state.springConfig;
  let context;
  let sharedValue;
  let memo;
  obj = context;
  ({ count, formatter, textColor, textVariant, textStyle } = state);
  context = context.useContext(closure_12);
  cleanUp(height[5])(null != context, "[AnimatedCount] Context should not be nullish.");
  const useSharedValue = state(height[6]).useSharedValue;
  const tmp2 = cleanUp;
  const tmp6 = state(height[6]);
  if (state === state(height[7]).TransitionStates.MOUNTED) {
    NEUTRAL = obj.NEUTRAL;
  } else {
    ({ current, previous } = context);
    if (current > previous) {
      NEUTRAL = obj.BELOW;
    } else if (current < previous) {
      NEUTRAL = obj.ABOVE;
    } else {
      NEUTRAL = obj.NEUTRAL;
    }
  }
  sharedValue = useSharedValue(NEUTRAL);
  items = [height];
  memo = obj.useMemo(() => items.map((item) => {
    let num = 0;
    if (null != height) {
      let num2;
      if (obj.ABOVE === item) {
        num2 = -1 * tmp;
      } else {
        num2 = tmp;
        if (obj.BELOW !== item) {
          if (obj.NEUTRAL === item) {
            num2 = 0;
          }
        }
      }
      num = num2;
    }
    return num;
  }), items);
  let fn = function y() {
    let fn;
    let interpolateResult;
    let withSpring;
    obj = { transform: items };
    const obj2 = { translateY: withSpring(interpolateResult, springConfig, "respect-motion-settings", fn) };
    let tmp = spring;
    withSpring = tmp.withSpring;
    fn = function t(arg0) {
      const tmp = arg0 && closure_1_0 === state(height[7]).TransitionStates.YEETED;
      if (tmp) {
        obj = state(height[6]);
        obj.runOnJS(cleanUp)();
      }
    };
    const obj3 = ReanimatedRexport;
    interpolateResult = obj3.interpolate(sharedValue.get(), items, memo);
    fn.__closure = { state, TransitionStates: native.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, cleanUp };
    fn.__workletHash = 10933954976568;
    fn.__initData = __initData;
    ({ state, TransitionStates: native.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, cleanUp });
    items = [obj2];
    return obj;
  };
  const tmp5Result = state(height[6]);
  let obj2 = { withSpring: tmp5(tmp3[8]).withSpring, interpolate: tmp5(tmp3[6]).interpolate, animationState: sharedValue, ANIMATION_INPUT: items, animationOutput: memo, springConfig, state, TransitionStates: tmp5(tmp3[7]).TransitionStates, runOnJS: tmp5(tmp3[6]).runOnJS, cleanUp };
  fn.__closure = obj2;
  fn.__workletHash = 13513457118386;
  fn.__initData = __initData;
  const items1 = [sharedValue, context, state];
  const animatedStyle = tmp5Result.useAnimatedStyle(fn);
  const effect = obj.useEffect(() => {
    let NEUTRAL;
    let current;
    let previous;
    set = sharedValue.set;
    if (state === native.TransitionStates.YEETED) {
      let NEUTRAL2;
      ({ current, previous } = context);
      if (current > previous) {
        NEUTRAL2 = obj.BELOW;
      } else if (current < previous) {
        NEUTRAL2 = obj.ABOVE;
      } else {
        NEUTRAL2 = obj.NEUTRAL;
      }
      NEUTRAL = -1 * NEUTRAL2;
    } else {
      NEUTRAL = obj.NEUTRAL;
    }
    const result = set(NEUTRAL);
  }, items1);
  let obj3 = { style: items2, children: closure_7(Text, obj4) };
  items2 = [sharedValue.absoluteFill, animatedStyle, { height }];
  const View = tmp2(tmp3[6]).View;
  obj4 = { variant: textVariant, color: textColor, style: textStyle, children: formatter(count) };
  Text = tmp5(tmp3[9]).Text;
  return closure_7(View, obj3);
}
function getItemKey(arg0) {
  return "" + arg0;
}
function AnimatedCounterTransitionGroup(count) {
  let Text;
  let _undefined;
  let c8;
  let items4;
  let obj3;
  let obj5;
  let tmp5;
  count = count.count;
  const formatter = count.formatter;
  const textColor = count.textColor;
  const textVariant = count.textVariant;
  const textStyle = count.textStyle;
  const springConfig = count.springConfig;
  c8 = undefined;
  let ref;
  let tmp = ref();
  let tmp2 = textVariant(textStyle.useState(), 2);
  const height = tmp2[0];
  let closure_7 = tmp2[1];
  items = [count];
  [tmp5, c8] = textVariant(textStyle.useState(items), 2);
  const tmp4 = textVariant(textStyle.useState(items), 2);
  textStyle.useRef(tmp5);
  ref = textStyle.useRef(count);
  let items1 = [count];
  const effect = textStyle.useEffect(() => {
    ref.current = ref.current[0];
    items = [count];
    ref.current = items;
    const items1 = [count];
    _undefined(items1);
  }, items1);
  let closure_0 = tmp5;
  const items2 = [tmp5, ref];
  const memo = textStyle.useMemo(() => ({ current: count[0], previous: ref.current }), items2);
  const items3 = [formatter, height, springConfig, textColor, textStyle, textVariant];
  const callback = textStyle.useCallback((nativeEvent) => {
    closure_7(nativeEvent.nativeEvent.layout.height);
  }, []);
  obj = { style: tmp.container, children: items4 };
  const obj2 = { value: memo, children: closure_7(count(textColor[7]).TransitionGroup, obj3) };
  const callback1 = textStyle.useCallback((arg0, count, state, cleanUp) => {
    let springStandard;
    obj = { formatter, springConfig: springStandard, count, state, cleanUp, height, textColor, textVariant, textStyle };
    springStandard = springConfig;
    const tmp = metroImportDefault;
    const tmp2 = AnimatedCount;
    if (null == springConfig) {
      springStandard = springPresets.springStandard;
    }
    return tmp(tmp2, obj, arg0);
  }, items3);
  const Provider = redux.Provider;
  obj3 = { items: tmp5, renderItem: callback1, getItemKey };
  items4 = [closure_7(Provider, obj2), ];
  const obj4 = { style: tmp.hidden, onLayout: callback, children: closure_7(Text, obj5) };
  obj5 = { variant: textVariant, color: textColor, style: textStyle, children: formatter(count) };
  Text = count(textColor[9]).Text;
  items4[1] = closure_7(height, obj4);
  return c8(height, obj);
}
function BasicCounter(arg0) {
  let count;
  let formatter;
  let textColor;
  let textStyle;
  let textVariant;
  ({ count, textStyle, textColor, textVariant, formatter } = arg0);
  obj = { variant: textVariant, color: textColor, style: textStyle, children: formatter(count) };
  const Text = Text_Text.Text;
  return metroImportDefault(Text, obj);
}
({ StyleSheet: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles({ container: { flex: 0, flexGrow: 0, flexShrink: 0, justifyContent: "flex-start", alignItems: "flex-start", overflow: "hidden" }, hidden: { opacity: 0 } });
let obj = { ABOVE: -1, [-1]: "ABOVE", NEUTRAL: 0, [0]: "NEUTRAL", BELOW: 1, [1]: "BELOW" };
let items = [, , ];
({ ABOVE: arr[0], NEUTRAL: arr[1], BELOW: arr[2] } = obj);
const redux = react.createContext(undefined);
const __initData = { code: "function AnimatedCounterTsx1(){const{withSpring,interpolate,animationState,ANIMATION_INPUT,animationOutput,springConfig,state,TransitionStates,runOnJS,cleanUp}=this.__closure;return{transform:[{translateY:withSpring(interpolate(animationState.get(),ANIMATION_INPUT,animationOutput),springConfig,'respect-motion-settings',function(finished){if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}})}]};}" };
let closure_14 = { code: "function AnimatedCounterTsx2(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}" };
const memoResult = react.memo((springConfig) => {
  let animate;
  let count;
  let textStyle;
  let tmp3Result;
  ({ count, textStyle, animate } = springConfig);
  springConfig = springConfig.springConfig;
  if (animate === undefined) {
    animate = true;
  }
  let str = springConfig.textColor;
  if (str === undefined) {
    str = "text-default";
  }
  let str2 = springConfig.textVariant;
  if (str2 === undefined) {
    str2 = "text-sm/normal";
  }
  let defaultFormatter = springConfig.formatter;
  if (defaultFormatter === undefined) {
    defaultFormatter = AnimatedCounterUtils.defaultFormatter;
  }
  if (animate) {
    const obj2 = { count, formatter: defaultFormatter, springConfig, textColor: str, textVariant: str2, textStyle };
    tmp3Result = tmp3(AnimatedCounterTransitionGroup, obj2);
  } else {
    obj = { count, formatter: defaultFormatter, textColor: str, textVariant: str2, textStyle };
    tmp3Result = tmp3(BasicCounter, obj);
  }
  return tmp3Result;
});
let result = size.fileFinishedImporting("modules/forums/native/posts/AnimatedCounter.tsx");

export default memoResult;
