// Module ID: 5355
// Function ID: 45982
// Name: BottomSheetBackground
// Dependencies: [31, 27, 33, 5354]

// Module 5355 (BottomSheetBackground)
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const memoResult = require("result").memo(function BottomSheetBackgroundComponent(pointerEvents) {
  const obj = { pointerEvents: pointerEvents.pointerEvents, accessible: true, accessibilityRole: "adjustable", accessibilityLabel: "Bottom Sheet" };
  const items = [require(5354) /* styles */.styles.background, pointerEvents.style];
  obj.style = items;
  return <View pointerEvents={arg0.pointerEvents} accessible accessibilityRole="adjustable" accessibilityLabel="Bottom Sheet" />;
});
memoResult.displayName = "BottomSheetBackground";

export const BottomSheetBackground = memoResult;
