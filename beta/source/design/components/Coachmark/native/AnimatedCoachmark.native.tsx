// Module ID: 10459
// Function ID: 10460
// Name: AnimatedCoachmark
// Dependencies: [32, 109, 19, 17, 21, 4497, 10460, 558, 568, 4481, 10457, 10223, 2]

// Module 10459 (AnimatedCoachmark)
import c from "c" /* 568 */;
import AccessibilityPreferencesContext from "AccessibilityPreferencesContext" /* 4481 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4497 */;
import AnimatedEnterExitItemDefault from "AnimatedEnterExitItem" /* 10223 */;
import TooltipConstants from "TooltipConstants" /* 10457 */;
import Coachmark from "Coachmark" /* 10460 */;
import _slicedToArray from "module_32" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["visible"];
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
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("design/components/Coachmark/native/AnimatedCoachmark.native.tsx");

export const AnimatedCoachmark = ReactCompilerGating.isReactCompilerEnabled() ? ((visible) => {
  const cResult = c.c(9);
  visible = visible.visible;
  const tmp3 = _objectWithoutProperties(visible, closure_3);
  const enabled = noop.useContext(AccessibilityPreferencesContext.AccessibilityPreferencesContext).reducedMotion.enabled;
  const tmp4 = _slicedToArray(noop.useState(visible), 2);
  closure_1 = tmp5;
  const obj2 = noop;
  const result = TooltipConstants.tooltipEnterExitAnimation(tmp3.position);
  if (cResult[0] === tmp4[1]) {
    if (cResult[1] === visible) {
      let tmp7 = cResult[2];
    }
    if (cResult[3] !== visible) {
      const items = [visible];
      cResult[3] = visible;
      cResult[4] = items;
      let tmp8 = items;
    } else {
      tmp8 = cResult[4];
    }
    const effect = obj2.useEffect(tmp7, tmp8);
    let tmp10;
    if (tmp4[0]) {
      tmp10 = tmp3;
    }
    if (cResult[5] === result) {
      if (cResult[6] === tmp10) {
        if (cResult[7] === enabled) {
          let tmp11 = cResult[8];
        }
        return tmp11;
      }
    }
    const obj4 = { useReducedMotion: enabled, item: tmp10, entering: result, exiting: result, renderItem: renderTooltipItem };
    const tmp15 = jsx(AnimatedEnterExitItemDefault, { useReducedMotion: enabled, item: tmp10, entering: result, exiting: result, renderItem: renderTooltipItem });
    cResult[5] = result;
    cResult[6] = tmp10;
    cResult[7] = enabled;
    cResult[8] = tmp15;
    tmp11 = tmp15;
  }
  const fn = function u() {
    closure_1(visible);
  };
  cResult[0] = tmp4[1];
  cResult[1] = visible;
  cResult[2] = fn;
  tmp7 = fn;
}) : ((visible) => {
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
});
