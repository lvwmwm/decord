// Module ID: 16797
// Function ID: 16798
// Name: QuestHome
// Dependencies: [32, 19, 17, 5006, 9634, 7834, 7855, 6768, 1084, 21, 5005, 587, 558, 576, 504, 1503, 16798, 584, 7914, 7921, 1125, 5281, 16856, 6731, 7549, 9636, 16858, 5271, 16881, 16899, 9628, 1631, 7840, 9637, 6775, 7830, 5701, 1264, 1272, 6016, 16940, 14683, 14605, 16941, 16905, 1504, 6771, 16800, 7854, 16873, 16878, 14614, 16942, 17019, 5034, 7280, 2]

// Module 16797 (QuestHome)
import react2 from "react" /* 576 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1125 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import useNavigation from "useNavigation" /* 1503 */;
import Text_Text from "Text/Text" /* 5271 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5701 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6731 */;
import QuestConstants from "QuestConstants" /* 6768 */;
import QuestTypes from "QuestTypes" /* 6771 */;
import AdCreativeType from "AdCreativeType" /* 6775 */;
import QuestDataUtils from "QuestDataUtils" /* 7830 */;
import hooks_QuestHooks from "hooks/QuestHooks" /* 9636 */;
import QuestActionCreators from "QuestActionCreators" /* 9637 */;
import QuestContentImpressionTracker from "QuestContentImpressionTracker" /* 14614 */;
import BountiesModalActionCreatorsDefault from "BountiesModalActionCreators" /* 16798 */;
import BountiesModalTypes from "BountiesModalTypes" /* 16800 */;
import QuestHomeEmptyStateDefault from "QuestHomeEmptyState" /* 16856 */;
import QuestHomeBountiesDefault from "QuestHomeBounties" /* 16858 */;
import HexagonCampaignQuestHomeHeaderDefault from "HexagonCampaignQuestHomeHeader" /* 16881 */;
import OrbsArcadeQuestHomeSectionDefault from "OrbsArcadeQuestHomeSection" /* 16899 */;
import QuestHomeOpenTriggerPoint2 from "QuestHomeOpenTriggerPoint" /* 16940 */;
import QuestHomeRoundtripTrackerDefault from "QuestHomeRoundtripTracker" /* 17019 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5006 */;
import QuestHomeNavigationStore from "QuestHomeNavigationStore" /* 9634 */;
import QuestStore from "QuestStore" /* 7834 */;
import QuestUtmStore from "QuestUtmStore" /* 7855 */;
import Constants from "Constants" /* 1084 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5005 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap, item, navigation, num, showModalResult;

let StyleSheet;
let closure_12;
let closure_14;
let closure_15;
let hasOwnProperty;
let map1;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let react = react_mod;
({ View: hasOwnProperty, ActivityIndicator: metroRequire, StyleSheet } = react_native);
const QuestsExperimentLocations = QuestConstants.QuestsExperimentLocations;
({ AnalyticEvents: closure_12, UserSettingsSections: map1 } = Constants);
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flex: 1 }, loadingContainer: obj2, sectionHeader: obj3, previewButton: obj4, sectionHeaderWithTag: obj5 };
obj2 = { justifyContent: "center", alignItems: "center" };
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { marginBottom: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
obj4 = { marginBottom: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, backgroundColor: "transparent" };
obj5 = { gap: nativeDefault.space.PX_4 };
let closure_16 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let shopCarouselConfig = ReactCompilerGating.isReactCompilerEnabled() ? (function useScrollAndLayoutCallbacks(scrollToIndex) {
  let closure_4;
  let ref;
  let tmp11;
  let tmp4;
  let tmp5;
  let tmp9;
  const tmp = scrollToIndex;
  let tmp2 = ref;
  let obj = scrollToIndex(ref[13]);
  const cResult = obj.c(21);
  scrollToIndex = scrollToIndex.scrollToIndex;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp6 = R;
    const items = [R];
    const fn = function l() {
      return R.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = fn;
    tmp4 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(tmp2[14]);
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  ref = react.useRef(null);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { parent: { scrollY: 0 }, children: {} };
    cResult[2] = obj2;
    tmp9 = obj2;
  } else {
    tmp9 = cResult[2];
  }
  const ref1 = obj3.useRef(tmp9);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function _(arg0) {
      const keys = Object.keys(ref1.current.children);
      const iter = keys[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp3 = nextResult;
        let tmp4 = null != arg0;
        if (tmp4) {
          tmp4 = tmp3 !== arg0;
        }
        if (!tmp4) {
          let tmp8 = ref1.current.children[tmp3];
          if (tmp8 != null) {
            let calculateVisibility = tmp8.calculateVisibility;
            if (calculateVisibility != null) {
              let calculateVisibilityResult = calculateVisibility();
            }
          }
        }
        continue;
      }
    };
    cResult[3] = fn2;
    tmp11 = fn2;
  } else {
    tmp11 = cResult[3];
  }
  react = tmp11;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const fn3 = function v(nativeEvent) {
      ref1.current.parent.scrollY = nativeEvent.nativeEvent.contentOffset.y;
      closure_4();
    };
    cResult[4] = fn3;
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const fn4 = function y(nativeEvent) {
      ref1.current.parent.layout = nativeEvent.nativeEvent.layout;
      closure_4();
    };
    cResult[5] = fn4;
  }
  const tmp14 = ref1(react.useState(false), 2);
  const first = tmp14[0];
  let closure_6 = tmp14[1];
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class L {
      constructor() {
        closure_6(true);
      }
    }
    cResult[6] = L;
  } else {
    class L {
      constructor() {
        closure_6(true);
      }
    }
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class B {
      constructor(nativeEvent, arg1) {
        const children = ref1.current.children;
        const obj = { layout: nativeEvent.nativeEvent.layout };
        const merged = Object.assign(ref1.current.children[arg1]);
        children[arg1] = obj;
        closure_4(arg1);
      }
    }
    cResult[7] = B;
  } else {
    class B {
      constructor(nativeEvent, arg1) {
        const children = ref1.current.children;
        const obj = { layout: nativeEvent.nativeEvent.layout };
        const merged = Object.assign(ref1.current.children[arg1]);
        children[arg1] = obj;
        closure_4(arg1);
      }
    }
  }
  if (cResult[8] !== stateFromStores) {
    class R {
      constructor(index) {
        if (null != ref.current) {
          const current = tmp.current;
          scrollToIndex = current.scrollToIndex;
          const obj = { index, animated: !stateFromStores, viewOffset: -nativeDefault.space.PX_8 };
          scrollToIndex(obj);
        }
      }
    }
    cResult[8] = stateFromStores;
    cResult[9] = R;
  } else {
    class R {
      constructor(index) {
        if (null != ref.current) {
          const current = tmp.current;
          scrollToIndex = current.scrollToIndex;
          const obj = { index, animated: !stateFromStores, viewOffset: -nativeDefault.space.PX_8 };
          scrollToIndex(obj);
        }
      }
    }
  }
  R = tmp18;
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor(index) {
        if (null != ref.current) {
          const current = tmp.current;
          scrollToIndex = current.scrollToIndex;
          const obj = { index, animated: !stateFromStores, viewOffset: -nativeDefault.space.PX_8 };
          scrollToIndex(obj);
        }
      }
    }
    cResult[10] = tmp20;
  } else {
    class R {
      constructor(index) {
        if (null != ref.current) {
          const current = tmp.current;
          scrollToIndex = current.scrollToIndex;
          const obj = { index, animated: !stateFromStores, viewOffset: -nativeDefault.space.PX_8 };
          scrollToIndex(obj);
        }
      }
    }
  }
  if (cResult[11] === first) {
    class R {
      constructor(index) {
        if (null != ref.current) {
          const current = tmp.current;
          scrollToIndex = current.scrollToIndex;
          const obj = { index, animated: !stateFromStores, viewOffset: -nativeDefault.space.PX_8 };
          scrollToIndex(obj);
        }
      }
    }
  }
  const fn5 = function x() {
    const tmp2 = null != scrollToIndex && -1 !== tmp && first;
    if (tmp2) {
      R(scrollToIndex);
      QuestHomeNavigationStore.setState({ scrollToQuestId: null });
    }
  };
  cResult[11] = first;
  cResult[12] = tmp18;
  cResult[13] = scrollToIndex;
  cResult[14] = fn5;
}) : (function useScrollAndLayoutCallbacks(scrollToIndex) {
  scrollToIndex = scrollToIndex.scrollToIndex;
  let scrollViewRef;
  let callback;
  let callback5;
  let obj = scrollToIndex(scrollViewRef[14]);
  const items = [callback5];
  const stateFromStores = obj.useStateFromStores(items, () => callback5.useReducedMotion);
  scrollViewRef = callback.useRef(null);
  const visibilityRef = callback.useRef({ parent: { scrollY: 0 }, children: {} });
  callback = callback.useCallback((arg0) => {
    const keys = Object.keys(visibilityRef.current.children);
    const iter = keys[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      let tmp4 = null != arg0;
      if (tmp4) {
        tmp4 = tmp3 !== arg0;
      }
      if (!tmp4) {
        let tmp8 = visibilityRef.current.children[tmp3];
        if (tmp8 != null) {
          let calculateVisibility = tmp8.calculateVisibility;
          if (calculateVisibility != null) {
            let calculateVisibilityResult = calculateVisibility();
          }
        }
      }
      continue;
    }
  }, []);
  const items1 = [callback];
  const items2 = [callback];
  const handleListScroll = callback.useCallback((nativeEvent) => {
    visibilityRef.current.parent.scrollY = nativeEvent.nativeEvent.contentOffset.y;
    callback();
  }, items1);
  const handleListLayout = callback.useCallback((nativeEvent) => {
    visibilityRef.current.parent.layout = nativeEvent.nativeEvent.layout;
    callback();
  }, items2);
  let tmp7 = visibilityRef(callback.useState(false), 2);
  const first = tmp7[0];
  let closure_6 = tmp7[1];
  const items3 = [callback];
  const handleListLoad = callback.useCallback(() => {
    closure_6(true);
  }, []);
  const items4 = [stateFromStores];
  const handleQuestCardLayout = callback.useCallback((nativeEvent, arg1) => {
    const children = visibilityRef.current.children;
    const obj = { layout: nativeEvent.nativeEvent.layout };
    const merged = Object.assign(visibilityRef.current.children[arg1]);
    children[arg1] = obj;
    callback(arg1);
  }, items3);
  callback5 = callback.useCallback((index) => {
    if (null != scrollViewRef.current) {
      const current = tmp.current;
      scrollToIndex = current.scrollToIndex;
      const obj = { index, animated: !stateFromStores, viewOffset: -nativeDefault.space.PX_8 };
      scrollToIndex(obj);
    }
  }, items4);
  const items5 = [callback];
  const items6 = [first, stateFromStores, scrollToIndex, callback5];
  const handleHeaderLayout = callback.useCallback((nativeEvent) => {
    visibilityRef.current.parent.firstItemOffset = nativeEvent.nativeEvent.layout.height;
    callback();
  }, items5);
  const effect = callback.useEffect(() => {
    const tmp2 = null != scrollToIndex && -1 !== tmp && first;
    if (tmp2) {
      callback5(scrollToIndex);
      QuestHomeNavigationStore.setState({ scrollToQuestId: null });
    }
  }, items6);
  return { scrollViewRef, handleListScroll, handleListLayout, handleListLoad, handleQuestCardLayout, handleHeaderLayout, visibilityRef };
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSurveyActions(bountiesAvailable) {
  let closure_2;
  let closure_4;
  let tmp10;
  let tmp12;
  let tmp13;
  let tmp3;
  let tmp4;
  let tmp6;
  let tmp7;
  let tmp9;
  let obj = bountiesAvailable(576);
  const cResult = obj.c(10);
  bountiesAvailable = bountiesAvailable.bountiesAvailable;
  const obj2 = bountiesAvailable(1503);
  navigation = obj2.useNavigation();
  dependencyMap = react.useRef(false);
  let closure_3 = react.useRef(false);
  react = react.useRef(false);
  if (cResult[0] !== bountiesAvailable) {
    const fn = function o() {
      const tmp = bountiesAvailable;
      if (tmp) {
        closure_2.current = true;
      }
    };
    const items = [bountiesAvailable];
    cResult[0] = bountiesAvailable;
    cResult[1] = fn;
    cResult[2] = items;
    tmp4 = items;
    tmp3 = fn;
  } else {
    tmp3 = cResult[1];
    tmp4 = cResult[2];
  }
  const effect = obj3.useEffect(tmp3, tmp4);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function l() {
      function handleBountiesModalPush(key) {
        if (key.key === bountiesAvailable(closure_2[16]).BOUNTIES_MODAL_KEY) {
          closure_1_3.current = true;
        }
      }
      let obj = navigation(closure_2[17]);
      const subscription = obj.subscribe("MODAL_PUSH", handleBountiesModalPush);
      return () => {
        const obj = DispatcherDefault;
        obj.unsubscribe("MODAL_PUSH", handleBountiesModalPush);
      };
    };
    const items1 = [];
    cResult[3] = fn2;
    cResult[4] = items1;
    tmp7 = items1;
    tmp6 = fn2;
  } else {
    tmp6 = cResult[3];
    tmp7 = cResult[4];
  }
  const effect1 = obj3.useEffect(tmp6, tmp7);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const fn3 = function c() {
      function handleClaimSuccess() {
        closure_1_4.current = true;
      }
      let obj = navigation(closure_2[17]);
      const subscription = obj.subscribe("BOUNTIES_CLAIM_REWARD_SUCCESS", handleClaimSuccess);
      return () => {
        const obj = DispatcherDefault;
        obj.unsubscribe("BOUNTIES_CLAIM_REWARD_SUCCESS", handleClaimSuccess);
      };
    };
    const items2 = [];
    cResult[5] = fn3;
    cResult[6] = items2;
    tmp10 = items2;
    tmp9 = fn3;
  } else {
    tmp9 = cResult[5];
    tmp10 = cResult[6];
  }
  const effect2 = obj3.useEffect(tmp9, tmp10);
  if (cResult[7] !== navigation) {
    const fn4 = function f() {
      let ref;
      let ref2;
      let ref3;
      return navigation.addListener("beforeRemove", () => {
        if (ref.current) {
          if (ref3.current) {
            const obj = bountiesAvailable(ref[18]);
            obj.fireSurveyAction(bountiesAvailable(ref[19]).SurveyActionTypes.BOUNTY_SESSION_COMPLETED);
          } else {
            const current = ref2.current;
            const fireSurveyAction = bountiesAvailable(ref[18]).fireSurveyAction;
            bountiesAvailable(ref[18]);
            const SurveyActionTypes = bountiesAvailable(ref[19]).SurveyActionTypes;
            if (current) {
              fireSurveyAction(SurveyActionTypes.BOUNTY_ABANDONED);
            } else {
              fireSurveyAction(SurveyActionTypes.BOUNTY_IMMEDIATE_DISMISSAL);
            }
          }
        }
      });
    };
    const items3 = [navigation];
    cResult[7] = navigation;
    cResult[8] = fn4;
    cResult[9] = items3;
    tmp13 = items3;
    tmp12 = fn4;
  } else {
    tmp12 = cResult[8];
    tmp13 = cResult[9];
  }
  const effect3 = obj3.useEffect(tmp12, tmp13);
}) : (function useSurveyActions(bountiesAvailable) {
  let closure_2;
  let closure_4;
  bountiesAvailable = bountiesAvailable.bountiesAvailable;
  react = undefined;
  let obj = bountiesAvailable(1503);
  navigation = obj.useNavigation();
  dependencyMap = react.useRef(false);
  let closure_3 = react.useRef(false);
  react = react.useRef(false);
  const items = [bountiesAvailable];
  const effect = react.useEffect(() => {
    const tmp = bountiesAvailable;
    if (tmp) {
      closure_2.current = true;
    }
  }, items);
  const effect1 = react.useEffect(() => {
    function handleBountiesModalPush(key) {
      if (key.key === bountiesAvailable(closure_2[16]).BOUNTIES_MODAL_KEY) {
        closure_1_3.current = true;
      }
    }
    let obj = navigation(closure_2[17]);
    const subscription = obj.subscribe("MODAL_PUSH", handleBountiesModalPush);
    return () => {
      const obj = DispatcherDefault;
      obj.unsubscribe("MODAL_PUSH", handleBountiesModalPush);
    };
  }, []);
  const effect2 = react.useEffect(() => {
    function handleClaimSuccess() {
      closure_1_4.current = true;
    }
    let obj = navigation(closure_2[17]);
    const subscription = obj.subscribe("BOUNTIES_CLAIM_REWARD_SUCCESS", handleClaimSuccess);
    return () => {
      const obj = DispatcherDefault;
      obj.unsubscribe("BOUNTIES_CLAIM_REWARD_SUCCESS", handleClaimSuccess);
    };
  }, []);
  const items1 = [navigation];
  const effect3 = react.useEffect(() => {
    let ref;
    let ref2;
    let ref3;
    return navigation.addListener("beforeRemove", () => {
      if (ref.current) {
        if (ref3.current) {
          const obj = bountiesAvailable(ref[18]);
          obj.fireSurveyAction(bountiesAvailable(ref[19]).SurveyActionTypes.BOUNTY_SESSION_COMPLETED);
        } else {
          const current = ref2.current;
          const fireSurveyAction = bountiesAvailable(ref[18]).fireSurveyAction;
          bountiesAvailable(ref[18]);
          const SurveyActionTypes = bountiesAvailable(ref[19]).SurveyActionTypes;
          if (current) {
            fireSurveyAction(SurveyActionTypes.BOUNTY_ABANDONED);
          } else {
            fireSurveyAction(SurveyActionTypes.BOUNTY_IMMEDIATE_DISMISSAL);
          }
        }
      }
    });
  }, items1);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (function EmptyStateNoQuestsAvailable(hasContentAbove) {
  let tmp5;
  let tmp6;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(8);
  hasContentAbove = hasContentAbove.hasContentAbove;
  const obj2 = useNavigation;
  navigation = obj2.useNavigation();
  if (cResult[0] !== navigation) {
    const fn = function n() {
      return navigation.goBack();
    };
    cResult[0] = navigation;
    cResult[1] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1125).intl;
    const stringResult = intl.string(intl4.t["/g10LC"]);
    cResult[2] = stringResult;
    tmp6 = stringResult;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] !== tmp5) {
    const obj3 = { variant: "secondary", text: tmp6, onPress: tmp5 };
    const tmp10 = syncedClientThemes(components_Button_Button.Button, obj3);
    cResult[3] = tmp5;
    cResult[4] = tmp10;
    tmp8 = tmp10;
  } else {
    tmp8 = cResult[4];
  }
  if (cResult[5] === hasContentAbove) {
    let tmp11;
    if (cResult[6] === tmp8) {
      tmp11 = cResult[7];
    }
    return tmp11;
  }
  const tmp12 = syncedClientThemes(QuestHomeEmptyStateDefault, { hasContentAbove, action: tmp8 });
  cResult[5] = hasContentAbove;
  cResult[6] = tmp8;
  cResult[7] = tmp12;
  tmp11 = tmp12;
}) : (function EmptyStateNoQuestsAvailable(hasContentAbove) {
  let Button;
  let intl;
  let obj3;
  hasContentAbove = hasContentAbove.hasContentAbove;
  const obj = useNavigation;
  navigation = obj.useNavigation();
  const items = [navigation];
  const callback = react.useCallback(() => navigation.goBack(), items);
  const obj2 = { hasContentAbove, action: syncedClientThemes(Button, obj3) };
  obj3 = { variant: "secondary", text: intl.string(intl4.t["/g10LC"]), onPress: callback };
  const tmp3 = QuestHomeEmptyStateDefault;
  Button = components_Button_Button.Button;
  intl = intl4.intl;
  return syncedClientThemes(tmp3, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? (function EmptyStateFiltered(arg0) {
  let first;
  let hasContentAbove;
  let onClearFilters;
  let tmp10;
  let tmp6;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(8);
  ({ onClearFilters, hasContentAbove } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1125).intl;
    const stringResult = intl.string(intl4.t.urZl31);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== onClearFilters) {
    const obj2 = { variant: "secondary", text: first, onPress: onClearFilters };
    const tmp8 = syncedClientThemes(components_Button_Button.Button, obj2);
    cResult[1] = onClearFilters;
    cResult[2] = tmp8;
    tmp6 = tmp8;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1125).intl;
    const stringResult1 = intl2.string(intl4.t.PBfFnx);
    const intl3 = tmp(1125).intl;
    const stringResult2 = intl3.string(intl4.t.nwdKFC);
    cResult[3] = stringResult1;
    cResult[4] = stringResult2;
    tmp10 = stringResult2;
    tmp9 = stringResult1;
  } else {
    tmp9 = cResult[3];
    tmp10 = cResult[4];
  }
  if (cResult[5] === hasContentAbove) {
    let tmp13;
    if (cResult[6] === tmp6) {
      tmp13 = cResult[7];
    }
    return tmp13;
  }
  const tmp14 = syncedClientThemes(QuestHomeEmptyStateDefault, { hasContentAbove, action: tmp6, title: tmp9, subtitle: tmp10 });
  cResult[5] = hasContentAbove;
  cResult[6] = tmp6;
  cResult[7] = tmp14;
  tmp13 = tmp14;
}) : (function EmptyStateFiltered(arg0) {
  let Button;
  let hasContentAbove;
  let intl;
  let intl2;
  let intl3;
  let obj2;
  let onClearFilters;
  ({ onClearFilters, hasContentAbove } = arg0);
  const obj = { hasContentAbove, action: syncedClientThemes(Button, obj2), title: intl2.string(intl4.t.PBfFnx), subtitle: intl3.string(intl4.t.nwdKFC) };
  obj2 = { variant: "secondary", text: intl.string(intl4.t.urZl31), onPress: onClearFilters };
  const tmp = QuestHomeEmptyStateDefault;
  Button = components_Button_Button.Button;
  intl = intl4.intl;
  intl2 = intl4.intl;
  intl3 = intl4.intl;
  return syncedClientThemes(tmp, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
const shouldShowOrbsArcade = ReactCompilerGating.isReactCompilerEnabled() ? (function HeaderPreviewButton() {
  let QUEST_PREVIEW_TOOL_2;
  let first;
  let intl;
  let obj = react2;
  const cResult = obj.c(4);
  const tmp4 = closure_16();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      const obj = ModalActionCreatorsDefault;
      obj.popAll();
      const obj2 = require("openUserSettings");
      const obj3 = { screen: QUEST_PREVIEW_TOOL_2.QUEST_PREVIEW_TOOL_2 };
      obj2.openUserSettings(obj3);
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  let tmp6 = null;
  const tmpResult = hooks_QuestHooks;
  if (tmpResult.useShouldShowPreviewToolTab()) {
    let tmp7;
    let tmp10;
    const _Symbol = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      let obj2 = { grow: true, onPress: first, variant: "primary", text: intl.string(intl4.t.tx5Ax5) };
      const Button = tmp(5281).Button;
      intl = tmp(1125).intl;
      const tmp9 = syncedClientThemes(Button, obj2);
      cResult[1] = tmp9;
      tmp7 = tmp9;
    } else {
      tmp7 = cResult[1];
    }
    if (cResult[2] !== tmp4.previewButton) {
      let obj3 = { style: tmp4.previewButton, children: tmp7 };
      const tmp13 = syncedClientThemes(hasOwnProperty, obj3);
      cResult[2] = tmp4.previewButton;
      cResult[3] = tmp13;
      tmp10 = tmp13;
    } else {
      tmp10 = cResult[3];
    }
    tmp6 = tmp10;
  }
  return tmp6;
}) : (function HeaderPreviewButton() {
  let Button;
  let QUEST_PREVIEW_TOOL_2;
  let intl;
  let obj3;
  const tmp = closure_16();
  const callback = react.useCallback(() => {
    const obj = ModalActionCreatorsDefault;
    obj.popAll();
    const obj2 = require("openUserSettings");
    const obj3 = { screen: QUEST_PREVIEW_TOOL_2.QUEST_PREVIEW_TOOL_2 };
    obj2.openUserSettings(obj3);
  }, []);
  let obj = hooks_QuestHooks;
  let tmp5 = null;
  if (obj.useShouldShowPreviewToolTab()) {
    let obj2 = { style: tmp.previewButton, children: syncedClientThemes(Button, obj3) };
    obj3 = { grow: true, onPress: callback, variant: "primary", text: intl.string(intl4.t.tx5Ax5) };
    Button = tmp3(5281).Button;
    intl = tmp3(1125).intl;
    tmp5 = syncedClientThemes(hasOwnProperty, obj2);
  }
  return tmp5;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? (function HeaderWithBounties(arg0) {
  let obtainableOrbRewards;
  let orbShopProducts;
  let showOrbShopPlaceholderCarousel;
  const obj = react2;
  const cResult = obj.c(5);
  ({ orbShopProducts, obtainableOrbRewards, showOrbShopPlaceholderCarousel, shopCarouselConfig } = arg0);
  if (cResult[0] === obtainableOrbRewards) {
    if (cResult[1] === orbShopProducts) {
      if (cResult[2] === shopCarouselConfig) {
        let tmp3;
        if (cResult[3] === showOrbShopPlaceholderCarousel) {
          tmp3 = cResult[4];
        }
        return tmp3;
      }
    }
  }
  const tmp4 = syncedClientThemes(QuestHomeBountiesDefault, { shopCarouselConfig, orbShopProducts, obtainableOrbRewards, showOrbShopPlaceholderCarousel });
  cResult[0] = obtainableOrbRewards;
  cResult[1] = orbShopProducts;
  cResult[2] = shopCarouselConfig;
  cResult[3] = showOrbShopPlaceholderCarousel;
  cResult[4] = tmp4;
  tmp3 = tmp4;
}) : (function HeaderWithBounties(arg0) {
  let obtainableOrbRewards;
  let orbShopProducts;
  let showOrbShopPlaceholderCarousel;
  ({ orbShopProducts, obtainableOrbRewards, showOrbShopPlaceholderCarousel, shopCarouselConfig } = arg0);
  return syncedClientThemes(QuestHomeBountiesDefault, { shopCarouselConfig, orbShopProducts, obtainableOrbRewards, showOrbShopPlaceholderCarousel });
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? (function QuestsSectionHeader() {
  let intl;
  const obj = react2;
  const cResult = obj.c(6);
  const tmp4 = closure_16();
  if (cResult[0] === tmp4.sectionHeader) {
    let tmp5;
    let tmp7;
    let tmp10;
    if (cResult[1] === tmp4.sectionHeaderWithTag) {
      tmp5 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { variant: "text-lg/semibold", color: "text-strong", children: intl.string(intl4.t.JALI2K) };
      const Text = tmp(5271).Text;
      intl = tmp(1125).intl;
      const tmp9 = syncedClientThemes(Text, obj2);
      cResult[3] = tmp9;
      tmp7 = tmp9;
    } else {
      tmp7 = cResult[3];
    }
    if (cResult[4] !== tmp5) {
      const obj3 = { style: tmp5, children: tmp7 };
      const tmp13 = syncedClientThemes(hasOwnProperty, obj3);
      cResult[4] = tmp5;
      cResult[5] = tmp13;
      tmp10 = tmp13;
    } else {
      tmp10 = cResult[5];
    }
    return tmp10;
  }
  const items = [, ];
  ({ sectionHeader: arr[0], sectionHeaderWithTag: arr[1] } = tmp4);
  cResult[0] = tmp4.sectionHeader;
  cResult[1] = tmp4.sectionHeaderWithTag;
  cResult[2] = items;
  tmp5 = items;
}) : (function QuestsSectionHeader() {
  let Text;
  let intl;
  let items;
  let obj2;
  const obj = { style: items, children: syncedClientThemes(Text, obj2) };
  items = [, ];
  ({ sectionHeader: arr[0], sectionHeaderWithTag: arr[1] } = closure_16());
  obj2 = { variant: "text-lg/semibold", color: "text-strong", children: intl.string(intl4.t.JALI2K) };
  closure_16();
  Text = Text_Text.Text;
  intl = intl4.intl;
  return syncedClientThemes(hasOwnProperty, obj);
});
let memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_24 = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function MeasuredHeader(arg0) {
  let items;
  let obtainableOrbRewards;
  let onLayout;
  let orbShopProducts;
  let shouldShowBounties;
  let showOrbShopPlaceholderCarousel;
  let tmp3;
  let tmp4;
  const obj = react2;
  const cResult = obj.c(15);
  ({ shouldShowBounties, shouldShowOrbsArcade, onLayout, orbShopProducts, obtainableOrbRewards, showOrbShopPlaceholderCarousel, shopCarouselConfig } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = syncedClientThemes(closure_21, {});
    const tmp9 = syncedClientThemes(HexagonCampaignQuestHomeHeaderDefault, {});
    cResult[0] = tmp7;
    cResult[1] = tmp9;
    tmp3 = tmp7;
    tmp4 = tmp9;
  } else {
    [tmp3, tmp4] = cResult;
  }
  if (cResult[2] === obtainableOrbRewards) {
    if (cResult[3] === orbShopProducts) {
      if (cResult[4] === shopCarouselConfig) {
        if (cResult[5] === shouldShowBounties) {
          let tmp10;
          let tmp14;
          let tmp19;
          if (cResult[6] === showOrbShopPlaceholderCarousel) {
            tmp10 = cResult[7];
          }
          if (cResult[8] !== shouldShowOrbsArcade) {
            let tmp15 = null;
            if (shouldShowOrbsArcade) {
              const obj2 = { location: QuestsExperimentLocations.QUEST_HOME_MOBILE };
              tmp15 = syncedClientThemes(OrbsArcadeQuestHomeSectionDefault, obj2);
            }
            cResult[8] = shouldShowOrbsArcade;
            cResult[9] = tmp15;
            tmp14 = tmp15;
          } else {
            tmp14 = cResult[9];
          }
          const _Symbol = Symbol;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp22 = syncedClientThemes(closure_23, {});
            cResult[10] = tmp22;
            tmp19 = tmp22;
          } else {
            tmp19 = cResult[10];
          }
          if (cResult[11] === onLayout) {
            if (cResult[12] === tmp10) {
              let tmp23;
              if (cResult[13] === tmp14) {
                tmp23 = cResult[14];
              }
              return tmp23;
            }
          }
          const obj3 = { onLayout, children: items };
          items = [tmp3, tmp4, tmp10, tmp14, tmp19];
          const tmp26 = closure_15(hasOwnProperty, obj3);
          cResult[11] = onLayout;
          cResult[12] = tmp10;
          cResult[13] = tmp14;
          cResult[14] = tmp26;
          tmp23 = tmp26;
        }
      }
    }
  }
  let tmp11 = null;
  if (shouldShowBounties) {
    const obj4 = { shopCarouselConfig, orbShopProducts, obtainableOrbRewards, showOrbShopPlaceholderCarousel };
    tmp11 = syncedClientThemes(closure_22, obj4);
  }
  cResult[2] = obtainableOrbRewards;
  cResult[3] = orbShopProducts;
  cResult[4] = shopCarouselConfig;
  cResult[5] = shouldShowBounties;
  cResult[6] = showOrbShopPlaceholderCarousel;
  cResult[7] = tmp11;
  tmp10 = tmp11;
}) : (function MeasuredHeader(onLayout) {
  let items;
  let obtainableOrbRewards;
  let orbShopProducts;
  let shouldShowBounties;
  let showOrbShopPlaceholderCarousel;
  const obj = { onLayout: onLayout.onLayout, children: items };
  ({ shouldShowBounties, shouldShowOrbsArcade, orbShopProducts, obtainableOrbRewards, showOrbShopPlaceholderCarousel, shopCarouselConfig } = onLayout);
  items = [syncedClientThemes(closure_21, {}), syncedClientThemes(HexagonCampaignQuestHomeHeaderDefault, {}), , , ];
  let tmp3Result = null;
  const tmp = closure_15;
  const tmp2 = hasOwnProperty;
  if (shouldShowBounties) {
    const obj2 = { shopCarouselConfig, orbShopProducts, obtainableOrbRewards, showOrbShopPlaceholderCarousel };
    tmp3Result = tmp3(closure_22, obj2);
  }
  items[2] = tmp3Result;
  let tmp3Result2 = null;
  if (shouldShowOrbsArcade) {
    const obj3 = { location: QuestsExperimentLocations.QUEST_HOME_MOBILE };
    tmp3Result2 = tmp3(OrbsArcadeQuestHomeSectionDefault, obj3);
  }
  items[3] = tmp3Result2;
  items[4] = syncedClientThemes(closure_23, {});
  return tmp(tmp2, obj);
}));
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function QuestHome(arg0) {
  let config;
  let containerStyle;
  let filters;
  let first;
  let handleListLayout;
  let handleListLoad;
  let handleListScroll;
  let handleQuestCardLayout;
  let isNavigationComplete;
  let obj14;
  let onClearFilters;
  let quests;
  let result1;
  let scrollToQuestId;
  let scrollViewRef;
  let sortMethod;
  let tmp = scrollToQuestId;
  let tmp2 = quests;
  let obj = scrollToQuestId(quests[13]);
  const cResult = obj.c(125);
  ({ containerStyle, isNavigationComplete, scrollToQuestId } = arg0);
  ({ filters, sortMethod, onClearFilters } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = tmp(tmp2[30]);
    const isEligibleForQuests = tmpResult.getIsEligibleForQuests();
    cResult[0] = isEligibleForQuests;
    first = isEligibleForQuests;
  } else {
    first = cResult[0];
  }
  closure_16();
  const bottom = first(tmp2[31])().bottom;
  const tmp7 = first;
  if (cResult[1] === filters) {
    let obj15;
    let tmp11;
    let tmp10;
    let tmp9;
    let tmp15;
    let tmp14;
    if (cResult[2] === sortMethod) {
      obj15 = cResult[3];
    }
    const tmpResult10 = tmp(tmp2[25]);
    const filteredQuests = tmpResult10.useFilteredQuests(tmp(tmp2[25]).QuestTabs.ALL, obj15);
    quests = filteredQuests.quests;
    const excludedQuests = filteredQuests.excludedQuests;
    const isFetchingCurrentQuests = filteredQuests.isFetchingCurrentQuests;
    const hasFetched = filteredQuests.hasFetched;
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [scrollViewRef];
      class U {
        constructor() {
          quests = scrollViewRef.quests;
          arr = Array.from(quests.values());
          found = arr.filter((item) => {
            const obj = scrollToQuestId(quests[32]);
            return !obj.isQuestExpired(item);
          });
          mapped = found.map((id) => id.id);
          return mapped.sort();
        }
      }
      const items1 = [];
      cResult[4] = items;
      cResult[5] = U;
      cResult[6] = items1;
      tmp11 = items1;
      tmp10 = U;
      tmp9 = items;
    } else {
      tmp9 = cResult[4];
      tmp10 = cResult[5];
      tmp11 = cResult[6];
    }
    const tmpResult11 = tmp(tmp2[14]);
    const stateFromStoresArray = tmpResult11.useStateFromStoresArray(tmp9, tmp10, tmp11);
    if (cResult[7] !== stateFromStoresArray) {
      const fn = function q() {
        if (stateFromStoresArray.length > 0) {
          const obj = QuestActionCreators;
          obj.markAdContentSeen(AdCreativeType.AdCreativeType.QUEST, tmp);
        }
      };
      const items2 = [stateFromStoresArray];
      class U {
        constructor() {
          quests = scrollViewRef.quests;
          arr = Array.from(quests.values());
          found = arr.filter((item) => {
            const obj = scrollToQuestId(quests[32]);
            return !obj.isQuestExpired(item);
          });
          mapped = found.map((id) => id.id);
          return mapped.sort();
        }
      }
      cResult[7] = stateFromStoresArray;
      cResult[8] = fn;
      cResult[9] = items2;
      tmp15 = items2;
      tmp14 = fn;
    } else {
      tmp14 = cResult[8];
      tmp15 = cResult[9];
    }
    const effect = isFetchingCurrentQuests.useEffect(tmp14, tmp15);
    const ref = isFetchingCurrentQuests.useRef(null);
    let tmp18 = null;
    if (null != scrollToQuestId) {
      if (cResult[10] === excludedQuests) {
        if (cResult[11] === quests) {
          let tmp19;
          if (cResult[12] === scrollToQuestId) {
            tmp19 = cResult[13];
          }
          const id = tmp19;
          tmp18 = null;
          class U {
            constructor() {
              quests = scrollViewRef.quests;
              arr = Array.from(quests.values());
              found = arr.filter((item) => {
                const obj = scrollToQuestId(quests[32]);
                return !obj.isQuestExpired(item);
              });
              mapped = found.map((id) => id.id);
              return mapped.sort();
            }
          }
        }
      }
      const tmpResult12 = tmp(tmp2[35]);
      const result = tmpResult12.findQuestOrReplacement(scrollToQuestId, quests, excludedQuests);
      class U {
        constructor() {
          quests = scrollViewRef.quests;
          arr = Array.from(quests.values());
          found = arr.filter((item) => {
            const obj = scrollToQuestId(quests[32]);
            return !obj.isQuestExpired(item);
          });
          mapped = found.map((id) => id.id);
          return mapped.sort();
        }
      }
      cResult[10] = excludedQuests;
      cResult[11] = quests;
      cResult[12] = scrollToQuestId;
      cResult[13] = result;
      tmp19 = result;
    }
    if (cResult[19] === excludedQuests) {
      if (cResult[20] === hasFetched) {
        if (cResult[21] === isFetchingCurrentQuests) {
          if (cResult[22] === quests) {
            let tmp21;
            let tmp22;
            let tmp24;
            let tmp26;
            if (cResult[23] === scrollToQuestId) {
              tmp21 = cResult[24];
              tmp22 = cResult[25];
            }
            const effect1 = obj6.useEffect(tmp22, tmp21);
            if (cResult[26] !== tmp18) {
              let obj2 = { scrollToIndex: tmp18 };
              class U {
                constructor() {
                  quests = scrollViewRef.quests;
                  arr = Array.from(quests.values());
                  found = arr.filter((item) => {
                    const obj = scrollToQuestId(quests[32]);
                    return !obj.isQuestExpired(item);
                  });
                  mapped = found.map((id) => id.id);
                  return mapped.sort();
                }
              }
              cResult[27] = obj2;
              tmp24 = obj2;
            } else {
              tmp24 = cResult[27];
            }
            class U {
              constructor() {
                quests = scrollViewRef.quests;
                arr = Array.from(quests.values());
                found = arr.filter((item) => {
                  const obj = scrollToQuestId(quests[32]);
                  return !obj.isQuestExpired(item);
                });
                mapped = found.map((id) => id.id);
                return mapped.sort();
              }
            }
            const tmp25 = config(tmp24);
            scrollViewRef = tmp25.scrollViewRef;
            ({ handleListScroll, handleListLayout, handleListLoad, handleQuestCardLayout } = tmp25);
            const handleHeaderLayout = tmp25.handleHeaderLayout;
            const visibilityRef = tmp25.visibilityRef;
            const _Symbol2 = Symbol;
            if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
              function re(getUtmCurrentContext) {
                return getUtmCurrentContext.getUtmCurrentContext();
              }
              cResult[28] = re;
              class U {
                constructor() {
                  quests = scrollViewRef.quests;
                  arr = Array.from(quests.values());
                  found = arr.filter((item) => {
                    const obj = scrollToQuestId(quests[32]);
                    return !obj.isQuestExpired(item);
                  });
                  mapped = found.map((id) => id.id);
                  return mapped.sort();
                }
              }
            } else {
              tmp26 = cResult[28];
            }
            const tmp28 = handleQuestCardLayout(tmp26);
            if (cResult[29] === tmp28.utmCampaignCurrent) {
              if (cResult[30] === tmp28.utmContentCurrent) {
                if (cResult[31] === tmp28.utmMediumCurrent) {
                  let tmp29;
                  let tmp33;
                  let tmp32;
                  if (cResult[32] === tmp28.utmSourceCurrent) {
                    tmp29 = cResult[33];
                  }
                  tmp7(tmp2[39])(tmp29);
                  const _Symbol3 = Symbol;
                  class U {
                    constructor() {
                      quests = scrollViewRef.quests;
                      arr = Array.from(quests.values());
                      found = arr.filter((item) => {
                        const obj = scrollToQuestId(quests[32]);
                        return !obj.isQuestExpired(item);
                      });
                      mapped = found.map((id) => id.id);
                      return mapped.sort();
                    }
                  }
                  if (tmp31 === Symbol.for("react.memo_cache_sentinel")) {
                    function he() {
                      const tmp = first;
                      if (tmp) {
                        const QuestHomeOpenTriggerPoint = QuestHomeOpenTriggerPoint2.QuestHomeOpenTriggerPoint;
                        QuestHomeOpenTriggerPoint.trigger();
                      }
                    }
                    const items3 = [first];
                    class U {
                      constructor() {
                        quests = scrollViewRef.quests;
                        arr = Array.from(quests.values());
                        found = arr.filter((item) => {
                          const obj = scrollToQuestId(quests[32]);
                          return !obj.isQuestExpired(item);
                        });
                        mapped = found.map((id) => id.id);
                        return mapped.sort();
                      }
                    }
                    cResult[34] = he;
                    cResult[35] = items3;
                    tmp33 = items3;
                    tmp32 = he;
                  } else {
                    tmp32 = cResult[34];
                    tmp33 = cResult[35];
                  }
                  const effect2 = obj6.useEffect(tmp32, tmp33);
                  if (cResult[36] === hasFetched) {
                    let tmp35;
                    if (cResult[37] === scrollViewRef) {
                      tmp35 = cResult[38];
                    }
                    if (cResult[39] === filters) {
                      if (cResult[40] === hasFetched) {
                        if (cResult[41] === scrollViewRef) {
                          let tmp36;
                          if (cResult[42] === sortMethod) {
                            tmp36 = cResult[43];
                          }
                          const effect3 = obj6.useEffect(tmp35, tmp36);
                          if (cResult[44] === filters) {
                            if (cResult[45] === quests.length) {
                              let tmp38;
                              let tmp41;
                              let tmp43;
                              let tmp45;
                              let tmp48;
                              if (cResult[46] === sortMethod) {
                                tmp38 = cResult[47];
                              }
                              const tmpResult13 = tmp(tmp2[25]);
                              const questHomeSortingFilteringAnalytics = tmpResult13.useQuestHomeSortingFilteringAnalytics(tmp38);
                              class U {
                                constructor() {
                                  quests = scrollViewRef.quests;
                                  arr = Array.from(quests.values());
                                  found = arr.filter((item) => {
                                    const obj = scrollToQuestId(quests[32]);
                                    return !obj.isQuestExpired(item);
                                  });
                                  mapped = found.map((id) => id.id);
                                  return mapped.sort();
                                }
                              }
                              const enabled = obj12.useVirtualCurrencyMobileEnabled().enabled;
                              const _Symbol4 = Symbol;
                              if (cResult[48] === Symbol.for("react.memo_cache_sentinel")) {
                                let obj3 = { location: handleHeaderLayout.QUEST_HOME_MOBILE };
                                class U {
                                  constructor() {
                                    quests = scrollViewRef.quests;
                                    arr = Array.from(quests.values());
                                    found = arr.filter((item) => {
                                      const obj = scrollToQuestId(quests[32]);
                                      return !obj.isQuestExpired(item);
                                    });
                                    mapped = found.map((id) => id.id);
                                    return mapped.sort();
                                  }
                                }
                                cResult[48] = obj3;
                                tmp41 = obj3;
                              } else {
                                tmp41 = cResult[48];
                              }
                              const QuestHomeBountiesFeatureGateExperiment = tmp(tmp2[42]).QuestHomeBountiesFeatureGateExperiment;
                              const enabled2 = QuestHomeBountiesFeatureGateExperiment.useConfig(tmp41).enabled;
                              const _Symbol5 = Symbol;
                              if (cResult[49] === Symbol.for("react.memo_cache_sentinel")) {
                                let obj4 = { location: handleHeaderLayout.QUEST_HOME_MOBILE };
                                class U {
                                  constructor() {
                                    quests = scrollViewRef.quests;
                                    arr = Array.from(quests.values());
                                    found = arr.filter((item) => {
                                      const obj = scrollToQuestId(quests[32]);
                                      return !obj.isQuestExpired(item);
                                    });
                                    mapped = found.map((id) => id.id);
                                    return mapped.sort();
                                  }
                                }
                                cResult[49] = obj4;
                                tmp43 = obj4;
                              } else {
                                tmp43 = cResult[49];
                              }
                              const OrbsHoldoutExperiment = tmp(tmp2[43]).OrbsHoldoutExperiment;
                              const enabled3 = OrbsHoldoutExperiment.useConfig(tmp43).enabled;
                              const _Symbol6 = Symbol;
                              if (cResult[50] === Symbol.for("react.memo_cache_sentinel")) {
                                const obj5 = { location: handleHeaderLayout.QUEST_HOME_MOBILE };
                                class U {
                                  constructor() {
                                    quests = scrollViewRef.quests;
                                    arr = Array.from(quests.values());
                                    found = arr.filter((item) => {
                                      const obj = scrollToQuestId(quests[32]);
                                      return !obj.isQuestExpired(item);
                                    });
                                    mapped = found.map((id) => id.id);
                                    return mapped.sort();
                                  }
                                }
                                cResult[50] = obj5;
                                tmp45 = obj5;
                              } else {
                                tmp45 = cResult[50];
                              }
                              const OrbsArcadeExperiment = tmp(tmp2[44]).OrbsArcadeExperiment;
                              let enabled4 = OrbsArcadeExperiment.useConfig(tmp45).enabled;
                              const tmpResult14 = tmp(tmp2[45]);
                              const params = tmpResult14.useRoute().params;
                              let previewAdCreativeIds;
                              if (params != null) {
                                previewAdCreativeIds = params.previewAdCreativeIds;
                              }
                              if (cResult[51] !== previewAdCreativeIds) {
                                const obj7 = { previewAdCreativeIds };
                                class U {
                                  constructor() {
                                    quests = scrollViewRef.quests;
                                    arr = Array.from(quests.values());
                                    found = arr.filter((item) => {
                                      const obj = scrollToQuestId(quests[32]);
                                      return !obj.isQuestExpired(item);
                                    });
                                    mapped = found.map((id) => id.id);
                                    return mapped.sort();
                                  }
                                }
                                cResult[52] = obj7;
                                tmp48 = obj7;
                              } else {
                                tmp48 = cResult[52];
                              }
                              const tmpResult15 = tmp(tmp2[25]);
                              const fetchQuestHomeBounties = tmpResult15.useFetchQuestHomeBounties(tmp48);
                              const isLoading = fetchQuestHomeBounties.isLoading;
                              const questHomeBounties = fetchQuestHomeBounties.questHomeBounties;
                              if (cResult[53] === isLoading) {
                                if (cResult[54] === previewAdCreativeIds) {
                                  let tmp50;
                                  let tmp51;
                                  if (cResult[55] === questHomeBounties) {
                                    tmp50 = cResult[56];
                                    tmp51 = cResult[57];
                                  }
                                  const effect4 = obj6.useEffect(tmp50, tmp51);
                                  if (cResult[58] === filters) {
                                    if (cResult[59] === enabled3) {
                                      if (cResult[60] === enabled) {
                                        let tmp53;
                                        let tmp56;
                                        if (cResult[61] === enabled2) {
                                          tmp53 = cResult[62];
                                        }
                                        closure_16 = tmp53;
                                        const _Symbol7 = Symbol;
                                        class U {
                                          constructor() {
                                            quests = scrollViewRef.quests;
                                            arr = Array.from(quests.values());
                                            found = arr.filter((item) => {
                                              const obj = scrollToQuestId(quests[32]);
                                              return !obj.isQuestExpired(item);
                                            });
                                            mapped = found.map((id) => id.id);
                                            return mapped.sort();
                                          }
                                        }
                                        if (tmp55 === Symbol.for("react.memo_cache_sentinel")) {
                                          const obj8 = { location: handleHeaderLayout.QUEST_HOME_MOBILE };
                                          class U {
                                            constructor() {
                                              quests = scrollViewRef.quests;
                                              arr = Array.from(quests.values());
                                              found = arr.filter((item) => {
                                                const obj = scrollToQuestId(quests[32]);
                                                return !obj.isQuestExpired(item);
                                              });
                                              mapped = found.map((id) => id.id);
                                              return mapped.sort();
                                            }
                                          }
                                          cResult[63] = obj8;
                                          tmp56 = obj8;
                                        } else {
                                          tmp56 = cResult[63];
                                        }
                                        const BountiesShopCarouselExperiment = tmp(tmp2[49]).BountiesShopCarouselExperiment;
                                        config = BountiesShopCarouselExperiment.useConfig(tmp56);
                                        let tmp59 = tmp53;
                                        if (tmp59) {
                                          tmp59 = "none" !== config.placement;
                                        }
                                        if (cResult[64] === config.sortType) {
                                          let tmp60;
                                          let tmp64;
                                          if (cResult[65] === tmp59) {
                                            tmp60 = cResult[66];
                                          }
                                          const tmpResult16 = tmp(tmp2[50]);
                                          const questHomeOrbShopCarouselData = tmpResult16.useQuestHomeOrbShopCarouselData(tmp60);
                                          class U {
                                            constructor() {
                                              quests = scrollViewRef.quests;
                                              arr = Array.from(quests.values());
                                              found = arr.filter((item) => {
                                                const obj = scrollToQuestId(quests[32]);
                                                return !obj.isQuestExpired(item);
                                              });
                                              mapped = found.map((id) => id.id);
                                              return mapped.sort();
                                            }
                                          }
                                          const orbShopProducts = tmp62;
                                          const obtainableOrbRewards = questHomeOrbShopCarouselData.obtainableOrbRewards;
                                          const showPlaceholderCarousel = questHomeOrbShopCarouselData.showPlaceholderCarousel;
                                          if (enabled4) {
                                            enabled4 = enabled;
                                          }
                                          if (enabled4) {
                                            enabled4 = !enabled3;
                                          }
                                          if (enabled4) {
                                            enabled4 = 0 === filters.length;
                                          }
                                          if (cResult[67] !== (tmp53 && !isLoading && questHomeBounties.length > 0)) {
                                            const obj9 = { bountiesAvailable: tmp53 && !isLoading && questHomeBounties.length > 0 };
                                            class U {
                                              constructor() {
                                                quests = scrollViewRef.quests;
                                                arr = Array.from(quests.values());
                                                found = arr.filter((item) => {
                                                  const obj = scrollToQuestId(quests[32]);
                                                  return !obj.isQuestExpired(item);
                                                });
                                                mapped = found.map((id) => id.id);
                                                return mapped.sort();
                                              }
                                            }
                                            cResult[68] = obj9;
                                            tmp64 = obj9;
                                          } else {
                                            tmp64 = cResult[68];
                                          }
                                          orbShopProducts(tmp64);
                                          if (cResult[69] === handleHeaderLayout) {
                                            if (cResult[70] === obtainableOrbRewards) {
                                              if (cResult[71] === tmp62) {
                                                if (cResult[72] === config) {
                                                  if (cResult[73] === tmp53) {
                                                    if (cResult[74] === enabled4) {
                                                      if (cResult[77] !== visibilityRef) {
                                                        class Ge {
                                                          constructor(arg0) {
                                                            item = arg0.item;
                                                            index = arg0.index;
                                                            obj = { questOrQuests: item, questContent: null, questContentPosition: null, trackGuildAndChannelMetadata: false, visibilityRef: null, skipRemountKey: true, sourceQuestContent: null, children: null };
                                                            QuestContentImpressionTrackerNative = closure_0(closure_2[51]).QuestContentImpressionTrackerNative;
                                                            obj.questContent = closure_0(closure_2[46]).QuestContent.QUEST_HOME_MOBILE;
                                                            obj.questContentPosition = index;
                                                            obj.visibilityRef = visibilityRef;
                                                            obj.sourceQuestContent = closure_0(closure_2[46]).QuestContent.QUEST_HOME_MOBILE;
                                                            obj.children = function children() {
                                                              const obj = { quest: item, questContentPosition: index, containerPadding: 0, sourceQuestContent: scrollToQuestId(quests[46]).QuestContent.QUEST_HOME_MOBILE };
                                                              const QuestCard = scrollToQuestId(quests[52]).QuestCard;
                                                              return isLoading(QuestCard, obj);
                                                            };
                                                            return jsx(QuestContentImpressionTrackerNative, obj);
                                                          }
                                                        }
                                                        cResult[77] = visibilityRef;
                                                        class U {
                                                          constructor() {
                                                            quests = scrollViewRef.quests;
                                                            arr = Array.from(quests.values());
                                                            found = arr.filter((item) => {
                                                              const obj = scrollToQuestId(quests[32]);
                                                              return !obj.isQuestExpired(item);
                                                            });
                                                            mapped = found.map((id) => id.id);
                                                            return mapped.sort();
                                                          }
                                                        }
                                                        cResult[78] = Ge;
                                                      } else {
                                                        class Ge {
                                                          constructor(arg0) {
                                                            item = arg0.item;
                                                            index = arg0.index;
                                                            obj = { questOrQuests: item, questContent: null, questContentPosition: null, trackGuildAndChannelMetadata: false, visibilityRef: null, skipRemountKey: true, sourceQuestContent: null, children: null };
                                                            QuestContentImpressionTrackerNative = closure_0(closure_2[51]).QuestContentImpressionTrackerNative;
                                                            obj.questContent = closure_0(closure_2[46]).QuestContent.QUEST_HOME_MOBILE;
                                                            obj.questContentPosition = index;
                                                            obj.visibilityRef = visibilityRef;
                                                            obj.sourceQuestContent = closure_0(closure_2[46]).QuestContent.QUEST_HOME_MOBILE;
                                                            obj.children = function children() {
                                                              const obj = { quest: item, questContentPosition: index, containerPadding: 0, sourceQuestContent: scrollToQuestId(quests[46]).QuestContent.QUEST_HOME_MOBILE };
                                                              const QuestCard = scrollToQuestId(quests[52]).QuestCard;
                                                              return isLoading(QuestCard, obj);
                                                            };
                                                            return jsx(QuestContentImpressionTrackerNative, obj);
                                                          }
                                                        }
                                                      }
                                                      if (cResult[79] === handleQuestCardLayout) {
                                                        let tmp74;
                                                        let tmp73;
                                                        let tmp77;
                                                        let tmp76;
                                                        let tmp81;
                                                        let tmp80;
                                                        class Ge {
                                                          constructor(arg0) {
                                                            item = arg0.item;
                                                            index = arg0.index;
                                                            obj = { questOrQuests: item, questContent: null, questContentPosition: null, trackGuildAndChannelMetadata: false, visibilityRef: null, skipRemountKey: true, sourceQuestContent: null, children: null };
                                                            QuestContentImpressionTrackerNative = closure_0(closure_2[51]).QuestContentImpressionTrackerNative;
                                                            obj.questContent = closure_0(closure_2[46]).QuestContent.QUEST_HOME_MOBILE;
                                                            obj.questContentPosition = index;
                                                            obj.visibilityRef = visibilityRef;
                                                            obj.sourceQuestContent = closure_0(closure_2[46]).QuestContent.QUEST_HOME_MOBILE;
                                                            obj.children = function children() {
                                                              const obj = { quest: item, questContentPosition: index, containerPadding: 0, sourceQuestContent: scrollToQuestId(quests[46]).QuestContent.QUEST_HOME_MOBILE };
                                                              const QuestCard = scrollToQuestId(quests[52]).QuestCard;
                                                              return isLoading(QuestCard, obj);
                                                            };
                                                            return jsx(QuestContentImpressionTrackerNative, obj);
                                                          }
                                                        }
                                                        let tmp71 = !isNavigationComplete;
                                                        if (isNavigationComplete) {
                                                          class Ge {
                                                            constructor(arg0) {
                                                              item = arg0.item;
                                                              index = arg0.index;
                                                              obj = { questOrQuests: item, questContent: null, questContentPosition: null, trackGuildAndChannelMetadata: false, visibilityRef: null, skipRemountKey: true, sourceQuestContent: null, children: null };
                                                              QuestContentImpressionTrackerNative = closure_0(closure_2[51]).QuestContentImpressionTrackerNative;
                                                              obj.questContent = closure_0(closure_2[46]).QuestContent.QUEST_HOME_MOBILE;
                                                              obj.questContentPosition = index;
                                                              obj.visibilityRef = visibilityRef;
                                                              obj.sourceQuestContent = closure_0(closure_2[46]).QuestContent.QUEST_HOME_MOBILE;
                                                              obj.children = function children() {
                                                                const obj = { quest: item, questContentPosition: index, containerPadding: 0, sourceQuestContent: scrollToQuestId(quests[46]).QuestContent.QUEST_HOME_MOBILE };
                                                                const QuestCard = scrollToQuestId(quests[52]).QuestCard;
                                                                return isLoading(QuestCard, obj);
                                                              };
                                                              return jsx(QuestContentImpressionTrackerNative, obj);
                                                            }
                                                          }
                                                          tmp71 = tmp72;
                                                        }
                                                        class U {
                                                          constructor() {
                                                            quests = scrollViewRef.quests;
                                                            arr = Array.from(quests.values());
                                                            found = arr.filter((item) => {
                                                              const obj = scrollToQuestId(quests[32]);
                                                              return !obj.isQuestExpired(item);
                                                            });
                                                            mapped = found.map((id) => id.id);
                                                            return mapped.sort();
                                                          }
                                                        }
                                                        closure_22 = tmp71;
                                                        const ref2 = obj6.useRef(tmp53);
                                                        if (cResult[82] !== tmp53) {
                                                          class Ze {
                                                            constructor() {
                                                              ref2.current = current;
                                                            }
                                                          }
                                                          const items4 = [tmp53];
                                                          class U {
                                                            constructor() {
                                                              quests = scrollViewRef.quests;
                                                              arr = Array.from(quests.values());
                                                              found = arr.filter((item) => {
                                                                const obj = scrollToQuestId(quests[32]);
                                                                return !obj.isQuestExpired(item);
                                                              });
                                                              mapped = found.map((id) => id.id);
                                                              return mapped.sort();
                                                            }
                                                          }
                                                          cResult[82] = tmp53;
                                                          cResult[83] = Ze;
                                                          cResult[84] = items4;
                                                          tmp74 = items4;
                                                          tmp73 = Ze;
                                                        } else {
                                                          class Ze {
                                                            constructor() {
                                                              ref2.current = current;
                                                            }
                                                          }
                                                          tmp74 = cResult[84];
                                                        }
                                                        const effect5 = obj6.useEffect(tmp73, tmp74);
                                                        const _Symbol8 = Symbol;
                                                        if (cResult[85] === Symbol.for("react.memo_cache_sentinel")) {
                                                          class Ze {
                                                            constructor() {
                                                              ref2.current = current;
                                                            }
                                                          }
                                                          const items5 = [first];
                                                          class U {
                                                            constructor() {
                                                              quests = scrollViewRef.quests;
                                                              arr = Array.from(quests.values());
                                                              found = arr.filter((item) => {
                                                                const obj = scrollToQuestId(quests[32]);
                                                                return !obj.isQuestExpired(item);
                                                              });
                                                              mapped = found.map((id) => id.id);
                                                              return mapped.sort();
                                                            }
                                                          }
                                                          cResult[85] = tmp78;
                                                          cResult[86] = items5;
                                                          tmp77 = items5;
                                                          tmp76 = tmp78;
                                                        } else {
                                                          class Ze {
                                                            constructor() {
                                                              ref2.current = current;
                                                            }
                                                          }
                                                          tmp77 = cResult[86];
                                                        }
                                                        const effect6 = obj6.useEffect(tmp76, tmp77);
                                                        if (cResult[87] !== tmp71) {
                                                          class Ze {
                                                            constructor() {
                                                              ref2.current = current;
                                                            }
                                                          }
                                                          const items6 = [first, ];
                                                          class U {
                                                            constructor() {
                                                              quests = scrollViewRef.quests;
                                                              arr = Array.from(quests.values());
                                                              found = arr.filter((item) => {
                                                                const obj = scrollToQuestId(quests[32]);
                                                                return !obj.isQuestExpired(item);
                                                              });
                                                              mapped = found.map((id) => id.id);
                                                              return mapped.sort();
                                                            }
                                                          }
                                                          cResult[87] = tmp71;
                                                          cResult[88] = tmp82;
                                                          cResult[89] = items6;
                                                          tmp81 = items6;
                                                          tmp80 = tmp82;
                                                        } else {
                                                          class Ze {
                                                            constructor() {
                                                              ref2.current = current;
                                                            }
                                                          }
                                                          tmp81 = cResult[89];
                                                        }
                                                        const effect7 = obj6.useEffect(tmp80, tmp81);
                                                        const tmpResult17 = tmp(tmp2[25]);
                                                        const shouldShowPreviewToolTab = tmpResult17.useShouldShowPreviewToolTab();
                                                        const tmpResult18 = tmp(tmp2[54]);
                                                        const isHexagonCampaignQuestHomeHeaderEnabled = tmpResult18.useIsHexagonCampaignQuestHomeHeaderEnabled("QuestHome");
                                                        class De {
                                                          constructor() {
                                                            const obj = { shouldShowBounties, shouldShowOrbsArcade: enabled4, onLayout: handleHeaderLayout, shopCarouselConfig: config, orbShopProducts, obtainableOrbRewards, showOrbShopPlaceholderCarousel: showPlaceholderCarousel };
                                                            return syncedClientThemes(closure_24, obj);
                                                          }
                                                        }
                                                      }
                                                      class U {
                                                        constructor() {
                                                          quests = scrollViewRef.quests;
                                                          arr = Array.from(quests.values());
                                                          found = arr.filter((item) => {
                                                            const obj = scrollToQuestId(quests[32]);
                                                            return !obj.isQuestExpired(item);
                                                          });
                                                          mapped = found.map((id) => id.id);
                                                          return mapped.sort();
                                                        }
                                                      }
                                                      cResult[79] = handleQuestCardLayout;
                                                      cResult[80] = quests;
                                                      cResult[81] = tmp70;
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                          class De {
                                            constructor() {
                                              const obj = { shouldShowBounties, shouldShowOrbsArcade: enabled4, onLayout: handleHeaderLayout, shopCarouselConfig: config, orbShopProducts, obtainableOrbRewards, showOrbShopPlaceholderCarousel: showPlaceholderCarousel };
                                              return syncedClientThemes(closure_24, obj);
                                            }
                                          }
                                          cResult[69] = handleHeaderLayout;
                                          cResult[70] = obtainableOrbRewards;
                                          cResult[71] = tmp62;
                                          cResult[72] = config;
                                          cResult[73] = tmp53;
                                          cResult[74] = enabled4;
                                          class Ae {
                                            constructor() {
                                              if (null != previewAdCreativeIds) {
                                                num = 0;
                                                if (0 !== previewAdCreativeIds.length) {
                                                  tmp8 = isLoading;
                                                  if (!tmp8) {
                                                    tmp = questHomeBounties;
                                                    found = questHomeBounties.find((id) => previewAdCreativeIds.includes(id.id));
                                                    if (null != found) {
                                                      tmp3 = closure_1;
                                                      tmp4 = closure_2;
                                                      tmp5 = closure_1(closure_2[16]);
                                                      obj = { bountyId: null, sourceQuestContent: null, variant: null };
                                                      obj.bountyId = found.id;
                                                      tmp6 = closure_0;
                                                      showModal = tmp5.showModal;
                                                      obj.sourceQuestContent = closure_0(closure_2[46]).QuestContent.VIDEO_MODAL_MOBILE;
                                                      obj.variant = closure_0(closure_2[47]).BountiesModalVariant.VERTICAL_SCROLL;
                                                      showModalResult = showModal(obj);
                                                    }
                                                  }
                                                }
                                              }
                                              return;
                                            }
                                          }
                                          cResult[76] = De;
                                        }
                                        const obj11 = { enabled: tmp59, sortType: config.sortType };
                                        cResult[64] = config.sortType;
                                        cResult[65] = tmp59;
                                        tmp60 = obj11;
                                      }
                                    }
                                  }
                                  class U {
                                    constructor() {
                                      quests = scrollViewRef.quests;
                                      arr = Array.from(quests.values());
                                      found = arr.filter((item) => {
                                        const obj = scrollToQuestId(quests[32]);
                                        return !obj.isQuestExpired(item);
                                      });
                                      mapped = found.map((id) => id.id);
                                      return mapped.sort();
                                    }
                                  }
                                  if (result1) {
                                    class Ze {
                                      constructor() {
                                        ref2.current = current;
                                      }
                                    }
                                    result1 = obj19.shouldShowBountiesGivenFilters(filters);
                                  }
                                  cResult[58] = filters;
                                  cResult[59] = enabled3;
                                  cResult[60] = enabled;
                                  cResult[61] = enabled2;
                                  cResult[62] = result1;
                                  tmp53 = result1;
                                }
                              }
                              class Ae {
                                constructor() {
                                  if (null != previewAdCreativeIds) {
                                    num = 0;
                                    if (0 !== previewAdCreativeIds.length) {
                                      tmp8 = isLoading;
                                      if (!tmp8) {
                                        tmp = questHomeBounties;
                                        found = questHomeBounties.find((id) => previewAdCreativeIds.includes(id.id));
                                        if (null != found) {
                                          tmp3 = closure_1;
                                          tmp4 = closure_2;
                                          tmp5 = closure_1(closure_2[16]);
                                          obj = { bountyId: null, sourceQuestContent: null, variant: null };
                                          obj.bountyId = found.id;
                                          tmp6 = closure_0;
                                          showModal = tmp5.showModal;
                                          obj.sourceQuestContent = closure_0(closure_2[46]).QuestContent.VIDEO_MODAL_MOBILE;
                                          obj.variant = closure_0(closure_2[47]).BountiesModalVariant.VERTICAL_SCROLL;
                                          showModalResult = showModal(obj);
                                        }
                                      }
                                    }
                                  }
                                  return;
                                }
                              }
                              const items7 = [previewAdCreativeIds, isLoading, questHomeBounties];
                              cResult[53] = isLoading;
                              cResult[54] = previewAdCreativeIds;
                              cResult[55] = questHomeBounties;
                              cResult[56] = Ae;
                              cResult[57] = items7;
                              tmp51 = items7;
                              tmp50 = Ae;
                            }
                          }
                          class U {
                            constructor() {
                              quests = scrollViewRef.quests;
                              arr = Array.from(quests.values());
                              found = arr.filter((item) => {
                                const obj = scrollToQuestId(quests[32]);
                                return !obj.isQuestExpired(item);
                              });
                              mapped = found.map((id) => id.id);
                              return mapped.sort();
                            }
                          }
                          tmp39[0] = sortMethod;
                          tmp39[1] = filters;
                          tmp39[2] = quests.length;
                          cResult[44] = filters;
                          cResult[45] = quests.length;
                          cResult[46] = sortMethod;
                          cResult[47] = tmp39;
                          tmp38 = tmp39;
                        }
                      }
                    }
                    const items8 = [, , , ];
                    class U {
                      constructor() {
                        quests = scrollViewRef.quests;
                        arr = Array.from(quests.values());
                        found = arr.filter((item) => {
                          const obj = scrollToQuestId(quests[32]);
                          return !obj.isQuestExpired(item);
                        });
                        mapped = found.map((id) => id.id);
                        return mapped.sort();
                      }
                    }
                    items8[1] = sortMethod;
                    items8[2] = hasFetched;
                    items8[3] = scrollViewRef;
                    cResult[39] = filters;
                    cResult[40] = hasFetched;
                    cResult[41] = scrollViewRef;
                    cResult[42] = sortMethod;
                    cResult[43] = items8;
                    tmp36 = items8;
                  }
                  function be() {
                    let tmp2 = null != scrollViewRef.current;
                    const tmp = scrollViewRef;
                    if (tmp2) {
                      tmp2 = hasFetched;
                    }
                    if (tmp2) {
                      const current = tmp.current;
                      current.scrollToOffset({ offset: 0, animated: false });
                    }
                  }
                  cResult[36] = hasFetched;
                  cResult[37] = scrollViewRef;
                  cResult[38] = be;
                  tmp35 = be;
                }
              }
            }
            const obj13 = { name: tmp(tmp2[38]).ImpressionNames.QUEST_HOME, type: tmp(tmp2[38]).ImpressionTypes.VIEW, properties: obj14 };
            ({ utmSourceCurrent: obj10.utm_source_current, utmMediumCurrent: obj10.utm_medium_current, utmCampaignCurrent: obj10.utm_campaign_current, utmContentCurrent: obj10.utm_content_current } = tmp28);
            cResult[30] = tmp28.utmContentCurrent;
            cResult[31] = tmp28.utmMediumCurrent;
            cResult[32] = tmp28.utmSourceCurrent;
            cResult[33] = obj13;
            tmp29 = obj13;
            obj14 = { utm_source_current: null, utm_medium_current: null, utm_campaign_current: null, utm_content_current: null, tab: tmp(tmp2[25]).QuestTabs.ALL };
          }
        }
      }
    }
    function ee() {
      let intl;
      const tmp2 = null != scrollToQuestId && "" !== tmp && hasFetched && !isFetchingCurrentQuests;
      if (tmp2) {
        const obj = QuestDataUtils;
        const tmp8 = null == obj.findQuestOrReplacement(tmp, quests, excludedQuests) && ref.current !== tmp;
        if (tmp8) {
          const obj2 = { text: intl.string(intl4.t.sIyHuY), variant: "critical", duration: 5000 };
          const open = ToastActionCreatorsDefault.open;
          ToastActionCreatorsDefault;
          intl = tmp4(1125).intl;
          open("QUEST_HOME_MOBILE_DEEP_LINK_QUEST_NOT_FOUND", obj2);
          const obj4 = { quest_id: scrollToQuestId };
          const obj3 = AnalyticsUtilsDefault;
          obj3.track(visibilityRef.QUEST_HOME_MOBILE_DEEP_LINK_MISSING_QUEST, obj4);
          ref.current = scrollToQuestId;
        }
      }
    }
    const items9 = [scrollToQuestId, quests, excludedQuests, hasFetched, isFetchingCurrentQuests];
    cResult[19] = excludedQuests;
    cResult[20] = hasFetched;
    cResult[21] = isFetchingCurrentQuests;
    cResult[22] = quests;
    cResult[23] = scrollToQuestId;
    cResult[24] = items9;
    cResult[25] = ee;
    tmp22 = ee;
    tmp21 = items9;
  }
  cResult[1] = filters;
  cResult[2] = sortMethod;
  obj15 = { filters, sortMethod };
}) : (function QuestHome(filters) {
  let _undefined;
  let containerStyle;
  let handleListLayout;
  let handleListLoad;
  let handleListScroll;
  let isNavigationComplete;
  let items14;
  let items15;
  let items16;
  let scrollToQuestId;
  ({ containerStyle, isNavigationComplete, scrollToQuestId } = filters);
  filters = filters.filters;
  const sortMethod = filters.sortMethod;
  let quests;
  let ref;
  let isLoading;
  let questHomeBounties;
  shopCarouselConfig = undefined;
  let config;
  let products;
  let obtainableOrbRewards;
  let showPlaceholderCarousel;
  let ref2;
  let tmp = scrollToQuestId;
  let tmp2 = sortMethod;
  const onClearFilters = filters.onClearFilters;
  let obj = scrollToQuestId(sortMethod[30]);
  const isEligibleForQuests = obj.getIsEligibleForQuests();
  const tmp4 = questHomeBounties();
  const tmp5 = filters;
  const bottom = filters(sortMethod[31])().bottom;
  const useFilteredQuests = scrollToQuestId(sortMethod[25]).useFilteredQuests;
  let obj2 = quests;
  const items = [filters, sortMethod];
  const tmp6 = scrollToQuestId(sortMethod[25]);
  const filteredQuests = useFilteredQuests(scrollToQuestId(sortMethod[25]).QuestTabs.ALL, quests.useMemo(() => ({ filters, sortMethod }), items));
  quests = filteredQuests.quests;
  const excludedQuests = filteredQuests.excludedQuests;
  let isFetchingCurrentQuests = filteredQuests.isFetchingCurrentQuests;
  const hasFetched = filteredQuests.hasFetched;
  let obj3 = scrollToQuestId(sortMethod[14]);
  const items1 = [ref];
  const stateFromStoresArray = obj3.useStateFromStoresArray(items1, () => {
    quests = ref.quests;
    const arr = Array.from(quests.values());
    const found = arr.filter((item) => {
      const obj = scrollToQuestId(sortMethod[32]);
      return !obj.isQuestExpired(item);
    });
    const mapped = found.map((id) => id.id);
    return mapped.sort();
  }, []);
  const items2 = [stateFromStoresArray];
  const effect = quests.useEffect(() => {
    if (stateFromStoresArray.length > 0) {
      const obj = QuestActionCreators;
      obj.markAdContentSeen(AdCreativeType.AdCreativeType.QUEST, tmp);
    }
  }, items2);
  ref = quests.useRef(null);
  const items3 = [scrollToQuestId, quests, excludedQuests];
  const items4 = [scrollToQuestId, quests, excludedQuests, hasFetched, isFetchingCurrentQuests];
  const memo = quests.useMemo(() => {
    if (null == scrollToQuestId) {
      return null;
    } else {
      const obj = QuestDataUtils;
      const result = obj.findQuestOrReplacement(tmp, quests, excludedQuests);
      let findIndexResult = null;
      const obj2 = quests;
      if (null != result) {
        findIndexResult = obj2.findIndex((id) => id.id === result.id);
      }
      return findIndexResult;
    }
  }, items3);
  const effect1 = quests.useEffect(() => {
    let intl;
    const tmp2 = null != scrollToQuestId && "" !== tmp && hasFetched && !isFetchingCurrentQuests;
    if (tmp2) {
      const obj = QuestDataUtils;
      const tmp8 = null == obj.findQuestOrReplacement(tmp, quests, excludedQuests) && ref.current !== tmp;
      if (tmp8) {
        const obj2 = { text: intl.string(intl4.t.sIyHuY), variant: "critical", duration: 5000 };
        const open = ToastActionCreatorsDefault.open;
        ToastActionCreatorsDefault;
        intl = tmp4(1125).intl;
        open("QUEST_HOME_MOBILE_DEEP_LINK_QUEST_NOT_FOUND", obj2);
        const obj4 = { quest_id: scrollToQuestId };
        const obj3 = AnalyticsUtilsDefault;
        obj3.track(handleHeaderLayout.QUEST_HOME_MOBILE_DEEP_LINK_MISSING_QUEST, obj4);
        ref.current = scrollToQuestId;
      }
    }
  }, items4);
  const tmp12 = shopCarouselConfig({ scrollToIndex: memo });
  const scrollViewRef = tmp12.scrollViewRef;
  const handleQuestCardLayout = tmp12.handleQuestCardLayout;
  const handleHeaderLayout = tmp12.handleHeaderLayout;
  const visibilityRef = tmp12.visibilityRef;
  ({ handleListScroll, handleListLayout, handleListLoad } = tmp12);
  const tmp13 = scrollViewRef((getUtmCurrentContext) => getUtmCurrentContext.getUtmCurrentContext());
  let obj4 = { name: scrollToQuestId(sortMethod[38]).ImpressionNames.QUEST_HOME, type: scrollToQuestId(sortMethod[38]).ImpressionTypes.VIEW, properties: { utm_source_current: tmp13.utmSourceCurrent, utm_medium_current: tmp13.utmMediumCurrent, utm_campaign_current: tmp13.utmCampaignCurrent, utm_content_current: tmp13.utmContentCurrent, tab: scrollToQuestId(sortMethod[25]).QuestTabs.ALL } };
  const tmp14 = filters(sortMethod[39]);
  ({ utm_source_current: tmp13.utmSourceCurrent, utm_medium_current: tmp13.utmMediumCurrent, utm_campaign_current: tmp13.utmCampaignCurrent, utm_content_current: tmp13.utmContentCurrent, tab: scrollToQuestId(sortMethod[25]).QuestTabs.ALL });
  tmp14(obj4);
  const items5 = [isEligibleForQuests];
  const effect2 = quests.useEffect(() => {
    const tmp = isEligibleForQuests;
    if (tmp) {
      const QuestHomeOpenTriggerPoint = QuestHomeOpenTriggerPoint2.QuestHomeOpenTriggerPoint;
      QuestHomeOpenTriggerPoint.trigger();
    }
  }, items5);
  const items6 = [filters, sortMethod, hasFetched, scrollViewRef];
  const effect3 = quests.useEffect(() => {
    let tmp2 = null != scrollViewRef.current;
    const tmp = scrollViewRef;
    if (tmp2) {
      tmp2 = hasFetched;
    }
    if (tmp2) {
      const current = tmp.current;
      current.scrollToOffset({ offset: 0, animated: false });
    }
  }, items6);
  const obj6 = scrollToQuestId(sortMethod[25]);
  const obj7 = { selectedSortMethod: sortMethod, selectedFilters: filters, numQuestsVisible: quests.length };
  const questHomeSortingFilteringAnalytics = obj6.useQuestHomeSortingFilteringAnalytics(obj7);
  const obj8 = scrollToQuestId(sortMethod[41]);
  const enabled = obj8.useVirtualCurrencyMobileEnabled().enabled;
  const QuestHomeBountiesFeatureGateExperiment = scrollToQuestId(sortMethod[42]).QuestHomeBountiesFeatureGateExperiment;
  const obj9 = { location: handleQuestCardLayout.QUEST_HOME_MOBILE };
  const enabled2 = QuestHomeBountiesFeatureGateExperiment.useConfig(obj9).enabled;
  const OrbsHoldoutExperiment = scrollToQuestId(sortMethod[43]).OrbsHoldoutExperiment;
  const obj10 = { location: handleQuestCardLayout.QUEST_HOME_MOBILE };
  const enabled3 = OrbsHoldoutExperiment.useConfig(obj10).enabled;
  const OrbsArcadeExperiment = scrollToQuestId(sortMethod[44]).OrbsArcadeExperiment;
  const obj11 = { location: handleQuestCardLayout.QUEST_HOME_MOBILE };
  let enabled4 = OrbsArcadeExperiment.useConfig(obj11).enabled;
  const obj12 = scrollToQuestId(sortMethod[45]);
  const params = obj12.useRoute().params;
  let previewAdCreativeIds;
  const tmp19 = handleQuestCardLayout;
  if (params != null) {
    previewAdCreativeIds = params.previewAdCreativeIds;
  }
  const tmpResult = tmp(tmp2[25]);
  const fetchQuestHomeBounties = tmpResult.useFetchQuestHomeBounties({ previewAdCreativeIds });
  isLoading = fetchQuestHomeBounties.isLoading;
  questHomeBounties = fetchQuestHomeBounties.questHomeBounties;
  const items7 = [previewAdCreativeIds, isLoading, questHomeBounties];
  const effect4 = obj2.useEffect(() => {
    if (null != previewAdCreativeIds) {
      if (0 !== previewAdCreativeIds.length) {
        const tmp8 = isLoading;
        if (!tmp8) {
          const found = questHomeBounties.find((id) => previewAdCreativeIds.includes(id.id));
          if (null != found) {
            const obj = { bountyId: found.id, sourceQuestContent: QuestTypes.QuestContent.VIDEO_MODAL_MOBILE, variant: BountiesModalTypes.BountiesModalVariant.VERTICAL_SCROLL };
            const showModal = BountiesModalActionCreatorsDefault.showModal;
            BountiesModalActionCreatorsDefault;
            showModal(obj);
          }
        }
      }
    }
  }, items7);
  let result = enabled && enabled2 && !enabled3;
  if (result) {
    const tmpResult5 = tmp(tmp2[48]);
    result = tmpResult5.shouldShowBountiesGivenFilters(filters);
  }
  shopCarouselConfig = result;
  const BountiesShopCarouselExperiment = tmp(tmp2[49]).BountiesShopCarouselExperiment;
  const obj13 = { location: tmp19.QUEST_HOME_MOBILE };
  config = BountiesShopCarouselExperiment.useConfig(obj13);
  let tmp26 = result;
  const useQuestHomeOrbShopCarouselData = tmp(tmp2[50]).useQuestHomeOrbShopCarouselData;
  tmp(tmp2[50]);
  if (result) {
    tmp26 = "none" !== config.placement;
  }
  const obj14 = { enabled: tmp26, sortType: config.sortType };
  const questHomeOrbShopCarouselData = useQuestHomeOrbShopCarouselData(obj14);
  products = questHomeOrbShopCarouselData.products;
  obtainableOrbRewards = questHomeOrbShopCarouselData.obtainableOrbRewards;
  showPlaceholderCarousel = questHomeOrbShopCarouselData.showPlaceholderCarousel;
  if (enabled4) {
    enabled4 = enabled;
  }
  if (enabled4) {
    enabled4 = !enabled3;
  }
  if (enabled4) {
    enabled4 = 0 === filters.length;
  }
  let tmp29 = result;
  const tmp28 = config;
  if (result) {
    tmp29 = !isLoading;
  }
  if (tmp29) {
    tmp29 = questHomeBounties.length > 0;
  }
  tmp28({ bountiesAvailable: tmp29 });
  const items8 = [result, enabled4, handleHeaderLayout, config, products, obtainableOrbRewards, showPlaceholderCarousel];
  const items9 = [visibilityRef];
  const callback = obj2.useCallback(() => {
    const obj = { shouldShowBounties: _undefined, shouldShowOrbsArcade: enabled4, onLayout: handleHeaderLayout, shopCarouselConfig: config, orbShopProducts: products, obtainableOrbRewards, showOrbShopPlaceholderCarousel: showPlaceholderCarousel };
    return syncedClientThemes(closure_24, obj);
  }, items8);
  const items10 = [quests, handleQuestCardLayout];
  const callback1 = obj2.useCallback((item) => {
    item = item.item;
    const index = item.index;
    let obj = {
      questOrQuests: item,
      questContent: QuestTypes.QuestContent.QUEST_HOME_MOBILE,
      questContentPosition: index,
      trackGuildAndChannelMetadata: false,
      visibilityRef,
      skipRemountKey: true,
      sourceQuestContent: QuestTypes.QuestContent.QUEST_HOME_MOBILE,
      children() {
        const obj = { quest: item, questContentPosition: index, containerPadding: 0, sourceQuestContent: scrollToQuestId(sortMethod[46]).QuestContent.QUEST_HOME_MOBILE };
        const QuestCard = scrollToQuestId(sortMethod[52]).QuestCard;
        return previewAdCreativeIds(QuestCard, obj);
      }
    };
    const QuestContentImpressionTrackerNative = QuestContentImpressionTracker.QuestContentImpressionTrackerNative;
    return syncedClientThemes(QuestContentImpressionTrackerNative, obj);
  }, items9);
  let tmp34 = !isNavigationComplete;
  const callback2 = obj2.useCallback((arg0) => {
    const index = arg0;
    let obj = {
      onLayout(arg0) {
        const obj = index;
        if (null != quests[index.index]) {
          handleQuestCardLayout(arg0, quests[index.index].id);
        }
        obj.onLayout(arg0);
      }
    };
    const merged = Object.assign(arg0);
    return previewAdCreativeIds(excludedQuests, obj);
  }, items10);
  if (isNavigationComplete) {
    tmp34 = result && isLoading;
  }
  if (!tmp34) {
    if (isFetchingCurrentQuests) {
      isFetchingCurrentQuests = 0 === quests.length;
    }
    tmp34 = isFetchingCurrentQuests;
  }
  isFetchingCurrentQuests = tmp34;
  ref2 = obj2.useRef(result);
  const items11 = [result];
  const effect5 = obj2.useEffect(() => {
    ref2.current = _undefined;
  }, items11);
  const items12 = [isEligibleForQuests];
  const effect6 = obj2.useEffect(() => {
    if (isEligibleForQuests) {
      let obj = QuestHomeRoundtripTrackerDefault;
      const obj2 = { includesBounties: ref2.current };
      obj.startTracking(obj2);
      return () => {
        const obj = filters(sortMethod[53]);
        obj.clearTracking();
      };
    }
  }, items12);
  const items13 = [isEligibleForQuests, tmp34];
  const effect7 = obj2.useEffect(() => {
    const tmp = isEligibleForQuests && !isFetchingCurrentQuests;
    if (tmp) {
      const obj2 = { includesBounties: ref2.current };
      const obj = QuestHomeRoundtripTrackerDefault;
      obj.stopTracking(obj2);
    }
  }, items13);
  const tmpResult7 = tmp(tmp2[25]);
  const shouldShowPreviewToolTab = tmpResult7.useShouldShowPreviewToolTab();
  const tmpResult8 = tmp(tmp2[54]);
  const isHexagonCampaignQuestHomeHeaderEnabled = tmpResult8.useIsHexagonCampaignQuestHomeHeaderEnabled("QuestHome");
  let tmp41 = null;
  if (isEligibleForQuests) {
    let tmp52Result;
    if (tmp34) {
      const obj15 = { style: items14, children: previewAdCreativeIds(isFetchingCurrentQuests, { animating: true }) };
      items14 = [tmp4.loadingContainer, containerStyle];
      tmp52Result = previewAdCreativeIds(excludedQuests, obj15);
    } else if (0 === quests.length) {
      let tmp45Result;
      const obj16 = { style: items15, children: items16 };
      items15 = [tmp4.container, containerStyle];
      items16 = [previewAdCreativeIds(tmp5(tmp2[28]), {}), ];
      const tmp43 = isLoading;
      const tmp44 = excludedQuests;
      if (0 === filters.length) {
        const obj17 = { hasContentAbove: isHexagonCampaignQuestHomeHeaderEnabled };
        tmp45Result = tmp45(products, obj17);
      } else {
        const obj18 = { onClearFilters, hasContentAbove: isHexagonCampaignQuestHomeHeaderEnabled };
        tmp45Result = tmp45(obtainableOrbRewards, obj18);
      }
      items16[1] = tmp45Result;
      tmp52Result = tmp43(tmp44, obj16);
    } else {
      const obj19 = { ref: scrollViewRef, contentContainerStyle: null, style: null, accessibilityLabel: null, data: null, renderItem: null, showsHorizontalScrollIndicator: false, ListHeaderComponent: null, CellRendererComponent: null, onLayout: null, onScroll: null, onLoad: null, scrollEventThrottle: 16 };
      const tmp52 = previewAdCreativeIds;
      if (result) {
        let num5 = 0;
        const obj20 = { paddingTop: num5, paddingBottom: bottom };
        obj19.contentContainerStyle = obj20;
        const items17 = [tmp4.container, containerStyle];
        obj19.style = items17;
        let intl = tmp(tmp2[20]).intl;
        obj19.accessibilityLabel = intl.string(tmp(tmp2[20]).t.JALI2K);
        obj19.data = quests;
        obj19.renderItem = callback1;
        obj19.ListHeaderComponent = callback;
        obj19.CellRendererComponent = callback2;
        obj19.onLayout = handleListLayout;
        obj19.onScroll = handleListScroll;
        obj19.onLoad = handleListLoad;
        tmp52Result = tmp52(tmp53, obj19);
      }
      num5 = tmp5(tmp2[11]).space.PX_16;
    }
    tmp41 = tmp52Result;
  }
  return tmp41;
}));
let result = size.fileFinishedImporting("modules/quests/native/QuestHome.tsx");

export default memoResult;
