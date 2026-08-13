// Module ID: 11364
// Function ID: 11365
// Name: AppealIngestionSpam
// Dependencies: [19, 17, 21, 4342, 11351, 5368, 1297, 2]
// Exports: default

// Module 11364 (AppealIngestionSpam)
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_4 = createCacheKey.createStyles({ container: { flex: 1, alignItems: "center", justifyContent: "center" } });
const result = require("jsxProd").fileFinishedImporting("modules/safety_hub/native/AppealIngestionSpam.tsx");

export default function AppealIngestionSpam() {
  const tmp = callback();
  let obj = { children: null };
  obj = { style: tmp.container, children: null };
  obj = { bottom: true, style: tmp.container, children: null };
  obj[2] = jsx(require(1297) /* Button */.LegacyText, { children: "TODO - SPAM" });
  obj[1] = jsx(require(5368) /* SafeAreaPaddingView */.SafeAreaPaddingView, { bottom: true, style: tmp.container, children: null });
  obj[0] = <View bottom style={tmp.container}>{null}</View>;
  return jsx(require(11351) /* AppealIngestionModal */.AppealIngestionModalScreen, { bottom: true, style: tmp.container, children: null });
};
