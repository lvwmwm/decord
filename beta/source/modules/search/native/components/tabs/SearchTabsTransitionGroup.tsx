// Module ID: 16545
// Function ID: 16546
// Name: SearchTabsTransitionGroup
// Dependencies: [19, 21, 2021, 12111, 4566, 4540, 5280, 5284, 16435, 2]
// Exports: default

// Module 16545 (SearchTabsTransitionGroup)
import Fragment from "Fragment" /* 21 */;
import native from "native" /* 4540 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import spring from "spring" /* 5280 */;
import springPresets from "springPresets" /* 5284 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let set;

function getItemKey(items) {
  items = items.items;
  const mapped = items.map((id) => id.id);
  return mapped.join("-");
}
function AnimatedTabs(state) {
  let Tabs;
  let gesture;
  let obj3;
  let tmp14;
  state = state.state;
  const transitionState = state.transitionState;
  const cleanUp = state.cleanUp;
  let sharedValue;
  let context;
  let tmp = state;
  const useSharedValue = state(cleanUp[4]).useSharedValue;
  let num = 0;
  const tmp3 = state(cleanUp[4]);
  if (transitionState === state(cleanUp[5]).TransitionStates.MOUNTED) {
    num = 1;
  }
  sharedValue = useSharedValue(num);
  let fn = function f() {
    let fn;
    let springStandard;
    let str;
    let value;
    let withSpring;
    let obj = { opacity: withSpring(value, springStandard, "respect-motion-settings", fn), position: str };
    let tmp = spring;
    withSpring = tmp.withSpring;
    value = sharedValue.get();
    fn = function t(arg0) {
      const tmp = arg0 && transitionState === state(cleanUp[5]).TransitionStates.YEETED;
      if (tmp) {
        const obj = state(cleanUp[4]);
        obj.runOnJS(closure_1_2)();
      }
    };
    const obj2 = { transitionState, TransitionStates: native.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, cleanUp };
    springStandard = springPresets.springStandard;
    fn.__closure = obj2;
    fn.__workletHash = 15209468679721;
    fn.__initData = __initData;
    str = "absolute";
    if (1 === sharedValue.get()) {
      str = "relative";
    }
    return obj;
  };
  const tmpResult = tmp(cleanUp[4]);
  let obj = { withSpring: tmp(tmp2[6]).withSpring, opacity: sharedValue, springStandard: tmp(tmp2[7]).springStandard, transitionState, TransitionStates: tmp(tmp2[5]).TransitionStates, runOnJS: tmp(tmp2[4]).runOnJS, cleanUp };
  fn.__closure = obj;
  fn.__workletHash = 10740262883803;
  fn.__initData = __initData;
  const items = [sharedValue, transitionState];
  const animatedStyle = tmpResult.useAnimatedStyle(fn);
  const effect = sharedValue.useEffect(() => {
    let num = 1;
    set = sharedValue.set;
    if (transitionState === native.TransitionStates.YEETED) {
      num = 0;
    }
    const result = set(num);
  }, items);
  const SearchResultExactCountEnabled = tmp(cleanUp[2]).SearchResultExactCountEnabled;
  const setting = SearchResultExactCountEnabled.useSetting();
  const items1 = [setting];
  const callback = sharedValue.useCallback((toLocaleString) => {
    const tmp = setting;
    if (!tmp) {
      let combined;
      if (toLocaleString > 1000) {
        const _HermesInternal = HermesInternal;
        const obj = state(cleanUp[3]);
        combined = "(" + obj.defaultCountFormatter(1000) + "+)";
      }
      return combined;
    }
    const obj2 = state(cleanUp[3]);
    combined = "(" + obj2.defaultCountFormatter(toLocaleString) + ")";
  }, items1);
  context = sharedValue.useContext(tmp(tmp2[8]).SwipeForMemberListContext);
  const fn2 = function h() {
    if (context != null) {
      const disallowGesture = context.disallowGesture;
      const result = disallowGesture.set(false);
    }
  };
  fn2.__closure = { swipeForMemberListContext: context };
  fn2.__workletHash = 5080152010224;
  fn2.__initData = __initData2;
  const items2 = [context];
  const callback1 = sharedValue.useCallback(fn2, items2);
  const tmpResult2 = tmp(cleanUp[4]);
  class F {
    constructor() {
      const scrollOffset = state.scrollOffset;
      return scrollOffset.get() > 0;
    }
  }
  F.__closure = { state };
  F.__workletHash = 7791091456487;
  F.__initData = __initData3;
  const fn3 = function w(arg0, arg1) {
    if (arg0 !== arg1) {
      if (context != null) {
        const disallowGesture = context.disallowGesture;
        const result = disallowGesture.set(arg0);
      }
    }
  };
  fn3.__closure = { swipeForMemberListContext: context };
  fn3.__workletHash = 15386779064911;
  fn3.__initData = __initData4;
  const animatedReaction = tmpResult2.useAnimatedReaction(F, fn3);
  let obj2 = { style: animatedStyle, children: context(Tabs, obj3) };
  const View = transitionState(tmp2[4]).View;
  obj3 = { state, grow: false, formatCount: callback, simultaneousHandlers: gesture, onEndDrag: tmp14 };
  gesture = undefined;
  Tabs = tmp(tmp2[3]).Tabs;
  if (context != null) {
    gesture = context.gesture;
  }
  tmp14 = undefined;
  if (null != context) {
    tmp14 = callback1;
  }
  return context(View, obj2);
}
function renderItem(arg0, state, transitionState, cleanUp) {
  return <AnimatedTabs key={arg0} state={arg1} transitionState={arg2} cleanUp={arg3} />;
}
const jsx = Fragment.jsx;
const __initData = { code: "function SearchTabsTransitionGroupTsx1(){const{withSpring,opacity,springStandard,transitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;return{opacity:withSpring(opacity.get(),springStandard,'respect-motion-settings',function(finished){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanUp)();}}),position:opacity.get()===1?'relative':'absolute'};}" };
let closure_7 = { code: "function SearchTabsTransitionGroupTsx2(finished){const{transitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanUp)();}}" };
const __initData2 = { code: "function SearchTabsTransitionGroupTsx3(){const{swipeForMemberListContext}=this.__closure;var _swipeForMemberListCo;(_swipeForMemberListCo=swipeForMemberListContext)===null||_swipeForMemberListCo===void 0||_swipeForMemberListCo.disallowGesture.set(false);}" };
const __initData3 = { code: "function SearchTabsTransitionGroupTsx4(){const{state}=this.__closure;return state.scrollOffset.get()>0;}" };
const __initData4 = { code: "function SearchTabsTransitionGroupTsx5(isOffsetFromStart,prevIsOffsetFromStart){const{swipeForMemberListContext}=this.__closure;if(isOffsetFromStart!==prevIsOffsetFromStart){var _swipeForMemberListCo;(_swipeForMemberListCo=swipeForMemberListContext)===null||_swipeForMemberListCo===void 0||_swipeForMemberListCo.disallowGesture.set(isOffsetFromStart);}}" };
let result = size.fileFinishedImporting("modules/search/native/components/tabs/SearchTabsTransitionGroup.tsx");

export default function SearchTabsTransitionGroup(state) {
  const items = [state.state];
  return jsx(native.TransitionGroup, { items, getItemKey, renderItem });
};
