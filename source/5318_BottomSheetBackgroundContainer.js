// Module ID: 5318
// Function ID: 45840
// Name: BottomSheetBackgroundContainer
// Dependencies: [31, 27, 33, 5319, 5320]

// Module 5318 (BottomSheetBackgroundContainer)
import result from "result";
import "result";
import { StyleSheet } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const useMemo = result.useMemo;
const memoResult = result.memo(function BottomSheetBackgroundContainerComponent(arg0) {
  let animatedIndex;
  let animatedPosition;
  let backgroundComponent;
  let backgroundStyle;
  ({ backgroundComponent, backgroundStyle } = arg0);
  let items = [backgroundStyle];
  ({ animatedIndex, animatedPosition } = arg0);
  const style = useMemo(() => {
    const items = [backgroundStyle(outer1_1[3]).styles.container, backgroundStyle];
    return outer1_3.flatten(items);
  }, items);
  if (null == backgroundComponent) {
    backgroundComponent = backgroundStyle(5320).BottomSheetBackground;
  }
  return <backgroundComponent pointerEvents="none" animatedIndex={animatedIndex} animatedPosition={animatedPosition} style={style} />;
});
memoResult.displayName = "BottomSheetBackgroundContainer";

export const BottomSheetBackgroundContainer = memoResult;
