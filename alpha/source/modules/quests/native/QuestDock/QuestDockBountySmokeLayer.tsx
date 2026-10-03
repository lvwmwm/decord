// Module ID: 15002
// Function ID: 15003
// Name: QuestDockBountySmokeLayer
// Dependencies: [32, 19, 17, 4879, 5623, 21, 558, 15003, 1369, 15004, 15005, 576, 1484, 1618, 14891, 5974, 504, 15006, 7983, 15007, 14980, 15008, 2]

// Module 15002 (QuestDockBountySmokeLayer)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1484 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import QuestConstants from "QuestConstants" /* 5623 */;
import FastImageDefault from "FastImage" /* 5974 */;
import QuestDockUtils from "QuestDockUtils" /* 14891 */;
import reactDefault from "react" /* 14980 */;
import BountiesAndroidQuestBarSmokeAnimationExperiment from "BountiesAndroidQuestBarSmokeAnimationExperiment" /* 15003 */;
import _modDef15004 from "module_15004" /* 15004 */;
import _modDef15005 from "module_15005" /* 15005 */;
import useIsQuestDockContentVisibleDefault from "useIsQuestDockContentVisible" /* 15006 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let _require, dependencyMap, importDefault, paused;

let c10;
let c9;
let metroImportAll;
let obj3;
let tmp9;
const _modDef15007 = tmp9(15007);
const _modDef15008 = tmp9(15008);
let _slicedToArray = _slicedToArray_mod;
const StyleSheet = react_native.StyleSheet;
const QuestsExperimentLocations = QuestConstants.QuestsExperimentLocations;
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = Fragment);
let c11 = 3.75;
const QuestDockBountySmokeSurface = { COLLAPSED: "collapsed", EXPANDED: "expanded" };
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const obj = BountiesAndroidQuestBarSmokeAnimationExperiment;
  const isBountiesAndroidQuestBarSmokeAnimationEnabled = obj.useIsBountiesAndroidQuestBarSmokeAnimationEnabled(QuestsExperimentLocations.QUESTS_BAR_MOBILE);
  const obj2 = PlatformUtils;
  if (obj2.isAndroid()) {
    let tmp3;
    if (isBountiesAndroidQuestBarSmokeAnimationEnabled) {
      tmp3 = _modDef15005;
    }
    return tmp3;
  }
  tmp3 = _modDef15004;
}) : (() => {
  const obj = BountiesAndroidQuestBarSmokeAnimationExperiment;
  const isBountiesAndroidQuestBarSmokeAnimationEnabled = obj.useIsBountiesAndroidQuestBarSmokeAnimationEnabled(QuestsExperimentLocations.QUESTS_BAR_MOBILE);
  const obj2 = PlatformUtils;
  if (obj2.isAndroid()) {
    let tmp3;
    if (isBountiesAndroidQuestBarSmokeAnimationEnabled) {
      tmp3 = _modDef15005;
    }
    return tmp3;
  }
  tmp3 = _modDef15004;
});
ReactCompilerGating = ReactCompilerGating_mod;
let obj2 = { video: StyleSheet.absoluteFillObject, hiddenVideo: obj3 };
obj3 = { opacity: 0 };
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let left;
  let right;
  const obj = react2;
  const cResult = obj.c(3);
  const width = useWindowDimensionsDefault().width;
  ({ left, right } = useSafeAreaInsetsDefault());
  useSafeAreaInsetsDefault();
  const obj2 = QuestDockUtils;
  const questDockExpandedWidth = obj2.getQuestDockExpandedWidth(width, left, right);
  const result = questDockExpandedWidth / c11;
  if (cResult[0] === result) {
    let tmp5;
    if (cResult[1] === questDockExpandedWidth) {
      tmp5 = cResult[2];
    }
    return tmp5;
  }
  size = { width: questDockExpandedWidth, height: result };
  cResult[0] = result;
  cResult[1] = questDockExpandedWidth;
  cResult[2] = size;
  tmp5 = size;
}) : (() => {
  let left;
  let right;
  const width = left(right[12])().width;
  const rect = left(right[13])();
  left = rect.left;
  right = rect.right;
  const items = [width, left, right];
  return react.useMemo(() => {
    const obj = QuestDockUtils;
    const questDockExpandedWidth = obj.getQuestDockExpandedWidth(width, left, right);
    size = { width: questDockExpandedWidth, height: questDockExpandedWidth / c11 };
    return size;
  }, items);
});
const create = StyleSheet.create;
let merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_13 = create(obj2);
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let obj3;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { source: obj3, style: StyleSheet.absoluteFillObject, resizeMode: "cover", accessible: false, importantForAccessibility: "no-hide-descendants" };
    obj3 = { uri: _modDef15004 };
    const tmp6 = FastImageDefault;
    const tmp8 = metroImportAll(tmp6, obj2);
    cResult[0] = tmp8;
    first = tmp8;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => {
  let obj2;
  const obj = { source: obj2, style: StyleSheet.absoluteFillObject, resizeMode: "cover", accessible: false, importantForAccessibility: "no-hide-descendants" };
  obj2 = { uri: _modDef15004 };
  const tmp = FastImageDefault;
  return metroImportAll(tmp, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((paused) => {
  let closure_0;
  let obj3;
  let tmp12;
  let tmp13;
  let tmp18;
  let tmp19;
  let tmp5;
  let tmp6;
  let useReducedMotion;
  const obj = react2;
  const cResult = obj.c(14);
  paused = paused.paused;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function c() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  const tmp10 = useIsQuestDockContentVisibleDefault();
  [tmp12, tmp13] = react.useState(false);
  const require = tmp13;
  _slicedToArray(react.useState(false), 2);
  const tmp14 = _slicedToArray(react.useState(stateFromStores), 2);
  if (tmp14[0] !== stateFromStores) {
    tmp14[1](stateFromStores);
    const tmp16 = stateFromStores && tmp12;
    if (tmp16) {
      tmp13(false);
    }
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function y() {
      tmp13(true);
    };
    cResult[2] = fn2;
    tmp18 = fn2;
  } else {
    tmp18 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class O {
      constructor() {
        tmp13(false);
      }
    }
    cResult[3] = O;
    tmp19 = O;
  } else {
    class O {
      constructor() {
        tmp13(false);
      }
    }
  }
  if (cResult[4] === tmp10) {
    class O {
      constructor() {
        tmp13(false);
      }
    }
  }
  let tmp21Result = !stateFromStores;
  if (tmp21Result) {
    class O {
      constructor() {
        tmp13(false);
      }
    }
    const obj2 = { style: tmp12 ? closure_13.video : closure_13.hiddenVideo, source: obj3, resizeMode: "cover", paused: undefined !== paused && paused || !tmp10, muted: true, disableFocus: true, preventsDisplaySleepDuringVideoPlayback: false, importantForAccessibility: "no-hide-descendants", onReadyForDisplay: tmp18, onError: tmp19 };
    obj3 = { uri: _modDef15007 };
    const VideoComponent = tmp(7983).VideoComponent;
    tmp21Result = tmp21(VideoComponent, obj2);
  }
  cResult[4] = tmp10;
  cResult[5] = tmp12;
  cResult[6] = undefined !== paused && paused;
  cResult[7] = stateFromStores;
  cResult[8] = tmp21Result;
}) : ((paused) => {
  let _undefined;
  let obj4;
  let tmp7;
  let tmp8;
  let useReducedMotion;
  let flag = paused.paused;
  if (flag === undefined) {
    flag = false;
  }
  _require = undefined;
  const items = [AccessibilityStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp5 = useIsQuestDockContentVisibleDefault();
  [tmp7, tmp8] = react.useState(false);
  const tmp = _require;
  _require = tmp8;
  _slicedToArray(react.useState(false), 2);
  const tmp9 = _slicedToArray(react.useState(stateFromStores), 2);
  const obj2 = react;
  if (tmp9[0] !== stateFromStores) {
    tmp9[1](stateFromStores);
    const tmp11 = stateFromStores && tmp7;
    if (tmp11) {
      tmp8(false);
    }
  }
  const callback = obj2.useCallback(() => {
    _undefined(true);
  }, []);
  let tmp18Result = !stateFromStores;
  const tmp15 = closure_10;
  const tmp16 = closure_9;
  if (!stateFromStores) {
    const obj3 = { style: tmp7 ? closure_13.video : closure_13.hiddenVideo, source: obj4, resizeMode: "cover", paused: flag, muted: true, disableFocus: true, preventsDisplaySleepDuringVideoPlayback: false, importantForAccessibility: "no-hide-descendants", onReadyForDisplay: callback, onError: tmp14 };
    obj4 = { uri: _modDef15007 };
    const VideoComponent = tmp(7983).VideoComponent;
    const tmp18 = closure_8;
    if (!flag) {
      flag = !tmp5;
    }
    tmp18Result = tmp18(VideoComponent, obj3);
  }
  const children = [tmp18Result, ];
  children[1] = !tmp7 && closure_8(closure_14, {});
  const tmp20 = !tmp7 && closure_8(closure_14, {});
  return tmp15(tmp16, { children });
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((paused) => {
  let closure_1;
  let closure_3;
  let isRendered;
  let obj4;
  let ref;
  let tmp13;
  let tmp14;
  let tmp16;
  let tmp17;
  let tmp22;
  let tmp23;
  let tmp29;
  let tmp30;
  let tmp32;
  let tmp33;
  let tmp5;
  let tmp6;
  let useReducedMotion;
  const tmp = isRendered;
  const obj = isRendered(576);
  const cResult = obj.c(19);
  paused = paused.paused;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function p() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  const tmp10 = useIsQuestDockContentVisibleDefault();
  isRendered = react.useContext(reactDefault).isRendered;
  [tmp13, tmp14] = react.useState(false);
  importDefault = tmp14;
  _slicedToArray(react.useState(false), 2);
  dependencyMap = react.useRef(null);
  [tmp16, tmp17] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  const tmp11 = _slicedToArray;
  _slicedToArray = tmp17;
  const tmp18 = _slicedToArray(react.useState(isRendered), 2);
  if (tmp18[0] !== isRendered) {
    tmp18[1](isRendered);
    const tmp20 = !isRendered && tmp16;
    if (tmp20) {
      tmp17(false);
    }
  }
  if (cResult[2] !== isRendered) {
    const fn2 = function h() {
      let closure_0;
      let timeout;
      if (timeout) {
        const _setTimeout = setTimeout;
        timeout = setTimeout(() => {
          closure_1_3(true);
        }, 600);
        return () => {
          clearTimeout(closure_0);
        };
      }
    };
    const items1 = [isRendered];
    cResult[2] = isRendered;
    cResult[3] = fn2;
    cResult[4] = items1;
    tmp23 = items1;
    tmp22 = fn2;
  } else {
    tmp22 = cResult[3];
    tmp23 = cResult[4];
  }
  const effect = obj3.useEffect(tmp22, tmp23);
  let tmp9Result = null;
  if (!stateFromStores) {
    tmp9Result = null;
    if (tmp16) {
      tmp9Result = _modDef15008;
    }
  }
  const tmp11Result = tmp11(react.useState(tmp9Result), 2);
  if (tmp11Result[0] !== tmp9Result) {
    tmp11Result[1](tmp9Result);
    if (tmp13) {
      tmp14(false);
    }
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const fn3 = function x() {
      return () => {
        if (null != ref.current) {
          const _clearTimeout = clearTimeout;
          clearTimeout(ref.current);
          ref.current = null;
        }
      };
    };
    cResult[5] = fn3;
    tmp29 = fn3;
  } else {
    tmp29 = cResult[5];
  }
  if (cResult[6] !== tmp9Result) {
    const items2 = [tmp9Result];
    cResult[6] = tmp9Result;
    cResult[7] = items2;
    tmp30 = items2;
  } else {
    tmp30 = cResult[7];
  }
  const effect1 = obj3.useEffect(tmp29, tmp30);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class U {
      constructor() {
        if (null != ref.current) {
          const _clearTimeout = clearTimeout;
          clearTimeout(ref.current);
        }
        ref.current = setTimeout(() => {
          closure_1_1(true);
          ref.current = null;
        }, 150);
      }
    }
    cResult[8] = U;
    tmp32 = U;
  } else {
    class U {
      constructor() {
        if (null != ref.current) {
          const _clearTimeout = clearTimeout;
          clearTimeout(ref.current);
        }
        ref.current = setTimeout(() => {
          closure_1_1(true);
          ref.current = null;
        }, 150);
      }
    }
  }
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class U {
      constructor() {
        if (null != ref.current) {
          const _clearTimeout = clearTimeout;
          clearTimeout(ref.current);
        }
        ref.current = setTimeout(() => {
          closure_1_1(true);
          ref.current = null;
        }, 150);
      }
    }
    cResult[9] = tmp34;
    tmp33 = tmp34;
  } else {
    class U {
      constructor() {
        if (null != ref.current) {
          const _clearTimeout = clearTimeout;
          clearTimeout(ref.current);
        }
        ref.current = setTimeout(() => {
          closure_1_1(true);
          ref.current = null;
        }, 150);
      }
    }
  }
  if (cResult[10] === tmp10) {
    class U {
      constructor() {
        if (null != ref.current) {
          const _clearTimeout = clearTimeout;
          clearTimeout(ref.current);
        }
        ref.current = setTimeout(() => {
          closure_1_1(true);
          ref.current = null;
        }, 150);
      }
    }
  }
  let tmp36Result = null != tmp9Result;
  if (tmp36Result) {
    class U {
      constructor() {
        if (null != ref.current) {
          const _clearTimeout = clearTimeout;
          clearTimeout(ref.current);
        }
        ref.current = setTimeout(() => {
          closure_1_1(true);
          ref.current = null;
        }, 150);
      }
    }
    const obj2 = { style: closure_13.video, source: obj4, resizeMode: "cover", paused: tmp38, muted: true, disableFocus: true, preventsDisplaySleepDuringVideoPlayback: false, importantForAccessibility: "no-hide-descendants", onLoad: tmp32, onError: tmp33 };
    obj4 = { uri: tmp9Result };
    const VideoComponent = tmp(7983).VideoComponent;
    if (!(undefined !== paused && paused)) {
      class U {
        constructor() {
          if (null != ref.current) {
            const _clearTimeout = clearTimeout;
            clearTimeout(ref.current);
          }
          ref.current = setTimeout(() => {
            closure_1_1(true);
            ref.current = null;
          }, 150);
        }
      }
    }
    tmp36Result = tmp36(VideoComponent, obj2);
  }
  cResult[10] = tmp10;
  cResult[11] = undefined !== paused && paused;
  cResult[12] = tmp9Result;
  cResult[13] = tmp36Result;
}) : ((paused) => {
  let _undefined;
  let c3;
  let obj4;
  let obj6;
  let ref;
  let tmp11;
  let tmp12;
  let tmp8;
  let tmp9;
  let useReducedMotion;
  let flag = paused.paused;
  if (flag === undefined) {
    flag = false;
  }
  let isRendered;
  _slicedToArray = undefined;
  const tmp = isRendered;
  const items = [AccessibilityStore];
  const obj = isRendered(504);
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp5 = useIsQuestDockContentVisibleDefault();
  isRendered = react.useContext(reactDefault).isRendered;
  [tmp8, tmp9] = react.useState(false);
  importDefault = tmp9;
  _slicedToArray(react.useState(false), 2);
  dependencyMap = react.useRef(null);
  [tmp11, tmp12] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  const tmp6 = _slicedToArray;
  _slicedToArray = tmp12;
  const tmp13 = _slicedToArray(react.useState(isRendered), 2);
  if (tmp13[0] !== isRendered) {
    tmp13[1](isRendered);
    const tmp15 = !isRendered && tmp11;
    if (tmp15) {
      tmp12(false);
    }
  }
  const items1 = [isRendered];
  const effect = obj2.useEffect(() => {
    let closure_0;
    let timeout;
    if (timeout) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        closure_1_3(true);
      }, 600);
      return () => {
        clearTimeout(closure_0);
      };
    }
  }, items1);
  let tmp4Result = null;
  if (!stateFromStores) {
    tmp4Result = null;
    if (tmp11) {
      tmp4Result = tmp4(15008);
    }
  }
  const tmp6Result = tmp6(react.useState(tmp4Result), 2);
  if (tmp6Result[0] !== tmp4Result) {
    tmp6Result[1](tmp4Result);
    if (tmp8) {
      tmp9(false);
    }
  }
  const items2 = [tmp4Result];
  const effect1 = obj2.useEffect(() => () => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      ref.current = null;
    }
  }, items2);
  const callback = obj2.useCallback(() => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
    }
    ref.current = setTimeout(() => {
      _undefined(true);
      ref.current = null;
    }, 150);
  }, []);
  let tmp28Result = null != tmp4Result;
  const tmp25 = closure_10;
  const tmp26 = closure_9;
  if (tmp28Result) {
    const obj3 = { style: closure_13.video, source: obj4, resizeMode: "cover", paused: flag, muted: true, disableFocus: true, preventsDisplaySleepDuringVideoPlayback: false, importantForAccessibility: "no-hide-descendants", onLoad: callback, onError: tmp24 };
    obj4 = { uri: tmp4Result };
    const VideoComponent = tmp(7983).VideoComponent;
    const tmp28 = closure_8;
    if (!flag) {
      flag = !tmp5;
    }
    tmp28Result = tmp28(VideoComponent, obj3);
  }
  const children = [tmp28Result, ];
  let tmp30 = !tmp8;
  if (tmp30) {
    const obj5 = { source: obj6, style: StyleSheet.absoluteFillObject, resizeMode: "cover", accessible: false, importantForAccessibility: "no-hide-descendants" };
    obj6 = { uri: _modDef15005 };
    const tmp4Result2 = FastImageDefault;
    tmp30 = closure_8(tmp4Result2, obj5);
  }
  children[1] = tmp30;
  return tmp25(tmp26, { children });
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((surface) => {
  let first;
  const obj = react2;
  const cResult = obj.c(3);
  const obj2 = BountiesAndroidQuestBarSmokeAnimationExperiment;
  if (obj2.useIsBountiesAndroidQuestBarSmokeAnimationEnabled(QuestsExperimentLocations.QUESTS_BAR_MOBILE)) {
    if (surface.surface !== obj.EXPANDED) {
      let tmp8;
      if (cResult[1] !== surface) {
        const obj3 = {};
        const merged = Object.assign(surface);
        const tmp14 = metroImportAll(closure_16, obj3);
        cResult[1] = surface;
        cResult[2] = tmp14;
        tmp8 = tmp14;
      } else {
        tmp8 = cResult[2];
      }
      first = tmp8;
    }
    return first;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = metroImportAll(closure_14, {});
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
}) : ((surface) => {
  const obj = BountiesAndroidQuestBarSmokeAnimationExperiment;
  if (obj.useIsBountiesAndroidQuestBarSmokeAnimationEnabled(QuestsExperimentLocations.QUESTS_BAR_MOBILE)) {
    let tmp3;
    if (surface.surface !== obj.EXPANDED) {
      const obj2 = {};
      const merged = Object.assign(surface);
      tmp3 = metroImportAll(closure_16, obj2);
    }
    return tmp3;
  }
  tmp3 = metroImportAll(closure_14, {});
});
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let tmp4;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] !== arg0) {
    let tmp5Result;
    const tmpResult = PlatformUtils;
    if (tmpResult.isAndroid()) {
      const obj2 = {};
      const merged = Object.assign(arg0);
      tmp5Result = tmp5(closure_17, obj2);
    } else {
      const obj3 = {};
      const merged1 = Object.assign(arg0);
      tmp5Result = tmp5(closure_15, obj3);
    }
    cResult[0] = arg0;
    cResult[1] = tmp5Result;
    tmp4 = tmp5Result;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : ((arg0) => {
  let tmpResult;
  const obj = PlatformUtils;
  if (obj.isAndroid()) {
    const obj2 = {};
    const merged = Object.assign(arg0);
    tmpResult = tmp(closure_17, obj2);
  } else {
    const obj3 = {};
    const merged1 = Object.assign(arg0);
    tmpResult = tmp(closure_15, obj3);
  }
  return tmpResult;
}));
let size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBountySmokeLayer.tsx");

export default memoResult;
export const QUEST_DOCK_BOUNTY_SMOKE_ART_ASPECT_RATIO = 3.75;
export { QuestDockBountySmokeSurface };
export const useQuestDockBountySmokeCollapsedPlaceholderUrl = tmp3;
export const useSmokeArtSize = tmp4;
