// Module ID: 15304
// Function ID: 116798
// Name: CardHeightMeasurer
// Dependencies: [31, 27, 33, 15237, 8123, 2]

// Module 15304 (CardHeightMeasurer)
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const memoResult = importAllResult.memo((children) => {
  const itemId = children.itemId;
  const items = [itemId];
  return <View onLayout={importAllResult.useCallback((nativeEvent) => {
    outer1_1(outer1_2[4]).setCardHeight(itemId, nativeEvent.nativeEvent.layout.height);
  }, items)} pointerEvents="box-none" style={{ width: importAllResult.useContext(itemId(15237).ICYMIContext).width, alignSelf: "center" }}>{arg0.children}</View>;
});
const result = require("jsxProd").fileFinishedImporting("modules/icymi/native/CardHeightMeasurer.tsx");

export const CardHeightMeasurer = memoResult;
