// Module ID: 7112
// Function ID: 7113
// Name: TableRowTrailingText
// Dependencies: [19, 21, 5747, 2]
// Exports: TableRowTrailingText

// Module 7112 (TableRowTrailingText)
import Fragment from "Fragment" /* 21 */;
import Text_Text from "Text/Text" /* 5747 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("design/components/TableRow/native/TableRowTrailingText.native.tsx");

export function TableRowTrailingText(children) {
  return jsx(Text_Text.Text, { variant: "text-sm/medium", color: "text-muted", lineClamp: 1, children: children.text });
}
