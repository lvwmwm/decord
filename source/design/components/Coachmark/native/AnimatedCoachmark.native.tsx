// Module ID: 8563
// Function ID: 68047
// Name: renderTooltipItem
// Dependencies: []
// Exports: AnimatedCoachmark

// Module 8563 (renderTooltipItem)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const StyleSheet = arg1(dependencyMap[2]).StyleSheet;
const jsx = arg1(dependencyMap[3]).jsx;
function renderTooltipItem(arg0, arg1) {
  let obj = { style: items, pointerEvents: "box-none" };
  const items = [arg1, StyleSheet.absoluteFill];
  let tmp2 = null;
  if (null != arg0) {
    obj = {};
    const merged = Object.assign(arg0);
    obj["enterExitAnimatedStyles"] = arg1;
    tmp2 = jsx(arg1(dependencyMap[5]).CoachmarkContainer, obj);
  }
  obj.children = tmp2;
  return jsx(importDefault(dependencyMap[4]).View, obj);
}
const result = arg1(dependencyMap[9]).fileFinishedImporting("design/components/Coachmark/native/AnimatedCoachmark.native.tsx");

export const AnimatedCoachmark = function AnimatedCoachmark(visible) {
  visible = visible.visible;
  const arg1 = visible;
  let obj = Object.create(null);
  obj.visible = 0;
  const merged = Object.assign(visible, obj);
  const tmp3 = callback(React.useState(visible), 2);
  const importDefault = tmp3[1];
  obj = arg1(dependencyMap[7]);
  const result = obj.tooltipEnterExitAnimation(merged.position);
  const items = [visible];
  const effect = React.useEffect(() => {
    callback(visible);
  }, items);
  obj = { useReducedMotion: React.useContext(arg1(dependencyMap[6]).AccessibilityPreferencesContext).reducedMotion.enabled };
  let tmp8;
  if (tmp3[0]) {
    tmp8 = merged;
  }
  obj.item = tmp8;
  obj.entering = result;
  obj.exiting = result;
  obj.renderItem = renderTooltipItem;
  return jsx(importDefault(dependencyMap[8]), obj);
};
