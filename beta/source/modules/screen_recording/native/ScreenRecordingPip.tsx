// Module ID: 16251
// Function ID: 16252
// Name: ScreenRecordingPip
// Dependencies: [32, 19, 17, 16252, 21, 4758, 580, 558, 568, 4497, 10344, 12163, 6891, 5187, 5191, 4725, 16256, 1984, 16246, 5341, 4754, 5188, 4708, 16257, 2]

// Module 16251 (ScreenRecordingPip)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4497 */;
import spring from "spring" /* 5187 */;
import springPresets from "springPresets" /* 5191 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function ScreenRecordingPip(surveyConfig) {
  surveyConfig = surveyConfig.surveyConfig;
  importDefault = undefined;
  let point;
  let sharedValue;
  let sharedValue1;
  const tmp = closure_11();
  let obj = point;
  const tmp3 = require("useWindowDimensionsSharedValue")();
  _require = tmp3;
  const tmp4 = require("useSafeAreaInsetsSharedValue")();
  importDefault = tmp4;
  const tmp6 = useScreenRecordingStore((currentStep) => currentStep.currentStep);
  const tmp7 = useScreenRecordingStore((isUploading) => isUploading.isUploading);
  const items = [tmp3, tmp4];
  const isStepCompleted = surveyConfig.useIsStepCompleted(tmp6);
  const tmp9 = sharedValue(sharedValue1.useState(sharedValue1.useCallback(() => {
    const rect = closure_1.get();
    point = { x: null, y: null };
    const diff = closure_0.get().width - rect.right - c10;
    point.x = diff - nativeDefault.space.PX_16;
    point.y = rect.top + nativeDefault.space.PX_16;
    return point;
  }, items)), 2);
  point = tmp9[0];
  let Button = _require;
  const tmp5 = useScreenRecordingStore((isRecording) => isRecording.isRecording);
  sharedValue = require("ReanimatedRexport").useSharedValue(point.x);
  const obj2 = require("ReanimatedRexport");
  sharedValue1 = require("ReanimatedRexport").useSharedValue(point.y);
  const items1 = [, , , ];
  ({ x: arr2[0], y: arr2[1] } = point);
  items1[2] = sharedValue;
  items1[3] = sharedValue1;
  const effect = sharedValue1.useEffect(() => {
    const result = sharedValue.set(point.x);
    const result1 = sharedValue1.set(point.y);
  }, items1);
  if (!tmp5) {
    return null;
  } else {
    const point1 = { x: sharedValue, y: sharedValue1 };
    const items2 = [closure_7(tmp2(obj[18]), point1), ];
    let point2 = { x: sharedValue, y: sharedValue1, contentWidth: v100, contentHeight: v100, dragBoundsPadding: tmp2(obj[6]).space.PX_4, onChangePosition: tmp9[1], children: null };
    let obj4 = { style: tmp.widget, accessibilityRole: "button", onPress: tmp13, activeOpacity: 0.5, children: null };
    const obj5 = { variant: "text-xs/semibold", color: "text-overlay-light", style: tmp.stepText, children: null };
    let str = "Uploading...";
    if (!tmp7) {
      const _HermesInternal = HermesInternal;
      str = "Step " + tmp6 + 1;
    }
    obj5.children = str;
    const items3 = [closure_7(Button(obj[20]).Text, obj5), ];
    if (tmp7) {
      Button = Button(obj[21]).Button;
      const obj6 = {
        loading: true,
        text: "",
        onPress() {

            }
      };
      let tmp16Result = tmp16(Button, obj6);
    } else {
      const obj7 = { style: null, children: null };
      if (isStepCompleted) {
        obj7.style = tmp.doneButton;
        obj7.children = tmp16(Button(obj[22]).CheckmarkLargeIcon, { size: "md", color: "status-positive" });
        let tmp21 = obj7;
      } else {
        obj7.style = tmp.stopButton;
        obj7.children = tmp16(Button(obj[23]).StopIcon, { size: "md", color: "text-feedback-critical" });
        tmp21 = obj7;
      }
      tmp16Result = tmp16(View, tmp21);
    }
    obj = { children: null };
    items3[1] = tmp16Result;
    obj4.children = items3;
    obj4 = tmp14(Button(obj[19]).PressableOpacity, obj4);
    point2.children = obj4;
    point2 = tmp16(closure_22, point2);
    items2[1] = point2;
    obj.children = items2;
    closure_8(closure_9, obj);
  }
}
const View = fn(17).View;
const useScreenRecordingStore = fn(16252).useScreenRecordingStore;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
let c10 = 100;
const createStyles = fn(4758);
let obj2 = { widgetContainer: { position: "absolute" }, widget: null, stepText: null, stopButton: null, doneButton: null };
let size = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, justifyContent: "center", alignItems: "center", height: 100, width: 100, gap: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.xl };
const merged = Object.assign(nativeDefault.shadows.SHADOW_MOBILE_NAVIGATOR_X);
obj2.widget = size;
obj2.stepText = { textAlign: "center", maxWidth: 68 };
obj2.stopButton = { padding: nativeDefault.space.PX_8, borderWidth: 1, borderColor: nativeDefault.colors.WHITE, borderRadius: nativeDefault.radii.round };
let obj3 = { padding: nativeDefault.space.PX_8, borderWidth: 1, borderColor: nativeDefault.colors.WHITE, borderRadius: nativeDefault.radii.round };
obj2.doneButton = { padding: nativeDefault.space.PX_8 };
let closure_11 = createStyles.createStyles(obj2);
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
let ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = require("c").c(34);
  const x = arg0.x;
  _require = x;
  const y = arg0.y;
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
  let obj = require("c");
  const sharedValue = require("ReanimatedRexport").useSharedValue(x.get());
  const tmpResult = require("ReanimatedRexport");
  const sharedValue1 = require("ReanimatedRexport").useSharedValue(y.get());
  const tmp8 = require("useSafeAreaInsetsSharedValue")();
  closure_8 = tmp8;
  const tmp9 = require("useWindowDimensionsSharedValue")();
  closure_9 = tmp9;
  if (cResult[0] === contentHeight) {
    if (cResult[1] === contentWidth) {
      if (cResult[2] === num) {
        if (cResult[3] === tmp8) {
          if (cResult[4] === tmp9) {
            let tmp10 = cResult[5];
          }
          v100 = tmp10;
          if (cResult[6] === sharedValue) {
            if (cResult[7] === sharedValue1) {
              if (cResult[8] === x) {
                if (cResult[9] === y) {
                  let tmp11 = cResult[10];
                }
                if (cResult[11] === tmp10) {
                  if (cResult[12] === sharedValue) {
                    if (cResult[13] === sharedValue1) {
                      if (cResult[14] === x) {
                        if (cResult[15] === y) {
                          let tmp14 = cResult[16];
                        }
                        if (cResult[17] === onChangePosition) {
                          if (cResult[18] === x) {
                            if (cResult[19] === y) {
                              let tmp18 = cResult[20];
                            }
                            if (cResult[21] === tmp11) {
                              if (cResult[22] === tmp14) {
                                tmp(tmp2[12]);
                                class W {
                                  constructor() {
                                    obj = closure_0(closure_2[9]);
                                    point = { x: null, y: null };
                                    runOnJSResult = obj.runOnJS(onChangePosition);
                                    point.x = closure_0.get();
                                    point.y = closure_1.get();
                                    tmpResult = runOnJSResult(point);
                                    return;
                                  }
                                }
                                class V {
                                  constructor() {
                                    result = closure_6.set(closure_0.get());
                                    result1 = closure_7.set(closure_1.get());
                                    return;
                                  }
                                }
                                class J {
                                  constructor() {
                                    value = closure_0.get();
                                    tmp2 = closure_10(value, closure_1.get());
                                    obj = { transform: null };
                                    obj1 = { translateX: null };
                                    ({ x, y } = tmp2);
                                    obj3 = closure_0(closure_2[13]);
                                    obj1.translateX = obj3.withSpring(x, closure_0(closure_2[14]).springUnclamped);
                                    items = [, ];
                                    items[0] = obj1;
                                    obj6 = { translateY: null };
                                    obj5 = closure_0(closure_2[13]);
                                    obj6.translateY = obj5.withSpring(y, closure_0(closure_2[14]).springUnclamped);
                                    items[1] = obj6;
                                    obj.transform = items;
                                    return obj;
                                  }
                                }
                                let point = { getClampedPosition: tmp10, x, y, withSpring: tmp(tmp2[13]).withSpring, springUnclamped: tmp(tmp2[14]).springUnclamped };
                                J.__closure = point;
                                J.__workletHash = 5273315246744;
                                J.__initData = __initData5;
                                const animatedStyle = obj5.useAnimatedStyle(J);
                                if (cResult[25] === animatedStyle) {
                                  if (cResult[26] === tmp4.widgetContainer) {
                                    let tmp27 = cResult[27];
                                  }
                                  if (cResult[28] === children) {
                                    if (cResult[29] === tmp27) {
                                      let tmp28 = cResult[30];
                                    }
                                    if (cResult[31] === tmp24) {
                                      if (cResult[32] === tmp28) {
                                        let tmp31 = cResult[33];
                                      }
                                      return tmp31;
                                    }
                                    class W {
                                      constructor() {
                                        obj = closure_0(closure_2[9]);
                                        point = { x: null, y: null };
                                        runOnJSResult = obj.runOnJS(onChangePosition);
                                        point.x = closure_0.get();
                                        point.y = closure_1.get();
                                        tmpResult = runOnJSResult(point);
                                        return;
                                      }
                                    }
                                    class V {
                                      constructor() {
                                        result = closure_6.set(closure_0.get());
                                        result1 = closure_7.set(closure_1.get());
                                        return;
                                      }
                                    }
                                    class J {
                                      constructor() {
                                        value = closure_0.get();
                                        tmp2 = closure_10(value, closure_1.get());
                                        obj = { transform: null };
                                        obj1 = { translateX: null };
                                        ({ x, y } = tmp2);
                                        obj3 = closure_0(closure_2[13]);
                                        obj1.translateX = obj3.withSpring(x, closure_0(closure_2[14]).springUnclamped);
                                        items = [, ];
                                        items[0] = obj1;
                                        obj6 = { translateY: null };
                                        obj5 = closure_0(closure_2[13]);
                                        obj6.translateY = obj5.withSpring(y, closure_0(closure_2[14]).springUnclamped);
                                        items[1] = obj6;
                                        obj.transform = items;
                                        return obj;
                                      }
                                    }
                                    tmp32[1] = tmp28;
                                    const tmp33 = sharedValue1(tmp(tmp2[12]).GestureDetector, tmp32);
                                    cResult[31] = tmp24;
                                    cResult[32] = tmp28;
                                    cResult[33] = tmp33;
                                    tmp31 = tmp33;
                                  }
                                  class W {
                                    constructor() {
                                      obj = closure_0(closure_2[9]);
                                      point = { x: null, y: null };
                                      runOnJSResult = obj.runOnJS(onChangePosition);
                                      point.x = closure_0.get();
                                      point.y = closure_1.get();
                                      tmpResult = runOnJSResult(point);
                                      return;
                                    }
                                  }
                                  class V {
                                    constructor() {
                                      result = closure_6.set(closure_0.get());
                                      result1 = closure_7.set(closure_1.get());
                                      return;
                                    }
                                  }
                                  class J {
                                    constructor() {
                                      value = closure_0.get();
                                      tmp2 = closure_10(value, closure_1.get());
                                      obj = { transform: null };
                                      obj1 = { translateX: null };
                                      ({ x, y } = tmp2);
                                      obj3 = closure_0(closure_2[13]);
                                      obj1.translateX = obj3.withSpring(x, closure_0(closure_2[14]).springUnclamped);
                                      items = [, ];
                                      items[0] = obj1;
                                      obj6 = { translateY: null };
                                      obj5 = closure_0(closure_2[13]);
                                      obj6.translateY = obj5.withSpring(y, closure_0(closure_2[14]).springUnclamped);
                                      items[1] = obj6;
                                      obj.transform = items;
                                      return obj;
                                    }
                                  }
                                  tmp29[1] = children;
                                  const tmp30 = sharedValue1(tmp7(tmp2[9]).View, tmp29);
                                  cResult[28] = children;
                                  cResult[29] = tmp27;
                                  cResult[30] = tmp30;
                                  tmp28 = tmp30;
                                }
                                let items = [tmp4.widgetContainer, animatedStyle];
                                cResult[25] = animatedStyle;
                                cResult[26] = tmp4.widgetContainer;
                                cResult[27] = items;
                                tmp27 = items;
                              }
                            }
                            class W {
                              constructor() {
                                obj = closure_0(closure_2[9]);
                                point = { x: null, y: null };
                                runOnJSResult = obj.runOnJS(onChangePosition);
                                point.x = closure_0.get();
                                point.y = closure_1.get();
                                tmpResult = runOnJSResult(point);
                                return;
                              }
                            }
                            class V {
                              constructor() {
                                result = closure_6.set(closure_0.get());
                                result1 = closure_7.set(closure_1.get());
                                return;
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
                            obj = closure_0(closure_2[9]);
                            point = { x: null, y: null };
                            runOnJSResult = obj.runOnJS(onChangePosition);
                            point.x = closure_0.get();
                            point.y = closure_1.get();
                            tmpResult = runOnJSResult(point);
                            return;
                          }
                        }
                        class V {
                          constructor() {
                            result = closure_6.set(closure_0.get());
                            result1 = closure_7.set(closure_1.get());
                            return;
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
                    result = closure_6.set(closure_0.get());
                    result1 = closure_7.set(closure_1.get());
                    return;
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
              result = closure_6.set(closure_0.get());
              result1 = closure_7.set(closure_1.get());
              return;
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
    value = closure_9.get();
    ({ width, height } = value);
    const rect = closure_8.get();
    const point = { x: ReanimatedRexport.clamp(arg0, rect.left + num, width - rect.right - contentWidth - num), y: null };
    point.y = ReanimatedRexport.clamp(arg1, rect.top + num, height - rect.bottom - contentHeight - num);
    return point;
  };
  tmp7 = importDefault;
  const tmpResult3 = require("ReanimatedRexport");
  fn.__closure = { windowDimensionsSharedValue: tmp9, insetsSharedValue: tmp8, clamp: require("ReanimatedRexport").clamp, dragBoundsPadding: num, contentWidth, contentHeight };
  fn.__workletHash = 7374875420235;
  fn.__initData = __initData;
  cResult[0] = contentHeight;
  cResult[1] = contentWidth;
  cResult[2] = num;
  cResult[3] = tmp8;
  cResult[4] = tmp9;
  cResult[5] = fn;
  tmp10 = fn;
}) : ((children) => {
  const x = children.x;
  _require = x;
  const y = children.y;
  importDefault = y;
  const contentWidth = children.contentWidth;
  const contentHeight = children.contentHeight;
  let num = children.dragBoundsPadding;
  if (num === undefined) {
    num = 0;
  }
  const onChangePosition = children.onChangePosition;
  const tmp = closure_11();
  const sharedValue = require("ReanimatedRexport").useSharedValue(x.get());
  let obj = require("ReanimatedRexport");
  const sharedValue1 = require("ReanimatedRexport").useSharedValue(y.get());
  const tmp4 = require("useSafeAreaInsetsSharedValue")();
  closure_8 = tmp4;
  const tmp5 = require("useWindowDimensionsSharedValue")();
  closure_9 = tmp5;
  const fn = function x(arg0, arg1) {
    value = closure_9.get();
    ({ width, height } = value);
    const rect = closure_8.get();
    const point = { x: ReanimatedRexport.clamp(arg0, rect.left + num, width - rect.right - contentWidth - num), y: null };
    point.y = ReanimatedRexport.clamp(arg1, rect.top + num, height - rect.bottom - contentHeight - num);
    return point;
  };
  let obj2 = require("ReanimatedRexport");
  fn.__closure = { windowDimensionsSharedValue: tmp5, insetsSharedValue: tmp4, clamp: require("ReanimatedRexport").clamp, dragBoundsPadding: num, contentWidth, contentHeight };
  fn.__workletHash = 3512555763276;
  fn.__initData = __initData6;
  let items = [contentHeight, contentWidth, num, tmp4, tmp5];
  const getClampedPosition = num.useCallback(fn, items);
  let obj3 = { windowDimensionsSharedValue: tmp5, insetsSharedValue: tmp4, clamp: require("ReanimatedRexport").clamp, dragBoundsPadding: num, contentWidth, contentHeight };
  const obj5 = { onActivate: null, onUpdate: null, onDeactivate: null };
  const fn2 = function w() {
    const result = sharedValue.set(closure_0.get());
    const result1 = sharedValue1.set(closure_1.get());
  };
  fn2.__closure = { originalX: sharedValue, x, originalY: sharedValue1, y };
  fn2.__workletHash = 4330167357170;
  fn2.__initData = __initData7;
  obj5.onActivate = fn2;
  class S {
    constructor(arg0) {
      sum = closure_6.get() + children.translationX;
      point = closure_10(sum, closure_7.get() + children.translationY);
      result = closure_0.set(point.x);
      result1 = closure_1.set(point.y);
      return;
    }
  }
  S.__closure = { getClampedPosition, originalX: sharedValue, originalY: sharedValue1, x, y };
  S.__workletHash = 1701310966937;
  S.__initData = __initData8;
  obj5.onUpdate = S;
  const fn3 = function y() {
    const point = { x: null, y: null };
    point.x = closure_0.get();
    point.y = closure_1.get();
    ReanimatedRexport.runOnJS(onChangePosition)(point);
  };
  let point = { runOnJS: require("ReanimatedRexport").runOnJS, onChangePosition, x, y };
  fn3.__closure = point;
  fn3.__workletHash = 4994953291436;
  fn3.__initData = __initData9;
  obj5.onDeactivate = fn3;
  const panGesture = require("LegacyBaseButton").usePanGesture(obj5);
  let obj4 = require("LegacyBaseButton");
  class P {
    constructor() {
      value = closure_0.get();
      tmp2 = closure_10(value, closure_1.get());
      obj = { transform: null };
      obj1 = { translateX: null };
      ({ x, y } = tmp2);
      obj3 = closure_0(closure_2[13]);
      obj1.translateX = obj3.withSpring(x, closure_0(closure_2[14]).springUnclamped);
      items = [, ];
      items[0] = obj1;
      obj6 = { translateY: null };
      obj5 = closure_0(closure_2[13]);
      obj6.translateY = obj5.withSpring(y, closure_0(closure_2[14]).springUnclamped);
      items[1] = obj6;
      obj.transform = items;
      return obj;
    }
  }
  const point1 = { getClampedPosition, x, y, withSpring: require("spring").withSpring, springUnclamped: require("springPresets").springUnclamped };
  P.__closure = point1;
  P.__workletHash = 12568239781868;
  P.__initData = __initData10;
  const animatedStyle = require("ReanimatedRexport").useAnimatedStyle(P);
  const obj6 = { gesture: panGesture, children: null };
  const obj8 = { style: null, children: children.children };
  const items1 = [tmp.widgetContainer, animatedStyle];
  obj8.style = items1;
  obj6.children = sharedValue1(require("ReanimatedRexport").View, obj8);
  return sharedValue1(require("LegacyBaseButton").GestureDetector, obj6);
});
ReactCompilerGating = fn(558);
let obj4 = { padding: nativeDefault.space.PX_8 };
size = fn(2);
let result = size.fileFinishedImporting("modules/screen_recording/native/ScreenRecordingPip.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t(currentSurveyConfig) {
      return currentSurveyConfig.currentSurveyConfig;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const tmp3 = useScreenRecordingStore(first);
  if (null == tmp3) {
    return null;
  } else if (cResult[1] !== tmp3) {
    const obj2 = { surveyConfig: tmp3 };
    const tmp7 = React5(ScreenRecordingPip, obj2);
    cResult[1] = tmp3;
    cResult[2] = tmp7;
  }
}) : (() => {
  const tmp = useScreenRecordingStore((currentSurveyConfig) => currentSurveyConfig.currentSurveyConfig);
  let tmp2 = null;
  if (null != tmp) {
    const obj = { surveyConfig: tmp };
    tmp2 = React5(ScreenRecordingPip, obj);
  }
  return tmp2;
});
