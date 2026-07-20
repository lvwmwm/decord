// Module ID: 15114
// Function ID: 114078
// Name: CardHeightMeasurer
// Dependencies: []

// Module 15114 (CardHeightMeasurer)
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
const memoResult = importAllResult.memo((children) => {
  const itemId = children.itemId;
  const arg1 = itemId;
  const items = [itemId];
  return <View onLayout={importAllResult.useCallback((nativeEvent) => {
    callback(closure_2[4]).setCardHeight(itemId, nativeEvent.nativeEvent.layout.height);
  }, items)} pointerEvents="box-none" style={{ width: importAllResult.useContext(arg1(dependencyMap[3]).ICYMIContext).width, alignSelf: "center" }}>{arg0.children}</View>;
});
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/icymi/native/CardHeightMeasurer.tsx");

export const CardHeightMeasurer = memoResult;
