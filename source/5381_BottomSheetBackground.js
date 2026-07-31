// Module ID: 5381
// Function ID: 5382
// Name: BottomSheetBackground
// Dependencies: [19, 17, 21, 5380]

// Module 5381 (BottomSheetBackground)
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const memoResult = require("noop").memo((pointerEvents) => {
  const obj = { pointerEvents: pointerEvents.pointerEvents, accessible: true, accessibilityRole: "adjustable", accessibilityLabel: "Bottom Sheet", style: null };
  const items = [require(5380) /* styles */.styles.background, pointerEvents.style];
  obj[4] = items;
  return <View pointerEvents={arg0.pointerEvents} accessible accessibilityRole="adjustable" accessibilityLabel="Bottom Sheet" style={null} />;
});
memoResult.displayName = "BottomSheetBackground";

export const BottomSheetBackground = memoResult;
