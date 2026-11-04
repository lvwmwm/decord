// Module ID: 18012
// Function ID: 18013
// Name: MainTabsChannelScreenStack
// Dependencies: [32, 19, 17, 9732, 1087, 1098, 21, 5003, 558, 576, 5084, 18013, 18015, 5295, 5237, 5185, 5187, 18016, 5069, 11257, 18017, 5971, 5085, 1506, 5191, 17464, 11919, 5329, 5178, 17463, 584, 5192, 2]

// Module 18012 (MainTabsChannelScreenStack)
import react2 from "react" /* 576 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants2 from "Constants" /* 1098 */;
import Link from "Link" /* 1506 */;
import native from "native" /* 5069 */;
import REAWorkaroundViewDefault from "REAWorkaroundView" /* 5085 */;
import useChatLayoutDefault from "useChatLayout" /* 5185 */;
import useBaseAppContainerDimensionsDefault from "useBaseAppContainerDimensions" /* 5187 */;
import ChatInputUtils from "ChatInputUtils" /* 5191 */;
import useThemeDefault from "useTheme" /* 5237 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5329 */;
import react_native from "react-native" /* 9732 */;
import reactDefault from "react" /* 11257 */;
import MainTabsNavigatorPanelContext from "MainTabsNavigatorPanelContext" /* 11919 */;
import useChannelScreensFromNavigation from "useChannelScreensFromNavigation" /* 17463 */;
import useMainTabsPanelsGestureDefault from "useMainTabsPanelsGesture" /* 17464 */;
import navigationTTIEnabled from "navigationTTIEnabled" /* 18013 */;
import HideCoveredChannelsExperimentDefault from "HideCoveredChannelsExperiment" /* 18015 */;
import useMainTabsChannelScreenStyles from "useMainTabsChannelScreenStyles" /* 18016 */;
import StandaloneChannelScreenDefault from "StandaloneChannelScreen" /* 18017 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native2 from "react-native" /* 17 */;
import Constants from "Constants" /* 1087 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5003 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const MainTabsNavigatorPanelContextDefault = MainTabsNavigatorPanelContext;
let constants, importDefault, navigation, num, num2, num3, num4, obj1, parentFreezeValue, pauseAllMediaPlayersResult;

let c10;
let c9;
let closure_12;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let tmp;
let tmp5;
const ReanimatedRexport = tmp(5084);
const useMountEffect = tmp(5295);
const react3 = tmp5(5971);
function getKey(index) {
  return String(index.index);
}
({ NativeModules: hasOwnProperty, StyleSheet: metroRequire, View: metroImportDefault } = react_native2);
const ONYX_BORDER_WIDTH = react_native.ONYX_BORDER_WIDTH;
({ AnalyticsObjectTypes: metroImportAll, AnalyticsObjects: c9, AnalyticsSections: c10 } = Constants);
let ThemeTypes = Constants2.ThemeTypes;
({ jsx: closure_12, jsxs: map1 } = Fragment);
let obj = { onyxContainerStyles: { marginTop: -ONYX_BORDER_WIDTH, marginLeft: -ONYX_BORDER_WIDTH } };
let closure_14 = createStyles.createStyles(obj);
const __initData = { code: "function MainTabsChannelScreenStackTsx1(){const{isStackVisible,highestFullyRenderedScreenIndex,index,alwaysVisible,translateX,maxWidth}=this.__closure;return isStackVisible&&highestFullyRenderedScreenIndex.get()<=index&&(alwaysVisible||translateX.get()<maxWidth);}" };
const __initData2 = { code: "function MainTabsChannelScreenStackTsx2(visible,wasVisible){const{runOnJS,setIsVisible}=this.__closure;if(visible===wasVisible){return;}runOnJS(setIsVisible)(visible);}" };
const __initData3 = { code: "function MainTabsChannelScreenStackTsx3(){const{isStackVisible,highestFullyRenderedScreenIndex,index,alwaysVisible,translateX,maxWidth}=this.__closure;return isStackVisible&&highestFullyRenderedScreenIndex.get()<=index&&(alwaysVisible||translateX.get()<maxWidth);}" };
const __initData4 = { code: "function MainTabsChannelScreenStackTsx4(visible,wasVisible){const{runOnJS,setIsVisible}=this.__closure;if(visible===wasVisible)return;runOnJS(setIsVisible)(visible);}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (function useChannelScreenNavigationTTIVisibility(translateX) {
  let tmp = translateX;
  let obj = translateX(highestFullyRenderedScreenIndex[9]);
  const cResult = obj.c(7);
  translateX = translateX.translateX;
  const maxWidth = translateX.maxWidth;
  highestFullyRenderedScreenIndex = translateX.highestFullyRenderedScreenIndex;
  const index = translateX.index;
  const isStackVisible = translateX.isStackVisible;
  const alwaysVisible = translateX.alwaysVisible;
  let tmp4 = undefined !== alwaysVisible && alwaysVisible;
  let closure_5 = tmp4;
  if (cResult[0] === tmp4) {
    if (cResult[1] === highestFullyRenderedScreenIndex) {
      if (cResult[2] === index) {
        if (cResult[3] === isStackVisible) {
          if (cResult[4] === maxWidth) {
            let tmp5;
            if (cResult[5] === translateX) {
              tmp5 = cResult[6];
            }
            const tmp8 = index(isStackVisible.useState(tmp5), 2);
            let closure_6 = tmp10;
            const first = tmp8[0];
            const fn2 = function y() {
              let tmp = isStackVisible && highestFullyRenderedScreenIndex.get() <= index;
              if (tmp) {
                tmp = closure_5 || translateX.get() < maxWidth;
                const tmp4 = closure_5 || translateX.get() < maxWidth;
              }
              return tmp;
            };
            const obj2 = { isStackVisible, highestFullyRenderedScreenIndex, index, alwaysVisible: tmp4, translateX, maxWidth };
            fn2.__closure = obj2;
            fn2.__workletHash = 15384871148575;
            fn2.__initData = __initData;
            const tmpResult = tmp(highestFullyRenderedScreenIndex[10]);
            class T {
              constructor(arg0, arg1) {
                if (arg0 !== arg1) {
                  const obj = ReanimatedRexport;
                  obj.runOnJS(closure_6)(arg0);
                }
              }
            }
            const useAnimatedReaction = tmpResult.useAnimatedReaction;
            T.__closure = { runOnJS: tmp(highestFullyRenderedScreenIndex[10]).runOnJS, setIsVisible: tmp8[1] };
            T.__workletHash = 4812531096876;
            T.__initData = __initData2;
            const obj3 = { runOnJS: tmp(highestFullyRenderedScreenIndex[10]).runOnJS, setIsVisible: tmp8[1] };
            const animatedReaction = useAnimatedReaction(fn2, T);
            return first;
          }
        }
      }
    }
  }
  const fn = function l() {
    let tmp = isStackVisible && highestFullyRenderedScreenIndex.get() <= index;
    if (tmp) {
      tmp = closure_5 || translateX.get() < maxWidth;
      const tmp4 = closure_5 || translateX.get() < maxWidth;
    }
    return tmp;
  };
  cResult[0] = tmp4;
  cResult[1] = highestFullyRenderedScreenIndex;
  cResult[2] = index;
  cResult[3] = isStackVisible;
  cResult[4] = maxWidth;
  cResult[5] = translateX;
  cResult[6] = fn;
  tmp5 = fn;
}) : (function useChannelScreenNavigationTTIVisibility(translateX) {
  translateX = translateX.translateX;
  const maxWidth = translateX.maxWidth;
  highestFullyRenderedScreenIndex = translateX.highestFullyRenderedScreenIndex;
  const index = translateX.index;
  const isStackVisible = translateX.isStackVisible;
  let flag = translateX.alwaysVisible;
  if (flag === undefined) {
    flag = false;
  }
  let tmp = index(isStackVisible.useState(() => {
    let tmp = isStackVisible && highestFullyRenderedScreenIndex.get() <= index;
    if (tmp) {
      tmp = flag || translateX.get() < maxWidth;
      const tmp4 = flag || translateX.get() < maxWidth;
    }
    return tmp;
  }), 2);
  let closure_6 = tmp3;
  const first = tmp[0];
  let obj = translateX(highestFullyRenderedScreenIndex[10]);
  const fn = function b() {
    let tmp = isStackVisible && highestFullyRenderedScreenIndex.get() <= index;
    if (tmp) {
      tmp = flag || translateX.get() < maxWidth;
      const tmp4 = flag || translateX.get() < maxWidth;
    }
    return tmp;
  };
  fn.__closure = { isStackVisible, highestFullyRenderedScreenIndex, index, alwaysVisible: flag, translateX, maxWidth };
  fn.__workletHash = 10825075918877;
  fn.__initData = __initData3;
  class S {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        const obj = ReanimatedRexport;
        obj.runOnJS(closure_6)(arg0);
      }
    }
  }
  S.__closure = { runOnJS: translateX(highestFullyRenderedScreenIndex[10]).runOnJS, setIsVisible: tmp[1] };
  S.__workletHash = 17276269728204;
  S.__initData = __initData4;
  ({ runOnJS: translateX(highestFullyRenderedScreenIndex[10]).runOnJS, setIsVisible: tmp[1] });
  const animatedReaction = obj.useAnimatedReaction(fn, S);
  return first;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? (function EnabledChannelScreenNavigationTTIVisibility(arg0) {
  let alwaysVisible;
  let children;
  let index;
  let isStackVisible;
  let maxWidth;
  let translateX;
  const obj = react2;
  const cResult = obj.c(10);
  ({ translateX, maxWidth, highestFullyRenderedScreenIndex, index, isStackVisible, alwaysVisible, children } = arg0);
  if (cResult[0] === (undefined !== alwaysVisible && alwaysVisible)) {
    if (cResult[1] === highestFullyRenderedScreenIndex) {
      if (cResult[2] === index) {
        if (cResult[3] === isStackVisible) {
          if (cResult[4] === maxWidth) {
            let tmp3;
            if (cResult[5] === translateX) {
              tmp3 = cResult[6];
            }
            const tmp5 = closure_19(tmp3);
            if (cResult[7] === children) {
              let tmp6;
              if (cResult[8] === tmp5) {
                tmp6 = cResult[9];
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
}) : (function EnabledChannelScreenNavigationTTIVisibility(alwaysVisible) {
  let index;
  let isStackVisible;
  let maxWidth;
  let translateX;
  alwaysVisible = alwaysVisible.alwaysVisible;
  ({ translateX, maxWidth, highestFullyRenderedScreenIndex, index, isStackVisible } = alwaysVisible);
  if (alwaysVisible === undefined) {
    alwaysVisible = false;
  }
  return alwaysVisible.children(closure_19({ translateX, maxWidth, highestFullyRenderedScreenIndex, index, isStackVisible, alwaysVisible }));
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelScreenNavigationTTIVisibility(children) {
  let tmp2;
  const obj = react2;
  const cResult = obj.c(4);
  const obj2 = navigationTTIEnabled;
  if (obj2.isNavigationTTIEnabled()) {
    let tmp4;
    if (cResult[2] !== children) {
      const obj3 = {};
      const merged = Object.assign(children);
      const tmp10 = parentFreezeValue(closure_20, obj3);
      cResult[2] = children;
      cResult[3] = tmp10;
      tmp4 = tmp10;
    } else {
      tmp4 = cResult[3];
    }
    tmp2 = tmp4;
  } else if (cResult[0] !== children.children) {
    const childrenResult = children.children(false);
    cResult[0] = children.children;
    cResult[1] = childrenResult;
    tmp2 = childrenResult;
  } else {
    tmp2 = cResult[1];
  }
  return tmp2;
}) : (function ChannelScreenNavigationTTIVisibility(children) {
  let childrenResult;
  const obj = navigationTTIEnabled;
  if (obj.isNavigationTTIEnabled()) {
    const obj2 = {};
    const merged = Object.assign(children);
    childrenResult = parentFreezeValue(closure_20, obj2);
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
ReactCompilerGating = ReactCompilerGating_mod;
let closure_28 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsCompletelyCovered(index, highestFullyRenderedScreenIndex, translateX) {
  let first;
  let closure_0 = index;
  importDefault = highestFullyRenderedScreenIndex;
  let closure_2 = translateX;
  let tmp = require;
  const tmp2 = dependencyMap;
  let obj = react2;
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "MainTabsChannelScreenStack" };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const obj3 = HideCoveredChannelsExperimentDefault;
  const enabled = obj3.useConfig(first).enabled;
  const fn = function u() {
    return closure_2.get() > 0;
  };
  fn.__closure = { translateX };
  fn.__workletHash = 3913618654716;
  fn.__initData = __initData5;
  const fn2 = function o(arg0, arg1) {
    if (arg0 !== arg1) {
      const value = closure_1.get();
      if (arg0) {
        if (value >= closure_0) {
          const result = obj.set(tmp2 - 1);
        }
      } else if (value < closure_0) {
        const result1 = obj.set(tmp2);
      }
    }
  };
  fn2.__closure = { highestFullyRenderedScreenIndex, index };
  fn2.__workletHash = 11138417682243;
  fn2.__initData = __initData6;
  const tmpResult = ReanimatedRexport;
  const animatedReaction = tmpResult.useAnimatedReaction(fn, fn2);
  if (cResult[1] === highestFullyRenderedScreenIndex) {
    let tmp6;
    if (cResult[2] === index) {
      tmp6 = cResult[3];
    }
    const tmpResult3 = useMountEffect;
    const unmountEffect = tmpResult3.useUnmountEffect(tmp6);
    const tmpResult4 = ReanimatedRexport;
    class S {
      constructor() {
        const tmp = enabled && closure_1.get() > closure_0;
        return tmp;
      }
    }
    const obj4 = { enabled, highestFullyRenderedScreenIndex, index };
    S.__closure = obj4;
    S.__workletHash = 12545989660782;
    S.__initData = __initData7;
    return tmpResult4.useDerivedValue(S);
  }
  const fn3 = function h() {
    const obj = closure_1;
    if (closure_1.get() >= closure_0) {
      const result = obj.set(tmp - 1);
    }
  };
  cResult[1] = highestFullyRenderedScreenIndex;
  cResult[2] = index;
  cResult[3] = fn3;
  tmp6 = fn3;
}) : (function useIsCompletelyCovered(index, highestFullyRenderedScreenIndex, translateX) {
  let closure_0 = index;
  let closure_1 = highestFullyRenderedScreenIndex;
  let closure_2 = translateX;
  let obj = HideCoveredChannelsExperimentDefault;
  const enabled = obj.useConfig({ location: "MainTabsChannelScreenStack" }).enabled;
  const fn = function c() {
    return closure_2.get() > 0;
  };
  fn.__closure = { translateX };
  fn.__workletHash = 5609946836721;
  fn.__initData = __initData8;
  const fn2 = function l(arg0, arg1) {
    if (arg0 !== arg1) {
      const value = closure_1.get();
      if (arg0) {
        if (value >= closure_0) {
          const result = obj.set(tmp2 - 1);
        }
      } else if (value < closure_0) {
        const result1 = obj.set(tmp2);
      }
    }
  };
  fn2.__closure = { highestFullyRenderedScreenIndex, index };
  fn2.__workletHash = 14278412688234;
  fn2.__initData = __initData9;
  const obj2 = ReanimatedRexport;
  const animatedReaction = obj2.useAnimatedReaction(fn, fn2);
  const obj3 = useMountEffect;
  const unmountEffect = obj3.useUnmountEffect(() => {
    const obj = closure_1;
    if (closure_1.get() >= closure_0) {
      const result = obj.set(tmp - 1);
    }
  });
  const fn3 = function o() {
    const tmp = enabled && closure_1.get() > closure_0;
    return tmp;
  };
  fn3.__closure = { enabled, highestFullyRenderedScreenIndex, index };
  fn3.__workletHash = 15762794544408;
  fn3.__initData = __initData10;
  const obj4 = ReanimatedRexport;
  return obj4.useDerivedValue(fn3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_29 = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function FirstChannelScreen(guildId) {
  let containerWidth;
  let freeze;
  let isDragging;
  let isNavigationTTIStackVisible;
  let maxWidth;
  let showCreateThread;
  let transitionState;
  let translateX;
  let obj = guildId(showCreateThread[9]);
  const cResult = obj.c(39);
  guildId = guildId.guildId;
  const channelId = guildId.channelId;
  showCreateThread = guildId.showCreateThread;
  const frame = guildId.frame;
  const index = guildId.index;
  ({ freeze, isDragging, translateX, containerWidth } = guildId);
  const isActive = guildId.isActive;
  ({ isNavigationTTIStackVisible, maxWidth, focusChatPressableComponent, transitionState } = guildId);
  const cleanup = guildId.cleanup;
  ({ parentFreezeValue, highestFullyRenderedScreenIndex } = guildId);
  const tmp4 = channelId(showCreateThread[14])();
  const tmp5 = closure_14();
  const isChatBesideChannelList = channelId(showCreateThread[15])().isChatBesideChannelList;
  let width = containerWidth;
  if (containerWidth == null) {
    width = channelId(showCreateThread[16])().width;
  }
  const tmp6 = closure_28(index, highestFullyRenderedScreenIndex, translateX);
  const tmpResult = guildId(showCreateThread[17]);
  const mainTabsChannelScreenStyles = tmpResult.useMainTabsChannelScreenStyles(isDragging, translateX, maxWidth, tmp6, parentFreezeValue);
  if (cResult[0] === cleanup) {
    let tmp8;
    let tmp9;
    let tmp12;
    if (cResult[1] === transitionState) {
      tmp8 = cResult[2];
      tmp9 = cResult[3];
    }
    const effect = index.useEffect(tmp8, tmp9);
    if (cResult[4] !== containerWidth) {
      let tmp13 = null;
      if (null != containerWidth) {
        let obj2 = { width: containerWidth };
        tmp13 = obj2;
      }
      cResult[4] = containerWidth;
      cResult[5] = tmp13;
      tmp12 = tmp13;
    } else {
      tmp12 = cResult[5];
    }
    let onyxContainerStyles;
    if (tmp4 === ThemeTypes.ONYX) {
      if (!isChatBesideChannelList) {
        onyxContainerStyles = tmp5.onyxContainerStyles;
      }
    }
    if (cResult[6] === mainTabsChannelScreenStyles) {
      if (cResult[7] === tmp12) {
        let tmp16;
        if (cResult[8] === onyxContainerStyles) {
          tmp16 = cResult[9];
        }
        let str = "box-only";
        if (isActive) {
          str = "auto";
        }
        if (cResult[10] === channelId) {
          if (cResult[11] === width) {
            if (cResult[12] === containerWidth) {
              if (cResult[13] === frame) {
                if (cResult[14] === guildId) {
                  if (cResult[15] === index) {
                    if (cResult[16] === isActive) {
                      let tmp19;
                      if (cResult[17] === showCreateThread) {
                        tmp19 = cResult[18];
                      }
                      if (cResult[19] === highestFullyRenderedScreenIndex) {
                        if (cResult[20] === index) {
                          if (cResult[21] === isNavigationTTIStackVisible) {
                            if (cResult[22] === maxWidth) {
                              if (cResult[23] === tmp19) {
                                if (cResult[24] === null != containerWidth) {
                                  let tmp20;
                                  if (cResult[25] === translateX) {
                                    tmp20 = cResult[26];
                                  }
                                  if (cResult[27] === tmp20) {
                                    if (cResult[28] === str) {
                                      if (cResult[29] === !isActive) {
                                        let tmp24;
                                        if (cResult[30] === "no-hide-descendants") {
                                          tmp24 = cResult[31];
                                        }
                                        if (cResult[32] === freeze) {
                                          let tmp29;
                                          if (cResult[33] === tmp24) {
                                            tmp29 = cResult[34];
                                          }
                                          if (cResult[35] === focusChatPressableComponent) {
                                            if (cResult[36] === tmp29) {
                                              let tmp32;
                                              if (cResult[37] === tmp16) {
                                                tmp32 = cResult[38];
                                              }
                                              return tmp32;
                                            }
                                          }
                                          const items = [tmp29, focusChatPressableComponent];
                                          class U {
                                            constructor(isNavigationTTIVisible) {
                                              let obj2;
                                              const obj = { value: width, children: closure_12(StandaloneChannelScreenDefault, obj2) };
                                              const Provider = reactDefault.Provider;
                                              obj2 = { guildId, channelId, isActive, isNavigationTTIVisible, showCreateThread, isNavigationScreen: null == containerWidth, frame, screenIndex: index };
                                              return closure_12(Provider, obj);
                                            }
                                          }
                                          cResult[35] = focusChatPressableComponent;
                                          cResult[36] = tmp29;
                                          cResult[37] = tmp16;
                                          cResult[38] = tmp34;
                                          tmp32 = tmp34;
                                        }
                                        const obj4 = { freeze, children: tmp24 };
                                        const tmp31 = parentFreezeValue(guildId(showCreateThread[21]).Freeze, obj4);
                                        cResult[32] = freeze;
                                        class U {
                                          constructor(isNavigationTTIVisible) {
                                            let obj2;
                                            const obj = { value: width, children: closure_12(StandaloneChannelScreenDefault, obj2) };
                                            const Provider = reactDefault.Provider;
                                            obj2 = { guildId, channelId, isActive, isNavigationTTIVisible, showCreateThread, isNavigationScreen: null == containerWidth, frame, screenIndex: index };
                                            return closure_12(Provider, obj);
                                          }
                                        }
                                        cResult[33] = tmp24;
                                        cResult[34] = tmp31;
                                        tmp29 = tmp31;
                                      }
                                    }
                                  }
                                  const obj5 = { collapsable: false, style: isActive.absoluteFill, pointerEvents: str, accessibilityElementsHidden: !isActive, importantForAccessibility: null, children: tmp20 };
                                  class U {
                                    constructor(isNavigationTTIVisible) {
                                      let obj2;
                                      const obj = { value: width, children: closure_12(StandaloneChannelScreenDefault, obj2) };
                                      const Provider = reactDefault.Provider;
                                      obj2 = { guildId, channelId, isActive, isNavigationTTIVisible, showCreateThread, isNavigationScreen: null == containerWidth, frame, screenIndex: index };
                                      return closure_12(Provider, obj);
                                    }
                                  }
                                  const tmp28 = parentFreezeValue(transitionState, obj5);
                                  cResult[27] = tmp20;
                                  cResult[28] = str;
                                  cResult[29] = !isActive;
                                  cResult[30] = "no-hide-descendants";
                                  cResult[31] = tmp28;
                                  tmp24 = tmp28;
                                }
                              }
                            }
                          }
                        }
                      }
                      const obj6 = { translateX, maxWidth, highestFullyRenderedScreenIndex, index, isStackVisible: null, alwaysVisible: null != containerWidth, children: tmp19 };
                      class U {
                        constructor(isNavigationTTIVisible) {
                          let obj2;
                          const obj = { value: width, children: closure_12(StandaloneChannelScreenDefault, obj2) };
                          const Provider = reactDefault.Provider;
                          obj2 = { guildId, channelId, isActive, isNavigationTTIVisible, showCreateThread, isNavigationScreen: null == containerWidth, frame, screenIndex: index };
                          return closure_12(Provider, obj);
                        }
                      }
                      const tmp23 = parentFreezeValue(closure_21, obj6);
                      cResult[19] = highestFullyRenderedScreenIndex;
                      cResult[20] = index;
                      cResult[21] = isNavigationTTIStackVisible;
                      cResult[22] = maxWidth;
                      cResult[23] = tmp19;
                      cResult[24] = null != containerWidth;
                      cResult[25] = translateX;
                      cResult[26] = tmp23;
                      tmp20 = tmp23;
                    }
                  }
                }
              }
            }
          }
        }
        class U {
          constructor(isNavigationTTIVisible) {
            let obj2;
            const obj = { value: width, children: closure_12(StandaloneChannelScreenDefault, obj2) };
            const Provider = reactDefault.Provider;
            obj2 = { guildId, channelId, isActive, isNavigationTTIVisible, showCreateThread, isNavigationScreen: null == containerWidth, frame, screenIndex: index };
            return closure_12(Provider, obj);
          }
        }
        cResult[10] = channelId;
        cResult[11] = width;
        cResult[12] = containerWidth;
        cResult[13] = frame;
        cResult[14] = guildId;
        cResult[15] = index;
        cResult[16] = isActive;
        cResult[17] = showCreateThread;
        cResult[18] = U;
        tmp19 = U;
      }
    }
    const items1 = [, tmp12, onyxContainerStyles];
    cResult[6] = mainTabsChannelScreenStyles;
    cResult[7] = tmp12;
    cResult[8] = onyxContainerStyles;
    cResult[9] = items1;
    tmp16 = items1;
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
  tmp9 = items2;
  tmp8 = fn;
}) : (function FirstChannelScreen(isActive) {
  let channelId;
  let containerWidth;
  let frame;
  let freeze;
  let guildId;
  let index;
  let isDragging;
  let isNavigationTTIStackVisible;
  let items2;
  let maxWidth;
  let obj5;
  let obj6;
  let require;
  let showCreateThread;
  let str;
  let tmp13;
  let tmp14;
  let transitionState;
  let translateX;
  ({ guildId: require, channelId: importDefault, showCreateThread: dependencyMap, frame: _slicedToArray, index } = isActive);
  ({ isDragging, translateX, containerWidth } = isActive);
  isActive = isActive.isActive;
  ({ maxWidth, transitionState } = isActive);
  const cleanup = isActive.cleanup;
  highestFullyRenderedScreenIndex = isActive.highestFullyRenderedScreenIndex;
  ({ freeze, isNavigationTTIStackVisible, focusChatPressableComponent, parentFreezeValue } = isActive);
  let tmp2 = useThemeDefault();
  const tmp3 = closure_14();
  const isChatBesideChannelList = useChatLayoutDefault().isChatBesideChannelList;
  const width = useBaseAppContainerDimensionsDefault().width;
  let tmp4 = closure_28(index, highestFullyRenderedScreenIndex, translateX);
  let tmp5 = require;
  let obj = useMainTabsChannelScreenStyles;
  const items = [cleanup, transitionState];
  const mainTabsChannelScreenStyles = obj.useMainTabsChannelScreenStyles(isDragging, translateX, maxWidth, tmp4, parentFreezeValue);
  const effect = index.useEffect(() => {
    if (transitionState === native.TransitionStates.YEETED) {
      cleanup();
    }
  }, items);
  const items1 = [mainTabsChannelScreenStyles, , ];
  let tmp10 = null;
  const tmp8 = closure_13;
  const tmp9 = REAWorkaroundViewDefault;
  if (null != containerWidth) {
    let obj2 = { width: containerWidth };
    tmp10 = obj2;
  }
  items1[1] = tmp10;
  let onyxContainerStyles;
  if (tmp2 === ThemeTypes.ONYX) {
    if (!isChatBesideChannelList) {
      onyxContainerStyles = tmp3.onyxContainerStyles;
    }
  }
  const obj3 = { style: items1, children: items2 };
  items1[2] = onyxContainerStyles;
  const obj4 = { freeze, children: parentFreezeValue(tmp13, obj5) };
  obj5 = { collapsable: false, style: isActive.absoluteFill, pointerEvents: str, accessibilityElementsHidden: tmp14, importantForAccessibility: "no-hide-descendants", children: parentFreezeValue(closure_21, obj6) };
  str = "box-only";
  const Freeze = react3.Freeze;
  tmp13 = transitionState;
  if (isActive) {
    str = "auto";
  }
  obj6 = {
    translateX,
    maxWidth,
    highestFullyRenderedScreenIndex,
    index,
    isStackVisible: isNavigationTTIStackVisible,
    alwaysVisible: null != containerWidth,
    children(isNavigationTTIVisible) {
      let obj2;
      let tmp5 = containerWidth;
      const Provider = reactDefault.Provider;
      const tmp4 = containerWidth;
      if (containerWidth == null) {
        tmp5 = width;
      }
      const obj = { value: tmp5, children: closure_12(StandaloneChannelScreenDefault, obj2) };
      obj2 = { guildId: require, channelId: importDefault, isActive, isNavigationTTIVisible, showCreateThread: dependencyMap, isNavigationScreen: null == tmp4, frame: _slicedToArray, screenIndex: index };
      return closure_12(Provider, obj);
    }
  };
  tmp14 = !isActive;
  items2 = [parentFreezeValue(Freeze, obj4), focusChatPressableComponent];
  return tmp8(tmp9, obj3);
}));
const __initData11 = { code: "function MainTabsChannelScreenStackTsx11(){const{translateX}=this.__closure;return translateX.get()===0;}" };
const __initData12 = { code: "function MainTabsChannelScreenStackTsx12(isFullyOpen,prev){const{index,mainTabsDisallowGesture}=this.__closure;if(isFullyOpen===prev){return;}if(index!==1){return;}mainTabsDisallowGesture.set(isFullyOpen);}" };
const __initData13 = { code: "function MainTabsChannelScreenStackTsx13(){const{translateX}=this.__closure;return translateX.get()===0;}" };
const __initData14 = { code: "function MainTabsChannelScreenStackTsx14(isFullyOpen,prev){const{index,mainTabsDisallowGesture}=this.__closure;if(isFullyOpen===prev)return;if(index!==1)return;mainTabsDisallowGesture.set(isFullyOpen);}" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_34 = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelScreen(guildId) {
  let freeze;
  let gesture;
  let index;
  let isDragging;
  let isNavigationTTIStackVisible;
  let maxWidth;
  let movePanel;
  let panelGestureContext;
  let ref2;
  let showCreateThread;
  let translateX;
  let tmp = guildId;
  let tmp2 = showCreateThread;
  let obj = guildId(showCreateThread[9]);
  const cResult = obj.c(44);
  guildId = guildId.guildId;
  const channelId = guildId.channelId;
  showCreateThread = guildId.showCreateThread;
  const transitionState = guildId.transitionState;
  let cleanup = guildId.cleanup;
  const isActive = guildId.isActive;
  ({ isNavigationTTIStackVisible, freeze, parentFreezeValue, index } = guildId);
  highestFullyRenderedScreenIndex = guildId.highestFullyRenderedScreenIndex;
  const tmp5 = channelId(showCreateThread[14])();
  const tmp6 = closure_14();
  const isChatBesideChannelList = channelId(showCreateThread[15])().isChatBesideChannelList;
  const obj2 = guildId(showCreateThread[23]);
  navigation = obj2.useNavigation();
  const ref = cleanup.useRef(false);
  if (cResult[0] === cleanup) {
    let tmp8;
    if (cResult[1] === navigation) {
      tmp8 = cResult[2];
    }
    const tmp9 = transitionState !== tmp(tmp2[18]).TransitionStates.YEETED;
    if (cResult[3] === tmp8) {
      let tmp10;
      if (cResult[4] === tmp9) {
        tmp10 = cResult[5];
      }
      const tmp11 = channelId(tmp2[25])(tmp10);
      ({ gesture, panelGestureContext, isDragging, translateX } = tmp11);
      ({ movePanel, maxWidth } = tmp11);
      closure_28(index, highestFullyRenderedScreenIndex, translateX);
      const disallowGesture = obj3.useContext(tmp4(tmp2[26])).disallowGesture;
      const tmpResult = tmp(tmp2[10]);
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
          const tmp = arg0 !== arg1 && 1 === index;
          if (tmp) {
            const result = disallowGesture.set(arg0);
          }
        }
      }
      const obj5 = { index, mainTabsDisallowGesture: disallowGesture };
      N.__closure = obj5;
      N.__workletHash = 109995460179;
      N.__initData = __initData12;
      const animatedReaction = tmpResult.useAnimatedReaction(X, N);
      if (cResult[6] === cleanup) {
        let tmp17;
        let tmp19;
        let tmp22;
        let tmp21;
        if (cResult[7] === movePanel) {
          tmp17 = cResult[8];
        }
        ThemeTypes = tmp17;
        parentFreezeValue = obj3.useRef(tmp17);
        if (cResult[9] !== tmp17) {
          const fn2 = function j() {
            ref2.current = current;
          };
          cResult[9] = tmp17;
          cResult[10] = fn2;
          tmp19 = fn2;
        } else {
          tmp19 = cResult[10];
        }
        const effect = obj3.useEffect(tmp19);
        if (cResult[11] !== transitionState) {
          const fn3 = function q() {
            current = ref2.current;
            const movePanel = current.movePanel;
            cleanup = current.cleanup;
            const tmp = transitionState;
            if (transitionState !== native.TransitionStates.MOUNTED) {
              if (tmp !== native.TransitionStates.ENTERED) {
                if (ref.current) {
                  cleanup();
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
          tmp22 = items;
          tmp21 = fn3;
        } else {
          tmp21 = cResult[12];
          tmp22 = cResult[13];
        }
        const effect1 = obj3.useEffect(tmp21, tmp22);
        tmp(tmp2[17]);
        class X {
          constructor() {
            return 0 === translateX.get();
          }
        }
        let onyxContainerStyles;
        if (tmp5 === ThemeTypes.ONYX) {
          if (!isChatBesideChannelList) {
            onyxContainerStyles = tmp6.onyxContainerStyles;
          }
        }
        if (cResult[14] === tmp31) {
          let tmp34;
          if (cResult[15] === onyxContainerStyles) {
            tmp34 = cResult[16];
          }
          if (cResult[17] === channelId) {
            if (cResult[18] === guildId) {
              if (cResult[19] === index) {
                if (cResult[20] === isActive) {
                  let tmp36;
                  if (cResult[21] === showCreateThread) {
                    tmp36 = cResult[22];
                  }
                  if (cResult[23] === highestFullyRenderedScreenIndex) {
                    if (cResult[24] === index) {
                      if (cResult[25] === isNavigationTTIStackVisible) {
                        if (cResult[26] === maxWidth) {
                          if (cResult[27] === tmp36) {
                            let tmp37;
                            if (cResult[28] === translateX) {
                              tmp37 = cResult[29];
                            }
                            if (cResult[30] === freeze) {
                              let tmp41;
                              if (cResult[31] === tmp37) {
                                tmp41 = cResult[32];
                              }
                              if (cResult[33] === !isActive) {
                                if (cResult[34] === "no-hide-descendants") {
                                  if (cResult[35] === tmp41) {
                                    let tmp44;
                                    if (cResult[36] === tmp34) {
                                      tmp44 = cResult[37];
                                    }
                                    if (cResult[38] === panelGestureContext) {
                                      let tmp47;
                                      if (cResult[39] === tmp44) {
                                        tmp47 = cResult[40];
                                      }
                                      if (cResult[41] === gesture) {
                                        let tmp50;
                                        if (cResult[42] === tmp47) {
                                          tmp50 = cResult[43];
                                        }
                                        return tmp50;
                                      }
                                      const obj6 = { gesture, children: tmp47 };
                                      const tmp52 = parentFreezeValue(tmp(tmp2[27]).GestureDetector, obj6);
                                      cResult[41] = gesture;
                                      cResult[42] = tmp47;
                                      cResult[43] = tmp52;
                                      tmp50 = tmp52;
                                    }
                                    const obj7 = { value: panelGestureContext, children: tmp44 };
                                    const tmp49 = parentFreezeValue(tmp(tmp2[26]).MainTabsChannelScreenStackContext.Provider, obj7);
                                    cResult[38] = panelGestureContext;
                                    cResult[39] = tmp44;
                                    cResult[40] = tmp49;
                                    tmp47 = tmp49;
                                  }
                                }
                              }
                              const obj8 = { style: tmp34, accessibilityElementsHidden: !isActive, importantForAccessibility: "no-hide-descendants", children: tmp41 };
                              const tmp46 = parentFreezeValue(channelId(tmp2[22]), obj8);
                              cResult[33] = !isActive;
                              cResult[34] = "no-hide-descendants";
                              cResult[35] = tmp41;
                              class X {
                                constructor() {
                                  return 0 === translateX.get();
                                }
                              }
                              cResult[36] = tmp34;
                              cResult[37] = tmp46;
                              tmp44 = tmp46;
                            }
                            const obj9 = { freeze, children: tmp37 };
                            const tmp43 = parentFreezeValue(tmp(tmp2[21]).Freeze, obj9);
                            cResult[30] = freeze;
                            cResult[31] = tmp37;
                            cResult[32] = tmp43;
                            tmp41 = tmp43;
                          }
                        }
                      }
                    }
                  }
                  const obj10 = { translateX, maxWidth, highestFullyRenderedScreenIndex, index, isStackVisible: isNavigationTTIStackVisible, children: tmp36 };
                  const tmp40 = parentFreezeValue(closure_21, obj10);
                  cResult[23] = highestFullyRenderedScreenIndex;
                  class X {
                    constructor() {
                      return 0 === translateX.get();
                    }
                  }
                  cResult[25] = isNavigationTTIStackVisible;
                  cResult[26] = maxWidth;
                  cResult[27] = tmp36;
                  class N {
                    constructor(arg0, arg1) {
                      const tmp = arg0 !== arg1 && 1 === index;
                      if (tmp) {
                        const result = disallowGesture.set(arg0);
                      }
                    }
                  }
                  cResult[29] = tmp40;
                  tmp37 = tmp40;
                }
              }
            }
          }
          function ie(isNavigationTTIVisible) {
            const obj = { guildId, channelId, isActive, isNavigationTTIVisible, showCreateThread, isNavigationScreen: true, frame: null, screenIndex: index };
            return ref2(StandaloneChannelScreenDefault, obj);
          }
          cResult[17] = channelId;
          cResult[18] = guildId;
          cResult[19] = index;
          cResult[20] = isActive;
          class X {
            constructor() {
              return 0 === translateX.get();
            }
          }
          cResult[21] = showCreateThread;
          cResult[22] = ie;
          tmp36 = ie;
        }
        const items1 = [tmp31, onyxContainerStyles];
        class N {
          constructor(arg0, arg1) {
            const tmp = arg0 !== arg1 && 1 === index;
            if (tmp) {
              const result = disallowGesture.set(arg0);
            }
          }
        }
        cResult[14] = tmp31;
        cResult[15] = onyxContainerStyles;
        cResult[16] = items1;
        tmp34 = items1;
      }
      const obj11 = { cleanup, movePanel };
      cResult[6] = cleanup;
      cResult[7] = movePanel;
      cResult[8] = obj11;
      tmp17 = obj11;
    }
    const obj12 = { canDrag: tmp9, onVisibilityChange: tmp8, onDragStart: tmp(tmp2[24]).dismissKeyboard, startShown: false };
    cResult[3] = tmp8;
    cResult[4] = tmp9;
    cResult[5] = obj12;
    tmp10 = obj12;
  }
  const fn = function s(arg0) {
    const tmp = arg0;
    if (!tmp) {
      if (ref.current) {
        cleanup();
      } else {
        tmp2.current = true;
        navigation.goBack();
      }
    }
  };
  cResult[0] = cleanup;
  cResult[1] = navigation;
  cResult[2] = fn;
  tmp8 = fn;
}) : (function ChannelScreen(cleanup) {
  let Freeze;
  let Provider;
  let channelId;
  let freeze;
  let gesture;
  let guildId;
  let isDragging;
  let isNavigationTTIStackVisible;
  let movePanel;
  let obj10;
  let obj7;
  let obj8;
  let obj9;
  let panelGestureContext;
  let require;
  let showCreateThread;
  let tmp15;
  let tmp17;
  let transitionState;
  let translateX;
  ({ guildId: require, channelId: importDefault, showCreateThread: dependencyMap, transitionState } = cleanup);
  cleanup = cleanup.cleanup;
  const isActive = cleanup.isActive;
  const index = cleanup.index;
  highestFullyRenderedScreenIndex = cleanup.highestFullyRenderedScreenIndex;
  translateX = undefined;
  let obj4;
  let ref2;
  ({ isNavigationTTIStackVisible, freeze, parentFreezeValue } = cleanup);
  let tmp = dependencyMap;
  let tmp2 = useThemeDefault();
  const tmp3 = closure_14();
  const isChatBesideChannelList = useChatLayoutDefault().isChatBesideChannelList;
  let obj = Link;
  navigation = obj.useNavigation();
  const ref = cleanup.useRef(false);
  const items = [cleanup, navigation];
  const callback = cleanup.useCallback((arg0) => {
    const tmp = arg0;
    if (!tmp) {
      if (ref.current) {
        cleanup();
      } else {
        tmp2.current = true;
        navigation.goBack();
      }
    }
  }, items);
  const obj2 = { canDrag: transitionState !== native.TransitionStates.YEETED, onVisibilityChange: callback, onDragStart: ChatInputUtils.dismissKeyboard, startShown: false };
  const tmp7 = useMainTabsPanelsGestureDefault;
  const tmp7Result = tmp7(obj2);
  ({ isDragging, translateX } = tmp7Result);
  const maxWidth = tmp7Result.maxWidth;
  ({ gesture, panelGestureContext, movePanel } = tmp7Result);
  const tmp9 = closure_28(index, highestFullyRenderedScreenIndex, translateX);
  const disallowGesture = cleanup.useContext(MainTabsNavigatorPanelContextDefault).disallowGesture;
  const obj3 = ReanimatedRexport;
  class I {
    constructor() {
      return 0 === translateX.get();
    }
  }
  I.__closure = { translateX };
  I.__workletHash = 279822179624;
  I.__initData = __initData13;
  const fn = function f(arg0, arg1) {
    const tmp = arg0 !== arg1 && 1 === index;
    if (tmp) {
      const result = disallowGesture.set(arg0);
    }
  };
  fn.__closure = { index, mainTabsDisallowGesture: disallowGesture };
  fn.__workletHash = 2043595505301;
  fn.__initData = __initData14;
  const animatedReaction = obj3.useAnimatedReaction(I, fn);
  obj4 = { cleanup, movePanel };
  ref2 = cleanup.useRef(obj4);
  const effect = cleanup.useEffect(() => {
    ref2.current = obj4;
  });
  const items1 = [transitionState];
  const effect1 = cleanup.useEffect(() => {
    const current = ref2.current;
    const movePanel = current.movePanel;
    cleanup = current.cleanup;
    const tmp = transitionState;
    if (transitionState !== native.TransitionStates.MOUNTED) {
      if (tmp !== native.TransitionStates.ENTERED) {
        if (ref.current) {
          cleanup();
        } else {
          tmp5.current = true;
          movePanel(false, false, 0, true);
        }
      }
    }
    movePanel(true, false, 0, false);
  }, items1);
  const obj5 = useMainTabsChannelScreenStyles;
  const mainTabsChannelScreenStyles = obj5.useMainTabsChannelScreenStyles(isDragging, translateX, maxWidth, tmp9, parentFreezeValue);
  const obj6 = { gesture, children: ref2(Provider, obj7) };
  const GestureDetector = LegacyBaseButton.GestureDetector;
  obj7 = { value: panelGestureContext, children: ref2(tmp15, obj8) };
  Provider = MainTabsNavigatorPanelContext.MainTabsChannelScreenStackContext.Provider;
  const items2 = [mainTabsChannelScreenStyles, ];
  let onyxContainerStyles;
  tmp15 = REAWorkaroundViewDefault;
  if (tmp2 === obj4.ONYX) {
    if (!isChatBesideChannelList) {
      onyxContainerStyles = tmp3.onyxContainerStyles;
    }
  }
  items2[1] = onyxContainerStyles;
  obj8 = { style: items2, accessibilityElementsHidden: tmp17, importantForAccessibility: "no-hide-descendants", children: ref2(Freeze, obj9) };
  tmp17 = !isActive;
  obj9 = { freeze, children: ref2(closure_21, obj10) };
  obj10 = {
    translateX,
    maxWidth,
    highestFullyRenderedScreenIndex,
    index,
    isStackVisible: isNavigationTTIStackVisible,
    children(isNavigationTTIVisible) {
      const obj = { guildId: require, channelId: importDefault, isActive, isNavigationTTIVisible, showCreateThread: dependencyMap, isNavigationScreen: true, frame: null, screenIndex: index };
      return ref2(StandaloneChannelScreenDefault, obj);
    }
  };
  Freeze = react3.Freeze;
  return ref2(GestureDetector, obj6);
}));
const __initData15 = { code: "function MainTabsChannelScreenStackTsx15(){const{translateX,maxWidth}=this.__closure;return translateX.get()===maxWidth;}" };
const __initData16 = { code: "function MainTabsChannelScreenStackTsx16(value,prev){const{runOnJS,setIsHidden}=this.__closure;if(value===prev){return;}runOnJS(setIsHidden)(value);}" };
const __initData17 = { code: "function MainTabsChannelScreenStackTsx17(){const{translateX,maxWidth}=this.__closure;return translateX.get()===maxWidth;}" };
const __initData18 = { code: "function MainTabsChannelScreenStackTsx18(value,prev){const{runOnJS,setIsHidden}=this.__closure;if(value===prev)return;runOnJS(setIsHidden)(value);}" };
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function MainTabsChannelScreenStack(screens) {
  let items;
  let navigationTTIStackVisible;
  let ref;
  let ref2;
  let shouldFreeze;
  let tmp10;
  let tmp14;
  let tmp15;
  let tmp18;
  let tmp21;
  let tmp5;
  const tmp = screens;
  let obj = screens(navigationTTIStackVisible[9]);
  const cResult = obj.c(42);
  screens = screens.screens;
  const screenStackActive = screens.screenStackActive;
  navigationTTIStackVisible = screens.navigationTTIStackVisible;
  const translateX = screens.translateX;
  const isDragging = screens.isDragging;
  const maxWidth = screens.maxWidth;
  highestFullyRenderedScreenIndex = screens.highestFullyRenderedScreenIndex;
  ({ shouldFreeze, focusChatPressableComponent } = screens);
  const firstScreenWidth = screens.firstScreenWidth;
  const firstScreenFrame = screens.firstScreenFrame;
  screenStackActive(navigationTTIStackVisible[28])();
  if (cResult[0] !== translateX) {
    const value = translateX.get();
    cResult[0] = translateX;
    cResult[1] = value;
    tmp5 = value;
  } else {
    tmp5 = cResult[1];
  }
  let obj2 = isDragging;
  let tmp7 = translateX(isDragging.useState(tmp5 === maxWidth), 2);
  let tmp8 = tmp7[1];
  constants = tmp8;
  const tmpResult = tmp(navigationTTIStackVisible[10]);
  class A {
    constructor() {
      return translateX.get() === maxWidth;
    }
  }
  A.__closure = { translateX, maxWidth };
  A.__workletHash = 13892906836978;
  A.__initData = __initData15;
  class R {
    constructor(arg0, arg1) {
      if (screens !== arg1) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[10]);
        tmp3 = closure_10;
        tmp4 = obj.runOnJS(closure_10)(screens);
      }
      return;
    }
  }
  let obj3 = { runOnJS: tmp(tmp2[10]).runOnJS, setIsHidden: tmp8 };
  R.__closure = obj3;
  R.__workletHash = 13169088086524;
  R.__initData = __initData16;
  const animatedReaction = tmpResult.useAnimatedReaction(A, R);
  if (cResult[2] !== screens) {
    const atResult = screens.at(-1);
    cResult[2] = screens;
    cResult[3] = atResult;
    tmp10 = atResult;
  } else {
    tmp10 = cResult[3];
  }
  let type;
  if (tmp10 != null) {
    type = tmp10.type;
  }
  let channelId = null;
  if (type === tmp(navigationTTIStackVisible[29]).ChannelScreenType.DEFAULT) {
    channelId = tmp10.channelId;
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class W {
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
    cResult[4] = W;
    tmp14 = W;
  } else {
    class W {
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
    class W {
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
    tmp15 = tmp16;
  } else {
    class W {
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
  let closure_11 = screens[0];
  if (shouldFreeze) {
    class W {
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
  if (shouldFreeze) {
    class W {
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
    if (!tmp18) {
      class W {
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
      tmp18 = tmp19 !== tmp(navigationTTIStackVisible[29]).ChannelScreenType.DEFAULT;
    }
    shouldFreeze = tmp18;
  }
  const tmpResult2 = tmp(navigationTTIStackVisible[10]);
  const sharedValue = tmpResult2.useSharedValue(0);
  if (cResult[7] !== sharedValue) {
    class J {
      constructor() {
        closure_0 = setTimeout(() => { /* body not rendered: F154411 */ }, 10);
        return () => { /* body not rendered: F154412 */ };
      }
    }
    cResult[7] = sharedValue;
    cResult[8] = J;
    tmp21 = J;
  } else {
    class J {
      constructor() {
        closure_0 = setTimeout(() => { /* body not rendered: F154411 */ }, 10);
        return () => { /* body not rendered: F154412 */ };
      }
    }
  }
  if (cResult[9] === shouldFreeze) {
    class J {
      constructor() {
        closure_0 = setTimeout(() => { /* body not rendered: F154411 */ }, 10);
        return () => { /* body not rendered: F154412 */ };
      }
    }
    const effect1 = obj2.useEffect(tmp21, items);
    if (cResult[12] === firstScreenFrame) {
      class J {
        constructor() {
          closure_0 = setTimeout(() => { /* body not rendered: F154411 */ }, 10);
          return () => { /* body not rendered: F154412 */ };
        }
      }
    }
    class Y {
      constructor(arg0, arg1, arg2, arg3) {
        NumberResult = Number(screens);
        if (0 === NumberResult) {
          obj = { guildId: null, channelId: null, showCreateThread: null, focusChatPressableComponent: null, index: null, transitionState: null, cleanup: null, isDragging: null, translateX: null, isActive: null, isNavigationTTIStackVisible: null, freeze: null, containerWidth: null, frame: null, parentFreezeValue: null, maxWidth: null, highestFullyRenderedScreenIndex: null };
          ({ guildId: obj.guildId, channelId: obj.channelId, showCreateThread: showCreateThread2 } = arg1);
          tmp9 = null;
          tmp7 = jsx;
          tmp8 = closure_29;
          if (showCreateThread2 == null) {
            showCreateThread2 = false;
          }
          obj.showCreateThread = showCreateThread2;
          tmp10 = closure_7;
          obj.focusChatPressableComponent = closure_7;
          obj.index = NumberResult;
          obj.transitionState = arg2;
          obj.cleanup = arg3;
          tmp11 = isDragging;
          obj.isDragging = isDragging;
          tmp12 = translateX;
          obj.translateX = translateX;
          tmp13 = screenStackActive;
          if (tmp13) {
            tmp14 = screens;
            num3 = 1;
            tmp13 = NumberResult === screens.length - 1;
          }
          obj.isActive = tmp13;
          tmp15 = navigationTTIStackVisible;
          obj.isNavigationTTIStackVisible = navigationTTIStackVisible;
          tmp16 = screens;
          num4 = 2;
          obj.freeze = NumberResult < screens.length - 2;
          tmp17 = firstScreenWidth;
          obj.containerWidth = firstScreenWidth;
          tmp18 = firstScreenFrame;
          obj.frame = firstScreenFrame;
          tmp19 = closure_12;
          obj.parentFreezeValue = closure_12;
          tmp20 = maxWidth;
          obj.maxWidth = maxWidth;
          tmp21 = closure_6;
          obj.highestFullyRenderedScreenIndex = closure_6;
          tmp7Result = tmp7(tmp8, obj, screens);
        } else {
          obj1 = { guildId: null, channelId: null, showCreateThread: null, index: null, transitionState: null, parentFreezeValue: null, cleanup: null, isActive: null, isNavigationTTIStackVisible: null, freeze: null, highestFullyRenderedScreenIndex: null };
          ({ guildId: obj2.guildId, channelId: obj2.channelId, showCreateThread } = arg1);
          tmp24 = null;
          tmp22 = jsx;
          tmp23 = closure_34;
          if (showCreateThread == null) {
            showCreateThread = false;
          }
          obj1.showCreateThread = showCreateThread;
          obj1.index = NumberResult;
          obj1.transitionState = arg2;
          tmp2 = closure_12;
          obj1.parentFreezeValue = closure_12;
          obj1.cleanup = arg3;
          tmp3 = screens;
          num = 1;
          obj1.isActive = NumberResult === screens.length - 1;
          tmp4 = navigationTTIStackVisible;
          obj1.isNavigationTTIStackVisible = navigationTTIStackVisible;
          num2 = 2;
          obj1.freeze = NumberResult < screens.length - 2;
          tmp5 = closure_6;
          obj1.highestFullyRenderedScreenIndex = closure_6;
          tmp7Result = tmp22(tmp23, obj1, screens);
        }
        return tmp7Result;
      }
    }
    cResult[12] = firstScreenFrame;
    cResult[13] = firstScreenWidth;
    cResult[14] = focusChatPressableComponent;
    cResult[15] = sharedValue;
    cResult[16] = highestFullyRenderedScreenIndex;
    cResult[17] = isDragging;
    cResult[18] = maxWidth;
    cResult[19] = navigationTTIStackVisible;
    cResult[20] = screenStackActive;
    cResult[21] = screens.length;
    cResult[22] = translateX;
    cResult[23] = Y;
    let tmp23 = Y;
  }
  items = [shouldFreeze, sharedValue];
  cResult[9] = shouldFreeze;
  cResult[10] = sharedValue;
  cResult[11] = items;
}) : (function MainTabsChannelScreenStack(screens) {
  let ThemeContextProvider;
  let obj5;
  let obj6;
  let obj7;
  let shouldFreeze;
  let tmp22Result;
  let tmp23;
  let tmp25;
  screens = screens.screens;
  const screenStackActive = screens.screenStackActive;
  const navigationTTIStackVisible = screens.navigationTTIStackVisible;
  const translateX = screens.translateX;
  const isDragging = screens.isDragging;
  const maxWidth = screens.maxWidth;
  highestFullyRenderedScreenIndex = screens.highestFullyRenderedScreenIndex;
  ({ shouldFreeze, focusChatPressableComponent } = screens);
  const firstScreenWidth = screens.firstScreenWidth;
  const firstScreenFrame = screens.firstScreenFrame;
  let first1;
  let sharedValue;
  let ref;
  let ref2;
  const tmp = navigationTTIStackVisible;
  let obj = isDragging;
  const tmp2 = screenStackActive(navigationTTIStackVisible[28])();
  let tmp3 = translateX(isDragging.useState(translateX.get() === maxWidth), 2);
  constants = tmp5;
  const tmp6 = screens;
  const first = tmp3[0];
  let obj2 = screens(navigationTTIStackVisible[10]);
  const fn = function k() {
    return translateX.get() === maxWidth;
  };
  fn.__closure = { translateX, maxWidth };
  fn.__workletHash = 14568525032880;
  fn.__initData = __initData17;
  class V {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        const obj = ReanimatedRexport;
        obj.runOnJS(constants)(arg0);
      }
    }
  }
  let obj3 = { runOnJS: screens(navigationTTIStackVisible[10]).runOnJS, setIsHidden: tmp5 };
  V.__closure = obj3;
  V.__workletHash = 7029914705044;
  V.__initData = __initData18;
  const animatedReaction = obj2.useAnimatedReaction(fn, V);
  const items = [screens];
  const items1 = [
    isDragging.useMemo(() => {
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
    }, items)
  ];
  const effect = isDragging.useEffect(() => {
    const MediaPlayerManager = maxWidth.MediaPlayerManager;
    if (MediaPlayerManager != null) {
      const pauseAllMediaPlayers = MediaPlayerManager.pauseAllMediaPlayers;
      if (pauseAllMediaPlayers != null) {
        pauseAllMediaPlayers();
      }
    }
  }, items1);
  first1 = screens[0];
  if (shouldFreeze) {
    shouldFreeze = first;
  }
  if (shouldFreeze) {
    shouldFreeze = null == first1 || first1.type !== tmp6(tmp[29]).ChannelScreenType.DEFAULT;
    const tmp11 = null == first1 || first1.type !== tmp6(tmp[29]).ChannelScreenType.DEFAULT;
  }
  const tmp6Result = tmp6(tmp[10]);
  sharedValue = tmp6Result.useSharedValue(0);
  const items2 = [shouldFreeze, sharedValue];
  const effect1 = obj.useEffect(() => {
    let closure_0;
    const timeout = setTimeout(() => {
      const result = sharedValue.set(sharedValue.get() + 1);
    }, 10);
    return () => clearTimeout(closure_0);
  }, items2);
  const items3 = [screens.length, focusChatPressableComponent, isDragging, translateX, firstScreenWidth, firstScreenFrame, maxWidth, sharedValue, screenStackActive, navigationTTIStackVisible, highestFullyRenderedScreenIndex];
  let channelId;
  const callback = obj.useCallback((arg0, arg1, transitionState, cleanup) => {
    let showCreateThread;
    let showCreateThread2;
    let tmp13;
    let tmp22Result;
    const NumberResult = Number(arg0);
    if (0 === NumberResult) {
      const obj = { guildId: null, channelId: null, showCreateThread: showCreateThread2, focusChatPressableComponent, index: NumberResult, transitionState, cleanup, isDragging, translateX, isActive: tmp13, isNavigationTTIStackVisible: navigationTTIStackVisible, freeze: NumberResult < screens.length - 2, containerWidth: firstScreenWidth, frame: firstScreenFrame, parentFreezeValue: sharedValue, maxWidth, highestFullyRenderedScreenIndex };
      ({ guildId: obj.guildId, channelId: obj.channelId, showCreateThread: showCreateThread2 } = arg1);
      const tmp7 = closure_12;
      const tmp8 = closure_29;
      if (showCreateThread2 == null) {
        showCreateThread2 = false;
      }
      tmp13 = screenStackActive && NumberResult === screens.length - 1;
      tmp22Result = tmp7(tmp8, obj, arg0);
    } else {
      const obj3 = { guildId: null, channelId: null, showCreateThread, index: NumberResult, transitionState, parentFreezeValue: sharedValue, cleanup, isActive: NumberResult === screens.length - 1, isNavigationTTIStackVisible: navigationTTIStackVisible, freeze: NumberResult < screens.length - 2, highestFullyRenderedScreenIndex };
      ({ guildId: obj2.guildId, channelId: obj2.channelId, showCreateThread } = arg1);
      const tmp22 = closure_12;
      const tmp23 = closure_34;
      if (showCreateThread == null) {
        showCreateThread = false;
      }
      tmp22Result = tmp22(tmp23, obj3, arg0);
    }
    return tmp22Result;
  }, items3);
  const useRef = obj.useRef;
  if (first1 != null) {
    channelId = first1.channelId;
  }
  if (channelId == null) {
    channelId = null;
  }
  ref = useRef(channelId);
  ref2 = obj.useRef(null);
  let type;
  const useEffect = obj.useEffect;
  if (first1 != null) {
    type = first1.type;
  }
  const items4 = [type, ];
  let channelId1;
  if (first1 != null) {
    channelId1 = first1.channelId;
  }
  items4[1] = channelId1;
  const effect2 = useEffect(() => {
    let obj3;
    let type;
    if (first1 != null) {
      type = tmp.type;
    }
    const tmp3 = null != type && ref2.current !== tmp.type;
    if (tmp3) {
      ref2.current = first1.type;
      if (first1.channelId === ref.current) {
        let isChatLockedOpen = tmp.type !== useChannelScreensFromNavigation.ChannelScreenType.DEFAULT;
        const tmp7 = require;
        if (!isChatLockedOpen) {
          const tmp7Result = tmp7(5185);
          isChatLockedOpen = tmp7Result.getChatLayout().isChatLockedOpen;
        }
        if (!isChatLockedOpen) {
          const obj = { type: "TRY_ACK", location: obj3, channelId: first1.channelId };
          obj3 = { section: constants.CHANNEL, object: firstScreenFrame.ACK_CHANNEL_SELECT_SAME_CHANNEL_DISPATCH, objectType: metroImportAll.ACK_AUTOMATIC };
          const obj2 = DispatcherDefault;
          obj2.dispatch(obj);
        }
      } else {
        tmp6.current = first1.channelId;
      }
    }
  }, items4);
  const tmp6Result2 = tmp6(tmp[31]);
  tmp6Result2.freezeScreenIndex(shouldFreeze, 0);
  if (!shouldFreeze) {
    let tmp22 = sharedValue;
    const obj4 = { freeze: shouldFreeze, children: tmp22(tmp23, obj5) };
    obj5 = { collapsable: false, style: highestFullyRenderedScreenIndex.absoluteFill, pointerEvents: "box-none", accessibilityElementsHidden: tmp25, importantForAccessibility: "no-hide-descendants", children: tmp22(ThemeContextProvider, obj6) };
    tmp25 = !screenStackActive;
    const Freeze = tmp6(tmp[21]).Freeze;
    tmp23 = focusChatPressableComponent;
    obj6 = { gradient: tmp2, children: tmp22(tmp6(tmp[18]).TransitionGroup, obj7) };
    ThemeContextProvider = tmp6(tmp[18]).ThemeContextProvider;
    obj7 = { items: screens, renderItem: callback, getItemKey: getKey };
    tmp22Result = tmp22(Freeze, obj4);
  } else {
    let showCreateThread;
    if (first1 != null) {
      showCreateThread = first1.showCreateThread;
    }
    tmp22Result = null;
  }
  return tmp22Result;
}));
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/MainTabsChannelScreenStack.tsx");

export default memoResult;
