// Module ID: 18389
// Function ID: 18390
// Name: JankSlidingSurfaceReporter
// Dependencies: [19, 18387, 18390, 18391, 1652, 1705, 2]
// Exports: default

// Module 18389 (JankSlidingSurfaceReporter)
import react_nativeDefault from "react-native" /* 18390 */;
import getJankSurfaceName from "getJankSurfaceName" /* 18391 */;
import react_mod from "react" /* 19 */;
import JankScreenConstants from "JankScreenConstants" /* 18387 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let react = react_mod;
({ INTERACTION_NONE: closure_4, INTERACTION_TRANSITION: hasOwnProperty } = JankScreenConstants);
let closure_6 = { code: "(function JankSlidingSurfaceReporterNativeTsx1(){let[position]=this.__closure;return position.get();})" };
let closure_7 = { code: "(function JankSlidingSurfaceReporterNativeTsx2(current){let[openAt,closedAt,OPEN_SETTLED,CLOSED_SETTLED,MOVING,lastState,scheduleOnRN,report,INTERACTION_NONE,INTERACTION_TRANSITION]=this.__closure;const openIsLower=openAt<closedAt;const atOpen=openIsLower?current<=openAt:current>=openAt;const atClosed=openIsLower?current>=closedAt:current<=closedAt;const state=atOpen?OPEN_SETTLED:atClosed?CLOSED_SETTLED:MOVING;const prevState=lastState.get();if(state===prevState)return;lastState.set(state);if(state===OPEN_SETTLED){scheduleOnRN(report,true,INTERACTION_NONE);}else if(state===CLOSED_SETTLED){scheduleOnRN(report,false,INTERACTION_NONE);}else if(prevState===OPEN_SETTLED){scheduleOnRN(report,false,INTERACTION_TRANSITION);}else if(prevState===CLOSED_SETTLED){scheduleOnRN(report,true,INTERACTION_TRANSITION);}})" };
let result = size.fileFinishedImporting("modules/jank_stats/native/JankSlidingSurfaceReporter.native.tsx");

export default function JankSlidingSurfaceReporter(resolveOpenName) {
  let closedAt;
  let openAt;
  let position;
  let ref;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp7;
  let tmp8;
  let tmp9;
  resolveOpenName = resolveOpenName.resolveOpenName;
  let resolveClosedName = resolveOpenName.resolveClosedName;
  const onCoveringChange = resolveOpenName.onCoveringChange;
  react = undefined;
  ({ position, openAt, closedAt } = resolveOpenName);
  react = react.useRef({ resolveOpenName, resolveClosedName, onCoveringChange });
  const items = [resolveOpenName, resolveClosedName, onCoveringChange];
  const effect = react.useEffect(() => {
    const obj = { resolveOpenName, resolveClosedName, onCoveringChange };
    ref.current = obj;
  }, items);
  const callback = react.useCallback((arg0, arg1) => {
    const current = ref.current;
    ({ resolveClosedName, onCoveringChange } = current);
    resolveOpenName = current.resolveOpenName;
    if (onCoveringChange != null) {
      onCoveringChange(arg0);
    }
    const setScreenContext = react_nativeDefault.setScreenContext;
    react_nativeDefault;
    const composeJankSurfaceName = getJankSurfaceName.composeJankSurfaceName;
    getJankSurfaceName;
    if (arg0) {
      resolveClosedName = resolveOpenName;
    }
    setScreenContext(composeJankSurfaceName(resolveClosedName), arg1);
  }, []);
  const tmp3 = resolveOpenName;
  let tmp4 = onCoveringChange;
  let obj = resolveOpenName(onCoveringChange[4]);
  const sharedValue = obj.useSharedValue(0);
  const tmp6 = resolveOpenName(onCoveringChange[4]);
  const items1 = [closure_6, position];
  let c0;
  [tmp7, tmp8] = items1;
  class JankSlidingSurfaceReporterNativeTsx1 {
    constructor() {
      return _undefined.get();
    }
  }
  const items2 = [tmp8];
  JankSlidingSurfaceReporterNativeTsx1.__closure = items2;
  JankSlidingSurfaceReporterNativeTsx1.__workletHash = 2008471193072;
  JankSlidingSurfaceReporterNativeTsx1.__initData = tmp7;
  const items3 = [closure_7, openAt, closedAt, 1, 2, 3, sharedValue, , , , ];
  const useAnimatedReaction = tmp6.useAnimatedReaction;
  items3[7] = tmp3(tmp4[5]).scheduleOnRN;
  items3[8] = callback;
  items3[9] = closure_4;
  items3[10] = closure_5;
  c0 = undefined;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  let c8;
  let c9;
  [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19] = items3;
  class JankSlidingSurfaceReporterNativeTsx2 {
    constructor(arg0) {
      let tmp4;
      if (c0 < c1 ? arg0 <= c0 : arg0 >= c0) {
        tmp4 = c2;
      } else {
        tmp4 = (tmp3 ? arg0 >= tmp2 : arg0 <= tmp2) ? c3 : c4;
      }
      const value = _undefined.get();
      const obj = _undefined;
      if (tmp4 !== value) {
        const result = obj.set(tmp4);
        if (tmp4 === c2) {
          _undefined2(c7, true, c8);
        } else if (tmp4 === c3) {
          _undefined2(c7, false, c8);
        } else if (value === tmp24) {
          _undefined2(c7, false, c9);
        } else if (value === tmp6) {
          _undefined2(c7, true, c9);
        }
      }
    }
  }
  const items4 = [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19];
  JankSlidingSurfaceReporterNativeTsx2.__closure = items4;
  JankSlidingSurfaceReporterNativeTsx2.__workletHash = 17561289534023;
  JankSlidingSurfaceReporterNativeTsx2.__initData = tmp9;
  const animatedReaction = useAnimatedReaction(JankSlidingSurfaceReporterNativeTsx1, JankSlidingSurfaceReporterNativeTsx2);
  return null;
};
