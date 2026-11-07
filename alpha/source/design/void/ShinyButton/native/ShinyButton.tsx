// Module ID: 16273
// Function ID: 16274
// Name: ShinyButton
// Dependencies: [32, 19, 17, 5141, 21, 5140, 504, 1652, 5370, 1190, 2]
// Exports: default

// Module 16273 (ShinyButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import _modDef1652 from "module_1652" /* 1652 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5141 */;
import createStyles from "createStyles" /* 5140 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let duration;

let items;
let size;
let AppState = react_native.AppState;
const jsx = Fragment.jsx;
let obj = { shinyButton: { overflow: "hidden" }, shineContainer: { width: "100%", height: "100%", position: "absolute", overflow: "hidden" }, shine: size, shineInner: { width: 16, height: "100%", backgroundColor: "rgba(255,255,255,0.1)" } };
size = { width: 56, height: "500%", transform: items, backgroundColor: "rgba(255,255,255,0.1)", top: "-100%", alignItems: "center" };
items = [{ rotate: "30deg" }];
let closure_8 = createStyles.createStyles(obj);
let closure_9 = { code: "(function ShinyButtonTsx1(){let[width,OFFSCREEN_OFFSET,withRepeat,withSequence,withTiming,withDelay,INITIAL_ANIMATION_DELAY,ANIMATION_DURATION]=this.__closure;if(width==null){return{transform:[{translateX:-OFFSCREEN_OFFSET}]};}return{transform:[{translateX:withRepeat(withSequence(withTiming(-OFFSCREEN_OFFSET,{duration:0},'animate-always'),withDelay(INITIAL_ANIMATION_DELAY,withTiming(width+OFFSCREEN_OFFSET,{duration:ANIMATION_DURATION},'animate-always'))),-1)}]};})" };
size = size_mod;
const result = size.fileFinishedImporting("design/void/ShinyButton/native/ShinyButton.tsx");

export default function ShinyButton(disabled) {
  let c8;
  let c9;
  let closure_5;
  let closure_6;
  let closure_7;
  let first;
  let items3;
  let shineDisabled;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp9;
  disabled = disabled.disabled;
  ({ submitting: importDefault, shineDisabled } = disabled);
  const style = disabled.style;
  if (shineDisabled === undefined) {
    shineDisabled = false;
  }
  ({ shineStyle: _slicedToArray, shineInnerStyle: react } = disabled);
  const merged = Object.assign(disabled, Object.assign({ style: 0, disabled: 0, submitting: 0, shineDisabled: 0, shineStyle: 0, shineInnerStyle: 0 }));
  closure_6 = undefined;
  c8 = undefined;
  c9 = undefined;
  let closure_10;
  function handleLayout(nativeEvent) {
    closure_6(nativeEvent.nativeEvent.layout.width);
  }
  const tmp2 = c8();
  AppState = tmp2;
  [first, closure_6] = react.useState(null);
  let obj = disabled(shineDisabled[6]);
  let items = [closure_6];
  duration = obj.useStateFromStores(items, () => closure_6.useReducedMotion, []);
  [c8, c9] = _slicedToArray(react.useState("active" === AppState.currentState), 2);
  const tmp6 = _slicedToArray(react.useState("active" === AppState.currentState), 2);
  const effect = react.useEffect(() => {
    let closure_0 = closure_5.addEventListener("change", (event) => {
      closure_1_9("active" === event);
    });
    return () => {
      closure_0.remove();
    };
  }, []);
  let items1 = [c9, first, 100, , , , , , ];
  const useAnimatedStyle = disabled(shineDisabled[7]).useAnimatedStyle;
  const tmp8 = disabled(shineDisabled[7]);
  items1[3] = disabled(shineDisabled[7]).withRepeat;
  items1[4] = disabled(shineDisabled[7]).withSequence;
  items1[5] = disabled(shineDisabled[8]).withTiming;
  items1[6] = disabled(shineDisabled[7]).withDelay;
  items1[7] = 750;
  items1[8] = 2000;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17] = items1;
  const tmp5 = shineDisabled;
  class ShinyButtonTsx1 {
    constructor() {
      let items;
      let items1;
      let obj3;
      let obj5;
      let tmp7;
      if (null == c0) {
        const obj = { transform: items };
        items = [{ translateX: -c1 }];
        obj3 = obj;
        const obj2 = { translateX: -c1 };
      } else {
        obj3 = { transform: items1 };
        const obj4 = { translateX: _undefined(_undefined2(tmp7, _undefined4(c6, _undefined3(tmp + c1, obj5, "animate-always"))), -1) };
        obj5 = { duration };
        items1 = [obj4];
        tmp7 = _undefined3(-c1, { duration: 0 }, "animate-always");
      }
      return obj3;
    }
  }
  let items2 = [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17];
  ShinyButtonTsx1.__closure = items2;
  ShinyButtonTsx1.__workletHash = 1149292223259;
  ShinyButtonTsx1.__initData = tmp9;
  closure_10 = useAnimatedStyle(ShinyButtonTsx1);
  let obj2 = {
    style: items3,
    disabled,
    renderShine() {
      let tmp = null;
      if (!disabled) {
        tmp = null;
        if (!importDefault) {
          tmp = null;
          if (!closure_7) {
            tmp = null;
            if (!shineDisabled) {
              tmp = null;
              if (c8) {
                const items = [closure_5.shineContainer, closure_10];
                const View = _modDef1652.View;
                const items1 = [closure_5.shine, _slicedToArray];
                const View2 = _modDef1652.View;
                const items2 = [closure_5.shineInner, react];
                tmp = <View onLayout={handleLayout} style={items}>{null}</View>;
              }
            }
          }
        }
      }
      return tmp;
    }
  };
  const tmp18 = require("Button/Button");
  const merged1 = Object.assign(merged);
  items3 = [style, tmp2.shinyButton];
  return duration(tmp18, obj2);
};
