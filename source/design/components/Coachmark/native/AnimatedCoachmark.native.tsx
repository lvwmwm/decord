// Module ID: 8616
// Function ID: 68340
// Name: renderTooltipItem
// Dependencies: [57, 31, 27, 33, 3991, 8617, 3849, 8613, 8614, 2]
// Exports: AnimatedCoachmark

// Module 8616 (renderTooltipItem)
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
    obj["enterExitAnimatedStyles"] = arg1;
    tmp2 = jsx(require(8617) /* Coachmark */.CoachmarkContainer, {});
  }
  obj.children = tmp2;
  return jsx(importDefault(3991).View, { style: items, pointerEvents: "box-none" });
}
let result = require("get ActivityIndicator").fileFinishedImporting("design/components/Coachmark/native/AnimatedCoachmark.native.tsx");

export const AnimatedCoachmark = function AnimatedCoachmark(visible) {
  visible = visible.visible;
  let obj = Object.create(null);
  obj.visible = 0;
  const merged = Object.assign(visible, obj);
  const tmp3 = callback(React.useState(visible), 2);
  const importDefault = tmp3[1];
  obj = visible(8613);
  const result = obj.tooltipEnterExitAnimation(merged.position);
  const items = [visible];
  const effect = React.useEffect(() => {
    callback(visible);
  }, items);
  obj = { useReducedMotion: React.useContext(visible(3849).AccessibilityPreferencesContext).reducedMotion.enabled };
  let tmp8;
  if (tmp3[0]) {
    tmp8 = merged;
  }
  obj.item = tmp8;
  obj.entering = result;
  obj.exiting = result;
  obj.renderItem = renderTooltipItem;
  return jsx(importDefault(8614), { useReducedMotion: React.useContext(visible(3849).AccessibilityPreferencesContext).reducedMotion.enabled });
};
