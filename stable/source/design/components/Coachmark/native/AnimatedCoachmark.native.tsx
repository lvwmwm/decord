// Module ID: 9962
// Function ID: 9963
// Name: AnimatedCoachmark
// Dependencies: [32, 19, 17, 21, 5095, 9963, 5028, 9959, 9960, 2]
// Exports: AnimatedCoachmark

// Module 9962 (AnimatedCoachmark)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 5028 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 5095 */;
import TooltipConstants from "TooltipConstants" /* 9959 */;
import AnimatedEnterExitItemDefault from "AnimatedEnterExitItem" /* 9960 */;
import Coachmark from "Coachmark" /* 9963 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const StyleSheet = react_native.StyleSheet;
const jsx = Fragment.jsx;
function renderTooltipItem(arg0, enterExitAnimatedStyles) {
  const items = [enterExitAnimatedStyles, StyleSheet.absoluteFill];
  let tmpResult = null;
  const View = ReanimatedRexportDefault.View;
  if (null != arg0) {
    const obj2 = { enterExitAnimatedStyles };
    const CoachmarkContainer = Coachmark.CoachmarkContainer;
    const merged = Object.assign(arg0);
    tmpResult = tmp(CoachmarkContainer, obj2);
  }
  return <View style={items} pointerEvents="box-none">{tmpResult}</View>;
}
let result = size.fileFinishedImporting("design/components/Coachmark/native/AnimatedCoachmark.native.tsx");

export function AnimatedCoachmark(visible) {
  let c1;
  let tmp3;
  let tmp8;
  visible = visible.visible;
  const merged = Object.assign(visible, Object.assign({ visible: 0 }));
  c1 = undefined;
  const enabled = react.useContext(react2.AccessibilityPreferencesContext).reducedMotion.enabled;
  [tmp3, c1] = react.useState(visible);
  _slicedToArray(react.useState(visible), 2);
  const obj = TooltipConstants;
  const result = obj.tooltipEnterExitAnimation(merged.position);
  const items = [visible];
  const effect = react.useEffect(() => {
    _undefined(visible);
  }, items);
  const obj2 = { useReducedMotion: enabled, item: tmp8, entering: result, exiting: result, renderItem: renderTooltipItem };
  tmp8 = undefined;
  const tmp6 = jsx;
  const tmp7 = AnimatedEnterExitItemDefault;
  if (tmp3) {
    tmp8 = merged;
  }
  return tmp6(tmp7, obj2);
}
