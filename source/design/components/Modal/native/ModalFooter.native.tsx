// Module ID: 11926
// Function ID: 11927
// Name: ModalFooter
// Dependencies: [19, 17, 21, 4560, 2]
// Exports: ModalFooter

// Module 11926 (ModalFooter)
import noopAll from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

noopAll;
let closure_2 = createCacheKey.createStyles({ footer: { flexDirection: "column", paddingVertical: 16, paddingHorizontal: 24 } });
const result = require("set").fileFinishedImporting("design/components/Modal/native/ModalFooter.native.tsx");

export const ModalFooter = function ModalFooter(children) {
  return <View style={callback().footer}>{arg0.children}</View>;
};
