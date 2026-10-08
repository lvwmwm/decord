// Module ID: 9373
// Function ID: 9374
// Name: BurstReactionToggle
// Dependencies: [19, 17, 5079, 2060, 21, 4810, 558, 576, 504, 4778, 587, 5091, 5374, 5090, 9374, 1126, 9342, 2]

// Module 9373 (BurstReactionToggle)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2060 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4810 */;
import timing from "timing" /* 5091 */;
import spring from "spring" /* 5374 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5079 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import createStyles from "createStyles" /* 5090 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault, set, set2;

let Easing;
let size;
const Pressable = react_native.Pressable;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
let obj = { duration: 100, easing: Easing.out(ReanimatedRexport.Easing.quad) };
Easing = ReanimatedRexport.Easing;
let closure_9 = { stiffness: 750, mass: 2.5, damping: 70 };
const __initData = { code: "function BurstReactionToggleTsx1(){const{reducedMotion,targetBackgroundColor,backgroundColor,rotation}=this.__closure;const _backgroundColor=reducedMotion?targetBackgroundColor:backgroundColor.get();const _rotation=reducedMotion?0:rotation.get();return{backgroundColor:_backgroundColor,transform:[{rotate:_rotation+\"deg\"}]};}" };
const __initData2 = { code: "function BurstReactionToggleTsx2(){const{reducedMotion,targetBackgroundColor,backgroundColor,rotation}=this.__closure;const _backgroundColor=reducedMotion?targetBackgroundColor:backgroundColor.get();const _rotation=reducedMotion?0:rotation.get();return{backgroundColor:_backgroundColor,transform:[{rotate:_rotation+\"deg\"}]};}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function useBurstToggleStyles(arg0) {
  let num3;
  let stateFromStores;
  let str;
  let tmp4;
  let tmp5;
  let useReducedMotion;
  obj = stateFromStores(num3[7]);
  const cResult = obj.c(10);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [AccessibilityStore];
    const fn = function c() {
      return useReducedMotion.useReducedMotion;
    };
    let num = 0;
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = stateFromStores(num3[8]);
  stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  const useToken = tmp(tmp2[9]).useToken;
  stateFromStores(num3[9]);
  const colors = str(tmp2[10]).colors;
  str = useToken(arg0 ? colors.BACKGROUND_BRAND : colors.INPUT_BACKGROUND_DEFAULT);
  if (str == null) {
    str = "";
  }
  num3 = 0;
  if (arg0) {
    num3 = 360;
  }
  const tmpResult6 = stateFromStores(num3[5]);
  const sharedValue = tmpResult6.useSharedValue(str);
  const tmpResult7 = stateFromStores(num3[5]);
  const sharedValue1 = tmpResult7.useSharedValue(num3);
  const tmpResult8 = stateFromStores(num3[5]);
  class T {
    constructor() {
      let items;
      let value;
      if (stateFromStores) {
        value = str;
      } else {
        value = sharedValue.get();
      }
      let num = 0;
      obj = { backgroundColor: value, transform: items };
      if (!stateFromStores) {
        num = sharedValue1.get();
      }
      items = [{ rotate: "" + num + "deg" }];
      ({ rotate: "" + num + "deg" });
      return obj;
    }
  }
  T.__closure = { reducedMotion: stateFromStores, targetBackgroundColor: str, backgroundColor: sharedValue, rotation: sharedValue1 };
  T.__workletHash = 1525758595013;
  T.__initData = __initData;
  const animatedStyle = tmpResult8.useAnimatedStyle(T);
  if (cResult[2] === sharedValue) {
    if (cResult[3] === sharedValue1) {
      if (cResult[4] === str) {
        let tmp12;
        let tmp13;
        let tmp16;
        if (cResult[5] === num3) {
          tmp12 = cResult[6];
          tmp13 = cResult[7];
        }
        const effect = sharedValue.useEffect(tmp12, tmp13);
        if (cResult[8] !== animatedStyle) {
          let obj2 = { containerStyle: animatedStyle };
          cResult[8] = animatedStyle;
          cResult[9] = obj2;
          tmp16 = obj2;
        } else {
          tmp16 = cResult[9];
        }
        return tmp16;
      }
    }
  }
  const fn2 = function f() {
    set = sharedValue.set;
    obj = timing;
    const result = set(obj.withTiming(str, obj));
    set2 = sharedValue1.set;
    const obj2 = spring;
    set2(obj2.withSpring(num3, closure_9));
  };
  const items1 = [sharedValue, str, sharedValue1, num3];
  cResult[2] = sharedValue;
  cResult[3] = sharedValue1;
  cResult[4] = str;
  cResult[5] = num3;
  cResult[6] = fn2;
  cResult[7] = items1;
  tmp13 = items1;
  tmp12 = fn2;
}) : (function useBurstToggleStyles(arg0) {
  let num;
  let stateFromStores;
  let str;
  let useReducedMotion;
  obj = stateFromStores(num[8]);
  let items = [AccessibilityStore];
  stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const useToken = stateFromStores(num[9]).useToken;
  const tmp4 = stateFromStores(num[9]);
  const colors = str(num[10]).colors;
  str = useToken(arg0 ? colors.BACKGROUND_BRAND : colors.INPUT_BACKGROUND_DEFAULT);
  if (str == null) {
    str = "";
  }
  num = 0;
  if (arg0) {
    num = 360;
  }
  const tmpResult = stateFromStores(num[5]);
  const sharedValue = tmpResult.useSharedValue(str);
  const tmpResult3 = stateFromStores(num[5]);
  const sharedValue1 = tmpResult3.useSharedValue(num);
  const fn = function s() {
    let items;
    let value;
    if (stateFromStores) {
      value = str;
    } else {
      value = sharedValue.get();
    }
    num = 0;
    obj = { backgroundColor: value, transform: items };
    if (!stateFromStores) {
      num = sharedValue1.get();
    }
    items = [{ rotate: "" + num + "deg" }];
    ({ rotate: "" + num + "deg" });
    return obj;
  };
  fn.__closure = { reducedMotion: stateFromStores, targetBackgroundColor: str, backgroundColor: sharedValue, rotation: sharedValue1 };
  fn.__workletHash = 5208702098150;
  fn.__initData = __initData2;
  const items1 = [sharedValue, str, sharedValue1, num];
  const tmpResult4 = stateFromStores(num[5]);
  const containerStyle = tmpResult4.useAnimatedStyle(fn);
  const effect = sharedValue.useEffect(() => {
    set = sharedValue.set;
    obj = timing;
    const result = set(obj.withTiming(str, obj));
    set2 = sharedValue1.set;
    const obj2 = spring;
    set2(obj2.withSpring(num, closure_9));
  }, items1);
  return { containerStyle };
});
let obj2 = { container: size };
size = { borderRadius: nativeDefault.modules.button.BORDER_RADIUS, padding: 8, marginLeft: 8, width: 40, height: 40 };
let closure_13 = createStyles.createStyles(obj2);
ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function BurstReactionToggle(onPress) {
  let INTERACTIVE_TEXT_DEFAULT;
  let closure_1;
  let tmp6;
  obj = onPress(576);
  const cResult = obj.c(20);
  onPress = onPress.onPress;
  const isActive = onPress.isActive;
  const tmp4 = closure_13();
  const colors = nativeDefault.colors;
  if (isActive) {
    INTERACTIVE_TEXT_DEFAULT = colors.WHITE;
    tmp6 = tmp5;
  } else {
    INTERACTIVE_TEXT_DEFAULT = colors.INTERACTIVE_TEXT_DEFAULT;
    tmp6 = tmp5;
  }
  const ref = react.useRef(null);
  const tmp8 = tmp6(9374)(ref);
  importDefault = tmp8;
  if (cResult[0] === tmp8) {
    let tmp9;
    let tmp11;
    let tmp13;
    if (cResult[1] === onPress) {
      tmp9 = cResult[2];
    }
    const containerStyle = closure_12(isActive).containerStyle;
    if (cResult[3] !== isActive) {
      let stringResult;
      const intl = tmp(1126).intl;
      const string = intl.string;
      const t = tmp(1126).t;
      if (isActive) {
        stringResult = string(t["5cRA/b"]);
      } else {
        stringResult = string(t.buV4av);
      }
      cResult[3] = isActive;
      cResult[4] = stringResult;
      tmp11 = stringResult;
    } else {
      tmp11 = cResult[4];
    }
    if (cResult[5] !== isActive) {
      const obj2 = { checked: isActive };
      cResult[5] = isActive;
      cResult[6] = obj2;
      tmp13 = obj2;
    } else {
      tmp13 = cResult[6];
    }
    if (cResult[7] === containerStyle) {
      let tmp14;
      let tmp15;
      if (cResult[8] === tmp4.container) {
        tmp14 = cResult[9];
      }
      if (cResult[10] !== INTERACTIVE_TEXT_DEFAULT) {
        const tmp17 = jsx(onPress(9342).SuperReactionIcon, { color: INTERACTIVE_TEXT_DEFAULT });
        cResult[10] = INTERACTIVE_TEXT_DEFAULT;
        cResult[11] = tmp17;
        tmp15 = tmp17;
      } else {
        tmp15 = cResult[11];
      }
      if (cResult[12] === tmp14) {
        let tmp18;
        if (cResult[13] === tmp15) {
          tmp18 = cResult[14];
        }
        if (cResult[15] === tmp9) {
          if (cResult[16] === tmp11) {
            if (cResult[17] === tmp13) {
              let tmp21;
              if (cResult[18] === tmp18) {
                tmp21 = cResult[19];
              }
              return tmp21;
            }
          }
        }
        const tmp24 = <Pressable onPress={tmp9} accessible accessibilityLabel={tmp11} accessibilityRole="switch" accessibilityState={tmp13}>{tmp18}</Pressable>;
        cResult[15] = tmp9;
        cResult[16] = tmp11;
        cResult[17] = tmp13;
        cResult[18] = tmp18;
        cResult[19] = tmp24;
        tmp21 = tmp24;
      }
      const tmp20 = jsx(tmp6(4810).View, { style: tmp14, ref, children: tmp15 });
      cResult[12] = tmp14;
      cResult[13] = tmp15;
      cResult[14] = tmp20;
      tmp18 = tmp20;
    }
    const items = [tmp4.container, containerStyle];
    cResult[7] = containerStyle;
    cResult[8] = tmp4.container;
    cResult[9] = items;
    tmp14 = items;
  }
  function handleOnPress() {
    closure_1(ContentDismissActionType.AUTO);
    onPress();
  }
  cResult[0] = tmp8;
  cResult[1] = onPress;
  cResult[2] = handleOnPress;
  tmp9 = handleOnPress;
}) : (function BurstReactionToggle(arg0) {
  let closure_1;
  let isActive;
  let stringResult;
  let tmp5;
  ({ onPress: require, isActive } = arg0);
  importDefault = undefined;
  const tmp = closure_13();
  const colors = nativeDefault.colors;
  if (isActive) {
    let INTERACTIVE_TEXT_DEFAULT = colors.WHITE;
    tmp5 = tmp2;
  } else {
    INTERACTIVE_TEXT_DEFAULT = colors.INTERACTIVE_TEXT_DEFAULT;
    tmp5 = tmp2;
  }
  const ref = react.useRef(null);
  importDefault = tmp5(9374)(ref);
  const containerStyle = closure_12(isActive).containerStyle;
  const intl = intl2.intl;
  const string = intl.string;
  const t = intl2.t;
  if (isActive) {
    stringResult = string(t["5cRA/b"]);
  } else {
    stringResult = string(t.buV4av);
  }
  const items = [tmp.container, containerStyle];
  const View = tmp5(4810).View;
  return <tmp8 onPress={function handleOnPress() {
    closure_1(ContentDismissActionType.AUTO);
    require();
  }} accessible accessibilityLabel={stringResult} accessibilityRole="switch" accessibilityState={{ checked: isActive }}>{null}</tmp8>;
});
size = size_mod;
let result = size.fileFinishedImporting("modules/reactions/native/BurstReactionToggle.tsx");

export default tmp2;
