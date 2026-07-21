// Module ID: 5095
// Function ID: 43444
// Name: BottomSheetBackgroundContainer
// Dependencies: [460455936, 1728053248, 2013265939, 65, 31]

// Module 5095 (BottomSheetBackgroundContainer)
const _module = require(dependencyMap[0]);
const useMemo = _module.useMemo;
importDefault(dependencyMap[0]);
const StyleSheet = require(dependencyMap[1]).StyleSheet;
const jsx = require(dependencyMap[2]).jsx;
const memoResult = _module.memo(function BottomSheetBackgroundContainerComponent(arg0) {
  let animatedIndex;
  let animatedPosition;
  let backgroundComponent;
  let backgroundStyle;
  ({ backgroundComponent, backgroundStyle } = arg0);
  const require = backgroundStyle;
  const items = [backgroundStyle];
  ({ animatedIndex, animatedPosition } = arg0);
  const style = useMemo(() => {
    const items = [backgroundStyle(closure_1[3]).styles.container, backgroundStyle];
    return closure_3.flatten(items);
  }, items);
  if (null == backgroundComponent) {
    backgroundComponent = require(dependencyMap[4]).BottomSheetBackground;
  }
  return <backgroundComponent pointerEvents="none" animatedIndex={animatedIndex} animatedPosition={animatedPosition} style={style} />;
});
memoResult.displayName = "BottomSheetBackgroundContainer";

export const BottomSheetBackgroundContainer = memoResult;
