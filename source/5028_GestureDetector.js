// Module ID: 5028
// Function ID: 42859
// Name: GestureDetector
// Dependencies: []
// Exports: GestureDetector

// Module 5028 (GestureDetector)
const _module = require(dependencyMap[0]);
({ useContext: closure_3, useEffect: closure_4, useMemo: closure_5, useRef: closure_6 } = _module);
let closure_7 = importDefault(dependencyMap[0]);
const Platform = require(dependencyMap[1]).Platform;
const jsx = require(dependencyMap[2]).jsx;

export const GestureDetector = function GestureDetector(gesture) {
  current(importDefault(dependencyMap[3]));
  if (gesture.gesture) {
    gesture = gesture.gesture;
    const require = gesture;
    let obj = gesture;
    for (const item10025 of [true, true, true]) {
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
        }
      }
    }
    const items = [gesture];
    let obj1 = detectorUpdater(() => gesture.toGestureArray(), items);
    const importDefault = obj1;
    const someResult = obj1.some((shouldUseReanimated) => shouldUseReanimated.shouldUseReanimated);
    const webEventHandlers = require(dependencyMap[4]).useWebEventHandlers();
    const dependencyMap = webEventHandlers;
    const current = callback({ "Bool(false)": 15181082671046802000000000000000000000000000000000000000000000000000000000000000000, "Bool(false)": 15187754285679184000000000000000000000000000000000000000000000000000000000000000000, "Bool(false)": 131072.48849762892, "Bool(false)": -867998097046267100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 }).current;
    obj = { "Bool(false)": 1901293907, "Bool(false)": "slight_smile", "Bool(false)": "smiling_imp", "Bool(false)": "smiling_imp", "Bool(false)": -167119364, attachedGestures: [], shouldUseReanimated: someResult };
    const current2 = React.useRef(obj).current;
    const obj5 = require(dependencyMap[5]);
    const detectorUpdater = obj5.useDetectorUpdater(current, current2, obj1, gesture, webEventHandlers);
    const obj3 = require(dependencyMap[4]);
    const viewRefHandler = require(dependencyMap[6]).useViewRefHandler(current, detectorUpdater);
    let needsToReattachResult = current.firstRender || current.forceRebuildReanimatedEvent;
    if (!needsToReattachResult) {
      needsToReattachResult = require(dependencyMap[7]).needsToReattach(current2, obj1);
      const obj7 = require(dependencyMap[7]);
    }
    current.forceRebuildReanimatedEvent = false;
    const obj6 = require(dependencyMap[6]);
    const animatedGesture = require(dependencyMap[8]).useAnimatedGesture(current2, needsToReattachResult);
    const obj8 = require(dependencyMap[8]);
    const isomorphicLayoutEffect = require(dependencyMap[9]).useIsomorphicLayoutEffect(() => {
      current2.isMounted = true;
      let obj = gesture(webEventHandlers[11]);
      obj = { preparedGesture: current2, gestureConfig: gesture, gesturesToAttach: obj1, webEventHandlersRef: webEventHandlers, viewTag: obj1(webEventHandlers[10])(current.viewRef) };
      obj.attachHandlers(obj);
      return () => {
        closure_4.isMounted = false;
        callback(closure_2[12]).dropHandlers(closure_4);
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
    const obj9 = require(dependencyMap[9]);
    const mountReactions = require(dependencyMap[13]).useMountReactions(detectorUpdater, current2);
    const tmp45 = require(dependencyMap[14]);
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
