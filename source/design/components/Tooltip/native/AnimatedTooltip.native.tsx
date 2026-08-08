// Module ID: 8655
// Function ID: 8656
// Name: renderTooltipItem
// Dependencies: [32, 19, 17, 21, 4036, 8656, 4020, 8658, 8659, 2]
// Exports: AnimatedTooltip

// Module 8655 (renderTooltipItem)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { StyleSheet } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
function renderTooltipItem(arg0, arg1) {
  let obj = { style: items, pointerEvents: "box-none", children: null };
  items = [arg1, StyleSheet.absoluteFill];
  let tmpResult = null;
  if (null != arg0) {
    obj = {};
    const merged = Object.assign(arg0);
    tmpResult = tmp(require(8656) /* Tooltip */.Tooltip, obj);
  }
  obj[2] = tmpResult;
  return jsx(importDefault(4036).View, { style: items, pointerEvents: "box-none", children: null });
}
let result = require("get ActivityIndicator").fileFinishedImporting("design/components/Tooltip/native/AnimatedTooltip.native.tsx");

export const AnimatedTooltip = function AnimatedTooltip(visible) {
  visible = visible.visible;
  const merged = Object.assign(visible, Object.create(null));
  let importDefault;
  let obj = visible(8658);
  const result = obj.tooltipEnterExitAnimation(merged.position);
  const tmp3 = callback(React.useState(false), 2);
  importDefault = tmp3[1];
  const items = [visible];
  const effect = React.useEffect(() => {
    callback(visible);
  }, items);
  obj = { useReducedMotion: React.useContext(visible(4020).AccessibilityPreferencesContext).reducedMotion.enabled, item: null, entering: null, exiting: null, renderItem: null };
  let tmp7;
  if (tmp3[0]) {
    tmp7 = merged;
  }
  obj[1] = tmp7;
  obj[2] = result;
  obj[3] = result;
  obj[4] = renderTooltipItem;
  return jsx(importDefault(8659), { useReducedMotion: React.useContext(visible(4020).AccessibilityPreferencesContext).reducedMotion.enabled, item: null, entering: null, exiting: null, renderItem: null });
};
