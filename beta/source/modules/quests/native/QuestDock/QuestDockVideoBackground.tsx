// Module ID: 15458
// Function ID: 15459
// Name: QuestDockVideoBackground
// Dependencies: [32, 19, 17, 4750, 5663, 15351, 1078, 21, 4758, 558, 568, 15352, 4497, 5187, 7320, 15355, 15438, 8543, 1482, 1616, 504, 15350, 676, 1368, 11895, 8583, 5802, 5198, 2]

// Module 15458 (QuestDockVideoBackground)
import _modDef676 from "module_676" /* 676 */;
import spring from "spring" /* 5187 */;
import ReanimatedNativeViewDefault from "ReanimatedNativeView" /* 7320 */;
import QuestDockUtils from "QuestDockUtils" /* 15350 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4750 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ AppState: hasOwnProperty, StyleSheet, View: metroRequire } = get_ActivityIndicator);
let QuestDockMode = fn(5663).QuestDockMode;
const QuestDockConstants = fn(15351);
({ QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: closure_9, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: c10 } = QuestDockConstants);
let VerticalGradient = fn(1078).VerticalGradient;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let closure_14 = [0, 0.1, 0.8, 1];
const locations = [0, 0.33, 0.76, 1];
const QuestDockBackgroundCollapsedMediaMode = { PAUSED: "paused", HIDDEN: "hidden" };
const createStyles = fn(4758);
let obj2 = { backgroundWrapper: null, backgroundImage: null, backgroundImageWrapper: null, backgroundVideo: null, media: null, backgroundGradient: null, backdrop: null };
let obj4 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj4.right = undefined;
obj4.bottom = undefined;
obj4.zIndex = 1;
obj2.backgroundWrapper = obj4;
let obj5 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj5.resizeMode = "cover";
obj2.backgroundImage = obj5;
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj2.backgroundImageWrapper = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj2.backgroundVideo = {};
const merged4 = Object.assign(StyleSheet.absoluteFillObject);
obj2.media = {};
const merged5 = Object.assign(StyleSheet.absoluteFillObject);
obj2.backgroundGradient = {};
const merged6 = Object.assign(StyleSheet.absoluteFillObject);
obj2.backdrop = {};
let closure_17 = createStyles.createStyles(obj2);
const __initData = { code: "function QuestDockVideoBackgroundTsx1(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}" };
const __initData2 = { code: "function QuestDockVideoBackgroundTsx2(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}" };
let ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = activeQuestDockMode(568).c(7);
  ({ children, style } = arg0);
  const tmp3 = closure_17();
  activeQuestDockMode = noop.useContext(activeQuestDockMode(15352).QuestDockGestureContext).activeQuestDockMode;
  let obj = activeQuestDockMode(568);
  const fn = function n() {
    let num = 0;
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      num = 1;
    }
    return { opacity: spring.withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) };
  };
  const obj2 = activeQuestDockMode(4497);
  fn.__closure = { withSpring: activeQuestDockMode(5187).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  fn.__workletHash = 5908890006198;
  fn.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  if (cResult[0] === animatedStyle) {
    if (cResult[1] === style) {
      if (cResult[2] === tmp3.media) {
        let tmp5 = cResult[3];
      }
      if (cResult[4] === children) {
        if (cResult[5] === tmp5) {
          let tmp6 = cResult[6];
        }
        return tmp6;
      }
      const obj4 = { style: tmp5, children };
      const tmp9 = closure_12(ReanimatedNativeViewDefault, obj4);
      cResult[4] = children;
      cResult[5] = tmp5;
      cResult[6] = tmp9;
      tmp6 = tmp9;
    }
  }
  const items = [tmp3.media, style, animatedStyle];
  cResult[0] = animatedStyle;
  cResult[1] = style;
  cResult[2] = tmp3.media;
  cResult[3] = items;
  tmp5 = items;
}) : ((arg0) => {
  let activeQuestDockMode;
  ({ children, style } = arg0);
  activeQuestDockMode = noop.useContext(activeQuestDockMode(15352).QuestDockGestureContext).activeQuestDockMode;
  const tmp = closure_17();
  const fn = function s() {
    let num = 0;
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      num = 1;
    }
    return { opacity: spring.withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) };
  };
  let obj = activeQuestDockMode(4497);
  fn.__closure = { withSpring: activeQuestDockMode(5187).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  fn.__workletHash = 9800697298933;
  fn.__initData = __initData2;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const obj3 = { style: null, children };
  const items = [tmp.media, style, animatedStyle];
  obj3.style = items;
  return closure_12(ReanimatedNativeViewDefault, obj3);
});
const __initData3 = { code: "function QuestDockVideoBackgroundTsx3(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,windowDimensions}=this.__closure;return{transform:[{translateX:withSpring(activeQuestDockMode.get()===QuestDockMode.COLLAPSED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*-1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)},{translateY:withSpring(activeQuestDockMode.get()===QuestDockMode.COLLAPSED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*-1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)}],width:windowDimensions.get().width};}" };
const __initData4 = { code: "function QuestDockVideoBackgroundTsx4(){const{withSpring,shouldShowVideo,videoLoaded,isMediaHiddenWhenCollapsed,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(shouldShowVideo&&videoLoaded&&(isMediaHiddenWhenCollapsed||activeQuestDockMode.get()===QuestDockMode.EXPANDED)?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}" };
const __initData5 = { code: "function QuestDockVideoBackgroundTsx5(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,windowDimensions}=this.__closure;return{transform:[{translateX:withSpring(activeQuestDockMode.get()===QuestDockMode.COLLAPSED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*-1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)},{translateY:withSpring(activeQuestDockMode.get()===QuestDockMode.COLLAPSED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*-1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)}],width:windowDimensions.get().width};}" };
const __initData6 = { code: "function QuestDockVideoBackgroundTsx6(){const{withSpring,shouldShowVideo,videoLoaded,isMediaHiddenWhenCollapsed,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(shouldShowVideo&&videoLoaded&&(isMediaHiddenWhenCollapsed||activeQuestDockMode.get()===QuestDockMode.EXPANDED)?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}" };
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockVideoBackground.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let obj = require("c");
  const cResult = obj.c(60);
  ({ imageUrl, videoUrl, videoMimetype, collapsedMediaMode, gradientBaseColor, backdropColor, expandedHeight } = arg0);
  if (undefined === collapsedMediaMode) {
    collapsedMediaMode = obj.PAUSED;
  }
  _require = tmp5;
  const tmp6 = closure_17();
  const context = noop.useContext(tmp(tmp2[11]).QuestDockGestureContext);
  const activeQuestDockMode = context.activeQuestDockMode;
  windowDimensions = context.windowDimensions;
  const setRestingQuestDockMode = noop.useContext(tmp(tmp2[15]).QuestDockExternalCoordinationContext).setRestingQuestDockMode;
  const isRendered = noop.useContext(activeQuestDockMode(tmp2[16])).isRendered;
  const tmp9 = activeQuestDockMode(windowDimensions[17])(activeQuestDockMode);
  const height = activeQuestDockMode(tmp2[18])().height;
  const top = activeQuestDockMode(tmp2[19])().top;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [AccessibilityStore];
    const fn = function _() {
      return tmp42.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp10 = items;
    tmp11 = fn;
  } else {
    [tmp10, tmp11] = cResult;
  }
  const stateFromStores = require("initialize").useStateFromStores(tmp10, tmp11);
  if (cResult[2] === expandedHeight) {
    if (cResult[3] === top) {
      if (cResult[4] === height) {
        let tmp14 = cResult[5];
      }
      if (cResult[6] !== tmp14.maxHeight) {
        let obj3 = { height: tmp14.maxHeight };
        cResult[6] = tmp14.maxHeight;
        class Z {
          constructor() {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[13]);
            obj2 = activeQuestDockMode;
            num = 0;
            tmp3 = QuestDockMode;
            if (activeQuestDockMode.get() === QuestDockMode.COLLAPSED) {
              tmp4 = closure_10;
              num2 = -1;
              num = -1 * closure_10;
            }
            obj1 = { translateX: obj.withSpring(num, closure_9) };
            tmp5 = closure_9;
            items = [, ];
            items[0] = obj1;
            tmpResult = tmp(tmp2[13]);
            num3 = 0;
            if (obj2.get() === tmp3.COLLAPSED) {
              tmp6 = closure_10;
              num4 = -1;
              num3 = -1 * closure_10;
            }
            obj7 = { transform: null, width: null };
            obj8 = { translateY: tmpResult.withSpring(num3, tmp5) };
            items[1] = obj8;
            obj7.transform = items;
            obj7.width = windowDimensions.get().width;
            return obj7;
          }
        }
        cResult[7] = obj3;
        let tmp16 = obj3;
      } else {
        tmp16 = cResult[7];
      }
      if (cResult[8] !== gradientBaseColor) {
        noop = tmp8(tmp2[22])(gradientBaseColor);
        const mapped = closure_14.map((item) => closure_4.alpha(item).hex());
        class Z {
          constructor() {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[13]);
            obj2 = activeQuestDockMode;
            num = 0;
            tmp3 = QuestDockMode;
            if (activeQuestDockMode.get() === QuestDockMode.COLLAPSED) {
              tmp4 = closure_10;
              num2 = -1;
              num = -1 * closure_10;
            }
            obj1 = { translateX: obj.withSpring(num, closure_9) };
            tmp5 = closure_9;
            items = [, ];
            items[0] = obj1;
            tmpResult = tmp(tmp2[13]);
            num3 = 0;
            if (obj2.get() === tmp3.COLLAPSED) {
              tmp6 = closure_10;
              num4 = -1;
              num3 = -1 * closure_10;
            }
            obj7 = { transform: null, width: null };
            obj8 = { translateY: tmpResult.withSpring(num3, tmp5) };
            items[1] = obj8;
            obj7.transform = items;
            obj7.width = windowDimensions.get().width;
            return obj7;
          }
        }
        cResult[9] = mapped;
        let tmp17 = mapped;
      } else {
        tmp17 = cResult[9];
      }
      class Z {
        constructor() {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[13]);
          obj2 = activeQuestDockMode;
          num = 0;
          tmp3 = QuestDockMode;
          if (activeQuestDockMode.get() === QuestDockMode.COLLAPSED) {
            tmp4 = closure_10;
            num2 = -1;
            num = -1 * closure_10;
          }
          obj1 = { translateX: obj.withSpring(num, closure_9) };
          tmp5 = closure_9;
          items = [, ];
          items[0] = obj1;
          tmpResult = tmp(tmp2[13]);
          num3 = 0;
          if (obj2.get() === tmp3.COLLAPSED) {
            tmp6 = closure_10;
            num4 = -1;
            num3 = -1 * closure_10;
          }
          obj7 = { transform: null, width: null };
          obj8 = { translateY: tmpResult.withSpring(num3, tmp5) };
          items[1] = obj8;
          obj7.transform = items;
          obj7.width = windowDimensions.get().width;
          return obj7;
        }
      }
      let obj4 = { withSpring: tmp(tmp2[13]).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_10, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED, windowDimensions };
      Z.__closure = obj4;
      Z.__workletHash = 16548193437981;
      Z.__initData = __initData3;
      const animatedStyle = tmp(tmp2[12]).useAnimatedStyle(Z);
      const tmp27 = setRestingQuestDockMode(obj2.useState(tmp9 === QuestDockMode.EXPANDED), 2);
      const first = tmp27[0];
      let tmp29 = !first;
      if (!first) {
        tmp29 = tmp25;
      }
      if (tmp29) {
        tmp27[1](true);
      }
      const tmp22 = QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED;
      const tmpResult6 = tmp(tmp2[12]);
      [tmp33, closure_5] = setRestingQuestDockMode(obj2.useState("active" !== currentState.currentState), 2);
      if (cResult[10] === activeQuestDockMode) {
        if (cResult[11] === setRestingQuestDockMode) {
          let tmp34 = cResult[12];
          let tmp35 = cResult[13];
        }
        const effect = obj2.useEffect(tmp34, tmp35);
        if (cResult[14] === first) {
          if (cResult[15] === tmp33) {
            if (cResult[16] === tmp5) {
              if (cResult[17] === isRendered) {
                if (cResult[18] === stateFromStores) {
                  if (cResult[19] === videoMimetype) {
                    if (cResult[20] === videoUrl) {
                      let tmp37 = cResult[21];
                    }
                    closure_6 = tmp37;
                    class Z {
                      constructor() {
                        tmp = closure_0;
                        tmp2 = closure_2;
                        obj = closure_0(closure_2[13]);
                        obj2 = activeQuestDockMode;
                        num = 0;
                        tmp3 = QuestDockMode;
                        if (activeQuestDockMode.get() === QuestDockMode.COLLAPSED) {
                          tmp4 = closure_10;
                          num2 = -1;
                          num = -1 * closure_10;
                        }
                        obj1 = { translateX: obj.withSpring(num, closure_9) };
                        tmp5 = closure_9;
                        items = [, ];
                        items[0] = obj1;
                        tmpResult = tmp(tmp2[13]);
                        num3 = 0;
                        if (obj2.get() === tmp3.COLLAPSED) {
                          tmp6 = closure_10;
                          num4 = -1;
                          num3 = -1 * closure_10;
                        }
                        obj7 = { transform: null, width: null };
                        obj8 = { translateY: tmpResult.withSpring(num3, tmp5) };
                        items[1] = obj8;
                        obj7.transform = items;
                        obj7.width = windowDimensions.get().width;
                        return obj7;
                      }
                    }
                    AccessibilityStore = tmp42;
                    QuestDockMode = tmp26(obj2.useState(false), 2)[1];
                    const _Symbol = Symbol;
                    if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                      function _e() {
                        closure_8(true);
                      }
                      cResult[22] = _e;
                      let tmp43 = _e;
                    } else {
                      tmp43 = cResult[22];
                    }
                    const tmp26Result2 = tmp26(obj2.useState(false), 2);
                    function pe() {
                      let num = 1;
                      if (closure_6) {
                        num = 1;
                        if (closure_7) {
                          if (closure_0) {
                            num = 0;
                          } else {
                            num = 1;
                          }
                        }
                      }
                      return { opacity: spring.withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) };
                    }
                    const obj5 = { withSpring: tmp(tmp2[13]).withSpring, shouldShowVideo: tmp37, videoLoaded: tmp42, isMediaHiddenWhenCollapsed: tmp5, activeQuestDockMode, QuestDockMode: tmp20, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: tmp22 };
                    pe.__closure = obj5;
                    pe.__workletHash = 4085643426686;
                    pe.__initData = __initData4;
                    const animatedStyle1 = tmp(tmp2[12]).useAnimatedStyle(pe);
                    if (cResult[23] === tmp9) {
                      if (cResult[24] === tmp37) {
                        if (cResult[25] === tmp6.backgroundVideo) {
                          if (cResult[26] === videoUrl) {
                            let tmp46 = cResult[27];
                          }
                          if (cResult[28] === tmp16) {
                            if (cResult[29] === animatedStyle1) {
                              if (cResult[30] === imageUrl) {
                                if (cResult[31] === tmp6.backgroundImage) {
                                  if (cResult[32] === tmp6.backgroundImageWrapper) {
                                    let tmp50 = cResult[33];
                                  }
                                  if (cResult[34] === tmp46) {
                                    if (cResult[35] === tmp50) {
                                      let tmp54 = cResult[36];
                                    }
                                    if (cResult[37] === animatedStyle) {
                                      if (cResult[38] === tmp16) {
                                        if (cResult[39] === tmp6.backgroundWrapper) {
                                          let tmp58 = cResult[40];
                                        }
                                        if (cResult[41] === backdropColor) {
                                          if (cResult[42] === tmp16) {
                                            if (cResult[43] === tmp6.backdrop) {
                                              let tmp59 = cResult[44];
                                            }
                                            if (cResult[45] === tmp16) {
                                              if (cResult[46] === tmp5) {
                                                if (cResult[47] === tmp54) {
                                                  let tmp63 = cResult[48];
                                                }
                                                if (cResult[49] === tmp16) {
                                                  if (cResult[50] === tmp6.backgroundGradient) {
                                                    let tmp67 = cResult[51];
                                                  }
                                                  if (cResult[52] === tmp17) {
                                                    if (cResult[53] === tmp67) {
                                                      let tmp68 = cResult[54];
                                                    }
                                                    if (cResult[55] === tmp58) {
                                                      if (cResult[56] === tmp59) {
                                                        if (cResult[57] === tmp63) {
                                                          if (cResult[58] === tmp68) {
                                                            let tmp72 = cResult[59];
                                                          }
                                                          return tmp72;
                                                        }
                                                      }
                                                    }
                                                    const obj6 = { style: null, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
                                                    class Z {
                                                      constructor() {
                                                        tmp = closure_0;
                                                        tmp2 = closure_2;
                                                        obj = closure_0(closure_2[13]);
                                                        obj2 = activeQuestDockMode;
                                                        num = 0;
                                                        tmp3 = QuestDockMode;
                                                        if (activeQuestDockMode.get() === QuestDockMode.COLLAPSED) {
                                                          tmp4 = closure_10;
                                                          num2 = -1;
                                                          num = -1 * closure_10;
                                                        }
                                                        obj1 = { translateX: obj.withSpring(num, closure_9) };
                                                        tmp5 = closure_9;
                                                        items = [, ];
                                                        items[0] = obj1;
                                                        tmpResult = tmp(tmp2[13]);
                                                        num3 = 0;
                                                        if (obj2.get() === tmp3.COLLAPSED) {
                                                          tmp6 = closure_10;
                                                          num4 = -1;
                                                          num3 = -1 * closure_10;
                                                        }
                                                        obj7 = { transform: null, width: null };
                                                        obj8 = { translateY: tmpResult.withSpring(num3, tmp5) };
                                                        items[1] = obj8;
                                                        obj7.transform = items;
                                                        obj7.width = windowDimensions.get().width;
                                                        return obj7;
                                                      }
                                                    }
                                                    const items1 = [tmp59, tmp63, tmp68];
                                                    obj6.children = items1;
                                                    const tmp74 = closure_13(tmp8(tmp2[14]), obj6);
                                                    cResult[55] = tmp58;
                                                    cResult[56] = tmp59;
                                                    cResult[57] = tmp63;
                                                    cResult[58] = tmp68;
                                                    cResult[59] = tmp74;
                                                    tmp72 = tmp74;
                                                  }
                                                  const obj7 = { locations: null, style: null, start: null, end: null, colors: null };
                                                  class Z {
                                                    constructor() {
                                                      tmp = closure_0;
                                                      tmp2 = closure_2;
                                                      obj = closure_0(closure_2[13]);
                                                      obj2 = activeQuestDockMode;
                                                      num = 0;
                                                      tmp3 = QuestDockMode;
                                                      if (activeQuestDockMode.get() === QuestDockMode.COLLAPSED) {
                                                        tmp4 = closure_10;
                                                        num2 = -1;
                                                        num = -1 * closure_10;
                                                      }
                                                      obj1 = { translateX: obj.withSpring(num, closure_9) };
                                                      tmp5 = closure_9;
                                                      items = [, ];
                                                      items[0] = obj1;
                                                      tmpResult = tmp(tmp2[13]);
                                                      num3 = 0;
                                                      if (obj2.get() === tmp3.COLLAPSED) {
                                                        tmp6 = closure_10;
                                                        num4 = -1;
                                                        num3 = -1 * closure_10;
                                                      }
                                                      obj7 = { transform: null, width: null };
                                                      obj8 = { translateY: tmpResult.withSpring(num3, tmp5) };
                                                      items[1] = obj8;
                                                      obj7.transform = items;
                                                      obj7.width = windowDimensions.get().width;
                                                      return obj7;
                                                    }
                                                  }
                                                  obj7.locations = locations;
                                                  obj7.style = tmp67;
                                                  ({ START: obj20.start, END: obj20.end } = VerticalGradient);
                                                  obj7.colors = tmp17;
                                                  const tmp71 = closure_12(tmp8(tmp2[27]), obj7);
                                                  cResult[52] = tmp17;
                                                  cResult[53] = tmp67;
                                                  cResult[54] = tmp71;
                                                  tmp68 = tmp71;
                                                }
                                                const items2 = [tmp6.backgroundGradient, ];
                                                class Z {
                                                  constructor() {
                                                    tmp = closure_0;
                                                    tmp2 = closure_2;
                                                    obj = closure_0(closure_2[13]);
                                                    obj2 = activeQuestDockMode;
                                                    num = 0;
                                                    tmp3 = QuestDockMode;
                                                    if (activeQuestDockMode.get() === QuestDockMode.COLLAPSED) {
                                                      tmp4 = closure_10;
                                                      num2 = -1;
                                                      num = -1 * closure_10;
                                                    }
                                                    obj1 = { translateX: obj.withSpring(num, closure_9) };
                                                    tmp5 = closure_9;
                                                    items = [, ];
                                                    items[0] = obj1;
                                                    tmpResult = tmp(tmp2[13]);
                                                    num3 = 0;
                                                    if (obj2.get() === tmp3.COLLAPSED) {
                                                      tmp6 = closure_10;
                                                      num4 = -1;
                                                      num3 = -1 * closure_10;
                                                    }
                                                    obj7 = { transform: null, width: null };
                                                    obj8 = { translateY: tmpResult.withSpring(num3, tmp5) };
                                                    items[1] = obj8;
                                                    obj7.transform = items;
                                                    obj7.width = windowDimensions.get().width;
                                                    return obj7;
                                                  }
                                                }
                                                cResult[49] = tmp16;
                                                cResult[50] = tmp6.backgroundGradient;
                                                cResult[51] = items2;
                                                tmp67 = items2;
                                              }
                                            }
                                            let tmp64 = tmp54;
                                            if (tmp5) {
                                              const obj8 = { style: tmp16, children: null };
                                              class Z {
                                                constructor() {
                                                  tmp = closure_0;
                                                  tmp2 = closure_2;
                                                  obj = closure_0(closure_2[13]);
                                                  obj2 = activeQuestDockMode;
                                                  num = 0;
                                                  tmp3 = QuestDockMode;
                                                  if (activeQuestDockMode.get() === QuestDockMode.COLLAPSED) {
                                                    tmp4 = closure_10;
                                                    num2 = -1;
                                                    num = -1 * closure_10;
                                                  }
                                                  obj1 = { translateX: obj.withSpring(num, closure_9) };
                                                  tmp5 = closure_9;
                                                  items = [, ];
                                                  items[0] = obj1;
                                                  tmpResult = tmp(tmp2[13]);
                                                  num3 = 0;
                                                  if (obj2.get() === tmp3.COLLAPSED) {
                                                    tmp6 = closure_10;
                                                    num4 = -1;
                                                    num3 = -1 * closure_10;
                                                  }
                                                  obj7 = { transform: null, width: null };
                                                  obj8 = { translateY: tmpResult.withSpring(num3, tmp5) };
                                                  items[1] = obj8;
                                                  obj7.transform = items;
                                                  obj7.width = windowDimensions.get().width;
                                                  return obj7;
                                                }
                                              }
                                              tmp64 = closure_12(closure_20, obj8);
                                            }
                                            class Z {
                                              constructor() {
                                                tmp = closure_0;
                                                tmp2 = closure_2;
                                                obj = closure_0(closure_2[13]);
                                                obj2 = activeQuestDockMode;
                                                num = 0;
                                                tmp3 = QuestDockMode;
                                                if (activeQuestDockMode.get() === QuestDockMode.COLLAPSED) {
                                                  tmp4 = closure_10;
                                                  num2 = -1;
                                                  num = -1 * closure_10;
                                                }
                                                obj1 = { translateX: obj.withSpring(num, closure_9) };
                                                tmp5 = closure_9;
                                                items = [, ];
                                                items[0] = obj1;
                                                tmpResult = tmp(tmp2[13]);
                                                num3 = 0;
                                                if (obj2.get() === tmp3.COLLAPSED) {
                                                  tmp6 = closure_10;
                                                  num4 = -1;
                                                  num3 = -1 * closure_10;
                                                }
                                                obj7 = { transform: null, width: null };
                                                obj8 = { translateY: tmpResult.withSpring(num3, tmp5) };
                                                items[1] = obj8;
                                                obj7.transform = items;
                                                obj7.width = windowDimensions.get().width;
                                                return obj7;
                                              }
                                            }
                                            cResult[45] = tmp16;
                                            cResult[46] = tmp5;
                                            cResult[47] = tmp54;
                                            cResult[48] = tmp64;
                                            tmp63 = tmp64;
                                          }
                                        }
                                        let tmp60 = null;
                                        if (null != backdropColor) {
                                          const obj9 = { style: null };
                                          const items3 = [, , ];
                                          class Z {
                                            constructor() {
                                              tmp = closure_0;
                                              tmp2 = closure_2;
                                              obj = closure_0(closure_2[13]);
                                              obj2 = activeQuestDockMode;
                                              num = 0;
                                              tmp3 = QuestDockMode;
                                              if (activeQuestDockMode.get() === QuestDockMode.COLLAPSED) {
                                                tmp4 = closure_10;
                                                num2 = -1;
                                                num = -1 * closure_10;
                                              }
                                              obj1 = { translateX: obj.withSpring(num, closure_9) };
                                              tmp5 = closure_9;
                                              items = [, ];
                                              items[0] = obj1;
                                              tmpResult = tmp(tmp2[13]);
                                              num3 = 0;
                                              if (obj2.get() === tmp3.COLLAPSED) {
                                                tmp6 = closure_10;
                                                num4 = -1;
                                                num3 = -1 * closure_10;
                                              }
                                              obj7 = { transform: null, width: null };
                                              obj8 = { translateY: tmpResult.withSpring(num3, tmp5) };
                                              items[1] = obj8;
                                              obj7.transform = items;
                                              obj7.width = windowDimensions.get().width;
                                              return obj7;
                                            }
                                          }
                                          items3[1] = tmp16;
                                          const obj10 = { backgroundColor: backdropColor };
                                          items3[2] = obj10;
                                          obj9.style = items3;
                                          tmp60 = closure_12(closure_6, obj9);
                                        }
                                        class Z {
                                          constructor() {
                                            tmp = closure_0;
                                            tmp2 = closure_2;
                                            obj = closure_0(closure_2[13]);
                                            obj2 = activeQuestDockMode;
                                            num = 0;
                                            tmp3 = QuestDockMode;
                                            if (activeQuestDockMode.get() === QuestDockMode.COLLAPSED) {
                                              tmp4 = closure_10;
                                              num2 = -1;
                                              num = -1 * closure_10;
                                            }
                                            obj1 = { translateX: obj.withSpring(num, closure_9) };
                                            tmp5 = closure_9;
                                            items = [, ];
                                            items[0] = obj1;
                                            tmpResult = tmp(tmp2[13]);
                                            num3 = 0;
                                            if (obj2.get() === tmp3.COLLAPSED) {
                                              tmp6 = closure_10;
                                              num4 = -1;
                                              num3 = -1 * closure_10;
                                            }
                                            obj7 = { transform: null, width: null };
                                            obj8 = { translateY: tmpResult.withSpring(num3, tmp5) };
                                            items[1] = obj8;
                                            obj7.transform = items;
                                            obj7.width = windowDimensions.get().width;
                                            return obj7;
                                          }
                                        }
                                        cResult[41] = backdropColor;
                                        cResult[42] = tmp16;
                                        cResult[43] = tmp6.backdrop;
                                        cResult[44] = tmp60;
                                        tmp59 = tmp60;
                                      }
                                    }
                                    const items4 = [tmp6.backgroundWrapper, , ];
                                    class Z {
                                      constructor() {
                                        tmp = closure_0;
                                        tmp2 = closure_2;
                                        obj = closure_0(closure_2[13]);
                                        obj2 = activeQuestDockMode;
                                        num = 0;
                                        tmp3 = QuestDockMode;
                                        if (activeQuestDockMode.get() === QuestDockMode.COLLAPSED) {
                                          tmp4 = closure_10;
                                          num2 = -1;
                                          num = -1 * closure_10;
                                        }
                                        obj1 = { translateX: obj.withSpring(num, closure_9) };
                                        tmp5 = closure_9;
                                        items = [, ];
                                        items[0] = obj1;
                                        tmpResult = tmp(tmp2[13]);
                                        num3 = 0;
                                        if (obj2.get() === tmp3.COLLAPSED) {
                                          tmp6 = closure_10;
                                          num4 = -1;
                                          num3 = -1 * closure_10;
                                        }
                                        obj7 = { transform: null, width: null };
                                        obj8 = { translateY: tmpResult.withSpring(num3, tmp5) };
                                        items[1] = obj8;
                                        obj7.transform = items;
                                        obj7.width = windowDimensions.get().width;
                                        return obj7;
                                      }
                                    }
                                    items4[2] = animatedStyle;
                                    cResult[37] = animatedStyle;
                                    cResult[38] = tmp16;
                                    cResult[39] = tmp6.backgroundWrapper;
                                    cResult[40] = items4;
                                    tmp58 = items4;
                                  }
                                  const obj11 = { children: null };
                                  class Z {
                                    constructor() {
                                      tmp = closure_0;
                                      tmp2 = closure_2;
                                      obj = closure_0(closure_2[13]);
                                      obj2 = activeQuestDockMode;
                                      num = 0;
                                      tmp3 = QuestDockMode;
                                      if (activeQuestDockMode.get() === QuestDockMode.COLLAPSED) {
                                        tmp4 = closure_10;
                                        num2 = -1;
                                        num = -1 * closure_10;
                                      }
                                      obj1 = { translateX: obj.withSpring(num, closure_9) };
                                      tmp5 = closure_9;
                                      items = [, ];
                                      items[0] = obj1;
                                      tmpResult = tmp(tmp2[13]);
                                      num3 = 0;
                                      if (obj2.get() === tmp3.COLLAPSED) {
                                        tmp6 = closure_10;
                                        num4 = -1;
                                        num3 = -1 * closure_10;
                                      }
                                      obj7 = { transform: null, width: null };
                                      obj8 = { translateY: tmpResult.withSpring(num3, tmp5) };
                                      items[1] = obj8;
                                      obj7.transform = items;
                                      obj7.width = windowDimensions.get().width;
                                      return obj7;
                                    }
                                  }
                                  tmp56[0] = tmp46;
                                  tmp56[1] = tmp50;
                                  obj11.children = tmp56;
                                  const tmp57 = closure_13(obj2.Fragment, obj11);
                                  cResult[34] = tmp46;
                                  cResult[35] = tmp50;
                                  cResult[36] = tmp57;
                                  tmp54 = tmp57;
                                }
                              }
                            }
                          }
                          let tmp51 = null;
                          if (null != imageUrl) {
                            const obj12 = { style: null, children: null };
                            const items5 = [tmp6.backgroundImageWrapper, , ];
                            class Z {
                              constructor() {
                                tmp = closure_0;
                                tmp2 = closure_2;
                                obj = closure_0(closure_2[13]);
                                obj2 = activeQuestDockMode;
                                num = 0;
                                tmp3 = QuestDockMode;
                                if (activeQuestDockMode.get() === QuestDockMode.COLLAPSED) {
                                  tmp4 = closure_10;
                                  num2 = -1;
                                  num = -1 * closure_10;
                                }
                                obj1 = { translateX: obj.withSpring(num, closure_9) };
                                tmp5 = closure_9;
                                items = [, ];
                                items[0] = obj1;
                                tmpResult = tmp(tmp2[13]);
                                num3 = 0;
                                if (obj2.get() === tmp3.COLLAPSED) {
                                  tmp6 = closure_10;
                                  num4 = -1;
                                  num3 = -1 * closure_10;
                                }
                                obj7 = { transform: null, width: null };
                                obj8 = { translateY: tmpResult.withSpring(num3, tmp5) };
                                items[1] = obj8;
                                obj7.transform = items;
                                obj7.width = windowDimensions.get().width;
                                return obj7;
                              }
                            }
                            items5[2] = animatedStyle1;
                            obj12.style = items5;
                            const obj13 = { style: null, source: null };
                            const items6 = [tmp6.backgroundImage, tmp16];
                            obj13.style = items6;
                            const obj14 = { uri: imageUrl };
                            obj13.source = obj14;
                            obj12.children = closure_12(tmp8(tmp2[26]), obj13);
                            tmp51 = closure_12(tmp8(tmp2[14]), obj12);
                            const tmp8Result = tmp8(tmp2[14]);
                          }
                          class Z {
                            constructor() {
                              tmp = closure_0;
                              tmp2 = closure_2;
                              obj = closure_0(closure_2[13]);
                              obj2 = activeQuestDockMode;
                              num = 0;
                              tmp3 = QuestDockMode;
                              if (activeQuestDockMode.get() === QuestDockMode.COLLAPSED) {
                                tmp4 = closure_10;
                                num2 = -1;
                                num = -1 * closure_10;
                              }
                              obj1 = { translateX: obj.withSpring(num, closure_9) };
                              tmp5 = closure_9;
                              items = [, ];
                              items[0] = obj1;
                              tmpResult = tmp(tmp2[13]);
                              num3 = 0;
                              if (obj2.get() === tmp3.COLLAPSED) {
                                tmp6 = closure_10;
                                num4 = -1;
                                num3 = -1 * closure_10;
                              }
                              obj7 = { transform: null, width: null };
                              obj8 = { translateY: tmpResult.withSpring(num3, tmp5) };
                              items[1] = obj8;
                              obj7.transform = items;
                              obj7.width = windowDimensions.get().width;
                              return obj7;
                            }
                          }
                          cResult[28] = tmp16;
                          cResult[29] = animatedStyle1;
                          cResult[30] = imageUrl;
                          cResult[31] = tmp6.backgroundImage;
                          cResult[32] = tmp6.backgroundImageWrapper;
                          cResult[33] = tmp51;
                          tmp50 = tmp51;
                        }
                      }
                    }
                    let tmp47 = null;
                    if (tmp37) {
                      const obj15 = { style: tmp6.backgroundVideo, onLoad: tmp43, source: null, paused: null, resizeMode: "cover", muted: true, disableFocus: true, preventsDisplaySleepDuringVideoPlayback: false };
                      class Z {
                        constructor() {
                          tmp = closure_0;
                          tmp2 = closure_2;
                          obj = closure_0(closure_2[13]);
                          obj2 = activeQuestDockMode;
                          num = 0;
                          tmp3 = QuestDockMode;
                          if (activeQuestDockMode.get() === QuestDockMode.COLLAPSED) {
                            tmp4 = closure_10;
                            num2 = -1;
                            num = -1 * closure_10;
                          }
                          obj1 = { translateX: obj.withSpring(num, closure_9) };
                          tmp5 = closure_9;
                          items = [, ];
                          items[0] = obj1;
                          tmpResult = tmp(tmp2[13]);
                          num3 = 0;
                          if (obj2.get() === tmp3.COLLAPSED) {
                            tmp6 = closure_10;
                            num4 = -1;
                            num3 = -1 * closure_10;
                          }
                          obj7 = { transform: null, width: null };
                          obj8 = { translateY: tmpResult.withSpring(num3, tmp5) };
                          items[1] = obj8;
                          obj7.transform = items;
                          obj7.width = windowDimensions.get().width;
                          return obj7;
                        }
                      }
                      tmp49[0] = videoUrl;
                      obj15.source = tmp49;
                      obj15.paused = tmp9 !== tmp20.EXPANDED;
                      tmp47 = closure_12(tmp(tmp2[25]).VideoComponent, obj15);
                    }
                    cResult[23] = tmp9;
                    cResult[24] = tmp37;
                    cResult[25] = tmp6.backgroundVideo;
                    cResult[26] = videoUrl;
                    cResult[27] = tmp47;
                    tmp46 = tmp47;
                    const tmpResult7 = tmp(tmp2[12]);
                  }
                }
              }
            }
          }
        }
        let isHeroVideoSupportedResult = !tmp33;
        class Z {
          constructor() {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[13]);
            obj2 = activeQuestDockMode;
            num = 0;
            tmp3 = QuestDockMode;
            if (activeQuestDockMode.get() === QuestDockMode.COLLAPSED) {
              tmp4 = closure_10;
              num2 = -1;
              num = -1 * closure_10;
            }
            obj1 = { translateX: obj.withSpring(num, closure_9) };
            tmp5 = closure_9;
            items = [, ];
            items[0] = obj1;
            tmpResult = tmp(tmp2[13]);
            num3 = 0;
            if (obj2.get() === tmp3.COLLAPSED) {
              tmp6 = closure_10;
              num4 = -1;
              num3 = -1 * closure_10;
            }
            obj7 = { transform: null, width: null };
            obj8 = { translateY: tmpResult.withSpring(num3, tmp5) };
            items[1] = obj8;
            obj7.transform = items;
            obj7.width = windowDimensions.get().width;
            return obj7;
          }
        }
        if (isHeroVideoSupportedResult) {
          isHeroVideoSupportedResult = !stateFromStores;
        }
        if (isHeroVideoSupportedResult) {
          isHeroVideoSupportedResult = null != videoUrl;
        }
        if (isHeroVideoSupportedResult) {
          isHeroVideoSupportedResult = !tmp(tmp2[23]).isAndroid();
          const tmpResult8 = tmp(tmp2[23]);
        }
        if (isHeroVideoSupportedResult) {
          isHeroVideoSupportedResult = tmp(tmp2[24]).isHeroVideoSupported(videoMimetype);
          const tmpResult9 = tmp(tmp2[24]);
        }
        if (isHeroVideoSupportedResult) {
          let tmp40 = !tmp5;
          if (tmp5) {
            tmp40 = first;
          }
          isHeroVideoSupportedResult = tmp40;
        }
        cResult[14] = first;
        cResult[15] = tmp33;
        cResult[16] = tmp5;
        cResult[17] = isRendered;
        cResult[18] = stateFromStores;
        cResult[19] = videoMimetype;
        cResult[20] = videoUrl;
        cResult[21] = isHeroVideoSupportedResult;
        tmp37 = isHeroVideoSupportedResult;
      }
      function se() {
        closure_0 = currentState.addEventListener("change", (event) => {
          closure_1_5("active" !== event);
          let tmp3 = closure_0(windowDimensions[23]).isIOS() && tmp;
          if (tmp3) {
            tmp3 = activeQuestDockMode.get() === constants.EXPANDED;
          }
          if (tmp3) {
            setRestingQuestDockMode(constants.COLLAPSED);
          }
        });
        return () => {
          closure_0.remove();
        };
      }
      const items7 = [activeQuestDockMode, setRestingQuestDockMode];
      cResult[10] = activeQuestDockMode;
      cResult[11] = setRestingQuestDockMode;
      cResult[12] = se;
      cResult[13] = items7;
      tmp35 = items7;
      tmp34 = se;
      const tmp26Result = setRestingQuestDockMode(obj2.useState("active" !== currentState.currentState), 2);
    }
  }
  let tmpResult = require("initialize");
  const questDockExpandedHeightLimits = require("QuestDockUtils").getQuestDockExpandedHeightLimits(height, top, expandedHeight);
  cResult[2] = expandedHeight;
  cResult[3] = top;
  cResult[4] = height;
  cResult[5] = questDockExpandedHeightLimits;
  tmp14 = questDockExpandedHeightLimits;
}) : ((gradientBaseColor) => {
  ({ imageUrl, videoUrl, collapsedMediaMode } = gradientBaseColor);
  if (collapsedMediaMode === undefined) {
    collapsedMediaMode = obj.PAUSED;
  }
  gradientBaseColor = gradientBaseColor.gradientBaseColor;
  ({ backdropColor, expandedHeight } = gradientBaseColor);
  let windowDimensions;
  QuestDockMode = undefined;
  let isRendered;
  let first1;
  VerticalGradient = undefined;
  dependencyMap = tmp2;
  let tmp3 = closure_17();
  const context = windowDimensions.useContext(gradientBaseColor(15352).QuestDockGestureContext);
  const activeQuestDockMode = context.activeQuestDockMode;
  windowDimensions = context.windowDimensions;
  const setRestingQuestDockMode = windowDimensions.useContext(gradientBaseColor(15355).QuestDockExternalCoordinationContext).setRestingQuestDockMode;
  const tmp8 = expandedHeight(8543)(activeQuestDockMode);
  const height = expandedHeight(1482)().height;
  const top = expandedHeight(1616)().top;
  let items = [top];
  const items1 = [height, top, expandedHeight];
  const stateFromStores = gradientBaseColor(504).useStateFromStores(items, () => top.useReducedMotion);
  const memo = windowDimensions.useMemo(() => {
    const obj = { height: QuestDockUtils.getQuestDockExpandedHeightLimits(height, top, expandedHeight).maxHeight };
    return obj;
  }, items1);
  const items2 = [gradientBaseColor];
  const memo1 = windowDimensions.useMemo(() => {
    closure_0 = _modDef676(gradientBaseColor);
    return closure_14.map((item) => closure_0.alpha(item).hex());
  }, items2);
  let obj2 = gradientBaseColor(504);
  const fn = function w() {
    let num = 0;
    if (activeQuestDockMode.get() === QuestDockMode.COLLAPSED) {
      num = -1 * v65535;
    }
    const obj2 = activeQuestDockMode;
    const tmp3 = QuestDockMode;
    const items = [{ translateX: spring.withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) }, ];
    const obj3 = { translateX: spring.withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) };
    const tmp5 = QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED;
    let num3 = 0;
    if (obj2.get() === tmp3.COLLAPSED) {
      num3 = -1 * v65535;
    }
    const obj4 = { transform: null, width: null };
    const tmpResult = spring;
    items[1] = { translateY: spring.withSpring(num3, tmp5) };
    obj4.transform = items;
    obj4.width = windowDimensions.get().width;
    return obj4;
  };
  let obj3 = gradientBaseColor(4497);
  fn.__closure = { withSpring: gradientBaseColor(5187).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: first1, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: isRendered, windowDimensions };
  fn.__workletHash = 772757763995;
  fn.__initData = __initData5;
  const animatedStyle = obj3.useAnimatedStyle(fn);
  const tmp17 = activeQuestDockMode(windowDimensions.useState(tmp8 === QuestDockMode.EXPANDED), 2);
  const first = tmp17[0];
  let tmp19 = !first;
  if (!first) {
    tmp19 = tmp15;
  }
  if (tmp19) {
    tmp17[1](true);
  }
  let obj4 = { withSpring: gradientBaseColor(5187).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: first1, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: isRendered, windowDimensions };
  const tmp13 = isRendered;
  [tmp22, c8] = activeQuestDockMode(windowDimensions.useState("active" !== setRestingQuestDockMode.currentState), 2);
  const items3 = [activeQuestDockMode, setRestingQuestDockMode];
  const effect = obj.useEffect(() => {
    closure_0 = setRestingQuestDockMode.addEventListener("change", (event) => {
      closure_1_8("active" !== event);
      let tmp3 = gradientBaseColor(closure_2[23]).isIOS() && tmp;
      if (tmp3) {
        tmp3 = activeQuestDockMode.get() === c8.EXPANDED;
      }
      if (tmp3) {
        setRestingQuestDockMode(c8.COLLAPSED);
      }
    });
    return () => {
      closure_0.remove();
    };
  }, items3);
  isRendered = !tmp22;
  if (!tmp22) {
    isRendered = windowDimensions.useContext(expandedHeight(15438)).isRendered;
  }
  if (isRendered) {
    isRendered = !stateFromStores;
  }
  if (isRendered) {
    isRendered = null != videoUrl;
  }
  if (isRendered) {
    isRendered = !tmp4(1368).isAndroid();
    const tmp4Result = tmp4(1368);
  }
  if (isRendered) {
    isRendered = tmp4(11895).isHeroVideoSupported(gradientBaseColor.videoMimetype);
    const tmp4Result3 = tmp4(11895);
  }
  if (isRendered) {
    let tmp25 = !tmp2;
    if (tmp2) {
      tmp25 = first;
    }
    isRendered = tmp25;
  }
  const tmp16Result2 = activeQuestDockMode(windowDimensions.useState(false), 2);
  first1 = tmp16Result2[0];
  VerticalGradient = tmp16Result2[1];
  const callback = obj.useCallback(() => {
    closure_11(true);
  }, []);
  const tmp16Result = activeQuestDockMode(windowDimensions.useState("active" !== setRestingQuestDockMode.currentState), 2);
  function oe() {
    let num = 1;
    if (isRendered) {
      num = 1;
      if (first1) {
        if (closure_2) {
          num = 0;
        } else {
          num = 1;
        }
      }
    }
    return { opacity: spring.withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) };
  }
  const tmp4Result4 = gradientBaseColor(4497);
  oe.__closure = { withSpring: gradientBaseColor(5187).withSpring, shouldShowVideo: isRendered, videoLoaded: first1, isMediaHiddenWhenCollapsed: collapsedMediaMode === windowDimensions.HIDDEN, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: tmp13 };
  oe.__workletHash = 5224383424252;
  oe.__initData = __initData6;
  let tmp31 = null;
  const animatedStyle1 = tmp4Result4.useAnimatedStyle(oe);
  if (isRendered) {
    const obj6 = { style: tmp3.backgroundVideo, onLoad: callback, source: null, paused: null, resizeMode: "cover", muted: true, disableFocus: true, preventsDisplaySleepDuringVideoPlayback: false };
    const obj7 = { uri: videoUrl };
    obj6.source = obj7;
    obj6.paused = tmp8 !== tmp12.EXPANDED;
    tmp31 = closure_12(tmp4(8583).VideoComponent, obj6);
  }
  const items4 = [tmp31, ];
  let tmp33 = null;
  if (null != imageUrl) {
    const obj8 = { style: null, children: null };
    const items5 = [tmp3.backgroundImageWrapper, memo, animatedStyle1];
    obj8.style = items5;
    const obj9 = { style: null, source: null };
    const items6 = [tmp3.backgroundImage, memo];
    obj9.style = items6;
    const obj10 = { uri: imageUrl };
    obj9.source = obj10;
    obj8.children = closure_12(tmp7(5802), obj9);
    tmp33 = closure_12(tmp7(7320), obj8);
    const tmp7Result = tmp7(7320);
  }
  items4[1] = tmp33;
  const tmp30Result = closure_13(windowDimensions.Fragment, { children: items4 });
  const obj11 = { style: null, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
  const items7 = [tmp3.backgroundWrapper, memo, animatedStyle];
  obj11.style = items7;
  let tmp38 = null;
  const obj5 = { withSpring: gradientBaseColor(5187).withSpring, shouldShowVideo: isRendered, videoLoaded: first1, isMediaHiddenWhenCollapsed: collapsedMediaMode === obj.HIDDEN, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: tmp13 };
  if (null != backdropColor) {
    const obj12 = { style: null };
    const items8 = [tmp3.backdrop, memo, ];
    const obj13 = { backgroundColor: backdropColor };
    items8[2] = obj13;
    obj12.style = items8;
    tmp38 = closure_12(height, obj12);
  }
  const items9 = [tmp38, , ];
  let tmp41 = tmp30Result;
  if (collapsedMediaMode === obj.HIDDEN) {
    const obj14 = { style: memo, children: tmp30Result };
    tmp41 = closure_12(closure_20, obj14);
  }
  items9[1] = tmp41;
  const obj15 = { locations, style: null, start: VerticalGradient.START, end: VerticalGradient.END, colors: memo1 };
  const items10 = [tmp3.backgroundGradient, memo];
  obj15.style = items10;
  items9[2] = closure_12(expandedHeight(5198), obj15);
  obj11.children = items9;
  return closure_13(expandedHeight(7320), obj11);
}));
export { QuestDockBackgroundCollapsedMediaMode };
