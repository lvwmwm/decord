// Module ID: 9489
// Function ID: 9490
// Name: BurstReactionToggle
// Dependencies: [19, 17, 5244, 5089, 21, 1652, 504, 5839, 575, 5485, 5876, 5243, 9490, 1113, 9491, 2]
// Exports: default

// Module 9489 (BurstReactionToggle)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 5089 */;
import timing_timing from "timing/timing" /* 5485 */;
import useToken2 from "useToken" /* 5839 */;
import spring_spring from "spring/spring" /* 5876 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5244 */;
import createStyles from "createStyles" /* 5243 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault, set, set2;

let Easing;
let size;
const Pressable = react_native.Pressable;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
let obj = { duration: 100, easing: Easing.out(_mod1652.Easing.quad) };
Easing = _mod1652.Easing;
let closure_9 = { stiffness: 750, mass: 2.5, damping: 70 };
let closure_10 = { code: "(function BurstReactionToggleTsx1(){let[reducedMotion,targetBackgroundColor,backgroundColor,rotation]=this.__closure;const _backgroundColor=reducedMotion?targetBackgroundColor:backgroundColor.get();const _rotation=reducedMotion?0:rotation.get();return{backgroundColor:_backgroundColor,transform:[{rotate:_rotation+\"deg\"}]};})" };
let obj2 = { container: size };
size = { borderRadius: nativeDefault.modules.button.BORDER_RADIUS, padding: 8, marginLeft: 8, width: 40, height: 40 };
let closure_11 = createStyles.createStyles(obj2);
size = size_mod;
let result = size.fileFinishedImporting("modules/reactions/native/BurstReactionToggle.tsx");

export default function BurstReactionToggle(arg0) {
  let closure_1;
  let isActive;
  let stringResult;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp4;
  let tmp7;
  let useReducedMotion;
  ({ onPress: require, isActive } = arg0);
  importDefault = undefined;
  const tmp = closure_11();
  const colors = nativeDefault.colors;
  if (isActive) {
    let INTERACTIVE_TEXT_DEFAULT = colors.WHITE;
    tmp4 = tmp2;
    tmp7 = tmp2;
  } else {
    INTERACTIVE_TEXT_DEFAULT = colors.INTERACTIVE_TEXT_DEFAULT;
    tmp4 = tmp2;
    tmp7 = tmp2;
  }
  obj = react;
  const ref = react.useRef(null);
  importDefault = tmp7(9490)(ref);
  let num;
  let sharedValue;
  let sharedValue1;
  let obj2 = get_initialized;
  let items = [AccessibilityStore];
  const stateFromStores = obj2.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const useToken = useToken2.useToken;
  useToken2;
  const colors2 = tmp4(575).colors;
  let str = useToken(isActive ? colors2.BACKGROUND_BRAND : colors2.INPUT_BACKGROUND_DEFAULT);
  if (str == null) {
    str = "";
  }
  num = 0;
  if (isActive) {
    num = 360;
  }
  const tmp9Result = _mod1652;
  sharedValue = tmp9Result.useSharedValue(str);
  const tmp9Result3 = _mod1652;
  sharedValue1 = tmp9Result3.useSharedValue(num);
  const items1 = [closure_10, stateFromStores, str, sharedValue, sharedValue1];
  let c0;
  let c1;
  let c2;
  let c3;
  [tmp14, tmp15, tmp16, tmp17, tmp18] = items1;
  const tmp9Result4 = _mod1652;
  class BurstReactionToggleTsx1 {
    constructor() {
      let items;
      let value;
      if (c0) {
        value = c1;
      } else {
        value = _undefined.get();
      }
      let num = 0;
      obj = { backgroundColor: value, transform: items };
      if (!c0) {
        num = _undefined2.get();
      }
      items = [{ rotate: "" + num + "deg" }];
      ({ rotate: "" + num + "deg" });
      return obj;
    }
  }
  const items2 = [tmp15, tmp16, tmp17, tmp18];
  BurstReactionToggleTsx1.__closure = items2;
  BurstReactionToggleTsx1.__workletHash = 1303974688188;
  BurstReactionToggleTsx1.__initData = tmp14;
  const items3 = [sharedValue, str, sharedValue1, num];
  const animatedStyle = tmp9Result4.useAnimatedStyle(BurstReactionToggleTsx1);
  const effect = obj.useEffect(() => {
    set = sharedValue.set;
    obj = timing_timing;
    const result = set(obj.withTiming(str, closure_2_8));
    set2 = sharedValue1.set;
    const obj2 = spring_spring;
    set2(obj2.withSpring(num, closure_2_9));
  }, items3);
  const intl = tmp9(1113).intl;
  const string = intl.string;
  const t = tmp9(1113).t;
  if (isActive) {
    stringResult = string(t["5cRA/b"]);
  } else {
    stringResult = string(t.buV4av);
  }
  const items4 = [tmp.container, animatedStyle];
  const View = tmp7(1652).View;
  return <tmp22 onPress={function handleOnPress() {
    closure_1(ContentDismissActionType.AUTO);
    require();
  }} accessible accessibilityLabel={stringResult} accessibilityRole="switch" accessibilityState={{ checked: isActive }}>{null}</tmp22>;
};
