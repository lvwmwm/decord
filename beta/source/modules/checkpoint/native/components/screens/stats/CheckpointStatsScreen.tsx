// Module ID: 15265
// Function ID: 15266
// Name: CheckpointStatsScreen
// Dependencies: [17, 21, 4836, 576, 15260, 15262, 2]
// Exports: default

// Module 15265 (CheckpointStatsScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import CheckpointScreenDefault from "CheckpointScreen" /* 15260 */;
import CheckpointTextDefault from "CheckpointText" /* 15262 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let obj = { container: obj2, name: { textTransform: "uppercase" } };
obj2 = { flexGrow: 1, justifyContent: "center", gap: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_64 };
let closure_5 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointStatsScreen.tsx");

export default function CheckpointStatsScreen(name) {
  let items;
  let obj2;
  name = name.name;
  const tmp = closure_5();
  const obj = { children: React3(View, obj2) };
  obj2 = { style: tmp.container, children: items };
  items = [, ];
  const tmp2 = CheckpointScreenDefault;
  items[0] = _false(CheckpointTextDefault, { variant: "eyebrow", children: "Stats screen" });
  const obj3 = { variant: "display-md", style: tmp.name, adjustsFontSizeToFit: true, lineClamp: 2, children: name };
  items[1] = _false(CheckpointTextDefault, obj3);
  return _false(tmp2, obj);
};
