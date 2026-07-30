// Module ID: 14214
// Function ID: 14215
// Name: QUEST_DOCK_EXPANDED_HEIGHT
// Dependencies: [32, 19, 17, 4181, 5033, 14118, 676, 21, 4189, 14200, 14114, 14119, 14122, 8115, 589, 3893, 712, 689, 4050, 4599, 500, 10956, 7676, 8139, 5141, 4611, 2]

// Module 14214 (QUEST_DOCK_EXPANDED_HEIGHT)
import _slicedToArray from "_slicedToArray";
import importAllResult from "CONFIG_NEVER_ANIMATE";
import get_ActivityIndicator from "n";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import { QuestDockMode } from "QuestsExperimentLocations";
import QUEST_DOCK_COLLAPSED_HEIGHT from "QUEST_DOCK_COLLAPSED_HEIGHT";
import { VerticalGradient } from "ME";
import jsxProd from "openRewardClaimBottomSheet";
import createCacheKey from "createCacheKey";

let QUEST_DOCK_EXPANDED_HEIGHT;
let StyleSheet;
let c5;
let c9;
let closure_12;
let metroImportAll;
let unpackModuleId;
const require = arg1;
let c4 = importAllResult;
({ AppState: c5, StyleSheet } = get_ActivityIndicator);
({ QUEST_DOCK_EXPANDED_HEIGHT, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: metroImportAll, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: c9 } = QUEST_DOCK_COLLAPSED_HEIGHT);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
let obj = { backgroundWrapper: null, backgroundHeroAsset: null, backgroundHeroAssetVideo: null, backgroundGradient: null };
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj.right = undefined;
obj.bottom = undefined;
obj.height = QUEST_DOCK_EXPANDED_HEIGHT;
obj.zIndex = 1;
obj[0] = obj;
createCacheKey = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
createCacheKey.height = QUEST_DOCK_EXPANDED_HEIGHT;
createCacheKey.resizeMode = "cover";
obj[1] = createCacheKey;
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj[2] = {};
let obj3 = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj3.height = QUEST_DOCK_EXPANDED_HEIGHT;
obj[3] = obj3;
let closure_13 = createCacheKey.createStyles(obj);
let closure_14 = { code: "function QuestDockUnenrolledBackgroundTsx1(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,windowDimensions}=this.__closure;return{transform:[{translateX:withSpring(activeQuestDockMode.get()===QuestDockMode.COLLAPSED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*-1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)},{translateY:withSpring(activeQuestDockMode.get()===QuestDockMode.COLLAPSED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*-1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)}],width:windowDimensions.get().width};}" };
let closure_15 = { code: "function QuestDockUnenrolledBackgroundTsx2(){const{withSpring,activeQuestDockMode,QuestDockMode,videoLoaded,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()!==QuestDockMode.EXPANDED||!videoLoaded?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}" };
const memoResult = importAllResult.memo(function QuestDockUnenrolledBackground() {
  let closure_4;
  let staticUrl;
  let tmp17;
  let videoAsset;
  let obj = importAllResult;
  let tmp3 = callback2();
  let obj1 = activeQuestDockMode(setRestingQuestDockMode[10]);
  const questDockHeroAsset = obj1.useQuestDockHeroAsset(importAllResult.useContext(windowDimensions(setRestingQuestDockMode[9])).quest);
  ({ staticUrl, videoAsset } = questDockHeroAsset);
  const context = importAllResult.useContext(activeQuestDockMode(setRestingQuestDockMode[11]).QuestDockGestureContext);
  activeQuestDockMode = context.activeQuestDockMode;
  windowDimensions = context.windowDimensions;
  setRestingQuestDockMode = importAllResult.useContext(activeQuestDockMode(setRestingQuestDockMode[12]).QuestDockExternalCoordinationContext).setRestingQuestDockMode;
  let obj2 = activeQuestDockMode(setRestingQuestDockMode[14]);
  let items = [maybeApplyNoTextColorForLightCustomTheme];
  const stateFromStores = obj2.useStateFromStores(items, () => lib.useReducedMotion);
  let obj3 = activeQuestDockMode(setRestingQuestDockMode[15]);
  const token = obj3.useToken(windowDimensions(setRestingQuestDockMode[16]).colors.CARD_BACKGROUND_DEFAULT);
  const items1 = [token];
  const memo = importAllResult.useMemo(() => {
    const obj = windowDimensions(setRestingQuestDockMode[17])(token);
    const items = [obj.alpha(0).hex(), , , ];
    const alphaResult = obj.alpha(0);
    items[1] = obj.alpha(0.1).hex();
    const alphaResult1 = obj.alpha(0.1);
    items[2] = obj.alpha(0.8).hex();
    const alphaResult2 = obj.alpha(0.8);
    items[3] = obj.alpha(1).hex();
    return items;
  }, items1);
  const memo1 = importAllResult.useMemo(() => [0, 0.33, 0.76, 1], []);
  let obj4 = activeQuestDockMode(setRestingQuestDockMode[18]);
  const fn = function s() {
    let obj = activeQuestDockMode(setRestingQuestDockMode[19]);
    let obj1 = activeQuestDockMode;
    let num = 0;
    if (activeQuestDockMode.get() === outer1_7.COLLAPSED) {
      num = -1 * outer1_9;
    }
    obj = { translateX: obj.withSpring(num, outer1_8) };
    const items = [obj, ];
    let num3 = 0;
    if (obj1.get() === outer1_7.COLLAPSED) {
      num3 = -1 * outer1_9;
    }
    obj = { transform: null, width: null };
    obj1 = { translateY: activeQuestDockMode(setRestingQuestDockMode[19]).withSpring(num3, outer1_8) };
    items[1] = obj1;
    obj[0] = items;
    obj[1] = windowDimensions.get().width;
    return obj;
  };
  obj = { withSpring: activeQuestDockMode(setRestingQuestDockMode[19]).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_9, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: closure_8, windowDimensions };
  fn.__closure = obj;
  fn.__workletHash = 3565242281634;
  fn.__initData = closure_14;
  const animatedStyle = obj4.useAnimatedStyle(fn);
  const tmp13 = closure_8;
  const tmp15 = token;
  const tmp7 = windowDimensions(setRestingQuestDockMode[13])(activeQuestDockMode);
  [tmp17, closure_4] = token(importAllResult.useState("active" !== first.currentState), 2);
  const items2 = [activeQuestDockMode, setRestingQuestDockMode];
  const effect = importAllResult.useEffect(() => {
    let closure_0 = first.addEventListener("change", (arg0) => {
      callback2("active" !== arg0);
      let tmp3 = lib(outer1_2[20]).isIOS() && tmp;
      if (tmp3) {
        tmp3 = lib.get() === outer1_7.EXPANDED;
      }
      if (tmp3) {
        callback(outer1_7.COLLAPSED);
      }
    });
    return () => {
      lib.remove();
    };
  }, items2);
  let isRendered = !tmp17;
  if (!tmp17) {
    isRendered = importAllResult.useContext(windowDimensions(setRestingQuestDockMode[9])).isRendered;
  }
  if (isRendered) {
    isRendered = !stateFromStores;
  }
  if (isRendered) {
    isRendered = null != videoAsset;
  }
  if (isRendered) {
    let tmp4Result = tmp4(tmp2[20]);
    isRendered = !tmp4Result.isAndroid();
  }
  if (isRendered) {
    tmp4Result = tmp4(tmp2[21]);
    isRendered = tmp4Result.isHeroVideoSupported(videoAsset);
  }
  const tmp15Result = tmp15(obj.useState(false), 2);
  first = tmp15Result[0];
  maybeApplyNoTextColorForLightCustomTheme = tmp15Result[1];
  const callback = obj.useCallback(() => {
    lib(true);
  }, []);
  const tmp16 = token(importAllResult.useState("active" !== first.currentState), 2);
  class G {
    constructor() {
      obj = activeQuestDockMode(setRestingQuestDockMode[19]);
      num = 1;
      if (activeQuestDockMode.get() === outer1_7.EXPANDED) {
        tmp = currentState;
        num = 1;
        if (currentState) {
          num = 0;
        }
      }
      obj = { opacity: obj.withSpring(num, outer1_8) };
      return obj;
    }
  }
  obj = { withSpring: tmp4(tmp2[19]).withSpring, activeQuestDockMode, QuestDockMode: tmp12, videoLoaded: first, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: tmp13 };
  G.__closure = obj;
  G.__workletHash = 13084905891385;
  G.__initData = closure_15;
  const animatedStyle1 = activeQuestDockMode(setRestingQuestDockMode[18]).useAnimatedStyle(G);
  obj1 = { style: items3, children: null };
  items3 = [tmp3.backgroundWrapper, animatedStyle];
  let tmpResult = tmp(tmp2[22]);
  if (isRendered) {
    obj2 = { children: null };
    obj3 = { style: null, onLoad: null, source: null, paused: null, resizeMode: "cover", muted: true, disableFocus: true, preventsDisplaySleepDuringVideoPlayback: false };
    obj3[0] = tmp3.backgroundHeroAssetVideo;
    obj3[1] = callback;
    obj4 = { uri: null };
    obj4[0] = videoAsset.url;
    obj3[2] = obj4;
    obj3[3] = tmp7 !== tmp12.EXPANDED;
    const items4 = [callback(tmp4(tmp2[23]).VideoComponent, obj3), ];
    const obj5 = { style: null, children: null };
    obj5[0] = animatedStyle1;
    tmpResult = tmp(tmp2[22]);
    const obj6 = { style: null, source: null };
    obj6[0] = tmp3.backgroundHeroAsset;
    const obj7 = { uri: null };
    obj7[0] = staticUrl;
    obj6[1] = obj7;
    obj5[1] = callback(tmp(tmp2[24]), obj6);
    items4[1] = callback(tmpResult, obj5);
    obj2[0] = items4;
    let tmp24Result = tmp24(obj.Fragment, obj2);
    let tmp26 = callback;
  } else {
    tmp26 = callback;
    const obj8 = { style: null, source: null };
    obj8[0] = tmp3.backgroundHeroAsset;
    const obj9 = { uri: null };
    obj9[0] = staticUrl;
    obj8[1] = obj9;
    tmp24Result = callback(tmp(tmp2[24]), obj8);
  }
  const items5 = [tmp24Result, tmp26(windowDimensions(setRestingQuestDockMode[25]), { locations: memo1, style: tmp3.backgroundGradient, start: VerticalGradient.START, end: VerticalGradient.END, colors: memo })];
  obj1[1] = items5;
  return closure_12(tmpResult, obj1);
});
let obj2 = {};
const result = require("get ActivityIndicator").fileFinishedImporting("modules/quests/native/QuestDock/QuestDockUnenrolledBackground.tsx");

export default memoResult;
