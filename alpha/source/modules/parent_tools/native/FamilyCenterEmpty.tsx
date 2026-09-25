// Module ID: 14428
// Function ID: 14429
// Name: FamilyCenterEmpty
// Dependencies: [19, 17, 21, 4829, 14429, 4825, 2]
// Exports: default

// Module 14428 (FamilyCenterEmpty)
import Text_Text from "Text/Text" /* 4825 */;
import _modDef14429 from "module_14429" /* 14429 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4829);
let closure_7 = createStyles.createStyles({ art: { marginBottom: 10, width: 243 }, empty: { display: "flex", alignItems: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterEmpty.tsx");

export default function FamilyCenterEmpty(children) {
  const tmp = closure_7();
  const obj = { style: tmp.empty, children: null };
  const items = [hasOwnProperty(React4, { source: _modDef14429, style: tmp.art, resizeMethod: "scale" }), hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", color: "text-muted", children: children.text })];
  obj.children = items;
  return timestampProducer(React3, obj);
};
