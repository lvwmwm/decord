// Module ID: 1965
// Function ID: 1966
// Name: startScreenTransition
// Dependencies: [1966, 1967]
// Exports: finishScreenTransition, startScreenTransition

// Module 1965 (startScreenTransition)
import applyStyleForBelowTopScreen from "applyStyleForBelowTopScreen" /* 1966 */;
import _mod1967 from "module_1967" /* 1967 */;

let tmp2;
let tmp3;
let tmp4;
let tmp5;
let tmp6;
let tmp7;
let items = [{ code: "(function startScreenTransition_Pnpm_animationManagerTs1(screenTransitionConfig){let[applyStyle]=this.__closure;const{stackTag:stackTag,sharedEvent:sharedEvent}=screenTransitionConfig;sharedEvent.addListener(stackTag,function(){applyStyle(screenTransitionConfig,sharedEvent.value);});})" }, applyStyleForBelowTopScreen.applyStyle];
[tmp2, tmp3] = items;
function startScreenTransition(sharedEvent) {
  sharedEvent = sharedEvent.sharedEvent;
  sharedEvent.addListener(sharedEvent.stackTag, () => {
    sharedEvent(closure_0, sharedEvent.value);
  });
}
let items1 = [tmp3];
startScreenTransition.__closure = items1;
startScreenTransition.__workletHash = 1769952570137;
startScreenTransition.__initData = tmp2;
const items2 = [{ code: "(function getLockAxis_Pnpm_animationManagerTs2(goBackGesture){if(['swipeRight','swipeLeft','horizontalSwipe'].includes(goBackGesture)){return'x';}else if(['swipeUp','swipeDown','verticalSwipe'].includes(goBackGesture)){return'y';}return undefined;})" }];
[tmp4] = items2;
function getLockAxis(arg0) {
  const items = ["swipeRight", "swipeLeft", "horizontalSwipe"];
  let str = "x";
  if (!items.includes(arg0)) {
    const items1 = ["swipeUp", "swipeDown", "verticalSwipe"];
    let str2;
    if (items1.includes(arg0)) {
      str2 = "y";
    }
    str = str2;
  }
  return str;
}
getLockAxis.__workletHash = 10944975953983;
getLockAxis.__initData = tmp4;
const items3 = [{ code: "(function finishScreenTransition_Pnpm_animationManagerTs3(screenTransitionConfig){let[getLockAxis,getSwipeSimulator]=this.__closure;const{stackTag:stackTag,sharedEvent:sharedEvent,goBackGesture:goBackGesture}=screenTransitionConfig;sharedEvent.removeListener(stackTag);const lockAxis=getLockAxis(goBackGesture);const step=getSwipeSimulator(sharedEvent.value,screenTransitionConfig,lockAxis);step();})" }, getLockAxis, _mod1967.getSwipeSimulator];
let c0;
let c1;
[tmp5, tmp6, tmp7] = items3;
function finishScreenTransition(stackTag) {
  let goBackGesture;
  let sharedEvent;
  ({ sharedEvent, goBackGesture } = stackTag);
  sharedEvent.removeListener(stackTag.stackTag);
  _undefined2(sharedEvent.value, stackTag, _undefined(goBackGesture))();
}
const items4 = [tmp6, tmp7];
finishScreenTransition.__closure = items4;
finishScreenTransition.__workletHash = 7933049368596;
finishScreenTransition.__initData = tmp5;

export { startScreenTransition };
export { finishScreenTransition };
