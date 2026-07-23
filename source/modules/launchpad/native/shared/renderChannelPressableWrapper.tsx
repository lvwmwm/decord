// Module ID: 15660
// Function ID: 120812
// Name: items
// Dependencies: [31, 27, 33, 15659, 2]
// Exports: default

// Module 15660 (items)
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const items = [require("items")().layout.margin, { flex: 1, flexDirection: "row", alignItems: "center" }];
const result = require("jsxProd").fileFinishedImporting("modules/launchpad/native/shared/renderChannelPressableWrapper.tsx");

export default function renderChannelPressableWrapper(children) {
  return <View style={items}>{arg0}</View>;
};
