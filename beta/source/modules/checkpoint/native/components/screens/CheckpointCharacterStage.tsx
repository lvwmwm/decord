// Module ID: 15255
// Function ID: 15256
// Name: CheckpointCharacterStage
// Dependencies: [17, 21, 4836, 576, 4832, 2]
// Exports: default

// Module 15255 (CheckpointCharacterStage)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4832 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let obj = { container: { flexGrow: 1, justifyContent: "center", alignItems: "center", gap: nativeDefault.space.PX_12 } };
({ flexGrow: 1, justifyContent: "center", alignItems: "center", gap: nativeDefault.space.PX_12 });
let closure_5 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/CheckpointCharacterStage.tsx");

export default function CheckpointCharacterStage(stage) {
  let items;
  stage = stage.stage;
  const obj = { style: closure_5().container, children: items };
  items = [_false(Text_Text.Text, { color: "text-muted", variant: "text-md/medium", children: "Character Stage" }), _false(Text_Text.Text, { color: "text-muted", variant: "text-md/medium", children: stage })];
  return React3(View, obj);
};
