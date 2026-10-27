// Module ID: 5461
// Function ID: 5462
// Name: BottomSheetBackground
// Dependencies: [19, 17, 21, 5460]

// Module 5461 (BottomSheetBackground)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import react_native2 from "react-native" /* 5460 */;

const memo = react2.memo;
const View = react_native.View;
const jsx = Fragment.jsx;
const memoResult = memo((pointerEvents) => {
  const style = pointerEvents.style;
  const items = [react_native2.styles.background, style];
  return <View pointerEvents={arg0.pointerEvents} accessible accessibilityRole="adjustable" accessibilityLabel="Bottom Sheet" style={items} />;
});
memoResult.displayName = "BottomSheetBackground";

export const BottomSheetBackground = memoResult;
