// Module ID: 1766
// Function ID: 19686
// Name: startScreenTransition
// Dependencies: [1681, 1767, 1768]

// Module 1766 (startScreenTransition)
import configureProps from "configureProps";

configureProps = configureProps.configureProps();
let closure_2 = { code: "function startScreenTransition_Pnpm_animationManagerTs1(screenTransitionConfig){const{applyStyle}=this.__closure;const{stackTag:stackTag,sharedEvent:sharedEvent}=screenTransitionConfig;sharedEvent.addListener(stackTag,function(){applyStyle(screenTransitionConfig,sharedEvent.value);});}" };
let closure_3 = { code: "function getLockAxis_Pnpm_animationManagerTs2(goBackGesture){if(['swipeRight','swipeLeft','horizontalSwipe'].includes(goBackGesture)){return'x';}else if(['swipeUp','swipeDown','verticalSwipe'].includes(goBackGesture)){return'y';}return undefined;}" };
let closure_4 = (() => {
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
  getLockAxis.__closure = {};
  getLockAxis.__workletHash = 16916946798878;
  getLockAxis.__initData = closure_3;
  return getLockAxis;
})();
let closure_5 = { code: "function finishScreenTransition_Pnpm_animationManagerTs3(screenTransitionConfig){const{getLockAxis,getSwipeSimulator}=this.__closure;const{stackTag:stackTag,sharedEvent:sharedEvent,goBackGesture:goBackGesture}=screenTransitionConfig;sharedEvent.removeListener(stackTag);const lockAxis=getLockAxis(goBackGesture);const step=getSwipeSimulator(sharedEvent.value,screenTransitionConfig,lockAxis);step();}" };

export const startScreenTransition = (() => {
  function startScreenTransition(sharedEvent) {
    let closure_0 = sharedEvent;
    sharedEvent = sharedEvent.sharedEvent;
    sharedEvent.addListener(sharedEvent.stackTag, () => {
      outer2_0(outer2_1[1]).applyStyle(closure_0, sharedEvent.value);
    });
  }
  startScreenTransition.__closure = { applyStyle: require(1767) /* createViewDescriptorPaper */.applyStyle };
  startScreenTransition.__workletHash = 9428952089760;
  startScreenTransition.__initData = closure_2;
  return startScreenTransition;
})();
export const finishScreenTransition = (() => {
  function finishScreenTransition(stackTag) {
    let goBackGesture;
    let sharedEvent;
    ({ sharedEvent, goBackGesture } = stackTag);
    sharedEvent.removeListener(stackTag.stackTag);
    const tmp2 = outer1_4(goBackGesture);
    outer1_0(outer1_1[2]).getSwipeSimulator(sharedEvent.value, stackTag, tmp2)();
  }
  finishScreenTransition.__closure = { getLockAxis: closure_4, getSwipeSimulator: require(1768) /* computeEasingProgress */.getSwipeSimulator };
  finishScreenTransition.__workletHash = 6937010294861;
  finishScreenTransition.__initData = closure_5;
  return finishScreenTransition;
})();
