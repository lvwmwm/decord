// Module ID: 15262
// Function ID: 15263
// Name: CheckpointText
// Dependencies: [5061, 21, 4832, 2]
// Exports: default

// Module 15262 (CheckpointText)
import Fragment from "Fragment" /* 21 */;
import Text_Text from "Text/Text" /* 4832 */;
import CheckpointConstants from "CheckpointConstants" /* 5061 */;
import size from "module_2" /* 2 */;

const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
const jsx = Fragment.jsx;
let closure_3 = { color: CHECKPOINT_PRIMARY };
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointText.tsx");

export default function CheckpointText(arg0) {
  let children;
  let style;
  ({ children, style } = arg0);
  const merged = Object.assign(arg0, Object.assign({ children: 0, style: 0 }));
  const Text = Text_Text.Text;
  const merged1 = Object.assign(merged);
  const items = [closure_3, style];
  return <Text style={items}>{children}</Text>;
};
