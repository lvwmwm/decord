// Module ID: 5253
// Function ID: 45301
// Name: GestureDetector
// Dependencies: [31, 27, 33, 5232, 5254, 5258, 5263, 5259, 5264, 5265, 5243, 5261, 5260, 5266, 5267]
// Exports: GestureDetector

// Module 5253 (GestureDetector)
import result from "result";
import closure_7 from "result";
import { Platform } from "get ActivityIndicator";
import { jsx } from "jsxProd";

let closure_3;
let closure_4;
let closure_5;
let closure_6;
({ useContext: closure_3, useEffect: closure_4, useMemo: closure_5, useRef: closure_6 } = result);

export const GestureDetector = function GestureDetector(gesture) {
  current(obj1(webEventHandlers[3]));
  if (gesture.gesture) {
    gesture = gesture.gesture;
    let obj = gesture;
    for (const item10025 of ["userSelect", "enableContextMenu", "touchAction"]) {
      let tmp9 = arg0;
      let tmp10 = tmp7[item10025];
      if (undefined !== tmp10) {
        let tmp12 = gesture;
        let toGestureArrayResult = obj.toGestureArray();
        let tmp14 = toGestureArrayResult;
        for (const item10036 of toGestureArrayResult) {
          let tmp15 = item10025;
          let tmp16 = tmp10;
          item10036.config[tmp8] = tmp11;
          continue;
        }
      }
      continue;
    }
    const items = [gesture];
    obj1 = detectorUpdater(() => gesture.toGestureArray(), items);
    const someResult = obj1.some((shouldUseReanimated) => shouldUseReanimated.shouldUseReanimated);
    webEventHandlers = gesture(webEventHandlers[4]).useWebEventHandlers();
    current = callback({ firstRender: true, viewRef: null, previousViewTag: -1, forceRebuildReanimatedEvent: false }).current;
    obj = { attachedGestures: [], animatedEventHandler: null, animatedHandlers: null, shouldUseReanimated: someResult, isMounted: false };
    const current2 = React.useRef(obj).current;
    const obj5 = gesture(webEventHandlers[5]);
    detectorUpdater = obj5.useDetectorUpdater(current, current2, obj1, gesture, webEventHandlers);
    const obj3 = gesture(webEventHandlers[4]);
    const viewRefHandler = gesture(webEventHandlers[6]).useViewRefHandler(current, detectorUpdater);
    let needsToReattachResult = current.firstRender || current.forceRebuildReanimatedEvent;
    if (!needsToReattachResult) {
      needsToReattachResult = gesture(webEventHandlers[7]).needsToReattach(current2, obj1);
      const obj7 = gesture(webEventHandlers[7]);
    }
    current.forceRebuildReanimatedEvent = false;
    const obj6 = gesture(webEventHandlers[6]);
    const animatedGesture = gesture(webEventHandlers[8]).useAnimatedGesture(current2, needsToReattachResult);
    const obj8 = gesture(webEventHandlers[8]);
    const isomorphicLayoutEffect = gesture(webEventHandlers[9]).useIsomorphicLayoutEffect(() => {
      current2.isMounted = true;
      let obj = gesture(webEventHandlers[11]);
      obj = { preparedGesture: current2, gestureConfig: gesture, gesturesToAttach: obj1, webEventHandlersRef: webEventHandlers, viewTag: obj1(webEventHandlers[10])(current.viewRef) };
      obj.attachHandlers(obj);
      return () => {
        outer1_4.isMounted = false;
        gesture(webEventHandlers[12]).dropHandlers(outer1_4);
      };
    }, []);
    const items1 = [gesture];
    current2(() => {
      if (current.firstRender) {
        current.firstRender = false;
      } else {
        detectorUpdater();
      }
    }, items1);
    const obj9 = gesture(webEventHandlers[9]);
    const mountReactions = gesture(webEventHandlers[13]).useMountReactions(detectorUpdater, current2);
    const tmp45 = gesture(webEventHandlers[14]);
    if (someResult) {
      obj = { ref: viewRefHandler, onGestureHandlerEvent: current2.animatedEventHandler, children: gesture.children };
      let tmp42Result = tmp42(tmp45.AnimatedWrap, obj);
    } else {
      obj1 = { ref: viewRefHandler, children: gesture.children };
      tmp42Result = tmp42(tmp45.Wrap, obj1);
    }
    return tmp42Result;
  } else {
    const _Error = Error;
    const error = new Error("GestureDetector must have a gesture prop provided.");
    throw error;
  }
};
