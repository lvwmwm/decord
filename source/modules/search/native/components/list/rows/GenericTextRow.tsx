// Module ID: 15374
// Function ID: 117333
// Dependencies: [5, 31, 27, 33, 4130, 4126, 15346, 2]

// Module 15374
import Text from "Text";
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let require = arg1;
let closure_6 = _createForOfIteratorHelperLoose.createStyles({ title: { flexDirection: "row" }, container: { padding: 10 } });
const memoResult = importAllResult.memo(function GenericTextRow(text) {
  let accessibilityActions;
  let icon;
  let onAccessibilityAction;
  let onPress;
  let trailing;
  text = text.text;
  const require = text;
  ({ icon, onPress } = text);
  ({ trailing, accessibilityActions, onAccessibilityAction } = text);
  const tmp2 = callback2();
  // CreateGeneratorClosureLongIndex (0x67)
  const items = [onPress, text];
  let obj = { style: tmp2.title };
  callback = importAllResult.useCallback(callback(tmp), items);
  obj = { lineClamp: 1, variant: "text-md/medium", color: "mobile-text-heading-primary", style: tmp2.container, children: text };
  obj.children = jsx(require(onPress[5]).Text, { lineClamp: 1, variant: "text-md/medium", color: "mobile-text-heading-primary", style: tmp2.container, children: text });
  obj = {};
  let tmp6 = null != icon;
  if (tmp6) {
    tmp6 = <icon size="sm" color="mobile-text-heading-primary" />;
  }
  obj.icon = tmp6;
  obj.label = <View />;
  obj.onPress = callback;
  obj.trailing = trailing;
  obj.accessibilityActions = accessibilityActions;
  obj.onAccessibilityAction = onAccessibilityAction;
  return jsx(require(onPress[6]).SearchListRow, {});
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/search/native/components/list/rows/GenericTextRow.tsx");

export default memoResult;
