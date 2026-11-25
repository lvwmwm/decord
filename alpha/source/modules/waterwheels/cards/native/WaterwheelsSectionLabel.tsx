// Module ID: 17960
// Function ID: 17961
// Name: WaterwheelsSectionLabel
// Dependencies: [19, 17, 21, 5012, 575, 5603, 2]
// Exports: default

// Module 17960 (WaterwheelsSectionLabel)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5603 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5012 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let obj = { label: obj2, text: { flexShrink: 1 } };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_5 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/waterwheels/cards/native/WaterwheelsSectionLabel.tsx");

export default function WaterwheelsSectionLabel(arg0) {
  let icon;
  let items;
  let text;
  ({ icon, text } = arg0);
  const tmp = closure_5();
  const obj = { style: tmp.label, children: items };
  items = [icon, ];
  const obj2 = { variant: "body-sm/medium", color: "text-muted", style: tmp.text, children: text };
  items[1] = _false(Text_Text.Heading, obj2);
  return React3(View, obj);
};
