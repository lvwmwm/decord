// Module ID: 13890
// Function ID: 105079
// Name: VideoQuestModalSteps
// Dependencies: []

// Module 13890 (VideoQuestModalSteps)
let StyleSheet;
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
({ View: closure_5, StyleSheet } = arg1(dependencyMap[2]));
const AnalyticEvents = arg1(dependencyMap[3]).AnalyticEvents;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
let closure_9 = {};
let obj = { WATCH_VIDEO: 0, [0]: "WATCH_VIDEO", POST_WATCH_VIDEO: 1, [1]: "POST_WATCH_VIDEO" };
let obj2 = arg1(dependencyMap[5]);
obj = { wrapper: {}, contentWrapper: { flex: 1 } };
const obj1 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj1["borderRadius"] = importDefault(dependencyMap[6]).radii.lg;
obj1["backgroundColor"] = importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOWEST;
obj.contentBackground = obj1;
obj.modalContentWrapper = { zIndex: 2 };
obj2 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj2["borderRadius"] = importDefault(dependencyMap[6]).radii.lg;
obj2["flex"] = 1;
obj2["overflow"] = "hidden";
obj2["pointerEvents"] = "none";
obj2["zIndex"] = 1;
obj.backgroundWrapper = obj2;
let closure_11 = obj2.createStyles(obj);
let closure_12 = { code: "function VideoQuestModalTsx1(){const{withSpring,clamp,postWatchAnimationState,BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG,interpolate,CLOUDS_BACKGROUND_INVISIBLE_OFFSET_Y}=this.__closure;return{opacity:withSpring(clamp(postWatchAnimationState.get(),0,1),BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG),transform:[{translateY:withSpring(interpolate(postWatchAnimationState.get(),[0,1],[CLOUDS_BACKGROUND_INVISIBLE_OFFSET_Y,0]),BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG)}]};}" };
let closure_13 = { code: "function VideoQuestModalTsx2(){const{withSpring,interpolate,postWatchAnimationState,safeAreaInsets,BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG}=this.__closure;return{transform:[{translateY:withSpring(interpolate(postWatchAnimationState.get(),[0,1],[safeAreaInsets.top,0]),BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG)}],opacity:withSpring(postWatchAnimationState.get(),BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG)};}" };
let closure_14 = importAllResult.memo((sourceQuestContent) => {
  let initialStep;
  let onClose;
  ({ onClose, initialStep } = sourceQuestContent);
  const arg1 = initialStep;
  sourceQuestContent = sourceQuestContent.sourceQuestContent;
  const importDefault = sourceQuestContent;
  let obj = arg1(dependencyMap[7]);
  const videoQuestModalContext = obj.useVideoQuestModalContext();
  const quest = videoQuestModalContext.quest;
  const dependencyMap = quest;
  const videoSessionId = videoQuestModalContext.videoSessionId;
  let callback = videoSessionId;
  const userStatus = quest.userStatus;
  let completedAt;
  if (null != userStatus) {
    completedAt = userStatus.completedAt;
  }
  if (null != initialStep) {
    const tmp7 = callback(importAllResult.useState(initialStep), 2);
    let num2 = 0;
    const first = tmp7[0];
    let closure_6 = tmp7[1];
    const tmp10 = callback(importAllResult.useState(false), 2);
    let callback2 = tmp10[1];
    const items = [quest.id, videoSessionId, sourceQuestContent];
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
    const tmp15 = callback3();
    const height = importDefault(dependencyMap[11])(importAllResult.useContext(arg1(dependencyMap[10]).QuestDockGestureContext).windowDimensions).height;
    const items1 = [tmp3, initialStep];
    const layoutEffect = importAllResult.useLayoutEffect(() => {
      let tmp = tmp3;
      if (tmp3) {
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
    let obj1 = arg1(dependencyMap[12]);
    if (first === obj.POST_WATCH_VIDEO) {
      num2 = 1;
    }
    const sharedValue = obj1.useSharedValue(num2);
    let closure_9 = sharedValue;
    let obj2 = arg1(dependencyMap[12]);
    class M {
      constructor() {
        obj = {};
        obj2 = initialStep(quest[13]);
        obj3 = initialStep(quest[12]);
        obj.opacity = obj2.withSpring(obj3.clamp(closure_9.get(), 0, 1), closure_9);
        obj = {};
        obj5 = initialStep(quest[13]);
        obj6 = initialStep(quest[12]);
        items = [, ];
        items[0] = -100;
        items[1] = 0;
        obj.translateY = obj5.withSpring(obj6.interpolate(closure_9.get(), [null, null], items), closure_9);
        items1 = [];
        items1[0] = obj;
        obj.transform = items1;
        return obj;
      }
    }
    obj = { withSpring: arg1(dependencyMap[13]).withSpring, clamp: arg1(dependencyMap[12]).clamp, postWatchAnimationState: sharedValue, BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG: closure_9, interpolate: arg1(dependencyMap[12]).interpolate, CLOUDS_BACKGROUND_INVISIBLE_OFFSET_Y: -100 };
    M.__closure = obj;
    M.__workletHash = 11571705142399;
    M.__initData = closure_12;
    const animatedStyle = obj2.useAnimatedStyle(M);
    const tmp28 = importDefault(dependencyMap[14])();
    obj = tmp28;
    let obj4 = arg1(dependencyMap[12]);
    class U {
      constructor() {
        obj = {};
        obj = {};
        obj3 = initialStep(quest[13]);
        obj4 = initialStep(quest[12]);
        items = [, ];
        items[0] = closure_10.top;
        items[1] = 0;
        obj.translateY = obj3.withSpring(obj4.interpolate(closure_9.get(), [null, null], items), closure_9);
        items1 = [];
        items1[0] = obj;
        obj.transform = items1;
        obj5 = initialStep(quest[13]);
        obj.opacity = obj5.withSpring(closure_9.get(), closure_9);
        return obj;
      }
    }
    obj = { withSpring: arg1(dependencyMap[13]).withSpring, interpolate: arg1(dependencyMap[12]).interpolate, postWatchAnimationState: sharedValue, safeAreaInsets: tmp28, BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG: closure_9 };
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
    const obj3 = {};
    const items4 = [tmp15.backgroundWrapper, ];
    obj4 = { height };
    items4[1] = obj4;
    obj3.style = items4;
    const obj5 = {};
    const items5 = [tmp15.contentBackground, ];
    const obj6 = { top: tmp28.top };
    items5[1] = obj6;
    obj5.style = items5;
    const items6 = [callback2(importDefault(dependencyMap[15]), obj5), , ];
    const obj7 = {};
    const items7 = [tmp15.contentBackground, animatedStyle1];
    obj7.style = items7;
    items6[1] = callback2(importDefault(dependencyMap[15]), obj7);
    const obj8 = { style: animatedStyle };
    const tmp36 = importDefault(dependencyMap[15]);
    const obj9 = { align: "top" };
    obj8.children = callback2(importDefault(dependencyMap[16]), obj9);
    items6[2] = callback2(importDefault(dependencyMap[15]), obj8);
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
      tmp39 = callback2(importDefault(dependencyMap[18]), obj13);
    }
    const items10 = [tmp39, ];
    let tmp44 = first === obj.POST_WATCH_VIDEO;
    if (tmp44) {
      const obj14 = { onClose, onRestartVideo: callback1, sourceQuestContent };
      tmp44 = callback2(importDefault(dependencyMap[19]), obj14);
    }
    items10[1] = tmp44;
    obj12.children = items10;
    obj10.children = callback(first, obj12);
    items8[1] = callback2(arg1(dependencyMap[17]).SafeAreaPaddingView, obj10);
    obj2.children = items8;
    obj1.children = callback(tmp36, obj2);
    return callback2(first, obj1);
  }
});
const tmp3 = arg1(dependencyMap[4]);
const memoResult = importAllResult.memo(function VideoQuestModal(questContentPosition) {
  questContentPosition = questContentPosition.questContentPosition;
  const arg1 = questContentPosition;
  const onClose = questContentPosition.onClose;
  const importDefault = onClose;
  const videoSessionId = questContentPosition.videoSessionId;
  const dependencyMap = videoSessionId;
  const initialStep = questContentPosition.initialStep;
  let closure_3 = initialStep;
  const sourceQuestContent = questContentPosition.sourceQuestContent;
  const items = [onClose];
  const callback = importAllResult.useCallback(() => {
    const result = questContentPosition(videoSessionId[20]).showQuestUnavailableAlert();
    onClose();
  }, items);
  let obj = arg1(dependencyMap[21]);
  const nonNullableQuest = obj.useNonNullableQuest(questContentPosition.questId, callback);
  const items1 = [onClose, nonNullableQuest, videoSessionId, questContentPosition, initialStep, sourceQuestContent];
  const memo = importAllResult.useMemo(() => {
    let tmp = null;
    if (null != nonNullableQuest) {
      let obj = {};
      obj = {
        fullscreen: true,
        headerLeft() {
            return null;
          },
        render() {
            let obj = { value: obj };
            obj = { quest: closure_5, videoSessionId: closure_2 };
            obj = {};
            const obj1 = {
              overrideVisibility: true,
              questContent: callback(closure_2[23]).QuestContent.VIDEO_MODAL_MOBILE,
              questOrQuests: closure_5,
              questContentPosition: callback,
              sourceQuestContent: closure_4,
              children() {
                return callback(closure_14, { initialStep: closure_3, onClose: closure_1, sourceQuestContent: closure_4 });
              }
            };
            obj.children = callback3(callback(closure_2[22]).QuestContentImpressionTrackerNative, obj1);
            obj.children = callback3(callback(closure_2[10]).QuestDockGestureContextProvider, obj);
            return callback3(callback2(closure_2[7]).Provider, obj);
          }
      };
      obj["watch_mobile_video_quest"] = obj;
      tmp = obj;
    }
    return tmp;
  }, items1);
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    questContentPosition(videoSessionId[8]).lockOrientation("PORTRAIT", true);
    return questContentPosition(videoSessionId[8]).restoreDefaultOrientation;
  }, []);
  let tmp5 = null;
  if (null != nonNullableQuest) {
    tmp5 = null;
    if (null != memo) {
      obj = { padding: "valueArray", end: "shouldPressibilityUseW3CPointerEventsForHover", screens: memo };
      tmp5 = callback2(arg1(dependencyMap[24]).Modal, obj);
    }
  }
  return tmp5;
});
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModal.tsx");

export default memoResult;
export const VideoQuestModalSteps = obj;
