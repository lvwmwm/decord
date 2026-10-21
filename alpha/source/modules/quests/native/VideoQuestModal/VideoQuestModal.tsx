// Module ID: 16293
// Function ID: 16294
// Name: VideoQuestModal
// Dependencies: [32, 19, 17, 16261, 1087, 21, 4966, 587, 558, 576, 16294, 14052, 7767, 16262, 8723, 5035, 5229, 1633, 7147, 16295, 16298, 16325, 7200, 9525, 9528, 14046, 6692, 11096, 2]

// Module 16293 (VideoQuestModal)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1087 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5035 */;
import spring from "spring" /* 5229 */;
import QuestTypes from "QuestTypes" /* 6692 */;
import AnalyticsActions from "AnalyticsActions" /* 7767 */;
import QuestUtils from "QuestUtils" /* 9525 */;
import QuestContentImpressionTracker from "QuestContentImpressionTracker" /* 14046 */;
import applyOrientationLock2 from "applyOrientationLock" /* 14052 */;
import QuestDockConstants from "QuestDockConstants" /* 16261 */;
import QuestDockGestureContext from "QuestDockGestureContext" /* 16262 */;
import VideoQuestModalContextDefault from "VideoQuestModalContext" /* 16294 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4966 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
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
let c10 = -100;
let c11 = 0.5625;
let top = { mass: 1.9, damping: 18, stiffness: 80, overshootClamping: true };
let obj = { WATCH_VIDEO: 0, [0]: "WATCH_VIDEO", POST_WATCH_VIDEO: 1, [1]: "POST_WATCH_VIDEO" };
let createStyles = createStyles_mod;
let obj2 = { root: obj3, pillarboxed: { alignSelf: "center" }, wrapper: { flexDirection: "column", flexGrow: 1, flexShrink: 1, zIndex: 1 }, contentWrapper: { flex: 1 }, contentBackground: obj4, modalContentWrapper: { zIndex: 2 }, backgroundWrapper: obj5 };
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM };
createStyles = createStyles.createStyles;
obj4 = { borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj5 = { borderRadius: nativeDefault.radii.lg, flex: 1, overflow: "hidden", pointerEvents: "none", zIndex: 1 };
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
let closure_14 = createStyles(obj2);
const __initData = { code: "function VideoQuestModalTsx1(){const{withSpring,clamp,postWatchAnimationState,BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG,interpolate,CLOUDS_BACKGROUND_INVISIBLE_OFFSET_Y}=this.__closure;return{opacity:withSpring(clamp(postWatchAnimationState.get(),0,1),BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG),transform:[{translateY:withSpring(interpolate(postWatchAnimationState.get(),[0,1],[CLOUDS_BACKGROUND_INVISIBLE_OFFSET_Y,0]),BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG)}]};}" };
const __initData2 = { code: "function VideoQuestModalTsx2(){const{withSpring,interpolate,postWatchAnimationState,safeAreaInsets,BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG}=this.__closure;return{transform:[{translateY:withSpring(interpolate(postWatchAnimationState.get(),[0,1],[safeAreaInsets.top,0]),BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG)}],opacity:withSpring(postWatchAnimationState.get(),BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG)};}" };
const __initData3 = { code: "function VideoQuestModalTsx3(){const{withSpring,clamp,postWatchAnimationState,BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG,interpolate,CLOUDS_BACKGROUND_INVISIBLE_OFFSET_Y}=this.__closure;return{opacity:withSpring(clamp(postWatchAnimationState.get(),0,1),BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG),transform:[{translateY:withSpring(interpolate(postWatchAnimationState.get(),[0,1],[CLOUDS_BACKGROUND_INVISIBLE_OFFSET_Y,0]),BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG)}]};}" };
const __initData4 = { code: "function VideoQuestModalTsx4(){const{withSpring,interpolate,postWatchAnimationState,safeAreaInsets,BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG}=this.__closure;return{transform:[{translateY:withSpring(interpolate(postWatchAnimationState.get(),[0,1],[safeAreaInsets.top,0]),BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG)}],opacity:withSpring(postWatchAnimationState.get(),BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG)};}" };
let memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function VideoQuestModalContent(sourceQuestContent) {
  let closure_4;
  let height;
  let initialStep;
  let items;
  let items1;
  let items2;
  let onClose;
  let quest;
  let tmp12;
  let tmp42;
  let tmp43;
  let width;
  let tmp = initialStep;
  const tmp2 = quest;
  let obj = initialStep(quest[9]);
  const cResult = obj.c(73);
  ({ onClose, initialStep } = sourceQuestContent);
  sourceQuestContent = sourceQuestContent.sourceQuestContent;
  let obj2 = initialStep(quest[10]);
  const videoQuestModalContext = obj2.useVideoQuestModalContext();
  quest = videoQuestModalContext.quest;
  const videoSessionId = videoQuestModalContext.videoSessionId;
  const userStatus = quest.userStatus;
  let completedAt;
  if (userStatus != null) {
    completedAt = userStatus.completedAt;
  }
  react = tmp6;
  let obj3 = react;
  let tmp7 = initialStep;
  const useState = react.useState;
  if (initialStep == null) {
    tmp7 = tmp6 ? tmp8.POST_WATCH_VIDEO : tmp8.WATCH_VIDEO;
  }
  const tmp9 = videoSessionId(useState(tmp7), 2);
  const first = tmp9[0];
  closure_6 = tmp9[1];
  [tmp12, AnalyticEvents] = videoSessionId(obj3.useState(false), 2);
  videoSessionId(obj3.useState(false), 2);
  if (cResult[0] === quest.id) {
    if (cResult[1] === sourceQuestContent) {
      let tmp13;
      if (cResult[2] === videoSessionId) {
        tmp13 = cResult[3];
      }
      let closure_8 = tmp13;
      const windowDimensions = obj3.useContext(tmp(tmp2[13]).QuestDockGestureContext).windowDimensions;
      const tmp15 = closure_14();
      const tmp17 = sourceQuestContent(tmp2[14])(windowDimensions);
      ({ width, height } = tmp17);
      let bound = null;
      if (tmp17.landscape) {
        bound = null;
        if (!tmp12) {
          const _Math = Math;
          const _Math2 = Math;
          bound = Math.min(width, Math.floor(height * c11));
        }
      }
      if (cResult[4] === bound) {
        let tmp21;
        if (cResult[5] === tmp15.pillarboxed) {
          tmp21 = cResult[6];
        }
        if (bound == null) {
          bound = width;
        }
        if (cResult[7] === initialStep) {
          let tmp24;
          let tmp25;
          if (cResult[8] === null != completedAt) {
            tmp24 = cResult[9];
            tmp25 = cResult[10];
          }
          const layoutEffect = obj3.useLayoutEffect(tmp24, tmp25);
          const _Symbol = Symbol;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            const fn3 = function j() {
              closure_6(obj.WATCH_VIDEO);
            };
            cResult[11] = fn3;
          }
          if (cResult[12] !== tmp13) {
            class J {
              constructor() {
                closure_8(false);
                closure_6(obj.POST_WATCH_VIDEO);
              }
            }
            cResult[12] = tmp13;
            cResult[13] = J;
          } else {
            class J {
              constructor() {
                closure_8(false);
                closure_6(obj.POST_WATCH_VIDEO);
              }
            }
          }
          const useSharedValue = tmp(tmp2[15]).useSharedValue;
          tmp(tmp2[15]);
          if (first === obj.POST_WATCH_VIDEO) {
            class J {
              constructor() {
                closure_8(false);
                closure_6(obj.POST_WATCH_VIDEO);
              }
            }
          }
          const sharedValue = useSharedValue(num11);
          const fn4 = function $() {
            let items;
            let items1;
            let obj2;
            let obj4;
            let withSpring;
            let withSpring2;
            const obj = { opacity: withSpring(obj2.clamp(sharedValue.get(), 0, 1), top), transform: items1 };
            withSpring = spring.withSpring;
            spring;
            obj2 = ReanimatedRexport;
            const obj3 = { translateY: withSpring2(obj4.interpolate(sharedValue.get(), [0, 1], items), top) };
            withSpring2 = spring.withSpring;
            spring;
            items = [c10, 0];
            items1 = [obj3];
            obj4 = ReanimatedRexport;
            return obj;
          };
          let obj4 = { withSpring: tmp(tmp2[16]).withSpring, clamp: tmp(tmp2[15]).clamp, postWatchAnimationState: sharedValue, BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG: top, interpolate: tmp(tmp2[15]).interpolate, CLOUDS_BACKGROUND_INVISIBLE_OFFSET_Y };
          const useAnimatedStyle = tmp(tmp2[15]).useAnimatedStyle;
          tmp(tmp2[15]);
          fn4.__closure = obj4;
          fn4.__workletHash = 11571705142399;
          fn4.__initData = __initData;
          const animatedStyle = useAnimatedStyle(fn4);
          const tmp38 = sourceQuestContent(tmp2[17])();
          CLOUDS_BACKGROUND_INVISIBLE_OFFSET_Y = tmp38;
          function ee() {
            let items;
            let items1;
            let obj3;
            let obj4;
            let withSpring;
            const obj = { transform: items1, opacity: obj4.withSpring(sharedValue.get(), closure_12) };
            const obj2 = { translateY: withSpring(obj3.interpolate(sharedValue.get(), [0, 1], items), closure_12) };
            withSpring = spring.withSpring;
            spring;
            items = [top.top, 0];
            items1 = [obj2];
            obj3 = ReanimatedRexport;
            obj4 = spring;
            return obj;
          }
          const obj5 = { withSpring: tmp(tmp2[16]).withSpring, interpolate: tmp(tmp2[15]).interpolate, postWatchAnimationState: sharedValue, safeAreaInsets: tmp38, BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG: top };
          const useAnimatedStyle2 = tmp(tmp2[15]).useAnimatedStyle;
          tmp(tmp2[15]);
          ee.__closure = obj5;
          ee.__workletHash = 9769051401109;
          ee.__initData = __initData2;
          const animatedStyle2 = useAnimatedStyle2(ee);
          if (cResult[14] === sharedValue) {
            class J {
              constructor() {
                closure_8(false);
                closure_6(obj.POST_WATCH_VIDEO);
              }
            }
            const effect = obj3.useEffect(tmp42, tmp43);
            if (cResult[18] === tmp21) {
              class J {
                constructor() {
                  closure_8(false);
                  closure_6(obj.POST_WATCH_VIDEO);
                }
              }
              if (cResult[21] !== height) {
                class J {
                  constructor() {
                    closure_8(false);
                    closure_6(obj.POST_WATCH_VIDEO);
                  }
                }
                tmp47[0] = height;
                cResult[21] = height;
                cResult[22] = tmp47;
              } else {
                class J {
                  constructor() {
                    closure_8(false);
                    closure_6(obj.POST_WATCH_VIDEO);
                  }
                }
              }
              if (cResult[23] === tmp15.backgroundWrapper) {
                class J {
                  constructor() {
                    closure_8(false);
                    closure_6(obj.POST_WATCH_VIDEO);
                  }
                }
                if (cResult[26] !== tmp38.top) {
                  class J {
                    constructor() {
                      closure_8(false);
                      closure_6(obj.POST_WATCH_VIDEO);
                    }
                  }
                  tmp50[0] = tmp38.top;
                  cResult[26] = tmp38.top;
                  cResult[27] = tmp50;
                } else {
                  class J {
                    constructor() {
                      closure_8(false);
                      closure_6(obj.POST_WATCH_VIDEO);
                    }
                  }
                }
                if (cResult[28] === tmp15.contentBackground) {
                  class J {
                    constructor() {
                      closure_8(false);
                      closure_6(obj.POST_WATCH_VIDEO);
                    }
                  }
                  if (cResult[31] === animatedStyle2) {
                    let tmp57;
                    class J {
                      constructor() {
                        closure_8(false);
                        closure_6(obj.POST_WATCH_VIDEO);
                      }
                    }
                    const _Symbol2 = Symbol;
                    if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
                      class J {
                        constructor() {
                          closure_8(false);
                          closure_6(obj.POST_WATCH_VIDEO);
                        }
                      }
                      const tmp58 = closure_8(sourceQuestContent(tmp2[19]), { align: "top" });
                      cResult[34] = tmp58;
                      tmp57 = tmp58;
                    } else {
                      class J {
                        constructor() {
                          closure_8(false);
                          closure_6(obj.POST_WATCH_VIDEO);
                        }
                      }
                    }
                    if (cResult[35] !== animatedStyle) {
                      class J {
                        constructor() {
                          closure_8(false);
                          closure_6(obj.POST_WATCH_VIDEO);
                        }
                      }
                      const obj6 = { style: animatedStyle, children: tmp57 };
                      cResult[35] = animatedStyle;
                      cResult[36] = closure_8(sourceQuestContent(tmp2[18]), obj6);
                      const tmp60 = closure_8(sourceQuestContent(tmp2[18]), obj6);
                    } else {
                      class J {
                        constructor() {
                          closure_8(false);
                          closure_6(obj.POST_WATCH_VIDEO);
                        }
                      }
                    }
                    if (cResult[37] === tmp48) {
                      class J {
                        constructor() {
                          closure_8(false);
                          closure_6(obj.POST_WATCH_VIDEO);
                        }
                      }
                    }
                    const obj7 = { style: tmp48, children: items };
                    items = [tmp51, tmp54, tmp59];
                    cResult[37] = tmp48;
                    cResult[38] = tmp51;
                    cResult[39] = tmp54;
                    cResult[40] = tmp59;
                    cResult[41] = sharedValue(first, obj7);
                    const tmp64 = sharedValue(first, obj7);
                  }
                  const obj8 = { style: items1 };
                  items1 = [tmp15.contentBackground, animatedStyle2];
                  cResult[31] = animatedStyle2;
                  cResult[32] = tmp15.contentBackground;
                  cResult[33] = closure_8(sourceQuestContent(tmp2[18]), obj8);
                  const tmp56 = closure_8(sourceQuestContent(tmp2[18]), obj8);
                }
                const obj9 = { style: items2 };
                items2 = [tmp15.contentBackground, tmp49];
                cResult[28] = tmp15.contentBackground;
                cResult[29] = tmp49;
                cResult[30] = closure_8(sourceQuestContent(tmp2[18]), obj9);
                const tmp53 = closure_8(sourceQuestContent(tmp2[18]), obj9);
              }
              const items3 = [tmp15.backgroundWrapper, tmp46];
              cResult[23] = tmp15.backgroundWrapper;
              cResult[24] = tmp46;
              cResult[25] = items3;
            }
            const items4 = [tmp15.modalContentWrapper, tmp21];
            cResult[18] = tmp21;
            cResult[19] = tmp15.modalContentWrapper;
            cResult[20] = items4;
          }
          function te() {
            let num = 0;
            set = sharedValue.set;
            if (first === obj.POST_WATCH_VIDEO) {
              num = 1;
            }
            const result = set(num);
          }
          const items5 = [sharedValue, first];
          cResult[14] = sharedValue;
          cResult[15] = first;
          cResult[16] = te;
          cResult[17] = items5;
          tmp42 = te;
          tmp43 = items5;
        }
        const fn2 = function q() {
          const tmp = closure_4 && null == initialStep;
          if (tmp) {
            closure_6(obj.POST_WATCH_VIDEO);
          }
        };
        const items6 = [tmp6, initialStep];
        cResult[7] = initialStep;
        cResult[8] = null != completedAt;
        cResult[9] = fn2;
        cResult[10] = items6;
        tmp25 = items6;
        tmp24 = fn2;
      }
      let tmp22 = null;
      if (null != bound) {
        class J {
          constructor() {
            closure_8(false);
            closure_6(obj.POST_WATCH_VIDEO);
          }
        }
        tmp23[0] = tmp15.pillarboxed;
        const obj10 = { width: bound };
        tmp23[1] = obj10;
        tmp22 = tmp23;
      }
      let num = 4;
      cResult[4] = bound;
      cResult[5] = tmp15.pillarboxed;
      cResult[6] = tmp22;
      tmp21 = tmp22;
    }
  }
  const fn = function l(arg0) {
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
  };
  cResult[0] = quest.id;
  cResult[1] = sourceQuestContent;
  cResult[2] = videoSessionId;
  cResult[3] = fn;
  tmp13 = fn;
}) : (function VideoQuestModalContent(sourceQuestContent) {
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
  let obj = initialStep(quest[10]);
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
  const windowDimensions = obj2.useContext(tmp(tmp2[13]).QuestDockGestureContext).windowDimensions;
  const tmp13 = closure_14();
  const pillarboxed = tmp13;
  const tmp15 = sourceQuestContent(tmp2[14])(windowDimensions);
  ({ width, height } = tmp15);
  let bound = null;
  if (tmp15.landscape) {
    bound = null;
    if (!tmp11) {
      const _Math = Math;
      const _Math2 = Math;
      bound = Math.min(width, Math.floor(height * sharedValue));
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
  let num = 0;
  const useSharedValue = tmp(tmp2[15]).useSharedValue;
  tmp(tmp2[15]);
  if (first === obj.POST_WATCH_VIDEO) {
    num = 1;
  }
  sharedValue = useSharedValue(num);
  const tmpResult3 = tmp(tmp2[15]);
  class H {
    constructor() {
      let items;
      let items1;
      let obj2;
      let obj4;
      let withSpring;
      let withSpring2;
      const obj = { opacity: withSpring(obj2.clamp(sharedValue.get(), 0, 1), top), transform: items1 };
      withSpring = spring.withSpring;
      spring;
      obj2 = ReanimatedRexport;
      const obj3 = { translateY: withSpring2(obj4.interpolate(sharedValue.get(), [0, 1], items), top) };
      withSpring2 = spring.withSpring;
      spring;
      items = [c10, 0];
      items1 = [obj3];
      obj4 = ReanimatedRexport;
      return obj;
    }
  }
  let obj3 = { withSpring: tmp(tmp2[16]).withSpring, clamp: tmp(tmp2[15]).clamp, postWatchAnimationState: sharedValue, BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG: top, interpolate: tmp(tmp2[15]).interpolate, CLOUDS_BACKGROUND_INVISIBLE_OFFSET_Y: bound };
  H.__closure = obj3;
  H.__workletHash = 15031671874877;
  H.__initData = __initData3;
  const animatedStyle = tmpResult3.useAnimatedStyle(H);
  const tmp27 = sourceQuestContent(tmp2[17])();
  top = tmp27;
  const tmpResult4 = tmp(tmp2[15]);
  class K {
    constructor() {
      let items;
      let items1;
      let obj3;
      let obj4;
      let withSpring;
      const obj = { transform: items1, opacity: obj4.withSpring(sharedValue.get(), top) };
      const obj2 = { translateY: withSpring(obj3.interpolate(sharedValue.get(), [0, 1], items), top) };
      withSpring = spring.withSpring;
      spring;
      items = [top.top, 0];
      items1 = [obj2];
      obj3 = ReanimatedRexport;
      obj4 = spring;
      return obj;
    }
  }
  let obj4 = { withSpring: tmp(tmp2[16]).withSpring, interpolate: tmp(tmp2[15]).interpolate, postWatchAnimationState: sharedValue, safeAreaInsets: tmp27, BACKGROUND_ENTRANCE_ANIMATION_SPRING_CONFIG: top };
  K.__closure = obj4;
  K.__workletHash = 11085432861267;
  K.__initData = __initData4;
  const items4 = [sharedValue, first];
  const animatedStyle1 = tmpResult4.useAnimatedStyle(K);
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
  items7 = [tmp13.contentBackground, { top: tmp27.top }];
  items8 = [, , ];
  tmp14Result = sourceQuestContent(tmp2[18]);
  items8[0] = setIsFullscreen(sourceQuestContent(tmp2[18]), obj8);
  const obj9 = { style: items9 };
  items9 = [tmp13.contentBackground, animatedStyle1];
  items8[1] = setIsFullscreen(sourceQuestContent(tmp2[18]), obj9);
  const obj10 = { style: animatedStyle, children: setIsFullscreen(sourceQuestContent(tmp2[19]), { align: "top" }) };
  const tmp14Result3 = sourceQuestContent(tmp2[18]);
  items8[2] = setIsFullscreen(tmp14Result3, obj10);
  items10 = [pillarboxed(first, obj7), ];
  const obj11 = { top: true, style: items11, children: pillarboxed(first, obj12) };
  items11 = [tmp13.wrapper, { height }];
  let tmp30Result = first === tmp24.WATCH_VIDEO;
  obj12 = { style: tmp13.contentWrapper, children: items12 };
  const SafeAreaPaddingView = tmp(tmp2[22]).SafeAreaPaddingView;
  if (tmp30Result) {
    const tmp14Result4 = sourceQuestContent(tmp2[20]);
    if (bound == null) {
      bound = width;
    }
    const obj13 = { contentWidth: bound, isFullscreen: tmp11, onNavigateToPostWatchVideo: callback2, onClose, onEnd: callback2, setIsFullscreen, sourceQuestContent };
    tmp30Result = tmp30(tmp14Result4, obj13);
  }
  items12 = [tmp30Result, ];
  let tmp30Result2 = first === tmp24.POST_WATCH_VIDEO;
  if (tmp30Result2) {
    const obj14 = { onClose, onRestartVideo: callback1, sourceQuestContent };
    tmp30Result2 = tmp30(tmp14(tmp2[21]), obj14);
  }
  items12[1] = tmp30Result2;
  items10[1] = setIsFullscreen(SafeAreaPaddingView, obj11);
  return setIsFullscreen(first, obj5);
}));
const watch_mobile_video_quest = "watch_mobile_video_quest";
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function VideoQuestModal(questContentPosition) {
  let expandedHeight;
  let initialStep;
  let tmp4;
  let videoSessionId;
  let obj = questContentPosition(initialStep[9]);
  const cResult = obj.c(17);
  const tmp = questContentPosition;
  questContentPosition = questContentPosition.questContentPosition;
  const onClose = questContentPosition.onClose;
  const tmp2 = initialStep;
  ({ videoSessionId, initialStep } = questContentPosition);
  const sourceQuestContent = questContentPosition.sourceQuestContent;
  const questId = questContentPosition.questId;
  if (cResult[0] !== onClose) {
    const fn = function o() {
      const obj = QuestUtils;
      const result = obj.showQuestUnavailableAlert();
      onClose();
    };
    cResult[0] = onClose;
    cResult[1] = fn;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  const tmpResult = tmp(tmp2[24]);
  const nonNullableQuest = tmpResult.useNonNullableQuest(questId, tmp4);
  if (cResult[2] === nonNullableQuest) {
    let tmp6;
    let tmp17;
    let tmp16;
    if (cResult[3] === videoSessionId) {
      tmp6 = cResult[4];
    }
    const value = tmp6;
    let tmp10 = null;
    if (null != nonNullableQuest) {
      tmp10 = null;
      if (null != tmp6) {
        let tmp12;
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const fn2 = function h() {
            return null;
          };
          cResult[5] = fn2;
          tmp12 = fn2;
        } else {
          tmp12 = cResult[5];
        }
        if (cResult[6] === initialStep) {
          if (cResult[7] === onClose) {
            if (cResult[8] === nonNullableQuest) {
              if (cResult[9] === questContentPosition) {
                if (cResult[10] === sourceQuestContent) {
                  let tmp13;
                  if (cResult[11] === tmp6) {
                    tmp13 = cResult[12];
                  }
                  tmp10 = tmp13;
                }
              }
            }
          }
        }
        let obj2 = {};
        let obj3 = {
          fullscreen: true,
          headerLeft: tmp12,
          render() {
                  let BillableAdPlacementImpressionTrackerNative;
                  let QuestDockGestureContextProvider;
                  let obj2;
                  let obj3;
                  let obj = { value, children: metroImportAll(QuestDockGestureContextProvider, obj2) };
                  const Provider = VideoQuestModalContextDefault.Provider;
                  obj2 = { expandedHeight, children: metroImportAll(BillableAdPlacementImpressionTrackerNative, obj3) };
                  QuestDockGestureContextProvider = QuestDockGestureContext.QuestDockGestureContextProvider;
                  obj3 = {
                    overrideVisibility: true,
                    questContent: QuestTypes.QuestContent.VIDEO_MODAL_MOBILE,
                    questOrQuests: nonNullableQuest,
                    questContentPosition,
                    sourceQuestContent,
                    children: function renderVideoQuestModal() {
                      const obj = { initialStep, onClose, sourceQuestContent };
                      return closure_2_8(closure_2_19, obj);
                    }
                  };
                  BillableAdPlacementImpressionTrackerNative = QuestContentImpressionTracker.BillableAdPlacementImpressionTrackerNative;
                  return metroImportAll(Provider, obj);
                }
        };
        obj2[watch_mobile_video_quest] = obj3;
        cResult[6] = initialStep;
        cResult[7] = onClose;
        cResult[8] = nonNullableQuest;
        cResult[9] = questContentPosition;
        cResult[10] = sourceQuestContent;
        cResult[11] = tmp6;
        cResult[12] = obj2;
        tmp13 = obj2;
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
      class G {
        constructor() {
          const obj = questContentPosition(initialStep[11]);
          obj.applyOrientationLock("PORTRAIT");
          return questContentPosition(initialStep[11]).restoreDefaultOrientationLock;
        }
      }
      const items = [];
      cResult[13] = G;
      cResult[14] = items;
      tmp17 = items;
      tmp16 = G;
    } else {
      class G {
        constructor() {
          const obj = questContentPosition(initialStep[11]);
          obj.applyOrientationLock("PORTRAIT");
          return questContentPosition(initialStep[11]).restoreDefaultOrientationLock;
        }
      }
      tmp17 = cResult[14];
    }
    const layoutEffect = nonNullableQuest.useLayoutEffect(tmp16, tmp17);
    let tmp20 = null;
    if (null != nonNullableQuest) {
      class G {
        constructor() {
          const obj = questContentPosition(initialStep[11]);
          obj.applyOrientationLock("PORTRAIT");
          return questContentPosition(initialStep[11]).restoreDefaultOrientationLock;
        }
      }
      if (null != tmp10) {
        class G {
          constructor() {
            const obj = questContentPosition(initialStep[11]);
            obj.applyOrientationLock("PORTRAIT");
            return questContentPosition(initialStep[11]).restoreDefaultOrientationLock;
          }
        }
        tmp20 = tmp21;
      }
    }
    return tmp20;
  }
  let tmp7 = null;
  if (null != nonNullableQuest) {
    class G {
      constructor() {
        const obj = questContentPosition(initialStep[11]);
        obj.applyOrientationLock("PORTRAIT");
        return questContentPosition(initialStep[11]).restoreDefaultOrientationLock;
      }
    }
    tmp8[0] = nonNullableQuest;
    tmp8[1] = videoSessionId;
    tmp7 = tmp8;
  }
  cResult[2] = nonNullableQuest;
  cResult[3] = videoSessionId;
  cResult[4] = tmp7;
  tmp6 = tmp7;
}) : (function VideoQuestModal(questContentPosition) {
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
  let obj = questContentPosition(videoSessionId[24]);
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
                const Provider = onClose(videoSessionId[10]).Provider;
                obj2 = { expandedHeight: memo, children: closure_2_8(BillableAdPlacementImpressionTrackerNative, obj3) };
                QuestDockGestureContextProvider = questContentPosition(videoSessionId[13]).QuestDockGestureContextProvider;
                obj3 = {
                  overrideVisibility: true,
                  questContent: questContentPosition(videoSessionId[26]).QuestContent.VIDEO_MODAL_MOBILE,
                  questOrQuests,
                  questContentPosition,
                  sourceQuestContent,
                  children: function renderVideoQuestModal() {
                    const obj = { initialStep, onClose, sourceQuestContent };
                    return closure_2_8(closure_2_19, obj);
                  }
                };
                BillableAdPlacementImpressionTrackerNative = questContentPosition(videoSessionId[25]).BillableAdPlacementImpressionTrackerNative;
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
    const obj = questContentPosition(videoSessionId[11]);
    obj.applyOrientationLock("PORTRAIT");
    return questContentPosition(videoSessionId[11]).restoreDefaultOrientationLock;
  }, []);
  let tmp8 = null;
  const tmp3 = videoSessionId;
  if (null != nonNullableQuest) {
    tmp8 = null;
    if (null != memo1) {
      let obj2 = { hideTitle: true, initialRouteName: watch_mobile_video_quest, screens: memo1 };
      tmp8 = closure_8(tmp2(tmp3[27]).Modal, obj2);
    }
  }
  return tmp8;
}));
let result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestModal.tsx");

export default memoResult;
export const VideoQuestModalSteps = obj;
