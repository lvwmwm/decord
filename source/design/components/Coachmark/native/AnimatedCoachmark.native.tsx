// Module ID: 8667
// Function ID: 8668
// Name: renderTooltipItem
// Dependencies: [32, 19, 17, 21, 4042, 8668, 1356, 8664, 8665, 2]
// Exports: AnimatedCoachmark

// Module 8667 (renderTooltipItem)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { StyleSheet } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
function renderTooltipItem(arg0, enterExitAnimatedStyles) {
  let obj = { style: items, pointerEvents: "box-none", children: null };
  items = [enterExitAnimatedStyles, StyleSheet.absoluteFill];
  let tmpResult = null;
  if (null != arg0) {
    obj = {};
    const merged = Object.assign(arg0);
    obj.enterExitAnimatedStyles = enterExitAnimatedStyles;
    tmpResult = tmp(require(8668) /* Coachmark */.CoachmarkContainer, obj);
  }
  obj[2] = tmpResult;
  return jsx(importDefault(4042).View, { style: items, pointerEvents: "box-none", children: null });
}
let result = require("get ActivityIndicator").fileFinishedImporting("design/components/Coachmark/native/AnimatedCoachmark.native.tsx");

export const AnimatedCoachmark = function AnimatedCoachmark(visible) {
  let c1;
  let tmp3;
  visible = visible.visible;
  const merged = Object.assign(visible, Object.create(null));
  let importDefault;
  [tmp3, c1] = callback(React.useState(visible), 2);
  let obj = visible(8664);
  const result = obj.tooltipEnterExitAnimation(merged.position);
  const items = [visible];
  const effect = React.useEffect(() => {
    _undefined(visible);
  }, items);
  obj = { useReducedMotion: React.useContext(visible(1356).AccessibilityPreferencesContext).reducedMotion.enabled, item: null, entering: null, exiting: null, renderItem: null };
  let tmp8;
  const tmp2 = callback(React.useState(visible), 2);
  const tmp6 = jsx;
  if (tmp3) {
    tmp8 = merged;
  }
  obj[1] = tmp8;
  obj[2] = result;
  obj[3] = result;
  obj[4] = renderTooltipItem;
  return tmp6(importDefault(8665), obj);
};
