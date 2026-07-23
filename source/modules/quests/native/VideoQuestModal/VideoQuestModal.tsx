// Module ID: 14021
// Function ID: 107330
// Name: VideoQuestModalSteps
// Dependencies: [57, 31, 27, 653, 33, 4130, 689, 14022, 8303, 6959, 13995, 8277, 3991, 4542, 1557, 7589, 14023, 5121, 14026, 14054, 10919, 10464, 10929, 4979, 11073, 2]

// Module 14021 (VideoQuestModalSteps)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { AnalyticEvents } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let StyleSheet;
let closure_5;
let closure_7;
let closure_8;
const require = arg1;
({ View: closure_5, StyleSheet } = get_ActivityIndicator);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let closure_9 = { mass: 1.9, damping: 18, stiffness: 80, overshootClamping: true };
let obj = { WATCH_VIDEO: 0, [0]: "WATCH_VIDEO", POST_WATCH_VIDEO: 1, [1]: "POST_WATCH_VIDEO" };
obj = { wrapper: { flexDirection: "column", flexGrow: 1, flexShrink: 1, zIndex: 1 }, contentWrapper: { flex: 1 } };
let obj1 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj1["borderRadius"] = require("_createForOfIteratorHelperLoose").radii.lg;
obj1["backgroundColor"] = require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST;
obj.contentBackground = obj1;
obj.modalContentWrapper = { zIndex: 2 };
_createForOfIteratorHelperLoose = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
_createForOfIteratorHelperLoose["borderRadius"] = require("_createForOfIteratorHelperLoose").radii.lg;
_createForOfIteratorHelperLoose["flex"] = 1;
_createForOfIteratorHelperLoose["overflow"] = "hidden";
_createForOfIteratorHelperLoose["pointerEvents"] = "none";
_createForOfIteratorHelperLoose["zIndex"] = 1;
obj.backgroundWrapper = _createForOfIteratorHelperLoose;
let closure_11 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_12 = { code: "function VideoQuestModalTsx1(){const{withSpring,clamp,postWatchAnimationState,BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG,interpolate,CLOUDS_BACKGROUND_INVISIBLE_OFFSET_Y}=this.__closure;return{opacity:withSpring(clamp(postWatchAnimationState.get(),0,1),BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG),transform:[{translateY:withSpring(interpolate(postWatchAnimationState.get(),[0,1],[CLOUDS_BACKGROUND_INVISIBLE_OFFSET_Y,0]),BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG)}]};}" };
let closure_13 = { code: "function VideoQuestModalTsx2(){const{withSpring,interpolate,postWatchAnimationState,safeAreaInsets,BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG}=this.__closure;return{transform:[{translateY:withSpring(interpolate(postWatchAnimationState.get(),[0,1],[safeAreaInsets.top,0]),BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG)}],opacity:withSpring(postWatchAnimationState.get(),BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG)};}" };
let closure_14 = importAllResult.memo((sourceQuestContent) => {
  let initialStep;
  let onClose;
  ({ onClose, initialStep } = sourceQuestContent);
  sourceQuestContent = sourceQuestContent.sourceQuestContent;
  let obj = initialStep(quest[7]);
  const videoQuestModalContext = obj.useVideoQuestModalContext();
  quest = videoQuestModalContext.quest;
  const videoSessionId = videoQuestModalContext.videoSessionId;
  const userStatus = quest.userStatus;
  let completedAt;
  if (null != userStatus) {
    completedAt = userStatus.completedAt;
  }
  if (null != initialStep) {
    const tmp7 = videoSessionId(importAllResult.useState(initialStep), 2);
    let num2 = 0;
    const first = tmp7[0];
    let closure_6 = tmp7[1];
    const tmp10 = videoSessionId(importAllResult.useState(false), 2);
    let callback = tmp10[1];
    let items = [quest.id, videoSessionId, sourceQuestContent];
    callback = importAllResult.useCallback((arg0) => {
      const lockOrientation = initialStep(quest[8]).lockOrientation;
      if (arg0) {
        lockOrientation("LANDSCAPE", true);
      } else {
        lockOrientation("PORTRAIT", true);
      }
      callback2(arg0);
      let obj = initialStep(quest[9]);
      obj = { questId: quest.id, event: arg0 ? tmp5.QUEST_VIDEO_FULLSCREEN_ENTERED : tmp5.QUEST_VIDEO_FULLSCREEN_EXITED, properties: obj, sourceQuestContent };
      obj = { video_session_id: videoSessionId };
      obj.trackQuestEvent(obj);
    }, items);
    const tmp15 = callback2();
    const height = sourceQuestContent(quest[11])(importAllResult.useContext(initialStep(quest[10]).QuestDockGestureContext).windowDimensions).height;
    let items1 = [tmp3, initialStep];
    const layoutEffect = importAllResult.useLayoutEffect(() => {
      let tmp = closure_4;
      if (closure_4) {
        tmp = null == initialStep;
      }
      if (tmp) {
        callback(tmp28.POST_WATCH_VIDEO);
      }
    }, items1);
    const items2 = [callback];
    const callback1 = importAllResult.useCallback(() => {
      callback(tmp28.WATCH_VIDEO);
    }, []);
    callback2 = importAllResult.useCallback(() => {
      callback(false);
      callback(tmp28.POST_WATCH_VIDEO);
    }, items2);
    let obj1 = initialStep(quest[12]);
    if (first === obj.POST_WATCH_VIDEO) {
      num2 = 1;
    }
    const sharedValue = obj1.useSharedValue(num2);
    let obj2 = initialStep(quest[12]);
    class M {
      constructor() {
        obj = {};
        obj2 = initialStep(quest[13]);
        obj3 = initialStep(quest[12]);
        obj.opacity = obj2.withSpring(obj3.clamp(c9.get(), 0, 1), c9);
        obj = {};
        obj5 = initialStep(quest[13]);
        obj6 = initialStep(quest[12]);
        items = [, ];
        items[0] = -100;
        items[1] = 0;
        obj.translateY = obj5.withSpring(obj6.interpolate(c9.get(), [0, 1], items), c9);
        items1 = [];
        items1[0] = obj;
        obj.transform = items1;
        return obj;
      }
    }
    obj = { withSpring: initialStep(quest[13]).withSpring, clamp: initialStep(quest[12]).clamp, postWatchAnimationState: sharedValue, BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG: sharedValue, interpolate: initialStep(quest[12]).interpolate, CLOUDS_BACKGROUND_INVISIBLE_OFFSET_Y: -100 };
    M.__closure = obj;
    M.__workletHash = 11571705142399;
    M.__initData = closure_12;
    const animatedStyle = obj2.useAnimatedStyle(M);
    const tmp28 = sourceQuestContent(quest[14])();
    obj = tmp28;
    let obj4 = initialStep(quest[12]);
    class U {
      constructor() {
        obj = {};
        obj = {};
        obj3 = initialStep(quest[13]);
        obj4 = initialStep(quest[12]);
        items = [, ];
        items[0] = closure_10.top;
        items[1] = 0;
        obj.translateY = obj3.withSpring(obj4.interpolate(c9.get(), [0, 1], items), c9);
        items1 = [];
        items1[0] = obj;
        obj.transform = items1;
        obj5 = initialStep(quest[13]);
        obj.opacity = obj5.withSpring(c9.get(), c9);
        return obj;
      }
    }
    obj = { withSpring: initialStep(quest[13]).withSpring, interpolate: initialStep(quest[12]).interpolate, postWatchAnimationState: sharedValue, safeAreaInsets: tmp28, BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG: sharedValue };
    U.__closure = obj;
    U.__workletHash = 9769051401109;
    U.__initData = closure_13;
    const items3 = [sharedValue, first];
    const animatedStyle1 = obj4.useAnimatedStyle(U);
    const effect = importAllResult.useEffect(() => {
      let num = 0;
      if (first === tmp28.POST_WATCH_VIDEO) {
        num = 1;
      }
      const result = sharedValue.set(num);
    }, items3);
    obj1 = {};
    obj2 = { style: tmp15.modalContentWrapper };
    let obj3 = {};
    const items4 = [tmp15.backgroundWrapper, ];
    obj4 = { height };
    items4[1] = obj4;
    obj3.style = items4;
    let obj5 = {};
    const items5 = [tmp15.contentBackground, ];
    const obj6 = { top: tmp28.top };
    items5[1] = obj6;
    obj5.style = items5;
    const items6 = [callback(sourceQuestContent(quest[15]), obj5), , ];
    const obj7 = {};
    const items7 = [tmp15.contentBackground, animatedStyle1];
    obj7.style = items7;
    items6[1] = callback(sourceQuestContent(quest[15]), obj7);
    const obj8 = { style: animatedStyle };
    const tmp36 = sourceQuestContent(quest[15]);
    const obj9 = { align: "top" };
    obj8.children = callback(sourceQuestContent(quest[16]), obj9);
    items6[2] = callback(sourceQuestContent(quest[15]), obj8);
    obj3.children = items6;
    const items8 = [callback(first, obj3), ];
    const obj10 = { top: true };
    const items9 = [tmp15.wrapper, ];
    const obj11 = { height };
    items9[1] = obj11;
    obj10.style = items9;
    const obj12 = { style: tmp15.contentWrapper };
    let tmp39 = first === obj.WATCH_VIDEO;
    if (tmp39) {
      const obj13 = { isFullscreen: tmp10[0], onNavigateToPostWatchVideo: callback2, onClose, onEnd: callback2, setIsFullscreen: callback, sourceQuestContent };
      tmp39 = callback(sourceQuestContent(quest[18]), obj13);
    }
    const items10 = [tmp39, ];
    let tmp44 = first === obj.POST_WATCH_VIDEO;
    if (tmp44) {
      const obj14 = { onClose, onRestartVideo: callback1, sourceQuestContent };
      tmp44 = callback(sourceQuestContent(quest[19]), obj14);
    }
    items10[1] = tmp44;
    obj12.children = items10;
    obj10.children = callback(first, obj12);
    items8[1] = callback(initialStep(quest[17]).SafeAreaPaddingView, obj10);
    obj2.children = items8;
    obj1.children = callback(tmp36, obj2);
    return callback(first, obj1);
  }
});
const memoResult = importAllResult.memo(function VideoQuestModal(questContentPosition) {
  questContentPosition = questContentPosition.questContentPosition;
  const onClose = questContentPosition.onClose;
  const videoSessionId = questContentPosition.videoSessionId;
  const initialStep = questContentPosition.initialStep;
  const sourceQuestContent = questContentPosition.sourceQuestContent;
  const items = [onClose];
  const callback = sourceQuestContent.useCallback(() => {
    const result = questContentPosition(videoSessionId[20]).showQuestUnavailableAlert();
    onClose();
  }, items);
  let obj = questContentPosition(videoSessionId[21]);
  const nonNullableQuest = obj.useNonNullableQuest(questContentPosition.questId, callback);
  const items1 = [onClose, nonNullableQuest, videoSessionId, questContentPosition, initialStep, sourceQuestContent];
  const memo = sourceQuestContent.useMemo(() => {
    let tmp = null;
    if (null != nonNullableQuest) {
      let obj = {};
      obj = {
        fullscreen: true,
        headerLeft() {
            return null;
          },
        render() {
            obj = { value: obj };
            obj = { quest: outer1_5, videoSessionId: outer1_2 };
            obj = {};
            const obj1 = {
              overrideVisibility: true,
              questContent: questContentPosition(videoSessionId[23]).QuestContent.VIDEO_MODAL_MOBILE,
              questOrQuests: outer1_5,
              questContentPosition: outer1_0,
              sourceQuestContent: outer1_4,
              children() {
                return outer3_7(outer3_14, { initialStep: outer2_3, onClose: outer2_1, sourceQuestContent: outer2_4 });
              }
            };
            obj.children = outer2_7(questContentPosition(videoSessionId[22]).QuestContentImpressionTrackerNative, obj1);
            obj.children = outer2_7(questContentPosition(videoSessionId[10]).QuestDockGestureContextProvider, obj);
            return outer2_7(onClose(videoSessionId[7]).Provider, obj);
          }
      };
      obj["watch_mobile_video_quest"] = obj;
      tmp = obj;
    }
    return tmp;
  }, items1);
  const layoutEffect = sourceQuestContent.useLayoutEffect(() => {
    questContentPosition(videoSessionId[8]).lockOrientation("PORTRAIT", true);
    return questContentPosition(videoSessionId[8]).restoreDefaultOrientation;
  }, []);
  let tmp5 = null;
  if (null != nonNullableQuest) {
    tmp5 = null;
    if (null != memo) {
      obj = { hideTitle: true, initialRouteName: "watch_mobile_video_quest", screens: memo };
      tmp5 = callback(questContentPosition(videoSessionId[24]).Modal, obj);
    }
  }
  return tmp5;
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModal.tsx");

export default memoResult;
export const VideoQuestModalSteps = obj;
