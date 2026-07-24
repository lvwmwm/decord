// Module ID: 13049
// Function ID: 100868
// Name: items
// Dependencies: [57, 31, 27, 4122, 33, 4130, 566, 3991, 4131, 1276, 2]
// Exports: default

// Module 13049 (items)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { AppState } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = { width: 56, height: "500%", transform: null, backgroundColor: "rgba(255,255,255,0.1)", top: "-100%", alignItems: "center" };
let items = [{ rotate: "30deg" }];
_createForOfIteratorHelperLoose.transform = items;
let closure_8 = _createForOfIteratorHelperLoose.createStyles({ shinyButton: { overflow: "hidden" }, shineContainer: { width: "100%", height: "100%", position: "absolute", overflow: "hidden" }, shine: _createForOfIteratorHelperLoose, shineInner: { width: 16, height: "100%", backgroundColor: "rgba(255,255,255,0.1)" } });
let closure_9 = { code: "function ShinyButtonTsx1(){const{width,OFFSCREEN_OFFSET,withRepeat,withSequence,withTiming,withDelay,INITIAL_ANIMATION_DELAY,ANIMATION_DURATION}=this.__closure;if(width==null){return{transform:[{translateX:-OFFSCREEN_OFFSET}]};}return{transform:[{translateX:withRepeat(withSequence(withTiming(-OFFSCREEN_OFFSET,{duration:0},'animate-always'),withDelay(INITIAL_ANIMATION_DELAY,withTiming(width+OFFSCREEN_OFFSET,{duration:ANIMATION_DURATION},'animate-always'))),-1)}]};}" };
const result = require("get ActivityIndicator").fileFinishedImporting("design/void/ShinyButton/native/ShinyButton.tsx");

export default function ShinyButton(disabled) {
  let c10;
  let c9;
  let _slicedToArray;
  let result;
  let importDefault;
  let shineDisabled;
  disabled = disabled.disabled;
  ({ submitting: importDefault, shineDisabled } = disabled);
  if (shineDisabled === undefined) {
    shineDisabled = false;
  }
  ({ shineStyle: _slicedToArray, shineInnerStyle: result } = disabled);
  let obj = { style: 0, disabled: 0, submitting: 0, shineDisabled: 0, shineStyle: 0, shineInnerStyle: 0 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(disabled, obj);
  let AppState;
  let first;
  let jsx;
  let callback2;
  c9 = undefined;
  c10 = undefined;
  let closure_11;
  function handleLayout(nativeEvent) {
    callback(nativeEvent.nativeEvent.layout.width);
  }
  const tmp3 = callback2();
  AppState = tmp3;
  const tmp4 = callback(React.useState(null), 2);
  first = tmp4[0];
  jsx = tmp4[1];
  let items = [first];
  callback2 = disabled(shineDisabled[6]).useStateFromStores(items, () => first.useReducedMotion, []);
  let obj2 = disabled(shineDisabled[6]);
  [c9, c10] = callback(React.useState("active" === AppState.currentState), 2);
  const effect = React.useEffect(() => {
    let closure_0 = _undefined.addEventListener("change", (arg0) => {
      outer1_10("active" === arg0);
    });
    return () => {
      closure_0.remove();
    };
  }, []);
  const tmp6 = callback(React.useState("active" === AppState.currentState), 2);
  const fn = function p() {
    if (null == first) {
      let obj = {};
      obj = { translateX: -100 };
      const items = [obj];
      obj.transform = items;
    } else {
      obj = {};
      const obj1 = {};
      const obj5 = disabled(shineDisabled[7]);
      const obj6 = disabled(shineDisabled[7]);
      const obj2 = { duration: 0 };
      const obj7 = disabled(shineDisabled[8]);
      const withTimingResult = disabled(shineDisabled[8]).withTiming(-100, obj2, "animate-always");
      const obj9 = disabled(shineDisabled[7]);
      const obj3 = { duration: 2000 };
      obj1.translateX = obj5.withRepeat(obj6.withSequence(withTimingResult, obj9.withDelay(750, disabled(shineDisabled[8]).withTiming(first + 100, obj3, "animate-always"))), -1);
      const items1 = [obj1];
      obj.transform = items1;
      const obj10 = disabled(shineDisabled[8]);
    }
    return obj;
  };
  obj = { width: first, OFFSCREEN_OFFSET: 100, withRepeat: disabled(shineDisabled[7]).withRepeat, withSequence: disabled(shineDisabled[7]).withSequence, withTiming: disabled(shineDisabled[8]).withTiming, withDelay: disabled(shineDisabled[7]).withDelay, INITIAL_ANIMATION_DELAY: 750, ANIMATION_DURATION: 2000 };
  fn.__closure = obj;
  fn.__workletHash = 5550564727650;
  fn.__initData = c9;
  closure_11 = disabled(shineDisabled[7]).useAnimatedStyle(fn);
  obj = {};
  let obj3 = disabled(shineDisabled[7]);
  const merged1 = Object.assign(merged);
  let items1 = [disabled.style, tmp3.shinyButton];
  obj["style"] = items1;
  obj["disabled"] = disabled;
  obj["renderShine"] = function renderShine() {
    let tmp = null;
    if (!disabled) {
      tmp = null;
      if (!closure_1) {
        tmp = null;
        if (!closure_8) {
          tmp = null;
          if (!shineDisabled) {
            tmp = null;
            if (c9) {
              let obj = { onLayout: handleLayout };
              const items = [_undefined.shineContainer, closure_11];
              obj.style = items;
              obj = {};
              const items1 = [_undefined.shine, _slicedToArray];
              obj.style = items1;
              obj = {};
              const items2 = [_undefined.shineInner, result];
              obj.style = items2;
              obj.children = callback(outer1_1(shineDisabled[7]).View, obj);
              obj.children = callback(outer1_1(shineDisabled[7]).View, obj);
              tmp = callback(outer1_1(shineDisabled[7]).View, obj);
            }
          }
        }
      }
    }
    return tmp;
  };
  return jsx(importDefault(shineDisabled[9]), {});
};
