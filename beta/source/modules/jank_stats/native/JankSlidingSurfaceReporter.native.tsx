// Module ID: 15641
// Function ID: 15642
// Name: JankSlidingSurfaceReporter
// Dependencies: [19, 15639, 15642, 15643, 4566, 2]
// Exports: default

// Module 15641 (JankSlidingSurfaceReporter)
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import react_nativeDefault from "react-native" /* 15642 */;
import getJankSurfaceName from "getJankSurfaceName" /* 15643 */;
import react from "react" /* 19 */;
import JankScreenConstants from "JankScreenConstants" /* 15639 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
({ INTERACTION_NONE: closure_4, INTERACTION_TRANSITION: hasOwnProperty } = JankScreenConstants);
let __initData = { code: "function JankSlidingSurfaceReporterNativeTsx1(){const{position}=this.__closure;return position.get();}" };
let closure_7 = { code: "function JankSlidingSurfaceReporterNativeTsx2(current){const{openAt,closedAt,OPEN_SETTLED,CLOSED_SETTLED,MOVING,lastState,runOnJS,report,INTERACTION_NONE,INTERACTION_TRANSITION}=this.__closure;const openIsLower=openAt<closedAt;const atOpen=openIsLower?current<=openAt:current>=openAt;const atClosed=openIsLower?current>=closedAt:current<=closedAt;const state=atOpen?OPEN_SETTLED:atClosed?CLOSED_SETTLED:MOVING;const prevState=lastState.get();if(state===prevState)return;lastState.set(state);if(state===OPEN_SETTLED){runOnJS(report)(true,INTERACTION_NONE);}else if(state===CLOSED_SETTLED){runOnJS(report)(false,INTERACTION_NONE);}else if(prevState===OPEN_SETTLED){runOnJS(report)(false,INTERACTION_TRANSITION);}else if(prevState===CLOSED_SETTLED){runOnJS(report)(true,INTERACTION_TRANSITION);}}" };
let result = size.fileFinishedImporting("modules/jank_stats/native/JankSlidingSurfaceReporter.native.tsx");

export default function JankSlidingSurfaceReporter(position) {
  let callback;
  let ref;
  position = position.position;
  const openAt = position.openAt;
  const closedAt = position.closedAt;
  let resolveOpenName = position.resolveOpenName;
  let resolveClosedName = position.resolveClosedName;
  const onCoveringChange = position.onCoveringChange;
  resolveOpenName.useRef({ resolveOpenName, resolveClosedName, onCoveringChange });
  const items = [resolveOpenName, resolveClosedName, onCoveringChange];
  const effect = resolveOpenName.useEffect(() => {
    const obj = { resolveOpenName, resolveClosedName, onCoveringChange };
    ref.current = obj;
  }, items);
  __initData = resolveOpenName.useCallback((arg0, arg1) => {
    const current = ref.current;
    ({ resolveClosedName, onCoveringChange } = current);
    resolveOpenName = current.resolveOpenName;
    if (onCoveringChange != null) {
      onCoveringChange(arg0);
    }
    const tmp3 = react_nativeDefault;
    if (tmp3 != null) {
      const setScreenContext = tmp3.setScreenContext;
      const composeJankSurfaceName = getJankSurfaceName.composeJankSurfaceName;
      getJankSurfaceName;
      if (arg0) {
        resolveClosedName = resolveOpenName;
      }
      setScreenContext(composeJankSurfaceName(resolveClosedName), arg1);
    }
  }, []);
  let obj = position(closedAt[4]);
  const sharedValue = obj.useSharedValue(0);
  let obj2 = position(closedAt[4]);
  class I {
    constructor() {
      return position.get();
    }
  }
  I.__closure = { position };
  I.__workletHash = 6255198126313;
  I.__initData = __initData;
  const fn = function _(arg0) {
    let num = 1;
    if (!(openAt < closedAt ? arg0 <= openAt : arg0 >= openAt)) {
      let num2 = 3;
      if (openAt < closedAt ? arg0 >= closedAt : arg0 <= closedAt) {
        num2 = 2;
      }
      num = num2;
    }
    const value = sharedValue.get();
    const obj = sharedValue;
    if (num !== value) {
      const result = obj.set(num);
      if (1 === num) {
        const obj4 = ReanimatedRexport;
        obj4.runOnJS(callback)(true, React3);
      } else if (2 === num) {
        const obj3 = ReanimatedRexport;
        obj3.runOnJS(callback)(false, React3);
      } else if (1 === value) {
        const obj2 = ReanimatedRexport;
        obj2.runOnJS(callback)(false, hasOwnProperty);
      } else if (2 === value) {
        const obj5 = ReanimatedRexport;
        obj5.runOnJS(callback)(true, hasOwnProperty);
      }
    }
  };
  let obj3 = { openAt, closedAt, OPEN_SETTLED: 1, CLOSED_SETTLED: 2, MOVING: 3, lastState: sharedValue, runOnJS: position(closedAt[4]).runOnJS, report: __initData, INTERACTION_NONE: resolveClosedName, INTERACTION_TRANSITION: onCoveringChange };
  fn.__closure = obj3;
  fn.__workletHash = 3128845092759;
  fn.__initData = __initData;
  const animatedReaction = obj2.useAnimatedReaction(I, fn);
  return null;
};
