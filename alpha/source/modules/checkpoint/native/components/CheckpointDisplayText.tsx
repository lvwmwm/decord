// Module ID: 13606
// Function ID: 13607
// Name: CheckpointDisplayText
// Dependencies: [19, 21, 13587, 2]
// Exports: default

// Module 13606 (CheckpointDisplayText)
import Fragment from "Fragment" /* 21 */;
import CheckpointTextDefault from "CheckpointText" /* 13587 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let closure_3 = { fontSize: 56, lineHeight: 72, letterSpacing: -2.24, marginTop: -15, marginBottom: -16 };
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointDisplayText.tsx");

export default function CheckpointDisplayText(style) {
  style = style.style;
  const merged = Object.assign(style, Object.assign({ style: 0 }));
  CheckpointTextDefault;
  const merged1 = Object.assign(merged);
  const items = [closure_3, style];
  return <tmp2 variant="display-lg" style={items} />;
};
