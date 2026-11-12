// Module ID: 17463
// Function ID: 17464
// Name: VideoQuestModal
// Dependencies: [32, 19, 17, 17430, 1072, 21, 5170, 575, 17464, 14973, 7972, 17431, 8948, 1652, 5793, 1627, 17465, 7388, 17468, 17493, 9802, 9805, 14967, 6872, 11659, 2]

// Module 17463 (VideoQuestModal)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import AnalyticsActions from "AnalyticsActions" /* 7972 */;
import QuestUtils from "QuestUtils" /* 9802 */;
import applyOrientationLock2 from "applyOrientationLock" /* 14973 */;
import QuestDockConstants from "QuestDockConstants" /* 17430 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
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
let closure_12 = createStyles(obj2);
let closure_13 = { code: "(function VideoQuestModalTsx1(){let[withSpring,clamp,postWatchAnimationState,BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG,interpolate,CLOUDS_BACKGROUND_INVISIBLE_OFFSET_Y]=this.__closure;return{opacity:withSpring(clamp(postWatchAnimationState.get(),0,1),BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG),transform:[{translateY:withSpring(interpolate(postWatchAnimationState.get(),[0,1],[CLOUDS_BACKGROUND_INVISIBLE_OFFSET_Y,0]),BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG)}]};})" };
let closure_14 = { code: "(function VideoQuestModalTsx2(){let[withSpring,interpolate,postWatchAnimationState,safeAreaInsets,BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG]=this.__closure;return{transform:[{translateY:withSpring(interpolate(postWatchAnimationState.get(),[0,1],[safeAreaInsets.top,0]),BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG)}],opacity:withSpring(postWatchAnimationState.get(),BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG)};})" };
let closure_15 = react.memo(function VideoQuestModalContent(sourceQuestContent) {
  let View;
  let closure_4;
  let height;
  let initialStep;
  let items10;
  let items11;
  let items12;
  let items13;
  let items14;
  let items15;
  let items16;
  let items9;
  let obj10;
  let obj4;
  let onClose;
  let quest;
  let sharedValue;
  let tmp11;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp30;
  let tmp31;
  let tmp32;
  let tmp33;
  let tmp37;
  let tmp38;
  let tmp39;
  let tmp40;
  let tmp41;
  let tmp42;
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
  const tmp13 = closure_12();
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
  const items4 = [closure_13, , , , , , ];
  const useAnimatedStyle = tmp(tmp2[13]).useAnimatedStyle;
  tmp(tmp2[13]);
  items4[1] = tmp(tmp2[14]).withSpring;
  items4[2] = tmp(tmp2[13]).clamp;
  items4[3] = sharedValue;
  items4[4] = bound;
  items4[5] = tmp(tmp2[13]).interpolate;
  items4[6] = -100;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  [tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33] = items4;
  const tmp26 = bound;
  class VideoQuestModalTsx1 {
    constructor() {
      let items;
      let items1;
      const obj = { opacity: _undefined(_undefined2(_undefined3.get(), 0, 1), c3), transform: items1 };
      const obj2 = { translateY: _undefined(_undefined4(_undefined3.get(), [0, 1], items), c3) };
      items = [c5, 0];
      items1 = [obj2];
      return obj;
    }
  }
  const items5 = [tmp28, tmp29, tmp30, tmp31, tmp32, tmp33];
  VideoQuestModalTsx1.__closure = items5;
  VideoQuestModalTsx1.__workletHash = 9188931787878;
  VideoQuestModalTsx1.__initData = tmp27;
  const animatedStyle = useAnimatedStyle(VideoQuestModalTsx1);
  const tmp35 = sourceQuestContent(tmp2[15])();
  const items6 = [closure_14, , , , , ];
  const useAnimatedStyle2 = tmp(tmp2[13]).useAnimatedStyle;
  tmp(tmp2[13]);
  items6[1] = tmp(tmp2[14]).withSpring;
  items6[2] = tmp(tmp2[13]).interpolate;
  items6[3] = sharedValue;
  items6[4] = tmp35;
  items6[5] = tmp26;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp37, tmp38, tmp39, tmp40, tmp41, tmp42] = items6;
  class VideoQuestModalTsx2 {
    constructor() {
      let items;
      let items1;
      const obj = { transform: items1, opacity: _undefined(_undefined3.get(), c4) };
      const obj2 = { translateY: _undefined(_undefined2(_undefined3.get(), [0, 1], items), c4) };
      items = [_undefined4.top, 0];
      items1 = [obj2];
      return obj;
    }
  }
  const items7 = [tmp38, tmp39, tmp40, tmp41, tmp42];
  VideoQuestModalTsx2.__closure = items7;
  VideoQuestModalTsx2.__workletHash = 10709421427500;
  VideoQuestModalTsx2.__initData = tmp37;
  const items8 = [sharedValue, first];
  const animatedStyle2 = useAnimatedStyle2(VideoQuestModalTsx2);
  const effect = obj2.useEffect(() => {
    let num = 0;
    set = sharedValue.set;
    if (first === obj.POST_WATCH_VIDEO) {
      num = 1;
    }
    const result = set(num);
  }, items8);
  let obj3 = { style: tmp13.root, children: pillarboxed(View, obj4) };
  obj4 = { style: items9, children: items14 };
  items9 = [tmp13.modalContentWrapper, memo];
  const obj5 = { style: items10, children: items12 };
  items10 = [tmp13.backgroundWrapper, { height }];
  View = tmp14(tmp2[13]).View;
  const obj6 = { style: items11 };
  items11 = [tmp13.contentBackground, { top: tmp35.top }];
  items12 = [setIsFullscreen(sourceQuestContent(tmp2[13]).View, obj6), , ];
  const obj7 = { style: items13 };
  items13 = [tmp13.contentBackground, animatedStyle2];
  items12[1] = setIsFullscreen(sourceQuestContent(tmp2[13]).View, obj7);
  const obj8 = { style: animatedStyle, children: setIsFullscreen(sourceQuestContent(tmp2[16]), { align: "top" }) };
  const View2 = tmp14(tmp2[13]).View;
  items12[2] = setIsFullscreen(View2, obj8);
  items14 = [pillarboxed(first, obj5), ];
  const obj9 = { top: true, style: items15, children: pillarboxed(first, obj10) };
  items15 = [tmp13.wrapper, { height }];
  let tmp45Result = first === tmp23.WATCH_VIDEO;
  obj10 = { style: tmp13.contentWrapper, children: items16 };
  const SafeAreaPaddingView = tmp(tmp2[17]).SafeAreaPaddingView;
  if (tmp45Result) {
    const tmp14Result = sourceQuestContent(tmp2[18]);
    if (bound == null) {
      bound = width;
    }
    const obj11 = { contentWidth: bound, isFullscreen: tmp11, onNavigateToPostWatchVideo: callback2, onClose, onEnd: callback2, setIsFullscreen, sourceQuestContent };
    tmp45Result = tmp45(tmp14Result, obj11);
  }
  items16 = [tmp45Result, ];
  let tmp45Result2 = first === tmp23.POST_WATCH_VIDEO;
  if (tmp45Result2) {
    const obj12 = { onClose, onRestartVideo: callback1, sourceQuestContent };
    tmp45Result2 = tmp45(tmp14(tmp2[19]), obj12);
  }
  items16[1] = tmp45Result2;
  items14[1] = setIsFullscreen(SafeAreaPaddingView, obj9);
  return setIsFullscreen(first, obj3);
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
  let obj = questContentPosition(videoSessionId[21]);
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
                  questContent: questContentPosition(videoSessionId[23]).QuestContent.VIDEO_MODAL_MOBILE,
                  questOrQuests,
                  questContentPosition,
                  sourceQuestContent,
                  children: function renderVideoQuestModal() {
                    const obj = { initialStep, onClose, sourceQuestContent };
                    return closure_2_8(closure_2_15, obj);
                  }
                };
                BillableAdPlacementImpressionTrackerNative = questContentPosition(videoSessionId[22]).BillableAdPlacementImpressionTrackerNative;
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
      tmp8 = closure_8(tmp2(tmp3[24]).Modal, obj2);
    }
  }
  return tmp8;
});
let result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModal.tsx");

export default memoResult;
export { VideoQuestModalSteps };
