// Module ID: 15443
// Function ID: 117660
// Dependencies: [31, 27, 33, 4165, 5193, 3878, 4161, 2]

// Module 15443
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let require = arg1;
let closure_6 = _createForOfIteratorHelperLoose.createStyles({ container: { justifyContent: "center", alignItems: "center", height: "100%", display: "flex" }, text: { textAlign: "center", width: "75%" } });
const memoResult = importAllResult.memo((text) => {
  text = text.text;
  const require = text;
  const tmp = callback();
  const items = [text];
  const effect = importAllResult.useEffect(() => {
    const AccessibilityAnnouncer = text(outer1_2[5]).AccessibilityAnnouncer;
    AccessibilityAnnouncer.announce(closure_0, "polite");
  }, items);
  obj = { style: items1, children: jsx(require(4161) /* Text */.Text, obj) };
  items1 = [tmp.container, { paddingBottom: importDefault(5193)({ includeKeyboardHeight: true }).insets.bottom }];
  obj = { variant: "text-sm/medium", color: "text-muted", style: tmp.text, children: text };
  return <View variant="text-sm/medium" color="text-muted" style={tmp.text}>{text}</View>;
});
const result = require("jsxProd").fileFinishedImporting("modules/search/native/components/tabs/pages/ErrorScreen.tsx");

export default memoResult;
