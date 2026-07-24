// Module ID: 15708
// Function ID: 121136
// Name: getStyles
// Dependencies: [31, 27, 33, 15706, 15709, 2]
// Exports: default

// Module 15708 (getStyles)
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";

function getStyles(arg0) {
  const items = [{ flex: 1, flexDirection: "row", alignItems: "center", position: "relative" }, { minHeight: arg0 - 2 * closure_4.layout.margin.marginVertical }, closure_4.container.padding];
  return items;
}
let closure_4 = require("items")();
const result = require("jsxProd").fileFinishedImporting("modules/launchpad/native/shared/renderChannelWrapper.tsx");

export default function renderChannelWrapper(children, fontScale) {
  return <View style={getStyles(importDefault(15709)(arg1.fontScale))}>{arg0}</View>;
};
