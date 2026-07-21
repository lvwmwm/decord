// Module ID: 7527
// Function ID: 60218
// Dependencies: [0, 0, 0, 0, 0, 0]

// Module 7527
import { Text } from "__exportStarResult1";
import { jsx } from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import importAllResult from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

let closure_2 = __exportStarResult1.createStyles({ text: { fontFamily: require("__exportStarResult1").Fonts.PRIMARY_MEDIUM, includeFontPadding: false } });
const obj = { fontFamily: require("__exportStarResult1").Fonts.PRIMARY_MEDIUM, includeFontPadding: false };
const result = __exportStarResult1.fileFinishedImporting("design/void/LegacyText/native/LegacyText.tsx");

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
