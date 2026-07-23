// Module ID: 5320
// Function ID: 45844
// Name: BottomSheetBackground
// Dependencies: [31, 27, 33, 5319]

// Module 5320 (BottomSheetBackground)
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const memoResult = require("result").memo(function BottomSheetBackgroundComponent(pointerEvents) {
  const obj = { pointerEvents: pointerEvents.pointerEvents, accessible: true, accessibilityRole: "adjustable", accessibilityLabel: "Bottom Sheet" };
  const items = [require(5319) /* styles */.styles.background, pointerEvents.style];
  obj.style = items;
  return <View pointerEvents={arg0.pointerEvents} accessible accessibilityRole="adjustable" accessibilityLabel="Bottom Sheet" />;
});
memoResult.displayName = "BottomSheetBackground";

export const BottomSheetBackground = memoResult;
