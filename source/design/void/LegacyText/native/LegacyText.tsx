// Module ID: 7668
// Function ID: 60910
// Dependencies: [31, 27, 653, 33, 4130, 7669, 2]

// Module 7668
import { Text } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

const require = arg1;
let closure_4 = _createForOfIteratorHelperLoose.createStyles({ text: { fontFamily: require("ME").Fonts.PRIMARY_MEDIUM, includeFontPadding: false } });
let obj = { fontFamily: require("ME").Fonts.PRIMARY_MEDIUM, includeFontPadding: false };
const forwardRefResult = importAllResult.forwardRef((arg0, ref) => {
  let children;
  let style;
  ({ style, children } = arg0);
  let obj = Object.create(null);
  obj.style = 0;
  obj.children = 0;
  const merged = Object.assign(arg0, obj);
  obj = require(7669) /* useLegacyTextMigrationHighlight */;
  obj = { ref };
  const legacyTextMigrationHighlight = obj.useLegacyTextMigrationHighlight();
  const merged1 = Object.assign(merged);
  const items = [callback().text, style, legacyTextMigrationHighlight];
  obj["style"] = items;
  obj["children"] = children;
  return <Text ref={arg1} />;
});
const result = require("ME").fileFinishedImporting("design/void/LegacyText/native/LegacyText.tsx");

export default forwardRefResult;
