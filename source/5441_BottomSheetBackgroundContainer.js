// Module ID: 5441
// Function ID: 5442
// Name: BottomSheetBackgroundContainer
// Dependencies: [19, 17, 21, 5442, 5443]

// Module 5441 (BottomSheetBackgroundContainer)
import noop from "noop";
import "noop";
import { StyleSheet } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const useMemo = noop.useMemo;
const memoResult = noop.memo((arg0) => {
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
  if (backgroundComponent == null) {
    backgroundComponent = backgroundStyle(5443).BottomSheetBackground;
  }
  return <backgroundComponent pointerEvents="none" animatedIndex={animatedIndex} animatedPosition={animatedPosition} style={style} />;
});
memoResult.displayName = "BottomSheetBackgroundContainer";

export const BottomSheetBackgroundContainer = memoResult;
