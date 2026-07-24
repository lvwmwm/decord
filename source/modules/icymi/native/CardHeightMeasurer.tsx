// Module ID: 15294
// Function ID: 116670
// Name: CardHeightMeasurer
// Dependencies: [31, 27, 33, 15227, 8365, 2]

// Module 15294 (CardHeightMeasurer)
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const memoResult = importAllResult.memo((children) => {
  const itemId = children.itemId;
  const items = [itemId];
  return <View onLayout={importAllResult.useCallback((nativeEvent) => {
    outer1_1(outer1_2[4]).setCardHeight(itemId, nativeEvent.nativeEvent.layout.height);
  }, items)} pointerEvents="box-none" style={{ width: importAllResult.useContext(itemId(15227).ICYMIContext).width, alignSelf: "center" }}>{arg0.children}</View>;
});
const result = require("jsxProd").fileFinishedImporting("modules/icymi/native/CardHeightMeasurer.tsx");

export const CardHeightMeasurer = memoResult;
