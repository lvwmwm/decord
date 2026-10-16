// Module ID: 6722
// Function ID: 6723
// Name: BottomSheetBackground
// Dependencies: [19, 17, 21, 6721]

// Module 6722 (BottomSheetBackground)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import react_native2 from "react-native" /* 6721 */;

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
