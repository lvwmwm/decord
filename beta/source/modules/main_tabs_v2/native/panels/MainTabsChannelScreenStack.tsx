// Module ID: 16871
// Function ID: 16872
// Name: MainTabsChannelScreenStack
// Dependencies: [32, 19, 17, 9311, 8113, 1078, 9312, 1089, 21, 4758, 558, 568, 4497, 16872, 16873, 5203, 4693, 4619, 16874, 4471, 16875, 5141, 4498, 1489, 4625, 16340, 16724, 6891, 4612, 16339, 9558, 577, 4626, 2]

// Module 16871 (MainTabsChannelScreenStack)
import c from "c" /* 568 */;
import DispatcherDefault from "Dispatcher" /* 577 */;
import Link from "Link" /* 1489 */;
import native from "native" /* 4471 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4497 */;
import REAWorkaroundViewDefault from "REAWorkaroundView" /* 4498 */;
import useChatLayoutDefault from "useChatLayout" /* 4619 */;
import ChatInputUtils from "ChatInputUtils" /* 4625 */;
import useThemeDefault from "useTheme" /* 4693 */;
import useMountEffect from "useMountEffect" /* 5203 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6891 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 9558 */;
import useChannelScreensFromNavigation from "useChannelScreensFromNavigation" /* 16339 */;
import useMainTabsPanelsGestureDefault from "useMainTabsPanelsGesture" /* 16340 */;
import MainTabsNavigatorPanelContext from "MainTabsNavigatorPanelContext" /* 16724 */;
import HideCoveredChannelsExperimentDefault from "HideCoveredChannelsExperiment" /* 16873 */;
import useMainTabsChannelScreenStyles from "useMainTabsChannelScreenStyles" /* 16874 */;
import StandaloneChannelScreenDefault from "StandaloneChannelScreen" /* 16875 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import FramesStore from "FramesStore" /* 9311 */;

const MainTabsNavigatorPanelContextDefault = MainTabsNavigatorPanelContext;

const Suspender = tmp5(5141);
require = fn;
function getKey(index) {
  return String(index.index);
}
get_ActivityIndicator = fn(17);
({ NativeModules: hasOwnProperty, StyleSheet: metroRequire, View: closure_7 } = get_ActivityIndicator);
const ONYX_BORDER_WIDTH = fn(8113).ONYX_BORDER_WIDTH;
const Constants = fn(1078);
({ AnalyticsObjectTypes: closure_9, AnalyticsObjects: c10, AnalyticsSections: closure_11 } = Constants);
const FramesConstants = fn(9312);
({ FrameIntent: closure_12, getChannelIdForSurface: map1 } = FramesConstants);
const ThemeTypes = fn(1089).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
const createStyles = fn(4758);
let closure_17 = createStyles.createStyles({ onyxContainerStyles: { marginTop: -ONYX_BORDER_WIDTH, marginLeft: -ONYX_BORDER_WIDTH } });
const __initData = { code: "function MainTabsChannelScreenStackTsx1(){const{isStackVisible,highestFullyRenderedScreenIndex,index,alwaysVisible,translateX,maxWidth}=this.__closure;return isStackVisible&&highestFullyRenderedScreenIndex.get()<=index&&(alwaysVisible||translateX.get()<maxWidth);}" };
const __initData2 = { code: "function MainTabsChannelScreenStackTsx2(visible,wasVisible){const{runOnJS,setIsVisible}=this.__closure;if(visible===wasVisible){return;}runOnJS(setIsVisible)(visible);}" };
const __initData3 = { code: "function MainTabsChannelScreenStackTsx3(){const{isStackVisible,highestFullyRenderedScreenIndex,index,alwaysVisible,translateX,maxWidth}=this.__closure;return isStackVisible&&highestFullyRenderedScreenIndex.get()<=index&&(alwaysVisible||translateX.get()<maxWidth);}" };
const __initData4 = { code: "function MainTabsChannelScreenStackTsx4(visible,wasVisible){const{runOnJS,setIsVisible}=this.__closure;if(visible===wasVisible)return;runOnJS(setIsVisible)(visible);}" };
let ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? ((translateX) => {
  const cResult = translateX(highestFullyRenderedScreenIndex[11]).c(7);
  translateX = translateX.translateX;
  const maxWidth = translateX.maxWidth;
  highestFullyRenderedScreenIndex = translateX.highestFullyRenderedScreenIndex;
  const index = translateX.index;
  const isStackVisible = translateX.isStackVisible;
  const alwaysVisible = translateX.alwaysVisible;
  closure_5 = tmp4;
  if (cResult[0] === (undefined !== alwaysVisible && alwaysVisible)) {
    if (cResult[1] === highestFullyRenderedScreenIndex) {
      if (cResult[2] === index) {
        if (cResult[3] === isStackVisible) {
          if (cResult[4] === maxWidth) {
            if (cResult[5] === translateX) {
              let tmp5 = cResult[6];
            }
            const tmp8 = index(isStackVisible.useState(tmp5), 2);
            closure_6 = tmp9;
            class T {
              constructor() {
                tmp = isStackVisible;
                if (isStackVisible) {
                  tmp2 = closure_2;
                  tmp3 = index;
                  tmp = closure_2.get() <= index;
                }
                if (tmp) {
                  tmp4 = alwaysVisible;
                  if (!alwaysVisible) {
                    tmp5 = translateX;
                    tmp6 = maxWidth;
                    tmp4 = translateX.get() < maxWidth;
                  }
                  tmp = tmp4;
                }
                return tmp;
              }
            }
            const obj2 = { isStackVisible, highestFullyRenderedScreenIndex, index, alwaysVisible: tmp4, translateX, maxWidth };
            T.__closure = obj2;
            T.__workletHash = 15384871148575;
            T.__initData = __initData;
            const fn2 = function f(arg0, arg1) {
              if (arg0 !== arg1) {
                ReanimatedRexport.runOnJS(closure_6)(arg0);
              }
            };
            const obj3 = { runOnJS: tmp(tmp2[12]).runOnJS, setIsVisible: tmp8[1] };
            fn2.__closure = obj3;
            fn2.__workletHash = 4812531096876;
            fn2.__initData = __initData2;
            const animatedReaction = tmp(tmp2[12]).useAnimatedReaction(T, fn2);
            return tmp8[0];
          }
        }
      }
    }
  }
  const fn = function l() {
    let tmp = isStackVisible;
    if (isStackVisible) {
      tmp = highestFullyRenderedScreenIndex.get() <= index;
    }
    if (tmp) {
      let tmp4 = closure_5;
      if (!closure_5) {
        tmp4 = translateX.get() < maxWidth;
      }
      tmp = tmp4;
    }
    return tmp;
  };
  cResult[0] = undefined !== alwaysVisible && alwaysVisible;
  cResult[1] = highestFullyRenderedScreenIndex;
  cResult[2] = index;
  cResult[3] = isStackVisible;
  cResult[4] = maxWidth;
  cResult[5] = translateX;
  cResult[6] = fn;
  tmp5 = fn;
}) : ((translateX) => {
  translateX = translateX.translateX;
  const maxWidth = translateX.maxWidth;
  const highestFullyRenderedScreenIndex = translateX.highestFullyRenderedScreenIndex;
  const index = translateX.index;
  const isStackVisible = translateX.isStackVisible;
  let flag = translateX.alwaysVisible;
  if (flag === undefined) {
    flag = false;
  }
  let tmp = index(isStackVisible.useState(() => {
    let tmp = isStackVisible;
    if (isStackVisible) {
      tmp = highestFullyRenderedScreenIndex.get() <= index;
    }
    if (tmp) {
      let tmp4 = flag;
      if (!flag) {
        tmp4 = translateX.get() < maxWidth;
      }
      tmp = tmp4;
    }
    return tmp;
  }), 2);
  closure_6 = tmp2;
  const fn = function x() {
    let tmp = isStackVisible;
    if (isStackVisible) {
      tmp = highestFullyRenderedScreenIndex.get() <= index;
    }
    if (tmp) {
      let tmp4 = flag;
      if (!flag) {
        tmp4 = translateX.get() < maxWidth;
      }
      tmp = tmp4;
    }
    return tmp;
  };
  fn.__closure = { isStackVisible, highestFullyRenderedScreenIndex, index, alwaysVisible: flag, translateX, maxWidth };
  fn.__workletHash = 10825075918877;
  fn.__initData = __initData3;
  class S {
    constructor(arg0, arg1) {
      if (translateX !== arg1) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[12]);
        tmp3 = closure_6;
        tmp4 = obj.runOnJS(closure_6)(translateX);
      }
      return;
    }
  }
  let obj = translateX(highestFullyRenderedScreenIndex[12]);
  S.__closure = { runOnJS: translateX(highestFullyRenderedScreenIndex[12]).runOnJS, setIsVisible: tmp[1] };
  S.__workletHash = 17276269728204;
  S.__initData = __initData4;
  const animatedReaction = obj.useAnimatedReaction(fn, S);
  return tmp[0];
});
ReactCompilerGating = fn(558);
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(10);
  ({ translateX, maxWidth, highestFullyRenderedScreenIndex, index, isStackVisible, alwaysVisible, children } = arg0);
  if (cResult[0] === (undefined !== alwaysVisible && alwaysVisible)) {
    if (cResult[1] === highestFullyRenderedScreenIndex) {
      if (cResult[2] === index) {
        if (cResult[3] === isStackVisible) {
          if (cResult[4] === maxWidth) {
            if (cResult[5] === translateX) {
              let tmp3 = cResult[6];
            }
            const tmp5 = closure_22(tmp3);
            if (cResult[7] === children) {
              if (cResult[8] === tmp5) {
                let tmp6 = cResult[9];
              }
              return tmp6;
            }
            const childrenResult = children(tmp5);
            cResult[7] = children;
            cResult[8] = tmp5;
            cResult[9] = childrenResult;
            tmp6 = childrenResult;
          }
        }
      }
    }
  }
  const obj2 = { translateX, maxWidth, highestFullyRenderedScreenIndex, index, isStackVisible, alwaysVisible: undefined !== alwaysVisible && alwaysVisible };
  cResult[0] = undefined !== alwaysVisible && alwaysVisible;
  cResult[1] = highestFullyRenderedScreenIndex;
  cResult[2] = index;
  cResult[3] = isStackVisible;
  cResult[4] = maxWidth;
  cResult[5] = translateX;
  cResult[6] = obj2;
  tmp3 = obj2;
}) : ((alwaysVisible) => {
  alwaysVisible = alwaysVisible.alwaysVisible;
  ({ translateX, maxWidth, highestFullyRenderedScreenIndex, index, isStackVisible } = alwaysVisible);
  if (alwaysVisible === undefined) {
    alwaysVisible = false;
  }
  return alwaysVisible.children(closure_22({ translateX, maxWidth, highestFullyRenderedScreenIndex, index, isStackVisible, alwaysVisible }));
});
ReactCompilerGating = fn(558);
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? ((children) => {
  const cResult = c.c(4);
  if (obj2.isNavigationTTIEnabled()) {
    if (cResult[2] !== children) {
      const obj3 = {};
      const merged = Object.assign(children);
      const tmp10 = closure_1_15(closure_23, obj3);
      cResult[2] = children;
      cResult[3] = tmp10;
    }
  } else {
    if (cResult[0] !== children.children) {
      const childrenResult = children.children(false);
      cResult[0] = children.children;
      cResult[1] = childrenResult;
      let tmp2 = childrenResult;
    } else {
      tmp2 = cResult[1];
    }
    return tmp2;
  }
}) : ((children) => {
  if (obj.isNavigationTTIEnabled()) {
    const obj2 = {};
    const merged = Object.assign(children);
    let childrenResult = closure_1_15(closure_23, obj2);
  } else {
    childrenResult = children.children(false);
  }
  return childrenResult;
});
const __initData5 = { code: "function MainTabsChannelScreenStackTsx5(){const{translateX}=this.__closure;return translateX.get()>0;}" };
const __initData6 = { code: "function MainTabsChannelScreenStackTsx6(isVisibleBeneath,wasVisibleBeneath){const{highestFullyRenderedScreenIndex,index}=this.__closure;if(isVisibleBeneath===wasVisibleBeneath){return;}if(isVisibleBeneath){if(highestFullyRenderedScreenIndex.get()>=index){highestFullyRenderedScreenIndex.set(index-1);}return;}if(highestFullyRenderedScreenIndex.get()<index){highestFullyRenderedScreenIndex.set(index);}}" };
const __initData7 = { code: "function MainTabsChannelScreenStackTsx7(){const{enabled,highestFullyRenderedScreenIndex,index}=this.__closure;return enabled&&highestFullyRenderedScreenIndex.get()>index;}" };
const __initData8 = { code: "function MainTabsChannelScreenStackTsx8(){const{translateX}=this.__closure;return translateX.get()>0;}" };
const __initData9 = { code: "function MainTabsChannelScreenStackTsx9(isVisibleBeneath,wasVisibleBeneath){const{highestFullyRenderedScreenIndex,index}=this.__closure;if(isVisibleBeneath===wasVisibleBeneath)return;if(isVisibleBeneath){if(highestFullyRenderedScreenIndex.get()>=index){highestFullyRenderedScreenIndex.set(index-1);}return;}if(highestFullyRenderedScreenIndex.get()<index){highestFullyRenderedScreenIndex.set(index);}}" };
const __initData10 = { code: "function MainTabsChannelScreenStackTsx10(){const{enabled,highestFullyRenderedScreenIndex,index}=this.__closure;return enabled&&highestFullyRenderedScreenIndex.get()>index;}" };
ReactCompilerGating = fn(558);
let closure_31 = ReactCompilerGating.isReactCompilerEnabled() ? ((index, highestFullyRenderedScreenIndex, translateX) => {
  closure_0 = index;
  importDefault = highestFullyRenderedScreenIndex;
  const cResult = c.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "MainTabsChannelScreenStack" };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  const enabled = HideCoveredChannelsExperimentDefault.useConfig(first).enabled;
  const fn = function o() {
    return translateX.get() > 0;
  };
  fn.__closure = { translateX };
  fn.__workletHash = 3913618654716;
  fn.__initData = __initData5;
  const fn2 = function u(arg0, arg1) {
    if (arg0 !== arg1) {
      value = highestFullyRenderedScreenIndex.get();
      if (arg0) {
        if (value >= tmp2) {
          const result = obj.set(tmp2 - 1);
        }
      } else if (value < tmp2) {
        const result1 = obj.set(tmp2);
      }
    }
  };
  fn2.__closure = { highestFullyRenderedScreenIndex, index };
  fn2.__workletHash = 11138417682243;
  fn2.__initData = __initData6;
  const animatedReaction = ReanimatedRexport.useAnimatedReaction(fn, fn2);
  if (cResult[1] === highestFullyRenderedScreenIndex) {
    if (cResult[2] === index) {
      let tmp6 = cResult[3];
    }
    const unmountEffect = tmp(5203).useUnmountEffect(tmp6);
    const tmpResult3 = tmp(5203);
    class S {
      constructor() {
        tmp = enabled;
        if (enabled) {
          tmp2 = closure_1;
          tmp3 = closure_0;
          tmp = closure_1.get() > closure_0;
        }
        return tmp;
      }
    }
    const obj4 = { enabled, highestFullyRenderedScreenIndex, index };
    S.__closure = obj4;
    S.__workletHash = 12545989660782;
    S.__initData = __initData7;
    return tmp(4497).useDerivedValue(S);
  }
  const fn3 = function h() {
    if (highestFullyRenderedScreenIndex.get() >= closure_0) {
      const result = highestFullyRenderedScreenIndex.set(tmp - 1);
    }
  };
  cResult[1] = highestFullyRenderedScreenIndex;
  cResult[2] = index;
  cResult[3] = fn3;
  tmp6 = fn3;
}) : ((index, highestFullyRenderedScreenIndex, translateX) => {
  closure_0 = index;
  const enabled = HideCoveredChannelsExperimentDefault.useConfig({ location: "MainTabsChannelScreenStack" }).enabled;
  const fn = function c() {
    return translateX.get() > 0;
  };
  fn.__closure = { translateX };
  fn.__workletHash = 5609946836721;
  fn.__initData = __initData8;
  const fn2 = function l(arg0, arg1) {
    if (arg0 !== arg1) {
      value = highestFullyRenderedScreenIndex.get();
      if (arg0) {
        if (value >= tmp2) {
          const result = obj.set(tmp2 - 1);
        }
      } else if (value < tmp2) {
        const result1 = obj.set(tmp2);
      }
    }
  };
  fn2.__closure = { highestFullyRenderedScreenIndex, index };
  fn2.__workletHash = 14278412688234;
  fn2.__initData = __initData9;
  const animatedReaction = ReanimatedRexport.useAnimatedReaction(fn, fn2);
  const unmountEffect = useMountEffect.useUnmountEffect(() => {
    if (highestFullyRenderedScreenIndex.get() >= closure_0) {
      const result = highestFullyRenderedScreenIndex.set(tmp - 1);
    }
  });
  const fn3 = function u() {
    let tmp = enabled;
    if (enabled) {
      tmp = highestFullyRenderedScreenIndex.get() > closure_0;
    }
    return tmp;
  };
  fn3.__closure = { enabled, highestFullyRenderedScreenIndex, index };
  fn3.__workletHash = 15762794544408;
  fn3.__initData = __initData10;
  return ReanimatedRexport.useDerivedValue(fn3);
});
ReactCompilerGating = fn(558);
let closure_32 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = guildId(showCreateThread[11]).c(37);
  guildId = guildId.guildId;
  const channelId = guildId.channelId;
  showCreateThread = guildId.showCreateThread;
  const frame = guildId.frame;
  const index = guildId.index;
  ({ freeze, isDragging, translateX, containerWidth } = guildId);
  ({ isActive, isNavigationTTIStackVisible, maxWidth, focusChatPressableComponent, transitionState } = guildId);
  const cleanup = guildId.cleanup;
  ({ highestFullyRenderedScreenIndex, parentFreezeValue } = guildId);
  const obj = guildId(showCreateThread[11]);
  const tmp = guildId;
  const tmp4 = channelId;
  const tmp5 = channelId(showCreateThread[16])();
  const tmp6 = closure_17();
  const tmp7 = closure_31(index, highestFullyRenderedScreenIndex, translateX);
  const mainTabsChannelScreenStyles = guildId(showCreateThread[18]).useMainTabsChannelScreenStyles(isDragging, translateX, maxWidth, tmp7, parentFreezeValue);
  if (cResult[0] === cleanup) {
    if (cResult[1] === transitionState) {
      let tmp9 = cResult[2];
      let tmp10 = cResult[3];
    }
    const effect = index.useEffect(tmp9, tmp10);
    if (cResult[4] !== containerWidth) {
      let tmp14 = null;
      if (null != containerWidth) {
        const obj3 = { width: containerWidth };
        tmp14 = obj3;
      }
      cResult[4] = containerWidth;
      cResult[5] = tmp14;
      let tmp13 = tmp14;
    } else {
      tmp13 = cResult[5];
    }
    let onyxContainerStyles;
    if (tmp5 === ThemeTypes.ONYX) {
      if (!channelId(showCreateThread[17])().isChatBesideChannelList) {
        onyxContainerStyles = tmp6.onyxContainerStyles;
      }
    }
    if (cResult[6] === mainTabsChannelScreenStyles) {
      if (cResult[7] === tmp13) {
        if (cResult[8] === onyxContainerStyles) {
          let tmp17 = cResult[9];
        }
        let str = "box-only";
        if (isActive) {
          str = "auto";
        }
        if (cResult[10] === channelId) {
          if (cResult[11] === containerWidth) {
            if (cResult[12] === frame) {
              if (cResult[13] === guildId) {
                if (cResult[14] === index) {
                  if (cResult[15] === showCreateThread) {
                    let tmp21 = cResult[16];
                  }
                  if (cResult[17] === highestFullyRenderedScreenIndex) {
                    if (cResult[18] === index) {
                      if (cResult[19] === isNavigationTTIStackVisible) {
                        if (cResult[20] === maxWidth) {
                          if (cResult[21] === tmp21) {
                            if (cResult[22] === tmp20) {
                              if (cResult[23] === translateX) {
                                let tmp22 = cResult[24];
                              }
                              if (cResult[25] === tmp22) {
                                if (cResult[26] === str) {
                                  if (cResult[27] === tmp18) {
                                    if (cResult[28] === str2) {
                                      let tmp26 = cResult[29];
                                    }
                                    if (cResult[30] === freeze) {
                                      if (cResult[31] === tmp26) {
                                        let tmp31 = cResult[32];
                                      }
                                      if (cResult[33] === focusChatPressableComponent) {
                                        if (cResult[34] === tmp31) {
                                          if (cResult[35] === tmp17) {
                                            let tmp34 = cResult[36];
                                          }
                                          return tmp34;
                                        }
                                      }
                                      const obj4 = { style: tmp17, children: null };
                                      const items = [tmp31, focusChatPressableComponent];
                                      obj4.children = items;
                                      const tmp36 = closure_16(tmp4(tmp2[22]), obj4);
                                      class G {
                                        constructor(arg0) {
                                          obj = { guildId, channelId, isNavigationTTIVisible: guildId, showCreateThread, isNavigationScreen: null == containerWidth, frame, screenIndex: index };
                                          return jsx(closure_1(closure_2[20]), obj);
                                        }
                                      }
                                      cResult[33] = focusChatPressableComponent;
                                      cResult[34] = tmp31;
                                      cResult[35] = tmp17;
                                      cResult[36] = tmp36;
                                      tmp34 = tmp36;
                                    }
                                    const obj5 = { freeze, children: tmp26 };
                                    const tmp33 = closure_15(tmp(tmp2[21]).Freeze, obj5);
                                    cResult[30] = freeze;
                                    class G {
                                      constructor(arg0) {
                                        obj = { guildId, channelId, isNavigationTTIVisible: guildId, showCreateThread, isNavigationScreen: null == containerWidth, frame, screenIndex: index };
                                        return jsx(closure_1(closure_2[20]), obj);
                                      }
                                    }
                                    cResult[32] = tmp33;
                                    tmp31 = tmp33;
                                  }
                                }
                              }
                              const obj6 = { collapsable: false, style: transitionState.absoluteFill, pointerEvents: str, accessibilityElementsHidden: tmp18, importantForAccessibility: str2, children: null };
                              class G {
                                constructor(arg0) {
                                  obj = { guildId, channelId, isNavigationTTIVisible: guildId, showCreateThread, isNavigationScreen: null == containerWidth, frame, screenIndex: index };
                                  return jsx(closure_1(closure_2[20]), obj);
                                }
                              }
                              const tmp30 = closure_15(cleanup, obj6);
                              cResult[25] = tmp22;
                              cResult[26] = str;
                              cResult[27] = tmp18;
                              cResult[28] = str2;
                              cResult[29] = tmp30;
                              tmp26 = tmp30;
                            }
                          }
                        }
                      }
                    }
                  }
                  const obj7 = { translateX, maxWidth, highestFullyRenderedScreenIndex, index, isStackVisible: isNavigationTTIStackVisible, alwaysVisible: null, children: null };
                  class G {
                    constructor(arg0) {
                      obj = { guildId, channelId, isNavigationTTIVisible: guildId, showCreateThread, isNavigationScreen: null == containerWidth, frame, screenIndex: index };
                      return jsx(closure_1(closure_2[20]), obj);
                    }
                  }
                  obj7.children = tmp21;
                  const tmp25 = closure_15(closure_24, obj7);
                  cResult[17] = highestFullyRenderedScreenIndex;
                  cResult[18] = index;
                  cResult[19] = isNavigationTTIStackVisible;
                  cResult[20] = maxWidth;
                  cResult[21] = tmp21;
                  cResult[22] = tmp20;
                  cResult[23] = translateX;
                  cResult[24] = tmp25;
                  tmp22 = tmp25;
                }
              }
            }
          }
        }
        class G {
          constructor(arg0) {
            obj = { guildId, channelId, isNavigationTTIVisible: guildId, showCreateThread, isNavigationScreen: null == containerWidth, frame, screenIndex: index };
            return jsx(closure_1(closure_2[20]), obj);
          }
        }
        cResult[10] = channelId;
        cResult[11] = containerWidth;
        cResult[12] = frame;
        cResult[13] = guildId;
        cResult[14] = index;
        cResult[15] = showCreateThread;
        cResult[16] = G;
        tmp21 = G;
      }
    }
    const items1 = [mainTabsChannelScreenStyles, , onyxContainerStyles];
    cResult[6] = mainTabsChannelScreenStyles;
    cResult[7] = tmp13;
    cResult[8] = onyxContainerStyles;
    cResult[9] = items1;
    tmp17 = items1;
  }
  const fn = function s() {
    if (transitionState === native.TransitionStates.YEETED) {
      cleanup();
    }
  };
  const items2 = [cleanup, transitionState];
  cResult[0] = cleanup;
  cResult[1] = transitionState;
  cResult[2] = fn;
  cResult[3] = items2;
  tmp10 = items2;
  tmp9 = fn;
}) : ((cleanup) => {
  ({ guildId: require, channelId: importDefault, showCreateThread: dependencyMap, frame: _slicedToArray, index } = cleanup);
  ({ isDragging, translateX, containerWidth } = cleanup);
  ({ isActive, maxWidth, transitionState } = cleanup);
  cleanup = cleanup.cleanup;
  const highestFullyRenderedScreenIndex = cleanup.highestFullyRenderedScreenIndex;
  ({ freeze, isNavigationTTIStackVisible, focusChatPressableComponent, parentFreezeValue } = cleanup);
  const tmp2 = useThemeDefault();
  const tmp3 = closure_17();
  const tmp4 = closure_31(index, highestFullyRenderedScreenIndex, translateX);
  const items = [cleanup, transitionState];
  const mainTabsChannelScreenStyles = useMainTabsChannelScreenStyles.useMainTabsChannelScreenStyles(isDragging, translateX, maxWidth, tmp4, parentFreezeValue);
  const effect = index.useEffect(() => {
    if (transitionState === native.TransitionStates.YEETED) {
      cleanup();
    }
  }, items);
  const items1 = [mainTabsChannelScreenStyles, , ];
  let tmp10 = null;
  const tmp8 = closure_16;
  if (null != containerWidth) {
    const obj2 = { width: containerWidth };
    tmp10 = obj2;
  }
  items1[1] = tmp10;
  let onyxContainerStyles;
  if (tmp2 === ThemeTypes.ONYX) {
    if (!useChatLayoutDefault().isChatBesideChannelList) {
      onyxContainerStyles = tmp3.onyxContainerStyles;
    }
  }
  const obj3 = { style: items1, children: null };
  items1[2] = onyxContainerStyles;
  const obj4 = { freeze, children: null };
  const obj5 = { collapsable: false, style: transitionState.absoluteFill, pointerEvents: null, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
  let str = "box-only";
  if (isActive) {
    str = "auto";
  }
  obj5.pointerEvents = str;
  obj5.accessibilityElementsHidden = !isActive;
  obj5.importantForAccessibility = "no-hide-descendants";
  obj5.children = closure_15(closure_24, {
    translateX,
    maxWidth,
    highestFullyRenderedScreenIndex,
    index,
    isStackVisible: isNavigationTTIStackVisible,
    alwaysVisible: null != containerWidth,
    children(isNavigationTTIVisible) {
      return closure_2_15(StandaloneChannelScreenDefault, { guildId, channelId, isNavigationTTIVisible, showCreateThread, isNavigationScreen: null == containerWidth, frame, screenIndex: index });
    }
  });
  obj4.children = closure_15(cleanup, obj5);
  const items2 = [closure_15(Suspender.Freeze, obj4), focusChatPressableComponent];
  obj3.children = items2;
  return tmp8(REAWorkaroundViewDefault, obj3);
}));
const __initData11 = { code: "function MainTabsChannelScreenStackTsx11(){const{translateX}=this.__closure;return translateX.get()===0;}" };
const __initData12 = { code: "function MainTabsChannelScreenStackTsx12(isFullyOpen,prev){const{index,mainTabsDisallowGesture}=this.__closure;if(isFullyOpen===prev){return;}if(index!==1){return;}mainTabsDisallowGesture.set(isFullyOpen);}" };
const __initData13 = { code: "function MainTabsChannelScreenStackTsx13(){const{translateX}=this.__closure;return translateX.get()===0;}" };
const __initData14 = { code: "function MainTabsChannelScreenStackTsx14(isFullyOpen,prev){const{index,mainTabsDisallowGesture}=this.__closure;if(isFullyOpen===prev)return;if(index!==1)return;mainTabsDisallowGesture.set(isFullyOpen);}" };
ReactCompilerGating = fn(558);
let closure_37 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = guildId(showCreateThread[11]).c(43);
  guildId = guildId.guildId;
  const channelId = guildId.channelId;
  showCreateThread = guildId.showCreateThread;
  const transitionState = guildId.transitionState;
  const cleanup = guildId.cleanup;
  ({ isActive, isNavigationTTIStackVisible, freeze, parentFreezeValue, index } = guildId);
  const highestFullyRenderedScreenIndex = guildId.highestFullyRenderedScreenIndex;
  const obj = guildId(showCreateThread[11]);
  const tmp5 = channelId(showCreateThread[16])();
  const tmp6 = closure_17();
  const navigation = guildId(showCreateThread[23]).useNavigation();
  cleanup.useRef(false);
  if (cResult[0] === cleanup) {
    if (cResult[1] === navigation) {
      let tmp8 = cResult[2];
    }
    const tmp9 = transitionState !== tmp(tmp2[19]).TransitionStates.YEETED;
    if (cResult[3] === tmp8) {
      if (cResult[4] === tmp9) {
        let tmp10 = cResult[5];
      }
      const tmp11 = tmp4(tmp2[25])(tmp10);
      ({ gesture, panelGestureContext, isDragging, translateX } = tmp11);
      ({ movePanel, maxWidth } = tmp11);
      const disallowGesture = obj3.useContext(tmp4(tmp2[26])).disallowGesture;
      const tmp13 = closure_31(index, highestFullyRenderedScreenIndex, translateX);
      class X {
        constructor() {
          return 0 === translateX.get();
        }
      }
      const obj4 = { translateX };
      X.__closure = obj4;
      X.__workletHash = 17200684995434;
      X.__initData = __initData11;
      class N {
        constructor(arg0, arg1) {
          tmp = guildId !== arg1;
          if (tmp) {
            tmp2 = index;
            num = 1;
            tmp = 1 === index;
          }
          if (tmp) {
            tmp3 = disallowGesture;
            result = disallowGesture.set(guildId);
          }
          return;
        }
      }
      const obj5 = { index, mainTabsDisallowGesture: disallowGesture };
      N.__closure = obj5;
      N.__workletHash = 109995460179;
      N.__initData = __initData12;
      const animatedReaction = tmp(tmp2[12]).useAnimatedReaction(X, N);
      if (cResult[6] === cleanup) {
        if (cResult[7] === movePanel) {
          let tmp17 = cResult[8];
        }
        let current = tmp17;
        obj3.useRef(tmp17);
        if (cResult[9] !== tmp17) {
          const fn2 = function j() {
            closure_11.current = current;
          };
          cResult[9] = tmp17;
          cResult[10] = fn2;
          let tmp19 = fn2;
        } else {
          tmp19 = cResult[10];
        }
        const effect = obj3.useEffect(tmp19);
        if (cResult[11] !== transitionState) {
          const fn3 = function q() {
            current = ref2.current;
            const movePanel = current.movePanel;
            if (transitionState !== native.TransitionStates.MOUNTED) {
              if (transitionState !== native.TransitionStates.ENTERED) {
                if (ref.current) {
                  current.cleanup();
                } else {
                  tmp5.current = true;
                  movePanel(false, false, 0, true);
                }
              }
            }
            movePanel(true, false, 0, false);
          };
          const items = [transitionState];
          cResult[11] = transitionState;
          cResult[12] = fn3;
          cResult[13] = items;
          let tmp22 = items;
          let tmp21 = fn3;
        } else {
          tmp21 = cResult[12];
          tmp22 = cResult[13];
        }
        const effect1 = obj3.useEffect(tmp21, tmp22);
        class X {
          constructor() {
            return 0 === translateX.get();
          }
        }
        let onyxContainerStyles;
        if (tmp5 === ThemeTypes.ONYX) {
          if (!channelId(showCreateThread[17])().isChatBesideChannelList) {
            onyxContainerStyles = tmp6.onyxContainerStyles;
          }
        }
        if (cResult[14] === tmp31) {
          if (cResult[15] === onyxContainerStyles) {
            let tmp34 = cResult[16];
          }
          if (cResult[17] === channelId) {
            if (cResult[18] === guildId) {
              if (cResult[19] === index) {
                if (cResult[20] === showCreateThread) {
                  let tmp36 = cResult[21];
                }
                if (cResult[22] === highestFullyRenderedScreenIndex) {
                  if (cResult[23] === index) {
                    if (cResult[24] === isNavigationTTIStackVisible) {
                      if (cResult[25] === maxWidth) {
                        if (cResult[26] === tmp36) {
                          if (cResult[27] === translateX) {
                            let tmp37 = cResult[28];
                          }
                          if (cResult[29] === freeze) {
                            if (cResult[30] === tmp37) {
                              let tmp41 = cResult[31];
                            }
                            if (cResult[32] === tmp35) {
                              if (cResult[33] === str) {
                                if (cResult[34] === tmp41) {
                                  if (cResult[35] === tmp34) {
                                    let tmp44 = cResult[36];
                                  }
                                  if (cResult[37] === panelGestureContext) {
                                    if (cResult[38] === tmp44) {
                                      let tmp47 = cResult[39];
                                    }
                                    if (cResult[40] === gesture) {
                                      if (cResult[41] === tmp47) {
                                        let tmp50 = cResult[42];
                                      }
                                      return tmp50;
                                    }
                                    const obj6 = { gesture, children: tmp47 };
                                    const tmp52 = closure_15(tmp(tmp2[27]).GestureDetector, obj6);
                                    cResult[40] = gesture;
                                    cResult[41] = tmp47;
                                    cResult[42] = tmp52;
                                    tmp50 = tmp52;
                                  }
                                  const obj7 = { value: panelGestureContext, children: tmp44 };
                                  const tmp49 = closure_15(tmp(tmp2[26]).MainTabsChannelScreenStackContext.Provider, obj7);
                                  cResult[37] = panelGestureContext;
                                  cResult[38] = tmp44;
                                  cResult[39] = tmp49;
                                  tmp47 = tmp49;
                                }
                              }
                            }
                            const obj8 = { style: tmp34, accessibilityElementsHidden: tmp35, importantForAccessibility: str, children: tmp41 };
                            const tmp46 = closure_15(tmp4(tmp2[22]), obj8);
                            cResult[32] = tmp35;
                            cResult[33] = str;
                            cResult[34] = tmp41;
                            class X {
                              constructor() {
                                return 0 === translateX.get();
                              }
                            }
                            cResult[35] = tmp34;
                            cResult[36] = tmp46;
                            tmp44 = tmp46;
                          }
                          const obj9 = { freeze, children: tmp37 };
                          const tmp43 = closure_15(tmp(tmp2[21]).Freeze, obj9);
                          cResult[29] = freeze;
                          cResult[30] = tmp37;
                          cResult[31] = tmp43;
                          tmp41 = tmp43;
                        }
                      }
                    }
                  }
                }
                const obj10 = { translateX, maxWidth, highestFullyRenderedScreenIndex, index, isStackVisible: isNavigationTTIStackVisible, children: tmp36 };
                const tmp40 = closure_15(closure_24, obj10);
                cResult[22] = highestFullyRenderedScreenIndex;
                class X {
                  constructor() {
                    return 0 === translateX.get();
                  }
                }
                cResult[24] = isNavigationTTIStackVisible;
                cResult[25] = maxWidth;
                cResult[26] = tmp36;
                class N {
                  constructor(arg0, arg1) {
                    tmp = guildId !== arg1;
                    if (tmp) {
                      tmp2 = index;
                      num = 1;
                      tmp = 1 === index;
                    }
                    if (tmp) {
                      tmp3 = disallowGesture;
                      result = disallowGesture.set(guildId);
                    }
                    return;
                  }
                }
                cResult[28] = tmp40;
                tmp37 = tmp40;
              }
            }
          }
          function ie(isNavigationTTIVisible) {
            return closure_2_15(StandaloneChannelScreenDefault, { guildId, channelId, isNavigationTTIVisible, showCreateThread, isNavigationScreen: true, frame: null, screenIndex: index });
          }
          cResult[17] = channelId;
          cResult[18] = guildId;
          cResult[19] = index;
          cResult[20] = showCreateThread;
          class X {
            constructor() {
              return 0 === translateX.get();
            }
          }
          cResult[21] = ie;
          tmp36 = ie;
        }
        const items1 = [tmp31, onyxContainerStyles];
        class N {
          constructor(arg0, arg1) {
            tmp = guildId !== arg1;
            if (tmp) {
              tmp2 = index;
              num = 1;
              tmp = 1 === index;
            }
            if (tmp) {
              tmp3 = disallowGesture;
              result = disallowGesture.set(guildId);
            }
            return;
          }
        }
        cResult[14] = tmp31;
        cResult[15] = onyxContainerStyles;
        cResult[16] = items1;
        tmp34 = items1;
        const tmpResult2 = tmp(tmp2[18]);
      }
      const obj11 = { cleanup, movePanel };
      cResult[6] = cleanup;
      cResult[7] = movePanel;
      cResult[8] = obj11;
      tmp17 = obj11;
      const tmpResult = tmp(tmp2[12]);
    }
    const obj12 = { canDrag: tmp9, onVisibilityChange: tmp8, onDragStart: tmp(tmp2[24]).dismissKeyboard, startShown: false };
    cResult[3] = tmp8;
    cResult[4] = tmp9;
    cResult[5] = obj12;
    tmp10 = obj12;
  }
  const fn = function s(arg0) {
    if (!arg0) {
      if (ref.current) {
        cleanup();
      } else {
        tmp.current = true;
        navigation.goBack();
      }
    }
  };
  cResult[0] = cleanup;
  cResult[1] = navigation;
  cResult[2] = fn;
  tmp8 = fn;
}) : ((cleanup) => {
  ({ guildId: require, channelId: importDefault, showCreateThread: dependencyMap, transitionState } = cleanup);
  cleanup = cleanup.cleanup;
  ({ isActive, index } = cleanup);
  const highestFullyRenderedScreenIndex = cleanup.highestFullyRenderedScreenIndex;
  translateX = undefined;
  let obj4;
  ({ isNavigationTTIStackVisible, freeze, parentFreezeValue } = cleanup);
  const tmp2 = useThemeDefault();
  const tmp3 = closure_17();
  const navigation = Link.useNavigation();
  cleanup.useRef(false);
  const items = [cleanup, navigation];
  const callback = cleanup.useCallback((arg0) => {
    if (!arg0) {
      if (ref.current) {
        cleanup();
      } else {
        tmp.current = true;
        navigation.goBack();
      }
    }
  }, items);
  const obj2 = { canDrag: null, onVisibilityChange: null, onDragStart: null, startShown: false };
  obj2.canDrag = transitionState !== native.TransitionStates.YEETED;
  obj2.onVisibilityChange = callback;
  obj2.onDragStart = ChatInputUtils.dismissKeyboard;
  const tmp7Result = useMainTabsPanelsGestureDefault(obj2);
  ({ isDragging, translateX } = tmp7Result);
  const maxWidth = tmp7Result.maxWidth;
  ({ gesture, panelGestureContext, movePanel } = tmp7Result);
  const disallowGesture = cleanup.useContext(MainTabsNavigatorPanelContextDefault).disallowGesture;
  const tmp9 = closure_31(index, highestFullyRenderedScreenIndex, translateX);
  class T {
    constructor() {
      return 0 === translateX.get();
    }
  }
  T.__closure = { translateX };
  T.__workletHash = 279822179624;
  T.__initData = __initData13;
  const fn = function f(arg0, arg1) {
    let tmp = arg0 !== arg1;
    if (tmp) {
      tmp = 1 === index;
    }
    if (tmp) {
      const result = disallowGesture.set(arg0);
    }
  };
  fn.__closure = { index, mainTabsDisallowGesture: disallowGesture };
  fn.__workletHash = 2043595505301;
  fn.__initData = __initData14;
  const animatedReaction = ReanimatedRexport.useAnimatedReaction(T, fn);
  obj4 = { cleanup, movePanel };
  cleanup.useRef(obj4);
  const effect = cleanup.useEffect(() => {
    closure_11.current = obj4;
  });
  const items1 = [transitionState];
  const effect1 = cleanup.useEffect(() => {
    const current = ref2.current;
    const movePanel = current.movePanel;
    if (transitionState !== native.TransitionStates.MOUNTED) {
      if (transitionState !== native.TransitionStates.ENTERED) {
        if (ref.current) {
          current.cleanup();
        } else {
          tmp5.current = true;
          movePanel(false, false, 0, true);
        }
      }
    }
    movePanel(true, false, 0, false);
  }, items1);
  const mainTabsChannelScreenStyles = useMainTabsChannelScreenStyles.useMainTabsChannelScreenStyles(isDragging, translateX, maxWidth, tmp9, parentFreezeValue);
  const obj6 = { gesture, children: null };
  const obj7 = { value: panelGestureContext, children: null };
  const items2 = [mainTabsChannelScreenStyles, ];
  let onyxContainerStyles;
  if (tmp2 === ThemeTypes.ONYX) {
    if (!useChatLayoutDefault().isChatBesideChannelList) {
      onyxContainerStyles = tmp3.onyxContainerStyles;
    }
  }
  const obj8 = { style: items2, accessibilityElementsHidden: !isActive, importantForAccessibility: "no-hide-descendants", children: null };
  items2[1] = onyxContainerStyles;
  const obj9 = {
    freeze,
    children: closure_15(closure_24, {
      translateX,
      maxWidth,
      highestFullyRenderedScreenIndex,
      index,
      isStackVisible: isNavigationTTIStackVisible,
      children(isNavigationTTIVisible) {
        return closure_2_15(StandaloneChannelScreenDefault, { guildId, channelId, isNavigationTTIVisible, showCreateThread, isNavigationScreen: true, frame: null, screenIndex: index });
      }
    })
  };
  obj8.children = closure_15(Suspender.Freeze, obj9);
  obj7.children = closure_15(REAWorkaroundViewDefault, obj8);
  obj6.children = closure_15(MainTabsNavigatorPanelContext.MainTabsChannelScreenStackContext.Provider, obj7);
  return closure_15(LegacyBaseButton.GestureDetector, obj6);
}));
const __initData15 = { code: "function MainTabsChannelScreenStackTsx15(){const{translateX,maxWidth}=this.__closure;return translateX.get()===maxWidth;}" };
const __initData16 = { code: "function MainTabsChannelScreenStackTsx16(value,prev){const{runOnJS,setIsHidden}=this.__closure;if(value===prev){return;}runOnJS(setIsHidden)(value);}" };
const __initData17 = { code: "function MainTabsChannelScreenStackTsx17(){const{translateX,maxWidth}=this.__closure;return translateX.get()===maxWidth;}" };
const __initData18 = { code: "function MainTabsChannelScreenStackTsx18(value,prev){const{runOnJS,setIsHidden}=this.__closure;if(value===prev)return;runOnJS(setIsHidden)(value);}" };
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/MainTabsChannelScreenStack.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((screens) => {
  const cResult = screens(navigationTTIStackVisible[11]).c(45);
  screens = screens.screens;
  const screenStackActive = screens.screenStackActive;
  navigationTTIStackVisible = screens.navigationTTIStackVisible;
  const translateX = screens.translateX;
  const isDragging = screens.isDragging;
  const maxWidth = screens.maxWidth;
  const highestFullyRenderedScreenIndex = screens.highestFullyRenderedScreenIndex;
  ({ shouldFreeze, focusChatPressableComponent } = screens);
  const firstScreenWidth = screens.firstScreenWidth;
  const firstScreenFrame = screens.firstScreenFrame;
  screenStackActive(navigationTTIStackVisible[28])();
  if (cResult[0] !== translateX) {
    value = translateX.get();
    cResult[0] = translateX;
    cResult[1] = value;
    let tmp5 = value;
  } else {
    tmp5 = cResult[1];
  }
  let obj = screens(navigationTTIStackVisible[11]);
  let tmp8 = translateX(isDragging.useState(tmp5 === maxWidth), 2)[1];
  closure_10 = tmp8;
  let tmp7 = translateX(isDragging.useState(tmp5 === maxWidth), 2);
  class X {
    constructor() {
      return translateX.get() === maxWidth;
    }
  }
  X.__closure = { translateX, maxWidth };
  X.__workletHash = 13892906836978;
  X.__initData = __initData15;
  class N {
    constructor(arg0, arg1) {
      if (screens !== arg1) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[12]);
        tmp3 = closure_10;
        tmp4 = obj.runOnJS(closure_10)(screens);
      }
      return;
    }
  }
  const tmpResult = screens(navigationTTIStackVisible[12]);
  N.__closure = { runOnJS: screens(navigationTTIStackVisible[12]).runOnJS, setIsHidden: tmp8 };
  N.__workletHash = 13169088086524;
  N.__initData = __initData16;
  const animatedReaction = tmpResult.useAnimatedReaction(X, N);
  if (cResult[2] !== screens) {
    const atResult = screens.at(-1);
    cResult[2] = screens;
    cResult[3] = atResult;
    let tmp10 = atResult;
  } else {
    tmp10 = cResult[3];
  }
  let type;
  if (tmp10 != null) {
    type = tmp10.type;
  }
  let channelId = null;
  if (type === screens(navigationTTIStackVisible[29]).ChannelScreenType.DEFAULT) {
    channelId = tmp10.channelId;
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class L {
      constructor() {
        MediaPlayerManager = maxWidth.MediaPlayerManager;
        if (MediaPlayerManager != null) {
          pauseAllMediaPlayers = MediaPlayerManager.pauseAllMediaPlayers;
          if (pauseAllMediaPlayers != null) {
            pauseAllMediaPlayersResult = pauseAllMediaPlayers();
          }
        }
        return;
      }
    }
    cResult[4] = L;
    let tmp14 = L;
  } else {
    class L {
      constructor() {
        MediaPlayerManager = maxWidth.MediaPlayerManager;
        if (MediaPlayerManager != null) {
          pauseAllMediaPlayers = MediaPlayerManager.pauseAllMediaPlayers;
          if (pauseAllMediaPlayers != null) {
            pauseAllMediaPlayersResult = pauseAllMediaPlayers();
          }
        }
        return;
      }
    }
  }
  if (cResult[5] !== channelId) {
    class L {
      constructor() {
        MediaPlayerManager = maxWidth.MediaPlayerManager;
        if (MediaPlayerManager != null) {
          pauseAllMediaPlayers = MediaPlayerManager.pauseAllMediaPlayers;
          if (pauseAllMediaPlayers != null) {
            pauseAllMediaPlayersResult = pauseAllMediaPlayers();
          }
        }
        return;
      }
    }
    tmp16[0] = channelId;
    cResult[5] = channelId;
    cResult[6] = tmp16;
    const tmp15 = tmp16;
  } else {
    class L {
      constructor() {
        MediaPlayerManager = maxWidth.MediaPlayerManager;
        if (MediaPlayerManager != null) {
          pauseAllMediaPlayers = MediaPlayerManager.pauseAllMediaPlayers;
          if (pauseAllMediaPlayers != null) {
            pauseAllMediaPlayersResult = pauseAllMediaPlayers();
          }
        }
        return;
      }
    }
  }
  const effect = obj2.useEffect(tmp14, tmp15);
  if (cResult[7] !== channelId) {
    class B {
      constructor() {
        allFrames = closure_8.getAllFrames();
        iter = allFrames[Symbol.iterator]();
        nextResult = iter.next();
        while (iter !== undefined) {
          tmp3 = nextResult;
          tmp4 = FrameIntent;
          if (nextResult.intent === FrameIntent.INLINE) {
            tmp5 = getChannelIdForSurface;
            tmp6 = nextResult;
            tmp7 = getChannelIdForSurface(tmp3.surface);
            tmp9 = null != tmp7;
            if (tmp9) {
              tmp10 = tmp7;
              tmp11 = channelId;
              tmp9 = tmp8 !== channelId;
            }
            if (tmp9) {
              tmp12 = closure_1;
              tmp13 = closure_2;
              obj = closure_1(closure_2[30]);
              tmp14 = nextResult;
              leaveFrameResult = obj.leaveFrame(tmp3.id);
            }
          }
          continue;
        }
        return;
      }
    }
    const items = [channelId];
    cResult[7] = channelId;
    cResult[8] = B;
    cResult[9] = items;
    let tmp19 = items;
    const tmp18 = B;
  } else {
    class B {
      constructor() {
        allFrames = closure_8.getAllFrames();
        iter = allFrames[Symbol.iterator]();
        nextResult = iter.next();
        while (iter !== undefined) {
          tmp3 = nextResult;
          tmp4 = FrameIntent;
          if (nextResult.intent === FrameIntent.INLINE) {
            tmp5 = getChannelIdForSurface;
            tmp6 = nextResult;
            tmp7 = getChannelIdForSurface(tmp3.surface);
            tmp9 = null != tmp7;
            if (tmp9) {
              tmp10 = tmp7;
              tmp11 = channelId;
              tmp9 = tmp8 !== channelId;
            }
            if (tmp9) {
              tmp12 = closure_1;
              tmp13 = closure_2;
              obj = closure_1(closure_2[30]);
              tmp14 = nextResult;
              leaveFrameResult = obj.leaveFrame(tmp3.id);
            }
          }
          continue;
        }
        return;
      }
    }
    tmp19 = cResult[9];
  }
  const effect1 = obj2.useEffect(tmp18, tmp19);
  closure_12 = screens[0];
  if (shouldFreeze) {
    class B {
      constructor() {
        allFrames = closure_8.getAllFrames();
        iter = allFrames[Symbol.iterator]();
        nextResult = iter.next();
        while (iter !== undefined) {
          tmp3 = nextResult;
          tmp4 = FrameIntent;
          if (nextResult.intent === FrameIntent.INLINE) {
            tmp5 = getChannelIdForSurface;
            tmp6 = nextResult;
            tmp7 = getChannelIdForSurface(tmp3.surface);
            tmp9 = null != tmp7;
            if (tmp9) {
              tmp10 = tmp7;
              tmp11 = channelId;
              tmp9 = tmp8 !== channelId;
            }
            if (tmp9) {
              tmp12 = closure_1;
              tmp13 = closure_2;
              obj = closure_1(closure_2[30]);
              tmp14 = nextResult;
              leaveFrameResult = obj.leaveFrame(tmp3.id);
            }
          }
          continue;
        }
        return;
      }
    }
  }
  if (shouldFreeze) {
    class B {
      constructor() {
        allFrames = closure_8.getAllFrames();
        iter = allFrames[Symbol.iterator]();
        nextResult = iter.next();
        while (iter !== undefined) {
          tmp3 = nextResult;
          tmp4 = FrameIntent;
          if (nextResult.intent === FrameIntent.INLINE) {
            tmp5 = getChannelIdForSurface;
            tmp6 = nextResult;
            tmp7 = getChannelIdForSurface(tmp3.surface);
            tmp9 = null != tmp7;
            if (tmp9) {
              tmp10 = tmp7;
              tmp11 = channelId;
              tmp9 = tmp8 !== channelId;
            }
            if (tmp9) {
              tmp12 = closure_1;
              tmp13 = closure_2;
              obj = closure_1(closure_2[30]);
              tmp14 = nextResult;
              leaveFrameResult = obj.leaveFrame(tmp3.id);
            }
          }
          continue;
        }
        return;
      }
    }
    if (!tmp21) {
      class B {
        constructor() {
          allFrames = closure_8.getAllFrames();
          iter = allFrames[Symbol.iterator]();
          nextResult = iter.next();
          while (iter !== undefined) {
            tmp3 = nextResult;
            tmp4 = FrameIntent;
            if (nextResult.intent === FrameIntent.INLINE) {
              tmp5 = getChannelIdForSurface;
              tmp6 = nextResult;
              tmp7 = getChannelIdForSurface(tmp3.surface);
              tmp9 = null != tmp7;
              if (tmp9) {
                tmp10 = tmp7;
                tmp11 = channelId;
                tmp9 = tmp8 !== channelId;
              }
              if (tmp9) {
                tmp12 = closure_1;
                tmp13 = closure_2;
                obj = closure_1(closure_2[30]);
                tmp14 = nextResult;
                leaveFrameResult = obj.leaveFrame(tmp3.id);
              }
            }
            continue;
          }
          return;
        }
      }
      tmp21 = tmp22 !== tmp(tmp2[29]).ChannelScreenType.DEFAULT;
    }
    shouldFreeze = tmp21;
  }
  let obj3 = { runOnJS: screens(navigationTTIStackVisible[12]).runOnJS, setIsHidden: tmp8 };
  const sharedValue = screens(navigationTTIStackVisible[12]).useSharedValue(0);
  if (cResult[10] !== sharedValue) {
    class Q {
      constructor() {
        closure_0 = setTimeout(() => {
          const result = sharedValue.set(sharedValue.get() + 1);
        }, 10);
        return () => clearTimeout(closure_0);
      }
    }
    cResult[10] = sharedValue;
    cResult[11] = Q;
    const tmp24 = Q;
  } else {
    class Q {
      constructor() {
        closure_0 = setTimeout(() => {
          const result = sharedValue.set(sharedValue.get() + 1);
        }, 10);
        return () => clearTimeout(closure_0);
      }
    }
  }
  if (cResult[12] === shouldFreeze) {
    class Q {
      constructor() {
        closure_0 = setTimeout(() => {
          const result = sharedValue.set(sharedValue.get() + 1);
        }, 10);
        return () => clearTimeout(closure_0);
      }
    }
    const effect2 = obj2.useEffect(tmp24, items1);
    if (cResult[15] === firstScreenFrame) {
      class Q {
        constructor() {
          closure_0 = setTimeout(() => {
            const result = sharedValue.set(sharedValue.get() + 1);
          }, 10);
          return () => clearTimeout(closure_0);
        }
      }
    }
    const fn = function $(arg0, arg1, transitionState, cleanup) {
      const NumberResult = Number(arg0);
      if (0 === NumberResult) {
        const obj = { guildId: null, channelId: null, showCreateThread: null, focusChatPressableComponent: null, index: null, transitionState: null, cleanup: null, isDragging: null, translateX: null, isActive: null, isNavigationTTIStackVisible: null, freeze: null, containerWidth: null, frame: null, parentFreezeValue: null, maxWidth: null, highestFullyRenderedScreenIndex: null };
        ({ guildId: obj.guildId, channelId: obj.channelId, showCreateThread: showCreateThread2 } = arg1);
        if (showCreateThread2 == null) {
          showCreateThread2 = false;
        }
        obj.showCreateThread = showCreateThread2;
        obj.focusChatPressableComponent = focusChatPressableComponent;
        obj.index = NumberResult;
        obj.transitionState = transitionState;
        obj.cleanup = cleanup;
        obj.isDragging = isDragging;
        obj.translateX = translateX;
        let tmp13 = screenStackActive;
        if (screenStackActive) {
          tmp13 = NumberResult === screens.length - 1;
        }
        obj.isActive = tmp13;
        obj.isNavigationTTIStackVisible = navigationTTIStackVisible;
        obj.freeze = NumberResult < screens.length - 2;
        obj.containerWidth = firstScreenWidth;
        obj.frame = firstScreenFrame;
        obj.parentFreezeValue = sharedValue;
        obj.maxWidth = maxWidth;
        obj.highestFullyRenderedScreenIndex = highestFullyRenderedScreenIndex;
        let tmp22Result = closure_2_15(closure_32, obj, arg0);
      } else {
        const obj3 = { guildId: null, channelId: null, showCreateThread: null, index: null, transitionState: null, parentFreezeValue: null, cleanup: null, isActive: null, isNavigationTTIStackVisible: null, freeze: null, highestFullyRenderedScreenIndex: null };
        ({ guildId: obj2.guildId, channelId: obj2.channelId, showCreateThread } = arg1);
        if (showCreateThread == null) {
          showCreateThread = false;
        }
        obj3.showCreateThread = showCreateThread;
        obj3.index = NumberResult;
        obj3.transitionState = transitionState;
        obj3.parentFreezeValue = sharedValue;
        obj3.cleanup = cleanup;
        obj3.isActive = NumberResult === screens.length - 1;
        obj3.isNavigationTTIStackVisible = navigationTTIStackVisible;
        obj3.freeze = NumberResult < screens.length - 2;
        obj3.highestFullyRenderedScreenIndex = highestFullyRenderedScreenIndex;
        tmp22Result = closure_2_15(closure_37, obj3, arg0);
      }
      return tmp22Result;
    };
    cResult[15] = firstScreenFrame;
    cResult[16] = firstScreenWidth;
    cResult[17] = focusChatPressableComponent;
    cResult[18] = sharedValue;
    cResult[19] = highestFullyRenderedScreenIndex;
    cResult[20] = isDragging;
    cResult[21] = maxWidth;
    cResult[22] = navigationTTIStackVisible;
    cResult[23] = screenStackActive;
    cResult[24] = screens.length;
    cResult[25] = translateX;
    cResult[26] = fn;
  }
  items1 = [shouldFreeze, sharedValue];
  cResult[12] = shouldFreeze;
  cResult[13] = sharedValue;
  cResult[14] = items1;
}) : ((screens) => {
  screens = screens.screens;
  const screenStackActive = screens.screenStackActive;
  const navigationTTIStackVisible = screens.navigationTTIStackVisible;
  const translateX = screens.translateX;
  const isDragging = screens.isDragging;
  const maxWidth = screens.maxWidth;
  const highestFullyRenderedScreenIndex = screens.highestFullyRenderedScreenIndex;
  ({ shouldFreeze, focusChatPressableComponent } = screens);
  const firstScreenWidth = screens.firstScreenWidth;
  const firstScreenFrame = screens.firstScreenFrame;
  let memo;
  let first;
  let sharedValue;
  let ref2;
  let tmp3 = translateX(isDragging.useState(translateX.get() === maxWidth), 2);
  closure_10 = tmp4;
  const tmp2 = screenStackActive(navigationTTIStackVisible[28])();
  const fn = function w() {
    return translateX.get() === maxWidth;
  };
  fn.__closure = { translateX, maxWidth };
  fn.__workletHash = 14568525032880;
  fn.__initData = __initData17;
  class R {
    constructor(arg0, arg1) {
      if (screens !== arg1) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[12]);
        tmp3 = closure_10;
        tmp4 = obj.runOnJS(closure_10)(screens);
      }
      return;
    }
  }
  let obj2 = screens(navigationTTIStackVisible[12]);
  R.__closure = { runOnJS: screens(navigationTTIStackVisible[12]).runOnJS, setIsHidden: tmp3[1] };
  R.__workletHash = 7029914705044;
  R.__initData = __initData18;
  const animatedReaction = obj2.useAnimatedReaction(fn, R);
  const items = [screens];
  memo = isDragging.useMemo(() => {
    const atResult = screens.at(-1);
    let type;
    if (atResult != null) {
      type = atResult.type;
    }
    let channelId = null;
    if (type === useChannelScreensFromNavigation.ChannelScreenType.DEFAULT) {
      channelId = atResult.channelId;
    }
    return channelId;
  }, items);
  const items1 = [memo];
  const effect = isDragging.useEffect(() => {
    const MediaPlayerManager = maxWidth.MediaPlayerManager;
    if (MediaPlayerManager != null) {
      const pauseAllMediaPlayers = MediaPlayerManager.pauseAllMediaPlayers;
      if (pauseAllMediaPlayers != null) {
        pauseAllMediaPlayers();
      }
    }
  }, items1);
  const items2 = [memo];
  const effect1 = isDragging.useEffect(() => {
    const allFrames = FramesStore.getAllFrames();
    const iter = allFrames[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      if (nextResult.intent === constants4.INLINE) {
        let tmp7 = __initData2(tmp3.surface);
        let tmp9 = null != tmp7;
        if (tmp9) {
          tmp9 = tmp8 !== memo;
        }
        if (tmp9) {
          let obj = FramesNativeManagerDefault;
          let leaveFrameResult = obj.leaveFrame(tmp3.id);
        }
      }
      continue;
    }
  }, items2);
  first = screens[0];
  if (shouldFreeze) {
    shouldFreeze = tmp3[0];
  }
  if (shouldFreeze) {
    let tmp12 = null == first;
    if (!tmp12) {
      tmp12 = first.type !== tmp5(tmp[29]).ChannelScreenType.DEFAULT;
    }
    shouldFreeze = tmp12;
  }
  let obj3 = { runOnJS: screens(navigationTTIStackVisible[12]).runOnJS, setIsHidden: tmp3[1] };
  sharedValue = screens(navigationTTIStackVisible[12]).useSharedValue(0);
  const items3 = [shouldFreeze, sharedValue];
  const effect2 = obj.useEffect(() => {
    const timeout = setTimeout(() => {
      const result = sharedValue.set(sharedValue.get() + 1);
    }, 10);
    return () => clearTimeout(closure_0);
  }, items3);
  const items4 = [screens.length, focusChatPressableComponent, isDragging, translateX, firstScreenWidth, firstScreenFrame, maxWidth, sharedValue, screenStackActive, navigationTTIStackVisible, highestFullyRenderedScreenIndex];
  let channelId;
  const callback = obj.useCallback((arg0, arg1, transitionState, cleanup) => {
    const NumberResult = Number(arg0);
    if (0 === NumberResult) {
      const obj = { guildId: null, channelId: null, showCreateThread: null, focusChatPressableComponent: null, index: null, transitionState: null, cleanup: null, isDragging: null, translateX: null, isActive: null, isNavigationTTIStackVisible: null, freeze: null, containerWidth: null, frame: null, parentFreezeValue: null, maxWidth: null, highestFullyRenderedScreenIndex: null };
      ({ guildId: obj.guildId, channelId: obj.channelId, showCreateThread: showCreateThread2 } = arg1);
      if (showCreateThread2 == null) {
        showCreateThread2 = false;
      }
      obj.showCreateThread = showCreateThread2;
      obj.focusChatPressableComponent = focusChatPressableComponent;
      obj.index = NumberResult;
      obj.transitionState = transitionState;
      obj.cleanup = cleanup;
      obj.isDragging = isDragging;
      obj.translateX = translateX;
      let tmp13 = screenStackActive;
      if (screenStackActive) {
        tmp13 = NumberResult === screens.length - 1;
      }
      obj.isActive = tmp13;
      obj.isNavigationTTIStackVisible = navigationTTIStackVisible;
      obj.freeze = NumberResult < screens.length - 2;
      obj.containerWidth = firstScreenWidth;
      obj.frame = firstScreenFrame;
      obj.parentFreezeValue = sharedValue;
      obj.maxWidth = maxWidth;
      obj.highestFullyRenderedScreenIndex = highestFullyRenderedScreenIndex;
      let tmp22Result = closure_2_15(closure_32, obj, arg0);
    } else {
      const obj3 = { guildId: null, channelId: null, showCreateThread: null, index: null, transitionState: null, parentFreezeValue: null, cleanup: null, isActive: null, isNavigationTTIStackVisible: null, freeze: null, highestFullyRenderedScreenIndex: null };
      ({ guildId: obj2.guildId, channelId: obj2.channelId, showCreateThread } = arg1);
      if (showCreateThread == null) {
        showCreateThread = false;
      }
      obj3.showCreateThread = showCreateThread;
      obj3.index = NumberResult;
      obj3.transitionState = transitionState;
      obj3.parentFreezeValue = sharedValue;
      obj3.cleanup = cleanup;
      obj3.isActive = NumberResult === screens.length - 1;
      obj3.isNavigationTTIStackVisible = navigationTTIStackVisible;
      obj3.freeze = NumberResult < screens.length - 2;
      obj3.highestFullyRenderedScreenIndex = highestFullyRenderedScreenIndex;
      tmp22Result = closure_2_15(closure_37, obj3, arg0);
    }
    return tmp22Result;
  }, items4);
  if (first != null) {
    channelId = first.channelId;
  }
  if (channelId == null) {
    channelId = null;
  }
  isDragging.useRef(channelId);
  ref2 = obj.useRef(null);
  let type;
  if (first != null) {
    type = first.type;
  }
  const items5 = [type, ];
  let channelId1;
  if (first != null) {
    channelId1 = first.channelId;
  }
  items5[1] = channelId1;
  const effect3 = obj.useEffect(() => {
    let type;
    if (first != null) {
      type = tmp.type;
    }
    let tmp3 = null != type;
    if (tmp3) {
      tmp3 = ref2.current !== tmp.type;
    }
    if (tmp3) {
      ref2.current = tmp.type;
      if (tmp.channelId === ref.current) {
        let isChatLockedOpen = tmp.type !== useChannelScreensFromNavigation.ChannelScreenType.DEFAULT;
        if (!isChatLockedOpen) {
          isChatLockedOpen = tmp7(4619).getChatLayout().isChatLockedOpen;
          const tmp7Result = tmp7(4619);
        }
        if (!isChatLockedOpen) {
          const obj = { type: "TRY_ACK", location: null, channelId: null };
          const obj3 = { section: constants3.CHANNEL, object: constants2.ACK_CHANNEL_SELECT_SAME_CHANNEL_DISPATCH, objectType: constants.ACK_AUTOMATIC };
          obj.location = obj3;
          obj.channelId = tmp.channelId;
          DispatcherDefault.dispatch(obj);
        }
        tmp7 = require;
      } else {
        tmp6.current = tmp.channelId;
      }
    }
  }, items5);
  const tmp5Result = screens(navigationTTIStackVisible[12]);
  screens(navigationTTIStackVisible[32]).freezeScreenIndex(shouldFreeze, 0);
  if (!shouldFreeze) {
    const obj4 = { freeze: shouldFreeze, children: null };
    const obj5 = { collapsable: false, style: highestFullyRenderedScreenIndex.absoluteFill, pointerEvents: "box-none", accessibilityElementsHidden: !screenStackActive, importantForAccessibility: "no-hide-descendants", children: null };
    const obj6 = { gradient: tmp2, children: null };
    const obj7 = { items: screens, renderItem: callback, getItemKey: getKey };
    obj6.children = ref2(tmp5(tmp[19]).TransitionGroup, obj7);
    obj5.children = ref2(tmp5(tmp[19]).ThemeContextProvider, obj6);
    obj4.children = ref2(focusChatPressableComponent, obj5);
    let tmp23Result = tmp23(tmp5(tmp[21]).Freeze, obj4);
    const tmp26 = !screenStackActive;
  } else {
    let showCreateThread;
    if (first != null) {
      showCreateThread = first.showCreateThread;
    }
    tmp23Result = null;
  }
  return tmp23Result;
}));
