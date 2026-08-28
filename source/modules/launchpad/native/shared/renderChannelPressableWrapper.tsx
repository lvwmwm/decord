// Module ID: 16489
// Function ID: 16490
// Name: items
// Dependencies: [19, 17, 21, 16488, 2]
// Exports: default

// Module 16489 (items)
import noopAll from "noop" /* 19 */;
import getLayoutStyleDefault from "getLayoutStyle" /* 16488 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

noopAll;
const items = [getLayoutStyleDefault().layout.margin, { flex: 1, flexDirection: "row", alignItems: "center" }];
const result = require("set").fileFinishedImporting("modules/launchpad/native/shared/renderChannelPressableWrapper.tsx");

export default function renderChannelPressableWrapper(children) {
  return <View style={items}>{arg0}</View>;
};
