// Module ID: 11430
// Function ID: 11431
// Name: AnimatedCoachmark
// Dependencies: [32, 19, 17, 21, 4524, 11431, 4508, 11428, 10265, 2]
// Exports: AnimatedCoachmark

// Module 11430 (AnimatedCoachmark)
import AccessibilityPreferencesContext from "AccessibilityPreferencesContext" /* 4508 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4524 */;
import AnimatedEnterExitItemDefault from "AnimatedEnterExitItem" /* 10265 */;
import TooltipConstants from "TooltipConstants" /* 11428 */;
import Coachmark from "Coachmark" /* 11431 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const StyleSheet = fn(17).StyleSheet;
const jsx = fn(21).jsx;
function renderTooltipItem(arg0, enterExitAnimatedStyles) {
  const obj = { style: null, pointerEvents: "box-none", children: null };
  const items = [enterExitAnimatedStyles, StyleSheet.absoluteFill];
  obj.style = items;
  let tmpResult = null;
  if (null != arg0) {
    const obj2 = {};
    const merged = Object.assign(arg0);
    obj2.enterExitAnimatedStyles = enterExitAnimatedStyles;
    tmpResult = tmp(Coachmark.CoachmarkContainer, obj2);
  }
  obj.children = tmpResult;
  return jsx(ReanimatedRexportDefault.View, { style: null, pointerEvents: "box-none", children: null });
}
const size = fn(2);
let result = size.fileFinishedImporting("design/components/Coachmark/native/AnimatedCoachmark.native.tsx");

export const AnimatedCoachmark = function AnimatedCoachmark(visible) {
  visible = visible.visible;
  const merged = Object.assign(visible, Object.assign({ visible: 0 }));
  c1 = undefined;
  [tmp3, c1] = noop.useState(visible);
  const tmp2 = _slicedToArray(noop.useState(visible), 2);
  const result = TooltipConstants.tooltipEnterExitAnimation(merged.position);
  const items = [visible];
  const effect = noop.useEffect(() => {
    _undefined(visible);
  }, items);
  const obj2 = { useReducedMotion: noop.useContext(AccessibilityPreferencesContext.AccessibilityPreferencesContext).reducedMotion.enabled, item: null, entering: null, exiting: null, renderItem: null };
  let tmp8;
  const tmp6 = jsx;
  if (tmp3) {
    tmp8 = merged;
  }
  obj2.item = tmp8;
  obj2.entering = result;
  obj2.exiting = result;
  obj2.renderItem = renderTooltipItem;
  return tmp6(AnimatedEnterExitItemDefault, obj2);
};
