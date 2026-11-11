// Module ID: 11841
// Function ID: 11842
// Name: AnimatedCounter
// Dependencies: [32, 19, 17, 21, 5243, 38, 1652, 5314, 5876, 1705, 5866, 5877, 11842, 2]

// Module 11841 (AnimatedCounter)
import native from "native" /* 5314 */;
import Text_Text from "Text/Text" /* 5866 */;
import springPresets from "springPresets" /* 5877 */;
import AnimatedCounterUtils from "AnimatedCounterUtils" /* 11842 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let _undefined2, set;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
function AnimatedCount(state) {
  let NEUTRAL;
  let Text;
  let cleanUp;
  let count;
  let current;
  let formatter;
  let items4;
  let obj3;
  let previous;
  let springConfig;
  let textColor;
  let textStyle;
  let textVariant;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
  state = state.state;
  const height = state.height;
  let sharedValue;
  obj = react;
  ({ count, formatter, cleanUp, springConfig, textColor, textVariant, textStyle } = state);
  const context = react.useContext(closure_12);
  const tmp3 = context;
  let tmp2 = height;
  const tmp4 = height(context[5])(null != context, "[AnimatedCount] Context should not be nullish.");
  const tmp5 = state;
  const tmp6 = state(context[6]);
  const useSharedValue = tmp6.useSharedValue;
  if (state === state(context[7]).TransitionStates.MOUNTED) {
    NEUTRAL = obj.NEUTRAL;
  } else {
    ({ current, previous } = context);
    if (current > previous) {
      NEUTRAL = obj.BELOW;
    } else if (current < previous) {
      const tmp8 = obj;
      NEUTRAL = obj.ABOVE;
    } else {
      const tmp7 = obj;
      NEUTRAL = obj.NEUTRAL;
    }
  }
  sharedValue = useSharedValue(NEUTRAL);
  items = [height];
  const memo = obj.useMemo(() => items.map((item) => {
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
  let items1 = [closure_14, , , , , , , , , , , ];
  const useAnimatedStyle = tmp5(tmp3[6]).useAnimatedStyle;
  tmp5(tmp3[6]);
  items1[1] = tmp5(tmp3[8]).withSpring;
  items1[2] = tmp5(tmp3[6]).interpolate;
  items1[3] = sharedValue;
  items1[4] = items;
  items1[5] = memo;
  items1[6] = springConfig;
  items1[7] = closure_13;
  items1[8] = state;
  items1[9] = tmp5(tmp3[7]).TransitionStates;
  items1[10] = tmp5(tmp3[9]).scheduleOnRN;
  items1[11] = cleanUp;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  let c8;
  let c9;
  let c10;
  [tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25] = items1;
  class AnimatedCounterTsx2 {
    constructor() {
      let _undefined;
      let items2;
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp7;
      let tmp8;
      let tmp = c0;
      items = [c6, c7, c8, c9, c10];
      c0 = undefined;
      const tmp2 = _undefined(_undefined2.get(), c3, c4);
      _undefined = undefined;
      _undefined2 = undefined;
      c3 = undefined;
      [tmp4, tmp5, tmp6, tmp7, tmp8] = items;
      obj = { transform: items2 };
      const obj2 = { translateY: tmp(tmp2, c5, "respect-motion-settings", AnimatedCounterTsx1) };
      class AnimatedCounterTsx1 {
        constructor(arg0) {
          tmp = arg0;
          if (tmp) {
            tmp2 = closure_0;
            tmp3 = closure_1;
            tmp = closure_0 === closure_1.YEETED;
          }
          if (tmp) {
            tmp4 = closure_2;
            tmp5 = closure_3;
            tmp6 = closure_2(closure_3);
          }
          return;
        }
      }
      const items1 = [tmp5, tmp6, tmp7, tmp8];
      AnimatedCounterTsx1.__closure = items1;
      AnimatedCounterTsx1.__workletHash = 10398437053283;
      AnimatedCounterTsx1.__initData = tmp4;
      items2 = [obj2];
      return obj;
    }
  }
  let items2 = [tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25];
  AnimatedCounterTsx2.__closure = items2;
  AnimatedCounterTsx2.__workletHash = 10296245481336;
  AnimatedCounterTsx2.__initData = tmp14;
  const items3 = [sharedValue, context, state];
  const animatedStyle = useAnimatedStyle(AnimatedCounterTsx2);
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
  }, items3);
  let obj2 = { style: items4, children: closure_7(Text, obj3) };
  items4 = [absoluteFill.absoluteFill, animatedStyle, { height }];
  const View = tmp2(tmp3[6]).View;
  obj3 = { variant: textVariant, color: textColor, style: textStyle, children: formatter(count) };
  Text = tmp5(tmp3[10]).Text;
  return closure_7(View, obj2);
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
  Text = count(textColor[10]).Text;
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
let closure_13 = { code: "(function AnimatedCounterTsx1(finished){let[state,TransitionStates,scheduleOnRN,cleanUp]=this.__closure;if(finished&&state===TransitionStates.YEETED){scheduleOnRN(cleanUp);}})" };
let closure_14 = { code: "(function AnimatedCounterTsx2(){let[withSpring,interpolate,animationState,ANIMATION_INPUT,animationOutput,springConfig,_worklet_10398437053283_init_data,state,TransitionStates,scheduleOnRN,cleanUp]=this.__closure;return{transform:[{translateY:withSpring(interpolate(animationState.get(),ANIMATION_INPUT,animationOutput),springConfig,'respect-motion-settings',function AnimatedCounterTsx1Factory([_worklet_10398437053283_init_data,state,TransitionStates,scheduleOnRN,cleanUp]){const AnimatedCounterTsx1=function(finished){if(finished&&state===TransitionStates.YEETED){scheduleOnRN(cleanUp);}};AnimatedCounterTsx1.__closure=[state,TransitionStates,scheduleOnRN,cleanUp];AnimatedCounterTsx1.__workletHash=10398437053283;AnimatedCounterTsx1.__initData=_worklet_10398437053283_init_data;return AnimatedCounterTsx1;}([_worklet_10398437053283_init_data,state,TransitionStates,scheduleOnRN,cleanUp]))}]};})" };
const memoResult = react.memo(function AnimatedCounter(springConfig) {
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
    str2 = "body-sm/normal";
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
