// Module ID: 11335
// Function ID: 88145
// Name: interactivityProps
// Dependencies: []
// Exports: default

// Module 11335 (interactivityProps)
function interactivityProps(isInteractive) {
  const obj = {};
  let str = "none";
  if (isInteractive) {
    str = "auto";
  }
  obj.pointerEvents = str;
  obj.accessibilityElementsHidden = !isInteractive;
  let str2 = "no-hide-descendants";
  if (isInteractive) {
    str2 = "auto";
  }
  obj.importantForAccessibility = str2;
  return obj;
}
function FadeTransitionItem(state) {
  state = state.state;
  const arg1 = state;
  const cleanup = state.cleanup;
  const importDefault = cleanup;
  let dependencyMap;
  const tmp = state === arg1(dependencyMap[4]).TransitionStates.YEETED;
  let obj = arg1(dependencyMap[5]);
  let num = 1;
  if (tmp) {
    num = 0;
  }
  const sharedValue = obj.useSharedValue(num);
  dependencyMap = sharedValue;
  const items = [state, sharedValue, cleanup];
  const effect = React.useEffect(() => {
    if (state === state(sharedValue[4]).TransitionStates.YEETED) {
      const obj2 = state(sharedValue[6]);
      const fn = function t(arg0) {
        if (true === arg0) {
          callback(closure_2[5]).runOnJS(closure_1)();
          const obj = callback(closure_2[5]);
        }
      };
      let obj = { runOnJS: state(sharedValue[5]).runOnJS, cleanup };
      fn.__closure = obj;
      fn.__workletHash = 10965161938750;
      fn.__initData = closure_7;
      const result = sharedValue.set(obj2.withTiming(0, closure_4, "respect-motion-settings", fn));
    } else {
      obj = state(sharedValue[6]);
      const result1 = sharedValue.set(obj.withTiming(1, closure_4, "respect-motion-settings"));
    }
  }, items);
  class T {
    constructor() {
      obj = { opacity: closure_2.get() };
      return obj;
    }
  }
  T.__closure = { visible: sharedValue };
  T.__workletHash = 13386937038500;
  T.__initData = closure_8;
  const animatedStyle = arg1(dependencyMap[5]).useAnimatedStyle(T);
  obj = { style: items1 };
  const items1 = [closure_6.transitionItem, animatedStyle];
  const merged = Object.assign(interactivityProps(!tmp));
  obj["children"] = state.children;
  return jsx(importDefault(dependencyMap[5]).View, obj);
}
function BounceTransitionItem(state) {
  let animatedStyle;
  let bounceEnterDelayMs;
  let children;
  let cleanup;
  let isInteractive;
  state = state.state;
  ({ cleanup, bounceEnterDelayMs, children } = state);
  let obj = { visible: state !== arg1(dependencyMap[4]).TransitionStates.YEETED, initiallyVisible: state !== arg1(dependencyMap[4]).TransitionStates.ENTERED, enterDelayMs: bounceEnterDelayMs, onExitComplete: cleanup, interactiveDuringEnter: true };
  const tmp = importDefault(dependencyMap[7]);
  ({ animatedStyle, isInteractive } = importDefault(dependencyMap[7])(obj));
  obj = { style: items };
  const items = [closure_6.transitionItemCentered, animatedStyle];
  const merged = Object.assign(interactivityProps(isInteractive));
  obj["children"] = children;
  return jsx(importDefault(dependencyMap[5]).View, obj);
}
let closure_3 = importAll(dependencyMap[0]);
const StyleSheet = arg1(dependencyMap[1]).StyleSheet;
const CHAT_INPUT_TIMING_CONFIG = arg1(dependencyMap[2]).CHAT_INPUT_TIMING_CONFIG;
const jsx = arg1(dependencyMap[3]).jsx;
const styles = StyleSheet.create({ transitionItem: { position: "absolute" }, transitionItemCentered: { accessibilityRole: false, set: false, status: false, accessibilityRole: false, ks: false, no: false, borderRadius: false } });
let closure_7 = { code: "function ChatInputActionButtonTransitionItemTsx1(finished){const{runOnJS,cleanup}=this.__closure;if(finished===true){runOnJS(cleanup)();}}" };
let closure_8 = { code: "function ChatInputActionButtonTransitionItemTsx2(){const{visible}=this.__closure;return{opacity:visible.get()};}" };
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/chat_input/native/action_buttons/ChatInputActionButtonTransitionItem.tsx");

export default function ChatInputActionButtonTransitionItem(bounceEnterDelayMs) {
  let children;
  let cleanup;
  let state;
  let withBounce;
  ({ state, cleanup, children, withBounce } = bounceEnterDelayMs);
  if (withBounce === undefined) {
    withBounce = false;
  }
  let num = bounceEnterDelayMs.bounceEnterDelayMs;
  if (num === undefined) {
    num = 0;
  }
  if (withBounce) {
    let obj = { state, cleanup, bounceEnterDelayMs: num, children };
    let tmpResult = tmp(BounceTransitionItem, obj);
  } else {
    obj = { state, cleanup, children };
    tmpResult = tmp(FadeTransitionItem, obj);
  }
  return tmpResult;
};
export { interactivityProps };
