// Module ID: 11380
// Function ID: 11381
// Name: AppealIngestionThanks
// Dependencies: [19, 17, 21, 4342, 11368, 5389, 1297, 2]
// Exports: default

// Module 11380 (AppealIngestionThanks)
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_4 = createCacheKey.createStyles({ container: { flex: 1, alignItems: "center", justifyContent: "center" } });
const result = require("jsxProd").fileFinishedImporting("modules/safety_hub/native/AppealIngestionThanks.tsx");

export default function AppealIngestionThanks() {
  const tmp = callback();
  let obj = { children: null };
  obj = { style: tmp.container, children: null };
  obj = { bottom: true, style: tmp.container, children: null };
  obj[2] = jsx(require(1297) /* Button */.LegacyText, { children: "TODO - Thanks" });
  obj[1] = jsx(require(5389) /* SafeAreaPaddingView */.SafeAreaPaddingView, { bottom: true, style: tmp.container, children: null });
  obj[0] = <View bottom style={tmp.container}>{null}</View>;
  return jsx(require(11368) /* AppealIngestionModal */.AppealIngestionModalScreen, { bottom: true, style: tmp.container, children: null });
};
