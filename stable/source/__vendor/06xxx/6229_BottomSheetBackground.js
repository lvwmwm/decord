// Module ID: 6229
// Function ID: 6230
// Name: BottomSheetBackground
// Dependencies: [19, 17, 21, 6228]

// Module 6229 (BottomSheetBackground)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import react_native2 from "react-native" /* 6228 */;

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
