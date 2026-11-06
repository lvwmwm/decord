// Module ID: 5473
// Function ID: 5474
// Dependencies: [19, 21, 5474, 5497, 5503, 5499, 5504, 5505, 5486, 5498, 5501, 5500, 5506, 5507]
// Exports: GestureDetector

// Module 5473
import Fragment from "Fragment" /* 21 */;
import react_nativeDefault from "react-native" /* 5486 */;
import assignRef from "assignRef" /* 5498 */;
import attachHandlers from "attachHandlers" /* 5501 */;
import react_mod from "react" /* 19 */;

let c3;
let closure_4;
let hasOwnProperty;
let react = react_mod;
({ useEffect: c3, useMemo: closure_4, useRef: hasOwnProperty } = react);
react = react_mod;
const jsx = Fragment.jsx;

export const GestureDetector = function(gesture) {
  let current2;
  let detectorUpdater;
  let webEventHandlers;
  function propagateDetectorConfig(gesture, gesture2) {
    const items = ["userSelect", "enableContextMenu", "touchAction"];
    for (const item10008 of items) {
      let tmp2 = gesture[item10008];
      if (undefined !== tmp2) {
        let toGestureArrayResult = gesture.toGestureArray();
        for (const item10018 of toGestureArrayResult) {
          item10018.config[tmp] = tmp3;
          continue;
        }
      }
      continue;
    }
  }
  if (gesture.gesture) {
    let tmp26Result;
    gesture = gesture.gesture;
    propagateDetectorConfig(gesture, gesture);
    let tmp5 = current2;
    let items = [gesture];
    let gesturesToAttach = current2(() => gesture.toGestureArray(), items);
    const someResult = gesturesToAttach.some((shouldUseReanimated) => shouldUseReanimated.shouldUseReanimated);
    let tmp7 = gesture;
    let tmp8 = webEventHandlers;
    let obj2 = gesture(webEventHandlers[2]);
    webEventHandlers = obj2.useWebEventHandlers();
    const current = detectorUpdater({ firstRender: true, viewRef: null, previousViewTag: -1, forceRebuildReanimatedEvent: false }).current;
    let obj3 = { attachedGestures: [], animatedEventHandler: null, animatedHandlers: null, shouldUseReanimated: someResult, isMounted: false, hasExternalRelations: true };
    current2 = react.useRef(obj3).current;
    const obj4 = gesture(webEventHandlers[3]);
    detectorUpdater = obj4.useDetectorUpdater(current, current2, gesturesToAttach, gesture, webEventHandlers);
    const obj5 = gesture(webEventHandlers[4]);
    const viewRefHandler = obj5.useViewRefHandler(current, detectorUpdater);
    let needsToReattachResult = current.firstRender || current.forceRebuildReanimatedEvent;
    if (!needsToReattachResult) {
      const tmp7Result = tmp7(tmp8[5]);
      needsToReattachResult = tmp7Result.needsToReattach(current2, gesturesToAttach);
    }
    current.forceRebuildReanimatedEvent = false;
    const tmp7Result5 = tmp7(tmp8[6]);
    const animatedGesture = tmp7Result5.useAnimatedGesture(current2, needsToReattachResult);
    const tmp7Result6 = tmp7(tmp8[7]);
    const isomorphicLayoutEffect = tmp7Result6.useIsomorphicLayoutEffect(() => {
      const tmp = react_nativeDefault;
      gesturesToAttach = assignRef;
      current2.isMounted = true;
      const tmpResult = tmp(gesturesToAttach.resolveHostInstance(current.viewRef));
      const obj2 = attachHandlers;
      const obj3 = { preparedGesture: current2, gestureConfig: gesture, gesturesToAttach, webEventHandlersRef: webEventHandlers, viewTag: tmpResult };
      obj2.attachHandlers(obj3);
      return () => {
        current2.isMounted = false;
        const obj = gesture(webEventHandlers[11]);
        obj.dropHandlers(current2);
      };
    }, []);
    const items1 = [gesture];
    current(() => {
      if (current.firstRender) {
        tmp.firstRender = false;
      } else {
        detectorUpdater();
      }
    }, items1);
    const tmp7Result7 = tmp7(tmp8[12]);
    const mountReactions = tmp7Result7.useMountReactions(detectorUpdater, current2);
    const tmp7Result8 = tmp7(tmp8[13]);
    if (someResult) {
      const obj6 = { ref: viewRefHandler, onGestureHandlerEvent: current2.animatedEventHandler, children: gesture.children };
      tmp26Result = tmp26(tmp7Result8.AnimatedWrap, obj6);
    } else {
      const obj7 = { ref: viewRefHandler, children: gesture.children };
      tmp26Result = tmp26(tmp7Result8.Wrap, obj7);
    }
    return tmp26Result;
  } else {
    let tmp = globalThis;
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("GestureDetector must have a gesture prop provided.");
    const tmp3 = error;
    throw error;
  }
};
