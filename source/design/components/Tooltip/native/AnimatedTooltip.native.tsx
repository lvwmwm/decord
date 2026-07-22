// Module ID: 8558
// Function ID: 68031
// Name: renderTooltipItem
// Dependencies: [31, 27, 33, 4126, 5082, 3840, 3938, 2, 31, 27]
// Exports: AnimatedTooltip

// Module 8558 (renderTooltipItem)
import module_31 from "module_31";
import getActivityIndicator from "get ActivityIndicator";
import { StyleSheet } from "module_33";
import { jsx } from "_createForOfIteratorHelperLoose";
import get ActivityIndicator from "get ActivityIndicator";

function renderTooltipItem(arg0, arg1) {
  let obj = { style: items, pointerEvents: "box-none" };
  const items = [arg1, StyleSheet.absoluteFill];
  let tmp2 = null;
  if (null != arg0) {
    obj = {};
    const merged = Object.assign(arg0);
    tmp2 = jsx(arg1(dependencyMap[5]).Tooltip, obj);
  }
  obj.children = tmp2;
  return jsx(importDefault(dependencyMap[4]).View, obj);
}
const result = get_ActivityIndicator.fileFinishedImporting("design/components/Tooltip/native/AnimatedTooltip.native.tsx");

export const AnimatedTooltip = function AnimatedTooltip(visible) {
  visible = visible.visible;
  const arg1 = visible;
  let obj = Object.create(null);
  obj.visible = 0;
  const merged = Object.assign(visible, obj);
  obj = arg1(dependencyMap[7]);
  const result = obj.tooltipEnterExitAnimation(merged.position);
  const tmp4 = callback(React.useState(false), 2);
  const importDefault = tmp4[1];
  const items = [visible];
  const effect = React.useEffect(() => {
    callback(visible);
  }, items);
  obj = { useReducedMotion: React.useContext(arg1(dependencyMap[6]).AccessibilityPreferencesContext).reducedMotion.enabled };
  let tmp8;
  if (tmp4[0]) {
    tmp8 = merged;
  }
  obj.item = tmp8;
  obj.entering = result;
  obj.exiting = result;
  obj.renderItem = renderTooltipItem;
  return jsx(importDefault(dependencyMap[8]), obj);
};
