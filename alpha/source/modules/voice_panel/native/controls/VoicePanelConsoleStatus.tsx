// Module ID: 17855
// Function ID: 17856
// Name: VoicePanelConsoleStatus
// Dependencies: [19, 11970, 11973, 11968, 21, 5092, 587, 558, 576, 11969, 17849, 4850, 4827, 17856, 17854, 5378, 1200, 5088, 6184, 11111, 1126, 6161, 17857, 2]
// Exports: renderVoicePanelConsoleStatus

// Module 17855 (VoicePanelConsoleStatus)
import nativeDefault from "native" /* 587 */;
import native from "native" /* 4827 */;
import spring from "spring" /* 5378 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11968 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11970 */;
import VoicePanelCardConstants from "VoicePanelCardConstants" /* 11973 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let obj1;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let tmp;
const ReanimatedRexport = tmp(4850);
const MODE_CHANGE_PHYSICS = VoicePanelConstants.MODE_CHANGE_PHYSICS;
const EDGE_GUTTER = VoicePanelCardConstants.EDGE_GUTTER;
const CONTROLS_HEIGHT = VoicePanelControlsConstants.CONTROLS_HEIGHT;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let c8 = 36;
let createStyles = createStyles_mod;
let obj = { consoleParentContainer: { zIndex: 1, position: "absolute", bottom: 0, overflow: "hidden", left: -0.5, right: 0, alignItems: "center" }, consoleContainer: obj2, consoleItemContainer: { flexDirection: "row", alignItems: "center", height: 36, marginHorizontal: 18 }, consoleText: { textAlign: "left", marginStart: 4, flex: 1 }, blockingControlCover: obj3 };
obj2 = { borderRadius: nativeDefault.modules.mobile.VOICE_PANEL_CONTROLS_BORDER_RADIUS, overflow: "hidden" };
createStyles = createStyles.createStyles;
obj3 = { position: "absolute", bottom: 0, borderRadius: nativeDefault.modules.mobile.VOICE_PANEL_CONTROLS_BORDER_RADIUS, flex: 1, height: CONTROLS_HEIGHT, overflow: "hidden" };
let closure_9 = createStyles(obj);
let obj4 = { overshootClamping: true };
let merged = Object.assign(MODE_CHANGE_PHYSICS);
const __initData = { code: "function VoicePanelConsoleStatusTsx1(){const{color,windowDimensions,EDGE_GUTTER,CONTROLS_HEIGHT,CONSOLE_STATUS_HEIGHT,withSpring,shouldShow,FADE_IN_MODE_PHYSICS,runOnJS,cleanUp}=this.__closure;return{backgroundColor:color,width:windowDimensions.get().width-EDGE_GUTTER*2,height:CONTROLS_HEIGHT+CONSOLE_STATUS_HEIGHT,borderRadius:32,transform:[{translateY:withSpring(shouldShow.get()?0:100,FADE_IN_MODE_PHYSICS,\"respect-motion-settings\",function(finished){if(finished&&!shouldShow.get()){runOnJS(cleanUp)();}})}]};}" };
const __initData2 = { code: "function VoicePanelConsoleStatusTsx2(finished){const{shouldShow,runOnJS,cleanUp}=this.__closure;if(finished&&!shouldShow.get()){runOnJS(cleanUp)();}}" };
const __initData3 = { code: "function VoicePanelConsoleStatusTsx3(){const{windowDimensions,EDGE_GUTTER}=this.__closure;return{width:windowDimensions.get().width-EDGE_GUTTER*2};}" };
const __initData4 = { code: "function VoicePanelConsoleStatusTsx4(){const{color,windowDimensions,EDGE_GUTTER,CONTROLS_HEIGHT,CONSOLE_STATUS_HEIGHT,withSpring,shouldShow,FADE_IN_MODE_PHYSICS,runOnJS,cleanUp}=this.__closure;return{backgroundColor:color,width:windowDimensions.get().width-EDGE_GUTTER*2,height:CONTROLS_HEIGHT+CONSOLE_STATUS_HEIGHT,borderRadius:32,transform:[{translateY:withSpring(shouldShow.get()?0:100,FADE_IN_MODE_PHYSICS,'respect-motion-settings',function(finished){if(finished&&!shouldShow.get()){runOnJS(cleanUp)();}})}]};}" };
let closure_15 = { code: "function VoicePanelConsoleStatusTsx5(finished){const{shouldShow,runOnJS,cleanUp}=this.__closure;if(finished&&!shouldShow.get()){runOnJS(cleanUp)();}}" };
const __initData5 = { code: "function VoicePanelConsoleStatusTsx6(){const{windowDimensions,EDGE_GUTTER}=this.__closure;return{width:windowDimensions.get().width-EDGE_GUTTER*2};}" };
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function VoicePanelConsoleStatus(cleanUp) {
  let Text;
  let channelId;
  let color;
  let hiddenProps;
  let hiddenStyles;
  let icon;
  let items;
  let items2;
  let mode;
  let obj8;
  let state;
  let text;
  let windowDimensions;
  let wrapperSpecs;
  let tmp = state;
  const tmp2 = windowDimensions;
  let obj = state(windowDimensions[8]);
  const cResult = obj.c(37);
  ({ wrapperSpecs, state } = cleanUp);
  cleanUp = cleanUp.cleanUp;
  const accessoryHeights = cleanUp.accessoryHeights;
  const tmp4 = closure_9();
  const obj2 = color;
  const context = color.useContext(cleanUp(windowDimensions[9]));
  windowDimensions = context.windowDimensions;
  ({ mode, channelId } = context);
  const tmp7 = cleanUp(windowDimensions[10])(channelId);
  ({ icon, text, color } = tmp7);
  const displayCancel = tmp7.displayCancel;
  const obj3 = state(windowDimensions[11]);
  const sharedValue = obj3.useSharedValue(false);
  if (cResult[0] === sharedValue) {
    let tmp9;
    let tmp10;
    if (cResult[1] === state) {
      tmp9 = cResult[2];
      tmp10 = cResult[3];
    }
    const effect = obj2.useEffect(tmp9, tmp10);
    const tmp12 = cleanUp(tmp2[13])(mode, wrapperSpecs, accessoryHeights);
    ({ hiddenProps, hiddenStyles } = cleanUp(tmp2[14])(mode, wrapperSpecs));
    cleanUp(tmp2[14])(mode, wrapperSpecs);
    const tmpResult = tmp(tmp2[11]);
    class N {
      constructor() {
        size = { backgroundColor: color, width: windowDimensions.get().width - 2 * EDGE_GUTTER, height: CONTROLS_HEIGHT + c8, borderRadius: 32, transform: null };
        tmp = closure_0;
        tmp2 = closure_2;
        tmp3 = closure_0(closure_2[15]);
        withSpring = tmp3.withSpring;
        tmp4 = closure_4;
        num = 100;
        if (closure_4.get()) {
          num = 0;
        }
        obj1 = { translateY: null };
        fn = function n(arg0) {
          const tmp = arg0 && !sharedValue.get();
          if (tmp) {
            const obj = state(windowDimensions[11]);
            obj.runOnJS(cleanUp)();
          }
        };
        obj4 = { shouldShow: tmp4, runOnJS: tmp(tmp2[11]).runOnJS, cleanUp };
        fn.__closure = obj4;
        fn.__workletHash = 9820708059867;
        fn.__initData = closure_12;
        obj1.translateY = withSpring(num, closure_10, "respect-motion-settings", fn);
        items = [];
        items[0] = obj1;
        size.transform = items;
        return size;
      }
    }
    obj4 = { color, windowDimensions, EDGE_GUTTER: sharedValue, CONTROLS_HEIGHT, CONSOLE_STATUS_HEIGHT, withSpring: tmp(tmp2[15]).withSpring, shouldShow: sharedValue, FADE_IN_MODE_PHYSICS: obj4, runOnJS: tmp(tmp2[11]).runOnJS, cleanUp };
    const useAnimatedStyle = tmpResult.useAnimatedStyle;
    N.__closure = obj4;
    let num = 12149301111714;
    N.__workletHash = 12149301111714;
    N.__initData = __initData;
    const animatedStyle = useAnimatedStyle(N);
    const tmpResult2 = tmp(tmp2[11]);
    class L {
      constructor() {
        const obj = { width: windowDimensions.get().width - 2 * EDGE_GUTTER };
        return obj;
      }
    }
    const obj5 = { windowDimensions, EDGE_GUTTER: sharedValue };
    L.__closure = obj5;
    L.__workletHash = 2418678233810;
    L.__initData = __initData3;
    const animatedStyle1 = tmpResult2.useAnimatedStyle(L);
    if (cResult[4] === hiddenStyles) {
      if (cResult[5] === tmp4.consoleParentContainer) {
        let tmp23;
        let tmp24;
        if (cResult[6] === tmp12) {
          tmp23 = cResult[7];
        }
        if (cResult[8] !== icon) {
          const obj6 = { source: icon, color: cleanUp(tmp2[6]).unsafe_rawColors.WHITE, size: tmp(tmp2[16]).IconSizes.SMALL };
          const Icon = tmp(tmp2[16]).Icon;
          const tmp26 = closure_6(Icon, obj6);
          class N {
            constructor() {
              size = { backgroundColor: color, width: windowDimensions.get().width - 2 * EDGE_GUTTER, height: CONTROLS_HEIGHT + c8, borderRadius: 32, transform: null };
              tmp = closure_0;
              tmp2 = closure_2;
              tmp3 = closure_0(closure_2[15]);
              withSpring = tmp3.withSpring;
              tmp4 = closure_4;
              num = 100;
              if (closure_4.get()) {
                num = 0;
              }
              obj1 = { translateY: null };
              fn = function n(arg0) {
                const tmp = arg0 && !sharedValue.get();
                if (tmp) {
                  const obj = state(windowDimensions[11]);
                  obj.runOnJS(cleanUp)();
                }
              };
              obj4 = { shouldShow: tmp4, runOnJS: tmp(tmp2[11]).runOnJS, cleanUp };
              fn.__closure = obj4;
              fn.__workletHash = 9820708059867;
              fn.__initData = closure_12;
              obj1.translateY = withSpring(num, closure_10, "respect-motion-settings", fn);
              items = [];
              items[0] = obj1;
              size.transform = items;
              return size;
            }
          }
          cResult[8] = icon;
          cResult[9] = tmp26;
          tmp24 = tmp26;
        } else {
          tmp24 = cResult[9];
        }
        if (cResult[10] === tmp4.consoleText) {
          let tmp27;
          let tmp30;
          if (cResult[11] === text) {
            tmp27 = cResult[12];
          }
          if (cResult[13] !== displayCancel) {
            let tmp31 = null;
            if (displayCancel) {
              const obj7 = { hitSlop: 4, onPress: tmp(tmp2[19]).disconnectRemote, children: closure_6(Text, obj8) };
              const PressableOpacity = tmp(tmp2[18]).PressableOpacity;
              obj8 = { variant: "text-sm/medium", color: "text-overlay-light", children: tmp33(tmp(tmp2[20]).t["ETE/oC"]) };
              Text = tmp(tmp2[17]).Text;
              const intl = tmp(tmp2[20]).intl;
              class N {
                constructor() {
                  size = { backgroundColor: color, width: windowDimensions.get().width - 2 * EDGE_GUTTER, height: CONTROLS_HEIGHT + c8, borderRadius: 32, transform: null };
                  tmp = closure_0;
                  tmp2 = closure_2;
                  tmp3 = closure_0(closure_2[15]);
                  withSpring = tmp3.withSpring;
                  tmp4 = closure_4;
                  num = 100;
                  if (closure_4.get()) {
                    num = 0;
                  }
                  obj1 = { translateY: null };
                  fn = function n(arg0) {
                    const tmp = arg0 && !sharedValue.get();
                    if (tmp) {
                      const obj = state(windowDimensions[11]);
                      obj.runOnJS(cleanUp)();
                    }
                  };
                  obj4 = { shouldShow: tmp4, runOnJS: tmp(tmp2[11]).runOnJS, cleanUp };
                  fn.__closure = obj4;
                  fn.__workletHash = 9820708059867;
                  fn.__initData = closure_12;
                  obj1.translateY = withSpring(num, closure_10, "respect-motion-settings", fn);
                  items = [];
                  items[0] = obj1;
                  size.transform = items;
                  return size;
                }
              }
              tmp31 = closure_6(PressableOpacity, obj7);
            }
            cResult[13] = displayCancel;
            cResult[14] = tmp31;
            tmp30 = tmp31;
          } else {
            tmp30 = cResult[14];
          }
          if (cResult[15] === tmp4.consoleItemContainer) {
            if (cResult[16] === tmp24) {
              if (cResult[17] === tmp27) {
                let tmp34;
                if (cResult[18] === tmp30) {
                  tmp34 = cResult[19];
                }
                if (cResult[20] === animatedStyle) {
                  let tmp37;
                  if (cResult[21] === tmp34) {
                    tmp37 = cResult[22];
                  }
                  if (cResult[23] === tmp4.consoleContainer) {
                    let tmp40;
                    if (cResult[24] === tmp37) {
                      tmp40 = cResult[25];
                    }
                    if (cResult[26] === animatedStyle1) {
                      let tmp43;
                      let tmp45;
                      let tmp48;
                      if (cResult[27] === tmp4.blockingControlCover) {
                        tmp43 = cResult[28];
                      }
                      const _Symbol = Symbol;
                      if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
                        const tmp47 = closure_6(tmp(tmp2[22]).VoicePanelVisualEffectView, {});
                        cResult[29] = tmp47;
                        tmp45 = tmp47;
                      } else {
                        tmp45 = cResult[29];
                      }
                      if (cResult[30] !== tmp43) {
                        const obj9 = { style: tmp43, children: tmp45 };
                        const tmp50 = closure_6(cleanUp(tmp2[11]).View, obj9);
                        cResult[30] = tmp43;
                        class N {
                          constructor() {
                            size = { backgroundColor: color, width: windowDimensions.get().width - 2 * EDGE_GUTTER, height: CONTROLS_HEIGHT + c8, borderRadius: 32, transform: null };
                            tmp = closure_0;
                            tmp2 = closure_2;
                            tmp3 = closure_0(closure_2[15]);
                            withSpring = tmp3.withSpring;
                            tmp4 = closure_4;
                            num = 100;
                            if (closure_4.get()) {
                              num = 0;
                            }
                            obj1 = { translateY: null };
                            fn = function n(arg0) {
                              const tmp = arg0 && !sharedValue.get();
                              if (tmp) {
                                const obj = state(windowDimensions[11]);
                                obj.runOnJS(cleanUp)();
                              }
                            };
                            obj4 = { shouldShow: tmp4, runOnJS: tmp(tmp2[11]).runOnJS, cleanUp };
                            fn.__closure = obj4;
                            fn.__workletHash = 9820708059867;
                            fn.__initData = closure_12;
                            obj1.translateY = withSpring(num, closure_10, "respect-motion-settings", fn);
                            items = [];
                            items[0] = obj1;
                            size.transform = items;
                            return size;
                          }
                        }
                        cResult[31] = tmp50;
                        tmp48 = tmp50;
                      } else {
                        tmp48 = cResult[31];
                      }
                      class N {
                        constructor() {
                          size = { backgroundColor: color, width: windowDimensions.get().width - 2 * EDGE_GUTTER, height: CONTROLS_HEIGHT + c8, borderRadius: 32, transform: null };
                          tmp = closure_0;
                          tmp2 = closure_2;
                          tmp3 = closure_0(closure_2[15]);
                          withSpring = tmp3.withSpring;
                          tmp4 = closure_4;
                          num = 100;
                          if (closure_4.get()) {
                            num = 0;
                          }
                          obj1 = { translateY: null };
                          fn = function n(arg0) {
                            const tmp = arg0 && !sharedValue.get();
                            if (tmp) {
                              const obj = state(windowDimensions[11]);
                              obj.runOnJS(cleanUp)();
                            }
                          };
                          obj4 = { shouldShow: tmp4, runOnJS: tmp(tmp2[11]).runOnJS, cleanUp };
                          fn.__closure = obj4;
                          fn.__workletHash = 9820708059867;
                          fn.__initData = closure_12;
                          obj1.translateY = withSpring(num, closure_10, "respect-motion-settings", fn);
                          items = [];
                          items[0] = obj1;
                          size.transform = items;
                          return size;
                        }
                      }
                      const obj10 = { style: tmp23, animatedProps: hiddenProps, children: items };
                      items = [tmp40, tmp48];
                      cResult[32] = hiddenProps;
                      cResult[33] = tmp48;
                      cResult[34] = tmp23;
                      cResult[35] = tmp40;
                      cResult[36] = closure_7(cleanUp(tmp2[11]).View, obj10);
                      const tmp53 = closure_7(cleanUp(tmp2[11]).View, obj10);
                    }
                    const items1 = [tmp4.blockingControlCover, animatedStyle1];
                    cResult[26] = animatedStyle1;
                    class N {
                      constructor() {
                        size = { backgroundColor: color, width: windowDimensions.get().width - 2 * EDGE_GUTTER, height: CONTROLS_HEIGHT + c8, borderRadius: 32, transform: null };
                        tmp = closure_0;
                        tmp2 = closure_2;
                        tmp3 = closure_0(closure_2[15]);
                        withSpring = tmp3.withSpring;
                        tmp4 = closure_4;
                        num = 100;
                        if (closure_4.get()) {
                          num = 0;
                        }
                        obj1 = { translateY: null };
                        fn = function n(arg0) {
                          const tmp = arg0 && !sharedValue.get();
                          if (tmp) {
                            const obj = state(windowDimensions[11]);
                            obj.runOnJS(cleanUp)();
                          }
                        };
                        obj4 = { shouldShow: tmp4, runOnJS: tmp(tmp2[11]).runOnJS, cleanUp };
                        fn.__closure = obj4;
                        fn.__workletHash = 9820708059867;
                        fn.__initData = closure_12;
                        obj1.translateY = withSpring(num, closure_10, "respect-motion-settings", fn);
                        items = [];
                        items[0] = obj1;
                        size.transform = items;
                        return size;
                      }
                    }
                    cResult[27] = tmp4.blockingControlCover;
                    cResult[28] = items1;
                    tmp43 = items1;
                  }
                  const obj11 = { style: tmp4.consoleContainer, children: tmp37 };
                  const tmp42 = closure_6(cleanUp(tmp2[21]), obj11);
                  class N {
                    constructor() {
                      size = { backgroundColor: color, width: windowDimensions.get().width - 2 * EDGE_GUTTER, height: CONTROLS_HEIGHT + c8, borderRadius: 32, transform: null };
                      tmp = closure_0;
                      tmp2 = closure_2;
                      tmp3 = closure_0(closure_2[15]);
                      withSpring = tmp3.withSpring;
                      tmp4 = closure_4;
                      num = 100;
                      if (closure_4.get()) {
                        num = 0;
                      }
                      obj1 = { translateY: null };
                      fn = function n(arg0) {
                        const tmp = arg0 && !sharedValue.get();
                        if (tmp) {
                          const obj = state(windowDimensions[11]);
                          obj.runOnJS(cleanUp)();
                        }
                      };
                      obj4 = { shouldShow: tmp4, runOnJS: tmp(tmp2[11]).runOnJS, cleanUp };
                      fn.__closure = obj4;
                      fn.__workletHash = 9820708059867;
                      fn.__initData = closure_12;
                      obj1.translateY = withSpring(num, closure_10, "respect-motion-settings", fn);
                      items = [];
                      items[0] = obj1;
                      size.transform = items;
                      return size;
                    }
                  }
                  cResult[23] = tmp4.consoleContainer;
                  cResult[24] = tmp37;
                  cResult[25] = tmp42;
                  tmp40 = tmp42;
                }
                const obj12 = { style: animatedStyle, children: tmp34 };
                const tmp39 = closure_6(cleanUp(tmp2[11]).View, obj12);
                class N {
                  constructor() {
                    size = { backgroundColor: color, width: windowDimensions.get().width - 2 * EDGE_GUTTER, height: CONTROLS_HEIGHT + c8, borderRadius: 32, transform: null };
                    tmp = closure_0;
                    tmp2 = closure_2;
                    tmp3 = closure_0(closure_2[15]);
                    withSpring = tmp3.withSpring;
                    tmp4 = closure_4;
                    num = 100;
                    if (closure_4.get()) {
                      num = 0;
                    }
                    obj1 = { translateY: null };
                    fn = function n(arg0) {
                      const tmp = arg0 && !sharedValue.get();
                      if (tmp) {
                        const obj = state(windowDimensions[11]);
                        obj.runOnJS(cleanUp)();
                      }
                    };
                    obj4 = { shouldShow: tmp4, runOnJS: tmp(tmp2[11]).runOnJS, cleanUp };
                    fn.__closure = obj4;
                    fn.__workletHash = 9820708059867;
                    fn.__initData = closure_12;
                    obj1.translateY = withSpring(num, closure_10, "respect-motion-settings", fn);
                    items = [];
                    items[0] = obj1;
                    size.transform = items;
                    return size;
                  }
                }
                cResult[20] = animatedStyle;
                cResult[21] = tmp34;
                cResult[22] = tmp39;
                tmp37 = tmp39;
              }
            }
          }
          const obj13 = { style: tmp4.consoleItemContainer, children: items2 };
          items2 = [, , ];
          class N {
            constructor() {
              size = { backgroundColor: color, width: windowDimensions.get().width - 2 * EDGE_GUTTER, height: CONTROLS_HEIGHT + c8, borderRadius: 32, transform: null };
              tmp = closure_0;
              tmp2 = closure_2;
              tmp3 = closure_0(closure_2[15]);
              withSpring = tmp3.withSpring;
              tmp4 = closure_4;
              num = 100;
              if (closure_4.get()) {
                num = 0;
              }
              obj1 = { translateY: null };
              fn = function n(arg0) {
                const tmp = arg0 && !sharedValue.get();
                if (tmp) {
                  const obj = state(windowDimensions[11]);
                  obj.runOnJS(cleanUp)();
                }
              };
              obj4 = { shouldShow: tmp4, runOnJS: tmp(tmp2[11]).runOnJS, cleanUp };
              fn.__closure = obj4;
              fn.__workletHash = 9820708059867;
              fn.__initData = closure_12;
              obj1.translateY = withSpring(num, closure_10, "respect-motion-settings", fn);
              items = [];
              items[0] = obj1;
              size.transform = items;
              return size;
            }
          }
          items2[1] = tmp27;
          items2[2] = tmp30;
          const tmp36 = closure_7(cleanUp(tmp2[21]), obj13);
          cResult[15] = tmp4.consoleItemContainer;
          cResult[16] = tmp24;
          cResult[17] = tmp27;
          cResult[18] = tmp30;
          cResult[19] = tmp36;
          tmp34 = tmp36;
        }
        class N {
          constructor() {
            size = { backgroundColor: color, width: windowDimensions.get().width - 2 * EDGE_GUTTER, height: CONTROLS_HEIGHT + c8, borderRadius: 32, transform: null };
            tmp = closure_0;
            tmp2 = closure_2;
            tmp3 = closure_0(closure_2[15]);
            withSpring = tmp3.withSpring;
            tmp4 = closure_4;
            num = 100;
            if (closure_4.get()) {
              num = 0;
            }
            obj1 = { translateY: null };
            fn = function n(arg0) {
              const tmp = arg0 && !sharedValue.get();
              if (tmp) {
                const obj = state(windowDimensions[11]);
                obj.runOnJS(cleanUp)();
              }
            };
            obj4 = { shouldShow: tmp4, runOnJS: tmp(tmp2[11]).runOnJS, cleanUp };
            fn.__closure = obj4;
            fn.__workletHash = 9820708059867;
            fn.__initData = closure_12;
            obj1.translateY = withSpring(num, closure_10, "respect-motion-settings", fn);
            items = [];
            items[0] = obj1;
            size.transform = items;
            return size;
          }
        }
        cResult[10] = tmp4.consoleText;
        cResult[11] = text;
        cResult[12] = tmp29;
        tmp27 = tmp29;
      }
    }
    const items3 = [tmp4.consoleParentContainer, tmp12, hiddenStyles];
    cResult[4] = hiddenStyles;
    cResult[5] = tmp4.consoleParentContainer;
    cResult[6] = tmp12;
    cResult[7] = items3;
    tmp23 = items3;
  }
  let fn = function l() {
    const result = sharedValue.set(state !== native.TransitionStates.YEETED);
  };
  const items4 = [sharedValue, state];
  cResult[0] = sharedValue;
  cResult[1] = state;
  cResult[2] = fn;
  cResult[3] = items4;
  tmp10 = items4;
  tmp9 = fn;
}) : (function VoicePanelConsoleStatus(cleanUp) {
  let Text;
  let View2;
  let channelId;
  let displayCancel;
  let hiddenProps;
  let hiddenStyles;
  let icon;
  let intl;
  let items1;
  let items2;
  let items3;
  let items4;
  let mode;
  let obj12;
  let obj7;
  let obj8;
  let state;
  let text;
  let tmp16;
  let wrapperSpecs;
  ({ wrapperSpecs, state } = cleanUp);
  cleanUp = cleanUp.cleanUp;
  let windowDimensions;
  let color;
  const accessoryHeights = cleanUp.accessoryHeights;
  let tmp = closure_9();
  let tmp3 = windowDimensions;
  const tmp2 = cleanUp;
  const context = color.useContext(cleanUp(windowDimensions[9]));
  windowDimensions = context.windowDimensions;
  ({ mode, channelId } = context);
  const tmp5 = cleanUp(windowDimensions[10])(channelId);
  color = tmp5.color;
  ({ icon, text, displayCancel } = tmp5);
  let obj = state(windowDimensions[11]);
  const sharedValue = obj.useSharedValue(false);
  let items = [sharedValue, state];
  const effect = color.useEffect(() => {
    const result = sharedValue.set(state !== native.TransitionStates.YEETED);
  }, items);
  const tmp9 = cleanUp(windowDimensions[13])(mode, wrapperSpecs, accessoryHeights);
  ({ hiddenProps, hiddenStyles } = cleanUp(windowDimensions[14])(mode, wrapperSpecs));
  cleanUp(windowDimensions[14])(mode, wrapperSpecs);
  const obj2 = state(windowDimensions[11]);
  let fn = function y() {
    let fn;
    let items;
    size = { backgroundColor: color, width: windowDimensions.get().width - 2 * EDGE_GUTTER, height: CONTROLS_HEIGHT + c8, borderRadius: 32, transform: items };
    let tmp = require;
    const withSpring = spring.withSpring;
    let num = 100;
    if (sharedValue.get()) {
      num = 0;
    }
    let obj = { translateY: withSpring(num, obj4, "respect-motion-settings", fn) };
    fn = function n(arg0) {
      const tmp = arg0 && !sharedValue.get();
      if (tmp) {
        const obj = state(windowDimensions[11]);
        obj.runOnJS(cleanUp)();
      }
    };
    fn.__closure = { shouldShow: sharedValue, runOnJS: ReanimatedRexport.runOnJS, cleanUp };
    fn.__workletHash = 14935952621052;
    fn.__initData = __initData;
    ({ shouldShow: sharedValue, runOnJS: ReanimatedRexport.runOnJS, cleanUp });
    items = [obj];
    return size;
  };
  fn.__closure = { color, windowDimensions, EDGE_GUTTER: sharedValue, CONTROLS_HEIGHT, CONSOLE_STATUS_HEIGHT, withSpring: state(windowDimensions[15]).withSpring, shouldShow: sharedValue, FADE_IN_MODE_PHYSICS: obj4, runOnJS: state(windowDimensions[11]).runOnJS, cleanUp };
  fn.__workletHash = 5196360574855;
  fn.__initData = __initData4;
  ({ color, windowDimensions, EDGE_GUTTER: sharedValue, CONTROLS_HEIGHT, CONSOLE_STATUS_HEIGHT, withSpring: state(windowDimensions[15]).withSpring, shouldShow: sharedValue, FADE_IN_MODE_PHYSICS: obj4, runOnJS: state(windowDimensions[11]).runOnJS, cleanUp });
  const animatedStyle = obj2.useAnimatedStyle(fn);
  obj4 = state(windowDimensions[11]);
  const fn2 = function v() {
    const obj = { width: windowDimensions.get().width - 2 * EDGE_GUTTER };
    return obj;
  };
  fn2.__closure = { windowDimensions, EDGE_GUTTER: sharedValue };
  fn2.__workletHash = 14137865326839;
  fn2.__initData = __initData5;
  const animatedStyle1 = obj4.useAnimatedStyle(fn2);
  const obj5 = { style: items1, animatedProps: hiddenProps, children: items3 };
  items1 = [tmp.consoleParentContainer, tmp9, hiddenStyles];
  const View = cleanUp(windowDimensions[11]).View;
  const obj6 = { style: tmp.consoleContainer, children: closure_6(View2, obj7) };
  obj7 = { style: animatedStyle, children: closure_7(tmp16, obj8) };
  const tmp15 = cleanUp(windowDimensions[21]);
  View2 = cleanUp(windowDimensions[11]).View;
  obj8 = { style: tmp.consoleItemContainer, children: items2 };
  const obj9 = { source: icon, color: cleanUp(windowDimensions[6]).unsafe_rawColors.WHITE, size: state(windowDimensions[16]).IconSizes.SMALL };
  tmp16 = cleanUp(windowDimensions[21]);
  const Icon = state(windowDimensions[16]).Icon;
  items2 = [closure_6(Icon, obj9), , ];
  const obj10 = { variant: "text-sm/medium", color: "text-overlay-light", style: tmp.consoleText, children: text };
  items2[1] = closure_6(state(windowDimensions[17]).Text, obj10);
  let tmp14Result = null;
  if (displayCancel) {
    const obj11 = { hitSlop: 4, onPress: state(tmp3[19]).disconnectRemote, children: closure_6(Text, obj12) };
    const PressableOpacity = tmp6(tmp3[18]).PressableOpacity;
    obj12 = { variant: "text-sm/medium", color: "text-overlay-light", children: intl.string(state(tmp3[20]).t["ETE/oC"]) };
    Text = tmp6(tmp3[17]).Text;
    intl = tmp6(tmp3[20]).intl;
    tmp14Result = tmp14(PressableOpacity, obj11);
  }
  items2[2] = tmp14Result;
  items3 = [closure_6(tmp15, obj6), ];
  const obj13 = { style: items4, children: closure_6(state(tmp3[22]).VoicePanelVisualEffectView, {}) };
  items4 = [tmp.blockingControlCover, animatedStyle1];
  const View3 = tmp2(tmp3[11]).View;
  items3[1] = closure_6(View3, obj13);
  return closure_7(View, obj5);
});
let closure_17 = tmp5;
let size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelConsoleStatus.tsx");

export default tmp5;
export const CONSOLE_STATUS_HEIGHT = 36;
export const renderVoicePanelConsoleStatus = function renderVoicePanelConsoleStatus(arg0, arg1, state, cleanUp) {
  const obj = { state, cleanUp };
  const merged = Object.assign(arg1);
  return metroRequire(closure_17, obj, arg0);
};
