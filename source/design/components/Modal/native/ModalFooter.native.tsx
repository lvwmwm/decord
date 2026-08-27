// Module ID: 11418
// Function ID: 11419
// Name: ModalFooter
// Dependencies: [19, 17, 21, 4445, 2]
// Exports: ModalFooter

// Module 11418 (ModalFooter)
import noopAll from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

noopAll;
let closure_2 = createCacheKey.createStyles({ footer: { flexDirection: "column", paddingVertical: 16, paddingHorizontal: 24 } });
const result = require("set").fileFinishedImporting("design/components/Modal/native/ModalFooter.native.tsx");

export const ModalFooter = function ModalFooter(children) {
  return <View style={callback().footer}>{arg0.children}</View>;
};
