// Module ID: 13437
// Function ID: 13438
// Name: ModalDisclaimer
// Dependencies: [19, 17, 21, 4303, 4299, 2]
// Exports: ModalDisclaimer

// Module 13437 (ModalDisclaimer)
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_4 = createCacheKey.createStyles({ container: { flexDirection: "column", alignItems: "center" }, disclaimer: { marginBottom: 12 } });
const result = require("jsxProd").fileFinishedImporting("design/components/Modal/native/ModalDisclaimer.native.tsx");

export const ModalDisclaimer = function ModalDisclaimer(children) {
  const tmp = callback();
  obj = { style: tmp.container, children: jsx(require(4299) /* Text */.Text, obj) };
  obj = { variant: "text-xs/medium", color: "text-muted", style: tmp.disclaimer, children: children.children };
  return <View variant="text-xs/medium" color="text-muted" style={tmp.disclaimer}>{arg0.children}</View>;
};
