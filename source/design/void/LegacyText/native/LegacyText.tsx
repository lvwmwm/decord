// Module ID: 8217
// Function ID: 8218
// Dependencies: [19, 17, 676, 21, 4444, 8218, 2]

// Module 8217
import useLegacyTextMigrationHighlight from "useLegacyTextMigrationHighlight" /* 8218 */;
import { Text } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
let closure_4 = createCacheKey.createStyles({ text: { fontFamily: require("ME").Fonts.PRIMARY_MEDIUM, includeFontPadding: false } });
let obj = { fontFamily: require("ME").Fonts.PRIMARY_MEDIUM, includeFontPadding: false };
const forwardRefResult = importAllResult.forwardRef((arg0, ref) => {
  ({ style, children } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  let obj = useLegacyTextMigrationHighlight;
  obj = { ref };
  const legacyTextMigrationHighlight = obj.useLegacyTextMigrationHighlight();
  const merged1 = Object.assign(merged);
  const items = [callback().text, style, legacyTextMigrationHighlight];
  obj.style = items;
  obj.children = children;
  return <Text ref={arg1} />;
});
const result = require("set").fileFinishedImporting("design/void/LegacyText/native/LegacyText.tsx");

export default forwardRefResult;
