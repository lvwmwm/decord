// Module ID: 10587
// Function ID: 10588
// Name: BurstReactionToggle
// Dependencies: [19, 17, 4825, 2042, 21, 4566, 504, 4531, 576, 4837, 5280, 4836, 10588, 1115, 8676, 2]
// Exports: default

// Module 10587 (BurstReactionToggle)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import useToken2 from "useToken" /* 4531 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import timing from "timing" /* 4837 */;
import spring from "spring" /* 5280 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import createStyles from "createStyles" /* 4836 */;
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
let obj2 = { container: size };
size = { borderRadius: nativeDefault.modules.button.BORDER_RADIUS, padding: 8, marginLeft: 8, width: 40, height: 40 };
let closure_11 = createStyles.createStyles(obj2);
size = size_mod;
let result = size.fileFinishedImporting("modules/reactions/native/BurstReactionToggle.tsx");

export default function BurstReactionToggle(arg0) {
  let closure_1;
  let isActive;
  let stringResult;
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
  importDefault = tmp7(10588)(ref);
  let num;
  let sharedValue;
  let sharedValue1;
  let obj2 = get_initialized;
  let items = [AccessibilityStore];
  const stateFromStores = obj2.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const useToken = useToken2.useToken;
  useToken2;
  const colors2 = tmp4(576).colors;
  let str = useToken(isActive ? colors2.BACKGROUND_BRAND : colors2.INPUT_BACKGROUND_DEFAULT);
  if (str == null) {
    str = "";
  }
  num = 0;
  if (isActive) {
    num = 360;
  }
  const tmp9Result = ReanimatedRexport;
  sharedValue = tmp9Result.useSharedValue(str);
  const tmp9Result3 = ReanimatedRexport;
  sharedValue1 = tmp9Result3.useSharedValue(num);
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
  fn.__workletHash = 1525758595013;
  fn.__initData = __initData;
  const items1 = [sharedValue, str, sharedValue1, num];
  const tmp9Result4 = ReanimatedRexport;
  const animatedStyle = tmp9Result4.useAnimatedStyle(fn);
  const effect = obj.useEffect(() => {
    set = sharedValue.set;
    obj = timing;
    const result = set(obj.withTiming(str, closure_2_8));
    set2 = sharedValue1.set;
    const obj2 = spring;
    set2(obj2.withSpring(num, closure_2_9));
  }, items1);
  const intl = tmp9(1115).intl;
  const string = intl.string;
  const t = tmp9(1115).t;
  if (isActive) {
    stringResult = string(t["5cRA/b"]);
  } else {
    stringResult = string(t.buV4av);
  }
  const items2 = [tmp.container, animatedStyle];
  const View = tmp7(4566).View;
  return <tmp17 onPress={function onPress() {
    closure_1(ContentDismissActionType.AUTO);
    require();
  }} accessible accessibilityLabel={stringResult} accessibilityRole="switch" accessibilityState={{ checked: isActive }}>{null}</tmp17>;
};
