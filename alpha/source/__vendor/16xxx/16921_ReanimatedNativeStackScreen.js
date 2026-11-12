// Module ID: 16921
// Function ID: 16922
// Name: ReanimatedNativeStackScreen
// Dependencies: [109, 19, 17, 21, 1652, 6230, 1630, 16922, 16923]

// Module 16921 (ReanimatedNativeStackScreen)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import _mod1630 from "module_1630" /* 1630 */;
import _mod1652 from "module_1652" /* 1652 */;
import InnerScreen from "InnerScreen" /* 6230 */;
import reactDefault from "react" /* 16922 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;

const module_1652 = _mod1652;
let children;

let closure_3 = ["children"];
const Platform = react_native.Platform;
const jsx = Fragment.jsx;
let closure_7 = module_1652.createAnimatedComponent(InnerScreen.InnerScreen);
let closure_8 = { code: "(function pnpm_ReanimatedNativeStackScreenTsx1(event){let[progress,closing,goingForward]=this.__closure;progress.value=event.progress;closing.value=event.closing;goingForward.value=event.goingForward;})" };
let closure_9 = { code: "(function pnpm_ReanimatedNativeStackScreenTsx2(event){let[cachedHeaderHeight,headerHeight]=this.__closure;if(event.headerHeight!==cachedHeaderHeight.current){headerHeight.value=event.headerHeight;cachedHeaderHeight.current=event.headerHeight;}})" };
const forwardRefResult = react.forwardRef((children, ref) => {
  let hasLargeHeader;
  let stackPresentation;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  children = children.children;
  const tmp = _objectWithoutProperties(children, closure_3);
  ({ stackPresentation, hasLargeHeader } = tmp);
  const obj = _mod1630;
  const safeAreaFrame = obj.useSafeAreaFrame();
  const obj2 = _mod1630;
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
  const tmp2Result = _mod1652;
  const sharedValue = tmp2Result.useSharedValue(sum);
  const tmp2Result6 = _mod1652;
  const sharedValue1 = tmp2Result6.useSharedValue(0);
  const tmp2Result7 = _mod1652;
  const sharedValue2 = tmp2Result7.useSharedValue(0);
  const tmp2Result8 = _mod1652;
  const sharedValue3 = tmp2Result8.useSharedValue(0);
  const items = [closure_8, sharedValue1, sharedValue2, sharedValue3];
  let c2;
  [tmp13, tmp14, tmp15, tmp16] = items;
  function pnpm_ReanimatedNativeStackScreenTsx1(progress) {
    c0.value = progress.progress;
    c1.value = progress.closing;
    c2.value = progress.goingForward;
  }
  const items1 = [tmp14, tmp15, tmp16];
  pnpm_ReanimatedNativeStackScreenTsx1.__closure = items1;
  pnpm_ReanimatedNativeStackScreenTsx1.__workletHash = 3756868132238;
  pnpm_ReanimatedNativeStackScreenTsx1.__initData = tmp13;
  const items2 = [closure_9, ref, sharedValue];
  let c0;
  let c1;
  [tmp17, tmp18, tmp19] = items2;
  function pnpm_ReanimatedNativeStackScreenTsx2(headerHeight) {
    if (headerHeight.headerHeight !== _undefined.current) {
      ({ headerHeight: c1.value, headerHeight: tmp.current } = headerHeight);
    }
  }
  const items3 = [tmp18, tmp19];
  pnpm_ReanimatedNativeStackScreenTsx2.__closure = items3;
  pnpm_ReanimatedNativeStackScreenTsx2.__workletHash = 7813079638875;
  pnpm_ReanimatedNativeStackScreenTsx2.__initData = tmp17;
  const tmp2Result9 = _mod1652;
  const tmp2Result10 = _mod1652;
  const merged = Object.assign(tmp);
  const Provider = reactDefault.Provider;
  return <closure_7 ref={arg1} onTransitionProgressReanimated={tmp2Result9.useEvent(pnpm_ReanimatedNativeStackScreenTsx1, ["onTransitionProgress"])} onHeaderHeightChangeReanimated={tmp2Result10.useEvent(pnpm_ReanimatedNativeStackScreenTsx2, ["onHeaderHeightChange"])}><Provider value={sharedValue}>{null}</Provider></closure_7>;
});
forwardRefResult.displayName = "ReanimatedNativeStackScreen";

export default forwardRefResult;
