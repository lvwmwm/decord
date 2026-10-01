// Module ID: 14452
// Function ID: 14453
// Name: FamilyCenterEmpty
// Dependencies: [19, 17, 21, 4836, 14453, 4832, 2]
// Exports: default

// Module 14452 (FamilyCenterEmpty)
import Text_Text from "Text/Text" /* 4832 */;
import AssetRegistryDefault from "AssetRegistry" /* 14453 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
({ View: c3, Image: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ art: { marginBottom: 10, width: 243 }, empty: { display: "flex", alignItems: "center" } });
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterEmpty.tsx");

export default function FamilyCenterEmpty(text) {
  let items;
  text = text.text;
  const tmp = closure_7();
  const obj = { style: tmp.empty, children: items };
  items = [, ];
  const obj2 = { source: AssetRegistryDefault, style: tmp.art, resizeMethod: "scale" };
  items[0] = hasOwnProperty(React3, obj2);
  items[1] = hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", color: "text-muted", children: text });
  return metroRequire(_false, obj);
};
