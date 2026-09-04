// Module ID: 11066
// Function ID: 11067
// Name: renderTooltipItem
// Dependencies: [32, 19, 17, 21, 4218, 11067, 1355, 11064, 9898, 2]
// Exports: AnimatedCoachmark

// Module 11066 (renderTooltipItem)
import _modDef4218 from "module_4218" /* 4218 */;
import AnimatedRenderItemDefault from "AnimatedRenderItem" /* 9898 */;
import Coachmark from "Coachmark" /* 11067 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { StyleSheet } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
function renderTooltipItem(arg0, enterExitAnimatedStyles) {
  let obj = { style: items, pointerEvents: "box-none", children: null };
  items = [enterExitAnimatedStyles, StyleSheet.absoluteFill];
  let tmpResult = null;
  if (null != arg0) {
    obj = {};
    const merged = Object.assign(arg0);
    obj.enterExitAnimatedStyles = enterExitAnimatedStyles;
    tmpResult = tmp(Coachmark.CoachmarkContainer, obj);
  }
  obj[2] = tmpResult;
  return jsx(_modDef4218.View, { style: items, pointerEvents: "box-none", children: null });
}
let result = require("set").fileFinishedImporting("design/components/Coachmark/native/AnimatedCoachmark.native.tsx");

export const AnimatedCoachmark = function AnimatedCoachmark(visible) {
  visible = visible.visible;
  const merged = Object.assign(visible, Object.create(null));
  importDefault = undefined;
  [tmp3, c1] = callback(React.useState(visible), 2);
  let obj = visible(11064);
  const result = obj.tooltipEnterExitAnimation(merged.position);
  const items = [visible];
  const effect = React.useEffect(() => {
    _undefined(visible);
  }, items);
  obj = { useReducedMotion: React.useContext(visible(1355).AccessibilityPreferencesContext).reducedMotion.enabled, item: null, entering: null, exiting: null, renderItem: null };
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
  return tmp6(AnimatedRenderItemDefault, obj);
};
