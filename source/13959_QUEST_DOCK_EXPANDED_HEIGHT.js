// Module ID: 13959
// Function ID: 106120
// Name: QUEST_DOCK_EXPANDED_HEIGHT
// Dependencies: []

// Module 13959 (QUEST_DOCK_EXPANDED_HEIGHT)
let QUEST_DOCK_EXPANDED_HEIGHT;
let StyleSheet;
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
({ AppState: closure_5, StyleSheet } = arg1(dependencyMap[2]));
let closure_6 = importDefault(dependencyMap[3]);
const QuestDockMode = arg1(dependencyMap[4]).QuestDockMode;
const tmp2 = arg1(dependencyMap[2]);
({ QUEST_DOCK_EXPANDED_HEIGHT, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: closure_8, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_9 } = arg1(dependencyMap[5]));
const VerticalGradient = arg1(dependencyMap[6]).VerticalGradient;
const tmp3 = arg1(dependencyMap[5]);
({ jsx: closure_11, jsxs: closure_12 } = arg1(dependencyMap[7]));
let obj1 = arg1(dependencyMap[8]);
let obj = {};
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj["right"] = undefined;
obj["bottom"] = undefined;
obj["height"] = QUEST_DOCK_EXPANDED_HEIGHT;
obj["zIndex"] = 1;
obj.backgroundWrapper = obj;
obj1 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj1["height"] = QUEST_DOCK_EXPANDED_HEIGHT;
obj1["resizeMode"] = "cover";
obj.backgroundHeroAsset = obj1;
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj.backgroundHeroAssetVideo = {};
const obj3 = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj3["height"] = QUEST_DOCK_EXPANDED_HEIGHT;
obj.backgroundGradient = obj3;
let closure_13 = obj1.createStyles(obj);
let closure_14 = { code: "function QuestDockUnenrolledBackgroundTsx1(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,windowDimensions}=this.__closure;return{transform:[{translateX:withSpring(activeQuestDockMode.get()===QuestDockMode.COLLAPSED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*-1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)},{translateY:withSpring(activeQuestDockMode.get()===QuestDockMode.COLLAPSED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*-1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)}],width:windowDimensions.get().width};}" };
let closure_15 = { code: "function QuestDockUnenrolledBackgroundTsx2(){const{withSpring,activeQuestDockMode,QuestDockMode,videoLoaded,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()!==QuestDockMode.EXPANDED||!videoLoaded?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}" };
const obj2 = {};
const tmp4 = arg1(dependencyMap[7]);
const memoResult = importAllResult.memo(function QuestDockUnenrolledBackground() {
  let staticUrl;
  let videoAsset;
  const tmp = callback4();
  let obj = arg1(dependencyMap[10]);
  const questDockHeroAsset = obj.useQuestDockHeroAsset(React.useContext(importDefault(dependencyMap[9])).quest);
  ({ staticUrl, videoAsset } = questDockHeroAsset);
  const context = React.useContext(arg1(dependencyMap[11]).QuestDockGestureContext);
  const activeQuestDockMode = context.activeQuestDockMode;
  const arg1 = activeQuestDockMode;
  const windowDimensions = context.windowDimensions;
  const importDefault = windowDimensions;
  const setRestingQuestDockMode = React.useContext(arg1(dependencyMap[12]).QuestDockExternalCoordinationContext).setRestingQuestDockMode;
  const dependencyMap = setRestingQuestDockMode;
  let obj1 = arg1(dependencyMap[14]);
  const items = [closure_6];
  const stateFromStores = obj1.useStateFromStores(items, () => lib.useReducedMotion);
  let obj2 = arg1(dependencyMap[15]);
  const token = obj2.useToken(importDefault(dependencyMap[16]).colors.CARD_BACKGROUND_DEFAULT);
  let callback = token;
  const items1 = [token];
  const memo = React.useMemo(() => {
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
  const memo1 = React.useMemo(() => [0.942, 3.692, 0, 181.956], []);
  let obj3 = arg1(dependencyMap[18]);
  const fn = function s() {
    let obj = {};
    obj = {};
    let num = 0;
    if (activeQuestDockMode.get() === constants.COLLAPSED) {
      num = -1 * closure_9;
    }
    obj.translateX = activeQuestDockMode(setRestingQuestDockMode[19]).withSpring(num, closure_8);
    const items = [obj, ];
    obj = {};
    const obj3 = activeQuestDockMode(setRestingQuestDockMode[19]);
    let num3 = 0;
    if (activeQuestDockMode.get() === constants.COLLAPSED) {
      num3 = -1 * closure_9;
    }
    obj.translateY = activeQuestDockMode(setRestingQuestDockMode[19]).withSpring(num3, closure_8);
    items[1] = obj;
    obj.transform = items;
    obj.width = windowDimensions.get().width;
    return obj;
  };
  obj = { withSpring: arg1(dependencyMap[19]).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_9, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: closure_8, windowDimensions };
  fn.__closure = obj;
  fn.__workletHash = 3565242281634;
  fn.__initData = closure_14;
  const animatedStyle = obj3.useAnimatedStyle(fn);
  const tmp10 = callback(React.useState("active" !== first.currentState), 2);
  const React = tmp10[1];
  const items2 = [activeQuestDockMode, setRestingQuestDockMode];
  const effect = React.useEffect(() => {
    let closure_0 = first.addEventListener("change", (arg0) => {
      callback2("active" !== arg0);
      let tmp3 = lib(callback[20]).isIOS() && tmp;
      if (tmp3) {
        tmp3 = lib.get() === constants.EXPANDED;
      }
      if (tmp3) {
        callback(constants.COLLAPSED);
      }
    });
    return () => {
      lib.remove();
    };
  }, items2);
  let isHeroVideoSupportedResult = !tmp10[0] && React.useContext(importDefault(dependencyMap[9])).isRendered && !stateFromStores;
  if (isHeroVideoSupportedResult) {
    isHeroVideoSupportedResult = null != videoAsset;
  }
  if (isHeroVideoSupportedResult) {
    let obj5 = arg1(dependencyMap[20]);
    isHeroVideoSupportedResult = !obj5.isAndroid();
  }
  if (isHeroVideoSupportedResult) {
    let obj6 = arg1(dependencyMap[21]);
    isHeroVideoSupportedResult = obj6.isHeroVideoSupported(videoAsset);
  }
  const tmp18 = callback(React.useState(false), 2);
  const first = tmp18[0];
  closure_6 = tmp18[1];
  callback = React.useCallback(() => {
    lib(true);
  }, []);
  let obj7 = arg1(dependencyMap[18]);
  class G {
    constructor() {
      obj = {};
      obj2 = activeQuestDockMode(setRestingQuestDockMode[19]);
      num = 1;
      if (activeQuestDockMode.get() === closure_7.EXPANDED) {
        tmp = isRendered;
        num = 1;
        if (isRendered) {
          num = 0;
        }
      }
      obj.opacity = obj2.withSpring(num, closure_8);
      return obj;
    }
  }
  obj = { withSpring: arg1(dependencyMap[19]).withSpring, activeQuestDockMode, QuestDockMode, videoLoaded: first, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: closure_8 };
  G.__closure = obj;
  G.__workletHash = 13084905891385;
  G.__initData = closure_15;
  const animatedStyle1 = obj7.useAnimatedStyle(G);
  obj1 = { style: items3 };
  const items3 = [tmp.backgroundWrapper, animatedStyle];
  const tmp22 = callback3;
  const tmp4 = importDefault(dependencyMap[13])(activeQuestDockMode);
  if (isHeroVideoSupportedResult) {
    obj2 = {};
    obj3 = { style: tmp.backgroundHeroAssetVideo, onLoad: callback };
    const obj4 = { uri: videoAsset.url };
    obj3.source = obj4;
    obj3.paused = tmp4 !== QuestDockMode.EXPANDED;
    obj3.resizeMode = "cover";
    obj3.muted = true;
    obj3.disableFocus = true;
    obj3.preventsDisplaySleepDuringVideoPlayback = false;
    const items4 = [callback2(arg1(dependencyMap[23]).VideoComponent, obj3), ];
    obj5 = { style: animatedStyle1 };
    obj6 = { style: tmp.backgroundHeroAsset };
    obj7 = { uri: staticUrl };
    obj6.source = obj7;
    obj5.children = callback2(importDefault(dependencyMap[24]), obj6);
    items4[1] = callback2(importDefault(dependencyMap[22]), obj5);
    obj2.children = items4;
    let tmp27 = callback3(React.Fragment, obj2);
    const tmp35 = importDefault(dependencyMap[22]);
  } else {
    const obj8 = { style: tmp.backgroundHeroAsset };
    const obj9 = { uri: staticUrl };
    obj8.source = obj9;
    tmp27 = callback2(importDefault(dependencyMap[24]), obj8);
  }
  const items5 = [tmp27, callback2(importDefault(dependencyMap[25]), { locations: memo1, style: tmp.backgroundGradient, start: VerticalGradient.START, end: VerticalGradient.END, colors: memo })];
  obj1.children = items5;
  return tmp22(importDefault(dependencyMap[22]), obj1);
});
const result = arg1(dependencyMap[26]).fileFinishedImporting("modules/quests/native/QuestDock/QuestDockUnenrolledBackground.tsx");

export default memoResult;
