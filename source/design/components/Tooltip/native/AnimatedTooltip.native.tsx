// Module ID: 8370
// Function ID: 66955
// Name: renderTooltipItem
// Dependencies: [57, 31, 27, 33, 3992, 8371, 3850, 8373, 8374, 2]
// Exports: AnimatedTooltip

// Module 8370 (renderTooltipItem)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { StyleSheet } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
function renderTooltipItem(arg0, arg1) {
  let obj = { style: items, pointerEvents: "box-none" };
  items = [arg1, StyleSheet.absoluteFill];
  let tmp2 = null;
  if (null != arg0) {
    obj = {};
    const merged = Object.assign(arg0);
    tmp2 = jsx(require(8371) /* Tooltip */.Tooltip, {});
  }
  obj.children = tmp2;
  return jsx(importDefault(3992).View, { style: items, pointerEvents: "box-none" });
}
let result = require("get ActivityIndicator").fileFinishedImporting("design/components/Tooltip/native/AnimatedTooltip.native.tsx");

export const AnimatedTooltip = function AnimatedTooltip(visible) {
  visible = visible.visible;
  let obj = Object.create(null);
  obj.visible = 0;
  const merged = Object.assign(visible, obj);
  obj = visible(8373);
  const result = obj.tooltipEnterExitAnimation(merged.position);
  const tmp4 = callback(React.useState(false), 2);
  const importDefault = tmp4[1];
  const items = [visible];
  const effect = React.useEffect(() => {
    callback(visible);
  }, items);
  obj = { useReducedMotion: React.useContext(visible(3850).AccessibilityPreferencesContext).reducedMotion.enabled };
  let tmp8;
  if (tmp4[0]) {
    tmp8 = merged;
  }
  obj.item = tmp8;
  obj.entering = result;
  obj.exiting = result;
  obj.renderItem = renderTooltipItem;
  return jsx(importDefault(8374), { useReducedMotion: React.useContext(visible(3850).AccessibilityPreferencesContext).reducedMotion.enabled });
};
