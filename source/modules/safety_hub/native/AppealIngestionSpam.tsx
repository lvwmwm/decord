// Module ID: 11840
// Function ID: 11841
// Name: AppealIngestionSpam
// Dependencies: [19, 17, 21, 4481, 11818, 7063, 1296, 2]
// Exports: default

// Module 11840 (AppealIngestionSpam)
import noopAll from "noop" /* 19 */;
import Button from "Button" /* 1296 */;
import SafeAreaPaddingView from "SafeAreaPaddingView" /* 7063 */;
import AppealIngestionModal from "AppealIngestionModal" /* 11818 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4481 */;

require = arg1;
noopAll;
let closure_4 = createCacheKey.createStyles({ container: { flex: 1, alignItems: "center", justifyContent: "center" } });
const result = require("set").fileFinishedImporting("modules/safety_hub/native/AppealIngestionSpam.tsx");

export default function AppealIngestionSpam() {
  const tmp = callback();
  let obj = { children: null };
  obj = { style: tmp.container, children: null };
  obj = { bottom: true, style: tmp.container, children: jsx(Button.LegacyText, { children: "TODO - SPAM" }) };
  obj[1] = jsx(SafeAreaPaddingView.SafeAreaPaddingView, { bottom: true, style: tmp.container, children: jsx(Button.LegacyText, { children: "TODO - SPAM" }) });
  obj[0] = <View bottom style={tmp.container}>{jsx(Button.LegacyText, { children: "TODO - SPAM" })}</View>;
  return jsx(AppealIngestionModal.AppealIngestionModalScreen, { bottom: true, style: tmp.container, children: jsx(Button.LegacyText, { children: "TODO - SPAM" }) });
};
