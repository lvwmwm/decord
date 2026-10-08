// Module ID: 16150
// Function ID: 16151
// Name: ReanimatedNativeStackScreen
// Dependencies: [109, 19, 17, 21, 1655, 5322, 1633, 16151, 16152]

// Module 16150 (ReanimatedNativeStackScreen)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import _mod1633 from "module_1633" /* 1633 */;
import _mod1655 from "module_1655" /* 1655 */;
import InnerScreen from "InnerScreen" /* 5322 */;
import reactDefault from "react" /* 16151 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;

const cancelAnimation = _mod1655;
let children;

let closure_3 = ["children"];
const Platform = react_native.Platform;
const jsx = Fragment.jsx;
let closure_7 = cancelAnimation.createAnimatedComponent(InnerScreen.InnerScreen);
const __initData = { code: "function pnpm_ReanimatedNativeStackScreenTsx1(event){const{progress,closing,goingForward}=this.__closure;progress.value=event.progress;closing.value=event.closing;goingForward.value=event.goingForward;}" };
const __initData2 = { code: "function pnpm_ReanimatedNativeStackScreenTsx2(event){const{cachedHeaderHeight,headerHeight}=this.__closure;if(event.headerHeight!==cachedHeaderHeight.current){headerHeight.value=event.headerHeight;cachedHeaderHeight.current=event.headerHeight;}}" };
const forwardRefResult = react.forwardRef((children, ref) => {
  let hasLargeHeader;
  let stackPresentation;
  children = children.children;
  const tmp = _objectWithoutProperties(children, closure_3);
  ({ stackPresentation, hasLargeHeader } = tmp);
  const obj = _mod1633;
  const safeAreaFrame = obj.useSafeAreaFrame();
  const obj2 = _mod1633;
  let y = obj2.useSafeAreaInsets().top;
  let flag = tmp.statusBarTranslucent;
  if (flag == null) {
    flag = false;
  }
  if (!flag) {
    y = safeAreaFrame.y;
  }
  const sum = 56 + y;
  ref = react.useRef(sum);
  const tmp2Result = _mod1655;
  const sharedValue = tmp2Result.useSharedValue(sum);
  const tmp2Result6 = _mod1655;
  const sharedValue1 = tmp2Result6.useSharedValue(0);
  const tmp2Result7 = _mod1655;
  const sharedValue2 = tmp2Result7.useSharedValue(0);
  const tmp2Result8 = _mod1655;
  const sharedValue3 = tmp2Result8.useSharedValue(0);
  const fn = function _(progress) {
    sharedValue1.value = progress.progress;
    sharedValue2.value = progress.closing;
    sharedValue3.value = progress.goingForward;
  };
  fn.__closure = { progress: sharedValue1, closing: sharedValue2, goingForward: sharedValue3 };
  fn.__workletHash = 10731156107287;
  fn.__initData = __initData;
  const tmp2Result9 = _mod1655;
  const tmp2Result10 = _mod1655;
  class H {
    constructor(headerHeight) {
      if (headerHeight.headerHeight !== ref.current) {
        ({ headerHeight: sharedValue.value, headerHeight: tmp.current } = headerHeight);
      }
    }
  }
  H.__closure = { cachedHeaderHeight: ref, headerHeight: sharedValue };
  H.__workletHash = 4489643073666;
  H.__initData = __initData2;
  const merged = Object.assign(tmp);
  const Provider = reactDefault.Provider;
  return <closure_7 ref={arg1} onTransitionProgressReanimated={tmp2Result9.useEvent(fn, ["onTransitionProgress"])} onHeaderHeightChangeReanimated={tmp2Result10.useEvent(H, ["onHeaderHeightChange"])}><Provider value={sharedValue}>{null}</Provider></closure_7>;
});
forwardRefResult.displayName = "ReanimatedNativeStackScreen";

export default forwardRefResult;
