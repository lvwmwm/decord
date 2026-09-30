// Module ID: 6432
// Function ID: 6433
// Name: BottomSheetBackground
// Dependencies: [19, 17, 21, 6431]

// Module 6432 (BottomSheetBackground)
import _mod6431 from "module_6431" /* 6431 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const memoResult = fn(19).memo((pointerEvents) => {
  const obj = { pointerEvents: pointerEvents.pointerEvents, accessible: true, accessibilityRole: "adjustable", accessibilityLabel: "Bottom Sheet", style: null };
  const items = [_mod6431.styles.background, pointerEvents.style];
  obj.style = items;
  return <View pointerEvents={arg0.pointerEvents} accessible accessibilityRole="adjustable" accessibilityLabel="Bottom Sheet" style={null} />;
});
memoResult.displayName = "BottomSheetBackground";

export const BottomSheetBackground = memoResult;
