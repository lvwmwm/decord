// Module ID: 19369
// Function ID: 19370
// Name: SearchTabsTransitionGroup
// Dependencies: [19, 21, 5068, 13153, 1652, 5314, 5876, 5877, 1705, 14737, 2]
// Exports: default

// Module 19369 (SearchTabsTransitionGroup)
import Fragment from "Fragment" /* 21 */;
import native from "native" /* 5314 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let gesture, set, tmp2;

function getItemKey(items) {
  items = items.items;
  const mapped = items.map((id) => id.id);
  return mapped.join("-");
}
function AnimatedTabs(cleanUp) {
  let state;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp21;
  let tmp22;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp31;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  let transitionState;
  ({ state, transitionState } = cleanUp);
  let sharedValue;
  let tmp = transitionState;
  cleanUp = cleanUp.cleanUp;
  let tmp3 = transitionState(1652);
  const useSharedValue = tmp3.useSharedValue;
  let num = 0;
  if (transitionState === transitionState(5314).TransitionStates.MOUNTED) {
    num = 1;
  }
  sharedValue = useSharedValue(num);
  let items = [closure_7, , , , , , , , ];
  const useAnimatedStyle = tmp(1652).useAnimatedStyle;
  tmp(1652);
  items[1] = tmp(5876).withSpring;
  items[2] = sharedValue;
  items[3] = tmp(5877).springStandard;
  items[4] = closure_6;
  items[5] = transitionState;
  items[6] = tmp(5314).TransitionStates;
  items[7] = tmp(1705).scheduleOnRN;
  items[8] = cleanUp;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14] = items;
  class SearchTabsTransitionGroupTsx2 {
    constructor() {
      let _undefined;
      let str;
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp7;
      let tmp8;
      let tmp = c0;
      const value = _undefined.get();
      const items = [c3, c4, c5, c6, c7];
      c0 = undefined;
      const obj = _undefined;
      _undefined = undefined;
      const tmp3 = c2;
      c2 = undefined;
      c3 = undefined;
      [tmp4, tmp5, tmp6, tmp7, tmp8] = items;
      const obj2 = { opacity: tmp(value, tmp3, "respect-motion-settings", SearchTabsTransitionGroupTsx1), position: str };
      class SearchTabsTransitionGroupTsx1 {
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
      SearchTabsTransitionGroupTsx1.__closure = items1;
      SearchTabsTransitionGroupTsx1.__workletHash = 537193228402;
      SearchTabsTransitionGroupTsx1.__initData = tmp4;
      str = "absolute";
      if (1 === obj.get()) {
        str = "relative";
      }
      return obj2;
    }
  }
  let items1 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14];
  SearchTabsTransitionGroupTsx2.__closure = items1;
  SearchTabsTransitionGroupTsx2.__workletHash = 1226548959062;
  SearchTabsTransitionGroupTsx2.__initData = tmp6;
  const items2 = [sharedValue, transitionState];
  const animatedStyle = useAnimatedStyle(SearchTabsTransitionGroupTsx2);
  const effect = react.useEffect(() => {
    let num = 1;
    set = sharedValue.set;
    if (transitionState === native.TransitionStates.YEETED) {
      num = 0;
    }
    const result = set(num);
  }, items2);
  const SearchResultExactCountEnabled = tmp(5068).SearchResultExactCountEnabled;
  const setting = SearchResultExactCountEnabled.useSetting();
  const items3 = [setting];
  const callback = react.useCallback((toLocaleString) => {
    const tmp = setting;
    if (!tmp) {
      let combined;
      if (toLocaleString > 1000) {
        const _HermesInternal = HermesInternal;
        const obj = transitionState(dependencyMap[3]);
        combined = "(" + obj.defaultCountFormatter(1000) + "+)";
      }
      return combined;
    }
    const obj2 = transitionState(dependencyMap[3]);
    combined = "(" + obj2.defaultCountFormatter(toLocaleString) + ")";
  }, items3);
  const context = react.useContext(tmp(14737).SwipeForMemberListContext);
  const items4 = [closure_8, context];
  c0 = undefined;
  [tmp21, tmp22] = items4;
  class SearchTabsTransitionGroupTsx3 {
    constructor() {
      if (_undefined != null) {
        const disallowGesture = _undefined.disallowGesture;
        const result = disallowGesture.set(false);
      }
    }
  }
  const items5 = [tmp22];
  SearchTabsTransitionGroupTsx3.__closure = items5;
  SearchTabsTransitionGroupTsx3.__workletHash = 14662172823401;
  SearchTabsTransitionGroupTsx3.__initData = tmp21;
  const items6 = [context];
  const callback1 = react.useCallback(SearchTabsTransitionGroupTsx3, items6);
  const items7 = [closure_9, state];
  c0 = undefined;
  [tmp24, tmp25] = items7;
  const tmpResult2 = tmp(1652);
  class SearchTabsTransitionGroupTsx4 {
    constructor() {
      const scrollOffset = _undefined.scrollOffset;
      return scrollOffset.get() > 0;
    }
  }
  const items8 = [tmp25];
  SearchTabsTransitionGroupTsx4.__closure = items8;
  SearchTabsTransitionGroupTsx4.__workletHash = 470062012350;
  SearchTabsTransitionGroupTsx4.__initData = tmp24;
  const items9 = [closure_10, context];
  c0 = undefined;
  [tmp26, tmp27] = items9;
  class SearchTabsTransitionGroupTsx5 {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        if (_undefined != null) {
          const disallowGesture = _undefined.disallowGesture;
          const result = disallowGesture.set(arg0);
        }
      }
    }
  }
  const items10 = [tmp27];
  SearchTabsTransitionGroupTsx5.__closure = items10;
  SearchTabsTransitionGroupTsx5.__workletHash = 15943463641590;
  SearchTabsTransitionGroupTsx5.__initData = tmp26;
  const animatedReaction = tmpResult2.useAnimatedReaction(SearchTabsTransitionGroupTsx4, SearchTabsTransitionGroupTsx5);
  const View = sharedValue(1652).View;
  let obj2 = { state, grow: false, formatCount: callback, simultaneousHandlers: gesture, onEndDrag: tmp31 };
  gesture = undefined;
  const Tabs = tmp(13153).Tabs;
  if (context != null) {
    gesture = context.gesture;
  }
  tmp31 = undefined;
  if (null != context) {
    tmp31 = callback1;
  }
  return <View style={animatedStyle}>{null}</View>;
}
function renderItem(arg0, state, transitionState, cleanUp) {
  return <AnimatedTabs key={arg0} state={arg1} transitionState={arg2} cleanUp={arg3} />;
}
const jsx = Fragment.jsx;
let closure_6 = { code: "(function SearchTabsTransitionGroupTsx1(finished){let[transitionState,TransitionStates,scheduleOnRN,cleanUp]=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){scheduleOnRN(cleanUp);}})" };
let closure_7 = { code: "(function SearchTabsTransitionGroupTsx2(){let[withSpring,opacity,springStandard,_worklet_537193228402_init_data,transitionState,TransitionStates,scheduleOnRN,cleanUp]=this.__closure;return{opacity:withSpring(opacity.get(),springStandard,'respect-motion-settings',function SearchTabsTransitionGroupTsx1Factory([_worklet_537193228402_init_data,transitionState,TransitionStates,scheduleOnRN,cleanUp]){const SearchTabsTransitionGroupTsx1=function(finished){if(finished&&transitionState===TransitionStates.YEETED){scheduleOnRN(cleanUp);}};SearchTabsTransitionGroupTsx1.__closure=[transitionState,TransitionStates,scheduleOnRN,cleanUp];SearchTabsTransitionGroupTsx1.__workletHash=537193228402;SearchTabsTransitionGroupTsx1.__initData=_worklet_537193228402_init_data;return SearchTabsTransitionGroupTsx1;}([_worklet_537193228402_init_data,transitionState,TransitionStates,scheduleOnRN,cleanUp])),position:opacity.get()===1?'relative':'absolute'};})" };
let closure_8 = { code: "(function SearchTabsTransitionGroupTsx3(){let[swipeForMemberListContext]=this.__closure;var _swipeForMemberListCo;(_swipeForMemberListCo=swipeForMemberListContext)===null||_swipeForMemberListCo===void 0||_swipeForMemberListCo.disallowGesture.set(false);})" };
let closure_9 = { code: "(function SearchTabsTransitionGroupTsx4(){let[state]=this.__closure;return state.scrollOffset.get()>0;})" };
let closure_10 = { code: "(function SearchTabsTransitionGroupTsx5(isOffsetFromStart,prevIsOffsetFromStart){let[swipeForMemberListContext]=this.__closure;if(isOffsetFromStart!==prevIsOffsetFromStart){var _swipeForMemberListCo;(_swipeForMemberListCo=swipeForMemberListContext)===null||_swipeForMemberListCo===void 0||_swipeForMemberListCo.disallowGesture.set(isOffsetFromStart);}})" };
let result = size.fileFinishedImporting("modules/search/native/components/tabs/SearchTabsTransitionGroup.tsx");

export default function SearchTabsTransitionGroup(state) {
  const items = [state.state];
  return jsx(native.TransitionGroup, { items, getItemKey, renderItem });
};
