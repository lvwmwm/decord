// Module ID: 10591
// Function ID: 10592
// Name: AnimatedTooltip
// Dependencies: [32, 19, 17, 21, 4566, 10592, 4550, 10594, 9424, 2]
// Exports: AnimatedTooltip

// Module 10591 (AnimatedTooltip)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 4550 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4566 */;
import AnimatedEnterExitItemDefault from "AnimatedEnterExitItem" /* 9424 */;
import Tooltip2 from "Tooltip" /* 10592 */;
import TooltipConstants from "TooltipConstants" /* 10594 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const StyleSheet = react_native.StyleSheet;
const jsx = Fragment.jsx;
function renderTooltipItem(arg0, arg1) {
  const items = [arg1, StyleSheet.absoluteFill];
  let tmpResult = null;
  const View = ReanimatedRexportDefault.View;
  if (null != arg0) {
    const obj2 = {};
    const Tooltip = Tooltip2.Tooltip;
    const merged = Object.assign(arg0);
    tmpResult = tmp(Tooltip, obj2);
  }
  return <View style={items} pointerEvents="box-none">{tmpResult}</View>;
}
let result = size.fileFinishedImporting("design/components/Tooltip/native/AnimatedTooltip.native.tsx");

export const AnimatedTooltip = function AnimatedTooltip(visible) {
  let closure_1;
  let first;
  let tmp8;
  visible = visible.visible;
  const merged = Object.assign(visible, Object.assign({ visible: 0 }));
  closure_1 = undefined;
  const enabled = react.useContext(react2.AccessibilityPreferencesContext).reducedMotion.enabled;
  const obj = TooltipConstants;
  const result = obj.tooltipEnterExitAnimation(merged.position);
  [first, closure_1] = react.useState(false);
  const items = [visible];
  const effect = react.useEffect(() => {
    closure_1(visible);
  }, items);
  const obj2 = { useReducedMotion: enabled, item: tmp8, entering: result, exiting: result, renderItem: renderTooltipItem };
  tmp8 = undefined;
  const tmp6 = jsx;
  const tmp7 = AnimatedEnterExitItemDefault;
  if (first) {
    tmp8 = merged;
  }
  return tmp6(tmp7, obj2);
};
