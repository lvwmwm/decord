// Module ID: 13371
// Function ID: 101669
// Name: ReanimatedNativeStackScreen
// Dependencies: []

// Module 13371 (ReanimatedNativeStackScreen)
let closure_3 = [3348383280032958600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000];
let closure_4 = importDefault(dependencyMap[0]);
const importDefaultResult = importDefault(dependencyMap[1]);
const Platform = arg1(dependencyMap[2]).Platform;
const jsx = arg1(dependencyMap[3]).jsx;
let closure_7 = importDefault(dependencyMap[4]).createAnimatedComponent(arg1(dependencyMap[5]).InnerScreen);
if (null != global) {
  const RN$Bridgeless = global.RN$Bridgeless;
}
let closure_8 = { code: "function pnpm_ReanimatedNativeStackScreenTsx1(event){const{progress,closing,goingForward}=this.__closure;progress.value=event.progress;closing.value=event.closing;goingForward.value=event.goingForward;}" };
let closure_9 = { code: "function pnpm_ReanimatedNativeStackScreenTsx2(event){const{cachedHeaderHeight,headerHeight}=this.__closure;if(event.headerHeight!==cachedHeaderHeight.current){headerHeight.value=event.headerHeight;cachedHeaderHeight.current=event.headerHeight;}}" };
const forwardRefResult = importDefaultResult.forwardRef((children, ref) => {
  let hasLargeHeader;
  let stackPresentation;
  const tmp = callback(children, closure_3);
  ({ stackPresentation, hasLargeHeader } = tmp);
  let obj = ref(dependencyMap[6]);
  const safeAreaFrame = obj.useSafeAreaFrame();
  let obj1 = ref(dependencyMap[6]);
  let y = obj1.useSafeAreaInsets().top;
  const statusBarTranslucent = tmp.statusBarTranslucent;
  if (!tmp3) {
    y = safeAreaFrame.y;
  }
  const sum = 56 + y;
  ref = importDefaultResult.useRef(sum);
  const sharedValue = ref(dependencyMap[4]).useSharedValue(sum);
  const importDefault = sharedValue;
  const obj3 = ref(dependencyMap[4]);
  const tmp3 = null != statusBarTranslucent && statusBarTranslucent;
  const sharedValue1 = ref(dependencyMap[4]).useSharedValue(0);
  const dependencyMap = sharedValue1;
  const obj4 = ref(dependencyMap[4]);
  const sharedValue2 = ref(dependencyMap[4]).useSharedValue(0);
  closure_3 = sharedValue2;
  const obj5 = ref(dependencyMap[4]);
  const sharedValue3 = ref(dependencyMap[4]).useSharedValue(0);
  const callback = sharedValue3;
  obj = { ref };
  const obj6 = ref(dependencyMap[4]);
  /* worklet (recovered source) */ function pnpm_ReanimatedNativeStackScreenTsx1(event){const{progress,closing,goingForward}=this.__closure;progress.value=event.progress;closing.value=event.closing;goingForward.value=event.goingForward;}
  pnpm_ReanimatedNativeStackScreenTsx1.__closure = { progress: sharedValue1, closing: sharedValue2, goingForward: sharedValue3 };
  pnpm_ReanimatedNativeStackScreenTsx1.__workletHash = 10731156107287;
  pnpm_ReanimatedNativeStackScreenTsx1.__initData = closure_8;
  obj.onTransitionProgressReanimated = ref(dependencyMap[4]).useEvent(pnpm_ReanimatedNativeStackScreenTsx1, [null]);
  const obj8 = ref(dependencyMap[4]);
  /* worklet (recovered source) */ function pnpm_ReanimatedNativeStackScreenTsx2(event){const{cachedHeaderHeight,headerHeight}=this.__closure;if(event.headerHeight!==cachedHeaderHeight.current){headerHeight.value=event.headerHeight;cachedHeaderHeight.current=event.headerHeight;}}
  pnpm_ReanimatedNativeStackScreenTsx2.__closure = { cachedHeaderHeight: ref, headerHeight: sharedValue };
  pnpm_ReanimatedNativeStackScreenTsx2.__workletHash = 4489643073666;
  pnpm_ReanimatedNativeStackScreenTsx2.__initData = closure_9;
  obj.onHeaderHeightChangeReanimated = ref(dependencyMap[4]).useEvent(pnpm_ReanimatedNativeStackScreenTsx2, ["EditCollectiblesListItemProduct"]);
  obj = {};
  obj1 = { value: sharedValue, children: jsx(importDefault(dependencyMap[8]).Provider, { value: { progress: sharedValue1, closing: sharedValue2, goingForward: sharedValue3 }, children: children.children }) };
  obj.children = jsx(importDefault(dependencyMap[7]).Provider, obj1);
  return <closure_7 {...Object.assign(obj, tmp, obj)} />;
});
forwardRefResult.displayName = "ReanimatedNativeStackScreen";

export default forwardRefResult;
