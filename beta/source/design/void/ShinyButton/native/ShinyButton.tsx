// Module ID: 13627
// Function ID: 13628
// Name: ShinyButton
// Dependencies: [32, 19, 17, 4825, 21, 4836, 504, 4566, 4837, 1180, 2]
// Exports: default

// Module 13627 (ShinyButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import timing from "timing" /* 4837 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const ReanimatedRexportDefault = ReanimatedRexport;

let items;
let size;
let AppState = react_native.AppState;
let jsx = Fragment.jsx;
let obj = { shinyButton: { overflow: "hidden" }, shineContainer: { width: "100%", height: "100%", position: "absolute", overflow: "hidden" }, shine: size, shineInner: { width: 16, height: "100%", backgroundColor: "rgba(255,255,255,0.1)" } };
size = { width: 56, height: "500%", transform: items, backgroundColor: "rgba(255,255,255,0.1)", top: "-100%", alignItems: "center" };
items = [{ rotate: "30deg" }];
let closure_8 = createStyles.createStyles(obj);
let __initData = { code: "function ShinyButtonTsx1(){const{width,OFFSCREEN_OFFSET,withRepeat,withSequence,withTiming,withDelay,INITIAL_ANIMATION_DELAY,ANIMATION_DURATION}=this.__closure;if(width==null){return{transform:[{translateX:-OFFSCREEN_OFFSET}]};}return{transform:[{translateX:withRepeat(withSequence(withTiming(-OFFSCREEN_OFFSET,{duration:0},'animate-always'),withDelay(INITIAL_ANIMATION_DELAY,withTiming(width+OFFSCREEN_OFFSET,{duration:ANIMATION_DURATION},'animate-always'))),-1)}]};}" };
size = size_mod;
const result = size.fileFinishedImporting("design/void/ShinyButton/native/ShinyButton.tsx");

export default function ShinyButton(disabled) {
  let c10;
  let c9;
  let closure_5;
  let closure_7;
  let shineDisabled;
  let width;
  disabled = disabled.disabled;
  ({ submitting: importDefault, shineDisabled } = disabled);
  const style = disabled.style;
  if (shineDisabled === undefined) {
    shineDisabled = false;
  }
  ({ shineStyle: _slicedToArray, shineInnerStyle: react } = disabled);
  const merged = Object.assign(disabled, Object.assign({ style: 0, disabled: 0, submitting: 0, shineDisabled: 0, shineStyle: 0, shineInnerStyle: 0 }));
  width = undefined;
  jsx = undefined;
  closure_8 = undefined;
  __initData = undefined;
  c10 = undefined;
  function handleLayout(nativeEvent) {
    closure_7(nativeEvent.nativeEvent.layout.width);
  }
  const tmp2 = closure_8();
  AppState = tmp2;
  [width, jsx] = react.useState(null);
  let obj = disabled(shineDisabled[6]);
  let items = [width];
  closure_8 = obj.useStateFromStores(items, () => first.useReducedMotion, []);
  const tmp5 = _slicedToArray(react.useState("active" === AppState.currentState), 2);
  [c9, c10] = tmp5;
  const effect = react.useEffect(() => {
    let closure_0 = closure_5.addEventListener("change", (event) => {
      closure_1_10("active" === event);
    });
    return () => {
      closure_0.remove();
    };
  }, []);
  let obj2 = disabled(shineDisabled[7]);
  const fn = function p() {
    let items;
    let items1;
    let obj2;
    let obj5;
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
      const obj3 = { translateX: withRepeat(withSequence(withTimingResult, withDelay(750, obj5.withTiming(tmp + 100, { duration: 2000 }, "animate-always"))), -1) };
      withRepeat = ReanimatedRexport.withRepeat;
      ReanimatedRexport;
      withSequence = ReanimatedRexport.withSequence;
      ReanimatedRexport;
      const obj4 = timing;
      withTimingResult = obj4.withTiming(-100, { duration: 0 }, "animate-always");
      withDelay = ReanimatedRexport.withDelay;
      ReanimatedRexport;
      items1 = [obj3];
      obj5 = timing;
    }
    return obj2;
  };
  let obj3 = { width, OFFSCREEN_OFFSET: 100, withRepeat: disabled(shineDisabled[7]).withRepeat, withSequence: disabled(shineDisabled[7]).withSequence, withTiming: disabled(shineDisabled[8]).withTiming, withDelay: disabled(shineDisabled[7]).withDelay, INITIAL_ANIMATION_DELAY: 750, ANIMATION_DURATION: 2000 };
  fn.__closure = obj3;
  fn.__workletHash = 5550564727650;
  fn.__initData = __initData;
  let closure_11 = obj2.useAnimatedStyle(fn);
  const tmp7 = require("Button/Button");
  const merged1 = Object.assign(merged);
  let items1 = [style, tmp2.shinyButton];
  return <tmp7 style={items1} disabled={disabled} renderShine={function renderShine() {
    let tmp = null;
    if (!disabled) {
      tmp = null;
      if (!importDefault) {
        tmp = null;
        if (!closure_8) {
          tmp = null;
          if (!shineDisabled) {
            tmp = null;
            if (c9) {
              const items = [closure_5.shineContainer, closure_11];
              const View = ReanimatedRexportDefault.View;
              const items1 = [closure_5.shine, _slicedToArray];
              const View2 = ReanimatedRexportDefault.View;
              const items2 = [closure_5.shineInner, react];
              tmp = <View onLayout={handleLayout} style={items}>{null}</View>;
            }
          }
        }
      }
    }
    return tmp;
  }} />;
};
