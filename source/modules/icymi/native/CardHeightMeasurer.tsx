// Module ID: 16444
// Function ID: 16445
// Name: CardHeightMeasurer
// Dependencies: [19, 17, 21, 16377, 8281, 2]

// Module 16444 (CardHeightMeasurer)
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let c3 = importAllResult;
const memoResult = importAllResult.memo((children) => {
  const itemId = children.itemId;
  const items = [itemId];
  return <View onLayout={importAllResult.useCallback((nativeEvent) => {
    closure_1_1(closure_1_2[4]).setCardHeight(itemId, nativeEvent.nativeEvent.layout.height);
  }, items)} pointerEvents="box-none" style={{ width: importAllResult.useContext(itemId(16377).ICYMIContext).width, alignSelf: "center" }}>{arg0.children}</View>;
});
const result = require("set").fileFinishedImporting("modules/icymi/native/CardHeightMeasurer.tsx");

export const CardHeightMeasurer = memoResult;
