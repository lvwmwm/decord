// Module ID: 13485
// Function ID: 103825
// Name: ReanimatedNativeStackScreen
// Dependencies: [29, 31, 27, 33, 1582, 4482, 1560, 13486, 13487]

// Module 13485 (ReanimatedNativeStackScreen)
import _objectWithoutProperties from "_objectWithoutProperties";
import importDefaultResult from "result";
import { Platform } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
let closure_3 = ["children"];
let closure_7 = require("cancelAnimation").createAnimatedComponent(require("Animated").InnerScreen);
if (null != global) {
  const RN$Bridgeless = global.RN$Bridgeless;
}
let closure_8 = { code: "function pnpm_ReanimatedNativeStackScreenTsx1(event){const{progress,closing,goingForward}=this.__closure;progress.value=event.progress;closing.value=event.closing;goingForward.value=event.goingForward;}" };
let closure_9 = { code: "function pnpm_ReanimatedNativeStackScreenTsx2(event){const{cachedHeaderHeight,headerHeight}=this.__closure;if(event.headerHeight!==cachedHeaderHeight.current){headerHeight.value=event.headerHeight;cachedHeaderHeight.current=event.headerHeight;}}" };
const forwardRefResult = importDefaultResult.forwardRef((children, ref) => {
  let hasLargeHeader;
  let stackPresentation;
  const tmp = sharedValue3(children, sharedValue2);
  ({ stackPresentation, hasLargeHeader } = tmp);
  let obj = ref(sharedValue1[6]);
  const safeAreaFrame = obj.useSafeAreaFrame();
  let obj1 = ref(sharedValue1[6]);
  let y = obj1.useSafeAreaInsets().top;
  const statusBarTranslucent = tmp.statusBarTranslucent;
  if (!tmp3) {
    y = safeAreaFrame.y;
  }
  const sum = 56 + y;
  ref = importDefaultResult.useRef(sum);
  const sharedValue = ref(sharedValue1[4]).useSharedValue(sum);
  const obj3 = ref(sharedValue1[4]);
  tmp3 = null != statusBarTranslucent && statusBarTranslucent;
  sharedValue1 = ref(sharedValue1[4]).useSharedValue(0);
  const obj4 = ref(sharedValue1[4]);
  sharedValue2 = ref(sharedValue1[4]).useSharedValue(0);
  const obj5 = ref(sharedValue1[4]);
  sharedValue3 = ref(sharedValue1[4]).useSharedValue(0);
  obj = { ref };
  const obj6 = ref(sharedValue1[4]);
  /* worklet (recovered source) */ function pnpm_ReanimatedNativeStackScreenTsx1(event){const{progress,closing,goingForward}=this.__closure;progress.value=event.progress;closing.value=event.closing;goingForward.value=event.goingForward;}
  pnpm_ReanimatedNativeStackScreenTsx1.__closure = { progress: sharedValue1, closing: sharedValue2, goingForward: sharedValue3 };
  pnpm_ReanimatedNativeStackScreenTsx1.__workletHash = 10731156107287;
  pnpm_ReanimatedNativeStackScreenTsx1.__initData = closure_8;
  obj.onTransitionProgressReanimated = ref(sharedValue1[4]).useEvent(pnpm_ReanimatedNativeStackScreenTsx1, ["onTransitionProgress"]);
  const obj8 = ref(sharedValue1[4]);
  /* worklet (recovered source) */ function pnpm_ReanimatedNativeStackScreenTsx2(event){const{cachedHeaderHeight,headerHeight}=this.__closure;if(event.headerHeight!==cachedHeaderHeight.current){headerHeight.value=event.headerHeight;cachedHeaderHeight.current=event.headerHeight;}}
  pnpm_ReanimatedNativeStackScreenTsx2.__closure = { cachedHeaderHeight: ref, headerHeight: sharedValue };
  pnpm_ReanimatedNativeStackScreenTsx2.__workletHash = 4489643073666;
  pnpm_ReanimatedNativeStackScreenTsx2.__initData = closure_9;
  obj.onHeaderHeightChangeReanimated = ref(sharedValue1[4]).useEvent(pnpm_ReanimatedNativeStackScreenTsx2, ["onHeaderHeightChange"]);
  obj = {};
  obj1 = { value: sharedValue, children: jsx(sharedValue(sharedValue1[8]).Provider, { value: { progress: sharedValue1, closing: sharedValue2, goingForward: sharedValue3 }, children: children.children }) };
  obj.children = jsx(sharedValue(sharedValue1[7]).Provider, { value: sharedValue, children: jsx(sharedValue(sharedValue1[8]).Provider, { value: { progress: sharedValue1, closing: sharedValue2, goingForward: sharedValue3 }, children: children.children }) });
  return <closure_7 {...Object.assign(obj, tmp, obj)} />;
});
forwardRefResult.displayName = "ReanimatedNativeStackScreen";

export default forwardRefResult;
