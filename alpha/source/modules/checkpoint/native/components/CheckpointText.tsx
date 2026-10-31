// Module ID: 13624
// Function ID: 13625
// Name: CheckpointText
// Dependencies: [19, 6066, 21, 13614, 5624, 2]
// Exports: default

// Module 13624 (CheckpointText)
import Fragment from "Fragment" /* 21 */;
import Text_Text from "Text/Text" /* 5624 */;
import CheckpointConstants from "CheckpointConstants" /* 6066 */;
import CheckpointStepHeaderRefContextDefault from "CheckpointStepHeaderRefContext" /* 13614 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
const jsx = Fragment.jsx;
let closure_5 = { color: CHECKPOINT_PRIMARY };
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointText.tsx");

export default function CheckpointText(isStepHeading) {
  let children;
  let items;
  let str;
  let style;
  let tmp5;
  let flag = isStepHeading.isStepHeading;
  ({ children, style } = isStepHeading);
  if (flag === undefined) {
    flag = false;
  }
  const merged = Object.assign(isStepHeading, Object.assign({ children: 0, style: 0, isStepHeading: 0 }));
  const context = react.useContext(CheckpointStepHeaderRefContextDefault);
  const obj = { accessibilityRole: str, ref: tmp5, style: items, children };
  const Text = Text_Text.Text;
  const merged1 = Object.assign(merged);
  str = "header";
  const tmp3 = jsx;
  if (!flag) {
    str = merged.accessibilityRole;
  }
  tmp5 = undefined;
  if (flag) {
    tmp5 = context;
  }
  items = [closure_5, style];
  return tmp3(Text, obj);
};
