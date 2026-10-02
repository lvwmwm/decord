// Module ID: 15543
// Function ID: 15544
// Name: ScreenRecordingPip
// Dependencies: [32, 19, 17, 15544, 21, 4837, 588, 558, 576, 4570, 9546, 11391, 6066, 5281, 5285, 4801, 15548, 1987, 15538, 5436, 4833, 5282, 4784, 15549, 2]

// Module 15543 (ScreenRecordingPip)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 588 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4570 */;
import spring from "spring" /* 5281 */;
import springPresets from "springPresets" /* 5285 */;
import ScreenRecordingStore from "ScreenRecordingStore" /* 15544 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4837 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault, v100;

let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let size;
function ScreenRecordingPip(surveyConfig) {
  let PressableOpacity;
  let closure_0;
  let closure_1;
  let items3;
  let obj3;
  let str;
  surveyConfig = surveyConfig.surveyConfig;
  importDefault = undefined;
  let point;
  let sharedValue;
  let sharedValue1;
  const tmp = closure_11();
  const tmp4 = require("useWindowDimensionsSharedValue")();
  _require = tmp4;
  const tmp5 = require("useSafeAreaInsetsSharedValue")();
  importDefault = tmp5;
  const tmp6 = useScreenRecordingStore((isRecording) => isRecording.isRecording);
  const tmp7 = useScreenRecordingStore((currentStep) => currentStep.currentStep);
  const tmp8 = useScreenRecordingStore((isUploading) => isUploading.isUploading);
  const items = [tmp4, tmp5];
  const isStepCompleted = surveyConfig.useIsStepCompleted(tmp7);
  const tmp10 = sharedValue(sharedValue1.useState(sharedValue1.useCallback(() => {
    let diff;
    const width = closure_0.get().width;
    const rect = closure_1.get();
    point = { x: diff - nativeDefault.space.PX_16, y: rect.top + nativeDefault.space.PX_16 };
    diff = width - rect.right - c10;
    return point;
  }, items)), 2);
  point = tmp10[0];
  const tmp11 = tmp10[1];
  let obj = require("ReanimatedRexport");
  sharedValue = obj.useSharedValue(point.x);
  const obj2 = require("ReanimatedRexport");
  sharedValue1 = obj2.useSharedValue(point.y);
  const items1 = [, , , ];
  ({ x: arr2[0], y: arr2[1] } = point);
  items1[2] = sharedValue;
  items1[3] = sharedValue1;
  const effect = sharedValue1.useEffect(() => {
    const result = sharedValue.set(point.x);
    const result1 = sharedValue1.set(point.y);
  }, items1);
  let tmp18Result = null;
  if (tmp6) {
    let tmp20Result;
    const point1 = { x: sharedValue, y: sharedValue1 };
    const items2 = [closure_7(require("VEVOO"), point1), ];
    const point2 = { x: sharedValue, y: sharedValue1, contentWidth: v100, contentHeight: v100, dragBoundsPadding: require("native").space.PX_4, onChangePosition: tmp11, children: closure_8(PressableOpacity, obj3) };
    obj3 = { style: tmp.widget, accessibilityRole: "button", onPress: tmp16, activeOpacity: 0.5, children: items3 };
    PressableOpacity = tmp12(tmp3[19]).PressableOpacity;
    const obj4 = { variant: "text-xs/semibold", color: "text-overlay-light", style: tmp.stepText, children: str };
    str = "Uploading...";
    const Text = tmp12(tmp3[20]).Text;
    const tmp19 = closure_9;
    const tmp21 = closure_22;
    if (!tmp8) {
      const _HermesInternal = HermesInternal;
      str = "Step " + tmp7 + 1;
    }
    items3 = [closure_7(Text, obj4), ];
    if (tmp8) {
      const obj5 = {
        loading: true,
        text: "",
        onPress() {

            }
      };
      tmp20Result = tmp20(tmp12(tmp3[21]).Button, obj5);
    } else {
      let tmp25;
      const obj6 = { style: null, children: null };
      const tmp24 = View;
      if (isStepCompleted) {
        obj6.style = tmp.doneButton;
        obj6.children = closure_7(require("CheckmarkLargeIcon").CheckmarkLargeIcon, { size: "md", color: "status-positive" });
        tmp25 = obj6;
      } else {
        obj6.style = tmp.stopButton;
        obj6.children = closure_7(require("StopIcon").StopIcon, { size: "md", color: "text-feedback-critical" });
        tmp25 = obj6;
      }
      tmp20Result = tmp20(tmp24, tmp25);
    }
    const obj7 = { children: items2 };
    items3[1] = tmp20Result;
    items2[1] = closure_7(tmp21, point2);
    tmp18Result = tmp18(tmp19, obj7);
  }
  return tmp18Result;
}
const View = react_native.View;
const useScreenRecordingStore = ScreenRecordingStore.useScreenRecordingStore;
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let c10 = 100;
let createStyles = createStyles_mod;
let obj = { widgetContainer: { position: "absolute" }, widget: size, stepText: { textAlign: "center", maxWidth: 68 }, stopButton: obj2, doneButton: obj3 };
size = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, justifyContent: "center", alignItems: "center", height: 100, width: 100, gap: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.xl };
createStyles = createStyles.createStyles;
const merged = Object.assign(nativeDefault.shadows.SHADOW_MOBILE_NAVIGATOR_X);
obj2 = { padding: nativeDefault.space.PX_8, borderWidth: 1, borderColor: nativeDefault.colors.WHITE, borderRadius: nativeDefault.radii.round };
obj3 = { padding: nativeDefault.space.PX_8 };
let closure_11 = createStyles(obj);
const __initData = { code: "function ScreenRecordingPipTsx1(x_0,y_0){const{windowDimensionsSharedValue,insetsSharedValue,clamp,dragBoundsPadding,contentWidth,contentHeight}=this.__closure;const{width:windowWidth,height:windowHeight}=windowDimensionsSharedValue.get();const insets=insetsSharedValue.get();return{x:clamp(x_0,insets.left+dragBoundsPadding,windowWidth-insets.right-contentWidth-dragBoundsPadding),y:clamp(y_0,insets.top+dragBoundsPadding,windowHeight-insets.bottom-contentHeight-dragBoundsPadding)};}" };
const __initData2 = { code: "function ScreenRecordingPipTsx2(){const{originalX,x,originalY,y}=this.__closure;originalX.set(x.get());originalY.set(y.get());}" };
const __initData3 = { code: "function ScreenRecordingPipTsx3(event){const{getClampedPosition,originalX,originalY,x,y}=this.__closure;const{x:xClamped,y:yClamped}=getClampedPosition(originalX.get()+event.translationX,originalY.get()+event.translationY);x.set(xClamped);y.set(yClamped);}" };
const __initData4 = { code: "function ScreenRecordingPipTsx4(){const{runOnJS,onChangePosition,x,y}=this.__closure;runOnJS(onChangePosition)({x:x.get(),y:y.get()});}" };
const __initData5 = { code: "function ScreenRecordingPipTsx5(){const{getClampedPosition,x,y,withSpring,springUnclamped}=this.__closure;const{x:translateX,y:translateY}=getClampedPosition(x.get(),y.get());return{transform:[{translateX:withSpring(translateX,springUnclamped)},{translateY:withSpring(translateY,springUnclamped)}]};}" };
const __initData6 = { code: "function ScreenRecordingPipTsx6(x_0,y_0){const{windowDimensionsSharedValue,insetsSharedValue,clamp,dragBoundsPadding,contentWidth,contentHeight}=this.__closure;const{width:windowWidth,height:windowHeight}=windowDimensionsSharedValue.get();const insets=insetsSharedValue.get();return{x:clamp(x_0,insets.left+dragBoundsPadding,windowWidth-insets.right-contentWidth-dragBoundsPadding),y:clamp(y_0,insets.top+dragBoundsPadding,windowHeight-insets.bottom-contentHeight-dragBoundsPadding)};}" };
const __initData7 = { code: "function ScreenRecordingPipTsx7(){const{originalX,x,originalY,y}=this.__closure;originalX.set(x.get());originalY.set(y.get());}" };
const __initData8 = { code: "function ScreenRecordingPipTsx8(event){const{getClampedPosition,originalX,originalY,x,y}=this.__closure;const{x:xClamped,y:yClamped}=getClampedPosition(originalX.get()+event.translationX,originalY.get()+event.translationY);x.set(xClamped);y.set(yClamped);}" };
const __initData9 = { code: "function ScreenRecordingPipTsx9(){const{runOnJS,onChangePosition,x,y}=this.__closure;runOnJS(onChangePosition)({x:x.get(),y:y.get()});}" };
const __initData10 = { code: "function ScreenRecordingPipTsx10(){const{getClampedPosition,x,y,withSpring,springUnclamped}=this.__closure;const{x:translateX,y:translateY}=getClampedPosition(x.get(),y.get());return{transform:[{translateX:withSpring(translateX,springUnclamped)},{translateY:withSpring(translateY,springUnclamped)}]};}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let closure_1;
  let closure_10;
  let contentWidth;
  let dragBoundsPadding;
  let onChangePosition;
  const tmp2 = contentWidth;
  let obj = require("react");
  const cResult = obj.c(34);
  const x = arg0.x;
  _require = x;
  let y = arg0.y;
  importDefault = y;
  contentWidth = arg0.contentWidth;
  const contentHeight = arg0.contentHeight;
  ({ dragBoundsPadding, onChangePosition } = arg0);
  const children = arg0.children;
  let num = 0;
  if (undefined !== dragBoundsPadding) {
    num = dragBoundsPadding;
  }
  const tmp4 = closure_11();
  const tmpResult = require("ReanimatedRexport");
  const sharedValue = tmpResult.useSharedValue(x.get());
  const tmpResult3 = require("ReanimatedRexport");
  const sharedValue1 = tmpResult3.useSharedValue(y.get());
  const tmp8 = require("useSafeAreaInsetsSharedValue")();
  let closure_8 = tmp8;
  const tmp9 = require("useWindowDimensionsSharedValue")();
  let closure_9 = tmp9;
  const tmp7 = importDefault;
  if (cResult[0] === contentHeight) {
    if (cResult[1] === contentWidth) {
      if (cResult[2] === num) {
        if (cResult[3] === tmp8) {
          let tmp10;
          if (cResult[4] === tmp9) {
            tmp10 = cResult[5];
          }
          v100 = tmp10;
          if (cResult[6] === sharedValue) {
            if (cResult[7] === sharedValue1) {
              if (cResult[8] === x) {
                let tmp11;
                if (cResult[9] === y) {
                  tmp11 = cResult[10];
                }
                if (cResult[11] === tmp10) {
                  if (cResult[12] === sharedValue) {
                    if (cResult[13] === sharedValue1) {
                      if (cResult[14] === x) {
                        let tmp14;
                        if (cResult[15] === y) {
                          tmp14 = cResult[16];
                        }
                        if (cResult[17] === onChangePosition) {
                          if (cResult[18] === x) {
                            let tmp18;
                            if (cResult[19] === y) {
                              tmp18 = cResult[20];
                            }
                            if (cResult[21] === tmp11) {
                              if (cResult[22] === tmp14) {
                                require("LegacyBaseButton");
                                class W {
                                  constructor() {
                                    const point = { x: closure_0.get(), y: closure_1.get() };
                                    const obj = ReanimatedRexport;
                                    const runOnJSResult = obj.runOnJS(onChangePosition);
                                    runOnJSResult(point);
                                  }
                                }
                                class V {
                                  constructor() {
                                    const result = sharedValue.set(closure_0.get());
                                    const result1 = sharedValue1.set(closure_1.get());
                                  }
                                }
                                class J {
                                  constructor() {
                                    let items;
                                    let obj3;
                                    let obj5;
                                    let x;
                                    let y;
                                    const value = closure_0.get();
                                    const obj = { transform: items };
                                    const obj2 = { translateX: obj3.withSpring(x, springPresets.springUnclamped) };
                                    ({ x, y } = closure_10(value, closure_1.get()));
                                    closure_10(value, closure_1.get());
                                    items = [obj2, ];
                                    obj3 = spring;
                                    const obj4 = { translateY: obj5.withSpring(y, springPresets.springUnclamped) };
                                    items[1] = obj4;
                                    obj5 = spring;
                                    return obj;
                                  }
                                }
                                let point = { getClampedPosition: tmp10, x, y, withSpring: require("spring").withSpring, springUnclamped: require("springPresets").springUnclamped };
                                const useAnimatedStyle = tmp25.useAnimatedStyle;
                                J.__closure = point;
                                J.__workletHash = 5273315246744;
                                J.__initData = __initData5;
                                const animatedStyle = useAnimatedStyle(J);
                                if (cResult[25] === animatedStyle) {
                                  let tmp28;
                                  if (cResult[26] === tmp4.widgetContainer) {
                                    tmp28 = cResult[27];
                                  }
                                  if (cResult[28] === children) {
                                    let tmp29;
                                    if (cResult[29] === tmp28) {
                                      tmp29 = cResult[30];
                                    }
                                    if (cResult[31] === tmp24) {
                                      let tmp32;
                                      if (cResult[32] === tmp29) {
                                        tmp32 = cResult[33];
                                      }
                                      return tmp32;
                                    }
                                    class W {
                                      constructor() {
                                        const point = { x: closure_0.get(), y: closure_1.get() };
                                        const obj = ReanimatedRexport;
                                        const runOnJSResult = obj.runOnJS(onChangePosition);
                                        runOnJSResult(point);
                                      }
                                    }
                                    class V {
                                      constructor() {
                                        const result = sharedValue.set(closure_0.get());
                                        const result1 = sharedValue1.set(closure_1.get());
                                      }
                                    }
                                    class J {
                                      constructor() {
                                        let items;
                                        let obj3;
                                        let obj5;
                                        let x;
                                        let y;
                                        const value = closure_0.get();
                                        const obj = { transform: items };
                                        const obj2 = { translateX: obj3.withSpring(x, springPresets.springUnclamped) };
                                        ({ x, y } = closure_10(value, closure_1.get()));
                                        closure_10(value, closure_1.get());
                                        items = [obj2, ];
                                        obj3 = spring;
                                        const obj4 = { translateY: obj5.withSpring(y, springPresets.springUnclamped) };
                                        items[1] = obj4;
                                        obj5 = spring;
                                        return obj;
                                      }
                                    }
                                    tmp33[1] = tmp29;
                                    const tmp34 = sharedValue1(require("LegacyBaseButton").GestureDetector, tmp33);
                                    cResult[31] = tmp24;
                                    cResult[32] = tmp29;
                                    cResult[33] = tmp34;
                                    tmp32 = tmp34;
                                  }
                                  class W {
                                    constructor() {
                                      const point = { x: closure_0.get(), y: closure_1.get() };
                                      const obj = ReanimatedRexport;
                                      const runOnJSResult = obj.runOnJS(onChangePosition);
                                      runOnJSResult(point);
                                    }
                                  }
                                  class V {
                                    constructor() {
                                      const result = sharedValue.set(closure_0.get());
                                      const result1 = sharedValue1.set(closure_1.get());
                                    }
                                  }
                                  class J {
                                    constructor() {
                                      let items;
                                      let obj3;
                                      let obj5;
                                      let x;
                                      let y;
                                      const value = closure_0.get();
                                      const obj = { transform: items };
                                      const obj2 = { translateX: obj3.withSpring(x, springPresets.springUnclamped) };
                                      ({ x, y } = closure_10(value, closure_1.get()));
                                      closure_10(value, closure_1.get());
                                      items = [obj2, ];
                                      obj3 = spring;
                                      const obj4 = { translateY: obj5.withSpring(y, springPresets.springUnclamped) };
                                      items[1] = obj4;
                                      obj5 = spring;
                                      return obj;
                                    }
                                  }
                                  tmp30[1] = children;
                                  const tmp31 = sharedValue1(tmp7(tmp2[9]).View, tmp30);
                                  cResult[28] = children;
                                  cResult[29] = tmp28;
                                  cResult[30] = tmp31;
                                  tmp29 = tmp31;
                                }
                                let items = [tmp4.widgetContainer, animatedStyle];
                                cResult[25] = animatedStyle;
                                cResult[26] = tmp4.widgetContainer;
                                cResult[27] = items;
                                tmp28 = items;
                              }
                            }
                            class W {
                              constructor() {
                                const point = { x: closure_0.get(), y: closure_1.get() };
                                const obj = ReanimatedRexport;
                                const runOnJSResult = obj.runOnJS(onChangePosition);
                                runOnJSResult(point);
                              }
                            }
                            class V {
                              constructor() {
                                const result = sharedValue.set(closure_0.get());
                                const result1 = sharedValue1.set(closure_1.get());
                              }
                            }
                            tmp22[2] = tmp18;
                            cResult[21] = tmp11;
                            cResult[22] = tmp14;
                            cResult[23] = tmp18;
                            cResult[24] = tmp22;
                          }
                        }
                        class W {
                          constructor() {
                            const point = { x: closure_0.get(), y: closure_1.get() };
                            const obj = ReanimatedRexport;
                            const runOnJSResult = obj.runOnJS(onChangePosition);
                            runOnJSResult(point);
                          }
                        }
                        class V {
                          constructor() {
                            const result = sharedValue.set(closure_0.get());
                            const result1 = sharedValue1.set(closure_1.get());
                          }
                        }
                        tmp19[1] = onChangePosition;
                        tmp19[2] = x;
                        tmp19[3] = y;
                        W.__closure = tmp19;
                        W.__workletHash = 15302036225057;
                        W.__initData = __initData4;
                        cResult[17] = onChangePosition;
                        cResult[18] = x;
                        cResult[19] = y;
                        cResult[20] = W;
                        tmp18 = W;
                      }
                    }
                  }
                }
                class V {
                  constructor() {
                    const result = sharedValue.set(closure_0.get());
                    const result1 = sharedValue1.set(closure_1.get());
                  }
                }
                tmp16[1] = sharedValue;
                tmp16[2] = sharedValue1;
                tmp16[3] = x;
                tmp16[4] = y;
                tmp15.__closure = tmp16;
                tmp15.__workletHash = 3428194988690;
                tmp15.__initData = __initData3;
                cResult[11] = tmp10;
                cResult[12] = sharedValue;
                cResult[13] = sharedValue1;
                cResult[14] = x;
                cResult[15] = y;
                cResult[16] = tmp15;
                tmp14 = tmp15;
              }
            }
          }
          class V {
            constructor() {
              const result = sharedValue.set(closure_0.get());
              const result1 = sharedValue1.set(closure_1.get());
            }
          }
          tmp12[0] = sharedValue;
          tmp12[1] = x;
          tmp12[2] = sharedValue1;
          tmp12[3] = y;
          V.__closure = tmp12;
          V.__workletHash = 13009482509687;
          V.__initData = __initData2;
          cResult[6] = sharedValue;
          cResult[7] = sharedValue1;
          cResult[8] = x;
          cResult[9] = y;
          cResult[10] = V;
          tmp11 = V;
        }
      }
    }
  }
  const fn = function o(arg0, arg1) {
    let height;
    let obj2;
    let obj3;
    let width;
    const value = closure_9.get();
    ({ width, height } = value);
    const rect = closure_8.get();
    const point = { x: obj2.clamp(arg0, rect.left + num, width - rect.right - contentWidth - num), y: obj3.clamp(arg1, rect.top + num, height - rect.bottom - contentHeight - num) };
    obj2 = ReanimatedRexport;
    obj3 = ReanimatedRexport;
    return point;
  };
  let obj2 = { windowDimensionsSharedValue: tmp9, insetsSharedValue: tmp8, clamp: tmp(tmp2[9]).clamp, dragBoundsPadding: num, contentWidth, contentHeight };
  fn.__closure = obj2;
  fn.__workletHash = 7374875420235;
  fn.__initData = __initData;
  cResult[0] = contentHeight;
  cResult[1] = contentWidth;
  cResult[2] = num;
  cResult[3] = tmp8;
  cResult[4] = tmp9;
  cResult[5] = fn;
  tmp10 = fn;
}) : ((arg0) => {
  let closure_0;
  let closure_1;
  let fn2;
  let fn3;
  let items1;
  let obj8;
  const x = arg0.x;
  _require = x;
  let y = arg0.y;
  importDefault = y;
  const contentWidth = arg0.contentWidth;
  const contentHeight = arg0.contentHeight;
  let num = arg0.dragBoundsPadding;
  if (num === undefined) {
    num = 0;
  }
  const onChangePosition = arg0.onChangePosition;
  const children = arg0.children;
  const tmp = closure_11();
  let obj = require("ReanimatedRexport");
  const sharedValue = obj.useSharedValue(x.get());
  let obj2 = require("ReanimatedRexport");
  const sharedValue1 = obj2.useSharedValue(y.get());
  const tmp4 = require("useSafeAreaInsetsSharedValue")();
  let closure_8 = tmp4;
  const tmp5 = require("useWindowDimensionsSharedValue")();
  let closure_9 = tmp5;
  const fn = function x(arg0, arg1) {
    let height;
    let obj2;
    let obj3;
    let width;
    const value = closure_9.get();
    ({ width, height } = value);
    const rect = closure_8.get();
    const point = { x: obj2.clamp(arg0, rect.left + num, width - rect.right - contentWidth - num), y: obj3.clamp(arg1, rect.top + num, height - rect.bottom - contentHeight - num) };
    obj2 = ReanimatedRexport;
    obj3 = ReanimatedRexport;
    return point;
  };
  let obj3 = { windowDimensionsSharedValue: tmp5, insetsSharedValue: tmp4, clamp: require("ReanimatedRexport").clamp, dragBoundsPadding: num, contentWidth, contentHeight };
  fn.__closure = obj3;
  fn.__workletHash = 3512555763276;
  fn.__initData = __initData6;
  let items = [contentHeight, contentWidth, num, tmp4, tmp5];
  const getClampedPosition = num.useCallback(fn, items);
  let obj4 = require("LegacyBaseButton");
  let obj5 = { onActivate: fn2, onUpdate: S, onDeactivate: fn3 };
  fn2 = function w() {
    const result = sharedValue.set(closure_0.get());
    const result1 = sharedValue1.set(closure_1.get());
  };
  fn2.__closure = { originalX: sharedValue, x, originalY: sharedValue1, y };
  fn2.__workletHash = 4330167357170;
  fn2.__initData = __initData7;
  class S {
    constructor(translationX) {
      const sum = sharedValue.get() + translationX.translationX;
      const point = callback(sum, sharedValue1.get() + translationX.translationY);
      const y = point.y;
      const result = closure_0.set(point.x);
      const result1 = closure_1.set(y);
    }
  }
  S.__closure = { getClampedPosition, originalX: sharedValue, originalY: sharedValue1, x, y };
  S.__workletHash = 1701310966937;
  S.__initData = __initData8;
  fn3 = function y() {
    const point = { x: closure_0.get(), y: closure_1.get() };
    const obj = ReanimatedRexport;
    const runOnJSResult = obj.runOnJS(onChangePosition);
    runOnJSResult(point);
  };
  let point = { runOnJS: require("ReanimatedRexport").runOnJS, onChangePosition, x, y };
  fn3.__closure = point;
  fn3.__workletHash = 4994953291436;
  fn3.__initData = __initData9;
  const panGesture = obj4.usePanGesture(obj5);
  const obj7 = require("ReanimatedRexport");
  class P {
    constructor() {
      let items;
      let obj3;
      let obj5;
      let x;
      let y;
      const value = closure_0.get();
      const obj = { transform: items };
      const obj2 = { translateX: obj3.withSpring(x, springPresets.springUnclamped) };
      ({ x, y } = callback(value, closure_1.get()));
      callback(value, closure_1.get());
      items = [obj2, ];
      obj3 = spring;
      const obj4 = { translateY: obj5.withSpring(y, springPresets.springUnclamped) };
      items[1] = obj4;
      obj5 = spring;
      return obj;
    }
  }
  const point1 = { getClampedPosition, x, y, withSpring: require("spring").withSpring, springUnclamped: require("springPresets").springUnclamped };
  P.__closure = point1;
  P.__workletHash = 12568239781868;
  P.__initData = __initData10;
  const animatedStyle = obj7.useAnimatedStyle(P);
  const obj6 = { gesture: panGesture, children: sharedValue1(require("ReanimatedRexport").View, obj8) };
  const GestureDetector = require("LegacyBaseButton").GestureDetector;
  obj8 = { style: items1, children };
  items1 = [tmp.widgetContainer, animatedStyle];
  return sharedValue1(GestureDetector, obj6);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  const obj = react2;
  const cResult = obj.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t(currentSurveyConfig) {
      return currentSurveyConfig.currentSurveyConfig;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const tmp3 = useScreenRecordingStore(first);
  let tmp4 = null;
  if (null != tmp3) {
    let tmp5;
    if (cResult[1] !== tmp3) {
      const obj2 = { surveyConfig: tmp3 };
      const tmp8 = metroImportDefault(ScreenRecordingPip, obj2);
      cResult[1] = tmp3;
      cResult[2] = tmp8;
      tmp5 = tmp8;
    } else {
      tmp5 = cResult[2];
    }
    tmp4 = tmp5;
  }
  return tmp4;
}) : (() => {
  const tmp = useScreenRecordingStore((currentSurveyConfig) => currentSurveyConfig.currentSurveyConfig);
  let tmp2 = null;
  if (null != tmp) {
    const obj = { surveyConfig: tmp };
    tmp2 = metroImportDefault(ScreenRecordingPip, obj);
  }
  return tmp2;
});
size = size_mod;
let result = size.fileFinishedImporting("modules/screen_recording/native/ScreenRecordingPip.tsx");

export default tmp5;
