// Module ID: 14317
// Function ID: 14318
// Name: ShinyButton/ShinyButton
// Dependencies: [32, 109, 19, 17, 5080, 21, 5091, 558, 576, 504, 4811, 5092, 1203, 2]

// Module 14317 (ShinyButton/ShinyButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Button_ButtonDefault from "Button/Button" /* 1203 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4811 */;
import timing from "timing" /* 5092 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import _objectWithoutProperties_mod from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import AccessibilityStore_mod from "AccessibilityStore" /* 5080 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const ReanimatedRexportDefault = ReanimatedRexport;
let _require, dependencyMap, importDefault;

let items;
let size;
let closure_3 = ["style", "disabled", "submitting", "shineDisabled", "shineStyle", "shineInnerStyle"];
let _slicedToArray = _slicedToArray_mod;
let _objectWithoutProperties = _objectWithoutProperties_mod;
let AppState = react_native.AppState;
let AccessibilityStore = AccessibilityStore_mod;
let jsx = Fragment.jsx;
let c10 = 2000;
let c11 = 750;
let c12 = 100;
let obj = { shinyButton: { overflow: "hidden" }, shineContainer: { width: "100%", height: "100%", position: "absolute", overflow: "hidden" }, shine: size, shineInner: { width: 16, height: "100%", backgroundColor: "rgba(255,255,255,0.1)" } };
size = { width: 56, height: "500%", transform: items, backgroundColor: "rgba(255,255,255,0.1)", top: "-100%", alignItems: "center" };
items = [{ rotate: "30deg" }];
let closure_13 = createStyles.createStyles(obj);
const __initData = { code: "function ShinyButtonTsx1(){const{width,OFFSCREEN_OFFSET,withRepeat,withSequence,withTiming,withDelay,INITIAL_ANIMATION_DELAY,ANIMATION_DURATION}=this.__closure;if(width==null){return{transform:[{translateX:-OFFSCREEN_OFFSET}]};}return{transform:[{translateX:withRepeat(withSequence(withTiming(-OFFSCREEN_OFFSET,{duration:0},\"animate-always\"),withDelay(INITIAL_ANIMATION_DELAY,withTiming(width+OFFSCREEN_OFFSET,{duration:ANIMATION_DURATION},\"animate-always\"))),-1)}]};}" };
const __initData2 = { code: "function ShinyButtonTsx2(){const{width,OFFSCREEN_OFFSET,withRepeat,withSequence,withTiming,withDelay,INITIAL_ANIMATION_DELAY,ANIMATION_DURATION}=this.__closure;if(width==null){return{transform:[{translateX:-OFFSCREEN_OFFSET}]};}return{transform:[{translateX:withRepeat(withSequence(withTiming(-OFFSCREEN_OFFSET,{duration:0},'animate-always'),withDelay(INITIAL_ANIMATION_DELAY,withTiming(width+OFFSCREEN_OFFSET,{duration:ANIMATION_DURATION},'animate-always'))),-1)}]};}" };
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function ShinyButton(shineInnerStyle) {
  let animatedStyle;
  let closure_1;
  let closure_2;
  let closure_4;
  let closure_5;
  let disabled;
  let first1;
  let onLayout;
  let shineDisabled;
  let shineStyle;
  let style;
  let submitting;
  let tmp10;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp27;
  let tmp28;
  let tmp31;
  let tmp4;
  let tmp5;
  let tmp7;
  let tmp8;
  let tmp9;
  let width;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(30);
  if (cResult[0] !== shineInnerStyle) {
    ({ style, disabled, submitting, shineDisabled, shineStyle } = shineInnerStyle);
    importDefault = shineStyle;
    shineInnerStyle = shineInnerStyle.shineInnerStyle;
    _require = shineInnerStyle;
    const tmp13 = _objectWithoutProperties(shineInnerStyle, width);
    cResult[0] = shineInnerStyle;
    cResult[1] = disabled;
    cResult[2] = tmp13;
    cResult[3] = shineInnerStyle;
    cResult[4] = shineStyle;
    cResult[5] = style;
    cResult[6] = submitting;
    cResult[7] = shineDisabled;
    tmp10 = shineDisabled;
    tmp9 = submitting;
    tmp8 = style;
    tmp7 = shineStyle;
    tmp5 = tmp13;
    tmp4 = disabled;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    _require = cResult[3];
    importDefault = cResult[4];
    tmp8 = cResult[5];
    tmp9 = cResult[6];
    tmp10 = cResult[7];
  }
  const tmp14 = undefined !== tmp10 && tmp10;
  const tmp15 = closure_13();
  dependencyMap = tmp15;
  let obj2 = first1;
  const tmp17 = _slicedToArray(first1.useState(null), 2);
  width = tmp17[0];
  const tmp16 = _slicedToArray;
  _slicedToArray = tmp17[1];
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [AccessibilityStore];
    class R {
      constructor() {
        return onLayout.useReducedMotion;
      }
    }
    let items1 = [];
    cResult[8] = items;
    cResult[9] = R;
    cResult[10] = items1;
    tmp21 = items1;
    tmp20 = R;
    tmp19 = items;
  } else {
    tmp19 = cResult[8];
    tmp20 = cResult[9];
    tmp21 = cResult[10];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp19, tmp20, tmp21);
  const tmp16Result = tmp16(obj2.useState("active" === animatedStyle.currentState), 2);
  _objectWithoutProperties = tmp16Result[1];
  let tmp26 = !tmp4;
  first1 = tmp16Result[0];
  if (!tmp4) {
    tmp26 = !tmp9;
  }
  if (tmp26) {
    tmp26 = !stateFromStores;
  }
  if (tmp26) {
    tmp26 = !tmp14;
  }
  if (tmp26) {
    tmp26 = first1;
  }
  first1 = tmp26;
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function q() {
      closure_0 = animatedStyle.addEventListener("change", (event) => {
        closure_1_5("active" === event);
      });
      return () => {
        closure_0.remove();
      };
    };
    let items2 = [];
    class R {
      constructor() {
        return onLayout.useReducedMotion;
      }
    }
    cResult[12] = items2;
    tmp28 = items2;
    tmp27 = fn;
  } else {
    tmp27 = cResult[11];
    tmp28 = cResult[12];
  }
  const effect = obj2.useEffect(tmp27, tmp28);
  const tmpResult2 = tmp(4811);
  class H {
    constructor() {
      let items;
      let items1;
      let obj2;
      let obj5;
      let obj6;
      let withDelay;
      let withRepeat;
      let withSequence;
      let withTimingResult;
      if (null == first) {
        const obj = { transform: items };
        items = [{ translateX: -100 }];
        obj2 = obj;
      } else {
        obj2 = { transform: items1 };
        const obj3 = { translateX: withRepeat(withSequence(withTimingResult, withDelay(c11, obj5.withTiming(tmp + c12, obj6, "animate-always"))), -1) };
        withRepeat = ReanimatedRexport.withRepeat;
        ReanimatedRexport;
        withSequence = ReanimatedRexport.withSequence;
        ReanimatedRexport;
        const obj4 = timing;
        withTimingResult = obj4.withTiming(-100, { duration: 0 }, "animate-always");
        withDelay = ReanimatedRexport.withDelay;
        ReanimatedRexport;
        obj6 = { duration };
        items1 = [obj3];
        obj5 = timing;
      }
      return obj2;
    }
  }
  let obj3 = { width, OFFSCREEN_OFFSET, withRepeat: tmp(4811).withRepeat, withSequence: tmp(4811).withSequence, withTiming: tmp(5092).withTiming, withDelay: tmp(4811).withDelay, INITIAL_ANIMATION_DELAY, ANIMATION_DURATION: v2000 };
  H.__closure = obj3;
  H.__workletHash = 3002595774498;
  H.__initData = __initData;
  animatedStyle = tmpResult2.useAnimatedStyle(H);
  if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
    function handleLayout(nativeEvent) {
      closure_4(nativeEvent.nativeEvent.layout.width);
    }
    cResult[13] = handleLayout;
    class R {
      constructor() {
        return onLayout.useReducedMotion;
      }
    }
  } else {
    tmp31 = cResult[13];
  }
  AccessibilityStore = tmp31;
  if (cResult[14] === animatedStyle) {
    if (cResult[15] === tmp6) {
      if (cResult[16] === tmp7) {
        if (cResult[17] === tmp26) {
          if (cResult[18] === tmp15.shine) {
            if (cResult[19] === tmp15.shineContainer) {
              let tmp32;
              if (cResult[20] === tmp15.shineInner) {
                tmp32 = cResult[21];
              }
              if (cResult[22] === tmp8) {
                let tmp33;
                if (cResult[23] === tmp15.shinyButton) {
                  tmp33 = cResult[24];
                }
                if (cResult[25] === tmp4) {
                  if (cResult[26] === tmp5) {
                    if (cResult[27] === tmp32) {
                      let tmp34;
                      if (cResult[28] === tmp33) {
                        tmp34 = cResult[29];
                      }
                      return tmp34;
                    }
                  }
                }
                class R {
                  constructor() {
                    return onLayout.useReducedMotion;
                  }
                }
                Button_ButtonDefault;
                const merged = Object.assign(tmp5);
                const tmp40 = <tmp36 style={tmp33} disabled={tmp4} renderShine={tmp32} />;
                cResult[25] = tmp4;
                cResult[26] = tmp5;
                cResult[27] = tmp32;
                cResult[28] = tmp33;
                cResult[29] = tmp40;
                tmp34 = tmp40;
              }
              const items3 = [, ];
              class R {
                constructor() {
                  return onLayout.useReducedMotion;
                }
              }
              items3[1] = tmp15.shinyButton;
              cResult[22] = tmp8;
              cResult[23] = tmp15.shinyButton;
              cResult[24] = items3;
              tmp33 = items3;
            }
          }
        }
      }
    }
  }
  function renderShine() {
    let tmp = null;
    if (first1) {
      const items = [closure_2.shineContainer, animatedStyle];
      const View = ReanimatedRexportDefault.View;
      const items1 = [closure_2.shine, closure_1];
      const View2 = ReanimatedRexportDefault.View;
      const items2 = [closure_2.shineInner, closure_0];
      tmp = <View onLayout={onLayout} style={items}>{null}</View>;
    }
    return tmp;
  }
  cResult[14] = animatedStyle;
  cResult[15] = tmp6;
  cResult[16] = tmp7;
  cResult[17] = tmp26;
  cResult[18] = tmp15.shine;
  cResult[19] = tmp15.shineContainer;
  cResult[20] = tmp15.shineInner;
  cResult[21] = renderShine;
  tmp32 = renderShine;
}) : (function ShinyButton(disabled) {
  let c10;
  let c9;
  let closure_11;
  let closure_7;
  let shineDisabled;
  let width;
  disabled = disabled.disabled;
  ({ submitting: importDefault, shineDisabled } = disabled);
  const style = disabled.style;
  if (shineDisabled === undefined) {
    shineDisabled = false;
  }
  ({ shineStyle: closure_3, shineInnerStyle: _slicedToArray } = disabled);
  const merged = Object.assign(disabled, Object.assign({ style: 0, disabled: 0, submitting: 0, shineDisabled: 0, shineStyle: 0, shineInnerStyle: 0 }));
  width = undefined;
  AppState = undefined;
  let useReducedMotion;
  jsx = undefined;
  let v2000;
  INITIAL_ANIMATION_DELAY = undefined;
  function handleLayout(nativeEvent) {
    closure_7(nativeEvent.nativeEvent.layout.width);
  }
  const tmp2 = closure_13();
  let closure_5 = tmp2;
  [width, AppState] = width.useState(null);
  let obj = disabled(shineDisabled[9]);
  let items = [useReducedMotion];
  useReducedMotion = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion, []);
  const tmp5 = _slicedToArray(width.useState("active" === AppState.currentState), 2);
  [c9, c10] = tmp5;
  const effect = width.useEffect(() => {
    let closure_0 = closure_7.addEventListener("change", (event) => {
      duration("active" === event);
    });
    return () => {
      closure_0.remove();
    };
  }, []);
  let obj2 = disabled(shineDisabled[10]);
  const fn = function p() {
    let items;
    let items1;
    let obj2;
    let obj5;
    let obj6;
    let withDelay;
    let withRepeat;
    let withSequence;
    let withTimingResult;
    if (null == first) {
      const obj = { transform: items };
      items = [{ translateX: -100 }];
      obj2 = obj;
    } else {
      obj2 = { transform: items1 };
      const obj3 = { translateX: withRepeat(withSequence(withTimingResult, withDelay(c11, obj5.withTiming(tmp + c12, obj6, "animate-always"))), -1) };
      withRepeat = ReanimatedRexport.withRepeat;
      ReanimatedRexport;
      withSequence = ReanimatedRexport.withSequence;
      ReanimatedRexport;
      const obj4 = timing;
      withTimingResult = obj4.withTiming(-100, { duration: 0 }, "animate-always");
      withDelay = ReanimatedRexport.withDelay;
      ReanimatedRexport;
      obj6 = { duration };
      items1 = [obj3];
      obj5 = timing;
    }
    return obj2;
  };
  let obj3 = { width, OFFSCREEN_OFFSET: handleLayout, withRepeat: disabled(shineDisabled[10]).withRepeat, withSequence: disabled(shineDisabled[10]).withSequence, withTiming: disabled(shineDisabled[11]).withTiming, withDelay: disabled(shineDisabled[10]).withDelay, INITIAL_ANIMATION_DELAY, ANIMATION_DURATION: v2000 };
  fn.__closure = obj3;
  fn.__workletHash = 14318156259457;
  fn.__initData = __initData2;
  INITIAL_ANIMATION_DELAY = obj2.useAnimatedStyle(fn);
  const tmp7 = require("Button/Button");
  const merged1 = Object.assign(merged);
  let items1 = [style, tmp2.shinyButton];
  return <tmp7 style={items1} disabled={disabled} renderShine={function renderShine() {
    let tmp = null;
    if (!disabled) {
      tmp = null;
      if (!importDefault) {
        tmp = null;
        if (!useReducedMotion) {
          tmp = null;
          if (!shineDisabled) {
            tmp = null;
            if (c9) {
              const items = [closure_5.shineContainer, closure_11];
              const View = ReanimatedRexportDefault.View;
              const items1 = [closure_5.shine, closure_3];
              const View2 = ReanimatedRexportDefault.View;
              const items2 = [closure_5.shineInner, _slicedToArray];
              tmp = <View onLayout={handleLayout} style={items}>{null}</View>;
            }
          }
        }
      }
    }
    return tmp;
  }} />;
});
size = size_mod;
const result = size.fileFinishedImporting("design/void/ShinyButton/native/ShinyButton.tsx");

export default tmp2;
