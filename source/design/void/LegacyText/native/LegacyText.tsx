// Module ID: 7528
// Function ID: 60230
// Dependencies: [0, 0, 0, 0, 0, 0]

// Module 7528
import { Text } from "result";
import { jsx } from "result";
import result from "result";
import importAllResult from "result";
import result from "result";

let closure_2 = result.createStyles({ text: { fontFamily: require("result").Fonts.PRIMARY_MEDIUM, includeFontPadding: false } });
const obj = { fontFamily: require("result").Fonts.PRIMARY_MEDIUM, includeFontPadding: false };
result = result.fileFinishedImporting("design/void/LegacyText/native/LegacyText.tsx");

export default importAllResult.forwardRef((arg0, ref) => {
  let children;
  let style;
  ({ style, children } = arg0);
  let obj = Object.create(null);
  obj.style = 0;
  obj.children = 0;
  const merged = Object.assign(arg0, obj);
  obj = { ref };
  const merged1 = Object.assign(merged);
  const items = [callback().text, style];
  obj["style"] = items;
  obj["children"] = children;
  return <Text {...obj} />;
});
