// Module ID: 15457
// Function ID: 118770
// Name: getItemKey
// Dependencies: [31, 33, 3803, 11676, 3991, 4476, 4542, 4546, 15363, 11676, 2]
// Exports: default

// Module 15457 (getItemKey)
import result from "result";
import { jsx } from "jsxProd";

const require = arg1;
function getItemKey(items) {
  items = items.items;
  const mapped = items.map((id) => id.id);
  return mapped.join("-");
}
function AnimatedTabs(state) {
  state = state.state;
  const transitionState = state.transitionState;
  const cleanUp = state.cleanUp;
  let sharedValue;
  let context;
  let obj = state(cleanUp[4]);
  let num = 0;
  if (transitionState === state(cleanUp[5]).TransitionStates.MOUNTED) {
    num = 1;
  }
  sharedValue = obj.useSharedValue(num);
  let obj1 = state(cleanUp[4]);
  let fn = function f() {
    let obj = {};
    const value = sharedValue.get();
    const fn = function t(arg0) {
      let tmp = arg0;
      if (arg0) {
        tmp = outer1_1 === state(cleanUp[5]).TransitionStates.YEETED;
      }
      if (tmp) {
        state(cleanUp[4]).runOnJS(outer1_2)();
        const obj = state(cleanUp[4]);
      }
    };
    obj = { transitionState, TransitionStates: state(cleanUp[5]).TransitionStates, runOnJS: state(cleanUp[4]).runOnJS, cleanUp };
    fn.__closure = obj;
    fn.__workletHash = 15209468679721;
    fn.__initData = outer1_6;
    obj.opacity = state(cleanUp[6]).withSpring(value, state(cleanUp[7]).springStandard, "respect-motion-settings", fn);
    let str = "absolute";
    if (1 === sharedValue.get()) {
      str = "relative";
    }
    obj.position = str;
    return obj;
  };
  obj = { withSpring: state(cleanUp[6]).withSpring, opacity: sharedValue, springStandard: state(cleanUp[7]).springStandard, transitionState, TransitionStates: state(cleanUp[5]).TransitionStates, runOnJS: state(cleanUp[4]).runOnJS, cleanUp };
  fn.__closure = obj;
  fn.__workletHash = 10740262883803;
  fn.__initData = closure_5;
  let items = [sharedValue, transitionState];
  const animatedStyle = obj1.useAnimatedStyle(fn);
  const effect = sharedValue.useEffect(() => {
    let num = 1;
    if (transitionState === state(cleanUp[5]).TransitionStates.YEETED) {
      num = 0;
    }
    const result = sharedValue.set(num);
  }, items);
  context = sharedValue.useContext(state(cleanUp[8]).SwipeForMemberListContext);
  const fn2 = function h() {
    if (null != context) {
      const disallowGesture = context.disallowGesture;
      const result = disallowGesture.set(false);
    }
  };
  fn2.__closure = { swipeForMemberListContext: context };
  fn2.__workletHash = 5080152010224;
  fn2.__initData = closure_7;
  const items1 = [context];
  const callback = sharedValue.useCallback(fn2, items1);
  const tmp4 = (function useCountFormatter() {
    const setting = state(cleanUp[2]).SearchResultExactCountEnabled.useSetting();
    const items = [setting];
    return sharedValue.useCallback((toLocaleString) => {
      if (!setting) {
        if (toLocaleString > 1000) {
          const _HermesInternal = HermesInternal;
          let combined = "(" + state(cleanUp[3]).defaultCountFormatter(1000) + "+)";
          const obj = state(cleanUp[3]);
        }
        return combined;
      }
      combined = "(" + state(cleanUp[3]).defaultCountFormatter(toLocaleString) + ")";
    }, items);
  })();
  class F {
    constructor() {
      scrollOffset = state.scrollOffset;
      return scrollOffset.get() > 0;
    }
  }
  F.__closure = { state };
  F.__workletHash = 7791091456487;
  F.__initData = closure_8;
  const fn3 = function w(arg0, arg1) {
    if (arg0 !== arg1) {
      if (null != context) {
        const disallowGesture = context.disallowGesture;
        const result = disallowGesture.set(arg0);
      }
    }
  };
  fn3.__closure = { swipeForMemberListContext: context };
  fn3.__workletHash = 15386779064911;
  fn3.__initData = closure_9;
  const animatedReaction = state(cleanUp[4]).useAnimatedReaction(F, fn3);
  obj = { style: animatedStyle };
  obj1 = { state, grow: false, formatCount: tmp4 };
  let gesture;
  if (null != context) {
    gesture = context.gesture;
  }
  obj1.simultaneousHandlers = gesture;
  let tmp11;
  if (null != context) {
    tmp11 = callback;
  }
  obj1.onEndDrag = tmp11;
  obj.children = context(state(cleanUp[9]).Tabs, obj1);
  return context(transitionState(cleanUp[4]).View, obj);
}
function renderItem(arg0, state, transitionState, cleanUp) {
  return <AnimatedTabs key={arg0} state={arg1} transitionState={arg2} cleanUp={arg3} />;
}
let closure_5 = { code: "function SearchTabsTransitionGroupTsx1(){const{withSpring,opacity,springStandard,transitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;return{opacity:withSpring(opacity.get(),springStandard,'respect-motion-settings',function(finished){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanUp)();}}),position:opacity.get()===1?'relative':'absolute'};}" };
let closure_6 = { code: "function SearchTabsTransitionGroupTsx2(finished){const{transitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(cleanUp)();}}" };
let closure_7 = { code: "function SearchTabsTransitionGroupTsx3(){const{swipeForMemberListContext}=this.__closure;var _swipeForMemberListCo;(_swipeForMemberListCo=swipeForMemberListContext)===null||_swipeForMemberListCo===void 0||_swipeForMemberListCo.disallowGesture.set(false);}" };
let closure_8 = { code: "function SearchTabsTransitionGroupTsx4(){const{state}=this.__closure;return state.scrollOffset.get()>0;}" };
let closure_9 = { code: "function SearchTabsTransitionGroupTsx5(isOffsetFromStart,prevIsOffsetFromStart){const{swipeForMemberListContext}=this.__closure;if(isOffsetFromStart!==prevIsOffsetFromStart){var _swipeForMemberListCo;(_swipeForMemberListCo=swipeForMemberListContext)===null||_swipeForMemberListCo===void 0||_swipeForMemberListCo.disallowGesture.set(isOffsetFromStart);}}" };
let result = require("explicitContentFromProto").fileFinishedImporting("modules/search/native/components/tabs/SearchTabsTransitionGroup.tsx");

export default function SearchTabsTransitionGroup(state) {
  const items = [state.state];
  return jsx(require(4476) /* _createForOfIteratorHelperLoose */.TransitionGroup, { items, getItemKey, renderItem });
};
