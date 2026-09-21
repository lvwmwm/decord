// Module ID: 7054
// Function ID: 7055
// Name: BottomSheetBackground
// Dependencies: [19, 17, 21, 7053]

// Module 7054 (BottomSheetBackground)
import _mod7053 from "module_7053" /* 7053 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const memoResult = fn(19).memo((pointerEvents) => {
  const obj = { pointerEvents: pointerEvents.pointerEvents, accessible: true, accessibilityRole: "adjustable", accessibilityLabel: "Bottom Sheet", style: null };
  const items = [_mod7053.styles.background, pointerEvents.style];
  obj.style = items;
  return <View pointerEvents={arg0.pointerEvents} accessible accessibilityRole="adjustable" accessibilityLabel="Bottom Sheet" style={null} />;
});
memoResult.displayName = "BottomSheetBackground";

export const BottomSheetBackground = memoResult;
