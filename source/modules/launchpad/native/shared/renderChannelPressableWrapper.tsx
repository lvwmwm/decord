// Module ID: 16147
// Function ID: 16148
// Name: items
// Dependencies: [19, 17, 21, 16146, 2]
// Exports: default

// Module 16147 (items)
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const items = [require("getLayoutStyle")().layout.margin, { flex: 1, flexDirection: "row", alignItems: "center" }];
const result = require("jsxProd").fileFinishedImporting("modules/launchpad/native/shared/renderChannelPressableWrapper.tsx");

export default function renderChannelPressableWrapper(children) {
  return <View style={items}>{arg0}</View>;
};
