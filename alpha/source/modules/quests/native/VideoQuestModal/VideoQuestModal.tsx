// Module ID: 17091
// Function ID: 17092
// Name: VideoQuestModal
// Dependencies: [32, 19, 17, 17059, 1072, 21, 5014, 575, 17092, 14691, 7862, 17060, 8841, 5095, 5637, 1625, 7241, 17093, 7292, 17096, 17121, 9678, 9681, 14685, 6784, 11481, 2]

// Module 17091 (VideoQuestModal)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5095 */;
import spring from "spring" /* 5637 */;
import AnalyticsActions from "AnalyticsActions" /* 7862 */;
import QuestUtils from "QuestUtils" /* 9678 */;
import applyOrientationLock2 from "applyOrientationLock" /* 14691 */;
import QuestDockConstants from "QuestDockConstants" /* 17059 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let set;

let StyleSheet;
let c9;
let hasOwnProperty;
let metroImportAll;
let obj3;
let obj4;
let obj5;
let react = react_mod;
({ View: hasOwnProperty, StyleSheet } = react_native);
let closure_6 = QuestDockConstants.QUEST_DOCK_LANDSCAPE_MEDIA_EXPANDED_HEIGHT;
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = { mass: 1.9, damping: 18, stiffness: 80, overshootClamping: true };
const VideoQuestModalSteps = { WATCH_VIDEO: 0, [0]: "WATCH_VIDEO", POST_WATCH_VIDEO: 1, [1]: "POST_WATCH_VIDEO" };
let createStyles = createStyles_mod;
let obj2 = { root: obj3, pillarboxed: { alignSelf: "center" }, wrapper: { flexDirection: "column", flexGrow: 1, flexShrink: 1, zIndex: 1 }, contentWrapper: { flex: 1 }, contentBackground: obj4, modalContentWrapper: { zIndex: 2 }, backgroundWrapper: obj5 };
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM };
createStyles = createStyles.createStyles;
obj4 = { borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj5 = { borderRadius: nativeDefault.radii.lg, flex: 1, overflow: "hidden", pointerEvents: "none", zIndex: 1 };
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
let top = createStyles(obj2);
const __initData = { code: "function VideoQuestModalTsx1(){const{withSpring,clamp,postWatchAnimationState,BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG,interpolate,CLOUDS_BACKGROUND_INVISIBLE_OFFSET_Y}=this.__closure;return{opacity:withSpring(clamp(postWatchAnimationState.get(),0,1),BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG),transform:[{translateY:withSpring(interpolate(postWatchAnimationState.get(),[0,1],[CLOUDS_BACKGROUND_INVISIBLE_OFFSET_Y,0]),BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG)}]};}" };
const __initData2 = { code: "function VideoQuestModalTsx2(){const{withSpring,interpolate,postWatchAnimationState,safeAreaInsets,BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG}=this.__closure;return{transform:[{translateY:withSpring(interpolate(postWatchAnimationState.get(),[0,1],[safeAreaInsets.top,0]),BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG)}],opacity:withSpring(postWatchAnimationState.get(),BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG)};}" };
let closure_15 = react.memo(function VideoQuestModalContent(sourceQuestContent) {
  let closure_4;
  let height;
  let initialStep;
  let items10;
  let items11;
  let items12;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj12;
  let obj6;
  let onClose;
  let quest;
  let sharedValue;
  let tmp11;
  let tmp14Result;
  let width;
  ({ onClose, initialStep } = sourceQuestContent);
  sourceQuestContent = sourceQuestContent.sourceQuestContent;
  let tmp = initialStep;
  let tmp2 = quest;
  let obj = initialStep(quest[8]);
  const videoQuestModalContext = obj.useVideoQuestModalContext();
  quest = videoQuestModalContext.quest;
  const videoSessionId = videoQuestModalContext.videoSessionId;
  const userStatus = quest.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  react = tmp5;
  let obj2 = react;
  let tmp6 = initialStep;
  const useState = react.useState;
  if (initialStep == null) {
    tmp6 = tmp5 ? tmp7.POST_WATCH_VIDEO : tmp7.WATCH_VIDEO;
  }
  const tmp8 = videoSessionId(useState(tmp6), 2);
  const first = tmp8[0];
  closure_6 = tmp8[1];
  [tmp11, AnalyticEvents] = videoSessionId(obj2.useState(false), 2);
  let items = [quest.id, videoSessionId, sourceQuestContent];
  videoSessionId(obj2.useState(false), 2);
  const setIsFullscreen = obj2.useCallback((arg0) => {
    let obj3;
    const applyOrientationLock = applyOrientationLock2.applyOrientationLock;
    applyOrientationLock2;
    if (arg0) {
      applyOrientationLock("LANDSCAPE");
    } else {
      applyOrientationLock("PORTRAIT");
    }
    AnalyticEvents(arg0);
    const obj2 = { questId: quest.id, event: arg0 ? AnalyticEvents.QUEST_VIDEO_FULLSCREEN_ENTERED : AnalyticEvents.QUEST_VIDEO_FULLSCREEN_EXITED, properties: obj3, sourceQuestContent };
    obj3 = { video_session_id: videoSessionId };
    const obj = AnalyticsActions;
    obj.trackQuestEvent(obj2);
  }, items);
  const windowDimensions = obj2.useContext(tmp(tmp2[11]).QuestDockGestureContext).windowDimensions;
  const tmp13 = top();
  const pillarboxed = tmp13;
  const tmp15 = sourceQuestContent(tmp2[12])(windowDimensions);
  ({ width, height } = tmp15);
  let bound = null;
  if (tmp15.landscape) {
    bound = null;
    if (!tmp11) {
      const _Math = Math;
      const _Math2 = Math;
      let num = 0.5625;
      bound = Math.min(width, Math.floor(0.5625 * height));
    }
  }
  let items1 = [bound, tmp13.pillarboxed];
  const items2 = [tmp5, initialStep];
  const memo = obj2.useMemo(() => {
    let tmp2 = null;
    if (null != bound) {
      const items = [pillarboxed.pillarboxed, ];
      const obj = { width: tmp };
      items[1] = obj;
      tmp2 = items;
    }
    return tmp2;
  }, items1);
  const layoutEffect = obj2.useLayoutEffect(() => {
    const tmp = closure_4 && null == initialStep;
    if (tmp) {
      closure_6(obj.POST_WATCH_VIDEO);
    }
  }, items2);
  const items3 = [setIsFullscreen];
  const callback1 = obj2.useCallback(() => {
    closure_6(obj.WATCH_VIDEO);
  }, []);
  const callback2 = obj2.useCallback(() => {
    callback(false);
    closure_6(obj.POST_WATCH_VIDEO);
  }, items3);
  let num2 = 0;
  const useSharedValue = tmp(tmp2[13]).useSharedValue;
  tmp(tmp2[13]);
  if (first === sharedValue.POST_WATCH_VIDEO) {
    num2 = 1;
  }
  sharedValue = useSharedValue(num2);
  const tmpResult3 = tmp(tmp2[13]);
  class U {
    constructor() {
      let items;
      let obj2;
      let obj4;
      let withSpring;
      let withSpring2;
      const obj = { opacity: withSpring(obj2.clamp(sharedValue.get(), 0, 1), closure_10), transform: items };
      withSpring = spring.withSpring;
      spring;
      obj2 = ReanimatedRexport;
      const obj3 = { translateY: withSpring2(obj4.interpolate(sharedValue.get(), [0, 1], [-100, 0]), closure_10) };
      withSpring2 = spring.withSpring;
      spring;
      items = [obj3];
      obj4 = ReanimatedRexport;
      return obj;
    }
  }
  let obj3 = { withSpring: tmp(tmp2[14]).withSpring, clamp: tmp(tmp2[13]).clamp, postWatchAnimationState: sharedValue, BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG: bound, interpolate: tmp(tmp2[13]).interpolate, CLOUDS_BACKGROUND_INVISIBLE_OFFSET_Y: -100 };
  U.__closure = obj3;
  U.__workletHash = 11571705142399;
  U.__initData = __initData;
  const animatedStyle = tmpResult3.useAnimatedStyle(U);
  const tmp26 = sourceQuestContent(tmp2[15])();
  top = tmp26;
  const tmpResult4 = tmp(tmp2[13]);
  class F {
    constructor() {
      let items;
      let items1;
      let obj3;
      let obj4;
      let withSpring;
      const obj = { transform: items1, opacity: obj4.withSpring(sharedValue.get(), closure_10) };
      const obj2 = { translateY: withSpring(obj3.interpolate(sharedValue.get(), [0, 1], items), closure_10) };
      withSpring = spring.withSpring;
      spring;
      items = [top.top, 0];
      items1 = [obj2];
      obj3 = ReanimatedRexport;
      obj4 = spring;
      return obj;
    }
  }
  let obj4 = { withSpring: tmp(tmp2[14]).withSpring, interpolate: tmp(tmp2[13]).interpolate, postWatchAnimationState: sharedValue, safeAreaInsets: tmp26, BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG: bound };
  F.__closure = obj4;
  F.__workletHash = 9769051401109;
  F.__initData = __initData2;
  const items4 = [sharedValue, first];
  const animatedStyle1 = tmpResult4.useAnimatedStyle(F);
  const effect = obj2.useEffect(() => {
    let num = 0;
    set = sharedValue.set;
    if (first === obj.POST_WATCH_VIDEO) {
      num = 1;
    }
    const result = set(num);
  }, items4);
  const obj5 = { style: tmp13.root, children: pillarboxed(tmp14Result, obj6) };
  obj6 = { style: items5, children: items10 };
  items5 = [tmp13.modalContentWrapper, memo];
  const obj7 = { style: items6, children: items8 };
  items6 = [tmp13.backgroundWrapper, { height }];
  const obj8 = { style: items7 };
  items7 = [tmp13.contentBackground, { top: tmp26.top }];
  items8 = [, , ];
  tmp14Result = sourceQuestContent(tmp2[16]);
  items8[0] = setIsFullscreen(sourceQuestContent(tmp2[16]), obj8);
  const obj9 = { style: items9 };
  items9 = [tmp13.contentBackground, animatedStyle1];
  items8[1] = setIsFullscreen(sourceQuestContent(tmp2[16]), obj9);
  const obj10 = { style: animatedStyle, children: setIsFullscreen(sourceQuestContent(tmp2[17]), { align: "top" }) };
  const tmp14Result3 = sourceQuestContent(tmp2[16]);
  items8[2] = setIsFullscreen(tmp14Result3, obj10);
  items10 = [pillarboxed(first, obj7), ];
  const obj11 = { top: true, style: items11, children: pillarboxed(first, obj12) };
  items11 = [tmp13.wrapper, { height }];
  let tmp29Result = first === tmp23.WATCH_VIDEO;
  obj12 = { style: tmp13.contentWrapper, children: items12 };
  const SafeAreaPaddingView = tmp(tmp2[18]).SafeAreaPaddingView;
  if (tmp29Result) {
    const tmp14Result4 = sourceQuestContent(tmp2[19]);
    if (bound == null) {
      bound = width;
    }
    const obj13 = { contentWidth: bound, isFullscreen: tmp11, onNavigateToPostWatchVideo: callback2, onClose, onEnd: callback2, setIsFullscreen, sourceQuestContent };
    tmp29Result = tmp29(tmp14Result4, obj13);
  }
  items12 = [tmp29Result, ];
  let tmp29Result2 = first === tmp23.POST_WATCH_VIDEO;
  if (tmp29Result2) {
    const obj14 = { onClose, onRestartVideo: callback1, sourceQuestContent };
    tmp29Result2 = tmp29(tmp14(tmp2[20]), obj14);
  }
  items12[1] = tmp29Result2;
  items10[1] = setIsFullscreen(SafeAreaPaddingView, obj11);
  return setIsFullscreen(first, obj5);
});
const watch_mobile_video_quest = "watch_mobile_video_quest";
const memoResult = react.memo(function VideoQuestModal(questContentPosition) {
  questContentPosition = questContentPosition.questContentPosition;
  const onClose = questContentPosition.onClose;
  const videoSessionId = questContentPosition.videoSessionId;
  const initialStep = questContentPosition.initialStep;
  const sourceQuestContent = questContentPosition.sourceQuestContent;
  const items = [onClose];
  const questId = questContentPosition.questId;
  const callback = sourceQuestContent.useCallback(() => {
    const obj = QuestUtils;
    const result = obj.showQuestUnavailableAlert();
    onClose();
  }, items);
  let tmp2 = questContentPosition;
  let obj = questContentPosition(videoSessionId[22]);
  const nonNullableQuest = obj.useNonNullableQuest(questId, callback);
  const items1 = [nonNullableQuest, videoSessionId];
  const memo = sourceQuestContent.useMemo(() => {
    let tmp2 = null;
    if (null != nonNullableQuest) {
      tmp2 = { quest: tmp, videoSessionId };
      const obj = { quest: tmp, videoSessionId };
    }
    return tmp2;
  }, items1);
  const items2 = [onClose, nonNullableQuest, memo, questContentPosition, initialStep, sourceQuestContent];
  const memo1 = sourceQuestContent.useMemo(() => {
    let questOrQuests;
    let value;
    let tmp = null;
    if (null != nonNullableQuest) {
      tmp = null;
      if (null != memo) {
        let obj = {};
        let obj2 = {
          fullscreen: true,
          headerLeft() {
                return null;
              },
          render() {
                let BillableAdPlacementImpressionTrackerNative;
                let QuestDockGestureContextProvider;
                let obj2;
                let obj3;
                let obj = { value, children: closure_2_8(QuestDockGestureContextProvider, obj2) };
                const Provider = onClose(videoSessionId[8]).Provider;
                obj2 = { expandedHeight: memo, children: closure_2_8(BillableAdPlacementImpressionTrackerNative, obj3) };
                QuestDockGestureContextProvider = questContentPosition(videoSessionId[11]).QuestDockGestureContextProvider;
                obj3 = {
                  overrideVisibility: true,
                  questContent: questContentPosition(videoSessionId[24]).QuestContent.VIDEO_MODAL_MOBILE,
                  questOrQuests,
                  questContentPosition,
                  sourceQuestContent,
                  children: function renderVideoQuestModal() {
                    const obj = { initialStep, onClose, sourceQuestContent };
                    return closure_2_8(closure_2_15, obj);
                  }
                };
                BillableAdPlacementImpressionTrackerNative = questContentPosition(videoSessionId[23]).BillableAdPlacementImpressionTrackerNative;
                return closure_2_8(Provider, obj);
              }
        };
        obj[watch_mobile_video_quest] = obj2;
        tmp = obj;
      }
    }
    return tmp;
  }, items2);
  const layoutEffect = sourceQuestContent.useLayoutEffect(() => {
    const obj = questContentPosition(videoSessionId[9]);
    obj.applyOrientationLock("PORTRAIT");
    return questContentPosition(videoSessionId[9]).restoreDefaultOrientationLock;
  }, []);
  let tmp8 = null;
  const tmp3 = videoSessionId;
  if (null != nonNullableQuest) {
    tmp8 = null;
    if (null != memo1) {
      let obj2 = { hideTitle: true, initialRouteName: watch_mobile_video_quest, screens: memo1 };
      tmp8 = closure_8(tmp2(tmp3[25]).Modal, obj2);
    }
  }
  return tmp8;
});
let result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModal.tsx");

export default memoResult;
export { VideoQuestModalSteps };
