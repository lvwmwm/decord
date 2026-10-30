// Module ID: 17105
// Function ID: 17106
// Name: QuestDockBountySmokeLayer
// Dependencies: [32, 19, 17, 5010, 6775, 21, 17106, 1376, 17107, 17108, 1492, 1626, 17000, 5712, 504, 17109, 8864, 17110, 17083, 17111, 2]
// Exports: useQuestDockBountySmokeCollapsedPlaceholderUrl, useSmokeArtSize

// Module 17105 (QuestDockBountySmokeLayer)
import react_native from "react-native" /* 17 */;
import PlatformUtils from "PlatformUtils" /* 1376 */;
import FastImageDefault from "FastImage" /* 5712 */;
import QuestConstants from "QuestConstants" /* 6775 */;
import QuestDockUtils from "QuestDockUtils" /* 17000 */;
import reactDefault from "react" /* 17083 */;
import BountiesAndroidQuestBarSmokeAnimationExperiment from "BountiesAndroidQuestBarSmokeAnimationExperiment" /* 17106 */;
import _modDef17107 from "module_17107" /* 17107 */;
import _modDef17108 from "module_17108" /* 17108 */;
import useIsQuestDockContentVisibleDefault from "useIsQuestDockContentVisible" /* 17109 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5010 */;
import Fragment from "Fragment" /* 21 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault;

let c10;
let c9;
let metroImportAll;
let obj3;
let tmp4;
const _modDef17110 = tmp4(17110);
function QuestDockBountySmokePlaceholder() {
  let obj2;
  const obj = { source: obj2, style: StyleSheet.absoluteFillObject, resizeMode: "cover", accessible: false, importantForAccessibility: "no-hide-descendants" };
  obj2 = { uri: _modDef17107 };
  const tmp = FastImageDefault;
  return metroImportAll(tmp, obj);
}
function QuestDockBountySmokeLayerIOS(paused) {
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
    const obj3 = { style: tmp7 ? video.video : video.hiddenVideo, source: obj4, resizeMode: "cover", paused: flag, muted: true, disableFocus: true, preventsDisplaySleepDuringVideoPlayback: false, importantForAccessibility: "no-hide-descendants", onReadyForDisplay: callback, onError: tmp14 };
    obj4 = { uri: _modDef17110 };
    const VideoComponent = tmp(8864).VideoComponent;
    const tmp18 = closure_8;
    if (!flag) {
      flag = !tmp5;
    }
    tmp18Result = tmp18(VideoComponent, obj3);
  }
  const children = [tmp18Result, ];
  children[1] = !tmp7 && closure_8(QuestDockBountySmokePlaceholder, {});
  const tmp20 = !tmp7 && closure_8(QuestDockBountySmokePlaceholder, {});
  return tmp15(tmp16, { children });
}
function QuestDockBountySmokeLayerAndroidAnimated(paused) {
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
      tmp4Result = tmp4(17111);
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
    const obj3 = { style: video.video, source: obj4, resizeMode: "cover", paused: flag, muted: true, disableFocus: true, preventsDisplaySleepDuringVideoPlayback: false, importantForAccessibility: "no-hide-descendants", onLoad: callback, onError: tmp24 };
    obj4 = { uri: tmp4Result };
    const VideoComponent = tmp(8864).VideoComponent;
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
    obj6 = { uri: _modDef17108 };
    const tmp4Result2 = FastImageDefault;
    tmp30 = closure_8(tmp4Result2, obj5);
  }
  children[1] = tmp30;
  return tmp25(tmp26, { children });
}
function QuestDockBountySmokeLayerAndroid(surface) {
  const obj = BountiesAndroidQuestBarSmokeAnimationExperiment;
  if (obj.useIsBountiesAndroidQuestBarSmokeAnimationEnabled(QuestsExperimentLocations.QUESTS_BAR_MOBILE)) {
    let tmp3;
    if (surface.surface !== obj.EXPANDED) {
      const obj2 = {};
      const merged = Object.assign(surface);
      tmp3 = metroImportAll(QuestDockBountySmokeLayerAndroidAnimated, obj2);
    }
    return tmp3;
  }
  tmp3 = metroImportAll(QuestDockBountySmokePlaceholder, {});
}
let _slicedToArray = _slicedToArray_mod;
const StyleSheet = react_native.StyleSheet;
const QuestsExperimentLocations = QuestConstants.QuestsExperimentLocations;
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = Fragment);
const QuestDockBountySmokeSurface = { COLLAPSED: "collapsed", EXPANDED: "expanded" };
let obj2 = { video: StyleSheet.absoluteFillObject, hiddenVideo: obj3 };
obj3 = { opacity: 0 };
const create = StyleSheet.create;
let merged = Object.assign(StyleSheet.absoluteFillObject);
const video = create(obj2);
const memoResult = react.memo(function QuestDockBountySmokeLayer(arg0) {
  let tmpResult;
  const obj = PlatformUtils;
  if (obj.isAndroid()) {
    const obj2 = {};
    const merged = Object.assign(arg0);
    tmpResult = tmp(QuestDockBountySmokeLayerAndroid, obj2);
  } else {
    const obj3 = {};
    const merged1 = Object.assign(arg0);
    tmpResult = tmp(QuestDockBountySmokeLayerIOS, obj3);
  }
  return tmpResult;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBountySmokeLayer.tsx");

export default memoResult;
export const QUEST_DOCK_BOUNTY_SMOKE_ART_ASPECT_RATIO = 3.75;
export { QuestDockBountySmokeSurface };
export function useQuestDockBountySmokeCollapsedPlaceholderUrl() {
  const obj = BountiesAndroidQuestBarSmokeAnimationExperiment;
  const isBountiesAndroidQuestBarSmokeAnimationEnabled = obj.useIsBountiesAndroidQuestBarSmokeAnimationEnabled(QuestsExperimentLocations.QUESTS_BAR_MOBILE);
  const obj2 = PlatformUtils;
  if (obj2.isAndroid()) {
    let tmp3;
    if (isBountiesAndroidQuestBarSmokeAnimationEnabled) {
      tmp3 = _modDef17108;
    }
    return tmp3;
  }
  tmp3 = _modDef17107;
}
export function useSmokeArtSize() {
  let left;
  let right;
  const width = left(right[10])().width;
  const rect = left(right[11])();
  left = rect.left;
  right = rect.right;
  const items = [width, left, right];
  return react.useMemo(() => {
    const obj = QuestDockUtils;
    const questDockExpandedWidth = obj.getQuestDockExpandedWidth(width, left, right);
    size = { width: questDockExpandedWidth, height: questDockExpandedWidth / 3.75 };
    return size;
  }, items);
}
